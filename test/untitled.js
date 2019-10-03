// Code your solutions in this file
const friends = ["Ada", "Brendan", "Ali"];

function writeCards(friends, event) {
	const messages = [];
	for (let i = 0; i < friends.length; i++) {
		messages.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
	};
	return messages;
}

function countdown(number) {
	while (number >= 0) {
		console.log(number--);
	}
}