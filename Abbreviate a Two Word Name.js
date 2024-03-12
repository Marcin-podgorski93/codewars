const nameChange = "Sam Harris";


// function abbrevName(name){
//     const result = [];
//     for (let i = 0; i < name.length; i++) {
//         const splitName = name.split(' ')
//         console.log(splitName);
//         result.push(splitName[i])
//         };
//         return result;
// }


// console.log(abbrevName(nameChange))

const splitName = nameChange.split(' ').map(word => word[0]).join('.').toUpperCase();



console.log(splitName)

function abbrevName(name){
    return name = name.split(' ').map(word => word[0]).join('.').toUpperCase();
}


console.log(abbrevName(nameChange))