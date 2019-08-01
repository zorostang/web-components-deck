/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"aa10528f68bca57f2535","1":"5cd893c9dbaf02cc389e","2":"55a18b21f8237d9df8d1","3":"8b7f9d31805274e6b6da","4":"e8baede04395597dfdb1","5":"3e6e1d4b160908b7ff3d","6":"223607e0e8050bfdd60b","7":"83f6fe29dff6a0055ba8","8":"0302e0a4d90e5700b9d5","9":"cafb6a3f6e4ddbd3e143","10":"9482b45944cabeb91d23","11":"637c5e538330d122dc28","12":"61db85951880b83c65ab","13":"55d3671a4192ffc52d4d","14":"6c2e41ea1edadcfdcfd4","15":"cb04b9147c02e210f48c","16":"62762637da7b333eb106","17":"5c5ba5e74f4c5bee7d74","18":"a28a157757ccbc0e97e3","19":"fd8dc8dcd1f1030e5446","20":"ad5b9f377e0af0e65735","21":"f2aec4f8130587881fea","22":"cec10a58ff6b9c77f777","23":"32b7b599a11584b0d6e1","24":"2869d268723fc1dcfbe6","25":"d50a5e183e4e9772de78","26":"61e3d7457619f7b84f00","27":"89973142ee4289cb2e7b","28":"449973da6a3bf16387a6","29":"8a6046bf5dbc02012e80","30":"a7edc7194403e705a22e","31":"4735c41ddad21def7bd2","32":"a62231dc69786053aaeb","33":"f87cca185e7a5d4c36f3","34":"97e252d38db9af212bef","35":"530ae1dbb023ec7510bd","36":"fc524f20fe598160a6ea","37":"19cad86dcd17158360dc","38":"8657d88ac07c610c945d","39":"69916702d364f861aead","40":"0bc2ee56d36a94454d18","41":"8ed9e19d7915dbf8a61b","42":"00bd40e43658f6aa6c86","43":"e8d7e01fb4d486a71e2c","44":"3721a81f76d9b8e9e0a6","45":"e0d51fcb0885e56a39f6","46":"5aaf84a662e880c364c7","47":"0e2bf61f1176deb35054","48":"231755b2f48f4cba19af","49":"ed2e50ddc4d68df0b6ec","50":"91cd17bda2853b2f26ab","51":"4775405b0601dfb6d8cf","52":"703551f0751cdd2f4dbb","53":"7fba519f318f49c13448","54":"6aeee304f27ceece6d12","55":"b7b60e5b87813cec5088","56":"6411e8dc928b71524c37","57":"b420a4fc16ed8af499f8","58":"331a98270fc9c4041f69","59":"d5363d25efdde289594a","60":"02ae110bae41bb2ae7fa","61":"795827901024adc288b5","62":"4aceee9d59191308dded","63":"2f13a768b1c04870e160","64":"7feaadd01290d2f64eb9","65":"43862ab5d0612b035a1d","66":"d11aba0bdbf635bead8d","67":"aea3cfe91838061a4e56","68":"0ecfd5da4057bde9e5ef","69":"8b288e7a6b56e02d603a","70":"e9ad959f9c3a23c555c8","71":"de2321f34c05febb3b5b","72":"cb7c838ba537578dc2e0","73":"66c2a5bab9693824e27f","74":"d3db7c1578feb93e69f2","75":"dfd765512e5d99a73bf1","76":"a1913bbe8f9a7a48b6c7","77":"af75ac16c22b3ae3062b","78":"b5dc52aca2b4763fcc82","79":"d712d2319f4617414964","80":"f836c58cdab0ab719a22","81":"fed0bca40aad6ed045da","82":"bd0f79ca59cc9394f16f","83":"dc17093d0daa9964e484","84":"69529fcbd77d9ef4ee41","85":"dd5490673dd663b3bb9c","86":"703f48eaf110544cbc10","87":"714c0bd283420be299ad","88":"6f0fde2be6f6bd6e4672","89":"088e60bd8be0a4d30f33","90":"285d4db46b937e0e9ee4","91":"47237a85c20b3238c135","92":"0c780212caec01fc93f2","93":"3d09daa2246699cf9e9e","94":"9c7e3cb34b1c89c1d2c9","95":"7b6f9f9b3c83dd85719f","96":"05b6945614b9920edabd","97":"8f3f88a748c03990b7ae","98":"fafe80592e9c1fa5654e","99":"2fe46e5540b59a88e25c","100":"5cde5e9b3c7e5e80c5c4","101":"736d4878e6686c3762e1","102":"82d1228195b94562264a","103":"d1d602667b87132c8f06","104":"e23c215a5e8237ce9762","105":"9d6635b7564ce9c628aa","106":"d9e9f82f071943244509","107":"fdb2d556506034773c61","108":"d837363585e0916a2c76","109":"2e4edce0658c8b05c4d4","110":"f13e0fe3e05729f86d75","111":"23c36c919b85d0e023ed","112":"03f02306863ff2a9308e","113":"b8229442bcefda161d4d","114":"9edc168c51a9dd70784d","115":"abaa56e5641a4a90d59d","116":"9d50d75135993cf7f1e8","117":"74400318af330b8ccf67","118":"b2611abb407b4125fe7e","119":"fbc227f780ccab86a31a","120":"40763d12f798aa39ffdc","121":"d098265c34debbcce624","122":"82ec109e52c31e6f96b5","123":"3d124fa0988f942b85ee","124":"3d48a309c2fac8f195e6","125":"5b71bc768fe09d880da7","126":"5b1d7ec62b2e93999a34","127":"960953040d5e5b7851e8","128":"58ae6bf90ce89a6de31d","129":"d015f001a1321a647f0b","130":"8d9d6e7fb9eceeb72df6","131":"56b97531f1650e15ba1a","132":"f9bcfb0c39e3a8b633ff","133":"3db0b10780a0302bca79","134":"e897e1fa78bb9b506b54","135":"2c6334db05408cf22d90","136":"2434217c255b9adecc63","137":"c3914eb479b9df8d7fb2","138":"56fa875449b790d7a163","139":"d19be64529bb05ff7f58","140":"5a60d74b5de94d55aa16","141":"512f81fcbf285c35f1f1","142":"7f64a24ca576512b70fc","143":"5945b75b0f5ff0a54507","144":"eddc899f98082ef5dfc3","145":"e8e20c9526ae218eac68","146":"ce3bb281e7558c5a2f38","147":"075f379edaeb3223e17f","148":"5945ade1fe0c51e2bf82","149":"9a5fd3df2f14c76c0b8d","150":"92e41eda4416159e7265","151":"92f9a6b4bc049002b71d","152":"c7647823eb4a69554f70","153":"7aa514f609d936a8f7f8","154":"6d16f198fbe93192ec16"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@deckdeckgo/charts/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/charts/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deckgo-bar-chart_3.entry.js": [
		"./node_modules/@deckdeckgo/charts/dist/esm/legacy/deckgo-bar-chart_3.entry.js",
		79
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@deckdeckgo/charts/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/chunk-c379be54.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/charts/dist/esm/legacy/chunk-c379be54.js ***!
  \***************************************************************************/
/*! exports provided: a, b, g, h, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var NAMESPACE = 'deckdeckgo-charts';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsConstructibleStylesheets = (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return __webpack_require__("./node_modules/@deckdeckgo/charts/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var styles = new Map();
var cssVarShim = win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue) { return function (cb) {
    // queue dom reads
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        plt.raf(flush);
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (7 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
/**
 * Namespaces
 */
