// Code your solutions in this file
//const employees = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(employees) {
	for (let i = 0; i < employees.length; i++) {
		console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
	}
	return employees;
}

function tailsNeverFails() {

	function maybeTrue () {
  		return Math.random() >= 0.5;
	}


	let counter = 0;
	while (maybeTrue()) {
		counter++;
	}
	return `You got ${counter} tails in a row!`; 
} 
