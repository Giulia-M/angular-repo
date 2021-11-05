import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-elenco-film',
  templateUrl: './elenco-film.component.html',
  styleUrls: ['./elenco-film.component.css'],
})
export class ElencoFilmComponent implements OnInit, OnDestroy {
  elencoFilms: Film[];
  sottoscrizioneFilm!: Subscription;
  constructor(private filmservice: FilmService) {
    this.elencoFilms = [];
  }
  ngOnDestroy(): void {
    this.sottoscrizioneFilm.unsubscribe();
  }

  ngOnInit(): void {
    //chiedo al service
    // this.elencoFilms = this.filmservice.getFilms();

    this.sottoscrizioneFilm = this.filmservice.getFilms$().subscribe(
      (elenco) => (this.elencoFilms = elenco),
      (errore) => console.log('errore' + errore),
      () => console.log('dati caricati con successo')
    );
  }
}
