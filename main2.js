console.log('js-ok')

/* 
    1. Collego gli elementi del DOM
    2. creo una function che mi generi un numero casuale da 1 a 5


*/

const userNumber = document.getElementById('number');
const Randomnum =document.getElementById('randomcpu');
const btngioca= document.getElementById('btngioca');

let random = 0;

function getRandom(min, max){
    const random = Math.floor(Math.random() * (max - min)) + min;
    
    return random;
    
}

const number= getRandom(1, 6);

console.log(number);




