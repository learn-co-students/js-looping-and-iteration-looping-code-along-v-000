// Code your solutions in this file
function writeCards(array, type) {
    let thankYou = []
    for (let i = 0; i < array.length; i++) {
        thankYou.push(`Thank you, ${array[i]}, for the wonderful ${type} gift!`);
    }
    return thankYou;
}

function countdown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}