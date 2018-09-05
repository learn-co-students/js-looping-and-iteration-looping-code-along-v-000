// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
//


function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  }
  return arr
}
printBadges(arr);


function tailsNeverFails() {
  i = 0
  while (Math.random() >= 0.5) {
    i += 1
   }
   return `You got ${i} tails in a row!`;
}
tailsNeverFails();
