
window.addEventListener('load', function(){
    createDivs();

});

function createDivs (){ // Create 16 divs
    let divRef = document.getElementById('mainDiv');

    for (let i = 0; i < 16; i++){
        let newDiv = document.createElement('div');
        divRef.appendChild(newDiv);
    }

};