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
    // Tie Case
    if (playerSelection == computerSelection) {
        return "It's a Tie!"
    }
    // Computer selects rock
    else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return ('You win, Paper beats rock')
        }
        else return 'You loose!, Rock breaks scissor'
    }
    else if (computerSelection == "paper") {
        if (playerSelection == "scissor") {
            return ('You win, Scissor beats Paper')
        }
        else return 'You loose!, Paper covers scissor'
    }
    else if (computerSelection == "scissor") {
        if (playerSelection == "rock") {
            return ('You win, Rock breaks scissor')
        }
        else return 'You loose!, Scissor cuts paper'
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice()
    playerSelection = prompt("What's your choice?: ")
    let result = playRound(computerSelection, playerSelection)
    console.log(result)
    }
}
