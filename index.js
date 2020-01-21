// Code your solutions in this file

function writeCards(recipients, reason){
  const messages = [];
  
  for(let i = 0; i < recipients.length; i++){
    messages.push(`Thank you, ${recipients[i]}, for the wonderful ${reason} gift!`);
  }
  
  return messages;
}

function countDown(startingNumber){
  while(startingNumber > -1){
    console.log(startingNumber);
    startingNumber--;
  }  
}