var SVG_NS = 'http://www.w3.org/2000/svg';
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 78).then(__webpack_require__.t.bind(null, /*! ./css-shim-f7ddb189-f7ddb189.js */ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/css-shim-f7ddb189-f7ddb189.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 80).then(__webpack_require__.t.bind(null, /*! ./dom-a0c82e31-a0c82e31.js */ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/dom-a0c82e31-a0c82e31.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var XLINK_NS = 'http://www.w3.org/1999/xlink';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, tagName, mode, hostElm) {
    var scopeId = getScopeId(tagName);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style);
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta.$tagName$, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    return vnode;
};
var Host = {};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        /**
         * Need to manually update attribute if:
         * - memberName is not an attribute
         * - if we are rendering the host element in order to reflect attribute
         * - if it's a SVG, since properties might not work in <svg>
         * - if the newValue is null/undefined or 'false'.
         */
        var isXlinkNs = isSvg && (memberName !== (memberName = memberName.replace(/^xlink\:?/, ''))) ? true : false;
        if (newValue == null || newValue === false) {
            if (isXlinkNs) {
                elm.removeAttributeNS(XLINK_NS, toLowerCase(memberName));
            }
            else {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            if (isXlinkNs) {
                elm.setAttributeNS(XLINK_NS, toLowerCase(memberName), newValue);
            }
            else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var hostTagName;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = ((isSvgMode || newVNode.$tag$ === 'svg')
            ? doc.createElementNS(SVG_NS, newVNode.$tag$)
            : doc.createElement(newVNode.$tag$));
        {
            isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if (newVNode.$tag$ === 'svg') {
            // Only reset the SVG context when we're exiting SVG element
            isSvgMode = false;
        }
    }
    return newVNode.$elm$;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = (parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    {
        // test if we're rendering an svg element, or still rendering nodes inside of one
        // only add this to the when the compiler sees we're using an svg somewhere
        isSvgMode = elm &&
            isDef(elm.parentNode) &&
            elm.ownerSVGElement !== undefined;
        isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
    }
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
    if (isSvgMode && newVNode.$tag$ === 'svg') {
        isSvgMode = false;
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    hostTagName = toLowerCase(hostElm.tagName);
    if (isHost(renderFnResults)) {
        renderFnResults.$tag$ = null;
    }
    else {
        renderFnResults = h(null, null, renderFnResults);
    }
    renderFnResults.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = renderFnResults;
    renderFnResults.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, renderFnResults);
};
var safeCall = function (instance, method) { return __awaiter(_this, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(instance && instance[method])) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, instance[method]()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                consoleError(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        {
            hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
        }
        instance = hostRef.$lazyInstance$;
        // there is no ancestorc omponent or the ancestor component
        // has already fired off its lifecycle update then
        // fire off the initial update
        {
            writeTask(function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); });
        }
        return [2 /*return*/];
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 512 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 512 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ &&
                (flags & (1 /* hasConnected */ | 8 /* isConstructingInstance */)) === 1 /* hasConnected */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if ((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if (flags & 1 && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if (flags & 1) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var propName = attrNameToPropName_1.get(attrName);
                this[propName] = newValue === null && typeof this[propName] === 'boolean'
                    ? false
                    : newValue;
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 4];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 256 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 4];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$, hostRef.$modeName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 3]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 81).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 2:
                style_1 = _a.sent();
                _a.label = 3;
            case 3:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                Cstr.isStyleRegistered = true;
                _a.label = 4;
            case 4:
                ancestorComponent = hostRef.$ancestorComponent$;
                if (ancestorComponent && !ancestorComponent['s-lr'] && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    ancestorComponent['s-rc'].push(function () {
                        // this will get fired off when the ancestor component
                        // finally gets around to rendering its lazy self
                        // fire off the initial update
                        return initializeComponent(elm, hostRef, cmpMeta);
                    });
                }
                else {
                    scheduleUpdate(elm, hostRef, cmpMeta, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-init'] && !ancestorComponent['s-lr']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', win.location.href).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                {
                    var hostRef = getHostRef(this);
                    scheduleUpdate(this, hostRef, cmpMeta, false);
                }
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/loader.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/charts/dist/esm/legacy/loader.mjs ***!
  \********************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-c379be54.js */ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/chunk-c379be54.js");

var defineCustomElements = function (win, options) {
    return Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(function () {
        Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["deckgo-bar-chart_3", [[1, "deckgo-bar-chart", { "width": [1026], "height": [1026], "src": [1], "separator": [1], "marginTop": [2, "margin-top"], "marginBottom": [2, "margin-bottom"], "marginLeft": [2, "margin-left"], "marginRight": [2, "margin-right"], "animation": [4], "animationDuration": [2, "animation-duration"], "draw": [64], "next": [64], "prev": [64], "isBeginning": [64], "isEnd": [64] }], [1, "deckgo-line-chart", { "width": [1026], "height": [1026], "src": [1], "separator": [1], "datePattern": [1, "date-pattern"], "marginTop": [2, "margin-top"], "marginBottom": [2, "margin-bottom"], "marginLeft": [2, "margin-left"], "marginRight": [2, "margin-right"], "yAxisDomain": [1, "y-axis-domain"], "smooth": [4], "area": [4], "ticks": [2], "grid": [4], "animation": [4], "animationDuration": [2, "animation-duration"], "draw": [64], "next": [64], "prev": [64], "isBeginning": [64], "isEnd": [64] }], [1, "deckgo-pie-chart", { "width": [1026], "height": [1026], "innerRadius": [2, "inner-radius"], "range": [16], "src": [1], "separator": [1], "animation": [4], "animationDuration": [2, "animation-duration"], "draw": [64], "next": [64], "prev": [64], "isBeginning": [64], "isEnd": [64] }]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/@deckdeckgo/charts/dist/esm/polyfills/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/charts/dist/esm/polyfills/index.js ***!
  \*********************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 84).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/@deckdeckgo/charts/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 82).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/@deckdeckgo/charts/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 83).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/@deckdeckgo/charts/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@deckdeckgo/charts/dist/loader/index.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@deckdeckgo/charts/dist/loader/index.mjs ***!
  \***************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/@deckdeckgo/charts/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });

(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();




/***/ }),

/***/ "./node_modules/@deckdeckgo/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.(system|cjs)\.entry\.js$ namespace object ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deckgo-deck_12.entry.js": [
		"./node_modules/@deckdeckgo/core/dist/esm/legacy/deckgo-deck_12.entry.js",
		4,
		86
	],
	"./deckgo-slide-chart.entry.js": [
		"./node_modules/@deckdeckgo/core/dist/esm/legacy/deckgo-slide-chart.entry.js",
		4,
		87
	],
	"./deckgo-slide-qrcode.entry.js": [
		"./node_modules/@deckdeckgo/core/dist/esm/legacy/deckgo-slide-qrcode.entry.js",
		4,
		88
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@deckdeckgo/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@deckdeckgo/core/dist/esm/legacy/deckdeckgo-37488575.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/esm/legacy/deckdeckgo-37488575.js ***!
  \******************************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Host; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var BUILD = { "allRenderFn": true, "cmpDidLoad": true, "cmpDidUnload": false, "cmpDidUpdate": false, "cmpDidRender": false, "cmpWillLoad": true, "cmpWillUpdate": false, "cmpWillRender": false, "connectedCallback": false, "disconnectedCallback": false, "element": false, "event": true, "hasRenderFn": true, "lifecycle": true, "hostListener": true, "hostListenerTargetWindow": false, "hostListenerTargetDocument": false, "hostListenerTargetBody": false, "hostListenerTargetParent": false, "hostListenerTarget": false, "member": true, "method": true, "mode": false, "noVdomRender": false, "observeAttribute": true, "prop": true, "propBoolean": true, "propNumber": true, "propString": true, "propMutable": false, "reflect": true, "scoped": false, "shadowDom": true, "slot": true, "slotRelocation": true, "state": true, "style": true, "svg": true, "updatable": true, "vdomAttribute": true, "vdomClass": true, "vdomFunctional": true, "vdomKey": true, "vdomListener": true, "vdomRef": true, "vdomRender": true, "vdomStyle": true, "vdomText": true, "watchCallback": true, "taskQueue": true, "lazyLoad": true, "hydrateServerSide": false, "cssVarShim": true, "hydrateClientSide": false, "isDebug": false, "isDev": false, "lifecycleDOMEvents": false, "profile": false, "hotModuleReplacement": false, "constructableCSS": true, "cssAnnotations": true };
var NAMESPACE = 'deckdeckgo';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsListenerOptions = /*@__PURE__*/ (function () {
    var supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get: function () { supportsListenerOptions = true; }
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
var supportsConstructibleStylesheets = (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return __webpack_require__("./node_modules/@deckdeckgo/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var styles = new Map();
var cssVarShim = win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue) { return function (cb) {
    // queue dom reads
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        plt.raf(flush);
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (7 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
/**
 * Namespaces
 */
var SVG_NS = 'http://www.w3.org/2000/svg';
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 85).then(__webpack_require__.t.bind(null, /*! ./css-shim-229ebf7a-229ebf7a.js */ "./node_modules/@deckdeckgo/core/dist/esm/legacy/css-shim-229ebf7a-229ebf7a.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 89).then(__webpack_require__.t.bind(null, /*! ./dom-a0c82e31-a0c82e31.js */ "./node_modules/@deckdeckgo/core/dist/esm/legacy/dom-a0c82e31-a0c82e31.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var XLINK_NS = 'http://www.w3.org/1999/xlink';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, tagName, mode, hostElm) {
    var scopeId = getScopeId(tagName, mode);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style);
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.appendChild(styleElm);
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta.$tagName$, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var slotName;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var Host = {};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        /**
         * Need to manually update attribute if:
         * - memberName is not an attribute
         * - if we are rendering the host element in order to reflect attribute
         * - if it's a SVG, since properties might not work in <svg>
         * - if the newValue is null/undefined or 'false'.
         */
        var isXlinkNs = isSvg && (memberName !== (memberName = memberName.replace(/^xlink\:?/, ''))) ? true : false;
        if (newValue == null || newValue === false) {
            if (isXlinkNs) {
                elm.removeAttributeNS(XLINK_NS, toLowerCase(memberName));
            }
            else {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            if (isXlinkNs) {
                elm.setAttributeNS(XLINK_NS, toLowerCase(memberName), newValue);
            }
            else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    var oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = ((isSvgMode || newVNode.$tag$ === 'svg')
            ? doc.createElementNS(SVG_NS, newVNode.$tag$)
            : doc.createElement((newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        {
            isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if (newVNode.$tag$ === 'svg') {
            // Only reset the SVG context when we're exiting SVG element
            isSvgMode = false;
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
var putBackInOriginalLocation = function (parentElm, recursive) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    var oldSlotChildNodes = parentElm.childNodes;
    for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        var childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot') {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot') {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = function (node) {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    var defaultHolder;
    {
        // test if we're rendering an svg element, or still rendering nodes inside of one
        // only add this to the when the compiler sees we're using an svg somewhere
        isSvgMode = elm &&
            isDef(elm.parentNode) &&
            elm.ownerSVGElement !== undefined;
        isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
    }
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if (newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (defaultHolder = elm['s-cr']) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
    if (isSvgMode && newVNode.$tag$ === 'svg') {
        isSvgMode = false;
    }
};
var updateFallbackSlotVisibility = function (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var relocateNodes = [];
var relocateSlotContent = function (elm) {
    // tslint:disable-next-line: prefer-const
    var childNodes = elm.childNodes;
    var ilen = childNodes.length;
    var i = 0;
    var j = 0;
    var nodeType = 0;
    var childNode;
    var node;
    var hostContentNodes;
    var slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(function (r) { return r.nodeToRelocate === node; })) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                slotRefNode: childNode,
                                nodeToRelocate: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    hostTagName = toLowerCase(hostElm.tagName);
    if (isHost(renderFnResults)) {
        renderFnResults.$tag$ = null;
    }
    else {
        renderFnResults = h(null, null, renderFnResults);
    }
    if (cmpMeta.$attrsToReflect$) {
        renderFnResults.$attrs$ = renderFnResults.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(function (_a) {
            var propName = _a[0], attribute = _a[1];
            return renderFnResults.$attrs$[attribute] = hostElm[propName];
        });
    }
    renderFnResults.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = renderFnResults;
    renderFnResults.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, renderFnResults);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(renderFnResults.$elm$);
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                if (!relocateNode.nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    var orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
                    relocateNode.nodeToRelocate.parentNode.insertBefore((relocateNode.nodeToRelocate['s-ol'] = orgLocationNode), relocateNode.nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                var parentNodeRef = relocateNode.slotRefNode.parentNode;
                var insertBeforeNode = relocateNode.slotRefNode.nextSibling;
                var orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    var refNode = orgLocationNode['s-nr'];
                    if (refNode && refNode) {
                        if (refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn']) {
                            if (parentNodeRef === refNode.parentNode) {
                                if ((refNode = refNode.nextSibling) && refNode && !refNode['s-nr']) {
                                    insertBeforeNode = refNode;
                                    break;
                                }
                            }
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.nodeToRelocate.parentNode) ||
                    (relocateNode.nodeToRelocate.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.nodeToRelocate !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.nodeToRelocate, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(renderFnResults.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
var safeCall = function (instance, method) { return __awaiter(_this, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(instance && instance[method])) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, instance[method]()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                consoleError(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                {
                    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
                }
                instance = hostRef.$lazyInstance$;
                if (!isInitialLoad) return [3 /*break*/, 2];
                return [4 /*yield*/, safeCall(instance, 'componentWillLoad')];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                // there is no ancestorc omponent or the ancestor component
                // has already fired off its lifecycle update then
                // fire off the initial update
                {
                    writeTask(function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); });
                }
                return [2 /*return*/];
        }
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 512 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 512 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$();
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ &&
                (flags & (1 /* hasConnected */ | 8 /* isConstructingInstance */)) === 1 /* hasConnected */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if ((memberFlags & 31) || (flags & 2 && (memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if (flags & 1 && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if (flags & 1) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var propName = attrNameToPropName_1.get(attrName);
                this[propName] = newValue === null && typeof this[propName] === 'boolean'
                    ? false
                    : newValue;
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
var addEventListeners = function (elm, hostRef, listeners) {
    var removeFns = listeners.map(function (_a) {
        var flags = _a[0], name = _a[1], method = _a[2];
        var target = (elm);
        var handler = hostListenerProxy(hostRef, method);
        var opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return function () { return plt.rel(target, name, handler, opts); };
    });
    return function () { return removeFns.forEach(function (fn) { return fn(); }); };
};
var hostListenerProxy = function (hostRef, methodName) {
    return function (ev) {
        {
            if (hostRef.$lazyInstance$) {
                // instance is ready, let's call it's member method for this event
                return hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                return hostRef.$onReadyPromise$.then(function () { return hostRef.$lazyInstance$[methodName](ev); }).catch(consoleError);
            }
        }
    };
};
var hostListenerOpts = function (flags) { return supportsListenerOptions ?
    {
        'passive': (flags & 1 /* Passive */) !== 0,
        'capture': (flags & 2 /* Capture */) !== 0,
    }
    : (flags & 2 /* Capture */) !== 0; };
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 4];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 256 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta, hostRef, hmrVersionId)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 4];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$, hostRef.$modeName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 3]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 90).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/@deckdeckgo/core/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 2:
                style_1 = _a.sent();
                _a.label = 3;
            case 3:
                registerStyle(scopeId_1, style_1);
                Cstr.isStyleRegistered = true;
                _a.label = 4;
            case 4:
                ancestorComponent = hostRef.$ancestorComponent$;
                if (ancestorComponent && !ancestorComponent['s-lr'] && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    ancestorComponent['s-rc'].push(function () {
                        // this will get fired off when the ancestor component
                        // finally gets around to rendering its lazy self
                        // fire off the initial update
                        return initializeComponent(elm, hostRef, cmpMeta);
                    });
                }
                else {
                    scheduleUpdate(elm, hostRef, cmpMeta, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef.$rmListeners$ = addEventListeners(elm, hostRef, cmpMeta.$listeners$);
        }
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            var hostId = void 0;
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if (cmpMeta.$flags$ & 4 ||
                    (cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && !ancestorComponent['s-lr']) || (BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id'))) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
var setContentReference = function (elm, contentRefElm) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    var crName;
    {
        crName = '';
    }
    contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', win.location.href).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                {
                    var hostRef = getHostRef(this);
                    scheduleUpdate(this, hostRef, cmpMeta, false);
                }
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/@deckdeckgo/core/dist/esm/legacy/loader.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/esm/legacy/loader.mjs ***!
  \******************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-37488575.js */ "./node_modules/@deckdeckgo/core/dist/esm/legacy/deckdeckgo-37488575.js");

var defineCustomElements = function (win, options) {
    return Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["c"])().then(function () {
        Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["deckgo-slide-chart", [[1, "deckgo-slide-chart", { "src": [1], "separator": [1], "width": [2], "height": [2], "type": [1], "innerRadius": [2, "inner-radius"], "range": [16], "datePattern": [1, "date-pattern"], "marginTop": [2, "margin-top"], "marginBottom": [2, "margin-bottom"], "marginLeft": [2, "margin-left"], "marginRight": [2, "margin-right"], "yAxisDomain": [1, "y-axis-domain"], "smooth": [4], "area": [4], "ticks": [2], "grid": [4], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "animation": [4], "animationDuration": [2, "animation-duration"], "chartWidth": [32], "chartHeight": [32], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }]]], ["deckgo-slide-qrcode", [[1, "deckgo-slide-qrcode", { "content": [1], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }]]], ["deckgo-deck_12", [[1, "deckgo-deck", { "keyboard": [4], "embedded": [4], "cloneBackground": [4, "clone-background"], "rtl": [32], "activeIndex": [32], "length": [32], "initSlideSize": [64], "toggleKeyboardAssist": [64], "loadBackground": [64], "isBeginning": [64], "isEnd": [64], "getActiveIndex": [64], "getLength": [64], "slideNext": [64], "slidePrev": [64], "slideTo": [64], "deleteActiveSlide": [64], "blockSlide": [64], "toggleFullScreen": [64], "doPrint": [64], "isMobile": [64] }, [[1, "mousedown", "mousedown"], [1, "touchstart", "touchstart"], [1, "mouseup", "mouseup"], [1, "touchend", "touchend"], [1, "mousemove", "mousemove"], [1, "touchmove", "touchmove"], [1, "dblclick", "dblclick"], [1, "contextmenu", "contextMenu"], [0, "scrolling", "scrolling"], [0, "keypress", "keypress"], [0, "slideDidLoad", "slideDidLoad"]]], [1, "deckgo-slide-gif", { "src": [513], "alt": [513], "fullscreen": [4], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "loaded": [32], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }, [[0, "gifLoaded", "onGifLoaded"]]], [1, "deckgo-slide-youtube", { "src": [1], "width": [2], "height": [2], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "videoWidth": [32], "videoHeight": [32], "frameTitle": [32], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64], "play": [64], "pause": [64], "toggle": [64] }], [1, "deckgo-slide-author", { "imgSrc": [1, "img-src"], "imgAlt": [1, "img-alt"], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }], [1, "deckgo-slide-code", { "src": [1], "anchor": [1], "anchorZoom": [1, "anchor-zoom"], "hideAnchor": [4, "hide-anchor"], "language": [1], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "mobile": [32], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }], [1, "deckgo-slide-content", { "reveal": [4], "revealShowFirst": [4, "reveal-show-first"], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }], [1, "deckgo-slide-split", { "reveal": [4], "revealShowFirst": [4, "reveal-show-first"], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }], [1, "deckgo-slide-title", { "reveal": [4], "revealShowFirst": [4, "reveal-show-first"], "customActions": [516, "custom-actions"], "customBackground": [516, "custom-background"], "beforeSwipe": [64], "afterSwipe": [64], "lazyLoadContent": [64] }], [1, "deckgo-social", { "twitter": [1], "linkedin": [1], "medium": [1], "dev": [1], "github": [1], "fullUrl": [1, "full-url"], "url": [32], "lazyLoadContent": [64] }], [1, "deckgo-gif", { "src": [1], "alt": [1], "fullscreen": [4], "loaded": [32], "lazyLoadContent": [64] }], [1, "deckgo-pager", { "activeIndex": [2, "active-index"], "length": [2], "percentageProgression": [32] }], [1, "deckgo-youtube", { "src": [1], "width": [2], "height": [2], "frameTitle": [1, "frame-title"], "updateIFrame": [64], "lazyLoadContent": [64], "play": [64], "pause": [64] }]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/@deckdeckgo/core/dist/esm/polyfills/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/esm/polyfills/index.js ***!
  \*******************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 93).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/@deckdeckgo/core/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 91).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/@deckdeckgo/core/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 92).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/@deckdeckgo/core/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@deckdeckgo/core/dist/loader/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/loader/index.mjs ***!
  \*************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/@deckdeckgo/core/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/@deckdeckgo/core/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });

(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  const BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();




/***/ }),

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.(system|cjs)\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deckgo-highlight-code.entry.js": [
		"./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/deckgo-highlight-code.entry.js",
		95
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/deckdeckgo-highlight-code-0be5086d.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/deckdeckgo-highlight-code-0be5086d.js ***!
  \*******************************************************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getElement; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var BUILD = { "allRenderFn": true, "cmpDidLoad": true, "cmpDidUnload": false, "cmpDidUpdate": false, "cmpDidRender": false, "cmpWillLoad": false, "cmpWillUpdate": false, "cmpWillRender": false, "connectedCallback": false, "disconnectedCallback": false, "element": false, "event": true, "hasRenderFn": true, "lifecycle": true, "hostListener": true, "hostListenerTargetWindow": false, "hostListenerTargetDocument": true, "hostListenerTargetBody": false, "hostListenerTargetParent": false, "hostListenerTarget": true, "member": true, "method": true, "mode": false, "noVdomRender": false, "observeAttribute": true, "prop": true, "propBoolean": true, "propNumber": false, "propString": true, "propMutable": false, "reflect": true, "scoped": false, "shadowDom": true, "slot": true, "slotRelocation": true, "state": true, "style": true, "svg": false, "updatable": true, "vdomAttribute": true, "vdomClass": true, "vdomFunctional": true, "vdomKey": true, "vdomListener": true, "vdomRef": true, "vdomRender": true, "vdomStyle": true, "vdomText": true, "watchCallback": true, "taskQueue": true, "lazyLoad": true, "hydrateServerSide": false, "cssVarShim": true, "hydrateClientSide": false, "isDebug": false, "isDev": false, "lifecycleDOMEvents": false, "profile": false, "hotModuleReplacement": false, "constructableCSS": true, "cssAnnotations": true };
var NAMESPACE = 'deckdeckgo-highlight-code';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsListenerOptions = /*@__PURE__*/ (function () {
    var supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get: function () { supportsListenerOptions = true; }
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
var supportsConstructibleStylesheets = (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return __webpack_require__("./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var styles = new Map();
var cssVarShim = win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue) { return function (cb) {
    // queue dom reads
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        plt.raf(flush);
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (7 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 94).then(__webpack_require__.t.bind(null, /*! ./css-shim-229ebf7a-229ebf7a.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/css-shim-229ebf7a-229ebf7a.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 96).then(__webpack_require__.t.bind(null, /*! ./dom-a0c82e31-a0c82e31.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/dom-a0c82e31-a0c82e31.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, tagName, mode, hostElm) {
    var scopeId = getScopeId(tagName, mode);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style);
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.appendChild(styleElm);
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta.$tagName$, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var slotName;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var Host = {};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    var oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement((newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
var putBackInOriginalLocation = function (parentElm, recursive) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    var oldSlotChildNodes = parentElm.childNodes;
    for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        var childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot') {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot') {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = function (node) {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    var defaultHolder;
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if (newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (defaultHolder = elm['s-cr']) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
};
var updateFallbackSlotVisibility = function (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var relocateNodes = [];
var relocateSlotContent = function (elm) {
    // tslint:disable-next-line: prefer-const
    var childNodes = elm.childNodes;
    var ilen = childNodes.length;
    var i = 0;
    var j = 0;
    var nodeType = 0;
    var childNode;
    var node;
    var hostContentNodes;
    var slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(function (r) { return r.nodeToRelocate === node; })) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                slotRefNode: childNode,
                                nodeToRelocate: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    hostTagName = toLowerCase(hostElm.tagName);
    if (isHost(renderFnResults)) {
        renderFnResults.$tag$ = null;
    }
    else {
        renderFnResults = h(null, null, renderFnResults);
    }
    if (cmpMeta.$attrsToReflect$) {
        renderFnResults.$attrs$ = renderFnResults.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(function (_a) {
            var propName = _a[0], attribute = _a[1];
            return renderFnResults.$attrs$[attribute] = hostElm[propName];
        });
    }
    renderFnResults.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = renderFnResults;
    renderFnResults.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, renderFnResults);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(renderFnResults.$elm$);
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                if (!relocateNode.nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    var orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
                    relocateNode.nodeToRelocate.parentNode.insertBefore((relocateNode.nodeToRelocate['s-ol'] = orgLocationNode), relocateNode.nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                var parentNodeRef = relocateNode.slotRefNode.parentNode;
                var insertBeforeNode = relocateNode.slotRefNode.nextSibling;
                var orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    var refNode = orgLocationNode['s-nr'];
                    if (refNode && refNode) {
                        if (refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn']) {
                            if (parentNodeRef === refNode.parentNode) {
                                if ((refNode = refNode.nextSibling) && refNode && !refNode['s-nr']) {
                                    insertBeforeNode = refNode;
                                    break;
                                }
                            }
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.nodeToRelocate.parentNode) ||
                    (relocateNode.nodeToRelocate.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.nodeToRelocate !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.nodeToRelocate, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(renderFnResults.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
var safeCall = function (instance, method) { return __awaiter(_this, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(instance && instance[method])) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, instance[method]()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                consoleError(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        {
            hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
        }
        instance = hostRef.$lazyInstance$;
        // there is no ancestorc omponent or the ancestor component
        // has already fired off its lifecycle update then
        // fire off the initial update
        {
            writeTask(function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); });
        }
        return [2 /*return*/];
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 512 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 512 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$();
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ &&
                (flags & (1 /* hasConnected */ | 8 /* isConstructingInstance */)) === 1 /* hasConnected */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if ((memberFlags & 31) || (flags & 2 && (memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if (flags & 1 && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if (flags & 1) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var propName = attrNameToPropName_1.get(attrName);
                this[propName] = newValue === null && typeof this[propName] === 'boolean'
                    ? false
                    : newValue;
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
var addEventListeners = function (elm, hostRef, listeners) {
    var removeFns = listeners.map(function (_a) {
        var flags = _a[0], name = _a[1], method = _a[2];
        var target = (getHostListenerTarget(elm, flags));
        var handler = hostListenerProxy(hostRef, method);
        var opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return function () { return plt.rel(target, name, handler, opts); };
    });
    return function () { return removeFns.forEach(function (fn) { return fn(); }); };
};
var hostListenerProxy = function (hostRef, methodName) {
    return function (ev) {
        {
            if (hostRef.$lazyInstance$) {
                // instance is ready, let's call it's member method for this event
                return hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                return hostRef.$onReadyPromise$.then(function () { return hostRef.$lazyInstance$[methodName](ev); }).catch(consoleError);
            }
        }
    };
};
var getHostListenerTarget = function (elm, flags) {
    if (flags & 4 /* TargetDocument */)
        return doc;
    return elm;
};
var hostListenerOpts = function (flags) { return supportsListenerOptions ?
    {
        'passive': (flags & 1 /* Passive */) !== 0,
        'capture': (flags & 2 /* Capture */) !== 0,
    }
    : (flags & 2 /* Capture */) !== 0; };
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 4];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 256 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta, hostRef, hmrVersionId)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 4];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$, hostRef.$modeName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 3]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 97).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 2:
                style_1 = _a.sent();
                _a.label = 3;
            case 3:
                registerStyle(scopeId_1, style_1);
                Cstr.isStyleRegistered = true;
                _a.label = 4;
            case 4:
                ancestorComponent = hostRef.$ancestorComponent$;
                if (ancestorComponent && !ancestorComponent['s-lr'] && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    ancestorComponent['s-rc'].push(function () {
                        // this will get fired off when the ancestor component
                        // finally gets around to rendering its lazy self
                        // fire off the initial update
                        return initializeComponent(elm, hostRef, cmpMeta);
                    });
                }
                else {
                    scheduleUpdate(elm, hostRef, cmpMeta, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef.$rmListeners$ = addEventListeners(elm, hostRef, cmpMeta.$listeners$);
        }
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            var hostId = void 0;
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if (cmpMeta.$flags$ & 4 ||
                    (cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && !ancestorComponent['s-lr']) || (BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id'))) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
var setContentReference = function (elm, contentRefElm) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    var crName;
    {
        crName = '';
    }
    contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', win.location.href).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                {
                    var hostRef = getHostRef(this);
                    scheduleUpdate(this, hostRef, cmpMeta, false);
                }
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/loader.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/loader.mjs ***!
  \****************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-highlight-code-0be5086d.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/deckdeckgo-highlight-code-0be5086d.js");

var defineCustomElements = function (win, options) {
    return Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["c"])().then(function () {
        Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["deckgo-highlight-code", [[1, "deckgo-highlight-code", { "src": [1], "anchor": [1], "anchorZoom": [1, "anchor-zoom"], "hideAnchor": [4, "hide-anchor"], "language": [513], "highlightLines": [513, "highlight-lines"], "editable": [4], "editing": [32], "load": [64], "findNextAnchor": [64], "zoomCode": [64] }, [[4, "prismLanguageLoaded", "languageLoaded"]]]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/esm/polyfills/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/esm/polyfills/index.js ***!
  \*****************************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 100).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 98).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 99).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/loader/index.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/loader/index.mjs ***!
  \***********************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });

(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  const BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();




/***/ }),

/***/ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deckgo-lazy-img.entry.js": [
		"./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/deckgo-lazy-img.entry.js",
		102
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/chunk-bcaf8fb3.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/chunk-bcaf8fb3.js ***!
  \*****************************************************************************/
/*! exports provided: H, a, b, c, g, h, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var NAMESPACE = 'deckdeckgo-lazy-img';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var moduleCache = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = (cmpMeta.$lazyBundleIds$);
    var module = moduleCache.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var styles = new Map();
var cssVarShim = /*@__PURE__*/ win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
var getDynamicImportFunction = function (namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
};
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 101).then(__webpack_require__.t.bind(null, /*! ./css-shim-3ea8955c-3ea8955c.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/css-shim-3ea8955c-3ea8955c.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 103).then(__webpack_require__.t.bind(null, /*! ./dom-860d8016-860d8016.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/dom-860d8016-860d8016.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var hostTagName;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return newVNode.$elm$;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = (parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    hostTagName = toLowerCase(hostElm.tagName);
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(function (_a) {
            var propName = _a[0], attribute = _a[1];
            return rootVnode.$attrs$[attribute] = hostElm[propName];
        });
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
};
var safeCall = function (instance, method, arg) {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    var instance = hostRef.$lazyInstance$;
    var promise;
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var forceUpdate = function (elm, cmpMeta) {
    {
        var hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if (((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if ((flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                    var propName = attrNameToPropName_1.get(attrName);
                    _this[propName] = newValue === null && typeof _this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent, schedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 5];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta);
                if (!Cstr.then) return [3 /*break*/, 2];
                return [4 /*yield*/, Cstr];
            case 1:
                // Await creates a micro-task avoid if possible
                Cstr = _a.sent();
                _a.label = 2;
            case 2:
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                {
                    hostRef.$flags$ |= 128 /* isWatchReady */;
                }
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 5];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 4]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 104).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 3:
                style_1 = _a.sent();
                _a.label = 4;
            case 4:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                Cstr.isStyleRegistered = true;
                _a.label = 5;
            case 5:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                if (ancestorComponent && ancestorComponent['s-lr'] === false && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef_2 = getHostRef(elm);
        if (!(hostRef_2.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef_2.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && ancestorComponent['s-lr'] === false)) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef_2.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(function () { return initializeComponent(elm, hostRef_2, cmpMeta); });
            }
        }
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
            };
            class_1.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                forceUpdate(this, cmpMeta);
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/loader.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/loader.mjs ***!
  \**********************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-bcaf8fb3.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/chunk-bcaf8fb3.js");

var defineCustomElements = function (win, options) {
    return Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(function () {
        Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["deckgo-lazy-img", [[1, "deckgo-lazy-img", { "imgSrc": [513, "img-src"], "imgSrcSet": [513, "img-src-set"], "imgAlt": [513, "img-alt"], "imgSizes": [513, "img-sizes"], "observerRootMargin": [1, "observer-root-margin"], "observerThreshold": [2, "observer-threshold"], "imgErrorSrc": [1, "img-error-src"], "svgSrc": [513, "svg-src"], "ariaLabel": [513, "aria-label"], "svgContent": [32], "imgLoaded": [32], "lazyLoad": [64] }]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/@deckdeckgo/lazy-img/dist/esm/polyfills/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/lazy-img/dist/esm/polyfills/index.js ***!
  \***********************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 107).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 105).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 106).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@deckdeckgo/lazy-img/dist/loader/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@deckdeckgo/lazy-img/dist/loader/index.mjs ***!
  \*****************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });


(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();





/***/ }),

/***/ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/qrcode/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deckgo-qrcode.entry.js": [
		"./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/deckgo-qrcode.entry.js",
		109
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/chunk-69405405.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/chunk-69405405.js ***!
  \***************************************************************************/
/*! exports provided: a, b, g, h, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var NAMESPACE = 'deckdeckgo-qrcode';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var moduleCache = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = (cmpMeta.$lazyBundleIds$);
    var module = moduleCache.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("./node_modules/@deckdeckgo/qrcode/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var styles = new Map();
var cssVarShim = /*@__PURE__*/ win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 108).then(__webpack_require__.t.bind(null, /*! ./css-shim-3ea8955c-3ea8955c.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/css-shim-3ea8955c-3ea8955c.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 110).then(__webpack_require__.t.bind(null, /*! ./dom-860d8016-860d8016.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/dom-860d8016-860d8016.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var slotName;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    var oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement((newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
var putBackInOriginalLocation = function (parentElm, recursive) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    var oldSlotChildNodes = parentElm.childNodes;
    for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        var childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = function (node) {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    var defaultHolder;
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if (newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
};
var updateFallbackSlotVisibility = function (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var relocateNodes = [];
var relocateSlotContent = function (elm) {
    // tslint:disable-next-line: prefer-const
    var childNodes = elm.childNodes;
    var ilen = childNodes.length;
    var i = 0;
    var j = 0;
    var nodeType = 0;
    var childNode;
    var node;
    var hostContentNodes;
    var slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(function (r) { return r.nodeToRelocate === node; })) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                slotRefNode: childNode,
                                nodeToRelocate: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    hostTagName = toLowerCase(hostElm.tagName);
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                if (!relocateNode.nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    var orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
                    relocateNode.nodeToRelocate.parentNode.insertBefore((relocateNode.nodeToRelocate['s-ol'] = orgLocationNode), relocateNode.nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                var parentNodeRef = relocateNode.slotRefNode.parentNode;
                var insertBeforeNode = relocateNode.slotRefNode.nextSibling;
                var orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    var refNode = orgLocationNode['s-nr'];
                    if (refNode &&
                        refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn'] &&
                        parentNodeRef === refNode.parentNode) {
                        refNode = refNode.nextSibling;
                        if (!refNode || !refNode['s-nr']) {
                            insertBeforeNode = refNode;
                            break;
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.nodeToRelocate.parentNode) ||
                    (relocateNode.nodeToRelocate.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.nodeToRelocate !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.nodeToRelocate, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
var safeCall = function (instance, method, arg) {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    var instance = hostRef.$lazyInstance$;
    var promise;
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var forceUpdate = function (elm, cmpMeta) {
    {
        var hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if (((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if ((flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                    var propName = attrNameToPropName_1.get(attrName);
                    _this[propName] = newValue === null && typeof _this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent, schedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 5];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta);
                if (!Cstr.then) return [3 /*break*/, 2];
                return [4 /*yield*/, Cstr];
            case 1:
                // Await creates a micro-task avoid if possible
                Cstr = _a.sent();
                _a.label = 2;
            case 2:
                if (!Cstr.isProxied) {
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 5];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 4]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 111).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 3:
                style_1 = _a.sent();
                _a.label = 4;
            case 4:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                Cstr.isStyleRegistered = true;
                _a.label = 5;
            case 5:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                if (ancestorComponent && ancestorComponent['s-lr'] === false && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            var hostId = void 0;
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                    (cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && ancestorComponent['s-lr'] === false)) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
    }
};
var setContentReference = function (elm, contentRefElm) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    var crName;
    {
        crName = '';
    }
    contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
            };
            class_1.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                forceUpdate(this, cmpMeta);
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/loader.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/loader.mjs ***!
  \********************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _chunk_69405405_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-69405405.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/chunk-69405405.js");

var defineCustomElements = function (win, options) {
    return Object(_chunk_69405405_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(function () {
        Object(_chunk_69405405_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["deckgo-qrcode", [[1, "deckgo-qrcode", { "content": [1], "type": [1], "qrCellSize": [2, "qr-cell-size"], "qrMargin": [2, "qr-margin"], "qrBackgroundColor": [1, "qr-background-color"], "qrFillColor": [1, "qr-fill-color"], "qrAlt": [1, "qr-alt"], "generate": [64] }]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/@deckdeckgo/qrcode/dist/esm/polyfills/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/qrcode/dist/esm/polyfills/index.js ***!
  \*********************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 114).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 112).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 113).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@deckdeckgo/qrcode/dist/loader/index.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@deckdeckgo/qrcode/dist/loader/index.mjs ***!
  \***************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/@deckdeckgo/qrcode/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/@deckdeckgo/qrcode/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });


(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();





/***/ }),

/***/ "./node_modules/@deckdeckgo/remote/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/remote/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.(system|cjs)\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./deckgo-remote.entry.js": [
		"./node_modules/@deckdeckgo/remote/dist/esm/legacy/deckgo-remote.entry.js",
		11
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@deckdeckgo/remote/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@deckdeckgo/remote/dist/esm/legacy/deckdeckgo-remote-c13eab9d.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/remote/dist/esm/legacy/deckdeckgo-remote-c13eab9d.js ***!
  \***************************************************************************************/
/*! exports provided: a, b, c, d, e, f, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var BUILD = { "allRenderFn": true, "cmpDidLoad": true, "cmpDidUnload": true, "cmpDidUpdate": false, "cmpDidRender": false, "cmpWillLoad": false, "cmpWillUpdate": false, "cmpWillRender": false, "connectedCallback": false, "disconnectedCallback": false, "element": false, "event": true, "hasRenderFn": true, "lifecycle": true, "hostListener": false, "hostListenerTargetWindow": false, "hostListenerTargetDocument": false, "hostListenerTargetBody": false, "hostListenerTargetParent": false, "hostListenerTarget": false, "member": true, "method": true, "mode": false, "noVdomRender": false, "observeAttribute": true, "prop": true, "propBoolean": true, "propNumber": true, "propString": true, "propMutable": false, "reflect": false, "scoped": false, "shadowDom": true, "slot": false, "slotRelocation": false, "state": true, "style": true, "svg": false, "updatable": true, "vdomAttribute": true, "vdomClass": true, "vdomFunctional": true, "vdomKey": true, "vdomListener": true, "vdomRef": true, "vdomRender": true, "vdomStyle": true, "vdomText": true, "watchCallback": true, "taskQueue": true, "lazyLoad": true, "hydrateServerSide": false, "cssVarShim": true, "hydrateClientSide": false, "isDebug": false, "isDev": false, "lifecycleDOMEvents": false, "profile": false, "hotModuleReplacement": false, "constructableCSS": true, "cssAnnotations": true };
var NAMESPACE = 'deckdeckgo-remote';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsConstructibleStylesheets = (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return __webpack_require__("./node_modules/@deckdeckgo/remote/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.(system|cjs)\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var styles = new Map();
var cssVarShim = win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue) { return function (cb) {
    // queue dom reads
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        plt.raf(flush);
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (7 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 115).then(__webpack_require__.t.bind(null, /*! ./css-shim-229ebf7a-229ebf7a.js */ "./node_modules/@deckdeckgo/remote/dist/esm/legacy/css-shim-229ebf7a-229ebf7a.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 116).then(__webpack_require__.t.bind(null, /*! ./dom-a0c82e31-a0c82e31.js */ "./node_modules/@deckdeckgo/remote/dist/esm/legacy/dom-a0c82e31-a0c82e31.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, tagName, mode, hostElm) {
    var scopeId = getScopeId(tagName, mode);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style);
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.appendChild(styleElm);
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta.$tagName$, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    return vnode;
};
var Host = {};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var hostTagName;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return newVNode.$elm$;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = (parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    hostTagName = toLowerCase(hostElm.tagName);
    if (isHost(renderFnResults)) {
        renderFnResults.$tag$ = null;
    }
    else {
        renderFnResults = h(null, null, renderFnResults);
    }
    renderFnResults.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = renderFnResults;
    renderFnResults.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, renderFnResults);
};
var safeCall = function (instance, method) { return __awaiter(_this, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(instance && instance[method])) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, instance[method]()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                consoleError(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        {
            hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
        }
        instance = hostRef.$lazyInstance$;
        // there is no ancestorc omponent or the ancestor component
        // has already fired off its lifecycle update then
        // fire off the initial update
        {
            writeTask(function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); });
        }
        return [2 /*return*/];
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 512 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 512 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
        {
            safeCall(instance, 'componentDidUnload');
        }
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ &&
                (flags & (1 /* hasConnected */ | 8 /* isConstructingInstance */)) === 1 /* hasConnected */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if ((memberFlags & 31) || (flags & 2 && (memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if (flags & 1 && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if (flags & 1) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var propName = attrNameToPropName_1.get(attrName);
                this[propName] = newValue === null && typeof this[propName] === 'boolean'
                    ? false
                    : newValue;
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 256 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 4];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 256 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta, hostRef, hmrVersionId)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 4];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$, hostRef.$modeName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 3]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 117).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/@deckdeckgo/remote/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 2:
                style_1 = _a.sent();
                _a.label = 3;
            case 3:
                registerStyle(scopeId_1, style_1);
                Cstr.isStyleRegistered = true;
                _a.label = 4;
            case 4:
                ancestorComponent = hostRef.$ancestorComponent$;
                if (ancestorComponent && !ancestorComponent['s-lr'] && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    ancestorComponent['s-rc'].push(function () {
                        // this will get fired off when the ancestor component
                        // finally gets around to rendering its lazy self
                        // fire off the initial update
                        return initializeComponent(elm, hostRef, cmpMeta);
                    });
                }
                else {
                    scheduleUpdate(elm, hostRef, cmpMeta, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && !ancestorComponent['s-lr']) || (BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute('s-id'))) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', win.location.href).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                {
                    var hostRef = getHostRef(this);
                    scheduleUpdate(this, hostRef, cmpMeta, false);
                }
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/@deckdeckgo/remote/dist/esm/legacy/loader.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/remote/dist/esm/legacy/loader.mjs ***!
  \********************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _deckdeckgo_remote_c13eab9d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-remote-c13eab9d.js */ "./node_modules/@deckdeckgo/remote/dist/esm/legacy/deckdeckgo-remote-c13eab9d.js");

var defineCustomElements = function (win, options) {
    return Object(_deckdeckgo_remote_c13eab9d_js__WEBPACK_IMPORTED_MODULE_0__["c"])().then(function () {
        Object(_deckdeckgo_remote_c13eab9d_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["deckgo-remote", [[1, "deckgo-remote", { "room": [1], "server": [1], "width": [2], "height": [2], "length": [2], "slides": [16], "autoConnect": [4, "auto-connect"], "canvasWidth": [32], "connect": [64], "disconnect": [64], "updateSlides": [64], "deleteSlide": [64], "moveDraw": [64], "nextSlide": [64], "prevSlide": [64], "slideTo": [64] }]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/@deckdeckgo/remote/dist/esm/polyfills/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@deckdeckgo/remote/dist/esm/polyfills/index.js ***!
  \*********************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 120).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/@deckdeckgo/remote/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 118).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/@deckdeckgo/remote/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 119).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/@deckdeckgo/remote/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@deckdeckgo/remote/dist/loader/index.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@deckdeckgo/remote/dist/loader/index.mjs ***!
  \***************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/@deckdeckgo/remote/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/@deckdeckgo/remote/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });

(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  const BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();




/***/ }),

/***/ "./node_modules/@ionic/core/css/ionic.bundle.css":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic/core/css/ionic.bundle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./ionic.bundle.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/core/css/ionic.bundle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-action-sheet-controller_8.entry.js",
		1,
		123
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-action-sheet-ios.entry.js",
		1,
		124
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-action-sheet-md.entry.js",
		1,
		125
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-alert-ios.entry.js",
		1,
		67
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-alert-md.entry.js",
		1,
		68
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-app_8-ios.entry.js",
		2,
		18
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-app_8-md.entry.js",
		2,
		19
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-avatar_3-ios.entry.js",
		42
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-avatar_3-md.entry.js",
		43
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-back-button-ios.entry.js",
		44
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-back-button-md.entry.js",
		45
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-backdrop-ios.entry.js",
		0,
		60
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-backdrop-md.entry.js",
		0,
		61
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-button_2-ios.entry.js",
		20
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-button_2-md.entry.js",
		21
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-card_5-ios.entry.js",
		46
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-card_5-md.entry.js",
		47
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-checkbox-ios.entry.js",
		22
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-checkbox-md.entry.js",
		23
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-chip-ios.entry.js",
		48
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-chip-md.entry.js",
		49
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-col_3.entry.js",
		126
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-datetime_3-ios.entry.js",
		1,
		16
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-datetime_3-md.entry.js",
		1,
		17
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-fab_3-ios.entry.js",
		50
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-fab_3-md.entry.js",
		51
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-img.entry.js",
		127
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-infinite-scroll_2-ios.entry.js",
		69
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-infinite-scroll_2-md.entry.js",
		70
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-input-ios.entry.js",
		24
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-input-md.entry.js",
		25
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item-option_3-ios.entry.js",
		26
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item-option_3-md.entry.js",
		27
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item_8-ios.entry.js",
		52
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-item_8-md.entry.js",
		53
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-loading-ios.entry.js",
		1,
		71
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-loading-md.entry.js",
		1,
		72
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-menu_4-ios.entry.js",
		0,
		28
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-menu_4-md.entry.js",
		0,
		29
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-modal-ios.entry.js",
		1,
		2,
		128
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-modal-md.entry.js",
		1,
		2,
		129
	],
	"./ion-nav_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-nav_4.entry.js",
		2,
		62
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-popover-ios.entry.js",
		1,
		2,
		130
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-popover-md.entry.js",
		1,
		2,
		131
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-progress-bar-ios.entry.js",
		30
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-progress-bar-md.entry.js",
		31
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-radio_2-ios.entry.js",
		32
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-radio_2-md.entry.js",
		33
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-range-ios.entry.js",
		34
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-range-md.entry.js",
		35
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-refresher_2-ios.entry.js",
		73
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-refresher_2-md.entry.js",
		74
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-reorder_2-ios.entry.js",
		40
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-reorder_2-md.entry.js",
		41
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-ripple-effect.entry.js",
		132
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-route_4.entry.js",
		36
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-searchbar-ios.entry.js",
		14
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-searchbar-md.entry.js",
		15
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-segment_2-ios.entry.js",
		54
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-segment_2-md.entry.js",
		55
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-select_3-ios.entry.js",
		1,
		63
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-select_3-md.entry.js",
		1,
		64
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-slide_2-ios.entry.js",
		65
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-slide_2-md.entry.js",
		66
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-spinner.entry.js",
		56
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-split-pane-ios.entry.js",
		133
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-split-pane-md.entry.js",
		134
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-tab-bar_2-ios.entry.js",
		57
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-tab-bar_2-md.entry.js",
		58
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-tab_2.entry.js",
		39
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-text.entry.js",
		59
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-textarea-ios.entry.js",
		37
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-textarea-md.entry.js",
		38
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toast-ios.entry.js",
		1,
		75
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toast-md.entry.js",
		1,
		76
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toggle-ios.entry.js",
		12
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-toggle-md.entry.js",
		13
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/legacy/ion-virtual-scroll.entry.js",
		135
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-09ec7fc0.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-09ec7fc0.js ***!
  \********************************************************************/
/*! exports provided: H, a, b, c, d, e, f, g, h, i, j, k, p, r, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getIonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return readTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getAssetPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return writeTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-1074393c.js");
var _this = undefined;


var NAMESPACE = 'ionic';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsListenerOptions = /*@__PURE__*/ (function () {
    var supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get: function () { supportsListenerOptions = true; }
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var moduleCache = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = ((typeof cmpMeta.$lazyBundleIds$ !== 'string')
        ? cmpMeta.$lazyBundleIds$[hostRef.$modeName$]
        : cmpMeta.$lazyBundleIds$);
    var module = moduleCache.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("./node_modules/@ionic/core/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var styles = new Map();
var cssVarShim = /*@__PURE__*/ win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
var readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
/**
 * Namespaces
 */
var SVG_NS = 'http://www.w3.org/2000/svg';
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 121).then(__webpack_require__.t.bind(null, /*! ./css-shim-3ea8955c-3ea8955c.js */ "./node_modules/@ionic/core/dist/esm/legacy/css-shim-3ea8955c-3ea8955c.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 122).then(__webpack_require__.t.bind(null, /*! ./dom-860d8016-860d8016.js */ "./node_modules/@ionic/core/dist/esm/legacy/dom-860d8016-860d8016.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var XLINK_NS = 'http://www.w3.org/1999/xlink';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$, mode);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (!style) {
        scopeId = getScopeId(cmpMeta.$tagName$);
        style = styles.get(scopeId);
    }
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
        if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
            elm.classList.add(styleId + '-s');
        }
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + ((mode) ? tagName + '-' + mode : tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var slotName;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        /**
         * Need to manually update attribute if:
         * - memberName is not an attribute
         * - if we are rendering the host element in order to reflect attribute
         * - if it's a SVG, since properties might not work in <svg>
         * - if the newValue is null/undefined or 'false'.
         */
        var isXlinkNs = isSvg && (memberName !== (memberName = memberName.replace(/^xlink\:?/, ''))) ? true : false;
        if (newValue == null || newValue === false) {
            if (isXlinkNs) {
                elm.removeAttributeNS(XLINK_NS, toLowerCase(memberName));
            }
            else {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            if (isXlinkNs) {
                elm.setAttributeNS(XLINK_NS, toLowerCase(memberName), newValue);
            }
            else {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    var oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (((isSvgMode || newVNode.$tag$ === 'svg'))
            ? doc.createElementNS(SVG_NS, newVNode.$tag$)
            : doc.createElement((newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        {
            isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if (newVNode.$tag$ === 'svg') {
            // Only reset the SVG context when we're exiting SVG element
            isSvgMode = false;
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
var putBackInOriginalLocation = function (parentElm, recursive) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    var oldSlotChildNodes = parentElm.childNodes;
    for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        var childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = function (node) {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    var defaultHolder;
    {
        // test if we're rendering an svg element, or still rendering nodes inside of one
        // only add this to the when the compiler sees we're using an svg somewhere
        isSvgMode = elm &&
            isDef(elm.parentNode) &&
            elm.ownerSVGElement !== undefined;
        isSvgMode = newVNode.$tag$ === 'svg' ? true : (newVNode.$tag$ === 'foreignObject' ? false : isSvgMode);
    }
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if (newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
    if (isSvgMode && newVNode.$tag$ === 'svg') {
        isSvgMode = false;
    }
};
var updateFallbackSlotVisibility = function (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var relocateNodes = [];
var relocateSlotContent = function (elm) {
    // tslint:disable-next-line: prefer-const
    var childNodes = elm.childNodes;
    var ilen = childNodes.length;
    var i = 0;
    var j = 0;
    var nodeType = 0;
    var childNode;
    var node;
    var hostContentNodes;
    var slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(function (r) { return r.nodeToRelocate === node; })) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                slotRefNode: childNode,
                                nodeToRelocate: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    hostTagName = toLowerCase(hostElm.tagName);
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(function (_a) {
            var propName = _a[0], attribute = _a[1];
            return rootVnode.$attrs$[attribute] = hostElm[propName];
        });
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                if (!relocateNode.nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    var orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
                    relocateNode.nodeToRelocate.parentNode.insertBefore((relocateNode.nodeToRelocate['s-ol'] = orgLocationNode), relocateNode.nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                var parentNodeRef = relocateNode.slotRefNode.parentNode;
                var insertBeforeNode = relocateNode.slotRefNode.nextSibling;
                var orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    var refNode = orgLocationNode['s-nr'];
                    if (refNode &&
                        refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn'] &&
                        parentNodeRef === refNode.parentNode) {
                        refNode = refNode.nextSibling;
                        if (!refNode || !refNode['s-nr']) {
                            insertBeforeNode = refNode;
                            break;
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.nodeToRelocate.parentNode) ||
                    (relocateNode.nodeToRelocate.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.nodeToRelocate !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.nodeToRelocate, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
var safeCall = function (instance, method, arg) {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    var instance = hostRef.$lazyInstance$;
    var promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
        }
        if (hostRef.$queuedListeners$) {
            hostRef.$queuedListeners$.forEach(function (_a) {
                var methodName = _a[0], event = _a[1];
                return safeCall(instance, methodName, event);
            });
            hostRef.$queuedListeners$ = null;
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        {
            promise = safeCall(instance, 'componentWillUpdate');
        }
    }
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, (instance.render && instance.render()));
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        else {
            {
                // we've already loaded this component
                // fire off the user's componentDidUpdate method (if one was provided)
                // componentDidUpdate runs AFTER render() has been called
                // and all child components have finished updating
                safeCall(instance, 'componentDidUpdate');
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var forceUpdate = function (elm, cmpMeta) {
    {
        var hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$();
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
        {
            safeCall(instance, 'disconnectedCallback');
        }
        {
            safeCall(instance, 'componentDidUnload');
        }
    }
};
var addEventListeners = function (elm, hostRef, listeners) {
    hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || [];
    var removeFns = listeners.map(function (_a) {
        var flags = _a[0], name = _a[1], method = _a[2];
        var target = (getHostListenerTarget(elm, flags));
        var handler = hostListenerProxy(hostRef, method);
        var opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return function () { return plt.rel(target, name, handler, opts); };
    });
    return function () { return removeFns.forEach(function (fn) { return fn(); }); };
};
var hostListenerProxy = function (hostRef, methodName) {
    return function (ev) {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                hostRef.$queuedListeners$.push([methodName, ev]);
            }
        }
    };
};
var getHostListenerTarget = function (elm, flags) {
    if (flags & 4 /* TargetDocument */)
        return doc;
    if (flags & 8 /* TargetWindow */)
        return win;
    if (flags & 32 /* TargetBody */)
        return doc.body;
    if (flags & 16 /* TargetParent */)
        return elm.parentElement;
    return elm;
};
var hostListenerOpts = function (flags) { return supportsListenerOptions ?
    {
        'passive': (flags & 1 /* Passive */) !== 0,
        'capture': (flags & 2 /* Capture */) !== 0,
    }
    : (flags & 2 /* Capture */) !== 0; };
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 2 /* Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if (((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            else if ((flags & 1 /* isElementConstructor */) && (memberFlags & 64 /* Method */)) {
                // proxyComponent - method
                Object.defineProperty(prototype_1, memberName, {
                    value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var ref = getHostRef(this);
                        return ref.$onReadyPromise$.then(function () {
                            var _a;
                            return (_a = ref.$lazyInstance$)[memberName].apply(_a, args);
                        });
                    }
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                    var propName = attrNameToPropName_1.get(attrName);
                    _this[propName] = newValue === null && typeof _this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
var modeResolutionChain = [];
var computeMode = function (elm) { return modeResolutionChain.map(function (h) { return h(elm); }).find(function (m) { return !!m; }); };
// Public
var setMode = function (handler) { return modeResolutionChain.push(handler); };
var getMode = function (ref) { return getHostRef(ref).$modeName$; };
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent, schedule;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 5];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                if (hostRef.$modeName$ == null) {
                    // initializeComponent
                    // looks like mode wasn't set as a property directly yet
                    // first check if there's an attribute
                    // next check the app's global
                    hostRef.$modeName$ = typeof cmpMeta.$lazyBundleIds$ !== 'string' ? computeMode(elm) : '';
                }
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta, hostRef);
                if (!Cstr.then) return [3 /*break*/, 2];
                return [4 /*yield*/, Cstr];
            case 1:
                // Await creates a micro-task avoid if possible
                Cstr = _a.sent();
                _a.label = 2;
            case 2:
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                {
                    hostRef.$flags$ |= 128 /* isWatchReady */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 5];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$, hostRef.$modeName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 4]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 138).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/@ionic/core/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 3:
                style_1 = _a.sent();
                _a.label = 4;
            case 4:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                Cstr.isStyleRegistered = true;
                _a.label = 5;
            case 5:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                if (ancestorComponent && ancestorComponent['s-lr'] === false && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
    {
        safeCall(instance, 'connectedCallback');
    }
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef_2 = getHostRef(elm);
        if (cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef_2.$rmListeners$ = addEventListeners(elm, hostRef_2, cmpMeta.$listeners$);
        }
        if (!(hostRef_2.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef_2.$flags$ |= 1 /* hasConnected */;
            var hostId = void 0;
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                    (cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && ancestorComponent['s-lr'] === false)) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef_2.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(function () { return initializeComponent(elm, hostRef_2, cmpMeta); });
            }
        }
        fireConnectedCallback(hostRef_2.$lazyInstance$);
    }
};
var setContentReference = function (elm, contentRefElm) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    var crName;
    {
        crName = '';
    }
    contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
            };
            class_1.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                forceUpdate(this, cmpMeta);
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getAssetPath = function (path) {
    var assetUrl = new URL(path, plt.$resourcesUrl$);
    return (assetUrl.origin !== win.location.origin)
        ? assetUrl.href
        : assetUrl.pathname;
};
var getConnect = function (_ref, tagName) {
    function componentOnReady() {
        var elm = doc.querySelector(tagName);
        if (!elm) {
            elm = doc.createElement(tagName);
            doc.body.appendChild(elm);
        }
        return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
    }
    function create() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return componentOnReady()
            .then(function (el) { return el.create.apply(el, args); });
    }
    return {
        create: create,
        componentOnReady: componentOnReady,
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };
var mode;
var getIonMode = function (ref) {
    return (ref && getMode(ref)) || mode;
};
var global0 = function () {
    var doc = document;
    var win = window;
    var Ionic = win.Ionic = win.Ionic || {};
    // Setup platforms
    Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["s"])(win);
    // create the Ionic.config from raw config object (if it exists)
    // and convert Ionic.config into a ConfigApi that has a get() fn
    var configObj = Object.assign({}, Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["c"])(win), { persistConfig: false }, Ionic.config, Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["a"])(win));
    _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].reset(configObj);
    if (_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('persistConfig')) {
        Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["d"])(win, configObj);
    }
    // first see if the mode was set as an attribute on <html>
    // which could have been set by the user, or by prerendering
    // otherwise get the mode via config settings, and fallback to md
    Ionic.config = _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"];
    Ionic.mode = mode = _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('mode', (doc.documentElement.getAttribute('mode')) || (Object(_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(win, 'ios') ? 'ios' : 'md'));
    _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].set('mode', mode);
    doc.documentElement.setAttribute('mode', mode);
    doc.documentElement.classList.add(mode);
    if (_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing')) {
        _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].set('animated', false);
    }
    setMode(function (elm) { return elm.mode = elm.mode || elm.getAttribute('mode') || mode; });
};
setMode(function (el) { return el.tagName === 'ION-ICON' ? el.mode || el.getAttribute('mode') : null; });
function globals() {
    global0();
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-1074393c.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-1074393c.js ***!
  \********************************************************************/
/*! exports provided: a, b, c, d, g, i, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configFromURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return configFromSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setupPlatforms; });
var getPlatforms = function (win) { return setupPlatforms(win); };
var isPlatform = function (win, platform) { return getPlatforms(win).indexOf(platform) > -1; };
var setupPlatforms = function (win) {
    win.Ionic = win.Ionic || {};
    var platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        platforms.forEach(function (p) { return win.document.documentElement.classList.add("plt-" + p); });
    }
    return platforms;
};
var isMobileWeb = function (win) { return isMobile(win) && !isHybrid(win); };
var detectPlatforms = function (win) { return Object.keys(PLATFORMS_MAP).filter(function (p) { return PLATFORMS_MAP[p](win); }); };
var isIpad = function (win) { return testUserAgent(win, /iPad/i); };
var isIphone = function (win) { return testUserAgent(win, /iPhone/i); };
var isIOS = function (win) { return testUserAgent(win, /iPad|iPhone|iPod/i); };
var isAndroid = function (win) { return testUserAgent(win, /android|sink/i); };
var isAndroidTablet = function (win) {
    return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
var isPhablet = function (win) {
    var width = win.innerWidth;
    var height = win.innerHeight;
    var smallest = Math.min(width, height);
    var largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
};
var isTablet = function (win) {
    var width = win.innerWidth;
    var height = win.innerHeight;
    var smallest = Math.min(width, height);
    var largest = Math.max(width, height);
    return (isIpad(win) ||
        isAndroidTablet(win) ||
        ((smallest > 460 && smallest < 820) &&
            (largest > 780 && largest < 1400)));
};
var isMobile = function (win) { return matchMedia(win, '(any-pointer:coarse)'); };
var isDesktop = function (win) { return !isMobile(win); };
var isHybrid = function (win) { return isCordova(win) || isCapacitorNative(win); };
var isCordova = function (win) { return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']); };
var isCapacitorNative = function (win) {
    var capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
};
var isElectron = function (win) { return testUserAgent(win, /electron/); };
var isPWA = function (win) { return win.matchMedia ? (win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone) : false; };
var testUserAgent = function (win, expr) { return win.navigator && win.navigator.userAgent ? expr.test(win.navigator.userAgent) : false; };
var matchMedia = function (win, query) { return win.matchMedia ? win.matchMedia(query).matches : false; };
var PLATFORMS_MAP = {
    'ipad': isIpad,
    'iphone': isIphone,
    'ios': isIOS,
    'android': isAndroid,
    'phablet': isPhablet,
    'tablet': isTablet,
    'cordova': isCordova,
    'capacitor': isCapacitorNative,
    'electron': isElectron,
    'pwa': isPWA,
    'mobile': isMobile,
    'mobileweb': isMobileWeb,
    'desktop': isDesktop,
    'hybrid': isHybrid
};
var Config = /** @class */ (function () {
    function Config() {
        this.m = new Map();
    }
    Config.prototype.reset = function (configObj) {
        this.m = new Map(Object.entries(configObj));
    };
    Config.prototype.get = function (key, fallback) {
        var value = this.m.get(key);
        return (value !== undefined) ? value : fallback;
    };
    Config.prototype.getBoolean = function (key, fallback) {
        if (fallback === void 0) { fallback = false; }
        var val = this.m.get(key);
        if (val === undefined) {
            return fallback;
        }
        if (typeof val === 'string') {
            return val === 'true';
        }
        return !!val;
    };
    Config.prototype.getNumber = function (key, fallback) {
        var val = parseFloat(this.m.get(key));
        return isNaN(val) ? (fallback !== undefined ? fallback : NaN) : val;
    };
    Config.prototype.set = function (key, value) {
        this.m.set(key, value);
    };
    return Config;
}());
var config = /*@__PURE__*/ new Config();
var configFromSession = function (win) {
    try {
        var configStr = win.sessionStorage.getItem(IONIC_SESSION_KEY);
        return configStr !== null ? JSON.parse(configStr) : {};
    }
    catch (e) {
        return {};
    }
};
var saveConfig = function (win, c) {
    try {
        win.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
    }
    catch (e) {
        return;
    }
};
var configFromURL = function (win) {
    var configObj = {};
    win.location.search.slice(1)
        .split('&')
        .map(function (entry) { return entry.split('='); })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [decodeURIComponent(key), decodeURIComponent(value)];
    })
        .filter(function (_a) {
        var key = _a[0];
        return startsWith(key, IONIC_PREFIX);
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key.slice(IONIC_PREFIX.length), value];
    })
        .forEach(function (_a) {
        var key = _a[0], value = _a[1];
        configObj[key] = value;
    });
    return configObj;
};
var startsWith = function (input, search) {
    return input.substr(0, search.length) === search;
};
var IONIC_PREFIX = 'ionic:';
var IONIC_SESSION_KEY = 'ionic-persist-config';



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/loader.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/loader.mjs ***!
  \*************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-09ec7fc0.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-09ec7fc0.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-1074393c.js");


var defineCustomElements = function (win, options) {
    return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(function () {
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["g"])();
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["b"])(JSON.parse("[[{\"ios\":\"ion-select_3-ios\",\"md\":\"ion-select_3-md\"},[[2,\"ion-select-popover\",{\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"options\":[16]},[[0,\"ionSelect\",\"onSelect\"]]],[1,\"ion-select\",{\"disabled\":[4],\"cancelText\":[1,\"cancel-text\"],\"okText\":[1,\"ok-text\"],\"placeholder\":[1],\"name\":[1],\"selectedText\":[1,\"selected-text\"],\"multiple\":[4],\"interface\":[1],\"interfaceOptions\":[8,\"interface-options\"],\"compareWith\":[1,\"compare-with\"],\"value\":[1032],\"isExpanded\":[32],\"open\":[64]},[[0,\"ionSelectOptionDidLoad\",\"selectOptionChanged\"],[0,\"ionSelectOptionDidUnload\",\"selectOptionChanged\"]]],[1,\"ion-select-option\",{\"disabled\":[4],\"selected\":[4],\"value\":[1032]}]]],[{\"ios\":\"ion-action-sheet-ios\",\"md\":\"ion-action-sheet-md\"},[[2,\"ion-action-sheet\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[0,\"ionBackdropTap\",\"onBackdropTap\"],[0,\"ionActionSheetWillDismiss\",\"dispatchCancelHandler\"]]]]],[{\"ios\":\"ion-fab_3-ios\",\"md\":\"ion-fab_3-md\"},[[1,\"ion-fab-button\",{\"color\":[1],\"activated\":[4],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"show\":[4],\"translucent\":[4],\"type\":[1],\"size\":[1]}],[1,\"ion-fab\",{\"horizontal\":[1],\"vertical\":[1],\"edge\":[4],\"activated\":[1028],\"close\":[64]}],[1,\"ion-fab-list\",{\"activated\":[4],\"side\":[1]}]]],[{\"ios\":\"ion-refresher_2-ios\",\"md\":\"ion-refresher_2-md\"},[[0,\"ion-refresher-content\",{\"pullingIcon\":[1025,\"pulling-icon\"],\"pullingText\":[1,\"pulling-text\"],\"refreshingSpinner\":[1025,\"refreshing-spinner\"],\"refreshingText\":[1,\"refreshing-text\"]}],[0,\"ion-refresher\",{\"pullMin\":[2,\"pull-min\"],\"pullMax\":[2,\"pull-max\"],\"closeDuration\":[1,\"close-duration\"],\"snapbackDuration\":[1,\"snapback-duration\"],\"pullFactor\":[2,\"pull-factor\"],\"disabled\":[4],\"state\":[32],\"complete\":[64],\"cancel\":[64],\"getProgress\":[64]}]]],[{\"ios\":\"ion-alert-ios\",\"md\":\"ion-alert-md\"},[[2,\"ion-alert\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"message\":[1],\"buttons\":[16],\"inputs\":[1040],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[0,\"ionBackdropTap\",\"onBackdropTap\"],[0,\"ionAlertWillDismiss\",\"dispatchCancelHandler\"]]]]],[{\"ios\":\"ion-back-button-ios\",\"md\":\"ion-back-button-md\"},[[2,\"ion-back-button\",{\"color\":[1],\"defaultHref\":[1,\"default-href\"],\"disabled\":[516],\"icon\":[1],\"text\":[1],\"type\":[1]}]]],[{\"ios\":\"ion-loading-ios\",\"md\":\"ion-loading-md\"},[[2,\"ion-loading\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"message\":[1],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"spinner\":[1025],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-toast-ios\",\"md\":\"ion-toast-md\"},[[1,\"ion-toast\",{\"overlayIndex\":[2,\"overlay-index\"],\"color\":[1],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"header\":[1],\"message\":[1],\"keyboardClose\":[4,\"keyboard-close\"],\"position\":[1],\"showCloseButton\":[4,\"show-close-button\"],\"closeButtonText\":[1,\"close-button-text\"],\"buttons\":[16],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]}]]],[{\"ios\":\"ion-card_5-ios\",\"md\":\"ion-card_5-md\"},[[6,\"ion-card\",{\"color\":[1],\"button\":[4],\"type\":[1],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1]}],[0,\"ion-card-content\"],[1,\"ion-card-header\",{\"color\":[1],\"translucent\":[4]}],[1,\"ion-card-subtitle\",{\"color\":[1]}],[1,\"ion-card-title\",{\"color\":[1]}]]],[{\"ios\":\"ion-item-option_3-ios\",\"md\":\"ion-item-option_3-md\"},[[1,\"ion-item-option\",{\"color\":[1],\"disabled\":[4],\"download\":[1],\"expandable\":[4],\"href\":[1],\"rel\":[1],\"target\":[1],\"type\":[1]}],[0,\"ion-item-options\",{\"side\":[1],\"fireSwipeEvent\":[64]}],[0,\"ion-item-sliding\",{\"disabled\":[4],\"state\":[32],\"getOpenAmount\":[64],\"getSlidingRatio\":[64],\"open\":[64],\"close\":[64],\"closeOpened\":[64]}]]],[{\"ios\":\"ion-infinite-scroll_2-ios\",\"md\":\"ion-infinite-scroll_2-md\"},[[0,\"ion-infinite-scroll-content\",{\"loadingSpinner\":[1025,\"loading-spinner\"],\"loadingText\":[1,\"loading-text\"]}],[0,\"ion-infinite-scroll\",{\"threshold\":[1],\"disabled\":[4],\"position\":[1],\"isLoading\":[32],\"complete\":[64]}]]],[{\"ios\":\"ion-reorder_2-ios\",\"md\":\"ion-reorder_2-md\"},[[1,\"ion-reorder\",null,[[2,\"click\",\"onClick\"]]],[0,\"ion-reorder-group\",{\"disabled\":[4],\"state\":[32],\"complete\":[64]}]]],[{\"ios\":\"ion-segment_2-ios\",\"md\":\"ion-segment_2-md\"},[[1,\"ion-segment-button\",{\"checked\":[1028],\"disabled\":[4],\"layout\":[1],\"type\":[1],\"value\":[1]}],[2,\"ion-segment\",{\"color\":[1],\"disabled\":[4],\"scrollable\":[4],\"value\":[1025]},[[0,\"ionSelect\",\"segmentClick\"]]]]],[{\"ios\":\"ion-tab-bar_2-ios\",\"md\":\"ion-tab-bar_2-md\"},[[1,\"ion-tab-button\",{\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"layout\":[1025],\"selected\":[1028],\"tab\":[1],\"target\":[1]},[[16,\"ionTabBarChanged\",\"onTabBarChanged\"]]],[1,\"ion-tab-bar\",{\"color\":[1],\"selectedTab\":[1,\"selected-tab\"],\"translucent\":[4],\"keyboardVisible\":[32]},[[8,\"keyboardWillHide\",\"onKeyboardWillHide\"],[8,\"keyboardWillShow\",\"onKeyboardWillShow\"]]]]],[{\"ios\":\"ion-chip-ios\",\"md\":\"ion-chip-md\"},[[1,\"ion-chip\",{\"color\":[1],\"outline\":[4]}]]],[{\"ios\":\"ion-modal-ios\",\"md\":\"ion-modal-md\"},[[2,\"ion-modal\",{\"overlayIndex\":[2,\"overlay-index\"],\"delegate\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"showBackdrop\":[4,\"show-backdrop\"],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[0,\"ionDismiss\",\"onDismiss\"],[0,\"ionBackdropTap\",\"onBackdropTap\"],[0,\"ionModalDidPresent\",\"lifecycle\"],[0,\"ionModalWillPresent\",\"lifecycle\"],[0,\"ionModalWillDismiss\",\"lifecycle\"],[0,\"ionModalDidDismiss\",\"lifecycle\"]]]]],[{\"ios\":\"ion-popover-ios\",\"md\":\"ion-popover-md\"},[[2,\"ion-popover\",{\"delegate\":[16],\"overlayIndex\":[2,\"overlay-index\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"component\":[1],\"componentProps\":[16],\"keyboardClose\":[4,\"keyboard-close\"],\"cssClass\":[1,\"css-class\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"event\":[8],\"showBackdrop\":[4,\"show-backdrop\"],\"translucent\":[4],\"animated\":[4],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64]},[[0,\"ionDismiss\",\"onDismiss\"],[0,\"ionBackdropTap\",\"onBackdropTap\"],[0,\"ionPopoverDidPresent\",\"lifecycle\"],[0,\"ionPopoverWillPresent\",\"lifecycle\"],[0,\"ionPopoverWillDismiss\",\"lifecycle\"],[0,\"ionPopoverDidDismiss\",\"lifecycle\"]]]]],[{\"ios\":\"ion-searchbar-ios\",\"md\":\"ion-searchbar-md\"},[[2,\"ion-searchbar\",{\"color\":[1],\"animated\":[4],\"autocomplete\":[1],\"autocorrect\":[1],\"cancelButtonIcon\":[1,\"cancel-button-icon\"],\"cancelButtonText\":[1,\"cancel-button-text\"],\"clearIcon\":[1,\"clear-icon\"],\"debounce\":[2],\"disabled\":[4],\"placeholder\":[1],\"searchIcon\":[1,\"search-icon\"],\"showCancelButton\":[8,\"show-cancel-button\"],\"spellcheck\":[4],\"type\":[1],\"value\":[1025],\"focused\":[32],\"noAnimate\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[\"ion-action-sheet-controller_8\",[[0,\"ion-action-sheet-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-alert-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[1,\"ion-anchor\",{\"color\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"]}],[0,\"ion-loading-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-modal-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-picker-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-popover-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}],[0,\"ion-toast-controller\",{\"create\":[64],\"dismiss\":[64],\"getTop\":[64]}]]],[{\"ios\":\"ion-app_8-ios\",\"md\":\"ion-app_8-md\"},[[0,\"ion-app\"],[2,\"ion-buttons\"],[1,\"ion-content\",{\"color\":[1],\"fullscreen\":[4],\"forceOverscroll\":[1028,\"force-overscroll\"],\"scrollX\":[4,\"scroll-x\"],\"scrollY\":[4,\"scroll-y\"],\"scrollEvents\":[4,\"scroll-events\"],\"getScrollElement\":[64],\"scrollToTop\":[64],\"scrollToBottom\":[64],\"scrollByPoint\":[64],\"scrollToPoint\":[64]},[[2,\"click\",\"onClick\"]]],[0,\"ion-footer\",{\"translucent\":[4]}],[0,\"ion-header\",{\"translucent\":[4]}],[1,\"ion-router-outlet\",{\"mode\":[1025],\"delegate\":[16],\"animated\":[4],\"animation\":[16],\"swipeHandler\":[16],\"commit\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}],[1,\"ion-title\",{\"color\":[1]}],[1,\"ion-toolbar\",{\"color\":[1]},[[0,\"ionStyle\",\"childrenStyle\"]]]]],[\"ion-nav_4\",[[1,\"ion-nav\",{\"delegate\":[16],\"swipeGesture\":[1028,\"swipe-gesture\"],\"animated\":[4],\"animation\":[16],\"rootParams\":[16],\"root\":[1],\"push\":[64],\"insert\":[64],\"insertPages\":[64],\"pop\":[64],\"popTo\":[64],\"popToRoot\":[64],\"removeIndex\":[64],\"setRoot\":[64],\"setPages\":[64],\"setRouteId\":[64],\"getRouteId\":[64],\"getActive\":[64],\"getByIndex\":[64],\"canGoBack\":[64],\"getPrevious\":[64]}],[0,\"ion-nav-pop\",null,[[0,\"click\",\"pop\"]]],[0,\"ion-nav-push\",{\"component\":[1],\"componentProps\":[16]},[[0,\"click\",\"push\"]]],[0,\"ion-nav-set-root\",{\"component\":[1],\"componentProps\":[16]},[[0,\"click\",\"push\"]]]]],[\"ion-route_4\",[[0,\"ion-route\",{\"url\":[1],\"component\":[1],\"componentProps\":[16]}],[0,\"ion-route-redirect\",{\"from\":[1],\"to\":[1]}],[0,\"ion-router\",{\"root\":[1],\"useHash\":[4,\"use-hash\"],\"push\":[64],\"back\":[64],\"printDebug\":[64],\"navChanged\":[64]},[[8,\"popstate\",\"onPopState\"],[4,\"ionBackButton\",\"onBackButton\"]]],[1,\"ion-router-link\",{\"color\":[1],\"href\":[1],\"rel\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1]}]]],[{\"ios\":\"ion-avatar_3-ios\",\"md\":\"ion-avatar_3-md\"},[[1,\"ion-avatar\"],[1,\"ion-badge\",{\"color\":[1]}],[1,\"ion-thumbnail\"]]],[\"ion-col_3\",[[1,\"ion-col\",{\"offset\":[1],\"offsetXs\":[1,\"offset-xs\"],\"offsetSm\":[1,\"offset-sm\"],\"offsetMd\":[1,\"offset-md\"],\"offsetLg\":[1,\"offset-lg\"],\"offsetXl\":[1,\"offset-xl\"],\"pull\":[1],\"pullXs\":[1,\"pull-xs\"],\"pullSm\":[1,\"pull-sm\"],\"pullMd\":[1,\"pull-md\"],\"pullLg\":[1,\"pull-lg\"],\"pullXl\":[1,\"pull-xl\"],\"push\":[1],\"pushXs\":[1,\"push-xs\"],\"pushSm\":[1,\"push-sm\"],\"pushMd\":[1,\"push-md\"],\"pushLg\":[1,\"push-lg\"],\"pushXl\":[1,\"push-xl\"],\"size\":[1],\"sizeXs\":[1,\"size-xs\"],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"],\"sizeXl\":[1,\"size-xl\"]},[[9,\"resize\",\"onResize\"]]],[1,\"ion-grid\",{\"fixed\":[4]}],[1,\"ion-row\"]]],[{\"ios\":\"ion-slide_2-ios\",\"md\":\"ion-slide_2-md\"},[[0,\"ion-slide\"],[4,\"ion-slides\",{\"options\":[8],\"pager\":[4],\"scrollbar\":[4],\"update\":[64],\"updateAutoHeight\":[64],\"slideTo\":[64],\"slideNext\":[64],\"slidePrev\":[64],\"getActiveIndex\":[64],\"getPreviousIndex\":[64],\"length\":[64],\"isEnd\":[64],\"isBeginning\":[64],\"startAutoplay\":[64],\"stopAutoplay\":[64],\"lockSwipeToNext\":[64],\"lockSwipeToPrev\":[64],\"lockSwipes\":[64]},[[0,\"ionSlideChanged\",\"onSlideChanged\"]]]]],[\"ion-tab_2\",[[1,\"ion-tab\",{\"active\":[1028],\"delegate\":[16],\"tab\":[1],\"component\":[1],\"setActive\":[64]}],[1,\"ion-tabs\",{\"useRouter\":[1028,\"use-router\"],\"tabs\":[32],\"selectedTab\":[32],\"select\":[64],\"getTab\":[64],\"getSelected\":[64],\"setRouteId\":[64],\"getRouteId\":[64]}]]],[{\"ios\":\"ion-checkbox-ios\",\"md\":\"ion-checkbox-md\"},[[1,\"ion-checkbox\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"indeterminate\":[1028],\"disabled\":[4],\"value\":[1]}]]],[\"ion-img\",[[1,\"ion-img\",{\"alt\":[1],\"src\":[1],\"loadSrc\":[32],\"loadError\":[32]}]]],[{\"ios\":\"ion-input-ios\",\"md\":\"ion-input-md\"},[[2,\"ion-input\",{\"color\":[1],\"accept\":[1],\"autocapitalize\":[1],\"autocomplete\":[1],\"autocorrect\":[1],\"autofocus\":[4],\"clearInput\":[4,\"clear-input\"],\"clearOnEdit\":[1028,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"inputmode\":[1],\"max\":[1],\"maxlength\":[2],\"min\":[1],\"minlength\":[2],\"multiple\":[4],\"name\":[1],\"pattern\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"step\":[1],\"size\":[2],\"type\":[1],\"value\":[1025],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[{\"ios\":\"ion-progress-bar-ios\",\"md\":\"ion-progress-bar-md\"},[[1,\"ion-progress-bar\",{\"type\":[1],\"reversed\":[4],\"value\":[2],\"buffer\":[2],\"color\":[1]}]]],[{\"ios\":\"ion-range-ios\",\"md\":\"ion-range-md\"},[[1,\"ion-range\",{\"color\":[1],\"debounce\":[2],\"name\":[1],\"dualKnobs\":[4,\"dual-knobs\"],\"min\":[2],\"max\":[2],\"pin\":[4],\"snaps\":[4],\"step\":[2],\"ticks\":[4],\"disabled\":[4],\"value\":[1026],\"ratioA\":[32],\"ratioB\":[32],\"pressedKnob\":[32]}]]],[{\"ios\":\"ion-split-pane-ios\",\"md\":\"ion-split-pane-md\"},[[0,\"ion-split-pane\",{\"contentId\":[1,\"content-id\"],\"disabled\":[4],\"when\":[8],\"visible\":[32]}]]],[\"ion-text\",[[1,\"ion-text\",{\"color\":[1]}]]],[{\"ios\":\"ion-textarea-ios\",\"md\":\"ion-textarea-md\"},[[2,\"ion-textarea\",{\"color\":[1],\"autocapitalize\":[1],\"autofocus\":[4],\"clearOnEdit\":[1028,\"clear-on-edit\"],\"debounce\":[2],\"disabled\":[4],\"maxlength\":[2],\"minlength\":[2],\"name\":[1],\"placeholder\":[1],\"readonly\":[4],\"required\":[4],\"spellcheck\":[4],\"cols\":[2],\"rows\":[2],\"wrap\":[1],\"autoGrow\":[4,\"auto-grow\"],\"value\":[1025],\"hasFocus\":[32],\"setFocus\":[64],\"getInputElement\":[64]}]]],[{\"ios\":\"ion-toggle-ios\",\"md\":\"ion-toggle-md\"},[[1,\"ion-toggle\",{\"color\":[1],\"name\":[1],\"checked\":[1028],\"disabled\":[4],\"value\":[1],\"activated\":[32]}]]],[\"ion-virtual-scroll\",[[0,\"ion-virtual-scroll\",{\"approxItemHeight\":[2,\"approx-item-height\"],\"approxHeaderHeight\":[2,\"approx-header-height\"],\"approxFooterHeight\":[2,\"approx-footer-height\"],\"headerFn\":[16],\"footerFn\":[16],\"items\":[16],\"itemHeight\":[16],\"renderItem\":[16],\"renderHeader\":[16],\"renderFooter\":[16],\"nodeRender\":[16],\"domRender\":[16],\"totalHeight\":[32],\"positionForItem\":[64],\"checkRange\":[64],\"checkEnd\":[64]},[[9,\"resize\",\"onResize\"]]]]],[{\"ios\":\"ion-menu_4-ios\",\"md\":\"ion-menu_4-md\"},[[1,\"ion-menu\",{\"contentId\":[1,\"content-id\"],\"menuId\":[1,\"menu-id\"],\"type\":[1025],\"disabled\":[1028],\"side\":[513],\"swipeGesture\":[4,\"swipe-gesture\"],\"maxEdgeStart\":[2,\"max-edge-start\"],\"isPaneVisible\":[32],\"isEndSide\":[32],\"isOpen\":[64],\"isActive\":[64],\"open\":[64],\"close\":[64],\"toggle\":[64],\"setOpen\":[64]},[[32,\"ionSplitPaneVisible\",\"onSplitPaneChanged\"],[2,\"click\",\"onBackdropClick\"]]],[1,\"ion-menu-button\",{\"color\":[1],\"disabled\":[4],\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"type\":[1],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[1,\"ion-menu-toggle\",{\"menu\":[1],\"autoHide\":[4,\"auto-hide\"],\"visible\":[32]},[[32,\"ionMenuChange\",\"visibilityChanged\"],[32,\"ionSplitPaneVisible\",\"visibilityChanged\"]]],[0,\"ion-menu-controller\",{\"open\":[64],\"close\":[64],\"toggle\":[64],\"enable\":[64],\"swipeGesture\":[64],\"isOpen\":[64],\"isEnabled\":[64],\"get\":[64],\"getOpen\":[64],\"getMenus\":[64],\"isAnimating\":[64],\"registerAnimation\":[64],\"_getInstance\":[64]}]]],[{\"ios\":\"ion-datetime_3-ios\",\"md\":\"ion-datetime_3-md\"},[[2,\"ion-picker\",{\"overlayIndex\":[2,\"overlay-index\"],\"keyboardClose\":[4,\"keyboard-close\"],\"enterAnimation\":[16],\"leaveAnimation\":[16],\"buttons\":[16],\"columns\":[16],\"cssClass\":[1,\"css-class\"],\"duration\":[2],\"showBackdrop\":[4,\"show-backdrop\"],\"backdropDismiss\":[4,\"backdrop-dismiss\"],\"animated\":[4],\"presented\":[32],\"present\":[64],\"dismiss\":[64],\"onDidDismiss\":[64],\"onWillDismiss\":[64],\"getColumn\":[64]},[[0,\"ionBackdropTap\",\"onBackdropTap\"]]],[1,\"ion-datetime\",{\"name\":[1],\"disabled\":[4],\"readonly\":[4],\"min\":[1025],\"max\":[1025],\"displayFormat\":[1,\"display-format\"],\"pickerFormat\":[1,\"picker-format\"],\"cancelText\":[1,\"cancel-text\"],\"doneText\":[1,\"done-text\"],\"yearValues\":[8,\"year-values\"],\"monthValues\":[8,\"month-values\"],\"dayValues\":[8,\"day-values\"],\"hourValues\":[8,\"hour-values\"],\"minuteValues\":[8,\"minute-values\"],\"monthNames\":[1,\"month-names\"],\"monthShortNames\":[1,\"month-short-names\"],\"dayNames\":[1,\"day-names\"],\"dayShortNames\":[1,\"day-short-names\"],\"pickerOptions\":[16],\"placeholder\":[1],\"value\":[1025],\"isExpanded\":[32],\"open\":[64]}],[0,\"ion-picker-column\",{\"col\":[16]}]]],[{\"ios\":\"ion-radio_2-ios\",\"md\":\"ion-radio_2-md\"},[[1,\"ion-radio\",{\"color\":[1],\"name\":[1],\"disabled\":[4],\"checked\":[1028],\"value\":[1032]}],[0,\"ion-radio-group\",{\"allowEmptySelection\":[4,\"allow-empty-selection\"],\"name\":[1],\"value\":[1032]},[[0,\"ionRadioDidLoad\",\"onRadioDidLoad\"],[0,\"ionRadioDidUnload\",\"onRadioDidUnload\"],[0,\"ionSelect\",\"onRadioSelect\"],[0,\"ionDeselect\",\"onRadioDeselect\"]]]]],[\"ion-spinner\",[[1,\"ion-spinner\",{\"color\":[1],\"duration\":[2],\"name\":[1],\"paused\":[4]}]]],[{\"ios\":\"ion-backdrop-ios\",\"md\":\"ion-backdrop-md\"},[[1,\"ion-backdrop\",{\"visible\":[4],\"tappable\":[4],\"stopPropagation\":[4,\"stop-propagation\"]},[[2,\"touchstart\",\"onTouchStart\"],[2,\"click\",\"onMouseDown\"],[2,\"mousedown\",\"onMouseDown\"]]]]],[\"ion-ripple-effect\",[[1,\"ion-ripple-effect\",{\"type\":[1],\"addRipple\":[64]}]]],[{\"ios\":\"ion-button_2-ios\",\"md\":\"ion-button_2-md\"},[[1,\"ion-button\",{\"color\":[1],\"buttonType\":[1025,\"button-type\"],\"disabled\":[516],\"expand\":[513],\"fill\":[1537],\"routerDirection\":[1,\"router-direction\"],\"download\":[1],\"href\":[1],\"rel\":[1],\"shape\":[513],\"size\":[513],\"strong\":[4],\"target\":[1],\"type\":[1]}],[1,\"ion-icon\",{\"color\":[1],\"ariaLabel\":[1537,\"aria-label\"],\"ios\":[1],\"md\":[1],\"flipRtl\":[4,\"flip-rtl\"],\"name\":[1],\"src\":[1],\"icon\":[8],\"size\":[1],\"lazy\":[4],\"svgContent\":[32],\"isVisible\":[32]}]]],[{\"ios\":\"ion-item_8-ios\",\"md\":\"ion-item_8-md\"},[[1,\"ion-item-divider\",{\"color\":[1],\"sticky\":[4]}],[0,\"ion-item-group\"],[1,\"ion-note\",{\"color\":[1]}],[1,\"ion-skeleton-text\",{\"animated\":[4],\"width\":[1]}],[1,\"ion-item\",{\"color\":[1],\"button\":[4],\"detail\":[4],\"detailIcon\":[1,\"detail-icon\"],\"disabled\":[4],\"download\":[1],\"href\":[1],\"rel\":[1],\"lines\":[1],\"routerDirection\":[1,\"router-direction\"],\"target\":[1],\"type\":[1],\"multipleInputs\":[32]},[[0,\"ionStyle\",\"itemStyle\"]]],[2,\"ion-label\",{\"color\":[1],\"position\":[1],\"noAnimate\":[32]}],[0,\"ion-list\",{\"lines\":[1],\"inset\":[4],\"closeSlidingItems\":[64]}],[1,\"ion-list-header\",{\"color\":[1]}]]]]"), options);
    });
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/polyfills/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/polyfills/index.js ***!
  \**************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 141).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/@ionic/core/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 139).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/@ionic/core/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 140).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/@ionic/core/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ionic/core/loader/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@ionic/core/loader/index.mjs ***!
  \***************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/polyfills/index.js */ "./node_modules/@ionic/core/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _dist_esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/esm/legacy/loader.mjs */ "./node_modules/@ionic/core/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _dist_esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });


