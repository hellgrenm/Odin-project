
function makeAbout(){
    let content = document.getElementById("content");
    content.innerHTML = '';
    
    let aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('class', 'aboutDiv');

    let h1tag = document.createElement('h1');
    h1tag.textContent = "About us";
    aboutDiv.appendChild(h1tag);

    let textAboutDiv = document.createElement('div');
    textAboutDiv.setAttribute('class', 'textAboutDiv');


    let ptag = document.createElement('p');
    ptag.textContent = "Slice Me Up! isn't your average pizza place — unless your average pizza place throws tradition out the window and replaces it with chaos, cheese, and questionable life choices.From classic crusts to culinary crimes, we serve slices that make your taste buds cry (happy tears). Come for the food, stay for the identity crisis."
    textAboutDiv.appendChild(ptag);
    aboutDiv.appendChild(textAboutDiv);
    content.appendChild(aboutDiv);
}


export default makeAbout