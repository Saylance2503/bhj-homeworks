function sendGetRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(null, JSON.parse(xhr.responseText));
      } else {
        callback(new Error('Request failed'));
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

function displayPoll(poll) {
  const pollTitle = document.getElementById('poll__title');
  const pollAnswers = document.getElementById('poll__answers');

  pollTitle.textContent = poll.data.title;

  pollAnswers.innerHTML = '';
  poll.data.answers.forEach(function (answer) {
    const button = document.createElement('button');
    button.className = 'poll__answer';
    button.textContent = answer;
    button.addEventListener('click', function () {
      alert('Спасибо, ваш голос засчитан!');
    });
    pollAnswers.appendChild(button);
  });
}

sendGetRequest('https://students.netoservices.ru/nestjs-backend/poll', function (err, poll) {
  if (err) {
    console.error(err);
  } else {
    displayPoll(poll);
  }
});
