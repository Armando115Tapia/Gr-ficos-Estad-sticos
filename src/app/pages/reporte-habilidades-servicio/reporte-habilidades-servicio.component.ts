import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from 'src/app/_service/estadisticas.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reporte-habilidades-servicio',
  templateUrl: './reporte-habilidades-servicio.component.html',
  styleUrls: ['./reporte-habilidades-servicio.component.css']
})
export class ReporteHabilidadesServicioComponent implements OnInit {

  chart: any;
  tipo: string;
  totalServicios: number;
  constructor(private estadisticaService: EstadisticasService) { }


  ngOnInit() {
    this.tipo = 'bar';
    this.dibujar();
  }

  dibujar() {
    this.estadisticaService.habilidadesPorServicio().subscribe(data => {
      console.log(data);
      const cantidad = data.map(res => res.Cantidad);
      const leyedas = data.map(res => res.Leyenda);
    // const cantidad = [50, 40, 10, 90 ];
    // const leyedas = ['Limpieza', 'Cocina', 'Planchar', 'Lavar'];
      const sum = cantidad.reduce( this.add);
      this.totalServicios = sum;

      this.chart = new Chart('canvas', {
        type: this.tipo,
        data: {
          labels: leyedas,
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
              display: true,
              ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                //beginAtZero: true   // minimum value will be 0.
            }
            },
          ],
          }
        }
      });
    });
  }


    cambiar(tipo: string){
      this.tipo = tipo;
      //Correction of bug
      if ( this.chart ) {
        this.chart.destroy();
      }
      this.dibujar();
    }

    add(accumulator, a) {
      return accumulator + a;
  }




}
