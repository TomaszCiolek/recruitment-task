import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { PeopleService } from '../../services/people.service';
import { FilmService } from '../../services/film.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { People } from 'src/app/models/People';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.sass']
})
export class VehicleComponent implements OnInit {
  vehicle: Vehicle = new Vehicle();
  people: People[] = [];
  films: Film[] = [];
  id: string;

  constructor(
    private vehicleService: VehicleService,
    private peopleService: PeopleService,
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicle(String(this.id)).subscribe(vehicle => {
      this.vehicle = vehicle;
      for (const url of vehicle.pilots) {
        this.peopleService.getOne(url).subscribe(people => {
          this.people.push(people);
        });
      }
      for (const url of vehicle.films) {
        this.filmService.getOne(url).subscribe(film => {
          this.films.push(film);
        });
      }
    });
  }

}
