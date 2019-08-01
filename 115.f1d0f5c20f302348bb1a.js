(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(t,e,r){"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
function o(t,e,r){return(new n).shimCssText(t,e,e+"-h",e+"-s",r)}r.r(e),r.d(e,"ShadowCss",function(){return n}),r.d(e,"scopeCss",function(){return o});var n=function(){function t(){this.strictStyling=!0}return t.prototype.shimCssText=function(t,e,r,o,n){void 0===r&&(r=""),void 0===o&&(o=""),void 0===n&&(n=!1);var s=t.match(w)||[];t=function(t){return t.replace(y,"")}(t);var c=[];if(n){var i=function(t){var e="/*!@___"+c.length+"___*/",r="/*!@"+t.selector+"*/";return c.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=k(t,function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=k(t.content,i),t):t})}var p=this._scopeCssText(t,e,r,o,n);return t=[p].concat(s).join("\n"),n&&c.forEach(function(e){var r=e.placeholder,o=e.comment;t=t.replace(r,o)}),t},t.prototype._scopeCssText=function(t,e,r,o,n){return t=this._insertPolyfillHostInCssText(t),t=this._convertColonHost(t),t=this._convertColonHostContext(t),t=this._convertColonSlotted(t,o),t=this._convertShadowDOMSelectors(t),e&&(t=this._scopeSelectors(t,e,r,o,n)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()},t.prototype._convertColonHost=function(t){return this._convertColonRule(t,a,this._colonHostPartReplacer)},t.prototype._convertColonSlotted=function(t,e){var r=h;return t.replace(r,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){var o=t[2].trim(),n=t[3],s="."+e+" > "+o+n;return s}return f+t[3]})},t.prototype._convertColonHostContext=function(t){return this._convertColonRule(t,u,this._colonHostContextPartReplacer)},t.prototype._convertColonRule=function(t,e,r){return t.replace(e,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var o=t[2].split(","),n=[],s=0;s<o.length;s++){var c=o[s].trim();if(!c)break;n.push(r(f,c,t[3]))}return n.join(",")}return f+t[3]})},t.prototype._colonHostContextPartReplacer=function(t,e,r){return e.indexOf(c)>-1?this._colonHostPartReplacer(t,e,r):t+e+r+", "+e+" "+t+r},t.prototype._colonHostPartReplacer=function(t,e,r){return t+e.replace(c,"")+r},t.prototype._convertShadowDOMSelectors=function(t){return d.reduce(function(t,e){return t.replace(e," ")},t)},t.prototype._scopeSelectors=function(t,e,r,o,n){var s=this;return k(t,function(t){var c=t.selector,i=t.content;return"@"!==t.selector[0]?c=s._scopeSelector(t.selector,e,r,o,s.strictStyling):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(i=s._scopeSelectors(t.content,e,r,o,n)),c=c.replace(/\s{2,}/g," ").trim(),new W(c,i)})},t.prototype._scopeSelector=function(t,e,r,o,n){var s=this;return t.split(",").map(function(t){return o&&t.indexOf("."+o)>-1?t.trim():s._selectorNeedsScoping(t,e)?n?s._applyStrictSelectorScope(t,e,r).trim():s._applySelectorScope(t,e,r).trim():t.trim()}).join(", ")},t.prototype._selectorNeedsScoping=function(t,e){return!this._makeScopeMatcher(e).test(t)},t.prototype._makeScopeMatcher=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")"+v,"m")},t.prototype._applySelectorScope=function(t,e,r){return this._applySimpleSelectorScope(t,e,r)},t.prototype._applySimpleSelectorScope=function(t,e,r){if(g.lastIndex=0,g.test(t)){var o=this.strictStyling?"."+r:e;return t.replace(_,function(t,e){return e.replace(/([^:]*)(:*)(.*)/,function(t,e,r,n){return e+o+r+n})}).replace(g,o+" ")}return e+" "+t},t.prototype._applyStrictSelectorScope=function(t,e,r){for(var o,n=this,c="."+(e=e.replace(/\[is=([^\]]*)\]/g,function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]})),i=function(t){var o=t.trim();if(!o)return"";if(t.indexOf(f)>-1)o=n._applySimpleSelectorScope(t,e,r);else{var s=t.replace(g,"");if(s.length>0){var i=s.match(/([^:]*)(:*)(.*)/);i&&(o=i[1]+c+i[2]+i[3])}}return o},p=new s(t),l="",a=0,u=/( |>|\+|~(?!=))\s*/g,h=!((t=p.content()).indexOf(f)>-1);null!==(o=u.exec(t));){var _=o[1],d=t.slice(a,o.index).trim();l+=((h=h||d.indexOf(f)>-1)?i(d):d)+" "+_+" ",a=u.lastIndex}var v=t.substring(a);return l+=(h=h||v.indexOf(f)>-1)?i(v):v,p.restore(l)},t.prototype._insertPolyfillHostInCssText=function(t){return t=t.replace(x,p).replace(S,c).replace(m,i)},t}(),s=function(){function t(t){var e=this;this.placeholders=[],this.index=0,t=t.replace(/(\[[^\]]*\])/g,function(t,r){var o="__ph-"+e.index+"__";return e.placeholders.push(r),e.index++,o}),this._content=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,r,o){var n="__ph-"+e.index+"__";return e.placeholders.push(o),e.index++,r+n})}return t.prototype.restore=function(t){var e=this;return t.replace(/__ph-(\d+)__/g,function(t,r){return e.placeholders[+r]})},t.prototype.content=function(){return this._content},t}(),c="-shadowcsshost",i="-shadowcssslotted",p="-shadowcsscontext",l=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+c+l,"gim"),u=new RegExp("("+p+l,"gim"),h=new RegExp("("+i+l,"gim"),f=c+"-no-combinator",_=/-shadowcsshost-no-combinator([^\s]*)/,d=[/::shadow/g,/::content/g],v="([>\\s~+[.,{:][\\s\\S]*)?$",g=/-shadowcsshost/gim,S=/:host/gim,m=/::slotted/gim,x=/:host-context/gim,y=/\/\*\s*[\s\S]*?\*\//g;var w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;var C=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,R=/([{}])/g,H="{",b="}",O="%BLOCK%",W=function(t,e){this.selector=t,this.content=e};function k(t,e){var r=function(t){for(var e=t.split(R),r=[],o=[],n=0,s=[],c=0;c<e.length;c++){var i=e[c];i===b&&n--,n>0?s.push(i):(s.length>0&&(o.push(s.join("")),r.push(O),s=[]),r.push(i)),i===H&&n++}s.length>0&&(o.push(s.join("")),r.push(O));return new P(r.join(""),o)}(t),o=0;return r.escapedString.replace(C,function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var s=t[2],c="",i=t[4],p="";i&&i.startsWith("{"+O)&&(c=r.blocks[o++],i=i.substring(O.length+1),p="{");var l=e(new W(s,c));return""+t[1]+l.selector+t[3]+p+l.content+i})}var P=function(t,e){this.escapedString=t,this.blocks=e}}}]);