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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _arduino_arduino_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arduino/arduino.component */ "./src/app/arduino/arduino.component.ts");
/* harmony import */ var _arduino_detail_arduino_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arduino-detail/arduino-detail.component */ "./src/app/arduino-detail/arduino-detail.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/professional/professional.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'arduino', component: _arduino_arduino_component__WEBPACK_IMPORTED_MODULE_3__["ArduinoComponent"] },
    { path: 'arduino-detail/:id', component: _arduino_detail_arduino_detail_component__WEBPACK_IMPORTED_MODULE_4__["ArduinoDetailComponent"] },
    { path: 'personal', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__["PersonalComponent"] },
    { path: 'professional', component: _professional_professional_component__WEBPACK_IMPORTED_MODULE_6__["ProfessionalComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<app-nav-bar></app-nav-bar>\n<br><br>\n<!--<app-arduino></app-arduino>-->\n<router-outlet></router-outlet>\n\n<br>\n© 2018 Benjamin Salasek\n"

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
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/professional/professional.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
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
                _arduino_detail_arduino_detail_component__WEBPACK_IMPORTED_MODULE_6__["ArduinoDetailComponent"],
                _professional_professional_component__WEBPACK_IMPORTED_MODULE_8__["ProfessionalComponent"],
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_9__["PersonalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
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

module.exports = "<!--\n<div *ngIf=\"arduino\">\n  <h2>{{arduino.title | uppercase}} Details</h2>\n  <div><span>id: </span>{{arduino.id}}</div>\n  <div>\n    <label>title:\n      <input [(ngModel)]=\"arduino.title\" placeholder=\"title\"/>\n    </label>\n  </div>\n-->\n<button class=\"btn-primary\" (click)=\"goBack()\">Back/Close</button>\n<div class=\"project\">\n\t<h3>{{arduino.title | uppercase}}</h3>\n\t<br>\n\t<div class=\"box\">\n\t\t<h4>Introduction: </h4>\n\t\t{{arduino.description}}\n\t\t<br>\n\t\t<br>\n\t\tCreated: {{arduino.dateCreated | date}}\n\t\t<br>\n\t\tCompleted: {{arduino.dateCompleted | date}}\n\t\t<br>\n\t</div>\n\t<br>\n\t<div class=\"box\">\n\t\t<h4>Components: </h4>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let component of arduino.components\">{{component}}</li>\n\t\t</ul>\n\t</div>\n\t<br>\n\t<div class=\"box\">\n\t\t<h4>Libraries: </h4>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let library of arduino.libraries\">{{library}}</li>\n\t\t</ul>\n\t</div>\n\t<br>\n\t<div class=\"arduino-cards\">\n\t\t<img class=\"img-scale\" src=\"{{arduino.imagePath}}\">\n\t\t<a href=\"{{arduino.imagePath}}\">View hi-res\n\t\t</a>\n\t</div>\n\t<br>\n<!--\n\t<div class=\"box\"><iframe class=\"box\" width=\"560\" height=\"315\" src=\"{{arduino.videoUrl}}\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n-->\n\t<h4>More images: </h4>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col arduino-cards\" *ngFor=\"let image of arduino.moreImagesPath\">\n\t\t\t\t<img class=\"img-scale\" src={{image}}>\n\t\t\t\t<a href=\"{{image}}\">View hi-res</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\t<h4>Video: </h4>\n\t\t<p>{{arduino.videoUrl}}</p>\n</div>\n<br>\n<br>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _arduino_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../arduino.service */ "./src/app/arduino.service.ts");
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
    function ArduinoDetailComponent(route, arduinoService, location) {
        this.route = route;
        this.arduinoService = arduinoService;
        this.location = location;
    }
    ArduinoDetailComponent.prototype.ngOnInit = function () {
        this.getArduino();
    };
    ArduinoDetailComponent.prototype.getArduino = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.arduinoService.getArduino(id).subscribe(function (arduino) { return _this.arduino = arduino; });
    };
    ArduinoDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ArduinoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arduino-detail',
            template: __webpack_require__(/*! ./arduino-detail.component.html */ "./src/app/arduino-detail/arduino-detail.component.html"),
            styles: [__webpack_require__(/*! ./arduino-detail.component.css */ "./src/app/arduino-detail/arduino-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _arduino_service__WEBPACK_IMPORTED_MODULE_3__["ArduinoService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ArduinoDetailComponent);
    return ArduinoDetailComponent;
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
        imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8273.jpeg",
        moreImagesPath: [
            "assets/ArduinoNeechiFeeder/Neechi-agitator-assembly-IMG_8224.png", "assets/ArduinoNeechiFeeder/Neechi-agitator-rod-IMG_8261-2.png", "assets/ArduinoNeechiFeeder/Neechi-door-not-cut-IMG_6596.png", "assets/ArduinoNeechiFeeder/Neechi-electronics-and-machine-IMG_7498.png", "assets/ArduinoNeechiFeeder/Neechi-electronics-dark-IMG_7545.png", "assets/ArduinoNeechiFeeder/Neechi-full-room-IMG_8273.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mount-back-IMG_8192.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mount-IMG_8181.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mount-on-motor-IMG_8174.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mounted-IMG_6585.png", "assets/ArduinoNeechiFeeder/Neechi-mounted-old-stepper-IMG_7465.png", "assets/ArduinoNeechiFeeder/Neechi-room-IMG_8230.png", "assets/ArduinoNeechiFeeder/Neechi-workbench-IMG_7441.png"
        ],
        videoUrl: "https://www.youtube.com/embed/lyI5C47GDH0",
        components: [
            "Arduino nano",
            "IIC/I2C/TWI 1602 Serial LCD Display",
            "IIC/I2C/TWI 1602 Serial Interface module",
            "servo motor",
            "stepper motor"
        ],
        libraries: [
            "DS1302RTC.h",
            "Time.h",
            "Wire.h",
            "Servo.h",
            "LCD.h",
            "LiquidCrystal_I2C.h",
            "Stepper.h"
        ]
    },
    {
        id: 2,
        title: 'Buddy (Smart Car)',
        description: 'A car that roams around the house for companionship so people don\'t feel lonely.',
        dateCreated: '2016/01/01',
        dateCompleted: '2016/01/02',
        imagePath: "assets/ArduinoBuddy/buddy-full-top-IMG_0541.jpeg",
        moreImagesPath: [
            "assets/ArduinoBuddy/buddy-full-front-IMG_0542.jpeg", "assets/ArduinoBuddy/buddy-full-old-IMG_0423.png"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "Ultrasonic sensor",
            "car chasis",
            "DC motor",
            "wheel",
            "accelerometer",
            "led"
        ],
        libraries: [
            "none"
        ]
    },
    {
        id: 3,
        title: 'Crunch Counter',
        description: 'Counts crunches while I exercise so I can watch TV and not have to count. I lose track when I count anyway because I start thinking about other things.',
        dateCreated: '2018/10/05',
        dateCompleted: '2018/10/08',
        imagePath: "assets/ArduinoCrunchCounter/crunchCounter-beta-IMG_4616.jpg",
        moreImagesPath: [
            "assets/coming-soon.png"
        ],
        videoUrl: "cooming soon",
        components: [
            "Arduino nano",
            "photoresistor",
            "led",
            "IIC/I2C/TWI 1602 Serial LCD Display",
            "IIC/I2C/TWI 1602 Serial Interface module",
            "buzzer"
        ],
        libraries: [
            "Wire.h",
            "LCD.h",
            "LiquidCrystal_I2C.h"
        ]
    },
    {
        id: 4,
        title: 'Fridge Alarm',
        description: 'Box on fridge buzzes and flashes when open too long or it doesn\'t fully close.',
        dateCreated: '2017/09/01',
        dateCompleted: '2017/09/02',
        imagePath: "assets/ArduinoFridgeAlarm/FridgeAlarm-box-IMG_4612.jpg",
        moreImagesPath: [
            "assets/ArduinoFridgeAlarm/FridgeAlarm-button-IMG_4614.jpg"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "button",
            "led",
            "buzzer"
        ],
        libraries: [
            "none"
        ]
    },
    {
        id: 5,
        title: 'Home Box',
        description: 'Automatically turns on lights when you walk by. Uses the unused buttons on the TV remote to turn on or off. Has manual buttons.',
        dateCreated: '2017/01/01',
        dateCompleted: '2017/12/08',
        imagePath: "assets/ArduinoHomeBox/Homebox-complete-IMG_8136.png",
        moreImagesPath: [
            "assets/coming-soon.png"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "button",
            "IR receiver",
            "5V relay module"
        ],
        libraries: [
            "IRremote.h"
        ]
    },
    {
        id: 6,
        title: 'Smart-tank',
        description: 'Analyzes surroundings and chooses where to go.',
        dateCreated: '2018/01/07',
        dateCompleted: '2018/01/21',
        imagePath: "assets/ArduinoSmartTank/smartTank-hot-art-IMG_3017.jpeg",
        moreImagesPath: [
            "assets/coming-soon.png"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "DC motor",
            "led",
            "RF receiver",
            "RF transmitter",
            "button",
            "led",
            "servo motor",
            "ultrasonic sensor",
            "wheel",
            "treads",
            "triangle vehicle chasis",
            "potentiometer"
        ],
        libraries: [
            "SPI.h",
            "RH_ASK.h",
            "Servo.h",
        ]
    },
    {
        id: 7,
        title: 'Security System',
        description: 'Security System to fend off intruders. Exact dates unknown',
        dateCreated: '2018/07/01',
        dateCompleted: '2018/07/02',
        imagePath: "assets/ArduinoSecuritySystem/SecuritySystem-inside-IMG_4506.jpeg",
        moreImagesPath: [
            "assets/coming-soon.png"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "common cathode RGB led",
            "PIR proximety sensor"
        ],
        libraries: [
            "none"
        ]
    },
    {
        id: 8,
        title: 'Heater Control',
        description: 'Modified a space heater to be able to turn on at given time.',
        dateCreated: '2017/01/01',
        dateCompleted: '2017/12/10',
        imagePath: "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1%20-%20IMG_2368%20copy.jpeg",
        moreImagesPath: [
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-board-bottom-partial - IMG_2343 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-board-bottom-partial-withBackground - IMG_2342 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-board-top - IMG_2363 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1 - IMG_2368 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables2 - IMG_2367 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardComplete - IMG_2366 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardSide - IMG_2365 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-breadboardPrep - IMG_1757 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-Cable-entry-internal - IMG_1741 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-cableExit - IMG_1742 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-CableExit2 - IMG_1754 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-CablesSolderedToController1 - IMG_1747 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-CablesSolderedToController2 - IMG_1753 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-Controller - IMG_1740 copy.jpeg"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "led",
            "IC 4066 quad bilateral switch",
            "button"
        ],
        libraries: [
            "none"
        ]
    },
    {
        id: 9,
        title: 'Temperature Alarm',
        description: 'Alarm that sounds when the temperature drops below a designated temperature to be set in the baby\s room by the crib to alert us if the temperature is too cold for the newborn.',
        dateCreated: '2017/01/01',
        dateCompleted: '2017/01/01',
        imagePath: "assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg",
        moreImagesPath: [
            "assets/ArduinoTemperatureAlarm/temperature-alarm-pano-IMG_7720.png",
            "assets/ArduinoTemperatureAlarm/temperature-alarm-workspace-MG_7652.png"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "button",
            "IIC/I2C/TWI 1602 Serial LCD Display",
            "IIC/I2C/TWI 1602 Serial Interface module"
        ],
        libraries: [
            "Wire.h",
            "LCD.h",
            "LiquidCrystal_I2C.h"
        ]
    },
    {
        id: 10,
        title: 'Scale',
        description: '50 Gram scale using a .001 accuracy load cell. Includes a tare feature.',
        dateCreated: '2017/01/01',
        dateCompleted: '2017/01/01',
        imagePath: "assets/ArduinoScale/scale-calibrating-IMG_4610.jpg",
        moreImagesPath: [
            "assets/coming-soon.png"
        ],
        videoUrl: "coming soon",
        components: [
            "Arduino nano",
            "button",
            "HX711 Load Cell Amplifier",
            "load cell",
            "IIC/I2C/TWI 1602 Serial LCD Display",
            "IIC/I2C/TWI 1602 Serial Interface module"
        ],
        libraries: [
            "hx711.h",
            "DHT.h",
            "Wire.h",
            "LCD.h",
            "LiquidCrystal_I2C.h"
        ]
    }
];


/***/ }),

