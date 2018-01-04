// Code your solutions in this file
names = ["Abel", "Ari", "Koi"]

function printBadges(array) {
  for (i = 0; i < array.length; i++) {
    console.log("Welcome " + array[i] + "! You are employee #" + (i + 1) + ".")
  }
  return array
}

function tailsNeverFails() {
  let counter = 0;

  while(Math.round(Math.random()) > 0) {
    counter++;
  }

  return "You got " + counter + " tails in a row!"
}
