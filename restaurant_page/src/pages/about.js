import location from '../images/location.png';
import clock from '../images/clock.png';
import phone from '../images/phone.png';

export const aboutContainer =  document.createElement("div"); 
aboutContainer.id = "about-container";


const col41 = document.createElement("div");
const clockImg = document.createElement("img");
clockImg.height = 100
clockImg.src = clock;
const p1 = document.createElement("p");
p1.insertAdjacentHTML('beforeend', '<strong> Dinner</strong>');
p1.insertAdjacentHTML('beforeend', '<br />');
p1.insertAdjacentHTML('beforeend', 'Tue-Thur & Sun 5pm - 9:30pm');
p1.insertAdjacentHTML('beforeend', '<br />');
p1.insertAdjacentHTML('beforeend', 'Fri-Sat 5pm - 10:30pm');
p1.insertAdjacentHTML('beforeend', '<br />');
p1.insertAdjacentHTML('beforeend', '<strong> Lunch</strong>');
p1.insertAdjacentHTML('beforeend', '<br />');
p1.insertAdjacentHTML('beforeend', 'Tuesday - Sat 11:30pm - 3pm');
p1.insertAdjacentHTML('beforeend', '<br />');
p1.insertAdjacentHTML('beforeend', 'Sun: 11:30am - 4pm');
p1.insertAdjacentHTML('beforeend', '<br />');
p1.insertAdjacentHTML('beforeend', '<strong> CLOSED MONDAY</strong>');


col41.classList.add("col4");
col41.appendChild(clockImg);
col41.appendChild(p1);

const col42 = document.createElement("div");
const locationImg = document.createElement("img");
locationImg.height = 100;
locationImg.src = location;
const p2 = document.createElement("p");
p2.insertAdjacentHTML('beforeend', '3/56 Rabaul Road');
p2.insertAdjacentHTML('beforeend', '<bre />');
p2.insertAdjacentHTML('beforeend', 'Georges Hall, NSW 2198');
p2.insertAdjacentHTML('beforeend', '<br />')
p2.insertAdjacentHTML('beforeend', '(off Henry Lawson Drive)')

col42.classList.add("col4");
col42.appendChild(locationImg);
col42.appendChild(p2);

const col43 = document.createElement("div");
const phoneImg = document.createElement("img");
phoneImg.height = 100;
const p3 = document.createElement("p");
p3.innerHTML = "(02) 9755-5568";

col43.classList.add("col4");
col43.appendChild(phoneImg);
col43.appendChild(p3);


aboutContainer.appendChild(col41);
aboutContainer.appendChild(col42);
aboutContainer.appendChild(col43);

const pFooter = document.createElement("p");
pFooter.classList.add("footer");
pFooter.innerHTML = "Aquarius Seafood & Grill is also available for functions and parties";