(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();





/***/ }),

/***/ "./node_modules/@webcomponents/custom-elements/custom-elements.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@webcomponents/custom-elements/custom-elements.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){
/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(a){var b=aa.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function l(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function n(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function p(a,b,d){d=void 0===d?new Set:d;for(var c=a;c;){if(c.nodeType===Node.ELEMENT_NODE){var e=c;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){c=e.import;if(c instanceof Node&&!d.has(c))for(d.add(c),c=c.firstChild;c;c=c.nextSibling)p(c,b,d);c=n(a,e);continue}else if("template"===f){c=n(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)p(e,b,d)}c=c.firstChild?c.firstChild:n(a,c)}}function r(a,b,d){a[b]=d};function u(){this.a=new Map;this.g=new Map;this.c=[];this.f=[];this.b=!1}function ba(a,b,d){a.a.set(b,d);a.g.set(d.constructorFunction,d)}function ca(a,b){a.b=!0;a.c.push(b)}function da(a,b){a.b=!0;a.f.push(b)}function v(a,b){a.b&&p(b,function(b){return w(a,b)})}function w(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var d=0;d<a.c.length;d++)a.c[d](b);for(d=0;d<a.f.length;d++)a.f[d](b)}}
function x(a,b){var d=[];p(b,function(b){return d.push(b)});for(b=0;b<d.length;b++){var c=d[b];1===c.__CE_state?a.connectedCallback(c):y(a,c)}}function z(a,b){var d=[];p(b,function(b){return d.push(b)});for(b=0;b<d.length;b++){var c=d[b];1===c.__CE_state&&a.disconnectedCallback(c)}}
function A(a,b,d){d=void 0===d?{}:d;var c=d.u||new Set,e=d.i||function(b){return y(a,b)},f=[];p(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var d=b.import;d instanceof Node&&(d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0);d&&"complete"===d.readyState?d.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var d=b.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;var f=new Set(c);f.delete(d);A(a,d,{u:f,i:e})}})}else f.push(b)},c);if(a.b)for(b=
0;b<f.length;b++)w(a,f[b]);for(b=0;b<f.length;b++)e(f[b])}
function y(a,b){if(void 0===b.__CE_state){var d=b.ownerDocument;if(d.defaultView||d.__CE_isImportDocument&&d.__CE_hasRegistry)if(d=a.a.get(b.localName)){d.constructionStack.push(b);var c=d.constructorFunction;try{try{if(new c!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(t){throw b.__CE_state=2,t;}b.__CE_state=1;b.__CE_definition=d;if(d.attributeChangedCallback)for(d=d.observedAttributes,c=0;c<d.length;c++){var e=
d[c],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}l(b)&&a.connectedCallback(b)}}}u.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};u.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
u.prototype.attributeChangedCallback=function(a,b,d,c,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,d,c,e)};function B(a){var b=document;this.c=a;this.a=b;this.b=void 0;A(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function C(a){a.b&&a.b.disconnect()}B.prototype.f=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||C(this);for(b=0;b<a.length;b++)for(var d=a[b].addedNodes,c=0;c<d.length;c++)A(this.c,d[c])};function ea(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a)})}function D(a){if(a.a)throw Error("Already resolved.");a.a=void 0;a.b&&a.b(void 0)};function E(a){this.c=!1;this.a=a;this.j=new Map;this.f=function(b){return b()};this.b=!1;this.g=[];this.o=new B(a)}
E.prototype.l=function(a,b){var d=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var c=function(b){var a=e[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=c("connectedCallback");var t=c("disconnectedCallback");var k=c("adoptedCallback");var h=c("attributeChangedCallback");var m=b.observedAttributes||[]}catch(q){return}finally{this.c=!1}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:t,adoptedCallback:k,attributeChangedCallback:h,observedAttributes:m,constructionStack:[]};ba(this.a,
a,b);this.g.push(b);this.b||(this.b=!0,this.f(function(){return fa(d)}))};E.prototype.i=function(a){A(this.a,a)};
function fa(a){if(!1!==a.b){a.b=!1;for(var b=a.g,d=[],c=new Map,e=0;e<b.length;e++)c.set(b[e].localName,[]);A(a.a,document,{i:function(b){if(void 0===b.__CE_state){var e=b.localName,f=c.get(e);f?f.push(b):a.a.a.get(e)&&d.push(b)}}});for(e=0;e<d.length;e++)y(a.a,d[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=c.get(f.localName);for(var t=0;t<f.length;t++)y(a.a,f[t]);(e=a.j.get(e))&&D(e)}}}E.prototype.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
E.prototype.m=function(a){if(!g(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.j.get(a);if(b)return b.c;b=new ea;this.j.set(a,b);this.a.a.get(a)&&!this.g.some(function(b){return b.localName===a})&&D(b);return b.c};E.prototype.s=function(a){C(this.o);var b=this.f;this.f=function(d){return a(function(){return b(d)})}};window.CustomElementRegistry=E;E.prototype.define=E.prototype.l;E.prototype.upgrade=E.prototype.i;E.prototype.get=E.prototype.get;
E.prototype.whenDefined=E.prototype.m;E.prototype.polyfillWrapFlushCallback=E.prototype.s;var F=window.Document.prototype.createElement,G=window.Document.prototype.createElementNS,ha=window.Document.prototype.importNode,ia=window.Document.prototype.prepend,ja=window.Document.prototype.append,ka=window.DocumentFragment.prototype.prepend,la=window.DocumentFragment.prototype.append,H=window.Node.prototype.cloneNode,I=window.Node.prototype.appendChild,J=window.Node.prototype.insertBefore,K=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),N=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,ma=window.Element.prototype.insertAdjacentElement,na=window.Element.prototype.insertAdjacentHTML,oa=window.Element.prototype.prepend,
pa=window.Element.prototype.append,V=window.Element.prototype.before,qa=window.Element.prototype.after,ra=window.Element.prototype.replaceWith,sa=window.Element.prototype.remove,ta=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ua=window.HTMLElement.prototype.insertAdjacentElement,va=window.HTMLElement.prototype.insertAdjacentHTML;var wa=new function(){};function xa(){var a=X;window.HTMLElement=function(){function b(){var b=this.constructor,c=a.g.get(b);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var e=c.constructionStack;if(0===e.length)return e=F.call(document,c.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=c,w(a,e),e;c=e.length-1;var f=e[c];if(f===wa)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[c]=wa;Object.setPrototypeOf(f,b.prototype);w(a,f);return f}b.prototype=ta.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function Y(a,b,d){function c(b){return function(d){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var f=[],m=0;m<e.length;m++){var q=e[m];q instanceof Element&&l(q)&&f.push(q);if(q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)c.push(q);else c.push(q)}b.apply(this,e);for(e=0;e<f.length;e++)z(a,f[e]);if(l(this))for(e=0;e<c.length;e++)f=c[e],f instanceof Element&&x(a,f)}}void 0!==d.h&&(b.prepend=c(d.h));void 0!==d.append&&(b.append=c(d.append))};function ya(){var a=X;r(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var d=a.a.get(b);if(d)return new d.constructorFunction}b=F.call(this,b);w(a,b);return b});r(Document.prototype,"importNode",function(b,d){b=ha.call(this,b,!!d);this.__CE_hasRegistry?A(a,b):v(a,b);return b});r(Document.prototype,"createElementNS",function(b,d){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var c=a.a.get(d);if(c)return new c.constructorFunction}b=G.call(this,b,
d);w(a,b);return b});Y(a,Document.prototype,{h:ia,append:ja})};function za(){function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var d=void 0;if(this.firstChild){var e=this.childNodes,k=e.length;if(0<k&&l(this)){d=Array(k);for(var h=0;h<k;h++)d[h]=e[h]}}c.set.call(this,a);if(d)for(a=0;a<d.length;a++)z(b,d[a])}}})}var b=X;r(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);
a=J.call(this,a,c);if(l(this))for(c=0;c<e.length;c++)x(b,e[c]);return a}e=l(a);c=J.call(this,a,c);e&&z(b,a);l(this)&&x(b,a);return c});r(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=I.call(this,a);if(l(this))for(var e=0;e<c.length;e++)x(b,c[e]);return a}c=l(a);e=I.call(this,a);c&&z(b,a);l(this)&&x(b,a);return e});r(Node.prototype,"cloneNode",function(a){a=H.call(this,!!a);this.ownerDocument.__CE_hasRegistry?A(b,a):v(b,
a);return a});r(Node.prototype,"removeChild",function(a){var c=l(a),e=K.call(this,a);c&&z(b,a);return e});r(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=L.call(this,a,c);if(l(this))for(z(b,c),c=0;c<e.length;c++)x(b,e[c]);return a}e=l(a);var f=L.call(this,a,c),d=l(this);d&&z(b,c);e&&z(b,a);d&&x(b,a);return f});M&&M.get?a(Node.prototype,M):ca(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],
b=0;b<this.childNodes.length;b++){var f=this.childNodes[b];f.nodeType!==Node.COMMENT_NODE&&a.push(f.textContent)}return a.join("")},set:function(a){for(;this.firstChild;)K.call(this,this.firstChild);null!=a&&""!==a&&I.call(this,document.createTextNode(a))}})})};function Aa(a){function b(b){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var k=[],h=0;h<c.length;h++){var m=c[h];m instanceof Element&&l(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)d.push(m);else d.push(m)}b.apply(this,c);for(c=0;c<k.length;c++)z(a,k[c]);if(l(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&x(a,k)}}var d=Element.prototype;void 0!==V&&(d.before=b(V));void 0!==V&&(d.after=b(qa));void 0!==ra&&
r(d,"replaceWith",function(b){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var d=[],k=0;k<e.length;k++){var h=e[k];h instanceof Element&&l(h)&&d.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)c.push(h);else c.push(h)}k=l(this);ra.apply(this,e);for(e=0;e<d.length;e++)z(a,d[e]);if(k)for(z(a,this),e=0;e<c.length;e++)d=c[e],d instanceof Element&&x(a,d)});void 0!==sa&&r(d,"remove",function(){var b=l(this);sa.call(this);b&&z(a,this)})};function Ba(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var e=this,d=void 0;l(this)&&(d=[],p(this,function(a){a!==e&&d.push(a)}));b.set.call(this,a);if(d)for(var f=0;f<d.length;f++){var t=d[f];1===t.__CE_state&&c.disconnectedCallback(t)}this.ownerDocument.__CE_hasRegistry?A(c,this):v(c,this);return a}})}function b(a,b){r(a,"insertAdjacentElement",function(a,e){var d=l(e);a=b.call(this,a,e);d&&z(c,e);l(a)&&x(c,e);return a})}
function d(a,b){function e(a,b){for(var e=[];a!==b;a=a.nextSibling)e.push(a);for(b=0;b<e.length;b++)A(c,e[b])}r(a,"insertAdjacentHTML",function(a,c){a=a.toLowerCase();if("beforebegin"===a){var d=this.previousSibling;b.call(this,a,c);e(d||this.parentNode.firstChild,this)}else if("afterbegin"===a)d=this.firstChild,b.call(this,a,c),e(this.firstChild,d);else if("beforeend"===a)d=this.lastChild,b.call(this,a,c),e(d||this.firstChild,null);else if("afterend"===a)d=this.nextSibling,b.call(this,a,c),e(this.nextSibling,
d);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var c=X;N&&r(Element.prototype,"attachShadow",function(a){a=N.call(this,a);var b=c;if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var e=0;e<b.c.length;e++)b.c[e](a)}return this.__CE_shadowRoot=a});O&&O.get?a(Element.prototype,O):W&&W.get?a(HTMLElement.prototype,W):da(c,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return H.call(this,!0).innerHTML},
set:function(a){var b="template"===this.localName,c=b?this.content:this,e=G.call(document,this.namespaceURI,this.localName);for(e.innerHTML=a;0<c.childNodes.length;)K.call(c,c.childNodes[0]);for(a=b?e.content:e;0<a.childNodes.length;)I.call(c,a.childNodes[0])}})});r(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return Q.call(this,a,b);var e=P.call(this,a);Q.call(this,a,b);b=P.call(this,a);c.attributeChangedCallback(this,a,e,b,null)});r(Element.prototype,"setAttributeNS",function(a,
b,d){if(1!==this.__CE_state)return T.call(this,a,b,d);var e=S.call(this,a,b);T.call(this,a,b,d);d=S.call(this,a,b);c.attributeChangedCallback(this,b,e,d,a)});r(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return R.call(this,a);var b=P.call(this,a);R.call(this,a);null!==b&&c.attributeChangedCallback(this,a,b,null,null)});r(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return U.call(this,a,b);var d=S.call(this,a,b);U.call(this,a,b);var e=S.call(this,
a,b);d!==e&&c.attributeChangedCallback(this,b,d,e,a)});ua?b(HTMLElement.prototype,ua):ma?b(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");va?d(HTMLElement.prototype,va):na?d(Element.prototype,na):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Y(c,Element.prototype,{h:oa,append:pa});Aa(c)};var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new u;xa();ya();Y(X,DocumentFragment.prototype,{h:ka,append:la});za();Ba();document.__CE_hasRegistry=!0;var customElements=new E(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/core/css/ionic.bundle.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@ionic/core/css/ionic.bundle.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html.ios{--ion-default-font:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",\"Roboto\",sans-serif}html.md{--ion-default-font:\"Roboto\",\"Helvetica Neue\",sans-serif}body.backdrop-no-scroll{overflow:hidden}.ion-color-primary{--ion-color-base:var(--ion-color-primary, #3880ff)!important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255)!important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0)!important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff)!important}.ion-color-secondary{--ion-color-base:var(--ion-color-secondary, #0cd1e8)!important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 12, 209, 232)!important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-secondary-shade, #0bb8cc)!important;--ion-color-tint:var(--ion-color-secondary-tint, #24d6ea)!important}.ion-color-tertiary{--ion-color-base:var(--ion-color-tertiary, #7044ff)!important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 112, 68, 255)!important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-tertiary-shade, #633ce0)!important;--ion-color-tint:var(--ion-color-tertiary-tint, #7e57ff)!important}.ion-color-success{--ion-color-base:var(--ion-color-success, #10dc60)!important;--ion-color-base-rgb:var(--ion-color-success-rgb, 16, 220, 96)!important;--ion-color-contrast:var(--ion-color-success-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-success-shade, #0ec254)!important;--ion-color-tint:var(--ion-color-success-tint, #28e070)!important}.ion-color-warning{--ion-color-base:var(--ion-color-warning, #ffce00)!important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 206, 0)!important;--ion-color-contrast:var(--ion-color-warning-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-warning-shade, #e0b500)!important;--ion-color-tint:var(--ion-color-warning-tint, #ffd31a)!important}.ion-color-danger{--ion-color-base:var(--ion-color-danger, #f04141)!important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 240, 65, 65)!important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-danger-shade, #d33939)!important;--ion-color-tint:var(--ion-color-danger-tint, #f25454)!important}.ion-color-light{--ion-color-base:var(--ion-color-light, #f4f5f8)!important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248)!important;--ion-color-contrast:var(--ion-color-light-contrast, #000)!important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0)!important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da)!important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9)!important}.ion-color-medium{--ion-color-base:var(--ion-color-medium, #989aa2)!important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 152, 154, 162)!important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-medium-shade, #86888f)!important;--ion-color-tint:var(--ion-color-medium-tint, #a2a4ab)!important}.ion-color-dark{--ion-color-base:var(--ion-color-dark, #222428)!important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40)!important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff)!important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255)!important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023)!important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e)!important}.ion-page{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}.ion-page-hidden,[hidden],ion-action-sheet-controller,ion-alert-controller,ion-loading-controller,ion-menu-controller,ion-modal-controller,ion-nav-controller,ion-picker-controller,ion-popover-controller,ion-route,ion-route-redirect,ion-router,ion-select-option,ion-toast-controller{display:none!important}.ion-page-invisible{opacity:0}html.plt-ios.plt-hybrid,html.plt-ios.plt-pwa{--ion-statusbar-padding:20px}@supports (padding-top:20px){html{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top:constant(safe-area-inset-top)){html{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top:env(safe-area-inset-top)){html{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}audio,canvas,progress,video{vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:700}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:1px;border-width:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}input,label,select,textarea{font-family:inherit;line-height:normal}textarea{overflow:auto;height:auto;font:inherit;color:inherit}textarea::placeholder{padding-left:2px}form,input,optgroup,select{margin:0;font:inherit;color:inherit}html input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:button}.ion-tappable,[tappable],[tappable] div,[tappable] ion-icon,[tappable] ion-label,[tappable] span,a,a div,a ion-icon,a ion-label,a span,button,button div,button ion-icon,button ion-label,button span,input,textarea{touch-action:manipulation}a ion-label,button ion-label{pointer-events:none}button{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable]{cursor:pointer}a[disabled],button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input[type=checkbox],input[type=radio]{padding:0;box-sizing:border-box}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html{--ion-font-family:var(--ion-default-font);width:100%;height:100%;text-size-adjust:100%;font-family:var(--ion-font-family)}html:not(.hydrated) body{display:none}html.plt-pwa{height:100vh}body{background:var(--ion-background-color);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;text-size-adjust:none;margin:0;padding:0}a{background-color:transparent;color:var(--ion-color-primary,#3880ff)}h1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1{margin-top:20px;font-size:26px}h2{margin-top:18px;font-size:24px}h3{font-size:22px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}small{font-size:75%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}.ion-no-padding,[no-padding]{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;padding:0}.ion-padding,[padding]{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px);-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}}.ion-padding-top,[padding-top]{--padding-top:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px)}.ion-padding-start,[padding-start]{--padding-start:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px)}.ion-padding-end,[padding-end]{--padding-end:var(--ion-padding, 16px);padding-right:var(--ion-padding,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px)}.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}}.ion-padding-bottom,[padding-bottom]{--padding-bottom:var(--ion-padding, 16px);padding-bottom:var(--ion-padding,16px)}.ion-padding-vertical,[padding-vertical]{--padding-top:var(--ion-padding, 16px);--padding-bottom:var(--ion-padding, 16px);padding-top:var(--ion-padding,16px);padding-bottom:var(--ion-padding,16px)}.ion-padding-horizontal,[padding-horizontal]{--padding-start:var(--ion-padding, 16px);--padding-end:var(--ion-padding, 16px);padding-left:var(--ion-padding,16px);padding-right:var(--ion-padding,16px)}.ion-no-margin,[no-margin]{--margin-start:0;--margin-end:0;--margin-top:0;--margin-bottom:0;margin:0}.ion-margin,[margin]{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding,16px);padding-inline-start:var(--ion-padding,16px);-webkit-padding-end:var(--ion-padding,16px);padding-inline-end:var(--ion-padding,16px)}.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px);-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-margin-top,[margin-top]{--margin-top:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px)}.ion-margin-start,[margin-start]{--margin-start:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px)}.ion-margin-end,[margin-end]{--margin-end:var(--ion-margin, 16px);margin-right:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px)}.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-margin-bottom,[margin-bottom]{--margin-bottom:var(--ion-margin, 16px);margin-bottom:var(--ion-margin,16px)}.ion-margin-vertical,[margin-vertical]{--margin-top:var(--ion-margin, 16px);--margin-bottom:var(--ion-margin, 16px);margin-top:var(--ion-margin,16px);margin-bottom:var(--ion-margin,16px)}.ion-margin-horizontal,[margin-horizontal]{--margin-start:var(--ion-margin, 16px);--margin-end:var(--ion-margin, 16px);margin-left:var(--ion-margin,16px);margin-right:var(--ion-margin,16px)}@supports (margin-inline-start:0) or (-webkit-margin-start:0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin,16px);margin-inline-start:var(--ion-margin,16px);-webkit-margin-end:var(--ion-margin,16px);margin-inline-end:var(--ion-margin,16px)}}.ion-float-left,[float-left]{float:left!important}.ion-float-right,[float-right]{float:right!important}.ion-float-start,[float-start]{float:left!important}:host-context([dir=rtl]) .ion-float-start,:host-context([dir=rtl]) [float-start],[dir=rtl] .ion-float-start,[dir=rtl] [float-start]{float:right!important}.ion-float-end,[float-end]{float:right!important}:host-context([dir=rtl]) .ion-float-end,:host-context([dir=rtl]) [float-end],[dir=rtl] .ion-float-end,[dir=rtl] [float-end]{float:left!important}.ion-text-center,[text-center]{text-align:center!important}.ion-text-justify,[text-justify]{text-align:justify!important}.ion-text-start,[text-start]{text-align:start!important}.ion-text-end,[text-end]{text-align:end!important}.ion-text-left,[text-left]{text-align:left!important}.ion-text-right,[text-right]{text-align:right!important}.ion-text-nowrap,[text-nowrap]{white-space:nowrap!important}.ion-text-wrap,[text-wrap]{white-space:normal!important}.ion-text-uppercase,[text-uppercase]{text-transform:uppercase!important}.ion-text-lowercase,[text-lowercase]{text-transform:lowercase!important}.ion-text-capitalize,[text-capitalize]{text-transform:capitalize!important}.ion-align-self-start,[align-self-start]{align-self:flex-start!important}.ion-align-self-end,[align-self-end]{align-self:flex-end!important}.ion-align-self-center,[align-self-center]{align-self:center!important}.ion-align-self-stretch,[align-self-stretch]{align-self:stretch!important}.ion-align-self-baseline,[align-self-baseline]{align-self:baseline!important}.ion-align-self-auto,[align-self-auto]{align-self:auto!important}.ion-wrap,[wrap]{flex-wrap:wrap!important}.ion-nowrap,[nowrap]{flex-wrap:nowrap!important}.ion-wrap-reverse,[wrap-reverse]{flex-wrap:wrap-reverse!important}.ion-justify-content-start,[justify-content-start]{justify-content:flex-start!important}.ion-justify-content-center,[justify-content-center]{justify-content:center!important}.ion-justify-content-end,[justify-content-end]{justify-content:flex-end!important}.ion-justify-content-around,[justify-content-around]{justify-content:space-around!important}.ion-justify-content-between,[justify-content-between]{justify-content:space-between!important}.ion-justify-content-evenly,[justify-content-evenly]{justify-content:space-evenly!important}.ion-align-items-start,[align-items-start]{align-items:flex-start!important}.ion-align-items-center,[align-items-center]{align-items:center!important}.ion-align-items-end,[align-items-end]{align-items:flex-end!important}.ion-align-items-stretch,[align-items-stretch]{align-items:stretch!important}.ion-align-items-baseline,[align-items-baseline]{align-items:baseline!important}.ion-hide,.ion-hide-up{display:none!important}@media (max-width:575px){.ion-hide-down{display:none!important}}@media (min-width:576px){.ion-float-sm-left,[float-sm-left]{float:left!important}.ion-float-sm-right,[float-sm-right]{float:right!important}.ion-float-sm-start,[float-sm-start]{float:left!important}:host-context([dir=rtl]) .ion-float-sm-start,:host-context([dir=rtl]) [float-sm-start],[dir=rtl] .ion-float-sm-start,[dir=rtl] [float-sm-start]{float:right!important}.ion-float-sm-end,[float-sm-end]{float:right!important}:host-context([dir=rtl]) .ion-float-sm-end,:host-context([dir=rtl]) [float-sm-end],[dir=rtl] .ion-float-sm-end,[dir=rtl] [float-sm-end]{float:left!important}.ion-text-sm-center,[text-sm-center]{text-align:center!important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify!important}.ion-text-sm-start,[text-sm-start]{text-align:start!important}.ion-text-sm-end,[text-sm-end]{text-align:end!important}.ion-text-sm-left,[text-sm-left]{text-align:left!important}.ion-text-sm-right,[text-sm-right]{text-align:right!important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap!important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal!important}.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase!important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase!important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize!important}.ion-hide-sm-up{display:none!important}}@media (max-width:767px){.ion-hide-sm-down{display:none!important}}@media (min-width:768px){.ion-float-md-left,[float-md-left]{float:left!important}.ion-float-md-right,[float-md-right]{float:right!important}.ion-float-md-start,[float-md-start]{float:left!important}:host-context([dir=rtl]) .ion-float-md-start,:host-context([dir=rtl]) [float-md-start],[dir=rtl] .ion-float-md-start,[dir=rtl] [float-md-start]{float:right!important}.ion-float-md-end,[float-md-end]{float:right!important}:host-context([dir=rtl]) .ion-float-md-end,:host-context([dir=rtl]) [float-md-end],[dir=rtl] .ion-float-md-end,[dir=rtl] [float-md-end]{float:left!important}.ion-text-md-center,[text-md-center]{text-align:center!important}.ion-text-md-justify,[text-md-justify]{text-align:justify!important}.ion-text-md-start,[text-md-start]{text-align:start!important}.ion-text-md-end,[text-md-end]{text-align:end!important}.ion-text-md-left,[text-md-left]{text-align:left!important}.ion-text-md-right,[text-md-right]{text-align:right!important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap!important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal!important}.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase!important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase!important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize!important}.ion-hide-md-up{display:none!important}}@media (max-width:991px){.ion-hide-md-down{display:none!important}}@media (min-width:992px){.ion-float-lg-left,[float-lg-left]{float:left!important}.ion-float-lg-right,[float-lg-right]{float:right!important}.ion-float-lg-start,[float-lg-start]{float:left!important}:host-context([dir=rtl]) .ion-float-lg-start,:host-context([dir=rtl]) [float-lg-start],[dir=rtl] .ion-float-lg-start,[dir=rtl] [float-lg-start]{float:right!important}.ion-float-lg-end,[float-lg-end]{float:right!important}:host-context([dir=rtl]) .ion-float-lg-end,:host-context([dir=rtl]) [float-lg-end],[dir=rtl] .ion-float-lg-end,[dir=rtl] [float-lg-end]{float:left!important}.ion-text-lg-center,[text-lg-center]{text-align:center!important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify!important}.ion-text-lg-start,[text-lg-start]{text-align:start!important}.ion-text-lg-end,[text-lg-end]{text-align:end!important}.ion-text-lg-left,[text-lg-left]{text-align:left!important}.ion-text-lg-right,[text-lg-right]{text-align:right!important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap!important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal!important}.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase!important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase!important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize!important}.ion-hide-lg-up{display:none!important}}@media (max-width:1199px){.ion-hide-lg-down{display:none!important}}@media (min-width:1200px){.ion-float-xl-left,[float-xl-left]{float:left!important}.ion-float-xl-right,[float-xl-right]{float:right!important}.ion-float-xl-start,[float-xl-start]{float:left!important}:host-context([dir=rtl]) .ion-float-xl-start,:host-context([dir=rtl]) [float-xl-start],[dir=rtl] .ion-float-xl-start,[dir=rtl] [float-xl-start]{float:right!important}.ion-float-xl-end,[float-xl-end]{float:right!important}:host-context([dir=rtl]) .ion-float-xl-end,:host-context([dir=rtl]) [float-xl-end],[dir=rtl] .ion-float-xl-end,[dir=rtl] [float-xl-end]{float:left!important}.ion-text-xl-center,[text-xl-center]{text-align:center!important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify!important}.ion-text-xl-start,[text-xl-start]{text-align:start!important}.ion-text-xl-end,[text-xl-end]{text-align:end!important}.ion-text-xl-left,[text-xl-left]{text-align:left!important}.ion-text-xl-right,[text-xl-right]{text-align:right!important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap!important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal!important}.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase!important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase!important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize!important}.ion-hide-xl-up{display:none!important}}.ion-hide-xl-down{display:none!important}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/alert.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/alert.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "ion-alert {\n    --ion-text-color: var(--ion-color-dark);\n    --ion-color-primary: var(--ion-color-dark);\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/deck.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/deck.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "deckgo-deck {\n    --background: white;\n    --color: black;\n}\n\ndeckgo-deck h1, deckgo-deck h2, deckgo-deck h3, deckgo-deck section, deckgo-deck deckgo-highlight-code {\n    width: 100%;\n\n    padding: 8px;\n}\n\ndeckgo-slide-split {\n    --slide-split-padding-top: 64px;\n    --slide-split-padding-bottom: 64px;\n}\n\n@media screen and (max-width: 1024px) {\n    deckgo-slide-split {\n        --slide-split-padding-top: 32px;\n        --slide-split-padding-bottom: 32px;\n    }\n}\n\ndeckgo-deck > * div[slot=\"background\"] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ndeckgo-deck :not([slot=\"background\"]) > deckgo-lazy-img {\n    --deckgo-lazy-img-padding: 16px;\n}\n\ndeckgo-deck [slot=\"background\"] > deckgo-lazy-img {\n    min-width: 100%;\n    min-height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    --deckgo-lazy-img-min-width: 100%;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/font.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/font.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "deckgo-deck *:not(b), deckgo-deck h3, deckgo-deck h4, deckgo-deck h5, deckgo-deck h6 {\n    font-weight: 300;\n}\n\ndeckgo-deck a, deckgo-deck strong {\n    font-weight: 500;\n}\n\ndeckgo-deck h1 {\n    font-size: 3em;\n    min-height: 1.5em;\n}\n\ndeckgo-deck h2 {\n    font-size: 2em;\n    min-height: 1.7em;\n}\n\ndeckgo-deck h3 {\n    font-size: 1.4em;\n    min-height: 2em;\n}\n\ndeckgo-deck section {\n    font-size: 1.4em;\n    min-height: 2em;\n}\n\ndeckgo-deck section ol, deckgo-deck section ul {\n    font-size: inherit;\n}\n\ndeckgo-deck h1, deckgo-deck h2, deckgo-deck h3, deckgo-deck h4, deckgo-deck h5, deckgo-deck h6 {\n    max-width: 100%\n}\n\ndeckgo-deck {\n    --deckgo-highlight-code-font-family: Menlo, monospace;\n    --deckgo-highlight-code-scroll: auto;\n\n    --pager-text-size: 0.6rem;\n}\n\ndeckgo-deck ion-label, deckgo-deck ion-label[text-wrap].sc-ion-label-md-h, deckgo-deck p {\n    font-size: 1em;\n}\n\n@media(max-width: 768px) {\n    deckgo-deck h1 {\n        font-size: 2.4em;\n    }\n\n    deckgo-deck h3 {\n        font-size: 1.2em;\n    }\n}\n\n@media(min-width: 992px) {\n    deckgo-deck {\n        font-size: 32px;\n    }\n\n    deckgo-deck ion-label, deckgo-deck ion-label[text-wrap].sc-ion-label-md-h, deckgo-deck p {\n        font-size: 32px;\n    }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/google-fonts.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/google-fonts.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: url(/assets/fonts/XRXV3I6Li01BKofINeaF.eot);\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(/assets/fonts/XRXV3I6Li01BKofIOuaBXso.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(/assets/fonts/XRXV3I6Li01BKofIO-aBXso.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(/assets/fonts/XRXV3I6Li01BKofINeaB.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(/assets/fonts/XRXV3I6Li01BKofINeaH.woff) format('woff');\n}\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(/assets/fonts/XRXV3I6Li01BKofINeaETMnFcQ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Nunito';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Nunito Regular'), local('Nunito-Regular'), url(/assets/fonts/XRXV3I6Li01BKofINeaG) format('svg');\n}\n\n:root {\n--ion-font-family: \"Nunito\";\n}\n\n* {\nfont-family: \"Nunito\";\n--ion-font-family: \"Nunito\";\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "ion-modal[class*=\"sc-ion-modal\"] {\n    --min-height: 570px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/pager.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/pager.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "deckgo-deck {\n    --pager-background: var(--ion-color-tertiary-tint);\n    --pager-color: var(--ion-color-primary-shade);\n    --pager-text-color: var(--ion-color-primary-shade);\n\n    --pager-margin-bottom: 18px;\n\n    --pager-size: 40px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popover.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popover.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "ion-popover {\n    --ion-background-color: white;\n    --ion-item-text-color: var(--ion-color-dark);\n}\n\nion-popover ion-list-header {\n    --color: var(--ion-color-dark);\n}\n\nion-popover ion-item {\n    --color: var(--ion-color-dark);\n}\n\nion-popover[class*=\"sc-ion-popover\"] {\n    --width: 280px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/print.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/print.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@media print {\n\n    body {\n        position: inherit;\n    }\n\n    ion-app.ion-page {\n        overflow: visible;\n        contain: none;\n    }\n\n    ion-content {\n        contain: none;\n    }\n\n    #navigation {\n        display: none;\n    }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/theme.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n    background: #3880ff;\n    --ion-background-color: #3880ff;\n    --ion-text-color: var(--ion-color-primary);\n    --ion-header-size: 40px;\n}\n\nion-content {\n    --ion-background-color: transparent;\n}\n\nion-fab {\n    direction: ltr;\n    display: flex;\n}\n\nion-fab ion-fab-button.hide-on-mobile {\n    display: var(--deckgo-hide-on-mobile);\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/variables.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/variables.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n    --ion-color-primary: #ffffff;\n    --ion-color-primary-rgb: 255,255,255;\n    --ion-color-primary-contrast: #000000;\n    --ion-color-primary-contrast-rgb: 0,0,0;\n    --ion-color-primary-shade: #e0e0e0;\n    --ion-color-primary-tint: #ffffff;\n\n    --ion-color-secondary: #1a3d7a;\n    --ion-color-secondary-rgb: 26,61,122;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #17366b;\n    --ion-color-secondary-tint: #315087;\n\n    --ion-color-tertiary: #3880ff;\n    --ion-color-tertiary-rgb: 56,128,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #3171e0;\n    --ion-color-tertiary-tint: #4c8dff;\n\n    --ion-color-success: #10dc60;\n    --ion-color-success-rgb: 16,220,96;\n    --ion-color-success-contrast: #ffffff;\n    --ion-color-success-contrast-rgb: 255,255,255;\n    --ion-color-success-shade: #0ec254;\n    --ion-color-success-tint: #28e070;\n\n    --ion-color-warning: #ffce00;\n    --ion-color-warning-rgb: 255,206,0;\n    --ion-color-warning-contrast: #ffffff;\n    --ion-color-warning-contrast-rgb: 255,255,255;\n    --ion-color-warning-shade: #e0b500;\n    --ion-color-warning-tint: #ffd31a;\n\n    --ion-color-danger: #f04141;\n    --ion-color-danger-rgb: 245,61,61;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #d33939;\n    --ion-color-danger-tint: #f25454;\n\n    --ion-color-dark: #222428;\n    --ion-color-dark-rgb: 34,34,34;\n    --ion-color-dark-contrast: #ffffff;\n    --ion-color-dark-contrast-rgb: 255,255,255;\n    --ion-color-dark-shade: #1e2023;\n    --ion-color-dark-tint: #383a3e;\n\n    --ion-color-medium: #1a3d7a;\n    --ion-color-medium-rgb: 26,61,122;\n    --ion-color-medium-contrast: #ffffff;\n    --ion-color-medium-contrast-rgb: 255,255,255;\n    --ion-color-medium-shade: #17366b;\n    --ion-color-medium-tint: #315087;\n\n    --ion-color-light: #f4f5f8;\n    --ion-color-light-rgb: 244,244,244;\n    --ion-color-light-contrast: #000000;\n    --ion-color-light-contrast-rgb: 0,0,0;\n    --ion-color-light-shade: #d7d8da;\n    --ion-color-light-tint: #f5f6f9;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/ionicons/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-icon.entry.js": [
		"./node_modules/ionicons/dist/esm/legacy/ion-icon.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/ionicons/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/ionicons/dist/esm/legacy/chunk-a6a54157.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy/chunk-a6a54157.js ***!
  \*****************************************************************/
/*! exports provided: H, a, b, c, d, g, h, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAssetPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var NAMESPACE = 'ionicons';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var bundleId = cmpMeta.$lazyBundleIds$;
    return __webpack_require__("./node_modules/ionicons/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) { return importedModule[cmpMeta.$tagName$.replace(/-/g, '_')]; }, consoleError);
};
var styles = new Map();
var cssVarShim = /*@__PURE__*/ win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue) { return function (cb) {
    // queue dom reads
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        plt.raf(flush);
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (7 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 142).then(__webpack_require__.t.bind(null, /*! ./css-shim-3ea8955c-3ea8955c.js */ "./node_modules/ionicons/dist/esm/legacy/css-shim-3ea8955c-3ea8955c.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 143).then(__webpack_require__.t.bind(null, /*! ./dom-a0c82e31-a0c82e31.js */ "./node_modules/ionicons/dist/esm/legacy/dom-a0c82e31-a0c82e31.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var hostTagName;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement(newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return newVNode.$elm$;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = (parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    hostTagName = toLowerCase(hostElm.tagName);
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.forEach(function (_a) {
            var propName = _a[0], attribute = _a[1];
            return rootVnode.$attrs$[attribute] = hostElm[propName];
        });
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
};
var safeCall = function (instance, method) { return __awaiter(_this, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(instance && instance[method])) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, instance[method]()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                consoleError(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) { return __awaiter(_this, void 0, void 0, function () {
    var instance;
    return __generator(this, function (_a) {
        {
            hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
        }
        instance = hostRef.$lazyInstance$;
        if (isInitialLoad) {
            {
                hostRef.$flags$ |= 128 /* isWatchReady */;
            }
        }
        // there is no ancestorc omponent or the ancestor component
        // has already fired off its lifecycle update then
        // fire off the initial update
        {
            writeTask(function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); });
        }
        return [2 /*return*/];
    });
}); };
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var forceUpdate = function (elm, cmpMeta) {
    {
        var hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
        var instance = hostRef.$lazyInstance$;
        {
            safeCall(instance, 'disconnectedCallback');
        }
    }
};
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        if (propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
                var watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.forEach(function (watchMethodName) {
                        try {
                            // fire off each of the watch methods that are watching this property
                            (hostRef.$lazyInstance$)[watchMethodName].call((hostRef.$lazyInstance$), newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e);
                        }
                    });
                }
            }
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if (((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var propName = attrNameToPropName_1.get(attrName);
                this[propName] = newValue === null && typeof this[propName] === 'boolean'
                    ? false
                    : newValue;
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                if (m[0] & 512 /* ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
var getMode = function (ref) { return getHostRef(ref).$modeName$; };
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 4];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                return [4 /*yield*/, loadModule(cmpMeta)];
            case 1:
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = _a.sent();
                if (!Cstr.isProxied) {
                    // we'eve never proxied this Constructor before
                    // let's add the getters/setters to its prototype before
                    // the first time we create an instance of the implementation
                    {
                        cmpMeta.$watchers$ = Cstr.watchers;
                    }
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                fireConnectedCallback(hostRef.$lazyInstance$);
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 4];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 3]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 144).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/ionicons/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 2:
                style_1 = _a.sent();
                _a.label = 3;
            case 3:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                Cstr.isStyleRegistered = true;
                _a.label = 4;
            case 4:
                {
                    scheduleUpdate(elm, hostRef, cmpMeta, true);
                }
                return [2 /*return*/];
        }
    });
}); };
var fireConnectedCallback = function (instance) {
    {
        safeCall(instance, 'connectedCallback');
    }
};
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        fireConnectedCallback(hostRef.$lazyInstance$);
    }
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || '/', win.location.href).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$attrsToReflect$ = [];
        }
        {
            cmpMeta.$watchers$ = {};
        }
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                connectedCallback(this, cmpMeta);
            };
            class_1.prototype.disconnectedCallback = function () {
                disconnectedCallback(this);
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                forceUpdate(this, cmpMeta);
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var getAssetPath = function (path) {
    var assetUrl = new URL(path, plt.$resourcesUrl$);
    return (assetUrl.origin !== win.location.origin)
        ? assetUrl.href
        : assetUrl.pathname;
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/ionicons/dist/esm/legacy/loader.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy/loader.mjs ***!
  \**********************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-a6a54157.js */ "./node_modules/ionicons/dist/esm/legacy/chunk-a6a54157.js");

var defineCustomElements = function (win, options) {
    return Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(function () {
        Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["ion-icon", [[1, "ion-icon", { "color": [1], "ariaLabel": [1537, "aria-label"], "ios": [1], "md": [1], "flipRtl": [4, "flip-rtl"], "name": [1], "src": [1], "icon": [8], "size": [1], "lazy": [4], "svgContent": [32], "isVisible": [32] }]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/ionicons/dist/esm/polyfills/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/polyfills/index.js ***!
  \***********************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 147).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/ionicons/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 145).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/ionicons/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 146).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/ionicons/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ionicons/dist/loader/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/ionicons/dist/loader/index.mjs ***!
  \*****************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/ionicons/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/ionicons/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });


(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();





/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/legacy lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./web-social-share_2.entry.js": [
		"./node_modules/web-social-share/dist/esm/legacy/web-social-share_2.entry.js",
		151
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/web-social-share/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/legacy/chunk-e3ce8790.js":
/*!*************************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/legacy/chunk-e3ce8790.js ***!
  \*************************************************************************/
/*! exports provided: H, a, b, c, g, h, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return Host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;
var NAMESPACE = 'websocialshare';
var win = window;
var doc = document;
var plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: function (h) { return h(); },
    raf: function (h) { return requestAnimationFrame(h); },
    ael: function (el, eventName, listener, opts) { return el.addEventListener(eventName, listener, opts); },
    rel: function (el, eventName, listener, opts) { return el.removeEventListener(eventName, listener, opts); },
};
var supportsShadowDom = !!doc.documentElement.attachShadow;
var supportsListenerOptions = /*@__PURE__*/ (function () {
    var supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get: function () { supportsListenerOptions = true; }
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
var supportsConstructibleStylesheets = /*@__PURE__*/ (function () {
    try {
        new CSSStyleSheet();
        return true;
    }
    catch (e) { }
    return false;
})();
var hostRefs = new WeakMap();
var getHostRef = function (ref) { return hostRefs.get(ref); };
var registerInstance = function (lazyInstance, hostRef) { return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef); };
var registerHost = function (elm) {
    {
        var hostRef_1 = {
            $flags$: 0,
            $hostElement$: elm,
            $instanceValues$: new Map()
        };
        hostRef_1.$onReadyPromise$ = new Promise(function (r) { return hostRef_1.$onReadyResolve$ = r; });
        return hostRefs.set(elm, hostRef_1);
    }
};
var isMemberInElement = function (elm, memberName) { return memberName in elm; };
var consoleError = function (e) { return console.error(e); };
var moduleCache = /*@__PURE__*/ new Map();
var loadModule = function (cmpMeta, hostRef, hmrVersionId) {
    // loadModuleImport
    var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    var bundleId = (cmpMeta.$lazyBundleIds$);
    var module = moduleCache.get(bundleId);
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("./node_modules/web-social-share/dist/esm/legacy lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./" + bundleId + ".entry.js").then(function (importedModule) {
        {
            moduleCache.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
var styles = new Map();
var cssVarShim = /*@__PURE__*/ win.__stencil_cssshim;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = function (queue, write) { return function (cb) {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
}; };
var consume = function (queue) {
    for (var i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
var consumeTimeout = function (queue, timeout) {
    var i = 0;
    var ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
var flush = function () {
    queueCongestion++;
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    var timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */
        ? performance.now() + (10 * Math.ceil(queueCongestion * (1.0 / 22.0)))
        : Infinity;
    // DOM WRITES!!!
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
        queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
        queueDomWrites.length = 0;
    }
    if (queuePending = ((queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length) > 0)) {
        // still more to do yet, but we've run out of time
        // let's let this thing cool off and try again in the next tick
        plt.raf(flush);
    }
    else {
        queueCongestion = 0;
    }
};
var nextTick = /*@__PURE__*/ function (cb) { return Promise.resolve().then(cb); };
var writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
var EMPTY_OBJ = {};
var isDef = function (v) { return v != null; };
var toLowerCase = function (str) { return str.toLowerCase(); };
var isComplexType = function (o) { return ['object', 'function'].includes(typeof o); };
function getDynamicImportFunction(namespace) {
    return "__sc_import_" + namespace.replace(/\s|-/g, '_');
}
var patchEsm = function () {
    // @ts-ignore
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() */ 148).then(__webpack_require__.t.bind(null, /*! ./css-shim-3ea8955c-3ea8955c.js */ "./node_modules/web-social-share/dist/esm/legacy/css-shim-3ea8955c-3ea8955c.js", 7));
    }
    return Promise.resolve();
};
var patchBrowser = function () { return __awaiter(_this, void 0, void 0, function () {
    var importMeta, scriptElm, resourcesUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                importMeta = "";
                if (!(importMeta !== '')) return [3 /*break*/, 1];
                return [2 /*return*/, Promise.resolve(new URL('.', importMeta).href)];
            case 1:
                scriptElm = Array.from(doc.querySelectorAll('script')).find(function (s) { return (s.src.includes("/" + NAMESPACE + ".esm.js") ||
                    s.getAttribute('data-namespace') === NAMESPACE); });
                resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href));
                patchDynamicImport(resourcesUrl.href);
                if (!!window.customElements) return [3 /*break*/, 3];
                // @ts-ignore
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 149).then(__webpack_require__.t.bind(null, /*! ./dom-860d8016-860d8016.js */ "./node_modules/web-social-share/dist/esm/legacy/dom-860d8016-860d8016.js", 7))];
            case 2:
                // @ts-ignore
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, resourcesUrl.href];
        }
    });
}); };
var patchDynamicImport = function (base) {
    var importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        win[importFunctionName] = new Function('w', 'return import(w);');
    }
    catch (e) {
        var moduleMap_1 = new Map();
        win[importFunctionName] = function (src) {
            var url = new URL(src, base).href;
            var mod = moduleMap_1.get(url);
            if (!mod) {
                var script_1 = doc.createElement('script');
                script_1.type = 'module';
                script_1.src = URL.createObjectURL(new Blob(["import * as m from '" + url + "'; window." + importFunctionName + ".m = m;"], { type: 'application/javascript' }));
                mod = new Promise(function (resolve) {
                    script_1.onload = function () {
                        resolve(win[importFunctionName].m);
                        script_1.remove();
                    };
                });
                moduleMap_1.set(url, mod);
                doc.head.appendChild(script_1);
            }
            return mod;
        };
    }
};
var HYDRATED_CLASS = 'hydrated';
var rootAppliedStyles = new WeakMap();
var registerStyle = function (scopeId, cssText, allowCS) {
    var style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
var addStyle = function (styleContainerNode, cmpMeta, mode, hostElm) {
    var scopeId = getScopeId(cmpMeta.$tagName$);
    var style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = (styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc);
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            var appliedStyles = rootAppliedStyles.get(styleContainerNode);
            var styleElm = void 0;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if (cssVarShim) {
                        styleElm = cssVarShim.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        var newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = styleContainerNode.adoptedStyleSheets.concat([
                style
            ]);
        }
    }
    return scopeId;
};
var attachStyles = function (elm, cmpMeta, mode) {
    var styleId = addStyle((supportsShadowDom && elm.shadowRoot)
        ? elm.shadowRoot
        : elm.getRootNode(), cmpMeta, mode, elm);
    if (cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = styleId;
        elm.classList.add(styleId + '-h');
    }
};
var getScopeId = function (tagName, mode) { return 'sc-' + (tagName); };
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
var h = function (nodeName, vnodeData) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var child = null;
    var simple = false;
    var lastSimple = false;
    var key;
    var slotName;
    var vNodeChildren = [];
    var walk = function (c) {
        for (var i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? { $flags$: 0, $text$: child } : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        {
            key = vnodeData.key || undefined;
        }
        {
            slotName = vnodeData.name;
        }
        {
            var classData_1 = vnodeData.className || vnodeData.class;
            if (classData_1) {
                vnodeData.class = typeof classData_1 !== 'object'
                    ? classData_1
                    : Object.keys(classData_1)
                        .filter(function (k) { return classData_1[k]; })
                        .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData, vNodeChildren, vdomFnUtils);
    }
    var vnode = {
        $flags$: 0,
        $tag$: nodeName,
        $children$: vNodeChildren.length > 0 ? vNodeChildren : null,
        $elm$: undefined,
        $attrs$: vnodeData,
    };
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
var Host = {};
var isHost = function (node) {
    return node && node.$tag$ === Host;
};
var vdomFnUtils = {
    'forEach': function (children, cb) { return children.map(convertToPublic).forEach(cb); },
    'map': function (children, cb) { return children.map(convertToPublic).map(cb).map(convertToPrivate); }
};
var convertToPublic = function (node) {
    return {
        vattrs: node.$attrs$,
        vchildren: node.$children$,
        vkey: node.$key$,
        vname: node.$name$,
        vtag: node.$tag$,
        vtext: node.$text$
    };
};
var convertToPrivate = function (node) {
    return {
        $flags$: 0,
        $attrs$: node.vattrs,
        $children$: node.vchildren,
        $key$: node.vkey,
        $name$: node.vname,
        $tag$: node.vtag,
        $text$: node.vtext
    };
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
var setAccessor = function (elm, memberName, oldValue, newValue, isSvg, flags) {
    if (oldValue === newValue) {
        return;
    }
    if (memberName === 'class' && !isSvg) {
        // Class
        {
            var oldList_1 = parseClassList(oldValue);
            var baseList_1 = parseClassList(elm.className).filter(function (item) { return !oldList_1.includes(item); });
            elm.className = baseList_1.concat(parseClassList(newValue).filter(function (item) { return !baseList_1.includes(item); })).join(' ');
        }
    }
    else if (memberName === 'style') {
        // update style attribute, css properties and values
        {
            for (var prop in oldValue) {
                if (!newValue || newValue[prop] == null) {
                    if (prop.includes('-')) {
                        elm.style.removeProperty(prop);
                    }
                    else {
                        elm.style[prop] = '';
                    }
                }
            }
        }
        for (var prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
                if (prop.includes('-')) {
                    elm.style.setProperty(prop, newValue[prop]);
                }
                else {
                    elm.style[prop] = newValue[prop];
                }
            }
        }
    }
    else if (memberName === 'key')
        ;
    else if (memberName === 'ref') {
        // minifier will clean this up
        if (newValue) {
            newValue(elm);
        }
    }
    else if (memberName.startsWith('on') && !isMemberInElement(elm, memberName)) {
        // Event Handlers
        // so if the member name starts with "on" and the 3rd characters is
        // a capital letter, and it's not already a member on the element,
        // then we're assuming it's an event listener
        if (isMemberInElement(elm, toLowerCase(memberName))) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the element's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = toLowerCase(memberName.substring(2));
        }
        else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = toLowerCase(memberName[2]) + memberName.substring(3);
        }
        if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
        }
        if (newValue) {
            plt.ael(elm, memberName, newValue, false);
        }
    }
    else {
        // Set property if it exists and it's not a SVG
        var isProp = isMemberInElement(elm, memberName);
        var isComplex = isComplexType(newValue);
        if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
                elm[memberName] = newValue == null && elm.tagName.indexOf('-') === -1 ? '' : newValue;
            }
            catch (e) { }
        }
        if (newValue == null || newValue === false) {
            {
                elm.removeAttribute(memberName);
            }
        }
        else if ((!isProp || (flags & 4 /* isHost */) || isSvg) && !isComplex) {
            newValue = newValue === true ? '' : newValue.toString();
            {
                elm.setAttribute(memberName, newValue);
            }
        }
    }
};
var parseClassList = function (value) { return (!value) ? [] : value.split(' '); };
var updateElement = function (oldVnode, newVnode, isSvgMode, memberName) {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    var elm = (newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host) ? newVnode.$elm$.host : newVnode.$elm$;
    var oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (newVnodeAttrs[memberName] == null && oldVnodeAttrs[memberName] != null) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function (oldParentVNode, newParentVNode, childIndex, parentElm) {
    // tslint:disable-next-line: prefer-const
    var newVNode = newParentVNode.$children$[childIndex];
    var i = 0;
    var elm;
    var childNode;
    var oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            if (!newVNode.$children$) {
                // slot element does not have fallback content
                // create an html comment we'll use to always reference
                // where actual slot content should sit next to
                newVNode.$flags$ |= 1 /* isSlotReference */;
            }
            else {
                // slot element has fallback content
                // still create an element that "mocks" the slot element
                newVNode.$flags$ |= 2 /* isSlotFallback */;
            }
        }
    }
    if (isDef(newVNode.$text$)) {
        // create text node
        newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        newVNode.$elm$ = doc.createTextNode('');
    }
    else {
        // create element
        elm = newVNode.$elm$ = (doc.createElement((newVNode.$flags$ & 2 /* isSlotFallback */) ? 'slot-fb' : newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    {
        newVNode.$elm$['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
            // remember the content reference comment
            newVNode.$elm$['s-sr'] = true;
            // remember the content reference comment
            newVNode.$elm$['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return newVNode.$elm$;
};
var putBackInOriginalLocation = function (parentElm, recursive) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    var oldSlotChildNodes = parentElm.childNodes;
    for (var i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        var childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = function (parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
    var containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    var childNode;
    if (containerElm.shadowRoot && toLowerCase(containerElm.tagName) === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before));
            }
        }
    }
};
var removeVnodes = function (vnodes, startIdx, endIdx, elm) {
    for (; startIdx <= endIdx; ++startIdx) {
        if (isDef(vnodes[startIdx])) {
            elm = vnodes[startIdx].$elm$;
            callNodeRefs(vnodes[startIdx], true);
            {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
var updateChildren = function (parentElm, oldCh, newVNode, newCh) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var idxInOld = 0;
    var i = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var node;
    var elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // Vnode moved right
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // Vnode moved left
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // createKeyToOldIdx
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && isDef(oldCh[i].$key$) && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, (newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$), newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
var isSameVnode = function (vnode1, vnode2) {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === 'slot') {
            return vnode1.$name$ === vnode2.$name$;
        }
        {
            return vnode1.$key$ === vnode2.$key$;
        }
        return true;
    }
    return false;
};
var referenceNode = function (node) {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
var parentReferenceNode = function (node) { return (node['s-ol'] ? node['s-ol'] : node).parentNode; };
var patch = function (oldVNode, newVNode) {
    var elm = newVNode.$elm$ = oldVNode.$elm$;
    var oldChildren = oldVNode.$children$;
    var newChildren = newVNode.$children$;
    var defaultHolder;
    if (!isDef(newVNode.$text$)) {
        // element node
        {
            if (newVNode.$tag$ === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (isDef(oldChildren) && isDef(newChildren)) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (isDef(newChildren)) {
            // no old child vnodes, but there are new child vnodes to add
            if (isDef(oldVNode.$text$)) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (isDef(oldChildren)) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = newVNode.$text$;
    }
    else if (oldVNode.$text$ !== newVNode.$text$) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.textContent = newVNode.$text$;
    }
};
var updateFallbackSlotVisibility = function (elm, childNode, childNodes, i, ilen, j, slotNameAttr, nodeType) {
    childNodes = elm.childNodes;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    if (childNodes[j]['s-hn'] !== childNode['s-hn']) {
                        // this sibling node is from a different component
                        nodeType = childNodes[j].nodeType;
                        if (slotNameAttr !== '') {
                            // this is a named fallback slot node
                            if (nodeType === 1 /* ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (nodeType === 1 /* ElementNode */ || (nodeType === 3 /* TextNode */ && childNodes[j].textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
var relocateNodes = [];
var relocateSlotContent = function (elm) {
    // tslint:disable-next-line: prefer-const
    var childNodes = elm.childNodes;
    var ilen = childNodes.length;
    var i = 0;
    var j = 0;
    var nodeType = 0;
    var childNode;
    var node;
    var hostContentNodes;
    var slotNameAttr;
    for (ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr'])) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    nodeType = node.nodeType;
                    if (((nodeType === 3 /* TextNode */ || nodeType === 8 /* CommentNode */) && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === null && slotNameAttr === '') ||
                        (nodeType === 1 /* ElementNode */ && node.getAttribute('slot') === slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        if (!relocateNodes.some(function (r) { return r.nodeToRelocate === node; })) {
                            // made some changes to slots
                            // let's make sure we also double check
                            // fallbacks are correctly hidden or shown
                            checkSlotFallbackVisibility = true;
                            node['s-sn'] = slotNameAttr;
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                slotRefNode: childNode,
                                nodeToRelocate: node
                            });
                        }
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
var callNodeRefs = function (vNode, isDestroy) {
    if (vNode) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(isDestroy ? null : vNode.$elm$);
        vNode.$children$ && vNode.$children$.forEach(function (vChild) {
            callNodeRefs(vChild, isDestroy);
        });
    }
};
var renderVdom = function (hostElm, hostRef, cmpMeta, renderFnResults) {
    hostTagName = toLowerCase(hostElm.tagName);
    var oldVNode = hostRef.$vnode$ || { $flags$: 0 };
    var rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadowDom && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotRelocate = checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    {
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                if (!relocateNode.nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    var orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = relocateNode.nodeToRelocate;
                    relocateNode.nodeToRelocate.parentNode.insertBefore((relocateNode.nodeToRelocate['s-ol'] = orgLocationNode), relocateNode.nodeToRelocate);
                }
            }
            // while we're moving nodes around existing nodes, temporarily disable
            // the disconnectCallback from working
            plt.$flags$ |= 1 /* isTmpDisconnected */;
            for (var i = 0; i < relocateNodes.length; i++) {
                var relocateNode = relocateNodes[i];
                // by default we're just going to insert it directly
                // after the slot reference node
                var parentNodeRef = relocateNode.slotRefNode.parentNode;
                var insertBeforeNode = relocateNode.slotRefNode.nextSibling;
                var orgLocationNode = relocateNode.nodeToRelocate['s-ol'];
                while (orgLocationNode = orgLocationNode.previousSibling) {
                    var refNode = orgLocationNode['s-nr'];
                    if (refNode &&
                        refNode['s-sn'] === relocateNode.nodeToRelocate['s-sn'] &&
                        parentNodeRef === refNode.parentNode) {
                        refNode = refNode.nextSibling;
                        if (!refNode || !refNode['s-nr']) {
                            insertBeforeNode = refNode;
                            break;
                        }
                    }
                }
                if ((!insertBeforeNode && parentNodeRef !== relocateNode.nodeToRelocate.parentNode) ||
                    (relocateNode.nodeToRelocate.nextSibling !== insertBeforeNode)) {
                    // we've checked that it's worth while to relocate
                    // since that the node to relocate
                    // has a different next sibling or parent relocated
                    if (relocateNode.nodeToRelocate !== insertBeforeNode) {
                        // add it back to the dom but in its new home
                        parentNodeRef.insertBefore(relocateNode.nodeToRelocate, insertBeforeNode);
                    }
                }
            }
            // done moving nodes around
            // allow the disconnect callback to work again
            plt.$flags$ &= ~1 /* isTmpDisconnected */;
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // always reset
        relocateNodes.length = 0;
    }
};
var safeCall = function (instance, method, arg) {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
var then = function (promise, thenFn) {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
var scheduleUpdate = function (elm, hostRef, cmpMeta, isInitialLoad) {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    var instance = hostRef.$lazyInstance$;
    var promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* isListenReady */;
        }
        if (hostRef.$queuedListeners$) {
            hostRef.$queuedListeners$.forEach(function (_a) {
                var methodName = _a[0], event = _a[1];
                return safeCall(instance, methodName, event);
            });
            hostRef.$queuedListeners$ = null;
        }
    }
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    var update = function () { return updateComponent(elm, hostRef, cmpMeta, instance, isInitialLoad); };
    return then(promise, function () { return writeTask(update); });
};
var updateComponent = function (elm, hostRef, cmpMeta, instance, isInitialLoad) {
    // updateComponent
    {
        hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
        elm['s-lr'] = false;
    }
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(elm, cmpMeta, hostRef.$modeName$);
    }
    {
        {
            // tell the platform we're actively rendering
            // if a value is changed within a render() then
            // this tells the platform not to queue the change
            hostRef.$flags$ |= 4 /* isActiveRender */;
            try {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                renderVdom(elm, hostRef, cmpMeta, instance.render());
            }
            catch (e) {
                consoleError(e);
            }
            hostRef.$flags$ &= ~4 /* isActiveRender */;
        }
    }
    if (cssVarShim) {
        cssVarShim.updateHost(elm);
    }
    // set that this component lifecycle rendering has completed
    {
        elm['s-lr'] = true;
    }
    {
        hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (elm['s-rc'].length > 0) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        elm['s-rc'].forEach(function (cb) { return cb(); });
        elm['s-rc'].length = 0;
    }
    postUpdateComponent(elm, hostRef);
};
var postUpdateComponent = function (elm, hostRef, ancestorsActivelyLoadingChildren) {
    if (!elm['s-al']) {
        var instance = hostRef.$lazyInstance$;
        var ancestorComponent = hostRef.$ancestorComponent$;
        if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
            hostRef.$flags$ |= 64 /* hasLoadedComponent */;
            {
                // DOM WRITE!
                // add the css class that this element has officially hydrated
                elm.classList.add(HYDRATED_CLASS);
            }
            {
                safeCall(instance, 'componentDidLoad');
            }
            {
                hostRef.$onReadyResolve$(elm);
            }
            if (!ancestorComponent) {
                // on appload
                // we have finish the first big initial render
                doc.documentElement.classList.add(HYDRATED_CLASS);
                {
                    setTimeout(function () { return plt.$flags$ |= 2; } /* appLoaded */, 999);
                }
            }
        }
        // load events fire from bottom to top
        // the deepest elements load first then bubbles up
        if (ancestorComponent) {
            // ok so this element already has a known ancestor component
            // let's make sure we remove this element from its ancestor's
            // known list of child elements which are actively loading
            if (ancestorsActivelyLoadingChildren = ancestorComponent['s-al']) {
                // remove this element from the actively loading map
                ancestorsActivelyLoadingChildren.delete(elm);
                // the ancestor's initializeComponent method will do the actual checks
                // to see if the ancestor is actually loaded or not
                // then let's call the ancestor's initializeComponent method if there's no length
                // (which actually ends up as this method again but for the ancestor)
                if (ancestorsActivelyLoadingChildren.size === 0) {
                    ancestorComponent['s-al'] = undefined;
                    ancestorComponent['s-init']();
                }
            }
            hostRef.$ancestorComponent$ = undefined;
        }
        // ( •_•)
        // ( •_•)>⌐■-■
        // (⌐■_■)
    }
};
var forceUpdate = function (elm, cmpMeta) {
    {
        var hostRef = getHostRef(elm);
        if (hostRef.$flags$ & 2 /* hasRendered */) {
            scheduleUpdate(elm, hostRef, cmpMeta, false);
        }
    }
};
var disconnectedCallback = function (elm) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        var hostRef = getHostRef(elm);
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$();
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (cssVarShim) {
            cssVarShim.removeHost(elm);
        }
    }
};
var addEventListeners = function (elm, hostRef, listeners) {
    hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || [];
    var removeFns = listeners.map(function (_a) {
        var flags = _a[0], name = _a[1], method = _a[2];
        var target = (elm);
        var handler = hostListenerProxy(hostRef, method);
        var opts = hostListenerOpts(flags);
        plt.ael(target, name, handler, opts);
        return function () { return plt.rel(target, name, handler, opts); };
    });
    return function () { return removeFns.forEach(function (fn) { return fn(); }); };
};
var hostListenerProxy = function (hostRef, methodName) {
    return function (ev) {
        {
            if (hostRef.$flags$ & 256 /* isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                hostRef.$queuedListeners$.push([methodName, ev]);
            }
        }
    };
};
var hostListenerOpts = function (flags) { return supportsListenerOptions ?
    {
        'passive': (flags & 1 /* Passive */) !== 0,
        'capture': (flags & 2 /* Capture */) !== 0,
    }
    : (flags & 2 /* Capture */) !== 0; };
var parsePropertyValue = function (propValue, propType) {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return (propValue === 'false' ? false : propValue === '' || !!propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
var getValue = function (ref, propName) { return getHostRef(ref).$instanceValues$.get(propName); };
var setValue = function (ref, propName, newVal, cmpMeta) {
    // check our new property value against our internal value
    var hostRef = getHostRef(ref);
    var elm = hostRef.$hostElement$;
    var oldVal = hostRef.$instanceValues$.get(propName);
    var flags = hostRef.$flags$;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (newVal !== oldVal && (!(flags & 8 /* isConstructingInstance */) || oldVal === undefined)) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (hostRef.$lazyInstance$) {
            if ((flags & (4 /* isActiveRender */ | 2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(elm, hostRef, cmpMeta, false);
            }
        }
    }
};
var proxyComponent = function (Cstr, cmpMeta, flags) {
    if (cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        var members = Object.entries(cmpMeta.$members$);
        var prototype_1 = Cstr.prototype;
        members.forEach(function (_a) {
            var memberName = _a[0], memberFlags = _a[1][0];
            if (((memberFlags & 31 /* Prop */) ||
                ((flags & 2 /* proxyState */) &&
                    (memberFlags & 32 /* State */)))) {
                // proxyComponent - prop
                Object.defineProperty(prototype_1, memberName, {
                    get: function () {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set: function (newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        });
        if ((flags & 1 /* isElementConstructor */)) {
            var attrNameToPropName_1 = new Map();
            prototype_1.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                var _this = this;
                plt.jmp(function () {
                    var propName = attrNameToPropName_1.get(attrName);
                    _this[propName] = newValue === null && typeof _this[propName] === 'boolean'
                        ? false
                        : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(function (_a) {
                var _ = _a[0], m = _a[1];
                return m[0] & 15;
            } /* HasAttribute */) // filter to only keep props that should match attributes
                .map(function (_a) {
                var propName = _a[0], m = _a[1];
                var attrName = m[1] || propName;
                attrNameToPropName_1.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
var initializeComponent = function (elm, hostRef, cmpMeta, hmrVersionId, Cstr) { return __awaiter(_this, void 0, void 0, function () {
    var style_1, scopeId_1, ancestorComponent, schedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0)) return [3 /*break*/, 5];
                // we haven't initialized this element yet
                hostRef.$flags$ |= 32 /* hasInitializedComponent */;
                // lazy loaded components
                // request the component's implementation to be
                // wired up with the host element
                Cstr = loadModule(cmpMeta);
                if (!Cstr.then) return [3 /*break*/, 2];
                return [4 /*yield*/, Cstr];
            case 1:
                // Await creates a micro-task avoid if possible
                Cstr = _a.sent();
                _a.label = 2;
            case 2:
                if (!Cstr.isProxied) {
                    proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                    Cstr.isProxied = true;
                }
                // ok, time to construct the instance
                // but let's keep track of when we start and stop
                // so that the getters/setters don't incorrectly step on data
                {
                    hostRef.$flags$ |= 8 /* isConstructingInstance */;
                }
                // construct the lazy-loaded component implementation
                // passing the hostRef is very important during
                // construction in order to directly wire together the
                // host element and the lazy-loaded instance
                try {
                    new Cstr(hostRef);
                }
                catch (e) {
                    consoleError(e);
                }
                {
                    hostRef.$flags$ &= ~8 /* isConstructingInstance */;
                }
                if (!(!Cstr.isStyleRegistered && Cstr.style)) return [3 /*break*/, 5];
                style_1 = Cstr.style;
                scopeId_1 = getScopeId(cmpMeta.$tagName$);
                if (!(cmpMeta.$flags$ & 8) /* needsShadowDomShim */) return [3 /*break*/, 4]; /* needsShadowDomShim */
                return [4 /*yield*/, __webpack_require__.e(/*! import() */ 150).then(__webpack_require__.bind(null, /*! ./shadow-css-984bac74-549b16dd.js */ "./node_modules/web-social-share/dist/esm/legacy/shadow-css-984bac74-549b16dd.js")).then(function (m) { return m.scopeCss(style_1, scopeId_1, false); })];
            case 3:
                style_1 = _a.sent();
                _a.label = 4;
            case 4:
                registerStyle(scopeId_1, style_1, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                Cstr.isStyleRegistered = true;
                _a.label = 5;
            case 5:
                ancestorComponent = hostRef.$ancestorComponent$;
                schedule = function () { return scheduleUpdate(elm, hostRef, cmpMeta, true); };
                if (ancestorComponent && ancestorComponent['s-lr'] === false && ancestorComponent['s-rc']) {
                    // this is the intial load and this component it has an ancestor component
                    // but the ancestor component has NOT fired its will update lifecycle yet
                    // so let's just cool our jets and wait for the ancestor to continue first
                    // this will get fired off when the ancestor component
                    // finally gets around to rendering its lazy self
                    // fire off the initial update
                    ancestorComponent['s-rc'].push(schedule);
                }
                else {
                    schedule();
                }
                return [2 /*return*/];
        }
    });
}); };
var connectedCallback = function (elm, cmpMeta) {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        // connectedCallback
        var hostRef = getHostRef(elm);
        if (cmpMeta.$listeners$) {
            // initialize our event listeners on the host element
            // we do this now so that we can listening to events that may
            // have fired even before the instance is ready
            hostRef.$rmListeners$ = addEventListeners(elm, hostRef, cmpMeta.$listeners$);
        }
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            var hostId = void 0;
            if (!hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((cmpMeta.$flags$ & 4 /* hasSlotRelocation */) ||
                    (cmpMeta.$flags$ & 8 /* needsShadowDomShim */)) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                var ancestorComponent = elm;
                while ((ancestorComponent = (ancestorComponent.parentNode || ancestorComponent.host))) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((ancestorComponent['s-init'] && ancestorComponent['s-lr'] === false)) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        hostRef.$ancestorComponent$ = ancestorComponent;
                        // ensure there is an array to contain a reference to each of the child components
                        // and set this component as one of the ancestor's child components it should wait on
                        (ancestorComponent['s-al'] = ancestorComponent['s-al'] || new Set()).add(elm);
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).forEach(function (_a) {
                    var memberName = _a[0], memberFlags = _a[1][0];
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        var value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
    }
};
var setContentReference = function (elm, contentRefElm) {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    var crName;
    {
        crName = '';
    }
    contentRefElm = elm['s-cr'] = doc.createComment(crName);
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
var bootstrapLazy = function (lazyBundles, options) {
    if (options === void 0) { options = {}; }
    var cmpTags = [];
    var exclude = options.exclude || [];
    var head = doc.head;
    var customElements = win.customElements;
    var y = /*@__PURE__*/ head.querySelector('meta[charset]');
    var visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (options.syncQueue) {
        plt.$flags$ |= 4 /* queueSync */;
    }
    lazyBundles.forEach(function (lazyBundle) { return lazyBundle[1].forEach(function (compactMeta) {
        var cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        if (!supportsShadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
        }
        var tagName = cmpMeta.$tagName$;
        var HostElement = /** @class */ (function (_super) {
            __extends(class_1, _super);
            // StencilLazyHost
            function class_1(self) {
                var _this = 
                // @ts-ignore
                _super.call(this, self) || this;
                self = _this;
                {
                    _this['s-lr'] = false;
                    _this['s-rc'] = [];
                }
                registerHost(self);
                if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                    // this component is using shadow dom
                    // and this browser supports shadow dom
                    // add the read-only property "shadowRoot" to the host element
                    if (supportsShadowDom) {
                        self.attachShadow({ 'mode': 'open' });
                    }
                    else if (!('shadowRoot' in self)) {
                        self.shadowRoot = self;
                    }
                }
                return _this;
            }
            class_1.prototype.connectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return connectedCallback(_this, cmpMeta); });
            };
            class_1.prototype.disconnectedCallback = function () {
                var _this = this;
                plt.jmp(function () { return disconnectedCallback(_this); });
            };
            class_1.prototype['s-init'] = function () {
                var hostRef = getHostRef(this);
                if (hostRef.$lazyInstance$) {
                    postUpdateComponent(this, hostRef);
                }
            };
            class_1.prototype['s-hmr'] = function (hmrVersionId) {
            };
            class_1.prototype.forceUpdate = function () {
                forceUpdate(this, cmpMeta);
            };
            class_1.prototype.componentOnReady = function () {
                return getHostRef(this).$onReadyPromise$;
            };
            return class_1;
        }(HTMLElement));
        cmpMeta.$lazyBundleIds$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }); });
    // visibilityStyle.innerHTML = cmpTags.map(t => `${t}:not(.hydrated)`) + '{display:none}';
    visibilityStyle.innerHTML = cmpTags + '{visibility:hidden}.hydrated{visibility:inherit}';
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, y ? y.nextSibling : head.firstChild);
};
var createEvent = function (ref, name, flags) {
    var elm = getElement(ref);
    return {
        emit: function (detail) { return elm.dispatchEvent(new (CustomEvent)(name, {
            bubbles: !!(flags & 4 /* Bubbles */),
            composed: !!(flags & 2 /* Composed */),
            cancelable: !!(flags & 1 /* Cancellable */),
            detail: detail
        })); }
    };
};
var getElement = function (ref) { return getHostRef(ref).$hostElement$; };



/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/legacy/loader.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/legacy/loader.mjs ***!
  \******************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _chunk_e3ce8790_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-e3ce8790.js */ "./node_modules/web-social-share/dist/esm/legacy/chunk-e3ce8790.js");

var defineCustomElements = function (win, options) {
    return Object(_chunk_e3ce8790_js__WEBPACK_IMPORTED_MODULE_0__["a"])().then(function () {
        Object(_chunk_e3ce8790_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["web-social-share_2", [[1, "web-social-share", { "show": [1028], "share": [16] }, [[0, "socialShareLoaded", "moveSlotOnLoad"], [0, "selected", "hide"]]], [1, "web-social-share-target", { "displayNames": [4, "display-names"], "share": [16] }]]]], options);
    });
};



/***/ }),

/***/ "./node_modules/web-social-share/dist/esm/polyfills/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/web-social-share/dist/esm/polyfills/index.js ***!
  \*******************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var win = window;
  /*!
  es6-promise - a tiny implementation of Promises/A+.
  Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
  Licensed under MIT license
  See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
  v4.2.4+314e4831
  */
  (win.ES6Promise=function(){function t(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<y;t+=2)(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0;y=0}function e(t,r){var e=this,n=new this.constructor(o);void 0===n[O]&&_(n);var i=e._state;if(i){var s=arguments[i-1];g(function(){return v(i,n,s,e._result)})}else l(e,n,t,r);return n}function n(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var r=new this(o);return u(r,t),r}function o(){}function i(t){try{return t.then}catch(t){return q.error=t,q}}function s(t,r,o){r.constructor===t.constructor&&o===e&&r.constructor.resolve===n?function(t,r){r._state===x?a(t,r._result):r._state===F?f(t,r._result):l(r,void 0,function(r){return u(t,r)},function(r){return f(t,r)})}(t,r):o===q?(f(t,q.error),q.error=null):void 0===o?a(t,r):"function"==typeof o?function(t,r,e){g(function(t){var n=!1,o=function(t,r,e,n){try{t.call(r,e,n)}catch(t){return t}}(e,r,function(e){n||(n=!0,r!==e?u(t,e):a(t,e))},function(r){n||(n=!0,f(t,r))},t._label);!n&&o&&(n=!0,f(t,o))},t)}(t,r,o):a(t,r)}function u(t,r){if(t===r)f(t,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof r;null===r||"object"!==e&&"function"!==e?a(t,r):s(t,r,i(r))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function a(t,r){t._state===P&&(t._result=r,t._state=x,0!==t._subscribers.length&&g(h,t))}function f(t,r){t._state===P&&(t._state=F,t._result=r,g(c,t))}function l(t,r,e,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=r,o[i+x]=e,o[i+F]=n,0===i&&t._state&&g(h,t)}function h(t){var r=t._subscribers,e=t._state;if(0!==r.length){for(var n,o,i=t._result,s=0;s<r.length;s+=3)n=r[s],o=r[s+e],n?v(e,n,o,i):o(i);t._subscribers.length=0}}function v(t,r,e,n){var o="function"==typeof e,i=void 0,s=void 0,c=void 0,l=void 0;if(o){try{i=e(n)}catch(t){q.error=t,i=q}if(i===q?(l=!0,s=i.error,i.error=null):c=!0,r===i)return void f(r,new TypeError("Cannot return same promise"))}else i=n,c=!0;r._state===P&&(o&&c?u(r,i):l?f(r,s):t===x?a(r,i):t===F&&f(r,i))}function _(t){t[O]=U++,t._state=void 0,t._result=void 0,t._subscribers=[]}var p,d=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},y=0,w=void 0,m=void 0,g=function(t,e){C[y]=t,C[y+1]=e,2===(y+=2)&&(m?m(r):T())},b=(p="undefined"!=typeof window?window:void 0)||{},A=b.MutationObserver||b.WebKitMutationObserver;b="undefined"==typeof self;var E,S,M,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=Array(1e3),T=void 0;T=A?(E=0,S=new A(r),M=document.createTextNode(""),S.observe(M,{characterData:!0}),function(){M.data=E=++E%2}):j?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===p&&"function"=="function"?function(){try{var e=Function("return this")().require("vertx");return void 0!==(w=e.runOnLoop||e.runOnContext)?function(){w(r)}:t()}catch(r){return t()}}():t();var O=Math.random().toString(36).substring(2),P=void 0,x=1,F=2,q={error:null},U=0,D=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(o),this.promise[O]||_(this.promise),d(r)?(this._remaining=this.length=r.length,this._result=Array(this.length),0===this.length?a(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&a(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var r=0;this._state===P&&r<t.length;r++)this._eachEntry(t[r],r)},t.prototype._eachEntry=function(t,r){var u=this._instanceConstructor,c=u.resolve;c===n?(c=i(t))===e&&t._state!==P?this._settledAt(t._state,r,t._result):"function"!=typeof c?(this._remaining--,this._result[r]=t):u===K?(s(u=new u(o),t,c),this._willSettleAt(u,r)):this._willSettleAt(new u(function(r){return r(t)}),r):this._willSettleAt(c(t),r)},t.prototype._settledAt=function(t,r,e){var n=this.promise;n._state===P&&(this._remaining--,t===F?f(n,e):this._result[r]=e),0===this._remaining&&a(n,this._result)},t.prototype._willSettleAt=function(t,r){var e=this;l(t,void 0,function(t){return e._settledAt(x,r,t)},function(t){return e._settledAt(F,r,t)})},t}(),K=function(){function t(r){if(this[O]=U++,this._result=this._state=void 0,this._subscribers=[],o!==r){if("function"!=typeof r)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,r){try{r(function(r){u(t,r)},function(r){f(t,r)})}catch(r){f(t,r)}}(this,r)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return K.prototype.then=e,K.all=function(t){return new D(this,t).promise},K.race=function(t){var r=this;return d(t)?new r(function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)}):new r(function(t,r){return r(new TypeError("Must pass array to race"))})},K.resolve=n,K.reject=function(t){var r=new this(o);return f(r,t),r},K._setScheduler=function(t){m=t},K._setAsap=function(t){g=t},K._asap=g,K.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw Error("polyfill failed")}var r=t.Promise;if(r){var e=null;try{e=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===e&&!r.cast)return}t.Promise=K},K.Promise=K,K.polyfill(),K}());

  var promises = [];

  if (!win.customElements || (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove))) {
    promises.push(__webpack_require__.e(/*! import() */ 154).then(__webpack_require__.t.bind(null, /*! ./dom.js */ "./node_modules/web-social-share/dist/esm/polyfills/dom.js", 7)));
  }

  function checkIfURLIsSupported() {
    try {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      return (u.href === 'http://a/c%20d') && u.searchParams;
    } catch(e) {
      return false;
    }
  }

  if (
    'function' !== typeof Object.assign || !Object.entries ||
    !Array.prototype.find || !Array.prototype.includes ||
    !String.prototype.startsWith || !String.prototype.endsWith ||
    !win.fetch ||
    !checkIfURLIsSupported() ||
    typeof WeakMap == 'undefined'
  ) {
    promises.push(__webpack_require__.e(/*! import() */ 152).then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "./node_modules/web-social-share/dist/esm/polyfills/core-js.js", 7)));
  }
  if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
    promises.push(__webpack_require__.e(/*! import() */ 153).then(__webpack_require__.t.bind(null, /*! ./css-shim.js */ "./node_modules/web-social-share/dist/esm/polyfills/css-shim.js", 7)));
  }
  return Promise.all(promises);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/web-social-share/dist/loader/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/web-social-share/dist/loader/index.mjs ***!
  \*************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/polyfills/index.js */ "./node_modules/web-social-share/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/legacy/loader.mjs */ "./node_modules/web-social-share/dist/esm/legacy/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _esm_legacy_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });


(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  var BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();





/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/css/alert.css":
/*!***************************!*\
  !*** ./src/css/alert.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./alert.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/alert.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/deck.css":
/*!**************************!*\
  !*** ./src/css/deck.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./deck.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/deck.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/font.css":
/*!**************************!*\
  !*** ./src/css/font.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./font.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/font.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/google-fonts.css":
/*!**********************************!*\
  !*** ./src/css/google-fonts.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./google-fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/google-fonts.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/pager.css":
/*!***************************!*\
  !*** ./src/css/pager.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./pager.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/pager.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/popover.css":
/*!*****************************!*\
  !*** ./src/css/popover.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./popover.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popover.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/print.css":
/*!***************************!*\
  !*** ./src/css/print.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./print.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/print.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/theme.css":
/*!***************************!*\
  !*** ./src/css/theme.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/variables.css":
/*!*******************************!*\
  !*** ./src/css/variables.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/variables.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ionic_core_css_ionic_bundle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/core/css/ionic.bundle.css */ "./node_modules/@ionic/core/css/ionic.bundle.css");
/* harmony import */ var _ionic_core_css_ionic_bundle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_core_css_ionic_bundle_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/variables.css */ "./src/css/variables.css");
/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_variables_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/theme.css */ "./src/css/theme.css");
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_theme_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_deck_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/deck.css */ "./src/css/deck.css");
/* harmony import */ var _css_deck_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_deck_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_font_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/font.css */ "./src/css/font.css");
/* harmony import */ var _css_font_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_font_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_pager_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/pager.css */ "./src/css/pager.css");
/* harmony import */ var _css_pager_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_pager_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_modal_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_popover_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/popover.css */ "./src/css/popover.css");
/* harmony import */ var _css_popover_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_popover_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_print_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/print.css */ "./src/css/print.css");
/* harmony import */ var _css_print_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_print_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_alert_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/alert.css */ "./src/css/alert.css");
/* harmony import */ var _css_alert_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_alert_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @webcomponents/custom-elements */ "./node_modules/@webcomponents/custom-elements/custom-elements.min.js");
/* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _manifest_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json");
var _manifest_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./manifest.json */ "./src/manifest.json", 1);
/* harmony import */ var _scripts_loading_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/loading.js */ "./src/scripts/loading.js");
/* harmony import */ var _scripts_loading_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scripts_loading_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/slider.js */ "./src/scripts/slider.js");
/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scripts_slider_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scripts_sliderJumpTo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scripts/sliderJumpTo.js */ "./src/scripts/sliderJumpTo.js");
/* harmony import */ var _scripts_sliderJumpTo_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scripts_sliderJumpTo_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scripts_modalNotes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scripts/modalNotes.js */ "./src/scripts/modalNotes.js");
/* harmony import */ var _scripts_modalNotes_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scripts_modalNotes_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scripts_modalRemoteControl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scripts/modalRemoteControl.js */ "./src/scripts/modalRemoteControl.js");
/* harmony import */ var _scripts_modalRemoteControl_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scripts_modalRemoteControl_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scripts_remoteControl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scripts/remoteControl.js */ "./src/scripts/remoteControl.js");
/* harmony import */ var _scripts_remoteControl_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scripts_remoteControl_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _scripts_actions_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scripts/actions.js */ "./src/scripts/actions.js");
/* harmony import */ var _scripts_actions_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_scripts_actions_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scripts/menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _scripts_history_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scripts/history.js */ "./src/scripts/history.js");
/* harmony import */ var _scripts_history_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_scripts_history_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _scripts_fullscreen_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scripts/fullscreen.js */ "./src/scripts/fullscreen.js");
/* harmony import */ var _scripts_fullscreen_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_scripts_fullscreen_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ionic_core_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/core/loader */ "./node_modules/@ionic/core/loader/index.mjs");
/* harmony import */ var ionicons_dist_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ionicons/dist/loader */ "./node_modules/ionicons/dist/loader/index.mjs");
/* harmony import */ var _deckdeckgo_core_dist_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @deckdeckgo/core/dist/loader */ "./node_modules/@deckdeckgo/core/dist/loader/index.mjs");
/* harmony import */ var _deckdeckgo_remote_dist_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @deckdeckgo/remote/dist/loader */ "./node_modules/@deckdeckgo/remote/dist/loader/index.mjs");
/* harmony import */ var _deckdeckgo_charts_dist_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @deckdeckgo/charts/dist/loader */ "./node_modules/@deckdeckgo/charts/dist/loader/index.mjs");
/* harmony import */ var _deckdeckgo_qrcode_dist_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @deckdeckgo/qrcode/dist/loader */ "./node_modules/@deckdeckgo/qrcode/dist/loader/index.mjs");
/* harmony import */ var _deckdeckgo_highlight_code_dist_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @deckdeckgo/highlight-code/dist/loader */ "./node_modules/@deckdeckgo/highlight-code/dist/loader/index.mjs");
/* harmony import */ var _deckdeckgo_lazy_img_dist_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @deckdeckgo/lazy-img/dist/loader */ "./node_modules/@deckdeckgo/lazy-img/dist/loader/index.mjs");
/* harmony import */ var web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! web-social-share/dist/loader */ "./node_modules/web-social-share/dist/loader/index.mjs");
/* harmony import */ var _css_google_fonts_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./css/google-fonts.css */ "./src/css/google-fonts.css");
/* harmony import */ var _css_google_fonts_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_css_google_fonts_css__WEBPACK_IMPORTED_MODULE_31__);















