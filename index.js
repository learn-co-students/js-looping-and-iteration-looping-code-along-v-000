function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  
  return arr;
}

function tailsNeverFails() {
  let tailsCount = 0;
  while (Math.random() >= 0.5) {
    tailsCount++;
  }
  return `You got ${tailsCount} tails in a row!`;
}