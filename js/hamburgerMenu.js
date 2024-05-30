const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
  const isOpened = toggleButton.getAttribute('aria-expanded');

  if (isOpened === 'false') {
    toggleButton.setAttribute('aria-expanded', 'true');
  } else {
    toggleButton.setAttribute('aria-expanded', 'false');
  }
});

const dropdown = document.querySelector('.dropdown');

toggleButton.addEventListener('click', () => {
  const isOpened = toggleButton.getAttribute('aria-expanded');

  if (isOpened === 'false') {
    toggleButton.setAttribute('aria-expanded', 'true');
    lineTop.setAttribute('y', '45');
    lineBottom.setAttribute('y', '45');
  } else {
    toggleButton.setAttribute('aria-expanded', 'false');
    lineTop.setAttribute('y', '25');
    lineBottom.setAttribute('y', '75');
  }
});

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
