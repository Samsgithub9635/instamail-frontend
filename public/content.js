console.log("InstaMail AI loaded successfully ! 👍");

const getEmailContent = () => {
    const quoteBlock = document.querySelector('.gmail_quote');
    if (quoteBlock) {
        return quoteBlock.innerText.trim();
    }
    return '';
}

// This function now clones Gmail's own button to ensure a perfect style match.
const createAIButton = (sendButtonNode) => {
    // 1. Clone the Send button to inherit all its styles.
    const button = sendButtonNode.cloneNode(true);

    // 2. Remove any original ID and add our own class for identification.
    button.id = '';
    button.className = 'T-I J-J5-Ji T-I-atl L3 instamail-ai-button';

    // 3. Update the button's visual content and text.
    button.innerHTML = `<span>✨ InstaMail Reply</span>`;
    
    // 4. Add a small margin for spacing and update the tooltip.
    button.style.marginLeft = '8px';
    button.setAttribute('data-tooltip', 'Generate Reply with InstaMail AI');
    
    return button;
}

function injectButton() {
    const existingButton = document.querySelector('.instamail-ai-button');
    if (existingButton) return;

    const sendButton = document.querySelector('div[role="button"][data-tooltip^="Send"]');
    if (!sendButton) return;

    const button = createAIButton(sendButton); // Pass the send button to be cloned
    const originalButtonContent = button.innerHTML;

    button.addEventListener('click', async () => {
        try {
            button.innerText = 'Generating...';
            button.style.opacity = '0.7';
            button.disabled = true;

            const emailContent = getEmailContent();
            
            const response = await fetch('http://localhost:8080/api/email/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ emailContent: emailContent, tone: "professional" }) 
            });

            if (!response.ok) throw new Error('API request failed: ' + response.status);

            const generatedReply = await response.text();
            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            if (composeBox) {
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            }
        } catch (error) {
            console.error("Error in AI button click handler:", error);
            if (document.body.contains(button)) button.innerText = 'Error!';
        } finally {
            setTimeout(() => {
                if (document.body.contains(button)) {
                    button.innerHTML = originalButtonContent;
                    button.style.opacity = '1';
                    button.disabled = false;
                }
            }, 2000);
        }
    });

    // 5. Place the new button immediately after the original Send button.
    sendButton.insertAdjacentElement('afterend', button);
}

const observer = new MutationObserver(() => {
    // This observer just checks if the conditions are right to inject the button.
    const sendButton = document.querySelector('div[role="button"][data-tooltip^="Send"]');
    const buttonExists = document.querySelector('.instamail-ai-button');

    if (sendButton && !buttonExists) {
        injectButton();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
