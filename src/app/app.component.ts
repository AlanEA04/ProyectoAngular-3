import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecuperarComponent } from "./view/recuperar/recuperar.component";
import { AlarmaComponent } from './view/alarma/alarma.component';
import { LoginComponent } from "./view/login/login.component";
import { RegistrosComponent } from "./view/registros/registros.component";
import { InicioComponent } from "./view/inicio/inicio.component";
import { HistorialComponent } from "./view/historial/historial.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecuperarComponent, AlarmaComponent, LoginComponent, RegistrosComponent, InicioComponent, HistorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bomba_de_agua';
}