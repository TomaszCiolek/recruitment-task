import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Film } from '../models/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  filmUrl = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) { }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(this.filmUrl + id);
  }

  getOne(url: string): Observable<Film> {
    return this.http.get<Film>(url);
  }
}
