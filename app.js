let paper = document.querySelector(".paper__choice");
console.log(paper);

paper.addEventListener("click", () => {
  console.log("Salut");
});

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
let rulesMobile = document.querySelector('.mobiles__rules')
let mobileCross = document.querySelector('.mobile__cross')

rulesButton.addEventListener('click', () => {
  rulesMobile.classList.add('mobiles__visible')
})

mobileCross.addEventListener('click', () => {
  rulesMobile.classList.remove('mobiles__visible')
   modal.classList.remove("toggle__modal");
})