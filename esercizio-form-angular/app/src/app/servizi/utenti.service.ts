import { Injectable } from '@angular/core';
import { utenti } from '../data/utenti';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root',
})
export class UtentiService {
  utente: Utente;

  constructor() {
    this.utente = {
      id: 0,
      nome: '',
      cognome: '',
      username: '',
      password: '',
    };
  }

  getUtenti(): Utente[] {
    return utenti;
  }

  addUtente(utente: Utente): void {
    utenti.push(utente);
  }

  getCodice(id: number): any {
    let utente = undefined;
    utente = utenti.find((u) => u.id == id);
    return utente;
  }

  updateUtenti(utente: Utente) {
    let ute = utenti.findIndex((u) => u.id == utente.id);
    if (ute >= 0) {
      utenti[ute] = utente;
    }
  }

  deleteUtente(id: number) {
    let ute = utenti.findIndex((u) => u.id == id);
    if (ute >= 0) {
      utenti.splice(ute, 1);
    }
  }
}
