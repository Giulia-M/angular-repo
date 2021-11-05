import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Utente } from '../models/utente';
import { UtenteService } from '../services/utente.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  account!: any;
  isLogin: boolean = false;
  constructor(private us: UtenteService) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.account = this.us.getAccount();
    if (this.account) {
      this.isLogin = true;
    }
  }

  logout(): void {
    this.us.logout();
  }
}
