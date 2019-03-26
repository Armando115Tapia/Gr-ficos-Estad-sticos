import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MeterialModule} from './material/material.module';
import { ReporteSexoComponent } from './pages/reporte-sexo/reporte-sexo.component';
import { UsuariosTotalesComponent } from './pages/usuarios-totales/usuarios-totales.component';
import { ReporteHabilidadesServicioComponent } from './pages/reporte-habilidades-servicio/reporte-habilidades-servicio.component';


@NgModule({
  declarations: [
    AppComponent,
    ReporteSexoComponent,
    UsuariosTotalesComponent,
    ReporteHabilidadesServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
