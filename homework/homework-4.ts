export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ]; 
let maxnumber = -99999

for(let i = 1; i < numbers.length; i++){

if (numbers[i] >= maxnumber){
    maxnumber = numbers[i];
}

}

console.log("el numero mayor es", maxnumber);