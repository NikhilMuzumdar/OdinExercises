// Generate a random choice
function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissor']
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomElement = options[randomIndex];
    return randomElement
}

// A function that takes 2 inputs and returns winner
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    // tie case
    if (playerSelection === computerSelection) return ["Tie",0,0];
    // all other cases
    if (playerSelection === 'rock' & computerSelection === 'paper') { return ['Computer wins!',0,1] };
    if (playerSelection === 'rock' & computerSelection === 'scissor') { return ['Player wins!',1,0] };
    if (playerSelection === 'paper' & computerSelection === 'scissor') { return ['Computer wins!',0,1] };
    if (playerSelection === 'paper' & computerSelection === 'rock') { return ['Player wins!',1,0] };
    if (playerSelection === 'scissor' & computerSelection === 'paper') { return ['Player wins!',1,0] };
    if (playerSelection === 'scissor' & computerSelection === 'rock') { return ['Computer wins!',0,1] };
}

// Plays one round of the game
function game() {
    computerSelection = getComputerChoice()
    playerSelection = prompt("What's your choice?: ")
    let result = playRound(playerSelection, computerSelection)
    console.log(result)
}

//variables to keep track of score
var player_score = 0;
var computer_score = 0;


// Add event listners to the three buttons. 
const buttons = document.querySelectorAll('.game-btn')
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        computerSelection = getComputerChoice()
        playerSelection = button.textContent
        var game = playRound(playerSelection, computerSelection)
        
        result = game[0];
        player_score += game[1];
        computer_score += game[2];
        console.log(player_score, computer_score);

        display = document.querySelector('.display-result p')
        var message = `In this round, you selected ${playerSelection}. Computer selected ${computerSelection}. ${result}`
        display.textContent = message;


        var playerScore = document.querySelector('.player-score')
        var computerScore = document.querySelector('.computer-score')
        var scoreBoard = document.querySelector('.score-board p')

        // if either of the player hits 5, declare winner for the round
        if (computer_score === 5) {
            scoreBoard.textContent = `Computer wins this round`
            player_score = 0;
            computer_score = 0;
            display.textContent = "What's your guess??";
            
        }
        if (player_score === 5) {
            scoreBoard.textContent = `Player wins this round`
            player_score = 0;
            computer_score = 0;
            display.textContent = "What's your guess??";
            
        }
        playerScore.textContent = player_score
        computerScore.textContent = computer_score
    });
});







