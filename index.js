// for loop - when number of times a loop is suppose to run is known.
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
  return names;
}

// while loop - when number of times the loop is suppose to run is unkown.
function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let tailsCount = 0;
  while(maybeTrue()) {
    tailsCount ++;
  }

  return `You got ${tailsCount} tails in a row!`
}
