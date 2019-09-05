// Code your solutions in this file
function writeCards(name, giftType) {
	const thankYouCardMessages = []
	
	for (let i = 0; i < name.length; i++) {
		thankYouCardMessages.push(`Thank you, ${name[i]}, for the wonderful ${giftType} gift!`);
	}

	return thankYouCardMessages;
}

function countdown(number) {
	while(number >= 0){
		console.log(number--);
	}
}