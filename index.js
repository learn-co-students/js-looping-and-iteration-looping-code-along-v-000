// Code your solutions in this file

function printBadges(employees) {
	for(let i = 0; i < employees.length; i++ ) {
		console.log (`Welcome ${employees[i]}! You are employee #${i+1}.`);
	}
	return employees
}


// function tailsNeverFails() {
// 	let coin = 'Tails'
// 	let counter = 0

// 	while(coin) {
// 		let number = Math.floor(Math.random() * 2) + 1;
// 		if (number == 1) {
// 			coin = 'Tails'
// 			counter ++
// 		} else if (number == 2 ) {
// 			coin = 'Heads'
// 			return `You got ${counter} tails in a row!`
// 		}

// 	}
// }


function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}