// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

function printBadges(arr){ 
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
}

function maybeTrue() { 
  return Math.random() >= 0.5;
}

function tailsNeverFails(){ 
  let tails = 0; 
  
  while (maybeTrue()) { 
    tails++;
  }
  
  return `You got ${tails} tails in a row!`; 
}