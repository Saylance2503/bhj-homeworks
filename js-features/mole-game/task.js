const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let score = 0;
let misses = 0;

function handleClick() {
  if (this.classList.contains('hole_has-mole')) {
    score++;
    deadCounter.textContent = score;
  } else {
    misses++;
    lostCounter.textContent = misses;
  }

  if (score === 10) {
    alert('Вы выиграли!');
    resetGame();
  } else if (misses === 5) {
    alert('Вы проиграли!');
    resetGame();
  }
}

function resetGame() {
  score = 0;
  misses = 0;
  deadCounter.textContent = score;
  lostCounter.textContent = misses;
  holes.forEach((hole) => {
    hole.classList.remove('hole_has-mole');
  });
}

holes.forEach((hole) => {
  hole.addEventListener('click', handleClick);
});
