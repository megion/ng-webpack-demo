(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["demoPages"] = factory(require("angular"));
	else
		root["demoPages"] = factory(root["angular"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__2703__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DemoPagesModule": () => (/* binding */ DemoPagesModule)
});

// EXTERNAL MODULE: external {"commonjs":"angular","commonjs2":"angular","amd":"angular","root":"angular"}
var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_ = __webpack_require__(2703);
var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_);
// EXTERNAL MODULE: ../../node_modules/.pnpm/angular-ui-router@1.0.30_angular@1.5.11/node_modules/angular-ui-router/lib-esm/index.js + 12 modules
var lib_esm = __webpack_require__(5674);
;// CONCATENATED MODULE: ./app/demo-pages/file-list/file-list.html
// Module
var code = "<h1>File list</h1> <ng-form name=\"filesForm\"> <div class=\"form-base\"> <div class=\"form-base__body\"> <div class=\"form-group form-base__form-group\"> <label class=\"col-md-2 control-label form-base__control-label\">Файлы</label> <div class=\"col-md-10\"> <file-list files=\"$ctrl.files\"></file-list> </div> </div> </div> </div> </ng-form> ";
// Exports
/* harmony default export */ const file_list = (code);
;// CONCATENATED MODULE: ./app/demo-pages/file-list/file-list.ts
class FileListDemoPageController {
    constructor($scope, $q) {
        'ngInject';
        this.$scope = $scope;
        this.$q = $q;
        this.files = [];
    }
    $onInit() {
        this.files = [{ fileName: 'file1' }, { fileName: 'file2' }];
    }
}
FileListDemoPageController.selector = 'FileListDemoPageController';

;// CONCATENATED MODULE: ./app/demo-pages/main/main.html
// Module
var main_code = "<h3>Demo pages</h3> <ul> <li> <a ui-sref=\"fileList\"> File list </a> </li> </ul> ";
// Exports
/* harmony default export */ const main = (main_code);
;// CONCATENATED MODULE: ./app/demo-pages/main/main.ts
class MainDemoPageController {
    constructor($scope) {
        'ngInject';
        this.$scope = $scope;
    }
    $onInit() { }
    $onDestroy() { }
}
MainDemoPageController.selector = 'MainDemoPageController';

// EXTERNAL MODULE: ./app/index.ts + 7 modules
var app = __webpack_require__(9161);
;// CONCATENATED MODULE: ./app/demo-pages/index.ts







function routeConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
        url: '/',
        views: {
            content: {
                controller: MainDemoPageController.selector,
                template: main,
                controllerAs: '$ctrl',
            },
        },
        data: {
            pageTitle: 'Demo pages',
        },
    })
        .state('fileList', {
        url: '/file-list',
        views: {
            content: {
                controller: FileListDemoPageController.selector,
                template: file_list,
                controllerAs: '$ctrl',
            },
        },
        data: {
            pageTitle: 'FileList',
        },
    });
}
const DemoPagesModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure.demo.pages', [
    app.OldPureModule.name,
    'ui.router',
    'ui.router.state',
])
    .config(routeConfig)
    .controller(MainDemoPageController.selector, MainDemoPageController)
    .controller(FileListDemoPageController.selector, FileListDemoPageController);


/***/ }),

/***/ 9161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OldPureModule": () => (/* binding */ OldPureModule)
});

// EXTERNAL MODULE: external {"commonjs":"angular","commonjs2":"angular","amd":"angular","root":"angular"}
var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_ = __webpack_require__(2703);
var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_);
;// CONCATENATED MODULE: ./app/components/file-list/file-list.html
// Module
var code = "<div class=\"file-list\"> <ul> <li class=\"file-list__file-item\" ng-repeat=\"file in $ctrl.fileList track by file.fileName\"> <span>{{$ctrl.getFileNameHtmlTooltip(file)}}</span> </li> </ul> </div> ";
// Exports
/* harmony default export */ const file_list = (code);
;// CONCATENATED MODULE: ./app/components/file-list/file-list.ts

/**
 */
class FileListComponent {
    constructor() {
        this.bindings = {
            files: '=?', // list of files
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
    $onInit() { }
    getFileNameHtmlTooltip(file) {
        const fileNameTooltip = this.fileStoreService.getFileNameTooltip(file);
        return fileNameTooltip;
    }
}

;// CONCATENATED MODULE: ./app/components/file-list/index.ts


const FileListComponentModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure.fileList.component', [])
    .component(FileListComponent.selector, new FileListComponent());

;// CONCATENATED MODULE: ./app/components/hero-detail.component.ts
const heroDetail = {
    bindings: {
        hero: '<',
        deleted: '&',
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
    },
};

;// CONCATENATED MODULE: ./app/components/index.ts



const OldPureComponentsModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure.components', [FileListComponentModule.name])
    .component('heroDetail', heroDetail);

;// CONCATENATED MODULE: ./app/services/FileStoreService.ts
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

;// CONCATENATED MODULE: ./app/services/index.ts


const OldPureServiceModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure.service', [])
    .service('fileStoreService', FileStoreService);

;// CONCATENATED MODULE: ./app/index.ts


// import { MainController } from './MainController'

const OldPureModule = external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default().module('oldPure', [
    OldPureComponentsModule.name,
    OldPureServiceModule.name,
]);
// export * from './api/model/models'


/***/ }),

/***/ 2703:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__2703__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			"demoPages": 0,
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__(5475)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});