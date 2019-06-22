// Code your solutions in this file
function writeCards(array, event) {
  let result = [];
  for(let i=0; i<array.length; i++) {
    result.push(`Thank you, ${array[i]}, for the wonderful ${event} gift.`);
  }
  return result;
}

function countdown(i) {
  while(i>=0) {
    console.log(i);
    i--;
  }
}