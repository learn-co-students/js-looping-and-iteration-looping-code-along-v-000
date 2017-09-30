// Code your solutions in this file
function printBadges(array) {
  for (let i=0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}


function maybeTails() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  var tails = 0
  while (maybeTails()) {
    tails +=1
  }
  return `You got ${tails} tails in a row`
}
