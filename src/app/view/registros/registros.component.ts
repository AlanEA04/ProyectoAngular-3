import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from '../../Servicios/services.service';

@Component({
  selector: 'app-registros',
  standalone: true, // Define que este es un componente independiente
  imports: [CommonModule, FormsModule, HttpClientModule], // Importa los módulos necesarios
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent {

  usuario = {
    nombre: '',
    correo: '',
    contrasena: ''
  };

  constructor(private service: ServicesService, private router: Router) {}

  onRegister() {
    this.service.guardaUsuario(this.usuario).subscribe(
      response => {
        console.log('Usuario registrado:', response);
        alert('Usuario registrado correctamente');
        this.router.navigate(['/inicio']);
      },
      error => {
        console.error('Error al registrar usuario', error);
        alert('Error al registrar usuario');
      }
    );
  }
}
