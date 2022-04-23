// 2 Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

// let str=''
// let smile = '(:'
// for (let j = 5; j >= 1; j--) 
//   {
//     console.log(str+=smile)
//   }

// 2* Преобразовать 2 задачу в функцию, принимающую на вход строку, которая  будет выводиться в консоль, а также количество строк для вывода 
// 

function Symbols(Sym, RowNum) {
if (+RowNum) {
let i = 1
let str = Sym
do {
  console.log(str);
  str += Sym
  i++;
} while (i <= RowNum);
} else{
    console.log(`${RowNum} isn't a number`);
  }
}
let symPrompt = prompt(`Enter your symbol:`)
let numRow = prompt('Enter amount of rows')
Symbols(symPrompt, numRow)