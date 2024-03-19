const people = [
    { name: 'Jan', lastName: 'Kowalski', country: 'Polska', salary: '5000'},
    { name: 'Anna', lastName: 'Schmidt', country: 'Niemcy', salary: '2500'},
    { name: 'John', lastName: 'Smith', country: 'USA', salary: '8000'},
    { name: 'Luis', lastName: 'Silvia', country: 'Portugalia', salary: '3000'}
];



const LogPersonInfo = (person, index) => {
    console.log(`${index + 1} ${person.name} ${person.lastName}, kraj: ${person.country}`) 
}


for (let i = 0; i < people.length; i++) {
    const person = people[i];
    LogPersonInfo(person, i);
}


// people.forEach((person) => {
//     LogPersonInfo(person);
// });

