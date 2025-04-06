import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styleUrl: './alarma.component.css'
})

export class AlarmaComponent {
  alarms = [
    { time: '15:10:00',  },
    { time: '23:15:00',  },
    { time: '15:45:00', },
    { time: '12:25:00',  },
    { time: '22:30:00', },
  ];


  constructor(private router: Router) {}
  
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
