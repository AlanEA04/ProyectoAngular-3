import { Component } from '@angular/core';
import { ServicesService } from '../../Servicios/services.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {

  usuarios:any[]=[];

  constructor(private usuariosService: ServicesService){}

  ngOnInit(): void{
    this.usuariosService.obtenerDatos().subscribe((data) => {this.usuarios=data;})
  };
}
