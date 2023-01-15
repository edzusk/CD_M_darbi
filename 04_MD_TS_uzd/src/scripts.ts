console.log('Ready for coding');
// 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
console.log('1--------------!');
const sumOfTwo = (a:number, b:number):number => a + b;
console.log(sumOfTwo(1, 2));
// 2
// Write a function that takes a value as argument
// Return the type of the value
console.log('2--------------!');
const type = (el:any):string => (typeof el);

console.log(type(false));
console.log(type(4));
console.log(type('5'));

// 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
console.log('3--------------!');
const isSame = (a:number | string, b:number | string):boolean => (a === b);

console.log(isSame(1, 1));
console.log(isSame(1, 2));
console.log(isSame(1, '1'));
// 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
console.log('4--------------!');
const nthChar = (str:string, num:number):string => str[num - 1];

console.log(nthChar('abcd', 1)); // Expected 'a'
console.log(nthChar('zyxbwpl', 5)); // Expected 'w'
// 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
console.log('5--------------!');
const fromFourth = (str:string):string => str.slice(3);

console.log(fromFourth('abcdefg')); // Expected 'defg'
console.log(fromFourth('1234')); // Expected '4'
console.log(fromFourth('fgedcba')); // Expected 'dcba'

// 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
console.log('6--------------!');
const lastThreeChars = (str:string):string => str.slice(String.length - 4);

console.log(lastThreeChars('abcdefg')); // Expected 'efg'
console.log(lastThreeChars('1234')); // Expected '234'
console.log(lastThreeChars('fgedcba')); // Expected 'cba'

// 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
console.log('7--------------!');
const firstThreeChars = (str:string):string => str.slice(0, 3);

console.log(firstThreeChars('abcdefg')); // Expected 'abc'
console.log(firstThreeChars('1234')); // Expected '123'
console.log(firstThreeChars('fgedcba')); // Expected 'fge'

// 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
console.log('8--------------!');
const firstHalfChars = (str:string):string => str.slice(0, str.length / 2);

console.log(firstHalfChars('abcdefgh')); // Expected 'abcd'
console.log(firstHalfChars('1234')); // Expected '12'
console.log(firstHalfChars('gedcba')); // Expected 'ged'

// 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
console.log('9--------------!');
const withoutLastThree = (str:string):string => str.slice(0, str.length - 3);
console.log(withoutLastThree('abcdefg')); // Expected 'abcd'
console.log(withoutLastThree('1234')); // Expected '1'
console.log(withoutLastThree('fgedcba')); // Expected 'fged'

// 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
console.log('10-------------!');

const percentOf = (num1:number, num2:number):number => (num2 / num1 * 100);

console.log(percentOf(100, 50)); // Expected 50
console.log(percentOf(10, 1)); // Expected 10
console.log(percentOf(500, 25)); // Expected 5

// 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
console.log('11-------------!');

const doAll = (
  num1: number,
  num2: number,
  num3: number,
  num4: number,
  num5: number,
  num6: number,
): number => ((num1 + num2 - num3) * num4 / num5) ** num6;

console.log(doAll(6, 5, 4, 3, 2, 1)); // Expected 10.5
console.log(doAll(6, 2, 1, 4, 2, 3)); // Expected 2744
console.log(doAll(2, 3, 6, 4, 2, 3)); // Expected -8

// 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
console.log('12-------------!');

const isEven = (num:number):boolean => ((num % 2) == 0);

console.log(isEven(10)); // Expected true
console.log(isEven(-4)); // Expected true
console.log(isEven(5)); // Expected false
console.log(isEven(-111)); // Expected false

// 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
console.log('13-------------!');

const charOccures = (char:string, str:string):number => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      counter++;
    }
  }
  return counter;
};

console.log(charOccures('m', 'how many times does the character occur in this sentence?')); // Expected 2
console.log(charOccures('h', 'how many times does the character occur in this sentence?')); // Expected 4
console.log(charOccures('?', 'how many times does the character occur in this sentence?')); // Expected 1
console.log(charOccures('z', 'how many times does the character occur in this sentence?')); // Expected 0

// 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
console.log('14-------------!');

const isWhole = (num:number):boolean => num % 1 === 0;

console.log(isWhole(4)); // expected true
console.log(isWhole(1.123)); // expected false
console.log(isWhole(1048)); // expected true
console.log(isWhole(10.48)); // expected false

