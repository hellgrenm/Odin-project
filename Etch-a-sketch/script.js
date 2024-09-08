let startAmount = 13;
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);
let startButton = document.getElementById('start');
startButton.addEventListener('click', changeSize);


window.addEventListener('load', function(){
    createDivs(startAmount);
});

function createDivs (amount){ 
    let divRef = document.getElementById('mainDiv');
    for (let i = 0; i < amount; i++){
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'column');
        for (let j = 0; j < amount; j++){
            let innerDiv = document.createElement('div');
            innerDiv.setAttribute('class', 'inner');
            newDiv.appendChild(innerDiv);
        }
    divRef.appendChild(newDiv);
    } 

    const divs = document.querySelectorAll('#mainDiv div');

divs.forEach(div => {
    div.addEventListener('mouseover', function() {
        this.classList.add('changed');
    });

});
};

function reset (){
    let divRef = document.getElementById('mainDiv');

    while(divRef.hasChildNodes() ){
        divRef.removeChild(divRef.firstChild);
    }
    createDivs(startAmount);
}

function changeSize(){
    let numInput = document.getElementById('size').value;
    let divRef = document.getElementById('mainDiv');
    if (!isNaN(numInput) && numInput <= 13 ){ // if input is a  number and less than 13, remove old divs and create new ones. Looks bad for now over 13.
        while(divRef.hasChildNodes() ){
            divRef.removeChild(divRef.firstChild);
        }
    createDivs(numInput);
    } 
    else console.log('Enter valid number.');
};

