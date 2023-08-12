import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearComponent } from './components/crear/crear.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincesaComponent } from './components/princesa/princesa.component';
import { Tipo1 } from './components/factory/tipo1';
import { Tipo2 } from './components/factory/tipo2';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearComponent,
    NavbarComponent,
    PrincesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Tipo1,Tipo2],
  bootstrap: [AppComponent]
})
export class AppModule { }
