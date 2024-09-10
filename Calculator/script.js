let number1 = [];
let number2 = [];
let operator = ""
let firstFinished = false;

function displayText (inc){
    let textRef = document.getElementById('disp');
    let str = inc.join('');
    textRef.textContent = str;

    let intVal = parseInt(str, 10);
    console.log(intVal);
}

function reset(){
    number1 = [];
    number2= [];
    operator = "";
    console.log('Reset!');
    displayText(0);
}

window.addEventListener('load', function(){
    addListeners();
    console.log('hej');
    document.getElementById('dot').addEventListener('click', reset);

});

function addListeners(){
    let numbers = document.querySelectorAll('.numbers');
    console.log(numbers[0])

    for (let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener('click', addNum);
    }
}

function addNum(e){

    let dataId = e.target.getAttribute('data-id');
    console.log(dataId);


    if (!firstFinished){
        number1.push(dataId);
         displayText(number1);

    } else {number2.push(dataId);
        displayText(number2);
    }
 
}
