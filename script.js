let playerScore = 0;
let cpuScore =  0;

const playerScoreUI = document.getElementById('player-score');
const cpuScoreUI = document.getElementById('CPU-score');

const announcements = document.querySelector('.announcements');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const rockBox = document.querySelector('#rock-box');
const paperBox = document.querySelector('#paper-box');
const scissorsBox = document.querySelector('#scissors-box');

//Changes the color to indicate the players selection
function colorPlayer(fixPlayerChoice){
    switch (fixPlayerChoice){
        case "rock": rockBox.style.background = "blue";
        break;
        case "paper": paperBox.style.background = "blue";;
        break;
        case "scissors": scissorsBox.style.background = "blue";;
        break;
    }
}
//Changes the color to indicate the CPU selection
function colorCPU(computerChoice){
    switch (computerChoice){
        case "rock": rockBox.style.border = "5px solid red";
        break;
        case "paper": paperBox.style.border = "5px solid red";
        break;
        case "scissors": scissorsBox.style.border = "5px solid red";
        break;
    }
}
//Resets the color of the options
function backgroundReset(){
    rockBox.style.background = "#6D8A96";
    paperBox.style.background = "#6D8A96";
    scissorsBox.style.background = "#6D8A96";
}
function colorReset(){
    rockBox.style.border = "5px solid #66CED6";
    paperBox.style.border = "5px solid #66CED6";
    scissorsBox.style.border = "5px solid #66CED6";
}

function computerPlay(){
    let options = ["rock", "paper", "scissors"]
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice; 
}

function updateScore(){
    playerScoreUI.textContent = ` ${playerScore}`
    cpuScoreUI.textContent = ` ${cpuScore}`
    if (playerScore == 5 || cpuScore == 5){
        playerScore = 0;
        cpuScore = 0;
    }
}

//Options listener's
rock.addEventListener('click', e=>{
    backgroundReset();
    colorReset();
    fixPlayerChoice = "rock";
    colorPlayer(fixPlayerChoice);
    computerChoice = computerPlay();
    colorCPU(computerChoice);
    playRound(fixPlayerChoice, computerChoice);
    updateScore();
});
paper.addEventListener('click', e=>{
    backgroundReset();
    colorReset();
    fixPlayerChoice = "paper";
    colorPlayer(fixPlayerChoice);
    computerChoice = computerPlay();
    colorCPU(computerChoice);
    playRound(fixPlayerChoice, computerChoice);
    updateScore();
});
scissors.addEventListener('click', e=>{
    backgroundReset();
    colorReset();
    fixPlayerChoice = "scissors";
    colorPlayer(fixPlayerChoice);
    computerChoice = computerPlay();
    colorCPU(computerChoice);
    playRound(fixPlayerChoice, computerChoice);
    updateScore();
});

//Games Logic
function playRound(fixPlayerChoice, computerChoice){
    //if the players chooses Paper
   if(fixPlayerChoice == "paper" && computerChoice == "paper"){
       playerScore++;
       cpuScore++;
    return  announcements.textContent = "It's a draw";
   }
   if(fixPlayerChoice == "paper" && computerChoice == "rock"){
    playerScore++;
    return announcements.textContent = "Player won! paper beats rock";
   }
   if(fixPlayerChoice == "paper" && computerChoice == "scissors"){
    cpuScore++;
    return announcements.textContent = "CPU won! scissors beats paper";
   }
   //if the player chooses Scissors
   if(fixPlayerChoice == "scissors" && computerChoice == "sicssors"){
    playerScore++;
    cpuScore++;
    return announcements.textContent = "It's a draw!";
   }
   if(fixPlayerChoice == "scissors" && computerChoice == "paper"){
    playerScore++;
    return announcements.textContent = "Player won! scissors beats paper";
   }
   if(fixPlayerChoice == "scissors" && computerChoice == "rock"){
    cpuScore++;
    return announcements.textContent = "CPU won! rock beats scissors";
   }
   //if the player chooses rock
   if(fixPlayerChoice == "rock" && computerChoice == "rock"){
    playerScore++;
    cpuScore++;
    return announcements.textContent = "It's a draw";
   }
   if(fixPlayerChoice == "rock" && computerChoice == "scissors"){
    playerScore++;
    return announcements.textContent = "Player won! rock beats scissors";
   }
   if(fixPlayerChoice == "rock" && computerChoice == "paper"){
    cpuScore++;
    return announcements.textContent = "CPU won! paper beats rock";
   }
   else{
       return "That's not an acceptable choice";
   }
}




