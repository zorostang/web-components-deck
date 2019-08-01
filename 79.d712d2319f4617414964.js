(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/deckgo-bar-chart_3.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/charts/dist/esm/legacy/deckgo-bar-chart_3.entry.js ***!
  \*************************************************************************************/
/*! exports provided: deckgo_bar_chart, deckgo_line_chart, deckgo_pie_chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_bar_chart", function() { return DeckdeckgoBarChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_line_chart", function() { return DeckdeckgoLineChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_pie_chart", function() { return DeckdeckgoPieChart; });
/* harmony import */ var _chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-c379be54.js */ "./node_modules/@deckdeckgo/charts/dist/esm/legacy/chunk-c379be54.js");
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

var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
        name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
}
function creatorInherit(name) {
    return function () {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === xhtml && document.documentElement.namespaceURI === xhtml
            ? document.createElement(name)
            : document.createElementNS(uri, name);
    };
}
function creatorFixed(fullname) {
    return function () {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
}
function none() { }
function selector(selector) {
    return selector == null ? none : function () {
        return this.querySelector(selector);
    };
}
function selection_select(select) {
    if (typeof select !== "function")
        select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node)
                    subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
            }
        }
    }
    return new Selection(subgroups, this._parents);
}
function empty() {
    return [];
}
function selectorAll(selector) {
    return selector == null ? empty : function () {
        return this.querySelectorAll(selector);
    };
}
function selection_selectAll(select) {
    if (typeof select !== "function")
        select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                subgroups.push(select.call(node, node.__data__, i, group));
                parents.push(node);
            }
        }
    }
    return new Selection(subgroups, parents);
}
function matcher(selector) {
    return function () {
        return this.matches(selector);
    };
}
function selection_filter(match) {
    if (typeof match !== "function")
        match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new Selection(subgroups, this._parents);
}
function sparse(update) {
    return new Array(update.length);
}
function selection_enter() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
}
function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function (child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function (child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function (selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function (selector) { return this._parent.querySelectorAll(selector); }
};
function constant(x) {
    return function () {
        return x;
    };
}
var keyPrefix = "$"; // Protect against keys like “__proto__”.
function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
        if (node = group[i]) {
            node.__data__ = data[i];
            update[i] = node;
        }
        else {
            enter[i] = new EnterNode(parent, data[i]);
        }
    }
    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
        if (node = group[i]) {
            exit[i] = node;
        }
    }
}
function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
        if (node = group[i]) {
            keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
            if (keyValue in nodeByKeyValue) {
                exit[i] = node;
            }
            else {
                nodeByKeyValue[keyValue] = node;
            }
        }
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
        keyValue = keyPrefix + key.call(parent, data[i], i, data);
        if (node = nodeByKeyValue[keyValue]) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue[keyValue] = null;
        }
        else {
            enter[i] = new EnterNode(parent, data[i]);
        }
    }
    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
        if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
            exit[i] = node;
        }
    }
}
function selection_data(value, key) {
    if (!value) {
        data = new Array(this.size()), j = -1;
        this.each(function (d) { data[++j] = d; });
        return data;
    }
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
        value = constant(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
            if (previous = enterGroup[i0]) {
                if (i0 >= i1)
                    i1 = i0 + 1;
                while (!(next = updateGroup[i1]) && ++i1 < dataLength)
                    ;
                previous._next = next || null;
            }
        }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}
function selection_exit() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
}
function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null)
        update = onupdate(update);
    if (onexit == null)
        exit.remove();
    else
        onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}
function selection_merge(selection) {
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for (; j < m0; ++j) {
        merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
}
function selection_order() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
        for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
            if (node = group[i]) {
                if (next && node.compareDocumentPosition(next) ^ 4)
                    next.parentNode.insertBefore(node, next);
                next = node;
            }
        }
    }
    return this;
}
function selection_sort(compare) {
    if (!compare)
        compare = ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                sortgroup[i] = node;
            }
        }
        sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}
function selection_nodes() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function () { nodes[++i] = this; });
    return nodes;
}
function selection_node() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
            var node = group[i];
            if (node)
                return node;
        }
    }
    return null;
}
function selection_size() {
    var size = 0;
    this.each(function () { ++size; });
    return size;
}
function selection_empty() {
    return !this.node();
}
function selection_each(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
            if (node = group[i])
                callback.call(node, node.__data__, i, group);
        }
    }
    return this;
}
function attrRemove(name) {
    return function () {
        this.removeAttribute(name);
    };
}
function attrRemoveNS(fullname) {
    return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant(name, value) {
    return function () {
        this.setAttribute(name, value);
    };
}
function attrConstantNS(fullname, value) {
    return function () {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function attrFunction(name, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.removeAttribute(name);
        else
            this.setAttribute(name, v);
    };
}
function attrFunctionNS(fullname, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.removeAttributeNS(fullname.space, fullname.local);
        else
            this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function selection_attr(name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local
            ? node.getAttributeNS(fullname.space, fullname.local)
            : node.getAttribute(fullname);
    }
    return this.each((value == null
        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)
        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}
function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
}
function styleRemove(name) {
    return function () {
        this.style.removeProperty(name);
    };
}
function styleConstant(name, value, priority) {
    return function () {
        this.style.setProperty(name, value, priority);
    };
}
function styleFunction(name, value, priority) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            this.style.removeProperty(name);
        else
            this.style.setProperty(name, v, priority);
    };
}
function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
}
function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}
function propertyRemove(name) {
    return function () {
        delete this[name];
    };
}
function propertyConstant(name, value) {
    return function () {
        this[name] = value;
    };
}
function propertyFunction(name, value) {
    return function () {
        var v = value.apply(this, arguments);
        if (v == null)
            delete this[name];
        else
            this[name] = v;
    };
}
function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
}
function classArray(string) {
    return string.trim().split(/^|\s+/);
}
function classList(node) {
    return node.classList || new ClassList(node);
}
function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
    add: function (name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function (name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function (name) {
        return this._names.indexOf(name) >= 0;
    }
};
function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
        list.add(names[i]);
}
function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
        list.remove(names[i]);
}
function classedTrue(names) {
    return function () {
        classedAdd(this, names);
    };
}
function classedFalse(names) {
    return function () {
        classedRemove(this, names);
    };
}
function classedFunction(names, value) {
    return function () {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
}
function selection_classed(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while (++i < n)
            if (!list.contains(names[i]))
                return false;
        return true;
    }
    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
}
function textRemove() {
    this.textContent = "";
}
function textConstant(value) {
    return function () {
        this.textContent = value;
    };
}
function textFunction(value) {
    return function () {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction
            : textConstant)(value))
        : this.node().textContent;
}
function htmlRemove() {
    this.innerHTML = "";
}
function htmlConstant(value) {
    return function () {
        this.innerHTML = value;
    };
}
function htmlFunction(value) {
    return function () {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
}
function raise() {
    if (this.nextSibling)
        this.parentNode.appendChild(this);
}
function selection_raise() {
    return this.each(raise);
}
function lower() {
    if (this.previousSibling)
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function selection_lower() {
    return this.each(lower);
}
function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
        return this.appendChild(create.apply(this, arguments));
    });
}
function constantNull() {
    return null;
}
function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name), select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}
function remove() {
    var parent = this.parentNode;
    if (parent)
        parent.removeChild(this);
}
function selection_remove() {
    return this.each(remove);
}
function selection_cloneShallow() {
    return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}
function selection_cloneDeep() {
    return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}
function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
}
var filterEvents = {};
if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!("onmouseenter" in element)) {
        filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
    }
}
function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function (event) {
        var related = event.relatedTarget;
        if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
            listener.call(this, event);
        }
    };
}
function contextListener(listener, index, group) {
    return function (event1) {
        try {
            listener.call(this, this.__data__, index, group);
        }
        finally {
        }
    };
}
function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0)
            name = t.slice(i + 1), t = t.slice(0, i);
        return { type: t, name: name };
    });
}
function onRemove(typename) {
    return function () {
        var on = this.__on;
        if (!on)
            return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
            if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.capture);
            }
            else {
                on[++i] = o;
            }
        }
        if (++i)
            on.length = i;
        else
            delete this.__on;
    };
}
function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function (d, i, group) {
        var on = this.__on, o, listener = wrap(value, i, group);
        if (on)
            for (var j = 0, m = on.length; j < m; ++j) {
                if ((o = on[j]).type === typename.type && o.name === typename.name) {
                    this.removeEventListener(o.type, o.listener, o.capture);
                    this.addEventListener(o.type, o.listener = listener, o.capture = capture);
                    o.value = value;
                    return;
                }
            }
        this.addEventListener(typename.type, listener, capture);
        o = { type: typename.type, name: typename.name, value: value, listener: listener, capture: capture };
        if (!on)
            this.__on = [o];
        else
            on.push(o);
    };
}
function selection_on(typename, value, capture) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on)
            for (var j = 0, m = on.length, o; j < m; ++j) {
                for (i = 0, o = on[j]; i < n; ++i) {
                    if ((t = typenames[i]).type === o.type && t.name === o.name) {
                        return o.value;
                    }
                }
            }
        return;
    }
    on = value ? onAdd : onRemove;
    if (capture == null)
        capture = false;
    for (i = 0; i < n; ++i)
        this.each(on(typenames[i], value, capture));
    return this;
}
function dispatchEvent(node, type, params) {
    var window = defaultView(node), event = window.CustomEvent;
    if (typeof event === "function") {
        event = new event(type, params);
    }
    else {
        event = window.document.createEvent("Event");
        if (params)
            event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else
            event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
    return function () {
        return dispatchEvent(this, type, params);
    };
}
function dispatchFunction(type, params) {
    return function () {
        return dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
}
var root = [null];
function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function selection() {
    return new Selection([[document.documentElement]], root);
}
Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
};
function select(selector) {
    return typeof selector === "string"
        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
        : new Selection([[selector]], root);
}
var DeckdeckgoChartUtils = /** @class */ (function () {
    function DeckdeckgoChartUtils() {
    }
    DeckdeckgoChartUtils.initSvg = function (el, width, height) {
        var svg = select(el.shadowRoot.querySelector('svg')).attr('width', width).attr('height', height);
        this.clearSvg(svg);
        return svg;
    };
    DeckdeckgoChartUtils.clearSvg = function (svg) {
        if (svg) {
            svg.selectAll('*').remove();
        }
    };
    return DeckdeckgoChartUtils;
}());
function ascending$1(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function bisector(compare) {
    if (compare.length === 1)
        compare = ascendingComparator(compare);
    return {
        left: function (a, x, lo, hi) {
            if (lo == null)
                lo = 0;
            if (hi == null)
                hi = a.length;
            while (lo < hi) {
                var mid = lo + hi >>> 1;
                if (compare(a[mid], x) < 0)
                    lo = mid + 1;
                else
                    hi = mid;
            }
            return lo;
        },
        right: function (a, x, lo, hi) {
            if (lo == null)
                lo = 0;
            if (hi == null)
                hi = a.length;
            while (lo < hi) {
                var mid = lo + hi >>> 1;
                if (compare(a[mid], x) > 0)
                    hi = mid;
                else
                    lo = mid + 1;
            }
            return lo;
        }
    };
}
function ascendingComparator(f) {
    return function (d, x) {
        return ascending$1(f(d), x);
    };
}
var ascendingBisect = bisector(ascending$1);
var bisectRight = ascendingBisect.right;
function extent(values, valueof) {
    var min;
    var max;
    if (valueof === undefined) {
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (value != null) {
                if (min === undefined) {
                    if (value >= value)
                        min = max = value;
                }
                else {
                    if (min > value)
                        min = value;
                    if (max < value)
                        max = value;
                }
            }
        }
    }
    else {
        var index = -1;
        for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
            var value = values_2[_a];
            if ((value = valueof(value, ++index, values)) != null) {
                if (min === undefined) {
                    if (value >= value)
                        min = max = value;
                }
                else {
                    if (min > value)
                        min = value;
                    if (max < value)
                        max = value;
                }
            }
        }
    }
    return [min, max];
}
function sequence(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while (++i < n) {
        range[i] = start + i * step;
    }
    return range;
}
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0)
        return [start];
    if (reverse = stop < start)
        n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step))
        return [];
    if (step > 0) {
        start = Math.ceil(start / step);
        stop = Math.floor(stop / step);
        ticks = new Array(n = Math.ceil(stop - start + 1));
        while (++i < n)
            ticks[i] = (start + i) * step;
    }
    else {
        start = Math.floor(start * step);
        stop = Math.ceil(stop * step);
        ticks = new Array(n = Math.ceil(start - stop + 1));
        while (++i < n)
            ticks[i] = (start - i) / step;
    }
    if (reverse)
        ticks.reverse();
    return ticks;
}
function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0
        ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
        : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10)
        step1 *= 10;
    else if (error >= e5)
        step1 *= 5;
    else if (error >= e2)
        step1 *= 2;
    return stop < start ? -step1 : step1;
}
function max(values, valueof) {
    var max;
    if (valueof === undefined) {
        for (var _i = 0, values_3 = values; _i < values_3.length; _i++) {
            var value = values_3[_i];
            if (value != null
                && (max < value || (max === undefined && value >= value))) {
                max = value;
            }
        }
    }
    else {
        var index = -1;
        for (var _a = 0, values_4 = values; _a < values_4.length; _a++) {
            var value = values_4[_a];
            if ((value = valueof(value, ++index, values)) != null
                && (max < value || (max === undefined && value >= value))) {
                max = value;
            }
        }
    }
    return max;
}
function initRange(domain, range) {
    switch (arguments.length) {
        case 0: break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
var implicit = Symbol("implicit");
function ordinal() {
    var index = new Map(), domain = [], range = [], unknown = implicit;
    function scale(d) {
        var key = d + "", i = index.get(key);
        if (!i) {
            if (unknown !== implicit)
                return unknown;
            index.set(key, i = domain.push(d));
        }
        return range[(i - 1) % range.length];
    }
    scale.domain = function (_) {
        if (!arguments.length)
            return domain.slice();
        domain = [], index = new Map();
        for (var _i = 0, _1 = _; _i < _1.length; _i++) {
            var value = _1[_i];
            var key = value + "";
            if (index.has(key))
                continue;
            index.set(key, domain.push(value));
        }
        return scale;
    };
    scale.range = function (_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function (_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function () {
        return ordinal(domain, range).unknown(unknown);
    };
    initRange.apply(scale, arguments);
    return scale;
}
function band() {
    var scale = ordinal().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round)
            step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round)
            start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = sequence(n).map(function (i) { return start + step * i; });
        return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function (_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function (_) {
        return arguments.length ? (r0 = _[0], r1 = _[1], _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
    };
    scale.rangeRound = function (_) {
        return r0 = _[0], r1 = _[1], _, r0 = +r0, r1 = +r1, round = true, rescale();
    };
    scale.bandwidth = function () {
        return bandwidth;
    };
    scale.step = function () {
        return step;
    };
    scale.round = function (_) {
        return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function (_) {
        return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function (_) {
        return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function (_) {
        return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function (_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function () {
        return band(domain(), [r0, r1])
            .round(round)
            .paddingInner(paddingInner)
            .paddingOuter(paddingOuter)
            .align(align);
    };
    return initRange.apply(rescale(), arguments);
}
function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
        prototype[key] = definition[key];
    return prototype;
}
function Color() { }
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex3 = /^#([0-9a-f]{3})$/, reHex6 = /^#([0-9a-f]{6})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
define(Color, color, {
    displayable: function () {
        return this.rgb().displayable();
    },
    hex: function () {
        return this.rgb().hex();
    },
    toString: function () {
        return this.rgb() + "";
    }
});
function color(format) {
    var m;
    format = (format + "").trim().toLowerCase();
    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
        : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
            : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
                : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
                    : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
                        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
                            : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
                                : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
                                    : named.hasOwnProperty(format) ? rgbn(named[format])
                                        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
                                            : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0)
        r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color))
        o = color(o);
    if (!o)
        return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
define(Rgb, rgb, extend(Color, {
    brighter: function (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function () {
        return this;
    },
    displayable: function () {
        return (0 <= this.r && this.r <= 255)
            && (0 <= this.g && this.g <= 255)
            && (0 <= this.b && this.b <= 255)
            && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: function () {
        return "#" + hex(this.r) + hex(this.g) + hex(this.b);
    },
    toString: function () {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "rgb(" : "rgba(")
            + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
            + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
            + Math.max(0, Math.min(255, Math.round(this.b) || 0))
            + (a === 1 ? ")" : ", " + a + ")");
    }
}));
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0)
        h = s = l = NaN;
    else if (l <= 0 || l >= 1)
        h = s = NaN;
    else if (s <= 0)
        h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl)
        return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color))
        o = color(o);
    if (!o)
        return new Hsl;
    if (o instanceof Hsl)
        return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max)
            h = (g - b) / s + (g < b) * 6;
        else if (g === max)
            h = (b - r) / s + 2;
        else
            h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    }
    else {
        s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
    brighter: function (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function () {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s))
            && (0 <= this.l && this.l <= 1)
            && (0 <= this.opacity && this.opacity <= 1);
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
            : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
                : m1) * 255;
}
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;
// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18, Xn = 0.96422, Yn = 1, Zn = 0.82521, t0 = 4 / 29, t1 = 6 / 29, t2 = 3 * t1 * t1, t3 = t1 * t1 * t1;
function labConvert(o) {
    if (o instanceof Lab)
        return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) {
        if (isNaN(o.h))
            return new Lab(o.l, 0, 0, o.opacity);
        var h = o.h * deg2rad;
        return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
    }
    if (!(o instanceof Rgb))
        o = rgbConvert(o);
    var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
    if (r === g && g === b)
        x = z = y;
    else {
        x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
        z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function lab(l, a, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}
function Lab(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
}
define(Lab, lab, extend(Color, {
    brighter: function (k) {
        return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function (k) {
        return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function () {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        x = Xn * lab2xyz(x);
        y = Yn * lab2xyz(y);
        z = Zn * lab2xyz(z);
        return new Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
}));
function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
    if (o instanceof Hcl)
        return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab))
        o = labConvert(o);
    if (o.a === 0 && o.b === 0)
        return new Hcl(NaN, 0, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * rad2deg;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function hcl(h, c, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
}
define(Hcl, hcl, extend(Color, {
    brighter: function (k) {
        return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
    },
    darker: function (k) {
        return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function () {
        return labConvert(this).rgb();
    }
}));
var A = -0.14861, B = +1.78277, C = -0.29227, D = -0.90649, E = +1.97294, ED = E * D, EB = E * B, BC_DA = B * C - D * A;
function cubehelixConvert(o) {
    if (o instanceof Cubehelix)
        return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Rgb))
        o = rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k = (E * (g - l) - C * bl) / D, s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
    h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function cubehelix(h, s, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
define(Cubehelix, cubehelix, extend(Color, {
    brighter: function (k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad, l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
    }
}));
function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0
        + (4 - 6 * t2 + 3 * t3) * v1
        + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
        + t3 * v3) / 6;
}
function basis$1(values) {
    var n = values.length - 1;
    return function (t) {
        var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return basis((t - i / n) * n, v0, v1, v2, v3);
    };
}
function constant$1(x) {
    return function () {
        return x;
    };
}
function linear(a, d) {
    return function (t) {
        return a + t * d;
    };
}
function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
        return Math.pow(a + t * b, y);
    };
}
function hue(a, b) {
    var d = b - a;
    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$1(isNaN(a) ? b : a);
}
function gamma(y) {
    return (y = +y) === 1 ? nogamma : function (a, b) {
        return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
    };
}
function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
}
var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);
    function rgb$1(start, end) {
        var r = color((start = rgb(start)).r, (end = rgb(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
        return function (t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb$1.gamma = rgbGamma;
    return rgb$1;
})(1);
function rgbSpline(spline) {
    return function (colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for (i = 0; i < n; ++i) {
            color = rgb(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function (t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var rgbBasis = rgbSpline(basis$1);
function array(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for (i = 0; i < na; ++i)
        x[i] = interpolateValue(a[i], b[i]);
    for (; i < nb; ++i)
        c[i] = b[i];
    return function (t) {
        for (i = 0; i < na; ++i)
            c[i] = x[i](t);
        return c;
    };
}
function date(a, b) {
    var d = new Date;
    return a = +a, b -= a, function (t) {
        return d.setTime(a + b * t), d;
    };
}
function interpolateNumber(a, b) {
    return a = +a, b -= a, function (t) {
        return a + b * t;
    };
}
function object(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object")
        a = {};
    if (b === null || typeof b !== "object")
        b = {};
    for (k in b) {
        if (k in a) {
            i[k] = interpolateValue(a[k], b[k]);
        }
        else {
            c[k] = b[k];
        }
    }
    return function (t) {
        for (k in i)
            c[k] = i[k](t);
        return c;
    };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
    return function () {
        return b;
    };
}
function one(b) {
    return function (t) {
        return b(t) + "";
    };
}
function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
    am, // current match in a
    bm, // current match in b
    bs, // string preceding current number in b, if any
    i = -1, // index in s
    s = [], // string constants and placeholders
    q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) { // a string precedes the next number in b
            bs = b.slice(bi, bs);
            if (s[i])
                s[i] += bs; // coalesce with previous string
            else
                s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
            if (s[i])
                s[i] += bm; // coalesce with previous string
            else
                s[++i] = bm;
        }
        else { // interpolate non-matching numbers
            s[++i] = null;
            q.push({ i: i, x: interpolateNumber(am, bm) });
        }
        bi = reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i])
            s[i] += bs; // coalesce with previous string
        else
            s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function (t) {
            for (var i = 0, o; i < b; ++i)
                s[(o = q[i]).i] = o.x(t);
            return s.join("");
        });
}
function interpolateValue(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant$1(b)
        : (t === "number" ? interpolateNumber
            : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
                : b instanceof color ? interpolateRgb
                    : b instanceof Date ? date
                        : Array.isArray(b) ? array
                            : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
                                : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
    return a = +a, b -= a, function (t) {
        return Math.round(a + b * t);
    };
}
var degrees = 180 / Math.PI;
var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b))
        a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d)
        c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d))
        c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c)
        a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}
