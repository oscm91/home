/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 43551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORM_SET_STEP": () => (/* binding */ FORM_SET_STEP),
/* harmony export */   "FORM_UPDATE": () => (/* binding */ FORM_UPDATE),
/* harmony export */   "FORM_UPDATE_INFO": () => (/* binding */ FORM_UPDATE_INFO)
/* harmony export */ });
// form Actions
const FORM_UPDATE = '@@FORM/UPDATE';
const FORM_UPDATE_INFO = '@@FORM/UPDATE/INFO';
const FORM_SET_STEP = '@@FORM/SET/STEP';

/***/ }),

/***/ 43231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43551);

const initialState = {
  wizard: {
    stepNumber: 0,
    values: {}
  },
  schema: [{
    index: 0,
    name: 'user',
    sectionTitle: 'Paso 0',
    formSchema: {}
  }, {
    index: 1,
    name: 'user-name',
    sectionTitle: 'Paso 1',
    formSchema: {
      name: {
        type: 'text',
        label: 'Nombre y Apellidos',
        required: true
      }
    }
  }, {
    index: 2,
    name: 'user-email',
    sectionTitle: 'Paso 2',
    formSchema: {
      email: {
        type: "email",
        label: "Correo",
        required: true
      }
    }
  }, {
    index: 3,
    name: 'user-address',
    sectionTitle: 'Paso 3',
    formSchema: {
      address: {
        type: "address",
        label: "Dirección del apartamento",
        required: true
      }
    }
  }, {
    index: 4,
    name: 'user-floor',
    sectionTitle: 'Paso 4',
    formSchema: {
      floor: {
        type: "number",
        label: "Piso",
        required: true
      }
    }
  }, {
    index: 5,
    name: 'user-apartment',
    sectionTitle: 'Paso 5',
    formSchema: {
      bbq: {
        type: "checkbox",
        label: "Zona BBQ",
        required: false
      },
      room: {
        type: "checkbox",
        label: "Salón Comunal",
        required: false
      },
      park: {
        type: "checkbox",
        label: "Parque de Juegos",
        required: false
      }
    }
  }, {
    index: 6,
    name: 'user-parking-lot',
    sectionTitle: 'Paso 6',
    formSchema: {
      parqueadero: {
        type: "select",
        label: "Tipo de parqueadero",
        required: true,
        options: [{
          label: "Cubierto",
          value: "cubierto"
        }, {
          label: "Descubierto",
          value: "descubierto"
        }, {
          label: "No aplica",
          value: "noaplica"
        }]
      }
    }
  }, {
    index: 7,
    name: 'user-sale-amount',
    sectionTitle: 'Paso 7',
    formSchema: {
      amount: {
        type: "number",
        label: "Monto de venta",
        required: true
      }
    }
  }, {
    index: 8,
    name: 'user-photo',
    sectionTitle: 'Paso 8',
    formSchema: {
      photo: {
        type: "image",
        label: "Foto del inmueble",
        accept: "image/*",
        required: true
      }
    }
  }, {
    index: 9,
    name: 'user-lift',
    sectionTitle: 'Paso 9',
    formSchema: {
      ascensor: {
        type: "select",
        label: "Tipo de ascensor",
        required: true,
        options: [{
          label: "Ascensor",
          value: "ascensor"
        }, {
          label: "Sin ascensor",
          value: "ascensor"
        }]
      }
    }
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.FORM_UPDATE_INFO:
      {
        return Object.assign({}, state, {
          wizard: Object.assign({}, state.wizard, {
            stepNumber: payload.stepNumber,
            values: Object.assign({}, state.wizard.values, payload.values)
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.FORM_SET_STEP:
      {
        return Object.assign({}, state, {
          wizard: Object.assign({}, state.wizard, {
            stepNumber: payload
          })
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__.FORM_UPDATE:
      {
        return Object.assign({}, payload);
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ 82245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90758);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18717);
/* harmony import */ var _products_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43231);



const asyncReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  products: _products_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
});
(0,comlink__WEBPACK_IMPORTED_MODULE_2__.expose)(asyncReducer);

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
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_redux_es_redux_js-node_modules_comlink_dist_esm_comlink_mjs"], () => (__webpack_require__(82245)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "e9bce03188cd156b" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"libs_store_src_lib_reducers_workerReducer_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_redux_es_redux_js-node_modules_comlink_dist_esm_comlink_mjs").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;