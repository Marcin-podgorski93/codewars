// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

const array = ["Keep", "Remove", "Keep", "Remove", "Keep"];

function removeEverySecond(arr) {
    const result = [];
    console.log(arr.length)
  for (let i = 0; i < arr.length; i = i + 2) {
    console.log(arr[i])
    console.log(i);
    result.push(arr[i]);
  }
  return result;
}

console.log(removeEverySecond(array));

console.log(array);

console.log(array.length)

// const wordLength = array.map(word => word.length);
// console.log(wordLength)

