// Code your solutions in this file

function printBadges(names) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}
//   let count=0;
// 	function tailsNeverFails() {
// 	 // let count=0;
// 	  let tails= Math.random();
// 	  if (tails >= 0.5) {
//       count+=1;
//       tailsNeverFails();
// 	  } else {
// 	    console.log(`You got ${count} tails in a row!`);
// 	  }
// 	}
// 	let count=0;
	function tailsNeverFails() {
    let count=0;
     function maybeTrue() {
       return Math.random() >= 0.5;
     }
 
      while (maybeTrue()) {
        count+=1;
      }
      return `You got ${count} tails in a row!`;
  }