//Реализуйте считывание из JSONки из файла task2.json 
//с помощью, например, модуля fs. для дальнейшего использования в функции:
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
//Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

const noDuplicates = function() {
const fs = require('fs');
let rawdata = fs.readFileSync('../task2.json');
let users = JSON.parse(rawdata);
console.log(`**************************************Original Array**************************************\n`,users);

let uniqueUsers = new Set();
users.forEach(user=>uniqueUsers.add(JSON.stringify(user)))
console.log(`**************************************No Duplicates**************************************\n`, uniqueUsers)
}

noDuplicates()