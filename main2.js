console.log('js-ok')

const userNumber = document.getElementById('numb');
const btngioca= document.getElementById('play');
const choice = document.getElementById('scelta');
const DOMresult = document.getElementById('result');

let random = 0;
let cpunumber = 0;


function getRandom(min, max){
    const random = Math.floor(Math.random() * (max - min)  ) + min;
    
    return random;
}

function isPari(sum){
    if(sum % 2){
     return false;
    }
    else{
    return true;
    }

}

btngioca.addEventListener('click', function(){

    const cpunumber = getRandom(1, 6);

    let userchoice = choice.value;
    let usernum = parseInt(userNumber.value);

    let sum = cpunumber + usernum;
    
    console.log(sum)
 
    const result = isPari(sum) ? 'pari' : 'dispari';
   
    const winner = userchoice === result ? 'hai vinto tu!' : 'Ha vinto la cpu';
    
    DOMresult.innerText= winner;
})


