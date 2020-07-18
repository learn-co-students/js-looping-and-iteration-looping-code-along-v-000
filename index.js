// Code your solutions in this file
 function writeCards( nameArray, event) {
     let thankYouCard = []
     for (let i = 0; i < nameArray.length; i++) {
        thankYouCard.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
     }
     return thankYouCard
 }

 function countdown(number) {
     while (0 <= number) {
         console.log(number--);
     }
 }