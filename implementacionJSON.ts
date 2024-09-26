import * as fs from 'fs';
import { Persona } from "./personas";
import { Vehiculo, Coche, moto } from "./vehiculos";
import { Direccion } from "./interfaz_direcc";
import { Empleado } from "./personas";

function leerYCrearEmpleados(): Empleado[] {
  const rutaArchivo = 'Empleados.json'; // Ruta relativa al archivo actual
  const data = fs.readFileSync(rutaArchivo, 'utf8');
  const empleadosJSON: any[] = JSON.parse(data);
  const empleados: Empleado[] = [];

  empleadosJSON.forEach((empleadoJSON) => {
    const { nombre, edad, salario, direccion } = empleadoJSON;
    const nuevoEmpleado = new Empleado(nombre, edad, salario, direccion);
    empleados.push(nuevoEmpleado);
  });

  return empleados;
}

// Ejemplo de uso
const ruta = 'empleados.json';
const empleados = leerYCrearEmpleados();

// Iterar sobre los empleados y mostrar información
empleados.forEach(empleado => {
  empleado.saludar();
  empleado.mostrarVehiculos();
});