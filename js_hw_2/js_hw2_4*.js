//4* Написать функцию, которая проверяет, является ли слово палиндромом
function isPalindrom(word) {
  let reversedWord = word.toLowerCase().split("").reverse().join("");
  if (reversedWord === word.toLowerCase()) {
      console.log(`Word ${word} is Palindrom`);
  } else {
      console.log(`Word ${word} is not a Palindrom`);
  }
}
isPalindrom(prompt('Enter your word:', ""));