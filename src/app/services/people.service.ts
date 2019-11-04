import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { People } from '../models/People';
import { AllPeople } from '../models/AllPeople';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  manyPeopleUrl = 'https://swapi.co/api/people/?page=';
  peopleUrl = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  getPeople(id: string): Observable<People> {
    return this.http.get<People>(this.peopleUrl + id);
  }

  getOne(url: string): Observable<People> {
    return this.http.get<People>(url);
  }
}
