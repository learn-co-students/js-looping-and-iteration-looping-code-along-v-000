// Code your solutions in this file
function writeCards(names) {
  const result = []
  for (let i = 0; i < names.length; i++) {
    result.push('Thank you, '+ names[i] +', for the wonderful surprise gift!')
  }
  return result
}

function countdown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}