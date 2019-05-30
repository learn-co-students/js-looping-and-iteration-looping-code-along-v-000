// Code your solutions in this file
function writeCards(names, event) {
	let cardsArray = []
	for (let card = 0; card < names.length; card++) {
		cardsArray[card] = `Thank you, ${names[card]}, for the wonderful ${event} gift!`;
	}
	return cardsArray;
}

function countdown(num) {
	let i = num;
	while (i > 0) {
		console.log(i);
		i--;
	}
	console.log(i);
}