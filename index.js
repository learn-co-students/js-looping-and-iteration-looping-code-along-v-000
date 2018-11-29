// Code your solutions in this file
function printBadges(array) {
  for (let c = 1; c < array.length + 1; c++){
    console.log('Welcome ' + array[c - 1] + '! You are employee #' + c + '.')
  }
  return array
}

function tailsNeverFails() {

  function tailsOrFalse(){
    flip = Math.random()
    if(flip < 0.5){
    return false
  } else if (flip >= 0.5) {
    return true
    }

  }

  let counter = 0
  while(tailsOrFalse() === true){
    counter++
  }

  return "You got " + counter +" tails in a row!"
}
