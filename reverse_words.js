// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const str = "This is an example!";

let reverseWord1 = str.split(' ').map( word => word.split('').reverse().join('')).join(' ');

console.log(str)

console.log(reverseWord1)

function reverseWord(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}


console.log(reverseWord("This is an example!"));



function reverseWord2(str) {
    return str.split(' ').map( word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWord2("This is an example!"))


