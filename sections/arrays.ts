export let employees: string[] = ["Derek", "Samantha", "Eduardo"];
let salaries: number[] = [1500, 2400, 3200 ]
let flowers: string[] = ["rosa", "girasol", "lirio"];

for (let i = 0; i < salaries.length; i++){

    console.log(employees[i], "tiene un salario de ", salaries[i]);
}