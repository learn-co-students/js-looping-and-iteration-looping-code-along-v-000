// Code your solutions in this file
function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  let count = 0;

  while (tails()) {
    (++count);
  }
  return `You got ${count} tails in a row!`;
}

function tails() {
  let coin = Math.random();
  if (coin >= 0.5) {
    return true; 
  } else {
    return false;
  }
} 
