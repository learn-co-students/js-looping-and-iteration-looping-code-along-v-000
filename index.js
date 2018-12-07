// Code your solutions in this file
function printBadges(arrayNames) {
  for (let i = 0, i < arrayNames.length, i++) {
    console.log("Welcome, ${arrayNames[i]}! You are employee # ${i + 1}.")
  }
  return arrayNames;
}

function tailsNeverFails() {
  counter = 0
  while(Math.random() >= 0.5) {
    counter += 1;
  }
  console.log("You got ${counter} tails in a row!")
}
