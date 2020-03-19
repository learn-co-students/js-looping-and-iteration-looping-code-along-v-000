// Code your solutions in this file

const some_names = [ [ 'John', 'Tanya', 'Hikmet' ], "surprise" ]

// const names = [ ["Lisa", "Kaitlin", "Jan"], "surprise" ]
// function writeCards(names, occasion) {
//   for (i = 0; i )
//   console.log("Thank you, #{names}, for the wonderful #{occasion} gift!")
// }


// js has to be backticks, remember brackets, and it's console.log

function writeCards(names, gift_kind) {
  let newArray = []
  for (let i = 0; i < names.length ; i++ ) {
  newArray.push(`Thank you, ${names[i]}, for the wonderful ${gift_kind} gift!`)

}
console.log(newArray)
return newArray
}

writeCards(some_names, "birthday")



function countDown(number) {
  while (number >= 0)
  console.log(number--)
}
