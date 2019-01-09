// Code your solutions in this file
function printBadges(employee) {
  for (let i = 0; i < employee.length; i++) {
    console.log(`Welcome ${employee[i]}! You are employee #${i + 1}.`);
  }

  return employee;
}

function tailsNeverFails() {
  function maybeTails() {
    return Math.random() >= 0.5;
  }

  let tailCount = 0;
  while (maybeTails()) {
    tailCount++;
  }

  return `You got ${tailCount} tails in a row!`;
}
