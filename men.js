"use strict";
function bigNumber(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
function printBigNumber(a, b) {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
function ifEven(num) {
    if (num % 2 === 0) {
        return 'this is an even number';
    }
    else {
        return 'this number is not even';
    }
}
function lngStr(str) {
    return str.length;
}
function arrNum(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr);
}
function biggestNumInArr(arrNumbers) {
    let max = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        if (max < arrNumbers[i]) {
            max += arrNumbers[i];
        }
    }
    return max;
}
let dataPerson = {
    name: 'menachem',
    age: 28,
    isStudent: true
};
function printPerson(personData) {
    let name = personData.name;
    let age = personData.age.toString();
    let student = personData.isStudent.toString();
    console.log(`name: ${name} age: ${age} is student: ${student}`);
}
console.log(printPerson(dataPerson));
function isMinor(personData) {
    if (personData.age < 18) {
        return true;
    }
    else {
        return false;
    }
}
function theOldestReader(readers) {
    let biggest = readers[0];
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].age > biggest.age) {
            biggest = readers[i];
        }
    }
    return biggest;
}
function thebiggestBook(readers) {
    let biggest = readers[0].favoriteBook;
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].favoriteBook.Year > biggest.Year) {
            biggest = readers[i].favoriteBook;
        }
    }
    return biggest;
}
