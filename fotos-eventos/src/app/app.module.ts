import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompinicialComponent } from './componente/compinicial/compinicial.component';
import { BotaoComponent } from './componente/botao/botao.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { FteventsModule } from './ftevents/ftevents.module';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './componente/add/add.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompinicialComponent,
    BotaoComponent,
    RodapeComponent,
    AddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FteventsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
