// Code your solutions in this file

function printBadges(names){
  for(let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function tailsNeverFails(){
  for (let i = 0; i < 10 ; i++ ){
    if (Number.parseFloat(Math.random()).toFixed(1) < .5){
      return `You got ${i} tails in a row!`;
    }
  }
}