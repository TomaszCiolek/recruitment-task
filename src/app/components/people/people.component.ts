import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { FilmService } from '../../services/film.service';
import { SpeciesService } from '../../services/species.service';
import { StarshipService } from '../../services/starship.service';
import { VehicleService } from '../../services/vehicle.service';
import { PlanetService } from '../../services/planet.service';
import { People } from 'src/app/models/People';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/Film';
import { Species } from 'src/app/models/Species';
import { Starship } from 'src/app/models/Starship';
import { Vehicle } from 'src/app/models/Vehicle';
import { Planet } from 'src/app/models/Planet';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {
  people: People = new People();
  planet: Planet = new Planet();
  films: Film[] = [];
  species: Species[] = [];
  starships: Starship[] = [];
  vehicles: Vehicle[] = [];
  id: string;

  constructor(
    private peopleService: PeopleService,
    private filmService: FilmService,
    private speciesService: SpeciesService,
    private starshipService: StarshipService,
    private vehicleService: VehicleService,
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) { }

  idFromUrl() {
    if (typeof (this.planet.url) !== 'undefined') {
      return this.planet.url.split('/')[5];
    } else {
      return '0';
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.peopleService.getPeople(String(this.id)).subscribe(people => {
      this.people = people;
      this.planetService.getOne(people.homeworld).subscribe(planet => {
        this.planet = planet;
      });
      for (const url of people.films) {
        this.filmService.getOne(url).subscribe(film => {
          this.films.push(film);
        });
      }
      for (const url of people.species) {
        this.speciesService.getOne(url).subscribe(species => {
          this.species.push(species);
        });
      }
      for (const url of people.starships) {
        this.starshipService.getOne(url).subscribe(starship => {
          this.starships.push(starship);
        });
      }
      for (const url of people.vehicles) {
        this.vehicleService.getOne(url).subscribe(vehicle => {
          this.vehicles.push(vehicle);
        });
      }
    });
  }

}
