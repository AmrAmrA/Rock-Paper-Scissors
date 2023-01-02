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
console.log(firstPlayerPhoto);

for (let i = 0; i < ourChoice.length; i++) {
  ourChoice[i].addEventListener("click", startTheGame);
}

function startTheGame(e) {
  allChoices.classList.add("allChoices__invisible");
  main.classList.add("main__game");
  gameZone.classList.add("show__theGame");
  firstPlayerPhoto.src = e.target.src;
  firstPlayerChoice.classList.add(e.target.className + "__choice");
}




let hasard = Math.floor(Math.random() * ourChoice.length)
let computerPhoto = document.querySelector('.computerPlayer__photo')
let computerChoice = document.querySelector('.computerPlayer__choice')
setTimeout(ComputerTurn, 3000)
function ComputerTurn() {
  computerPhoto.src = ourChoice[hasard].src
  computerChoice.classList.add(ourChoice[hasard].className + '__choice')
}