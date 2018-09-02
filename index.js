// Code your solutions in this file

function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
};

function tailsNeverFails(){
    for (let i = 1; Math.random() >= 0.5; i++) {
      var streak = `You got ${i} tails in a row!`;
    }
    return streak;
  }
