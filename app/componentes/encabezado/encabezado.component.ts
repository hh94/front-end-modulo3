import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miEncabezado:any;

  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe (data=>{
      console.log(data);
      this.miEncabezado=data; //min 35//
    });
  }
  urlImg='/assets/img/logo.jpeg'
  urlImg1='/assets/img/logocurso.jpg'
  urlImg2='/assets/img/usuario.png'
}
