
//While loop
let classRegister = ['Evi', 'Jesse', 'Lise'];
let i = 0;
while ( i < 3 ){
    console.log(classRegister[2]);//Logt de naam Lise 3 keer uit
    i++;
};

//for loop

//Incrementer loop van voor naar achter door de index
for( let i = 0; i < classRegister.length; i++){
    console.log(classRegister[ i ]);
};
//Decrementer; loopt van achter naar voren door de index
for(let i = classRegister.length -1; i >=0; i-- ){
    console.log(classRegister[ i ]);
};
//for in loop; laat het hele register zien
for(var index in classRegister){
    console.log(classRegister[ index ]);
};

classRegister.forEach(element => console.log(element));

//if statement
//true or false statement
let carsLeft = 0;
let carsRight = 0;
let greenMan = 'yes';

if( greenMan === 'yes'){
    console.log('cross the road');
} else if( carsLeft === 0 && carsRight=== 0 ){
    console.log( 'All clear! Cross the road');//je kunt zoveel als je wilt toevoegen met else if
} else {
    console.log('stay where you are!');
};
