// Code your solutions in this file
let names = ["Lisa", "Kaitlin", "Jan"];
let ocassion = ["surprise"];


function writeCards(names, occasion) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful ${ocassion} gift!`);
  }
  return result;
}
writeCards(names, ocassion);


let number = 10;
function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
