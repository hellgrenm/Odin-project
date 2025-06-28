import "./styles.css";
import createHome from "./modules/home"
import createMenu from "./modules/menu"
import createAbout from "./modules/about"

document.addEventListener('DOMContentLoaded', function(){
    createHome()
    document.querySelector("#home").addEventListener('click', createHome);
    document.querySelector("#menu").addEventListener('click', createMenu);
    document.querySelector('#about').addEventListener('click', createAbout);

});