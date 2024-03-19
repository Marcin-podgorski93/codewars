// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


const test = "xxoo";

console.log(test)

test.split('')

console.log(test.split('').length)

function checkletters(str) {
    const splitLetter = str.toLowerCase().split('');
    const checkLetterX = splitLetter.filter( word => word === 'x').length;
    const checkLetterY = splitLetter.filter( word => word === 'o').length;
    return checkLetterX === checkLetterY;
}

console.log(checkletters("xxoo"));
console.log(checkletters("xxo"));
