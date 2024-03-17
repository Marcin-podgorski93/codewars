
// Zagniezdzone obiekty

const person = {
    name: "Marcin",
    age: 29, 
    city: {
        name: "Kraków",
        population: 800_000
    } ,
    id: 2137
}

const {city: {population, name}} = person

console.log(population)

console.log(name)

//or

// const population = city.population

// console.log(population)

// const {id, ...personInfo} = person

const {id, ...personInfo} = person

console.log(id)

console.log(personInfo)

console.log(person)


// zagniezdzone tablice

const people = [
    ["Filip", 29, "Kraków"],
    ["Kacper", 30]
]

const [[personeOneName, personeOneAge], personTwo] = people




console.log(personeOneName, personeOneAge)
console.log(personTwo)

