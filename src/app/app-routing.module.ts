import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetComponent } from './components/planet/planet.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { FilmComponent } from './components/film/film.component';
import { PeopleComponent } from './components/people/people.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipComponent } from './components/starship/starship.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// when i add this, navigation using urls works after build but everytime page needs to be reloaded to see different page
// works nice on a dev server without need to be reloaded
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:id', component: PlanetComponent },
  { path: 'vehicles/:id', component: VehicleComponent },
  { path: 'films/:id', component: FilmComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: 'species/:id', component: SpeciesComponent },
  { path: 'starships/:id', component: StarshipComponent },
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlanetsComponent];
