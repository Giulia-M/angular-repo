import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElancoAtletiComponent } from './elanco-atleti/elanco-atleti.component';
import { NuovoAtletaComponent } from './elanco-atleti/nuovo-atleta/nuovo-atleta.component';
import { DettaglioAtletaComponent } from './elanco-atleti/dettaglio-atleta/dettaglio-atleta.component';
import { ModificaAtletaComponent } from './elanco-atleti/modifica-atleta/modifica-atleta.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ElancoAtletiComponent,
    NuovoAtletaComponent,
    DettaglioAtletaComponent,
    ModificaAtletaComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
