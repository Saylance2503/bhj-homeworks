function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function startTimer() {
  let timerElement = document.getElementById('timer');
  let timerValue = parseInt(timerElement.textContent);

  let hours, minutes, seconds;

  let countdownInterval = setInterval(function () {
    hours = Math.floor(timerValue / 3600);
    minutes = Math.floor((timerValue % 3600) / 60);
    seconds = timerValue % 60;

    let formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    timerElement.textContent = formattedTime;

    timerValue--;

    if (timerValue < 0) {
      clearInterval(countdownInterval);
      window.location.href = 'http://example.com/path/to/file.ext';
      // alert('Вы победили в конкурсе!');
    }
  }, 1000);
}

window.onload = startTimer;
