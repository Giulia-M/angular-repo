import {
  Component,
  OnChanges,
  SimpleChanges,
  ɵɵNgOnChangesFeature,
} from '@angular/core';
import { Utente } from './models/utente';
import { UtenteService } from './services/utente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  title = 'app11';
  account!: object;
  isLogin: boolean = false;
  constructor(private us: UtenteService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.account = this.us.getAccount();
    if (this.account) {
      this.isLogin = true;
      this.title = this.account.username
    }
  }
}
