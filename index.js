// Code your solutions in this file

function printBadges(name) {
    //([initialization];  [condition];          [iteration])
    for (let counter = 0; counter < name.length; counter++) {
        //[loop body]
        console.log(`Welcome ${name[counter]}! You are employee #${counter+1}.`);
    }               
    return name
}

function tailsNeverFails() {
    let tailsCounter = 0;
       //([condition]) 
    while (Math.random() >= 0.5) {
        //[loop body]
        tailsCounter++;
        
    }
    return`You got ${tailsCounter} tails in a row!`;
}