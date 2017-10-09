function printBadges (nameArray) {
	nameArray.forEach((name, index) => console.log(`Welcome ${name}! You are employee #${index+1}.`));
	return nameArray;
}


function tailsNeverFails () {
	let counter = 0;
	 while (Math.random() >= 0.5) {
	 	counter++;
	 }
	 return `You got ${counter} tails in a row!`;
}