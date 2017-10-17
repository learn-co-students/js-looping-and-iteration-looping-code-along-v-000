function printBadges(name_array){
  for (i = 0; i < name_array.length; i++){
    console.log(`Welcome ${name_array[i]}! You are employee #${i + 1}.`);
  };
  return name_array;
}

function tailsNeverFails (){
  let tails_count = 0;
   while (Math.random() >= 0.5) {
     tails_count++;
   }
  return `You got ${tails_count} tails in a row!`;
}
