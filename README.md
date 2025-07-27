@"
# Trident Autobot Assistant – Chrome AI Extension

![image alt](https://github.com/atharvashinde95/trident-autobot-assistant/blob/6fa75b27fce74565cb7b38c77364434040da7af0/Screenshot%202025-07-28%20011826.png)
![image alt](https://github.com/atharvashinde95/trident-autobot-assistant/blob/6fa75b27fce74565cb7b38c77364434040da7af0/Screenshot%202025-07-28%20011826.png)
![image alt](https://github.com/atharvashinde95/trident-autobot-assistant/blob/d7376ee6d28a3c93bae5f8dc1430a7f2b7b40a81/Screenshot%202025-07-28%20011859.png)

Trident Autobot Assistant is a **powerful AI Chrome extension** that integrates **OpenAI GPT**, **Google Gemini**, and **Ollama** models into your browser. It allows users to run prompts directly from the browser, providing fast and accurate AI responses with a modern and engaging UI inspired by futuristic, game-like themes (e.g., Call of Duty/Transformers).

---

## **Table of Contents**
- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [How It Works](#how-it-works)
- [Future Enhancements](#future-enhancements)
- [Screenshots](#screenshots)
- [Why This Project is Impressive](#why-this-project-is-impressive)

---

## **Overview**
- **Purpose:** Provides an in-browser AI assistant that combines multiple AI providers in a single interface.
- **AI Providers Supported:**
  - **OpenAI GPT (e.g., GPT-4o-mini)**
  - **Google Gemini (Gemini 1.5 Flash)**
  - **Ollama (Local LLaMA 3 models)**
- **Why?** To create a single, streamlined AI tool for **summarization, Q&A, brainstorming**, and **real-time AI responses**.

---

## **Key Features**
- **Multi-AI Support:** Select from OpenAI, Gemini, or Ollama.
- **Local + Cloud AI:** Combine local inference (Ollama) with cloud AI APIs.
- **Real-time Typing Animation:** See text generate dynamically (no boring loading screens).
- **Call of Duty/Transformers UI Theme:** A bold and futuristic design with modern fonts and colors.
- **Chrome Extension Architecture:** Fully packaged and ready to install.
- **Custom Floating Box UI:** Displays AI responses in a stylish, movable UI panel.
- **Configurable API Keys:** Secure API keys through `config.js`.
- **Lightweight and Fast:** Optimized for performance and minimal memory usage.

---

## **Tech Stack**
- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **Browser APIs:** Chrome Extension APIs (background, content scripts)
- **AI APIs:**
  - OpenAI API
  - Google Gemini API
  - Ollama REST API (`http://127.0.0.1:11434`)
- **UI/UX:** Custom styling with Call of Duty / Transformers inspired design

---

## **Setup Instructions**

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/atharvashinde95/trident-autobot-assistant.git
cd trident-autobot-assistant
\`\`\`

### 2. Configure API Keys
Copy `src/config.template.js` to `src/config.js` and fill in your API keys:
\`\`\`bash
cp src/config.template.js src/config.js
\`\`\`

### 3. Load the Extension in Chrome
1. Open `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the project folder (`trident-ai-assistant/`)

---

## **How It Works**
1. The user enters a prompt in the popup UI.
2. The extension sends the request to the chosen provider (OpenAI, Gemini, or Ollama).
3. For Ollama, the request hits the local server at `http://127.0.0.1:11434`.
4. The response is displayed with a **typing animation** in real-time.

---

## **Future Enhancements**
- Add voice command support.
- Support for more AI providers (Claude, Mistral).
- Theme customization (switch between futuristic themes).

---

## **Why This Project is Impressive**
- **Shows ability to integrate multiple AI providers** (local + cloud).
- **UI/UX Focused** – attractive game-inspired interface.
- **Secure API Handling** – API keys not exposed.
- **Chrome Extension Development Skills** – background scripts, content scripts, and messaging system.

---

"@ > README.md
