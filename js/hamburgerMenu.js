const toggleButton = document.querySelector('.toggle-button');
const dropdown = document.querySelector('.dropdown');

toggleButton.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
