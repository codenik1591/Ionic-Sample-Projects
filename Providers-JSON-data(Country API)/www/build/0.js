webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModalPageModule", function() { return MyModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_modal__ = __webpack_require__(285);
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

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
    MyModalPage.prototype.ionViewWillLoad = function () {
        this.data = this.navParams.get('data');
        /*for (let i=0; i<this.data.languages.length;i++){
          console.log(this.data.languages[i].name);
        }*/
    };
    MyModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    MyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-modal',template:/*ion-inline-start:"G:\Semester 4\Mobile Web Development\Assignment10\Assignment_10_JSON\src\pages\my-modal\my-modal.html"*/'<!--\n  Generated template for the MyModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Description</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="gradient">\n  <div class="animate"><img src={{data.flag}}>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p><b>Name:</b><br> <i>{{data.name}}</i></p>\n        </ion-col>\n        <ion-col>\n          <p><b>Capital:</b><br> <i>{{data.capital}}</i></p>\n        </ion-col>\n        <ion-col>\n          <p><b>Region:</b><br> <i>{{data.region}}</i></p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p><b>Area:</b><br> <i>{{data.area}}<br>sq.km</i></p>\n        </ion-col>\n        <ion-col>\n          <p><b>Population:</b><br> <i>{{data.population}}</i></p>\n        </ion-col>\n        <ion-col>\n          <p><b>Currency:</b><br> <i>{{data.currencies[0].code}}</i></p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <p><b>Native:</b><br> <i>{{data.nativeName}}</i></p>\n        </ion-col>\n        <ion-col>\n          <p >\n            <b>Languages:</b>\n            <ion-grid *ngFor="let l of data.languages">\n              <ion-row><i>{{l.name}} </i></ion-row>\n            </ion-grid>\n          </p>\n          <!--<p><b>Languages:</b> <i>{{language[0].name}}</i></p>-->\n\n        </ion-col>\n        <ion-col>\n          <p><b>Gini Index:</b><br> <i>{{data.gini}}</i></p>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"G:\Semester 4\Mobile Web Development\Assignment10\Assignment_10_JSON\src\pages\my-modal\my-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], MyModalPage);
    return MyModalPage;
}());

//# sourceMappingURL=my-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map