// Code your solutions in this file

let names = [];
let newArray = [];
let event;
function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
  newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;
}

// let i = 10
function countdown(i){
  while(i >= 0){
    console.log(i);
    i--
  }

}
