// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    const SplitWord = str.split(''); 
    const DoubleWord = SplitWord.map( word => word.repeat(2)).join('');
    return DoubleWord;
  }

 console.log(doubleChar("String"))
 console.log(doubleChar("Hello World"))

 function doubleChar2(str) {
    return doubleWord = str.split('').map(word => word.repeat(2)).join('');
 }

 console.log(doubleChar2("String"))
 console.log(doubleChar2("Hello World"))