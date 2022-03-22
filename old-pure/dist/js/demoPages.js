(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-ui-router"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-ui-router"], factory);
	else if(typeof exports === 'object')
		exports["demoPages"] = factory(require("angular"), require("angular-ui-router"));
	else
		root["demoPages"] = factory(root["angular"], root[undefined]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__703__, __WEBPACK_EXTERNAL_MODULE__795__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OldPureModule": () => (/* binding */ OldPureModule)
});

// EXTERNAL MODULE: external {"commonjs":"angular","commonjs2":"angular","amd":"angular","root":"angular"}
var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_ = __webpack_require__(703);
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

/***/ 703:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__703__;

/***/ }),

/***/ 795:
/***/ ((module) => {

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DemoPagesModule": () => (/* binding */ DemoPagesModule)
});

// EXTERNAL MODULE: external {"commonjs":"angular","commonjs2":"angular","amd":"angular","root":"angular"}
var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_ = __webpack_require__(703);
var external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_angular_commonjs2_angular_amd_angular_root_angular_);
// EXTERNAL MODULE: external {"commonjs":"angular-ui-router","commonjs2":"angular-ui-router","amd":"angular-ui-router"}
var external_commonjs_angular_ui_router_commonjs2_angular_ui_router_amd_angular_ui_router_ = __webpack_require__(795);
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
var app = __webpack_require__(161);
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

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});