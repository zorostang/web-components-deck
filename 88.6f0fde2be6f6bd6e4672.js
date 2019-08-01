(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/@deckdeckgo/core/dist/esm/legacy/deckgo-slide-qrcode.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/core/dist/esm/legacy/deckgo-slide-qrcode.entry.js ***!
  \************************************************************************************/
/*! exports provided: deckgo_slide_qrcode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_slide_qrcode", function() { return DeckdeckgoSlideQrcode; });
/* harmony import */ var _deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-37488575.js */ "./node_modules/@deckdeckgo/core/dist/esm/legacy/deckdeckgo-37488575.js");
/* harmony import */ var _chunk_7cf211f5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-7cf211f5.js */ "./node_modules/@deckdeckgo/core/dist/esm/legacy/chunk-7cf211f5.js");
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


var DeckdeckgoSlideQrcode = /** @class */ (function () {
    function DeckdeckgoSlideQrcode(hostRef) {
        var _this = this;
        Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.customActions = false;
        this.customBackground = false;
        this.onResizeContent = function () { return __awaiter(_this, void 0, void 0, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initQRCodeSize()];
                    case 1:
                        _a.sent();
                        element = this.el.shadowRoot.querySelector('deckgo-qrcode');
                        if (!element) return [3 /*break*/, 3];
                        return [4 /*yield*/, element.generate()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.slideDidLoad = Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "slideDidLoad", 7);
    }
    DeckdeckgoSlideQrcode.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _chunk_7cf211f5_js__WEBPACK_IMPORTED_MODULE_1__["a"].hideLazyLoadImages(this.el)];
                    case 1:
                        _a.sent();
                        this.initWindowResize();
                        this.slideDidLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoSlideQrcode.prototype.initWindowResize = function () {
        if (window) {
            window.addEventListener('resize', _chunk_7cf211f5_js__WEBPACK_IMPORTED_MODULE_1__["b"].debounce(this.onResizeContent));
        }
    };
    DeckdeckgoSlideQrcode.prototype.initQRCodeSize = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var container = _this.el.shadowRoot.querySelector('div.deckgo-slide-qrcode');
            if (container) {
                var width = container.clientWidth;
                var height = container.clientHeight;
                var qrCode = container.querySelector('deckgo-qrcode');
                if (qrCode) {
                    qrCode.style.setProperty('--deckgo-qrcode-size', width > height ? (height + 'px') : ('calc(' + width + 'px - 32px)'));
                }
            }
            resolve();
        });
    };
    DeckdeckgoSlideQrcode.prototype.beforeSwipe = function (_enter) {
        return new Promise(function (resolve) {
            resolve(true);
        });
    };
    DeckdeckgoSlideQrcode.prototype.afterSwipe = function () {
        return _chunk_7cf211f5_js__WEBPACK_IMPORTED_MODULE_1__["c"].afterSwipe();
    };
    DeckdeckgoSlideQrcode.prototype.lazyLoadContent = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        promises.push(_chunk_7cf211f5_js__WEBPACK_IMPORTED_MODULE_1__["c"].lazyLoadContent(this.el));
                        promises.push(this.initQRCodeSize());
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoSlideQrcode.prototype.render = function () {
        return Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["h"], { class: { 'deckgo-slide-container': true } }, Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "deckgo-slide" }, Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("slot", { name: "title" }), Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "deckgo-slide-qrcode" }, Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("slot", { name: "content" }), Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("deckgo-qrcode", { content: this.content })), Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("slot", { name: "notes" }), Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("slot", { name: "actions" }), Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["f"])("slot", { name: "background" })));
    };
    Object.defineProperty(DeckdeckgoSlideQrcode.prototype, "el", {
        get: function () { return Object(_deckdeckgo_37488575_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoSlideQrcode, "style", {
        get: function () { return ":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}\@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}\@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}div.deckgo-slide-qrcode{height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-align:var(--slide-qrcode-align,center);align-items:var(--slide-qrcode-align,center);text-align:var(--slide-qrcode-text-align,center)}div.deckgo-slide-qrcode>*{-ms-flex:1 50%;flex:1 50%}div.deckgo-slide-qrcode deckgo-qrcode{background:var(--slide-qrcode-background)}::slotted([slot=title]){display:var(--slide-qrcode-title-display,inherit)}::slotted([slot=content]){-ms-flex:1 50%;flex:1 50%}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoSlideQrcode;
}());



/***/ })

}]);
//# sourceMappingURL=88.6f0fde2be6f6bd6e4672.js.map