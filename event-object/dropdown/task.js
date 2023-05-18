const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');

  valueElement.addEventListener('click', function () {
    listElement.classList.toggle('dropdown__list_active');
  });

  const linkElements = dropdown.querySelectorAll('.dropdown__link');
  linkElements.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const selectedValue = link.textContent.trim();
      valueElement.textContent = selectedValue;
      listElement.classList.remove('dropdown__list_active');
    });
  });
});
