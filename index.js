// Code your solutions in this file

function printBadges(nameArr) {
  for ( let i = 0; i < nameArr.length; i++) {
    console.log(`Welcome ${nameArr[i]}! You are employee #${i + 1}.`);
  }
  return nameArr
}

function tailsNeverFails() {
  let j = 0;
  while (Math.random() >= 0.5) {
    j++;
  }
  return `You got ${j} tails in a row!`
}
