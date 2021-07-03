// Code your solutions in this file

function printBadges(array){
  for (let i=0; i<array.length; i++){
    counter = i+1
    console.log(`Welcome ${array[i]}! You are employee #${counter}.`)
  }
  return array
}

function tailsNeverFails(){
  let count = 0;
  while (Math.random() >= 0.5) {
    count = count + 1;
  }
  let message = `You got ${count} tails in a row!`
  return message
}
