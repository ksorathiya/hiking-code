(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{553:function(e,t,n){"use strict";n.d(t,{Kq:function(){return G},AK:function(){return ie},eh:function(){return q},xf:function(){return te}});var r=n(4184),o=n.n(r),a=n(7294),i=n.t(a,2),u=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,f=new Set;function s(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of f)e();f.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s));"undefined"!==typeof window&&window.visualViewport;new Map;function l(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function p(){return l(/^Mac/)}function d(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const y=a.createContext(null);y.displayName="PressResponderContext";let v=null,m=new Set,h=!1,b=!1;function g(e,t){for(let n of m)n(e,t)}function w(e){b=!0,function(e){return!(e.metaKey||!p()&&e.altKey||e.ctrlKey)}(e)&&(v="keyboard",g("keyboard",e))}function O(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,g("pointer",e))}function j(e){d(e)&&(b=!0,v="virtual")}function x(e){e.target!==window&&e.target!==document&&(b||(v="virtual",g("virtual",e)),b=!1)}function S(){b=!1}function E(){if("undefined"===typeof window||h)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",w,!0),document.addEventListener("keyup",w,!0),document.addEventListener("click",j,!0),window.addEventListener("focus",x,!0),window.addEventListener("blur",S,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",O,!0),document.addEventListener("pointermove",O,!0),document.addEventListener("pointerup",O,!0)):(document.addEventListener("mousedown",O,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mouseup",O,!0)),h=!0}"undefined"!==typeof document&&("loading"!==document.readyState?E():document.addEventListener("DOMContentLoaded",E));new Set;const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];A.join(",");A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');A.join(':not([tabindex="-1"]),');function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var P=Symbol("NONE");function L(e){return null!=e}function I(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var u=i[a];u in e&&(t[u]=e[u])}return t}function N(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var u=i[a];r.includes(u)||(t[u]=e[u])}return t}function D(e){for(var t=M({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var u=i[a],c=0,f=Object.keys(u);c<f.length;c++){var s=f[c];t[s]=H(s,t[s],u[s])}return t}function H(e,t,n){return t===P||n===P?null:null==t?n:null==n?t:typeof t!==typeof n?n:"className"===e?o()(t,n):"style"===e?M({},t,n):e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function T(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=k(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var R="undefined"!==typeof window;R?a.useLayoutEffect:a.useEffect;function U(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function W(e,t,n,r){var o=t.children,a=_(t,["children"]),i=F(o,null!=n&&n);return U(e,M({ref:r},a),i)}function K(e,t){var n=e.as,r=e.hasGap;return W(null!=n?n:"div",_(e,["as","hasGap"]),r,t)}var $=(0,a.forwardRef)(K),z=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=_(t,["hasGap"]);return W(e,o,r,n)}))},G=Object.assign($,{div:z("div"),a:z("a"),button:z("button"),h1:z("h1"),h2:z("h2"),h3:z("h3"),h4:z("h4"),h5:z("h5"),h6:z("h6"),label:z("label"),form:z("form"),section:z("section"),head:z("head"),main:z("main"),nav:z("nav")});function F(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function V(e,t,n,r){var o=X(e),i=J(n,o.props);if("render"===o.type)return o.render(i,t);var u=t;"as"===o.type&&o.as&&(t===G?i.as=o.as:u=o.as);var c=i.children;o.wrapChildren&&(c=o.wrapChildren(function(e){return Array.isArray(e)?a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}(c))),r&&(c=F(c,!0));var f=U(u,i,c);return o.wrap&&(f=o.wrap(f)),f}var Z=new Map;function q(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=Q.apply(void 0,[e,t].concat(i));if(n&&Z.set(n,c),r){var f,s=o?null!=(f=Z.get(o))?f:null:c;return Z.clear(),s}return c}function Q(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return V(r,e,D.apply(void 0,[t,0===u.length?{}:{children:u}].concat(a)),o)}var B=Symbol("UNSET");function J(e,t){if(!t)return e;for(var n=M({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],u=t[a];u===B?delete n[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(u=P),n[a]=H(a,i,u))}return n}function X(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?M({},e,{props:e.props||{},type:"as"}):"render"in e?M({},e,{type:"render"}):"props"in e?M({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?M({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function Y(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=ee(e[a],t[a])}return n}function ee(e,t){var n,r;if(!e)return t;if(!t)return e;var o=X(e),a=X(t),i=T.apply(void 0,[o.wrap,a.wrap].filter(L)),u=T.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(L)),c=J(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var f=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return M({props:c,wrap:i,wrapChildren:u},f?{as:f}:{})}function te(e,t){var n,r,o,a,i,u,c,f,s=t.name,l=t.descendantNames,p=t.internalVariantPropNames,d=t.internalArgPropNames,y=["variants","args","overrides"],v=(a=N.apply(void 0,[I.apply(void 0,[e].concat(p))].concat(y)),i=null!=(n=e.variants)?n:{},M({},a,i)),m=(u=N.apply(void 0,[I.apply(void 0,[e].concat(d))].concat(y)),c=null!=(r=e.args)?r:{},M({},u,c)),h=Y(N.apply(void 0,[I.apply(void 0,[e].concat(l))].concat(d,p,y)),null!=(o=e.overrides)?o:{}),b=N.apply(void 0,[e,"variants","args","overrides"].concat(l,p,d));Object.keys(b).length>0&&(h=Y(h,((f={})[s]={props:b},f)));return{variants:v,args:m,overrides:h}}var ne=[],re={};function oe(){return R?Object.entries(re).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ae=void 0;R&&window.addEventListener("resize",(function(){var e=oe();ae&&e.join("")===ae.join("")||(ae=e,u.unstable_batchedUpdates((function(){return ne.forEach((function(e){return e()}))})))}));var ie=o()},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),f=n(4287),s=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,f=y.length;c<f;c++){var s=y[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;"name"===s&&i||!p.has(l)?(p.add(l),r[s]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(f.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},617:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),u=n(7690),c=n(9828);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),l=function(e){i(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},5390:function(){},9008:function(e,t,n){e.exports=n(7947)},4360:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},2553:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},2012:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6265:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},8347:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},1385:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},9828:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:function(e,t,n){var r=n(1914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7690:function(e,t,n){var r=n(7917),o=n(450);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},1914:function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},7917:function(e){function t(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},3585:function(e,t,n){var r=n(4360);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}}}]);