(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{194:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"deckgo_highlight_code",function(){return s});var o=n(11),i=function(e,t,n,o){return new(n||(n=Promise))(function(i,a){function r(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(r,c)}s((o=o.apply(e,t||[])).next())})},a=function(e,t){var n,o,i,a,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var c=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,o.util.encode(e.content),e.alias):Array.isArray(e)?e.map(o.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,a,r=o.util.type(t);switch(n=n||{},r){case"Object":if(a=o.util.objId(t),n[a])return n[a];for(var c in i={},n[a]=i,t)t.hasOwnProperty(c)&&(i[c]=e(t[c],n));return i;case"Array":return a=o.util.objId(t),n[a]?n[a]:(i=[],n[a]=i,t.forEach(function(t,o){i[o]=e(t,n)}),i);default:return t}}},languages:{extend:function(e,t){var n=o.util.clone(o.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var a=(i=i||o.languages)[e],r={};for(var c in a)if(a.hasOwnProperty(c)){if(c==t)for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);n.hasOwnProperty(c)||(r[c]=a[c])}var l=i[e];return i[e]=r,o.languages.DFS(o.languages,function(t,n){n===l&&t!=e&&(this[t]=r)}),r},DFS:function e(t,n,i,a){a=a||{};var r=o.util.objId;for(var c in t)if(t.hasOwnProperty(c)){n.call(t,c,t[c],i||c);var s=t[c],l=o.util.type(s);"Object"!==l||a[r(s)]?"Array"!==l||a[r(s)]||(a[r(s)]=!0,e(s,n,c,a)):(a[r(s)]=!0,e(s,n,null,a))}}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i);for(var a,r=i.elements||e.querySelectorAll(i.selector),c=0;a=r[c++];)o.highlightElement(a,!0===t,i.callback)},highlightElement:function(n,i,a){for(var r,c,s=n;s&&!t.test(s.className);)s=s.parentNode;s&&(r=(s.className.match(t)||[,""])[1].toLowerCase(),c=o.languages[r]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&(s=n.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(t,"").replace(/\s+/g," ")+" language-"+r));var l={element:n,language:r,grammar:c,code:n.textContent},d=function(e){l.highlightedCode=e,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),a&&a.call(l.element)};if(o.hooks.run("before-sanity-check",l),l.code)if(o.hooks.run("before-highlight",l),l.grammar)if(i&&e.Worker){var g=new Worker(o.filename);g.onmessage=function(e){d(e.data)},g.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(o.highlight(l.code,l.grammar,l.language));else d(o.util.encode(l.code));else o.hooks.run("complete",l)},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};return o.hooks.run("before-tokenize",a),a.tokens=o.tokenize(a.code,a.grammar),o.hooks.run("after-tokenize",a),i.stringify(o.util.encode(a.tokens),a.language)},matchGrammar:function(e,t,n,a,r,c,s){for(var l in n)if(n.hasOwnProperty(l)&&n[l]){if(l==s)return;var d=n[l];d="Array"===o.util.type(d)?d:[d];for(var g=0;g<d.length;++g){var h=d[g],u=h.inside,p=!!h.lookbehind,f=!!h.greedy,k=0,m=h.alias;if(f&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=a,y=r;b<t.length;y+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof i)){if(f&&b!=t.length-1){if(h.lastIndex=y,!(L=h.exec(e)))break;for(var x=L.index+(p?L[1].length:0),A=L.index+L[0].length,F=b,S=y,j=t.length;F<j&&(S<A||!t[F].type&&!t[F-1].greedy);++F)x>=(S+=t[F].length)&&(++b,y=S);if(t[b]instanceof i)continue;C=F-b,w=e.slice(y,S),L.index-=y}else{h.lastIndex=0;var L=h.exec(w),C=1}if(L){p&&(k=L[1]?L[1].length:0);A=(x=L.index+k)+(L=L[0].slice(k)).length;var O=w.slice(0,x),T=w.slice(A),P=[b,C];O&&(++b,y+=O.length,P.push(O));var E=new i(l,u?o.tokenize(L,u):L,m,L,f);if(P.push(E),T&&P.push(T),Array.prototype.splice.apply(t,P),1!=C&&o.matchGrammar(e,t,n,b,y,!0,l),c)break}else if(c)break}}}}},tokenize:function(e,t){var n=[e],i=t.rest;if(i){for(var a in i)t[a]=i[a];delete t.rest}return o.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=o.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=o.hooks.all[e];if(n&&n.length)for(var i,a=0;i=n[a++];)i(t)}},Token:i};function i(e,t,n,o,i){this.type=e,this.content=t,this.alias=n,this.length=0|(o||"").length,this.greedy=!!i}if(e.Prism=o,i.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var a={type:e.type,content:i.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,r)}o.hooks.run("wrap",a);var c=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(c?" "+c:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),i=n.language,a=n.code,r=n.immediateClose;e.postMessage(o.highlight(a,o.languages[i],i)),r&&e.close()},!1),o):o;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(o.filename=a.src,o.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(o.highlightAll):window.setTimeout(o.highlightAll,16):document.addEventListener("DOMContentLoaded",o.highlightAll))),o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==r&&(r.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var o={};o["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};i["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var a={};a[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",a)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var o,i=e.getAttribute("data-src"),a=e,r=/\blang(?:uage)?-([\w-]+)\b/i;a&&!r.test(a.className);)a=a.parentNode;if(a&&(o=(e.className.match(r)||[,""])[1]),!o){var c=(i.match(/\.(\w+)$/)||[,""])[1];o=n[c]||c}var s=document.createElement("code");s.className="language-"+o,e.textContent="",s.textContent="Loading…",e.appendChild(s);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,t.highlightElement(s),e.setAttribute("data-src-loaded","")):l.status>=400?s.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:s.textContent="✖ Error: File does not exist or is empty")},l.send(null)}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),o=document.createElement("a");return o.textContent=t.getAttribute("data-download-link-label")||"Download",o.setAttribute("download",""),o.href=n,o}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}),s=function(){function e(e){var t=this;Object(o.c)(this,e),this.anchor="// DeckDeckGo",this.anchorZoom="// DeckDeckGoZoom",this.hideAnchor=!0,this.language="javascript",this.editable=!1,this.editing=!1,this.anchorOffsetTop=0,this.catchNewLine=function(e){return i(t,void 0,void 0,function(){var t,n;return a(this,function(o){switch(o.label){case 0:return e&&"Enter"===e.key?(e.preventDefault(),[4,this.getSelection()]):[3,2];case 1:(t=o.sent())&&t.focusNode&&t.focusNode.textContent&&t.focusOffset>0?(n=t.focusNode.textContent.charCodeAt(window.getSelection().focusOffset),document.execCommand("insertHTML",!1,10===n||13===n?"\n":"\n\n")):document.execCommand("insertHTML",!1,"\n\n"),o.label=2;case 2:return[2]}})})},this.applyCode=function(){return i(t,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return[4,this.stopEditing()];case 1:return e.sent(),[4,this.parseSlottedCode()];case 2:return e.sent(),[2]}})})},this.prismLanguageLoaded=Object(o.d)(this,"prismLanguageLoaded",7),this.codeDidChange=Object(o.d)(this,"codeDidChange",7)}return e.prototype.componentDidLoad=function(){return i(this,void 0,void 0,function(){var e;return a(this,function(t){switch(t.label){case 0:return[4,this.languageDidLoad()];case 1:return e=t.sent(),[4,this.loadLanguage()];case 2:return t.sent(),e?[4,this.fetchOrParse()]:[3,4];case 3:t.sent(),t.label=4;case 4:return[2]}})})},e.prototype.languageLoaded=function(e){return i(this,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return e&&e.detail?this.language&&"javascript"!==this.language&&e.detail===this.language?[4,this.fetchOrParse()]:[3,2]:[2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},e.prototype.fetchOrParse=function(){return i(this,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return this.src?[4,this.fetchCode()]:[3,2];case 1:return e.sent(),[3,4];case 2:return[4,this.parseSlottedCode()];case 3:e.sent(),e.label=4;case 4:return[2]}})})},e.prototype.languageDidLoad=function(){var e=this;return new Promise(function(t){document&&e.language&&""!==e.language?"javascript"!==e.language?t(!!document.querySelector("[deckdeckgo-prism-loaded='"+e.language+"']")):t(!0):t(!1)})},e.prototype.loadLanguage=function(){var e=this;return new Promise(function(t){return i(e,void 0,void 0,function(){var e,n=this;return a(this,function(o){return document&&this.language&&""!==this.language&&"javascript"!==this.language?document.querySelector("[deckdeckgo-prism='"+this.language+"']")?(t(),[2]):((e=document.createElement("script")).onload=function(){return i(n,void 0,void 0,function(){return a(this,function(t){return e.setAttribute("deckdeckgo-prism-loaded",this.language),this.prismLanguageLoaded.emit(this.language),[2]})})},e.src="https://unpkg.com/prismjs@latest/components/prism-"+this.language+".js",e.setAttribute("deckdeckgo-prism",this.language),e.defer=!0,document.head.appendChild(e),t(),[2]):(t(),[2])})})})},e.prototype.load=function(){var e=this;return new Promise(function(t){return i(e,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return this.language&&""!==this.language?"javascript"!==this.language?[3,2]:[4,this.fetchOrParse()]:(t(),[2]);case 1:return e.sent(),t(),[2];case 2:return document.querySelector("[deckdeckgo-prism-loaded='"+this.language+"']")?[4,this.fetchOrParse()]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,this.loadLanguage()];case 5:e.sent(),e.label=6;case 6:return t(),[2]}})})})},e.prototype.parseSlottedCode=function(){var e=this.el.querySelector("[slot='code']");return e?this.parseCode(e.innerText?e.innerText.trim():e.innerText):new Promise(function(e){e()})},e.prototype.fetchCode=function(){return i(this,void 0,void 0,function(){var e,t;return a(this,function(n){switch(n.label){case 0:if(!this.src)return[2];n.label=1;case 1:return n.trys.push([1,5,,6]),[4,fetch(this.src)];case 2:return[4,n.sent().text()];case 3:return e=n.sent(),[4,this.parseCode(e)];case 4:return n.sent(),[3,6];case 5:return n.sent(),(t=this.el.shadowRoot.querySelector("div.deckgo-highlight-code-container"))&&e&&(t.children[0].innerHTML=e),[3,6];case 6:return[2]}})})},e.prototype.parseCode=function(e){var t=this;return new Promise(function(n,o){return i(t,void 0,void 0,function(){var t,r,s,l=this;return a(this,function(d){switch(d.label){case 0:if(!(t=this.el.shadowRoot.querySelector("div.deckgo-highlight-code-container")))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),r=c.highlight(e,c.languages[this.language],this.language),t.children[0].innerHTML=r,[4,this.addAnchors()];case 2:return d.sent(),setTimeout(function(){return i(l,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return[4,this.addHighlight()];case 1:return e.sent(),[2]}})})},0),n(),[3,4];case 3:return s=d.sent(),o(s),[3,4];case 4:return[2]}})})})},e.prototype.addAnchors=function(){var e=this;return new Promise(function(t){var n=e.el.shadowRoot.querySelectorAll("span.comment");if(n){var o=Array.from(n).filter(function(t){return e.hasLineAnchor(t.innerHTML)});o&&o.forEach(function(t){t.classList.add("deckgo-highlight-code-anchor"),e.hideAnchor&&t.classList.add("deckgo-highlight-code-anchor-hidden")})}t()})},e.prototype.hasLineAnchor=function(e){return e&&this.anchor&&-1===e.indexOf("@Prop")&&e.split(" ").join("").indexOf(this.anchor.split(" ").join(""))>-1},e.prototype.addHighlight=function(){var e=this;return new Promise(function(t){return i(e,void 0,void 0,function(){var e,n,o,i,r,c;return a(this,function(a){switch(a.label){case 0:return this.highlightLines&&this.highlightLines.length>0?[4,this.findRowsToHighlight()]:[3,2];case 1:(e=a.sent())&&e.length>0&&(n=this.el.shadowRoot.querySelector("code"))&&n.hasChildNodes()&&(o=Array.prototype.slice.call(n.childNodes),i=-1,r=-1,c=-1,o.forEach(function(t){var n;if("#text"===t.nodeName){var o=document.createElement("span");t.previousElementSibling?t.previousElementSibling.insertAdjacentElement("afterend",o):t.parentNode.prepend(o),o.appendChild(t),n=o}else n=t;i=n.offsetTop>r?i+1:i,r=n.offsetTop,c=-1===c||c>n.offsetHeight?n.offsetHeight:c;var a=n.offsetHeight>c?i+1:i;e.indexOf(a)>-1&&n.classList.add("deckgo-highlight-code-line")})),a.label=2;case 2:return t(),[2]}})})})},e.prototype.findRowsToHighlight=function(){var e=this;return new Promise(function(t){var n=[],o=e.highlightLines.split(" ");o&&o.length>0&&o.forEach(function(e){var t=e.split(",");if(t&&t.length>=1)for(var o=parseInt(t[0],0),i=parseInt(t[1],0),a=o;a<=i;a++)n.push(a)}),t(n)})},e.prototype.findNextAnchor=function(e){var t=this;return new Promise(function(n){return i(t,void 0,void 0,function(){var t,o,i,r,c=this;return a(this,function(a){return(t=this.el.shadowRoot.querySelectorAll("span.deckgo-highlight-code-anchor"))?(o=e?Array.from(t):Array.from(t).reverse(),(i=o.find(function(t){return e?t.offsetTop>c.anchorOffsetTop:t.offsetTop<c.anchorOffsetTop}))?(this.anchorOffsetTop=i.offsetTop,n({offsetTop:i.offsetTop,hasLineZoom:this.hasLineZoom(i.textContent)})):e?n(null):(r=this.el.shadowRoot.querySelector("code"))&&r.firstElementChild?(this.anchorOffsetTop=0,n({offsetTop:0,hasLineZoom:!1})):n(null)):n(null),[2]})})})},e.prototype.zoomCode=function(e){var t=this;return new Promise(function(n){var o=t.el.shadowRoot.querySelector("div.deckgo-highlight-code-container");o&&o.style.setProperty("--deckgo-highlight-code-zoom",e?"1.3":"1"),n()})},e.prototype.hasLineZoom=function(e){return e&&this.anchorZoom&&-1===e.indexOf("@Prop")&&e.split(" ").join("").indexOf(this.anchorZoom.split(" ").join(""))>-1},e.prototype.edit=function(){var e=this;return new Promise(function(t){if(e.editable){e.editing=!0;var n=e.el.querySelector("[slot='code']");n&&setTimeout(function(){n.setAttribute("contentEditable","true"),n.addEventListener("blur",e.applyCode,{once:!0}),n.addEventListener("keydown",e.catchNewLine),n.focus()},100),t()}else t()})},e.prototype.getSelection=function(){return new Promise(function(e){var t=null;window&&window.getSelection?t=window.getSelection():document&&document.getSelection?t=document.getSelection():document&&document.selection&&(t=document.selection.createRange().text),e(t)})},e.prototype.stopEditing=function(){var e=this;return new Promise(function(t){e.editing=!1;var n=e.el.querySelector("[slot='code']");n&&(n.removeAttribute("contentEditable"),n.innerHTML&&(n.innerHTML=n.innerHTML.trim()),e.codeDidChange.emit(e.el)),t()})},e.prototype.render=function(){var e=this;return Object(o.e)(o.f,{class:{"deckgo-highlight-code-edit":this.editing}},Object(o.e)("div",{class:"deckgo-highlight-code-container",onMouseDown:function(){return e.edit()},onTouchStart:function(){return e.edit()}},Object(o.e)("code",null),Object(o.e)("slot",{name:"code"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o.g)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{language:["loadLanguage"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}:host ::slotted([slot=code]){display:none}:host(.deckgo-highlight-code-edit) ::slotted([slot=code]){display:block;white-space:pre-wrap}:host(.deckgo-highlight-code-edit) code{display:none}:host([editable]) code:empty:not(:focus):after{content:var(--deckgo-highlight-code-empty-text,"Click to add your code")}div.deckgo-highlight-code-container{color:var(--deckgo-highlight-code-color,inherit);background:var(--deckgo-highlight-code-background);padding:var(--deckgo-highlight-code-padding);border-radius:var(--deckgo-highlight-code-border-radius);margin:var(--deckgo-highlight-code-margin,0 0 64px);-webkit-transform-origin:bottom left;transform-origin:bottom left;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform:scale(var(--deckgo-highlight-code-zoom,1));transform:scale(var(--deckgo-highlight-code-zoom,1));direction:var(--deckgo-highlight-code-direction,ltr);text-align:var(--deckgo-highlight-code-text-align,start)}div.deckgo-highlight-code-container code{overflow-y:var(--deckgo-highlight-code-scroll,scroll);white-space:pre-wrap;font-size:var(--deckgo-highlight-code-font-size);font-family:var(--deckgo-highlight-code-font-family,monospace);display:var(--deckgo-highlight-code-display,block)}div.deckgo-highlight-code-container code div:empty{min-height:1rem}div.deckgo-highlight-code-container code span.deckgo-highlight-code-anchor-hidden{visibility:hidden}div.deckgo-highlight-code-container code span.deckgo-highlight-code-line{background:var(--deckgo-highlight-code-line-background,#3880ff);padding:var(--deckgo-highlight-code-line-padding);border-top:var(--deckgo-highlight-code-line-border-top);border-bottom:var(--deckgo-highlight-code-line-border-bottom)}div.deckgo-highlight-code-container code .language-css .token.string:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .style .token.string:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.entity:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.operator:not(.deckgo-highlight-code-line),div.deckgo-highlight-code-container code .token.url:not(.deckgo-highlight-code-line){background:inherit}div.deckgo-highlight-code-container code .token.cdata,div.deckgo-highlight-code-container code .token.comment,div.deckgo-highlight-code-container code .token.doctype,div.deckgo-highlight-code-container code .token.prolog{color:var(--deckgo-highlight-code-token-comment,#708090)}div.deckgo-highlight-code-container code .token.punctuation{color:var(--deckgo-highlight-code-token-punctuation,#999)}div.deckgo-highlight-code-container code .token.boolean,div.deckgo-highlight-code-container code .token.constant,div.deckgo-highlight-code-container code .token.deleted,div.deckgo-highlight-code-container code .token.number,div.deckgo-highlight-code-container code .token.property,div.deckgo-highlight-code-container code .token.symbol,div.deckgo-highlight-code-container code .token.tag{color:var(--deckgo-highlight-code-token-property,#905)}div.deckgo-highlight-code-container code .token.attr-name,div.deckgo-highlight-code-container code .token.builtin,div.deckgo-highlight-code-container code .token.char,div.deckgo-highlight-code-container code .token.inserted,div.deckgo-highlight-code-container code .token.selector,div.deckgo-highlight-code-container code .token.string{color:var(--deckgo-highlight-code-token-selector,#690)}div.deckgo-highlight-code-container code .language-css .token.string,div.deckgo-highlight-code-container code .style .token.string,div.deckgo-highlight-code-container code .token.entity,div.deckgo-highlight-code-container code .token.operator,div.deckgo-highlight-code-container code .token.url{color:var(--deckgo-highlight-code-token-operator,#9a6e3a)}div.deckgo-highlight-code-container code .token.atrule,div.deckgo-highlight-code-container code .token.attr-value,div.deckgo-highlight-code-container code .token.keyword{color:var(--deckgo-highlight-code-token-atrule,#07a)}div.deckgo-highlight-code-container code .token.class-name,div.deckgo-highlight-code-container code .token.function{color:var(--deckgo-highlight-code-token-function,#dd4a68)}div.deckgo-highlight-code-container code .token.important,div.deckgo-highlight-code-container code .token.regex,div.deckgo-highlight-code-container code .token.variable{color:var(--deckgo-highlight-code-token-regex,#e90)}'},enumerable:!0,configurable:!0}),e}()}.call(this,n(3))}}]);