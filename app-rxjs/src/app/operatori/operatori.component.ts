import { Component, OnInit } from '@angular/core';
import { from, range } from 'rxjs';
import { map, skip, take, tap } from 'rxjs/operators';
@Component({
  selector: 'app-operatori',
  templateUrl: './operatori.component.html',
  styleUrls: ['./operatori.component.css'],
})
export class OperatoriComponent implements OnInit {
  utenti = [
    {
      nome: 'lucia',
      cognome: 'neri',
    },
    {
      nome: 'paolo',
      cognome: 'bianchi',
    },
    {
      nome: 'rosa',
      cognome: 'verdi',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  esempio1(): void {
    console.clear();
    console.log('esempio 1');
    const observable = range(1, 10);

    /* prima di sottoscrivere l'observable, 
    creiamo una sequenza di operazioni 
    
    all'interno della pipe possiamo elencare vari operatori per elaborare i dati emessi dall'observable 
    prima del loro impiego finale 
    pipe(
      operatore 1(),
      operatore 2()
      ...
      
      
      il map è un operatore di pipe che sostituisce ciascun valore emesso con il valore restituito dalla funzione inserita */
    observable.pipe(map((x) => x * 2)).subscribe(console.log);
  }

  esempio2(): void {
    const mesi = ['genn', 'febbra', 'mar', 'apr', 'mag', 'giu'];
    const observable = from(mesi);
    observable.pipe(map((x) => x.length)).subscribe(console.log);

    const lunghezze: number[] = [];

    observable.pipe(map((x) => x.length)).subscribe((x) => lunghezze.push(x));
    console.log('contenuto di lunghezze ' + lunghezze);
  }

  esempio3(): void {
    console.clear();
    console.log('esempio 3 ');

    const observable = from(this.utenti);

    observable
      .pipe(
        //converto l'intero oggetto in stringa
        map((utente) => utente.nome + ' ' + utente.cognome),
        //trasformo la stringa cambiandola in maiuscolo
        map((nominativo) => nominativo.toUpperCase())
      )
      .subscribe((x) => console.log('valore finale : ' + x));
  }

  esempio4(): void {
    console.clear();
    console.log('_____esempio 4______');

    const observable = range(1, 10);
    //tap=funzione che esegue del codice per ciascun elemento , senza alterarne il valore
    observable
      .pipe(
        //stampo il valore originale prima della trasformazione
        tap((x) =>
          console.log(
            'valore originale ' +
              x +
              ' verrà convertito in x * 1.5 = ' +
              x * 1.5
          )
        ),
        map((x) => x * 1.5)
      )
      .subscribe((x) => console.log('valore finale ' + x));
  }

  esempio5(): void {
    const observable = from(this.utenti);

    observable
      .pipe(
        tap((utente) =>
          console.log(
            'utente da processare ' + utente.nome + ' ' + utente.cognome
          )
        ),
        map((utente) => utente.nome),
        tap((nome) => console.log('nome da processare ' + nome)),
        map((nome) => nome.charAt(0))
      )
      .subscribe((x) => console.log('valore finale ' + x));
  }

  esempio6(): void {
    //take (n) prende i primi n valori dall 'obs

    const observable = range(1, 100);

    observable
      //con take prendi i primi 10 valori e scarta gli altri
      .pipe(take(11))
      .subscribe((x) => console.log('valore finale ' + x));
  }

  esempio7(): void {
    const observable = range(1, 100);

    observable
      //con skip salta i primi 10 valori e prendi gli altri
      .pipe(skip(10))
      .subscribe((x) => console.log('valore finale ' + x));
  }

  esempio8(): void {
    const observable = range(1, 100);

    observable

      .pipe(
        skip(90),
        map((x) => x * 2),
        take(5)
      )
      .subscribe((x) => console.log('valore finale ' + x));
  }
}
