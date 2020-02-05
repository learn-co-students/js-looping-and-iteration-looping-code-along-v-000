// Code your solutions in this file


function writeCards(nameArray, adj){
  let i = 0;
  let newArray = [];
  while(i < nameArray.length){
    newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${adj} gift!`)
    i++;
  }
  return newArray;
}

function countDown(int){
  for (let i = int; i >= 0; i--){
    console.log(i);
  }
}
