(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/common"), require("@angular/common/http"), require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/router"), require("@angular/upgrade/static"), require("rxjs"), require("rxjs/operators"), require("zone.js/plugins/zone-error"), require("angular"), require("angular-ui-router"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/common", "@angular/common/http", "@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/router", "@angular/upgrade/static", "rxjs", "rxjs/operators", "zone.js/plugins/zone-error", "angular", "angular-ui-router"], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory(require("@angular/common"), require("@angular/common/http"), require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/router"), require("@angular/upgrade/static"), require("rxjs"), require("rxjs/operators"), require("zone.js/plugins/zone-error"), require("angular"), require("angular-ui-router"));
	else
		root["main"] = factory(root["@angular/common"], root["@angular/common/http"], root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"], root["@angular/router"], root["@angular/upgrade/static"], root["rxjs"], root["rxjs/operators"], root["zone.js/plugins/zone-error"], root["angular"], root[undefined]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__848__, __WEBPACK_EXTERNAL_MODULE__983__, __WEBPACK_EXTERNAL_MODULE__900__, __WEBPACK_EXTERNAL_MODULE__161__, __WEBPACK_EXTERNAL_MODULE__46__, __WEBPACK_EXTERNAL_MODULE__882__, __WEBPACK_EXTERNAL_MODULE__688__, __WEBPACK_EXTERNAL_MODULE__832__, __WEBPACK_EXTERNAL_MODULE__597__, __WEBPACK_EXTERNAL_MODULE__501__, __WEBPACK_EXTERNAL_MODULE__703__, __WEBPACK_EXTERNAL_MODULE__795__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 656:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScopeProvider = void 0;
exports.ScopeProvider = {
    deps: ['$injector'],
    provide: '$scope',
    useFactory: (injector) => injector.get('$rootScope').$new(),
};


/***/ }),

/***/ 480:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRoutingModule = exports.routes = void 0;
const tslib_1 = __webpack_require__(198);
const router_1 = __webpack_require__(882);
const about_component_1 = __webpack_require__(483);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(882));
exports.routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent },
    {
        path: 'heroes',
        loadChildren: () => Promise.resolve().then(() => (0, tslib_1.__importStar)(__webpack_require__(466))).then((m) => m.HeroModule),
    },
];
class AppRoutingModule {
}
exports.AppRoutingModule = AppRoutingModule;
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[router_1.RouterModule.forRoot(exports.routes)], router_1.RouterModule] });


/***/ }),

/***/ 953:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppComponent = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(161));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(848));
const i3 = (0, tslib_1.__importStar)(__webpack_require__(676));
const i4 = (0, tslib_1.__importStar)(__webpack_require__(994));
const i5 = (0, tslib_1.__importStar)(__webpack_require__(882));
function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", i_r2, "/", ctx_r0.files.length, ". ", file_r1.fileName, "");
} }
// import { FileDetail } from '../old/services/filstore'
class AppComponent {
    constructor() {
        this.title = 'angular-demo';
        this.message = 'Hoo Ah!';
        this.files = [{ fileName: 'file1' }, { fileName: 'file2' }];
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 4, consts: [["role", "banner", 1, "toolbar"], ["role", "main", 1, "content"], ["type", "text", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["routerLink", "/dashboard"], ["routerLink", "/heroes"], ["routerLink", "/about"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1");
        i0.ɵɵtext(2, "Welcome");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(3, "div", 1)(4, "span");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "h1");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 2);
        i0.ɵɵlistener("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) { return ctx.message = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "ul");
        i0.ɵɵtemplate(10, AppComponent_li_10_Template, 3, 3, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "app-banner")(12, "app-welcome");
        i0.ɵɵelementStart(13, "nav")(14, "a", 4);
        i0.ɵɵtext(15, "Dashboard");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "a", 5);
        i0.ɵɵtext(17, "Heroes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "a", 6);
        i0.ɵɵtext(19, "About");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(20, "router-outlet");
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("", ctx.title, " app is running!");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.message);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.files);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgForOf, i3.BannerComponent, i4.WelcomeComponent, i5.RouterLinkWithHref, i5.RouterOutlet], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #0086b3;\n}"] });


/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(198);
__webpack_require__(703);
const platform_browser_1 = __webpack_require__(46);
const angular_in_memory_web_api_1 = __webpack_require__(679);
const app_routing_module_1 = __webpack_require__(480);
const app_component_1 = __webpack_require__(953);
const forms_1 = __webpack_require__(161);
const shared_module_1 = __webpack_require__(867);
const dashboard_module_1 = __webpack_require__(154);
const http_1 = __webpack_require__(983);
const hero_service_1 = __webpack_require__(56);
const twain_service_1 = __webpack_require__(262);
const user_service_1 = __webpack_require__(416);
const in_memory_data_service_1 = __webpack_require__(922);
const common_1 = __webpack_require__(848);
const static_1 = __webpack_require__(688);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(688));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(679));
class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap(appRef) {
        console.log('ngDoBootstrap');
        // appRef.bootstrap(AppComponent) // Or some other component
        // setAngularJSGlobal(angular)
        // this.upgrade.bootstrap(document.body, ['hcs.common2.demo.pages'], {
        //   strictDi: false,
        // })
    }
}
exports.AppModule = AppModule;
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(i0.ɵɵinject(i1.UpgradeModule)); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        hero_service_1.HeroService,
        twain_service_1.TwainService,
        user_service_1.UserService,
        { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
        // { provide: PlatformLocation, useExisting: platformBrowser },
    ], imports: [[
            static_1.UpgradeModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            dashboard_module_1.DashboardModule,
            app_routing_module_1.AppRoutingModule,
            shared_module_1.SharedModule,
            http_1.HttpClientModule,
            angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, {
                dataEncapsulation: false,
            }),
        ]] });


