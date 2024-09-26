//crear clase persona y exportarla con nombre, edad y metodo saludar que imprima “Persona: Tú nombre es xxxx y tienes xx años”
import { Direccion } from "./interfaz_direcc";
import { Vehiculo } from "./vehiculos";
import { Coche } from "./vehiculos";
import { moto } from "./vehiculos";
import { EstadoCivil } from "./enumEstadoCivil";

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;
    vehiculos?: Vehiculo[];
    estadoCivil?: EstadoCivil;



    constructor(nombre: string, edad: number, direccion: Direccion, vehiculos?: Vehiculo[], estadoCivil?: EstadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculos = vehiculos || [];
        this.estadoCivil = estadoCivil;
    }
    saludar() {
        console.log(`Persona: Tú nombre es ${this.nombre}, tienes ${this.edad} años y vives en la ciudad de ${this.direccion.ciudad}`);
    }

    getEdad(): number {
        return this.edad;
    }

    agregarVehiculo(vehiculo: Vehiculo): void {
        if (!this.vehiculos) {
            this.vehiculos = []; // Inicializa el arreglo si no está definido
        }
        this.vehiculos.push(vehiculo);
    }

    //mostrar vehiculos
    mostrarVehiculos(): void {
        if (this.vehiculos) {
            this.vehiculos.forEach((vehiculo) => {
                console.log(vehiculo);
            });
        }
    }   

    //mostar estado civil
    mostrarEstadoCivil(): void {
        if (this.estadoCivil) {
            console.log(`Persona: Tú nombre es ${this.nombre}, tienes ${this.edad} años y vives en la ciudad de ${this.direccion.ciudad} y eres ${this.estadoCivil}`);
        }
    }

}

//Crea una clase Empleado que herede de Persona, añadiendo una propiedad salario y un método trabajar() que imprima un mensaje indicando la cantidad de horas que se trabaja en el día

export class Empleado extends Persona {
    salario: number;
    constructor(nombre: string, edad: number, salario: number, direccion: Direccion) {
        super(nombre, edad, direccion);
        this.salario = salario;
    }
    trabajar() {
        console.log(`trabajarás x horas al día`);
    }
    //Añade a la clase Empleado el método saludar(), pero sobrescríbelo para que incluya el salario en el saludo (Debe de imprimir ”Empleado: Hola xxx tu edad es xx  y el salario es de xxxx”)
    saludar() {
        console.log(`Empleado: Hola ${this.nombre} tu edad es ${this.getEdad()}, vives en la ciudad de ${this.direccion.ciudad} y el salario es de ${this.salario}`);
    }           
}


