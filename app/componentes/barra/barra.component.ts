import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }
  urlImg='/assets/img/logo.jpeg'
  urlImg1='/assets/img/logocurso.jpg'
  urlImg2='/assets/img/usuario.png'
}
