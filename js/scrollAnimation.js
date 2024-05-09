const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;

        if (targetElement.classList.contains('hidden-welcome')) {
          targetElement.classList.add('show-welcome');
        } else if (targetElement.classList.contains('hidden-main-left')) {
          targetElement.classList.add('show-main-left');
        } else if (targetElement.classList.contains('hidden-main-right')) {
          targetElement.classList.add('show-main-right');
        } else if (
          targetElement.classList.contains('hidden-testemonial-left')
        ) {
          targetElement.classList.add('show-testemonial-left');
        } else if (
          targetElement.classList.contains('hidden-testemonial-right')
        ) {
          targetElement.classList.add('show-testemonial-right');
        } else if (targetElement.classList.contains('hidden-faq-odd')) {
          targetElement.classList.add('show-faq-odd');
        } else if (targetElement.classList.contains('hidden-faq-even')) {
          targetElement.classList.add('show-faq-even');
        } else if (targetElement.classList.contains('hidden-scroller')) {
          targetElement.classList.add('show-scroller');
        }
      }
    });
  },
  {
    rootMargin: '100px',
  }
);

const welcomeElement = document.querySelector('.hidden-welcome');
observer.observe(welcomeElement);

const mainLeftElements = document.querySelectorAll('.hidden-main-left');
mainLeftElements.forEach((element) => observer.observe(element));

const mainRightElements = document.querySelectorAll('.hidden-main-right');
mainRightElements.forEach((element) => observer.observe(element));

const testemonialLeftElements = document.querySelectorAll(
  '.hidden-testemonial-left'
);
testemonialLeftElements.forEach((element) => observer.observe(element));

const testemonialRightElements = document.querySelectorAll(
  '.hidden-testemonial-right'
);
testemonialRightElements.forEach((element) => observer.observe(element));

const scrollElement = document.querySelector('.hidden-scroller');
observer.observe(scrollElement);

const faqOddElements = document.querySelectorAll('.hidden-faq-odd');
faqOddElements.forEach((element) => observer.observe(element));

const faqEvenElements = document.querySelectorAll('.hidden-faq-even');
faqEvenElements.forEach((element) => observer.observe(element));
