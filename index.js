const senders = ["Ada", "Brendan", "Ali"]

function writeCards(senders, event){
  let i = 0
  const cards = []
  while (i < senders.length){
    cards.push(`Thank you, ${senders[i]}, for the wonderful ${event} gift!`)
    i++
  }
  return cards
}


function countDown(number){
  while (number >= 0) {
    console.log(number);
    number--
  }
}