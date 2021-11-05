import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioAtletaComponent } from './elanco-atleti/dettaglio-atleta/dettaglio-atleta.component';
import { ElancoAtletiComponent } from './elanco-atleti/elanco-atleti.component';
import { ModificaAtletaComponent } from './elanco-atleti/modifica-atleta/modifica-atleta.component';
import { NuovoAtletaComponent } from './elanco-atleti/nuovo-atleta/nuovo-atleta.component';
const routes: Routes = [
  { path: 'atleti', component: ElancoAtletiComponent },
  { path: 'atleti/nuovo', component: NuovoAtletaComponent },
  { path: 'atleti/:id', component: DettaglioAtletaComponent },
  { path: 'atleti/:id/modifica', component: ModificaAtletaComponent },
  { path: '', redirectTo: 'atleti', pathMatch: 'full' },
  { path: '**', redirectTo: 'atleti', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
