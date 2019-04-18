// Code your solutions in this file

function printBadges(employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i+1}.`);
  }
  return employeeNames;
}

 function tailsNeverFails() {
  let tails = 0;
  let heads = 0;
  while(heads === 0) {
    if (Math.random() >= 0.5) {
      tails++;
    }
    else {
      heads++;
    }
  }
  return (`You got ${tails} tails in a row!`);
}

tailsNeverFails();