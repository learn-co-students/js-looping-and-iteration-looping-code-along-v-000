function printBadges(employee) {
  for (i = 0; i < employee.length; i++ ) {
    console.log(`Welcome ${employee[i]}! You are employee #${i + 1}.`)
  }
  return employee
}

function tailsNeverFails() {
  let flipCount = 0

  while (Math.random() >= 0.5) {
    flipCount++
  }
  return `You got ${flipCount} tails in a row!`
}
