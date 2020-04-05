// Code your solutions in this file


function writeCards(recipients, eventName) {
    let message = []
    for (let i = 0; i < recipients.length; i++){
    message.push(`Thank you, ${recipients[i]}, for the wonderful surprise gift!`);
    }
    return message;
}


function countDown(number){
    let i = 0;
    while (i <= number){
        console.log(number -i);
        i++;
    }
}
