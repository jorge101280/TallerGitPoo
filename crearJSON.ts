import * as fs from 'fs';
import { Empleado, Persona } from "./personas";
import { Direccion } from "./interfaz_direcc";

function agregarEmpleadoAJSON(nuevoEmpleado: Empleado): void {
    const rutaArchivo = 'ingresados_a_JSON.json';

    try {
        // Leer el archivo JSON existente o crear uno nuevo si no existe
        let empleadosJSON: Empleado[] = [];
        try {
            const data = fs.readFileSync(rutaArchivo);
            empleadosJSON = JSON.parse(data.toString());
        } catch (error) {
            console.error('Error al leer el archivo:', error);
        }

        // Agregar el nuevo empleado al array
        empleadosJSON.push(nuevoEmpleado);

        // Escribir los datos actualizados en el archivo JSON
        fs.writeFileSync(rutaArchivo, JSON.stringify(empleadosJSON, null, 2));
        console.log('Empleado agregado correctamente al archivo JSON');
    } catch (error) {
        console.error('Error al escribir en el archivo:', error);
    }
}

// Ejemplo de uso
// crear empleado
const empleado4 = new Empleado("JuanCamilo", 40, 1000000, {calle: "calle 85", ciudad: "Valledupar", pais: "Colombia"});

// agregar empleado a JSON
agregarEmpleadoAJSON(empleado4);
