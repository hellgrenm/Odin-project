let playerOne = null;
let playerTwo = null;
var gameField = Array('', '', '', '', '', '', '', '', '');
var currentPlayer = null;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

document.addEventListener('DOMContentLoaded', function(){
    addListeners()
    document.querySelector("#restart").addEventListener('click', reset)
    document.querySelector("#addPlayer").addEventListener('click', addUser)
    document.querySelector("#newPlayers").addEventListener('click', resetPlayers)
});

function addListeners(){
    const tiles = document.querySelectorAll(".gametile");
    for (const tile of tiles){
        tile.addEventListener("click", playgame)
    }
}

function removeListeners(){
    const tiles = document.querySelectorAll(".gametile");
    for (const tile of tiles){
        tile.removeEventListener("click", playgame)
    }
}

function playgame(e){
    let currentTD = e.target.getAttribute('data-id');
    if (e.target.textContent == ""){
        if (currentPlayer == null){
        currentPlayer = playerOne
        e.target.textContent = currentPlayer.symbol
        gameField[currentTD] = currentPlayer.symbol
        document.querySelector("#status").textContent = playerTwo.name + "'s turn (" + playerTwo.symbol + ")"
    } else if (currentPlayer == playerOne){
        currentPlayer = playerTwo
        e.target.textContent = currentPlayer.symbol
        gameField[currentTD] = currentPlayer.symbol
        document.querySelector("#status").textContent = playerOne.name + "'s turn(" + playerOne.symbol + ")"
    } else {
        currentPlayer = playerOne
        e.target.textContent = currentPlayer.symbol
        gameField[currentTD] = currentPlayer.symbol
        document.querySelector("#status").textContent = playerTwo.name + "'s turn(" + playerTwo.symbol + ")"
    }
    }

   
    let winner = checkWin()
    let draw = checkDraw()
    console.log(draw)
    if (winner){
        if (winner == 'X') {
            document.querySelector("#status").textContent = `Player one ${playerOne.name} wins!`;
        } else {
            document.querySelector("#status").textContent = `Player one ${playerTwo.name} wins!`;
        }
        document.querySelector("#btns").classList.toggle("hidden");
        removeListeners()
    } else if (draw){
        document.querySelector("#status").textContent = "It's a draw.";
        document.querySelector("#btns").classList.toggle("hidden");
        removeListeners();
    }

}


function checkWin(){ 
    for (const winningCombo of winningCombinations){
        const[a, b, c] = winningCombo;
        if (gameField[a] !== '' && gameField[a] == gameField[b] && gameField[b] == gameField[c]){
            return gameField[a]
        }
    }
    return null
}

function checkDraw(){

    for (let field of gameField){
        if(field==''){
            return false;
        }
    }
    return true
}




function createUser(name, symbol){
    return {name, symbol}
}

function addUser(){
    let userInput = document.querySelector("#nameInput");
    if (userInput.value == ""){
         window.alert("Enter name");
    } else if (playerOne == null){
        playerOne = createUser(userInput.value, 'X')
        userInput.value = ""
        document.querySelector('#textNameInput').textContent = "Enter name for player-two"
    } else {   
        playerTwo = createUser(userInput.value, 'O')
        document.querySelector('.userInput').classList.toggle("hidden");
        document.querySelector("#status").textContent=`Let's play! ${playerOne.name} starts`;
        document.querySelector("#main-game").classList.toggle("hidden");
    }
}

function resetPlayers(){
    playerOne = null;
    playerTwo = null;
    gameField = Array('', '', '', '', '', '', '', '', '');
    resetTiles()
    addListeners()
    document.querySelector('.userInput').classList.toggle("hidden");
    document.querySelector("#main-game").classList.toggle("hidden");
    document.querySelector("#btns").classList.toggle("hidden");
    document.querySelector('#textNameInput').textContent = "Enter name for player-one"
    document.querySelector("#nameInput").value = ""
    document.querySelector("#status").textContent="";


}

function resetTiles(){
    const tiles = document.querySelectorAll(".gametile");
    for (const tile of tiles){
        tile.textContent="";
    }
}

function reset(){
    gameField = Array('', '', '', '', '', '', '', '', '');
    addListeners()
    resetTiles()
    document.querySelector("#status").textContent=`Let's play! ${playerOne.name} starts`;
    document.querySelector("#btns").classList.toggle("hidden");
    currentPlayer = null;
}