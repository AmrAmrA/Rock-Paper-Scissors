// Event to open and close the block who show the game rules
let rulesButton = document.querySelector(".rules__zone");
let modal = document.querySelector(".modal__block");
let rules = document.querySelector(".rules__explanation");

rulesButton.addEventListener("click", () => {
  modal.classList.add("toggle__modal");
  rules.classList.add("toggle__modal");
});

let crossClose = document.querySelector(".close__explanation");
crossClose.addEventListener("click", () => {
  modal.classList.remove("toggle__modal");
  rules.classList.remove("toggle__modal");
});

// Game rules in mobile device
let rulesZoneMobile = document.querySelector(".ruleszone__mobile");
let rulesMobile = document.querySelector(".mobiles__rules");
let mobileCross = document.querySelector(".mobile__cross");

rulesZoneMobile.addEventListener("click", () => {
  rulesMobile.classList.add("mobiles__visible");
});

mobileCross.addEventListener("click", () => {
  rulesMobile.classList.remove("mobiles__visible");
  modal.classList.remove("toggle__modal");
});

// Start the game
let ourChoice = document.querySelectorAll(".all__choices img");
let allChoices = document.querySelector(".all__choices");
let main = document.querySelector("main");
let gameZone = document.querySelector(".start__game");

let firstPlayerPhoto = document.querySelector(".firstPlayer__photo");
let firstPlayerChoice = document.querySelector(".firstPlayer__choice");

for (let i = 0; i < ourChoice.length; i++) {
  ourChoice[i].addEventListener("click", startTheGame);
}
// This allows us to change the design when we click on one of the three choices
function startTheGame(e) {
  allChoices.classList.add("allChoices__invisible");
  main.classList.add("main__game");
  gameZone.classList.add("show__theGame");
  firstPlayerPhoto.src = e.target.src;
  firstPlayerChoice.classList.add(e.target.className + "__choice");
  setTimeout(ComputerTurn, 1000);
  setTimeout(resultDisplay, 1500);
  console.log(
    firstPlayerChoice.children[0].src.includes("icon-paper.svg")
      ? "salut"
      : "pas salut"
  );
  console.log(computerChoice.children[0].src);
}

let computerPhoto = document.querySelector(".computerPlayer__photo");
let computerChoice = document.querySelector(".computerPlayer__choice");
// This selects a random option for the computer from the available photos
function ComputerTurn() {
  let hasard = Math.floor(Math.random() * 3);
  computerPhoto.src = ourChoice[hasard].src;
  computerChoice.classList.add(ourChoice[hasard].className + "__choice");
}

let resultText = document.querySelector(".result__text");
// This shows the text of the result after the choices of each player
function resultDisplay() {
  resultText.classList.add("display__result");
  comparePhotos();
}

let resetButton = document.querySelector(".result__button");

// When you press the 'play again' button it clears all variables of their values
resetButton.addEventListener("click", resetGame);
function resetGame() {
  allChoices.classList.remove("allChoices__invisible");
  main.classList.remove("main__game");
  gameZone.classList.remove("show__theGame");
  resultText.classList.remove("display__result");
  firstPlayerPhoto.src = "";
  computerPhoto.src = "";
  for (let i = 0; i < ourChoice.length; i++) {
    firstPlayerChoice.classList.remove(ourChoice[i].className + "__choice");
    computerChoice.classList.remove(ourChoice[i].className + "__choice");
  }
}

// Compare the two photos and display the text of the result according to and increase or decrease the score number
let scoreNumber = document.querySelector(".number__score");
function comparePhotos() {
  if (
    (firstPlayerChoice.children[0].src.includes("icon-paper.svg") &&
      computerChoice.children[0].src.includes("icon-scissors.svg")) ||
    (firstPlayerChoice.children[0].src.includes("icon-scissors.svg") &&
      computerChoice.children[0].src.includes("icon-rock.svg")) ||
    (firstPlayerChoice.children[0].src.includes("icon-rock.svg") &&
      computerChoice.children[0].src.includes("icon-paper.svg"))
  ) {
    resultText.children[0].textContent = "You Lose";
    scoreNumber.textContent == scoreNumber.textContent--;
  } else if (
    (firstPlayerChoice.children[0].src.includes("icon-paper.svg") &&
      computerChoice.children[0].src.includes("icon-rock.svg")) ||
    (firstPlayerChoice.children[0].src.includes("icon-rock.svg") &&
      computerChoice.children[0].src.includes("icon-scissors.svg")) ||
    (firstPlayerChoice.children[0].src.includes("icon-scissors.svg") &&
      computerChoice.children[0].src.includes("icon-paper.svg"))
  ) {
    resultText.children[0].textContent = "You Won";
    scoreNumber.textContent == scoreNumber.textContent++;
  } else if (firstPlayerPhoto.src === computerPhoto.src) {
    resultText.children[0].textContent = "Draw";
  }
}
