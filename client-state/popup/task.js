function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

const isModalClosed = getCookie('modalClosed');

if (!isModalClosed) {
  const modal = document.getElementById('subscribe-modal');
  modal.classList.add('modal_active');

  const closeButton = document.querySelector('.modal__close');
  closeButton.addEventListener('click', function () {
    modal.classList.remove('modal_active');

    setCookie('modalClosed', true, 365);
  });
}
