import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import Data from 'src/app/Data/Customer.db';
@Component({
  selector: 'app-nuovo-atleta',
  templateUrl: './nuovo-atleta.component.html',
  styleUrls: ['./nuovo-atleta.component.css'],
})
export class NuovoAtletaComponent implements OnInit {
  elancoAtleti!: Customer;
  form!: FormGroup;
  constructor(
    public cs: CustomerService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: '',
      cognome: '',
      punteggio: '',
    });
  }
  confirm() {
    let atleta: Customer = {
      id: Number(Data.length),
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      punteggio: this.form.value.punteggio,
    };
    this.cs.createNewItem(atleta);
    this.router.navigateByUrl('/atleti');
  }
}
