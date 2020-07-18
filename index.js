// Code your solutions in this file

function writeCards(nameArray, eventName){
    let someArray = [];
    for (let index = 0; index < nameArray.length; index++) {
        let msg = `Thank you, ${nameArray[index]}, for the wonderful surprise gift!`;
        someArray.push(msg);
    }   
    return someArray;
}   

function countdown(positiveInteger) {
    while (positiveInteger>=0) {
        console.log(positiveInteger);
        positiveInteger--;
    }
}

