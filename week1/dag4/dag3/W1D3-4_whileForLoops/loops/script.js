

let colors = ['yellow', 'blue', 'red', 'orange'];

//For loop
for (let i = 0; i <= colors.length -1; i++){
    console.log(colors[ i ]);
};

 //For in loop
for(let index in colors){
  console.log(colors[ index ]);
};

//array.forEach

colors.forEach(element => console.log(element));