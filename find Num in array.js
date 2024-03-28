const arr = [[3,21,37], [61,79,101,120], [133,149]];

console.log(arr)

const isNumberInArrayofArrays = (number, array) => {
    const flatArray = array.flat();
	const searchNum = flatArray.includes(number);
    return searchNum;
};

console.log(isNumberInArrayofArrays(0, arr));
console.log(isNumberInArrayofArrays(21, arr));

function isNumberInArrayofArrays1(number, array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element)
        if (element.includes(number)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isNumberInArrayofArrays1(21, arr))
console.log(isNumberInArrayofArrays1(0, arr))


function isNumberInArrayofArrays2(number, array) {
    let found = false;
    array.forEach(element => {
        if (element.includes(number)) {
            found = true;
            return;
        } 
    });
    return found;;
}   


console.log(isNumberInArrayofArrays2(21, arr))
console.log(isNumberInArrayofArrays2(0, arr))

