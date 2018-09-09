webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(33);
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
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.play = true;
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/configuracoes/configuracoes.html"*/'<div id="confi">\n  <audio id="demo" autoplay loop src="../../assets/musicas/tema.mp3"></audio>\n  <div id="bb">\n  <button id="play" onclick="document.getElementById(\'demo\').play()">Play</button>\n  <button id="pause" onclick="document.getElementById(\'demo\').pause()">Stop</button>\n  <br>\n  <button id="mais" onclick="document.getElementById(\'demo\').volume+=0.1">+</button>\n  <button id="menos" onclick="document.getElementById(\'demo\').volume-=0.1">-</button>\n  </div>\n  <button id="vv" (click)="voltar()"><<</button>\n  </div>\n'/*ion-inline-end:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/configuracoes/configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(33);
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
 * Generated class for the CreditosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditosPage = /** @class */ (function () {
    function CreditosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditosPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    CreditosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditosPage');
    };
    CreditosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-creditos',template:/*ion-inline-start:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/creditos/creditos.html"*/'<div id="credit">\n  <div id="josi">\n  Produzido por:\n  <marquee direction="down">Josineide Silva Soares</marquee>\n  </div>\n  <button id="vv" (click)="voltar()"><<</button>\n</div>\n'/*ion-inline-end:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/creditos/creditos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CreditosPage);
    return CreditosPage;
}());

//# sourceMappingURL=creditos.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JogarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(33);
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
 * Generated class for the JogarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JogarPage = /** @class */ (function () {
    function JogarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pontos = 0;
        this.nm = 0;
        this.msg = '';
        this.numeros = ['1', '2', '3', '4', '5', '6', '8', '10'];
        this.pergunta1 = {
            id: 1,
            pergunta: 'Quantas horcruxes o Voldemort fez?',
            resposta: '7'
        };
        this.aleatorias = ['Belatrix', 'Gina', 'Luna', 'Lily'];
        this.sortear = this.aleatorias.forEach(function (tent) {
            console.log('tent');
        });
        this.pergunta2 = {
            id: 2,
            pergunta: 'Qual o nome da mãe do Harry?',
            resposta: 'Lilian'
        };
        this.pergunta3 = {
            id: 3,
            pergunta: 'Quantos Filhos a senhora Weasley teve?',
            resposta: '7'
        };
        this.perguntas = this.pergunta1.pergunta;
        this.respostas = this.pergunta1.resposta;
        this.acertou = true;
        this.errou = true;
    }
    JogarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JogarPage');
    };
    JogarPage.prototype.acertar = function () {
        this.acertou = !this.acertou;
        this.resultado = 'Parabéns você acertou!';
        this.msg = 'Parabéns você acertou!';
        this.nm += 1;
        this.pontos += 10;
    };
    JogarPage.prototype.errar = function () {
        this.errou = !this.errou;
        this.resultado = 'Que pena você errou...';
        this.msg = 'Que pena você errou...';
    };
    JogarPage.prototype.proxima = function () {
        if (this.nm === 1) {
            this.perguntas = this.pergunta2.pergunta;
            this.respostas = this.pergunta2.resposta;
            this.msg = '';
            this.sortearRespostas(this.aleatorias);
        }
        else if (this.nm === 2) {
            this.perguntas = this.pergunta3.pergunta;
            this.respostas = this.pergunta3.resposta;
            this.sortearNumeros(this.numeros);
        }
        this.msg = '';
    };
    JogarPage.prototype.sortearRespostas = function (array) {
        this.m = array.lenght;
        while (this.m) {
            this.i = Math.floor(Math.random() * this.m--);
            this.t = array[this.m];
            array[this.m] = array[this.i];
            array[this.i] = this.t;
        }
        this.a = array[0];
        this.b = this.pergunta2.resposta;
        this.c = array[1];
        this.d = array[2];
    };
    JogarPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    JogarPage.prototype.sortearNumeros = function (array) {
        this.m = array.lenght;
        while (this.m) {
            this.i = Math.floor(Math.random() * this.m--);
            this.t = array[this.m];
            array[this.m] = array[this.i];
            array[this.i] = this.t;
        }
        this.a = this.pergunta1.resposta;
        this.b = array[0];
        this.c = array[1];
        this.d = array[2];
    };
    JogarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jogar',template:/*ion-inline-start:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/jogar/jogar.html"*/'<div id="geral">\n  <div id="cab">\n  <h2 id="pergunta" [textContent]="perguntas"></h2>\n  </div>\n  <input style="top:100px;position: absolute" [(ngModel)]="pontos">\n  <br>\n  <div id="balao">\n          <div id = "msg" [textContent]="msg"></div>\n      <img src="../../assets/imagens/balao.png"/>\n  </div>\n  <div id="voldemort">\n      <img src="../../assets/imagens/voldemort.png"/>\n  </div>\n  <div id="t">\n  <button (click)="acertar()" id="a" [textContent]="a"></button>\n  <br>\n  <button (click)="errar()" [textContent]="b" id="b"></button>\n  <br>\n  <button (click)="errar()" [textContent]="c" id="c"></button>\n  <br>\n  <button (click)="errar()" [textContent]="d" id="d"></button>\n  </div>\n  <br>\n  <br>\n  <button id="voltar" (click)="voltar()"><<</button>\n  <button (click)="proxima()" id="avancar">>></button>\n  </div>\n  '/*ion-inline-end:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/jogar/jogar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], JogarPage);
    return JogarPage;
}());

//# sourceMappingURL=jogar.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/configuracoes/configuracoes.module": [
		272,
		3
	],
	"../pages/creditos/creditos.module": [
		275,
		2
	],
	"../pages/jogar/jogar.module": [
		273,
		1
	],
	"../pages/menu/menu.module": [
		274,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_creditos_creditos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_configuracoes_configuracoes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_jogar_jogar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(271);
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
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_jogar_jogar__["a" /* JogarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_creditos_creditos__["a" /* CreditosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jogar/jogar.module#JogarPageModule', name: 'JogarPage', segment: 'jogar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/creditos/creditos.module#CreditosPageModule', name: 'CreditosPage', segment: 'creditos', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_jogar_jogar__["a" /* JogarPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_creditos_creditos__["a" /* CreditosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(33);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes_configuracoes__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__creditos_creditos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jogar_jogar__ = __webpack_require__(102);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.play = true;
        this.menu = false;
        this.config = true;
        this.credit = true;
        this.song = {
            id: 1,
            title: 'harry potter',
            artist: 'wb',
            url: '../../assents/musicas/tema.mp3'
        };
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.jogar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jogar_jogar__["a" /* JogarPage */]);
    };
    MenuPage.prototype.configurar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configuracoes_configuracoes__["a" /* ConfiguracoesPage */]);
    };
    MenuPage.prototype.creditos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__creditos_creditos__["a" /* CreditosPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/menu/menu.html"*/'<div id="tudo">\n  <div id="cab">\n  <h2>Quiz de Harry Potter</h2>\n  </div>\n  <div id="harry">\n  </div>\n  <div id="botoes">\n  <br>\n  <button ion-button (click)="jogar()" id="jogar">JOGAR</button>\n  <br>\n  <button ion-button (click)="configurar()" id="config">CONFIGURAÇÕES</button>\n  <br>\n  <button ion-button (click)="creditos()" id="creditos">CRÉDITOS</button>\n  </div>\n  </div>\n'/*ion-inline-end:"/home/noob1402/Documentos/Ionic/quiz-harry-potter/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map