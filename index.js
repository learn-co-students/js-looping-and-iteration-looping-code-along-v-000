// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i ++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

function tailsNeverFails() {
  function coinFlip() {
    return Math.random() >= 0.5;
  }

  let tails = 0

  while(coinFlip()) {
    tails++
  }
  return `You got ${tails} tails in a row!`
}
