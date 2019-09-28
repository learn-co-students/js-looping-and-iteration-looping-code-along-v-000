// Code your solutions in this file
const newNames = []
function writeCards(names, event){

  for (let i = 0; i < names.length; i++){
newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return newNames;
}


function countdown(counter){
  while (counter > 0){
    console.log(counter);
    counter--
  }
    console.log(0);
}
