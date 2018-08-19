webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModalPageModule", function() { return MyModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_modal__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyModalPageModule = /** @class */ (function () {
    function MyModalPageModule() {
    }
    MyModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_modal__["a" /* MyModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_modal__["a" /* MyModalPage */]),
            ],
        })
    ], MyModalPageModule);
    return MyModalPageModule;
}());

//# sourceMappingURL=my-modal.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the MyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyModalPage = /** @class */ (function () {
    function MyModalPage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    /* ionViewDidLoad() {
       console.log('ionViewDidLoad MyModalPage');
     }
   */
    MyModalPage.prototype.ionViewWillLoad = function () {
        this.data = this.navParams.get('data');
        console.log(this.data);
    };
    MyModalPage.prototype.closeModal = function () {
        this.view.dismiss();
        //this.view.dismiss(data);
    };
    MyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-modal',template:/*ion-inline-start:"G:\Semester 4\Mobile Web Development\Assignment9\Assignment9_Provider1\Assignment9_Provider1\src\pages\my-modal\my-modal.html"*/'<!--\n  Generated template for the MyModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Movie Description</ion-title>\n    <ion-buttons end>\n      <button ion-button (click) ="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <img src={{data.src}}>\n    <p><b>Movie Name:</b> <i>{{data.title}}</i></p>\n    <p><b>Released:</b> <i>{{data.year}}</i></p>\n    <p><b>Director:</b> <i>{{data.director}}</i></p>\n    <p><b>Actors:</b> <i>{{data.actors}}</i></p>\n    <p><b>About:</b> <i>{{data.description}}</i></p>\n\n    <!--<ion-item color="secondary">Movie Name: {{data.title}} </ion-item>\n    <ion-item color="secondary">Director: {{data.director}} </ion-item>\n    <ion-item color="secondary">Actors: {{data.actors}} </ion-item>\n    <ion-item color="secondary">About: {{data.description}}</ion-item>-->\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"G:\Semester 4\Mobile Web Development\Assignment9\Assignment9_Provider1\Assignment9_Provider1\src\pages\my-modal\my-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], MyModalPage);
    return MyModalPage;
}());

//# sourceMappingURL=my-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map