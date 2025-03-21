import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
