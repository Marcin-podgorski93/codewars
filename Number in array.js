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

//or

const inNumberInArrayOfArrays2 = (number, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(number)) {
            console.log(array[i])
            return true;
        }        
    }
    return false;
}

console.log(inNumberInArrayOfArrays2(21, arr));

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


// or 


const inNumberInArrayOfArrays3 = (num, array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i].includes(num)) {
            console.log(array[i]);
            return true;
        }
    }
    return false;
};

console.log(inNumberInArrayOfArrays3(0, arr));
console.log(inNumberInArrayOfArrays3(21, arr));
console.log(inNumberInArrayOfArrays3(221, arr));



// or 

const inNumberInArrayOfArrays4 = (num, array) => {
    for (let i = 0; i < array.length; i++) {
        const arrays = array[i];
        console.log(arrays)
        if (arrays.indexOf(num) !== -1) {
            console.log(num);
            console.log(i + 1)
            console.log(`Liczba ${num} znajduje sie w tablicy numer ${i + 1}`)
            return true;
        }
    }
    return false;
};

// console.log(inNumberInArrayOfArrays4(0, arr));
console.log(inNumberInArrayOfArrays4(21, arr));

