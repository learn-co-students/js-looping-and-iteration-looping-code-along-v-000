// Code your solutions in this file
 
function printBadges(array) {
    for (let counter = 0; counter < array.length; counter++) {
        console.log(`Welcome ${array[counter]}! You are employee #${counter+1}.`)
    }
    return array
}
function tailsNeverFails() {
    let counter = 0
   while (Math.random() >= 0.5) {
        counter++
   }
   return `You got ${counter} tails in a row!`
}