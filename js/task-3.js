
const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', () => {
  const trimmedValue = inputEl.value.trim();
  outputEl.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});