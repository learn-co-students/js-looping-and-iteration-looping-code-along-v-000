function writeCards(arrayOfNames, eventName) {
	let cards = [];
	let result;
	for (let i = 0; i < arrayOfNames.length; i++) {
		result = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`;
		cards.push(result);
	}
	return cards;
}

function countdown() {
	let countdown = 10;
	while (countdown > -1) {
		console.log(countdown--);
	}
}
