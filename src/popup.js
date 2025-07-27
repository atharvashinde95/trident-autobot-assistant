document.getElementById('runBtn').addEventListener('click', async () => {
  const model = document.getElementById('modelSelect').value;
  const prompt = document.getElementById('prompt').value.trim();
  const outputDiv = document.getElementById('output');

  // Show initial "loading" with animation dots
  outputDiv.innerText = "Generating...";
  
  chrome.runtime.sendMessage({ type: 'RUN_MODEL', model, prompt }, (response) => {
    if (response.error) {
      outputDiv.innerText = `Error: ${response.error}`;
    } else {
      // Use typing animation for generated text
      typeTextAnimation(outputDiv, response.text);
    }
  });
});

// Typing animation function
function typeTextAnimation(element, text, speed = 30) {
  element.innerHTML = ""; 
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}