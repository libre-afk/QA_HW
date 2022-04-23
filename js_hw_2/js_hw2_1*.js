//1* функция, принимающая на вход степень, в которую будет возводиться число 2

function Power(pow) {
  if (+pow) {
    for (i = 1; i <= pow; i++)
    console.log(`2 to the power of ${i} equals ${Math.pow(2, i)}`);
  }
  else {
    console.log(`${pow} isn't a number`);
      }
}
let powPrompt = prompt(`Enter your number:`)
Power(powPrompt)