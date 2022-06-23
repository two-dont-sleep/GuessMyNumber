let randomNumber = generateNewRandomNumber();

let input = 0;
let score = 20;
let highscore = 0

const input_field = document.querySelector(".guess_window")
const check_btn = document.querySelector(".button_check");
const again_btn = document.querySelector(".button_again");

const info_message = document.querySelector(".guess_message");
const scoreField = document.querySelector(".score");
const highscoreField = document.querySelector(".highscore");

check_btn.addEventListener('click', () => {
  input = input_field.value;

  if (!input) {
    displayMessage("No number!");
  } else if (isScoreZero()) {
    displayMessage("You lost, ssry!");
  } else if (input !== randomNumber) {
    displayMessage(input > randomNumber ? "Too high!" : "Too low!");
    decreaseScore()
  } else {
    highscoreField.textContent = Math.max(score, highscore);
    displayMessage("Correct number!");
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".guess_number").textContent = randomNumber;
  }

})

function generateNewRandomNumber() {
  return Math.trunc(Math.random() * 19) + 1;
}

function isScoreZero() {
  return score === 0;
}

function decreaseScore() {
  score--;
  scoreField.textContent = score;
}

again_btn.addEventListener("click", resetData)

function resetData() {
  document.body.style.backgroundColor = "#222";

  randomNumber = generateNewRandomNumber();

  input_field.value = "";
  score = 20;
  scoreField.textContent = score;

  displayMessage("Start guessing...");
  document.querySelector(".guess_number").textContent = "?"
}

function displayMessage(message) {
  info_message.textContent = message;
}