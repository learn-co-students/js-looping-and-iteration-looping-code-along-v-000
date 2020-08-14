const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";

function writeCards(names, event){
    let cards = []
    for (let i = 0; i<names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}
function countDown(n){
    let count = n
    while (count >= 0) {
        console.log(count);
        count -= 1
    }
}
