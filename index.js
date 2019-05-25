// Code your solutions in this file
const results = [];

function writeCards(stringNames, eventName) {
  let i = 0
  while (i < stringNames.length) {
    results.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
    i++;
  }
   return results;
}

function countdown(i) {
  for (let i = 10; i > -1; i -= 1) {
    console.log(i);
  }
}
