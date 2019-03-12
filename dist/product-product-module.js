(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/shop/product/product.module.ts":
/*!************************************************!*\
  !*** ./src/app/shop/product/product.module.ts ***!
  \************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/shop/product/product.page.ts");







var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"],
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/shop/product/product.page.html":
/*!************************************************!*\
  !*** ./src/app/shop/product/product.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding *ngIf=\"!id\">\n  <ion-card *ngFor=\"let product of products\" (click)=\"changeMenu(product.code)\">\n    <ion-card-title>{{product.name}}</ion-card-title>\n  </ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"id\">\n  <div *ngIf=\"results$ | async as productArray\">\n    <ion-card *ngFor=\"let item of productArray\">\n      <ion-card-title>{{item.name}}</ion-card-title>\n      <button (click)=\"showDetails(item.id)\">View Details</button>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shop/product/product.page.scss":
/*!************************************************!*\
  !*** ./src/app/shop/product/product.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shop/product/product.page.ts":
/*!**********************************************!*\
  !*** ./src/app/shop/product/product.page.ts ***!
  \**********************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");




var ProductPage = /** @class */ (function () {
    function ProductPage(router, route, api) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.products = [
            { name: 'Blush', code: 'blush' },
            { name: 'Bronzer', code: 'bronzer' },
            { name: 'Eyebrow', code: 'eyebrow' },
            { name: 'Eyeliner', code: 'eyeliner' },
            { name: 'Eyeshadow', code: 'eyeshadow' },
            { name: 'Foundation', code: 'foundation' },
            { name: 'Lip Liner', code: 'lip_liner' },
            { name: 'Lipstick', code: 'lipstick' },
            { name: 'Mascara', code: 'mascara' },
            { name: 'Nail Polish', code: 'nail_polish' }
        ];
        this.productArray = [];
    }
    ProductPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        if (this.id) {
            this.results$ = this.api.getByProduct(this.id);
        }
    };
    ProductPage.prototype.ngOnDestroy = function () {
        console.log('destroyed');
    };
    ProductPage.prototype.changeMenu = function (id) {
        this.router.navigate(['shop', 'product', id]);
    };
    ProductPage.prototype.showDetails = function (id) {
        this.router.navigate(['shop', 'product-page', id]);
    };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/shop/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/shop/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map