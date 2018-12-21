

function printBadges(badgeArr){
    for(i = 0; i < badgeArr.length; i++){
        console.log(`Welcome ${badgeArr[i]}! You are employee #${i + 1}.`);
    }
    return badgeArr;
}

function tailsNeverFails(){
    counter = 0;
    while(Math.random() >= 0.5){
        counter++;
    }
    return `You got ${counter} tails in a row!`
}