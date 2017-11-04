// Code your solutions in this fil
function printBadges(arr)
{
  for(let i = 0;i<arr.length; i++)
  {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
  return  arr;
}

function tailsNeverFails()

{
  let tails = 0;
  let num = Math.floor(Math.random()*10+1)
  while(num>= 0.5)
    {tails++;}
    return tails;
  }


}