/***/ }),

/***/ 483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AboutComponent = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(734));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(94));
class AboutComponent {
}
exports.AboutComponent = AboutComponent;
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AboutComponent, selectors: [["ng-component"]], decls: 5, vars: 0, consts: [["highlight", "skyblue"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1, "About");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "h3");
        i0.ɵɵtext(3, "Quote of the day:");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "twain-quote");
    } }, directives: [i1.HighlightDirective, i2.TwainComponent], encapsulation: 2 });


/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BannerComponent = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
class BannerComponent {
    constructor() {
        this.title = 'Test Tour of Heroes';
    }
    set name(nameText) {
        console.log(nameText);
        this.nameText = nameText;
    }
}
exports.BannerComponent = BannerComponent;
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BannerComponent, selectors: [["app-banner"]], inputs: { name: "name" }, decls: 4, vars: 2, consts: [[2, "color", "red"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1");
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "span", 0);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", ctx.title, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.nameText);
    } }, styles: ["h1[_ngcontent-%COMP%] { color: green; font-size: 350%}"] });


/***/ }),

/***/ 94:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwainComponent = void 0;
const tslib_1 = __webpack_require__(198);
const rxjs_1 = __webpack_require__(832);
const operators_1 = __webpack_require__(597);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(262));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(848));
function TwainComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.errorMessage);
} }
class TwainComponent {
    constructor(twainService) {
        this.twainService = twainService;
    }
    ngOnInit() {
        this.getQuote();
    }
    getQuote() {
        this.errorMessage = '';
        this.quote = this.twainService.getQuote().pipe((0, operators_1.startWith)('...'), (0, operators_1.catchError)((err) => {
            setTimeout(() => (this.errorMessage = err.message || err.toString()));
            return (0, rxjs_1.of)('...');
        }));
    }
}
exports.TwainComponent = TwainComponent;
TwainComponent.ɵfac = function TwainComponent_Factory(t) { return new (t || TwainComponent)(i0.ɵɵdirectiveInject(i1.TwainService)); };
TwainComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TwainComponent, selectors: [["twain-quote"]], decls: 7, vars: 4, consts: [[1, "twain"], [3, "click"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function TwainComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p", 0)(1, "i");
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "button", 1);
        i0.ɵɵlistener("click", function TwainComponent_Template_button_click_4_listener() { return ctx.getQuote(); });
        i0.ɵɵtext(5, "Next quote");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, TwainComponent_p_6_Template, 2, 1, "p", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, ctx.quote));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.errorMessage);
    } }, directives: [i2.NgIf], pipes: [i2.AsyncPipe], styles: [".twain[_ngcontent-%COMP%] {\n        font-style: italic;\n      }\n      .error[_ngcontent-%COMP%] {\n        color: red;\n      }"] });


