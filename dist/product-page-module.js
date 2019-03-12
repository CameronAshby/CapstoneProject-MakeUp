(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-page-module"],{

/***/ "./src/app/shop/product-page/product-page.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shop/product-page/product-page.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPagePageModule", function() { return ProductPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-page.page */ "./src/app/shop/product-page/product-page.page.ts");







var routes = [
    {
        path: '',
        component: _product_page_page__WEBPACK_IMPORTED_MODULE_6__["ProductPagePage"],
        children: [
            {
                path: ':id',
                loadChildren: './product-page.module#ProductPagePageModule'
            }
        ]
    }
];
var ProductPagePageModule = /** @class */ (function () {
    function ProductPagePageModule() {
    }
    ProductPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page_page__WEBPACK_IMPORTED_MODULE_6__["ProductPagePage"]]
        })
    ], ProductPagePageModule);
    return ProductPagePageModule;
}());



/***/ }),

/***/ "./src/app/shop/product-page/product-page.page.html":
/*!**********************************************************!*\
  !*** ./src/app/shop/product-page/product-page.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>productPage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"productId\">\n  <div *ngIf=\"results$ | async as product\">\n    <ion-card>\n      <ion-card-title>{{product.name}}</ion-card-title>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shop/product-page/product-page.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/shop/product-page/product-page.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shop/product-page/product-page.page.ts":
/*!********************************************************!*\
  !*** ./src/app/shop/product-page/product-page.page.ts ***!
  \********************************************************/
/*! exports provided: ProductPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPagePage", function() { return ProductPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api/api.service */ "./src/app/service/api/api.service.ts");




var ProductPagePage = /** @class */ (function () {
    function ProductPagePage(router, route, api) {
        this.router = router;
        this.route = route;
        this.api = api;
    }
    ProductPagePage.prototype.ngOnInit = function () {
        this.productId = this.route.snapshot.paramMap.get('productId');
        console.log(this.productId);
        if (this.productId) {
            this.results$ = this.api.getById(this.productId);
        }
    };
    ProductPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-page',
            template: __webpack_require__(/*! ./product-page.page.html */ "./src/app/shop/product-page/product-page.page.html"),
            styles: [__webpack_require__(/*! ./product-page.page.scss */ "./src/app/shop/product-page/product-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProductPagePage);
    return ProductPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=product-page-module.js.map