(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qualities-qualities-module"],{

/***/ "./src/app/shop/qualities/qualities.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shop/qualities/qualities.module.ts ***!
  \****************************************************/
/*! exports provided: QualitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualitiesPageModule", function() { return QualitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qualities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./qualities.page */ "./src/app/shop/qualities/qualities.page.ts");







var routes = [
    {
        path: '',
        component: _qualities_page__WEBPACK_IMPORTED_MODULE_6__["QualitiesPage"]
    }
];
var QualitiesPageModule = /** @class */ (function () {
    function QualitiesPageModule() {
    }
    QualitiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_qualities_page__WEBPACK_IMPORTED_MODULE_6__["QualitiesPage"]]
        })
    ], QualitiesPageModule);
    return QualitiesPageModule;
}());



/***/ }),

/***/ "./src/app/shop/qualities/qualities.page.html":
/*!****************************************************!*\
  !*** ./src/app/shop/qualities/qualities.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"!id\">\n  <ion-card *ngFor=\"let quality of qualities\" (click)=\"changeMenu(quality.code)\">\n    <ion-card-title>{{quality.name}}</ion-card-title>\n  </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"id\">\n  <ion-card *ngFor=\"let quality of qualityArray\">\n    <ion-card-title>{{quality.name}}</ion-card-title>\n    <button (click)=\"showDetails(quality.id)\">View Details</button>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shop/qualities/qualities.page.scss":
/*!****************************************************!*\
  !*** ./src/app/shop/qualities/qualities.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcXVhbGl0aWVzL3F1YWxpdGllcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shop/qualities/qualities.page.ts":
/*!**************************************************!*\
  !*** ./src/app/shop/qualities/qualities.page.ts ***!
  \**************************************************/
/*! exports provided: QualitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualitiesPage", function() { return QualitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var QualitiesPage = /** @class */ (function () {
    function QualitiesPage(router, route, api, loader) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.loader = loader;
        this.qualities = [
            { name: 'Canadian', code: 'Canadian' },
            { name: 'CertClean', code: 'CertClean' },
            { name: 'Dairy Free', code: 'Dairy Free' },
            { name: 'EWG Verified', code: 'EWG Verified' },
            { name: 'EcoCert', code: 'EcoCert' },
            { name: 'Fair Trade', code: 'Fair Trade' },
            { name: 'Gluten Free', code: 'Gluten Free' },
            { name: 'Hypoallergenic', code: 'Hypoallergenic' },
            { name: 'Natural', code: 'Natural' },
            { name: 'No Talc', code: 'No Talc' },
            { name: 'Non-GMO', code: 'Non-GMO' },
            { name: 'Organic', code: 'Organic' },
            { name: 'Peanut Free Product', code: 'Peanut Free Product' },
            { name: 'Sugar Free', code: 'Sugar Free' },
            { name: 'USDA Organic', code: 'USDA Organic' },
            { name: 'Vegan', code: 'Vegan' },
            { name: 'Alcohol Free', code: 'alcohol free' },
            { name: 'Cruelty Free', code: 'cruelty free' },
            { name: 'Oil Free', code: 'oil free' },
            { name: 'Purpicks', code: 'purpicks' },
            { name: 'Silicone Free', code: 'silicone free' },
            { name: 'Water Free', code: 'water free' },
        ];
        this.qualityArray = [];
    }
    QualitiesPage.prototype.ngOnInit = function () {
        if (this.api.apiArray.length === 0) {
            this.getApiArray();
        }
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.qualityArray = this.api.getByQuality(this.id);
        }
    };
    QualitiesPage.prototype.changeMenu = function (id) {
        this.router.navigate(['shop', 'qualities', id]);
    };
    QualitiesPage.prototype.showDetails = function (id) {
        this.router.navigate(['shop', 'product-page', id]);
    };
    QualitiesPage.prototype.getApiArray = function () {
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
    QualitiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qualities',
            template: __webpack_require__(/*! ./qualities.page.html */ "./src/app/shop/qualities/qualities.page.html"),
            styles: [__webpack_require__(/*! ./qualities.page.scss */ "./src/app/shop/qualities/qualities.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], QualitiesPage);
    return QualitiesPage;
}());



/***/ })

}]);
//# sourceMappingURL=qualities-qualities-module.js.map