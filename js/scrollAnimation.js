const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetElement = entry.target;

      if (targetElement.classList.contains('hidden-welcome')) {
        targetElement.classList.add('show-welcome');
      } else if (targetElement.classList.contains('hidden-main-left')) {
        targetElement.classList.add('show-main-left');
      } else if (targetElement.classList.contains('hidden-main-right')) {
        targetElement.classList.add('show-main-right');
      }
    } else {
      entry.target.classList.remove(
        'show-welcome',
        'show-main-left',
        'show-main-right'
      );
    }
  });
});

const welcomeElement = document.querySelector('.hidden-welcome');
observer.observe(welcomeElement);

const mainLeftElements = document.querySelectorAll('.hidden-main-left');
mainLeftElements.forEach((element) => observer.observe(element));

const mainRightElements = document.querySelectorAll('.hidden-main-right');
mainRightElements.forEach((element) => observer.observe(element));
