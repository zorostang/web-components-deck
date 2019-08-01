(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/deckgo-lazy-img.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/deckgo-lazy-img.entry.js ***!
  \************************************************************************************/
/*! exports provided: deckgo_lazy_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_lazy_img", function() { return DeckdeckgoLazyImg; });
/* harmony import */ var _chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-bcaf8fb3.js */ "./node_modules/@deckdeckgo/lazy-img/dist/esm/legacy/chunk-bcaf8fb3.js");
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

// From Ionicons
// https://github.com/ionic-team/ionicons/blob/master/src/components/icon/validate.ts
var validateContent = function (svgContent) {
    if (svgContent) {
        var div = document.createElement('div');
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (var i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        var svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            svgElm.setAttribute('class', 's-ion-icon');
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};
var isValid = function (elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (var i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};
var isStr = function (val) { return typeof val === 'string'; };
// From Ionicons
var requests = new Map();
var getSvgContent = function (url) {
    // see if we already have a request for this url
    var req = requests.get(url);
    if (!req) {
        // we don't already have a request
        req = fetch(url).then(function (rsp) {
            if (rsp.status <= 299) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(function (svgContent) { return validateContent(svgContent); });
        // cache for the same requests
        requests.set(url, req);
    }
    return req;
};
var DeckdeckgoLazyImg = /** @class */ (function () {
    function DeckdeckgoLazyImg(hostRef) {
        var _this = this;
        Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.observerRootMargin = '100px 0px';
        this.imgLoaded = false;
        this.onIntersection = function (entries) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!entries || entries.length <= 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.handleIntersection(entries[0])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.lazyImgDidLoad = Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "lazyImgDidLoad", 7);
    }
    DeckdeckgoLazyImg.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        this.lazyImgDidLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLazyImg.prototype.handleAttrImgSrc = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLazyImg.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(window && 'IntersectionObserver' in window)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.deferLoad()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.loadImmediately()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLazyImg.prototype.loadImmediately = function () {
        return this.load();
    };
    DeckdeckgoLazyImg.prototype.deferLoad = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.observer = new IntersectionObserver(_this.onIntersection, {
                rootMargin: _this.observerRootMargin,
                threshold: _this.observerThreshold
            });
            _this.observer.observe(_this.el.shadowRoot.host);
            resolve();
        });
    };
    DeckdeckgoLazyImg.prototype.lazyLoad = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoLazyImg.prototype.handleIntersection = function (entry) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!entry.isIntersecting) return [3 /*break*/, 2];
                        if (this.observer) {
                            this.observer.disconnect();
                        }
                        return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoLazyImg.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.svgSrc) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadSvg()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.loadImg()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoLazyImg.prototype.loadImg = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var img = _this.el.shadowRoot.querySelector('img');
            if (!img) {
                resolve();
                return;
            }
            if (_this.imgSrc) {
                img.setAttribute('src', _this.imgSrc);
            }
            if (_this.imgSrcSet) {
                img.setAttribute('srcset', _this.imgSrcSet);
            }
            resolve();
        });
    };
    DeckdeckgoLazyImg.prototype.loadSvg = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, getSvgContent(this.svgSrc)];
                    case 1:
                        _a.svgContent = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoLazyImg.prototype.loadError = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var img = _this.el.shadowRoot.querySelector('img');
            if (!img) {
                resolve();
                return;
            }
            if (!_this.imgErrorSrc || img.src === _this.imgErrorSrc) {
                resolve();
                return;
            }
            if (img.src === _this.imgSrc || img.srcset === _this.imgSrcSet) {
                img.src = _this.imgErrorSrc;
            }
            resolve();
        });
    };
    DeckdeckgoLazyImg.prototype.render = function () {
        var _this = this;
        if (this.svgContent) {
            return Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { innerHTML: this.svgContent }));
        }
        else {
            return Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { alt: this.imgLoaded ? (this.imgAlt ? this.imgAlt : this.imgSrc) : '', sizes: this.imgSizes ? this.imgSizes : undefined, onLoad: function () { return _this.imgLoaded = true; }, onError: function () { return _this.loadError(); } }));
        }
    };
    Object.defineProperty(DeckdeckgoLazyImg.prototype, "el", {
        get: function () { return Object(_chunk_bcaf8fb3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoLazyImg, "watchers", {
        get: function () {
            return {
                "imgSrc": ["handleAttrImgSrc"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoLazyImg, "style", {
        get: function () { return ":host{fill:currentColor}img,svg{pointer-events:var(--deckgo-lazy-img-pointer-events,none);height:var(--deckgo-lazy-img-height);width:var(--deckgo-lazy-img-width);max-height:var(--deckgo-lazy-img-max-height);max-width:var(--deckgo-lazy-img-max-width,100%);min-height:var(--deckgo-lazy-img-min-height);min-width:var(--deckgo-lazy-img-min-width);float:var(--deckgo-lazy-img-float);padding:var(--deckgo-lazy-img-padding);vertical-align:var(--deckgo-lazy-img-vertical-align);display:var(--deckgo-lazy-img-display);border-radius:var(--deckgo-lazy-img-border-radius)}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoLazyImg;
}());



/***/ })

}]);
//# sourceMappingURL=102.82d1228195b94562264a.js.map