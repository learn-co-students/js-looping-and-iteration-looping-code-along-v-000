// Code your solutions in this file
function writeCards(names, occasion) {
  const responses = [];

  for (let i = 0; i < names.length; i++) {
    responses.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }

  return responses;
}

function countdown(from) {
  for (let i = from; i >= 0; i--) {
    console.log(i);
  }
}
