// Code your solutions in this file

function writeCards(names, event_name) {
  for (let i = 0; i < names.length; i++){
    names[i] = (`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`);
  }
  return names;
}

function countDown(num) {
  let i = num;

  while (i >= 0 ){
    console.log(i);
    i--;
  }
}