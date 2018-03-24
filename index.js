// Code your solutions in this file
printBadges = (arr) => {
  for(var i = 0; i<arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
  }
  return arr
}

tailsNeverFails = () => {
  let i = 0;
    mayBeTrue = () => {
      return Math.random() >= 0.5;
    }
    while(mayBeTrue()) {
      
      i++
    }
    return `You got ${i} tails in a row!`
}
