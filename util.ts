import { Persona } from "./personas";
import { Direccion } from "./interfaz_direcc";


// crear una función que reciba un objeto JSON y devuelva una Persona
const crearPersonaDesdeJSON = (personaJSON: { nombre: string; edad: number; direccion: Direccion }): Persona => {
    return new Persona(personaJSON.nombre, personaJSON.edad, personaJSON.direccion);
};

//donde cree el json e invoque la función creada anteriormente.
const personaJSON = {
    nombre: "Jorge Angel",
    edad: 24,
    direccion: {
        calle: "calle 15",
        ciudad: "Cali",
        pais: "Colombia"
    }
};

const persona = crearPersonaDesdeJSON(personaJSON);

persona.saludar();