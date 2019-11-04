import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Planets } from '../models/Planets';
import { Planet } from '../models/Planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planetsUrl = 'https://swapi.co/api/planets/?page=';
  planetUrl = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  getPlanets(page: string): Observable<Planets> {
    return this.http.get<Planets>(this.planetsUrl + page);
  }

  getPlanet(id: string): Observable<Planet> {
    return this.http.get<Planet>(this.planetUrl + id);
  }

  getOne(url: string): Observable<Planet> {
    return this.http.get<Planet>(url);
  }
}
