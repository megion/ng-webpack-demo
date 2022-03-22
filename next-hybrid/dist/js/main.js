(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/common"), require("@angular/common/http"), require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/router"), require("@angular/upgrade/static"), require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/common", "@angular/common/http", "@angular/core", "@angular/forms", "@angular/platform-browser", "@angular/router", "@angular/upgrade/static", "angular"], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory(require("@angular/common"), require("@angular/common/http"), require("@angular/core"), require("@angular/forms"), require("@angular/platform-browser"), require("@angular/router"), require("@angular/upgrade/static"), require("angular"));
	else
		root["main"] = factory(root["@angular/common"], root["@angular/common/http"], root["@angular/core"], root["@angular/forms"], root["@angular/platform-browser"], root["@angular/router"], root["@angular/upgrade/static"], root["angular"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__848__, __WEBPACK_EXTERNAL_MODULE__983__, __WEBPACK_EXTERNAL_MODULE__900__, __WEBPACK_EXTERNAL_MODULE__161__, __WEBPACK_EXTERNAL_MODULE__46__, __WEBPACK_EXTERNAL_MODULE__882__, __WEBPACK_EXTERNAL_MODULE__688__, __WEBPACK_EXTERNAL_MODULE__703__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 480:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppRoutingModule = exports.routes = void 0;
const tslib_1 = __webpack_require__(198);
const router_1 = __webpack_require__(882);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(882));
// import { AboutComponent } from './components/about/about.component'
exports.routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    // { path: 'about', component: AboutComponent },
    // {
    //   path: 'heroes',
    //   loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
    // },
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
const i2 = (0, tslib_1.__importStar)(__webpack_require__(882));
class AppComponent {
    constructor() {
        this.title = 'angular-demo';
        this.message = 'Hoo Ah!';
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 3, consts: [["role", "banner", 1, "toolbar"], ["role", "main", 1, "content"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelement(9, "router-outlet");
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("", ctx.title, " app is running!");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.message);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.RouterOutlet], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #0086b3;\n}"] });


/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(198);
// import 'angular'
const angular_1 = (0, tslib_1.__importDefault)(__webpack_require__(703));
const platform_browser_1 = __webpack_require__(46);
const app_routing_module_1 = __webpack_require__(480);
const app_component_1 = __webpack_require__(953);
const forms_1 = __webpack_require__(161);
const http_1 = __webpack_require__(983);
const common_1 = __webpack_require__(848);
const static_1 = __webpack_require__(688);
const old_pure_1 = __webpack_require__(152);
const i0 = (0, tslib_1.__importStar)(__webpack_require__(900));
const i1 = (0, tslib_1.__importStar)(__webpack_require__(688));
class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap(appRef) {
        console.log('ngDoBootstrap');
        appRef.bootstrap(app_component_1.AppComponent); // Or some other component
        (0, static_1.setAngularJSGlobal)(angular_1.default);
        this.upgrade.bootstrap(document.body, [old_pure_1.OldPureModule.name], {
            strictDi: false,
        });
    }
}
exports.AppModule = AppModule;
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(i0.ɵɵinject(i1.UpgradeModule)); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
        // { provide: PlatformLocation, useExisting: platformBrowser },
    ], imports: [[
            static_1.UpgradeModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule,
        ]] });


/***/ }),

/***/ 474:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: true,
};


/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(198);
const __NgCli_bootstrap_1 = (0, tslib_1.__importStar)(__webpack_require__(46));
// import '@angular/compiler'
// import angular from 'angular'
const core_1 = __webpack_require__(900);
// import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static'
const app_module_1 = __webpack_require__(402);
const environment_1 = __webpack_require__(474);
__webpack_require__(277);
// import { DemoPagesModule } from './old/demo-pages'
console.log('production: ', environment_1.environment.production);
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
__NgCli_bootstrap_1.platformBrowser()
    .bootstrapModule(app_module_1.AppModule)
    .then((platformRef) => {
    // console.log('Starting angularjs app')
    // setAngularJSGlobal(angular)
    // const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule
    // upgrade.bootstrap(document.body, [DemoPagesModule.name], {
    //   strictDi: false,
    // })
    // const router = platformRef.injector.get(Router) as Router
    // router.initialNavigation()
})
    .catch((err) => console.error(err));


/***/ }),

/***/ 152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory(__webpack_require__(703));else {}
})(self, function (__WEBPACK_EXTERNAL_MODULE__2703__) {
  return (
    /******/
    (() => {
      // webpackBootstrap

      /******/
      "use strict";
      /******/

      var __webpack_modules__ = {
        /***/
        2703:
        /***/
        module => {
          module.exports = __WEBPACK_EXTERNAL_MODULE__2703__;
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

      function __nested_webpack_require_1031__(moduleId) {
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

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1031__);
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
        __nested_webpack_require_1031__.n = module => {
          /******/
          var getter = module && module.__esModule ?
          /******/
          () => module['default'] :
          /******/
          () => module;
          /******/

          __nested_webpack_require_1031__.d(getter, {
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
        __nested_webpack_require_1031__.d = (exports, definition) => {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_1031__.o(definition, key) && !__nested_webpack_require_1031__.o(exports, key)) {
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
        __nested_webpack_require_1031__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
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
        __nested_webpack_require_1031__.r = exports => {
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
        __nested_webpack_require_1031__.r(__webpack_exports__); // EXPORTS


        __nested_webpack_require_1031__.d(__webpack_exports__, {
          "OldPureModule": () =>
          /* binding */
          OldPureModule
        }); // EXTERNAL MODULE: external {"commonjs":"angular","commonjs2":"angular","amd":"angular","root":"angular"}


        var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_ = __nested_webpack_require_1031__(2703);

        var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default = /*#__PURE__*/__nested_webpack_require_1031__.n(external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_);

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

        const OldPureModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure', [OldPureComponentsModule.name, OldPureServiceModule.name]); // export * from './api/model/models'
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

/***/ 703:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__703__;

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