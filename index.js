// Code your solutions in this file
function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}

function countdown(number){
    while (number >= 0){
    console.log(number--)
    }
}