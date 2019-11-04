import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilmComponent } from './components/film/film.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { StarshipComponent } from './components/starship/starship.component';
import { PeopleComponent } from './components/people/people.component';
import { SpeciesComponent } from './components/species/species.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PlanetComponent,
    PageNotFoundComponent,
    FilmComponent,
    VehicleComponent,
    StarshipComponent,
    PeopleComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
