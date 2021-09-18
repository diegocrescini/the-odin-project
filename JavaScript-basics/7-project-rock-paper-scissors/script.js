// Variables 

let cpuChoice;
let playerChoice;
let playerScore = 0;
let cpuScore = 0;


//Turn loop
function turnLoop(){
    playerPlay();
    cpuPlay();
    turnWinnerIs(playerChoice, cpuChoice);
}

fiveTurnGame();

//CPU turn 
function cpuPlay() {
    let cpuSelection = Math.ceil(Math.random()*3);
    switch (cpuSelection){
        case 1:
            cpuChoice = "Rock";
            break;
        case 2:
            cpuChoice = "Paper";
            break;
        case 3:
            cpuChoice = "Scissor";
            break;
        
    }
    
    console.log(`CPU chose ${cpuChoice}`);
    
    
}

//Player turn
/*
function playerPlay(){
    let playerNumber = prompt('Please type in "Rock", "Paper" or "Scissors"');    
    switch (playerNumber.toLowerCase()){
        case "rock":
            playerChoice = "Rock";
            break;
        case "paper":
            playerChoice = "Paper";
            break;
        case "scissors":
            playerChoice = "Scissor";
            break;
        default:
        console.log('WRONG INPUT')
        playerChoice = playerPlay();
        
    }
    
    console.log(`You chose ${playerChoice}`);
    return playerChoice;
 }
 */
//Turn comparison
function turnWinnerIs(a, b){
    if(a == "Rock" && b == "Paper"
        || a == "Paper" && b == "Scissors"
        || a == "Scissors" && b == "Rock"){
                console.log(`${cpuChoice} beats ${playerChoice}. You lost!`);
                cpuScore++;
                return cpuScore;
            }else if(a === b){
                console.log(`It's a tie!`); 
                } else {
                console.log(`${playerChoice} beats ${cpuChoice}. You won!`);
                playerScore++;
                return playerScore;
            }        
}

//Plays 5 turns
function fiveTurnGame(){
    for(let i = 0; i < 5; i++){
        turnLoop();
        console.log(`Player ${playerScore} || ${cpuScore} CPU`)
    }
    if(playerScore < cpuScore){
        console.log(`You have ${playerScore} point(s), but the CPU has ${cpuScore} point(s). You LOSE the game.`)
    } else if(cpuScore < playerScore){
        console.log(`You have ${playerScore} point(s). The CPU has ${cpuScore} point(s). You WIN the game.`)
    } else {
        console.log(`You tied with ${playerScore} point(s).`)
    }
}

























/**************************************************OLD CODE
function playerPlay(){
    let playerSelection = prompt('Please choose "Rock" ("1"), "Paper" (2), or "Scissors" (3)');
    switch (playerSelection){
        case 1:
            let playerChose = "Rock"2";
            break;
        case 2:
            "l"et playerChose = "Paper";
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
*/
