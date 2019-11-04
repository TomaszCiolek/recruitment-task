(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <h5>Star Wars Data</h5>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n<div class=\"footer-div\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/film/film.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/film/film.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\n    <div class=\"back-button-div\">\n        <button mat-raised-button color=\"secondary\" routerLink=\"/planets\">Back to planet list</button>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>{{film.title}}</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list>\n                    <p class=\"p-d\">Opening crawl: </p>\n                    <p>{{film.opening_crawl}}</p>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Director:</p> {{film.director}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Producer:</p> {{film.producer}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Release date:</p> {{film.release_date}}\n                    </mat-list-item>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"back-button-div\">\n        <p>You can see details of each character, planet, starship, vehicle or species below by clicking on it</p>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Characters: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let character of people\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/people', character.url.split('/')[5]]\">\n                        {{character.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Starships: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let starship of starships\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/starships', starship.url.split('/')[5]]\">\n                        {{starship.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Vehicles: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let vehicle of vehicles\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/vehicles', vehicle.url.split('/')[5]]\">\n                        {{vehicle.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Species: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let spec of species\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/species', spec.url.split('/')[5]]\">\n                        {{spec.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Planets: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let planet of planets\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/planets', planet.url.split('/')[5]]\">\n                        {{planet.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\n    <div class=\"card-div\">\n        <p>PAGE NOT FOUND</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/people/people.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/people/people.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\n    <div class=\"back-button-div\">\n        <button mat-raised-button color=\"secondary\" routerLink=\"/planets\">Back to planet list</button>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>{{people.name}}</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Height:</p> {{people.height}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Mass:</p> {{people.mass}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Hair color:</p> {{people.hair_color}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Skin color:</p> {{people.skin_color}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Eye color:</p> {{people.eye_color}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Birth year:</p> {{people.birth_year}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Gender:</p> {{people.gender}}\n                    </mat-list-item>\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/planets', idFromUrl()]\">\n                        <p class=\"p-d\">Homeworld:</p> {{planet.name}}\n                    </mat-list-item>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"back-button-div\">\n        <p>You can see details of each species, film, starship or vehicle below by clicking on it</p>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Species:</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let spec of species\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/species', spec.url.split('/')[5]]\">\n                        {{spec.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Films: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let film of films\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/films', film.url.split('/')[5]]\">\n                        {{film.title}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Starships: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let starship of starships\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/starships', starship.url.split('/')[5]]\">\n                        {{starship.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Vehicles: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let vehicle of vehicles\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/vehicles', vehicle.url.split('/')[5]]\">\n                        {{vehicle.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet/planet.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet/planet.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\n    <div class=\"back-button-div\">\n        <button mat-raised-button color=\"secondary\" routerLink=\"/planets\">Back to planet list</button>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>{{planet.name}}</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Rotation Period:</p> {{planet.rotation_period}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Orbital Period:</p> {{planet.orbital_period}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Diameter:</p> {{planet.diameter}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Climate:</p> {{planet.climate}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Gravity:</p> {{planet.gravity}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Terrain:</p> {{planet.terrain}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Surfacce Water:</p> {{planet.surface_water}}\n                    </mat-list-item>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"back-button-div\">\n        <p>You can see details of each resident or film below by clicking on it</p>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Residents:</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let resident of residents\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/people', resident.url.split('/')[5]]\">\n                        {{resident.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Films: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let film of films\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/films', film.url.split('/')[5]]\">\n                        {{film.title}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planets/planets.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/planets/planets.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\n    <div class=\"title-div\">\n        <h1>List of all planets</h1>\n    </div>\n    <div class=\"input-div\">\n        <mat-form-field>\n            <input type=\"search\" matInput #myInput [(ngModel)]=\"searchText\" placeholder=\"Input planet name...\"\n                (input)=\"fPlanets(myInput.value)\" />\n        </mat-form-field>\n    </div>\n    <div class=\"paginator-div\">\n        <mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\"\n            (page)=\"pageEvent = getPaginatorData($event)\">\n        </mat-paginator>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title></mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let planet of filteredPlanets | slice:first:second\">\n                    <mat-list-item className=\"list\" color=\"accent\"\n                        [routerLink]=\"['/planets', planet.url.split('/')[5]]\">\n                        <p class=\"p-d\">Planet:</p>{{planet.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/species/species.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/species/species.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\r\n    <div class=\"back-button-div\">\r\n        <button mat-raised-button color=\"secondary\" routerLink=\"/planets\">Back to planet list</button>\r\n    </div>\r\n    <div class=\"card-div\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>\r\n                    <h1>{{species.name}}</h1>\r\n                </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Classification:</p> {{species.classification}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Designation:</p> {{species.designation}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Average height:</p> {{species.average_height}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Skin color:</p> {{species.skin_colors}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Hair color:</p> {{species.hair_colors}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Eye color:</p> {{species.eye_colors}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Average lifespan:</p> {{species.average_lifespan}}\r\n                    </mat-list-item>\r\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/planets', idFromUrl()]\">\r\n                        <p class=\" p-d\">Homeworld:</p> {{planet.name}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Language:</p> {{species.language}}\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"back-button-div\">\r\n        <p>You can see details of each people or film below by clicking on it</p>\r\n    </div>\r\n    <div class=\"card-div\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>People: </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list *ngFor=\"let resident of people\">\r\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/people', resident.url.split('/')[5]]\">\r\n                        {{resident.name}}\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"card-div\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Films: </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list *ngFor=\"let film of films\">\r\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/films', film.url.split('/')[5]]\">\r\n                        {{film.title}}\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starship/starship.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/starship/starship.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\r\n    <div class=\"back-button-div\">\r\n        <button mat-raised-button color=\"accent\" routerLink=\"/planets\">Back to planet list</button>\r\n    </div>\r\n    <div class=\"card-div\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>\r\n                    <h1>{{starship.name}}</h1>\r\n                </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Model:</p> {{starship.model}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Cost in credits:</p> {{starship.cost_in_credits}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Lenght:</p> {{starship.length}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Max atmosphering speed:</p> {{starship.max_atmosphering_speed}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Crew:</p> {{starship.crew}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Passengers:</p> {{starship.passengers}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\" p-d\">Cargo capacity:</p> {{starship.cargo_capacity}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Consumables:</p> {{starship.consumables}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Hyperdrive rating:</p> {{starship.hyperdrive_rating}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">MGLT:</p> {{starship.MGLT}}\r\n                    </mat-list-item>\r\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\r\n                        <p class=\"p-d\">Starship class:</p> {{starship.starship_class}}\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"back-button-div\">\r\n        <p>You can see details of each pilot or film below by clicking on it</p>\r\n    </div>\r\n    <div class=\"card-div\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Pilots: </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list *ngFor=\"let pilot of people\">\r\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/people', pilot.url.split('/')[5]]\">\r\n                        {{pilot.name}}\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"card-div\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Films: </mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list *ngFor=\"let film of films\">\r\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/films', film.url.split('/')[5]]\">\r\n                        {{film.title}}\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle/vehicle.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle/vehicle.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\n    <div class=\"back-button-div\">\n        <button mat-raised-button color=\"accent\" routerLink=\"/planets\">Back to planet list</button>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>\n                    <h1>{{vehicle.name}}</h1>\n                </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Model:</p> {{vehicle.model}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Manufacturer:</p> {{vehicle.manufacturer}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Cost in credits:</p> {{vehicle.cost_in_credits}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Lenght:</p> {{vehicle.length}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Max atmosphering speed:</p> {{vehicle.max_atmosphering_speed}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Crew:</p> {{vehicle.crew}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Passengers:</p> {{vehicle.passengers}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\" p-d\">Cargo capacity:</p> {{vehicle.cargo_capacity}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Consumables:</p> {{vehicle.consumables}}\n                    </mat-list-item>\n                    <mat-list-item class=\"arrow-pointer\" color=\"accent\">\n                        <p class=\"p-d\">Vehicle class:</p> {{vehicle.vehicle_class}}\n                    </mat-list-item>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"back-button-div\">\n        <p>You can see details of each pilot or film below by clicking on it</p>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Pilots: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let pilot of people\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/people', pilot.url.split('/')[5]]\">\n                        {{pilot.name}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n    <div class=\"card-div\">\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Films: </mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <mat-list *ngFor=\"let film of films\">\n                    <mat-list-item color=\"accent\" [routerLink]=\"['/films', film.url.split('/')[5]]\">\n                        {{film.title}}\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_planets_planets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/planets/planets.component */ "./src/app/components/planets/planets.component.ts");
/* harmony import */ var _components_planet_planet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/planet/planet.component */ "./src/app/components/planet/planet.component.ts");
/* harmony import */ var _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vehicle/vehicle.component */ "./src/app/components/vehicle/vehicle.component.ts");
/* harmony import */ var _components_film_film_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/film/film.component */ "./src/app/components/film/film.component.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/people/people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _components_species_species_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/species/species.component */ "./src/app/components/species/species.component.ts");
/* harmony import */ var _components_starship_starship_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/starship/starship.component */ "./src/app/components/starship/starship.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");











