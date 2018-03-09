// Code your solutions in this file
function printBadges(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails(){
  let counter = 0;
  while (Math.random() >= 0.5) {
    counter++
  }
  return `You got ${counter} tails in a row!`
}

// function maybeTrue () {
//   return Math.random() >= 0.5;
// }
//
// while (maybeTrue()) {
//   console.log('And I ran... I ran so far away!');
// }

// In the function body, use a while loop with a condition that simulates a coin flip (two equally likely outcomes). For inspiration, check out the maybeTrue() example above. If the condition evaluates to true, the coin landed on 'Tails' and is flipped again. If the condition evaluates to false, the coin landed on 'Heads', and the 'Tails' streak is broken. At the end of the function, return a message to the user indicating how many times the coin landed on 'Tails' in a row, e.g.:
