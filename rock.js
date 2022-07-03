const score = document.querySelector('p')
let player = 0
let computer = 0
let description = ''
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    if (playRound("rock", computerPlay()) == "You Win! Rock beats Scissors" ) {
    player += 1
    description = "You Win! Rock beats Scissors"
} else if (playRound("rock", computerPlay()) == "You Lose! Paper beats Rock") {
    computer += 1
 description = "You Lose! Paper beats Rock"
} else description = 'You Tied!'
if (player == 5) {
    description = 'You won against the computer!'
    computer = 0
    player = 0
    } else if (computer == 5) {
    description = 'You lost against the computer!'
    computer = 0
    player = 0
    }
    score.textContent = 'Your score' + ' ' + player + ' ' + 'Computer score' + ' ' + computer + ' ' + description;
});
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    if (playRound("paper", computerPlay()) == "You Win! Paper beats Rock!" ) {
    player += 1
    description = "You Win! Paper beats Rock!"
} else if (playRound("paper", computerPlay()) == "You Lose! Scissors beats Paper") {
    computer += 1
 description = "You Lose! Scissors beats Paper"
} else description = 'You Tied!'
if (player == 5) {
    description = 'You won against the computer!'
    computer = 0
    player = 0
    } else if (computer == 5) {
    description = 'You lost against the computer!'
    computer = 0
    player = 0
    }
score.textContent = 'Your score' + ' ' + player + ' ' + 'Computer score' + ' ' + computer + ' ' + description
});

btn3.addEventListener('click', () => {
    if (playRound("scissors", computerPlay()) == "You Win! Scissors beats Paper!" ) {
    player += 1
    description = "You Win! Scissors beats Paper!"
} else if (playRound("scissors", computerPlay()) == "You Lose! Rock beats scissors") {
    computer += 1
 description = "You Lose! Rock beats scissors"
} else description = 'You Tied!'
if (player == 5) {
    description = 'You won against the computer!'
    computer = 0
    player = 0
    } else if (computer == 5) {
    description = 'You lost against the computer!'
    computer = 0
    player = 0
    }
score.textContent = 'Your score' + ' ' + player + ' ' + 'Computer score' + ' ' + computer + ' ' + description
});




function computerPlay() {
    let a = Math.random()
    if ( a < 1 / 3) {
        return 'rock';
    } else if ( a < 2 / 3) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if ( playerSelection == "rock" && computerSelection == 'paper' ) {
        return "You Lose! Paper beats Rock"
    } else if ( playerSelection == "rock" && computerSelection == 'scissors' ) {
        return "You Win! Rock beats Scissors"
    } else if ( playerSelection == "paper" && computerSelection == 'scissors' ) {
        return "You Lose! Scissors beats Paper" 
    } else if ( playerSelection == "paper" && computerSelection == 'rock' ) {
        return "You Win! Paper beats Rock!"
    } else if ( playerSelection == "scissors" && computerSelection == 'rock' ) {
        return "You Lose! Rock beats scissors" 
    } else if ( playerSelection == "scissors" && computerSelection == 'paper' ) {
        return "You Win! Scissors beats Paper!"
    } else { return 'You Tied!'
    }        
}




