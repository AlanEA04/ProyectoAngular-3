import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  imports: [],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/login']);
  }
}
