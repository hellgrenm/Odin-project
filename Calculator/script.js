let number1 = [];
let number2 = [];
let operator = ""
let firstFinished = false;

function displayText (inc){
    let textRef = document.getElementById('disp');
    let str;
    if (Array.isArray(inc) ){
        str = inc.join('');
    } else {
       str = inc.toString();
    }
    textRef.textContent = str;

    let intVal = parseInt(str, 10);

}

function reset(){
    number1 = [];
    number2= [];
    operator = "";
    firstFinished = false;
    console.log('Reset!');
    document.getElementById('disp').textContent="0";
}

window.addEventListener('load', function(){
    addListeners();
    console.log('hej');
    document.getElementById('dot').addEventListener('click', reset);

    let operators = document.querySelectorAll('.operator');

    for (let i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(e){
            console.log('clicket');
            operator = e.target.textContent;
            firstFinished = true;
        });
    }
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


    if (!firstFinished){
        number1.push(dataId);
         displayText(number1);
    } else {number2.push(dataId);
        displayText(number2);
    }
}

let equalRef = document.getElementById('equals');
equalRef.addEventListener('click', equal);

function equal(){
    if (number1.length!==0 && number2.length!==0 && firstFinished===true){
        
        let firstStr = number1.join('');
        let first = parseInt(firstStr, 10); //convert to a int from the array

        let secondStr = number2.join('');
        let second = parseInt(secondStr, 10);

        results(first, second, operator);
    }
};

function results(num1, num2, op){

    switch(op){
        case '+':{
           let summa = num1 + num2;
           console.log('Summa är ' + summa);
           displayText(summa); 
           break;
        }
        case '*':{
            let ganger = num1 * num2;
            console.log('Ganer är ' + ganger);
            displayText(ganger);
            break;
        }
        case '/':{
            let divided = num1 / num2;
            console.log('Delar är ' + divided);
            displayText(divided);
            break;
        }
        case '-':{
            let minus = num1 - num2;
            console.log('Minus är ' + minus);
            displayText(minus);
            break;
        }
        default: return true;
    }


}
