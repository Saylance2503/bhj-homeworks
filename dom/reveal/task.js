function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var revealElements = document.getElementsByClassName('reveal');

  for (var i = 0; i < revealElements.length; i++) {
    var element = revealElements[i];

    if (isElementInViewport(element)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  }
}

window.addEventListener('scroll', handleScroll);

handleScroll();
