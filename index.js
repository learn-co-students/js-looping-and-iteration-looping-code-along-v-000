// Code your solutions in this file
function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown(n){
  for(let i = n; i >= 0; i--) {
    console.log(i);
  }
}
