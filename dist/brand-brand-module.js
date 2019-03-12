(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-brand-module"],{

/***/ "./src/app/shop/brand/brand.module.ts":
/*!********************************************!*\
  !*** ./src/app/shop/brand/brand.module.ts ***!
  \********************************************/
/*! exports provided: BrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPageModule", function() { return BrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brand.page */ "./src/app/shop/brand/brand.page.ts");







var routes = [
    {
        path: '',
        component: _brand_page__WEBPACK_IMPORTED_MODULE_6__["BrandPage"]
    }
];
var BrandPageModule = /** @class */ (function () {
    function BrandPageModule() {
    }
    BrandPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_brand_page__WEBPACK_IMPORTED_MODULE_6__["BrandPage"]]
        })
    ], BrandPageModule);
    return BrandPageModule;
}());



/***/ }),

/***/ "./src/app/shop/brand/brand.page.html":
/*!********************************************!*\
  !*** ./src/app/shop/brand/brand.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>brand</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"!id\">\n  <ion-card *ngFor=\"let brand of brands\" (click)=\"changeMenu(brand.code)\">\n    <ion-card-title>{{brand.name}}</ion-card-title>\n  </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"id\">\n  <div *ngIf=\"results$ | async as product\">\n    <ion-card *ngFor=\"let item of product\">\n      <ion-card-title>{{item.name}}</ion-card-title>\n      <button (click)=\"showDetails(item.id)\">View Details</button>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shop/brand/brand.page.scss":
/*!********************************************!*\
  !*** ./src/app/shop/brand/brand.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvYnJhbmQvYnJhbmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shop/brand/brand.page.ts":
/*!******************************************!*\
  !*** ./src/app/shop/brand/brand.page.ts ***!
  \******************************************/
/*! exports provided: BrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPage", function() { return BrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");




var BrandPage = /** @class */ (function () {
    function BrandPage(router, route, api) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.brands = [
            { name: 'Almay', code: 'almay' },
            { name: 'Alva', code: 'alva' },
            { name: 'Anna Sui', code: 'anna sui' },
            { name: 'Annabelle', code: 'annabelle' },
            { name: 'Benefit', code: 'benefit' },
            { name: 'Boosh', code: 'boosh' },
            { name: "Burt's Bees", code: "burt's bees" },
            { name: 'Butter London', code: 'butter london' },
            { name: "C'est Moi", code: "c'est moi" },
            { name: 'Cargo Cosmetics', code: 'cargo cosmetics' },
            { name: 'China Glaze', code: 'china glaze' },
            { name: 'Clinique', code: 'clinique' },
            { name: 'Coastal Classic Creation', code: 'coastal classic creation' },
            { name: 'Colourpop', code: 'colourpop' },
            { name: 'Covergirl', code: 'covergirl' },
            { name: 'Dalish', code: 'dalish' },
            { name: 'Deciem', code: 'deciem' },
            { name: 'Dior', code: 'dior' },
            { name: 'Dr. Hauschka', code: 'dr. hauschka' },
            { name: 'e.l.f.', code: 'e.l.f.' },
            { name: 'Essie', code: 'essie' },
            { name: 'Fenty', code: 'fenty' },
            { name: 'Glossier', code: 'glossier' },
            { name: 'Green People', code: 'green people' },
            { name: 'Iman', code: 'iman' },
            { name: "L'oreal", code: "L'oreal" },
            { name: 'Lotus Cosmetics USA', code: 'lotus cosmetics usa' },
            { name: "Maia's Mineral Galaxy", code: "Maia's Mineral Galaxy" },
            { name: 'Marcelle', code: 'marcelle' },
            { name: 'Marienatie', code: 'marienatie' },
            { name: 'Maybelline', code: 'maybelline' },
            { name: 'Milani', code: 'milani' },
            { name: 'Mineral Fusion', code: 'mineral fusion' },
            { name: 'Misa', code: 'misa' },
            { name: 'Mistura', code: 'mistura' },
            { name: 'Moov', code: 'moov' },
            { name: 'Nudus', code: 'nudus' },
            { name: 'Nyx', code: 'nyx' },
            { name: 'Orly', code: 'orly' },
            { name: 'Pacifica', code: 'pacifica' },
            { name: 'Penny Lane Organics', code: 'penny lane organics' },
            { name: 'Physicians Formula', code: 'physicians formula' },
            { name: 'Piggy Paint', code: 'piggy paint' },
            { name: 'Pure Anada', code: 'pure anada' },
            { name: 'Rejuva Minerals', code: 'rejuva minerals' },
            { name: 'Revlon', code: 'revlon' },
            { name: "Sally B's Skin Yummies", code: "sally b's skin yummies" },
            { name: 'Salon Perfect', code: 'salon perfect' },
            { name: 'Sante', code: 'sante' },
            { name: 'Sinful Colours', code: 'sinful colours' },
            { name: 'Smashbox', code: 'smashbox' },
            { name: 'Stila', code: 'stila' },
            { name: 'Suncoat', code: 'suncoat' },
            { name: 'W3llpeople', code: 'w3llpeople' },
            { name: 'Wet N Wild', code: 'wet n wild' },
            { name: 'Zorah', code: 'zorah' },
            { name: 'Zorah Biocosmetiques', code: 'zorah biocosmetiques' }
        ];
        this.product = [];
    }
    BrandPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.results$ = this.api.getByBrand(this.id);
        }
    };
    BrandPage.prototype.changeMenu = function (id) {
        this.router.navigate(['shop', 'brand', id]);
    };
    BrandPage.prototype.showDetails = function (id) {
        this.router.navigate(['shop', 'product-page', id]);
    };
    BrandPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.page.html */ "./src/app/shop/brand/brand.page.html"),
            styles: [__webpack_require__(/*! ./brand.page.scss */ "./src/app/shop/brand/brand.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], BrandPage);
    return BrandPage;
}());



/***/ })

}]);
//# sourceMappingURL=brand-brand-module.js.map