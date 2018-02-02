// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}

function tailsNeverFails(){
  let flip;
  let flips = 0
  while(flip !== 0){
    flip = Math.round(Math.random())
    flips++
  }
    return `You got ${flips - 1} tails in a row!`
}