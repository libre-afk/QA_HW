//3* Посчитать и вывести в консоль, сколько в введённом слове гласных, и сколько согласных букв.
function getWordStructure(word) {
    let word1 = word.replace(/[^a-zа-яё]/gi, '')
    let vowelsEN = ['a', 'e', 'i', 'o', 'u', 'y'];
    let vowelsRU = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
    let isRU = /[а-яё]/i.test(word);
    let numOfVowels = 0;
    let numOfСonsonants = 0;
    if (isRU) {
        word1.toLowerCase().split("").forEach(v => vowelsRU.includes(v) ? numOfVowels++ : numOfСonsonants++)
    }
    if (!isRU) {
        word1.toLowerCase().split("").forEach(v => vowelsEN.includes(v) ? numOfVowels++ : numOfСonsonants++)
    }
    console.log(`String ${word} contains ${numOfVowels} vowels and ${numOfСonsonants} consonants`);
  }
  
  getWordStructure(prompt('Enter something:', ""));