// 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
console.log('15-------------!');

const devideOrMultiply = (num1: number, num2: number): number => (num1 < num2 ? num1 / num2 : num1 * num2);

console.log(devideOrMultiply(10, 100)); // Expected 0.1
console.log(devideOrMultiply(90, 45)); // Expected 4050
console.log(devideOrMultiply(8, 20)); // Expected 0.4
console.log(devideOrMultiply(2, 0.5)); // Expected 1

// 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
console.log('16-------------!');

const isContaining = (str1:string, str2:string):string => (str1.includes(str2) ? str2.concat(str1) : str1 + str2);

console.log(isContaining('cheese', 'cake')); // Expected 'cheesecake'
console.log(isContaining('lips', 's')); // Expected 'slips'
console.log(isContaining('Java', 'script')); // Expected  'Javascript'
console.log(isContaining(' think, therefore I am', 'I')); // Expected 'I think, therefore I am'

// 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
console.log('17-------------!');

const roundToTwo = (num:number):number => Math.round(num * 100) / 100;

console.log(roundToTwo(2.12397)); // Expected 2.12
console.log(roundToTwo(3.136)); // Expected 3.14
console.log(roundToTwo(1.12397)); // Expected 1.12
console.log(roundToTwo(26.1379)); // Expected 26.14

// 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
console.log('18-------------!');

const numToArr = (num:number):number[] => Math.abs(num).toString().split('').map((el) => Number(el));

console.log(numToArr(10)); // Expected [1,0]
console.log(numToArr(-10)); // Expected [1,0]
console.log(numToArr(931)); // Expected [9,3,1]
console.log(numToArr(193278)); // Expected [1,9,3,2,7,8]

// 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
console.log('19-------------!');

const tidyUp = (str1:string, str2:string): string => str1.replace('%', '').slice(0, 1).toUpperCase() + str1.replace('%', '').slice(1, str1.length) + str2.split('').reverse().join('').replace('%', '');

console.log(tidyUp('java', 'tpi%rcs')); // Expected 'Javascript'
console.log(tidyUp('c%ountry', 'edis')); // Expected 'Countryside'
console.log(tidyUp('down', 'nw%ot')); // Expected 'Downtown'

// 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
console.log('20-------------!');

const isPrimeNextPrime = (num:number):number => {
  if (num <= 2) {
    return 2;
  }
  let newNum = num;
  let isPrime = false;
  while (isPrime === false) {
    for (let i = 2; i < Math.sqrt(newNum + 2); i++) {
      isPrime = true;
      if (newNum % i == 0) {
        newNum++;
        isPrime = false;
        break;
      }
    }
  }
  return newNum;
};

console.log(isPrimeNextPrime(38)); // Expected 41
console.log(isPrimeNextPrime(7)); // Expected 7
console.log(isPrimeNextPrime(115)); // Expected 127
console.log(isPrimeNextPrime(2000)); // Expected 2003
console.log(isPrimeNextPrime(-1)); // Expected 2
console.log(isPrimeNextPrime(3)); // Expected 3

// 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
console.log('21-------------!');

const divisible = (num1:number, num2: number):number => {
  while (true) {
    if (num1 % num2 == 0) {
      return num1;
    }
    num1++;
  }
};

console.log(divisible(1, 23)); // Expected 23
console.log(divisible(23, 23)); // Expected 23
console.log(divisible(7, 3)); // Expected 9
console.log(divisible(-5, 7)); // Expected 0

// 22
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
console.log('22-------------!');

const insertChars = (str:string, char:string):string => {
  const strArr:string[] = str.split('').reverse();
  const newStrArr:string[] = [];
  for (let i = 0; i <= str.length; i++) {
    if (i % 3 == 0 && i != 0) {
      newStrArr.unshift(char);
    }
    newStrArr.unshift(strArr[i]);
  }
  return newStrArr.join('');
};

console.log(insertChars('1234567', '.')); // Expected'1.234.567'
console.log(insertChars('abcde', '$')); // Expected 'ab$cde'
console.log(insertChars('zxyzxyzxyzxyzxyz', 'w')); // Expected 'zwxyzwxyzwxyzwxyzwxyz'

// 23
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
console.log('23-------------!');

const nextAlphabet = (str:string) => str.split('').map((el) => el.charCodeAt(0) + 1).map((el) => String.fromCharCode(el)).join('');

