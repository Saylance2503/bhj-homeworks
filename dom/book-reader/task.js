const smallFontLink = document.querySelector('.font-size_small');
const bigFontLink = document.querySelector('.font-size_big');

const book = document.getElementById('book');

function handleFontSizeChange(event) {
  event.preventDefault();

  const fontLinks = document.querySelectorAll('.font-size');
  fontLinks.forEach((link) => link.classList.remove('font-size_active'));

  const clickedLink = event.target;
  clickedLink.classList.add('font-size_active');

  const fontSize = clickedLink.getAttribute('data-size');

  book.classList.remove('book_fs-small', 'book_fs-big');

  if (fontSize === 'small') {
    book.classList.add('book_fs-small');
  } else if (fontSize === 'big') {
    book.classList.add('book_fs-big');
  }
}

smallFontLink.addEventListener('click', handleFontSizeChange);

bigFontLink.addEventListener('click', handleFontSizeChange);
