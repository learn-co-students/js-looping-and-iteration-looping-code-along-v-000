// Code your solutions in this file

//take an array of names and gift type, loop through the array of names, return another array of strings combining thank you + gift
function writeCards(array, gift) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${gift} gift!`)
  }
  return newArray;
}

// countdown from a given number and console.log each step in the loop
function countdown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i)
    i--
  }
}
