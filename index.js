function writeCards(namesArr, event) {
  var messages = [];
  for (var i = 0; i < namesArr.length; i++) {
    messages.push(
      `Thank you, ${namesArr[i]}, for the wonderful ${event} gift!`
    );
  }
  return messages;
}

function countdown(int) {
  while (int >= 0) {
    console.log(int--);
  }
}