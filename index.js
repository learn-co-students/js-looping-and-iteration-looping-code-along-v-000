function printBadges(employees){
  for (let i = 0; i < employees.length; i++) {
      employee = employees[i]
      console.log(`Welcome ${employee}! You are employee #${i + 1}.`)
  }
  return employees
}

function tailsNeverFails() {
  let numberTails = 0
  while (Math.random() >= .5) {
    numberTails++
  }
  return `You got ${numberTails} tails in a row!`
}
