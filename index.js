// Code your solutions in this file
function printBadges (employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

function tailsNeverFails () {
  function tailsFlipped () {
    return Math.random() >= 0.5;
  }
  let tailsCount = 0;
  while (tailsFlipped()) {
    tailsCount++;
  }
  return `You got ${tailsCount} tails in a row!`
}
