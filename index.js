// Code your solutions in this file
function  writeCards(x) {
  let j = []
  for (let i = 0; i < x.length; i++) {
    j.push( `Thank you, ${x[i]}, for the wonderful surprise gift!`)
  }
  return j
}


function countdown(x) {
  for(var i = x; i >= 0; i--) {
    console.log(i)
  }
}