/***/ "./src/app/arduino.service.ts":
/*!************************************!*\
  !*** ./src/app/arduino.service.ts ***!
  \************************************/
/*! exports provided: ArduinoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArduinoService", function() { return ArduinoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _arduino_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arduino-projects */ "./src/app/arduino-projects.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArduinoService = /** @class */ (function () {
    function ArduinoService() {
    }
    //	getArduinoProjects(): ArduinoProjectModel[]{
    //	return ArduinoProjects;
    //	}
    ArduinoService.prototype.getArduinoProjects = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_arduino_projects__WEBPACK_IMPORTED_MODULE_1__["ArduinoProjects"]);
    };
    ArduinoService.prototype.getArduino = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_arduino_projects__WEBPACK_IMPORTED_MODULE_1__["ArduinoProjects"].find(function (arduino) { return arduino.id === id; }));
    };
    ArduinoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ArduinoService);
    return ArduinoService;
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

module.exports = "<br>\n<h2> Arduino Projects</h2>\n<!--\n  <div  *ngIf=\"show\">\n\t  \t<a href=\"#\" (click)=\"toggle()\" class=\"btn-primary\">Back/Close</a>\n\t\t<app-arduino-detail [arduino]=\"selectedArduino\"></app-arduino-detail>\n   </div>\n-->\n<div class=\"card-deck\">\n<!--\t<div class=\"card arduino-cards\" *ngFor=\"let arduino of arduinoProjects\" [class.selected]=\"arduino === selectedArduino\" (click)=\"onSelect(arduino); toggle()\">-->\n\t<div class=\"card arduino-cards\" *ngFor=\"let arduino of arduinoProjects\" routerLink=\"/arduino-detail/{{arduino.id}}\">\n\t\t<h6 class=\"card-title\" >{{arduino.title}}</h6>\n\t\t<img class=\"card-img-top\" style=\"\" src=\"{{arduino.imagePath}}\">\n\t\t<div class=\"card-body\">\n\n\t\t\t<div class=\"card-text\">\n\t\t\t\t<p> a space for text</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-footer\" style=\"margin: 0px\">\n\t\t  <small class=\"text-muted\">{{arduino.dateCompleted}}</small>\n\t\t</div>\n\t</div>\n</div>\n"

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
/* harmony import */ var _arduino_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arduino.service */ "./src/app/arduino.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ArduinoProjects } from '../arduino-projects';

