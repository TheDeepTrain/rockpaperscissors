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
    } else if ( playerSelection == "rock" && computerSelection == 'rock' ) {
        return "You Tied!"
    } else if ( playerSelection == "paper" && computerSelection == 'scissors' ) {
        return "You Lose! Scissors beats Paper" 
    } else if ( playerSelection == "paper" && computerSelection == 'rock' ) {
        return "You Win! Papper beats Rock!"
    } else if ( playerSelection == "paper" && computerSelection == 'paper' ) {
        return "You Tied!"
    } else if ( playerSelection == "scissors" && computerSelection == 'rock' ) {
        return "You Lose! Rock beats Paper" 
    } else if ( playerSelection == "scissors" && computerSelection == 'paper' ) {
        return "You Win! Scissors beats Paper!"
    } else if ( playerSelection == "scissors" && computerSelection == 'scissors' ) {
        return "You Tied!"
    } else {
        return "nub"
    }        
}
const computerSelection = computerPlay();
const playerSelection = prompt('Lets play rock paper scissors');
a = playRound(playerSelection.toLowerCase(), computerSelection)
alert(a)


