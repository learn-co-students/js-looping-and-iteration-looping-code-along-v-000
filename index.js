// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails() {
  function maybeTails() {
    return Math.random() >= 0.5
  }

  let tailsAmount = 0

  while (maybeTails()) {
    ++tailsAmount
  }

  return `You got ${tailsAmount} tails in a row!`
}
