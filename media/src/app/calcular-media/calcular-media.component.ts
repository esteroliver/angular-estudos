import { Component, OnInit } from '@angular/core';
import { boletim } from "./boletim";

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent implements OnInit {
  bol: boletim
  media: any
  constructor() { 
    this.bol = new boletim()
    this.media = 0
  }

  ngOnInit(): void {
  }
  mediaCalculada(){
    this.media = this.bol.calcularMedia()
  }
  
}
