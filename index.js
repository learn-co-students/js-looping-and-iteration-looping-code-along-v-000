// Code your solutions in this file
function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }

  return names;
}
//A while loop is designed to loop an indefinite amount of times — it should keep looping while
//the condition is true or, said differently, until the condition is false
function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
