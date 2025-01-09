//OMAR's CODE:

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


/*
const choices = ["rock","paper","scissors"]

let playerChoice
let computerChoice
let msg


const resultDisplayEl = document.querySelector("#result-display")


const buttonChoicesElement = document.querySelectorAll(".button-choice")

const compare = () =>{
    // TIE Condition
    if(playerChoice === computerChoice){
        msg = "You tied!"
    }
    // WIN Conditions
    else if(playerChoice=== choices[0] && computerChoice === choices[2]){
        msg = "Congrats! You Win"
    }
    // WIN Conditions
    else if(playerChoice === choices[1] && computerChoice === choices[0]){
        msg = "Congrats! You Win"
    }
    // WIN Conditions
    else if(playerChoice === choices[2] && computerChoice === choices[1]){
        msg = "Congrats! You Win"
    }

    // Lose Condition
    else{
        msg = "You Lose! Try Again"
    }
}

const render = () =>{
    console.log(`Player choice = ${playerChoice}`)

    console.log("Computer choice = " + computerChoice)

    console.log(msg)

    resultDisplayEl.textContent = `Player Choice is ${playerChoice} and Computer Choice is ${computerChoice}, ${msg}`
}


// console.log(Math.ceil(1.5))
const play = (event)=>{
        playerChoice = event.target.id
        const randomIndex = Math.floor(Math.random() * 3)
        computerChoice = choices[randomIndex]
        compare()
        render()
    }


buttonChoicesElement.forEach((button)=>{
    button.addEventListener("click", play)
})
*/





/******************************/
const choices = ["rock", "paper", "scissors"];

let playerChoice;
let computerChoice;
let msg;

const resultDisplayEl = document.querySelector("#result-display");

const play = (e) => {
  const randomChoice = Math.floor(Math.random() * 3);
  computerChoice = choices[randomChoice];

  if (e.target.id === "rock") {
    playerChoice = e.target.id;
  } else if (e.target.id === "paper") {
    playerChoice = e.target.id;
  } else if (e.target.id === "scissors") {
    playerChoice = e.target.id;
  }
  console.log(`Player Choice: ${playerChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
};
document.querySelector("#rock").addEventListener("click", play);
document.querySelector("#paper").addEventListener("click", play);
document.querySelector("#scissors").addEventListener("click", play);
