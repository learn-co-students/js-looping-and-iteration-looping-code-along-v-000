function writeCards(names, event){
	let notes = []
	for (let i = 0; i < names.length; i++){
		notes.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
	}
	return notes;
}

function countdown(n){

	while (n >= 0 ){
		console.log(n);
		n--;
	}
	return n;
}
