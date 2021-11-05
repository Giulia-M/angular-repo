import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './admin/register/register.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ElencoPazientiComponent } from './pazienti/elenco-pazienti/elenco-pazienti.component';
import { CardiologiaComponent } from './reparti/cardiologia/cardiologia.component';
import { ElencoRepartiComponent } from './reparti/elenco-reparti/elenco-reparti.component';
import { OrtopediaComponent } from './reparti/ortopedia/ortopedia.component';
import { PsichiatriaComponent } from './reparti/psichiatria/psichiatria.component';
import { ControlloPazientiGuard } from './shared/controllo-pazienti.guard';
import { PaginaErroreComponent } from './shared/pagina-errore/pagina-errore.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  {
    path: 'reparti',
    component: ElencoRepartiComponent,
    children: [
      { path: 'cardiologia', component: CardiologiaComponent },
      { path: 'ortopedia', component: OrtopediaComponent },
      { path: 'psichiatria', component: PsichiatriaComponent },
    ],
  },

  {
    path: 'pazienti',
    component: ElencoPazientiComponent,
    canActivate: [ControlloPazientiGuard],
  }, //controllo l'accesso alla pagina pazienti
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: RegisterComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PaginaErroreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
