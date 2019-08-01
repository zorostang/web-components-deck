(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js ***!
  \********************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) return [3 /*break*/, 2];
                router = document.querySelector('ion-router');
                if (!router) return [3 /*break*/, 2];
                if (ev != null) {
                    ev.preventDefault();
                }
                return [4 /*yield*/, router.componentOnReady()];
            case 1:
                _a.sent();
                return [2 /*return*/, router.push(url, direction)];
            case 2: return [2 /*return*/, false];
        }
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/legacy/ion-text.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/ion-text.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-09ec7fc0.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-09ec7fc0.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-1074393c.js");
/* harmony import */ var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-ba834eff.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js");



/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Text.prototype.hostData = function () {
        var _a;
        var mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return {
            class: Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_a = {}, _a[mode] = true, _a))
        };
    };
    Text.prototype.__stencil_render = function () {
        return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Text.prototype.render = function () { return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Text, "style", {
        get: function () { return ":host(.ion-color){color:var(--ion-color-base)}"; },
        enumerable: true,
        configurable: true
    });
    return Text;
}());



/***/ })

}]);
//# sourceMappingURL=59.d5363d25efdde289594a.js.map