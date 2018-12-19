function printBadges(emp){
  for (let i = 0; i < emp.length; i++){
    console.log(`Welcome ${emp[i]}! You are employee #${i+1}.`)

  }
  return emp
}

function tailsNeverFails(){
  let count = 0
  while (Math.random() >= 0.5) {
    count++
  }
  return `You got ${count} tails in a row!`
}