/***/ }),

/***/ 940:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QUOTES = void 0;
exports.QUOTES = [
    'Always do right. This will gratify some people and astonish the rest.',
    'I have never let my schooling interfere with my education.',
    "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.",
    'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    "If you tell the truth, you don't have to remember anything.",
    'Clothes make the man. Naked people have little or no influence on society.',
    "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
    "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
    'The man who does not read good books has no advantage over the man who cannot read them.',
    'Get your facts first, and then you can distort them as much as you please.',
].map((q, i) => ({ id: i + 1, quote: q }));


/***/ }),

/***/ 262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwainService = void 0;
const tslib_1 = __webpack_require__(198);
const rxjs_1 = __webpack_require__(832);
const operators_1 = __webpack_require__(597);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(983));
class TwainService {
    constructor(http) {
        this.http = http;
        this.nextId = 1;
    }
    getQuote() {
        return new rxjs_1.Observable((observer) => observer.next(this.nextId++)).pipe((0, operators_1.switchMap)((id) => this.http.get(`api/quotes/${id}`)), (0, operators_1.map)((q) => q.quote), (0, operators_1.retryWhen)((errors) => errors.pipe((0, operators_1.switchMap)((error) => {
            if (error.status === 404) {
                this.nextId = 1;
                return (0, rxjs_1.of)(null);
            }
            return (0, rxjs_1.throwError)(() => 'Cannot get Twain quotes from the server');
        }), (0, operators_1.take)(2), (0, operators_1.concatMap)(() => (0, rxjs_1.throwError)(() => 'There are no Twain quotes')))));
    }
}
exports.TwainService = TwainService;
TwainService.ɵfac = function TwainService_Factory(t) { return new (t || TwainService)(i0.ɵɵinject(i1.HttpClient)); };
TwainService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TwainService, factory: TwainService.ɵfac });


/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WelcomeComponent = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(416));
class WelcomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.welcome = '';
        this.files = [{ fileName: 'file1' }, { fileName: 'file2' }];
    }
    ngOnInit() {
        this.welcome = this.userService.isLoggedIn
            ? 'Welcome, ' + this.userService.user.name
            : 'Please log in.';
    }
}
exports.WelcomeComponent = WelcomeComponent;
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(i0.ɵɵdirectiveInject(i1.UserService)); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 3, vars: 1, consts: [[1, "welcome"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3", 0)(1, "i");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.welcome);
    } }, encapsulation: 2 });


/***/ }),

/***/ 987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardHeroComponent = void 0;
const tslib_1 = __webpack_require__(198);
const core_1 = __webpack_require__(900);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(848));
// import style from './dashboard-hero.component.less'
class DashboardHeroComponent {
    constructor() {
        this.selected = new core_1.EventEmitter();
    }
    click() {
        this.selected.emit(this.hero);
    }
}
exports.DashboardHeroComponent = DashboardHeroComponent;
DashboardHeroComponent.ɵfac = function DashboardHeroComponent_Factory(t) { return new (t || DashboardHeroComponent)(); };
DashboardHeroComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardHeroComponent, selectors: [["dashboard-hero"]], inputs: { hero: "hero" }, outputs: { selected: "selected" }, decls: 3, vars: 3, consts: [[1, "hero", 3, "click"]], template: function DashboardHeroComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function DashboardHeroComponent_Template_div_click_0_listener() { return ctx.click(); });
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "uppercase");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx.hero.name), " ");
    } }, pipes: [i1.UpperCasePipe], styles: [".hero[_ngcontent-%COMP%] {\n  padding: 20px;\n  position: relative;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n}\n.hero[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%] {\n    font-size: 10px;\n    max-height: 75px;\n  }\n}\n@media (max-width: 1024px) {\n  .hero[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}"] });


/***/ }),

