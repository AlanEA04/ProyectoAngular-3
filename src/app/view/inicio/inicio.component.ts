import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoUsuariosComponent } from '../listado-usuarios/listado-usuarios.component';

@Component({
  selector: 'app-inicio',
  imports: [ListadoUsuariosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
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