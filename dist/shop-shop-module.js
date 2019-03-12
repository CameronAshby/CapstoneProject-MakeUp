(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./src/app/shop/shop.module.ts":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/shop/shop.page.ts");







var routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"],
        children: [
            {
                path: 'product',
                children: [
                    {
                        path: '',
                        loadChildren: './product/product.module#ProductPageModule'
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                path: '',
                                loadChildren: './product/product.module#ProductPageModule'
                            },
                            {
                                path: ':id',
                                loadChildren: './product/product.module#ProductPageModule'
                            }
                        ]
                    }
                ]
            },
            {
                path: 'brand',
                children: [
                    {
                        path: '',
                        loadChildren: './brand/brand.module#BrandPageModule'
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                path: '',
                                loadChildren: './brand/brand.module#BrandPageModule'
                            },
                            {
                                path: ':id',
                                loadChildren: './brand/brand.module#BrandPageModule'
                            }
                        ]
                    }
                ]
            },
            {
                path: 'qualities',
                children: [
                    {
                        path: '',
                        loadChildren: './qualities/qualities.module#QualitiesPageModule'
                    },
                    {
                        path: ':id',
                        loadChildren: './qualities/qualities.module#QualitiesPageModule'
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: './search/search.module#SearchPageModule'
                    }
                ]
            },
            {
                path: 'product-page',
                children: [
                    {
                        path: ':productId',
                        loadChildren: './product-page/product-page.module#ProductPagePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/shop/product',
                pathMatch: 'full'
            }
        ]
    }
];
var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
        })
    ], ShopPageModule);
    return ShopPageModule;
}());



/***/ }),

/***/ "./src/app/shop/shop.page.html":
/*!*************************************!*\
  !*** ./src/app/shop/shop.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Shop</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"product\">\n      <ion-icon name=\"basket\"></ion-icon>\n      <ion-label>Product</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"brand\">\n      <ion-icon name=\"rose\"></ion-icon>\n      <ion-label>Brand</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"qualities\">\n      <ion-icon name=\"star\"></ion-icon>\n      <ion-label>Qualities</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>Search</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/shop/shop.page.scss":
/*!*************************************!*\
  !*** ./src/app/shop/shop.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shop/shop.page.ts":
/*!***********************************!*\
  !*** ./src/app/shop/shop.page.ts ***!
  \***********************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api/api.service */ "./src/app/service/api/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ShopPage = /** @class */ (function () {
    function ShopPage(api, loader) {
        this.api = api;
        this.loader = loader;
        this.product$ = this.api.initializeAPI();
    }
    ShopPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.page.html */ "./src/app/shop/shop.page.html"),
            styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/shop/shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], ShopPage);
    return ShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=shop-shop-module.js.map