window.ROOM_NAME = _manifest_json__WEBPACK_IMPORTED_MODULE_11__["name"];













Object(_ionic_core_loader__WEBPACK_IMPORTED_MODULE_22__["defineCustomElements"])(window);


Object(ionicons_dist_loader__WEBPACK_IMPORTED_MODULE_23__["defineCustomElements"])(window);

// Init DeckDeckGo elements







// Init web-social-share


Object(_deckdeckgo_core_dist_loader__WEBPACK_IMPORTED_MODULE_24__["defineCustomElements"])(window).then(async () => {
    await Object(_deckdeckgo_charts_dist_loader__WEBPACK_IMPORTED_MODULE_26__["defineCustomElements"])(window);
    await Object(_deckdeckgo_qrcode_dist_loader__WEBPACK_IMPORTED_MODULE_27__["defineCustomElements"])(window);
    await Object(_deckdeckgo_highlight_code_dist_loader__WEBPACK_IMPORTED_MODULE_28__["defineCustomElements"])(window);
    await Object(_deckdeckgo_lazy_img_dist_loader__WEBPACK_IMPORTED_MODULE_29__["defineCustomElements"])(window);

    await postLoading();
    await initActions();
    await initFullscreen();

    await postLoadingJumpTo();
    await initDeckHistoryWatch();

    await Object(web_social_share_dist_loader__WEBPACK_IMPORTED_MODULE_30__["defineCustomElements"])(window);

    Object(_deckdeckgo_remote_dist_loader__WEBPACK_IMPORTED_MODULE_25__["defineCustomElements"])(window).then(async () => {
        await initRemote();
    });
});




