// Code your solutions in this file

const employees = ['Lisa', 'Kaitlin', 'Jan'];

// invokes console.log() once for each element in the passed-in array ‣
// prints out a welcome badge for each employee ‣
// returns the passed-in array
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees;
}

// invokes Math.random() to simulate coin flips ‣
// returns the number of "Tails" flips in a row ‣
// loops indefinitely until a flip results in "Heads"
function tailsNeverFails() {
  let count = 0;
  while (Math.random() >= 0.3) {
    ++count;
  }
  return `You got ${count} tails in a row!`;
}
