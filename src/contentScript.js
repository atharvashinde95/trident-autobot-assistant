chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'SUMMARIZE_RESULT') {
    const text = message.payload.error ? `Error: ${message.payload.error}` : message.payload.text;
    showFloatingBox(text);
  }
});

function showFloatingBox(text) {
  const box = document.createElement('div');
  box.style.position = 'fixed';
  box.style.bottom = '20px';
  box.style.right = '20px';
  box.style.maxWidth = '400px';
  box.style.maxHeight = '300px';
  box.style.overflow = 'auto';
  box.style.background = '#fff';
  box.style.border = '1px solid #ddd';
  box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  box.style.padding = '12px';
  box.style.borderRadius = '8px';
  box.style.zIndex = '999999';
  box.innerText = text;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '4px';
  closeBtn.style.right = '8px';
  closeBtn.onclick = () => box.remove();

  box.appendChild(closeBtn);
  document.body.appendChild(box);
}