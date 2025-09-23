import logo from '../images/logo.png';
export const home = document.createElement('div');

const logoDiv = document.createElement("div");
const logoImg = document.createElement("img");
logoImg.src = logo;

logoDiv.appendChild(logoImg);

const colDiv = document.createElement("div");
colDiv.classList.add("col");

const mainTextDiv = document.createElement("div");
mainTextDiv.classList.add("main-text");
mainTextDiv.innerHTML = "Seafood & grill on the banks of the Georges River";

const scheduleDiv = document.createElement("div");
scheduleDiv.classList.add("schedule");
scheduleDiv.innerHTML = "Open for lunch & dinner";

const blockButtonContainerDiv = document.createElement("div");
blockButtonContainerDiv.classList.add("block-button-container");
const blockButtonElement = document.createElement("button");
blockButtonElement.classList.add("block-button-element");
blockButtonElement.innerHTML = "Make a booking";
blockButtonContainerDiv.appendChild(blockButtonElement);

colDiv.appendChild(mainTextDiv);
colDiv.appendChild(scheduleDiv);
colDiv.appendChild(blockButtonContainerDiv);


home.appendChild(logoDiv);
home.appendChild(colDiv);
home.appendChild(blockButtonContainerDiv);