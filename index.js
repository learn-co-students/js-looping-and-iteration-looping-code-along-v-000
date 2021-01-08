// Code your solutions in this file
function writeCards(names) {
  const cards = [];
  for (let i=0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return cards
}

function countDown(num) {
  for (let i=num; i >= 0; i--) {
    console.log(i)
  }
}