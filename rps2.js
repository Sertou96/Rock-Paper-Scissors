let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScore();


 const rockPick =  document.querySelector('.move-rock');
 rockPick.addEventListener('click', () => {
  getWinner('Rock');
 });

 const paperPick =  document.querySelector('.move-paper');
 paperPick.addEventListener('click', () => {
  getWinner('Paper');
 });

const scissorsPick = document.querySelector('.move-scissors');
scissorsPick.addEventListener('click', () => {
  getWinner('Scissors');
})



function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
};


let computerMove = getComputerChoice();



function getWinner(playerChoice) {
  let computerMove = getComputerChoice();

  let result = '';
  
  if (playerChoice === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You lose.';
    } else if (computerMove === 'Scissors') {
      result = 'You win.';
    }
  } 
  else if (playerChoice === 'Paper') {
    if(computerMove === 'Rock') {
      result = 'You win.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You lose.';
    }
  }
  else if (playerChoice ===  'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.';
    } else if (computerMove === 'Paper') {
      result = 'You win.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }
  }

  if (result === 'You win.') {
    score.wins = score.wins += 1;
  } else if (result === 'You lose.') {
    score.loses = score.loses += 1;
  } else if (result === 'Tie.') {
    score.ties = score.ties += 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));


  document.querySelector('.result-text').innerHTML = `You picked: ${playerChoice}, Computer picked: ${computerMove}, ${result}.`;

  updateScore();


};




function updateScore() {
  document.querySelector('.result-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}