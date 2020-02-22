
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown(countDown) {
    while (countDown > 0)  {
      console.log(countDown);
      countDown -= 1;
    }
    console.log(countDown);
  }