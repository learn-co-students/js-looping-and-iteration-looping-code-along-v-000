// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}

function tailsNeverFails(){
  let flips = 0;
  while(Math.round(Math.random())!== 0){
    flips++
  }
    return `You got ${flips} tails in a row!`
}