import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { PeopleService } from '../../services/people.service';
import { FilmService } from '../../services/film.service';
import { ActivatedRoute } from '@angular/router';


import { Planet } from '../../models/Planet';
import { People } from 'src/app/models/People';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.sass']
})
export class PlanetComponent implements OnInit {
  planet: Planet = new Planet();
  residents: People[] = [];
  films: Film[] = [];
  id: string;

  constructor(
    private planetService: PlanetService,
    private peopleService: PeopleService,
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanet(String(this.id)).subscribe(planet => {
      this.planet = planet;
      for (const url of planet.residents) {
        this.peopleService.getOne(url).subscribe((people: People) => {
          this.residents.push(people);
        });
      }
      for (const url of planet.films) {
        this.filmService.getOne(url).subscribe(film => {
          this.films.push(film);
        });
      }
    });
  }

}
