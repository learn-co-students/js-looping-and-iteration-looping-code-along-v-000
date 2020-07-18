// Code your solutions in this file
/////////////////////////////////////
// FOR LOOP
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}
// initialization =   let age = 30 (let because value changes)
// condition =     age < 40
// iteration =     age++
// loop body =     console.log....

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts.(gifts);



const array = ["hal", "steve", "jen"];

const eventName = "birthday";

function writeCards(array, eventName) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Thanks ${array[i]} for the ${eventName} gift!`);
  }
  return array;
}

writeCards(["jen", "lou", "bob"], "birthday");



/////////////////////////////////////////////////////////////////////



WHILE loop


  while ([condition]) {
    [loop body]
  }

ex:

const = gifts = ["teddy", "drone", "radio"];

function wrapGifts(gifts) {
  let i = 0; //initialization OUTSIDE body of loop
  while (i < gifts.length) {
    console.log(`Wrapped  ${gifts[i]} and added a bowl`);
    i++ //iteration moves INSIDE body of loop
  }
  return gifts;
}

wrapGifts(gifts);
