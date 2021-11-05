import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utente } from '../models/utente';
import { UtentiService } from '../servizi/utenti.service';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css'],
})
export class NuovoUtenteComponent implements OnInit {
  datiModel: Utente;
  dati: Utente;
  submitOK: boolean = false;
  constructor(private us: UtentiService) {
    this.datiModel = {
      id: 0,
      nome: '',
      cognome: '',
      username: '',
      password: '',
    };

    this.dati = Object.assign({}, this.datiModel);
  }

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    if (form.valid) {
      alert('il form è valido');
      this.submitOK = true;
    } else {
      alert('il form è invalido ');
    }
  }

  addUtents(id: any, n: any, c: any, u: any, p: any): void {
    let utente = {
      id: id.value,
      nome: n.value,
      cognome: c.value,
      username: u.value,
      password: p.value,
    };

    this.us.addUtente(utente);
  }

  onItemChange(value: any) {
    console.log(' Value is : ', value);
  }
}
