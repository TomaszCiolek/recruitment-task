import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Species } from '../models/Species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  speciesUrl = 'https://swapi.co/api/species/';

  constructor(private http: HttpClient) { }

  getSpecies(id: string): Observable<Species> {
    return this.http.get<Species>(this.speciesUrl + id);
  }

  getOne(url: string): Observable<Species> {
    return this.http.get<Species>(url);
  }
}
