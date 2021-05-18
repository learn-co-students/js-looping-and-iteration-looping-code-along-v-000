// Code your solutions in this file
const cards = []
function writeCards(recipients, event) {
  for (let i = 0; i < recipients.length; i++) {
    cards[i] = (`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
  }
return cards;
}

function countDown(int) {
  for (let i = int; i > -1; i--) {
    console.log(i);
  }

}
