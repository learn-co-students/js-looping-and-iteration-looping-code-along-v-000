// Code your solutions in this file


function printBadges (names) {
  for (let i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names

}

function tailsNeverFails () {
  function maybeTrue () {
  return Math.random() >= 0.5;
}

counter = 0

while (maybeTrue()){
  counter ++
}

return `You got ${counter} tails in a row!`

}
