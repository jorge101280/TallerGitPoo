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
    //Añade a la clase Empleado el método saludar(), pero sobrescríbelo para que incluya el salario en el saludo (Debe de imprimir ”Empleado: Hola xxx tu edad es xx  y el salario es de xxxx”)
    saludar() {
        console.log(`Empleado: Hola ${this.nombre} tu edad es ${this.getEdad()} y el salario es de ${this.salario}`);
    }        
}

