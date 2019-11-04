import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../../services/starship.service';
import { PeopleService } from '../../services/people.service';
import { FilmService } from '../../services/film.service';
import { Starship } from 'src/app/models/Starship';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/People';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.sass']
})
export class StarshipComponent implements OnInit {
  starship: Starship = new Starship();
  people: People[] = [];
  films: Film[] = [];
  id: string;

  constructor(
    private starshipService: StarshipService,
    private peopleService: PeopleService,
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.starshipService.getStarship(String(this.id)).subscribe(starship => {
      this.starship = starship;
      for (const url of starship.pilots) {
        this.peopleService.getOne(url).subscribe(people => {
          this.people.push(people);
        });
      }
      for (const url of starship.films) {
        this.filmService.getOne(url).subscribe(film => {
          this.films.push(film);
        });
      }
    });
  }
}
