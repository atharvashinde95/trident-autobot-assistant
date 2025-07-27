import { runOpenAI } from './providers/openai.js';
import { runGemini } from './providers/gemini.js';
import { runOllama } from './providers/ollama.js';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'RUN_MODEL') {
    (async () => {
      const [provider, model] = message.model.split(':');
      const prompt = message.prompt;

      let result;
      if (provider === 'openai') {
        result = await runOpenAI(model, prompt);
      } else if (provider === 'gemini') {
        result = await runGemini(model, prompt);
      } else if (provider === 'ollama') {
        result = await runOllama(model, prompt);
      } else {
        result = { error: 'Unknown provider' };
      }

      sendResponse(result);
    })();
    return true; // Keep message channel open
  }
});