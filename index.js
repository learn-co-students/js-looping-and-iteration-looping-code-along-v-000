// Code your solutions in this file
function writeCards(names) {
  let messages = [];
  for (var i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countdown(number) {
  while (number >= 0) {
    console.log(number)
    number--;
  }
}
