import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmaService {

  private apiUrl = 'https://localhost:7213/api/Alarma';

  constructor(private http: HttpClient) { }

  obtenerAlarmas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
