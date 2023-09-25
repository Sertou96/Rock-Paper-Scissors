let playerChoice = prompt('Type "Rock", "Paper", or "Scissors"');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);

return choices[randomNumber];
}

let computerMove = getComputerChoice();

function getWinner() {
  if (playerChoice === computerMove) {
    return `Computer picked ${computerMove}, Tie!`;
  } else if (playerChoice === 'Rock' && computerMove === 'Scissors' || playerChoice === 'Paper' && computerMove === 'Rock' || playerChoice === 'Scissors' && computerMove === 'Paper') {
    return `Computer picked ${computerMove},You win!`;
  } else {
    return `Computer picked ${computerMove}, you lose`;
  }
}
console.log(getWinner());