import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {

  bombaEncendida: boolean = false;
  public porcentajeAgua: number = 0;
  private porcentajeInterval: any;
  private grafica: any; // 🆕 Aquí guardamos la instancia de la gráfica

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.generarGrafica();
      this.obtenerPorcentajeAgua();
      this.porcentajeInterval = setInterval(() => this.obtenerPorcentajeAgua(), 5000);
    }, 100); // pequeño delay para asegurar renderizado
  }
  

  ngOnDestroy(): void {
    clearInterval(this.porcentajeInterval);
  }

  obtenerPorcentajeAgua() {
    this.http.get<string>('http://192.168.111.150/porcentaje').subscribe({
      next: (res) => {
        console.log('🌐 Porcentaje recibido del ESP:', res);
        this.porcentajeAgua = parseInt(res, 10);
        this.actualizarGrafica();
      },
      error: (err) => console.error('❌ Error al obtener porcentaje:', err)
    });
  }
  

  generarGrafica() {
    const ctx = document.getElementById('graficaAgua') as HTMLCanvasElement;
    if (!ctx) return;

    this.grafica = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Agua', 'Vacío'],
        datasets: [
          {
            data: [this.porcentajeAgua, 100 - this.porcentajeAgua],
            backgroundColor: ['#4CAF50', '#e0e0e0'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    });
  }

  actualizarGrafica() {
    console.log('📊 Actualizando gráfica con:', this.porcentajeAgua);
    if (this.grafica) {
      this.grafica.data.datasets[0].data = [
        this.porcentajeAgua,
        100 - this.porcentajeAgua,
      ];
      this.grafica.update();
    }
  }
  
  toggleBomba() {
    const url = this.bombaEncendida
      ? 'http://192.168.111.150/encenderbomba'
      : 'http://192.168.111.150/apagarbomba';

    this.http.get(url).subscribe({
      next: (res) => console.log('✅ Respuesta:', res),
      error: (err) => console.error('❌ Error al conectar con el ESP:', err)
    });
  }



  onInicio() {
    this.router.navigate(['/inicio']);
  }

  onHistorial() {
    this.router.navigate(['/historial']);
  }

  onAlarma() {
    this.router.navigate(['/alarma']);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
  
}