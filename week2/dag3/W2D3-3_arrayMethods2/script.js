//A: schrijf een functie met .find
// Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
const findSpiderMan = superheroes.find((hero) => hero.name === "Spiderman");
    
console.log(findSpiderMan);

//of uitgebreide schrijwijze
const findSpiderman = (superheroes) => {
    superheroes.find((superHero) => {
        return superHero.name === "spiderman"; //const spiderman wordt true
    });   
};

console.log(findSpiderMan);

//B. verdubbel de integers in nieuwe array

//voorbeeld van Luc;  klopt bij niet
/*
//.forEach
const doubleArrayValues = (arrayToBeDoubled) => {
    let doubledArray = [];
    arrayToBeDoubled.forEach((number, index) => {
        doubledArray[index] = number * 2;
    });
    return arrayToBeDoubled
};

console.log("double 1,2,3:", doubleArrayValues([1, 2, 3]));

//oplossing
const doubleArrayValues = (array) => {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 2);
    });
    return newArray;
  };
*/
//.map method
let doubleArrayValuesMap = (arrayToBeDoubled) => {
    return arrayToBeDoubled.map(getal => {
        return getal * 2;
    });
};

console.log(doubleArrayValuesMap([1, 2, 3]));

//C

const containsNumberBiggerThan10 = (numbersToCheck) => {
    return numbersToCheck.some(number => {
      return number > 10;
    });
};

console.log('Bevat nummers hoger dan 10', containsNumberBiggerThan10([1,4,3,6,9,7,11]));

//D
 
// result should be true


const isItalyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
//console.log(isItalyInTheGreat7);

const findItaly = isItalyInTheGreat7.includes('Italy');

console.log('Is italy in de great 7:', findItaly);

//E: vermenigvuldig met 10

let tenfold = (number) => {
    return number.map(getal => {
        return getal * 10;
    });
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F: zijn alle waarde onder de 100; true of false

let isBelow100 = (array) => {
    return array.every((number) => number < 100);
};

console.log('is below 100?:', isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

//G: 
// result should be 1118
const numberArray = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = numberArray.reduce((total, amount) =>  total + amount);

console.log(bigSum);