// Code your solutions in this file
function writeCards(array, str) {
    const cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${str} gift!`);
  }
    return cards;
} 

function countDown(num) {
    while(num > -1) {
     console.log(num);
     num--;
    }
}
