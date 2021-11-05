import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioPostComponent } from './post/dettaglio-post/dettaglio-post.component';
import { ElencoPostComponent } from './post/elenco-post/elenco-post.component';
import { ModificaPostComponent } from './post/modifica-post/modifica-post.component';
import { NuovoPostComponent } from './post/nuovo-post/nuovo-post.component';

const routes: Routes = [
  {
    path: "posts",
    component: ElencoPostComponent
  },
  {
    path: "posts/nuovo",
    component: NuovoPostComponent
  },
  {
    path: "posts/:id",
    component: DettaglioPostComponent
  },
  {
    path: "posts/:id/modifica",
    component: ModificaPostComponent
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: "/posts"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