var ArduinoComponent = /** @class */ (function () {
    function ArduinoComponent(arduinoService) {
        this.arduinoService = arduinoService;
        this.show = false;
        this.buttonName = 'show';
    }
    ArduinoComponent.prototype.ngOnInit = function () {
        this.getArduinoProjects();
    };
    ArduinoComponent.prototype.getArduinoProjects = function () {
        var _this = this;
        this.arduinoService.getArduinoProjects().subscribe(function (arduinoProjects) { return _this.arduinoProjects = arduinoProjects; });
    };
    ArduinoComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    ArduinoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arduino',
            template: __webpack_require__(/*! ./arduino.component.html */ "./src/app/arduino/arduino.component.html"),
            styles: [__webpack_require__(/*! ./arduino.component.css */ "./src/app/arduino/arduino.component.css")]
        }),
        __metadata("design:paramtypes", [_arduino_service__WEBPACK_IMPORTED_MODULE_1__["ArduinoService"]])
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

module.exports = "Welcome to my website.\n<br>\n\t{{now | date}}\n\t<br>\n<!--{{ \"now\" | uppercase}}-->\n\t<br>\n\n<!--<app-arduino-detail [arduino]=\"selectedArduino\"></app-arduino-detail>-->\n\n<p>\n\t<a routerLink=\"/arduino\">Arduino</a>\n\t<br>\n\t<a routerLink=\"/personal\">Personal</a>\n\t<br>\n\t<a routerLink=\"/professional\">Professional</a>\n</p>\n<div>\n\t<img src=\"/assets/PortalBenjaminDark.png\">\n</div>\n"

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

