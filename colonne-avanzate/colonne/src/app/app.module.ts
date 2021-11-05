import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColonneAvaComponent } from './colonne-ava/colonne-ava.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { NavComponent } from './nav/nav.component';
import { NavAvaComponent } from './nav-ava/nav-ava.component';

@NgModule({
  declarations: [
    AppComponent,
    ColonneAvaComponent,
    DropdownMenuComponent,
    NavComponent,
    NavAvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
