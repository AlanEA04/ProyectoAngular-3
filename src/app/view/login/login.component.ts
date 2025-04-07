import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from '../../Servicios/services.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule ], // Agregar FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correo: string = '';
contrasena: string = '';

  constructor(private router: Router, private service: ServicesService) {}

  onInicio() {
    if (!this.correo || !this.contrasena) {
      alert('Debes ingresar correo y contraseña');
      return;
    }
  
    this.service.loginConCorreoYContrasena(this.correo, this.contrasena).subscribe({
      next: (usuario) => {
        alert(`Bienvenido, ${usuario.nombre}`);
        
        // Redirige al home o la ruta que quieras
        this.router.navigate(['/inicio']); // Asegúrate de que esta ruta exista
      },
      error: (err) => {
        console.error('Error al iniciar sesión', err);
        alert('Correo o contraseña incorrectos');
      }
    });
  }
  

  onRegistros() {
    this.router.navigate(['/registros']);
  }

  onRecuperar() {
    this.router.navigate(['/recuperar']);
  }
}
