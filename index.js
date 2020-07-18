// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];
const thing = "surprise";

 
function writeCards(names, thing) {
    let myArray = []
    for (let i = 0; i < names.length; i++) {
        
    myArray.push(`Thank you, ${names[i]}, for the wonderful ${thing} gift!`);
  }
  return myArray;
}

writeCards(names, thing);

// Countdown function

/* const numero = 10;

function countdown(numero) {
    for (let index = numero; index >= 0; index--) {
        console.log(index); 
    }
}

countdown(numero); */

let numero = 10;

function countdown(numero){
    while (numero >= 0){
    console.log(numero);
    numero--;
    }
}

countdown(numero);