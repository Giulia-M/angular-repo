import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private us: UtenteService) {}

  ngOnInit(): void {}

  login(user: any, pass: any) {
    //chiedere al service degli utenti di controllare i dati dell'utente
    this.us.autentica(user.value, pass.value);
  }
}
