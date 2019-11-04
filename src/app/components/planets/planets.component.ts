import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';

import { Planets } from '../../models/Planets';
import { Planet } from '../../models/Planet';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.sass']
})
export class PlanetsComponent implements OnInit {
  planets: Planets;
  singlePlanets: Planet[] = [];
  filteredPlanets: Planet[] = [];
  alreadyGotPages: number[] = [1];
  page = 1;
  first = 0;
  second = 10;
  inputValue = '';

  // MatPaginator Inputs
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private planetService: PlanetService) {
  }

  getPaginatorData(event: PageEvent) {
    this.first = event.pageIndex * event.pageSize;
    this.second = this.first + event.pageSize;
  }

  getMorePlanets() {
    if (this.planets.next != null) {
      this.page = Number(this.planets.next[this.planets.next.length - 1]);
      if (this.alreadyGotPages.indexOf(this.page) === -1) {
        this.alreadyGotPages.push(this.page);
        this.ngOnInit();
      }
    }
  }

  fPlanets(value: string) {
    if (!value) {
      this.filteredPlanets = this.singlePlanets;
      this.inputValue = '';
      this.length = this.singlePlanets.length;
    } else {
      this.inputValue = value;
      this.filteredPlanets = this.singlePlanets.filter(it => {
        if (it.name) {
          return it.name.toLocaleLowerCase().match(value.toLocaleLowerCase());
        }
      });
      this.length = this.filteredPlanets.length;
    }
  }
  ngOnInit() {
    this.planetService.getPlanets(String(this.page)).subscribe(planets => {
      this.planets = planets;
      for (const planet of planets.results) {
        this.singlePlanets.push(planet);
      }
      if (this.inputValue === '') {
        this.filteredPlanets = this.singlePlanets;
        this.length = this.singlePlanets.length;
      }
      this.getMorePlanets();
      console.log(this.singlePlanets.length, ' <-- all planets');
    });
  }
}
