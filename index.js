// Code your solutions in this file
function writeCards(names, event)
{
  var notes = [];
  for (let i = 0; i < names.length; i++)
  {
    notes.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return notes
}
function countdown (number)
{
  while (number >= 0)
  {
    console.log(number);
    number--
  }
}
