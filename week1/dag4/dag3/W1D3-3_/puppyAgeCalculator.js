let puppyAge;
let humanAge;

const caculateDogAge = (puppyAge, humanAge) => {
    let ageDog =  puppyAge*7;
    let ageYou = humanAge/7;
    console.log('Your dog is in human years ' + ageDog + ', you are '
    + ageYou + ' in dogyears.');
}

caculateDogAge (7, 42);