
document.addEventListener('DOMContentLoaded', function(){
    const tiles = document.querySelectorAll(".gametile");
    for (const tile of tiles){
        tile.addEventListener("click", playgame)
    }
});

const playerOne = createUser("Player One", "X");
const playerTwo = createUser("Player Two", "O");
var currentPlayer = null;

function playgame(e){

    if (currentPlayer == null){
        currentPlayer = playerOne
        document.querySelector("#status").textContent = playerTwo.name + "'s turn"
    } else if (currentPlayer == playerOne){
        document.querySelector("#status").textContent = playerOne.name + "'s turn"
        currentPlayer = playerTwo
    } else {
        currentPlayer = playerOne
        document.querySelector("#status").textContent = playerTwo.name + "'s turn"
    }

    if (e.target.textContent == "") {
        e.target.textContent = "Hej"
    } else{
        e.target.textContent = ""
    }
}

function checkHorisontal(){
    const tiles = document.querySelectorAll(".gametile");
}

function checkVertical(){
    const tiles = document.querySelectorAll(".gametile");
}

function createUser(name, symbol){
    return {name, symbol}
}