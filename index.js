// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array
}

function tailsNeverFails() {
  let counter = 0
  let num = Math.floor(Math.random() * (1 - 0 + 1)) + 0 //0 = heads, 1 = tails
  while (num != 0) {
    counter++
    num = Math.floor(Math.random() * (1 - 0 + 1)) + 0
  }
  return (`You got ${counter} tails in a row!`) 
}
