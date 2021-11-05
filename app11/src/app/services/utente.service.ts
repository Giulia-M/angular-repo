import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { Utente } from '../models/utente';
import utentiDatabase from '../data/utente.database';
@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  utente!: Utente;
  admin: boolean = false;
  username!: string;
  constructor(private router: Router) {}
  autentica(user: any, pass: any): void {
    //chiede al server se esiste un utente con quel nome e pass
    if (user && pass) {
      const result = utentiDatabase.filter(
        (item) => String(item.user) === String(user)
      );
      console.log(result);
      if (result) {
        alert(`utente riconosciuto ${user}`);
        this.admin = true;
        this.username = user;
        //vai alla pagina pazienti
        this.router.navigateByUrl('pazienti');
      } else {
        alert('non riconosciuto');
        //vai alla pagina di errore
        this.router.navigateByUrl('errore');
      }
    } else {
      alert('non riconosciuto');
      //vai alla pagina di errore
      this.router.navigateByUrl('errore');
    }
  }
  getAccount() {
    return this.username, this.admin;
  }
  logout() {
    alert('disconnesso');
    this.admin = false;
    this.username = '';
    this.router.navigateByUrl('login');
  }

  registerAdmin(nuovoUtente: Utente) {
    if (
      nuovoUtente.firstName &&
      nuovoUtente.lastName &&
      nuovoUtente.amministratore &&
      nuovoUtente.autenticato &&
      nuovoUtente.pass &&
      nuovoUtente.user
    ) {
      const admin: Utente = {
        firstName: nuovoUtente.firstName,
        lastName: nuovoUtente.lastName,
        user: nuovoUtente.user,
        pass: nuovoUtente.pass,
        autenticato: nuovoUtente.autenticato,
        amministratore: true,
      };
      alert(`utente riconosciuto `);
      //vai alla pagina pazienti
      this.router.navigateByUrl('pazienti');
    }
  }
}
