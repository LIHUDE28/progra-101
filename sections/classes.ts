
export class Car {
   public readonly brand: string;
    doors: number;
    fuelTank: number;
    isRunning:boolean;
    type: string;

   private readonly createdAt: number;

    constructor(brand: string, type: string) {
       this.brand = brand;
       this.doors = 0; 
       this.fuelTank = 0;
       this.isRunning = false;
       this.type = type;
       this.createdAt = 123456789;

       
    }

    turnOn(){
        if(this.isRunning){
            console.log(" El carro ya estaba encendido, se dañó el motor")
            return;
        } 
        if (this.fuelTank <= 0){
            console.log("el carro no tiene gasolina");
            return;
        }
            this.isRunning = true;
            console.log("El carro esta encendido")
    }

    fillTank( gas: number ){
       
        if (gas < 0){
            console.log("el valor debe ser positivo");
            return;
        }
        let newFuelTank = this.fuelTank + gas;
        if (newFuelTank >= 100){
            newFuelTank = 100;
        } 
            this.fuelTank = newFuelTank;
        
    }


}

let myMazda = new Car("mazda", "sedan");

console.log(myMazda);
myMazda.fillTank(50);
myMazda.fillTank(60);

myMazda.turnOn();
console.log(myMazda);