var cssNode, cssRoot, cssView, svgNode;
function parseCss(value) {
    if (value === "none")
        return identity;
    if (!cssNode)
        cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
    cssNode.style.transform = value;
    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
    cssRoot.removeChild(cssNode);
    value = value.slice(7, -1).split(",");
    return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}
function parseSvg(value) {
    if (value == null)
        return identity;
    if (!svgNode)
        svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
        return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}
function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
        }
        else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
        }
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180)
                b += 360;
            else if (b - a > 180)
                a += 360; // shortest path
            q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b) });
        }
        else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
        }
    }
    function skewX(a, b, s, q) {
        if (a !== b) {
            q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b) });
        }
        else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
        }
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
        }
        else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
    }
    return function (a, b) {
        var s = [], // string constants and placeholders
        q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function (t) {
            var i = -1, n = q.length, o;
            while (++i < n)
                s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
var rho = Math.SQRT2;
function cubehelix$1(hue) {
    return (function cubehelixGamma(y) {
        y = +y;
        function cubehelix$1(start, end) {
            var h = hue((start = cubehelix(start)).h, (end = cubehelix(end)).h), s = nogamma(start.s, end.s), l = nogamma(start.l, end.l), opacity = nogamma(start.opacity, end.opacity);
            return function (t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix$1.gamma = cubehelixGamma;
        return cubehelix$1;
    })(1);
}
cubehelix$1(hue);
var cubehelixLong = cubehelix$1(nogamma);
function constant$2(x) {
    return function () {
        return x;
    };
}
function number(x) {
    return +x;
}
var unit = [0, 1];
function identity$1(x) {
    return x;
}
function normalize(a, b) {
    return (b -= (a = +a))
        ? function (x) { return (x - a) / b; }
        : constant$2(isNaN(b) ? NaN : 0.5);
}
function clamper(domain) {
    var a = domain[0], b = domain[domain.length - 1], t;
    if (a > b)
        t = a, a = b, b = t;
    return function (x) { return Math.max(a, Math.min(b, x)); };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0)
        d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else
        d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function (x) { return r0(d0(x)); };
}
function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while (++i < j) {
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function (x) {
        var i = bisectRight(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target
        .domain(source.domain())
        .range(source.range())
        .interpolate(source.interpolate())
        .clamp(source.clamp())
        .unknown(source.unknown());
}
function transformer() {
    var domain = unit, range = unit, interpolate = interpolateValue, transform, untransform, unknown, clamp = identity$1, piecewise, output, input;
    function rescale() {
        piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function (y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };
    scale.domain = function (_) {
        return arguments.length ? (domain = Array.from(_, number), clamp === identity$1 || (clamp = clamper(domain)), rescale()) : domain.slice();
    };
    scale.range = function (_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function (_) {
        return range = Array.from(_), interpolate = interpolateRound, rescale();
    };
    scale.clamp = function (_) {
        return arguments.length ? (clamp = _ ? clamper(domain) : identity$1, scale) : clamp !== identity$1;
    };
    scale.interpolate = function (_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function (_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function (t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function continuous(transform, untransform) {
    return transformer()(transform, untransform);
}
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function formatDecimal(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
        return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}
function exponent(x) {
    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
    return function (value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while (i > 0 && g > 0) {
            if (length + g + 1 > width)
                g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width)
                break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}
function formatNumerals(numerals) {
    return function (value) {
        return value.replace(/[0-9]/g, function (i) {
            return numerals[+i];
        });
    };
}
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
    return new FormatSpecifier(specifier);
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof
function FormatSpecifier(specifier) {
    if (!(match = re.exec(specifier)))
        throw new Error("invalid format: " + specifier);
    var match;
    this.fill = match[1] || " ";
    this.align = match[2] || ">";
    this.sign = match[3] || "-";
    this.symbol = match[4] || "";
    this.zero = !!match[5];
    this.width = match[6] && +match[6];
    this.comma = !!match[7];
    this.precision = match[8] && +match[8].slice(1);
    this.trim = !!match[9];
    this.type = match[10] || "";
}
FormatSpecifier.prototype.toString = function () {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width == null ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
};
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (s[i]) {
            case ".":
                i0 = i1 = i;
                break;
            case "0":
                if (i0 === 0)
                    i0 = i;
                i1 = i;
                break;
            default:
                if (i0 > 0) {
                    if (!+s[i])
                        break out;
                    i0 = 0;
                }
                break;
        }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
    var d = formatDecimal(x, p);
    if (!d)
        return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
            : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
                : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}
function formatRounded(x, p) {
    var d = formatDecimal(x, p);
    if (!d)
        return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
            : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}
var formatTypes = {
    "%": function (x, p) { return (x * 100).toFixed(p); },
    "b": function (x) { return Math.round(x).toString(2); },
    "c": function (x) { return x + ""; },
    "d": function (x) { return Math.round(x).toString(10); },
    "e": function (x, p) { return x.toExponential(p); },
    "f": function (x, p) { return x.toFixed(p); },
    "g": function (x, p) { return x.toPrecision(p); },
    "o": function (x) { return Math.round(x).toString(8); },
    "p": function (x, p) { return formatRounded(x * 100, p); },
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": function (x) { return Math.round(x).toString(16).toUpperCase(); },
    "x": function (x) { return Math.round(x).toString(16); }
};
function identity$2(x) {
    return x;
}
var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale) {
    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$2, currency = locale.currency, decimal = locale.decimal, numerals = locale.numerals ? formatNumerals(locale.numerals) : identity$2, percent = locale.percent || "%";
    function newFormat(specifier) {
        specifier = formatSpecifier(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n")
            comma = true, type = "g";
        // The "" type, and any invalid type, is an alias for ".12~g".
        else if (!formatTypes[type])
            precision == null && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || (fill === "0" && align === "="))
            zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision == null ? 6
            : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
                : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            }
            else {
                value = +value;
                // Perform the initial formatting.
                var valueNegative = value < 0;
                value = formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim)
                    value = formatTrim(value);
                // If a negative value rounds to zero during formatting, treat as positive.
                if (valueNegative && +value === 0)
                    valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while (++i < n) {
                        if (c = value.charCodeAt(i), 48 > c || c > 57) {
                            valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                            value = value.slice(0, i);
                            break;
                        }
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero)
                value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero)
                value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch (align) {
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function () {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
        return function (value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});
function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
}
function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
}
function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
        case "s": {
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value)))
                specifier.precision = precision;
            return formatPrefix(specifier, value);
        }
        case "":
        case "e":
        case "g":
        case "p":
        case "r": {
            if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop)))))
                specifier.precision = precision - (specifier.type === "e");
            break;
        }
        case "f":
        case "%": {
            if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
                specifier.precision = precision - (specifier.type === "%") * 2;
            break;
        }
    }
    return format(specifier);
}
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function (count) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function (count, specifier) {
        var d = domain();
        return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function (count) {
        if (count == null)
            count = 10;
        var d = domain(), i0 = 0, i1 = d.length - 1, start = d[i0], stop = d[i1], step;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        step = tickIncrement(start, stop, count);
        if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
            step = tickIncrement(start, stop, count);
        }
        else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
            step = tickIncrement(start, stop, count);
        }
        if (step > 0) {
            d[i0] = Math.floor(start / step) * step;
            d[i1] = Math.ceil(stop / step) * step;
            domain(d);
        }
        else if (step < 0) {
            d[i0] = Math.ceil(start * step) / step;
            d[i1] = Math.floor(stop * step) / step;
            domain(d);
        }
        return scale;
    };
    return scale;
}
function linear$1() {
    var scale = continuous(identity$1, identity$1);
    scale.copy = function () {
        return copy(scale, linear$1());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
}
function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}
var t0$1 = new Date, t1$1 = new Date;
function newInterval(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = new Date(+date)), date;
    }
    interval.floor = interval;
    interval.ceil = function (date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = function (date) {
        var d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = function (date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = function (start, stop, step) {
        var range = [], previous;
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0))
            return range; // also handles Invalid Date
        do
            range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop);
        return range;
    };
    interval.filter = function (test) {
        return newInterval(function (date) {
            if (date >= date)
                while (floori(date), !test(date))
                    date.setTime(date - 1);
        }, function (date, step) {
            if (date >= date) {
                if (step < 0)
                    while (++step <= 0) {
                        while (offseti(date, -1), !test(date)) { } // eslint-disable-line no-empty
                    }
                else
                    while (--step >= 0) {
                        while (offseti(date, +1), !test(date)) { } // eslint-disable-line no-empty
                    }
            }
        });
    };
    if (count) {
        interval.count = function (start, end) {
            t0$1.setTime(+start), t1$1.setTime(+end);
            floori(t0$1), floori(t1$1);
            return Math.floor(count(t0$1, t1$1));
        };
        interval.every = function (step) {
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null
                : !(step > 1) ? interval
                    : interval.filter(field
                        ? function (d) { return field(d) % step === 0; }
                        : function (d) { return interval.count(0, d) % step === 0; });
        };
    }
    return interval;
}
var millisecond = newInterval(function () {
    // noop
}, function (date, step) {
    date.setTime(+date + step);
}, function (start, end) {
    return end - start;
});
// An optimized implementation for this simple case.
millisecond.every = function (k) {
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0))
        return null;
    if (!(k > 1))
        return millisecond;
    return newInterval(function (date) {
        date.setTime(Math.floor(date / k) * k);
    }, function (date, step) {
        date.setTime(+date + step * k);
    }, function (start, end) {
        return (end - start) / k;
    });
};
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;
var second = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds());
}, function (date, step) {
    date.setTime(+date + step * durationSecond);
}, function (start, end) {
    return (end - start) / durationSecond;
}, function (date) {
    return date.getUTCSeconds();
});
var minute = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function (date, step) {
    date.setTime(+date + step * durationMinute);
}, function (start, end) {
    return (end - start) / durationMinute;
}, function (date) {
    return date.getMinutes();
});
var hour = newInterval(function (date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function (date, step) {
    date.setTime(+date + step * durationHour);
}, function (start, end) {
    return (end - start) / durationHour;
}, function (date) {
    return date.getHours();
});
var day = newInterval(function (date) {
    date.setHours(0, 0, 0, 0);
}, function (date, step) {
    date.setDate(date.getDate() + step);
}, function (start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function (date) {
    return date.getDate() - 1;
});
function weekday(i) {
    return newInterval(function (date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, function (date, step) {
        date.setDate(date.getDate() + step * 7);
    }, function (start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
    });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var month = newInterval(function (date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, function (date, step) {
    date.setMonth(date.getMonth() + step);
}, function (start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function (date) {
    return date.getMonth();
});
var year = newInterval(function (date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, function (date, step) {
    date.setFullYear(date.getFullYear() + step);
}, function (start, end) {
    return end.getFullYear() - start.getFullYear();
}, function (date) {
    return date.getFullYear();
});
// An optimized implementation for this simple case.
year.every = function (k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, function (date, step) {
        date.setFullYear(date.getFullYear() + step * k);
    });
};
var utcMinute = newInterval(function (date) {
    date.setUTCSeconds(0, 0);
}, function (date, step) {
    date.setTime(+date + step * durationMinute);
}, function (start, end) {
    return (end - start) / durationMinute;
}, function (date) {
    return date.getUTCMinutes();
});
var utcHour = newInterval(function (date) {
    date.setUTCMinutes(0, 0, 0);
}, function (date, step) {
    date.setTime(+date + step * durationHour);
}, function (start, end) {
    return (end - start) / durationHour;
}, function (date) {
    return date.getUTCHours();
});
var utcDay = newInterval(function (date) {
    date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function (start, end) {
    return (end - start) / durationDay;
}, function (date) {
    return date.getUTCDate() - 1;
});
function utcWeekday(i) {
    return newInterval(function (date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, function (date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, function (start, end) {
        return (end - start) / durationWeek;
    });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcMonth = newInterval(function (date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
}, function (start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function (date) {
    return date.getUTCMonth();
});
var utcYear = newInterval(function (date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, function (start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
}, function (date) {
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
utcYear.every = function (k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function (date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, function (date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
function localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newYear(y) {
    return { y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale$1(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": formatDayOfMonth,
        "e": formatDayOfMonth,
        "f": formatMicroseconds,
        "H": formatHour24,
        "I": formatHour12,
        "j": formatDayOfYear,
        "L": formatMilliseconds,
        "m": formatMonthNumber,
        "M": formatMinutes,
        "p": formatPeriod,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatSeconds,
        "u": formatWeekdayNumberMonday,
        "U": formatWeekNumberSunday,
        "V": formatWeekNumberISO,
        "w": formatWeekdayNumberSunday,
        "W": formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatYear,
        "Y": formatFullYear,
        "Z": formatZone,
        "%": formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": formatUTCDayOfMonth,
        "e": formatUTCDayOfMonth,
        "f": formatUTCMicroseconds,
        "H": formatUTCHour24,
        "I": formatUTCHour12,
        "j": formatUTCDayOfYear,
        "L": formatUTCMilliseconds,
        "m": formatUTCMonthNumber,
        "M": formatUTCMinutes,
        "p": formatUTCPeriod,
        "Q": formatUnixTimestamp,
        "s": formatUnixTimestampSeconds,
        "S": formatUTCSeconds,
        "u": formatUTCWeekdayNumberMonday,
        "U": formatUTCWeekNumberSunday,
        "V": formatUTCWeekNumberISO,
        "w": formatUTCWeekdayNumberSunday,
        "W": formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": formatUTCYear,
        "Y": formatUTCFullYear,
        "Z": formatUTCZone,
        "%": formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": parseDayOfMonth,
        "e": parseDayOfMonth,
        "f": parseMicroseconds,
        "H": parseHour24,
        "I": parseHour24,
        "j": parseDayOfYear,
        "L": parseMilliseconds,
        "m": parseMonthNumber,
        "M": parseMinutes,
        "p": parsePeriod,
        "Q": parseUnixTimestamp,
        "s": parseUnixTimestampSeconds,
        "S": parseSeconds,
        "u": parseWeekdayNumberMonday,
        "U": parseWeekNumberSunday,
        "V": parseWeekNumberISO,
        "w": parseWeekdayNumberSunday,
        "W": parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": parseYear,
        "Y": parseFullYear,
        "Z": parseZone,
        "%": parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function (date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date))
                date = new Date(+date);
            while (++i < n) {
                if (specifier.charCodeAt(i) === 37) {
                    string.push(specifier.slice(j, i));
                    if ((pad = pads[c = specifier.charAt(++i)]) != null)
                        c = specifier.charAt(++i);
                    else
                        pad = c === "e" ? " " : "0";
                    if (format = formats[c])
                        c = format(date, pad);
                    string.push(c);
                    j = i + 1;
                }
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, newDate) {
        return function (string) {
            var d = newYear(1900), i = parseSpecifier(d, specifier, string += "", 0), week, day$1;
            if (i != string.length)
                return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d)
                return new Date(d.Q);
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d)
                d.H = d.H % 12 + d.p * 12;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53)
                    return null;
                if (!("w" in d))
                    d.w = 1;
                if ("Z" in d) {
                    week = utcDate(newYear(d.y)), day$1 = week.getUTCDay();
                    week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
                    week = utcDay.offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                }
                else {
                    week = newDate(newYear(d.y)), day$1 = week.getDay();
                    week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
                    week = day.offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            }
            else if ("W" in d || "U" in d) {
                if (!("w" in d))
                    d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return newDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while (i < n) {
            if (j >= m)
                return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in pads ? specifier.charAt(i++) : c];
                if (!parse || ((j = parse(d, string, j)) < 0))
                    return -1;
            }
            else if (c != string.charCodeAt(j++)) {
                return -1;
            }
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    return {
        format: function (specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function () { return specifier; };
            return f;
        },
        parse: function (specifier) {
            var p = newParse(specifier += "", localDate);
            p.toString = function () { return specifier; };
            return p;
        },
        utcFormat: function (specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function () { return specifier; };
            return f;
        },
        utcParse: function (specifier) {
            var p = newParse(specifier, utcDate);
            p.toString = function () { return specifier; };
            return p;
        }
    };
}
var pads = { "-": "", "_": " ", "0": "0" }, numberRe = /^\s*\d+/, // note: ignores next directive
percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
    return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
    var map = {}, i = -1, n = names.length;
    while (++i < n)
        map[names[i].toLowerCase()] = i;
    return map;
}
function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
    return pad(1 + day.count(year(d), d), p, 3);
}
function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
    return pad(sunday.count(year(d), d), p, 2);
}
function formatWeekNumberISO(d, p) {
    var day = d.getDay();
    d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
    return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function formatWeekNumberMonday(d, p) {
    return pad(monday.count(year(d), d), p, 2);
}
function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
    return pad(d.getFullYear() % 10000, p, 4);
}
function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+"))
        + pad(z / 60 | 0, "0", 2)
        + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
    return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
    return pad(utcSunday.count(utcYear(d), d), p, 2);
}
function formatUTCWeekNumberISO(d, p) {
    var day = d.getUTCDay();
    d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
    return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
    return pad(utcMonday.count(utcYear(d), d), p, 2);
}
function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCZone() {
    return "+0000";
}
function formatLiteralPercent() {
    return "%";
}
function formatUnixTimestamp(d) {
    return +d;
}
function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}
var locale$1;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale$1({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale$1(definition) {
    locale$1 = formatLocale$1(definition);
    timeFormat = locale$1.format;
    timeParse = locale$1.parse;
    utcFormat = locale$1.utcFormat;
    utcParse = locale$1.utcParse;
    return locale$1;
}
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date) {
    return date.toISOString();
}
var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : utcFormat(isoSpecifier);
function parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
}
var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : utcParse(isoSpecifier);
var durationSecond$1 = 1000, durationMinute$1 = durationSecond$1 * 60, durationHour$1 = durationMinute$1 * 60, durationDay$1 = durationHour$1 * 24, durationWeek$1 = durationDay$1 * 7, durationMonth = durationDay$1 * 30, durationYear = durationDay$1 * 365;
function date$1(t) {
    return new Date(t);
}
function number$1(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
    var scale = continuous(identity$1, identity$1), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    var tickIntervals = [
        [second, 1, durationSecond$1],
        [second, 5, 5 * durationSecond$1],
        [second, 15, 15 * durationSecond$1],
        [second, 30, 30 * durationSecond$1],
        [minute, 1, durationMinute$1],
        [minute, 5, 5 * durationMinute$1],
        [minute, 15, 15 * durationMinute$1],
        [minute, 30, 30 * durationMinute$1],
        [hour, 1, durationHour$1],
        [hour, 3, 3 * durationHour$1],
        [hour, 6, 6 * durationHour$1],
        [hour, 12, 12 * durationHour$1],
        [day, 1, durationDay$1],
        [day, 2, 2 * durationDay$1],
        [week, 1, durationWeek$1],
        [month, 1, durationMonth],
        [month, 3, 3 * durationMonth],
        [year, 1, durationYear]
    ];
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond
            : minute(date) < date ? formatSecond
                : hour(date) < date ? formatMinute
                    : day(date) < date ? formatHour
                        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
                            : year(date) < date ? formatMonth
                                : formatYear)(date);
    }
    function tickInterval(interval, start, stop, step) {
        if (interval == null)
            interval = 10;
        // If a desired tick count is specified, pick a reasonable tick interval
        // based on the extent of the domain and a rough estimate of tick size.
        // Otherwise, assume interval is already a time interval and use it.
        if (typeof interval === "number") {
            var target = Math.abs(stop - start) / interval, i = bisector(function (i) { return i[2]; }).right(tickIntervals, target);
            if (i === tickIntervals.length) {
                step = tickStep(start / durationYear, stop / durationYear, interval);
                interval = year;
            }
            else if (i) {
                i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
                step = i[1];
                interval = i[0];
            }
            else {
                step = Math.max(tickStep(start, stop, interval), 1);
                interval = millisecond;
            }
        }
        return step == null ? interval : interval.every(step);
    }
    scale.invert = function (y) {
        return new Date(invert(y));
    };
    scale.domain = function (_) {
        return arguments.length ? domain(Array.from(_, number$1)) : domain().map(date$1);
    };
    scale.ticks = function (interval, step) {
        var d = domain(), t0 = d[0], t1 = d[d.length - 1], r = t1 < t0, t;
        if (r)
            t = t0, t0 = t1, t1 = t;
        t = tickInterval(interval, t0, t1, step);
        t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
        return r ? t.reverse() : t;
    };
    scale.tickFormat = function (count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function (interval, step) {
        var d = domain();
        return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
            ? domain(nice(d, interval))
            : scale;
    };
    scale.copy = function () {
        return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
    };
    return scale;
}
function scaleTime() {
    return initRange.apply(calendar(year, month, sunday, day, hour, minute, second, millisecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}
var slice = Array.prototype.slice;
function identity$3(x) {
    return x;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
function translateX(x) {
    return "translate(" + (x + 0.5) + ",0)";
}
function translateY(y) {
    return "translate(0," + (y + 0.5) + ")";
}
function number$2(scale) {
    return function (d) {
        return +scale(d);
    };
}
function center(scale) {
    var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
    if (scale.round())
        offset = Math.round(offset);
    return function (d) {
        return +scale(d) + offset;
    };
}
function entering() {
    return !this.__axis;
}
function axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, k = orient === top || orient === left ? -1 : 1, x = orient === left || orient === right ? "x" : "y", transform = orient === top || orient === bottom ? translateX : translateY;
    function axis(context) {
        var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues, format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$3) : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + 0.5, range1 = +range[range.length - 1] + 0.5, position = (scale.bandwidth ? center : number$2)(scale.copy()), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([null]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
        path = path.merge(path.enter().insert("path", ".tick")
            .attr("class", "domain")
            .attr("stroke", "currentColor"));
        tick = tick.merge(tickEnter);
        line = line.merge(tickEnter.append("line")
            .attr("stroke", "currentColor")
            .attr(x + "2", k * tickSizeInner));
        text = text.merge(tickEnter.append("text")
            .attr("fill", "currentColor")
            .attr(x, k * spacing)
            .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
        if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);
            tickExit = tickExit.transition(context)
                .attr("opacity", epsilon)
                .attr("transform", function (d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });
            tickEnter
                .attr("opacity", epsilon)
                .attr("transform", function (d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
        }
        tickExit.remove();
        path
            .attr("d", orient === left || orient == right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1));
        tick
            .attr("opacity", 1)
            .attr("transform", function (d) { return transform(position(d)); });
        line
            .attr(x + "2", k * tickSizeInner);
        text
            .attr(x, k * spacing)
            .text(format);
        selection.filter(entering)
            .attr("fill", "none")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
        selection
            .each(function () { this.__axis = position; });
    }
    axis.scale = function (_) {
        return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function () {
        return tickArguments = slice.call(arguments), axis;
    };
    axis.tickArguments = function (_) {
        return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function (_) {
        return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function (_) {
        return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function (_) {
        return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function (_) {
        return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function (_) {
        return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function (_) {
        return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    return axis;
}
function axisBottom(scale) {
    return axis(bottom, scale);
}
function axisLeft(scale) {
    return axis(left, scale);
}
var noop = { value: function () { } };
function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || (t in _))
            throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new Dispatch(_);
}
function Dispatch(_) {
    this._ = _;
}
function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0)
            name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t))
            throw new Error("unknown type: " + t);
        return { type: t, name: name };
    });
}
Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function (typename, callback) {
        var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while (++i < n)
                if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
                    return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function")
            throw new Error("invalid callback: " + callback);
        while (++i < n) {
            if (t = (typename = T[i]).type)
                _[t] = set(_[t], typename.name, callback);
            else if (callback == null)
                for (t in _)
                    _[t] = set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function () {
        var copy = {}, _ = this._;
        for (var t in _)
            copy[t] = _[t].slice();
        return new Dispatch(copy);
    },
    call: function (type, that) {
        if ((n = arguments.length - 2) > 0)
            for (var args = new Array(n), i = 0, n, t; i < n; ++i)
                args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type))
            throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i)
            t[i].value.apply(that, args);
    },
    apply: function (type, that, args) {
        if (!this._.hasOwnProperty(type))
            throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
            t[i].value.apply(that, args);
    }
};
function get(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
        if ((c = type[i]).name === name) {
            return c.value;
        }
    }
}
function set(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
        if (type[i].name === name) {
            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
            break;
        }
    }
    if (callback != null)
        type.push({ name: name, value: callback });
    return type;
}
var frame = 0, // is an animation frame pending?
timeout = 0, // is a timeout pending?
interval = 0, // are any timers active?
pokeDelay = 1000, // how frequently we check for clock skew
taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) { setTimeout(f, 17); };
function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
    clockNow = 0;
}
function Timer() {
    this._call =
        this._time =
            this._next = null;
}
Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function (callback, delay, time) {
        if (typeof callback !== "function")
            throw new TypeError("callback is not a function");
        time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
            if (taskTail)
                taskTail._next = this;
            else
                taskHead = this;
            taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
    },
    stop: function () {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
        }
    }
};
function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
}
function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
        if ((e = clockNow - t._time) >= 0)
            t._call.call(null, e);
        t = t._next;
    }
    --frame;
}
function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
        timerFlush();
    }
    finally {
        frame = 0;
        nap();
        clockNow = 0;
    }
}
function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay)
        clockSkew -= delay, clockLast = now;
}
function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
        if (t1._call) {
            if (time > t1._time)
                time = t1._time;
            t0 = t1, t1 = t1._next;
        }
        else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
    }
    taskTail = t0;
    sleep(time);
}
function sleep(time) {
    if (frame)
        return; // Soonest alarm already set, or will be.
    if (timeout)
        timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity)
            timeout = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval)
            interval = clearInterval(interval);
    }
    else {
        if (!interval)
            clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
    }
}
function timeout$1(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(function (elapsed) {
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
        node.__transition = {};
    else if (id in schedules)
        return;
    create(node, id, {
        name: name,
        index: index,
        group: group,
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
    });
}
function init(node, id) {
    var schedule = get$1(node, id);
    if (schedule.state > CREATED)
        throw new Error("too late; already scheduled");
    return schedule;
}
function set$1(node, id) {
    var schedule = get$1(node, id);
    if (schedule.state > STARTED)
        throw new Error("too late; already running");
    return schedule;
}
function get$1(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id]))
        throw new Error("transition not found");
    return schedule;
}
function create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed)
            start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED)
            return stop();
        for (i in schedules) {
            o = schedules[i];
            if (o.name !== self.name)
                continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === STARTED)
                return timeout$1(start);
            // Interrupt the active transition, if any.
            if (o.state === RUNNING) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
            // Cancel any pre-empted transitions.
            else if (+i < id) {
                o.state = ENDED;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        timeout$1(function () {
            if (self.state === STARTED) {
                self.state = RUNNING;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING)
            return; // interrupted
        self.state = STARTED;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for (i = 0, j = -1; i < n; ++i) {
            if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
                tween[++j] = o;
            }
        }
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
        while (++i < n) {
            tween[i].call(node, t);
        }
        // Dispatch the end event.
        if (self.state === ENDING) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for (var i in schedules)
            return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}
function interrupt(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules)
        return;
    name = name == null ? null : name + "";
    for (i in schedules) {
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > STARTING && schedule.state < ENDING;
        schedule.state = ENDED;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty)
        delete node.__transition;
}
function selection_interrupt(name) {
    return this.each(function () {
        interrupt(this, name);
    });
}
function tweenRemove(id, name) {
    var tween0, tween1;
    return function () {
        var schedule = set$1(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for (var i = 0, n = tween1.length; i < n; ++i) {
                if (tween1[i].name === name) {
                    tween1 = tween1.slice();
                    tween1.splice(i, 1);
                    break;
                }
            }
        }
        schedule.tween = tween1;
    };
}
function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
        throw new Error;
    return function () {
        var schedule = set$1(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for (var t = { name: name, value: value }, i = 0, n = tween1.length; i < n; ++i) {
                if (tween1[i].name === name) {
                    tween1[i] = t;
                    break;
                }
            }
            if (i === n)
                tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function transition_tween(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = get$1(this.node(), id).tween;
        for (var i = 0, n = tween.length, t; i < n; ++i) {
            if ((t = tween[i]).name === name) {
                return t.value;
            }
        }
        return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function () {
        var schedule = set$1(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function (node) {
        return get$1(node, id).value[name];
    };
}
function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber
        : b instanceof color ? interpolateRgb
            : (c = color(b)) ? (b = c, interpolateRgb)
                : interpolateString)(a, b);
}
function attrRemove$1(name) {
    return function () {
        this.removeAttribute(name);
    };
}
function attrRemoveNS$1(fullname) {
    return function () {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function attrConstant$1(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrConstantNS$1(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function attrFunction$1(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
        var string0, value1 = value(this), string1;
        if (value1 == null)
            return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function attrFunctionNS$1(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
        var string0, value1 = value(this), string1;
        if (value1 == null)
            return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function transition_attr(name, value) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function"
        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
        : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
            : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
}
function attrInterpolate(name, i) {
    return function (t) {
        this.setAttribute(name, i(t));
    };
}
function attrInterpolateNS(fullname, i) {
    return function (t) {
        this.setAttributeNS(fullname.space, fullname.local, i(t));
    };
}
function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0)
            t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0)
            t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
    if (value == null)
        return this.tween(key, null);
    if (typeof value !== "function")
        throw new Error;
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
function delayFunction(id, value) {
    return function () {
        init(this, id).delay = +value.apply(this, arguments);
    };
}
function delayConstant(id, value) {
    return value = +value, function () {
        init(this, id).delay = value;
    };
}
function transition_delay(value) {
    var id = this._id;
    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : get$1(this.node(), id).delay;
}
function durationFunction(id, value) {
    return function () {
        set$1(this, id).duration = +value.apply(this, arguments);
    };
}
function durationConstant(id, value) {
    return value = +value, function () {
        set$1(this, id).duration = value;
    };
}
function transition_duration(value) {
    var id = this._id;
    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : get$1(this.node(), id).duration;
}
function easeConstant(id, value) {
    if (typeof value !== "function")
        throw new Error;
    return function () {
        set$1(this, id).ease = value;
    };
}
function transition_ease(value) {
    var id = this._id;
    return arguments.length
        ? this.each(easeConstant(id, value))
        : get$1(this.node(), id).ease;
}
function transition_filter(match) {
    if (typeof match !== "function")
        match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
            if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
                subgroup.push(node);
            }
        }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
}
function transition_merge(transition) {
    if (transition._id !== this._id)
        throw new Error;
    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
            if (node = group0[i] || group1[i]) {
                merge[i] = node;
            }
        }
    }
    for (; j < m0; ++j) {
        merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
}
function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function (t) {
        var i = t.indexOf(".");
        if (i >= 0)
            t = t.slice(0, i);
        return !t || t === "start";
    });
}
function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? init : set$1;
    return function () {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0)
            (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function transition_on(name, listener) {
    var id = this._id;
    return arguments.length < 2
        ? get$1(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
}
function removeFunction(id) {
    return function () {
        var parent = this.parentNode;
        for (var i in this.__transition)
            if (+i !== id)
                return;
        if (parent)
            parent.removeChild(this);
    };
}
function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
}
function transition_select(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function")
        select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
            if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                if ("__data__" in node)
                    subnode.__data__ = node.__data__;
                subgroup[i] = subnode;
                schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
            }
        }
    }
    return new Transition(subgroups, this._parents, name, id);
}
function transition_selectAll(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function")
        select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
                    if (child = children[k]) {
                        schedule(child, name, id, k, children, inherit);
                    }
                }
                subgroups.push(children);
                parents.push(node);
            }
        }
    }
    return new Transition(subgroups, parents, name, id);
}
var Selection$1 = selection.prototype.constructor;
function transition_selection() {
    return new Selection$1(this._groups, this._parents);
}
function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function () {
        var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function styleRemove$1(name) {
    return function () {
        this.style.removeProperty(name);
    };
}
function styleConstant$1(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function () {
        var string0 = styleValue(this, name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
                : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function styleFunction$1(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
        var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null)
            string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
                : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function () {
        var schedule = set$1(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener)
            (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this
        .styleTween(name, styleNull(name, i))
        .on("end.style." + name, styleRemove$1(name))
        : typeof value === "function" ? this
            .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
            .each(styleMaybeRemove(this._id, name))
            : this
                .styleTween(name, styleConstant$1(name, i, value), priority)
                .on("end.style." + name, null);
}
function styleInterpolate(name, i, priority) {
    return function (t) {
        this.style.setProperty(name, i(t), priority);
    };
}
function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0)
            t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
        return (key = this.tween(key)) && key._value;
    if (value == null)
        return this.tween(key, null);
    if (typeof value !== "function")
        throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
function textConstant$1(value) {
    return function () {
        this.textContent = value;
    };
}
function textFunction$1(value) {
    return function () {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function transition_text(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction$1(tweenValue(this, "text", value))
        : textConstant$1(value == null ? "" : value + ""));
}
function transition_transition() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                var inherit = get$1(node, id0);
                schedule(node, name, id1, i, group, {
                    time: inherit.time + inherit.delay + inherit.duration,
                    delay: 0,
                    duration: inherit.duration,
                    ease: inherit.ease
                });
            }
        }
    }
    return new Transition(groups, this._parents, name, id1);
}
function transition_end() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function (resolve, reject) {
        var cancel = { value: reject }, end = { value: function () { if (--size === 0)
                resolve(); } };
        that.each(function () {
            var schedule = set$1(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
    });
}
var id = 0;
function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function transition(name) {
    return selection().transition(name);
}
function newId() {
    return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    end: transition_end
};
function linear$2(t) {
    return +t;
}
function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var pi = Math.PI;
var tau = 2 * Math.PI;
var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: cubicInOut
};
function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
        if (!(node = node.parentNode)) {
            return defaultTiming.time = now(), defaultTiming;
        }
    }
    return timing;
}
function selection_transition(name) {
    var id, timing;
    if (name instanceof Transition) {
        id = name._id, name = name._name;
    }
    else {
        id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
            if (node = group[i]) {
                schedule(node, name, id, i, group, timing || inherit(node, id));
            }
        }
    }
    return new Transition(groups, this._parents, name, id);
}
selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;
var DeckdeckgoBarChart = /** @class */ (function () {
    function DeckdeckgoBarChart(hostRef) {
        Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.separator = ';';
        this.marginTop = 32;
        this.marginBottom = 64;
        this.marginLeft = 32;
        this.marginRight = 32;
        this.animation = false;
        this.animationDuration = 1000;
        this.barDataIndex = 0;
    }
    DeckdeckgoBarChart.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.draw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoBarChart.prototype.redraw = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.draw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoBarChart.prototype.draw = function (width, height) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (width > 0) {
                            this.width = width;
                        }
                        if (height > 0) {
                            this.height = height;
                        }
                        if (!this.width || !this.height || !this.src) {
                            resolve();
                            return [2 /*return*/];
                        }
                        this.barDataIndex = 0;
                        this.svg = DeckdeckgoChartUtils.initSvg(this.el, (this.width + this.marginLeft + this.marginRight), (this.height + this.marginTop + this.marginBottom));
                        this.svg = this.svg.append('g').attr('transform', 'translate(' + this.marginLeft + ',' + this.marginTop + ')');
                        _a = this;
                        return [4 /*yield*/, this.fetchData()];
                    case 1:
                        _a.data = _b.sent();
                        if (!this.data || this.data.length <= 0) {
                            resolve();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.initAxis()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.drawAxis()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.drawBars(0, 0)];
                    case 4:
                        _b.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoBarChart.prototype.drawBars = function (index, animationDuration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.animation) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.drawAnimatedBars(index, animationDuration)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.drawInstantBars()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoBarChart.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prevNext(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoBarChart.prototype.prev = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prevNext(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoBarChart.prototype.prevNext = function (next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.animation) {
                            return [2 /*return*/];
                        }
                        if (!this.data || this.data.length <= 0) {
                            return [2 /*return*/];
                        }
                        if (!(next && this.barDataIndex + 1 < this.data.length)) return [3 /*break*/, 2];
                        this.barDataIndex++;
                        return [4 /*yield*/, this.drawBars(this.barDataIndex, this.animationDuration)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(!next && this.barDataIndex > 0)) return [3 /*break*/, 4];
                        this.barDataIndex--;
                        return [4 /*yield*/, this.drawBars(this.barDataIndex, this.animationDuration)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoBarChart.prototype.isBeginning = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.animation) {
                resolve(true);
                return;
            }
            resolve(_this.barDataIndex === 0);
        });
    };
    DeckdeckgoBarChart.prototype.isEnd = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.animation) {
                resolve(true);
                return;
            }
            resolve(_this.barDataIndex === _this.data.length - 1);
        });
    };
    DeckdeckgoBarChart.prototype.drawAxis = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var bottomAxis = axisBottom(_this.x0);
            var leftAxis = axisLeft(_this.y);
            _this.svg.append('g')
                .attr('class', 'axis axis-x')
                .attr('transform', 'translate(0,' + _this.height + ')')
                .call(bottomAxis)
                .selectAll('text')
                .attr('transform', 'translate(-10,0)rotate(-45)')
                .style('text-anchor', 'end');
            _this.svg.append('g')
                .attr('class', 'axis axis-y')
                .call(leftAxis);
            resolve();
        });
    };
    DeckdeckgoBarChart.prototype.initAxis = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.x0 = band().rangeRound([0, _this.width]);
            _this.x1 = band().padding(0.05);
            _this.y = linear$1().rangeRound([_this.height, 0]);
            var xDomains = _this.data[0].values.map(function (d) {
                return d.key;
            });
            if (_this.animation) {
                _this.initAnimatedAxisX(xDomains);
            }
            else {
                _this.initInstantAxisX(xDomains);
            }
            _this.y.domain([0, max(_this.data, function (category) {
                    return max(category.values, function (d) {
                        return d.value;
                    });
                })]);
            resolve();
        });
    };
    DeckdeckgoBarChart.prototype.initAnimatedAxisX = function (xDomains) {
        this.x0.domain(xDomains).padding(0.05);
    };
    DeckdeckgoBarChart.prototype.initInstantAxisX = function (xDomains) {
        var categoriesNames = this.data.map(function (d) {
            return d.label;
        });
        this.x0.paddingInner(0.1).domain(categoriesNames);
        this.x1.domain(xDomains).rangeRound([0, this.x0.bandwidth()]);
    };
    DeckdeckgoBarChart.prototype.drawAnimatedBars = function (index, animationDuration) {
        var _this = this;
        return new Promise(function (resolve) {
            var t = transition();
            var section = _this.svg.selectAll('rect').data(_this.data[index].values);
            section
                .enter()
                .append('rect')
                .merge(section)
                .attr('style', function (d) {
                return 'fill: var(--deckgo-chart-fill-color-' + d.key + '); fill-opacity: var(--deckgo-chart-fill-opacity-' + d.key + '); stroke: var(--deckgo-chart-stroke-' + d.key + '); stroke-width: var(--deckgo-chart-stroke-width-' + d.key + ')';
            })
                .transition(t).duration(animationDuration)
                .attr('x', function (d) {
                return _this.x0(d.key);
            })
                .attr('y', function (d) {
                return _this.y(d.value);
            })
                .attr('width', _this.x0.bandwidth())
                .attr('height', function (d) {
                return _this.height - _this.y(d.value);
            });
            resolve();
        });
    };
    DeckdeckgoBarChart.prototype.drawInstantBars = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.svg.append('g')
                .selectAll('g')
                .data(_this.data)
                .enter().append('g')
                .attr('transform', function (d) {
                return 'translate(' + _this.x0(d.label) + ',0)';
            })
                .selectAll('rect')
                .data(function (d) {
                return d.values;
            })
                .enter().append('rect')
                .attr('x', function (d) {
                return _this.x1(d.key);
            })
                .attr('y', function (d) {
                return _this.y(d.value);
            })
                .attr('width', _this.x1.bandwidth())
                .attr('height', function (d) {
                return _this.height - _this.y(d.value);
            })
                .attr('style', function (d) {
                return 'fill: var(--deckgo-chart-fill-color-' + d.key + '); fill-opacity: var(--deckgo-chart-fill-opacity-' + d.key + '); stroke: var(--deckgo-chart-stroke-' + d.key + '); stroke-width: var(--deckgo-chart-stroke-width-' + d.key + ')';
            });
            resolve();
        });
    };
    DeckdeckgoBarChart.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var response, content, lines, results;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this.src) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, fetch(this.src)];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.text()];
                                case 2:
                                    content = _a.sent();
                                    if (!content) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    lines = content.split('\n');
                                    if (!lines || lines.length <= 0) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    results = [];
                                    lines.forEach(function (line) {
                                        var values = line.split(_this.separator);
                                        if (values && values.length >= 2) {
                                            var dataValues = [];
                                            for (var i = 1; i < values.length; i++) {
                                                var tmp = parseInt(values[i]);
                                                if (!isNaN(tmp)) {
                                                    dataValues.push({
                                                        key: '' + i,
                                                        value: tmp
                                                    });
                                                }
                                            }
                                            results.push({
                                                label: values[0],
                                                values: dataValues
                                            });
                                        }
                                    });
                                    resolve(results);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DeckdeckgoBarChart.prototype.render = function () {
        return Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", null);
    };
    Object.defineProperty(DeckdeckgoBarChart.prototype, "el", {
        get: function () { return Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoBarChart, "watchers", {
        get: function () {
            return {
                "src": ["redraw"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoBarChart, "style", {
        get: function () { return "text{fill:var(--deckgo-chart-text-color,#000);display:var(--deckgo-chart-text-display)}.axis line,.axis path{fill:none;stroke:var(--deckgo-chart-axis-color,#000);shape-rendering:crispEdges}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoBarChart;
}());
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
        return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function assign(target, dirtyObject) {
    if (target == null) {
        throw new TypeError('assign requires that input parameter not be null or undefined');
    }
    dirtyObject = dirtyObject || {};
    for (var property in dirtyObject) {
        if (dirtyObject.hasOwnProperty(property)) {
            target[property] = dirtyObject[property];
        }
    }
    return target;
}
var MILLISECONDS_IN_MINUTE = 60000;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(dirtyDate) {
    var date = new Date(dirtyDate.getTime());
    var baseTimezoneOffset = date.getTimezoneOffset();
    date.setSeconds(0, 0);
    var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
    return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var argStr = Object.prototype.toString.call(argument); // Clone the date
    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
        // Prevent the date to lose the milliseconds when passed to new Date() in IE10
        return new Date(argument.getTime());
    }
    else if (typeof argument === 'number' || argStr === '[object Number]') {
        return new Date(argument);
    }
    else {
        if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
}
/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
}
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: 'less than a second',
        other: 'less than {{count}} seconds'
    },
    xSeconds: {
        one: '1 second',
        other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
        one: 'less than a minute',
        other: 'less than {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'about 1 hour',
        other: 'about {{count}} hours'
    },
    xHours: {
        one: '1 hour',
        other: '{{count}} hours'
    },
    xDays: {
        one: '1 day',
        other: '{{count}} days'
    },
    aboutXMonths: {
        one: 'about 1 month',
        other: 'about {{count}} months'
    },
    xMonths: {
        one: '1 month',
        other: '{{count}} months'
    },
    aboutXYears: {
        one: 'about 1 year',
        other: 'about {{count}} years'
    },
    xYears: {
        one: '1 year',
        other: '{{count}} years'
    },
    overXYears: {
        one: 'over 1 year',
        other: 'over {{count}} years'
    },
    almostXYears: {
        one: 'almost 1 year',
        other: 'almost {{count}} years'
    }
};
function formatDistance(token, count, options) {
    options = options || {};
    var result;
    if (typeof formatDistanceLocale[token] === 'string') {
        result = formatDistanceLocale[token];
    }
    else if (count === 1) {
        result = formatDistanceLocale[token].one;
    }
    else {
        result = formatDistanceLocale[token].other.replace('{{count}}', count);
    }
    if (options.addSuffix) {
        if (options.comparison > 0) {
            return 'in ' + result;
        }
        else {
            return result + ' ago';
        }
    }
    return result;
}
function buildFormatLongFn(args) {
    return function (dirtyOptions) {
        var options = dirtyOptions || {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
};
var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
};
var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full'
    })
};
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
}
function buildLocalizeFn(args) {
    return function (dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var context = options.context ? String(options.context) : 'standalone';
        var valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        }
        else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
    };
}
var eraValues = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.
};
var monthValues = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: 'a',
        pm: 'p',
        midnight: 'mi',
        noon: 'n',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    },
    wide: {
        am: 'a.m.',
        pm: 'p.m.',
        midnight: 'midnight',
        noon: 'noon',
        morning: 'in the morning',
        afternoon: 'in the afternoon',
        evening: 'in the evening',
        night: 'at night'
    }
};
function ordinalNumber(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`:
    //
    //   var options = dirtyOptions || {}
    //   var unit = String(options.unit)
    //
    // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
        }
    }
    return number + 'th';
}
var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: function (quarter) {
            return Number(quarter) - 1;
        }
    }),
    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: 'wide',
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: 'wide'
    })
};
function buildMatchPatternFn(args) {
    return function (dirtyString, dirtyOptions) {
        var string = String(dirtyString);
        var options = dirtyOptions || {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) {
            return null;
        }
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        return {
            value: value,
            rest: string.slice(matchedString.length)
        };
    };
}
function buildMatchFn(args) {
    return function (dirtyString, dirtyOptions) {
        var string = String(dirtyString);
        var options = dirtyOptions || {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var value;
        if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
            value = parsePatterns.findIndex(function (pattern) {
                return pattern.test(string);
            });
        }
        else {
            value = findKey(parsePatterns, function (pattern) {
                return pattern.test(string);
            });
        }
        value = args.valueCallback ? args.valueCallback(value) : value;
        value = options.valueCallback ? options.valueCallback(value) : value;
        return {
            value: value,
            rest: string.slice(matchedString.length)
        };
    };
}
function findKey(object, predicate) {
    for (var key in object) {
        if (object.hasOwnProperty(key) && predicate(object[key])) {
            return key;
        }
    }
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function (value) {
            return parseInt(value, 10);
        }
    }),
    era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseEraPatterns,
        defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: 'any',
        valueCallback: function (index) {
            return index + 1;
        }
    }),
    month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: 'wide',
        parsePatterns: parseDayPatterns,
        defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: 'any',
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: 'any'
    })
};
/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale$2 = {
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0
        /* Sunday */
        ,
        firstWeekContainsDate: 1
    }
};
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek(dirtyDate, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear(dirtyDate, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    }
    else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    }
    else {
        return year - 1;
    }
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var date = toDate(dirtyDate);
    var day = toInteger(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay(dirtyDate, dirtyDay) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var day = toInteger(dirtyDay);
    if (day % 7 === 0) {
        day = day - 7;
    }
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek(dirtyDate) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear(dirtyDate) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    }
    else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    }
    else {
        return year - 1;
    }
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear(dirtyDate) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
}
var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek(dirtyDate) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate);
    var isoWeek = toInteger(dirtyISOWeek);
    var diff = getUTCISOWeek(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getUTCWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, dirtyOptions);
    return date;
}
var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeek(dirtyDate, options) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCWeek(dirtyDate, dirtyWeek, options) {
    if (arguments.length < 2) {
        throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate);
    var week = toInteger(dirtyWeek);
    var diff = getUTCWeek(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function parseNumericPattern(pattern, string, valueCallback) {
    var matchResult = string.match(pattern);
    if (!matchResult) {
        return null;
    }
    var value = parseInt(matchResult[0], 10);
    return {
        value: valueCallback ? valueCallback(value) : value,
        rest: string.slice(matchResult[0].length)
    };
}
function parseTimezonePattern(pattern, string) {
    var matchResult = string.match(pattern);
    if (!matchResult) {
        return null;
    } // Input is 'Z'
    if (matchResult[0] === 'Z') {
        return {
            value: 0,
            rest: string.slice(1)
        };
    }
    var sign = matchResult[1] === '+' ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1 + seconds * MILLISECONDS_IN_SECOND),
        rest: string.slice(matchResult[0].length)
    };
}
function parseAnyDigitsSigned(string, valueCallback) {
    return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}
function parseNDigits(n, string, valueCallback) {
    switch (n) {
        case 1:
            return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);
        default:
            return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
    }
}
function parseNDigitsSigned(n, string, valueCallback) {
    switch (n) {
        case 1:
            return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);
        default:
            return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
    }
}
function dayPeriodEnumToHours(enumValue) {
    switch (enumValue) {
        case 'morning':
            return 4;
        case 'evening':
            return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
            return 12;
        case 'am':
        case 'midnight':
        case 'night':
        default:
            return 0;
    }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0; // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC
    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;
    if (absCurrentYear <= 50) {
        result = twoDigitYear || 100;
    }
    else {
        var rangeEnd = absCurrentYear + 50;
        var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
        var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
var parsers = {
    // Era
    G: {
        priority: 140,
        parse: function (string, token, match, _options) {
            switch (token) {
                // AD, BC
                case 'G':
                case 'GG':
                case 'GGG':
                    return match.era(string, {
                        width: 'abbreviated'
                    }) || match.era(string, {
                        width: 'narrow'
                    });
                // A, B
                case 'GGGGG':
                    return match.era(string, {
                        width: 'narrow'
                    });
                // Anno Domini, Before Christ
                case 'GGGG':
                default:
                    return match.era(string, {
                        width: 'wide'
                    }) || match.era(string, {
                        width: 'abbreviated'
                    }) || match.era(string, {
                        width: 'narrow'
                    });
            }
        },
        set: function (date, _flags, value, _options) {
            // Sets year 10 BC if BC, or 10 AC if AC
            date.setUTCFullYear(value === 1 ? 10 : -9, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Year
    y: {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        priority: 130,
        parse: function (string, token, match, _options) {
            var valueCallback = function (year) {
                return {
                    year: year,
                    isTwoDigitYear: token === 'yy'
                };
            };
            switch (token) {
                case 'y':
                    return parseNDigits(4, string, valueCallback);
                case 'yo':
                    return match.ordinalNumber(string, {
                        unit: 'year',
                        valueCallback: valueCallback
                    });
                default:
                    return parseNDigits(token.length, string, valueCallback);
            }
        },
        validate: function (date, value, _options) {
            return value.isTwoDigitYear || value.year > 0;
        },
        set: function (date, _flags, value, options) {
            var currentYear = getUTCWeekYear(date, options);
            if (value.isTwoDigitYear) {
                var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
            var year = currentYear > 0 ? value.year : 1 - value.year;
            date.setUTCFullYear(year, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Local week-numbering year
    Y: {
        priority: 130,
        parse: function (string, token, match, _options) {
            var valueCallback = function (year) {
                return {
                    year: year,
                    isTwoDigitYear: token === 'YY'
                };
            };
            switch (token) {
                case 'Y':
                    return parseNDigits(4, string, valueCallback);
                case 'Yo':
                    return match.ordinalNumber(string, {
                        unit: 'year',
                        valueCallback: valueCallback
                    });
                default:
                    return parseNDigits(token.length, string, valueCallback);
            }
        },
        validate: function (_date, value, _options) {
            return value.isTwoDigitYear || value.year > 0;
        },
        set: function (date, _flags, value, options) {
            var currentYear = date.getUTCFullYear();
            if (value.isTwoDigitYear) {
                var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
                date.setUTCHours(0, 0, 0, 0);
                return startOfUTCWeek(date, options);
            }
            var year = currentYear > 0 ? value.year : 1 - value.year;
            date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
            date.setUTCHours(0, 0, 0, 0);
            return startOfUTCWeek(date, options);
        }
    },
    // ISO week-numbering year
    R: {
        priority: 130,
        parse: function (string, token, _match, _options) {
            if (token === 'R') {
                return parseNDigitsSigned(4, string);
            }
            return parseNDigitsSigned(token.length, string);
        },
        set: function (_date, _flags, value, _options) {
            var firstWeekOfYear = new Date(0);
            firstWeekOfYear.setUTCFullYear(value, 0, 4);
            firstWeekOfYear.setUTCHours(0, 0, 0, 0);
            return startOfUTCISOWeek(firstWeekOfYear);
        }
    },
    // Extended year
    u: {
        priority: 130,
        parse: function (string, token, _match, _options) {
            if (token === 'u') {
                return parseNDigitsSigned(4, string);
            }
            return parseNDigitsSigned(token.length, string);
        },
        set: function (date, _flags, value, _options) {
            date.setUTCFullYear(value, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Quarter
    Q: {
        priority: 120,
        parse: function (string, token, match, _options) {
            switch (token) {
                // 1, 2, 3, 4
                case 'Q':
                case 'QQ':
                    // 01, 02, 03, 04
                    return parseNDigits(token.length, string);
                // 1st, 2nd, 3rd, 4th
                case 'Qo':
                    return match.ordinalNumber(string, {
                        unit: 'quarter'
                    });
                // Q1, Q2, Q3, Q4
                case 'QQQ':
                    return match.quarter(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                case 'QQQQQ':
                    return match.quarter(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // 1st quarter, 2nd quarter, ...
                case 'QQQQ':
                default:
                    return match.quarter(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.quarter(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 1 && value <= 4;
        },
        set: function (date, _flags, value, _options) {
            date.setUTCMonth((value - 1) * 3, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Stand-alone quarter
    q: {
        priority: 120,
        parse: function (string, token, match, _options) {
            switch (token) {
                // 1, 2, 3, 4
                case 'q':
                case 'qq':
                    // 01, 02, 03, 04
                    return parseNDigits(token.length, string);
                // 1st, 2nd, 3rd, 4th
                case 'qo':
                    return match.ordinalNumber(string, {
                        unit: 'quarter'
                    });
                // Q1, Q2, Q3, Q4
                case 'qqq':
                    return match.quarter(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // 1, 2, 3, 4 (narrow quarter; could be not numerical)
                case 'qqqqq':
                    return match.quarter(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // 1st quarter, 2nd quarter, ...
                case 'qqqq':
                default:
                    return match.quarter(string, {
                        width: 'wide',
                        context: 'standalone'
                    }) || match.quarter(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.quarter(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 1 && value <= 4;
        },
        set: function (date, _flags, value, _options) {
            date.setUTCMonth((value - 1) * 3, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Month
    M: {
        priority: 110,
        parse: function (string, token, match, _options) {
            var valueCallback = function (value) {
                return value - 1;
            };
            switch (token) {
                // 1, 2, ..., 12
                case 'M':
                    return parseNumericPattern(numericPatterns.month, string, valueCallback);
                // 01, 02, ..., 12
                case 'MM':
                    return parseNDigits(2, string, valueCallback);
                // 1st, 2nd, ..., 12th
                case 'Mo':
                    return match.ordinalNumber(string, {
                        unit: 'month',
                        valueCallback: valueCallback
                    });
                // Jan, Feb, ..., Dec
                case 'MMM':
                    return match.month(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // J, F, ..., D
                case 'MMMMM':
                    return match.month(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // January, February, ..., December
                case 'MMMM':
                default:
                    return match.month(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.month(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function (date, _flags, value, _options) {
            date.setUTCMonth(value, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Stand-alone month
    L: {
        priority: 110,
        parse: function (string, token, match, _options) {
            var valueCallback = function (value) {
                return value - 1;
            };
            switch (token) {
                // 1, 2, ..., 12
                case 'L':
                    return parseNumericPattern(numericPatterns.month, string, valueCallback);
                // 01, 02, ..., 12
                case 'LL':
                    return parseNDigits(2, string, valueCallback);
                // 1st, 2nd, ..., 12th
                case 'Lo':
                    return match.ordinalNumber(string, {
                        unit: 'month',
                        valueCallback: valueCallback
                    });
                // Jan, Feb, ..., Dec
                case 'LLL':
                    return match.month(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // J, F, ..., D
                case 'LLLLL':
                    return match.month(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // January, February, ..., December
                case 'LLLL':
                default:
                    return match.month(string, {
                        width: 'wide',
                        context: 'standalone'
                    }) || match.month(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.month(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function (date, _flags, value, _options) {
            date.setUTCMonth(value, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Local week of year
    w: {
        priority: 100,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'w':
                    return parseNumericPattern(numericPatterns.week, string);
                case 'wo':
                    return match.ordinalNumber(string, {
                        unit: 'week'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 1 && value <= 53;
        },
        set: function (date, _flags, value, options) {
            return startOfUTCWeek(setUTCWeek(date, value, options), options);
        }
    },
    // ISO week of year
    I: {
        priority: 100,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'I':
                    return parseNumericPattern(numericPatterns.week, string);
                case 'Io':
                    return match.ordinalNumber(string, {
                        unit: 'week'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 1 && value <= 53;
        },
        set: function (date, _flags, value, options) {
            return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
        }
    },
    // Day of the month
    d: {
        priority: 90,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'd':
                    return parseNumericPattern(numericPatterns.date, string);
                case 'do':
                    return match.ordinalNumber(string, {
                        unit: 'date'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (date, value, _options) {
            var year = date.getUTCFullYear();
            var isLeapYear = isLeapYearIndex(year);
            var month = date.getUTCMonth();
            if (isLeapYear) {
                return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
            }
            else {
                return value >= 1 && value <= DAYS_IN_MONTH[month];
            }
        },
        set: function (date, _flags, value, _options) {
            date.setUTCDate(value);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Day of year
    D: {
        priority: 90,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'D':
                case 'DD':
                    return parseNumericPattern(numericPatterns.dayOfYear, string);
                case 'Do':
                    return match.ordinalNumber(string, {
                        unit: 'date'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (date, value, _options) {
            var year = date.getUTCFullYear();
            var isLeapYear = isLeapYearIndex(year);
            if (isLeapYear) {
                return value >= 1 && value <= 366;
            }
            else {
                return value >= 1 && value <= 365;
            }
        },
        set: function (date, _flags, value, _options) {
            date.setUTCMonth(0, value);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Day of week
    E: {
        priority: 90,
        parse: function (string, token, match, _options) {
            switch (token) {
                // Tue
                case 'E':
                case 'EE':
                case 'EEE':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // T
                case 'EEEEE':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tu
                case 'EEEEEE':
                    return match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tuesday
                case 'EEEE':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function (date, _flags, value, options) {
            date = setUTCDay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Local day of week
    e: {
        priority: 90,
        parse: function (string, token, match, options) {
            var valueCallback = function (value) {
                var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
            };
            switch (token) {
                // 3
                case 'e':
                case 'ee':
                    // 03
                    return parseNDigits(token.length, string, valueCallback);
                // 3rd
                case 'eo':
                    return match.ordinalNumber(string, {
                        unit: 'day',
                        valueCallback: valueCallback
                    });
                // Tue
                case 'eee':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // T
                case 'eeeee':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tu
                case 'eeeeee':
                    return match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                // Tuesday
                case 'eeee':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function (date, _flags, value, options) {
            date = setUTCDay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // Stand-alone local day of week
    c: {
        priority: 90,
        parse: function (string, token, match, options) {
            var valueCallback = function (value) {
                var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
            };
            switch (token) {
                // 3
                case 'c':
                case 'cc':
                    // 03
                    return parseNDigits(token.length, string, valueCallback);
                // 3rd
                case 'co':
                    return match.ordinalNumber(string, {
                        unit: 'day',
                        valueCallback: valueCallback
                    });
                // Tue
                case 'ccc':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // T
                case 'ccccc':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // Tu
                case 'cccccc':
                    return match.day(string, {
                        width: 'short',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                // Tuesday
                case 'cccc':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'short',
                        context: 'standalone'
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'standalone'
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function (date, _flags, value, options) {
            date = setUTCDay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // ISO day of week
    i: {
        priority: 90,
        parse: function (string, token, match, _options) {
            var valueCallback = function (value) {
                if (value === 0) {
                    return 7;
                }
                return value;
            };
            switch (token) {
                // 2
                case 'i':
                case 'ii':
                    // 02
                    return parseNDigits(token.length, string);
                // 2nd
                case 'io':
                    return match.ordinalNumber(string, {
                        unit: 'day'
                    });
                // Tue
                case 'iii':
                    return match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
                // T
                case 'iiiii':
                    return match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
                // Tu
                case 'iiiiii':
                    return match.day(string, {
                        width: 'short',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
                // Tuesday
                case 'iiii':
                default:
                    return match.day(string, {
                        width: 'wide',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'abbreviated',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'short',
                        context: 'formatting',
                        valueCallback: valueCallback
                    }) || match.day(string, {
                        width: 'narrow',
                        context: 'formatting',
                        valueCallback: valueCallback
                    });
            }
        },
        validate: function (_date, value, _options) {
            return value >= 1 && value <= 7;
        },
        set: function (date, _flags, value, options) {
            date = setUTCISODay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        }
    },
    // AM or PM
    a: {
        priority: 80,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'a':
                case 'aa':
                case 'aaa':
                    return match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'aaaaa':
                    return match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'aaaa':
                default:
                    return match.dayPeriod(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        set: function (date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        }
    },
    // AM, PM, midnight
    b: {
        priority: 80,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'b':
                case 'bb':
                case 'bbb':
                    return match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'bbbbb':
                    return match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'bbbb':
                default:
                    return match.dayPeriod(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        set: function (date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: {
        priority: 80,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'B':
                case 'BB':
                case 'BBB':
                    return match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'BBBBB':
                    return match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'BBBB':
                default:
                    return match.dayPeriod(string, {
                        width: 'wide',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'abbreviated',
                        context: 'formatting'
                    }) || match.dayPeriod(string, {
                        width: 'narrow',
                        context: 'formatting'
                    });
            }
        },
        set: function (date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        }
    },
    // Hour [1-12]
    h: {
        priority: 70,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'h':
                    return parseNumericPattern(numericPatterns.hour12h, string);
                case 'ho':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 1 && value <= 12;
        },
        set: function (date, _flags, value, _options) {
            var isPM = date.getUTCHours() >= 12;
            if (isPM && value < 12) {
                date.setUTCHours(value + 12, 0, 0, 0);
            }
            else if (!isPM && value === 12) {
                date.setUTCHours(0, 0, 0, 0);
            }
            else {
                date.setUTCHours(value, 0, 0, 0);
            }
            return date;
        }
    },
    // Hour [0-23]
    H: {
        priority: 70,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'H':
                    return parseNumericPattern(numericPatterns.hour23h, string);
                case 'Ho':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 23;
        },
        set: function (date, _flags, value, _options) {
            date.setUTCHours(value, 0, 0, 0);
            return date;
        }
    },
    // Hour [0-11]
    K: {
        priority: 70,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'K':
                    return parseNumericPattern(numericPatterns.hour11h, string);
                case 'Ko':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function (date, _flags, value, _options) {
            var isPM = date.getUTCHours() >= 12;
            if (isPM && value < 12) {
                date.setUTCHours(value + 12, 0, 0, 0);
            }
            else {
                date.setUTCHours(value, 0, 0, 0);
            }
            return date;
        }
    },
    // Hour [1-24]
    k: {
        priority: 70,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'k':
                    return parseNumericPattern(numericPatterns.hour24h, string);
                case 'ko':
                    return match.ordinalNumber(string, {
                        unit: 'hour'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 1 && value <= 24;
        },
        set: function (date, _flags, value, _options) {
            var hours = value <= 24 ? value % 24 : value;
            date.setUTCHours(hours, 0, 0, 0);
            return date;
        }
    },
    // Minute
    m: {
        priority: 60,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 'm':
                    return parseNumericPattern(numericPatterns.minute, string);
                case 'mo':
                    return match.ordinalNumber(string, {
                        unit: 'minute'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 59;
        },
        set: function (date, _flags, value, _options) {
            date.setUTCMinutes(value, 0, 0);
            return date;
        }
    },
    // Second
    s: {
        priority: 50,
        parse: function (string, token, match, _options) {
            switch (token) {
                case 's':
                    return parseNumericPattern(numericPatterns.second, string);
                case 'so':
                    return match.ordinalNumber(string, {
                        unit: 'second'
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function (_date, value, _options) {
            return value >= 0 && value <= 59;
        },
        set: function (date, _flags, value, _options) {
            date.setUTCSeconds(value, 0);
            return date;
        }
    },
    // Fraction of second
    S: {
        priority: 30,
        parse: function (string, token, _match, _options) {
            var valueCallback = function (value) {
                return Math.floor(value * Math.pow(10, -token.length + 3));
            };
            return parseNDigits(token.length, string, valueCallback);
        },
        set: function (date, _flags, value, _options) {
            date.setUTCMilliseconds(value);
            return date;
        }
    },
    // Timezone (ISO-8601. +00:00 is `'Z'`)
    X: {
        priority: 10,
        parse: function (string, token, _match, _options) {
            switch (token) {
                case 'X':
                    return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
                case 'XX':
                    return parseTimezonePattern(timezonePatterns.basic, string);
                case 'XXXX':
                    return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
                case 'XXXXX':
                    return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
                case 'XXX':
                default:
                    return parseTimezonePattern(timezonePatterns.extended, string);
            }
        },
        set: function (date, flags, value, _options) {
            if (flags.timestampIsSet) {
                return date;
            }
            return new Date(date.getTime() - value);
        }
    },
    // Timezone (ISO-8601)
    x: {
        priority: 10,
        parse: function (string, token, _match, _options) {
            switch (token) {
                case 'x':
                    return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
                case 'xx':
                    return parseTimezonePattern(timezonePatterns.basic, string);
                case 'xxxx':
                    return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
                case 'xxxxx':
                    return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
                case 'xxx':
                default:
                    return parseTimezonePattern(timezonePatterns.extended, string);
            }
        },
        set: function (date, flags, value, _options) {
            if (flags.timestampIsSet) {
                return date;
            }
            return new Date(date.getTime() - value);
        }
    },
    // Seconds timestamp
    t: {
        priority: 40,
        parse: function (string, _token, _match, _options) {
            return parseAnyDigitsSigned(string);
        },
        set: function (_date, _flags, value, _options) {
            return [new Date(value * 1000), {
                    timestampIsSet: true
                }];
        }
    },
    // Milliseconds timestamp
    T: {
        priority: 20,
        parse: function (string, _token, _match, _options) {
            return parseAnyDigitsSigned(string);
        },
        set: function (_date, _flags, value, _options) {
            return [new Date(value), {
                    timestampIsSet: true
                }];
        }
    }
};
function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
        case 'P':
            return formatLong.date({
                width: 'short'
            });
        case 'PP':
            return formatLong.date({
                width: 'medium'
            });
        case 'PPP':
            return formatLong.date({
                width: 'long'
            });
        case 'PPPP':
        default:
            return formatLong.date({
                width: 'full'
            });
    }
}
function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
        case 'p':
            return formatLong.time({
                width: 'short'
            });
        case 'pp':
            return formatLong.time({
                width: 'medium'
            });
        case 'ppp':
            return formatLong.time({
                width: 'long'
            });
        case 'pppp':
        default:
            return formatLong.time({
                width: 'full'
            });
    }
}
function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/);
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    var dateTimeFormat;
    switch (datePattern) {
        case 'P':
            dateTimeFormat = formatLong.dateTime({
                width: 'short'
            });
            break;
        case 'PP':
            dateTimeFormat = formatLong.dateTime({
                width: 'medium'
            });
            break;
        case 'PPP':
            dateTimeFormat = formatLong.dateTime({
                width: 'long'
            });
            break;
        case 'PPPP':
        default:
            dateTimeFormat = formatLong.dateTime({
                width: 'full'
            });
            break;
    }
    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token) {
    if (token === 'YYYY') {
        throw new RangeError('Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr');
    }
    else if (token === 'YY') {
        throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr');
    }
    else if (token === 'D') {
        throw new RangeError('Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr');
    }
    else if (token === 'DD') {
        throw new RangeError('Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr');
    }
}
var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `baseDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   toDate('2016-01-01')
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} baseDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
    if (arguments.length < 3) {
        throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
    }
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var options = dirtyOptions || {};
    var locale = options.locale || locale$2;
    if (!locale.match) {
        throw new RangeError('locale must contain match property');
    }
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    if (formatString === '') {
        if (dateString === '') {
            return toDate(dirtyBaseDate);
        }
        else {
            return new Date(NaN);
        }
    }
    var subFnOptions = {
        firstWeekContainsDate: firstWeekContainsDate,
        weekStartsOn: weekStartsOn,
        locale: locale // If timezone isn't specified, it will be set to the system timezone
    };
    var setters = [{
            priority: TIMEZONE_UNIT_PRIORITY,
            set: dateToSystemTimezone,
            index: 0
        }];
    var i;
    var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === 'p' || firstCharacter === 'P') {
            var longFormatter = longFormatters[firstCharacter];
            return longFormatter(substring, locale.formatLong, subFnOptions);
        }
        return substring;
    }).join('').match(formattingTokensRegExp);
    for (i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
            throwProtectedError(token);
        }
        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
            throwProtectedError(token);
        }
        var firstCharacter = token[0];
        var parser = parsers[firstCharacter];
        if (parser) {
            var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);
            if (!parseResult) {
                return new Date(NaN);
            }
            setters.push({
                priority: parser.priority,
                set: parser.set,
                validate: parser.validate,
                value: parseResult.value,
                index: setters.length
            });
            dateString = parseResult.rest;
        }
        else {
            if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
                throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
            } // Replace two single quote characters with one single quote character
            if (token === "''") {
                token = "'";
            }
            else if (firstCharacter === "'") {
                token = cleanEscapedString(token);
            } // Cut token from string, or, if string doesn't match the token, return Invalid Date
            if (dateString.indexOf(token) === 0) {
                dateString = dateString.slice(token.length);
            }
            else {
                return new Date(NaN);
            }
        }
    } // Check if the remaining input contains something other than whitespace
    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
        return new Date(NaN);
    }
    var uniquePrioritySetters = setters.map(function (setter) {
        return setter.priority;
    }).sort(function (a, b) {
        return b - a;
    }).filter(function (priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function (priority) {
        return setters.filter(function (setter) {
            return setter.priority === priority;
        }).reverse();
    }).map(function (setterArray) {
        return setterArray[0];
    });
    var date = toDate(dirtyBaseDate);
    if (isNaN(date)) {
        return new Date(NaN);
    } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
    var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
    var flags = {};
    for (i = 0; i < uniquePrioritySetters.length; i++) {
        var setter = uniquePrioritySetters[i];
        if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
            return new Date(NaN);
        }
        var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)
        if (result[0]) {
            utcDate = result[0];
            assign(flags, result[1]); // Result is date
        }
        else {
            utcDate = result;
        }
    }
    return utcDate;
}
function dateToSystemTimezone(date, flags) {
    if (flags.timestampIsSet) {
        return date;
    }
    var convertedDate = new Date(0);
    convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    return convertedDate;
}
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `true`        |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
    if (arguments.length < 1) {
        throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
    }
    var date = toDate(dirtyDate);
    return !isNaN(date);
}
var pi$1 = Math.PI, tau$1 = 2 * pi$1, epsilon$1 = 1e-6, tauEpsilon = tau$1 - epsilon$1;
function Path() {
    this._x0 = this._y0 = // start of current subpath
        this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function path() {
    return new Path;
}
Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function (x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function () {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function (x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function (x1, y1, x, y) {
        this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function (x1, y1, x2, y2, x, y) {
        this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function (x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0)
            throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) {
            this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        }
        // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
        else if (!(l01_2 > epsilon$1))
            ;
        // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
        // Equivalently, is (x1,y1) coincident with (x2,y2)?
        // Or, is the radius zero? Line to (x1,y1).
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
            this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        }
        // Otherwise, draw an arc!
        else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > epsilon$1) {
                this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            }
            this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function (x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0)
            throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) {
            this._ += "M" + x0 + "," + y0;
        }
        // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
        else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
            this._ += "L" + x0 + "," + y0;
        }
        // Is this arc empty? We’re done.
        if (!r)
            return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0)
            da = da % tau$1 + tau$1;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
            this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        }
        // Is this arc non-empty? Draw an arc!
        else if (da > epsilon$1) {
            this._ += "A" + r + "," + r + ",0," + (+(da >= pi$1)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
        }
    },
    rect: function (x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
    },
    toString: function () {
        return this._;
    }
};
function constant$3(x) {
    return function constant() {
        return x;
    };
}
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max$1 = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;
var epsilon$2 = 1e-12;
var pi$2 = Math.PI;
var halfPi = pi$2 / 2;
var tau$2 = 2 * pi$2;
function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi$2 : Math.acos(x);
}
function asin(x) {
    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
function arcInnerRadius(d) {
    return d.innerRadius;
}
function arcOuterRadius(d) {
    return d.outerRadius;
}
function arcStartAngle(d) {
    return d.startAngle;
}
function arcEndAngle(d) {
    return d.endAngle;
}
function arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < epsilon$2)
        return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [x0 + t * x10, y0 + t * y10];
}
// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max$1(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
        cx0 = cx1, cy0 = cy1;
    return {
        cx: cx0,
        cy: cy0,
        x01: -ox,
        y01: -oy,
        x11: cx0 * (r1 / r - 1),
        y11: cy0 * (r1 / r - 1)
    };
}
function arc() {
    var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant$3(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
    function arc() {
        var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
        if (!context)
            context = buffer = path();
        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0)
            r = r1, r1 = r0, r0 = r;
        // Is it a point?
        if (!(r1 > epsilon$2))
            context.moveTo(0, 0);
        // Or is it a circle or annulus?
        else if (da > tau$2 - epsilon$2) {
            context.moveTo(r1 * cos(a0), r1 * sin(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > epsilon$2) {
                context.moveTo(r0 * cos(a1), r0 * sin(a1));
                context.arc(0, 0, r0, a1, a0, cw);
            }
        }
        // Or is it a circular or annular sector?
        else {
            var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = (ap > epsilon$2) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > epsilon$2) {
                var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
                if ((da0 -= p0 * 2) > epsilon$2)
                    p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
                else
                    da0 = 0, a00 = a10 = (a0 + a1) / 2;
                if ((da1 -= p1 * 2) > epsilon$2)
                    p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
                else
                    da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
            // Apply rounded corners?
            if (rc > epsilon$2) {
                var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
                // Restrict the corner radius according to the sector angle.
                if (da < pi$2 && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
                    var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
                    rc0 = min(rc, (r0 - lc) / (kc - 1));
                    rc1 = min(rc, (r1 - lc) / (kc + 1));
                }
            }
            // Is the sector collapsed to a line?
            if (!(da1 > epsilon$2))
                context.moveTo(x01, y01);
            // Does the sector’s outer ring have rounded corners?
            else if (rc1 > epsilon$2) {
                t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc1 < rc)
                    context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
                // Otherwise, draw the two corners and the ring.
                else {
                    context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                    context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
                }
            }
            // Or is the outer ring just a circular arc?
            else
                context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > epsilon$2) || !(da0 > epsilon$2))
                context.lineTo(x10, y10);
            // Does the sector’s inner ring (or point) have rounded corners?
            else if (rc0 > epsilon$2) {
                t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc0 < rc)
                    context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
                // Otherwise, draw the two corners and the ring.
                else {
                    context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                    context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
                }
            }
            // Or is the inner ring just a circular arc?
            else
                context.arc(0, 0, r0, a10, a00, cw);
        }
        context.closePath();
        if (buffer)
            return context = null, buffer + "" || null;
    }
    arc.centroid = function () {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$2 / 2;
        return [cos(a) * r, sin(a) * r];
    };
    arc.innerRadius = function (_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$3(+_), arc) : innerRadius;
    };
    arc.outerRadius = function (_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$3(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function (_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$3(+_), arc) : cornerRadius;
    };
    arc.padRadius = function (_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$3(+_), arc) : padRadius;
    };
    arc.startAngle = function (_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$3(+_), arc) : startAngle;
    };
    arc.endAngle = function (_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$3(+_), arc) : endAngle;
    };
    arc.padAngle = function (_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$3(+_), arc) : padAngle;
    };
    arc.context = function (_) {
        return arguments.length ? ((context = _ == null ? null : _), arc) : context;
    };
    return arc;
}
function Linear(context) {
    this._context = context;
}
Linear.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        this._point = 0;
    },
    lineEnd: function () {
        if (this._line || (this._line !== 0 && this._point === 1))
            this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function (x, y) {
        x = +x, y = +y;
        switch (this._point) {
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1: this._point = 2; // proceed
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
function curveLinear(context) {
    return new Linear(context);
}
function x(p) {
    return p[0];
}
function y(p) {
    return p[1];
}
function line() {
    var x$1 = x, y$1 = y, defined = constant$3(true), context = null, curve = curveLinear, output = null;
    function line(data) {
        var i, n = data.length, d, defined0 = false, buffer;
        if (context == null)
            output = curve(buffer = path());
        for (i = 0; i <= n; ++i) {
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0)
                    output.lineStart();
                else
                    output.lineEnd();
            }
            if (defined0)
                output.point(+x$1(d, i, data), +y$1(d, i, data));
        }
        if (buffer)
            return output = null, buffer + "" || null;
    }
    line.x = function (_) {
        return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant$3(+_), line) : x$1;
    };
    line.y = function (_) {
        return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant$3(+_), line) : y$1;
    };
    line.defined = function (_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : constant$3(!!_), line) : defined;
    };
    line.curve = function (_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function (_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
}
function area() {
    var x0 = x, x1 = null, y0 = constant$3(0), y1 = y, defined = constant$3(true), context = null, curve = curveLinear, output = null;
    function area(data) {
        var i, j, k, n = data.length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
        if (context == null)
            output = curve(buffer = path());
        for (i = 0; i <= n; ++i) {
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) {
                    j = i;
                    output.areaStart();
                    output.lineStart();
                }
                else {
                    output.lineEnd();
                    output.lineStart();
                    for (k = i - 1; k >= j; --k) {
                        output.point(x0z[k], y0z[k]);
                    }
                    output.lineEnd();
                    output.areaEnd();
                }
            }
            if (defined0) {
                x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
                output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
            }
        }
        if (buffer)
            return output = null, buffer + "" || null;
    }
    function arealine() {
        return line().defined(defined).curve(curve).context(context);
    }
    area.x = function (_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$3(+_), x1 = null, area) : x0;
    };
    area.x0 = function (_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$3(+_), area) : x0;
    };
    area.x1 = function (_) {
        return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$3(+_), area) : x1;
    };
    area.y = function (_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$3(+_), y1 = null, area) : y0;
    };
    area.y0 = function (_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$3(+_), area) : y0;
    };
    area.y1 = function (_) {
        return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$3(+_), area) : y1;
    };
    area.lineX0 =
        area.lineY0 = function () {
            return arealine().x(x0).y(y0);
        };
    area.lineY1 = function () {
        return arealine().x(x0).y(y1);
    };
    area.lineX1 = function () {
        return arealine().x(x1).y(y0);
    };
    area.defined = function (_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : constant$3(!!_), area) : defined;
    };
    area.curve = function (_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function (_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
    return area;
}
function descending(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}
function identity$4(d) {
    return d;
}
function pie() {
    var value = identity$4, sortValues = descending, sort = null, startAngle = constant$3(0), endAngle = constant$3(tau$2), padAngle = constant$3(0);
    function pie(data) {
        var i, n = data.length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau$2, Math.max(-tau$2, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
        for (i = 0; i < n; ++i) {
            if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
                sum += v;
            }
        }
        // Optionally sort the arcs by previously-computed values or by data.
        if (sortValues != null)
            index.sort(function (i, j) { return sortValues(arcs[i], arcs[j]); });
        else if (sort != null)
            index.sort(function (i, j) { return sort(data[i], data[j]); });
        // Compute the arcs! They are stored in the original data's order.
        for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
            j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
                data: data[j],
                index: i,
                value: v,
                startAngle: a0,
                endAngle: a1,
                padAngle: p
            };
        }
        return arcs;
    }
    pie.value = function (_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : constant$3(+_), pie) : value;
    };
    pie.sortValues = function (_) {
        return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };
    pie.sort = function (_) {
        return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };
    pie.startAngle = function (_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$3(+_), pie) : startAngle;
    };
    pie.endAngle = function (_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$3(+_), pie) : endAngle;
    };
    pie.padAngle = function (_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$3(+_), pie) : padAngle;
    };
    return pie;
}
function sign(x) {
    return x < 0 ? -1 : 1;
}
// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
// Calculate a one-sided slope.
function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
    this._context = context;
}
MonotoneX.prototype = {
    areaStart: function () {
        this._line = 0;
    },
    areaEnd: function () {
        this._line = NaN;
    },
    lineStart: function () {
        this._x0 = this._x1 =
            this._y0 = this._y1 =
                this._t0 = NaN;
        this._point = 0;
    },
    lineEnd: function () {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                point(this, this._t0, slope2(this, this._t0));
                break;
        }
        if (this._line || (this._line !== 0 && this._point === 1))
            this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function (x, y) {
        var t1 = NaN;
        x = +x, y = +y;
        if (x === this._x1 && y === this._y1)
            return; // Ignore coincident points.
        switch (this._point) {
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                point(this, slope2(this, t1 = slope3(this, x, y)), t1);
                break;
            default:
                point(this, this._t0, t1 = slope3(this, x, y));
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
        this._t0 = t1;
    }
};
function MonotoneY(context) {
    this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (x, y) {
    MonotoneX.prototype.point.call(this, y, x);
};
function ReflectContext(context) {
    this._context = context;
}
ReflectContext.prototype = {
    moveTo: function (x, y) { this._context.moveTo(y, x); },
    closePath: function () { this._context.closePath(); },
    lineTo: function (x, y) { this._context.lineTo(y, x); },
    bezierCurveTo: function (x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};
function monotoneX(context) {
    return new MonotoneX(context);
}
var DeckdeckgoLineChartAxisDomain;
(function (DeckdeckgoLineChartAxisDomain) {
    DeckdeckgoLineChartAxisDomain["EXTENT"] = "extent";
    DeckdeckgoLineChartAxisDomain["MAX"] = "max";
})(DeckdeckgoLineChartAxisDomain || (DeckdeckgoLineChartAxisDomain = {}));
var DeckdeckgoLineChart = /** @class */ (function () {
    function DeckdeckgoLineChart(hostRef) {
        Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.separator = ';';
        // All supported date format: https://date-fns.org/v2.0.0-alpha.26/docs/parse
        this.datePattern = 'yyyy-MM-dd';
        this.marginTop = 32;
        this.marginBottom = 64;
        this.marginLeft = 32;
        this.marginRight = 32;
        this.yAxisDomain = DeckdeckgoLineChartAxisDomain.MAX;
        this.smooth = true;
        this.area = true;
        this.grid = false;
        this.animation = false;
        this.animationDuration = 1000;
        this.serieIndex = 0;
    }
    DeckdeckgoLineChart.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.draw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLineChart.prototype.redraw = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.draw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLineChart.prototype.draw = function (width, height) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _a, promises, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (width > 0) {
                            this.width = width;
                        }
                        if (height > 0) {
                            this.height = height;
                        }
                        if (!this.width || !this.height || !this.src) {
                            resolve();
                            return [2 /*return*/];
                        }
                        this.serieIndex = 0;
                        this.svg = DeckdeckgoChartUtils.initSvg(this.el, (this.width + this.marginLeft + this.marginRight), (this.height + this.marginTop + this.marginBottom));
                        this.svg = this.svg.append('g').attr('transform', 'translate(' + this.marginLeft + ',' + this.marginTop + ')');
                        _a = this;
                        return [4 /*yield*/, this.fetchData()];
                    case 1:
                        _a.series = _b.sent();
                        if (!this.series || this.series.length <= 0) {
                            resolve();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.initAxis()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.drawAxis()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.drawLine(0)];
                    case 4:
                        _b.sent();
                        if (!(this.series.length > 1 && !this.animation)) return [3 /*break*/, 6];
                        promises = [];
                        for (i = 1; i < this.series.length; i++) {
                            promises.push(this.drawLine(i));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoLineChart.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prevNext(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLineChart.prototype.prev = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prevNext(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLineChart.prototype.prevNext = function (next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.animation) {
                            return [2 /*return*/];
                        }
                        if (!this.series || this.series.length <= 0) {
                            return [2 /*return*/];
                        }
                        if (!(next && this.serieIndex + 1 < this.series.length)) return [3 /*break*/, 2];
                        this.serieIndex++;
                        return [4 /*yield*/, this.drawLine(this.serieIndex)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(!next && this.serieIndex > 0)) return [3 /*break*/, 4];
                        this.serieIndex--;
                        return [4 /*yield*/, this.drawLine(this.serieIndex)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoLineChart.prototype.isBeginning = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.animation) {
                resolve(true);
                return;
            }
            resolve(_this.serieIndex === 0);
        });
    };
    DeckdeckgoLineChart.prototype.isEnd = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.animation) {
                resolve(true);
                return;
            }
            resolve(_this.serieIndex === _this.series.length - 1);
        });
    };
    DeckdeckgoLineChart.prototype.initAxis = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var firstSerieData, isXAxisNumber, minMaxValues, minMaxValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstSerieData = this.series[0].data;
                        isXAxisNumber = firstSerieData && firstSerieData.length > 0 && typeof firstSerieData[0].when === 'number';
                        this.x = isXAxisNumber ? linear$1().range([0, this.width]) : scaleTime().range([0, this.width]);
                        this.y = linear$1().range([this.height, 0]);
                        this.x.domain(extent(firstSerieData, function (d) { return d.when; }));
                        if (!(this.yAxisDomain === DeckdeckgoLineChartAxisDomain.EXTENT)) return [3 /*break*/, 4];
                        if (!(this.series.length > 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findMinMaxValues()];
                    case 1:
                        minMaxValues = _a.sent();
                        this.y.domain(minMaxValues);
                        return [3 /*break*/, 3];
                    case 2:
                        this.y.domain(extent(firstSerieData, function (d) { return d.value; }));
                        _a.label = 3;
                    case 3: return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.findMinMaxValues()];
                    case 5:
                        minMaxValues = _a.sent();
                        this.y.domain([0, minMaxValues[1]]);
                        _a.label = 6;
                    case 6:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoLineChart.prototype.findMinMaxValues = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var promises, i, results, minMax;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.series || this.series.length <= 0) {
                            resolve([0, 0]);
                            return [2 /*return*/];
                        }
                        promises = [];
                        for (i = 0; i < this.series.length; i++) {
                            promises.push(this.findMinMax(i));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, this.concatMinMax(results)];
                    case 2:
                        minMax = _a.sent();
                        resolve([minMax.min, minMax.max]);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoLineChart.prototype.concatMinMax = function (allMinMax) {
        return new Promise(function (resolve) {
            if (!allMinMax || allMinMax.length <= 0) {
                resolve({
                    min: 0,
                    max: 0
                });
                return;
            }
            // https://stackoverflow.com/a/30834687/5404186
            var min = allMinMax[0].min;
            var max = allMinMax[0].max;
            for (var i = 1; i < allMinMax.length; ++i) {
                if (allMinMax[i].max > max) {
                    max = allMinMax[i].max;
                }
                if (allMinMax[i].min < min) {
                    min = allMinMax[i].min;
                }
            }
            resolve({
                min: min,
                max: max
            });
        });
    };
    DeckdeckgoLineChart.prototype.findMinMax = function (index) {
        var _this = this;
        return new Promise(function (resolve) {
            // https://stackoverflow.com/a/30834687/5404186
            var min = _this.series[index].data[0].value;
            var max = _this.series[index].data[0].value;
            for (var i = 1; i < _this.series[index].data.length; ++i) {
                if (_this.series[index].data[i].value > max) {
                    max = _this.series[index].data[i].value;
                }
                if (_this.series[index].data[i].value < min) {
                    min = _this.series[index].data[i].value;
                }
            }
            resolve({
                min: min,
                max: max
            });
        });
    };
    DeckdeckgoLineChart.prototype.drawAxis = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var bottomAxis = _this.ticks > 0 ? axisBottom(_this.x).ticks(_this.ticks) : axisBottom(_this.x);
            var leftAxis = _this.ticks > 0 ? axisLeft(_this.y).ticks(_this.ticks) : axisLeft(_this.y);
            var styleClassAxisX = 'axis axis-x' + (_this.grid ? ' axis-grid' : '');
            var styleClassAxisY = 'axis axis-y' + (_this.grid ? ' axis-grid' : '');
            if (_this.grid) {
                bottomAxis.tickSize(-_this.height).tickFormat(null);
                leftAxis.tickSize(-_this.width).tickFormat(null);
            }
            _this.svg.append('g')
                .attr('class', styleClassAxisX)
                .attr('transform', 'translate(0,' + _this.height + ')')
                .call(bottomAxis)
                .selectAll('text')
                .attr('transform', 'translate(-10,0)rotate(-45)')
                .style('text-anchor', 'end');
            _this.svg.append('g')
                .attr('class', styleClassAxisY)
                .call(leftAxis);
            resolve();
        });
    };
    DeckdeckgoLineChart.prototype.drawLine = function (index) {
        var _this = this;
        return new Promise(function (resolve) {
            var line = area()
                .x(function (d) { return _this.x(d.when); });
            if (_this.area) {
                line.y0(_this.height).y1(function (d) { return _this.y(d.value); });
            }
            else {
                line.y(function (d) { return _this.y(d.value); });
            }
            if (_this.smooth) {
                line.curve(monotoneX);
            }
            var data = _this.series[index].data;
            if (_this.animation) {
                _this.drawAnimatedLine(data, index, line);
            }
            else {
                _this.drawInstantLine(data, index, line);
            }
            resolve();
        });
    };
    DeckdeckgoLineChart.prototype.drawInstantLine = function (data, index, line) {
        // Random hex color source: https://css-tricks.com/snippets/javascript/random-hex-color/
        this.svg.append('path')
            .datum(data)
            .attr('class', 'area')
            .style('fill', "var(--deckgo-chart-fill-color-" + index + ", #" + Math.floor(Math.random() * 16777215).toString(16) + ")")
            .style('fill-opacity', "var(--deckgo-chart-fill-opacity-" + index + ")")
            .style('stroke', "var(--deckgo-chart-stroke-" + index + ")")
            .style('stroke-width', "var(--deckgo-chart-stroke-width-" + index + ")")
            .attr('d', line);
    };
    DeckdeckgoLineChart.prototype.drawAnimatedLine = function (data, index, line) {
        var _this = this;
        var t = transition();
        var section = this.svg.selectAll('.area')
            .data([data], function (d) {
            return _this.y(d.value);
        });
        section
            .enter()
            .append('path').merge(section)
            .style('fill', "var(--deckgo-chart-fill-color-" + index + ", #" + Math.floor(Math.random() * 16777215).toString(16) + ")")
            .style('fill-opacity', "var(--deckgo-chart-fill-opacity-" + index + ")")
            .style('stroke', "var(--deckgo-chart-stroke-" + index + ")")
            .style('stroke-width', "var(--deckgo-chart-stroke-width-" + index + ")")
            .transition(t).duration(this.animationDuration).ease(linear$2)
            .attr('class', 'area')
            .attr('d', line);
    };
    DeckdeckgoLineChart.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var response, content, lines, series, _i, lines_1, line_1, values, when, i, value, data;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this.src) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, fetch(this.src)];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.text()];
                                case 2:
                                    content = _a.sent();
                                    if (!content) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    lines = content.split('\n');
                                    if (!lines || lines.length <= 0) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    series = [];
                                    for (_i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                                        line_1 = lines_1[_i];
                                        values = line_1.split(this.separator);
                                        if (values && values.length > 1) {
                                            when = this.validDate(values[0]) ? parse(values[0], this.datePattern, new Date()) : parseInt(values[0]);
                                            if (when) {
                                                for (i = 1; i < values.length; i++) {
                                                    value = parseInt(values[i]);
                                                    if (!isNaN(value)) {
                                                        data = series && series.length >= i ? series[i - 1] : { data: [] };
                                                        if (!data.data || data.data.length <= 0) {
                                                            data.data = [];
                                                        }
                                                        data.data.push({
                                                            when: when,
                                                            value: parseInt(values[i])
                                                        });
                                                        if (series && series.length >= i) {
                                                            series[i - 1] = data;
                                                        }
                                                        else {
                                                            series.push(data);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    resolve(series);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DeckdeckgoLineChart.prototype.validDate = function (value) {
        return this.datePattern && isValid(parse(value, this.datePattern, new Date()));
    };
    DeckdeckgoLineChart.prototype.render = function () {
        return Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", null);
    };
    Object.defineProperty(DeckdeckgoLineChart.prototype, "el", {
        get: function () { return Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoLineChart, "watchers", {
        get: function () {
            return {
                "src": ["redraw"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoLineChart, "style", {
        get: function () { return "text{fill:var(--deckgo-chart-text-color,#000);display:var(--deckgo-chart-text-display)}.axis line,.axis path{fill:none;stroke:var(--deckgo-chart-axis-color,#000);shape-rendering:crispEdges}.axis-grid line{stroke:var(--deckgo-chart-grid-stroke,#989aa2);stroke-opacity:var(--deckgo-chart-grid-stroke-opacity,.7);shape-rendering:crispEdges}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoLineChart;
}());
function colors(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while (i < n)
        colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
}
colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
colors("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
var schemePastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
colors("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
function ramp(scheme) {
    return rgbBasis(scheme[scheme.length - 1]);
}
var scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors);
ramp(scheme);
var scheme$1 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors);
ramp(scheme$1);
var scheme$2 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors);
ramp(scheme$2);
var scheme$3 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors);
ramp(scheme$3);
var scheme$4 = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors);
ramp(scheme$4);
var scheme$5 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors);
ramp(scheme$5);
var scheme$6 = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors);
ramp(scheme$6);
var scheme$7 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors);
ramp(scheme$7);
var scheme$8 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors);
ramp(scheme$8);
var scheme$9 = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors);
ramp(scheme$9);
var scheme$a = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors);
ramp(scheme$a);
var scheme$b = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors);
ramp(scheme$b);
var scheme$c = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors);
ramp(scheme$c);
var scheme$d = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors);
ramp(scheme$d);
var scheme$e = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors);
ramp(scheme$e);
var scheme$f = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors);
ramp(scheme$f);
var scheme$g = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors);
ramp(scheme$g);
var scheme$h = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors);
ramp(scheme$h);
var scheme$i = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors);
ramp(scheme$i);
var scheme$j = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors);
ramp(scheme$j);
var scheme$k = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors);
ramp(scheme$k);
var scheme$l = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors);
ramp(scheme$l);
var scheme$m = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors);
ramp(scheme$m);
var scheme$n = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors);
ramp(scheme$n);
var scheme$o = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors);
ramp(scheme$o);
var scheme$p = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors);
ramp(scheme$p);
var scheme$q = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors);
ramp(scheme$q);
cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));
var c = cubehelix();
var c$1 = rgb(), pi_1_3 = Math.PI / 3, pi_2_3 = Math.PI * 2 / 3;
function ramp$1(range) {
    var n = range.length;
    return function (t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}
ramp$1(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp$1(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp$1(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp$1(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
var DeckdeckgoPieChart = /** @class */ (function () {
    function DeckdeckgoPieChart(hostRef) {
        Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        // Specify a number for a donut chart
        this.innerRadius = 0;
        this.separator = ';';
        this.animation = false;
        this.animationDuration = 1000;
        this.pieDataIndex = 0;
    }
    DeckdeckgoPieChart.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.draw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoPieChart.prototype.redraw = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.draw()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoPieChart.prototype.draw = function (width, height) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var radius, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (width > 0) {
                            this.width = width;
                        }
                        if (height > 0) {
                            this.height = height;
                        }
                        if (!this.width || !this.height || !this.src) {
                            resolve();
                            return [2 /*return*/];
                        }
                        this.pieDataIndex = 0;
                        this.svg = DeckdeckgoChartUtils.initSvg(this.el, this.width, this.height);
                        this.svg = this.svg.append('g').attr('transform', 'translate(' + (this.width / 2) + ',' + (this.height / 2) + ')');
                        radius = Math.min(this.width, this.height) / 2;
                        this.myPath = arc().innerRadius(this.innerRadius).outerRadius(radius);
                        _a = this;
                        return [4 /*yield*/, this.fetchData()];
                    case 1:
                        _a.data = _b.sent();
                        if (!this.data || this.data.length <= 0) {
                            resolve();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.drawPie(0, 0)];
                    case 2:
                        _b.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoPieChart.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prevNext(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoPieChart.prototype.prev = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prevNext(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoPieChart.prototype.prevNext = function (next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.animation) {
                            return [2 /*return*/];
                        }
                        if (!this.data || this.data.length <= 0) {
                            return [2 /*return*/];
                        }
                        if (!(next && this.pieDataIndex + 1 < this.data.length)) return [3 /*break*/, 2];
                        this.pieDataIndex++;
                        return [4 /*yield*/, this.drawPie(this.pieDataIndex, this.animationDuration)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(!next && this.pieDataIndex > 0)) return [3 /*break*/, 4];
                        this.pieDataIndex--;
                        return [4 /*yield*/, this.drawPie(this.pieDataIndex, this.animationDuration)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoPieChart.prototype.isBeginning = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.animation) {
                resolve(true);
                return;
            }
            resolve(_this.pieDataIndex === 0);
        });
    };
    DeckdeckgoPieChart.prototype.isEnd = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.animation) {
                resolve(true);
                return;
            }
            resolve(_this.pieDataIndex === _this.data.length - 1);
        });
    };
    DeckdeckgoPieChart.prototype.drawPie = function (index, animationDuration) {
        return __awaiter(this, void 0, void 0, function () {
            var pie;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createPieData(this.data[index])];
                    case 1:
                        pie = _a.sent();
                        return [4 /*yield*/, this.drawPieForData(pie, animationDuration)];
                    case 2:
                        _a.sent();
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.appendLabel(pie)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, animationDuration);
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoPieChart.prototype.drawPieForData = function (myPieData, animationDuration) {
        var _this = this;
        return new Promise(function (resolve) {
            var t = transition();
            var section = _this.svg.selectAll('path').data(myPieData);
            var colors = _this.getColors();
            section
                .enter()
                .append('path')
                .merge(section)
                .transition(t).duration(animationDuration)
                .attr('d', _this.myPath)
                .attr('fill', function () {
                return colors('' + Math.random());
            });
            section
                .exit()
                .remove();
            resolve();
        });
    };
    DeckdeckgoPieChart.prototype.createPieData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var myPie, result;
                        return __generator(this, function (_a) {
                            myPie = pie().value(function (d) {
                                return d.value;
                            }).sort(function (a, b) { return ascending$1(a.label, b.label); });
                            result = myPie(data.values);
                            resolve(result);
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    DeckdeckgoPieChart.prototype.appendLabel = function (myPieData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.svg.selectAll('.text-arc').remove();
            // Create a special arcs for the labels in order to always display them above the pie's slices
            var labelArcs = _this.svg.selectAll('.text-arc')
                .data(myPieData)
                .enter()
                .append('g')
                .attr('class', 'text-arc');
            var text = labelArcs.append('text')
                .attr('transform', function (d) {
                return 'translate(' + _this.myPath.centroid(d) + ')';
            })
                .attr('dy', '.35em')
                .style('text-anchor', 'middle');
            text.append('tspan')
                .attr('x', 0)
                .attr('y', '-0.7em')
                .style('font-weight', 'bold')
                .text(function (d) {
                return d.data.label ? d.data.label : '';
            });
            text.filter(function (d) { return (d.endAngle - d.startAngle) > 0.25; }).append('tspan')
                .attr('x', 0)
                .attr('y', '0.7em')
                .text(function (d) {
                return d.data.value + '%';
            });
            resolve();
        });
    };
    DeckdeckgoPieChart.prototype.getColors = function () {
        var colors = ordinal(schemePastel2);
        if (this.range && this.range.length > 0) {
            colors.range(this.range);
        }
        return colors;
    };
    DeckdeckgoPieChart.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var response, content, lines, results;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this.src) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, fetch(this.src)];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.text()];
                                case 2:
                                    content = _a.sent();
                                    if (!content) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    lines = content.split('\n');
                                    if (!lines || lines.length <= 0) {
                                        resolve([]);
                                        return [2 /*return*/];
                                    }
                                    results = [];
                                    lines.forEach(function (line) {
                                        var values = line.split(_this.separator);
                                        if (values && values.length >= 2) {
                                            var label = values[0];
                                            var pieData = {
                                                label: label,
                                                value: parseInt(values[1])
                                            };
                                            if (!isNaN(pieData.value)) {
                                                if (results.length <= 0) {
                                                    results.push({
                                                        values: []
                                                    });
                                                }
                                                results[0].values.push(pieData);
                                            }
                                            if (values.length > 2) {
                                                for (var i = 2; i < values.length; i++) {
                                                    var tmp = parseInt(values[i]);
                                                    if (!isNaN(tmp)) {
                                                        if (results.length < i) {
                                                            results.push({
                                                                values: []
                                                            });
                                                        }
                                                        var pieData_1 = {
                                                            label: label,
                                                            value: parseInt(values[i])
                                                        };
                                                        results[i - 1].values.push(pieData_1);
                                                    }
                                                }
                                            }
                                        }
                                    });
                                    resolve(results);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DeckdeckgoPieChart.prototype.render = function () {
        return Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", null);
    };
    Object.defineProperty(DeckdeckgoPieChart.prototype, "el", {
        get: function () { return Object(_chunk_c379be54_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoPieChart, "watchers", {
        get: function () {
            return {
                "src": ["redraw"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoPieChart, "style", {
        get: function () { return "text{fill:var(--deckgo-chart-text-color,#000);display:var(--deckgo-chart-text-display)}path{stroke:var(--deckgo-chart-path-stroke)}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoPieChart;
}());



/***/ })

}]);
//# sourceMappingURL=79.d712d2319f4617414964.js.map