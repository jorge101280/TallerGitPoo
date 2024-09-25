//crear clase persona y exportarla con nombre, edad y metodo saludar que imprima “Persona: Tú nombre es xxxx y tienes xx años”

export class Persona {
    nombre: string;
    private edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Persona: Tú nombre es ${this.nombre} y tienes ${this.edad} años`);
    }

    getEdad(): number {
        return this.edad;
    }
}

//Crea una clase Empleado que herede de Persona, añadiendo una propiedad salario y un método trabajar() que imprima un mensaje indicando la cantidad de horas que se trabaja en el día

export class Empleado extends Persona {
    salario: number;
    constructor(nombre: string, edad: number, salario: number) {
        super(nombre, edad);
        this.salario = salario;
    }
    trabajar() {
        console.log(`trabajarás x horas al día`);
    }
}

