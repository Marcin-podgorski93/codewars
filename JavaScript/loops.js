const people = [
    { name: 'Jan', lastName: 'Kowalski', country: 'Polska', salary: '5000'},
    { name: 'Anna', lastName: 'Schmidt', country: 'Niemcy', salary: '2500'},
    { name: 'John', lastName: 'Smith', country: 'USA', salary: '8000'},
    { name: 'Luis', lastName: 'Silvia', country: 'Portugalia', salary: '3000'}
];



const LogPersonInfo = (person) => {
    console.log(`${person.name} ${person.lastName}, kraj: ${person.country}`) 
}


for (let i = 0; i < people.length; i++) {
    const person = people[i];
    LogPersonInfo(person);
}

people.forEach((person) => {
    console.log(person);
});

