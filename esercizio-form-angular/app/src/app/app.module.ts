import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoUtentiComponent } from './elenco-utenti/elenco-utenti.component';
import { ModificaUtenteComponent } from './modifica-utente/modifica-utente.component';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ElencoUtentiComponent,
    ModificaUtenteComponent,
    NuovoUtenteComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
