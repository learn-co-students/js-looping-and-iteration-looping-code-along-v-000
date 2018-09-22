function printBadges(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
	}
	return array;
}

function tailsNeverFails() {
	let tailsCounter = 0;
	
	while(Math.random() >= 0.5) {
		tailsCounter++;
	}

	return `You got ${tailsCounter} tails in a row!`;
}