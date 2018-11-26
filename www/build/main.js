webpackJsonp([2],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_markers_markers__ = __webpack_require__(359);
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
    function HomePage(navCtrl, afs, alertCtrl, nativeGeocoder, markersProvier) {
        this.navCtrl = navCtrl;
        this.afs = afs;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.markersProvier = markersProvier;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    HomePage.prototype.loadmap = function () {
        var _this = this;
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").fitWorld();
        __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            minZoom: 3,
            maxZoom: 18,
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 16,
        }).on('locationfound', function (e) {
            var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
            var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([e.latitude, e.longitude]).on('click', function () {
                alert('location');
            });
            markerGroup.addLayer(marker);
            _this.map.addLayer(markerGroup);
        }).on('locationerror', function (err) {
            alert(err.message);
        });
        var initialMarkers = [];
        this.afs.collection('markers').ref.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                initialMarkers.push(doc.data());
            });
            var address = initialMarkers[0].NbRue + ' ' + initialMarkers[0].rue + ' ' + initialMarkers[0].postal + ' ' + initialMarkers[0].city;
            initialMarkers.map(function (el) {
                _this.nativeGeocoder.forwardGeocode(address)
                    .then(function (coordinates) {
                    var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
                    var markerData = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([coordinates[0].latitude, coordinates[0].longitude]).on('click', function () {
                        alert('Marker Andreas');
                    });
                    markerGroup.addLayer(markerData);
                    _this.map.addLayer(markerGroup);
                });
            })
                .catch(function (error) { return console.log(error); });
            _this.markersProvier.getAllMarkers().subscribe(function (markers) {
                markers.forEach(function (singlemarker) {
                    var markerGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();
                    var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a
                        .marker([singlemarker[0].latitude, singlemarker[0].longitude])
                        .on("click", function () {
                        alert('coucou');
                    });
                    markerGroup.addLayer(marker);
                    _this.map.addLayer(markerGroup);
                });
            });
        });
        this.map.on('geosearch_showlocation', function (adress) {
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([adress.x, adress.y]).addTo(this.map);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/home/home.html"*/'<ion-content>\n  <div class="map-container">\n    <div id="map" style="width: 100%; height: 100%">\n    </div>\n  </div>\n\n  <ion-card class="card_Rounded">\n\n    <ion-item class="itemm" (click)="openModal()">\n      <ion-avatar item-start>\n        <img class="avatar" src="http://www.web-soluces.net/webmaster/avatar/FaceCo-Homme.png">        \n      </ion-avatar>\n\n      <div class="droite">\n        <img src="../../assets/imgs/tajin.jpg">\n      </div>\n    </ion-item>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_markers_markers__["a" /* MarkersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_markers_markers__["a" /* MarkersProvider */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_markers_markers__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, formBuilder, firebaseService, toastCtrl, auth, fb, afs, nativeGeocoder, markersProvier) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.toastCtrl = toastCtrl;
        this.auth = auth;
        this.fb = fb;
        this.afs = afs;
        this.nativeGeocoder = nativeGeocoder;
        this.markersProvier = markersProvier;
    }
    RegisterPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    RegisterPage.prototype.getData = function () {
        this.simple_form = this.formBuilder.group({
            nom: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            prenom: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            NbRue: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            rue: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            postal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6)])),
        });
    };
    RegisterPage.prototype.add = function (value) {
        var _this = this;
        this.firebaseService.addUser(value)
            .then(function (res) {
            var toast = _this.toastCtrl.create({
                message: 'Votre compte a été créer avec succes',
                duration: 3000
            });
            toast.present();
        });
        var data = this.simple_form.value;
        var credentials = {
            email: data.email,
            password: data.password,
        };
        this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signin_signin__["a" /* SigninPage */]); });
        this.afs.collection('/markers').add({
            NbRue: value.NbRue,
            rue: value.rue,
            postal: value.postal,
            city: value.city,
        });
        this.afs.collection('/users').add({
            nom: value.nom,
            prenom: value.prenom
        });
        var address = value[0].NbRue + '' + value[0].rue + '' + value[0].postal + '' + value[0].city;
        this.nativeGeocoder
            .forwardGeocode(address)
            .then(function (coordinates) {
            _this.markersProvier.saveMarker(coordinates[0]);
            console.log(coordinates);
        })
            .catch(function (error) { return console.log(error); });
    };
    RegisterPage.prototype.BackToAccueil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/register/register.html"*/'<ion-content>\n\n  <div class="backTo">\n    <ion-icon ios="ios-arrow-round-back" (click)="BackToAccueil()"></ion-icon>\n  </div>\n\n  <form (ngSubmit)="signup()" [formGroup]="simple_form" class="formRegis">\n    <ion-item class="Dam">\n      <ion-label floating >Nom</ion-label>\n      <ion-input type="text"  formControlName="nom" class="form-controll" required></ion-input>\n    </ion-item>\n\n    <ion-item class="Dam">\n      <ion-label floating >Prenom</ion-label>\n      <ion-input type="text"  formControlName="prenom" class="form-controll" required></ion-input>\n    </ion-item>\n\n    <ion-item class="Dam">\n      <ion-label floating >email</ion-label>\n			<ion-input type="text" formControlName="email"></ion-input>\n		</ion-item>\n\n		<ion-item class="Dam">\n      <ion-label floating >mot de passe</ion-label>\n			<ion-input type="password" formControlName="password"></ion-input>\n		</ion-item>\n\n	\n    <ion-item class="Dam">\n      <ion-label floating >nulero de rue</ion-label>\n      <ion-input type="number" formControlName="NbRue" class="form-controll" required></ion-input>\n    </ion-item>\n\n    <ion-item class="Dam">\n      <ion-label floating >rue</ion-label>\n      <ion-input type="text" formControlName="rue" class="form-controll" required></ion-input>\n    </ion-item>\n\n    <ion-item class="Dam">\n      <ion-label floating >code postal</ion-label>\n      <ion-input type="number" formControlName="postal" class="form-controll" required></ion-input>\n    </ion-item>\n\n    <ion-item class="Dam">\n      <ion-label floating >city</ion-label>\n      <ion-input type="text" formControlName="city" class="form-controll" required></ion-input>\n    </ion-item>\n\n  </form>\n  <button ion-button class="sweetybutton" [disabled]="!simple_form.valid" (click)="add(simple_form.value)" type="submit">Valider</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__providers_markers_markers__["a" /* MarkersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__providers_markers_markers__["a" /* MarkersProvider */]) === "function" && _j || Object])
    ], RegisterPage);
    return RegisterPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.loginViaFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function (authData) {
            console.log(authData);
            _this.loading.dismiss().then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            });
        }, function (error) {
            _this.loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
        });
        this.loading = this.loadingCtrl.create();
        this.loading.present();
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.openSignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/login/login.html"*/'<ion-content padding class="no-scroll">\n  \n  <div text-center class="HeadInsc">\n    <h1>Insciption</h1><br>\n    <h3><i>Rejoins la meute !</i></h3>\n  </div>\n\n  \n  <div class=\'o_section\'>\n\n    <button *ngIf="!initState" class="CoFacebook" (click)="loginViaFacebook()">\n      Se connecter avec <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n    <p>Rien ne sera publier sans ton accord</p>\n    <h2>\n      <span>OU</span>\n    </h2>\n\n    <button *ngIf="!initState" color=\'light\' class="CoFacebook bam" (click)="goToSignup()">\n      inscription OKAME <ion-icon ios="ios-flame" md="md-flame"></ion-icon>\n    </button>\n\n    <p>En t\'inscrivant via Facebook ou par inscription classique, tu accepte les <strong>Conditions d\'utilisations</strong> et la <strong>politique de confidetialité.</strong></p>\n\n    <h2>Déjà membres ?</h2>\n    <button *ngIf="!initState" class="CoFacebook bom" (click)="openSignin()">\n    Connecte-toi !\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, auth, fb) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.loginForm = fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])]
        });
    }
    SigninPage.prototype.login = function () {
        var _this = this;
        var data = this.loginForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); }, function (error) { return _this.loginError = error.message; });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/signin/signin.html"*/'<ion-content>\n  <form (ngSubmit)="login()" [formGroup]="loginForm">\n    <ion-list inset>\n\n      <ion-item class="Dam">\n        <ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n\n      <ion-item class="Dam">\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div padding-horizontal> \n      <div class="form-error">{{loginError}}</div>\n\n      <button ion-button class="sweetybutton" type="submit" [disabled]="!loginForm.valid">Log in</button>\n      <div class="login-footer">\n        <p>\n          <a href="#">Forgot password?</a>\n          If you\'re a new user, please sign up.\n        </p>\n      </div>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AvisPage = /** @class */ (function () {
    function AvisPage() {
    }
    AvisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avis',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/avis/avis.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Avis</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="main-container">\n    <div id="photoAvis" class="photoRepas">\n      <div id="preview">\n        <img src="../../assets/imgs/preview.png">\n      </div>\n    </div>\n    <div id="infoRepas">\n      <p style="font-family: MontserratMedium; font-size: 18px">Mexicain</p>\n      <p style="font-family: MontserratBold; font-size: 18px; color: #d80027;">5€</p>\n      <img src="../../assets/imgs/Etoile.png">\n    </div>\n    <div id="boxAvisUser">\n      <div id="boxPhotoUserCom">\n        <img src="../../assets/imgs/rodolfo-sanches-carvalho-425836-unsplash.png" id="photoUserAvis">\n      </div>\n      <p class="description">\n        <img src="../../assets/imgs/guillemetsGauche.png">\n        Lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\n        <img src="../../assets/imgs/guillementsDroit.png" id="guillemetDroit">\n      </p>\n      <div id="etoileAvis">\n        <img src="../../assets/imgs/Etoile.png">\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/avis/avis.html"*/
        })
    ], AvisPage);
    return AvisPage;
}());

