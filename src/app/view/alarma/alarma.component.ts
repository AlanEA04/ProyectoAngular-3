import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarma',
  templateUrl: './alarma.component.html',
  styleUrl: './alarma.component.css'
})

export class AlarmaComponent {
  alarms = [
    { time: '5:00 a.m.', days: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'] },
    { time: '5:00 a.m.', days: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'] },
    { time: '5:00 a.m.', days: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'] },
    { time: '5:00 a.m.', days: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'] },
    { time: '5:00 a.m.', days: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.'] },
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
