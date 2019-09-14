// Code your solutions in this file

function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }

  return arr;
}

function maybeTails() {
  return (Math.floor(Math.random() * 2) == 0);
}

function tailsNeverFails() {
  let i = 0;
  while (maybeTails()) {
    i++
  }
  return `You got ${i} tails in a row!`;
}

