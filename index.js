
 function writeCards(ary,event) {
   const msgCollection=[];
   for (let i = 0; i < ary.length; i++) {
     msgCollection.push(`Thank you, ${ary[i]}, for the wonderful ${event} gift!`)
   }
   return msgCollection;
}

function countDown(i){
  let counter = 0;
  while(counter>=0 && counter<=i){
    console.log(counter)
    counter++;
  }

}
