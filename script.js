//Javascripts and data types
/*
Number (0,1,2..toExponential.)
String (characters, text and numbers)
Booelan (true, false only!)

/*

const button = document.querySelector("button");

function greet() {
  const name = prompt("How are you today?");
  console.log(name);
}

button.addEventListener("click", greet);
*/
/*
const button = document.querySelector("button");
button.addEventListener("click", greet);
function greet() {
  //Declare the name
  const name = prompt("What is your name?");
  //Print the name to the console
  console.log(name);
}

function greet() {
  //Declare the name


  const name = prompt("What is your name?");
  //Print the name to the console
  console.log(name);
}

greet();
*/
/*
let text = "abcde";

let length = text.length;
console.log(length);
*/

//String types method in JavaScript
//SLICE METHOD
/*
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);//it slices the text from the start utnil the eng

console.log(part);

*/
/*
//SUBSTRING METHOD
let str = "Apple, Banana, Kiwi";
let fruit = str.substring(-7, -13);

console.log(fruit); //d sya pwede gamitin na negative pero sa slice pwede.
--

//REPLACE METHOD - pinapalitan nya ung value;

let newText = "Plase visit Microsoft";
let updatedText = newText.replace("Microsoft", "Kodego");

console.log(updatedText);
*/

//Conditionals
/*
> , < , == , !=(not equal), ===(strict equality it means it is checking the value from numbers or string)
>= (greater than or equal to), <= (less than or equal to)
===! (stict NOT Equality) */

function GetComputerPlay() {
  let skills = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * skills.length);
  return skills[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return "You win! " + playerSelection + " beats " + computerSelection;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      return "You lose! " + computerSelection + " beats " + playerSelection;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return "It's a tie!";
    default:
      return "Invalid input!";
  }
}

function game() {
  for (let i = 0; i < 3; i++) {
    let playerSelection = prompt("Enter rock, paper, or scissors:");
    let computerSelection = GetComputerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
