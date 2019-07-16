function writeCards (names, event) {
 let messages = [];

 for (let i = 0; i < names.length; i++) {
   messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
 };
 return messages;
};

function countdown (number) {
  let countdown = number;
  while (countdown >= 0) {
    console.log(countdown);
    countdown--;
  };
};
