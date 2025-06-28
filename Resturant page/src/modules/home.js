
function createHome(){
    let content = document.getElementById("content");
    content.innerHTML = '';
    let h1tag = document.createElement('h1');
    h1tag.textContent="Welcome to Slice Me Up!"

    let ptag1 = document.createElement('p');
    ptag1.textContent= "One slice away from happiness (and maybe a food coma).";
    ptag1.setAttribute('id', 'ptag1');
    ptag1.style.fontStyle ='italic'

    let infoDiv = document.createElement('div')
    infoDiv.setAttribute('class', 'info');

    let ptag2 = document.createElement('p');
    ptag2.textContent= "Pizza this, pizza that.";
    infoDiv.appendChild(ptag2);

    let ptag3 = document.createElement('p');
    ptag3.textContent= "At Slice Me Up, we don’t just toss dough — we toss tradition out the window."
    infoDiv.appendChild(ptag3);
    
    let ptag4 = document.createElement('p');
    ptag4.textContent= "From classic pepperoni to stuff that should probably be illegal, we’re serving chaotic deliciousness, one slice at a time."
    infoDiv.appendChild(ptag4);


    content.appendChild(h1tag);
    content.appendChild(ptag1);
    content.appendChild(infoDiv);

    let reviewsDiv = document.createElement('div');
    reviewsDiv.setAttribute('class', 'reviewDiv');

    let reviewDiv1 = document.createElement('div');
    let reviewPTag1 = document.createElement('p');
    reviewPTag1.textContent = "AMAZING Pizza - John Johnson";
    reviewDiv1.appendChild(reviewPTag1);

    
    let reviewDiv2 = document.createElement('div');
    let reviewPTag2 = document.createElement('p');
    reviewPTag2.textContent = "Is this legal? - Amy Andersson";
    reviewDiv2.appendChild(reviewPTag2);


    let reviewDiv3 = document.createElement('div');
    let reviewPTag3 = document.createElement('p');
    reviewPTag3.textContent = "I want someone to look at me the same way I look at this pizza - Carl Carlsson";
    reviewDiv3.appendChild(reviewPTag3);

    let reviewDiv4 = document.createElement('div');
    let reviewPTag4 = document.createElement('p');
    reviewPTag4.textContent = "Viva la pizza! - José González";
    reviewDiv4.appendChild(reviewPTag4);



    reviewsDiv.appendChild(reviewDiv1)
    reviewsDiv.appendChild(reviewDiv2)
    reviewsDiv.appendChild(reviewDiv3)
    reviewsDiv.appendChild(reviewDiv4)
    content.appendChild(reviewsDiv);

}


export default createHome;