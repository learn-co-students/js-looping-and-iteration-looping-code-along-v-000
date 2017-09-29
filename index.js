// Code your solutions in this file

const printBadges = (names) => {
  names.forEach((name, i) => {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  });
  return names;
};

const tailsNeverFails = () => {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails += 1;
  }

  return `You got ${tails} tails in a row!`;
};
