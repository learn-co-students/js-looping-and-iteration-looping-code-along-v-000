// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        consol.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(namesArray, eventName){
    let cardsArray = []
    for(let i = 0; i < namesArray.length; i++){
        cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardsArray;
}

writeCards(['Ada', 'Brendan', 'Ali', 'birthday']);

function countDown(i){
    while (i >= 0){
        console.log(i);
        i--;
    }
}
