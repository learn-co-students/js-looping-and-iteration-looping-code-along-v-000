// Code your solutions in this file

function printBadges(name){
    for (let i = 0; i < name.length; i++ ) {
        console.log(`Welcome ${name[i]}! You are employee #${i + 1}.`);
        // LOG: Welcome Ada! You are employee #1.

    }
    return name;
}

function tailsNeverFails() {
    var tail = 0;
     while (Math.random() >= 0.5){
       tail++;
     }
    return(`You got ${tail} tails in a row!`);
}
 