//# sourceMappingURL=avis.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageriPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_request_request__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageriPage = /** @class */ (function () {
    function MessageriPage(navCtrl, navParams, requestservice, events, alertCtrl, chatservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.requestservice = requestservice;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.chatservice = chatservice;
    }
    MessageriPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.requestservice.getmyrequests();
        this.requestservice.getmyfriends();
        this.myfriends = [];
        this.events.subscribe('gotrequests', function () {
            _this.myrequests = [];
            _this.myrequests = _this.requestservice.userdetails;
        });
        this.events.subscribe('friends', function () {
            _this.myfriends = [];
            _this.myfriends = _this.requestservice.myfriends;
        });
    };
    MessageriPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe('gotrequests');
        this.events.unsubscribe('friends');
    };
    MessageriPage.prototype.addbuddy = function () {
        this.navCtrl.push('BuddiesPage');
    };
    MessageriPage.prototype.accept = function (item) {
        var _this = this;
        this.requestservice.acceptrequest(item).then(function () {
            var newalert = _this.alertCtrl.create({
                title: 'Friend added',
                subTitle: 'Tap on the friend to chat with him',
                buttons: ['Okay']
            });
            newalert.present();
        });
    };
    MessageriPage.prototype.ignore = function (item) {
        this.requestservice.deleterequest(item).then(function () {
        }).catch(function (err) {
            alert(err);
        });
    };
    MessageriPage.prototype.buddychat = function (buddy) {
        this.chatservice.initializebuddy(buddy);
        this.navCtrl.push('BuddychatPage');
    };
    MessageriPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messageri',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/messageri/messageri.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>messageri</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list no-lines>\n    <ion-list-header>\n      Requests\n    </ion-list-header>\n    <ion-item-sliding *ngFor="let item of myrequests">\n      <ion-item>\n        <ion-avatar item-left>\n          <img src="{{item.photoURL}}">\n        </ion-avatar>\n        <h4>{{item.displayName}}</h4>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="secondary" (click)="accept(item)">\n          <ion-icon name="checkmark"></ion-icon>\n          ADD\n        </button>\n        <button ion-button color="danger" (click)="ignore(item)">\n          <ion-icon name="trash"></ion-icon>\n          NOPE\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-list-header>\n      Friends\n    </ion-list-header>\n    <ion-item *ngFor="let item of myfriends" (click)="buddychat(item)">\n      <ion-avatar item-left>\n        <img src={{item.photoURL}}>\n      </ion-avatar>\n      <h3>{{item.displayName}}</h3>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/messageri/messageri.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_request_request__["a" /* RequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */]])
    ], MessageriPage);
    return MessageriPage;
}());

