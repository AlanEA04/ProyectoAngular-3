import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlarmaService } from '../../Servicios/alarma.service'; // ajusta la ruta si es necesario
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styleUrls: ['./alarma.component.css'],
  imports: [CommonModule]
})
export class AlarmaComponent implements OnInit {
  alarms: any[] = [];

  constructor(private router: Router, private alarmaService: AlarmaService) {}

  ngOnInit() {
    this.alarmaService.obtenerAlarmas().subscribe(data => {
      this.alarms = data;
    });
  }

  onInicio() {
    this.router.navigate(['/inicio']);
  }

  onHistorial() {
    this.router.navigate(['/historial']);
  }

  onAlarma() {
    this.router.navigate(['/alarma']);
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
