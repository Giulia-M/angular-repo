import { from, Observable, of } from 'rxjs';
import { Film } from '../models/film';

export const elencoFilm: Film[] = [
  {
    id: 1,
    titolo: 'il mondo perduto',
    genere: 'fantasy',
  },
  {
    id: 2,
    titolo: 'inside',
    genere: 'comic',
  },
  {
    id: 3,
    titolo: 'il signore degli anelli',
    genere: 'fantasy',
  },
  {
    id: 4,
    titolo: 'omicidio sul ponte',
    genere: 'thriller',
  },
];

//esportiamo elenco film come observable
export const elencoFilm$: Observable<Film[]> = of(elencoFilm);
