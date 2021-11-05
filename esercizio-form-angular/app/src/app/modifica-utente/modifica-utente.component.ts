import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from '../models/utente';
import { UtentiService } from '../servizi/utenti.service';

@Component({
  selector: 'app-modifica-utente',
  templateUrl: './modifica-utente.component.html',
  styleUrls: ['./modifica-utente.component.css'],
})
export class ModificaUtenteComponent implements OnInit {
  utente: Utente;

  constructor(
    private us: UtentiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.utente = {
      id: 0,
      nome: '',
      cognome: '',
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    let utenteRestituito = this.us.getCodice(id);
    if (utenteRestituito) {
      this.utente = utenteRestituito;
    } else {
      alert('utente inesistente');
    }
  }

  conferma(n: any, c: any, u: any, p: any): void {
    let utenteModificato = {
      id: this.utente.id,
      nome: n.value,
      cognome: c.value,
      username: u.value,
      password: p.value,
    };
    this.us.updateUtenti(utenteModificato);
    this.router.navigateByUrl('utenti');
  }

  elimina(): void {
    if (confirm("vuoi eliminare l'utente " + this.utente.nome + ' ?'))
      this.us.deleteUtente(this.utente.id);
    this.router.navigateByUrl('utenti');
  }
}
