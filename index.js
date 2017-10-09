// Code your solutions in this file
printBadges = (['Ada', 'Brendan', 'Ali'])

printBadges = (printBadges) => {
  for(let i = 0; i < printBadges.length; i++){
    console.log(`Welcome ${printBadges[i]}! You are employee #${i + 1}.`)
  }

  return printBadges
}


tailsNeverFails = () => {
  let counter = 0;

  while(Math.random() >= 0.5) {
    counter++
  }

  return `You got ${counter} tails in a row!`;
}
