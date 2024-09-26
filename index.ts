
import { Persona } from "./personas";
//importar clase vehiculo
import { Vehiculo, Coche, moto } from "./vehiculos";
import { EstadoCivil } from "./enumEstadoCivil";



const jorge = new Persona("Jorge", 25, {calle: "calle 15", ciudad: "Cali", pais: "Colombia"});
const maria = new Persona("Maria", 20, {calle: "calle 26", ciudad: "Medellin", pais: "Colombia"});
const jose = new Persona("Jose", 30, {calle: "calle 34", ciudad: "Bogota", pais: "Colombia"});
const sebastian = new Persona("Sebastian", 35, {calle: "calle 49", ciudad: "Medellin", pais: "Colombia"});
const juanjose = new Persona("Juan Jose", 40, {calle: "calle 85", ciudad: "Barranquilla", pais: "Colombia"});
const santiago = new Persona("Santiago", 45, {calle: "calle 46", ciudad: "Lisboa", pais: "Portugal"});
const carlos = new Persona("Carlos", 50, {calle: "calle 76", ciudad: "Madrid", pais: "España"});
const tulio = new Persona("Tulio", 55, {calle: "calle 48", ciudad: "Barcelona", pais: "España"});
const alberto = new Persona("Alberto", 60, {calle: "calle 99", ciudad: "Madrid", pais: "España"});
const mario = new Persona("Mario", 65, {calle: "calle 12", ciudad: "Caracas", pais: "Venezuela"});

jorge.saludar();
maria.saludar();
jose.saludar();
sebastian.saludar();
juanjose.saludar();
santiago.saludar();
carlos.saludar();
tulio.saludar();
alberto.saludar();
mario.saludar();


import { Empleado } from "./personas";

const jorgeEmp = new Empleado("Jorge", 25, 2000000, {calle: "calle 15", ciudad: "Cali", pais: "Colombia"});
const mariaEmp = new Empleado("Maria", 20, 3000000, {calle: "calle 26", ciudad: "Medellin", pais: "Colombia"});
const joseEmp = new Empleado("Jose", 30, 4000000, {calle: "calle 34", ciudad: "Bogota", pais: "Colombia"});
const sebastianEmp = new Empleado("Sebastian", 35, 7000000, {calle: "calle 49", ciudad: "Medellin", pais: "Colombia"});
const juanjoseEmp = new Empleado("Juan Jose", 40, 1000000, {calle: "calle 85", ciudad: "Barranquilla", pais: "Colombia"});
const santiagoEmp = new Empleado("Santiago", 45, 1200000, {calle: "calle 46", ciudad: "Lisboa", pais: "Portugal"});
const carlosEmp = new Empleado("Carlos", 50, 1300000, {calle: "calle 76", ciudad: "Madrid", pais: "España"});
const tulioEmp = new Empleado("Tulio", 55, 4100000, {calle: "calle 48", ciudad: "Barcelona", pais: "España"});
const albertoEmp = new Empleado("Alberto", 60, 1100000, {calle: "calle 99", ciudad: "Madrid", pais: "España"});
const marioEmp = new Empleado("Mario", 65, 2100000, {calle: "calle 12", ciudad: "Caracas", pais: "Venezuela"});

jorgeEmp.saludar();
mariaEmp.saludar();
joseEmp.saludar();
sebastianEmp.saludar();
juanjoseEmp.saludar();
santiagoEmp.saludar();
carlosEmp.saludar();
tulioEmp.saludar();
albertoEmp.saludar();
marioEmp.saludar();

//crear vehiculo

const coche1 = new Coche("Ford", "Fiesta", 2021);
const moto1 = new moto("Suzuki", "Dr650", 2019);


//agregar vehiculo a Jorge
jorge.agregarVehiculo(coche1);
jorge.agregarVehiculo(moto1);

//mostrar vehiculos
console.log("___________________________________");
console.log("Vehiculos de Jorge:");
jorge.saludar();
jorge.mostrarVehiculos();

//crear persona con estado civil
const Fabio = new Persona("Fabio", 25, {calle: "calle 15", ciudad: "Cali", pais: "Colombia"}, undefined, EstadoCivil.Viudo);
//mostrar estado civil

Fabio.mostrarEstadoCivil();




