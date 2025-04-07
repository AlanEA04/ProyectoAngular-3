import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoUsuariosComponent } from '../listado-usuarios/listado-usuarios.component';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-inicio',
  // Si usas componentes standalone, utiliza "standalone: true", de lo contrario importa en el módulo
  standalone: true,
  imports: [ListadoUsuariosComponent, NgxChartsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  waterLevelData = [
    { name: 'Agua', value: 65 },
    { name: 'Vacío', value: 35 }
  ];

  colorScheme: Color = {
    name: 'waterScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#007bff', '#cccccc']
  };

  constructor(private router: Router) {}

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
