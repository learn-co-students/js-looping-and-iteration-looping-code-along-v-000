// Code your solutions in this file

function printBadges(employeeArray) {
  for (let i = 0; i < employeeArray.length; i++) {
    console.log(`Welcome ${employeeArray[i]}! You are employee #${i + 1}.`);
  }
  return employeeArray;
}

function maybeTails() {
  return Math.random() >= 0.5
}

function tailsNeverFails() {
  let tails = 0;

  while (maybeTails()) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
