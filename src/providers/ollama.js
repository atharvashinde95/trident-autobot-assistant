export async function runOllama(model, prompt) {
  const OLLAMA_URL = 'http://127.0.0.1:11434/api/generate';

  try {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, prompt, stream: false })
    });

    // If Ollama responds but with an error
    if (!res.ok) {
      const err = await res.text();
      if (res.status === 403) {
        return { error: `Ollama error (403): CORS blocked. 
Please restart Ollama with 'setx OLLAMA_ORIGINS "*"' and run 'ollama serve'.` };
      }
      return { error: `Ollama error (${res.status}): ${err}` };
    }

    const data = await res.json();
    return { text: (data.response || '').trim() };
  } catch (e) {
    return {
      error: `Could not connect to Ollama at ${OLLAMA_URL}. 
Make sure Ollama is running with: 
    setx OLLAMA_ORIGINS "*"
    ollama serve`
    };
  }
}