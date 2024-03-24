// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"


// function findNeedle(str, index) {
//     console.log([str.length])
//     return str.includes("needle");
//   }

function findNeedle(str) {
    str.forEach((word, index) => {
        if (word === 'needle') {
            console.log(word, index)
            result = `Found needle in position ${index}`;
        }
    });
    return result;
}


console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

const array = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];


console.log(array)

const findNeedle1 = array.indexOf("needle")

console.log(findNeedle1)

