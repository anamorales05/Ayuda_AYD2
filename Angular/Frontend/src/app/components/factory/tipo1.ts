import {Creador} from "./creador"
import {Princesa} from "./interfaz"

export class Tipo1 extends Creador {
    create(nombre: string, descripcion: string): Princesa {
        console.log("Princesa Tipo 1 pelo rubio")
        const p: Princesa = {
            nombre:nombre,
            descripcion:descripcion
        };
        return p;
    }
}