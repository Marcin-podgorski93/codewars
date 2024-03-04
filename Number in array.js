const arr = [[3,21,37], [61,79,101,120], [133,149]];

const inNumberInArrayOfArrays = (number, array) => {
    for (let i = 0; i < array.length; i++) {
        const arrays = array[i];
        console.log(arrays[i])
        if (arrays.indexOf(number) !== -1) { //lub napisac number) >= 0;
            console.log(`Liczba ${number} jest w array ${[i]}.`);
            return true;
            
        }
    }
    return false;
}; 

console.log(inNumberInArrayOfArrays(3, arr));


// or


const inNumberInArrayOfArrays1 = (number, array) => {
    let found = false;
    array.forEach(element => {
        if (element.indexOf(number) !== -1) { //lub napisac number) >= 0;
            found = true;
    }
    });
    return false;
}; 

console.log(inNumberInArrayOfArrays1(0, arr));
console.log(inNumberInArrayOfArrays1(37, arr));
