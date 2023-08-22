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
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr);
}
function biggestNumInArr(arrNumbers) {
    var max = 0;
    for (var i = 0; i < arrNumbers.length; i++) {
        if (max < arrNumbers[i]) {
            max += arrNumbers[i];
        }
    }
    return max;
}
var dataPerson = {
    name: 'menachem',
    age: 28,
    isStudent: true
};
function printPerson(personData) {
    var name = personData.name;
    var age = personData.age.toString();
    var student = personData.isStudent.toString();
    console.log("name: ".concat(name, " age: ").concat(age, " is student: ").concat(student));
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
    var biggest = readers[0];
    for (var i = 1; i < readers.length; i++) {
        if (readers[i].age > biggest.age) {
            biggest = readers[i];
        }
    }
    return biggest;
}
function thebiggestBook(readers) {
    var biggest = readers[0].favoriteBook;
    for (var i = 1; i < readers.length; i++) {
        if (readers[i].favoriteBook.Year > biggest.Year) {
            biggest = readers[i].favoriteBook;
        }
    }
    return biggest;
}
