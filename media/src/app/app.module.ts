import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
