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
    if (playerSelection === computerSelection) return "Tie";
    // all other cases
    if (playerSelection === 'rock' & computerSelection === 'paper') { return 'Computer wins!' };
    if (playerSelection === 'rock' & computerSelection === 'scissor') { return 'Player wins!' };
    if (playerSelection === 'paper' & computerSelection === 'scissor') { return 'Computer wins!' };
    if (playerSelection === 'paper' & computerSelection === 'rock') { return 'Player wins!' };
    if (playerSelection === 'scissor' & computerSelection === 'paper') { return 'Player wins!' };
    if (playerSelection === 'scissor' & computerSelection === 'rock') { return 'Computer wins!' };
}

function game() {
    computerSelection = getComputerChoice()
    playerSelection = prompt("What's your choice?: ")
    let result = playRound(playerSelection, computerSelection)
    console.log(result)
}

const buttons = document.querySelectorAll('.game-btn')
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        computerSelection = getComputerChoice()
        playerSelection = button.textContent
        const result = playRound(playerSelection, computerSelection)

        display = document.querySelector('.display-result p')
        var message = `You selected ${playerSelection}. Computer selected ${computerSelection}. Result: ${result}`
        display.textContent = message;
    });
});


