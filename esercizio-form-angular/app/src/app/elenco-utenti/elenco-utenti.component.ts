import { Component, OnInit } from '@angular/core';
import { Utente } from '../models/utente';
import { UtentiService } from '../servizi/utenti.service';

@Component({
  selector: 'app-elenco-utenti',
  templateUrl: './elenco-utenti.component.html',
  styleUrls: ['./elenco-utenti.component.css'],
})
export class ElencoUtentiComponent implements OnInit {
  elencoUtenti: Utente[];
  constructor(private us: UtentiService) {
    this.elencoUtenti = [];
  }

  ngOnInit(): void {
    this.elencoUtenti = this.us.getUtenti();
  }
}
