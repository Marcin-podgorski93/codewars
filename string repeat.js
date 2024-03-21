// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    return s.repeat(n);
  }

  console.log(repeatStr(6, 'I'))


const word = "world";

let repeat = word.repeat(6)

console.log(repeat);

// reverse string

let reverseWord = word.split('').reverse().join('');

console.log(reverseWord)

function solution(str){
  return str.split('').reverse().join('');
}

console.log(solution('world'))