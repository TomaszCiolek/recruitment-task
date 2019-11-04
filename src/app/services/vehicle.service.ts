import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  VehicleUrl = 'https://swapi.co/api/vehicles/';

  constructor(private http: HttpClient) { }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.VehicleUrl + id);
  }

  getOne(url: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(url);
  }
}
