webpackJsonp([2],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/canvas/canvas.module": [
		271,
		1
	],
	"../pages/my-modal/my-modal.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_canvas__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(modal, navCtrl, actionControl) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.actionControl = actionControl;
    }
    HomePage.prototype.showActionSheet = function (e) {
        var actionSheet = this.actionControl.create({
            title: 'Actions for Image',
            buttons: [
                {
                    text: 'Like'
                },
                {
                    text: 'Comment'
                },
                {
                    text: 'Follow'
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.openModal = function (name) {
        if (name) {
            this.name = 'Hey ' + name + ', welcome to the new page!!';
        }
        else {
            this.name = 'No name entered';
        }
        var myData = {
            name: this.name
        };
        var myModal = this.modal.create('MyModalPage', { data: myData });
        myModal.present();
        /*myModal.onDidDismiss((data) => {
          console.log(data);
        });*/
    };
    HomePage.prototype.loadCanvas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__canvas_canvas__["a" /* CanvasPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "name", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Assignment 8\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h4>Text Input</h4>\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input placeholder="Type Username" type="text" #name></ion-input>\n    </ion-item>\n\n\n    <button ion-button half round (click)="openModal(name.value)">Submit Name</button>\n\n\n    <!--<p> {{name.value}}</p>-->\n\n  </ion-list>\n\n  <h4>Icons</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon name="happy" color="secondary"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="musical-notes" color="primary"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="camera" color="dark"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="cafe" color="orange"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="sunny" color="yellow"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="rainy" color="primary"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n  <h4>Card</h4>\n  <ion-card (swipe)="showActionSheet($event)">\n    <img src="./assets/imgs/image.jpg">\n    <ion-card-content>\n      <ion-card-title>Jersey City: MyClick</ion-card-title>\n      <p>Picture from Snow Storm January 2017</p>\n    </ion-card-content>\n  </ion-card>\n\n\n  <h4>Check-Boxes</h4>\n  <ion-list>\n    <ion-list-header>Choose Technical skills</ion-list-header>\n    <ion-item>\n      <ion-label>C</ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>C++</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Java</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Python</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n\n  <h4>Radio-Buttons</h4>\n  <ion-list>\n    <ion-item>\n      <ion-label>Primary Tech Skill</ion-label>\n      <ion-select>\n        <ion-option value="c">C</ion-option>\n        <ion-option value="c++">C++</ion-option>\n        <ion-option value="java">Java</ion-option>\n        <ion-option value="python">Python</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n\n  <button ion-button full round (click)="loadCanvas()">Click to see my canvas</button>\n\n\n</ion-content>\n'/*ion-inline-end:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_canvas_draw_canvas_draw__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_canvas_canvas__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_canvas_draw_canvas_draw__["a" /* CanvasDrawComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_canvas_canvas__["a" /* CanvasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/canvas/canvas.module#CanvasPageModule', name: 'CanvasPage', segment: 'canvas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-modal/my-modal.module#MyModalPageModule', name: 'MyModalPage', segment: 'my-modal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_canvas_draw_canvas_draw__["a" /* CanvasDrawComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_canvas_canvas__["a" /* CanvasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDrawComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CanvasDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CanvasDrawComponent = /** @class */ (function () {
    function CanvasDrawComponent(platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        console.log('Hello CanvasDrawComponent Component');
        /*this.text = 'Hello World';*/
    }
    CanvasDrawComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //console.log(this.canvas);
        this.canvasElement = this.canvas.nativeElement;
        console.log("Width: " + this.platform.width());
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
        window.addEventListener('deviceorientation', function (event) {
            console.log("DeviceOrientation!!");
            var x = event.alpha;
            var y = event.beta;
            var z = event.gamma;
            var fact = (x + y + z) / 3;
            var r = _this.getRandomInt(255);
            var g = _this.getRandomInt(255);
            var b = _this.getRandomInt(255);
            var color1 = "rgb(" + r + "," + g + "," + b + ")";
            /* r = getRandomInt1(150, 220);
             g = getRandomInt1(150, 220);
             b = getRandomInt1(150, 2250
      
        100         var color2 = "rgb(" + r + "," + g + "," + b + ")";*/
            r = _this.getRandomInt1(50, 100);
            g = _this.getRandomInt1(50, 100);
            b = _this.getRandomInt1(50, 100);
            var color3 = "rgb(" + r + "," + g + "," + b + ")";
            if (fact < 5 && fact > 0) {
                //alert("In If statement!!");
                //vibrateMe();
                //setTimeout(1000);
            }
            else {
                _this.drawCircle(color1, color3, fact);
            }
        });
    };
    CanvasDrawComponent.prototype.getRandomInt = function (val) {
        return Math.floor(Math.random() * (val + 1));
    };
    CanvasDrawComponent.prototype.getRandomInt1 = function (val1, val2) {
        return (val1 + Math.floor(Math.random() * ((val2 - val1) + 1)));
    };
    CanvasDrawComponent.prototype.drawCircle = function (col1, col3, fact) {
        //var cc = document.getElementById("myCanvas");
        var c = this.canvasElement.getContext("2d");
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
        var width = this.platform.width(); //cc.width;
        var height = this.platform.height(); //cc.height;
        //console.log(width + " : "+height);
        c.beginPath();
        c.fillStyle = col3; //"red";
        c.fillRect(0, 0, width, height);
        c.fill();
        c.closePath();
        //left side
        var radius = 0;
        var x = 0;
        var y = 0;
        if (width > height) {
            radius = (width / 2) - (fact * 1.5);
            x = 0;
            y = height / 2;
        }
        else {
            radius = (height - (width / 2)) - (fact * 1.2);
            x = 0 - (height - width);
            y = height / 2;
        }
        console.log("OG X: " + x + " Y: " + y);
        var count = 0;
        for (var i = 500; i > 0 && radius > 0; i--) {
            if (i % 2 == 0) {
                c.beginPath();
                c.arc(x, y, radius, 0, 2 * Math.PI);
                c.lineWidth = '2';
                c.strokeStyle = col1; //"white";
                c.fillStyle = col1; // "white";
                c.fill();
                c.stroke();
                c.closePath();
                radius -= 8;
                x += 8;
                //count++;
            }
            else {
                c.beginPath();
                c.arc(x, y, radius, 0, 2 * Math.PI);
                c.lineWidth = '2';
                c.strokeStyle = "black";
                c.fillStyle = "black";
                c.stroke();
                c.fill();
                c.closePath();
                radius -= 8;
                x += 8;
                //count ++;
            }
        }
        //console.log("X: "+x+" Y: "+y+" Radius: "+radius);
        if (width > height) {
            radius = (width / 2) - (fact * 1.5);
            x = width;
            y = height / 2;
        }
        else {
            radius = (height - (width / 2)) - (fact * 1.2);
            x = width + (height - width);
            y = height / 2;
        }
        //right side
        console.log("Right  -  X: " + x + " Y: " + y + " Radius: " + radius + " Count: " + count);
        for (var i_1 = 500; i_1 > 0 && radius > 0; i_1--) {
            if (i_1 % 2 == 0) {
                c.beginPath();
                c.arc(x, y, radius, 0, 2 * Math.PI);
                c.lineWidth = '2';
                c.strokeStyle = col1; //"white";
                c.fillStyle = col1; // "white";
                c.fill();
                c.stroke();
                c.closePath();
                radius -= 8;
                x -= 8;
            }
            else {
                c.beginPath();
                c.arc(x, y, radius, 0, 2 * Math.PI);
                c.lineWidth = '2';
                c.strokeStyle = "black";
                c.fillStyle = "black";
                c.stroke();
                c.fill();
                c.closePath();
                radius -= 8;
                x -= 8;
            }
        }
        console.log("For line -  Width: " + width + " Height: " + height);
        c.beginPath();
        c.lineWidth = 10;
        c.strokeStyle = col1;
        c.strokeRect(0, 0, width, height);
        c.stroke();
        c.closePath();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myCanvas'),
        __metadata("design:type", Object)
    ], CanvasDrawComponent.prototype, "canvas", void 0);
    CanvasDrawComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'canvas-draw',template:/*ion-inline-start:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\components\canvas-draw\canvas-draw.html"*/'<!-- Generated template for the CanvasDrawComponent component -->\n<!--<div>\n  {{text}}\n</div>-->\n\n\n<!--<canvas #myCanvas (touchstart) = "handleStart($event)" (touchmove) = "handleMove($event)" (touchEnd) = "handleEnd($event)"></canvas>-->\n<canvas #myCanvas ></canvas>\n'/*ion-inline-end:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\components\canvas-draw\canvas-draw.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], CanvasDrawComponent);
    return CanvasDrawComponent;
}());

//# sourceMappingURL=canvas-draw.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CanvasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CanvasPage = /** @class */ (function () {
    function CanvasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CanvasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CanvasPage');
    };
    CanvasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-canvas',template:/*ion-inline-start:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\pages\canvas\canvas.html"*/'<!--\n  Generated template for the CanvasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Canvas Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-bounce>\n  <canvas-draw></canvas-draw>\n</ion-content>\n'/*ion-inline-end:"G:\Semester 4\Mobile Web Development\Assignment8\assignment8\src\pages\canvas\canvas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CanvasPage);
    return CanvasPage;
}());

//# sourceMappingURL=canvas.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map