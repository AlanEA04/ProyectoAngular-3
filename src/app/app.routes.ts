import { Routes, provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecuperarComponent } from "./view/recuperar/recuperar.component";
import { AlarmaComponent } from './view/alarma/alarma.component';
import { LoginComponent } from "./view/login/login.component";
import { RegistrosComponent } from "./view/registros/registros.component";
import { InicioComponent } from "./view/inicio/inicio.component";
import { HistorialComponent } from "./view/historial/historial.component";


export const routes: Routes = [
    {path: 'login', title: 'Login' , component:LoginComponent},
    {path: 'registros', title: 'Registros' , component:RegistrosComponent},
    {path: 'recuperar', title: 'Recuperar' , component:RecuperarComponent},
    {path: 'inicio', title: 'Inicio' , component:InicioComponent},
    {path: 'historial',title: 'Historial' , component:HistorialComponent},
    {path: 'alarma',title: 'Alarma' , component:AlarmaComponent},
    {path: '**', title: 'Login' , component:LoginComponent},
];

export const appRoutingProviders = [provideRouter(routes)];