console.log(nextAlphabet('bnchmf')); // Expected //'coding'
console.log(nextAlphabet('bgddrd')); // Expected 'cheese'
console.log(nextAlphabet('sdrshmf')); // Expected 'testing'

// 24
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
console.log('24-------------!');

const nThElem = (arr:any[], num:number):any => arr[num - 1];

console.log(nThElem([1, 2, 3, 4, 5], 3)); // Expected 3
console.log(nThElem([10, 9, 8, 7, 6], 5)); // Expected 6
console.log(nThElem([7, 2, 1, 6, 3], 1)); // Expected 7
console.log(nThElem(['a', '324', 32523, '435', [3, 5, 6], 'asf'], 5)); // Expected [3, 5, 6]

// 25
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
console.log('25-------------!');

const fromFourthArr = (strArr:number[]):number[] => strArr.slice(3);

console.log(fromFourthArr([1, 2, 3, 4])); // Expected [4]
console.log(fromFourthArr([5, 4, 3, 2, 1, 0])); // Expected [2,1,0]
console.log(fromFourthArr([99, 1, 1])); // Expected []

// 26
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
console.log('26-------------!');

const LastThreeArr = (arr:number[]):number[] => arr.slice(arr.length - 3);

console.log(LastThreeArr([1, 2, 3, 4])); // Expected [2,3,4]
console.log(LastThreeArr([5, 4, 3, 2, 1, 0])); // Expected  [2,1,0]
console.log(LastThreeArr([99, 1, 1])); // Expected   [99,1,1]

// 27
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
console.log('27-------------!');

const firstThreeArr = (arr:number[]):number[] => arr.slice(0, 3);

console.log(firstThreeArr([1, 2, 3, 4])); // Expected [1,2,3]
console.log(firstThreeArr([5, 4, 3, 2, 1, 0])); // Expected  [5,4,3]
console.log(firstThreeArr([99, 1, 1])); // Expected   [99,1,1]

// 28
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
console.log('28-------------!');

const lastNthArrElements = (arr:number[], num:number):number[] => arr.slice(arr.length - num);

