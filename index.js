// Code your solutions in this file
function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}



function countdown( x ) {
  while ( x > 0 ) {
    console.log( x );
    x -= 1;
  }
  console.log( x );
}