import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private us: UtenteService) {}

  ngOnInit(): void {}
  register(firstName: any, lastName: any, username: any, password: any) {
    //chiedere al service degli utenti di controllare i dati dell'utente
    const nuovoUtente: Utente = {
      firstName: firstName,
      lastName: lastName,
      user: username,
      pass: password,
      autenticato: true,
      amministratore: true,
    };
    this.us.registerAdmin(nuovoUtente);
  }
}
