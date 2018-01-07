// Code your solutions in this file
function printBadges(people) {
  for (let i = 0; i < people.length; i++) {
    console.log(`Welcome ${people[i]}! You are employee #${i + 1}.`);
  }
  return people;
}


function tailsNeverFails() {
  let count = 0;
  while (Math.random() >= 0.5){
    count++;
  }
  return `You got ${count} tails in a row!`;
}