/***/ 521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardComponent = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(882));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(56));
const i3 = (0, tslib_1.__importStar)(__webpack_require__(734));
const i4 = (0, tslib_1.__importStar)(__webpack_require__(848));
const i5 = (0, tslib_1.__importStar)(__webpack_require__(987));
function DashboardComponent_dashboard_hero_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "dashboard-hero", 3);
    i0.ɵɵlistener("selected", function DashboardComponent_dashboard_hero_3_Template_dashboard_hero_selected_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.gotoDetail($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    i0.ɵɵproperty("hero", hero_r1);
} }
// import htmlTemplate from './dashboard.component.html'
// import style from './dashboard.component.less'
class DashboardComponent {
    constructor(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    ngOnInit() {
        this.heroService
            .getHeroes()
            .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
    }
    gotoDetail(hero) {
        const url = `/heroes/${hero.id}`;
        this.router.navigateByUrl(url);
    }
    get title() {
        const cnt = this.heroes.length;
        return cnt === 0
            ? 'No Heroes'
            : cnt === 1
                ? 'Top Hero'
                : `Top ${cnt} Heroes`;
    }
}
exports.DashboardComponent = DashboardComponent;
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.HeroService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 2, consts: [["highlight", ""], [1, "grid", "grid-pad"], ["class", "col-1-4", 3, "hero", "selected", 4, "ngFor", "ngForOf"], [1, "col-1-4", 3, "hero", "selected"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, DashboardComponent_dashboard_hero_3_Template, 1, 1, "dashboard-hero", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.heroes);
    } }, directives: [i3.HighlightDirective, i4.NgForOf, i5.DashboardHeroComponent], styles: ["[class*='col-'][_ngcontent-%COMP%] {\n  float: left;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::after, *[_ngcontent-%COMP%]::before {\n  box-sizing: border-box;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\n[class*='col-'][_ngcontent-%COMP%] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\n.grid[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.col-1-4[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 1024px) {\n  .grid[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}"] });


/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DashboardModule = void 0;
const tslib_1 = __webpack_require__(198);
const router_1 = __webpack_require__(882);
const shared_module_1 = __webpack_require__(867);
const dashboard_component_1 = __webpack_require__(521);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(882));
const routes = [{ path: 'dashboard', component: dashboard_component_1.DashboardComponent }];
class DashboardModule {
}
exports.DashboardModule = DashboardModule;
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[shared_module_1.SharedModule, router_1.RouterModule.forChild(routes)]] });


/***/ }),

/***/ 518:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroDetailComponent = void 0;
const tslib_1 = __webpack_require__(198);
const hero_detail_service_1 = __webpack_require__(487);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(487));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(882));
const i3 = (0, tslib_1.__importStar)(__webpack_require__(848));
const i4 = (0, tslib_1.__importStar)(__webpack_require__(161));
const i5 = (0, tslib_1.__importStar)(__webpack_require__(890));
const i6 = (0, tslib_1.__importStar)(__webpack_require__(297));
function HeroDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "h2")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Details ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div")(7, "label");
    i0.ɵɵtext(8, "id: ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div")(11, "label", 2);
    i0.ɵɵtext(12, "name: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 3);
    i0.ɵɵlistener("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.hero.name = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "button", 4);
    i0.ɵɵlistener("click", function HeroDetailComponent_div_0_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.save(); });
    i0.ɵɵtext(15, "Save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 4);
    i0.ɵɵlistener("click", function HeroDetailComponent_div_0_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.cancel(); });
    i0.ɵɵtext(17, "Cancel");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, ctx_r0.hero.name));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.hero.id);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.hero.name);
} }
// import htmlTemplate from './hero-detail.component.html'
// import style from './hero-detail.component.less'
class HeroDetailComponent {
    constructor(heroDetailService, route, router) {
        this.heroDetailService = heroDetailService;
        this.route = route;
        this.router = router;
        this.files = [{ fileName: 'file1' }, { fileName: 'file2' }];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((pmap) => this.getHero(pmap.get('id')));
    }
    save() {
        this.heroDetailService.saveHero(this.hero).subscribe(() => this.gotoList());
    }
    cancel() {
        this.gotoList();
    }
    gotoList() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    getHero(id) {
        if (!id) {
            this.hero = { id: 0, name: '' };
            return;
        }
        this.heroDetailService.getHero(id).subscribe((hero) => {
            if (hero) {
                this.hero = hero;
            }
            else {
                this.gotoList();
            }
        });
    }
}
exports.HeroDetailComponent = HeroDetailComponent;
HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) { return new (t || HeroDetailComponent)(i0.ɵɵdirectiveInject(i1.HeroDetailService), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(i2.Router)); };
HeroDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeroDetailComponent, selectors: [["app-hero-detail"]], features: [i0.ɵɵProvidersFeature([hero_detail_service_1.HeroDetailService])], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "files"], ["for", "name"], ["id", "name", "placeholder", "name", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function HeroDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeroDetailComponent_div_0_Template, 18, 5, "div", 0);
        i0.ɵɵelement(1, "file-list", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hero);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("files", ctx.files);
    } }, directives: [i3.NgIf, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.FileListDirective], pipes: [i6.TitleCasePipe], styles: ["label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 3em;\n  margin: 0.5em 0;\n  color: #607d8b;\n  font-weight: bold;\n}\ninput[_ngcontent-%COMP%] {\n  height: 2em;\n  font-size: 1em;\n  padding-left: 0.4em;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-family: Arial, sans-serif;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}"] });


