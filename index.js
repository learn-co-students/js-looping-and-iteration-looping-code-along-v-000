
const names = ["Buffy", "Thompson", "Joann"];
const event = "birthday";
 
function writeCards(names, event) {
  let thankYou = []
  for (let i = 0; i < names.length; i++) {
    thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 
  return thankYou;
}
 
wrapGifts(gifts);

function countDown(n) {
    for (let i = n; i >= 0; i--) {
    console.log(i)
    }
}
