import { HOST } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
  url: string = `${HOST}/reporte`;

  constructor(private http: HttpClient) { }


  empleadosSexo() {
     return this.http.get<any[]>(`${this.url}/sexo`);
  }

  empleadosTotales(){
    return this.http.get<any[]>(`${this.url}/usuarios`);
  }

  habilidadesPorServicio(){
    return this.http.get<any[]>(`${this.url}/servicio`);
  }


}
