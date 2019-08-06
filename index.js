// Code your solutions in this file
function writeCards (names, occasion) {
  const messages = []
  for ( let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return messages;
}

function countdown (number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
