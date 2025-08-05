# InstaMail AI - Your AI-Powered Email Assistant

### Communicate with Confidence and Clarity

InstaMail AI is a full-stack application featuring a powerful Chrome Extension that integrates directly into your Gmail interface, allowing you to generate professional, context-aware email replies in seconds. This repository contains the frontend code for both the Chrome Extension and a live web demo.

**[➡️ Live Web Demo](https://instamail-ai.netlify.app/)**

![InstaMail AI Demo](https://i.imgur.com/your-demo-gif-url.gif) 
*(Suggestion: Record a short screen capture of your extension in action, upload it to a site like imgur.com, and paste the link here.)*

---

## ✨ Features

* **Seamless Gmail Integration:** An "InstaMail Reply" button appears right next to the "Send" button in your compose window, feeling like a native part of the UI.
* **Standalone Web UI:** Use the full power of the AI generator directly from our [live web demo](https://instamail-ai.netlify.app/), no installation required.
* **Tone Adjustment:** Craft a reply that is professional, friendly, concise, or formal to perfectly match the situation.
* **Instant Generation:** Powered by a fast and secure backend, replies are generated in moments.
* **Extension Popup:** Access the UI quickly from the extension's popup icon in your Chrome toolbar.

## 🚀 How to Install the Chrome Extension

Since this extension is in active development, it is not yet on the Chrome Web Store. You can easily install it for free by following these steps:

### 1. Download the Extension

* Navigate to the [**Releases** page](https://github.com/Samsgithub9635/instamail-frontend/) of this repository.
* Under the latest release, download the `instamail-ai-extension.zip` file.
* Unzip the downloaded file on your computer. You will now have a folder containing the extension files (it will likely be named `dist`).

### 2. Install in Chrome

* Open Google Chrome and navigate to the extensions page by typing `chrome://extensions` in the address bar.
* In the top-right corner, turn on **"Developer mode"**.
* Click the **"Load unpacked"** button that appears on the top-left.
* In the file browser that opens, select the unzipped folder you downloaded in the previous step.
* The InstaMail AI extension will now appear in your list of extensions! Pin it to your toolbar for easy access.

### 3. How to Use

* **In Gmail:** Open any email and click "Reply". You will see a new "✨ InstaMail Reply" button in the compose window's toolbar.
* **From the Toolbar:** Click the InstaMail AI icon in your Chrome toolbar to open the popup UI.

---

## 🛠️ Tech Stack

* **Framework:** React (with Vite)
* **UI Library:** Material-UI
* **API Client:** Axios
* **Deployment:** Netlify

The backend for this project is a separate Spring Boot application. You can view its repository here: **[instamail-ai-backend](https://github.com/Samsgithub9635/instamail-ai-backend)**

---

## ⚙️ How to Run Locally (For Developers)

Follow these instructions to get the project running on your local machine for development.

### Prerequisites

* **Node.js** (v18 or later)
* **npm** or **yarn**

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)[your-username]/instamail-frontend.git
    cd instamail-frontend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    This will start the application on `http://localhost:5173`.
    ```sh
    npm run dev
    ```

4.  **Build for production:**
    This command creates the `dist` folder with the final, optimized files for deployment or for loading as an unpacked extension.
    ```sh
    npm run build
    ```
