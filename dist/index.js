!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=84)}([function(t,e,n){var r=n(20)("wks"),o=n(14),i=n(2).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(8),o=n(19);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(2),o=n(4),i=n(9),c=n(14)("src"),a=n(49),u="toString",s=(""+a).split(u);n(13).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var u="function"==typeof n;u&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(u&&(i(n,c)||o(n,c,t[e]?""+t[e]:s.join(String(e)))),t===r?t[e]=n:a?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,u,(function(){return"function"==typeof this&&this[c]||a.call(this)}))},function(t,e,n){var r=n(1),o=n(27),i=n(29),c=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports={}},function(t,e,n){var r=n(2),o=n(13),i=n(4),c=n(7),a=n(15),u="prototype",s=function(t,e,n){var f,l,h,p,v=t&s.F,d=t&s.G,g=t&s.S,y=t&s.P,m=t&s.B,x=d?r:g?r[e]||(r[e]={}):(r[e]||{})[u],w=d?o:o[e]||(o[e]={}),b=w[u]||(w[u]={});for(f in d&&(n=e),n)h=((l=!v&&x&&void 0!==x[f])?x:n)[f],p=m&&l?a(h,r):y&&"function"==typeof h?a(Function.call,h):h,x&&c(x,f,h,t&s.U),w[f]!=h&&i(w,f,p),y&&b[f]!=h&&(b[f]=h)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(31);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e,n){var r=n(16),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(58),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(13),o=n(2),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(30)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(21),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){"use strict";var r,o,i=n(54),c=RegExp.prototype.exec,a=String.prototype.replace,u=c,s="lastIndex",f=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r[s]||0!==o[s]),l=void 0!==/()??/.exec("")[1];(f||l)&&(u=function(t){var e,n,r,o,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),f&&(e=u[s]),r=c.call(u,t),f&&r&&(u[s]=u.global?r.index+r[0].length:e),l&&r&&1<r.length&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=u},function(t,e,n){"use strict";function r(){return this}var o=n(30),i=n(12),c=n(7),a=n(4),u=n(11),s=n(59),f=n(26),l=n(65),h=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),v="values";t.exports=function(t,e,n,d,g,y,m){function x(t){if(!p&&t in k)return k[t];switch(t){case"keys":case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}}s(n,e,d);var w,b,S,E=e+" Iterator",_=g==v,L=!1,k=t.prototype,I=k[h]||k["@@iterator"]||g&&k[g],O=I||x(g),j=g?_?x("entries"):O:void 0,T="Array"==e&&k.entries||I;if(T&&(S=l(T.call(new t)))!==Object.prototype&&S.next&&(f(S,E,!0),o||"function"==typeof S[h]||a(S,h,r)),_&&I&&I.name!==v&&(L=!0,O=function(){return I.call(this)}),o&&!m||!p&&!L&&k[h]||a(k,h,O),u[e]=O,u[E]=r,g)if(w={values:_?O:x(v),keys:y?O:x("keys"),entries:j},m)for(b in w)b in k||c(k,b,w[b]);else i(i.P+i.F*(p||L),e,w);return w}},function(t,e,n){var r=n(20)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(8).f,o=n(9),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){t.exports=!n(5)&&!n(6)((function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(33)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(16),o=n(10);t.exports=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),s=a.length;return u<0||s<=u?t?"":void 0:(i=a.charCodeAt(u))<55296||56319<i||u+1===s||(c=a.charCodeAt(u+1))<56320||57343<c?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(22),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){"use strict";n(55);var r=n(7),o=n(4),i=n(6),c=n(10),a=n(0),u=n(23),s=a("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var h=a(t),p=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=p?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[h](""),!e})):void 0;if(!p||!v||"replace"===t&&!f||"split"===t&&!l){var d=/./[h],g=n(c,h,""[t],(function(t,e,n,r,o){return e.exec===u?p&&!o?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=g[0],m=g[1];r(String.prototype,t,y),o(RegExp.prototype,h,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},function(t,e,n){"use strict";var r=n(57),o=n(37),i=n(11),c=n(18);t.exports=n(24)(Array,"Array",(function(t,e){this._t=c(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){function r(){}var o=n(1),i=n(60),c=n(40),a=n(25)("IE_PROTO"),u="prototype",s=function(){var t,e=n(28)("iframe"),r=c.length;for(e.style.display="none",n(64).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s[u][c[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(r[u]=o(t),n=new r,r[u]=null,n[a]=t):n=s(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(61),o=n(40);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(10);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(7);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(15),o=n(70),i=n(71),c=n(1),a=n(17),u=n(72),s={},f={};(e=t.exports=function(t,e,n,l,h){var p,v,d,g,y=h?function(){return t}:u(t),m=r(n,l,e?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=a(t.length);x<p;x++)if((g=e?m(c(v=t[x])[0],v[1]):m(t[x]))===s||g===f)return g}else for(d=y.call(t);!(v=d.next()).done;)if((g=o(d,m,v.value,e))===s||g===f)return g}).BREAK=s,e.RETURN=f},function(t,e,n){function r(t){a(t,o,{value:{i:"O"+ ++u,w:{}}})}var o=n(14)("meta"),i=n(3),c=n(9),a=n(8).f,u=0,s=Object.isExtensible||function(){return!0},f=!n(6)((function(){return s(Object.preventExtensions({}))})),l=t.exports={KEY:o,NEED:!1,fastKey:function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,o)){if(!s(t))return"F";if(!e)return"E";r(t)}return t[o].i},getWeak:function(t,e){if(!c(t,o)){if(!s(t))return!0;if(!e)return!1;r(t)}return t[o].w},onFreeze:function(t){return f&&l.NEED&&s(t)&&!c(t,o)&&r(t),t}}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},function(t,e,n){"use strict";n(48)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,e,n){function r(t,e,n,r){var o=String(c(t)),i="<"+e;return""!==n&&(i+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),i+">"+o+"</"+e+">"}var o=n(12),i=n(6),c=n(10),a=/"/g;t.exports=function(t,e){var n={};n[t]=e(r),o(o.P+o.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length})),"String",n)}},function(t,e,n){t.exports=n(20)("native-function-to-string",Function.toString)},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new I(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=_(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?p:l,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",v={};function d(){}function g(){}function y(){}var m={};m[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(O([])));w&&w!==n&&r.call(w,i)&&(m=w);var b=y.prototype=d.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,c){var a=s(t[n],t,o);if("throw"!==a.type){var u=a.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):Promise.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(a.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=b.constructor=y,y.constructor=g,y[a]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},S(E.prototype),E.prototype[c]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,o){var i=new E(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(b),b[a]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";var r=n(52),o=n(1),i=n(53),c=n(32),a=n(17),u=n(34),s=n(23),f=n(6),l=Math.min,h=[].push,p="split",v="length",d="lastIndex",g=4294967295,y=!f((function(){RegExp(g,"y")}));n(35)("split",2,(function(t,e,n,f){var m;return m="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[v]||2!="ab"[p](/(?:ab)*/)[v]||4!="."[p](/(.?)(.?)/)[v]||1<"."[p](/()()/)[v]||""[p](/.?/)[v]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(o,t,e);for(var i,c,a,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===e?g:e>>>0,y=new RegExp(t.source,f+"g");(i=s.call(y,o))&&!(l<(c=y[d])&&(u.push(o.slice(l,i.index)),1<i[v]&&i.index<o[v]&&h.apply(u,i.slice(1)),a=i[0][v],l=c,u[v]>=p));)y[d]===i.index&&y[d]++;return l===o[v]?!a&&y.test("")||u.push(""):u.push(o.slice(l)),u[v]>p?u.slice(0,p):u}:"0"[p](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var o=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o,r):m.call(String(o),n,r)},function(t,e){var r=f(m,t,this,e,m!==n);if(r.done)return r.value;var s=o(t),h=String(this),p=i(s,RegExp),v=s.unicode,d=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(y?"y":"g"),x=new p(y?s:"^(?:"+s.source+")",d),w=void 0===e?g:e>>>0;if(0==w)return[];if(0===h.length)return null===u(x,h)?[h]:[];for(var b=0,S=0,E=[];S<h.length;){x.lastIndex=y?S:0;var _,L=u(x,y?h:h.slice(S));if(null===L||(_=l(a(x.lastIndex+(y?0:S)),h.length))===b)S=c(h,S,v);else{if(E.push(h.slice(b,S)),E.length===w)return E;for(var k=1;k<=L.length-1;k++)if(E.push(L[k]),E.length===w)return E;S=b=_}}return E.push(h.slice(b)),E}]}))},function(t,e,n){var r=n(3),o=n(21),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(1),o=n(31),i=n(0)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(23);n(12)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){for(var r=n(36),o=n(39),i=n(7),c=n(2),a=n(4),u=n(11),s=n(0),f=s("iterator"),l=s("toStringTag"),h=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(p),d=0;d<v.length;d++){var g,y=v[d],m=p[y],x=c[y],w=x&&x.prototype;if(w&&(w[f]||a(w,f,h),w[l]||a(w,l,y),u[y]=h,m))for(g in r)w[g]||i(w,g,r[g],!0)}},function(t,e,n){var r=n(0)("unscopables"),o=Array.prototype;null==o[r]&&n(4)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(38),o=n(19),i=n(26),c={};n(4)(c,n(0)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(8),o=n(1),i=n(39);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),a=c.length,u=0;u<a;)r.f(t,n=c[u++],e[n]);return t}},function(t,e,n){var r=n(9),o=n(18),i=n(62)(!1),c=n(25)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)n!=c&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(18),o=n(17),i=n(63);t.exports=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),f=i(c,s);if(t&&n!=n){for(;f<s;)if((a=u[f++])!=a)return!0}else for(;f<s;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(16),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(9),o=n(41),i=n(25)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){"use strict";var r=n(22),o={};o[n(0)("toStringTag")]="z",o+""!="[object z]"&&n(7)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,e,n){"use strict";var r=n(33)(!0);n(24)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(69),o=n(46);t.exports=n(74)("Set",(function(t){return function(e){return t(this,0<arguments.length?e:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},function(t,e,n){"use strict";function r(t,e){var n,r=v(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n}var o=n(8).f,i=n(38),c=n(42),a=n(15),u=n(43),s=n(44),f=n(24),l=n(37),h=n(73),p=n(5),v=n(45).fastKey,d=n(46),g=p?"_s":"size";t.exports={getConstructor:function(t,e,n,f){var l=t((function(t,r){u(t,l,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[g]=0,null!=r&&s(r,n,t[f],t)}));return c(l.prototype,{clear:function(){for(var t=d(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var n=d(this,e),o=r(n,t);if(o){var i=o.n,c=o.p;delete n._i[o.i],o.r=!0,c&&(c.n=i),i&&(i.p=c),n._f==o&&(n._f=i),n._l==o&&(n._l=c),n[g]--}return!!o},forEach:function(t,n){d(this,e);for(var r,o=a(t,1<arguments.length?n:void 0,3);r=r?r.n:this._f;)for(o(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!r(d(this,e),t)}}),p&&o(l.prototype,"size",{get:function(){return d(this,e)[g]}}),l},def:function(t,e,n){var o,i,c=r(t,e);return c?c.v=n:(t._l=c={i:i=v(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=c),o&&(o.n=c),t[g]++,"F"!==i&&(t._i[i]=c)),t},getEntry:r,setStrong:function(t,e,n){f(t,e,(function(t,n){this._t=d(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?l(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,l(1))}),n?"entries":"values",!n,!0),h(e)}}},function(t,e,n){var r=n(1);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(11),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(22),o=n(0)("iterator"),i=n(11);t.exports=n(13).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(2),o=n(8),i=n(5),c=n(0)("species");t.exports=function(t){var e=r[t];i&&e&&!e[c]&&o.f(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(2),o=n(12),i=n(7),c=n(42),a=n(45),u=n(44),s=n(43),f=n(3),l=n(6),h=n(75),p=n(26),v=n(76);t.exports=function(t,e,n,d,g,y){function m(t){var e=S[t];i(S,t,"delete"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})}var x=r[t],w=x,b=g?"set":"add",S=w&&w.prototype,E={};if("function"==typeof w&&(y||S.forEach&&!l((function(){(new w).entries().next()})))){var _=new w,L=_[b](y?{}:-0,1)!=_,k=l((function(){_.has(1)})),I=h((function(t){new w(t)})),O=!y&&l((function(){for(var t=new w,e=5;e--;)t[b](e,e);return!t.has(-0)}));I||(((w=e((function(e,n){s(e,w,t);var r=v(new x,e,w);return null!=n&&u(n,g,r[b],r),r}))).prototype=S).constructor=w),(k||O)&&(m("delete"),m("has"),g&&m("get")),(O||L)&&m(b),y&&S.clear&&delete S.clear}else w=d.getConstructor(e,t,g,b),c(w.prototype,n),a.NEED=!0;return p(w,t),E[t]=w,o(o.G+o.W+o.F*(w!=x),E),y||d.setStrong(w,t,g),w}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(t){}return n}},function(t,e,n){var r=n(3),o=n(77).set;t.exports=function(t,e,n){var i,c=e.constructor;return c!==n&&"function"==typeof c&&(i=c.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},function(t,e,n){function r(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")}var o=n(3),i=n(1);t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(15)(Function.call,n(78).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},function(t,e,n){var r=n(79),o=n(19),i=n(18),c=n(29),a=n(9),u=n(27),s=Object.getOwnPropertyDescriptor;e.f=n(5)?s:function(t,e){if(t=i(t),e=c(e,!0),u)try{return s(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(81);"string"==typeof r&&(r=[[t.i,r,""]]);n(82)(r,{insert:"head",singleton:!1}),r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){"use strict";var r,o,i={},c=(o={},function(t){if(void 0===o[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}o[t]=e}return o[t]});function a(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[c]?r[c].parts.push(a):n.push(r[c]={id:c,parts:[a]})}return n}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],c=0;if(o){for(o.refs++;c<o.parts.length;c++)o.parts[c](r.parts[c]);for(;c<r.parts.length;c++)o.parts.push(d(r.parts[c],e))}else{for(var a=[];c<r.parts.length;c++)a.push(d(r.parts[c],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function s(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=c(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function h(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}var p=null,v=0;function d(t,e){var n,r,o;if(e.singleton){var i=v++;n=p=p||s(e),r=h.bind(null,n,i,!1),o=h.bind(null,n,i,!0)}else n=s(e),r=function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,e),o=function(){!function(t){null!==t.parentNode&&t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t,e);return u(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var c=n[o],s=i[c.id];s&&(s.refs--,r.push(s))}t&&u(a(t,e),e);for(var f=0;f<r.length;f++){var l=r[f];if(0===l.refs){for(var h=0;h<l.parts.length;h++)l.parts[h]();delete i[l.id]}}}}},function(t,e,n){"use strict";var r=n(1),o=n(41),i=n(17),c=n(16),a=n(32),u=n(34),s=Math.max,f=Math.min,l=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;n(35)("replace",2,(function(t,e,n,v){return[function(r,o){var i=t(this),c=null==r?void 0:r[e];return void 0!==c?c.call(r,i,o):n.call(String(i),r,o)},function(t,e){var o=v(n,t,this,e);if(o.done)return o.value;var l=r(t),h=String(this),p="function"==typeof e;p||(e=String(e));var g=l.global;if(g){var y=l.unicode;l.lastIndex=0}for(var m=[];;){var x=u(l,h);if(null===x)break;if(m.push(x),!g)break;""===String(x[0])&&(l.lastIndex=a(h,i(l.lastIndex),y))}for(var w,b="",S=0,E=0;E<m.length;E++){x=m[E];for(var _=String(x[0]),L=s(f(c(x.index),h.length),0),k=[],I=1;I<x.length;I++)k.push(void 0===(w=x[I])?w:String(w));var O=x.groups;if(p){var j=[_].concat(k,L,h);void 0!==O&&j.push(O);var T=String(e.apply(void 0,j))}else T=d(_,h,L,k,O,e);S<=L&&(b+=h.slice(S,L)+T,S=L+_.length)}return b+h.slice(S)}];function d(t,e,r,i,c,a){var u=r+t.length,s=i.length,f=p;return void 0!==c&&(c=o(c),f=h),n.call(a,f,(function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":a=c[o.slice(1,-1)];break;default:var f=+o;if(0==f)return n;if(s<f){var h=l(f/10);return 0===h?n:h<=s?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):n}a=i[f-1]}return void 0===a?"":a}))}}))},function(t,e,n){"use strict";n.r(e),n(47),n(50),n(51),n(56),n(36),n(66),n(67),n(68),n(80),n(83);var r=document.getElementById("canvas"),o=r.getContext("2d"),i=document.querySelector("#paint-bucket"),c=document.querySelector("#color-picker"),a=document.querySelector("#pencil"),u=document.querySelector("#input_color"),s=document.querySelector("#current-color-element"),f=document.querySelector("#current_color-mark"),l=document.querySelector("#color-prev-mark"),h=document.querySelector("#colors-list"),p=document.querySelector("#size-switcher"),v=document.querySelector("#size_switcher--input_128x128"),d=document.querySelector("#size_switcher--input_256x256"),g=document.querySelector("#size_switcher--input_512x512"),y=document.querySelector("#reset"),m=document.querySelector("#load"),x=document.querySelector("#city"),w=document.querySelector("#bw"),b=document.querySelector("#error"),S=document.querySelector("#error-close"),E=document.getElementById("login"),_="false",L="rgb(196, 196, 196)";r.width=128,r.height=128;var k=512/r.width;function I(){b.classList.remove("error-shown")}function O(){localStorage.setItem("canvasImage",r.toDataURL()),localStorage.setItem("lastColor",L),localStorage.setItem("canvasWidth",r.width),localStorage.setItem("canvasHeight",r.height),localStorage.setItem("isEmpty","false"),localStorage.setItem("isImgLoaded",_)}function j(t){var e=Math.floor(t.offsetX/k),n=Math.floor(t.offsetY/k),i=o.getImageData(e,n,1,1).data,c="rgb(".concat(i[0],",").concat(i[1],",").concat(i[2],")");o.fillStyle=L;var a=new Set;a.add("".concat(e,"_").concat(n)),a.forEach((function(t){!function(t){var e=t.split("_"),n=+e[0],i=+e[1],u=o.getImageData(n,i,1,1).data,s="rgb(".concat(u[0],",").concat(u[1],",").concat(u[2],")");c===s&&-1<n&&-1<i&&n<r.width&&i<r.height?a.add("".concat(n-1,"_").concat(i)).add("".concat(1+n,"_").concat(i)).add("".concat(n,"_").concat(1+i)).add("".concat(n,"_").concat(i-1)):a.delete("".concat(n,"_").concat(i))}(t)})),a.forEach((function(t){!function(t){var e=t.split("_"),n=+e[0],r=+e[1];o.fillRect(n,r,1,1)}(t)})),O()}function T(t){var e=o.getImageData(Math.floor(t.offsetX/k),Math.floor(t.offsetY/k),1,1).data,n="rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],")");n!==L&&(l.style.backgroundColor=L,L=n,f.style.backgroundColor=L)}function M(t){var e=!0,n=t.offsetX,i=t.offsetY;function c(t){if(e)for(var r=t.offsetX,c=t.offsetY,a=Math.abs(r-n),u=Math.abs(c-i),s=n<r?1:-1,f=i<c?1:-1,l=a-u;n!==r&&i!==c;){var h=2*l;-u<h&&(l-=u,n+=s),h<a&&(l+=a,i+=f),o.fillRect(Math.floor(n/k),Math.floor(i/k),1,1)}}function a(){e=!1,r.removeEventListener("mousemove",c),r.removeEventListener("mouseup",a),r.removeEventListener("mouseout",a),O()}o.fillStyle=L,o.fillRect(Math.floor(t.offsetX/k),Math.floor(t.offsetY/k),1,1),e&&(r.addEventListener("mousemove",c),r.addEventListener("mouseup",a),r.addEventListener("mouseout",a))}function C(t){o.clearRect(0,0,r.width,r.height);var e=new Image;e.crossOrigin="Anonymous",e.src=t,o.imageSmoothingEnabled=!1,o.mozImageSmoothingEnabled=!1,o.webkitImageSmoothingEnabled=!1,o.msImageSmoothingEnabled=!1,e.onload=function(){var t=r.width*e.width/e.height,n=r.height*e.height/e.width,i=(r.width-t)/2,c=(r.height-n)/2;e.width>e.height?o.drawImage(e,0,c,r.width,n):o.drawImage(e,i,0,t,r.height),O()}}function P(){i.classList.add("tools--item-active"),a.classList.remove("tools--item-active"),c.classList.remove("tools--item-active"),r.removeEventListener("click",T),r.removeEventListener("mousedown",M),r.addEventListener("mousedown",j)}function R(){c.classList.add("tools--item-active"),i.classList.remove("tools--item-active"),a.classList.remove("tools--item-active"),r.removeEventListener("mousedown",M),r.removeEventListener("mousedown",j),r.addEventListener("click",T)}function A(){a.classList.add("tools--item-active"),i.classList.remove("tools--item-active"),c.classList.remove("tools--item-active"),r.removeEventListener("click",T),r.removeEventListener("mousedown",j),r.addEventListener("mousedown",M)}a.addEventListener("click",A),h.addEventListener("click",(function(t){if(t.target!==u&&t.target!==s){var e=getComputedStyle(t.target.firstElementChild).getPropertyValue("background-color");e!==L&&(l.style.backgroundColor=L,L=e,f.style.backgroundColor=L)}})),c.addEventListener("click",R),i.addEventListener("click",P),u.addEventListener("change",(function(){l.style.backgroundColor=L,L=function(t){var e=t.replace("#",""),n=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);return"rgb(".concat(n,", ").concat(r,", ").concat(o,")")}(u.value),f.style.backgroundColor=L})),p.addEventListener("change",(function(t){switch(t.target.value){case"512x512":r.width=512,r.height=512,k=512/r.width;break;case"256x256":r.width=256,r.height=256,k=512/r.width;break;case"128x128":r.width=128,r.height=128,k=512/r.width}var e=localStorage.getItem("canvasImage");if(e){var n=new Image;n.src=e,n.onload=function(){o.imageSmoothingEnabled=!1,o.drawImage(n,0,0,r.width,r.height)}}})),y.addEventListener("click",(function(){o.fillStyle="rgb(255, 255, 255)",o.fillRect(0,0,r.width,r.height),localStorage.removeItem("canvasImage"),localStorage.removeItem("isImgLoaded"),_="false"})),window.addEventListener("keydown",(function(t){switch(t.keyCode){case 66:P();break;case 80:A();break;case 67:R()}})),S.addEventListener("click",I),window.onbeforeunload=function(){O()},window.addEventListener("DOMContentLoaded",(function(){A(),"true"!==localStorage.getItem("isEmpty")&&(L=localStorage.getItem("lastColor"),f.style.backgroundColor=L,r.width=localStorage.getItem("canvasWidth"),r.height=localStorage.getItem("canvasHeight"),k=512/r.width,128===r.width?v.setAttribute("checked","checked"):256===r.width?d.setAttribute("checked","checked"):512===r.width&&g.setAttribute("checked","checked"),_=localStorage.getItem("isImgLoaded"),C(localStorage.getItem("canvasImage")),localStorage.setItem("isEmpty","true"))})),m.addEventListener("click",(function(){var t=x.value;!function(t){var e;regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(fetch(t));case 3:return e=n.sent,n.next=6,regeneratorRuntime.awrap(e.json());case 6:C(n.sent.urls.small),_="true",n.next=14;break;case 11:throw n.prev=11,n.t0=n.catch(0),new Error(n.t0);case 14:case"end":return n.stop()}}),null,null,[[0,11]])}("https://api.unsplash.com/photos/random?query=town,".concat(t,"&client_id=").concat("7f574e25821340fc3ce38f12fd82f01a175f9294ad0d21f6fe57adaeb8406446"))})),w.addEventListener("click",(function(){if("true"!==_)b.classList.add("error-shown"),setTimeout(I,3e3);else{for(var t=o.getImageData(0,0,r.width,r.height),e=t.data,n=0;n<e.length;n+=4){var i=(e[n]+e[n+1]+e[n+2])/3;e[n]=i,e[n+1]=i,e[n+2]=i}o.putImageData(t,0,0),O()}})),E.addEventListener("click",(function(t){t.preventDefault(),new netlify.default({}).authenticate({provider:"github",scope:"user"},(function(t,e){E.innerText=t?"Error Authenticating with GitHub: "+t:"Authenticated with GitHub. Access Token: "+e.token}))}))}]);