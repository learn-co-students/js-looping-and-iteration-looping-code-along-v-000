// Code your solutions in this file

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names;
}


function tailsNeverFails() {
  let timesTales = 0;
  while (Math.random() >= 0.5) {
    timesTales++;
  }
  return `You got ${timesTales} tails in a row!`
}
