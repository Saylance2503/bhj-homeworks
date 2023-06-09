const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function showLoader() {
  loader.classList.add('loader_active');
}

function hideLoader() {
  loader.classList.remove('loader_active');
}

function renderItems(data) {
  const valute = data.response.Valute;
  const courses = Object.values(valute);

  itemsContainer.innerHTML = '';

  courses.forEach((course) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const code = document.createElement('div');
    code.classList.add('item__code');
    code.textContent = course.CharCode;

    const value = document.createElement('div');
    value.classList.add('item__value');
    value.textContent = course.Value;

    const currency = document.createElement('div');
    currency.classList.add('item__currency');
    currency.textContent = 'руб.';

    item.appendChild(code);
    item.appendChild(value);
    item.appendChild(currency);
    itemsContainer.appendChild(item);
  });
}

function checkCache() {
  const cachedData = localStorage.getItem('currencyData');
  if (cachedData) {
    const data = JSON.parse(cachedData);
    renderItems(data);
  }
}

function cacheData(data) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('currencyData', jsonData);
}

function loadData() {
  showLoader();

  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
      cacheData(data);
      hideLoader();
    })
    .catch((error) => {
      console.log('Произошла ошибка:', error);
      hideLoader();
    });
}

checkCache();
loadData();
