function printBadges(list){

    for (let num = 0; num < list.length; num++) {
        console.log (`Welcome ${list[num]}! You are employee #${num + 1}.`);
    }
    return list;
}

function tailsNeverFails(){
    let count = 0;
    while(Math.random() >= 0.5){
        count++;
    }
    return `You got ${count} tails in a row!`;
}

