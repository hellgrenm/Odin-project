console.log('Hello World');
let statusText = document.getElementById('result');
let actionText = document.getElementById('action');
let playerChoice = 0;
let computersChoice = 0;
let humanScore = 0;
let computerScore =0;
let turns = 0;

window.addEventListener('load', function(){
    document.getElementById('start').addEventListener('click', hideStart);
    document.getElementById('rock').addEventListener('click', getHuman);
    document.getElementById('paper').addEventListener('click', getHuman);
    document.getElementById('scissor').addEventListener('click', getHuman);
})

function getComputerChoice(){
    let random = Math.random();

    if (random < 1/3){
        return computersChoice=1; //rock
    } else if (random < 2/3){ //paper
        return computersChoice=2;
    } else return computersChoice=3; //scissor

}

function hideStart(){ //Hides the start button and show rock paper scissor buttons.
    let playButtons = document.querySelectorAll('button');
    playButtons.forEach(button => {
        button.classList.toggle('hidden');
      });
      statusText.textContent='Lets play!';
}

function getHuman(e){
    console.log(e.target.id);
    if (e.target.id==='rock'){
        playerChoice=1;
    } else if (e.target.id==='paper'){
        playerChoice=2;
    } else playerChoice =3;
    computersChoice = getComputerChoice();
    playGame();
}

function gameOver (){
    actionText.textContent="";
    let playButtons = document.querySelectorAll('button');
    if (humanScore > computerScore){
        console.log('You won!')
        statusText.textContent = 'You won!';
        
    } else if (humanScore < computerScore){
        statusText.textContent = 'You lose!';
    } else if (humanScore === computerScore){
        statusText.textContent='Its a tie!'
    }
      playButtons.forEach(button => {
        button.classList.toggle('hidden');
      });
      turns=0;
      humanScore=0;
      computerScore=0;
};
    



function playGame (){
 
    playRound(playerChoice, computersChoice)
    console.log('antal turns är ' + turns);
    function playRound (humanChoice, computerChoice ){

        if (humanChoice === 1){
            if (computerChoice === 1){
                console.log('Tie!');
                actionText.textContent='Ohh its a tie!';
                turns++;
            } else if (computerChoice === 2){
                console.log('You lose! Paper beats rock.');
                actionText.textContent='You lose! Paper beats rock.';
                computerScore++;
                turns++;
            } else if (computerChoice===3) {
                console.log('You won! Rock beats scissor.');
                actionText.textContent='You won! Rock beats scissor.';
                humanScore++;
                turns++;
            }
        } else if (humanChoice === 2){
            if (computerChoice ===2){
                turns++;
                console.log('Tie!');
                actionText.textContent='Ohh its a tie!';
            } else if (computerChoice === 1){
                turns++;
                console.log('You won! Paper beats rock.');
                actionText.textContent='You won! Paper beats rock.';
                humanScore++;
            } else if (computerChoice ===3){
                console.log('You lose! Scissor beats paper.');
                actionText.textContent='You lose! Scissor beats paper.';
                turns++;
                computerScore++;
            }
        } else if (humanChoice === 3){
            if (computerChoice ===3){
                turns++;
                actionText.textContent='Ohh its a tie!';
            } else if ( computerChoice ===2){
                turns++;
                console.log('You won! Scissors beats paper.');
                actionText.textContent='You won! Scissors beats paper.';
                humanScore++;
            } else if (computerChoice ===1){
                turns++;
                actionText.textContent='You lose! Rock beats scissor';
                console.log('You lose! Rock beats scissor');
                computerScore++;
            }
        }
        statusText.textContent = 'Maximum turns is 5, now at : ' + turns + '. The score is: Human player ' + humanScore + '. Computer: ' + computerScore;

    }
    
 
    if (turns==5){
        gameOver();
    }
 
}