// when i add this, navigation using urls works after build but everytime page needs to be reloaded to see different page
// works nice on a dev server without need to be reloaded
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
const routes = [
    { path: 'planets', component: _components_planets_planets_component__WEBPACK_IMPORTED_MODULE_3__["PlanetsComponent"] },
    { path: 'planets/:id', component: _components_planet_planet_component__WEBPACK_IMPORTED_MODULE_4__["PlanetComponent"] },
    { path: 'vehicles/:id', component: _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_5__["VehicleComponent"] },
    { path: 'films/:id', component: _components_film_film_component__WEBPACK_IMPORTED_MODULE_6__["FilmComponent"] },
    { path: 'people/:id', component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_7__["PeopleComponent"] },
    { path: 'species/:id', component: _components_species_species_component__WEBPACK_IMPORTED_MODULE_8__["SpeciesComponent"] },
    { path: 'starships/:id', component: _components_starship_starship_component__WEBPACK_IMPORTED_MODULE_9__["StarshipComponent"] },
    { path: '', redirectTo: '/planets', pathMatch: 'full' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_components_planets_planets_component__WEBPACK_IMPORTED_MODULE_3__["PlanetsComponent"]];


/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.name = 'Tomek';
        this.changeName('T');
    }
    changeName(name) {
        this.name = name;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_planet_planet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/planet/planet.component */ "./src/app/components/planet/planet.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_film_film_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/film/film.component */ "./src/app/components/film/film.component.ts");
/* harmony import */ var _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/vehicle/vehicle.component */ "./src/app/components/vehicle/vehicle.component.ts");
/* harmony import */ var _components_starship_starship_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/starship/starship.component */ "./src/app/components/starship/starship.component.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/people/people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _components_species_species_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/species/species.component */ "./src/app/components/species/species.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"],
            _components_planet_planet_component__WEBPACK_IMPORTED_MODULE_7__["PlanetComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
            _components_film_film_component__WEBPACK_IMPORTED_MODULE_9__["FilmComponent"],
            _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_10__["VehicleComponent"],
            _components_starship_starship_component__WEBPACK_IMPORTED_MODULE_11__["StarshipComponent"],
            _components_people_people_component__WEBPACK_IMPORTED_MODULE_12__["PeopleComponent"],
            _components_species_species_component__WEBPACK_IMPORTED_MODULE_13__["SpeciesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/film/film.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/film/film.component.sass ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsbS9maWxtLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/components/film/film.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/film/film.component.ts ***!
  \***************************************************/
/*! exports provided: FilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmComponent", function() { return FilmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/planet.service */ "./src/app/services/planet.service.ts");
/* harmony import */ var _services_starship_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/starship.service */ "./src/app/services/starship.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _services_species_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/species.service */ "./src/app/services/species.service.ts");
/* harmony import */ var src_app_models_Film__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/Film */ "./src/app/models/Film.ts");










