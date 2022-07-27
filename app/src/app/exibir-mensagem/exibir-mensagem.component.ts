import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibir-mensagem',
  templateUrl: './exibir-mensagem.component.html',
  styleUrls: ['./exibir-mensagem.component.css']
})
export class ExibirMensagemComponent implements OnInit {
  mensagem: string
  constructor() { 
    this.mensagem = ''
  }

  ngOnInit(): void {
  }
  alterarMensagem(n:string){
    this.mensagem = `Seja bem-vindo(a), ${n}!`
  }
}
