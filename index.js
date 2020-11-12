// Code your solutions in this file
let names = ["Ada", "Brendan", "Ali"];
let ocassion = ["Birtday"];

function writeCards(names, ocassion) {
  let newArray = []
  for (let i = 0; i < names.length; i++) {

    newArray.push(`Thank you, ${names[i]}, for the wonderful ${ocassion} gift!`);
    // console.log(`Thank you ${names[i]}, for the wonderful ${ocassion} gift!`);
  }
  return newArray;
}

writeCards(names, ocassion);


let number = 10;
function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
