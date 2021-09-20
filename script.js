function computerPlay(){
    let options = ["rock", "paper", "scissors"]
    let choiced = options[Math.floor(Math.random()*options.length)];
    return choiced; 
}
console.log(computerPlay());
