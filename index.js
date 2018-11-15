// Code your solutions in this file
function printBadges(list) {
  for(let i = 0; i < list.length; i++) {
    //console.log('Welcome ' + list[i] + '! You are employee #' + i + '.')
    console.log(`Welcome ${list[i]}! You are employee #${i + 1}.`)
  }
  return list
}

function tailsNeverFails() {
  let tails = 0
  let heads = 0
  while (heads == 0) {
    if(Math.random() >= .5) {
      tails++
    } else {
      heads++
      return `You got ${tails} tails in a row!`
    }
  }
}
