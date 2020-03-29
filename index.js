// Code your solutions in this file

//for ([initialization]; [condition]; [iteration]) {
  //  [loop body]
//}

function writeCards(names,occassion) {   
    let cards = []
        for (let i = 0; i < names.length; i++) {
            cards.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`);
            //` backtick not '' or " " is needed for javascript
        }
    return cards;
}

//The condition for the above loop is age < 40, or, in other words, "Run the code in the loop body until age is NOT less than 40." As long as the condition evaluates to true, execute the code in the loop body, increment the value of age, and then reevaluate the condition. As soon as the condition evaluates to false, exit the loop.
//The iteration is age++, which increments the value of age by 1 after every pass through the loop. We initialized age as 30, and it retains that value during the first pass through the loop. At the end of the first pass, we increment age to 31, check whether the condition still holds true, and, since it does, run the loop body again with age as 31. After that second loop, we increment age to 32, and so on.
//The loop body is the set of statements that we want to run when the condition evaluates to true.
//JavaScript uses ` like Ruby uses "

function countDown(number) {    
    while (number > -1){
        //countdown counts 0 too.
        console.log(number--);
    }
}