import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-modifica-atleta',
  templateUrl: './modifica-atleta.component.html',
  styleUrls: ['./modifica-atleta.component.css'],
})
export class ModificaAtletaComponent implements OnInit {
  elancoAtleti!: Customer;
  form!: FormGroup;
  constructor(
    private cs: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: '',
      cognome: '',
      punteggio: '',
    });
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    let atletaRestituito = this.cs.getCustomerId(id);
    this.form.patchValue({
      nome: atletaRestituito.nome,
      cognome: atletaRestituito.cognome,
      punteggio: atletaRestituito.punteggio,
    });
    if (atletaRestituito) {
      this.elancoAtleti = atletaRestituito;
    } else {
      alert('Atleta non Existente ');
      this.router.navigateByUrl('/atleti');
    }
  }
  confirm(): void {
    let atletaModificato = {
      id: this.elancoAtleti.id,
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      punteggio: this.form.value.punteggio,
    };
    console.log(atletaModificato);
    this.cs.update(atletaModificato);
    this.router.navigateByUrl(`/atleti/${this.elancoAtleti.id}`);
  }
  deleteEntry() {
    if (confirm(`vuoi eliminare l'atleta ${this.elancoAtleti.nome} ?`)) {
      this.cs.delete(this.elancoAtleti.id);
      //torna all'elenco
      this.router.navigateByUrl('/atleti');
    }
  }
}
