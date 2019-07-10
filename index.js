// Code your solutions in this file
//const cards = ['Lisa', 'Kaitlin', 'Jan' ];

function writeCards(namesArray, nameEvent) {
  let arr = []
  for (let i = 0; i < namesArray.length; i++) {
    arr.push(`Thank you, ${namesArray[i]}, for the wonderful ${nameEvent} gift!`);
  }
 return arr;
}

function countdown(number) {
  while (number > 0) {
  console.log(number);
    number--;
  }
  console.log(number);
}
