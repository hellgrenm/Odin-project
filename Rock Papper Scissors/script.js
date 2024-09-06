console.log('Hello World');

function getComputerChoice(){
    let random = Math.random();

    if (random < 1/3){
        return "rock";
    } else if (2/3){
        return "paper";
    } else return "scissors";

}

function getHumanChoice(){
    let choice = prompt('Rock, paper or scissors?');

    if (choice.toLowerCase()==='rock' ){
        return "rock"
    } else if (choice.toLowerCase() === "paper"){
        return "paper"
    } else if (choice.toLowerCase() === "scissors"){
        return "scissors";
    }

}







function playGame (){

    let humanScore = 0;
    let computerScore = 0;
    function playRound (humanChoice, computerChoice ){

        if (humanChoice === "rock"){
            if (computerChoice === "rock"){
                console.log('Tie!');
            } else if (computerChoice === "paper"){
                console.log('You lose! Paper beats rock.');
                computerScore++;
            } else if (computerChoice==='scissors') {
                console.log('You won! Rock beats scissor.');
                humanScore++;
            }
        } else if (humanChoice === "paper"){
            if (computerChoice ==="paper"){
                console.log('Tie!');
            } else if (computerChoice === "rock"){
                console.log('You won! Paper beats rock.');
                humanScore++;
            } else if (computerChoice ==="scissors"){
                console.log('You lose! Scissor beats paper.');
                computerScore++;
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice ==="scissors"){
                console.log('Tie!');
            } else if ( computerChoice ==='paper'){
                console.log('You won! Scissors beats paper.');
                humanScore++;
            } else if (computerChoice ==='rock'){
                console.log('You lose! Rock beats scissor');
                computerScore++;
            }
        }
    }
    for (let i = 0; i<5;i++){    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound (humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log('You won!')
    } else if (humanScore < computerScore){
        console.log('You lose!');
    }
}
 
playGame();


