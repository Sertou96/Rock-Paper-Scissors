let playerChoice = parseInt(prompt('Enter a number from 1 - 3: '));



function getComputerChoice() {
 return Math.floor(Math.random() *3) +1;
 
}




const computerSelection = getComputerChoice();



function gameRound(playerChoice, computerSelection) {

if (playerChoice === 1 && computerSelection === 1) {
  console.log('Tie! Both you and the computer picked Rock.');
} else if (playerChoice === 1 && computerSelection === 2) {
  console.log('Computer picked paper, you lose.');
} else if (playerChoice === 1 && computerSelection === 3) {
  console.log('Computer picked Scissors, you win!');
}


if (playerChoice === 2 && computerSelection === 1) {
  console.log('Computer picked rock, you win!');
} else if (playerChoice === 2 && computerSelection === 2) {
  console.log('Tie! Both you and the computer picked Paper.');
} else if (playerChoice === 2 && computerSelection === 3) {
  console.log('Computer picked Scissors, you lose.')
}

if (playerChoice === 3 && computerSelection === 1) {
  console.log('Computer picked rock, you lose.');
} else if (playerChoice === 3 && computerSelection === 2) {
  console.log('Computer picked paper, you win!');
} else if (playerChoice === 3 && computerSelection === 3) {
  console.log('Tie! Both you and the computer picked Scissors.')
}

}

console.log(gameRound(playerChoice, computerSelection));
