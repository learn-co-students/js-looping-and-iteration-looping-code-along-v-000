// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
     console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
   }
  return names;
}
function tailsNeverFails() {
  function tails() {
    return Math.random() >= 0.5;
  }
  let i = 0;
  // do {
  //   i += 1;
  //
  // } while (tails())
  while (tails()) {
    i++;
  }
  return `You got ${i} tails in a row!`;
}
