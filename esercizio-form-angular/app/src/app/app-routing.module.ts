import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoUtentiComponent } from './elenco-utenti/elenco-utenti.component';
import { ModificaUtenteComponent } from './modifica-utente/modifica-utente.component';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';

const routes: Routes = [
  {
    path: 'utenti',
    component: ElencoUtentiComponent,
    children: [
      { path: 'modifica/:id', component: ModificaUtenteComponent },
      { path: 'nuovo', component: NuovoUtenteComponent },
    ],
  },
  {
    path: '',
    component: ElencoUtentiComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'utenti',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
