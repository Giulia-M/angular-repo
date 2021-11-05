import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OperatoriComponent } from './operatori/operatori.component';
import { ElencoFilmComponent } from './film/elenco-film/elenco-film.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    NavbarComponent,
    HomeComponent,
    OperatoriComponent,
    ElencoFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
