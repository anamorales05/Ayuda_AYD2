import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearComponent } from './components/crear/crear.component';
import { PrincesaComponent } from './components/princesa/princesa.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'princess',
    component: PrincesaComponent
  },
  {
    path: 'Crear',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
