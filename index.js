function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}
function maybeTrue() {
  return Math.random() >= 0.5;
}
function tailsNeverFails() {
  let i = 0;
  while (maybeTrue()) {
    i++;
  }
  return `You got ${i} tails in a row!`; 
}
