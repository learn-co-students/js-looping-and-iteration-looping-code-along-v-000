// Code your solutions in this file

function printBadges(array) {
  for(let i=0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}


function tailsNeverFails() {
  let a = []
  while(Math.random() >= 0.5) {
    a.push(" ")
  }
  return `You got ${a.length} tails in a row!`
}