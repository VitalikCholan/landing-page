const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-welcome');
    } else {
      entry.target.classList.remove('show-welcome');
    }
  });
});

const welcomeElement = document.querySelector('.hidden-welcome');
observer.observe(welcomeElement);
