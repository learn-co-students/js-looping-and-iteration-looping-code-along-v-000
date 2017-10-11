// Code your solutions in this file
printBadges = (employees) => {
  for(let i=0;i<employees.length;i++){
    console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`)
  }
  return employees;
}

tailsNeverFails = () => {
  let tails = 0;
  while (Math.random() >= .5) {
    tails++
  }
  return `You got ${tails} tails in a row!`
}
