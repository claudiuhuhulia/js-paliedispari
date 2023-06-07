console.log('js-ok')


const inputWord= document.getElementById('word');
const button= document.getElementById('btn');
const outputResult = document.getElementById('result');

 
let reverseWord ='';

function isPali(){

    const word = inputWord.value;

    for( i = word.length ; i >= 0 ; i--){
        reverseWord += word.charAt(i);
    }

    if(reverseWord === word){
        return true;
    }
    else{
        return false
    }
  
}


button.addEventListener('click', function(){
    const message= isPali() ? 'è palindromo' : 'non è palidnromo'
    outputResult.innerText = message;
})

