// Code your solutions in this file
// Code your solutions in this file
function writeCards(name, eventName) {
  let message = [];
  for (let i = 0; i < name.length; i++) {
   message.push('Thank you, ' + name[i] + ', for the wonderful ' + eventName + ' gift!' );
  }
  return message;
}

function countdown (integer) {
  while (integer >= 0) {
    console.log(integer);
    integer--;
  }
}
