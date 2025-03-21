import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  imports: [],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
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