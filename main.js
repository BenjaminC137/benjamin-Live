(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n\n<app-home></app-home>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _arduino_arduino_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arduino/arduino.component */ "./src/app/arduino/arduino.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _arduino_arduino_component__WEBPACK_IMPORTED_MODULE_4__["ArduinoComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/arduino-project-model.ts":
/*!******************************************!*\
  !*** ./src/app/arduino-project-model.ts ***!
  \******************************************/
/*! exports provided: ArduinoProjectModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArduinoProjectModel", function() { return ArduinoProjectModel; });
var ArduinoProjectModel = /** @class */ (function () {
    function ArduinoProjectModel() {
    }
    return ArduinoProjectModel;
}());



/***/ }),

/***/ "./src/app/arduino/arduino.component.css":
/*!***********************************************!*\
  !*** ./src/app/arduino/arduino.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/arduino/arduino.component.html":
/*!************************************************!*\
  !*** ./src/app/arduino/arduino.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\tID: {{arduino.id}}\n\t<br>\n\t<h3>{{arduino.title | uppercase}}</h3>\n\t\t<a href=\"{{arduino.imagePath}}\"><img src=\"{{arduino.imagePath}}\" class=\"rounded-image\"></a>\n\t<br>\n\t{{arduino.description}}\n\t<br>\n\tCreated: {{arduino.dateCreated | date}}\n\t<br>\n\tCompleted: {{arduino.dateCompleted | date}}\n\t<br>\n</div>\n<img src=\"/src/assets/ArduinoGeneral/Arduino-nano-complex-IMG_8173.png\"\n"

/***/ }),

/***/ "./src/app/arduino/arduino.component.ts":
/*!**********************************************!*\
  !*** ./src/app/arduino/arduino.component.ts ***!
  \**********************************************/
/*! exports provided: ArduinoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArduinoComponent", function() { return ArduinoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _arduino_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arduino-project-model */ "./src/app/arduino-project-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArduinoComponent = /** @class */ (function () {
    //	arduino : ArduinoProjectModel = {
    //		id: 1,
    //		title: 'Neechi Feeder',
    //		description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
    //		dateCreated: '2018/03/21',
    //		dateCompleted: '2018/04/18',
    //		imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
    //	}
    function ArduinoComponent() {
    }
    ArduinoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _arduino_project_model__WEBPACK_IMPORTED_MODULE_1__["ArduinoProjectModel"])
    ], ArduinoComponent.prototype, "arduino", void 0);
    ArduinoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arduino',
            template: __webpack_require__(/*! ./arduino.component.html */ "./src/app/arduino/arduino.component.html"),
            styles: [__webpack_require__(/*! ./arduino.component.css */ "./src/app/arduino/arduino.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArduinoComponent);
    return ArduinoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  This is home.\n\t<br>\n\t{{now | date}}\n\t<br>\n{{ \"now\" | uppercase}}\n</p>\n\n\n<!--<app-arduino *ngFor=\"let a of homeGems\" [gem]=\"g\"></app-arduino>-->\n\n<div class=\"card-deck\">\n<app-arduino class=\"card rounded-image\" style=\"min-width: 18rem; padding: 15px; margin: 15px; box-shadow: 15px 15px 15px\"\n*ngFor=\"let arduino of arduinoProjects\" [arduino]=\"arduino\"></app-arduino>\n</div>\n<img src=\"/src/assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg\">\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.arduinoProjects = [
            {
                id: 1,
                title: 'Neechi Feeder',
                description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
                dateCreated: '2018/03/21',
                dateCompleted: '2018/04/18',
                imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8278.png"
            },
            {
                id: 2,
                title: 'Buddy (Smart Car)',
                description: 'A car that roams around the house for companionship so people don\'t feel lonely.',
                dateCreated: '2016/01/01',
                dateCompleted: '2016/01/02',
                imagePath: "assets/ArduinoBuddy/buddy-full-IMG_0423.png"
            },
            {
                id: 3,
                title: 'Crunch Counter',
                description: 'Counts crunches while I exercise so I can watch TV and not have to count. I lose track when I count anyway because I start thinking about other things.',
                dateCreated: '2018/10/05',
                dateCompleted: '2018/10/08',
                imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
            },
            {
                id: 4,
                title: 'Fridge Alarm',
                description: 'Box on fridge buzzes and flashes when open too long or it doesn\'t fully close.',
                dateCreated: '2017/01/01',
                dateCompleted: '2017/01/01',
                imagePath: "assets/ArduinoTemperatureAlarm/temperature-alarm-IMG_7652.png"
            },
            {
                id: 5,
                title: 'Home Box',
                description: 'Automatically turns on lights when you walk by. Uses the unused buttons on the TV remote to turn on or off. Has manual buttons.',
                dateCreated: '2017/01/01',
                dateCompleted: '2017/01/01',
                imagePath: "assets/ArduinoHomeBox/Homebox-complete-IMG_8136.png"
            },
            {
                id: 6,
                title: 'Smart-tank',
                description: 'Analyzes surroundings and chooses where to go.',
                dateCreated: '2017/01/01',
                dateCompleted: '2017/01/01',
                imagePath: "assets/ArduinoSmartTank/smartTank-hot-art-IMG_3017.jpeg"
            },
            {
                id: 7,
                title: 'Security System',
                description: 'Security System to fend off intruders.',
                dateCreated: '2017/01/01',
                dateCompleted: '2017/01/01',
                imagePath: "assets/ArduinoNeechiFeeder/IMG_7441.png"
            },
            {
                id: 8,
                title: 'Heater Control',
                description: 'Modified a space heater to be able to turn on at given time.',
                dateCreated: '2017/01/01',
                dateCompleted: '2017/01/01',
                imagePath: "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1%20-%20IMG_2368%20copy.jpeg"
            },
            {
                id: 9,
                title: 'Temperature Alarm',
                description: 'Alarm that sounds when the temperature drops below a designated temperature to be set in the baby\s room by the crib to alert us if the temperature is too cold for the newborn.',
                dateCreated: '2017/01/01',
                dateCompleted: '2017/01/01',
                imagePath: "assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg"
            },
            {
                id: 10,
                title: 'fart System',
                description: 'Security System.',
                dateCreated: '2017/01/01',
                dateCompleted: '2017/01/01',
                imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
            }
        ];
        this.now = Date.now().toString();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<nav class=\"sticky-top navbar navbar-expand-lg navColors\">\n\t\t<a class=\"navbar-brand\" href=\"index.html\">\n\t\t\t<img class=\"navColors\" src=\"assets/rick-prison.png\" width=\"35px\" class=\"d-inline-block align-top\" alt=\"rick\" title=\"rick\"> Benjamin.Website</a>\n\t\t<button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t </button>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      \t<li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"index.html\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Professional.html\">Professional</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Personal.html\">Personal</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Arduino.html\">Arduino</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"box.html\">Fireball Game!</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"http://urldotcom.com\">urldotcom.com</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"weather.html\">Weather</a>\n      \t</li>\n    </ul>\n  </div>\n\t</nav>\n\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/benjaminsalasek/GitHub/benjamin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map