/***/ }),

/***/ 487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroDetailService = void 0;
const tslib_1 = __webpack_require__(198);
const operators_1 = __webpack_require__(597);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(56));
class HeroDetailService {
    constructor(heroService) {
        this.heroService = heroService;
    }
    getHero(id) {
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return this.heroService.getHero(id).pipe((0, operators_1.map)((hero) => {
            return hero ? Object.assign({}, hero) : null; // clone or null
        }));
    }
    saveHero(hero) {
        return this.heroService.updateHero(hero);
    }
}
exports.HeroDetailService = HeroDetailService;
HeroDetailService.ɵfac = function HeroDetailService_Factory(t) { return new (t || HeroDetailService)(i0.ɵɵinject(i1.HeroService)); };
HeroDetailService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HeroDetailService, factory: HeroDetailService.ɵfac });


/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroListComponent = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(882));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(56));
const i3 = (0, tslib_1.__importStar)(__webpack_require__(734));
const i4 = (0, tslib_1.__importStar)(__webpack_require__(848));
function HeroListComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 3);
    i0.ɵɵlistener("click", function HeroListComponent_li_3_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const hero_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSelect(hero_r1); });
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", hero_r1 === ctx_r0.selectedHero);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(hero_r1.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", hero_r1.name, " ");
} }
// import htmlTemplate from './hero-list.component.html'
// import style from './hero-list.component.less'
class HeroListComponent {
    constructor(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = this.heroService.getHeroes();
    }
    onSelect(hero) {
        this.selectedHero = hero;
        this.router.navigate(['../heroes', this.selectedHero.id]);
    }
}
exports.HeroListComponent = HeroListComponent;
HeroListComponent.ɵfac = function HeroListComponent_Factory(t) { return new (t || HeroListComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.HeroService)); };
HeroListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeroListComponent, selectors: [["app-heroes"]], decls: 5, vars: 3, consts: [["highlight", "gold"], [1, "heroes"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "badge"]], template: function HeroListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1, "My Heroes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul", 1);
        i0.ɵɵtemplate(3, HeroListComponent_li_3_Template, 4, 4, "li", 2);
        i0.ɵɵpipe(4, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 1, ctx.heroes));
    } }, directives: [i3.HighlightDirective, i4.NgForOf], pipes: [i4.AsyncPipe], styles: [".selected[_ngcontent-%COMP%] {\n  background-color: #cfd8dc !important;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.heroes[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #bbd8dc !important;\n  color: white;\n}\n.heroes[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3px;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}"] });


/***/ }),

