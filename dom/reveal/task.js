function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  let revealElements = document.getElementsByClassName('reveal');

  for (let i = 0; i < revealElements.length; i++) {
    let element = revealElements[i];

    if (isElementInViewport(element)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  }
}

window.addEventListener('scroll', handleScroll);

handleScroll();
