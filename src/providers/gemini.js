export async function runGemini(model, prompt) {
  let { geminiKey } = await chrome.storage.sync.get(['geminiKey']);

  // If no key is saved, use your default one
  if (!geminiKey) {
    geminiKey = '';
    console.warn('Gemini key not found in storage. Using default hardcoded key.');
  }

  if (!geminiKey) return { error: 'Gemini API key is missing.' };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      })
    });

    if (!res.ok) {
      const err = await res.text();
      return { error: `Gemini error (${res.status}): ${err}` };
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    return { text };
  } catch (e) {
    return { error: `Network/Fetch error: ${e.message}` };
  }
}
