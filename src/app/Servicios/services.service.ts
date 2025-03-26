import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  private apiUrl = 'https://localhost:7213/api/Usuario';


  constructor(private http: HttpClient) {}


  obtenerDatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  guardaUsuario(): Observable<any>{
    return this.http.post(this.apiUrl, {nombre : String, correo : String , contraseña: String});
  }
}
