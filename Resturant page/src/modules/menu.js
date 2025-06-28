import sadpizza from "./sadpizza.jpg"
let recipes = [
    {
        image: sadpizza,
        heading: "Pepperoni Pizza",
        description: "A classic slice of happiness, slightly greasy — just like your ex."
    },
    {
        image: sadpizza,
        heading: "Mushroom Mayhem",
        description: "Loaded with mushrooms and mystery. Earthy, cheesy, slightly suspicious."
    },
    {
        image: sadpizza,
        heading: "Four-Cheese Funk",
        description: "Mozzarella, cheddar, gorgonzola, parmesan — because one cheese is never enough."
    },
    {
        image: sadpizza,
        heading: "Pineapple Panic",
        description: "Sweet. Salty. Controversial. Are you brave enough?"
    },
    {
        image: sadpizza,
        heading: "Spicy Regret",
        description: "Jalapeños, chili flakes, and a warning label. Don’t say we didn’t warn you."
    },
    {
        image: sadpizza,
        heading: "Vegan Vibes",
        description: "Plant-based power with zero guilt and 100% flavor. Even your meat-loving cousin will cry."
    },
    {
        image: sadpizza,
        heading: "Midnight Special",
        description: "Tastes better after 2 a.m. Comes with a side of poor decisions."
    },
    {
        image: sadpizza,
        heading: "Carbonara Calamity",
        description: "Inspired by pasta. Not traditional. Still delicious. Don't tell Italy."
    }
];



function createMenu(){
    let content = document.getElementById("content"); 
    content.innerHTML = '';
    let h1tag = document.createElement('h1');
    h1tag.textContent = "Our pizzas";
    content.appendChild(h1tag);

    let pizzasDiv = document.createElement('div');
    pizzasDiv.setAttribute('class', 'pizzasDiv');
    content.appendChild(pizzasDiv);
    for (let recipe of recipes){
        let menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menuItem');

        let pizzaName = document.createElement('p');
        pizzaName.textContent = recipe.heading;

        let pizzaDescription = document.createElement('p');
        pizzaDescription.textContent = recipe.description;

        let pizzaImg = document.createElement('img');
        pizzaImg.src = recipe.image;


        menuItem.appendChild(pizzaName);
        menuItem.appendChild(pizzaDescription);
        menuItem.appendChild(pizzaImg);
        pizzasDiv.appendChild(menuItem);
    }
    
}

export default createMenu