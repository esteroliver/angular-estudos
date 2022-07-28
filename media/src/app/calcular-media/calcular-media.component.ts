import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent implements OnInit {
  media: string
  constructor() { 
    this.media = ''
  }

  ngOnInit(): void {
  }
  mediaAluno(a: any, b: any, c: any, d: any){
    var media_aluno: number = ((a * 2) + (b * 2) + (c * 3) + (d * 3))/10
    this.media = `A média do aluno é: ${media_aluno}`

  }

}
