import { Persona, Empleado } from "./personas";


export class Departamento {
    nombre: string;
    empleados: Empleado[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
    }

    eliminarEmpleado(empleado: Empleado) {
        const index = this.empleados.indexOf(empleado);
        if (index !== -1) {
            this.empleados.splice(index, 1);
        } else {
            console.log("Empleado no encontrado en el departamento");
        }
    }

    listarEmpleados() {
        console.log(`Empleados del departamento ${this.nombre}:`);
        this.empleados.forEach(empleado => {
            console.log(`- ${empleado.nombre}`);
        });
    }
}
