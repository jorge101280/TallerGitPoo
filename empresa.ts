import { Direccion } from "./interfaz_direcc";
import { Persona, Empleado } from "./personas";

//Crea una clase Empresa que tenga una lista de Empleado como propiedad.
export class Empresa {
    empleados: Empleado[];
    constructor(empleados: Empleado[]) {
        this.empleados = empleados;
    }

    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
    }

    mostrarEmpleados(): void {
        this.empleados.forEach((empleado) => {
            console.log(empleado);
        });
    }
    //eliminar empleado por nombre
    eliminarEmpleadoPorNombre(nombre: string): void {
        const index = this.empleados.findIndex((empleado) => empleado.nombre === nombre);
        if (index !== -1) {
            this.empleados.splice(index, 1);
        }
    }

    //calcular salario total de los empleados
    calcularSalarioTotal(): number {
        let salarioTotal = 0;
        this.empleados.forEach((empleado) => {
            salarioTotal += empleado.salario;
        });
        return salarioTotal;
    }


}
