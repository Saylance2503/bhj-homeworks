const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function rotateCases() {
  rotatorCases[currentIndex].classList.remove('rotator__case_active');

  currentIndex++;
  if (currentIndex >= rotatorCases.length) {
    currentIndex = 0;
  }

  rotatorCases[currentIndex].classList.add('rotator__case_active');

  const speed = parseInt(rotatorCases[currentIndex].dataset.speed);

  const color = rotatorCases[currentIndex].dataset.color;

  clearInterval(rotationInterval);
  rotationInterval = setInterval(rotateCases, speed);

  rotatorCases[currentIndex].style.color = color;
}

let rotationInterval = setInterval(rotateCases, 1000);
