// Code your solutions in this file

function printBadges(name) {
    //([initialization];  [condition];          [iteration])
    for (let counter = 0; counter < name.length; counter++) {
        //[loop body]
        console.log(`Welcome ${name[counter]}! You are employee #${counter+1}.`);
    }               
    return name
}

let counter = 0;

function tailsNeverFails() {
    return Math.random() >= 0.5;
        counter++;
            //([condition]) 
        while (tailsNeverFails()) {
            
            //[loop body]
            
        console.log(`You got ${counter+1} tails in a row!`);
    }
}