// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// function XO(str) {
//     //code here
// }

//solution

function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() === 'x') {
            x++;
        } else if (str[i].toLowerCase() === 'o') {
            o++;
        }
        }
        return x === o;
    }


console.log(XO("xxoo"))

//or

const XO1 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

console.log(XO1("xxoo"))
