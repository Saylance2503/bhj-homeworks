const tabElements = document.querySelectorAll('.tab');

const tabContentElements = document.querySelectorAll('.tab__content');

tabElements.forEach((tabElement, index) => {
  tabElement.addEventListener('click', () => {
    tabElements.forEach((tab) => {
      tab.classList.remove('tab_active');
    });

    tabContentElements.forEach((tabContent) => {
      tabContent.classList.remove('tab__content_active');
    });

    tabElement.classList.add('tab_active');

    tabContentElements[index].classList.add('tab__content_active');
  });
});