//# sourceMappingURL=messageri.js.map

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/entrance/entrance.module": [
		586,
		1
	],
	"../pages/messageri/messageri.module": [
		587,
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
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestsProvider = /** @class */ (function () {
    function RequestsProvider(userservice, events) {
        this.userservice = userservice;
        this.events = events;
        this.firereq = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/requests');
        this.firefriends = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/friends');
    }
    RequestsProvider.prototype.sendrequest = function (req) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firereq.child(req.recipient).push().set({
                sender: req.sender
            }).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.getmyrequests = function () {
        var _this = this;
        var allmyrequests;
        var myrequests = [];
        this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            allmyrequests = snapshot.val();
            myrequests = [];
            for (var i in allmyrequests) {
                myrequests.push(allmyrequests[i].sender);
            }
            _this.userservice.getallusers().then(function (res) {
                var allusers = res;
                _this.userdetails = [];
                for (var j in myrequests)
                    for (var key in allusers) {
                        if (myrequests[j] === allusers[key].uid) {
                            _this.userdetails.push(allusers[key]);
                        }
                    }
                _this.events.publish('gotrequests');
            });
        });
    };
    RequestsProvider.prototype.acceptrequest = function (buddy) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.myfriends = [];
            _this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).push().set({
                uid: buddy.uid
            }).then(function () {
                _this.firefriends.child(buddy.uid).push().set({
                    uid: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    _this.deleterequest(buddy).then(function () {
                        resolve(true);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.deleterequest = function (buddy) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).orderByChild('sender').equalTo(buddy.uid).once('value', function (snapshot) {
                var somekey;
                for (var key in snapshot.val())
                    somekey = key;
                _this.firereq.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).child(somekey).remove().then(function () {
                    resolve(true);
                });
            })
                .then(function () {
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    RequestsProvider.prototype.getmyfriends = function () {
        var _this = this;
        var friendsuid = [];
        this.firefriends.child(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid).on('value', function (snapshot) {
            var allfriends = snapshot.val();
            _this.myfriends = [];
            for (var i in allfriends)
                friendsuid.push(allfriends[i].uid);
            _this.userservice.getallusers().then(function (users) {
                _this.myfriends = [];
                for (var j in friendsuid)
                    for (var key in users) {
                        if (friendsuid[j] === users[key].uid) {
                            _this.myfriends.push(users[key]);
                        }
                    }
                _this.events.publish('friends');
            }).catch(function (err) {
                alert(err);
            });
        });
    };
    RequestsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], RequestsProvider);
    return RequestsProvider;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(afireauth) {
        this.afireauth = afireauth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users');
    }
    /*
    Adds a new user to the system.
    Called from - signup.ts
    Inputs - The new user object containing the email, password and displayName.
    Outputs - Promise.
    
     */
    UserProvider.prototype.adduser = function (newuser) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(function () {
                _this.afireauth.auth.currentUser.updateProfile({
                    displayName: newuser.displayName,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                }).then(function () {
                    _this.firedata.child(_this.afireauth.auth.currentUser.uid).set({
                        uid: _this.afireauth.auth.currentUser.uid,
                        displayName: newuser.displayName,
                        photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
                    }).then(function () {
                        resolve({ success: true });
                    }).catch(function (err) {
                        reject(err);
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /*
    For resetting the password of the user.
    Called from - passwordreset.ts
    Inputs - email of the user.
    Output - Promise.
    
     */
    UserProvider.prototype.passwordreset = function (email) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().sendPasswordResetEmail(email).then(function () {
                resolve({ success: true });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /*
    
    For updating the users collection and the firebase users list with
    the imageurl of the profile picture stored in firebase storage.
    Called from - profilepic.ts
    Inputs - Url of the image stored in firebase.
    OUtputs - Promise.
    
    */
    UserProvider.prototype.updateimage = function (imageurl) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: _this.afireauth.auth.currentUser.displayName,
                photoURL: imageurl
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users/' + __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: _this.afireauth.auth.currentUser.displayName,
                    photoURL: imageurl,
                    uid: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getuserdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.updatedisplayname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afireauth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afireauth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afireauth.auth.currentUser.photoURL,
                    uid: _this.afireauth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider.prototype.getallusers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.orderByChild('uid').once('value', function (snapshot) {
                var userdata = snapshot.val();
                var temparr = [];
                for (var key in userdata) {
                    temparr.push(userdata[key]);
                }
                resolve(temparr);
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatProvider = /** @class */ (function () {
    function ChatProvider(events) {
        this.events = events;
        this.firebuddychats = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/buddychats');
        this.buddymessages = [];
    }
    ChatProvider.prototype.initializebuddy = function (buddy) {
        this.buddy = buddy;
    };
    ChatProvider.prototype.addnewmessage = function (msg) {
        var _this = this;
        if (this.buddy) {
            var promise = new Promise(function (resolve, reject) {
                _this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(_this.buddy.uid).push({
                    sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                    message: msg,
                    timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
                }).then(function () {
                    _this.firebuddychats.child(_this.buddy.uid).child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).push().set({
                        sentby: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid,
                        message: msg,
                        timestamp: __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database.ServerValue.TIMESTAMP
                    }).then(function () {
                        resolve(true);
                    }).catch(function (err) {
                        reject(err);
                    });
                });
            });
            return promise;
        }
    };
    ChatProvider.prototype.getbuddymessages = function () {
        var _this = this;
        var temp;
        this.firebuddychats.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).child(this.buddy.uid).on('value', function (snapshot) {
            _this.buddymessages = [];
            temp = snapshot.val();
            for (var tempkey in temp) {
                _this.buddymessages.push(temp[tempkey]);
            }
            _this.events.publish('newmessage');
        });
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkersProvider = /** @class */ (function () {
    function MarkersProvider(afs) {
        this.afs = afs;
        console.log("Hello MarkersProvider Provider");
    }
    MarkersProvider.prototype.saveMarker = function (coords) {
        console.log('cest good');
        this.afs.collection("/markers")
            .add({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
    };
    MarkersProvider.prototype.getAllMarkers = function () {
        return this.afs.collection("markers").valueChanges();
    };
    MarkersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], MarkersProvider);
    return MarkersProvider;
    var _a;
}());

//# sourceMappingURL=markers.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = /** @class */ (function () {
    function FirebaseService(afs) {
        this.afs = afs;
    }
    FirebaseService.prototype.addUser = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('/users').add({
                nom: value.nom,
                prenom: value.prenom,
                mail: value.mail,
                password: value.password,
                NbRue: value.NbRue,
                rue: value.rue,
                postal: value.postal,
                city: value.city,
            })
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avis_avis__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepasPage = /** @class */ (function () {
    function RepasPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RepasPage.prototype.onGoToAvis = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__avis_avis__["a" /* AvisPage */]);
    };
    RepasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repas',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/repas/repas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Repas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="main-container">\n    <div class="photoUser">\n      <div class="messagerieBtn">\n        <img src="../../assets/imgs/question.png">\n      </div>\n      <img src="../../assets/imgs/philipe-cavalcante-571672-unsplash.png">\n      <div class="messagerieBtn2">\n      </div>\n    </div>\n    <h4>HANNAH</h4>\n    <img src="../../assets/imgs/Etoile.png" id="noteUser">\n    <img src="../../assets/imgs/stats.png">\n    <p class="description">\n      <img src="../../assets/imgs/guillemetsGauche.png">\n      Lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\n      <img src="../../assets/imgs/guillementsDroit.png" id="guillemetDroit">\n    </p>\n    <div id="infoRepas">\n      <p style="font-family: MontserratMedium; font-size: 18px;">Mexicain</p>\n      <p style="color: #d80027; font-family: MontserratBold">5€</p>\n      <p style="font-family: MontserratItalic; color: #d80027; font-size: 10px">Mardi 5 Octobre</p>\n    </div>\n    <div class="photoRepas"></div>\n    <p>VOIR LES AVIS ></p>\n    <button id="reserve">RESERVER UNE PLACE</button>\n    <div id="allergene">\n      <img src="../../assets/imgs/warning.png">\n      <p>Allergènes</p>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/repas/repas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RepasPage);
    return RepasPage;
}());

//# sourceMappingURL=repas.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagerPage = /** @class */ (function () {
    function MessagerPage() {
    }
    MessagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messager',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/messenger/messager.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Messager\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="main-container">\n    <h5>MESSAGERIE</h5>\n    <div class="boxPair">\n      <div class="boxMessagerPhoto">\n        <div class="borderMessagerPhoto">\n          <img src="../../assets/imgs/testImage.jpg">\n        </div>\n      </div>\n      <div class="boxMessagerText">\n        <div class="boxMessagerTextTitle">\n          <p style="font-family: MontserratSemiBold; font-size: 10px">ANNA</p>\n          <p style="font-family: MontserratLight; font-size: 8px">10:30PM</p>\n        </div>\n        <div class="boxMessagerTextContent">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/messenger/messager.html"*/
        })
    ], MessagerPage);
    return MessagerPage;
}());

//# sourceMappingURL=messager.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilPage = /** @class */ (function () {
    function ProfilPage() {
    }
    ProfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/profil/profil.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="container">\n    <div class="infoUser">\n      <div class="photoUserProfil">\n        <img src="../../assets/imgs/testImage.jpg">\n      </div>\n      <div class="textUser">\n        <h4>Nom</h4>\n        <p>23 ans, Rouen</p>\n        <img src="../../assets/imgs/statsWhite.png">\n        <p class="description">\n          <img src="../../assets/imgs/guillemetsGaucheBlanc.png">\n          Lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\n          <img src="../../assets/imgs/guillemetsDroitBlanc.png" id="guillemetDroit">\n        </p>\n      </div>\n    </div>\n    <div id="note">\n      <p>MA MOYENNE</p>\n      <img src="../../assets/imgs/Etoile.png">\n    </div>\n    <p>DERNIERE PARTICIPATION</p>\n    <ion-slides>\n      <ion-slide>\n        <div class="groupePart">\n          <div class="photoPart">\n            <div class="photoPartBox">\n              <img src="../../assets/imgs/testImage.jpg">\n            </div>\n          </div>\n          <div class="textPart">\n            <p>REPAS MEXICAIN</p>\n            <img src="../../assets/imgs/Etoile.png" class="imagePart">\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupePart">\n          <div class="photoPart">\n            <div class="photoPartBox">\n              <img src="../../assets/imgs/testImage.jpg">\n            </div>\n          </div>\n          <div class="textPart">\n            <p>REPAS MEXICAIN</p>\n            <img src="../../assets/imgs/Etoile.png" class="imagePart">\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupePart">\n          <div class="photoPart">\n            <div class="photoPartBox">\n              <img src="../../assets/imgs/testImage.jpg">\n            </div>\n          </div>\n          <div class="textPart">\n            <p>REPAS MEXICAIN</p>\n            <img src="../../assets/imgs/Etoile.png" class="imagePart">\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <p>DERNIER REPAS</p>\n    <ion-slides>\n      <ion-slide>\n        <div class="groupeDer">\n          <img src="../../assets/imgs/eiliv-sonas-aceron-776219-unsplash.jpg" class="photoRepas">\n          <div class="textPart">\n            <p>REPAS MEXICAIN</p>\n            <img src="../../assets/imgs/Etoile.png" class="imagePart">\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupeDer">\n          <img src="../../assets/imgs/eiliv-sonas-aceron-776219-unsplash.jpg" class="photoRepas">\n          <div class="textPart">\n            <p>REPAS MEXICAIN</p>\n            <img src="../../assets/imgs/Etoile.png" class="imagePart">\n          </div>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupeDer">\n          <img src="../../assets/imgs/eiliv-sonas-aceron-776219-unsplash.jpg" class="photoRepas">\n          <div class="textPart">\n            <p>REPAS MEXICAIN</p>\n            <img src="../../assets/imgs/Etoile.png" class="imagePart">\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/profil/profil.html"*/
        })
    ], ProfilPage);
    return ProfilPage;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPlusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilPlusPage = /** @class */ (function () {
    function ProfilPlusPage() {
    }
    ProfilPlusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilPlus',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/profilPlus/profilPlus.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ProfilPlus</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="main-container">\n    <div class="infoUser">\n      <div class="photoUserProfil">\n        <img src="../../assets/imgs/testImage.jpg">\n      </div>\n      <div class="textUser">\n        <h4>LEA</h4>\n        <p>23 ans, Rouen</p>\n        <img src="../../assets/imgs/statsWhite.png">\n        <p class="description">\n          <img src="../../assets/imgs/guillemetsGaucheBlanc.png">\n          Lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla\n          <img src="../../assets/imgs/guillemetsDroitBlanc.png" id="guillemetDroit">\n        </p>\n        <div id="borderProfil">\n          <p>MODIFIER LE PROFIL</p>\n        </div>\n      </div>\n    </div>\n    <div id="note">\n      <p>MA MOYENNE</p>\n      <img src="../../assets/imgs/Etoile.png">\n    </div>\n    <p>MES DERNIERS REPAS</p>\n    <ion-slides>\n      <ion-slide>\n        <div class="groupeFav">\n          <img src="../../assets/imgs/repasDone.png">\n          <img src="../../assets/imgs/repasDone.png">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupeFav">\n          <img src="../../assets/imgs/repasDone.png">\n          <img src="../../assets/imgs/repasDone.png">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupeFav">\n          <img src="../../assets/imgs/repasDone.png">\n          <img src="../../assets/imgs/repasDone.png">\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <p>REPAS FAVORIS</p>\n    <ion-slides>\n      <ion-slide>\n        <div class="groupeFav">\n          <img src="../../assets/imgs/repasFav.png">\n          <img src="../../assets/imgs/repasFav.png">\n          <img src="../../assets/imgs/repasFav.png">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupeFav">\n          <img src="../../assets/imgs/repasFav.png">\n          <img src="../../assets/imgs/repasFav.png">\n          <img src="../../assets/imgs/repasFav.png">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div class="groupeFav">\n          <img src="../../assets/imgs/repasFav.png">\n          <img src="../../assets/imgs/repasFav.png">\n          <img src="../../assets/imgs/repasFav.png">\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <p id="addRepas">AJOUTER REPAS</p>\n    <div id="croix">\n      <img src="../../assets/imgs/croix.png">\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/profilPlus/profilPlus.html"*/
        })
    ], ProfilPlusPage);
    return ProfilPlusPage;
}());

