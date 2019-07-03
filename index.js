// Code your solutions in this file

function writeCards(arr, eventName){
    let newArr = new Array();
    for(let i = 0; i<arr.length; i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArr
}

function countdown(int){
    while(int > 0){
        console.log(int);
        int -=1
    }
    console.log(int)
}