/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/*! exports provided: name, short_name, display, theme_color, background_color, scope, start_url, icons, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"A Modern Web Component Delivery Framework\",\"short_name\":\"A Modern Web\",\"display\":\"standalone\",\"theme_color\":\"#ffffff\",\"background_color\":\"#ffffff\",\"scope\":\"/\",\"start_url\":\"/\",\"icons\":[{\"src\":\"assets/favicon/android-chrome-192x192.png\",\"sizes\":\"192x192\",\"type\":\"image/png\"},{\"src\":\"assets/favicon/android-chrome-512x512.png\",\"sizes\":\"512x512\",\"type\":\"image/png\"}]}");

/***/ }),

/***/ "./src/scripts/actions.js":
/*!********************************!*\
  !*** ./src/scripts/actions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

initActions = () => {
    return new Promise(async (resolve) => {
        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slidesDidLoad', async (_slides) => {
                await initActionButtons(slider)
            });
        }

        resolve();
    });
};

function initActionButtons(slider) {
    return new Promise(async (resolve) => {
        const ionFab = document.querySelector('ion-fab');

        if (ionFab) {
            const mobile = await slider.isMobile();

            if (mobile) {
                ionFab.style.setProperty('--deckgo-hide-on-mobile', 'none');
            }

            // Workaround: https://github.com/deckgo/deckdeckgo-starter/issues/31
            if (document.dir === 'rtl') {
                const ionFabList = ionFab.querySelector('ion-fab-list[side="start"]');
                if (ionFabList) {
                    ionFabList.setAttribute('side', 'end');
                }

                ionFab.setAttribute('horizontal', 'start');
            }
        }

        resolve();
    });
}


/***/ }),

