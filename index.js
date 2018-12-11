// Code your solutions in this file
function printBadges(names) {
  for (i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  function maybeTrue() {
    return Math.random() >= 0.5;
}
let count = 0
while (maybeTrue()) {
    count++
}
return `You got ${count} tails in a row!`
};
