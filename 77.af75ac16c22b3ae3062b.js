(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/ionicons/dist/esm/legacy/chunk-2b29c7de.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy/chunk-2b29c7de.js ***!
  \*****************************************************************/
/*! exports provided: a, b, g, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isStr; });
/* harmony import */ var _chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-a6a54157.js */ "./node_modules/ionicons/dist/esm/legacy/chunk-a6a54157.js");

var CACHED_MAP;
var getIconMap = function () {
    if (!CACHED_MAP) {
        var win = window;
        win.Ionicons = win.Ionicons || {};
        CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
};
var addIcons = function (icons) {
    var map = getIconMap();
    Object.keys(icons).forEach(function (name) {
        map.set(name, icons[name]);
    });
};
var getUrl = function (i) {
    var url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon, i.mode, i.ios, i.md);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon[i.mode]);
        if (url) {
            return url;
        }
    }
    return null;
};
var getNamedUrl = function (name) {
    var url = getIconMap().get(name);
    if (url) {
        return url;
    }
    return Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["g"])("svg/" + name + ".svg");
};
var getName = function (name, icon, mode, ios, md) {
    // default to "md" if somehow the mode wasn't set
    mode = (mode && mode.toLowerCase()) === 'ios' ? 'ios' : 'md';
    // if an icon was passed in using the ios or md attributes
    // set the iconName to whatever was passed in
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else {
        if (!name && icon && !isSrc(icon)) {
            name = icon;
        }
        if (isStr(name)) {
            name = name.toLowerCase();
            if (!/^md-|^ios-|^logo-/.test(name)) {
                // this does not have one of the defaults
                // so lets auto add in the mode prefix for them
                name = mode + '-' + name;
            }
        }
    }
    if (!isStr(name) || name.trim() === '') {
        return null;
    }
    // only allow alpha characters and dash
    var invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
};
var getSrc = function (src) {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
var isSrc = function (str) {
    return str.length > 0 && /(\/|\.)/.test(str);
};
var isStr = function (val) { return typeof val === 'string'; };



/***/ }),

/***/ "./node_modules/ionicons/dist/esm/legacy/ion-icon.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ionicons/dist/esm/legacy/ion-icon.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_icon", function() { return Icon; });
/* harmony import */ var _chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-a6a54157.js */ "./node_modules/ionicons/dist/esm/legacy/chunk-a6a54157.js");
/* harmony import */ var _chunk_2b29c7de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-2b29c7de.js */ "./node_modules/ionicons/dist/esm/legacy/chunk-2b29c7de.js");


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
            if (Object(_chunk_2b29c7de_js__WEBPACK_IMPORTED_MODULE_1__["i"])(val) && val.toLowerCase().indexOf('on') === 0) {
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
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.mode = getIonMode(this);
        this.isVisible = false;
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
    }
    Icon.prototype.connectedCallback = function () {
        var _this = this;
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', function () {
            _this.isVisible = true;
            _this.loadIcon();
        });
    };
    Icon.prototype.disconnectedCallback = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Icon.prototype.waitUntilVisible = function (el, rootMargin, cb) {
        var _this = this;
        if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            var io_1 = this.io = new window.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    io_1.disconnect();
                    _this.io = undefined;
                    cb();
                }
            }, { rootMargin: rootMargin });
            io_1.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    };
    Icon.prototype.loadIcon = function () {
        var _this = this;
        if (this.isVisible) {
            var url = Object(_chunk_2b29c7de_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this);
            if (url) {
                getSvgContent(url)
                    .then(function (svgContent) { return _this.svgContent = svgContent; });
            }
        }
        if (!this.ariaLabel) {
            var label = Object(_chunk_2b29c7de_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.name, this.icon, this.mode, this.ios, this.md);
            // user did not provide a label
            // come up with the label based on the icon name
            if (label) {
                this.ariaLabel = label
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    };
    Icon.prototype.render = function () {
        var _a, _b;
        var mode = this.mode || 'md';
        var flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return (Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "img", class: Object.assign((_a = {}, _a[mode] = true, _a), createColorClasses(this.color), (_b = {}, _b["icon-" + this.size] = !!this.size, _b['flip-rtl'] = !!flipRtl && this.el.ownerDocument.dir === 'rtl', _b)) }, ((this.svgContent)
            ? Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner", innerHTML: this.svgContent })
            : Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-inner" }))));
    };
    Object.defineProperty(Icon, "assetsDirs", {
        get: function () { return ["svg"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "watchers", {
        get: function () {
            return {
                "name": ["loadIcon"],
                "src": ["loadIcon"],
                "icon": ["loadIcon"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "style", {
        get: function () { return ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"; },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());
var getIonMode = function (ref) {
    return Object(_chunk_a6a54157_js__WEBPACK_IMPORTED_MODULE_0__["c"])(ref) || document.documentElement.getAttribute('mode') || 'md';
};
var createColorClasses = function (color) {
    var _a;
    return (color) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : null;
};



/***/ })

}]);
//# sourceMappingURL=77.af75ac16c22b3ae3062b.js.map