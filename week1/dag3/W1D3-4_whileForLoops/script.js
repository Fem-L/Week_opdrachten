/*
//While loop
//wanneer de condition is true blijft de loop lopen. 
//Daar crasht je computer op!!

while(condition){
    doe dit
};

let = 5;

while(age < 10){
    console.log('your age is less then 10');
    age++;// incrementer om uit de loop te breken tel je de jaren op totdat het boven 10 is
};

console.log('your age is less then 10');

//For loops
//In een for() loop worden de variabele(index) 
//de condition(voorwaarde) en de incrementer(indexbewerking) gekoppeld tussen ()

for (age = 5; age < 10; age++){
    console.log('your age is less then 10');
};

console.log('your age is less then 10');
*/

//The even/odd reporter
let getal = 5;

for (let index = 0; index <= 5; index++) {
    if (getal % 2 === 0) {
        console.log('Dit getal is even');
    }else {
        console.log('Dit getal is oneven');
    }
};

//multiplication tables
let vermenigvuldigen = 9;

for (let index = 0; index <= 10; index++) {
    let resultaat = vermenigvuldigen * index;
    console.log(vermenigvuldigen + '*' + index + ' = ' + resultaat);
};












