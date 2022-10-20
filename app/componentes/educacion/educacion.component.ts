import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miEducacion:any;
  miLenguaje:any;

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe (data=>{
      console.log(data);
      this.miEducacion=data;
      this.miLenguaje=data.tiposL; //min 35//
    });
  }
  urlImg='/assets/img/logo.jpeg'
  urlImg1='/assets/img/logocurso.jpg'
  urlImg2='/assets/img/usuario.png'
}
