function writeCards(array, event) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        answer[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
      return answer;
}

function countDown(c) {
    while (c > -1) {
        console.log(c);
        c--;
    }
}