const toggleButton = document.querySelector('.toggle-button');
const dropdown = document.querySelector('.dropdown');

toggleButton.addEventListener('click', () => {
  const isActive = dropdown.classList.toggle('active');

  if (isActive) {
    dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
  } else {
    dropdown.style.maxHeight = '0px';
  }
});
