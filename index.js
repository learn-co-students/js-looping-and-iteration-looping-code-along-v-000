// Code your solutions in this file

function printBadges(array){
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}

function tailsNeverFails(){

}


function tailsNeverFails() {
  let tails_count = 0;

  while (Math.random() >= 0.5) {
    tails_count++;
  }
  return `You got ${tails_count} tails in a row!`;
}

//
// function tailsNeverFails () {
//   let tails_count = 0;
//
//   while (Math.random() >= 0.5) {
//
//     tails++;
//   }
//
//   return `You got ${tails} tails in a row!`;
// }
