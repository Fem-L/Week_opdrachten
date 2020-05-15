
const button = document.getElementsByClassName('big-five-button');
console.log(button); 

//maak een array van nodelist
//var items = document.querySelectorAll('li');
//var itemsArray = Array.from(items);


Array.from(button).forEach(item =>{
    item.addEventListener('click', event => {
        let dier = item.value;
        return dier;
    });
});


/*
button.addEventListener('click', function (){
    console.log("het werkt!");
});

let waardeButton = document.getElementsByClassName('big-five-button');

const checkWaarde = () => {
    
}

const bigFiveButton = document.getElementsByClassName('big-five-button');
Array.from(bigFiveButton).forEach(item => {
    item.addEventListener('click', event => {
        let dier = item.value
        return dier
    })
})
const dieren = Array();
*/