/***/ 207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroRoutingModule = exports.routedComponents = void 0;
const tslib_1 = __webpack_require__(198);
const router_1 = __webpack_require__(882);
const hero_detail_component_1 = __webpack_require__(518);
const hero_list_component_1 = __webpack_require__(550);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(882));
const routes = [
    { path: '', component: hero_list_component_1.HeroListComponent },
    { path: ':id', component: hero_detail_component_1.HeroDetailComponent },
];
exports.routedComponents = [hero_detail_component_1.HeroDetailComponent, hero_list_component_1.HeroListComponent];
class HeroRoutingModule {
}
exports.HeroRoutingModule = HeroRoutingModule;
HeroRoutingModule.ɵfac = function HeroRoutingModule_Factory(t) { return new (t || HeroRoutingModule)(); };
HeroRoutingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HeroRoutingModule });
HeroRoutingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule] });


/***/ }),

/***/ 466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroModule = void 0;
const tslib_1 = __webpack_require__(198);
const forms_1 = __webpack_require__(161);
const shared_module_1 = __webpack_require__(867);
const hero_routing_module_1 = __webpack_require__(207);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(518));
const i2 = (0, tslib_1.__importStar)(__webpack_require__(550));
class HeroModule {
}
exports.HeroModule = HeroModule;
HeroModule.ɵfac = function HeroModule_Factory(t) { return new (t || HeroModule)(); };
HeroModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HeroModule });
HeroModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[shared_module_1.SharedModule, hero_routing_module_1.HeroRoutingModule, forms_1.FormsModule]] });


/***/ }),

/***/ 922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InMemoryDataService = void 0;
const twain_data_1 = __webpack_require__(940);
const maxQuotes = Infinity;
class InMemoryDataService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' },
        ];
        return { heroes, quotes: twain_data_1.QUOTES.slice(0, maxQuotes) };
    }
}
exports.InMemoryDataService = InMemoryDataService;


/***/ }),

/***/ 56:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeroService = void 0;
const tslib_1 = __webpack_require__(198);
const http_1 = __webpack_require__(983);
const operators_1 = __webpack_require__(597);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(983));
const httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }),
};
class HeroService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes';
    }
    getHeroes() {
        return this.http
            .get(this.heroesUrl)
            .pipe((0, operators_1.catchError)(this.handleError('getHeroes')));
    }
    getHero(id) {
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        const url = `${this.heroesUrl}/?id=${id}`;
        return this.http.get(url).pipe((0, operators_1.map)((heroes) => heroes[0]), (0, operators_1.catchError)(this.handleError(`getHero id=${id}`)));
    }
    addHero(hero) {
        return this.http
            .post(this.heroesUrl, hero, httpOptions)
            .pipe((0, operators_1.catchError)(this.handleError('addHero')));
    }
    deleteHero(hero) {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url, httpOptions)
            .pipe((0, operators_1.catchError)(this.handleError('deleteHero')));
    }
    updateHero(hero) {
        return this.http
            .put(this.heroesUrl, hero, httpOptions)
            .pipe((0, operators_1.catchError)(this.handleError('updateHero')));
    }
    handleError(operation = 'operation') {
        return (error) => {
            const message = error.error instanceof ErrorEvent
                ? error.error.message
                : `server returned code ${error.status} with body "${error.error}"`;
            throw new Error(`${operation} failed: ${message}`);
        };
    }
}
exports.HeroService = HeroService;
HeroService.ɵfac = function HeroService_Factory(t) { return new (t || HeroService)(i0.ɵɵinject(i1.HttpClient)); };
HeroService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HeroService, factory: HeroService.ɵfac });


/***/ }),

/***/ 416:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
class UserService {
    constructor() {
        this.isLoggedIn = true;
        this.user = { name: 'Sam Spade' };
    }
}
exports.UserService = UserService;
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });


/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HighlightDirective = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
class HighlightDirective {
    constructor(el) {
        this.el = el;
        this.defaultColor = 'rgb(211, 211, 211)'; // lightgray
        this.bgColor = '';
        el.nativeElement.style.customProperty = true;
    }
    ngOnChanges() {
        this.el.nativeElement.style.backgroundColor =
            this.bgColor || this.defaultColor;
    }
}
exports.HighlightDirective = HighlightDirective;
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
HighlightDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HighlightDirective, selectors: [["", "highlight", ""]], inputs: { bgColor: ["highlight", "bgColor"] }, features: [i0.ɵɵNgOnChangesFeature] });


