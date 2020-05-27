// Code your solutions in this file
// build a function named writeCards() that accepts two arguments: an array of string names, and an event name.
function writeCards(names, event_name) {
  const cards = []
  // Create a for loop with a counter that starts at 0 and increments at the end of each loop.
  // The condition should halt the for loop after the last name in the array is printed out in the loop body.
  for (let i = 0; i < names.length; i++) {
    // create a custom message for each name from the provided array, thanking that person for their gift.
    // Collect the messages in an array and return this array.
    cards[i] = `Thank you, ${names[i]}, for the wonderful ${event_name} gift!`;
  }
  return cards;
}

// write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log().
function countDown(start_num) {
  let i = 0;
  while (i <= start_num) {
    console.log(start_num - i);
    i++;
  }
}
