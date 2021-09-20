function computerPlay(){
    let options = ["rock", "paper", "scissors"]
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice; 
}

var playerScore=0;
var cpuScore=0;


function playRound(fixPlayerChoice, computerChoice){
   
    //Paper 
   if(fixPlayerChoice == "paper" && computerChoice == "paper"){
    playerScore++;
    cpuScore++;
    return "it's a draw";
   }
   if(fixPlayerChoice == "paper" && computerChoice == "rock"){
    playerScore++;
    return "Player won! paper beats rock";
   }
   if(fixPlayerChoice == "paper" && computerChoice == "scissors"){
    cpuScore++;
    return "CPU won! scissors beats rock";
   }
   //Scissors
   if(fixPlayerChoice == "scissors" && computerChoice == "sicssors"){
    playerScore++;
    cpuScore++;
    return "it's a draw";
   }
   if(fixPlayerChoice == "scissors" && computerChoice == "paper"){
    playerScore++;
    return "Player won! scissors beats paper";
   }
   if(fixPlayerChoice == "scissors" && computerChoice == "rock"){
    cpuScore++;
    return "CPU won! rock beats scissors";
   }
   //Rock
   if(fixPlayerChoice == "rock" && computerChoice == "rock"){
    playerScore++;
    cpuScore++;
    return "it's a draw";
   }
   if(fixPlayerChoice == "rock" && computerChoice == "scissors"){
    playerScore++;
    return "Player won! rock beats scissors";
   }
   if(fixPlayerChoice == "rock" && computerChoice == "paper"){
    cpuScore++;
    return "CPU won! paper beats rock";
   }
   else{
       return "That's not an acceptable choice";
   }

}

function game(){
    for (i = 0; i < 5; i++){
        //Ask player their choice
        let playerChoice = prompt("Write your choice: ");
        let fixPlayerChoice = playerChoice.toLowerCase();
        //Assign computer choice to a variable
        computerChoice = computerPlay();
        //Show choices
        console.log("CPU choose: " +  computerChoice);
        console.log("Player choose: "+ fixPlayerChoice);
        //Show result of the round
        console.log(playRound(fixPlayerChoice, computerChoice));
    }
    
    if (playerScore > cpuScore){
        console.log("Player won the game!!");
        console.log("Player: " +playerScore+" CPU: " +cpuScore);
    }else{
        console.log("CPU won the game!!");
        console.log("CPU: " +cpuScore+ " Player: " +playerScore);
    }
}
game();




