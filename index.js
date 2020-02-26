function printBadges(ary){
  for (i = 0; i < ary.length; i++) {
    console.log(`Welcome ${ary[i]}! You are employee #${i+1}.`);
  }
  return ary;
}

function tailsNeverFails() {
  let tails_counter = 0;
  while (Math.random() >= 0.5) {
    tails_counter += 1;
  }
  return `You got ${tails_counter} tails in a row!`;
}
