// Code your solutions in this file
function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
  }
  return employees
};

function tailsNeverFails () {

  function heads () {
    return Math.random() >= 0.5;
  }

  let x = 0;
  while (heads()) {
    x = x + 1;
  }
  return `You got ${x} tails in a row!`
}
