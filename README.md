

#  Trident Autobot Assistant – Chrome AI Extension

Trident Autobot Assistant is a **powerful AI Chrome extension** that integrates **OpenAI GPT**, **Google Gemini**, and **Ollama** models into your browser. It allows users to run prompts directly from the browser, providing fast and accurate AI responses with a modern and engaging UI inspired by futuristic, game-like themes (e.g., Call of Duty/Transformers).

---

##  **Table of Contents**
- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [How It Works](#how-it-works)
- [Future Enhancements](#future-enhancements)
- [Screenshots](#screenshots)
- [Why This Project is Impressive](#why-this-project-is-impressive)
- [License](#license)

---

##  **Overview**
- **Purpose:** Provides an in-browser AI assistant that combines multiple AI providers in a single interface.
- **AI Providers Supported:**
  - **OpenAI GPT (e.g., GPT-4o-mini)**
  - **Google Gemini (Gemini 1.5 Flash)**
  - **Ollama (Local LLaMA 3 models)**
- **Why?** To create a single, streamlined AI tool for **summarization, Q&A, brainstorming**, and **real-time AI responses**.

---

##  **Key Features**
- **Multi-AI Support:** Select from OpenAI, Gemini, or Ollama.
- **Local + Cloud AI:** Combine local inference (Ollama) with cloud AI APIs.
- **Real-time Typing Animation:** See text generate dynamically (no boring loading screens).
- **Call of Duty/Transformers UI Theme:** A bold and futuristic design with modern fonts and colors.
- **Chrome Extension Architecture:** Fully packaged and ready to install.
- **Custom Floating Box UI:** Displays AI responses in a stylish, movable UI panel.
- **Configurable API Keys:** Secure API keys through `config.js` (not committed to GitHub).
- **Lightweight and Fast:** Optimized for performance and minimal memory usage.

---

##  **Tech Stack**
- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **Browser APIs:** Chrome Extension APIs (background, content scripts)
- **AI APIs:**
  - OpenAI API
  - Google Gemini API
  - Ollama REST API (`http://127.0.0.1:11434`)
- **UI/UX:** Custom styling with Call of Duty / Transformers inspired design

---

##  **File Structure**
trident-ai-assistant/
├── icon16.png
├── icon48.png
├── icon128.png
├── manifest.json
├── src/
│ ├── popup.html # Main popup interface
│ ├── popup.js # Handles UI interactions
│ ├── background.js # Background service logic
│ ├── options.html # Options page for settings
│ ├── options.js # Logic for options page
│ ├── contentScript.js # Injects floating box UI
│ └── providers/
│ ├── openai.js # Handles OpenAI requests
│ ├── gemini.js # Handles Gemini requests
│ └── ollama.js # Handles local Ollama calls

---

## ⚙ **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/atharvashinde95/trident-autobot-assistant.git
cd trident-autobot-assistant

npm init -y
cp src/config.template.js src/config.js
Fill in your OpenAI and Gemini API keys in src/config.js.

Load the Extension in Chrome

Go to chrome://extensions/

Enable Developer Mode

Click Load unpacked

Select the trident-ai-assistant/ folder

How It Works
The user enters a prompt in the popup.

The extension sends the request to the selected provider (OpenAI, Gemini, or Ollama).

Ollama requests hit a local server (http://127.0.0.1:11434) for local model inference.

The response is dynamically typed in the output box with a typing animation.

---
