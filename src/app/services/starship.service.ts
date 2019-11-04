import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Starship } from '../models/Starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  starshipUrl = 'https://swapi.co/api/starships/';

  constructor(private http: HttpClient) { }

  getStarship(id: string): Observable<Starship> {
    return this.http.get<Starship>(this.starshipUrl + id);
  }

  getOne(url: string): Observable<Starship> {
    return this.http.get<Starship>(url);
  }
}
