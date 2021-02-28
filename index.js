// Code your solutions in this file
function writeCards(cards, event){
    let messages = [];
    for(let i=0; i<cards.length; i++){
        messages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
   return messages;
}

function countDown(number){
    while (number > 0){
        console.log(number);
        number -= 1;
    }
    console.log(number);
}