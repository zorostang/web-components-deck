(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

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

/***/ "./node_modules/@ionic/core/dist/esm/legacy/ion-avatar_3-ios.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/legacy/ion-avatar_3-ios.entry.js ***!
  \****************************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var _chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-09ec7fc0.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-09ec7fc0.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-1074393c.js");
/* harmony import */ var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-ba834eff.js */ "./node_modules/@ionic/core/dist/esm/legacy/chunk-ba834eff.js");



var Avatar = /** @class */ (function () {
    function Avatar(hostRef) {
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Avatar.prototype.hostData = function () {
        var _a;
        var mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return {
            class: (_a = {},
                _a[mode] = true,
                _a)
        };
    };
    Avatar.prototype.__stencil_render = function () {
        return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Avatar.prototype.render = function () { return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Avatar, "style", {
        get: function () { return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}"; },
        enumerable: true,
        configurable: true
    });
    return Avatar;
}());
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Badge = /** @class */ (function () {
    function Badge(hostRef) {
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Badge.prototype.hostData = function () {
        var _a;
        var mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return {
            class: Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_a = {}, _a[mode] = true, _a))
        };
    };
    Badge.prototype.__stencil_render = function () {
        return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Badge.prototype.render = function () { return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Badge, "style", {
        get: function () { return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}"; },
        enumerable: true,
        configurable: true
    });
    return Badge;
}());
var Thumbnail = /** @class */ (function () {
    function Thumbnail(hostRef) {
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Thumbnail.prototype.hostData = function () {
        var _a;
        var mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return {
            class: (_a = {},
                _a[mode] = true,
                _a)
        };
    };
    Thumbnail.prototype.__stencil_render = function () {
        return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
    };
    Thumbnail.prototype.render = function () { return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render()); };
    Object.defineProperty(Thumbnail, "style", {
        get: function () { return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"; },
        enumerable: true,
        configurable: true
    });
    return Thumbnail;
}());



/***/ })

}]);
//# sourceMappingURL=42.00bd40e43658f6aa6c86.js.map