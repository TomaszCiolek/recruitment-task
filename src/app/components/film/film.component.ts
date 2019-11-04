import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../services/film.service';
import { PeopleService } from '../../services/people.service';
import { PlanetService } from '../../services/planet.service';
import { StarshipService } from '../../services/starship.service';
import { VehicleService } from '../../services/vehicle.service';
import { SpeciesService } from '../../services/species.service';
import { Film } from 'src/app/models/Film';
import { Planet } from 'src/app/models/Planet';
import { Starship } from 'src/app/models/Starship';
import { Vehicle } from 'src/app/models/Vehicle';
import { Species } from 'src/app/models/Species';
import { People } from 'src/app/models/People';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass']
})
export class FilmComponent implements OnInit {
  film: Film = new Film();
  people: People[] = [];
  planets: Planet[] = [];
  starships: Starship[] = [];
  vehicles: Vehicle[] = [];
  species: Species[] = [];
  id: string;

  constructor(
    private filmService: FilmService,
    private peopleService: PeopleService,
    private planetService: PlanetService,
    private starshipService: StarshipService,
    private vehicleService: VehicleService,
    private speciesService: SpeciesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(String(this.id)).subscribe(film => {
      this.film = film;
      for (const url of film.characters) {
        this.peopleService.getOne(url).subscribe(character => {
          this.people.push(character);
        });
      }
      for (const url of film.planets) {
        this.planetService.getOne(url).subscribe(planet => {
          this.planets.push(planet);
        });
      }
      for (const url of film.starships) {
        this.starshipService.getOne(url).subscribe(starship => {
          this.starships.push(starship);
        });
      }
      for (const url of film.species) {
        this.speciesService.getOne(url).subscribe(species => {
          this.species.push(species);
        });
      }
      for (const url of film.vehicles) {
        this.vehicleService.getOne(url).subscribe(vehicle => {
          this.vehicles.push(vehicle);
        });
      }
    });
  }

}
