function computerPlay(){
    let options = ["rock", "paper", "scissors"]
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice; 
}

let playerChoice = prompt("Write your choice: ");
let fixPlayerChoice = playerChoice.toLowerCase();

function playRound(fixPlayerChoice, computerChoice){
    //Paper 
   if(fixPlayerChoice == "paper" && computerChoice == "paper"){
    return "it's a draw";
   }
   if(fixPlayerChoice == "paper" && computerChoice == "rock"){
    return "Player won! paper beats rock";
   }
   if(fixPlayerChoice == "paper" && computerChoice == "scissors"){
    return "CPU won! scissors beats rock";
   }
   //Scissors
   if(fixPlayerChoice == "scissors" && computerChoice == "sicssors"){
    return "it's a draw";
   }
   if(fixPlayerChoice == "scissors" && computerChoice == "paper"){
    return "Player won! scissors beats paper";
   }
   if(fixPlayerChoice == "scissors" && computerChoice == "rock"){
    return "CPU won! rock beats scissors";
   }
   //Rock
   if(fixPlayerChoice == "rock" && computerChoice == "rock"){
    return "it's a draw";
   }
   if(fixPlayerChoice == "rock" && computerChoice == "scissors"){
    return "Player won! rock beats scissors";
   }
   if(fixPlayerChoice == "rock" && computerChoice == "paper"){
    return "CPU won! paper beats rock";
   }
   else{
       return "That's not an acceptable choice";
   }

}
computerChoice = computerPlay();
console.log("CPU choose: " +  computerChoice);
console.log("Player choose: "+ fixPlayerChoice);

console.log(playRound(fixPlayerChoice, computerChoice));
