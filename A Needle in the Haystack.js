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

const findNeedle1 = array.indexOf("needle");

const result1 = `Found needle in position ${findNeedle1}`

console.log(findNeedle1)
console.log(result1)

function checkarray(arr) {
    const findNeedle = arr.indexOf("needle");
    console.log(findNeedle)
    let findIndex = `Found needle in position ${findNeedle + 1}`
    return findIndex;
}

console.log(checkarray(array))


function findIndex2(arr) {
    const findNeedle = arr.indexOf("needle");
    let foundIndex = `Found needle in position ${findNeedle + 1}`
    return foundIndex;
}

console.log(findIndex2(array))


function findIndex3(arr) {
    arr.forEach((word,index) => {
        console.log(word)
        if (word === "needle") {
            console.log(word, index)
            result = `Found needle in position ${index}`
        }
    });
    return result;
}

console.log(findIndex3(array))






console.log(array)

const findarray1 = array.indexOf("needle");

console.log(findarray1)

const result2 = `Found needle in position ${findarray1 + 1}`;

console.log(result2)

function findWord(arr) {
    const findNeedle = arr.indexOf("needle");
    console.log(findNeedle);
    result = `Found needle in position ${findNeedle}`;
    return result;

}

console.log(findWord(array))