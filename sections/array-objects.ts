import { format } from "path";

interface person {
    age: number;
    name: string;
    isActive: boolean;
}

let fernando = {

    name: "fernando",
    age: 36,
};

let melissa = {

    name: "malissa",
    age: 30,
};

let juan = {
    name: "juan",
    age: 42
};

let people = [fernando, melissa, juan];

//console.log(people);

for (let i = 0; i < people.length; i++){
let person = people[i];
console.log(person.name + " " + person.age);
}