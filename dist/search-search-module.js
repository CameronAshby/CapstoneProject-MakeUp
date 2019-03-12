(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/shop/search/search.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shop/search/search.module.ts ***!
  \**********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/shop/search/search.page.ts");







var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/shop/search/search.page.html":
/*!**********************************************!*\
  !*** ./src/app/shop/search/search.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content *ngIf=\"api.apiArray\">\n    <ion-card *ngFor=\"let item of api.apiArray\">\n      <ion-card-title>{{item.name}}</ion-card-title>\n      <button (click)=\"showDetails(item.id)\">View Details</button>\n    </ion-card>\n  </ion-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shop/search/search.page.scss":
/*!**********************************************!*\
  !*** ./src/app/shop/search/search.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shop/search/search.page.ts":
/*!********************************************!*\
  !*** ./src/app/shop/search/search.page.ts ***!
  \********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SearchPage = /** @class */ (function () {
    function SearchPage(api, router, loader) {
        this.api = api;
        this.router = router;
        this.loader = loader;
        this.product$ = this.api.initializeAPI();
    }
    SearchPage.prototype.ngOnInit = function () {
        if (this.api.apiArray.length === 0) {
            this.getApiArray();
        }
    };
    SearchPage.prototype.showDetails = function (id) {
        this.router.navigate(['shop', 'product-page', id]);
    };
    SearchPage.prototype.getApiArray = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loader.create()];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            _this.api.initializeAPI().subscribe(function (data) {
                                _this.api.apiArray = data;
                                console.log(data);
                                loading.dismiss();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/shop/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/shop/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map