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
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
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
    { path: 'professional', component: _professional_professional_component__WEBPACK_IMPORTED_MODULE_6__["ProfessionalComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] }
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

module.exports = "<app-nav-bar></app-nav-bar>\n<br>\n<br>\n<router-outlet></router-outlet>\n\n<br>\n© 2018 Benjamin Salasek\n"

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
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
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
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_9__["PersonalComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]
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

module.exports = "<!--\n<div *ngIf=\"arduino\">\n  <h2>{{arduino.title | uppercase}} Details</h2>\n  <div><span>id: </span>{{arduino.id}}</div>\n  <div>\n    <label>title:\n      <input [(ngModel)]=\"arduino.title\" placeholder=\"title\"/>\n    </label>\n  </div>\n-->\n<button class=\"btn-primary\" (click)=\"goBack()\">Back/Close</button>\n<div class=\"project\">\n\t<h3>{{arduino.title | uppercase}} <img class=\"arduino-logo-details\" src=\"assets/2000px-Arduino_Logo.svg.png\"></h3>\n\t<br>\n\t<div class=\"box\">\n\t\t<h4>Introduction: </h4>\n\t\t{{arduino.description}}\n\t\t<br>\n\t\t<br>\n\t\tCreated: {{arduino.dateCreated | date}}\n\t\t<br>\n\t\tCompleted: {{arduino.dateCompleted | date}}\n\t\t<br>\n\t</div>\n\t<br>\n\t<div class=\"box\">\n\t\t<h4>Components: </h4>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let component of arduino.components\">{{component}}</li>\n\t\t</ul>\n\t</div>\n\t<br>\n\t<div class=\"box\">\n\t\t<h4>Libraries: </h4>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let library of arduino.libraries\">{{library}}</li>\n\t\t</ul>\n\t</div>\n\t<br>\n\t<div class=\"card arduino-images\">\n\t\t<img class=\"img-scale\" src=\"{{arduino.imagePath}}\">\n\t\t<a href=\"{{arduino.imagePath}}\">View hi-res\n\t\t</a>\n\t</div>\n\t<br>\n<!--\n\t<div class=\"box\"><iframe class=\"box\" width=\"560\" height=\"315\" src=\"{{arduino.videoUrl}}\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n-->\n\t<h4>More images: </h4>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col card arduino-images\" *ngFor=\"let image of arduino.moreImagesPath; index as i\">\n\t\t\t\t<img class=\"img-scale\" src={{image}}>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<p class=\"card-text\">{{arduino.imageCaption[i]}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\" ><a class=\"\" href=\"{{image}}\">View hi-res</a></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\t<h4>Video: </h4>\n\n<!--\n\t\t<p>{{arduino.videoUrl}}</p>\n\t\t<p [innerHtml]=\"arduino.videoUrl\"></p>\n\n\n-->\n\t\t<a [href]=\"goPlay\">Go to Video</a> (coming soon)\n<!--\n\t<br>\n\t\t<a [href]=\"safeUrl\">Go to Video</a>\n\n\n\t<div class=\"box col\">\n\t\t<iframe [src]=\"trustedDashboardUrl\" class=\"box\" width=\"560\" height=\"315\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\n\t\t</iframe>\n\t</div>\n\n\t<div class=\"box col\">\n\t\t<iframe class=\"box\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/lyI5C47GDH0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen>\n\t\t</iframe>\n\t</div>\n-->\n\n</div>\n\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    //	currentImage = 0;
    function ArduinoDetailComponent(route, arduinoService, location, sanitizer) {
        this.route = route;
        this.arduinoService = arduinoService;
        this.location = location;
        this.sanitizer = sanitizer;
        //	  		this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lyI5C47GDH0");
        this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lyI5C47GDH0");
    }
    ArduinoDetailComponent.prototype.ngOnInit = function () {
        this.getArduino();
        this.goPlay = this.arduino.videoUrl;
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
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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
        description: 'I designed a dog feeder and built the entire contraption. It automatically releases a designated amount of food twice per day based on a predetermined feeding schedule. An Led display shows the current time, the quantity of times fed per day and the time in which the last feeding was released including manual feedings. A button allows for manual feeding.',
        dateCreated: '2018/03/21',
        dateCompleted: '2018/04/18',
        imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8273.jpeg",
        moreImagesPath: [
            "assets/ArduinoNeechiFeeder/Neechi-agitator-assembly-IMG_8224.png",
            "assets/ArduinoNeechiFeeder/Neechi-agitator-rod-IMG_8261-2.png",
            "assets/ArduinoNeechiFeeder/Neechi-door-not-cut-IMG_6596.png",
            "assets/ArduinoNeechiFeeder/Neechi-electronics-dark-IMG_7545.png",
            "assets/ArduinoNeechiFeeder/Neechi-electronics-and-machine-IMG_7498.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mount-back-IMG_8192.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mount-IMG_8181.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mount-on-motor-IMG_8174.png",
            "assets/ArduinoNeechiFeeder/Neechi-motor-mounted-IMG_6585.png",
            "assets/ArduinoNeechiFeeder/Neechi-mounted-old-stepper-IMG_7465.png",
            "assets/ArduinoNeechiFeeder/Neechi-room-IMG_8230.png",
            "assets/ArduinoNeechiFeeder/Neechi-workbench-IMG_7441.png" //12
        ],
        imageCaption: [
            "Agitator assembly including agitator rod, stepper motor and motor housing",
            "Agitator rod: Folded sheet steel and twisted to create an agitator that will spiral and thus push food out so food doesn't get stuck.",
            "Hatch door mounted to hatch mount before cutting the opening hole",
            "Electronics in the dark. Often times, uncompleted electronics are quite astheticly pleasing.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "Creating and constructing the agitator assemply",
            "",
            "",
            "" //15
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
            "assets/ArduinoBuddy/buddy-full-front-IMG_0542.jpeg",
            "assets/ArduinoBuddy/buddy-full-old-IMG_0423.png" //2
        ],
        imageCaption: [
            "3 pairs - Ultrasonic sensors",
            "First iteration with single ultrasonic sensor",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
            "assets/coming-soon.png" //1
        ],
        imageCaption: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
            "assets/ArduinoFridgeAlarm/FridgeAlarm-button-IMG_4614.jpg" //1
        ],
        imageCaption: [
            "Button that gets pushed when the door closes",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
            "assets/ArduinoHomeBox/HomeBox-breadboardPrep-IMG_1757.jpeg"
        ],
        imageCaption: [
            "Electrical tapes hold the wires to the breadboards while the prototype is tested",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
            "assets/coming-soon.png" //1
        ],
        imageCaption: [
            "image placeholder",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
            "assets/coming-soon.png" //1
        ],
        imageCaption: [
            "image placeholder",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-Controller - IMG_1740 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-Cable-entry-internal - IMG_1741 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-cableExit - IMG_1742 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-CableExit2 - IMG_1754 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-CablesSolderedToController1 - IMG_1747 copy.jpeg",
            "assets/ArduinoHeaterControl/ArduinoHeaterControl-CablesSolderedToController2 - IMG_1753 copy.jpeg" //13
        ],
        imageCaption: [
            "Bottom of the circuit board I made for condensing the wiring.",
            "By condensing the electronics by creating this board, it will allow me to fit all of the components into the tiny project-box/housing.",
            "Top view of the board (This is very cool).",
            "Top view of the board whilst connected to the wires.",
            "Board is ready to be inserted into the housing.",
            "Beautiful shot of the board with test LEDs",
            "Side shot of the board with test LEDs to show board's thickness",
            "Jumper wires soldered to the existing space heater's controller board",
            "Wires are fed through a hole I drilled to connect to the arduino externally",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
        imageCaption: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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
        imageCaption: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "" //15
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

module.exports = "<div>\n\t<h2><img class=\"arduino-logo\" src=\"assets/2000px-Arduino_Logo.svg.png\"><span></span> Arduino Projects</h2>\n</div>\n<p>\n\t<b>What is Arduino?</b>\n\t<br>\n\tFor those of you who have never heard of Arduino (or never met me), Arduino is an open-source, electronic prototyping platform.\n\t<br>\n\t<b>What?</b>\n\t<br>\n\tBasically, it includes two main components. The first is something called a micro controller which is like a computer chip. The second is a coding language based on C/C++ and an IDE (Integrated Development Environment) which is a way to write software. You design a device and write code to put onto it.\n\t<br>\n\t<b>Huh?</b>\n\t<br>\n\tIt is a way to invent things that do things from scratch! You can use all kinds of sensors and motors to make cool stuff! To get a better idea of what Arduino is, you can see what I've created!\n</p>\n<p>If you would like to know more about Arduino, please see <a href=\"https://www.arduino.cc\">arduino.cc</a></p>\n\n<div class=\"card-deck\">\n<!--\t<div class=\"card arduino-cards\" *ngFor=\"let arduino of arduinoProjects\" [class.selected]=\"arduino === selectedArduino\" (click)=\"onSelect(arduino); toggle()\">-->\n\t<div class=\"card arduino-cards arduino-card-hover\" *ngFor=\"let arduino of arduinoProjects\" routerLink=\"/arduino-detail/{{arduino.id}}\">\n\t\t<h6 class=\"card-title\" >{{arduino.title}}</h6>\n\t\t<img class=\"card-img-top\" style=\"\" src=\"{{arduino.imagePath}}\">\n\t\t<div class=\"card-body\">\n\t\t\t<div class=\"card-text\">\n<!--\t\t\t\t<p class=\"limitText\" >{{arduino.description}}</p>-->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-footer\" style=\"margin: 0px\">\n\t\t  <small class=\"text-muted\">{{arduino.dateCompleted}}</small>\n\t\t</div>\n\t</div>\n</div>\n"

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

module.exports = "<div style=\"background-image: url(assets/PortalBenjaminLight.png); background-size: cover\">\n\t<h3>Welcome to my website!</h3>\n\t<br>\n\t<!--\n\t\t{{now | date}}\n\t\t<br>\n\t-->\n\t<p>\n\t\tHello, I am Benjamin Salasek. For those of you who do not know, I am a software developer, artist and Arduino enthusiest. Please browse this site as you wish, and don't forget to check out all of my cool Arduino projects!\n\t\t<br>\n\t\t<br>\n\t\tThank you,\n\t\t<br>\n\t\tBenjamin Salasek.\n\t</p>\n\n\t<p style=\"font-size: 1em\">\n\t\t<a routerLink=\"/arduino\">Arduino</a>\n\t\t<br>\n\t\t<a routerLink=\"/personal\">Personal</a>\n\t\t<br>\n\t\t<a routerLink=\"/professional\">Professional</a>\n\t</p>\n\t<br>\n\n\t<div class=\"carousel-div\">\n\t\t<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"1\" data-wrap=\"true\" direction=\"left\" data-pause=\"false\">\n\t\t  <div class=\"carousel-inner\">\n\t\t\t <div class=\"carousel-item active\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"assets/PortalBenjaminDark.png\" alt=\"first slide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\tBenjamin Salasek\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"assets/El-Horse-forweb1000.png\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\tEl Horse\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"assets/biker_boys.png\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\tBiker Boys\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div *ngFor=\"let arduino of arduinoProjects\" routerLink=\"/arduino-detail/{{arduino.id}}\" class=\"carousel-item\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"{{arduino.imagePath}}\" alt=\"second slide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t{{arduino.title}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\n\n\n\n\t<div class=\"carousel-div\">\n\t\t<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"1\" data-wrap=\"true\" direction=\"left\" data-pause=\"false\">\n\t\t  <div class=\"carousel-inner\">\n\t\t\t <div class=\"carousel-item active\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"assets/PortalBenjaminDark.png\" alt=\"first slide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\tBenjamin Salasek\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"assets/biker_boys.png\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\tBiker Boys\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div *ngFor=\"let arduino of arduinoProjects\" routerLink=\"/arduino-detail/{{arduino.id}}\" class=\"carousel-item\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"{{arduino.imagePath}}\" alt=\"second slide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t{{arduino.title}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"carousel-div\">\n\t\t<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"1\" data-wrap=\"true\" direction=\"left\" data-pause=\"false\">\n\t\t  <div class=\"carousel-inner\">\n\t\t\t <div class=\"carousel-item active\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"assets/PortalBenjaminDark.png\" alt=\"first slide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\tBenjamin Salasek\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div *ngFor=\"let arduino of arduinoProjects\" routerLink=\"/arduino-detail/{{arduino.id}}\" class=\"carousel-item\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"{{arduino.imagePath}}\" alt=\"second slide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t{{arduino.title}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\">\n\t\t\t  <img class=\"d-block w-100 carousel-image\" src=\"assets/biker_boys.png\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\tBiker Boys\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\n</div>\n"

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

var HomeComponent = /** @class */ (function () {
    function HomeComponent(arduinoService) {
        this.arduinoService = arduinoService;
        this.now = Date.now().toString();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getArduinoProjects();
    };
    HomeComponent.prototype.getArduinoProjects = function () {
        var _this = this;
        this.arduinoService.getArduinoProjects().subscribe(function (arduinoProjects) { return _this.arduinoProjects = arduinoProjects; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_arduino_service__WEBPACK_IMPORTED_MODULE_1__["ArduinoService"]])
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

module.exports = "<nav class=\"fixed-top navbar navColors\">\n<!--\t<div></div>-->\n\t<a class=\"navbar-brand\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<img class=\"navColors\" src=\"assets/PortalBenjaminDarkRes180.png\" width=\"35px\" class=\"d-inline-block align-top\" alt=\"portal\" title=\"portal\"> Benjamin.Website\n\t</a>\n\t<button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n\t\t<ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/home\">Home\n\t\t\t\t\t<span class=\"sr-only\">(current)</span>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/professional\">Professional</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/personal\">Personal</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/arduino\">Arduino</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n<!--\t\t<div></div>-->\n</nav>\n"

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
        this.show = false;
    }
    NavBarComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
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

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404</h1>\n<p>\n\tYou have reached the website of Benjamin Salasek. I am unable to process your request right now, so please make an observation, and I'll get back to you as soon as I can't.\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
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

module.exports = "<div>\n\t<h2>Personal</h2>\n\t<h3>\n\t\tPersonal content coming soon!\n\t</h3>\n\t<p>I am an <a routerLink=\"/arduino\">Arduino</a> enthusiest. I love technology and my boys, Damien and Gabriel. For now, please enjoy this photograph of an el horse riding alongside a standard horse that I created via Photoshop for my own enjoyment.</p>\n</div>\n<div><h4>El Horse</h4><img src=\"assets/El-Horse-forweb1000.png\"/></div>\n"

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

module.exports = "<h2>Professional</h2>\n\t<h3>\n\t\tMore professional content coming soon!\n\t</h3>\n<div class=\"box\">\n\t<h4>Arduino</h4>\n\t<p>\n\t\tPlease check out my beloved Arduino projects! My passion is the Arduino prototyping platform. There is tons of cool stuff here. If you have not already browsed, definitely check it out!\n\t\t<br>\n\t\t<br>\n\t\t<a routerLink=\"/arduino\">Arduino</a>\n\t</p>\n</div>\n<br>\n<div class=\"box\">\n\t<h4>Interdimensional Things</h4>\n\t<p>\n\t\tPlease check out Interdimensional Things, my E-Commerce website. It is an MVC web app that I created in Visual Studio using .Net Core and MySQL. Hoseted on Microsoft's Azure cloud service, the site uses APIs such as Braintree's credit card authorization, SmartyStreet's address validation, and SendGrid's Email service.\n\t\t<br>\n\t\t<br>\n\t\tThe site is where I sell things that I've encountered and acquired throughout my interdimensional travels. I wanted to have a way in which normal, non-interdimentional travelers, could discover and purchase things they never imagined possible. I've created it in such a way that nearly every mainstream species from our central finite curve can clearly read and understand how to use the site, how much things cost, and how long it will take for them to receive the things they choose.\n\t\t<br>\n\t\t<br>\n\t\t<a href=\"http://interdimensionalthings.azurewebsites.net\">Interdimensional Things</a>\n\t</p>\n</div>\n<br>\n<div class=\"box\">\n\t<h4>Happy Weather</h4>\n\t<p>\n\t\tPlease check out Happy Weather, my mobile web app which uses the Yahoo Weather API.\n\t\t<br>\n\t\t<br>\n\t\t<a href=\"https://urldotcom.com/weather.html\">Happy Weather</a>\n\t</p>\n</div>\n"

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