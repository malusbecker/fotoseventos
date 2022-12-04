import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompinicialComponent } from './componente/compinicial/compinicial.component';
import { BotaoComponent } from './componente/botao/botao.component';
import { RodapeComponent } from './componente/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CompinicialComponent,
    BotaoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
