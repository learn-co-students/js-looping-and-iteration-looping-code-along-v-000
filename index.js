// Code your solutions in this file
let cards = ["Lisa", "Kaitlin", "Jan"];

function writeCards(cards, surprise) {
    let answer = [];
    for (let i=0; i < cards.length; i++) {
        answer.push(`Thank you, ${cards[i]}, for the wonderful ${surprise} gift!`);
    }  
return answer;
}

function countDown(n) {
    let i=0;
    while (n >= i) {
        console.log(n - i); i++;
    }

}