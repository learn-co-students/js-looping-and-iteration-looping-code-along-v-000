function writeCards(array, event) {
    let thankYouCards = []
    for ( let i = 0; i < array.length; i++ ) {
      thankYouCards.push( `Thank you, ${array[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  };

  function countdown(countdown) {
    while (countdown > 0) {
      console.log(countdown);
      countdown -= 1;
    }
    console.log(countdown);
  }