//# sourceMappingURL=profilPlus.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the EntrancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EntrancePage = /** @class */ (function () {
    function EntrancePage(navCtrl, load, navParams) {
        this.navCtrl = navCtrl;
        this.load = load;
        this.navParams = navParams;
    }
    EntrancePage.prototype.ionViewDidLoad = function () {
        this.presentRouteLoader('Please Wait..');
    };
    EntrancePage.prototype.presentRouteLoader = function (message) {
        var _this = this;
        var loading = this.load.create({
            content: message
        });
        loading.present();
        var myTimeout = setTimeout(function () {
            loading.dismiss();
            _this.navCtrl.setRoot('SignupPage');
            clearTimeout(myTimeout);
        }, 1000);
    };
    EntrancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrance',template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/pages/entrance/entrance.html"*/'<!--\n  Generated template for the EntrancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/pages/entrance/entrance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EntrancePage);
    return EntrancePage;
}());

//# sourceMappingURL=entrance.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_firebase_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environment_environment__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_entrance_entrance__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_markers_markers__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_avis_avis__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_messenger_messager__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_profil_profil__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profilPlus_profilPlus__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_repas_repas__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_chat_chat__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_request_request__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_user_user__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_messageri_messageri__ = __webpack_require__(200);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_entrance_entrance__["a" /* EntrancePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_avis_avis__["a" /* AvisPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_messenger_messager__["a" /* MessagerPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profilPlus_profilPlus__["a" /* ProfilPlusPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_repas_repas__["a" /* RepasPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_messageri_messageri__["a" /* MessageriPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environment_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/entrance/entrance.module#EntrancePageModule', name: 'EntrancePage', segment: 'entrance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messageri/messageri.module#MessageriPageModule', name: 'MessageriPage', segment: 'messageri', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_entrance_entrance__["a" /* EntrancePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_avis_avis__["a" /* AvisPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_messenger_messager__["a" /* MessagerPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_profil_profil__["a" /* ProfilPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profilPlus_profilPlus__["a" /* ProfilPlusPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_repas_repas__["a" /* RepasPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_messageri_messageri__["a" /* MessageriPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_21__providers_markers_markers__["a" /* MarkersProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_28__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_request_request__["a" /* RequestsProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_user_user__["a" /* UserProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_avis_avis__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_repas_repas__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_messenger_messager__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profil_profil__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profilPlus_profilPlus__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_messageri_messageri__ = __webpack_require__(200);
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
    function MyApp(platform, statusBar, splashScreen, auth, menu) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Avis', component: __WEBPACK_IMPORTED_MODULE_9__pages_avis_avis__["a" /* AvisPage */] },
            { title: 'Repas', component: __WEBPACK_IMPORTED_MODULE_10__pages_repas_repas__["a" /* RepasPage */] },
            { title: 'messager', component: __WEBPACK_IMPORTED_MODULE_11__pages_messenger_messager__["a" /* MessagerPage */] },
            { title: 'profil', component: __WEBPACK_IMPORTED_MODULE_12__pages_profil_profil__["a" /* ProfilPage */] },
            { title: 'profilplus', component: __WEBPACK_IMPORTED_MODULE_13__pages_profilPlus_profilPlus__["a" /* ProfilPlusPage */] },
            { title: 'messageri', component: __WEBPACK_IMPORTED_MODULE_14__pages_messageri_messageri__["a" /* MessageriPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.auth.afAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
            }
        }, function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.login = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/deas/Desktop/OKAME-APP/src/app/app.html"*/'<ion-menu [content]="content" >\n  <ion-header >\n    <ion-toolbar class="menuBG">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/deas/Desktop/OKAME-APP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC-kJOMDCyychOCPhw1nJgu6wawfp0rYbs",
        authDomain: "okame-26254.firebaseapp.com",
        databaseURL: "https://okame-26254.firebaseio.com",
        projectId: "okame-26254",
        storageBucket: "okame-26254.appspot.com",
        messagingSenderId: "71426874483"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, facebook) {
        var _this = this;
        this.afAuth = afAuth;
        this.facebook = facebook;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.facebook.login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) { console.log(error); });
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map