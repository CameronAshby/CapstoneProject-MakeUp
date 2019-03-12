(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-page-welcome-page-module"],{

/***/ "./src/app/service/login/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/login/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var LoginService = /** @class */ (function () {
    function LoginService(db) {
        this.db = db;
        this.usersRef = this.db.collection("users");
    }
    LoginService.prototype.getUserObservable = function (name) {
        return this.db.doc("users/" + name).valueChanges();
    };
    LoginService.prototype.getCompaniesObservable = function () {
        return this.usersRef.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            return items.map(function (item) {
                return {
                    name: item.payload.doc.data().name,
                    email: item.payload.doc.data().email,
                    cart: item.payload.doc.data().cart,
                    password: item.payload.doc.data().password,
                };
            });
        }));
    };
    LoginService.prototype.saveUser = function (user) {
        return this.usersRef.add(user)
            .then(function (_) { return console.log("Save user " + user.name); });
    };
    // editCompany(name: string, company: any) {
    //   return this.companiesRef.doc(key).update(company)
    //       .then(_ => console.log('Success on update'))
    //       .catch(error => console.log('update', error));
    // }
    LoginService.prototype.removeCompany = function (name) {
        return this.usersRef.doc(name).delete()
            .then(function (_) { return console.log('Success on remove'); })
            .catch(function (error) { return console.log('remove', error); });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/welcome-page/welcome-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.module.ts ***!
  \*****************************************************/
/*! exports provided: WelcomePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePagePageModule", function() { return WelcomePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome-page.page */ "./src/app/welcome-page/welcome-page.page.ts");







var routes = [
    {
        path: '',
        component: _welcome_page_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePagePage"]
    }
];
var WelcomePagePageModule = /** @class */ (function () {
    function WelcomePagePageModule() {
    }
    WelcomePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePagePage"]]
        })
    ], WelcomePagePageModule);
    return WelcomePagePageModule;
}());



/***/ }),

/***/ "./src/app/welcome-page/welcome-page.page.html":
/*!*****************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Welcome</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-button>Hello!</ion-button>\n\n<div>\n  <img (click)=\"registerGoogle()\" src=\"../assets/btn_google_signin_dark_focus_web@2x.png\" alt=\"\">\n</div>\n\n\n<ion-content padding>\n    <div>Sign in with password</div>\n    <form>\n        <input type=\"text\" placeholder=\"First Name\" id=\"first\">\n        <input type=\"text\" placeholder=\"Last Name\" id=\"last\">\n        <input type=\"email\" placeholder=\"email\" id=\"email\">\n        <input type=\"password\" placeholder=\"password\" id=\"password\">\n        <input type=\"submit\" value=\"submit\">\n    </form>\n    <div>Or</div>\n    <ion-button>Sign in with Google</ion-button>\n\n  <div id=\"content\">\n    <h1 id=\"title\">Ready to Shop!</h1>\n    <div>\n      <!--<img id=\"signin_button\" (click)=\"registerGoogle()\" src=\"../assets/btn_google_signin_dark_focus_web@2x.png\" alt=\"\">-->\n\n  <!--<div id=\"form\">-->\n      <!--<img id=\"signin_button\" (click)=\"registerGoogle()\" src=\"../assets/btn_google_signin_dark_focus_web@2x.png\" alt=\"\">-->\n      <!--<img id=\"singin_logo\" src=\"{{ profilePic }}\" alt=\"\">-->\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/welcome-page/welcome-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "image {\n  width: 50px;\n  height: 50px; }\n\n#signin_button {\n  width: 200px;\n  display: block;\n  margin: auto;\n  cursor: pointer; }\n\n#singin_logo {\n  width: 150px;\n  display: block;\n  margin: 50px auto; }\n\n#content {\n  width: 100%;\n  height: 100%; }\n\n#title {\n  font-family: 'Shrikhand', sans-serif;\n  text-align: center;\n  color: #fff;\n  margin: 0;\n  padding-top: 20%;\n  font-size: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1lcm9uYXNoYnkvUHJvamVjdHMvQ2Fwc3RvbmVQcm9qZWN0L3NyYy9hcHAvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFJWjtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltYWdle1xuICB3aWR0aDo1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4jc2lnbmluX2J1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2luZ2luX2xvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbiAgI3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1NocmlraGFuZCcsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/welcome-page/welcome-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.page.ts ***!
  \***************************************************/
/*! exports provided: WelcomePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePagePage", function() { return WelcomePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login/login.service */ "./src/app/service/login/login.service.ts");



var WelcomePagePage = /** @class */ (function () {
    function WelcomePagePage(loginService, zone) {
        this.loginService = loginService;
        this.zone = zone;
        this.profilePic = '';
    }
    WelcomePagePage.prototype.ngOnInit = function () {
    };
    WelcomePagePage.prototype.registerGoogle = function () {
        var user = this.user;
        // this.loginService.signIn().then( data =>{
        //   this.zone.run( ()=>{
        //     user = {
        //       name: data['user']['displayName'],
        //       email: data['user']['email'],
        //       cart: [],
        //       profilePic: data['user']['photoURL']
        //      }
        //     });
        // });
    };
    WelcomePagePage.prototype.registerEmail = function () {
        var user = this.user;
        // this.loginService.signIn().then( data =>{
        //     user = {
        //       name: '',
        //       email: '',
        //       cart: [],
        //       password: '',
        //       profilePic: ''
        //     }
        //   });
    };
    WelcomePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome-page',
            template: __webpack_require__(/*! ./welcome-page.page.html */ "./src/app/welcome-page/welcome-page.page.html"),
            styles: [__webpack_require__(/*! ./welcome-page.page.scss */ "./src/app/welcome-page/welcome-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], WelcomePagePage);
    return WelcomePagePage;
}());



/***/ })

}]);
//# sourceMappingURL=welcome-page-welcome-page-module.js.map