/***/ "./src/scripts/fullscreen.js":
/*!***********************************!*\
  !*** ./src/scripts/fullscreen.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

initFullscreen = () => {
    return new Promise((resolve) => {
        if (!document) {
            resolve();
            return;
        }

        document.addEventListener('mouseInactivity', async ($event) => {
            const navigation = document.querySelector('#navigation');

            if ($event && navigation) {
                navigation.style.visibility = $event.detail ? 'inherit' : 'hidden';
            }
        }, {passive: true});

        resolve();
    });
};


/***/ }),

/***/ "./src/scripts/history.js":
/*!********************************!*\
  !*** ./src/scripts/history.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

postLoadingJumpTo = () => {
    return new Promise(async (resolve) => {
        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slidesDidLoad', async (_slides) => {
                await jumpToSlideIndexWithUrl(0);
            });
        }

        resolve();
    });
};

initDeckHistoryWatch = () => {
    return new Promise(async (resolve) => {
        const slider = document.getElementById('slider');

        if (slider) {
            slider.addEventListener('slideNextDidChange', async () => {
                await pushStateSlideIndex(slider);
            });

            slider.addEventListener('slidePrevDidChange', async () => {
                await pushStateSlideIndex(slider);
            });

            slider.addEventListener('slideToChange', async (event) => {
                await pushStateSlideIndex(slider);
            });
        }

        if (window) {
            window.onpopstate = async ($event) => {
                await jumpToSlideIndexWithUrl(300);
            };
        }

        resolve();
    });
};

pushStateSlideIndex = async (slider) => {
    if (!history) {
        return;
    }

    const index = await slider.getActiveIndex();

    const url = new URL(window.location.href);
    const urlIndex = url && url.searchParams ? url.searchParams.get('index') : -1;

    if ((urlIndex === null || parseInt(urlIndex, 0) !== index) && index >= 0) {
        history.pushState({slideIndex: index}, null, index > 0 ? "?index=" + index : '');
    }
};

jumpToSlideIndexWithUrl = async (speed) => {
    const url = new URL(window.location.href);
    const index = url && url.searchParams ? url.searchParams.get('index') : -1;

    if (index === null || parseInt(index, 0) >= 0) {
        const slider = document.getElementById('slider');

        if (!slider) {
            return;
        }

        await slider.slideTo(index === null ? 0 : parseInt(index, 0), speed);
    }
};


/***/ }),

