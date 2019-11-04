import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../services/species.service';
import { PeopleService } from '../../services/people.service';
import { FilmService } from '../../services/film.service';
import { PlanetService } from '../../services/planet.service';
import { Species } from 'src/app/models/Species';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/People';
import { Film } from 'src/app/models/Film';
import { Planet } from 'src/app/models/Planet';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.sass']
})
export class SpeciesComponent implements OnInit {
  species: Species = new Species();
  planet: Planet = new Planet();
  films: Film[] = [];
  people: People[] = [];
  id: string;

  constructor(
    private speciesService: SpeciesService,
    private peopleService: PeopleService,
    private filmService: FilmService,
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) { }

  idFromUrl() {
    if (typeof(this.planet.url) !== 'undefined') {
      return this.planet.url.split('/')[5];
    } else {
      return '0';
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.speciesService.getSpecies(String(this.id)).subscribe(species => {
      this.species = species;
      this.planetService.getOne(species.homeworld).subscribe(planet => {
        this.planet = planet;
        this.idFromUrl();
      });
      for (const url of species.people) {
        this.peopleService.getOne(url).subscribe(people => {
          this.people.push(people);
        });
      }
      for (const url of species.films) {
        this.filmService.getOne(url).subscribe(film => {
          this.films.push(film);
        });
      }
    });
  }

}
