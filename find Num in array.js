const arr = [[3,21,37], [61,79,101,120], [133,149]];

console.log(arr)

const isNumberInArrayofArrays = (number, array) => {
    const flatArray = array.flat();
	const searchNum = flatArray.includes(number);
    return searchNum;
};

console.log(isNumberInArrayofArrays(0, arr));
console.log(isNumberInArrayofArrays(21, arr));