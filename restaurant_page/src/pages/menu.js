import { menu } from '../modules/menuData';

export const menuDiv = document.createElement("div");
menuDiv.id = "menu";

const col2Div = document.createElement("div");
col2Div.classList.add("col-2");

const menuColDiv = document.createElement("div");
menuColDiv.classList.add("menu-col");

col2Div.appendChild(menuColDiv);

const titleH4 = document.createElement("h4");
titleH4.innerHTML = "Menu";

const menuItem = (menuNameStr, menuDescriptionStr, menuPriceStr) => {

    const menuCardDiv = document.createElement("div");
    menuCardDiv.classList.add("menu-card");
    const menuContainerDiv = document.createElement("div");
    menuCardDiv.classList.add("menu-container");
    const menuName = document.createElement("div");
    menuName.classList.add("name");
    menuName.innerHTML = menuNameStr;

    const menuDescription = document.createElement("div");
    menuDescription.classList.add("description");
    menuDescription.innerHTML = menuDescriptionStr;

    const menuPrice = document.createElement("div");
    menuPrice.classList.add("price");
    menuPrice.innerHTML = menuPriceStr;

    menuContainerDiv.appendChild(menuName);
    menuContainerDiv.appendChild(menuDescription);

    menuCardDiv.appendChild(menuContainerDiv);
    menuCardDiv.appendChild(menuPrice);

    menuColDiv.appendChild(menuCardDiv);
    col2Div.appendChild(menuColDiv);
}

col2Div.appendChild(titleH4);

menu.map((el)=>{
    menuItem(el.name, el.description, el.price);    
});


menuDiv.appendChild(col2Div);
