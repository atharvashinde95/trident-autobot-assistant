document.getElementById('save').addEventListener('click', async () => {
  const openaiKey = document.getElementById('openaiKey').value.trim();
  const geminiKey = document.getElementById('geminiKey').value.trim();
  const defaultModel = document.getElementById('defaultModel').value;

  await chrome.storage.sync.set({ openaiKey, geminiKey, defaultModel });
  alert('Settings saved successfully!');
  console.log('Saved Keys:', { openaiKey, geminiKey, defaultModel });
});

(async function init() {
  const storedKeys = await chrome.storage.sync.get(['openaiKey', 'geminiKey', 'defaultModel']);
  
  // Use stored values or default fallback
  const openaiKey = storedKeys.openaiKey || '';
  const geminiKey = storedKeys.geminiKey || '';
  const defaultModel = storedKeys.defaultModel || 'gemini:gemini-1.5-flash';

  document.getElementById('openaiKey').value = openaiKey;
  document.getElementById('geminiKey').value = geminiKey;
  document.getElementById('defaultModel').value = defaultModel;

  // Force save Gemini key if not set
  if (!storedKeys.geminiKey) {
    await chrome.storage.sync.set({ geminiKey });
    console.log('Gemini key was not set, default saved:', geminiKey);
  } else {
    console.log('Gemini key loaded from storage:', geminiKey);
  }
})();