console.log(lastNthArrElements([1, 2, 3, 4, 5], 2)); // Expected [ 4, 5 ]
console.log(lastNthArrElements([1, 2, 3], 6)); // Expected [ 1, 2, 3 ]
console.log(lastNthArrElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Expected [ 6, 7, 8 ]

// 29
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
console.log('29-------------!');

const clenArrFrom = (arr:any[], char:any):any[] => arr.filter((el) => el !== char);

console.log(clenArrFrom([1, 2, 3], 2)); // Expected [1, 3]
console.log(clenArrFrom([1, 2, '2'], '2')); // Expected [1, 2]
console.log(clenArrFrom([false, '2', 1], false)); // Expected ['2', 1]
console.log(clenArrFrom([1, 2, '2', 1], 1)); // Expected [2, '2']

// 30
// Write a function that takes an array (a) as argument
// Return the number of elements in a
console.log('30-------------!');

const ArrLength = (arr:any[]):number => arr.length;

console.log(ArrLength([1, 2, 2, 4])); // Expected 4
console.log(ArrLength([9, 9, 9])); // Expected 3
console.log(ArrLength([4, 3, 2, 1, 0])); // Expected 5

// 31
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
console.log('31-------------!');

const countArrNegatives = (arr:number[]):number => arr.filter((el) => el < 0).length;

console.log(countArrNegatives([1, -2, 2, -4])); // Expected 2
console.log(countArrNegatives([0, 9, 1])); // Expected 0
console.log(countArrNegatives([4, -3, 2, 1, 0])); // Expected 1

// 32
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
console.log('32-------------!');

const descendingArr = (arr:number[]):number[] => arr.sort((a, b) => (b - a));

console.log(descendingArr([1, 3, 2])); // Expected [3,2,1]
console.log(descendingArr([4, 2, 3, 1])); // Expected [4,3,2,1]

// 33
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
console.log('33-------------!');

const alphabeticallyArr = (arr:string[]):string[] => arr.sort();

console.log(alphabeticallyArr(['b', 'c', 'd', 'a'])); // Expected ['a', 'b', 'c', 'd']
console.log(alphabeticallyArr(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // Expected ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// 34
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
console.log('34-------------!');

const averageOfArr = (arr:number[]):number => (arr.reduce((a, b) => a + b, 0)) / arr.length;

console.log(averageOfArr([10, 100, 40])); // Expected 50
console.log(averageOfArr([10, 100, 1000])); // Expected 370
console.log(averageOfArr([-50, 0, 50, 200])); // Expected 50

// 35
// Write a function that takes an array of strings as argument
// Return the longest string
console.log('35-------------!');

const longestStrOfArr = (arr:string[]):string => arr.sort((a, b) => b.length - a.length)[0];

console.log(longestStrOfArr(['help', 'me'])); // Expected 'help'
console.log(longestStrOfArr(['I', 'need', 'candy'])); // Expected 'candy'

// 36
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
console.log('36-------------!');

const isAllEqual = (arr:any[]):boolean => arr.every((el) => el === arr[0]);

console.log(isAllEqual([true, true, true, true])); // Expected true
console.log(isAllEqual(['test', 'test', 'test'])); // Expected true
console.log(isAllEqual([1, 1, 1, 2])); // Expected false
console.log(isAllEqual(['10', 10, 10, 10])); // Expected false

// 37
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
console.log('37-------------!');

const joinArr = (...args:any[]):any[] => args.reduce((arr1:any[], arr2:any[]) => arr1.concat(arr2));

console.log(joinArr([1, 2, 3], [4, 5, 6])); // Expected
console.log(joinArr(['a', 'b', 'c'], [4, 5, 6])); // Expected
console.log(joinArr([true, true], [1, 2], ['a', 'b'])); // Expected

// 38
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
console.log('38-------------!');

const sortObjArr = (arr:{a:number, b:number}[]):{a:number, b:number}[] => arr.sort((a, b) => a.b - b.b);

console.log(sortObjArr([{ a: 1, b: 2 }, { a: 5, b: 4 }])); // Expected [{a:1,b:2},{a:5,b:4}]
console.log(sortObjArr([{ a: 2, b: 10 }, { a: 5, b: 4 }])); // Expected [{a:5,b:4},{a:2,b:10}]
console.log(sortObjArr([{ a: 1, b: 7 }, { a: 2, b: 1 }])); // Expected [{a:2,b:1},{a:1,b:7}]

// 39
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
console.log('39-------------!');

const mergeUnique = (arr1:number[], arr2:number[]):number[] => {
  const newArr = arr1.concat(arr2);
  return newArr.filter((item, index) => newArr.indexOf(item) === index).sort((a, b) => (a - b));
};

console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // Expected  [ 1, 2, 3, 4, 5 ]
console.log(mergeUnique([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // Expected [ -11, -10, 5, 22, 41,  42, 333]
console.log(mergeUnique([1, 2], [1, 2])); // Expected [1,2]

// 40
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
console.log('40-------------!');

const sumGreater = (arr:number[], num:number):number => arr.filter((el) => el > num).reduce((a, b) => a + b);

console.log(sumGreater([1, 2, 3, 4, 5, 6, 7], 2)); // Expected 25
console.log(sumGreater([-10, -11, -3, 1, -4], -3)); // Expected 1
console.log(sumGreater([78, 99, 100, 101, 401], 99)); // Expected  602

// 41
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
console.log('41-------------!');

const arrRange = (start:number, stop:number):number[] => Array.from({ length: stop - start + 1 }, (_, i) => i + start);

console.log(arrRange(2, 10)); // Expected [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrRange(1, 3)); // Expected [1, 2, 3]
console.log(arrRange(-5, 5)); // Expected  [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(arrRange(2, 7)); // Expected  [2, 3, 4, 5, 6, 7]

// 42
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
console.log('42-------------!');

interface startWith {
    [key:string] : string[];
}
const sortArrByChar = (arr:string[]) => {
  const startWith:startWith = {};
  arr.forEach((el) => {
    startWith[el.toLowerCase()[0]] ? startWith[el.toLowerCase()[0]].push(el) : startWith[el.toLowerCase()[0]] = [el];
  });

  // arr.forEach(el => startWith[el.toLowerCase()[0]] = [])
  // arr.forEach(el => startWith[el.toLowerCase()[0]].push(el))
  return startWith;
};

console.log(sortArrByChar(['Alf', 'Alice', 'Ben'])); // Expected { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(sortArrByChar(['Ant', 'Bear', 'Bird'])); // Expected { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(sortArrByChar(['Berlin', 'Paris', 'Prague'])); // Expected { b: ['Berlin'], p: ['Paris', 'Prague']}

// 43
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
console.log('43-------------!');

const unshiftGreaterSix = (arr: any[], num:number):any[] => {
  // num < 6 ? arr.unshift(0) : arr.unshift(num);
  // return arr;
  const newArr = num < 6 ? [0].concat(arr) : [num].concat(arr);
  return newArr;
};

console.log(unshiftGreaterSix([1, 2, 3], 6)); // Expected [6,1,2,3]
console.log(unshiftGreaterSix(['a', 'b'], 2)); // Expected [0,'a','b']
console.log(unshiftGreaterSix([null, false], 11)); // Expected [11,null,false]

// //44
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
console.log('44-------------!');

const arrOfNth = (arr:any[], num:number):any[] => {
  const newArr:any[] = [];
  arr.forEach((el, i) => ((i + 1) % num == 0 ? newArr.push(el) : NaN));
  return newArr;
};

console.log(arrOfNth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Expected [3,6,9]
console.log(arrOfNth([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); // Expected [6,1]
console.log(arrOfNth([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); // Expected [2,6,4,8,10]

// 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
console.log('45-------------!');

interface Countrys {
    country: string;
    continent: string;
}
const getCountry = (obj: Countrys):string => obj.country;

console.log(getCountry({ continent: 'Asia', country: 'Japan' })); // Expected  'Japan'
console.log(getCountry({ country: 'Sweden', continent: 'Europe' })); // Expected  'Sweden'

// 46
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
console.log('46-------------!');

const getProp2 = (obj: {[key: string | number]: string | number;}):any => obj['prop-2'];

console.log(getProp2({ one: 1, 'prop-2': 2 })); // Expected 2
console.log(getProp2({ 'prop-2': 'two', prop: 'test' })); // Expected 'two'

// 47
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
console.log('47-------------!');

const getValue = (obj: {[key:string]: string}, str:string):string => obj[str];

console.log(getValue({ continent: 'Asia', country: 'Japan' }, 'continent')); // Expected 'Asia'
console.log(getValue({ country: 'Sweden', continent: 'Europe' }, 'country')); // Expected 'Sweden'

// 48
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
console.log('48-------------!');

const isInObj = (obj: {[key:string]: string | number}, str:string) => (!!obj[str]);

console.log(isInObj({ a: 1, b: 2, c: 3 }, 'b')); // Expected true
console.log(isInObj({ x: 'a', y: 'b', z: 'c' }, 'a')); // Expected false
console.log(isInObj({ x: 'a', y: 'b', z: 'c' }, 'z')); // Expected true

// 49
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
console.log('49-------------!');

const keyObj = (str:string):{['key']:string} => {
  const obj = { key: '' };
  obj.key = str;
  return obj;
};

console.log(keyObj('a')); // Expected {key:'a'}
console.log(keyObj('z')); // Expected {key:'z'}
console.log(keyObj('b')); // Expected {key:'b'}

// 50
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
console.log('50-------------!');

const createObjFromStr = (key: string, value:string) => {
  const obj: {[key:string]:string} = {};
  obj[key] = value;
  return obj;
};

console.log(createObjFromStr('a', 'b')); // Expected {a:'b'}
console.log(createObjFromStr('z', 'x')); // Expected {z:'x'}
console.log(createObjFromStr('b', 'w')); // Expected {b:'w'}

// 51
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
console.log('51-------------!');

const createObjFromArr = (keyArr:any[], valueArr:any[]) => {
  const newObj:{[key:string | number]:string | number} = {};
  keyArr.forEach((el, i) => newObj[el] = valueArr[i]);
  return newObj;
};

console.log(createObjFromArr(['a', 'b', 'c'], [1, 2, 3])); // Expected {a:1,b:2,c:3}
console.log(createObjFromArr(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); // Expected  {w:10,x:9,y:5,z:2}
console.log(createObjFromArr([1, 'b'], ['a', 2])); // Expected  {1:'a',b:2}

// 52
// Write a function that takes an object (a) as argument
// Return an array with all object keys
console.log('52-------------!');

const getKeys = (obj:{[key:string]:any}) => Object.keys(obj);

console.log(getKeys({ a: 1, b: 2, c: 3 })); // Expected ['a','b','c']
console.log(getKeys({
  j: 9, i: 2, x: 3, z: 4,
})); // Expected ['j','i','x','z']
console.log(getKeys({ w: 15, x: 22, y: 13 })); // Expected ['w','x','y']

// 53
// Write a function that takes an object (a) as argument
// Return the sum of all object values
console.log('53-------------!');

const sumOfKeyValues = (obj:{[key:string]: number}):number => Object.values(obj).reduce((a, b) => a + b);

console.log(sumOfKeyValues({ a: 1, b: 2, c: 3 })); // Expected 6
console.log(sumOfKeyValues({
  j: 9, i: 2, x: 3, z: 4,
})); // Expected 18
console.log(sumOfKeyValues({ w: 15, x: 22, y: 13 })); // Expected 50

// 54
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
console.log('54-------------!');

const objWithoutB = (obj:{[key:string]: any}) => {
  delete obj.b;
  return obj;
};

console.log(objWithoutB({ a: 1, b: 7, c: 3 })); // Expected { a: 1, c: 3 }
console.log(objWithoutB({ b: 0, a: 7, d: 8 })); // Expected { a: 7, d: 8 }
console.log(objWithoutB({
  e: 6, f: 4, b: 5, a: 3,
})); // Expected { e: 6, f: 4, a: 3 }

// 55
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
console.log('55-------------!');

const mergeAndCorrectObj = (obj1:{[key:string]:any}, obj2:{[key:string]:any}) => {
  obj2.d = obj2.b;
  delete obj2.b;
  return { ...obj1, ...obj2 };
};

console.log(mergeAndCorrectObj({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(mergeAndCorrectObj({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // Expected { a: 5, b: 4, c: 3, e: 2, d: 1}

// 56
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
console.log('56-------------!');

const multiplyObjectValuesBy = (obj:{[key:string]:number}, num:number) => {
  Object.keys(obj).map((el) => obj[el] = obj[el] * num);
  return obj;
};

console.log(multiplyObjectValuesBy({ a: 1, b: 2, c: 3 }, 3)); // Expected {a:3,b:6,c:9}
console.log(multiplyObjectValuesBy({
  j: 9, i: 2, x: 3, z: 4,
}, 10)); // Expected {j:90,i:20,x:30,z:40}
console.log(multiplyObjectValuesBy({ w: 15, x: 22, y: 13 }, 6)); // Expected {w:90,x:132,y:78}

// 57
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
console.log('57-------------!');

const swapObjkeys = (obj:{[key:string|number]:string|number}) => {
  const newObj:{[key:string|number]:string|number} = {};
  Object.keys(obj).forEach((el) => newObj[obj[el]] = el);
  return newObj;
};

console.log(swapObjkeys({
  z: 'a', y: 'b', x: 'c', w: 'd',
})); // Expected {a:'z',b:'y',c:'x',d:'w'}
console.log(swapObjkeys({
  2: 'a', 4: 'b', 6: 'c', 8: 'd',
})); // Expected {a:'2',b:'4',c:'6',d:'8'}
console.log(swapObjkeys({ a: 1, z: 24 })); // Expected {1:'a',24:'z'}

// 58
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
console.log('58-------------!');

const fillValueas = (obj:{[key:string|number]:string}) => {
  Object.keys(obj).forEach((el) => obj[el] = obj[el].trim() == '' ? null : obj[el]);
  return obj;
};

console.log(fillValueas({ a: 'a', b: 'b', c: '' })); // Expected { a: 'a', b: 'b', c: null }
console.log(fillValueas({
  a: '', b: 'b', c: ' ', d: 'd',
})); // Expected { a: null, b: 'b', c: null, d: 'd' }
console.log(fillValueas({
  a: 'a', b: 'b ', c: ' ', d: '',
})); // Expected { a: 'a', b: 'b ', c: null, d: null }

// 59
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
console.log('59-------------!');

const personalInfo = (obj:{[key:string]:string|number}) => {
  const neededInfo:string[] = ['fn', 'ln', 'weight', 'size'];
  const newObj:{[key:string|number]:string|number} = {};
  Object.keys(obj).forEach((el) => {
    if (neededInfo.includes(el)) {
      if (el == 'weight') {
        newObj[el] = `${obj[el]}kg`;
      } else if (el == 'size') {
        newObj[el] = `${obj[el]}cm`;
      } else {
        newObj[el] = obj[el];
      }
    }
  });
  return newObj;
};

console.log(personalInfo({
  fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67,
})); // Expected {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(personalInfo({
  fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102,
})); // Expected {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(personalInfo({
  fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71,
})); // Expected {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(personalInfo({
  fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de',
})); // Expected {fn: 'Matthew', ln: 'Müller'}

// 60
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array
console.log('60-------------!');

const addContinent = (arr:{[key:string]:string|number}[], str:string) => {
  arr.forEach((el) => el.continent = str);
  return arr;
};

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
// Expected [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));
// Expected [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

// 61
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array
console.log('61-------------!');

const countNumbers = (arr:number[]) => {
  const newObj:{[key:string]: number} = {};
  arr.forEach((el) => newObj[el] = newObj[el] ? newObj[el] + 1 : 1);
  return newObj;
};

console.log(countNumbers([1, 2, 2, 3])); // Expected {1:1,2:2,3:1}
console.log(countNumbers([9, 9, 9, 99])); // Expected {9:3,99:1}
console.log(countNumbers([4, 3, 2, 1, 1])); // Expected {1:2,2:1,3:1,4:1}

// 62
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
console.log('62-------------!');

const isEqualDates = (date1:Date, date2:Date) => date1.getTime() === date2.getTime();

console.log(isEqualDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); // Expected false
console.log(isEqualDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // Expected true
console.log(isEqualDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); // Expected false

// 63
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
console.log('63-------------!');

const daysBetween = (date1:Date, date2:Date):number => Math.abs(date1.getTime() - date2.getTime()) / 3600000 / 24;

console.log(daysBetween(new Date('2020-06-11'), new Date('2020-06-01'))); // Expeceted 10
console.log(daysBetween(new Date('2000-01-01'), new Date('2020-06-01'))); // Expeceted 7457

// 64
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
console.log('64-------------!');

const isSameDay = (date1:Date, date2:Date):boolean => date1.getDay() == date2.getDay();

console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/01'))); // Expected true
console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/02'))); // Expected false
console.log(isSameDay(new Date('2001/01/01'), new Date('2000/01/01'))); // Expected false
console.log(isSameDay(new Date('2000/11/01'), new Date('2000/01/01'))); // Expected false

// SPREAD OPERATOR TASKS
// 65
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays
console.log('65-------------!');

const spreadTwoArrs = (arr1:number[], arr2:number[]):number[] => [...arr1, ...arr2];

console.log(spreadTwoArrs([1, 2], [3, 4])); // Expected [1, 2, 3, 4]
console.log(spreadTwoArrs([1, 2], [3, 4, 5, 6])); // Expected [1, 2, 3, 4, 5, 6]

// 66
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element
console.log('66-------------!');

const arrWithStr = (arr:any[], str:string):any[] => [...arr, str];

console.log(arrWithStr(['Apple', 'Orange', 'Banana'], 'Kiwi')); // Expected ['Apple', 'Orange', 'Banana', 'Kiwi']

// 67
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element
console.log('67-------------!');

const strWithArr = (arr:any[], str:string):any[] => [str, ...arr];

console.log(strWithArr(['Apple', 'Orange', 'Banana'], 'Kiwi')); // Expected

// 68
// Write a function that takes two objects as parameters
// and return an object which contains properties from both
// objects
console.log('68-------------!');

const combineTwoObjs = (obj1:{[key:string]:number}, obj2:{[key:string]:number}) => ({ ...obj1, ...obj2 });

console.log(combineTwoObjs({ a: 1, b: 2 }, { c: 3, d: 4 })); // Expected { a:1, b:2, c:3, d:4 }
console.log(combineTwoObjs({ a: 1, b: 2 }, {
  c: 3, d: 4, e: 5, f: 6,
})); // Expected { a:1, b:2, c:3, d:4, e:5, f:6 }

// 69
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string
console.log('69-------------!');

const objWithStr = (obj1:{
    [key:string]:string|number}, str:string) => ({ ...obj1, favoriteMovie: str,
});

console.log(objWithStr({ eyeColor: 'green', age: 10 }, 'Garfield')); // Expected { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(objWithStr({ eyeColor: 'blue', age: 15 }, 'Twilight')); // Expected { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }

// 70
