import { UsuariosTotalesComponent } from './pages/usuarios-totales/usuarios-totales.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteSexoComponent } from './pages/reporte-sexo/reporte-sexo.component';
import { ReporteHabilidadesServicioComponent } from './pages/reporte-habilidades-servicio/reporte-habilidades-servicio.component';

const routes: Routes = [
  {path: 'estadistica/sexo', component: ReporteSexoComponent},
  {path: 'estadistica/usuarios', component: UsuariosTotalesComponent},
  {path: 'estadistica/servicios', component: ReporteHabilidadesServicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
