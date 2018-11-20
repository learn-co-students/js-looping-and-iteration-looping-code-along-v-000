// Code your solutions in this file
//
function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 0.5) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}

function printBadges(emp) {
  for (let i = 0; i < emp.length; i++) {
    console.log(`Welcome ${emp[i]}! You are employee #${i + 1}.`);
  }
  return emp;
}
