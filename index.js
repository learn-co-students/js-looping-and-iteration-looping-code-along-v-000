// Code your solutions in this file

function printBadges(employees) {
  for ( let ind = 0; ind < employees.length; ind++ ) {
    console.log(`Welcome ${employees[ind]}! You are employee #${ind + 1}.`);
  }
  return employees;
}

function tailsNeverFails() {
  let heads = true;
  let ind = 0;
  while (heads) {
    heads = Math.random() >= 0.5;
    ind++;
  }
  return `You got ${ind-1} tails in a row!`;
}
