import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  imports: [],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})

export class RecuperarComponent {
  constructor(private router: Router) {}
  
  onInicio() {
    this.router.navigate(['/inicio']);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
  
  onRegistros() {
    this.router.navigate(['/registros']);
  }
  
  onRecuperar() {
    this.router.navigate(['/recuperar']);
  }
}
