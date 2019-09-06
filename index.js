// Code your solutions in this file
function printBadges (names) {
	for (let i = 0, num = 1; i < names.length; i++, num++) {
		console.log(`Welcome ${names[i]}! You are employee #${num}.`);
	}
	return names;
}


function tailsNeverFails() {
  let num = 0;
  while (Math.random() >= 0.5) {
    num++;
  }
  return `You got ${num} tails in a row!`;
}