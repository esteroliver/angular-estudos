import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExibirMensagemComponent } from './exibir-mensagem/exibir-mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ExibirMensagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
