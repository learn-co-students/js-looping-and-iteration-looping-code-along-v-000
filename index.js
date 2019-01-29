// Code your solutions in this file
function printBadges(nameList) {
    for (let i = 0; i < nameList.length; i++) {
        console.log(`Welcome ${nameList[i]}! You are employee #${i+1}.`);
    }

    return nameList;
}

function tailsNeverFails() {
    let i = 0;
    while (Math.random() >= 0.5 ) {
        i++;
    }
    
    return `You got ${i} tails in a row!`
}