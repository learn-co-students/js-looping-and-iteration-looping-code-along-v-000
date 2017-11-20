// Code your solutions in this file
function printBadges(names) {
  for(var i = 0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names;
}

function tailsNeverFails() {
  count = 0

    function maybeTrue(){
      return Math.random() => 0.5;
    }

    while(maybeTrue()){
      count++;
    }
  return count
}
