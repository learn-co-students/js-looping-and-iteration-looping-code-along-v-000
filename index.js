// const names;

function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
      console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
      return names;
  }

function tailsNeverFails() {
  let flip = Math.random();
  let i = 0;
  while (flip >= 0.5) {
    i++;
  }
    console.log(`You got ${i} tails in a row!`);
}
