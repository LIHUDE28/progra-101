import { format } from "path";

interface person {
    age: number;
    name: string;
    isActive: boolean;
}

let fernando:person = {

    name: "fernando",
    age: 36,
    isActive: true
};

let melissa:person = {
    name: "malissa",
    age: 30,
    isActive: false
};

let juan:person = {
    name: "juan",
    age: 42,
    isActive: false
};

let people: person [] = [fernando, melissa, juan];

//console.log(people);

for (let i = 0; i < people.length; i++){
let person = people[i];
console.log(person.name + " " + person.age);
}