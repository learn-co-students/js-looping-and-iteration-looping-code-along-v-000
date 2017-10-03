// Code your solutions in this file

function printBadges(badgesAry){
  for(let i=0; i < badgesAry.length; i++){
    console.log(`Welcome ${badgesAry[i]}! You are employee #${i+1}.`)
  };
  return badgesAry
};


function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){

  let tailsCount = 0
  while(maybeTrue()){
    tailsCount++;
  };
  return `You got ${tailsCount} tails in a row!`;
};
