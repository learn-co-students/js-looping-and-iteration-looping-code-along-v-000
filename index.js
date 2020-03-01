// Code your solutions in this file
function printBadges(names) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names
}

function tailsNeverFails () {
  let counter = 0
  let coin = 1
  while (coin >= 0.5) {
    coin = Math.random();
  counter += 1
    }
console.log(coin)
return `You got ${counter - 1} tails in a row!`
}
