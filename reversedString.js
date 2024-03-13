// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


const word = 'world';

const wordReverse = word.split('').reverse().join('');

console.log(wordReverse)

function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution('world'))


// const wordSplit = word.split('');

// console.log(wordSplit);

// const wordReversed = wordSplit.reverse()

// console.log(wordReversed)

// const wordJoin = wordReversed.join('') 

// console.log(wordJoin)


