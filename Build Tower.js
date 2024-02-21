// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//solution

function buildTower(floors) {
    const tower = [];
    for (let i = 0; i < floors; i++) {
        const spaces = " ".repeat(floors - i - 1);
        const stars = "*".repeat(2 * i + 1);
        const floor = spaces + stars + spaces;
        tower.push(floor);
    }
    return tower;
}

console.log(buildTower(6))


// check

function buildTower1(floors) {
    const tower =[];
    for (let i = 0; i < floors; i++) {
        console.log(i)
        const space = " ".repeat(floors - i - 1);
        console.log(space)
        const stars = "*".repeat(2 * i + 1);
        console.log(stars)
        const floor = space + stars + space;
        console.log(floor)
        tower.push(floor)
    }
    return tower;
}

console.log(buildTower1(3))