/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const tslib_1 = __webpack_require__(198);
const common_1 = __webpack_require__(848);
const forms_1 = __webpack_require__(161);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
class SharedModule {
}
exports.SharedModule = SharedModule;
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[common_1.CommonModule], common_1.CommonModule,
        forms_1.FormsModule] });


/***/ }),

/***/ 297:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TitleCasePipe = void 0;
const tslib_1 = __webpack_require__(198);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
class TitleCasePipe {
    transform(input) {
        return input.length === 0
            ? ''
            : input.replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.substr(1).toLowerCase());
    }
}
exports.TitleCasePipe = TitleCasePipe;
TitleCasePipe.ɵfac = function TitleCasePipe_Factory(t) { return new (t || TitleCasePipe)(); };
TitleCasePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "titlecase", type: TitleCasePipe, pure: true });


/***/ }),

/***/ 890:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileListDirective = void 0;
const tslib_1 = __webpack_require__(198);
const static_1 = __webpack_require__(688);
const ajc_upgraded_providers_1 = __webpack_require__(656);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
class FileListDirective extends static_1.UpgradeComponent {
    constructor(elementRef, injector) {
        super('fileList', elementRef, injector);
    }
}
exports.FileListDirective = FileListDirective;
FileListDirective.ɵfac = function FileListDirective_Factory(t) { return new (t || FileListDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Injector)); };
FileListDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FileListDirective, selectors: [["file-list"]], inputs: { files: "files" }, features: [i0.ɵɵProvidersFeature([ajc_upgraded_providers_1.ScopeProvider]), i0.ɵɵInheritDefinitionFeature] });


/***/ }),

/***/ 578:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
__webpack_require__(501); // Included with Angular CLI.


/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(198);
const __NgCli_bootstrap_1 = (0, tslib_1.__importStar)(__webpack_require__(46));
// import '@angular/compiler'
const angular_1 = (0, tslib_1.__importDefault)(__webpack_require__(703));
__webpack_require__(795);
const core_1 = __webpack_require__(900);
const static_1 = __webpack_require__(688);
const app_module_1 = __webpack_require__(402);
const environment_1 = __webpack_require__(578);
__webpack_require__(277);
const old_pure_1 = __webpack_require__(152);
console.log('production: ', environment_1.environment.production);
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
__NgCli_bootstrap_1.platformBrowser()
    .bootstrapModule(app_module_1.AppModule)
    .then((platformRef) => {
    console.log('Starting angularjs app');
    (0, static_1.setAngularJSGlobal)(angular_1.default);
    const upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.body, [old_pure_1.OldPureModule.name], {
        strictDi: false,
    });
    // const router = platformRef.injector.get(Router) as Router
    // router.initialNavigation()
})
    .catch((err) => console.error(err));


/***/ }),

