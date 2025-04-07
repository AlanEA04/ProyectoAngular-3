import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  private apiUrl = 'https://localhost:7213/api/Usuario';

  constructor(private http: HttpClient) {}

  loginUsuario(correo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/by-email/${correo}`);
  }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  guardaUsuario(usuario: { nombre: string; correo: string; contrasena: string }): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }
  loginConCorreoYContrasena(correo: string, contrasena: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/by-email-and-password/${correo}/${contrasena}`);
  }
  

}
