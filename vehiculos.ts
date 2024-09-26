
//Crea una clase abstracta Vehiculo con el método abstracto arrancar().
export abstract class Vehiculo {
    // Atributos comunes a todos los vehículos
    marca: string;
    modelo: string;
    anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    abstract arrancar(): void;
}

export class Coche extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio);
    }

    arrancar(): void {
        console.log(`El coche ${this.marca} ${this.modelo} del año ${this.anio} está arrancando con llave.`);
    }
}

export class moto extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio);
    }

    arrancar(): void {
        console.log(`La moto ${this.marca} ${this.modelo} del año ${this.anio} está arrancando con llave.`);
    }
}   