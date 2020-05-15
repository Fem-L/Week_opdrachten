//Nieuwe elementen invoegen

let newLi = document.createElement("li");//maakt new list
let newA = document.createElement("a");//maakt nieuwe  a link

//defineer de plek waar het element moet komen
const menu = document.getElementById("main-nav").getElementsByTagName("ul"); // ul in nav

//method bevestig een nieuw cild onderaan li in de ul
menu.appendChild(newLi); 

//method om zelf te bepalen waar je element komt. twee parameters,1:het element 2:defineert de locatie/plek
menu.insertBefore(newLi, menu.getElementsByTagName("li"[0])); 

newLi.appendChild(newA); // om a tag aan li te verbinden
newA.innerHTML = "blog" //om tekst toe te voegen aan a tag


//Elementen verwijderen

//selecteer het te verwijderen elementen en het parent item en zet ze in een let

let parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];//[0]verwijst naar li positie

let child = parent.getElementsByTagName("li")[0];
let removed = parent.removeCild(child);
//call de method ,oproepen functie slaat de verwijderde elemnt in removed zodt je het nog weer op kunt roepen

