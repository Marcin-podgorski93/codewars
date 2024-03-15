// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// function isIsogram(str){
    
//   }


// const word = "moose";

// for (let i = 0; i < word.length; i++) {
//     console.log(word[i])
//     if (i === i) {
//         return false
//     }
//     return i;
// }

function check(str) {
    for (let i = 0; i < str.length - 1; i++) {
        console.log(str[i])
        if (str[i] === str[i + 1]) {
            return false;
        }
    }
    return true;
}


console.log(check('mose'))

