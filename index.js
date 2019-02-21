// Code your solutions in this file
function printBadges(myArray){
 let num = myArray.length;
    // for (i = 0; i < num; i++){
    //   console.log(myArray[i]);
    //
    // }
    for (j = 0; j < num; j++){
     console.log("Welcome "+ myArray[j]+"! You are employee #"+(j+1)+".");
    }
    return myArray;
}
function tailsNeverFails(){
  let c = 0;
  let n =  Math.random();

  while (n >= 0.5){
    n =  Math.random();
    c++;
  }
    return 'You got '+c+' tails in a row!';
}