/***/ "./src/scripts/loading.js":
/*!********************************!*\
  !*** ./src/scripts/loading.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

postLoading = () => {
    return new Promise((resolve) => {
        const app = document.querySelector('ion-app');
        if (app) {
            app.classList.remove('loading');
        }

        resolve();
    });
};


/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class MenuList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const menuListActions = await buildMenuListActions();

        this.innerHTML = '<ion-content><ion-list no-margin>' + menuListActions + '</ion-list></ion-content>';
    }
}

buildMenuListActions = () => {
    return new Promise(async (resolve) => {
        let result = '';

        result += '<ion-item ion-item button detail="false" onclick="displaySlideNotes()" color="primary" style="--border-style: none;"><ion-icon name="clipboard" ariaLabel="Display slide notes" slot="end"></ion-icon><ion-label>Display slide notes</ion-label></ion-item>';
        result += '<ion-item ion-item button detail="false" onclick="displayRemoteControl()" color="primary" style="--border-style: none;"><ion-icon name="phone-portrait" ariaLabel="Remote control" slot="end"></ion-icon><ion-label>Remote control</ion-label></ion-item>';
        result += '<ion-item ion-item button detail="false" onclick="openShare()" color="primary" style="--border-style: none;"><ion-icon name="share" ariaLabel="Share this presentation" slot="end"></ion-icon><ion-label>Share</ion-label></ion-item>';
        result += '<ion-item ion-item button detail="false" onclick="openLink(\'https://deckdeckgo.com\')" style="--border-style: none; --ion-item-background: white;"><ion-icon src="/assets/icons/deckdeckgo.svg" ariaLabel="DeckDeckGo" slot="end"></ion-icon><ion-label>Created with DeckDeckGo</ion-label></ion-item>';

        resolve(result);
    });
};

customElements.define('menu-list', MenuList);

openMenu = async (ev) => {
    ev.preventDefault();

    const popoverController = document.querySelector('ion-popover-controller');

    if (!popoverController) {
        return;
    }

    await popoverController.componentOnReady();

    const popover = await popoverController.create({
        component: 'menu-list',
        translucent: true,
        event: ev
    });

    await popover.present();
};

openLink = async (link) => {
    window.open(link, '_blank');
    await document.querySelector('ion-popover-controller').dismiss();
};


openShare = async () => {
    if (navigator && navigator.share) {
        await shareMobile();
    } else {
        await shareDesktop();
    }

    await document.querySelector('ion-popover-controller').dismiss();
};

function shareMobile() {
    return new Promise(async (resolve) => {
        const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

        await navigator.share({
            title: document.title,
            url: shareUrl,
        });

        resolve();
    });
}

function shareDesktop() {
    return new Promise(async (resolve) => {
        const webSocialShare = document.querySelector('web-social-share');

        if (!webSocialShare || !window) {
            return;
        }

        const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

        const share = {
            displayNames: true,
            config: [{
                twitter: {
                    socialShareUrl: shareUrl,
                    socialSharePopupWidth: 300,
                    socialSharePopupHeight: 400
                }
            },{
                reddit: {
                    socialShareUrl: shareUrl,
                    socialSharePopupWidth: 300,
                    socialSharePopupHeight: 500
                }
            },{
                linkedin: {
                    socialShareUrl: shareUrl
                }
            },{
                email: {
                    socialShareBody: shareUrl
                }
            }, {
                whatsapp: {
                    socialShareUrl: shareUrl
                }
            }]
        };

        webSocialShare.share = share;

        webSocialShare.show = true;

        resolve();
    });
}


/***/ }),

