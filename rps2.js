let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScore();


 const rockPick =  document.querySelector('.move-shield');
 rockPick.addEventListener('click', () => {
  getWinner('Shield');
 });

 const paperPick =  document.querySelector('.move-grab');
 paperPick.addEventListener('click', () => {
  getWinner('Grab');
 });

const scissorsPick = document.querySelector('.move-attack');
scissorsPick.addEventListener('click', () => {
  getWinner('Attack');
})



function getComputerChoice() {
  const choices = ['Shield', 'Grab', 'Attack'];
  const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
};


let computerMove = getComputerChoice();



function getWinner(playerChoice) {
  let computerMove = getComputerChoice();

  let result = '';
  
  if (playerChoice === 'Shield') {
    if (computerMove === 'Shield') {
      result = 'Tie.';
    } else if (computerMove === 'Grab') {
      result = 'You lose.';
    } else if (computerMove === 'Attack') {
      result = 'You win.';
    }
  } 
  else if (playerChoice === 'Grab') {
    if(computerMove === 'Shield') {
      result = 'You win.';
    } else if (computerMove === 'Grab') {
      result = 'Tie.';
    } else if (computerMove === 'Attack') {
      result = 'You lose.';
    }
  }
  else if (playerChoice ===  'Attack') {
    if (computerMove === 'Shield') {
      result = 'You lose.';
    } else if (computerMove === 'Grab') {
      result = 'You win.';
    } else if (computerMove === 'Attack') {
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


  document.querySelector('.result-text').innerHTML = `You picked: <img src="/pics/${playerChoice}.png" class="move-result-picture"> , Computer picked: <img src="/pics/${computerMove}.png" class="move-result-picture">,  ${result}.`;

  updateScore();

 

};




function updateScore() {
  document.querySelector('.result-score').innerHTML = `Wins: ${score.wins} |
  Loses: ${score.loses} |
   Ties: ${score.ties}`;
}