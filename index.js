// Code your solutions in this file

/*
To get more acquainted with while, your task is to write a function, countDown,
that takes in any positive integer and, starting from that number, counts down
to zero using console.log(). So, when written if you were to run
*/
function countDown(number){
  let i = 0;
  while (i < 11){
    console.log(i++)
  }
}


function writeCards(nuArray, thingyMajig) {
    let thankYouCards = []
  for (let i = 0; i < nuArray.length; i++) {
    thankYouCards.push(`Thank you, ${nuArray[i]}, for the wonderful ${thingyMajig} gift!`);
  }
  return thankYouCards
}
