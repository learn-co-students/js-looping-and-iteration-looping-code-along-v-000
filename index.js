// Code your solutions in this file
function printBadges(employee_array){
    for (let index = 0; index < employee_array.length; index++) {
        employee = employee_array[index]
        console.log(`Welcome ${employee}! You are employee #${index + 1}.`)
    }
    return employee_array
}

function maybeHeads() {
    return Math.random() >= 0.5;
}

function tailsNeverFails(){
    let flips = 0
    while (maybeHeads()) {
        flips++
    }
    return `You got ${flips} tails in a row!`
}