// Code your solutions in this file
function printBadges (employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees
}

function tailsNeverFails() {
  let counter = 0
  function flip () {
    return Math.random() >= 0.5;
  }
  while (flip()) {
    counter ++
  }
  return `You got ${counter} tails in a row!`
}
