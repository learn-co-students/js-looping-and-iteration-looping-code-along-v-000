// Code your solutions in this file

function printBadges(array) {
  for (let i=0; i<array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let result = 'tails';
  let i=0;
  while (result === 'tails') {
  if (Math.random() < 0.5) {
    result = 'heads'
    return `You got ${i} tails in a row!`
  }
  i++;
  
    }
}