module.exports = "<nav class=\"fixed-top navbar navColors\">\n<!--\t<div></div>-->\n\t<a class=\"navbar-brand\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<img class=\"navColors\" src=\"assets/PortalBenjaminDarkRes180.png\" width=\"35px\" class=\"d-inline-block align-top\" alt=\"rick\" title=\"rick\"> Benjamin.Website\n\t</a>\n\t<button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n\t\t<ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/home\">Home\n\t\t\t\t\t<span class=\"sr-only\">(current)</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/professional\">Professional</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/personal\">Personal</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/arduino\">Arduino</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n<!--\t\t<div></div>-->\n</nav>\n"

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

/***/ "./src/app/personal/personal.component.css":
/*!*************************************************!*\
  !*** ./src/app/personal/personal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/personal/personal.component.html":
/*!**************************************************!*\
  !*** ./src/app/personal/personal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div>\n\t<h3>\n\t\tPersonal content coming soon!\n\t</h3>\n</div>\n<div><h4>El Horse</h4><img src=\"assets/El-Horse-forweb1000.png\"/></div>\n"

/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
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

var PersonalComponent = /** @class */ (function () {
    function PersonalComponent() {
    }
    PersonalComponent.prototype.ngOnInit = function () {
    };
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/personal/personal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/professional/professional.component.css":
/*!*********************************************************!*\
  !*** ./src/app/professional/professional.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/professional/professional.component.html":
/*!**********************************************************!*\
  !*** ./src/app/professional/professional.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n\n<h4 ><a class=\"box\" style=\"font-size: 1em\" routerLink=\"/arduino\">Arduino</a></h4>\n<br>\n<div>\n\t<h5>\n\t\tMore professional content coming soon!\n\t</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/professional/professional.component.ts":
/*!********************************************************!*\
  !*** ./src/app/professional/professional.component.ts ***!
  \********************************************************/
/*! exports provided: ProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function() { return ProfessionalComponent; });
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

var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent() {
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.component.html */ "./src/app/professional/professional.component.html"),
            styles: [__webpack_require__(/*! ./professional.component.css */ "./src/app/professional/professional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalComponent);
    return ProfessionalComponent;
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