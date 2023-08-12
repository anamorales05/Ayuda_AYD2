import {Creador} from "./creador"
import {Princesa} from "./interfaz"

export class Tipo2 extends Creador {
    create(nombre: string, descripcion: string): Princesa {
        console.log("Princesa Tipo 2 pelo oscuro")
        const p: Princesa = {
            nombre:nombre,
            descripcion:descripcion
        };
        return p;
    }
}