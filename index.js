// Code your solutions in this file
function printBadges(names) {
  for (let badge = 0; badge < names.length; badge++){
    console.log(`Welcome ${names[badge]}! You are employee #${badge + 1}.`)
  }
  return names
}


function tailsNeverFails() {
  let tails = 0;
    while (Math.random() >= 0.5) {
      tails++;
    }
      return `You got ${tails} tails in a row!`
}
