export async function runOpenAI(model, prompt) {
  const { openaiKey } = await chrome.storage.sync.get(['openaiKey']);
  if (!openaiKey) return { error: 'OpenAI API key is not set in Options.' };

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) {
      const err = await res.text();
      return { error: `OpenAI error (${res.status}): ${err}` };
    }

    const data = await res.json();
    return { text: data.choices?.[0]?.message?.content?.trim() || '' };
  } catch (e) {
    return { error: `Network/Fetch error: ${e.message}` };
  }
}