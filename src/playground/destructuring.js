const person = {
    name: 'Sally',
    age: 32,
    location: {
        city: 'Louisville',
        temp: 46
    }
};

// const name  = person.name;
// const age = person.age;

const {name = 'Anonmyous', age} = person;
//const {city, temp} = person.location;
//console.log(`${name} is ${age} and lives in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Pengiun'
    }
}
const {name: publisherName = 'Self Published'} = book.publisher;
const {title, author} = book;
console.log(publisherName);

// Array destructuring

const address = ['13', 'New Foundland Rd', 'Southwestport', 'NV', '19147'];
const [streetNo, street, city, state, zipcode] = address;
// Put comma but skip variable name to skip variables.

console.log(`You are in ${city} ${state}`);

const item = ['Coffee', '$3.50' , '$4.25'];
const [coffee, smallPrice='$6.00', largeCoffee] = item;

console.log(`Your large ${coffee} cost ${largeCoffee}`);
console.log(`Your large ${coffee} cost ${smallPrice}`);

