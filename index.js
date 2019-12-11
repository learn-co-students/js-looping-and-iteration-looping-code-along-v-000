// Code your solutions in this file

function writeCards(names, eventName) {
  var thankYouMessages = []
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouMessages;
}

function countDown(number) {
  if (number > 0) {
    console.log(number);
    var newNumber = number - 1;
    countDown(newNumber);
  }
  else if (number == 0) {
    console.log(number);
     }
}