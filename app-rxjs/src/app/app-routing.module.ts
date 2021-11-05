import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoFilmComponent } from './film/elenco-film/elenco-film.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatoriComponent } from './operatori/operatori.component';

const routes: Routes = [
  { path: 'operatori', component: OperatoriComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'film', component: ElencoFilmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
