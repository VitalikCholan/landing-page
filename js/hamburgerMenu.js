const toggleButton = document.querySelector('.toggle-button');
const dropdown = document.querySelector('.dropdown');

toggleButton.addEventListener('click', () => {
  const isActive = dropdown.classList.toggle('active');
  if (isActive) {
    dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
    setTimeout(() => {
      dropdown.style.maxHeight = 'initial';
    }, 1000);
  } else {
    dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
    setTimeout(() => {
      dropdown.style.maxHeight = null;
    }, 0);
  }
});

const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach((dropdownItem) => {
  dropdownItem.addEventListener('click', () => {
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');

    const isActive = dropdownMenu.classList.toggle('active');

    if (isActive) {
      dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
      setTimeout(() => {
        dropdownMenu.style.maxHeight = 'initial';
      }, 1000);
    } else {
      dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
      setTimeout(() => {
        dropdownMenu.style.maxHeight = null;
      }, 0);
    }
  });
});
