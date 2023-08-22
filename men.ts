function bigNumber(a: number,b: number){
    if (a > b){
        return a
    }
    else {
        return b
    }
}

function printBigNumber(a: number,b: number){
    if (a > b){
        console.log(a);
        
    }
    else {
        console.log(b)
    }
}

function ifEven(num: number): string {
    if (num % 2 === 0){
        return 'this is an even number'
    } else {
        return 'this number is not even'
    }
}

function lngStr(str: string){
    return str.length
}

function arrNum(n: number){
    let arr = []
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }console.log(arr);
 }
 
function biggestNumInArr(arrNumbers: number[]){
    let max = 0
    for (let i = 0; i < arrNumbers.length; i++){
        if (max < arrNumbers[i]){
            max += arrNumbers[i]
        }
    } return max
}

interface person {
    name: string;
    age: number;
    isStudent: boolean;
   }
let dataPerson: person = {
    name : 'menachem',
    age : 28,
    isStudent : true
}

function printPerson(personData: person) {
    let name = personData.name
    let age = personData.age.toString()
    let student = personData.isStudent.toString()
    console.log(`name: ${name} age: ${age} is student: ${student}`)
} 
console.log(printPerson(dataPerson));
 
function isMinor(personData: person): boolean{
    if (personData.age < 18){
        return true
    }else {
        return false
    }
}
type Person = {
    name: string;
    age: number;
    isStudent: boolean;  
}

interface Book {
    Title: string,
    Author: string,
    Year: number
}

type Reader = Person & {favoriteBook: Book};

function theOldestReader(readers: Reader[]): Reader {
    let biggest = readers[0];
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].age > biggest.age) {
            biggest = readers[i];
        }
    }
    return biggest;
}

function thebiggestBook(readers: Reader[]): Book{
    let biggest = readers[0].favoriteBook;
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].favoriteBook.Year > biggest.Year) {
            biggest = readers[i].favoriteBook;
        }
    }
    return biggest;
}