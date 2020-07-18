// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(names){
var messages = [];{
  for (let i=0; i < names.length; i++){

  messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);}
 }
 return messages;
}

function countDown(){
  let num = 10;
while (num > -1) {
  console.log(num--);
  }
  return num;
}