let FilmComponent = class FilmComponent {
    constructor(filmService, peopleService, planetService, starshipService, vehicleService, speciesService, route) {
        this.filmService = filmService;
        this.peopleService = peopleService;
        this.planetService = planetService;
        this.starshipService = starshipService;
        this.vehicleService = vehicleService;
        this.speciesService = speciesService;
        this.route = route;
        this.film = new src_app_models_Film__WEBPACK_IMPORTED_MODULE_9__["Film"]();
        this.people = [];
        this.planets = [];
        this.starships = [];
        this.vehicles = [];
        this.species = [];
    }
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
};
FilmComponent.ctorParameters = () => [
    { type: _services_film_service__WEBPACK_IMPORTED_MODULE_3__["FilmService"] },
    { type: _services_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"] },
    { type: _services_planet_service__WEBPACK_IMPORTED_MODULE_5__["PlanetService"] },
    { type: _services_starship_service__WEBPACK_IMPORTED_MODULE_6__["StarshipService"] },
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_7__["VehicleService"] },
    { type: _services_species_service__WEBPACK_IMPORTED_MODULE_8__["SpeciesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FilmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-film',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./film.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/film/film.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./film.component.sass */ "./src/app/components/film/film.component.sass")).default]
    })
], FilmComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.sass ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.sass */ "./src/app/components/page-not-found/page-not-found.component.sass")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/people/people.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/people/people.component.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/components/people/people.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/people/people.component.ts ***!
  \*******************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _services_species_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/species.service */ "./src/app/services/species.service.ts");
