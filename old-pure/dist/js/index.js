(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("angular"));
	else
		root["index"] = factory(root["angular"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__703__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 703:
/***/ ((module) => {

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

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});