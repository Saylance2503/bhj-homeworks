let counter = 0;
let cookieSize = 200;

function incrementCounter() {
  counter++;
  document.getElementById('clicker__counter').innerText = counter;
}

function toggleCookieSize() {
  let cookieElement = document.getElementById('cookie');

  if (cookieSize === 200) {
    cookieSize = 100;
    cookieElement.style.width = '100px';
  } else {
    cookieSize = 200;
    cookieElement.style.width = '200px';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let cookieElement = document.getElementById('cookie');

  cookieElement.addEventListener('click', function () {
    incrementCounter();
    toggleCookieSize();
  });
});
