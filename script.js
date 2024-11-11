'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 10
let highscore = 0
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Надо ввести число от 1 до 20 🙃')
  } else if (guess === secretNumber) {
    displayMessage('🎉 Правильно!')
    document.querySelector('.number').textContent = secretNumber
    document.body.style.background = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = score
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Маловато' : '📈 Перебор')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('Ты проиграл ☹')
      document.body.style.background = '#e63636'
      document.querySelector('.score').textContent = 0
    }
  }
  // Оставлю первую версию, до сокращения, которая выше)
  //  else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Маловато'
  //     score--
  //     document.querySelector('.score').textContent = score
  //   } else {
  //     document.querySelector('.message').textContent = 'Ты проиграл ☹'
  //     document.body.style.background = '#e63636'
  //     document.querySelector('.score').textContent = 0
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Перебор'
  //     score--
  //     document.querySelector('.score').textContent = score
  //   } else {
  //     document.querySelector('.message').textContent = 'Ты проиграл ☹'
  //     document.body.style.background = '#e63636'
  //     document.querySelector('.score').textContent = 0
  //   }
  // }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 10
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  displayMessage('Новый раунд!')
  document.querySelector('.guess').value = ''
  document.body.style.background = '#222'
  document.querySelector('.number').style.width = '15rem'
})