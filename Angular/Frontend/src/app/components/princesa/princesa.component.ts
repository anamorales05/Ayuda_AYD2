import { Component, OnInit } from '@angular/core';
import { Tipo1 } from '../factory/tipo1';
import { Tipo2 } from '../factory/tipo2';
import { Princesa } from '../factory/interfaz';


@Component({
  selector: 'app-princesa',
  templateUrl: './princesa.component.html',
  styleUrls: ['./princesa.component.css']
})
export class PrincesaComponent implements OnInit {

  constructor(private tipo1: Tipo1, private tipo2: Tipo2) { }

  ngOnInit(): void {
    this.peloRubio("cenicienta","perdio su zapatilla");
    this.peloOscuro("mulan","salvó china");
  }

  peloRubio(nombre:string,descripcion:string){
    const princess: Princesa = this.tipo1.create(nombre,descripcion);
    console.log(princess)
  }

  peloOscuro(nombre:string,descripcion:string){
    const princess: Princesa = this.tipo2.create(nombre,descripcion);
    console.log(princess)
  }

}
