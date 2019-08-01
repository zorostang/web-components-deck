(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/deckgo-highlight-code.entry.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/deckgo-highlight-code.entry.js ***!
  \************************************************************************************************/
/*! exports provided: deckgo_highlight_code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deckgo_highlight_code", function() { return DeckdeckgoHighlightCode; });
/* harmony import */ var _deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deckdeckgo-highlight-code-0be5086d.js */ "./node_modules/@deckdeckgo/highlight-code/dist/esm/legacy/deckdeckgo-highlight-code-0be5086d.js");
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var prism = createCommonjsModule(function (module) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = (typeof window !== 'undefined')
        ? window // if in browser
        : ((typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
            ? self // if in worker
            : {} // if in node js
        );
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */
    var Prism = (function (_self) {
        // Private helper vars
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;
        var uniqueId = 0;
        var _ = {
            manual: _self.Prism && _self.Prism.manual,
            disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
            util: {
                encode: function (tokens) {
                    if (tokens instanceof Token) {
                        return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
                    }
                    else if (Array.isArray(tokens)) {
                        return tokens.map(_.util.encode);
                    }
                    else {
                        return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    }
                },
                type: function (o) {
                    return Object.prototype.toString.call(o).slice(8, -1);
                },
                objId: function (obj) {
                    if (!obj['__id']) {
                        Object.defineProperty(obj, '__id', { value: ++uniqueId });
                    }
                    return obj['__id'];
                },
                // Deep clone a language definition (e.g. to extend it)
                clone: function deepClone(o, visited) {
                    var clone, id, type = _.util.type(o);
                    visited = visited || {};
                    switch (type) {
                        case 'Object':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = {};
                            visited[id] = clone;
                            for (var key in o) {
                                if (o.hasOwnProperty(key)) {
                                    clone[key] = deepClone(o[key], visited);
                                }
                            }
                            return clone;
                        case 'Array':
                            id = _.util.objId(o);
                            if (visited[id]) {
                                return visited[id];
                            }
                            clone = [];
                            visited[id] = clone;
                            o.forEach(function (v, i) {
                                clone[i] = deepClone(v, visited);
                            });
                            return clone;
                        default:
                            return o;
                    }
                }
            },
            languages: {
                extend: function (id, redef) {
                    var lang = _.util.clone(_.languages[id]);
                    for (var key in redef) {
                        lang[key] = redef[key];
                    }
                    return lang;
                },
                /**
                 * Insert a token before another token in a language literal
                 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
                 * we cannot just provide an object, we need an object and a key.
                 * @param inside The key (or language id) of the parent
                 * @param before The key to insert before.
                 * @param insert Object with the key/value pairs to insert
                 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
                 */
                insertBefore: function (inside, before, insert, root) {
                    root = root || _.languages;
                    var grammar = root[inside];
                    var ret = {};
                    for (var token in grammar) {
                        if (grammar.hasOwnProperty(token)) {
                            if (token == before) {
                                for (var newToken in insert) {
                                    if (insert.hasOwnProperty(newToken)) {
                                        ret[newToken] = insert[newToken];
                                    }
                                }
                            }
                            // Do not insert token which also occur in insert. See #1525
                            if (!insert.hasOwnProperty(token)) {
                                ret[token] = grammar[token];
                            }
                        }
                    }
                    var old = root[inside];
                    root[inside] = ret;
                    // Update references in other language definitions
                    _.languages.DFS(_.languages, function (key, value) {
                        if (value === old && key != inside) {
                            this[key] = ret;
                        }
                    });
                    return ret;
                },
                // Traverse a language definition with Depth First Search
                DFS: function DFS(o, callback, type, visited) {
                    visited = visited || {};
                    var objId = _.util.objId;
                    for (var i in o) {
                        if (o.hasOwnProperty(i)) {
                            callback.call(o, i, o[i], type || i);
                            var property = o[i], propertyType = _.util.type(property);
                            if (propertyType === 'Object' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, null, visited);
                            }
                            else if (propertyType === 'Array' && !visited[objId(property)]) {
                                visited[objId(property)] = true;
                                DFS(property, callback, i, visited);
                            }
                        }
                    }
                }
            },
            plugins: {},
            highlightAll: function (async, callback) {
                _.highlightAllUnder(document, async, callback);
            },
            highlightAllUnder: function (container, async, callback) {
                var env = {
                    callback: callback,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                _.hooks.run("before-highlightall", env);
                var elements = env.elements || container.querySelectorAll(env.selector);
                for (var i = 0, element; element = elements[i++];) {
                    _.highlightElement(element, async === true, env.callback);
                }
            },
            highlightElement: function (element, async, callback) {
                // Find language
                var language, grammar, parent = element;
                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }
                if (parent) {
                    language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
                    grammar = _.languages[language];
                }
                // Set language on the element, if not present
                element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                if (element.parentNode) {
                    // Set language on the parent, for styling
                    parent = element.parentNode;
                    if (/pre/i.test(parent.nodeName)) {
                        parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                    }
                }
                var code = element.textContent;
                var env = {
                    element: element,
                    language: language,
                    grammar: grammar,
                    code: code
                };
                var insertHighlightedCode = function (highlightedCode) {
                    env.highlightedCode = highlightedCode;
                    _.hooks.run('before-insert', env);
                    env.element.innerHTML = env.highlightedCode;
                    _.hooks.run('after-highlight', env);
                    _.hooks.run('complete', env);
                    callback && callback.call(env.element);
                };
                _.hooks.run('before-sanity-check', env);
                if (!env.code) {
                    _.hooks.run('complete', env);
                    return;
                }
                _.hooks.run('before-highlight', env);
                if (!env.grammar) {
                    insertHighlightedCode(_.util.encode(env.code));
                    return;
                }
                if (async && _self.Worker) {
                    var worker = new Worker(_.filename);
                    worker.onmessage = function (evt) {
                        insertHighlightedCode(evt.data);
                    };
                    worker.postMessage(JSON.stringify({
                        language: env.language,
                        code: env.code,
                        immediateClose: true
                    }));
                }
                else {
                    insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
                }
            },
            highlight: function (text, grammar, language) {
                var env = {
                    code: text,
                    grammar: grammar,
                    language: language
                };
                _.hooks.run('before-tokenize', env);
                env.tokens = _.tokenize(env.code, env.grammar);
                _.hooks.run('after-tokenize', env);
                return Token.stringify(_.util.encode(env.tokens), env.language);
            },
            matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
                for (var token in grammar) {
                    if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                        continue;
                    }
                    if (token == target) {
                        return;
                    }
                    var patterns = grammar[token];
                    patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
                    for (var j = 0; j < patterns.length; ++j) {
                        var pattern = patterns[j], inside = pattern.inside, lookbehind = !!pattern.lookbehind, greedy = !!pattern.greedy, lookbehindLength = 0, alias = pattern.alias;
                        if (greedy && !pattern.pattern.global) {
                            // Without the global flag, lastIndex won't work
                            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
                            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
                        }
                        pattern = pattern.pattern || pattern;
                        // Don’t cache length as it changes during the loop
                        for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
                            var str = strarr[i];
                            if (strarr.length > text.length) {
                                // Something went terribly wrong, ABORT, ABORT!
                                return;
                            }
                            if (str instanceof Token) {
                                continue;
                            }
                            if (greedy && i != strarr.length - 1) {
                                pattern.lastIndex = pos;
                                var match = pattern.exec(text);
                                if (!match) {
                                    break;
                                }
                                var from = match.index + (lookbehind ? match[1].length : 0), to = match.index + match[0].length, k = i, p = pos;
                                for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
                                    p += strarr[k].length;
                                    // Move the index i to the element in strarr that is closest to from
                                    if (from >= p) {
                                        ++i;
                                        pos = p;
                                    }
                                }
                                // If strarr[i] is a Token, then the match starts inside another Token, which is invalid
                                if (strarr[i] instanceof Token) {
                                    continue;
                                }
                                // Number of tokens to delete and replace with the new match
                                delNum = k - i;
                                str = text.slice(pos, p);
                                match.index -= pos;
                            }
                            else {
                                pattern.lastIndex = 0;
                                var match = pattern.exec(str), delNum = 1;
                            }
                            if (!match) {
                                if (oneshot) {
                                    break;
                                }
                                continue;
                            }
                            if (lookbehind) {
                                lookbehindLength = match[1] ? match[1].length : 0;
                            }
                            var from = match.index + lookbehindLength, match = match[0].slice(lookbehindLength), to = from + match.length, before = str.slice(0, from), after = str.slice(to);
                            var args = [i, delNum];
                            if (before) {
                                ++i;
                                pos += before.length;
                                args.push(before);
                            }
                            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                            args.push(wrapped);
                            if (after) {
                                args.push(after);
                            }
                            Array.prototype.splice.apply(strarr, args);
                            if (delNum != 1)
                                _.matchGrammar(text, strarr, grammar, i, pos, true, token);
                            if (oneshot)
                                break;
                        }
                    }
                }
            },
            tokenize: function (text, grammar) {
                var strarr = [text];
                var rest = grammar.rest;
                if (rest) {
                    for (var token in rest) {
                        grammar[token] = rest[token];
                    }
                    delete grammar.rest;
                }
                _.matchGrammar(text, strarr, grammar, 0, 0, false);
                return strarr;
            },
            hooks: {
                all: {},
                add: function (name, callback) {
                    var hooks = _.hooks.all;
                    hooks[name] = hooks[name] || [];
                    hooks[name].push(callback);
                },
                run: function (name, env) {
                    var callbacks = _.hooks.all[name];
                    if (!callbacks || !callbacks.length) {
                        return;
                    }
                    for (var i = 0, callback; callback = callbacks[i++];) {
                        callback(env);
                    }
                }
            },
            Token: Token
        };
        _self.Prism = _;
        function Token(type, content, alias, matchedStr, greedy) {
            this.type = type;
            this.content = content;
            this.alias = alias;
            // Copy of the full string this token was created from
            this.length = (matchedStr || "").length | 0;
            this.greedy = !!greedy;
        }
        Token.stringify = function (o, language, parent) {
            if (typeof o == 'string') {
                return o;
            }
            if (Array.isArray(o)) {
                return o.map(function (element) {
                    return Token.stringify(element, language, o);
                }).join('');
            }
            var env = {
                type: o.type,
                content: Token.stringify(o.content, language, parent),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language: language,
                parent: parent
            };
            if (o.alias) {
                var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
                Array.prototype.push.apply(env.classes, aliases);
            }
            _.hooks.run('wrap', env);
            var attributes = Object.keys(env.attributes).map(function (name) {
                return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
            }).join(' ');
            return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
        };
        if (!_self.document) {
            if (!_self.addEventListener) {
                // in Node.js
                return _;
            }
            if (!_.disableWorkerMessageHandler) {
                // In worker
                _self.addEventListener('message', function (evt) {
                    var message = JSON.parse(evt.data), lang = message.language, code = message.code, immediateClose = message.immediateClose;
                    _self.postMessage(_.highlight(code, _.languages[lang], lang));
                    if (immediateClose) {
                        _self.close();
                    }
                }, false);
            }
            return _;
        }
        //Get current script and highlight
        var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        if (script) {
            _.filename = script.src;
            if (!_.manual && !script.hasAttribute('data-manual')) {
                if (document.readyState !== "loading") {
                    if (window.requestAnimationFrame) {
                        window.requestAnimationFrame(_.highlightAll);
                    }
                    else {
                        window.setTimeout(_.highlightAll, 16);
                    }
                }
                else {
                    document.addEventListener('DOMContentLoaded', _.highlightAll);
                }
            }
        }
        return _;
    })(_self);
    if (module.exports) {
        module.exports = Prism;
    }
    // hack for components to work correctly in node.js
    if (typeof commonjsGlobal !== 'undefined') {
        commonjsGlobal.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */
    Prism.languages.markup = {
        'comment': /<!--[\s\S]*?-->/,
        'prolog': /<\?[\s\S]+?\?>/,
        'doctype': /<!DOCTYPE[\s\S]+?>/i,
        'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
        'tag': {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
            greedy: true,
            inside: {
                'tag': {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        'punctuation': /^<\/?/,
                        'namespace': /^[^\s>\/:]+:/
                    }
                },
                'attr-value': {
                    pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                    inside: {
                        'punctuation': [
                            /^=/,
                            {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: true
                            }
                        ]
                    }
                },
                'punctuation': /\/?>/,
                'attr-name': {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        'namespace': /^[^\s>\/:]+:/
                    }
                }
            }
        },
        'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
        Prism.languages.markup['entity'];
    // Plugin to make entity title show the real entity, idea by Roman Komarov
    Prism.hooks.add('wrap', function (env) {
        if (env.type === 'entity') {
            env.attributes['title'] = env.content.replace(/&amp;/, '&');
        }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
            var includedCdataInside = {};
            includedCdataInside['language-' + lang] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: true,
                inside: Prism.languages[lang]
            };
            includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
            var inside = {
                'included-cdata': {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: includedCdataInside
                }
            };
            inside['language-' + lang] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[lang]
            };
            var def = {};
            def[tagName] = {
                pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
                lookbehind: true,
                greedy: true,
                inside: inside
            };
            Prism.languages.insertBefore('markup', 'cdata', def);
        }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */
    (function (Prism) {
        var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
        Prism.languages.css = {
            'comment': /\/\*[\s\S]*?\*\//,
            'atrule': {
                pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
                inside: {
                    'rule': /@[\w-]+/
                    // See rest below
                }
            },
            'url': RegExp('url\\((?:' + string.source + '|.*?)\\)', 'i'),
            'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
            'string': {
                pattern: string,
                greedy: true
            },
            'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            'important': /!important\b/i,
            'function': /[-a-z0-9]+(?=\()/i,
            'punctuation': /[(){};:,]/
        };
        Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
        var markup = Prism.languages.markup;
        if (markup) {
            markup.tag.addInlined('style', 'css');
            Prism.languages.insertBefore('inside', 'attr-value', {
                'style-attr': {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        'attr-name': {
                            pattern: /^\s*style/i,
                            inside: markup.tag.inside
                        },
                        'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                        'attr-value': {
                            pattern: /.+/i,
                            inside: Prism.languages.css
                        }
                    },
                    alias: 'language-css'
                }
            }, markup.tag);
        }
    }(Prism));
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */
    Prism.languages.clike = {
        'comment': [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: true
            },
            {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: true,
                greedy: true
            }
        ],
        'string': {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        'class-name': {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: true,
            inside: {
                punctuation: /[.\\]/
            }
        },
        'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        'boolean': /\b(?:true|false)\b/,
        'function': /\w+(?=\()/,
        'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */
    Prism.languages.javascript = Prism.languages.extend('clike', {
        'class-name': [
            Prism.languages.clike['class-name'],
            {
                pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                lookbehind: true
            }
        ],
        'keyword': [
            {
                pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                lookbehind: true
            },
            {
                pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: true
            },
        ],
        'number': /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        'function': /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
        'regex': {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: true,
            greedy: true
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        'function-variable': {
            pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: 'function'
        },
        'parameter': [
            {
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: Prism.languages.javascript
            },
            {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            },
            {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: true,
                inside: Prism.languages.javascript
            }
        ],
        'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
        'template-string': {
            pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
            greedy: true,
            inside: {
                'interpolation': {
                    pattern: /\${[^}]+}/,
                    inside: {
                        'interpolation-punctuation': {
                            pattern: /^\${|}$/,
                            alias: 'punctuation'
                        },
                        rest: Prism.languages.javascript
                    }
                },
                'string': /[\s\S]+/
            }
        }
    });
    if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined('script', 'javascript');
    }
    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */
    (function () {
        if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
            return;
        }
        /**
         * @param {Element} [container=document]
         */
        self.Prism.fileHighlight = function (container) {
            container = container || document;
            var Extensions = {
                'js': 'javascript',
                'py': 'python',
                'rb': 'ruby',
                'ps1': 'powershell',
                'psm1': 'powershell',
                'sh': 'bash',
                'bat': 'batch',
                'h': 'c',
                'tex': 'latex'
            };
            Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
                // ignore if already loaded
                if (pre.hasAttribute('data-src-loaded')) {
                    return;
                }
                // load current
                var src = pre.getAttribute('data-src');
                var language, parent = pre;
                var lang = /\blang(?:uage)?-([\w-]+)\b/i;
                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }
                if (parent) {
                    language = (pre.className.match(lang) || [, ''])[1];
                }
                if (!language) {
                    var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
                    language = Extensions[extension] || extension;
                }
                var code = document.createElement('code');
                code.className = 'language-' + language;
                pre.textContent = '';
                code.textContent = 'Loading…';
                pre.appendChild(code);
                var xhr = new XMLHttpRequest();
                xhr.open('GET', src, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status < 400 && xhr.responseText) {
                            code.textContent = xhr.responseText;
                            Prism.highlightElement(code);
                            // mark as loaded
                            pre.setAttribute('data-src-loaded', '');
                        }
                        else if (xhr.status >= 400) {
                            code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
                        }
                        else {
                            code.textContent = '✖ Error: File does not exist or is empty';
                        }
                    }
                };
                xhr.send(null);
            });
            if (Prism.plugins.toolbar) {
                Prism.plugins.toolbar.registerButton('download-file', function (env) {
                    var pre = env.element.parentNode;
                    if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
                        return;
                    }
                    var src = pre.getAttribute('data-src');
                    var a = document.createElement('a');
                    a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
                    a.setAttribute('download', '');
                    a.href = src;
                    return a;
                });
            }
        };
        document.addEventListener('DOMContentLoaded', function () {
            // execute inside handler, for dropping Event as argument
            self.Prism.fileHighlight();
        });
    })();
});
var DeckdeckgoHighlightCode = /** @class */ (function () {
    function DeckdeckgoHighlightCode(hostRef) {
        var _this = this;
        Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.anchor = '// DeckDeckGo';
        this.anchorZoom = '// DeckDeckGoZoom';
        this.hideAnchor = true;
        this.language = 'javascript';
        this.editable = false;
        this.editing = false;
        this.anchorOffsetTop = 0;
        this.catchNewLine = function ($event) { return __awaiter(_this, void 0, void 0, function () {
            var selection, charCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!($event && $event.key === 'Enter')) return [3 /*break*/, 2];
                        $event.preventDefault();
                        return [4 /*yield*/, this.getSelection()];
                    case 1:
                        selection = _a.sent();
                        if (selection && selection.focusNode && selection.focusNode.textContent && selection.focusOffset > 0) {
                            charCode = selection.focusNode.textContent.charCodeAt(window.getSelection().focusOffset);
                            document.execCommand('insertHTML', false, charCode === 10 || charCode === 13 ? '\n' : '\n\n');
                        }
                        else {
                            document.execCommand('insertHTML', false, '\n\n');
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.applyCode = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stopEditing()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.parseSlottedCode()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.prismLanguageLoaded = Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "prismLanguageLoaded", 7);
        this.codeDidChange = Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "codeDidChange", 7);
    }
    DeckdeckgoHighlightCode.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var languageWasLoaded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.languageDidLoad()];
                    case 1:
                        languageWasLoaded = _a.sent();
                        return [4 /*yield*/, this.loadLanguage()];
                    case 2:
                        _a.sent();
                        if (!languageWasLoaded) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoHighlightCode.prototype.languageLoaded = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!$event || !$event.detail) {
                            return [2 /*return*/];
                        }
                        if (!(this.language && this.language !== 'javascript' && $event.detail === this.language)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoHighlightCode.prototype.fetchOrParse = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.src) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchCode()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.parseSlottedCode()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoHighlightCode.prototype.languageDidLoad = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!document || !_this.language || _this.language === '') {
                resolve(false);
                return;
            }
            if (_this.language === 'javascript') {
                resolve(true);
                return;
            }
            var scripts = document.querySelector('[deckdeckgo-prism-loaded=\'' + _this.language + '\']');
            if (scripts) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    };
    DeckdeckgoHighlightCode.prototype.loadLanguage = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var scripts, script;
            var _this = this;
            return __generator(this, function (_a) {
                if (!document || !this.language || this.language === '' || this.language === 'javascript') {
                    resolve();
                    return [2 /*return*/];
                }
                scripts = document.querySelector('[deckdeckgo-prism=\'' + this.language + '\']');
                if (scripts) {
                    resolve();
                    return [2 /*return*/];
                }
                script = document.createElement('script');
                script.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        script.setAttribute('deckdeckgo-prism-loaded', this.language);
                        this.prismLanguageLoaded.emit(this.language);
                        return [2 /*return*/];
                    });
                }); };
                script.src = 'https://unpkg.com/prismjs@latest/components/prism-' + this.language + '.js';
                script.setAttribute('deckdeckgo-prism', this.language);
                script.defer = true;
                document.head.appendChild(script);
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    DeckdeckgoHighlightCode.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.language || this.language === '') {
                            resolve();
                            return [2 /*return*/];
                        }
                        if (!(this.language === 'javascript')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                    case 2:
                        if (!document.querySelector('[deckdeckgo-prism-loaded=\'' + this.language + '\']')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fetchOrParse()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.loadLanguage()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoHighlightCode.prototype.parseSlottedCode = function () {
        var code = this.el.querySelector('[slot=\'code\']');
        if (code) {
            return this.parseCode(code.innerText ? code.innerText.trim() : code.innerText);
        }
        else {
            return new Promise(function (resolve) {
                resolve();
            });
        }
    };
    DeckdeckgoHighlightCode.prototype.fetchCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fetchedCode, response, e_1, container;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.src) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch(this.src)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 3:
                        fetchedCode = _a.sent();
                        return [4 /*yield*/, this.parseCode(fetchedCode)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        container = this.el.shadowRoot.querySelector('div.deckgo-highlight-code-container');
                        if (container && fetchedCode) {
                            container.children[0].innerHTML = fetchedCode;
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DeckdeckgoHighlightCode.prototype.parseCode = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var container, highlightedCode, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = this.el.shadowRoot.querySelector('div.deckgo-highlight-code-container');
                        if (!container) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        highlightedCode = prism.highlight(code, prism.languages[this.language], this.language);
                        container.children[0].innerHTML = highlightedCode;
                        return [4 /*yield*/, this.addAnchors()];
                    case 2:
                        _a.sent();
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.addHighlight()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 0);
                        resolve();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoHighlightCode.prototype.addAnchors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var elements = _this.el.shadowRoot.querySelectorAll('span.comment');
            if (elements) {
                var elementsArray = Array.from(elements);
                var anchors = elementsArray.filter(function (element) {
                    return _this.hasLineAnchor(element.innerHTML);
                });
                if (anchors) {
                    anchors.forEach(function (anchor) {
                        anchor.classList.add('deckgo-highlight-code-anchor');
                        if (_this.hideAnchor) {
                            anchor.classList.add('deckgo-highlight-code-anchor-hidden');
                        }
                    });
                }
            }
            resolve();
        });
    };
    DeckdeckgoHighlightCode.prototype.hasLineAnchor = function (line) {
        return line && this.anchor &&
            line.indexOf('@Prop') === -1 &&
            line.split(' ').join('').indexOf(this.anchor.split(' ').join('')) > -1;
    };
    DeckdeckgoHighlightCode.prototype.addHighlight = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var rows_1, containerCode, elements, rowIndex_1, lastOffsetTop_1, offsetHeight_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.highlightLines && this.highlightLines.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findRowsToHighlight()];
                    case 1:
                        rows_1 = _a.sent();
                        if (rows_1 && rows_1.length > 0) {
                            containerCode = this.el.shadowRoot.querySelector('code');
                            if (containerCode && containerCode.hasChildNodes()) {
                                elements = Array.prototype.slice.call(containerCode.childNodes);
                                rowIndex_1 = -1;
                                lastOffsetTop_1 = -1;
                                offsetHeight_1 = -1;
                                elements.forEach(function (element) {
                                    var editElement;
                                    // We need to convert text entries to an element in order to be able to style it
                                    if (element.nodeName === '#text') {
                                        var span = document.createElement('span');
                                        if (element.previousElementSibling) {
                                            element.previousElementSibling.insertAdjacentElement('afterend', span);
                                        }
                                        else {
                                            element.parentNode.prepend(span);
                                        }
                                        span.appendChild(element);
                                        editElement = span;
                                    }
                                    else {
                                        editElement = element;
                                    }
                                    // We try to find the row index with the offset of the element
                                    rowIndex_1 = editElement.offsetTop > lastOffsetTop_1 ? (rowIndex_1 + 1) : rowIndex_1;
                                    lastOffsetTop_1 = editElement.offsetTop;
                                    // For some reason, some converted text element are displayed on two lines, that's why we should consider the 2nd one as index
                                    offsetHeight_1 = offsetHeight_1 === -1 || offsetHeight_1 > editElement.offsetHeight ? editElement.offsetHeight : offsetHeight_1;
                                    var rowsIndexToCompare = editElement.offsetHeight > offsetHeight_1 ? (rowIndex_1 + 1) : rowIndex_1;
                                    if (rows_1.indexOf(rowsIndexToCompare) > -1) {
                                        editElement.classList.add('deckgo-highlight-code-line');
                                    }
                                });
                            }
                        }
                        _a.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DeckdeckgoHighlightCode.prototype.findRowsToHighlight = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var results = [];
            var rows = _this.highlightLines.split(' ');
            if (rows && rows.length > 0) {
                rows.forEach(function (row) {
                    var index = row.split(',');
                    if (index && index.length >= 1) {
                        var start = parseInt(index[0], 0);
                        var end = parseInt(index[1], 0);
                        for (var i = start; i <= end; i++) {
                            results.push(i);
                        }
                    }
                });
            }
            resolve(results);
        });
    };
    DeckdeckgoHighlightCode.prototype.findNextAnchor = function (enter) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var elements, elementsArray, anchor, elementCode;
            var _this = this;
            return __generator(this, function (_a) {
                elements = this.el.shadowRoot.querySelectorAll('span.deckgo-highlight-code-anchor');
                if (elements) {
                    elementsArray = enter ? Array.from(elements) : Array.from(elements).reverse();
                    anchor = elementsArray.find(function (element) {
                        return enter ? element.offsetTop > _this.anchorOffsetTop : element.offsetTop < _this.anchorOffsetTop;
                    });
                    if (anchor) {
                        this.anchorOffsetTop = anchor.offsetTop;
                        resolve({
                            offsetTop: anchor.offsetTop,
                            hasLineZoom: this.hasLineZoom(anchor.textContent)
                        });
                    }
                    else if (!enter) {
                        elementCode = this.el.shadowRoot.querySelector('code');
                        if (elementCode && elementCode.firstElementChild) {
                            this.anchorOffsetTop = 0;
                            resolve({
                                offsetTop: 0,
                                hasLineZoom: false
                            });
                        }
                        else {
                            resolve(null);
                        }
                    }
                    else {
                        resolve(null);
                    }
                }
                else {
                    resolve(null);
                }
                return [2 /*return*/];
            });
        }); });
    };
    DeckdeckgoHighlightCode.prototype.zoomCode = function (zoom) {
        var _this = this;
        return new Promise(function (resolve) {
            var container = _this.el.shadowRoot.querySelector('div.deckgo-highlight-code-container');
            if (container) {
                container.style.setProperty('--deckgo-highlight-code-zoom', zoom ? '1.3' : '1');
            }
            resolve();
        });
    };
    DeckdeckgoHighlightCode.prototype.hasLineZoom = function (line) {
        return line && this.anchorZoom &&
            line.indexOf('@Prop') === -1 &&
            line.split(' ').join('').indexOf(this.anchorZoom.split(' ').join('')) > -1;
    };
    DeckdeckgoHighlightCode.prototype.edit = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.editable) {
                resolve();
                return;
            }
            _this.editing = true;
            var slottedCode = _this.el.querySelector('[slot=\'code\']');
            if (slottedCode) {
                setTimeout(function () {
                    slottedCode.setAttribute('contentEditable', 'true');
                    slottedCode.addEventListener('blur', _this.applyCode, { once: true });
                    slottedCode.addEventListener('keydown', _this.catchNewLine);
                    slottedCode.focus();
                }, 100);
            }
            resolve();
        });
    };
    DeckdeckgoHighlightCode.prototype.getSelection = function () {
        return new Promise(function (resolve) {
            var selectedSelection = null;
            if (window && window.getSelection) {
                selectedSelection = window.getSelection();
            }
            else if (document && document.getSelection) {
                selectedSelection = document.getSelection();
            }
            else if (document && document.selection) {
                selectedSelection = document.selection.createRange().text;
            }
            resolve(selectedSelection);
        });
    };
    DeckdeckgoHighlightCode.prototype.stopEditing = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.editing = false;
            var slottedCode = _this.el.querySelector('[slot=\'code\']');
            if (slottedCode) {
                slottedCode.removeAttribute('contentEditable');
                if (slottedCode.innerHTML) {
                    slottedCode.innerHTML = slottedCode.innerHTML.trim();
                }
                _this.codeDidChange.emit(_this.el);
            }
            resolve();
        });
    };
    DeckdeckgoHighlightCode.prototype.render = function () {
        var _this = this;
        return (Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["g"], { class: { 'deckgo-highlight-code-edit': this.editing } }, Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "deckgo-highlight-code-container", onMouseDown: function () { return _this.edit(); }, onTouchStart: function () { return _this.edit(); } }, Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["f"])("code", null), Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["f"])("slot", { name: "code" }))));
    };
    Object.defineProperty(DeckdeckgoHighlightCode.prototype, "el", {
        get: function () { return Object(_deckdeckgo_highlight_code_0be5086d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoHighlightCode, "watchers", {
        get: function () {
            return {
                "language": ["loadLanguage"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeckdeckgoHighlightCode, "style", {
        get: function () { return "code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}\@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}:host ::slotted([slot=code]){display:none}:host(.deckgo-highlight-code-edit) ::slotted([slot=code]){display:block;white-space:pre-wrap}:host(.deckgo-highlight-code-edit) code{display:none}:host([editable]) code:empty:not(:focus):after{content:var(--deckgo-highlight-code-empty-text,\"Click to add your code\")}div.deckgo-highlight-code-container{color:var(--deckgo-highlight-code-color,inherit);background:var(--deckgo-highlight-code-background);padding:var(--deckgo-highlight-code-padding);border-radius:var(--deckgo-highlight-code-border-radius);margin:var(--deckgo-highlight-code-margin,0 0 64px);-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform:scale(var(--deckgo-highlight-code-zoom,1));transform:scale(var(--deckgo-highlight-code-zoom,1));direction:var(--deckgo-highlight-code-direction,ltr);text-align:var(--deckgo-highlight-code-text-align,start)}div.deckgo-highlight-code-container code{overflow-y:var(--deckgo-highlight-code-scroll,scroll);white-space:pre-wrap;font-size:var(--deckgo-highlight-code-font-size);font-family:var(--deckgo-highlight-code-font-family,monospace);display:var(--deckgo-highlight-code-display,block)}div.deckgo-highlight-code-container code div:empty{min-height:1rem}div.deckgo-highlight-code-container code span.deckgo-highlight-code-anchor-hidden{visibility:hidden}div.deckgo-highlight-code-container code span.deckgo-highlight-code-line{background:var(--deckgo-highlight-code-line-background,#3880ff);padding:var(--deckgo-highlight-code-line-padding);border-top:var(--deckgo-highlight-code-line-border-top);border-bottom:var(--deckgo-highlight-code-line-border-bottom)}div.deckgo-highlight-code-container code .language-css .token.string:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .style .token.string:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.entity:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.operator:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.url:not(.deckgo-highlight-code-line){background:inherit}div.deckgo-highlight-code-container code .token.cdata,div.deckgo-highlight-code-container code .token.comment,div.deckgo-highlight-code-container code .token.doctype,div.deckgo-highlight-code-container code .token.prolog{color:var(--deckgo-highlight-code-token-comment,#708090)}div.deckgo-highlight-code-container code .token.punctuation{color:var(--deckgo-highlight-code-token-punctuation,#999)}div.deckgo-highlight-code-container code .token.boolean,div.deckgo-highlight-code-container code .token.constant,div.deckgo-highlight-code-container code .token.deleted,div.deckgo-highlight-code-container code .token.number,div.deckgo-highlight-code-container code .token.property,div.deckgo-highlight-code-container code .token.symbol,div.deckgo-highlight-code-container code .token.tag{color:var(--deckgo-highlight-code-token-property,#905)}div.deckgo-highlight-code-container code .token.attr-name,div.deckgo-highlight-code-container code .token.builtin,div.deckgo-highlight-code-container code .token.char,div.deckgo-highlight-code-container code .token.inserted,div.deckgo-highlight-code-container code .token.selector,div.deckgo-highlight-code-container code .token.string{color:var(--deckgo-highlight-code-token-selector,#690)}div.deckgo-highlight-code-container code .language-css .token.string,div.deckgo-highlight-code-container code .style .token.string,div.deckgo-highlight-code-container code .token.entity,div.deckgo-highlight-code-container code .token.operator,div.deckgo-highlight-code-container code .token.url{color:var(--deckgo-highlight-code-token-operator,#9a6e3a)}div.deckgo-highlight-code-container code .token.atrule,div.deckgo-highlight-code-container code .token.attr-value,div.deckgo-highlight-code-container code .token.keyword{color:var(--deckgo-highlight-code-token-atrule,#07a)}div.deckgo-highlight-code-container code .token.class-name,div.deckgo-highlight-code-container code .token.function{color:var(--deckgo-highlight-code-token-function,#dd4a68)}div.deckgo-highlight-code-container code .token.important,div.deckgo-highlight-code-container code .token.regex,div.deckgo-highlight-code-container code .token.variable{color:var(--deckgo-highlight-code-token-regex,#e90)}"; },
        enumerable: true,
        configurable: true
    });
    return DeckdeckgoHighlightCode;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=95.7b6f9f9b3c83dd85719f.js.map