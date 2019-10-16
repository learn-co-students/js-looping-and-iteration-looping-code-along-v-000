// Code your solutions in this file
function writeCards( arrayNames, birthday ) {
    let thankYou = []
    for ( let i = 0; i < arrayNames.length; i++ ) {
        thankYou.push( `Thank you, ${arrayNames[i]}, for the wonderful ${birthday} gift!`)
    }
    return thankYou
}   
    function countdown (i) {
        while (i>-1) {
            console.log(i--);
        }
    }