/***/ "./src/scripts/modalNotes.js":
/*!***********************************!*\
  !*** ./src/scripts/modalNotes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Src: https://beta.ionicframework.com/docs/api/modal
displaySlideNotes = async () => {
    const deck = document.getElementById('slider');

    if (!deck) {
        return;
    }

    const index = await deck.getActiveIndex();

    const slide = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

    if (!slide) {
        return;
    }

    const title = slide.querySelector('[slot="title"]');
    const notes = slide.querySelector('[slot="notes"][show]');

    const titleText = title ? title.innerHTML : 'Slide ' + index;
    const notesText = notes ? notes.innerHTML : 'No particular notes';

    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();

    // create component to open
    const element = document.createElement('div');
    element.innerHTML = `
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-buttons slot="start">
          <ion-button>
              <ion-icon name="close"></ion-icon>
          </ion-button>
      </ion-buttons>
      <ion-title>${titleText}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding color="primary">
    <p style="white-space: pre-wrap;">${notesText}</p>
  </ion-content>
  `;

    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', async () => {
        await modalController.dismiss();
    });

    // create the modal
    const modalElement = await modalController.create({
        component: element
    });

    // present the modal
    await modalElement.present();
};


/***/ }),

/***/ "./src/scripts/modalRemoteControl.js":
/*!*******************************************!*\
  !*** ./src/scripts/modalRemoteControl.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

displayRemoteControl = async () => {
    // initialize controller
    const modalController = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();

    // create component to open
    const element = document.createElement('div');
    element.innerHTML = `
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-buttons slot="start">
          <ion-button>
              <ion-icon name="close"></ion-icon>
          </ion-button>
      </ion-buttons>
      <ion-title>Remote control</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding color="primary">
  
  ${getRemoteControlModalContent()}
    
  </ion-content>
  `;

    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', async () => {
        await modalController.dismiss();
    });

    // listen to toggle
    const toggleElement = element.querySelector('ion-toggle');

    if (toggleElement) {
        toggleElement.addEventListener('ionChange', $event => { handleRemoteControlState($event) });
    }

    // create the modal
    const modalElement = await modalController.create({
        component: element
    });

    // present the modal
    await modalElement.present();
};

handleRemoteControlState = ($event) => {
    return new Promise(async (resolve) => {
        if (!$event || !$event.detail) {
            resolve();
            return;
        }

        if($event.detail.checked) {
            await reconnectRemoteControl();
        } else {
            await disconnectRemoteControl();
        }

        resolve();
    });
};

function getRemoteControlModalContent() {
    if (Object({"SIGNALING_SERVER":"https://api.deckdeckgo.com"}).NO_REMOTE) {
        return `<p class="ion-padding" style="margin: 0; font-size: 16px;">The remote control support for this presentation has been turned off by her/his author.</p>`;
    } else {

        const remoteRoom = getRemoteControlRoom();
        const qrCodeLink = `https://deckdeckgo.app/${remoteRoom && remoteRoom !== '' ? `remote/${remoteRoom}` : ''}`;

        return `<ion-list style="ion-no-margin">
        <ion-item style="--border-color: transparent; color: black;">
            <ion-label class="ion-text-wrap">Toggle to disable or enable the remote control</ion-label> 
            <ion-toggle slot="end" checked="true" color="tertiary" style="--background: var(--ion-color-light); --handle-background: white; --handle-background-checked: white;"></ion-toggle>
        </ion-item>
    </ion-list>
  
    <p class="ion-padding-start ion-padding-end" style="margin: 0; font-size: 16px;">Remote control this presentation with your phone or any devices. Scan the following QR Code to open it directly or get the Progressive Web Apps at <a href="https://deckdeckgo.app" target="_blank" style="color: var(--ion-color-tertiary);">https://deckdeckgo.app <ion-icon name="open" style="color: var(--ion-color-tertiary); vertical-align: bottom;"></ion-icon></a> and find <mark style="background: transparent; color: var(--ion-color-tertiary); font-weight: 500;">${remoteRoom}</mark>.</p>

    <p class="ion-padding-start ion-padding-end" style="margin-bottom: 0; font-size: 16px;">If you can't connect or if you lost the connection, toggle off and on the connection to refresh it.</p>

    <div class="qrcode-container" style="display: flex; justify-content: center;  --deckgo-qrcode-size: 300px; --deckgo-qrcode-color-fill: var(--ion-color-tertiary);">
        <deckgo-qrcode content="${qrCodeLink}">
            <ion-icon slot="logo" src="/assets/icons/deckdeckgo.svg"></ion-icon>
        </deckgo-qrcode>
    </div>`;
    }
}

function getRemoteControlRoom() {
    if (!document) {
        return '';
    }

    const deckgoRemoteElement = document.querySelector("deckgo-remote");

    if (!deckgoRemoteElement) {
        return '';
    }

    return deckgoRemoteElement.room ? deckgoRemoteElement.room : '';
}


/***/ }),

/***/ "./src/scripts/remoteControl.js":
/*!**************************************!*\
  !*** ./src/scripts/remoteControl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

remoteEvent = async (event) => {
    return new Promise(async (resolve) => {
        if (!event || !event.detail) {
            resolve();
            return;
        }

        const slider = document.getElementById('slider');

        if (!slider) {
            resolve();
            return;
        }

        const type = event.detail.type;

        if (type === 'next_slide') {
            const slideAnimation = event.detail.slideAnimation;
            await slider.slideNext(slideAnimation, slideAnimation);
            await pushStateSlideIndex(slider);
        } else if (type === 'prev_slide') {
            const slideAnimation = event.detail.slideAnimation;
            await slider.slidePrev(slideAnimation, slideAnimation);
            await pushStateSlideIndex(slider);
        } else if (type === 'slide_action') {
            await youtubePlayPause(event);
        } else if (type === 'slide_to') {
            const index = event.detail.index;
            if (index >= 0) {
                await slider.slideTo(index, 0);
                await pushStateSlideIndex(slider);
            }
        }

        resolve();
    });
};

reconnectRemoteControl = () => {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.connect();

        if (!document.getElementById('slider')) {
            resolve();
            return;
        }

        await document.getElementById('slider').slideTo(0, 300, false);

        resolve();
    });
};

disconnectRemoteControl = () => {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.disconnect();

        resolve();
    });
};

initRemote = async () => {
    return new Promise(async (resolve) => {
        if (Object({"SIGNALING_SERVER":"https://api.deckdeckgo.com"}).NO_REMOTE) {
            resolve();
            return;
        }

        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !window) {
            resolve();
            return;
        }

        deckgoRemoteElement.addEventListener('event', async event => {
            await remoteEvent(event)
        });

        window.addEventListener('resize', async () => {
            await initRemoteSize();
        });

        await initDeck();

        await initRemoteSize();

        await initDeckMove();

        resolve();
    });
};

function initDeck() {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        deck.addEventListener('slidesDidLoad', async (slides) => {
            await initRemoteRoomServer(slides)
        });

        resolve();
    });
}

function initRemoteRoomServer(slides) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !document) {
            resolve();
            return;
        }

        deckgoRemoteElement.slides = slides.detail;

        if (!deckgoRemoteElement.room) {
            // In case the presentation is published and many users are browsing it, this enhance the change to have single id
            // Or hash or timestamp would be better, but for the time being, a random number is readable and probably enough
            const roomNumber = Math.floor(Math.random() * 999);
            deckgoRemoteElement.room = ROOM_NAME ? `${ROOM_NAME} *${roomNumber}` : `DeckDeckGo *${roomNumber}`;
        }

        // SIGNALING_SERVER is declared by Webpack, see webpack.config.js
        deckgoRemoteElement.server = "https://api.deckdeckgo.com";

        resolve();
    });
}

function initDeckMove() {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        deck.addEventListener('slideNextDidChange', async () => {
            await slidePrevNext(true)
        });

        deck.addEventListener('slidePrevDidChange', async () => {
            await slidePrevNext(false)
        });

        deck.addEventListener('slideWillChange', async (event) => {
            await moveRemote(event)
        });

        deck.addEventListener('slideDrag', async (event) => {
            await scrollRemote(event)
        });

        deck.addEventListener('slideToChange', async (event) => {
            await slideToChange(event)
        });

        resolve();
    });
}

function initRemoteSize() {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        deckgoRemoteElement.width = window.innerWidth;
        deckgoRemoteElement.height = window.innerHeight;

        const deck = document.getElementById('slider');

        if (!deckgoRemoteElement || !deck) {
            resolve();
            return;
        }

        deckgoRemoteElement.length = deck.childElementCount;

        resolve();
    });
}

function slideToChange(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement || !event) {
            resolve();
            return;
        }

        const slideIndex = event.detail;

        await deckgoRemoteElement.slideTo(slideIndex, 0);

        resolve();
    });
}

function slidePrevNext(next) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        if (next) {
            await deckgoRemoteElement.nextSlide();
        } else {
            await deckgoRemoteElement.prevSlide();
        }

        resolve();
    });
}

function moveRemote(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.moveDraw(event.detail, '300ms');

        resolve();
    });
}

function scrollRemote(event) {
    return new Promise(async (resolve) => {
        const deckgoRemoteElement = document.querySelector("deckgo-remote");

        if (!deckgoRemoteElement) {
            resolve();
            return;
        }

        await deckgoRemoteElement.moveDraw(event.detail, '0ms');

        resolve();
    });
}

function youtubePlayPause(event) {
    return new Promise(async (resolve) => {
        const deck = document.getElementById('slider');

        if (!deck) {
            resolve();
            return;
        }

        const index = await deck.getActiveIndex();

        const youtubeSlideElement = document.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

        if (!youtubeSlideElement || youtubeSlideElement.tagName !== 'deckgo-slide-youtube'.toUpperCase()) {
            resolve();
            return;
        }

        if (event.detail.action === 'youtube_pause') {
            await youtubeSlideElement.pause();
        } else {
            await youtubeSlideElement.play();
        }

        resolve();
    });
}


/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

previousSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (window.event) {
        window.event.stopPropagation();
    }

    await document.getElementById('slider').slidePrev();
};

nextSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    if (window.event) {
        window.event.stopPropagation();
    }

    await document.getElementById('slider').slideNext();
};

firstSlide = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    await document.getElementById('slider').slideTo(0, 2000);
};

toggleFullScreen = async () => {
    if (!document.getElementById('slider')) {
        return;
    }

    await document.getElementById('slider').toggleFullScreen();
};


/***/ }),

/***/ "./src/scripts/sliderJumpTo.js":
/*!*************************************!*\
  !*** ./src/scripts/sliderJumpTo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class SlidesList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const slidesListActions = await buildSlidesListActions();

        this.innerHTML = '<ion-content><ion-list><ion-list-header>Jump to slide</ion-list-header>' + slidesListActions + '</ion-list></ion-content>';
    }
}

buildSlidesListActions = () => {
    return new Promise(async (resolve) => {
        let result = '';

        const slides = document.querySelectorAll('#slider > *');

        if (slides) {
            let i = 0;

            for (const slide of slides) {
                if (slide.tagName && slide.tagName.toLowerCase().indexOf('deckgo-slide') > -1) {
                    const text = getSlideTitle(slide, i);

                    result += '<ion-item ion-item button onclick="jumpToSlide(' + i + ')" color="primary"><ion-label>' + text + '</ion-label></ion-item>';

                    i++;
                }
            }
        }

        resolve(result);
    });
};

function getSlideTitle(slide, index) {
    if (!slide) {
        return 'Slide ' + (index + 1);
    }

    const title = slide.querySelector('[slot="title"]');

    if (title && title.textContent !== '') {
        return title.textContent;
    } else {
        const start = slide.querySelector('[slot="start"],[slot="header"]');

        if (start && start.textContent !== '') {
            return start.textContent;
        } else {
            const end = slide.querySelector('[slot="end"],[slot="footer"]');

            if (end && end.textContent !== '') {
                return end.textContent;
            } else {
                return 'Slide ' + (index + 1);
            }
        }
    }
}

jumpToSlide = async (index) => {
    await document.getElementById('slider').slideTo(index, 0);
    await document.querySelector('ion-popover-controller').dismiss();
};

customElements.define('slides-list', SlidesList);

presentSlidePicker = async () => {
    const popoverController = document.querySelector('ion-popover-controller');

    if (!popoverController) {
        return;
    }

    await popoverController.componentOnReady();

    const popover = await popoverController.create({
        component: 'slides-list',
        translucent: true
    });

    return await popover.present();
};


/***/ })

/******/ });
//# sourceMappingURL=main.bdca48b69780a4e9a6be.js.map