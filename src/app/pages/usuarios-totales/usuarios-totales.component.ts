import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from 'src/app/_service/estadisticas.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-usuarios-totales',
  templateUrl: './usuarios-totales.component.html',
  styleUrls: ['./usuarios-totales.component.css']
})
export class UsuariosTotalesComponent implements OnInit {

  chart: any;
  tipo: string;
  totalUsuarios: number;
  constructor(private estadisticaService: EstadisticasService) { }

  ngOnInit() {
    this.tipo = 'bar';
    this.dibujar();
  }

  dibujar() {
    this.estadisticaService.empleadosTotales().subscribe(data => {
      console.log(data);
      let cantidad = data.map(res => res.Cantidad);
      //let cantidad = [60, 10];
      let leyenda = data.map(res => res.Leyenda);
      //console.log( 'cantidad: ' + cantidad);
      //console.log( 'leyenda: ' + leyenda);
      const sum = cantidad.reduce( this.add);
      this.totalUsuarios = sum;


      this.chart = new Chart('canvas', {
        type: this.tipo,
        data: {
          labels: leyenda,
          datasets: [
            {
              label: 'Cantidad',
              data: cantidad,
              borderColor: "#3cba9f",
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 0, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              /*ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }*/
            }],
            yAxes: [{
              display: true,
              ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                //beginAtZero: true   // minimum value will be 0.
            }
            }],
          }
        }
      });
    });
  }


  cambiar(tipo: string) {
    this.tipo = tipo;
    if(this.chart){
      this.chart.destroy();
    }
    this.dibujar();
  }

 add(accumulator, a) {
    return accumulator + a;
}

}

















/***
 *
  import { ConsultaService } from './../../_service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  chart: any;
  tipo: string;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.tipo = 'line';
    this.dibujar();
  }

  dibujar() {
    this.consultaService.listarResumen().subscribe(data => {
      console.log(data);

      let cantidad = data.map(res => res.cantidad);
      let fechas = data.map(res => res.fecha);

      this.chart = new Chart('canvas', {
        type: this.tipo,
        data: {
          labels: fechas,
          datasets: [
            {
              label: 'Cantidad',
              data: cantidad,
              borderColor: "#3cba9f",
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 0, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }

  cambiar(tipo: string) {
    this.tipo = tipo;
    if(this.chart){
      this.chart.destroy();
    }
    this.dibujar();
  }

}
 *
 */
