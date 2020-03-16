// Code your solutions in this file

const people = ["Ada", "Brendan", "Ali"];

const peopleEvents = [];

function writeCards(people, events){
    for (let i = 0; i < people.length; i++){
    peopleEvents.push(`Thank you, ${people[i]}, for the wonderful ${events} gift!`);
}

return peopleEvents;
}

function countDown(countdown){
while (countdown > 0) {
    console.log(countdown);
    countdown -= 1;
  }
  console.log( countdown );
}