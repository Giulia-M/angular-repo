import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ElencoRepartiComponent } from './reparti/elenco-reparti/elenco-reparti.component';
import { ElencoPazientiComponent } from './pazienti/elenco-pazienti/elenco-pazienti.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PaginaErroreComponent } from './shared/pagina-errore/pagina-errore.component';
import { CardiologiaComponent } from './reparti/cardiologia/cardiologia.component';
import { OrtopediaComponent } from './reparti/ortopedia/ortopedia.component';
import { PsichiatriaComponent } from './reparti/psichiatria/psichiatria.component';
import { RegisterComponent } from './admin/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ElencoRepartiComponent,
    ElencoPazientiComponent,
    LoginPageComponent,
    PaginaErroreComponent,
    CardiologiaComponent,
    OrtopediaComponent,
    PsichiatriaComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
