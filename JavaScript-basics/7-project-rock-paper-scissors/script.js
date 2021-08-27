// Randomizer function to create the computer's hand. 
function computerPlay() {
    let computerSelection = Math.ceil(Math.random()*3);
    switch (computerSelection){
        case 1:
            let computerChose = "Rock";
            break;
        case 2:
            let computerChose = "Paper";
            break;
        case 3:
            let computerChose = "Scissor";
            break;
    }
    return computerChose;
}

function playerPlay(){
    let playerSelection = prompt('Please choose "Rock" (1), "Paper" (2), or "Scissors" (3)');
    switch (playerSelection){
        case 1:
            let playerChose = "Rock";
            break;
        case 2:
            let playerChose = "Paper";
            break;
        case 3:
            let playerChose = "Scissor";
            break;
        default: 
            prompt('Wrong Selection, please choose "Rock" (1), "Paper" (2), or "Scissors" (3)');
    }
}

function gameTurn(){

}