/* harmony import */ var _services_starship_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/starship.service */ "./src/app/services/starship.service.ts");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/planet.service */ "./src/app/services/planet.service.ts");
/* harmony import */ var src_app_models_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/People */ "./src/app/models/People.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_Planet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/Planet */ "./src/app/models/Planet.ts");











let PeopleComponent = class PeopleComponent {
    constructor(peopleService, filmService, speciesService, starshipService, vehicleService, planetService, route) {
        this.peopleService = peopleService;
        this.filmService = filmService;
        this.speciesService = speciesService;
        this.starshipService = starshipService;
        this.vehicleService = vehicleService;
        this.planetService = planetService;
        this.route = route;
        this.people = new src_app_models_People__WEBPACK_IMPORTED_MODULE_8__["People"]();
        this.planet = new src_app_models_Planet__WEBPACK_IMPORTED_MODULE_10__["Planet"]();
        this.films = [];
        this.species = [];
        this.starships = [];
        this.vehicles = [];
    }
    idFromUrl() {
        if (typeof (this.planet.url) !== 'undefined') {
            return this.planet.url.split('/')[5];
        }
        else {
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
};
PeopleComponent.ctorParameters = () => [
    { type: _services_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] },
    { type: _services_film_service__WEBPACK_IMPORTED_MODULE_3__["FilmService"] },
    { type: _services_species_service__WEBPACK_IMPORTED_MODULE_4__["SpeciesService"] },
    { type: _services_starship_service__WEBPACK_IMPORTED_MODULE_5__["StarshipService"] },
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["VehicleService"] },
    { type: _services_planet_service__WEBPACK_IMPORTED_MODULE_7__["PlanetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/people/people.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.component.sass */ "./src/app/components/people/people.component.sass")).default]
    })
], PeopleComponent);



/***/ }),

/***/ "./src/app/components/planet/planet.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/planet/planet.component.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbmV0L3BsYW5ldC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/components/planet/planet.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/planet/planet.component.ts ***!
  \*******************************************************/
/*! exports provided: PlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetComponent", function() { return PlanetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/planet.service */ "./src/app/services/planet.service.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_Planet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/Planet */ "./src/app/models/Planet.ts");







let PlanetComponent = class PlanetComponent {
    constructor(planetService, peopleService, filmService, route) {
        this.planetService = planetService;
        this.peopleService = peopleService;
        this.filmService = filmService;
        this.route = route;
        this.planet = new _models_Planet__WEBPACK_IMPORTED_MODULE_6__["Planet"]();
        this.residents = [];
        this.films = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.planetService.getPlanet(String(this.id)).subscribe(planet => {
            this.planet = planet;
            for (const url of planet.residents) {
                this.peopleService.getOne(url).subscribe((people) => {
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
};
PlanetComponent.ctorParameters = () => [
    { type: _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"] },
    { type: _services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"] },
    { type: _services_film_service__WEBPACK_IMPORTED_MODULE_4__["FilmService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
PlanetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-planet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./planet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planet/planet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./planet.component.sass */ "./src/app/components/planet/planet.component.sass")).default]
    })
], PlanetComponent);



/***/ }),

/***/ "./src/app/components/planets/planets.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/planets/planets.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbmV0cy9wbGFuZXRzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/components/planets/planets.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/planets/planets.component.ts ***!
  \*********************************************************/
/*! exports provided: PlanetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsComponent", function() { return PlanetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/planet.service */ "./src/app/services/planet.service.ts");



let PlanetsComponent = class PlanetsComponent {
    constructor(planetService) {
        this.planetService = planetService;
        this.singlePlanets = [];
        this.filteredPlanets = [];
        this.alreadyGotPages = [1];
        this.page = 1;
        this.first = 0;
        this.second = 10;
        this.inputValue = '';
        // MatPaginator Inputs
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    getPaginatorData(event) {
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
    fPlanets(value) {
        if (!value) {
            this.filteredPlanets = this.singlePlanets;
            this.inputValue = '';
            this.length = this.singlePlanets.length;
        }
        else {
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
};
PlanetsComponent.ctorParameters = () => [
    { type: _services_planet_service__WEBPACK_IMPORTED_MODULE_2__["PlanetService"] }
];
PlanetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-planets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./planets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/planets/planets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./planets.component.sass */ "./src/app/components/planets/planets.component.sass")).default]
    })
], PlanetsComponent);



