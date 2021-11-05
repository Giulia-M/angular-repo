import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, of, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  //memorizzo la sottoscrizione dell'esempio  3
  sottoscrizione3!: Subscription;
  //memorizzo la sottoscrizione dell'esempio  5
  sottoscrizione5!: Subscription;

  //observable dell'evento click sulla pagina
  observable5 = fromEvent(document, 'click');

  constructor() {}

  ngOnInit(): void {}

  esempio1(): void {
    console.clear();
    console.log('_______esempio 1________');
    //definisco observable è un flusso di dati, emette ad es dei numeri
    const observable = of(10, 20, 30, 40, 50);

    //insieme di funzioni chiamate dall'observer
    //next chiamata ad ogni emissione dei dati
    function next(x: any) {
      console.log('valore emesso ' + x);
    }
    //chiamata in caso di errori
    function error(e: any) {
      console.log('si è verificato errore  ' + e);
    }
    //chiamata al termine del flusso
    function complete() {
      console.log('sequenza terminata');
    }

    //dichiaro osservatore (un insieme di funzioni , cioè callback )
    //l'observer possiede le callback da chiamare in ogni caso
    const observer = { next, error, complete };

    //facciamo partire la sottoscrizione
    console.log('prima della sottoscrizione');
    observable.subscribe(observer);
    console.log('dopo la sottoscrizione');
  }

  esempio2(): void {
    console.clear();
    console.log('_______esempio 2________');

    const observable = of(3, 4, 5, 7, 90, 0);

    //dichiaro un observer che dichiara a sua volta le fn al suo interno

    const observer = {
      next: (x: any) => console.log('valore emesso' + x),
      error: (e: any) => console.log('errore' + e),
      complete: () => console.log('termine'),
    };

    //facciamo partire la sottoscrizione
    console.log('prima della sottoscrizione');
    observable.subscribe(observer);
    console.log('dopo la sottoscrizione');

    //modifico una delle fn dell'observer
    observer.next = (x: any) => {
      if (x != 0) {
        //posso dividere solo se x diverso da zero
        let ris = 10 / x;
        console.log('10 diviso ' + x + '= ' + ris);
      } else {
        throw new Error('non puoi dividere per zero ');
      }
    };
    //facciamo partire la sottoscrizione
    console.log('prima della sottoscrizione');
    observable.subscribe(observer);
    console.log('dopo la sottoscrizione');

    // definisco un observer all 'atto della sottoscrizione
    //facciamo partire la sottoscrizione
    console.log('prima della sottoscrizione');
    observable.subscribe(
      (x) => console.log(x * 2),
      (y) => console.log('errore'),
      () => console.log('fine sequenza')
    );
    console.log('dopo la sottoscrizione');
  }

  esempio3(x: number): void {
    if (x == 0) {
      console.clear();
      console.log('____Esempio 3 ______');

      //observable a tempo (numero progressivo ogni secondo )
      const observable = interval(1000);
      console.log('prima della sottoscrizione');
      this.sottoscrizione3 = observable.subscribe((n) =>
        console.log('numero ' + n)
      );
      console.log('dopo la sottoscrizione');
    } else {
      this.sottoscrizione3.unsubscribe();
      console.log('sottoscrizione 3 terminata ');
    }
  }

  esempio4(): void {
    console.clear();
    console.log('___________esempio 4__________');

    //dichiaro array
    const colori = [
      'giallo',
      'blu',
      'verde',
      'nero',
      'rosso',
      'bianco',
      'blu',
      'rosa',
      'viola',
    ];

    const observable = from(colori);

    console.log('prima della sottoscrizione');
    observable.subscribe((x) => console.log(x.charAt(0) + ' come ' + x));
    console.log('dopo la sottoscrizione');
  }

  esempio5(n: number): void {
    console.clear();
    console.log('____Esempio 5 ______');

    if (n == 0) {
      //sottoscrivo
      this.sottoscrizione5 = this.observable5.subscribe((x) =>
        console.log('hai cliccato')
      );
    } else {
      this.sottoscrizione5.unsubscribe();
    }
  }

  esempio6(): void {
    console.clear();
    console.log('____Esempio 6 ______');

    // range genera una sequenza di numeri nell'intervallo specificato
    const observable = range(1, 10);

    observable.subscribe((x) => console.log(x));
  }
}
