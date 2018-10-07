// Code your solutions in this file
function printBadges(list){
    for (let i = 0; i<list.length; i++) {
        console.log(`Welcome ${list[i]}! You are employee #${i+1}.`);
    }
    return list;
}

function tailsNeverFails(){
    let toss = Math.random();
    let i = 0;
    while (toss >= 0.5){
        toss = Math.random();
        i++;
    }
    return `You got ${i} tails in a row!`
}