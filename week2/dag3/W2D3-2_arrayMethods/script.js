

//A: schrijf een functie om het woord 'cool' toe te voegen aan een array met string.

const addTheWordCool = (array) => {
    array.push('cool');
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

//B: retourneer aantal elementen in een array
/*
const amountOfElementsInArray = (array) => {
    return array.length;
};
*/
//of 
const amountOfElementsInArray = (array) => array.length;
  
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));

//C: retourneer het eerste element van de array
/*
const selectBelgiumFromBenelux = (array) => {
    return array[0];
};
*/
//of
const selectBelgiumFromBenelux = (array) => array[0];

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

//D: retourneer het laatste element
/*
const lastElementInArray = (array) => {
    return array[array.length - 1];
};
*/
//of
const lastElementInArray = (array) => {
    return array.pop();
  };

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//E: haal eerste element uit array en retourneer de rest

const presidents = ["Trump", "Obama", "Bush", "Clinton"];
console.log(presidents.length);

const impeachTrumpSlice = (array) => {
    return array.slice(1, 4);  //kopieert array en verwijderd item uit de nieuwe array
};

console.log(impeachTrumpSlice(presidents));

const impeachTrumpSplice = (array) => {
    array.splice(0, 1); //verwijderd item uit bestaande array
    return array;
};

console.log(impeachTrumpSplice(presidents)); 

//F: maak een string van de array

const stringsTogether = (elements) => {
    return elements.join(' ');
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']));

//G: schrijf een functie die 2 arrays combineert tot 1 array
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combineArrays = (firstArray, secondArray) => {
    return firstArray.concat(secondArray);    
};

console.log(combineArrays(firstArray, secondArray));