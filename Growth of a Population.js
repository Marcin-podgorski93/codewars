// DESCRIPTION:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// function nbYear(p0, percent, aug, p) {
//     let year = 0;
//     let currentPopulation = p0;
//     console.log(currentPopulation);
//     console.log(year);
//     while (currentPopulation < p) {
//         currentPopulation = Math.floor(currentPopulation * (1 + percent / 100) + aug);
//         console.log(currentPopulation);
//         year++;
//     }
//     console.log(currentPopulation);
//     return year;
// }

// console.log(nbYear(1000, 2, 50, 1200))



function nbYear1(p0, percent, aug, p) {
    let year = 0;
    console.log(year);
    let currentPopulation = p0;
    console.log(currentPopulation);
    while (currentPopulation < p) {
        currentPopulation = Math.floor(currentPopulation * (1 + percent / 100) + aug);
        year ++;
        console.log(currentPopulation);
        console.log(year);
    }
    return year;
}

console.log(nbYear1(1000, 2, 50, 1200))
