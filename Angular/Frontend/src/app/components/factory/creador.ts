import {Princesa} from "./interfaz"

export abstract class Creador{
    abstract create(nombre:string, descripcion:string): Princesa;
}