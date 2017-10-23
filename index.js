function printBadges(array){
    for (let i = 0; i < array.length; i++){
        console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
    }
    return array;
}

function tailsNeverFails(){
    let count = 0
    while(Math.random() >= 0.5){
        console.log(`You got ${count} tails in a row`)
        count++;
        
    }
    return `You got ${count} tails in a row!`;
}