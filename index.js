// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const event = "birthday";

function writeCards(names, event) {
    let thankYou = []
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return thankYou;
}

function countDown(x) {
    for (let i = x; i >= 0; i--) {
        console.log(i)
    }
}
