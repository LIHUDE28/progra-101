export let weekDay: number = 3;

if (weekDay <= 0) {

   // console.log("dia de la semana no permitido");
    throw new Error( "el dia de la semana no es");
    
}
switch (weekDay) {

    case 1: 
            console.log("es Lunes");
            break;
    
    case 2: 
            console.log ("es Martes");
            break;

    case 3: 
            console.log("es Miercoles");
            break;
    default: 
            console.log("no es lunes, martes o miercoles");
}