# InstaMail AI – Your AI-Powered Email Assistant

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)  ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  

---

## Communicate with Confidence and Clarity

**InstaMail AI** is an enterprise-grade full-stack solution featuring an AI-powered Chrome Extension that seamlessly integrates within the Gmail UI. It empowers users to generate context-aware, professionally toned email replies within seconds—streamlining communication workflows and elevating productivity.

This repository hosts the **frontend** codebase for both the Chrome Extension and a live web demo, delivering a cohesive experience across devices.

**[➡️ Try the Live Web Demo Here](https://instamail-ai.netlify.app/)**

---

## 🚀 How InstaMail AI Works: Step-by-Step Visual Guide

### 0. This is how the GUI should look like 
![InstaMail AI UI](https://github.com/samrat21saha/instamail-frontend/blob/main/app%20demo/React%20UI.png)  

### 1. Paste Your Email Content  
Simply input the received email text into the web app or extension interface to begin.

![Pasting email content into the UI](https://github.com/samrat21saha/instamail-frontend/blob/main/app%20demo/email%20pasted%20in%20the%20ui.png)  
*Clean and intuitive interface optimized for swift user onboarding.*

### 2. Click on the "GENERATE INSTAMAIL REPLY" Button
Select the desired tone—Professional, Friendly, Formal, or Concise—and click "Generate". The system provides real-time feedback via a dynamic loading state.

![Button in a loading state](https://github.com/samrat21saha/instamail-frontend/blob/main/app%20demo/button%20loading.png)  
*Transparent processing status ensures user confidence and reduces uncertainty.*

### 3. View the AI-Generated Draft  
The polished, contextually relevant reply appears within seconds, ready for review and copy-paste action.

![The generated email reply](https://github.com/samrat21saha/instamail-frontend/blob/main/app%20demo/email%20generaed.png)  
*Final output emphasizes clarity, professionalism, and easy usability.*

### 4. Quick-Access Extension Popup, Click on the Instamail AI extension button
Access InstaMail AI from the Chrome toolbar popup anytime for immediate email response generation without leaving your workflow.

![Pasting mail into the popup](https://github.com/samrat21saha/instamail-frontend/blob/main/app%20demo/popup%20pasted%20mail.png)  
*Enables on-demand assistance, ensuring zero friction in communication.*

### 5. Seamless Gmail Integration – Native-Like UX  
The highlight feature is the native-appearing **Generate Reply** button embedded directly into Gmail’s UI. It triggers the AI reply generator popup, delivering an unmatched user experience and workflow efficiency.

![Gmail Integrated Button Demo](https://github.com/samrat21saha/instamail-frontend/blob/main/app%20demo/.Gmail%20Integration%20%E2%80%93%20Native-Like%20UX.mp4)  
*Experience the fluidity of the Gmail-mounted button and extension popup interaction.*

---

## ✨ Key Features

- **Native Gmail Integration:** Deep UI integration providing a frictionless, in-context email response assistant.  
- **Standalone Web Application:** Accessible via any device, ensuring flexibility and mobility.  
- **Adaptive Tone Settings:** Tailor your replies with multiple professional tone options.  
- **Rapid AI-Powered Generation:** Backend-powered with robust Spring Boot microservices for near-instant results.  
- **Quick-Access Chrome Toolbar Popup:** Stay productive with just a click from your browser toolbar.  
- **One-Click Copy to Clipboard:** Effortless transfer of generated replies into your email client.  

---

## 📥 Chrome Extension Installation Guide

Currently in active development and not yet published on the Chrome Web Store. Follow the steps below to install manually:

1. Navigate to the [**Releases** page](https://github.com/[your-username]/instamail-frontend/releases).  
2. Download the `instamail-ai-extension.zip` file from the latest release.  
3. Unzip to extract the extension folder (`dist`).  
4. Open Chrome and go to `chrome://extensions`.  
5. Enable **Developer mode** at the top right.  
6. Click **Load unpacked** and select the extracted `dist` folder.  
7. Pin the InstaMail AI extension icon for quick access.

---

## 🛠️ Tech Stack & System Architecture

| Layer       | Technology / Framework    | Role                              |
|-------------|---------------------------|----------------------------------|
| Frontend    | React + Vite              | UI & Extension Popup             |
| UI Library  | Material-UI               | Consistent, Responsive Components |
| API Client  | Axios                     | Backend Communication            |
| Backend     | Spring Boot (Separate Repo)| AI Processing & Business Logic   |
| Deployment  | Netlify                   | Frontend Hosting & CDN            |

*The modular architecture enables independent deployment, scalability, and robust maintenance.*

---

## ⚙️ Developer Setup: Running Locally

### Prerequisites  
- Node.js v18+  
- npm or yarn package manager  

### Steps  

```bash
# Clone the repository
git clone https://github.com/[your-username]/instamail-frontend.git
cd instamail-frontend

# Install dependencies
npm install

# Start development server (default: http://localhost:5173)
npm run dev

# Build production-ready assets
npm run build
