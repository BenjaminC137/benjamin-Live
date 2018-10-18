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

module.exports = "<app-nav-bar></app-nav-bar>\n<br><br>\n<app-arduino></app-arduino>\n"

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
/* harmony import */ var _arduino_detail_arduino_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arduino-detail/arduino-detail.component */ "./src/app/arduino-detail/arduino-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { ArduinoProjects } from './arduino-projects';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _arduino_arduino_component__WEBPACK_IMPORTED_MODULE_4__["ArduinoComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _arduino_detail_arduino_detail_component__WEBPACK_IMPORTED_MODULE_6__["ArduinoDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/arduino-detail/arduino-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/arduino-detail/arduino-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/arduino-detail/arduino-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/arduino-detail/arduino-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div *ngIf=\"arduino\">\n  <h2>{{arduino.title | uppercase}} Details</h2>\n  <div><span>id: </span>{{arduino.id}}</div>\n  <div>\n    <label>title:\n      <input [(ngModel)]=\"arduino.title\" placeholder=\"title\"/>\n    </label>\n  </div>\n-->\n<div class=\"project\">\n\t<h3>{{arduino.title | uppercase}}</h3>\n\t<br>\n\t<p>{{arduino.description}}\n\t<br>\n\tCreated: {{arduino.dateCreated | date}}\n\t<br>\n\tCompleted: {{arduino.dateCompleted | date}}\n\t<br>\n\t\t</p>\n<div class=\"\">\n\t\t<a href=\"{{arduino.imagePath}}\"><img class=\"arduino-cards img-scale\" src=\"{{arduino.imagePath}}\"></a>\n\t</div>\n\t<br>\n\n\t<h3>More images: </h3>\n<div class=\"container\">\n\t<div class=\"arduino-cards\" *ngFor=\"let image of arduino.moreImagesPath\"><a href=\"{{image}}\"><img class=\"img-scale\" src={{image}}></a></div>\n</div>\n<!--\t<div *ngFor=\"let arduino of \" ></div>-->\n\n<!--\n\t\t<div class=\"card rounded-image arduino-cards\"\n\t\t*ngFor=\"let arduino of arduinoProjects\"     [class.selected]=\"arduino === selectedArduino\" (click)=\"onSelect(arduino)\"><h6>{{arduino.title}}</h6>\n\t\t<img src=\"{{arduino.imagePath}}\">\n\t</div>\n-->\n</div>\n"

/***/ }),

/***/ "./src/app/arduino-detail/arduino-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/arduino-detail/arduino-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ArduinoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArduinoDetailComponent", function() { return ArduinoDetailComponent; });
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


