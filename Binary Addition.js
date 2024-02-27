// DESCRIPTION:
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// my solution 

function addBinary(a,b) {
     // sum two numbers
    const sum = a + b;

    //convert sum in binary
    const binarySum = sum.toString(2)
    console.log(binarySum)
    return binarySum;
}

console.log(addBinary(1,1));

console.log(addBinary(5,9));


//or


function addBinary2(a,b) {
    let sum = a + b;
    console.log(sum)
    let binaryString = "";
    while (sum > 0) {
        binaryString = (sum % 2) + binaryString;
        sum = Math.floor(sum / 2);
        console.log(sum)
        console.log(binaryString)
    }
    console.log(binaryString)
    return binaryString || "0"; //or if we can use
}

console.log(addBinary2(9,2))

