
function writeCards(names, event) {
  let messageArray = [];
  for (let i = 0; i < names.length; i++) {
    messageArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messageArray;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