var ArduinoDetailComponent = /** @class */ (function () {
    function ArduinoDetailComponent() {
    }
    ArduinoDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _arduino_project_model__WEBPACK_IMPORTED_MODULE_1__["ArduinoProjectModel"])
    ], ArduinoDetailComponent.prototype, "arduino", void 0);
    ArduinoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arduino-detail',
            template: __webpack_require__(/*! ./arduino-detail.component.html */ "./src/app/arduino-detail/arduino-detail.component.html"),
            styles: [__webpack_require__(/*! ./arduino-detail.component.css */ "./src/app/arduino-detail/arduino-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArduinoDetailComponent);
    return ArduinoDetailComponent;
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

/***/ "./src/app/arduino-projects.ts":
/*!*************************************!*\
  !*** ./src/app/arduino-projects.ts ***!
  \*************************************/
/*! exports provided: ArduinoProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArduinoProjects", function() { return ArduinoProjects; });
var ArduinoProjects = [
    {
        id: 1,
        title: 'Neechi Feeder',
        description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
        dateCreated: '2018/03/21',
        dateCompleted: '2018/04/18',
        imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8278.png",
        moreImagesPath: ["assets/ArduinoNeechiFeeder/Neechi-agitator-assembly-IMG_8224.png", "assets/ArduinoNeechiFeeder/Neechi-agitator-rod-IMG_8261-2.png", "assets/ArduinoNeechiFeeder/Neechi-agitator-assembly-IMG_8224.png",
            "assets/ArduinoNeechiFeeder/Neechi-agitator-rod-IMG_8261-2.png",
            "assets/ArduinoNeechiFeeder/Neechi-door-not-cut-IMG_6596.png",
            "assets/ArduinoNeechiFeeder/Neechi-electronics-and-machine-IMG_7498.png",
            "assets/ArduinoNeechiFeeder/Neechi-electronics-dark-IMG_7545.png",
            "assets/ArduinoNeechiFeeder/Neechi-full-room-IMG_8273.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mount-back-IMG_8192.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mount-IMG_8181.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mount-on-motor-IMG_8174.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mounted-IMG_6585.png",
            "assets/ArduinoNeechiFeeder/Neechi-mounted-old-stepper-IMG_7465.png",
            "assets/ArduinoNeechiFeeder/Neechi-room-IMG_8230.png",
            "assets/ArduinoNeechiFeeder/Neechi-workbench-IMG_7441.png"
        ]
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
        imagePath: "assets/ArduinoCrunchCounter/crunchCounter-beta-IMG_4616.jpg"
    },
    {
        id: 4,
        title: 'Fridge Alarm',
        description: 'Box on fridge buzzes and flashes when open too long or it doesn\'t fully close.',
        dateCreated: '2017/01/01',
        dateCompleted: '2017/01/01',
        imagePath: "assets/ArduinoFridgeAlarm/FridgeAlarm-box-IMG_4612.jpg"
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
        imagePath: "assets/ArduinoSecuritySystem/SecuritySystem-inside-IMG_4506.jpeg"
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
        title: 'Scale',
        description: '50 Gram scale using a .001 accuracy load cell. Includes a tare.',
        dateCreated: '2017/01/01',
        dateCompleted: '2017/01/01',
        imagePath: "assets/ArduinoScale/scale-calibrating-IMG_4610.jpg"
    }
];


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

module.exports = "<h2> Arduino Projects</h2>\n  <div  *ngIf=\"show\">\n\t  \t<a href=\"#\" (click)=\"toggle()\" class=\"btn\">Back/Close</a>\n\t\t<app-arduino-detail [arduino]=\"selectedArduino\"></app-arduino-detail>\n   </div>\n<br>\n<div class=\"card-deck\">\n\t<div class=\"card arduino-cards\"\n\t\t*ngFor=\"let arduino of arduinoProjects\"     [class.selected]=\"arduino === selectedArduino\" (click)=\"onSelect(arduino); toggle()\"><h6>{{arduino.title}}</h6>\n\t\t<img style=\"\" src=\"{{arduino.imagePath}}\">\n\t</div>\n</div>\n"

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
/* harmony import */ var _arduino_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../arduino-projects */ "./src/app/arduino-projects.ts");
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
    function ArduinoComponent() {
        this.show = false;
        this.buttonName = 'show';
        this.arduinoProjects = _arduino_projects__WEBPACK_IMPORTED_MODULE_2__["ArduinoProjects"];
    }
    ArduinoComponent.prototype.ngOnInit = function () {
    };
    ArduinoComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    ArduinoComponent.prototype.onSelect = function (arduino) {
        this.selectedArduino = arduino;
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

module.exports = "<!-- This is home.\n\t<br>\n\t{{now | date}}\n\t<br>\n{{ \"now\" | uppercase}}\n\t<br> -->\n\t<div><h3>El Horse</h3><img src=\"assets/El-Horse-forweb1000.png\"/></div>\n\n<!--<app-arduino-detail [arduino]=\"selectedArduino\"></app-arduino-detail>-->\n\n<!--\n<div class=\"card-deck\">\n<app-arduino class=\"card rounded-image\" style=\"min-width: 18rem; padding: 15px; margin: 15px; box-shadow: 15px 15px 15px\"\n*ngFor=\"let arduino of arduinoProjects\" [arduino]=\"arduino\"></app-arduino>\n</div>\n-->\n\n\n<app-arduino></app-arduino>\n"

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
    //	ArduinoProjects : ArduinoProjectModel[] = [
    //		{
    //		id: 1,
    //		title: 'Neechi Feeder',
    //		description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
    //		dateCreated: '2018/03/21',
    //		dateCompleted: '2018/04/18',
    //		imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8278.png"
    //		},
    //		{
    //		id: 2,
    //		title: 'Buddy (Smart Car)',
    //		description: 'A car that roams around the house for companionship so people don\'t feel lonely.',
    //		dateCreated: '2016/01/01',
    //		dateCompleted: '2016/01/02',
    //		imagePath: "assets/ArduinoBuddy/buddy-full-IMG_0423.png"
    //		},
    //		{
    //		id: 3,
    //		title: 'Crunch Counter',
    //		description: 'Counts crunches while I exercise so I can watch TV and not have to count. I lose track when I count anyway because I start thinking about other things.',
    //		dateCreated: '2018/10/05',
    //		dateCompleted: '2018/10/08',
    //		imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
    //		},
    //		{
    //		id: 4,
    //		title: 'Fridge Alarm',
    //		description: 'Box on fridge buzzes and flashes when open too long or it doesn\'t fully close.',
    //		dateCreated: '2017/01/01',
    //		dateCompleted: '2017/01/01',
    //		imagePath: "assets/ArduinoTemperatureAlarm/temperature-alarm-IMG_7652.png"
    //		},
    //		{
    //		id: 5,
    //		title: 'Home Box',
    //		description: 'Automatically turns on lights when you walk by. Uses the unused buttons on the TV remote to turn on or off. Has manual buttons.',
    //		dateCreated: '2017/01/01',
    //		dateCompleted: '2017/01/01',
    //		imagePath: "assets/ArduinoHomeBox/Homebox-complete-IMG_8136.png"
    //		},
    //		{
    //		id: 6,
    //		title: 'Smart-tank',
    //		description: 'Analyzes surroundings and chooses where to go.',
    //		dateCreated: '2017/01/01',
    //		dateCompleted: '2017/01/01',
    //		imagePath: "assets/ArduinoSmartTank/smartTank-hot-art-IMG_3017.jpeg"
    //		},
    //		{
    //		id: 7,
    //		title: 'Security System',
    //		description: 'Security System to fend off intruders.',
    //		dateCreated: '2017/01/01',
    //		dateCompleted: '2017/01/01',
    //		imagePath: "assets/ArduinoSecuritySystem/SecuritySystem-inside-IMG_4506.jpeg"
    //		},
    //		{
    //		id: 8,
    //		title: 'Heater Control',
    //		description: 'Modified a space heater to be able to turn on at given time.',
    //		dateCreated: '2017/01/01',
    //		dateCompleted: '2017/01/01',
    //		imagePath: "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1%20-%20IMG_2368%20copy.jpeg"
    //		},
    //		{
    //		id: 9,
    //		title: 'Temperature Alarm',
    //		description: 'Alarm that sounds when the temperature drops below a designated temperature to be set in the baby\s room by the crib to alert us if the temperature is too cold for the newborn.',
    //		dateCreated: '2017/01/01',
    //		dateCompleted: '2017/01/01',
    //		imagePath: "assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg"
    //		},
    //		{
    //		id: 10,
    //		title: 'fart System',
    //		description: 'Security System.',
    //		dateCreated: '2017/01/01',
    //		dateCompleted: '2017/01/01',
    //		imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
    //		}
    //
    //	];
    function HomeComponent() {
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

module.exports = "\t<nav class=\"fixed-top navbar navbar-expand-lg navColors\">\n\t\t<a class=\"navbar-brand\" href=\"index.html\">\n\t\t\t<img class=\"navColors\" src=\"assets/rick-prison.png\" width=\"35px\" class=\"d-inline-block align-top\" alt=\"rick\" title=\"rick\"> Benjamin.Website</a>\n\t\t<button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t </button>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      \t<li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"index.html\">Home <span class=\"sr-only\">(current)</span></a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Professional.html\">Professional</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Personal.html\">Personal</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Arduino.html\">Arduino</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"box.html\">Fireball Game!</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"http://urldotcom.com\">urldotcom.com</a>\n      \t</li>\n\t\t<li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"weather.html\">Weather</a>\n      \t</li>\n    </ul>\n  </div>\n\t</nav>\n\n"

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