/***/ }),

/***/ "./src/app/components/species/species.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/species/species.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BlY2llcy9zcGVjaWVzLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/components/species/species.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/species/species.component.ts ***!
  \*********************************************************/
/*! exports provided: SpeciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesComponent", function() { return SpeciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_species_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/species.service */ "./src/app/services/species.service.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _services_planet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/planet.service */ "./src/app/services/planet.service.ts");
/* harmony import */ var src_app_models_Species__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Species */ "./src/app/models/Species.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_Planet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/Planet */ "./src/app/models/Planet.ts");









let SpeciesComponent = class SpeciesComponent {
    constructor(speciesService, peopleService, filmService, planetService, route) {
        this.speciesService = speciesService;
        this.peopleService = peopleService;
        this.filmService = filmService;
        this.planetService = planetService;
        this.route = route;
        this.species = new src_app_models_Species__WEBPACK_IMPORTED_MODULE_6__["Species"]();
        this.planet = new src_app_models_Planet__WEBPACK_IMPORTED_MODULE_8__["Planet"]();
        this.films = [];
        this.people = [];
    }
    idFromUrl() {
        if (typeof (this.planet.url) !== 'undefined') {
            return this.planet.url.split('/')[5];
        }
        else {
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
};
SpeciesComponent.ctorParameters = () => [
    { type: _services_species_service__WEBPACK_IMPORTED_MODULE_2__["SpeciesService"] },
    { type: _services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"] },
    { type: _services_film_service__WEBPACK_IMPORTED_MODULE_4__["FilmService"] },
    { type: _services_planet_service__WEBPACK_IMPORTED_MODULE_5__["PlanetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
SpeciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-species',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./species.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/species/species.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./species.component.sass */ "./src/app/components/species/species.component.sass")).default]
    })
], SpeciesComponent);



/***/ }),

/***/ "./src/app/components/starship/starship.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/starship/starship.component.sass ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnNoaXAvc3RhcnNoaXAuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/components/starship/starship.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/starship/starship.component.ts ***!
  \***********************************************************/
/*! exports provided: StarshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipComponent", function() { return StarshipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_starship_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/starship.service */ "./src/app/services/starship.service.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var src_app_models_Starship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Starship */ "./src/app/models/Starship.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let StarshipComponent = class StarshipComponent {
    constructor(starshipService, peopleService, filmService, route) {
        this.starshipService = starshipService;
        this.peopleService = peopleService;
        this.filmService = filmService;
        this.route = route;
        this.starship = new src_app_models_Starship__WEBPACK_IMPORTED_MODULE_5__["Starship"]();
        this.people = [];
        this.films = [];
    }
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
};
StarshipComponent.ctorParameters = () => [
    { type: _services_starship_service__WEBPACK_IMPORTED_MODULE_2__["StarshipService"] },
    { type: _services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"] },
    { type: _services_film_service__WEBPACK_IMPORTED_MODULE_4__["FilmService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
StarshipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-starship',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starship.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starship/starship.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starship.component.sass */ "./src/app/components/starship/starship.component.sass")).default]
    })
], StarshipComponent);



/***/ }),

/***/ "./src/app/components/vehicle/vehicle.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/vehicle/vehicle.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS92ZWhpY2xlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/components/vehicle/vehicle.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/vehicle/vehicle.component.ts ***!
  \*********************************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/film.service */ "./src/app/services/film.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/vehicle */ "./src/app/models/vehicle.ts");







let VehicleComponent = class VehicleComponent {
    constructor(vehicleService, peopleService, filmService, route) {
        this.vehicleService = vehicleService;
        this.peopleService = peopleService;
        this.filmService = filmService;
        this.route = route;
        this.vehicle = new _models_vehicle__WEBPACK_IMPORTED_MODULE_6__["Vehicle"]();
        this.people = [];
        this.films = [];
    }
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
};
VehicleComponent.ctorParameters = () => [
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"] },
    { type: _services_film_service__WEBPACK_IMPORTED_MODULE_4__["FilmService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
VehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle/vehicle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle.component.sass */ "./src/app/components/vehicle/vehicle.component.sass")).default]
    })
], VehicleComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/models/Film.ts":
/*!********************************!*\
  !*** ./src/app/models/Film.ts ***!
  \********************************/
