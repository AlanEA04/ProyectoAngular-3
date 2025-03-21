import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  imports: [],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

}

@Component({
  selector: 'app-alarma',
  imports: [],
  templateUrl: './alarma.component.html',
  styleUrl: './alarma.component.css'
})

export class AlarmaComponent {
  constructor(private router: Router) {}

  onInicio() {
    this.router.navigate(['/inicio']);
  }

  onRegistros() {
    this.router.navigate(['/registros']);
  }

  onRecuperar() {
    this.router.navigate(['/recuperar']);
  }
}