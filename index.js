// Code your solutions in this file
function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array
}

function tailsNeverFails() {
  let flip = "Tails";
  let tailsCount = 0;
  while (flip === "Tails") {
    const newFlip = Math.random();
    if (newFlip < .5){
      flip = "Heads"
    } else {
      tailsCount++
    }
  }
  return `You got ${tailsCount} tails in a row!`
}