/***/ 152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(703));else {}
})(self, function (__WEBPACK_EXTERNAL_MODULE__703__) {
  return (
    /******/
    (() => {
      // webpackBootstrap

      /******/
      "use strict";
      /******/

      var __webpack_modules__ = {
        /***/
        703:
        /***/
        module => {
          module.exports = __WEBPACK_EXTERNAL_MODULE__703__;
          /***/
        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_1028__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1028__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/


      (() => {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __nested_webpack_require_1028__.n = module => {
          /******/
          var getter = module && module.__esModule ?
          /******/
          () => module['default'] :
          /******/
          () => module;
          /******/

          __nested_webpack_require_1028__.d(getter, {
            a: getter
          });
          /******/


          return getter;
          /******/
        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/define property getters */

      /******/


      (() => {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_1028__.d = (exports, definition) => {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_1028__.o(definition, key) && !__nested_webpack_require_1028__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/


      (() => {
        /******/
        __nested_webpack_require_1028__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/

      })();
      /******/

      /******/

      /* webpack/runtime/make namespace object */

      /******/


      (() => {
        /******/
        // define __esModule on exports

        /******/
        __nested_webpack_require_1028__.r = exports => {
          /******/
          if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: 'Module'
            });
            /******/
          }
          /******/


          Object.defineProperty(exports, '__esModule', {
            value: true
          });
          /******/
        };
        /******/

      })();
      /******/

      /************************************************************************/


      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

      (() => {
        // ESM COMPAT FLAG
        __nested_webpack_require_1028__.r(__webpack_exports__); // EXPORTS


        __nested_webpack_require_1028__.d(__webpack_exports__, {
          "OldPureModule": () =>
          /* binding */
          OldPureModule
        }); // EXTERNAL MODULE: external {"commonjs":"angular","commonjs2":"angular","amd":"angular","root":"angular"}


        var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_ = __nested_webpack_require_1028__(703);

        var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default = /*#__PURE__*/__nested_webpack_require_1028__.n(external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_);

        ; // CONCATENATED MODULE: ./app/components/file-list/file-list.html
        // Module

        var code = "<div class=\"file-list\"> <ul> <li class=\"file-list__file-item\" ng-repeat=\"file in $ctrl.fileList track by file.fileName\"> <span>{{$ctrl.getFileNameHtmlTooltip(file)}}</span> </li> </ul> </div> "; // Exports

        /* harmony default export */

        const file_list = code;
        ; // CONCATENATED MODULE: ./app/components/file-list/file-list.ts

        /**
         */

        class FileListComponent {
          constructor() {
            this.bindings = {
              files: '=?' // list of files
              // onDelete: '&?',

            };
            this.controller = FileListComponentController;
            this.template = file_list;
          }

        }

        FileListComponent.selector = 'fileList';

        class FileListComponentController {
          // onDelete: ({ $event: FileDeleteEvent }) => any = null
          constructor($q, fileStoreService) {
            'ngInject';

            this.$q = $q;
            this.fileStoreService = fileStoreService;
            this.fileList = [];
          }

          set files(fileList) {
            console.log(fileList);
            this.fileList = fileList;
          }

          $onInit() {}

          getFileNameHtmlTooltip(file) {
            const fileNameTooltip = this.fileStoreService.getFileNameTooltip(file);
            return fileNameTooltip;
          }

        }

        ; // CONCATENATED MODULE: ./app/components/file-list/index.ts

        const FileListComponentModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure.fileList.component', []).component(FileListComponent.selector, new FileListComponent());
        ; // CONCATENATED MODULE: ./app/components/hero-detail.component.ts

        const heroDetail = {
          bindings: {
            hero: '<',
            deleted: '&'
          },
          template: `
    <h2>{{$ctrl.hero.name}} details!</h2>
    <div><label>id: </label>{{$ctrl.hero.id}}</div>
    <button type="button" ng-click="$ctrl.onDelete()">Delete</button>
  `,
          controller: function HeroDetailController() {
            this.onDelete = () => {
              this.deleted(this.hero);
            };
          }
        };
        ; // CONCATENATED MODULE: ./app/components/index.ts

        const OldPureComponentsModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure.components', [FileListComponentModule.name]).component('heroDetail', heroDetail);
        ; // CONCATENATED MODULE: ./app/services/FileStoreService.ts

        /**
         * Filestore service
         */

        class FileStoreService {
          constructor($http) {
            'ngInject';

            this.$http = $http;
          }

          getFileNameTooltip(file) {
            return `fileName: ${file.fileName}`;
          }

        }

        ; // CONCATENATED MODULE: ./app/services/index.ts

        const OldPureServiceModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure.service', []).service('fileStoreService', FileStoreService);
        ; // CONCATENATED MODULE: ./app/index.ts
        // import { MainController } from './MainController'

        const OldPureModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure', ['ui.router', 'ui.router.state', OldPureComponentsModule.name, OldPureServiceModule.name]); // export * from './api/model/models'
      })();
      /******/


      return __webpack_exports__;
      /******/
    })()
  );
});

/***/ }),

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 848:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__848__;

/***/ }),

/***/ 983:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__983__;

/***/ }),

/***/ 900:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__900__;

/***/ }),

/***/ 161:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__161__;

/***/ }),

/***/ 46:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__46__;

/***/ }),

/***/ 882:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__882__;

/***/ }),

/***/ 688:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__688__;

/***/ }),

/***/ 832:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__832__;

/***/ }),

/***/ 597:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__597__;

/***/ }),

/***/ 501:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__501__;

/***/ }),

/***/ 703:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__703__;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__795__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__(810)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});