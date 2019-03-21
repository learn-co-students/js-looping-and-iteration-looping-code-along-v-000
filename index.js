// Code your solutions in this file
const employee = ['Lisa', 'Kaitlin', 'Jan']
function printBadges(employee){
  for (let i = 0; i < employee.length; i++) {
        console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
    }
    return employee;
}

function tailsNeverFails(){
  let count = 0;
  while (Math.random() >= 0.5){
    count++;
  }
  return `You got ${count} tails in a row!`;
}
