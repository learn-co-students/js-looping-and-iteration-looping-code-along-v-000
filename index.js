// Code your solutions in this file
function printBadges(employees) {
    for (let x=0; x<employees.length; x++) {
        console.log(`Welcome ${employees[x]}! You are employee #${x+1}.`);
    }
    return employees;
}

function tailsNeverFails() {
    let x = 0;
    while(Math.random() >= 0.5) {
        x += 1;
    }
    return `You got ${x} tails in a row!`;
}