import { Injectable } from '@angular/core';
import Data from '../Data/Customer.db';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  getCustomers(): Customer[] {
    return Data;
  }
  createNewItem(item: Customer) {
    Data.push(item);
  }
  getCustomerId(id: number): any {
    let atleta = undefined;
    atleta = Data.find((item) => item.id == id);
    return atleta;
  }
  update(atleta: Customer) {
    let p = Data.findIndex((item) => item.id == atleta.id);
    if (p >= 0) {
      Data[p] = atleta;
    }
  }
  delete(id: number) {
    let removeItem = Data.findIndex((item) => item.id === id);
    if (removeItem >= 0) {
      Data.splice(removeItem, 1);
    }
  }
}
