import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  miProyectos:any;

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe (data=>{
      console.log(data);
      this.miProyectos=data.proyectos;
    });
  }
  urlImg='/assets/img/logo.jpeg'
  urlImg1='/assets/img/logocurso.jpg'
  urlImg2='/assets/img/usuario.png'
}
