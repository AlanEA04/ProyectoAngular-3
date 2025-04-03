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

  constructor(private router: Router, private service: ServicesService) {}

  onInicio() {
    if (!this.correo.trim()) {
      alert('Por favor, ingresa tu correo.');
      return;
    }
  
    this.service.loginUsuario(this.correo).subscribe(
      (response: any) => {  // Especificar el tipo de response
        if (response) {
          alert('Inicio de sesión exitoso');
          localStorage.setItem('usuario', JSON.stringify(response));
          this.router.navigate(['/inicio']);
        } else {
          alert('Correo no registrado');
        }
      },
      (error: any) => {  // Especificar el tipo de error
        console.error('Error al iniciar sesión', error);
        alert('Correo no encontrado');
      }
    );
  }
  

  onRegistros() {
    this.router.navigate(['/registros']);
  }

  onRecuperar() {
    this.router.navigate(['/recuperar']);
  }
}