/*! exports provided: Film */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Film {
}


/***/ }),

/***/ "./src/app/models/People.ts":
/*!**********************************!*\
  !*** ./src/app/models/People.ts ***!
  \**********************************/
/*! exports provided: People */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class People {
}


/***/ }),

/***/ "./src/app/models/Planet.ts":
/*!**********************************!*\
  !*** ./src/app/models/Planet.ts ***!
  \**********************************/
/*! exports provided: Planet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Planet", function() { return Planet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Planet {
}


/***/ }),

/***/ "./src/app/models/Species.ts":
/*!***********************************!*\
  !*** ./src/app/models/Species.ts ***!
  \***********************************/
/*! exports provided: Species */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Species", function() { return Species; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Species {
}


/***/ }),

/***/ "./src/app/models/Starship.ts":
/*!************************************!*\
  !*** ./src/app/models/Starship.ts ***!
  \************************************/
/*! exports provided: Starship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Starship", function() { return Starship; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Starship {
}


/***/ }),

/***/ "./src/app/models/vehicle.ts":
/*!***********************************!*\
  !*** ./src/app/models/vehicle.ts ***!
  \***********************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Vehicle {
}


/***/ }),

/***/ "./src/app/services/film.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/film.service.ts ***!
  \******************************************/
/*! exports provided: FilmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmService", function() { return FilmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FilmService = class FilmService {
    constructor(http) {
        this.http = http;
        this.filmUrl = 'https://swapi.co/api/films/';
    }
    getFilm(id) {
        return this.http.get(this.filmUrl + id);
    }
    getOne(url) {
        return this.http.get(url);
    }
};
FilmService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FilmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilmService);



/***/ }),

/***/ "./src/app/services/people.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/people.service.ts ***!
  \********************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PeopleService = class PeopleService {
    constructor(http) {
        this.http = http;
        this.manyPeopleUrl = 'https://swapi.co/api/people/?page=';
        this.peopleUrl = 'https://swapi.co/api/people/';
    }
    getPeople(id) {
        return this.http.get(this.peopleUrl + id);
    }
    getOne(url) {
        return this.http.get(url);
    }
};
PeopleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PeopleService);



/***/ }),

/***/ "./src/app/services/planet.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/planet.service.ts ***!
  \********************************************/
/*! exports provided: PlanetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetService", function() { return PlanetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PlanetService = class PlanetService {
    constructor(http) {
        this.http = http;
        this.planetsUrl = 'https://swapi.co/api/planets/?page=';
        this.planetUrl = 'https://swapi.co/api/planets/';
    }
    getPlanets(page) {
        return this.http.get(this.planetsUrl + page);
    }
    getPlanet(id) {
        return this.http.get(this.planetUrl + id);
    }
    getOne(url) {
        return this.http.get(url);
    }
};
PlanetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlanetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PlanetService);



/***/ }),

/***/ "./src/app/services/species.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/species.service.ts ***!
  \*********************************************/
/*! exports provided: SpeciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesService", function() { return SpeciesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SpeciesService = class SpeciesService {
    constructor(http) {
        this.http = http;
        this.speciesUrl = 'https://swapi.co/api/species/';
    }
    getSpecies(id) {
        return this.http.get(this.speciesUrl + id);
    }
    getOne(url) {
        return this.http.get(url);
    }
};
SpeciesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SpeciesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpeciesService);



/***/ }),

/***/ "./src/app/services/starship.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/starship.service.ts ***!
  \**********************************************/
/*! exports provided: StarshipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipService", function() { return StarshipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StarshipService = class StarshipService {
    constructor(http) {
        this.http = http;
        this.starshipUrl = 'https://swapi.co/api/starships/';
    }
    getStarship(id) {
        return this.http.get(this.starshipUrl + id);
    }
    getOne(url) {
        return this.http.get(url);
    }
};
StarshipService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StarshipService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StarshipService);



/***/ }),

/***/ "./src/app/services/vehicle.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let VehicleService = class VehicleService {
    constructor(http) {
        this.http = http;
        this.VehicleUrl = 'https://swapi.co/api/vehicles/';
    }
    getVehicle(id) {
        return this.http.get(this.VehicleUrl + id);
    }
    getOne(url) {
        return this.http.get(url);
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ACER\Desktop\angular — kopia\recruitment-task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map