import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import Data from '../Data/Customer.db';
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-elanco-atleti',
  templateUrl: './elanco-atleti.component.html',
  styleUrls: ['./elanco-atleti.component.css'],
})
export class ElancoAtletiComponent implements OnInit {
  elencoAtleti!: Customer[];

  constructor(public cs: CustomerService) {}

  ngOnInit(): void {
    this.elencoAtleti = this.cs.getCustomers();
  }
}
