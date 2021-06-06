// Code your solutions in this file
function countDown(i) {
    
    while (i>=0) {
        console.log(i--);
    }
  } 

function writeCards(friendsArray, message) {
    let i = 0;
    const a = [];
    while (i < friendsArray.length) {
        a.push("Thank you, " + friendsArray[i] + ", for the wonderful " + (message) + " gift!");
       i++;
    }
    return a;
}