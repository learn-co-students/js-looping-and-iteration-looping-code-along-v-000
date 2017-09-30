function printBadges(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
    }
    return array
}

function tailsNeverFails() {
    let flip = Math.random();
    counter = 0
    while (flip >= .5) {
        flip = Math.random();
        counter += 1
    }
    return `You got ${counter} tails in a row!`

}
