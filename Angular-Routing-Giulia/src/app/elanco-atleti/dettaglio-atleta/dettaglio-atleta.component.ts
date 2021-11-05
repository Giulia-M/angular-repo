import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-dettaglio-atleta',
  templateUrl: './dettaglio-atleta.component.html',
  styleUrls: ['./dettaglio-atleta.component.css'],
})
export class DettaglioAtletaComponent implements OnInit {
  elancoAtleta!: Customer;
  constructor(
    private cs: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.elancoAtleta = {
      id: 0,
      nome: '',
      cognome: '',
      punteggio: 0,
    };
  }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    let atletaRestituito = this.cs.getCustomerId(id);
    console.log(atletaRestituito);
    if (atletaRestituito) {
      this.elancoAtleta = atletaRestituito;
    } else {
      this.router.navigateByUrl('/atleti');
    }
  }
}
