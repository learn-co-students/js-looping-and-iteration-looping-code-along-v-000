// Code your solutions in this file
function printBadges(arr) {
  for (let i=0; i<arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  }
  return arr
}

function tailsNeverFails() {
  let numberTails = 0
  while (Math.random() >= .5) {
    numberTails++
  }
  return `You got ${numberTails} tails in a row!`
}
