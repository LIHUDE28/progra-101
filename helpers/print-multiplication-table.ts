import { error } from "console";

export function printMultiplicationTable (base: number, limit: number = 10 ) {
     if (limit <= 0){

        throw new  error ("El limite debe ser mayor a 0");
        
        
     }

    let i = 1;
do {
    console.log( base, ' x ', i, ' = ', base * i );
    i++;
} while ( i <= limit );

}
