// implicit type
let firstname = "joe";
let age = 20;
let address = {street: "123 Main St"}

const height = "6.2ft"

// explicit type
let lastname: string = "smith";
const skills: string[] = ["html", "css", "js"];
skills.push("ts");
const numbers: number[] = [1, 2, 3, 4, 5];


// interface
interface student {
    name: string;
    city: string;
    zipcode?: string
    address?: string
}

const joe:student = {
    name: "joe",
    city: "chicago"
}
const Corey:student = {
    name: "COrey",
    city: "atlanta",
    zipcode: "30343"
}
const Meg:student = {
    name: "Meg",
    city: "chicago",
    zipcode: "30343",
    address: "123 Main St"
}

console.log(Corey.name)

export interface User {
    name: string;
    age: number;
    occupation: string;
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);



interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(persons: Person) {
    let additionalInformation: string;
    if (persons) {
        additionalInformation = Admin;
    } else {
        additionalInformation = User;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);