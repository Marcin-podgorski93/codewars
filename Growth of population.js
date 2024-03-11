// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let year = 0;
    let currentPopulation = p0;
    while (currentPopulation < p) {
        currentPopulation = Math.floor(currentPopulation * (1 + percent / 100) + aug);
        console.log(currentPopulation)
        year ++;
    }
    console.log(currentPopulation)
    return year;
}

console.log(nbYear(1500, 5, 100, 5000))


function nbYear1(pop, percent, aug, p) {
    let year = 0;
    let currentPopulation = pop;
    while (currentPopulation < p) {
        currentPopulation += Math.floor(currentPopulation * (percent / 100) + aug);
        console.log(currentPopulation)
        console.log(year);
        year++;
    }
    return year;
}


console.log(nbYear1(1000, 2, 50, 1200))