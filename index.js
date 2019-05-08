// Code your solutions in this file

function writeCards(array, event) {
  for (let i = 0; i < array.length; i++)
    console.log(`Thank you, ${array[i]}, for the wonderful ${event} gift.`)
}

function countdown(integer) {
  while (integer <= 0) {
    console.log(integer--)
  }
}
