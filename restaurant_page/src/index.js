import "./styles.css"
import { aboutContainer } from "./pages/about.js"
import { menuDiv } from "./pages/menu.js";
import { home } from "./pages/home.js";

const mainContianer = document.querySelector(".container");

const menuBtn = document.querySelector("#menuBtn");
const homeBtn = document.querySelector("#homeBtn");
const aboutBtn = document.querySelector("#aboutBtn");

const switchTab = (tabName) => {
    mainContianer.innerHTML = "";
    mainContianer.appendChild(tabName);
};

menuBtn.addEventListener("click", ()=>{
    switchTab(menuDiv);
});

homeBtn.addEventListener("click", ()=>{
    switchTab(home);
});

aboutBtn.addEventListener("click", () => {
   switchTab(aboutContainer);
});

mainContianer.appendChild(aboutContainer);
