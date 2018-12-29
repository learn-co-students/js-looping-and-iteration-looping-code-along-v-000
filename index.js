// Code your solutions in this file

function printBadges(list){
  for (let i = 1; i <= list.length; i++){
    console.log(`Welcome ${list[i-1]}! You are employee #${i}.`)
  }
  return list;
}

function tailsNeverFails(){
  let counter = 0;
  while(Math.random() >= 0.5){
    ++counter;
  }
  return `You got ${counter} tails in a row!`;
}
