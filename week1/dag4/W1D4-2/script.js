//1 CLICK EVENT AAN BUTTON
const btn = document.querySelector('#mybutton');

btn.addEventListener('click', function(){
    alert('Button clicked');
});

//2 GEBRUIK DEFER
//3 VOEG CLASS TOE AAN TWEEDE BUTTON

const background = document.querySelector('#change-btn');  

/*
background.addEventListener('click', function changeColor() {
    const element = document.getElementById('body');
    element.classList.add('red-background');
  }); 
*/
//4 TOGGLE


//DECLARATION
background.addEventListener('click', function toggleColor() {
    const element = document.getElementById('body');
    element.classList.toggle('red-background');
  });


//EXPRESSION 
const toggle = function(toggleColor){
    const element = document.getElementById('body');
    element.classList.toggle('red-background');
};

background.addEventListener('click', toggle);


//ARROW
const toggle = (toggleColor) => {
    const element = document.getElementById('body');
    element.classList.toggle('red-background');
};

background.addEventListener('click', toggle);
