(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sp={exports:{}},ll={},yp={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),vg=Symbol.for("react.portal"),_g=Symbol.for("react.fragment"),xg=Symbol.for("react.strict_mode"),Sg=Symbol.for("react.profiler"),yg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),Eg=Symbol.for("react.forward_ref"),wg=Symbol.for("react.suspense"),Tg=Symbol.for("react.memo"),Ag=Symbol.for("react.lazy"),Xf=Symbol.iterator;function Cg(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}var Mp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ep=Object.assign,wp={};function Ms(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Mp}Ms.prototype.isReactComponent={};Ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tp(){}Tp.prototype=Ms.prototype;function zc(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Mp}var Bc=zc.prototype=new Tp;Bc.constructor=zc;Ep(Bc,Ms.prototype);Bc.isPureReactComponent=!0;var jf=Array.isArray,Ap=Object.prototype.hasOwnProperty,Hc={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function Rp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ap.call(e,i)&&!Cp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_o,type:t,key:s,ref:o,props:r,_owner:Hc.current}}function Rg(t,e){return{$$typeof:_o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vc(t){return typeof t=="object"&&t!==null&&t.$$typeof===_o}function Pg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yf=/\/+/g;function Ul(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Pg(""+t.key):e.toString(36)}function _a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _o:case vg:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ul(o,0):i,jf(r)?(n="",t!=null&&(n=t.replace(Yf,"$&/")+"/"),_a(r,e,n,"",function(u){return u})):r!=null&&(Vc(r)&&(r=Rg(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",jf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ul(s,a);o+=_a(s,e,n,l,r)}else if(l=Cg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ul(s,a++),o+=_a(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bo(t,e,n){if(t==null)return t;var i=[],r=0;return _a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},xa={transition:null},bg={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Hc};function Pp(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:bo,forEach:function(t,e,n){bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bo(t,function(){e++}),e},toArray:function(t){return bo(t,function(e){return e})||[]},only:function(t){if(!Vc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Ms;ze.Fragment=_g;ze.Profiler=Sg;ze.PureComponent=zc;ze.StrictMode=xg;ze.Suspense=wg;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bg;ze.act=Pp;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ep({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ap.call(e,l)&&!Cp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:_o,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:Mg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yg,_context:t},t.Consumer=t};ze.createElement=Rp;ze.createFactory=function(t){var e=Rp.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Eg,render:t}};ze.isValidElement=Vc;ze.lazy=function(t){return{$$typeof:Ag,_payload:{_status:-1,_result:t},_init:Lg}};ze.memo=function(t,e){return{$$typeof:Tg,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};ze.unstable_act=Pp;ze.useCallback=function(t,e){return Gt.current.useCallback(t,e)};ze.useContext=function(t){return Gt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Gt.current.useEffect(t,e)};ze.useId=function(){return Gt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Gt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};ze.useRef=function(t){return Gt.current.useRef(t)};ze.useState=function(t){return Gt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Gt.current.useTransition()};ze.version="18.3.1";yp.exports=ze;var Je=yp.exports;const Dg=gg(Je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=Je,Ng=Symbol.for("react.element"),Ig=Symbol.for("react.fragment"),Fg=Object.prototype.hasOwnProperty,Og=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kg={key:!0,ref:!0,__self:!0,__source:!0};function Lp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Fg.call(e,i)&&!kg.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ng,type:t,key:s,ref:o,props:r,_owner:Og.current}}ll.Fragment=Ig;ll.jsx=Lp;ll.jsxs=Lp;Sp.exports=ll;var pe=Sp.exports,ku={},bp={exports:{}},un={},Dp={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,G){var Y=C.length;C.push(G);e:for(;0<Y;){var ne=Y-1>>>1,ge=C[ne];if(0<r(ge,G))C[ne]=G,C[Y]=ge,Y=ne;else break e}}function n(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var G=C[0],Y=C.pop();if(Y!==G){C[0]=Y;e:for(var ne=0,ge=C.length,Le=ge>>>1;ne<Le;){var V=2*(ne+1)-1,Z=C[V],ae=V+1,se=C[ae];if(0>r(Z,Y))ae<ge&&0>r(se,Z)?(C[ne]=se,C[ae]=Y,ne=ae):(C[ne]=Z,C[V]=Y,ne=V);else if(ae<ge&&0>r(se,Y))C[ne]=se,C[ae]=Y,ne=ae;else break e}}return G}function r(C,G){var Y=C.sortIndex-G.sortIndex;return Y!==0?Y:C.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=C)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function M(C){if(x=!1,v(C),!_)if(n(l)!==null)_=!0,O(L);else{var G=n(u);G!==null&&X(M,G.startTime-C)}}function L(C,G){_=!1,x&&(x=!1,c(b),b=-1),p=!0;var Y=d;try{for(v(G),h=n(l);h!==null&&(!(h.expirationTime>G)||C&&!P());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var ge=ne(h.expirationTime<=G);G=t.unstable_now(),typeof ge=="function"?h.callback=ge:h===n(l)&&i(l),v(G)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var V=n(u);V!==null&&X(M,V.startTime-G),Le=!1}return Le}finally{h=null,d=Y,p=!1}}var A=!1,T=null,b=-1,w=5,S=-1;function P(){return!(t.unstable_now()-S<w)}function W(){if(T!==null){var C=t.unstable_now();S=C;var G=!0;try{G=T(!0,C)}finally{G?z():(A=!1,T=null)}}else A=!1}var z;if(typeof g=="function")z=function(){g(W)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,$=q.port2;q.port1.onmessage=W,z=function(){$.postMessage(null)}}else z=function(){m(W,0)};function O(C){T=C,A||(A=!0,z())}function X(C,G){b=m(function(){C(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,O(L))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var Y=d;d=G;try{return C()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,G){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var Y=d;d=C;try{return G()}finally{d=Y}},t.unstable_scheduleCallback=function(C,G,Y){var ne=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ne+Y:ne):Y=ne,C){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=Y+ge,C={id:f++,callback:G,priorityLevel:C,startTime:Y,expirationTime:ge,sortIndex:-1},Y>ne?(C.sortIndex=Y,e(u,C),n(l)===null&&C===n(u)&&(x?(c(b),b=-1):x=!0,X(M,Y-ne))):(C.sortIndex=ge,e(l,C),_||p||(_=!0,O(L))),C},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(C){var G=d;return function(){var Y=d;d=G;try{return C.apply(this,arguments)}finally{d=Y}}}})(Up);Dp.exports=Up;var zg=Dp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg=Je,ln=zg;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Np=new Set,eo={};function Sr(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(eo[t]=e,t=0;t<e.length;t++)Np.add(e[t])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,Hg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},$f={};function Vg(t){return zu.call($f,t)?!0:zu.call(qf,t)?!1:Hg.test(t)?$f[t]=!0:(qf[t]=!0,!1)}function Gg(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wg(t,e,n,i){if(e===null||typeof e>"u"||Gg(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gc=/[\-:]([a-z])/g;function Wc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gc,Wc);Dt[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gc,Wc);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gc,Wc);Dt[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xc(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wg(e,n,r,i)&&(n=null),i||r===null?Vg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=Bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Fp=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),qc=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),Op=Symbol.for("react.offscreen"),Kf=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,Nl;function Bs(t){if(Nl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nl=e&&e[1]||""}return`
`+Nl+t}var Il=!1;function Fl(t,e){if(!t||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bs(t):""}function Xg(t){switch(t.tag){case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return t=Fl(t.type,!1),t;case 11:return t=Fl(t.type.render,!1),t;case 1:return t=Fl(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Hr:return"Portal";case Bu:return"Profiler";case jc:return"StrictMode";case Hu:return"Suspense";case Vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fp:return(t.displayName||"Context")+".Consumer";case Ip:return(t._context.displayName||"Context")+".Provider";case Yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qc:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Si:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function jg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yg(t){var e=kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uo(t){t._valueTracker||(t._valueTracker=Yg(t))}function zp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bp(t,e){e=e.checked,e!=null&&Xc(t,"checked",e,!1)}function Xu(t,e){Bp(t,e);var n=ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&ju(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ju(t,e,n){(e!=="number"||ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Hs(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function Hp(t,e){var n=ki(e.value),i=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ed(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,Gp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qg=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){qg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function Wp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function Xp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var $g=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if($g[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,ts=null,ns=null;function td(t){if(t=yo(t)){if(typeof Qu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=hl(e),Qu(t.stateNode,t.type,e))}}function jp(t){ts?ns?ns.push(t):ns=[t]:ts=t}function Yp(){if(ts){var t=ts,e=ns;if(ns=ts=null,td(t),e)for(t=0;t<e.length;t++)td(e[t])}}function qp(t,e){return t(e)}function $p(){}var Ol=!1;function Kp(t,e,n){if(Ol)return t(e,n);Ol=!0;try{return qp(t,e,n)}finally{Ol=!1,(ts!==null||ns!==null)&&($p(),Yp())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var i=hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Ju=!1;if(si)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Ju=!1}function Kg(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var js=!1,Da=null,Ua=!1,ec=null,Zg={onError:function(t){js=!0,Da=t}};function Qg(t,e,n,i,r,s,o,a,l){js=!1,Da=null,Kg.apply(Zg,arguments)}function Jg(t,e,n,i,r,s,o,a,l){if(Qg.apply(this,arguments),js){if(js){var u=Da;js=!1,Da=null}else throw Error(te(198));Ua||(Ua=!0,ec=u)}}function yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nd(t){if(yr(t)!==t)throw Error(te(188))}function ev(t){var e=t.alternate;if(!e){if(e=yr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return nd(r),t;if(s===i)return nd(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Qp(t){return t=ev(t),t!==null?Jp(t):null}function Jp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jp(t);if(e!==null)return e;t=t.sibling}return null}var em=ln.unstable_scheduleCallback,id=ln.unstable_cancelCallback,tv=ln.unstable_shouldYield,nv=ln.unstable_requestPaint,mt=ln.unstable_now,iv=ln.unstable_getCurrentPriorityLevel,Kc=ln.unstable_ImmediatePriority,tm=ln.unstable_UserBlockingPriority,Na=ln.unstable_NormalPriority,rv=ln.unstable_LowPriority,nm=ln.unstable_IdlePriority,ul=null,Vn=null;function sv(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:lv,ov=Math.log,av=Math.LN2;function lv(t){return t>>>=0,t===0?32:31-(ov(t)/av|0)|0}var Io=64,Fo=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ia(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Vs(a):(s&=o,s!==0&&(i=Vs(s)))}else o=n&~r,o!==0?i=Vs(o):s!==0&&(i=Vs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Pn(e),r=1<<n,i|=t[n],e&=~r;return i}function uv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=uv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function im(){var t=Io;return Io<<=1,!(Io&4194240)&&(Io=64),t}function kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function fv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Pn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Pn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function rm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sm,Qc,om,am,lm,nc=!1,Oo=[],Ri=null,Pi=null,Li=null,io=new Map,ro=new Map,Mi=[],dv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(t,e){switch(t){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Pi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function Ps(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yo(e),e!==null&&Qc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hv(t,e,n,i,r){switch(e){case"focusin":return Ri=Ps(Ri,t,e,n,i,r),!0;case"dragenter":return Pi=Ps(Pi,t,e,n,i,r),!0;case"mouseover":return Li=Ps(Li,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return io.set(s,Ps(io.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ro.set(s,Ps(ro.get(s)||null,t,e,n,i,r)),!0}return!1}function um(t){var e=or(t.target);if(e!==null){var n=yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zp(n),e!==null){t.blockedOn=e,lm(t.priority,function(){om(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=yo(n),e!==null&&Qc(e),t.blockedOn=n,!1;e.shift()}return!0}function sd(t,e,n){Sa(t)&&n.delete(e)}function pv(){nc=!1,Ri!==null&&Sa(Ri)&&(Ri=null),Pi!==null&&Sa(Pi)&&(Pi=null),Li!==null&&Sa(Li)&&(Li=null),io.forEach(sd),ro.forEach(sd)}function Ls(t,e){t.blockedOn===e&&(t.blockedOn=null,nc||(nc=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,pv)))}function so(t){function e(r){return Ls(r,t)}if(0<Oo.length){Ls(Oo[0],t);for(var n=1;n<Oo.length;n++){var i=Oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ri!==null&&Ls(Ri,t),Pi!==null&&Ls(Pi,t),Li!==null&&Ls(Li,t),io.forEach(e),ro.forEach(e),n=0;n<Mi.length;n++)i=Mi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mi.length&&(n=Mi[0],n.blockedOn===null);)um(n),n.blockedOn===null&&Mi.shift()}var is=fi.ReactCurrentBatchConfig,Fa=!0;function mv(t,e,n,i){var r=Ke,s=is.transition;is.transition=null;try{Ke=1,Jc(t,e,n,i)}finally{Ke=r,is.transition=s}}function gv(t,e,n,i){var r=Ke,s=is.transition;is.transition=null;try{Ke=4,Jc(t,e,n,i)}finally{Ke=r,is.transition=s}}function Jc(t,e,n,i){if(Fa){var r=ic(t,e,n,i);if(r===null)ql(t,e,i,Oa,n),rd(t,i);else if(hv(r,t,e,n,i))i.stopPropagation();else if(rd(t,i),e&4&&-1<dv.indexOf(t)){for(;r!==null;){var s=yo(r);if(s!==null&&sm(s),s=ic(t,e,n,i),s===null&&ql(t,e,i,Oa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ql(t,e,i,null,n)}}var Oa=null;function ic(t,e,n,i){if(Oa=null,t=$c(i),t=or(t),t!==null)if(e=yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oa=t,null}function cm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iv()){case Kc:return 1;case tm:return 4;case Na:case rv:return 16;case nm:return 536870912;default:return 16}default:return 16}}var Ti=null,ef=null,ya=null;function fm(){if(ya)return ya;var t,e=ef,n=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ya=r.slice(t,1<i?1-i:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function od(){return!1}function cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ko:od,this.isPropagationStopped=od,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),e}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=cn(Es),So=ut({},Es,{view:0,detail:0}),vv=cn(So),zl,Bl,bs,cl=ut({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(zl=t.screenX-bs.screenX,Bl=t.screenY-bs.screenY):Bl=zl=0,bs=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),ad=cn(cl),_v=ut({},cl,{dataTransfer:0}),xv=cn(_v),Sv=ut({},So,{relatedTarget:0}),Hl=cn(Sv),yv=ut({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=cn(yv),Ev=ut({},Es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wv=cn(Ev),Tv=ut({},Es,{data:0}),ld=cn(Tv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rv[t])?!!e[t]:!1}function nf(){return Pv}var Lv=ut({},So,{key:function(t){if(t.key){var e=Av[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bv=cn(Lv),Dv=ut({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=cn(Dv),Uv=ut({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),Nv=cn(Uv),Iv=ut({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=cn(Iv),Ov=ut({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=cn(Ov),zv=[9,13,27,32],rf=si&&"CompositionEvent"in window,Ys=null;si&&"documentMode"in document&&(Ys=document.documentMode);var Bv=si&&"TextEvent"in window&&!Ys,dm=si&&(!rf||Ys&&8<Ys&&11>=Ys),cd=" ",fd=!1;function hm(t,e){switch(t){case"keyup":return zv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function Hv(t,e){switch(t){case"compositionend":return pm(e);case"keypress":return e.which!==32?null:(fd=!0,cd);case"textInput":return t=e.data,t===cd&&fd?null:t;default:return null}}function Vv(t,e){if(Gr)return t==="compositionend"||!rf&&hm(t,e)?(t=fm(),ya=ef=Ti=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dm&&e.locale!=="ko"?null:e.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gv[t.type]:e==="textarea"}function mm(t,e,n,i){jp(i),e=ka(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qs=null,oo=null;function Wv(t){Am(t,0)}function fl(t){var e=jr(t);if(zp(e))return t}function Xv(t,e){if(t==="change")return e}var gm=!1;if(si){var Vl;if(si){var Gl="oninput"in document;if(!Gl){var hd=document.createElement("div");hd.setAttribute("oninput","return;"),Gl=typeof hd.oninput=="function"}Vl=Gl}else Vl=!1;gm=Vl&&(!document.documentMode||9<document.documentMode)}function pd(){qs&&(qs.detachEvent("onpropertychange",vm),oo=qs=null)}function vm(t){if(t.propertyName==="value"&&fl(oo)){var e=[];mm(e,oo,t,$c(t)),Kp(Wv,e)}}function jv(t,e,n){t==="focusin"?(pd(),qs=e,oo=n,qs.attachEvent("onpropertychange",vm)):t==="focusout"&&pd()}function Yv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(oo)}function qv(t,e){if(t==="click")return fl(e)}function $v(t,e){if(t==="input"||t==="change")return fl(e)}function Kv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:Kv;function ao(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zu.call(e,r)||!bn(t[r],e[r]))return!1}return!0}function md(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gd(t,e){var n=md(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=md(n)}}function _m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xm(){for(var t=window,e=ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ba(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zv(t){var e=xm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_m(n.ownerDocument.documentElement,n)){if(i!==null&&sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gd(n,s);var o=gd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qv=si&&"documentMode"in document&&11>=document.documentMode,Wr=null,rc=null,$s=null,sc=!1;function vd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sc||Wr==null||Wr!==ba(i)||(i=Wr,"selectionStart"in i&&sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&ao($s,i)||($s=i,i=ka(rc,"onSelect"),0<i.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wr)))}function zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Wl={},Sm={};si&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function dl(t){if(Wl[t])return Wl[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sm)return Wl[t]=e[n];return t}var ym=dl("animationend"),Mm=dl("animationiteration"),Em=dl("animationstart"),wm=dl("transitionend"),Tm=new Map,_d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){Tm.set(t,e),Sr(e,[t])}for(var Xl=0;Xl<_d.length;Xl++){var jl=_d[Xl],Jv=jl.toLowerCase(),e_=jl[0].toUpperCase()+jl.slice(1);Vi(Jv,"on"+e_)}Vi(ym,"onAnimationEnd");Vi(Mm,"onAnimationIteration");Vi(Em,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(wm,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function xd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jg(i,e,void 0,t),t.currentTarget=null}function Am(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;xd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;xd(r,a,u),s=l}}}if(Ua)throw t=ec,Ua=!1,ec=null,t}function nt(t,e){var n=e[cc];n===void 0&&(n=e[cc]=new Set);var i=t+"__bubble";n.has(i)||(Cm(e,t,2,!1),n.add(i))}function Yl(t,e,n){var i=0;e&&(i|=4),Cm(n,t,i,e)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[Bo]){t[Bo]=!0,Np.forEach(function(n){n!=="selectionchange"&&(t_.has(n)||Yl(n,!1,t),Yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bo]||(e[Bo]=!0,Yl("selectionchange",!1,e))}}function Cm(t,e,n,i){switch(cm(e)){case 1:var r=mv;break;case 4:r=gv;break;default:r=Jc}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Kp(function(){var u=s,f=$c(n),h=[];e:{var d=Tm.get(t);if(d!==void 0){var p=tf,_=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":p=bv;break;case"focusin":_="focus",p=Hl;break;case"focusout":_="blur",p=Hl;break;case"beforeblur":case"afterblur":p=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Nv;break;case ym:case Mm:case Em:p=Mv;break;case wm:p=Fv;break;case"scroll":p=vv;break;case"wheel":p=kv;break;case"copy":case"cut":case"paste":p=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ud}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,c!==null&&(M=no(g,c),M!=null&&x.push(uo(g,M,v)))),m)break;g=g.return}0<x.length&&(d=new p(d,_,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Zu&&(_=n.relatedTarget||n.fromElement)&&(or(_)||_[oi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?or(_):null,_!==null&&(m=yr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=ad,M="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=ud,M="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?d:jr(p),v=_==null?d:jr(_),d=new x(M,g+"leave",p,n,f),d.target=m,d.relatedTarget=v,M=null,or(f)===u&&(x=new x(c,g+"enter",_,n,f),x.target=v,x.relatedTarget=m,M=x),m=M,p&&_)t:{for(x=p,c=_,g=0,v=x;v;v=Er(v))g++;for(v=0,M=c;M;M=Er(M))v++;for(;0<g-v;)x=Er(x),g--;for(;0<v-g;)c=Er(c),v--;for(;g--;){if(x===c||c!==null&&x===c.alternate)break t;x=Er(x),c=Er(c)}x=null}else x=null;p!==null&&Sd(h,d,p,x,!1),_!==null&&m!==null&&Sd(h,m,_,x,!0)}}e:{if(d=u?jr(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var L=Xv;else if(dd(d))if(gm)L=$v;else{L=Yv;var A=jv}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(L=qv);if(L&&(L=L(t,u))){mm(h,L,n,f);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&ju(d,"number",d.value)}switch(A=u?jr(u):window,t){case"focusin":(dd(A)||A.contentEditable==="true")&&(Wr=A,rc=u,$s=null);break;case"focusout":$s=rc=Wr=null;break;case"mousedown":sc=!0;break;case"contextmenu":case"mouseup":case"dragend":sc=!1,vd(h,n,f);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":vd(h,n,f)}var T;if(rf)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Gr?hm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(dm&&n.locale!=="ko"&&(Gr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Gr&&(T=fm()):(Ti=f,ef="value"in Ti?Ti.value:Ti.textContent,Gr=!0)),A=ka(u,b),0<A.length&&(b=new ld(b,t,null,n,f),h.push({event:b,listeners:A}),T?b.data=T:(T=pm(n),T!==null&&(b.data=T)))),(T=Bv?Hv(t,n):Vv(t,n))&&(u=ka(u,"onBeforeInput"),0<u.length&&(f=new ld("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=T))}Am(h,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=no(t,n),s!=null&&i.unshift(uo(t,s,r)),s=no(t,e),s!=null&&i.push(uo(t,s,r))),t=t.return}return i}function Er(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=no(n,s),l!=null&&o.unshift(uo(n,l,a))):r||(l=no(n,s),l!=null&&o.push(uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var n_=/\r\n?/g,i_=/\u0000|\uFFFD/g;function yd(t){return(typeof t=="string"?t:""+t).replace(n_,`
`).replace(i_,"")}function Ho(t,e,n){if(e=yd(e),yd(t)!==e&&n)throw Error(te(425))}function za(){}var oc=null,ac=null;function lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,r_=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,s_=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(t){return Md.resolve(null).then(t).catch(o_)}:uc;function o_(t){setTimeout(function(){throw t})}function $l(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),so(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);so(e)}function bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ed(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),kn="__reactFiber$"+ws,co="__reactProps$"+ws,oi="__reactContainer$"+ws,cc="__reactEvents$"+ws,a_="__reactListeners$"+ws,l_="__reactHandles$"+ws;function or(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oi]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ed(t);t!==null;){if(n=t[kn])return n;t=Ed(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[kn]||t[oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function hl(t){return t[co]||null}var fc=[],Yr=-1;function Gi(t){return{current:t}}function rt(t){0>Yr||(t.current=fc[Yr],fc[Yr]=null,Yr--)}function tt(t,e){Yr++,fc[Yr]=t.current,t.current=e}var zi={},kt=Gi(zi),$t=Gi(!1),pr=zi;function cs(t,e){var n=t.type.contextTypes;if(!n)return zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Kt(t){return t=t.childContextTypes,t!=null}function Ba(){rt($t),rt(kt)}function wd(t,e,n){if(kt.current!==zi)throw Error(te(168));tt(kt,e),tt($t,n)}function Rm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,jg(t)||"Unknown",r));return ut({},n,i)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,pr=kt.current,tt(kt,t),tt($t,$t.current),!0}function Td(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Rm(t,e,pr),i.__reactInternalMemoizedMergedChildContext=t,rt($t),rt(kt),tt(kt,t)):rt($t),tt($t,n)}var Jn=null,pl=!1,Kl=!1;function Pm(t){Jn===null?Jn=[t]:Jn.push(t)}function u_(t){pl=!0,Pm(t)}function Wi(){if(!Kl&&Jn!==null){Kl=!0;var t=0,e=Ke;try{var n=Jn;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Jn=null,pl=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(t+1)),em(Kc,Wi),r}finally{Ke=e,Kl=!1}}return null}var qr=[],$r=0,Va=null,Ga=0,hn=[],pn=0,mr=null,ti=1,ni="";function er(t,e){qr[$r++]=Ga,qr[$r++]=Va,Va=t,Ga=e}function Lm(t,e,n){hn[pn++]=ti,hn[pn++]=ni,hn[pn++]=mr,mr=t;var i=ti;t=ni;var r=32-Pn(i)-1;i&=~(1<<r),n+=1;var s=32-Pn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-Pn(e)+r|n<<r|i,ni=s+t}else ti=1<<s|n<<r|i,ni=t}function of(t){t.return!==null&&(er(t,1),Lm(t,1,0))}function af(t){for(;t===Va;)Va=qr[--$r],qr[$r]=null,Ga=qr[--$r],qr[$r]=null;for(;t===mr;)mr=hn[--pn],hn[pn]=null,ni=hn[--pn],hn[pn]=null,ti=hn[--pn],hn[pn]=null}var on=null,sn=null,st=!1,An=null;function bm(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ad(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,sn=bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:ti,overflow:ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,sn=null,!0):!1;default:return!1}}function dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(st){var e=sn;if(e){var n=e;if(!Ad(t,e)){if(dc(t))throw Error(te(418));e=bi(n.nextSibling);var i=on;e&&Ad(t,e)?bm(i,n):(t.flags=t.flags&-4097|2,st=!1,on=t)}}else{if(dc(t))throw Error(te(418));t.flags=t.flags&-4097|2,st=!1,on=t}}}function Cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Vo(t){if(t!==on)return!1;if(!st)return Cd(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lc(t.type,t.memoizedProps)),e&&(e=sn)){if(dc(t))throw Dm(),Error(te(418));for(;e;)bm(t,e),e=bi(e.nextSibling)}if(Cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=on?bi(t.stateNode.nextSibling):null;return!0}function Dm(){for(var t=sn;t;)t=bi(t.nextSibling)}function fs(){sn=on=null,st=!1}function lf(t){An===null?An=[t]:An.push(t)}var c_=fi.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Go(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rd(t){var e=t._init;return e(t._payload)}function Um(t){function e(c,g){if(t){var v=c.deletions;v===null?(c.deletions=[g],c.flags|=16):v.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Ii(c,g),c.index=0,c.sibling=null,c}function s(c,g,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<g?(c.flags|=2,g):v):(c.flags|=2,g)):(c.flags|=1048576,g)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,v,M){return g===null||g.tag!==6?(g=iu(v,c.mode,M),g.return=c,g):(g=r(g,v),g.return=c,g)}function l(c,g,v,M){var L=v.type;return L===Vr?f(c,g,v.props.children,M,v.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Si&&Rd(L)===g.type)?(M=r(g,v.props),M.ref=Ds(c,g,v),M.return=c,M):(M=Pa(v.type,v.key,v.props,null,c.mode,M),M.ref=Ds(c,g,v),M.return=c,M)}function u(c,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ru(v,c.mode,M),g.return=c,g):(g=r(g,v.children||[]),g.return=c,g)}function f(c,g,v,M,L){return g===null||g.tag!==7?(g=dr(v,c.mode,M,L),g.return=c,g):(g=r(g,v),g.return=c,g)}function h(c,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=iu(""+g,c.mode,v),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Do:return v=Pa(g.type,g.key,g.props,null,c.mode,v),v.ref=Ds(c,null,g),v.return=c,v;case Hr:return g=ru(g,c.mode,v),g.return=c,g;case Si:var M=g._init;return h(c,M(g._payload),v)}if(Hs(g)||Cs(g))return g=dr(g,c.mode,v,null),g.return=c,g;Go(c,g)}return null}function d(c,g,v,M){var L=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:a(c,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Do:return v.key===L?l(c,g,v,M):null;case Hr:return v.key===L?u(c,g,v,M):null;case Si:return L=v._init,d(c,g,L(v._payload),M)}if(Hs(v)||Cs(v))return L!==null?null:f(c,g,v,M,null);Go(c,v)}return null}function p(c,g,v,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return c=c.get(v)||null,a(g,c,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Do:return c=c.get(M.key===null?v:M.key)||null,l(g,c,M,L);case Hr:return c=c.get(M.key===null?v:M.key)||null,u(g,c,M,L);case Si:var A=M._init;return p(c,g,v,A(M._payload),L)}if(Hs(M)||Cs(M))return c=c.get(v)||null,f(g,c,M,L,null);Go(g,M)}return null}function _(c,g,v,M){for(var L=null,A=null,T=g,b=g=0,w=null;T!==null&&b<v.length;b++){T.index>b?(w=T,T=null):w=T.sibling;var S=d(c,T,v[b],M);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(c,T),g=s(S,g,b),A===null?L=S:A.sibling=S,A=S,T=w}if(b===v.length)return n(c,T),st&&er(c,b),L;if(T===null){for(;b<v.length;b++)T=h(c,v[b],M),T!==null&&(g=s(T,g,b),A===null?L=T:A.sibling=T,A=T);return st&&er(c,b),L}for(T=i(c,T);b<v.length;b++)w=p(T,c,b,v[b],M),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?b:w.key),g=s(w,g,b),A===null?L=w:A.sibling=w,A=w);return t&&T.forEach(function(P){return e(c,P)}),st&&er(c,b),L}function x(c,g,v,M){var L=Cs(v);if(typeof L!="function")throw Error(te(150));if(v=L.call(v),v==null)throw Error(te(151));for(var A=L=null,T=g,b=g=0,w=null,S=v.next();T!==null&&!S.done;b++,S=v.next()){T.index>b?(w=T,T=null):w=T.sibling;var P=d(c,T,S.value,M);if(P===null){T===null&&(T=w);break}t&&T&&P.alternate===null&&e(c,T),g=s(P,g,b),A===null?L=P:A.sibling=P,A=P,T=w}if(S.done)return n(c,T),st&&er(c,b),L;if(T===null){for(;!S.done;b++,S=v.next())S=h(c,S.value,M),S!==null&&(g=s(S,g,b),A===null?L=S:A.sibling=S,A=S);return st&&er(c,b),L}for(T=i(c,T);!S.done;b++,S=v.next())S=p(T,c,b,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?b:S.key),g=s(S,g,b),A===null?L=S:A.sibling=S,A=S);return t&&T.forEach(function(W){return e(c,W)}),st&&er(c,b),L}function m(c,g,v,M){if(typeof v=="object"&&v!==null&&v.type===Vr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Do:e:{for(var L=v.key,A=g;A!==null;){if(A.key===L){if(L=v.type,L===Vr){if(A.tag===7){n(c,A.sibling),g=r(A,v.props.children),g.return=c,c=g;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Si&&Rd(L)===A.type){n(c,A.sibling),g=r(A,v.props),g.ref=Ds(c,A,v),g.return=c,c=g;break e}n(c,A);break}else e(c,A);A=A.sibling}v.type===Vr?(g=dr(v.props.children,c.mode,M,v.key),g.return=c,c=g):(M=Pa(v.type,v.key,v.props,null,c.mode,M),M.ref=Ds(c,g,v),M.return=c,c=M)}return o(c);case Hr:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(c,g.sibling),g=r(g,v.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=ru(v,c.mode,M),g.return=c,c=g}return o(c);case Si:return A=v._init,m(c,g,A(v._payload),M)}if(Hs(v))return _(c,g,v,M);if(Cs(v))return x(c,g,v,M);Go(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,v),g.return=c,c=g):(n(c,g),g=iu(v,c.mode,M),g.return=c,c=g),o(c)):n(c,g)}return m}var ds=Um(!0),Nm=Um(!1),Wa=Gi(null),Xa=null,Kr=null,uf=null;function cf(){uf=Kr=Xa=null}function ff(t){var e=Wa.current;rt(Wa),t._currentValue=e}function pc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Xa=t,uf=Kr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},Kr===null){if(Xa===null)throw Error(te(308));Kr=t,Xa.dependencies={lanes:0,firstContext:t}}else Kr=Kr.next=t;return e}var ar=null;function df(t){ar===null?ar=[t]:ar.push(t)}function Im(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,df(e)):(n.next=r.next,r.next=n),e.interleaved=n,ai(t,i)}function ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yi=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(t,n)}return r=i.interleaved,r===null?(e.next=e,df(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(t,n)}function Ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zc(t,n)}}function Pd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ja(t,e,n,i){var r=t.updateQueue;yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=ut({},h,d);break e;case 2:yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=h}}function Ld(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Mo={},Gn=Gi(Mo),fo=Gi(Mo),ho=Gi(Mo);function lr(t){if(t===Mo)throw Error(te(174));return t}function pf(t,e){switch(tt(ho,e),tt(fo,t),tt(Gn,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}rt(Gn),tt(Gn,e)}function hs(){rt(Gn),rt(fo),rt(ho)}function Om(t){lr(ho.current);var e=lr(Gn.current),n=qu(e,t.type);e!==n&&(tt(fo,t),tt(Gn,n))}function mf(t){fo.current===t&&(rt(Gn),rt(fo))}var at=Gi(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function gf(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var wa=fi.ReactCurrentDispatcher,Ql=fi.ReactCurrentBatchConfig,gr=0,lt=null,xt=null,Ct=null,qa=!1,Ks=!1,po=0,f_=0;function Ut(){throw Error(te(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function _f(t,e,n,i,r,s){if(gr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?m_:g_,t=n(i,r),Ks){s=0;do{if(Ks=!1,po=0,25<=s)throw Error(te(301));s+=1,Ct=xt=null,e.updateQueue=null,wa.current=v_,t=n(i,r)}while(Ks)}if(wa.current=$a,e=xt!==null&&xt.next!==null,gr=0,Ct=xt=lt=null,qa=!1,e)throw Error(te(300));return t}function xf(){var t=po!==0;return po=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?lt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function xn(){if(xt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Ct===null?lt.memoizedState:Ct.next;if(e!==null)Ct=e,xt=t;else{if(t===null)throw Error(te(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Ct===null?lt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function mo(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=xn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=xt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((gr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,lt.lanes|=f,vr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,bn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=xn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);bn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function km(){}function zm(t,e){var n=lt,i=xn(),r=e(),s=!bn(i.memoizedState,r);if(s&&(i.memoizedState=r,qt=!0),i=i.queue,Sf(Vm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,go(9,Hm.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(te(349));gr&30||Bm(n,e,r)}return r}function Bm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hm(t,e,n,i){e.value=n,e.getSnapshot=i,Gm(e)&&Wm(t)}function Vm(t,e,n){return n(function(){Gm(e)&&Wm(t)})}function Gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function Wm(t){var e=ai(t,1);e!==null&&Ln(e,t,1,-1)}function bd(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=p_.bind(null,lt,t),[e.memoizedState,t]}function go(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Xm(){return xn().memoizedState}function Ta(t,e,n,i){var r=In();lt.flags|=t,r.memoizedState=go(1|e,n,void 0,i===void 0?null:i)}function ml(t,e,n,i){var r=xn();i=i===void 0?null:i;var s=void 0;if(xt!==null){var o=xt.memoizedState;if(s=o.destroy,i!==null&&vf(i,o.deps)){r.memoizedState=go(e,n,s,i);return}}lt.flags|=t,r.memoizedState=go(1|e,n,s,i)}function Dd(t,e){return Ta(8390656,8,t,e)}function Sf(t,e){return ml(2048,8,t,e)}function jm(t,e){return ml(4,2,t,e)}function Ym(t,e){return ml(4,4,t,e)}function qm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $m(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,qm.bind(null,e,t),n)}function yf(){}function Km(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zm(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qm(t,e,n){return gr&21?(bn(n,e)||(n=im(),lt.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function d_(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Ql.transition;Ql.transition={};try{t(!1),e()}finally{Ke=n,Ql.transition=i}}function Jm(){return xn().memoizedState}function h_(t,e,n){var i=Ni(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Im(t,e,n,i),n!==null){var r=Vt();Ln(n,t,i,r),n0(n,e,i)}}function p_(t,e,n){var i=Ni(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,bn(a,o)){var l=e.interleaved;l===null?(r.next=r,df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Im(t,e,r,i),n!==null&&(r=Vt(),Ln(n,t,i,r),n0(n,e,i))}}function e0(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function t0(t,e){Ks=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zc(t,n)}}var $a={readContext:_n,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},m_={readContext:_n,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:Dd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4194308,4,qm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ta(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=In();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=h_.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:bd,useDebugValue:yf,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=bd(!1),e=t[0];return t=d_.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=In();if(st){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Rt===null)throw Error(te(349));gr&30||Bm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dd(Vm.bind(null,i,s,t),[t]),i.flags|=2048,go(9,Hm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=In(),e=Rt.identifierPrefix;if(st){var n=ni,i=ti;n=(i&~(1<<32-Pn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=f_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},g_={readContext:_n,useCallback:Km,useContext:_n,useEffect:Sf,useImperativeHandle:$m,useInsertionEffect:jm,useLayoutEffect:Ym,useMemo:Zm,useReducer:Jl,useRef:Xm,useState:function(){return Jl(mo)},useDebugValue:yf,useDeferredValue:function(t){var e=xn();return Qm(e,xt.memoizedState,t)},useTransition:function(){var t=Jl(mo)[0],e=xn().memoizedState;return[t,e]},useMutableSource:km,useSyncExternalStore:zm,useId:Jm,unstable_isNewReconciler:!1},v_={readContext:_n,useCallback:Km,useContext:_n,useEffect:Sf,useImperativeHandle:$m,useInsertionEffect:jm,useLayoutEffect:Ym,useMemo:Zm,useReducer:eu,useRef:Xm,useState:function(){return eu(mo)},useDebugValue:yf,useDeferredValue:function(t){var e=xn();return xt===null?e.memoizedState=t:Qm(e,xt.memoizedState,t)},useTransition:function(){var t=eu(mo)[0],e=xn().memoizedState;return[t,e]},useMutableSource:km,useSyncExternalStore:zm,useId:Jm,unstable_isNewReconciler:!1};function wn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Ni(t),s=ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,r),e!==null&&(Ln(e,t,r,i),Ea(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Vt(),r=Ni(t),s=ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,r),e!==null&&(Ln(e,t,r,i),Ea(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),i=Ni(t),r=ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=Di(t,r,i),e!==null&&(Ln(e,t,i,n),Ea(e,t,i))}};function Ud(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,i)||!ao(r,s):!0}function i0(t,e,n){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(r=Kt(e)?pr:kt.current,i=e.contextTypes,s=(i=i!=null)?cs(t,r):zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function gc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=_n(s):(s=Kt(e)?pr:kt.current,r.context=cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gl.enqueueReplaceState(r,r.state,null),ja(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,e){try{var n="",i=e;do n+=Xg(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var __=typeof WeakMap=="function"?WeakMap:Map;function r0(t,e,n){n=ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Za||(Za=!0,Cc=i),vc(t,e)},n}function s0(t,e,n){n=ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vc(t,e),typeof i!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Id(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new __;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=D_.bind(null,t,e,n),e.then(t,t))}function Fd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Od(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ri(-1,1),e.tag=2,Di(n,e,1))),n.lanes|=1),t)}var x_=fi.ReactCurrentOwner,qt=!1;function Ht(t,e,n,i){e.child=t===null?Nm(e,null,n,i):ds(e,t.child,n,i)}function kd(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=_f(t,e,n,i,s,r),n=xf(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,li(t,e,r)):(st&&n&&of(e),e.flags|=1,Ht(t,e,i,r),e.child)}function zd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o0(t,e,s,i,r)):(t=Pa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,i)&&t.ref===e.ref)return li(t,e,r)}return e.flags|=1,t=Ii(s,i),t.ref=e.ref,t.return=e,e.child=t}function o0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ao(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,li(t,e,r)}return _c(t,e,n,i,r)}function a0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Qr,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Qr,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(Qr,rn),rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(Qr,rn),rn|=i;return Ht(t,e,r,n),e.child}function l0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _c(t,e,n,i,r){var s=Kt(n)?pr:kt.current;return s=cs(e,s),rs(e,r),n=_f(t,e,n,i,s,r),i=xf(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,li(t,e,r)):(st&&i&&of(e),e.flags|=1,Ht(t,e,n,r),e.child)}function Bd(t,e,n,i,r){if(Kt(n)){var s=!0;Ha(e)}else s=!1;if(rs(e,r),e.stateNode===null)Aa(t,e),i0(e,n,i),gc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=Kt(n)?pr:kt.current,u=cs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Nd(e,o,i,u),yi=!1;var d=e.memoizedState;o.state=d,ja(e,i,o,r),l=e.memoizedState,a!==i||d!==l||$t.current||yi?(typeof f=="function"&&(mc(e,n,f,i),l=e.memoizedState),(a=yi||Ud(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:wn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=Kt(n)?pr:kt.current,l=cs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Nd(e,o,i,l),yi=!1,d=e.memoizedState,o.state=d,ja(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||$t.current||yi?(typeof p=="function"&&(mc(e,n,p,i),_=e.memoizedState),(u=yi||Ud(e,n,u,i,d,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return xc(t,e,n,i,s,r)}function xc(t,e,n,i,r,s){l0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Td(e,n,!1),li(t,e,s);i=e.stateNode,x_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,a,s)):Ht(t,e,a,s),e.memoizedState=i.state,r&&Td(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?wd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wd(t,e.context,!1),pf(t,e.containerInfo)}function Hd(t,e,n,i,r){return fs(),lf(r),e.flags|=256,Ht(t,e,n,i),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function c0(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(at,r&1),t===null)return hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,i,0,null),t=dr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yc(n),e.memoizedState=Sc,t):Mf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return S_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ii(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ii(a,s):(s=dr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?yc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sc,i}return s=t.child,t=s.sibling,i=Ii(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Mf(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wo(t,e,n,i){return i!==null&&lf(i),ds(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function S_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(te(422))),Wo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xl({mode:"visible",children:i.children},r,0,null),s=dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=yc(o),e.memoizedState=Sc,s);if(!(e.mode&1))return Wo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=tu(s,i,void 0),Wo(t,e,o,i)}if(a=(o&t.childLanes)!==0,qt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(t,r),Ln(i,t,r,-1))}return Rf(),i=tu(Error(te(421))),Wo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=U_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,sn=bi(r.nextSibling),on=e,st=!0,An=null,t!==null&&(hn[pn++]=ti,hn[pn++]=ni,hn[pn++]=mr,ti=t.id,ni=t.overflow,mr=e),e=Mf(e,i.children),e.flags|=4096,e)}function Vd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pc(t.return,e,n)}function nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function f0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ht(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vd(t,n,e);else if(t.tag===19)Vd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ya(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function y_(t,e,n){switch(e.tag){case 3:u0(e),fs();break;case 5:Om(e);break;case 1:Kt(e.type)&&Ha(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Wa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?c0(t,e,n):(tt(at,at.current&1),t=li(t,e,n),t!==null?t.sibling:null);tt(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return f0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n)}return li(t,e,n)}var d0,Mc,h0,p0;d0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};h0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,lr(Gn.current);var s=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),s=[];break;case"textarea":r=Yu(t,r),i=Yu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=za)}$u(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};p0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Us(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function M_(t,e,n){var i=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Kt(e.type)&&Ba(),Nt(e),null;case 3:return i=e.stateNode,hs(),rt($t),rt(kt),gf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Lc(An),An=null))),Mc(t,e),Nt(e),null;case 5:mf(e);var r=lr(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)h0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Nt(e),null}if(t=lr(Gn.current),Vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[kn]=e,i[co]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Gs.length;r++)nt(Gs[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Zf(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":Jf(i,s),nt("invalid",i)}$u(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ho(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ho(i.textContent,a,t),r=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":Uo(i),Qf(i,s,!0);break;case"textarea":Uo(i),ed(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=za)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[kn]=e,t[co]=i,d0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ku(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Gs.length;r++)nt(Gs[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Zf(t,i),r=Wu(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Jf(t,i),r=Yu(t,i),nt("invalid",t);break;default:r=i}$u(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&Xc(t,s,l,o))}switch(n){case"input":Uo(t),Qf(t,i,!1);break;case"textarea":Uo(t),ed(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)p0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=lr(ho.current),lr(Gn.current),Vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[kn]=e,(s=i.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:Ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[kn]=e,e.stateNode=i}return Nt(e),null;case 13:if(rt(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&sn!==null&&e.mode&1&&!(e.flags&128))Dm(),fs(),e.flags|=98560,s=!1;else if(s=Vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[kn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else An!==null&&(Lc(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?St===0&&(St=3):Rf())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return hs(),Mc(t,e),t===null&&lo(e.stateNode.containerInfo),Nt(e),null;case 10:return ff(e.type._context),Nt(e),null;case 17:return Kt(e.type)&&Ba(),Nt(e),null;case 19:if(rt(at),s=e.memoizedState,s===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Us(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,Us(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>ms&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ya(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return Nt(e),null}else 2*mt()-s.renderingStartTime>ms&&n!==1073741824&&(e.flags|=128,i=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=at.current,tt(at,i?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?rn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function E_(t,e){switch(af(e),e.tag){case 1:return Kt(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),rt($t),rt(kt),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(rt(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(at),null;case 4:return hs(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var Xo=!1,Ot=!1,w_=typeof WeakSet=="function"?WeakSet:Set,me=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function Ec(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Gd=!1;function T_(t,e){if(oc=Fa,t=xm(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ac={focusedElem:t,selectionRange:n},Fa=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:wn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){dt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=Gd,Gd=!1,_}function Zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ec(e,n,s)}r=r.next}while(r!==i)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[co],delete e[cc],delete e[a_],delete e[l_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g0(t){return t.tag===5||t.tag===3||t.tag===4}function Wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(i!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}function Ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}var Pt=null,Tn=!1;function hi(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ot||Zr(n,e);case 6:var i=Pt,r=Tn;Pt=null,hi(t,e,n),Pt=i,Tn=r,Pt!==null&&(Tn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Tn?(t=Pt,n=n.stateNode,t.nodeType===8?$l(t.parentNode,n):t.nodeType===1&&$l(t,n),so(t)):$l(Pt,n.stateNode));break;case 4:i=Pt,r=Tn,Pt=n.stateNode.containerInfo,Tn=!0,hi(t,e,n),Pt=i,Tn=r;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ec(n,e,o),r=r.next}while(r!==i)}hi(t,e,n);break;case 1:if(!Ot&&(Zr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}hi(t,e,n);break;case 21:hi(t,e,n);break;case 22:n.mode&1?(Ot=(i=Ot)||n.memoizedState!==null,hi(t,e,n),Ot=i):hi(t,e,n);break;default:hi(t,e,n)}}function Xd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new w_),e.forEach(function(i){var r=N_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Tn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Tn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(Pt===null)throw Error(te(160));v0(s,o,r),Pt=null,Tn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_0(e,t),e=e.sibling}function _0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Nn(t),i&4){try{Zs(3,t,t.return),vl(3,t)}catch(x){dt(t,t.return,x)}try{Zs(5,t,t.return)}catch(x){dt(t,t.return,x)}}break;case 1:Sn(e,t),Nn(t),i&512&&n!==null&&Zr(n,n.return);break;case 5:if(Sn(e,t),Nn(t),i&512&&n!==null&&Zr(n,n.return),t.flags&32){var r=t.stateNode;try{to(r,"")}catch(x){dt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bp(r,s),Ku(a,o);var u=Ku(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Xp(r,h):f==="dangerouslySetInnerHTML"?Gp(r,h):f==="children"?to(r,h):Xc(r,f,h,u)}switch(a){case"input":Xu(r,s);break;case"textarea":Hp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?es(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[co]=s}catch(x){dt(t,t.return,x)}}break;case 6:if(Sn(e,t),Nn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){dt(t,t.return,x)}}break;case 3:if(Sn(e,t),Nn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(x){dt(t,t.return,x)}break;case 4:Sn(e,t),Nn(t);break;case 13:Sn(e,t),Nn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Tf=mt())),i&4&&Xd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||f,Sn(e,t),Ot=u):Sn(e,t),Nn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(h=me=f;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Zs(4,d,d.return);break;case 1:Zr(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){dt(i,n,x)}}break;case 5:Zr(d,d.return);break;case 22:if(d.memoizedState!==null){Yd(h);continue}}p!==null?(p.return=d,me=p):Yd(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wp("display",o))}catch(x){dt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){dt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Sn(e,t),Nn(t),i&4&&Xd(t);break;case 21:break;default:Sn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(to(r,""),i.flags&=-33);var s=Wd(t);Ac(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wd(t);Tc(t,a,o);break;default:throw Error(te(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function A_(t,e,n){me=t,x0(t)}function x0(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Xo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=Xo;var u=Ot;if(Xo=o,(Ot=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?qd(r):l!==null?(l.return=o,me=l):qd(r);for(;s!==null;)me=s,x0(s),s=s.sibling;me=r,Xo=a,Ot=u}jd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):jd(t)}}function jd(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ld(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ld(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&so(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ot||e.flags&512&&wc(e)}catch(d){dt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Yd(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function qd(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{wc(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{wc(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var C_=Math.ceil,Ka=fi.ReactCurrentDispatcher,Ef=fi.ReactCurrentOwner,vn=fi.ReactCurrentBatchConfig,Ge=0,Rt=null,_t=null,bt=0,rn=0,Qr=Gi(0),St=0,vo=null,vr=0,_l=0,wf=0,Qs=null,jt=null,Tf=0,ms=1/0,Qn=null,Za=!1,Cc=null,Ui=null,jo=!1,Ai=null,Qa=0,Js=0,Rc=null,Ca=-1,Ra=0;function Vt(){return Ge&6?mt():Ca!==-1?Ca:Ca=mt()}function Ni(t){return t.mode&1?Ge&2&&bt!==0?bt&-bt:c_.transition!==null?(Ra===0&&(Ra=im()),Ra):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:cm(t.type)),t):1}function Ln(t,e,n,i){if(50<Js)throw Js=0,Rc=null,Error(te(185));xo(t,n,i),(!(Ge&2)||t!==Rt)&&(t===Rt&&(!(Ge&2)&&(_l|=n),St===4&&Ei(t,bt)),Zt(t,i),n===1&&Ge===0&&!(e.mode&1)&&(ms=mt()+500,pl&&Wi()))}function Zt(t,e){var n=t.callbackNode;cv(t,e);var i=Ia(t,t===Rt?bt:0);if(i===0)n!==null&&id(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&id(n),e===1)t.tag===0?u_($d.bind(null,t)):Pm($d.bind(null,t)),s_(function(){!(Ge&6)&&Wi()}),n=null;else{switch(rm(i)){case 1:n=Kc;break;case 4:n=tm;break;case 16:n=Na;break;case 536870912:n=nm;break;default:n=Na}n=C0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Ca=-1,Ra=0,Ge&6)throw Error(te(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Ia(t,t===Rt?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ja(t,i);else{e=i;var r=Ge;Ge|=2;var s=M0();(Rt!==t||bt!==e)&&(Qn=null,ms=mt()+500,fr(t,e));do try{L_();break}catch(a){y0(t,a)}while(!0);cf(),Ka.current=s,Ge=r,_t!==null?e=0:(Rt=null,bt=0,e=St)}if(e!==0){if(e===2&&(r=tc(t),r!==0&&(i=r,e=Pc(t,r))),e===1)throw n=vo,fr(t,0),Ei(t,i),Zt(t,mt()),n;if(e===6)Ei(t,i);else{if(r=t.current.alternate,!(i&30)&&!R_(r)&&(e=Ja(t,i),e===2&&(s=tc(t),s!==0&&(i=s,e=Pc(t,s))),e===1))throw n=vo,fr(t,0),Ei(t,i),Zt(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:tr(t,jt,Qn);break;case 3:if(Ei(t,i),(i&130023424)===i&&(e=Tf+500-mt(),10<e)){if(Ia(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Vt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uc(tr.bind(null,t,jt,Qn),e);break}tr(t,jt,Qn);break;case 4:if(Ei(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Pn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*C_(i/1960))-i,10<i){t.timeoutHandle=uc(tr.bind(null,t,jt,Qn),i);break}tr(t,jt,Qn);break;case 5:tr(t,jt,Qn);break;default:throw Error(te(329))}}}return Zt(t,mt()),t.callbackNode===n?S0.bind(null,t):null}function Pc(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=Ja(t,e),t!==2&&(e=jt,jt=n,e!==null&&Lc(e)),t}function Lc(t){jt===null?jt=t:jt.push.apply(jt,t)}function R_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~wf,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),i=1<<n;t[n]=-1,e&=~i}}function $d(t){if(Ge&6)throw Error(te(327));ss();var e=Ia(t,0);if(!(e&1))return Zt(t,mt()),null;var n=Ja(t,e);if(t.tag!==0&&n===2){var i=tc(t);i!==0&&(e=i,n=Pc(t,i))}if(n===1)throw n=vo,fr(t,0),Ei(t,e),Zt(t,mt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,jt,Qn),Zt(t,mt()),null}function Af(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(ms=mt()+500,pl&&Wi())}}function _r(t){Ai!==null&&Ai.tag===0&&!(Ge&6)&&ss();var e=Ge;Ge|=1;var n=vn.transition,i=Ke;try{if(vn.transition=null,Ke=1,t)return t()}finally{Ke=i,vn.transition=n,Ge=e,!(Ge&6)&&Wi()}}function Cf(){rn=Qr.current,rt(Qr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r_(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(af(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ba();break;case 3:hs(),rt($t),rt(kt),gf();break;case 5:mf(i);break;case 4:hs();break;case 13:rt(at);break;case 19:rt(at);break;case 10:ff(i.type._context);break;case 22:case 23:Cf()}n=n.return}if(Rt=t,_t=t=Ii(t.current,null),bt=rn=e,St=0,vo=null,wf=_l=vr=0,jt=Qs=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ar=null}return t}function y0(t,e){do{var n=_t;try{if(cf(),wa.current=$a,qa){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qa=!1}if(gr=0,Ct=xt=lt=null,Ks=!1,po=0,Ef.current=null,n===null||n.return===null){St=1,vo=e,_t=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Fd(o);if(p!==null){p.flags&=-257,Od(p,o,a,s,e),p.mode&1&&Id(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Id(s,u,e),Rf();break e}l=Error(te(426))}}else if(st&&a.mode&1){var m=Fd(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Od(m,o,a,s,e),lf(ps(l,a));break e}}s=l=ps(l,a),St!==4&&(St=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=r0(s,l,e);Pd(s,c);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ui===null||!Ui.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=s0(s,a,e);Pd(s,M);break e}}s=s.return}while(s!==null)}w0(n)}catch(L){e=L,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function M0(){var t=Ka.current;return Ka.current=$a,t===null?$a:t}function Rf(){(St===0||St===3||St===2)&&(St=4),Rt===null||!(vr&268435455)&&!(_l&268435455)||Ei(Rt,bt)}function Ja(t,e){var n=Ge;Ge|=2;var i=M0();(Rt!==t||bt!==e)&&(Qn=null,fr(t,e));do try{P_();break}catch(r){y0(t,r)}while(!0);if(cf(),Ge=n,Ka.current=i,_t!==null)throw Error(te(261));return Rt=null,bt=0,St}function P_(){for(;_t!==null;)E0(_t)}function L_(){for(;_t!==null&&!tv();)E0(_t)}function E0(t){var e=A0(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?w0(t):_t=e,Ef.current=null}function w0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=E_(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,_t=null;return}}else if(n=M_(n,e,rn),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);St===0&&(St=5)}function tr(t,e,n){var i=Ke,r=vn.transition;try{vn.transition=null,Ke=1,b_(t,e,n,i)}finally{vn.transition=r,Ke=i}return null}function b_(t,e,n,i){do ss();while(Ai!==null);if(Ge&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fv(t,s),t===Rt&&(_t=Rt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,C0(Na,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Ke;Ke=1;var a=Ge;Ge|=4,Ef.current=null,T_(t,n),_0(n,t),Zv(ac),Fa=!!oc,ac=oc=null,t.current=n,A_(n),nv(),Ge=a,Ke=o,vn.transition=s}else t.current=n;if(jo&&(jo=!1,Ai=t,Qa=r),s=t.pendingLanes,s===0&&(Ui=null),sv(n.stateNode),Zt(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Za)throw Za=!1,t=Cc,Cc=null,t;return Qa&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===Rc?Js++:(Js=0,Rc=t):Js=0,Wi(),null}function ss(){if(Ai!==null){var t=rm(Qa),e=vn.transition,n=Ke;try{if(vn.transition=null,Ke=16>t?16:t,Ai===null)var i=!1;else{if(t=Ai,Ai=null,Qa=0,Ge&6)throw Error(te(331));var r=Ge;for(Ge|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:Zs(8,f,s)}var h=f.child;if(h!==null)h.return=f,me=h;else for(;me!==null;){f=me;var d=f.sibling,p=f.return;if(m0(f),f===u){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,me=c;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(L){dt(a,a.return,L)}if(a===o){me=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,me=M;break e}me=a.return}}if(Ge=r,Wi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(ul,t)}catch{}i=!0}return i}finally{Ke=n,vn.transition=e}}return!1}function Kd(t,e,n){e=ps(n,e),e=r0(t,e,1),t=Di(t,e,1),e=Vt(),t!==null&&(xo(t,1,e),Zt(t,e))}function dt(t,e,n){if(t.tag===3)Kd(t,t,n);else for(;e!==null;){if(e.tag===3){Kd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ui===null||!Ui.has(i))){t=ps(n,t),t=s0(e,t,1),e=Di(e,t,1),t=Vt(),e!==null&&(xo(e,1,t),Zt(e,t));break}}e=e.return}}function D_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(bt&n)===n&&(St===4||St===3&&(bt&130023424)===bt&&500>mt()-Tf?fr(t,0):wf|=n),Zt(t,e)}function T0(t,e){e===0&&(t.mode&1?(e=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):e=1);var n=Vt();t=ai(t,e),t!==null&&(xo(t,e,n),Zt(t,n))}function U_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T0(t,n)}function N_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),T0(t,n)}var A0;A0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,y_(t,e,n);qt=!!(t.flags&131072)}else qt=!1,st&&e.flags&1048576&&Lm(e,Ga,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Aa(t,e),t=e.pendingProps;var r=cs(e,kt.current);rs(e,n),r=_f(null,e,i,t,r,n);var s=xf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(i)?(s=!0,Ha(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hf(e),r.updater=gl,e.stateNode=r,r._reactInternals=e,gc(e,i,t,n),e=xc(null,e,i,!0,s,n)):(e.tag=0,st&&s&&of(e),Ht(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Aa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=F_(i),t=wn(i,t),r){case 0:e=_c(null,e,i,t,n);break e;case 1:e=Bd(null,e,i,t,n);break e;case 11:e=kd(null,e,i,t,n);break e;case 14:e=zd(null,e,i,wn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),_c(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Bd(t,e,i,r,n);case 3:e:{if(u0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fm(t,e),ja(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ps(Error(te(423)),e),e=Hd(t,e,i,n,r);break e}else if(i!==r){r=ps(Error(te(424)),e),e=Hd(t,e,i,n,r);break e}else for(sn=bi(e.stateNode.containerInfo.firstChild),on=e,st=!0,An=null,n=Nm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),i===r){e=li(t,e,n);break e}Ht(t,e,i,n)}e=e.child}return e;case 5:return Om(e),t===null&&hc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,lc(i,r)?o=null:s!==null&&lc(i,s)&&(e.flags|=32),l0(t,e),Ht(t,e,o,n),e.child;case 6:return t===null&&hc(e),null;case 13:return c0(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ds(e,null,i,n):Ht(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),kd(t,e,i,r,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(Wa,i._currentValue),i._currentValue=o,s!==null)if(bn(s.value,o)){if(s.children===r.children&&!$t.current){e=li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ri(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ht(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=_n(r),i=i(r),e.flags|=1,Ht(t,e,i,n),e.child;case 14:return i=e.type,r=wn(i,e.pendingProps),r=wn(i.type,r),zd(t,e,i,r,n);case 15:return o0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Aa(t,e),e.tag=1,Kt(i)?(t=!0,Ha(e)):t=!1,rs(e,n),i0(e,i,r),gc(e,i,r,n),xc(null,e,i,!0,t,n);case 19:return f0(t,e,n);case 22:return a0(t,e,n)}throw Error(te(156,e.tag))};function C0(t,e){return em(t,e)}function I_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,i){return new I_(t,e,n,i)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F_(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yc)return 11;if(t===qc)return 14}return 2}function Ii(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return dr(n.children,r,s,e);case jc:o=8,r|=8;break;case Bu:return t=mn(12,n,e,r|2),t.elementType=Bu,t.lanes=s,t;case Hu:return t=mn(13,n,e,r),t.elementType=Hu,t.lanes=s,t;case Vu:return t=mn(19,n,e,r),t.elementType=Vu,t.lanes=s,t;case Op:return xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ip:o=10;break e;case Fp:o=9;break e;case Yc:o=11;break e;case qc:o=14;break e;case Si:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function dr(t,e,n,i){return t=mn(7,t,i,e),t.lanes=n,t}function xl(t,e,n,i){return t=mn(22,t,i,e),t.elementType=Op,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function O_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,i,r,s,o,a,l){return t=new O_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),t}function k_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function R0(t){if(!t)return zi;t=t._reactInternals;e:{if(yr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Kt(n))return Rm(t,n,e)}return e}function P0(t,e,n,i,r,s,o,a,l){return t=Lf(n,i,!0,t,r,s,o,a,l),t.context=R0(null),n=t.current,i=Vt(),r=Ni(n),s=ri(i,r),s.callback=e??null,Di(n,s,r),t.current.lanes=r,xo(t,r,i),Zt(t,i),t}function Sl(t,e,n,i){var r=e.current,s=Vt(),o=Ni(r);return n=R0(n),e.context===null?e.context=n:e.pendingContext=n,e=ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Di(r,e,o),t!==null&&(Ln(t,r,o,s),Ea(t,r,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){Zd(t,e),(t=t.alternate)&&Zd(t,e)}function z_(){return null}var L0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}yl.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Sl(t,e,null,null)};yl.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Sl(null,t,null,null)}),e[oi]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mi.length&&e!==0&&e<Mi[n].priority;n++);Mi.splice(n,0,t),n===0&&um(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function B_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=el(o);s.call(u)}}var o=P0(e,i,t,0,null,!1,!1,"",Qd);return t._reactRootContainer=o,t[oi]=o.current,lo(t.nodeType===8?t.parentNode:t),_r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=el(l);a.call(u)}}var l=Lf(t,0,!1,null,null,!1,!1,"",Qd);return t._reactRootContainer=l,t[oi]=l.current,lo(t.nodeType===8?t.parentNode:t),_r(function(){Sl(e,l,n,i)}),l}function El(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=el(o);a.call(l)}}Sl(e,o,t,r)}else o=B_(n,e,t,r,i);return el(o)}sm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(Zc(e,n|1),Zt(e,mt()),!(Ge&6)&&(ms=mt()+500,Wi()))}break;case 13:_r(function(){var i=ai(t,1);if(i!==null){var r=Vt();Ln(i,t,1,r)}}),bf(t,1)}};Qc=function(t){if(t.tag===13){var e=ai(t,134217728);if(e!==null){var n=Vt();Ln(e,t,134217728,n)}bf(t,134217728)}};om=function(t){if(t.tag===13){var e=Ni(t),n=ai(t,e);if(n!==null){var i=Vt();Ln(n,t,e,i)}bf(t,e)}};am=function(){return Ke};lm=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};Qu=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hl(i);if(!r)throw Error(te(90));zp(i),Xu(i,r)}}}break;case"textarea":Hp(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};qp=Af;$p=_r;var H_={usingClientEntryPoint:!1,Events:[yo,jr,hl,jp,Yp,Af]},Ns={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V_={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{ul=Yo.inject(V_),Vn=Yo}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(te(200));return k_(t,e,null,n)};un.createRoot=function(t,e){if(!Uf(t))throw Error(te(299));var n=!1,i="",r=L0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,i,r),t[oi]=e.current,lo(t.nodeType===8?t.parentNode:t),new Df(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Qp(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return _r(t)};un.hydrate=function(t,e,n){if(!Ml(e))throw Error(te(200));return El(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=L0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n??null,r,!1,s,o),t[oi]=e.current,lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yl(e)};un.render=function(t,e,n){if(!Ml(e))throw Error(te(200));return El(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(te(40));return t._reactRootContainer?(_r(function(){El(null,null,t,!1,function(){t._reactRootContainer=null,t[oi]=null})}),!0):!1};un.unstable_batchedUpdates=Af;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ml(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return El(t,e,n,!1,i)};un.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bp.exports=un;var G_=bp.exports,Jd=G_;ku.createRoot=Jd.createRoot,ku.hydrateRoot=Jd.hydrateRoot;const D0=Je.createContext(),W_={pt:{navHome:"Início",navAbout:"Sobre Mim",navServices:"O que entrego",navProjects:"Projetos",navCv:"Baixar currículo",navContact:"Fale comigo",heroH5:"BEM-VINDO AO MEU PORTFÓLIO",heroH1Pre:"UX/UI Designer Jr e ",heroH1Em:"explorador",heroH1Post:" de inovações",aboutLabelPt:"Sobre mim",aboutLabelEn:"About me",aboutDecryptText:"CONSTRUO SOLUÇÕES EM UX E UI ALIADO AO VIBE CODE EM UM WORKFLOW COMPLETO COM FOCO EM RESULTADOS E PRODUTOS DE ALTO VALOR.",themeDark:"Dark",themeLight:"Light"},en:{navHome:"Home",navAbout:"About Me",navServices:"Services",navProjects:"Projects",navCv:"Download CV",navContact:"Contact Me",heroH5:"WELCOME TO MY PORTFOLIO",heroH1Pre:"UX/UI Designer Jr and ",heroH1Em:"explorer",heroH1Post:" of innovations",aboutLabelPt:"Sobre mim",aboutLabelEn:"About me",aboutDecryptText:"BUILDING UX & UI SOLUTIONS COMBINED WITH VIBE CODE IN A COMPLETE WORKFLOW FOCUSED ON RESULTS AND HIGH-VALUE PRODUCTS.",themeDark:"Dark",themeLight:"Light"}};function X_({children:t}){const[e,n]=Je.useState("dark"),[i,r]=Je.useState("pt"),s=()=>{n(l=>l==="dark"?"light":"dark")},o=()=>{r(l=>l==="pt"?"en":"pt")},a=W_[i];return Je.useEffect(()=>{e==="light"?document.documentElement.classList.add("light-theme"):document.documentElement.classList.remove("light-theme")},[e]),pe.jsx(D0.Provider,{value:{theme:e,lang:i,toggleTheme:s,toggleLang:o,t:a},children:t})}function Nf(){return Je.useContext(D0)}const U0="/assets/logo-gabux-light-Hn4x35dM.svg",N0="/assets/logo-gabux-dark-Bo2fYsiv.svg",j_="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_267_1106)'%3e%3cpath%20d='M4.545%206.714L4.11%208H3L4.862%203H6.146L8%208H6.833L6.398%206.714H4.545ZM6.179%205.978L5.5%203.956H5.451L4.772%205.978H6.179Z'%20fill='white'/%3e%3cpath%20d='M0%202C0%201.46957%200.210714%200.960859%200.585786%200.585786C0.960859%200.210714%201.46957%200%202%200L9%200C9.53043%200%2010.0391%200.210714%2010.4142%200.585786C10.7893%200.960859%2011%201.46957%2011%202V5H14C14.5304%205%2015.0391%205.21071%2015.4142%205.58579C15.7893%205.96086%2016%206.46957%2016%207V14C16%2014.5304%2015.7893%2015.0391%2015.4142%2015.4142C15.0391%2015.7893%2014.5304%2016%2014%2016H7C6.46957%2016%205.96086%2015.7893%205.58579%2015.4142C5.21071%2015.0391%205%2014.5304%205%2014V11H2C1.46957%2011%200.960859%2010.7893%200.585786%2010.4142C0.210714%2010.0391%200%209.53043%200%209V2ZM2%201C1.73478%201%201.48043%201.10536%201.29289%201.29289C1.10536%201.48043%201%201.73478%201%202V9C1%209.26522%201.10536%209.51957%201.29289%209.70711C1.48043%209.89464%201.73478%2010%202%2010H9C9.26522%2010%209.51957%209.89464%209.70711%209.70711C9.89464%209.51957%2010%209.26522%2010%209V2C10%201.73478%209.89464%201.48043%209.70711%201.29289C9.51957%201.10536%209.26522%201%209%201H2ZM9.138%2010.995C9.33067%2011.2957%209.54067%2011.5777%209.768%2011.841C9.02%2012.416%208.095%2012.842%207%2013.133C7.178%2013.35%207.451%2013.768%207.555%2014C8.68%2013.641%209.635%2013.156%2010.441%2012.506C11.218%2013.171%2012.18%2013.671%2013.371%2013.978C13.504%2013.724%2013.785%2013.305%2014%2013.088C12.875%2012.835%2011.943%2012.394%2011.18%2011.804C11.861%2011.057%2012.402%2010.153%2012.801%209.047H14V8H11V9.047H11.765C11.447%209.891%2011.025%2010.593%2010.493%2011.177C10.346%2011.0205%2010.2074%2010.8563%2010.078%2010.685C9.79559%2010.8655%209.47236%2010.9721%209.138%2010.995Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_267_1106'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Y_="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_267_1111)'%3e%3cpath%20d='M4.545%206.714L4.11%208H3L4.862%203H6.146L8%208H6.833L6.398%206.714H4.545ZM6.179%205.978L5.5%203.956H5.451L4.772%205.978H6.179Z'%20fill='%230A0A0A'/%3e%3cpath%20d='M0%202C0%201.46957%200.210714%200.960859%200.585786%200.585786C0.960859%200.210714%201.46957%200%202%200L9%200C9.53043%200%2010.0391%200.210714%2010.4142%200.585786C10.7893%200.960859%2011%201.46957%2011%202V5H14C14.5304%205%2015.0391%205.21071%2015.4142%205.58579C15.7893%205.96086%2016%206.46957%2016%207V14C16%2014.5304%2015.7893%2015.0391%2015.4142%2015.4142C15.0391%2015.7893%2014.5304%2016%2014%2016H7C6.46957%2016%205.96086%2015.7893%205.58579%2015.4142C5.21071%2015.0391%205%2014.5304%205%2014V11H2C1.46957%2011%200.960859%2010.7893%200.585786%2010.4142C0.210714%2010.0391%200%209.53043%200%209V2ZM2%201C1.73478%201%201.48043%201.10536%201.29289%201.29289C1.10536%201.48043%201%201.73478%201%202V9C1%209.26522%201.10536%209.51957%201.29289%209.70711C1.48043%209.89464%201.73478%2010%202%2010H9C9.26522%2010%209.51957%209.89464%209.70711%209.70711C9.89464%209.51957%2010%209.26522%2010%209V2C10%201.73478%209.89464%201.48043%209.70711%201.29289C9.51957%201.10536%209.26522%201%209%201H2ZM9.138%2010.995C9.33067%2011.2957%209.54067%2011.5777%209.768%2011.841C9.02%2012.416%208.095%2012.842%207%2013.133C7.178%2013.35%207.451%2013.768%207.555%2014C8.68%2013.641%209.635%2013.156%2010.441%2012.506C11.218%2013.171%2012.18%2013.671%2013.371%2013.978C13.504%2013.724%2013.785%2013.305%2014%2013.088C12.875%2012.835%2011.943%2012.394%2011.18%2011.804C11.861%2011.057%2012.402%2010.153%2012.801%209.047H14V8H11V9.047H11.765C11.447%209.891%2011.025%2010.593%2010.493%2011.177C10.346%2011.0205%2010.2074%2010.8563%2010.078%2010.685C9.79559%2010.8655%209.47236%2010.9721%209.138%2010.995Z'%20fill='%230A0A0A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_267_1111'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",q_="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2016L7%2011L8.4%209.55L11%2012.15V4H13V12.15L15.6%209.55L17%2011L12%2016Z'%20fill='%23F6FBFF'/%3e%3cpath%20d='M4.588%2019.413C4.97933%2019.8043%205.45%2020%206%2020H18C18.5507%2020.0007%2019.0217%2019.805%2019.413%2019.413C19.8043%2019.021%2020%2018.55%2020%2018V15H18V18H6V15H4V18C4.00067%2018.5507%204.19667%2019.0217%204.588%2019.413Z'%20fill='%23F6FBFF'%20fill-opacity='0.5'/%3e%3c/svg%3e",$_="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2016L7%2011L8.4%209.55L11%2012.15V4H13V12.15L15.6%209.55L17%2011L12%2016Z'%20fill='%230A0A0A'/%3e%3cpath%20d='M4.588%2019.413C4.97933%2019.8043%205.45%2020%206%2020H18C18.5507%2020.0007%2019.0217%2019.805%2019.413%2019.413C19.8043%2019.021%2020%2018.55%2020%2018V15H18V18H6V15H4V18C4.00067%2018.5507%204.19667%2019.0217%204.588%2019.413Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3c/svg%3e";function K_({logoOpacity:t=0,isScrolled:e=!1}){const{theme:n,lang:i,toggleTheme:r,toggleLang:s,t:o}=Nf(),a=n==="dark",l=a?U0:N0,u=a?j_:Y_,f=a?q_:$_;return pe.jsxs("header",{className:`fixed top-0 left-0 w-full h-[70px] z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-500 box-border border-b ${a?"bg-black/70 border-white/5 text-white":"bg-white/70 border-black/5 text-black"} backdrop-blur-md`,style:{opacity:e?1:0,pointerEvents:e?"auto":"none"},children:[pe.jsxs("div",{className:"flex items-center gap-6 md:gap-8 w-1/3",children:[pe.jsx("a",{href:"#hero",className:"text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity",children:o.navHome}),pe.jsx("a",{href:"#sobre-mim",className:"text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity",children:o.navAbout}),pe.jsx("a",{href:"#entrego",className:"text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity hidden sm:inline",children:o.navServices}),pe.jsxs("button",{onClick:r,className:`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded border transition-all ${a?"border-white/20 hover:border-white text-white/80 bg-white/5":"border-black/20 hover:border-black text-black/80 bg-black/5"}`,title:"Alternar Tema (Dark / Light)",children:[pe.jsx("span",{className:`w-2 h-2 rounded-full ${a?"bg-amber-400 animate-pulse":"bg-blue-600"}`}),pe.jsx("span",{children:a?"Dark":"Light"})]})]}),pe.jsxs("div",{className:"flex items-center gap-3 justify-center w-1/3",children:[pe.jsx("img",{src:l,alt:"Gabux Logo",className:"h-8 md:h-9 object-contain transition-opacity duration-300"}),pe.jsx("button",{onClick:s,className:"p-1.5 rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-transform active:scale-95",title:`Idioma atual: ${i.toUpperCase()} - Clique para alternar`,children:pe.jsx("img",{src:u,alt:"Translate",className:"w-5 h-5 object-contain"})})]}),pe.jsxs("div",{className:"flex items-center justify-end gap-6 md:gap-8 w-1/3",children:[pe.jsx("a",{href:"#projetos",className:"text-xs md:text-sm font-mori opacity-75 hover:opacity-100 transition-opacity hidden md:inline",children:o.navProjects}),pe.jsxs("a",{href:"/files/currículo-gabux.pdf",target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono transition-all duration-300 ${a?"bg-white text-black hover:bg-transparent hover:border-white hover:text-white border border-transparent":"bg-black text-white hover:bg-transparent hover:border-black hover:text-black border border-transparent"}`,children:[pe.jsx("span",{children:o.navCv}),pe.jsx("img",{src:f,alt:"Download CV",className:"w-3.5 h-3.5 object-contain"})]})]})]})}const Z_=["motion","web","design","cloud","creative","effects","ui/ux","code","frontend","visuals","system","react","nextjs","interface","animation","framer","figma","prototype","startup","innovation","development","javascript","html5","css3","backend","fullstack","database","api","serverless","mobile","responsive","performance","agile","scrum","marketing","seo","svg","canvas","webgl","3d","tailwind","sass","webpack","vite","git","github","supabase","user experience","user interface","wireframe","usability","typography","interaction","user flow","design system","prototyping","heuristics","user research","personas","mockup","information architecture","visual grammar","microinteractions","ui kit","layout","grid system","accessibility"];function Q_({onScrollProgress:t}){const{theme:e,t:n}=Nf(),i=e==="dark",r=i?U0:N0,s=Je.useRef(null),o=Je.useRef(null),a=Je.useRef(null),l=Je.useRef(null),u=Je.useRef(null),f=Je.useRef(null),h=Je.useRef(null),d=Je.useRef(null);return Je.useEffect(()=>{const p=u.current;if(!p)return;p.style.filter="blur(15px)",p.style.opacity="0";const _=setTimeout(()=>{p.style.transition="all 1s ease",p.style.filter="none",p.style.opacity="1"},500);return()=>clearTimeout(_)},[]),Je.useEffect(()=>{const p=o.current,_=a.current;if(!p||!_)return;const x=_.getContext("2d");let m=p.clientWidth,c=p.clientHeight;_.width=m,_.height=c;const g=[],v={x:-1e3,y:-1e3},M=250,L=220;function A(O,X,C,G,Y,ne){const ge=O-C,Le=X-G,V=Y-C,Z=ne-G,ae=ge*V+Le*Z,se=V*V+Z*Z;let Ae=-1;se!==0&&(Ae=ae/se);let Ee,Fe;Ae<0?(Ee=C,Fe=G):Ae>1?(Ee=Y,Fe=ne):(Ee=C+Ae*V,Fe=G+Ae*Z);const U=O-Ee,Oe=X-Fe;return Math.sqrt(U*U+Oe*Oe)}const T=12,b=9,w=m/T,S=c/b;let P=[];for(let O=0;O<T;O++)for(let X=0;X<b;X++){const C=O*w+w/2-m/2,G=X*S+S/2-c/2;Math.sqrt(C*C+G*G)>M-20&&P.push({c:O,r:X})}for(let O=P.length-1;O>0;O--){const X=Math.floor(Math.random()*(O+1));[P[O],P[X]]=[P[X],P[O]]}Z_.forEach((O,X)=>{const C=document.createElement("div");C.className="tag",C.innerText=O,p.appendChild(C);const G=P[X%P.length],Y=G.c*w+w*.1+Math.random()*(w*.8),ne=G.r*S+S*.1+Math.random()*(S*.8),ge={el:C,originX:Y,originY:ne,timeOffsetX:Math.random()*Math.PI*2,timeOffsetY:Math.random()*Math.PI*2,speedX:.2+Math.random()*.3,speedY:.2+Math.random()*.3,amplitude:15+Math.random()*20,width:0,height:0,currentDrawX:Y,currentDrawY:ne,currentScale:.85,currentOpacity:.2,isHovered:!1};C.addEventListener("mouseenter",()=>ge.isHovered=!0),C.addEventListener("mouseleave",()=>ge.isHovered=!1),g.push(ge)}),setTimeout(()=>{g.forEach(O=>{O.width=O.el.offsetWidth,O.height=O.el.offsetHeight})},50);let W;function z(){x.clearRect(0,0,m,c);const O=Date.now()*.001;g.forEach(C=>{const G=C.originX+Math.sin(O*C.speedX+C.timeOffsetX)*C.amplitude,Y=C.originY+Math.cos(O*C.speedY+C.timeOffsetY)*C.amplitude;let ne=G,ge=Y,Le=.85,V=.2;const Z=v.x-G,ae=v.y-Y,se=Math.sqrt(Z*Z+ae*ae);if(se<260){const Ee=(260-se)/260;Le=.85+Ee*.4,V=.2+Ee*.8,ne+=Z*Ee*.22,ge+=ae*Ee*.22}C.isHovered&&(Le=1.3),C.currentDrawX+=(ne-C.currentDrawX)*.08,C.currentDrawY+=(ge-C.currentDrawY)*.08,C.currentScale+=(Le-C.currentScale)*.12,C.currentOpacity+=(V-C.currentOpacity)*.12,C.el.style.left=`${C.currentDrawX-C.width/2}px`,C.el.style.top=`${C.currentDrawY-C.height/2}px`,C.el.style.transform=`scale(${C.currentScale})`;let Ae=Math.max(0,Math.min(1,(C.currentOpacity-.2)*1.8));C.isHovered?(C.el.style.color=i?"#000000":"#ffffff",C.el.style.backgroundColor=i?"#ffffff":"#000000",C.el.style.borderColor=i?"#ffffff":"#000000"):(C.el.style.color=i?`rgba(255, 255, 255, ${C.currentOpacity})`:`rgba(0, 0, 0, ${C.currentOpacity*1.2})`,C.el.style.backgroundColor="transparent",C.el.style.borderColor=i?`rgba(255, 255, 255, ${Ae*.5})`:`rgba(0, 0, 0, ${Ae*.4})`)}),x.lineWidth=1;const X=i?"255, 255, 255":"0, 0, 0";for(let C=0;C<g.length;C++)for(let G=C+1;G<g.length;G++){const Y=g[C].currentDrawX-g[G].currentDrawX,ne=g[C].currentDrawY-g[G].currentDrawY,ge=Math.sqrt(Y*Y+ne*ne);if(ge<250&&A(m/2,c/2,g[C].currentDrawX,g[C].currentDrawY,g[G].currentDrawX,g[G].currentDrawY)>L){let V=(1-ge/250)*.2;x.beginPath(),x.moveTo(g[C].currentDrawX,g[C].currentDrawY),x.lineTo(g[G].currentDrawX,g[G].currentDrawY),x.strokeStyle=`rgba(${X}, ${V})`,x.stroke()}}W=requestAnimationFrame(z)}z();const q=O=>{const X=p.getBoundingClientRect();v.x=O.clientX-X.left,v.y=O.clientY-X.top},$=()=>{m=p.clientWidth,c=p.clientHeight,_.width=m,_.height=c};return window.addEventListener("mousemove",q),window.addEventListener("resize",$),()=>{cancelAnimationFrame(W),window.removeEventListener("mousemove",q),window.removeEventListener("resize",$),g.forEach(O=>O.el.remove())}},[i]),Je.useEffect(()=>{const p=l.current;if(!p)return;let _=!1;const x=c=>{c.preventDefault(),c.stopPropagation(),_=!0;const g=M=>{if(!_)return;const L=p.getBoundingClientRect(),A=L.left+L.width/2;let T=Math.abs(M.clientX-A)*2;T<300&&(T=300),T>540&&(T=540),p.dataset.userWidth=T},v=()=>{_=!1,window.removeEventListener("mousemove",g)};window.addEventListener("mousemove",g),window.addEventListener("mouseup",v,{once:!0})},m=p.querySelectorAll(".handle");return m.forEach(c=>c.addEventListener("mousedown",x)),()=>{m.forEach(c=>c.removeEventListener("mousedown",x))}},[]),Je.useEffect(()=>{let p=300;const _=()=>{var X,C;if(!s.current)return;const x=s.current.getBoundingClientRect(),m=s.current.offsetHeight-window.innerHeight,c=Math.max(0,-x.top),g=Math.max(0,Math.min(1,c/(m||1)));t&&t(g);const v=window.innerHeight,M=v*.6,L=Math.min(c/M,1),A=parseFloat(((C=(X=l.current)==null?void 0:X.dataset)==null?void 0:C.userWidth)||300),T=65;p+=(A-p)*.1;const b=p+(T-p)*L,w=v/2,P=w+(35-w)*L;l.current&&(l.current.style.width=b+"px",l.current.style.top=P+"px",l.current.style.transform="translate(-50%, -50%)");const W=Math.max(0,1-L*5);f.current&&(f.current.style.opacity=W),l.current&&l.current.querySelectorAll(".handle").forEach(Y=>Y.style.opacity=W);const z=M,q=Math.max(0,Math.min(1,(c-z)/400));h.current&&(h.current.style.opacity=q,h.current.style.transform=`translateY(${(1-q)*20}px)`);const $=z+400*.95,O=Math.max(0,Math.min(1,(c-$)/400));d.current&&(d.current.style.opacity=O,d.current.style.transform=`translateY(${(1-O)*20}px)`)};return window.addEventListener("scroll",_),_(),()=>window.removeEventListener("scroll",_)},[t]),pe.jsx("div",{ref:s,className:"relative w-full h-[350vh]",children:pe.jsxs("section",{id:"hero",ref:o,className:"sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10 select-none",children:[pe.jsx("div",{className:"absolute inset-0 z-0 vhs-grid pointer-events-none",style:{backgroundImage:i?"linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)":"linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)",backgroundSize:"3px 3px"}}),pe.jsx("canvas",{ref:a,className:"absolute inset-0 w-full h-full z-0 pointer-events-none"}),pe.jsx("div",{className:"absolute inset-0 z-[2] pointer-events-none",style:{background:i?"radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 20%, rgba(255,255,255,0) 45%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.98) 100%)":"radial-gradient(circle at center, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 20%, rgba(0,0,0,0) 45%, rgba(250,250,250,0.4) 80%, rgba(250,250,250,0.98) 100%)"}}),pe.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-[50] pointer-events-none text-center px-4 w-full max-w-4xl",children:[pe.jsx("h5",{ref:h,className:"font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-4 opacity-0 transition-all duration-300",children:n.heroH5}),pe.jsxs("h1",{ref:d,className:"font-mori text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] opacity-0 tracking-tight transition-all duration-300",children:[pe.jsx("span",{children:n.heroH1Pre}),pe.jsx("span",{className:"font-editorial-italic font-normal italic underline decoration-1 underline-offset-4 text-amber-400 dark:text-amber-300",children:n.heroH1Em}),pe.jsx("span",{children:n.heroH1Post})]})]}),pe.jsxs("div",{ref:l,className:"fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] logo-wrapper",children:[pe.jsx("div",{ref:f,className:"resize-border"}),pe.jsx("img",{ref:u,src:r,alt:"Gabux Logo",className:"w-full h-auto block pointer-events-none drop-shadow-2xl"}),pe.jsx("div",{className:"handle nw"}),pe.jsx("div",{className:"handle ne"}),pe.jsx("div",{className:"handle sw"}),pe.jsx("div",{className:"handle se"})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="165",J_=0,eh=1,e2=2,I0=1,t2=2,Zn=3,Bi=0,Qt=1,ei=2,Fi=0,os=1,th=2,nh=3,ih=4,n2=5,rr=100,i2=101,r2=102,s2=103,o2=104,a2=200,l2=201,u2=202,c2=203,bc=204,Dc=205,f2=206,d2=207,h2=208,p2=209,m2=210,g2=211,v2=212,_2=213,x2=214,S2=0,y2=1,M2=2,tl=3,E2=4,w2=5,T2=6,A2=7,F0=0,C2=1,R2=2,Oi=0,P2=1,L2=2,b2=3,D2=4,U2=5,N2=6,I2=7,O0=300,gs=301,vs=302,Uc=303,Nc=304,wl=306,Ic=1e3,ur=1001,Fc=1002,gn=1003,F2=1004,qo=1005,Rn=1006,su=1007,cr=1008,Hi=1009,O2=1010,k2=1011,nl=1012,k0=1013,_s=1014,Ci=1015,Tl=1016,z0=1017,B0=1018,xs=1020,z2=35902,B2=1021,H2=1022,Bn=1023,V2=1024,G2=1025,as=1026,Ss=1027,W2=1028,H0=1029,X2=1030,V0=1031,G0=1033,ou=33776,au=33777,lu=33778,uu=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,uh=37492,ch=37496,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,vh=37814,_h=37815,xh=37816,Sh=37817,yh=37818,Mh=37819,Eh=37820,wh=37821,cu=36492,Th=36494,Ah=36495,j2=36283,Ch=36284,Rh=36285,Ph=36286,Y2=3200,q2=3201,$2=0,K2=1,wi="",Fn="srgb",Xi="srgb-linear",Ff="display-p3",Al="display-p3-linear",il="linear",it="srgb",rl="rec709",sl="p3",wr=7680,Lh=519,Z2=512,Q2=513,J2=514,W0=515,e1=516,t1=517,n1=518,i1=519,bh=35044,Dh="300 es",ii=2e3,ol=2001;class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=Math.PI/180,Oc=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function r1(t,e){return(t%e+e)%e}function du(t,e,n){return(1-n)*t+n*e}function Is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=r[0],m=r[3],c=r[6],g=r[1],v=r[4],M=r[7],L=r[2],A=r[5],T=r[8];return s[0]=o*x+a*g+l*L,s[3]=o*m+a*v+l*A,s[6]=o*c+a*M+l*T,s[1]=u*x+f*g+h*L,s[4]=u*m+f*v+h*A,s[7]=u*c+f*M+h*T,s[2]=d*x+p*g+_*L,s[5]=d*m+p*v+_*A,s[8]=d*c+p*M+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,p=u*s-o*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hu.makeScale(e,n)),this}rotate(e){return this.premultiply(hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hu=new Ue;function X0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function s1(){const t=al("canvas");return t.style.display="block",t}const Uh={};function j0(t){t in Uh||(Uh[t]=!0,console.warn(t))}function o1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Nh=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ih=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$o={[Xi]:{transfer:il,primaries:rl,toReference:t=>t,fromReference:t=>t},[Fn]:{transfer:it,primaries:rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Al]:{transfer:il,primaries:sl,toReference:t=>t.applyMatrix3(Ih),fromReference:t=>t.applyMatrix3(Nh)},[Ff]:{transfer:it,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ih),fromReference:t=>t.applyMatrix3(Nh).convertLinearToSRGB()}},a1=new Set([Xi,Al]),$e={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!a1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=$o[e].toReference,r=$o[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $o[t].primaries},getTransfer:function(t){return t===wi?il:$o[t].transfer}};function ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Tr;class l1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=al("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ls(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ls(n[i]/255)*255):n[i]=ls(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u1=0;class Y0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?l1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c1=0;class Jt extends Ts{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=ur,r=ur,s=Rn,o=cr,a=Bn,l=Hi,u=Jt.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Eo(),this.name="",this.source=new Y0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=O0;Jt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,M=(p+1)/2,L=(c+1)/2,A=(f+d)/4,T=(h+x)/4,b=(_+m)/4;return v>M&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=b/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=T/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-x)/g,this.z=(d-f)/g,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f1 extends Ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Y0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends f1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class q0 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d1 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||u!==p||f!==_){let m=1-a;const c=l*d+u*p+f*_+h*x,g=c>=0?1:-1,v=1-c*c;if(v>Number.EPSILON){const L=Math.sqrt(v),A=Math.atan2(L,c*g);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const M=a*g;if(l=l*m+d*M,u=u*m+p*M,f=f*m+_*M,h=h*m+x*M,m===1-a){const L=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=L,u*=L,f*=L,h*=L}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*p-u*d,e[n+1]=l*_+f*d+u*h-a*p,e[n+2]=u*_+f*p+a*d-l*h,e[n+3]=f*_-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h+d*p*_;break;case"YZX":this._x=d*f*h+u*p*_,this._y=u*p*h+d*f*_,this._z=u*f*_-d*p*h,this._w=u*f*h-d*p*_;break;case"XZY":this._x=d*f*h-u*p*_,this._y=u*p*h-d*f*_,this._z=u*f*_+d*p*h,this._w=u*f*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*f,this.y=i+l*f+a*u-s*h,this.z=r+l*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gu.copy(this).projectOnVector(e),this.sub(gu)}reflect(e){return this.sub(gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new B,Fh=new wo;class To{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Zo.subVectors(this.max,Fs),Ar.subVectors(e.a,Fs),Cr.subVectors(e.b,Fs),Rr.subVectors(e.c,Fs),pi.subVectors(Cr,Ar),mi.subVectors(Rr,Cr),qi.subVectors(Ar,Rr);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-qi.z,qi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,qi.z,0,-qi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-qi.y,qi.x,0];return!vu(n,Ar,Cr,Rr,Zo)||(n=[1,0,0,0,1,0,0,0,1],!vu(n,Ar,Cr,Rr,Zo))?!1:(Qo.crossVectors(pi,mi),n=[Qo.x,Qo.y,Qo.z],vu(n,Ar,Cr,Rr,Zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new B,new B,new B,new B,new B,new B,new B,new B],yn=new B,Ko=new To,Ar=new B,Cr=new B,Rr=new B,pi=new B,mi=new B,qi=new B,Fs=new B,Zo=new B,Qo=new B,$i=new B;function vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$i.fromArray(t,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),u=n.dot($i),f=i.dot($i);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const h1=new To,Os=new B,_u=new B;class Of{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):h1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(_u)),this.expandByPoint(Os.copy(e.center).sub(_u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new B,xu=new B,Jo=new B,gi=new B,Su=new B,ea=new B,yu=new B;class p1{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xu.copy(e).add(n).multiplyScalar(.5),Jo.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Jo),a=gi.dot(this.direction),l=-gi.dot(Jo),u=gi.lengthSq(),f=Math.abs(1-o*o);let h,d,p,_;if(f>0)if(h=o*l-a,d=o*a-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xu).addScaledVector(Jo,d),p}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){Su.subVectors(n,e),ea.subVectors(i,e),yu.crossVectors(Su,ea);let o=this.direction.dot(yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(gi,ea));if(l<0)return null;const u=a*this.direction.dot(Su.cross(gi));if(u<0||l+u>o)return null;const f=-a*gi.dot(yu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,p,_,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,p,_,x,m)}set(e,n,i,r,s,o,a,l,u,f,h,d,p,_,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=_,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,_=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=p+_*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=u*f,x=u*h;n[0]=d+x*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=u*f,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,_=a*f,x=a*h;n[0]=l*f,n[4]=_*u-p,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,x=a*u;n[0]=l*f,n[4]=x-d*h,n[8]=_*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,x=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+x,n[5]=o*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m1,e,g1)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),vi.crossVectors(i,tn),vi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),vi.crossVectors(i,tn)),vi.normalize(),ta.crossVectors(tn,vi),r[0]=vi.x,r[4]=ta.x,r[8]=tn.x,r[1]=vi.y,r[5]=ta.y,r[9]=tn.y,r[2]=vi.z,r[6]=ta.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],c=i[14],g=i[3],v=i[7],M=i[11],L=i[15],A=r[0],T=r[4],b=r[8],w=r[12],S=r[1],P=r[5],W=r[9],z=r[13],q=r[2],$=r[6],O=r[10],X=r[14],C=r[3],G=r[7],Y=r[11],ne=r[15];return s[0]=o*A+a*S+l*q+u*C,s[4]=o*T+a*P+l*$+u*G,s[8]=o*b+a*W+l*O+u*Y,s[12]=o*w+a*z+l*X+u*ne,s[1]=f*A+h*S+d*q+p*C,s[5]=f*T+h*P+d*$+p*G,s[9]=f*b+h*W+d*O+p*Y,s[13]=f*w+h*z+d*X+p*ne,s[2]=_*A+x*S+m*q+c*C,s[6]=_*T+x*P+m*$+c*G,s[10]=_*b+x*W+m*O+c*Y,s[14]=_*w+x*z+m*X+c*ne,s[3]=g*A+v*S+M*q+L*C,s[7]=g*T+v*P+M*$+L*G,s[11]=g*b+v*W+M*O+L*Y,s[15]=g*w+v*z+M*X+L*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],c=e[15];return _*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*f-s*l*f)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],c=e[15],g=h*m*u-x*d*u+x*l*p-a*m*p-h*l*c+a*d*c,v=_*d*u-f*m*u-_*l*p+o*m*p+f*l*c-o*d*c,M=f*x*u-_*h*u+_*a*p-o*x*p-f*a*c+o*h*c,L=_*h*l-f*x*l-_*a*d+o*x*d+f*a*m-o*h*m,A=n*g+i*v+r*M+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(x*d*s-h*m*s-x*r*p+i*m*p+h*r*c-i*d*c)*T,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*T,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(f*m*s-_*d*s+_*r*p-n*m*p-f*r*c+n*d*c)*T,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*c-n*l*c)*T,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*p+n*l*p)*T,e[8]=M*T,e[9]=(_*h*s-f*x*s-_*i*p+n*x*p+f*i*c-n*h*c)*T,e[10]=(o*x*s-_*a*s+_*i*u-n*x*u-o*i*c+n*a*c)*T,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*p-n*a*p)*T,e[12]=L*T,e[13]=(f*x*r-_*h*r+_*i*d-n*x*d-f*i*m+n*h*m)*T,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,p=s*f,_=s*h,x=o*f,m=o*h,c=a*h,g=l*u,v=l*f,M=l*h,L=i.x,A=i.y,T=i.z;return r[0]=(1-(x+c))*L,r[1]=(p+M)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(d+c))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(m-g)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const u=1/s,f=1/o,h=1/a;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=f,Mn.elements[5]*=f,Mn.elements[6]*=f,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,n.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ii){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===ii)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ol)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ii){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*f;let _,x;if(a===ii)_=(o+s)*h,x=-2*h;else if(a===ol)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new B,Mn=new yt,m1=new B(0,0,0),g1=new B(1,1,1),vi=new B,ta=new B,tn=new B,Oh=new yt,kh=new wo;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v1=0;const zh=new B,Lr=new wo,qn=new yt,na=new B,ks=new B,_1=new B,x1=new wo,Bh=new B(1,0,0),Hh=new B(0,1,0),Vh=new B(0,0,1),Gh={type:"added"},S1={type:"removed"},br={type:"childadded",child:null},Mu={type:"childremoved",child:null};class an extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new B,n=new ui,i=new wo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ue}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Vh,e)}translateOnAxis(e,n){return zh.copy(e).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?na.copy(e):na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ks,na,this.up):qn.lookAt(na,ks,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(qn),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gh),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(S1),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gh),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,_1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,x1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new B(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new B,$n=new B,Eu=new B,Kn=new B,Dr=new B,Ur=new B,Wh=new B,wu=new B,Tu=new B,Au=new B;class zn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),En.subVectors(e,n),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){En.subVectors(r,n),$n.subVectors(i,n),Eu.subVectors(e,n);const o=En.dot(En),a=En.dot($n),l=En.dot(Eu),u=$n.dot($n),f=$n.dot(Eu),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*f)*d,_=(o*f-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static isFrontFacing(e,n,i,r){return En.subVectors(i,n),$n.subVectors(e,n),En.cross($n).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Ur.subVectors(s,i),wu.subVectors(e,i);const l=Dr.dot(wu),u=Ur.dot(wu);if(l<=0&&u<=0)return n.copy(i);Tu.subVectors(e,r);const f=Dr.dot(Tu),h=Ur.dot(Tu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Dr,o);Au.subVectors(e,s);const p=Dr.dot(Au),_=Ur.dot(Au);if(_>=0&&p<=_)return n.copy(s);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Ur,a);const m=f*_-p*h;if(m<=0&&h-f>=0&&p-_>=0)return Wh.subVectors(s,r),a=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(Wh,a);const c=1/(m+x+d);return o=x*c,a=d*c,n.copy(i).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=r1(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cu(o,s,e+1/3),this.g=Cu(o,s,e),this.b=Cu(o,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=K0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=pu(e.r),this.g=pu(e.g),this.b=pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return $e.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Yt(Ft.r*255,0,255))*65536+Math.round(Yt(Ft.g*255,0,255))*256+Math.round(Yt(Ft.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Fn){$e.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+n,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_i),e.getHSL(ia);const i=du(_i.h,ia.h,n),r=du(_i.s,ia.s,n),s=du(_i.l,ia.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new et;et.NAMES=K0;let y1=0;class Cl extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=os,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Dc,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==Dc&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Z0 extends Cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new B,ra=new je;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return j0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ra.fromBufferAttribute(this,n),ra.applyMatrix3(e),this.setXY(n,ra.x,ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Is(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Is(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Is(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Is(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bh&&(e.usage=this.usage),e}}class Q0 extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class J0 extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hr extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let M1=0;const dn=new yt,Ru=new an,Nr=new B,nn=new To,zs=new To,At=new B;class Mr extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?J0:Q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,i){return dn.makeTranslation(e,n,i),this.applyMatrix4(dn),this}scale(e,n,i){return dn.makeScale(e,n,i),this.applyMatrix4(dn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Of);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(nn.min,zs.min),nn.expandByPoint(At),At.addVectors(nn.max,zs.max),nn.expandByPoint(At)):(nn.expandByPoint(zs.min),nn.expandByPoint(zs.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)At.fromBufferAttribute(a,u),l&&(Nr.fromBufferAttribute(e,u),At.add(Nr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new B,l[b]=new B;const u=new B,f=new B,h=new B,d=new je,p=new je,_=new je,x=new B,m=new B;function c(b,w,S){u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),f.sub(u),h.sub(u),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(P),a[b].add(x),a[w].add(x),a[S].add(x),l[b].add(m),l[w].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,w=g.length;b<w;++b){const S=g[b],P=S.start,W=S.count;for(let z=P,q=P+W;z<q;z+=3)c(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new B,M=new B,L=new B,A=new B;function T(b){L.fromBufferAttribute(r,b),A.copy(L);const w=a[b];v.copy(w),v.sub(L.multiplyScalar(L.dot(w))).normalize(),M.crossVectors(A,w);const P=M.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,P)}for(let b=0,w=g.length;b<w;++b){const S=g[b],P=S.start,W=S.count;for(let z=P,q=P+W;z<q;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,f=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let c=0;c<f;c++)d[_++]=u[p++]}return new Wn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new yt,Ki=new p1,sa=new Of,jh=new B,Ir=new B,Fr=new B,Or=new B,Pu=new B,oa=new B,aa=new je,la=new je,ua=new je,Yh=new B,qh=new B,$h=new B,ca=new B,fa=new B;class Hn extends an{constructor(e=new Mr,n=new Z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){oa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(Pu.fromBufferAttribute(h,e),o?oa.addScaledVector(Pu,f):oa.addScaledVector(Pu.sub(n),f))}n.add(oa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(sa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(sa,jh)===null||Ki.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Xh.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],c=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,L=v;M<L;M+=3){const A=a.getX(M),T=a.getX(M+1),b=a.getX(M+2);r=da(this,c,e,i,u,f,h,A,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,c=x;m<c;m+=3){const g=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=da(this,o,e,i,u,f,h,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],c=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,L=v;M<L;M+=3){const A=M,T=M+1,b=M+2;r=da(this,c,e,i,u,f,h,A,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,c=x;m<c;m+=3){const g=m,v=m+1,M=m+2;r=da(this,o,e,i,u,f,h,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function E1(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Bi,a),l===null)return null;fa.copy(a),fa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(fa);return u<n.near||u>n.far?null:{distance:u,point:fa.clone(),object:t}}function da(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ir),t.getVertexPosition(l,Fr),t.getVertexPosition(u,Or);const f=E1(t,e,n,i,Ir,Fr,Or,ca);if(f){r&&(aa.fromBufferAttribute(r,a),la.fromBufferAttribute(r,l),ua.fromBufferAttribute(r,u),f.uv=zn.getInterpolation(ca,Ir,Fr,Or,aa,la,ua,new je)),s&&(aa.fromBufferAttribute(s,a),la.fromBufferAttribute(s,l),ua.fromBufferAttribute(s,u),f.uv1=zn.getInterpolation(ca,Ir,Fr,Or,aa,la,ua,new je)),o&&(Yh.fromBufferAttribute(o,a),qh.fromBufferAttribute(o,l),$h.fromBufferAttribute(o,u),f.normal=zn.getInterpolation(ca,Ir,Fr,Or,Yh,qh,$h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new B,materialIndex:0};zn.getNormal(Ir,Fr,Or,h.normal),f.face=h}return f}class Ao extends Mr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(u,3)),this.setAttribute("normal",new hr(f,3)),this.setAttribute("uv",new hr(h,2));function _(x,m,c,g,v,M,L,A,T,b,w){const S=M/T,P=L/b,W=M/2,z=L/2,q=A/2,$=T+1,O=b+1;let X=0,C=0;const G=new B;for(let Y=0;Y<O;Y++){const ne=Y*P-z;for(let ge=0;ge<$;ge++){const Le=ge*S-W;G[x]=Le*g,G[m]=ne*v,G[c]=q,u.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[c]=A>0?1:-1,f.push(G.x,G.y,G.z),h.push(ge/T),h.push(1-Y/b),X+=1}}for(let Y=0;Y<b;Y++)for(let ne=0;ne<T;ne++){const ge=d+ne+$*Y,Le=d+ne+$*(Y+1),V=d+(ne+1)+$*(Y+1),Z=d+(ne+1)+$*Y;l.push(ge,Le,Z),l.push(Le,V,Z),C+=6}a.addGroup(p,C,w),p+=C,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Bt(t){const e={};for(let n=0;n<t.length;n++){const i=ys(t[n]);for(const r in i)e[r]=i[r]}return e}function w1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function eg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const T1={clone:ys,merge:Bt};var A1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=w1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class tg extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new B,Kh=new je,Zh=new je;class Cn extends tg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,n){return this.getViewBounds(e,Kh,Zh),n.subVectors(Zh,Kh)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,zr=1;class R1 extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(kr,zr,e,n);r.layers=this.layers,this.add(r);const s=new Cn(kr,zr,e,n);s.layers=this.layers,this.add(s);const o=new Cn(kr,zr,e,n);o.layers=this.layers,this.add(o);const a=new Cn(kr,zr,e,n);a.layers=this.layers,this.add(a);const l=new Cn(kr,zr,e,n);l.layers=this.layers,this.add(l);const u=new Cn(kr,zr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ng extends Jt{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:gs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P1 extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ng(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ao(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Fi});s.uniforms.tEquirect.value=n;const o=new Hn(r,s),a=n.minFilter;return n.minFilter===cr&&(n.minFilter=Rn),new R1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lu=new B,L1=new B,b1=new Ue;class nr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lu.subVectors(i,n).cross(L1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||b1.getNormalMatrix(e),r=this.coplanarPoint(Lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Of,ha=new B;class ig{constructor(e=new nr,n=new nr,i=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],_=r[9],x=r[10],m=r[11],c=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,d-u,m-p,M-c).normalize(),i[1].setComponents(l+s,d+u,m+p,M+c).normalize(),i[2].setComponents(l+o,d+f,m+_,M+g).normalize(),i[3].setComponents(l-o,d-f,m-_,M-g).normalize(),i[4].setComponents(l-a,d-h,m-x,M-v).normalize(),n===ii)i[5].setComponents(l+a,d+h,m+x,M+v).normalize();else if(n===ol)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ha.x=r.normal.x>0?e.max.x:e.min.x,ha.y=r.normal.y>0?e.max.y:e.min.y,ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function D1(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&d.length===0&&t.bufferSubData(u,0,f),d.length!==0){for(let p=0,_=d.length;p<_;p++){const x=d[p];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Co extends Mr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,p=[],_=[],x=[],m=[];for(let c=0;c<f;c++){const g=c*d-o;for(let v=0;v<u;v++){const M=v*h-s;_.push(M,-g,0),x.push(0,0,1),m.push(v/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const v=g+u*c,M=g+u*(c+1),L=g+1+u*(c+1),A=g+1+u*c;p.push(v,M,A),p.push(M,L,A)}this.setIndex(p),this.setAttribute("position",new hr(_,3)),this.setAttribute("normal",new hr(x,3)),this.setAttribute("uv",new hr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var U1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,V1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,G1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,nx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ix=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ey=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ly=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:U1,alphahash_pars_fragment:N1,alphamap_fragment:I1,alphamap_pars_fragment:F1,alphatest_fragment:O1,alphatest_pars_fragment:k1,aomap_fragment:z1,aomap_pars_fragment:B1,batching_pars_vertex:H1,batching_vertex:V1,begin_vertex:G1,beginnormal_vertex:W1,bsdfs:X1,iridescence_fragment:j1,bumpmap_pars_fragment:Y1,clipping_planes_fragment:q1,clipping_planes_pars_fragment:$1,clipping_planes_pars_vertex:K1,clipping_planes_vertex:Z1,color_fragment:Q1,color_pars_fragment:J1,color_pars_vertex:ex,color_vertex:tx,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:rx,displacementmap_pars_vertex:sx,displacementmap_vertex:ox,emissivemap_fragment:ax,emissivemap_pars_fragment:lx,colorspace_fragment:ux,colorspace_pars_fragment:cx,envmap_fragment:fx,envmap_common_pars_fragment:dx,envmap_pars_fragment:hx,envmap_pars_vertex:px,envmap_physical_pars_fragment:Tx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:vx,fog_fragment:_x,fog_pars_fragment:xx,gradientmap_pars_fragment:Sx,lightmap_pars_fragment:yx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:Ex,lights_pars_begin:wx,lights_toon_fragment:Ax,lights_toon_pars_fragment:Cx,lights_phong_fragment:Rx,lights_phong_pars_fragment:Px,lights_physical_fragment:Lx,lights_physical_pars_fragment:bx,lights_fragment_begin:Dx,lights_fragment_maps:Ux,lights_fragment_end:Nx,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:kx,map_fragment:zx,map_pars_fragment:Bx,map_particle_fragment:Hx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:Xx,morphcolor_vertex:jx,morphnormal_vertex:Yx,morphtarget_pars_vertex:qx,morphtarget_vertex:$x,normal_fragment_begin:Kx,normal_fragment_maps:Zx,normal_pars_fragment:Qx,normal_pars_vertex:Jx,normal_vertex:eS,normalmap_pars_fragment:tS,clearcoat_normal_fragment_begin:nS,clearcoat_normal_fragment_maps:iS,clearcoat_pars_fragment:rS,iridescence_pars_fragment:sS,opaque_fragment:oS,packing:aS,premultiplied_alpha_fragment:lS,project_vertex:uS,dithering_fragment:cS,dithering_pars_fragment:fS,roughnessmap_fragment:dS,roughnessmap_pars_fragment:hS,shadowmap_pars_fragment:pS,shadowmap_pars_vertex:mS,shadowmap_vertex:gS,shadowmask_pars_fragment:vS,skinbase_vertex:_S,skinning_pars_vertex:xS,skinning_vertex:SS,skinnormal_vertex:yS,specularmap_fragment:MS,specularmap_pars_fragment:ES,tonemapping_fragment:wS,tonemapping_pars_fragment:TS,transmission_fragment:AS,transmission_pars_fragment:CS,uv_pars_fragment:RS,uv_pars_vertex:PS,uv_vertex:LS,worldpos_vertex:bS,background_vert:DS,background_frag:US,backgroundCube_vert:NS,backgroundCube_frag:IS,cube_vert:FS,cube_frag:OS,depth_vert:kS,depth_frag:zS,distanceRGBA_vert:BS,distanceRGBA_frag:HS,equirect_vert:VS,equirect_frag:GS,linedashed_vert:WS,linedashed_frag:XS,meshbasic_vert:jS,meshbasic_frag:YS,meshlambert_vert:qS,meshlambert_frag:$S,meshmatcap_vert:KS,meshmatcap_frag:ZS,meshnormal_vert:QS,meshnormal_frag:JS,meshphong_vert:ey,meshphong_frag:ty,meshphysical_vert:ny,meshphysical_frag:iy,meshtoon_vert:ry,meshtoon_frag:sy,points_vert:oy,points_frag:ay,shadow_vert:ly,shadow_frag:uy,sprite_vert:cy,sprite_frag:fy},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},On={basic:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Bt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Bt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Bt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Bt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Bt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Bt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Bt([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Bt([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};On.physical={uniforms:Bt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const pa={r:0,b:0,g:0},Qi=new ui,dy=new yt;function hy(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,f,h=null,d=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const M=_(g);M===null?c(a,l):M&&M.isColor&&(c(M,1),v=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===wl)?(f===void 0&&(f=new Hn(new Ao(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ys(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(dy.makeRotationFromEuler(Qi)),f.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,(h!==M||d!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Hn(new Co(2,2),new ci({name:"BackgroundMaterial",uniforms:ys(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,v){g.getRGB(pa,eg(t)),i.buffers.color.setClear(pa.r,pa.g,pa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:x,addToRenderList:m}}function py(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,P,W,z,q){let $=!1;const O=h(z,W,P);s!==O&&(s=O,u(s.object)),$=p(S,z,W,q),$&&_(S,z,W,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(S,P,W,z),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,P,W){const z=W.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[P.id];$===void 0&&($={},q[P.id]=$);let O=$[z];return O===void 0&&(O=d(l()),$[z]=O),O}function d(S){const P=[],W=[],z=[];for(let q=0;q<n;q++)P[q]=0,W[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,P,W,z){const q=s.attributes,$=P.attributes;let O=0;const X=W.getAttributes();for(const C in X)if(X[C].location>=0){const Y=q[C];let ne=$[C];if(ne===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),Y===void 0||Y.attribute!==ne||ne&&Y.data!==ne.data)return!0;O++}return s.attributesNum!==O||s.index!==z}function _(S,P,W,z){const q={},$=P.attributes;let O=0;const X=W.getAttributes();for(const C in X)if(X[C].location>=0){let Y=$[C];Y===void 0&&(C==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),C==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const ne={};ne.attribute=Y,Y&&Y.data&&(ne.data=Y.data),q[C]=ne,O++}s.attributes=q,s.attributesNum=O,s.index=z}function x(){const S=s.newAttributes;for(let P=0,W=S.length;P<W;P++)S[P]=0}function m(S){c(S,0)}function c(S,P){const W=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;W[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),q[S]!==P&&(t.vertexAttribDivisor(S,P),q[S]=P)}function g(){const S=s.newAttributes,P=s.enabledAttributes;for(let W=0,z=P.length;W<z;W++)P[W]!==S[W]&&(t.disableVertexAttribArray(W),P[W]=0)}function v(S,P,W,z,q,$,O){O===!0?t.vertexAttribIPointer(S,P,W,q,$):t.vertexAttribPointer(S,P,W,z,q,$)}function M(S,P,W,z){x();const q=z.attributes,$=W.getAttributes(),O=P.defaultAttributeValues;for(const X in $){const C=$[X];if(C.location>=0){let G=q[X];if(G===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){const Y=G.normalized,ne=G.itemSize,ge=e.get(G);if(ge===void 0)continue;const Le=ge.buffer,V=ge.type,Z=ge.bytesPerElement,ae=V===t.INT||V===t.UNSIGNED_INT||G.gpuType===k0;if(G.isInterleavedBufferAttribute){const se=G.data,Ae=se.stride,Ee=G.offset;if(se.isInstancedInterleavedBuffer){for(let Fe=0;Fe<C.locationSize;Fe++)c(C.location+Fe,se.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<C.locationSize;Fe++)m(C.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Fe=0;Fe<C.locationSize;Fe++)v(C.location+Fe,ne/C.locationSize,V,Y,Ae*Z,(Ee+ne/C.locationSize*Fe)*Z,ae)}else{if(G.isInstancedBufferAttribute){for(let se=0;se<C.locationSize;se++)c(C.location+se,G.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let se=0;se<C.locationSize;se++)m(C.location+se);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let se=0;se<C.locationSize;se++)v(C.location+se,ne/C.locationSize,V,Y,ne*Z,ne/C.locationSize*se*Z,ae)}}else if(O!==void 0){const Y=O[X];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(C.location,Y);break;case 3:t.vertexAttrib3fv(C.location,Y);break;case 4:t.vertexAttrib4fv(C.location,Y);break;default:t.vertexAttrib1fv(C.location,Y)}}}}g()}function L(){b();for(const S in i){const P=i[S];for(const W in P){const z=P[W];for(const q in z)f(z[q].object),delete z[q];delete P[W]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const W in P){const z=P[W];for(const q in z)f(z[q].object),delete z[q];delete P[W]}delete i[S.id]}function T(S){for(const P in i){const W=i[P];if(W[S.id]===void 0)continue;const z=W[S.id];for(const q in z)f(z[q].object),delete z[q];delete W[S.id]}}function b(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function my(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(u[p],f[p]);else{d.multiDrawArraysWEBGL(i,u,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=f[_];n.update(p,i,1)}}function l(u,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x];for(let x=0;x<d.length;x++)n.update(_,i,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gy(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Bn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:M,maxSamples:L}}function vy(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new nr,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):u();else{const g=s?0:i,v=g*4;let M=c.clippingState||null;l.value=M,M=f(_,d,v,p);for(let L=0;L!==v;++L)M[L]=n[L];c.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const c=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let v=0,M=p;v!==x;++v,M+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _y(t){let e=new WeakMap;function n(o,a){return a===Uc?o.mapping=gs:a===Nc&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uc||a===Nc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new P1(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sg extends tg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Jr=4,Qh=[.125,.215,.35,.446,.526,.582],sr=20,bu=new sg,Jh=new et;let Du=null,Uu=0,Nu=0,Iu=!1;const ir=(1+Math.sqrt(5))/2,Br=1/ir,ep=[new B(-ir,Br,0),new B(ir,Br,0),new B(-Br,0,ir),new B(Br,0,ir),new B(0,ir,-Br),new B(0,ir,Br),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Du=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Du,Uu,Nu),this._renderer.xr.enabled=Iu,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Du=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Tl,format:Bn,colorSpace:Xi,depthBuffer:!1},r=np(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xy(s)),this._blurMaterial=Sy(s,e,n)}return r}_compileMaterial(e){const n=new Hn(this._lodPlanes[0],e);this._renderer.compile(n,bu)}_sceneToCubeUV(e,n,i,r){const a=new Cn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Jh),f.toneMapping=Oi,f.autoClear=!1;const p=new Z0({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new Hn(new Ao,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Jh),x=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const v=this._cubeSize;ma(r,g*v,c>2?v:0,v,v),f.setRenderTarget(r),x&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===gs||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ma(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ep[(r-s-1)%ep.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Hn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*sr-1),x=s/_,m=isFinite(s)?1+Math.floor(f*x):sr;m>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const c=[];let g=0;for(let T=0;T<sr;++T){const b=T/x,w=Math.exp(-b*b/2);c.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<c.length;T++)c[T]=c[T]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const M=this._sizeLods[r],L=3*M*(r>v-Jr?r-v+Jr:0),A=4*(this._cubeSize-M);ma(n,L,A,3*M,2*M),l.setRenderTarget(n),l.render(h,bu)}}function xy(t){const e=[],n=[],i=[];let r=t;const s=t-Jr+1+Qh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Jr?l=Qh[o-t+Jr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,x=3,m=2,c=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),M=new Float32Array(c*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,b=A>2?0:-1,w=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];g.set(w,x*_*A),v.set(d,m*_*A);const S=[A,A,A,A,A,A];M.set(S,c*_*A)}const L=new Mr;L.setAttribute("position",new Wn(g,x)),L.setAttribute("uv",new Wn(v,m)),L.setAttribute("faceIndex",new Wn(M,c)),e.push(L),r>Jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function np(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=wl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Sy(t,e,n){const i=new Float32Array(sr),r=new B(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ip(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function rp(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yy(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Uc||l===Nc,f=l===gs||l===vs;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new tp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new tp(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function My(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&j0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ey(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,c=x.length;m<c;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let v=0,M=g.length;v<M;v+=3){const L=g[v+0],A=g[v+1],T=g[v+2];d.push(L,A,A,T,T,L)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const L=v+0,A=v+1,T=v+2;d.push(L,A,A,T,T,L)}}else return;const m=new(X0(d)?J0:Q0)(d,1);m.version=x;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function wy(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function f(d,p,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<_;m++)this.render(d[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let c=0;c<_;c++)m+=p[c];n.update(m,i,1)}}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<d.length;c++)u(d[c]/o,p[c],x[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,_);let c=0;for(let g=0;g<_;g++)c+=p[g];for(let g=0;g<x.length;g++)n.update(c,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Ty(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ay(t,e,n){const i=new WeakMap,r=new Lt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let L=a.attributes.position.count*M,A=1;L>e.maxTextureSize&&(A=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*A*4*h),b=new q0(T,L,A,h);b.type=Ci,b.needsUpdate=!0;const w=M*4;for(let P=0;P<h;P++){const W=c[P],z=g[P],q=v[P],$=L*A*4*P;for(let O=0;O<W.count;O++){const X=O*w;_===!0&&(r.fromBufferAttribute(W,O),T[$+X+0]=r.x,T[$+X+1]=r.y,T[$+X+2]=r.z,T[$+X+3]=0),x===!0&&(r.fromBufferAttribute(z,O),T[$+X+4]=r.x,T[$+X+5]=r.y,T[$+X+6]=r.z,T[$+X+7]=0),m===!0&&(r.fromBufferAttribute(q,O),T[$+X+8]=r.x,T[$+X+9]=r.y,T[$+X+10]=r.z,T[$+X+11]=q.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new je(L,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Cy(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class og extends Jt{constructor(e,n,i,r,s,o,a,l,u,f=as){if(f!==as&&f!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===as&&(i=_s),i===void 0&&f===Ss&&(i=xs),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ag=new Jt,lg=new og(1,1);lg.compareFunction=W0;const ug=new q0,cg=new d1,fg=new ng,sp=[],op=[],ap=new Float32Array(16),lp=new Float32Array(9),up=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sp[r];if(s===void 0&&(s=new Float32Array(r),sp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=op[e];n===void 0&&(n=new Int32Array(e),op[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ry(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Py(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function Ly(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function by(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function Dy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;up.set(i),t.uniformMatrix2fv(this.addr,!1,up),Et(n,i)}}function Uy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;lp.set(i),t.uniformMatrix3fv(this.addr,!1,lp),Et(n,i)}}function Ny(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;ap.set(i),t.uniformMatrix4fv(this.addr,!1,ap),Et(n,i)}}function Iy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function Oy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function zy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function By(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function Hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function Vy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function Gy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?lg:ag;n.setTexture2D(e||s,r)}function Wy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cg,r)}function Xy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fg,r)}function jy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ug,r)}function Yy(t){switch(t){case 5126:return Ry;case 35664:return Py;case 35665:return Ly;case 35666:return by;case 35674:return Dy;case 35675:return Uy;case 35676:return Ny;case 5124:case 35670:return Iy;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return ky;case 5125:return zy;case 36294:return By;case 36295:return Hy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return jy}}function qy(t,e){t.uniform1fv(this.addr,e)}function $y(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function Ky(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function Zy(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function Qy(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Jy(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function eM(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tM(t,e){t.uniform1iv(this.addr,e)}function nM(t,e){t.uniform2iv(this.addr,e)}function iM(t,e){t.uniform3iv(this.addr,e)}function rM(t,e){t.uniform4iv(this.addr,e)}function sM(t,e){t.uniform1uiv(this.addr,e)}function oM(t,e){t.uniform2uiv(this.addr,e)}function aM(t,e){t.uniform3uiv(this.addr,e)}function lM(t,e){t.uniform4uiv(this.addr,e)}function uM(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ag,s[o])}function cM(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cg,s[o])}function fM(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||fg,s[o])}function dM(t,e,n){const i=this.cache,r=e.length,s=Rl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ug,s[o])}function hM(t){switch(t){case 5126:return qy;case 35664:return $y;case 35665:return Ky;case 35666:return Zy;case 35674:return Qy;case 35675:return Jy;case 35676:return eM;case 5124:case 35670:return tM;case 35667:case 35671:return nM;case 35668:case 35672:return iM;case 35669:case 35673:return rM;case 5125:return sM;case 36294:return oM;case 36295:return aM;case 36296:return lM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return dM}}class pM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Yy(n.type)}}class mM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hM(n.type)}}class gM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function cp(t,e){t.seq.push(e),t.map[e.id]=e}function vM(t,e,n){const i=t.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),o=Fu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){cp(n,u===void 0?new pM(a,t,e):new mM(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new gM(a),cp(n,h)),n=h}}}class La{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);vM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const _M=37297;let xM=0;function SM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function yM(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===rl?i="LinearDisplayP3ToLinearSRGB":e===rl&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case Xi:case Al:return[i,"LinearTransferOETF"];case Fn:case Ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function dp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+SM(t.getShaderSource(e),o)}else return r}function MM(t,e){const n=yM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function EM(t,e){let n;switch(e){case P2:n="Linear";break;case L2:n="Reinhard";break;case b2:n="OptimizedCineon";break;case D2:n="ACESFilmic";break;case N2:n="AgX";break;case I2:n="Neutral";break;case U2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function TM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function AM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(t){return t.replace(CM,PM)}const RM=new Map;function PM(t,e){let n=De[e];if(n===void 0){const i=RM.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kc(n)}const LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(t){return t.replace(LM,bM)}function bM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===t2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function UM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case gs:case vs:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function IM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case F0:e="ENVMAP_BLENDING_MULTIPLY";break;case C2:e="ENVMAP_BLENDING_MIX";break;case R2:e="ENVMAP_BLENDING_ADD";break}return e}function FM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DM(n),u=UM(n),f=NM(n),h=IM(n),d=FM(n),p=wM(n),_=TM(s),x=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ws).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ws).join(`
`),c.length>0&&(c+=`
`)):(m=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),c=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?De.tonemapping_pars_fragment:"",n.toneMapping!==Oi?EM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,MM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=kc(o),o=hp(o,n),o=pp(o,n),a=kc(a),a=hp(a,n),a=pp(a,n),o=mp(o),a=mp(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+m+o,M=g+c+a,L=fp(r,r.VERTEX_SHADER,v),A=fp(r,r.FRAGMENT_SHADER,M);r.attachShader(x,L),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(P){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(A).trim();let $=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,L,A);else{const X=dp(r,L,"vertex"),C=dp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+X+`
`+C)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||q==="")&&(O=!1);O&&(P.diagnostics={runnable:$,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:c}})}r.deleteShader(L),r.deleteShader(A),b=new La(r,x),w=AM(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,_M)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}let kM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BM(e),n.set(e,i)),i}}class BM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function HM(t,e,n,i,r,s,o){const a=new $0,l=new zM,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,S,P,W,z){const q=W.fog,$=z.geometry,O=w.isMeshStandardMaterial?W.environment:null,X=(w.isMeshStandardMaterial?n:e).get(w.envMap||O),C=X&&X.mapping===wl?X.image.height:null,G=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Y=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ge=0;$.morphAttributes.position!==void 0&&(ge=1),$.morphAttributes.normal!==void 0&&(ge=2),$.morphAttributes.color!==void 0&&(ge=3);let Le,V,Z,ae;if(G){const Ze=On[G];Le=Ze.vertexShader,V=Ze.fragmentShader}else Le=w.vertexShader,V=w.fragmentShader,l.update(w),Z=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const se=t.getRenderTarget(),Ae=z.isInstancedMesh===!0,Ee=z.isBatchedMesh===!0,Fe=!!w.map,U=!!w.matcap,Oe=!!X,He=!!w.aoMap,ot=!!w.lightMap,we=!!w.bumpMap,We=!!w.normalMap,ke=!!w.displacementMap,be=!!w.emissiveMap,gt=!!w.metalnessMap,R=!!w.roughnessMap,y=w.anisotropy>0,H=w.clearcoat>0,Q=w.dispersion>0,J=w.iridescence>0,ee=w.sheen>0,ye=w.transmission>0,ue=y&&!!w.anisotropyMap,ce=H&&!!w.clearcoatMap,Ne=H&&!!w.clearcoatNormalMap,ie=H&&!!w.clearcoatRoughnessMap,xe=J&&!!w.iridescenceMap,Be=J&&!!w.iridescenceThicknessMap,Re=ee&&!!w.sheenColorMap,fe=ee&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Ve=!!w.specularColorMap,ht=!!w.specularIntensityMap,D=ye&&!!w.transmissionMap,de=ye&&!!w.thicknessMap,j=!!w.gradientMap,K=!!w.alphaMap,oe=w.alphaTest>0,Pe=!!w.alphaHash,Xe=!!w.extensions;let pt=Oi;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(pt=t.toneMapping);const wt={shaderID:G,shaderType:w.type,shaderName:w.name,vertexShader:Le,fragmentShader:V,defines:w.defines,customVertexShaderID:Z,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xi,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:U,envMap:Oe,envMapMode:Oe&&X.mapping,envMapCubeUVHeight:C,aoMap:He,lightMap:ot,bumpMap:we,normalMap:We,displacementMap:d&&ke,emissiveMap:be,normalMapObjectSpace:We&&w.normalMapType===K2,normalMapTangentSpace:We&&w.normalMapType===$2,metalnessMap:gt,roughnessMap:R,anisotropy:y,anisotropyMap:ue,clearcoat:H,clearcoatMap:ce,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:xe,iridescenceThicknessMap:Be,sheen:ee,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:Ve,specularIntensityMap:ht,transmission:ye,transmissionMap:D,thicknessMap:de,gradientMap:j,opaque:w.transparent===!1&&w.blending===os&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:oe,alphaHash:Pe,combine:w.combine,mapUv:Fe&&x(w.map.channel),aoMapUv:He&&x(w.aoMap.channel),lightMapUv:ot&&x(w.lightMap.channel),bumpMapUv:we&&x(w.bumpMap.channel),normalMapUv:We&&x(w.normalMap.channel),displacementMapUv:ke&&x(w.displacementMap.channel),emissiveMapUv:be&&x(w.emissiveMap.channel),metalnessMapUv:gt&&x(w.metalnessMap.channel),roughnessMapUv:R&&x(w.roughnessMap.channel),anisotropyMapUv:ue&&x(w.anisotropyMap.channel),clearcoatMapUv:ce&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&x(w.sheenRoughnessMap.channel),specularMapUv:Ie&&x(w.specularMap.channel),specularColorMapUv:Ve&&x(w.specularColorMap.channel),specularIntensityMapUv:ht&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:de&&x(w.thicknessMap.channel),alphaMapUv:K&&x(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(We||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Fe||K),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&$e.getTransfer(w.map.colorSpace)===it,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ei,flipSided:w.side===Qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Xe&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return wt.vertexUv1s=u.has(1),wt.vertexUv2s=u.has(2),wt.vertexUv3s=u.has(3),u.clear(),wt}function c(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),w.push(a.mask)}function M(w){const S=_[w.type];let P;if(S){const W=On[S];P=T1.clone(W.uniforms)}else P=w.uniforms;return P}function L(w,S){let P;for(let W=0,z=f.length;W<z;W++){const q=f[W];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new OM(t,S,w,s),f.push(P)),P}function A(w){if(--w.usedTimes===0){const S=f.indexOf(w);f[S]=f[f.length-1],f.pop(),w.destroy()}}function T(w){l.remove(w)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:M,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:f,dispose:b}}function VM(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function GM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _p(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,_,x,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=_,c.renderOrder=h.renderOrder,c.z=x,c.group=m),e++,c}function a(h,d,p,_,x,m){const c=o(h,d,p,_,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,d,p,_,x,m){const c=o(h,d,p,_,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||GM),i.length>1&&i.sort(d||vp),r.length>1&&r.sort(d||vp)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function WM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new _p,t.set(i,[o])):r>=s.length?(o=new _p,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function XM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new et};break;case"SpotLight":n={position:new B,direction:new B,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function jM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YM=0;function qM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $M(t){const e=new XM,n=jM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new yt,o=new yt;function a(u){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,x=0,m=0,c=0,g=0,v=0,M=0,L=0,A=0,T=0;u.sort(qM);for(let w=0,S=u.length;w<S;w++){const P=u[w],W=P.color,z=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=W.r*z,h+=W.g*z,d+=W.b*z;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],z);T++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,C=n.get(P);C.shadowBias=X.bias,C.shadowNormalBias=X.normalBias,C.shadowRadius=X.radius,C.shadowMapSize=X.mapSize,i.directionalShadow[p]=C,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=O,p++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(W).multiplyScalar(z),O.distance=q,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[x]=O;const X=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,X.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=X.matrix,P.castShadow){const C=n.get(P);C.shadowBias=X.bias,C.shadowNormalBias=X.normalBias,C.shadowRadius=X.radius,C.shadowMapSize=X.mapSize,i.spotShadow[x]=C,i.spotShadowMap[x]=$,M++}x++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(W).multiplyScalar(z),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=O,m++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const X=P.shadow,C=n.get(P);C.shadowBias=X.bias,C.shadowNormalBias=X.normalBias,C.shadowRadius=X.radius,C.shadowMapSize=X.mapSize,C.shadowCameraNear=X.camera.near,C.shadowCameraFar=X.camera.far,i.pointShadow[_]=C,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=O,_++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(z),O.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[c]=O,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==c||b.numDirectionalShadows!==g||b.numPointShadows!==v||b.numSpotShadows!==M||b.numSpotMaps!==L||b.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,b.directionalLength=p,b.pointLength=_,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=c,b.numDirectionalShadows=g,b.numPointShadows=v,b.numSpotShadows=M,b.numSpotMaps=L,b.numLightProbes=T,i.version=YM++)}function l(u,f){let h=0,d=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const v=u[c];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function xp(t){const e=new $M(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new xp(t),e.set(r,[a])):s>=o.length?(a=new xp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ZM extends Cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QM extends Cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tE(t,e,n){let i=new ig;const r=new je,s=new je,o=new Lt,a=new ZM({depthPacking:q2}),l=new QM,u={},f=n.maxTextureSize,h={[Bi]:Qt,[Qt]:Bi,[ei]:ei},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:JM,fragmentShader:eE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Mr;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Hn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let c=this.type;this.render=function(A,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Fi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const z=c!==Zn&&this.type===Zn,q=c===Zn&&this.type!==Zn;for(let $=0,O=A.length;$<O;$++){const X=A[$],C=X.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;r.copy(C.mapSize);const G=C.getFrameExtents();if(r.multiply(G),s.copy(C.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,C.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,C.mapSize.y=s.y)),C.map===null||z===!0||q===!0){const ne=this.type!==Zn?{minFilter:gn,magFilter:gn}:{};C.map!==null&&C.map.dispose(),C.map=new xr(r.x,r.y,ne),C.map.texture.name=X.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const Y=C.getViewportCount();for(let ne=0;ne<Y;ne++){const ge=C.getViewport(ne);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),W.viewport(o),C.updateMatrices(X,ne),i=C.getFrustum(),M(T,b,C.camera,X,this.type)}C.isPointLightShadow!==!0&&this.type===Zn&&g(C,b),C.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,P)};function g(A,T){const b=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,b,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,b,p,x,null)}function v(A,T,b,w){let S=null;const P=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=S.uuid,z=T.uuid;let q=u[W];q===void 0&&(q={},u[W]=q);let $=q[z];$===void 0&&($=S.clone(),q[z]=$,T.addEventListener("dispose",L)),S=$}if(S.visible=T.visible,S.wireframe=T.wireframe,w===Zn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=b}return S}function M(A,T,b,w,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Zn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const z=e.update(A),q=A.material;if(Array.isArray(q)){const $=z.groups;for(let O=0,X=$.length;O<X;O++){const C=$[O],G=q[C.materialIndex];if(G&&G.visible){const Y=v(A,G,w,S);A.onBeforeShadow(t,A,T,b,z,Y,C),t.renderBufferDirect(b,null,z,Y,A,C),A.onAfterShadow(t,A,T,b,z,Y,C)}}}else if(q.visible){const $=v(A,q,w,S);A.onBeforeShadow(t,A,T,b,z,$,null),t.renderBufferDirect(b,null,z,$,A,null),A.onAfterShadow(t,A,T,b,z,$,null)}}const W=A.children;for(let z=0,q=W.length;z<q;z++)M(W[z],T,b,w,S)}function L(A){A.target.removeEventListener("dispose",L);for(const b in u){const w=u[b],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function nE(t){function e(){let D=!1;const de=new Lt;let j=null;const K=new Lt(0,0,0,0);return{setMask:function(oe){j!==oe&&!D&&(t.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){D=oe},setClear:function(oe,Pe,Xe,pt,wt){wt===!0&&(oe*=pt,Pe*=pt,Xe*=pt),de.set(oe,Pe,Xe,pt),K.equals(de)===!1&&(t.clearColor(oe,Pe,Xe,pt),K.copy(de))},reset:function(){D=!1,j=null,K.set(-1,0,0,0)}}}function n(){let D=!1,de=null,j=null,K=null;return{setTest:function(oe){oe?ae(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(oe){de!==oe&&!D&&(t.depthMask(oe),de=oe)},setFunc:function(oe){if(j!==oe){switch(oe){case S2:t.depthFunc(t.NEVER);break;case y2:t.depthFunc(t.ALWAYS);break;case M2:t.depthFunc(t.LESS);break;case tl:t.depthFunc(t.LEQUAL);break;case E2:t.depthFunc(t.EQUAL);break;case w2:t.depthFunc(t.GEQUAL);break;case T2:t.depthFunc(t.GREATER);break;case A2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=oe}},setLocked:function(oe){D=oe},setClear:function(oe){K!==oe&&(t.clearDepth(oe),K=oe)},reset:function(){D=!1,de=null,j=null,K=null}}}function i(){let D=!1,de=null,j=null,K=null,oe=null,Pe=null,Xe=null,pt=null,wt=null;return{setTest:function(Ze){D||(Ze?ae(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!D&&(t.stencilMask(Ze),de=Ze)},setFunc:function(Ze,Dn,Un){(j!==Ze||K!==Dn||oe!==Un)&&(t.stencilFunc(Ze,Dn,Un),j=Ze,K=Dn,oe=Un)},setOp:function(Ze,Dn,Un){(Pe!==Ze||Xe!==Dn||pt!==Un)&&(t.stencilOp(Ze,Dn,Un),Pe=Ze,Xe=Dn,pt=Un)},setLocked:function(Ze){D=Ze},setClear:function(Ze){wt!==Ze&&(t.clearStencil(Ze),wt=Ze)},reset:function(){D=!1,de=null,j=null,K=null,oe=null,Pe=null,Xe=null,pt=null,wt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,c=null,g=null,v=null,M=null,L=null,A=new et(0,0,0),T=0,b=!1,w=null,S=null,P=null,W=null,z=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,O=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=O>=1):X.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=O>=2);let C=null,G={};const Y=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ge=new Lt().fromArray(Y),Le=new Lt().fromArray(ne);function V(D,de,j,K){const oe=new Uint8Array(4),Pe=t.createTexture();t.bindTexture(D,Pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<j;Xe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(de+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return Pe}const Z={};Z[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(tl),we(!1),We(eh),ae(t.CULL_FACE),He(Fi);function ae(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function se(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ae(D,de){return f[D]!==de?(t.bindFramebuffer(D,de),f[D]=de,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ee(D,de){let j=d,K=!1;if(D){j=h.get(de),j===void 0&&(j=[],h.set(de,j));const oe=D.textures;if(j.length!==oe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,Xe=oe.length;Pe<Xe;Pe++)j[Pe]=t.COLOR_ATTACHMENT0+Pe;j.length=oe.length,K=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,K=!0);K&&t.drawBuffers(j)}function Fe(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const U={[rr]:t.FUNC_ADD,[i2]:t.FUNC_SUBTRACT,[r2]:t.FUNC_REVERSE_SUBTRACT};U[s2]=t.MIN,U[o2]=t.MAX;const Oe={[a2]:t.ZERO,[l2]:t.ONE,[u2]:t.SRC_COLOR,[bc]:t.SRC_ALPHA,[m2]:t.SRC_ALPHA_SATURATE,[h2]:t.DST_COLOR,[f2]:t.DST_ALPHA,[c2]:t.ONE_MINUS_SRC_COLOR,[Dc]:t.ONE_MINUS_SRC_ALPHA,[p2]:t.ONE_MINUS_DST_COLOR,[d2]:t.ONE_MINUS_DST_ALPHA,[g2]:t.CONSTANT_COLOR,[v2]:t.ONE_MINUS_CONSTANT_COLOR,[_2]:t.CONSTANT_ALPHA,[x2]:t.ONE_MINUS_CONSTANT_ALPHA};function He(D,de,j,K,oe,Pe,Xe,pt,wt,Ze){if(D===Fi){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&(ae(t.BLEND),_=!0),D!==n2){if(D!==x||Ze!==b){if((m!==rr||v!==rr)&&(t.blendEquation(t.FUNC_ADD),m=rr,v=rr),Ze)switch(D){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.ONE,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ih:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ih:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}c=null,g=null,M=null,L=null,A.set(0,0,0),T=0,x=D,b=Ze}return}oe=oe||de,Pe=Pe||j,Xe=Xe||K,(de!==m||oe!==v)&&(t.blendEquationSeparate(U[de],U[oe]),m=de,v=oe),(j!==c||K!==g||Pe!==M||Xe!==L)&&(t.blendFuncSeparate(Oe[j],Oe[K],Oe[Pe],Oe[Xe]),c=j,g=K,M=Pe,L=Xe),(pt.equals(A)===!1||wt!==T)&&(t.blendColor(pt.r,pt.g,pt.b,wt),A.copy(pt),T=wt),x=D,b=!1}function ot(D,de){D.side===ei?se(t.CULL_FACE):ae(t.CULL_FACE);let j=D.side===Qt;de&&(j=!j),we(j),D.blending===os&&D.transparent===!1?He(Fi):He(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){w!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),w=D)}function We(D){D!==J_?(ae(t.CULL_FACE),D!==S&&(D===eh?t.cullFace(t.BACK):D===e2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),S=D}function ke(D){D!==P&&($&&t.lineWidth(D),P=D)}function be(D,de,j){D?(ae(t.POLYGON_OFFSET_FILL),(W!==de||z!==j)&&(t.polygonOffset(de,j),W=de,z=j)):se(t.POLYGON_OFFSET_FILL)}function gt(D){D?ae(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+q-1),C!==D&&(t.activeTexture(D),C=D)}function y(D,de,j){j===void 0&&(C===null?j=t.TEXTURE0+q-1:j=C);let K=G[j];K===void 0&&(K={type:void 0,texture:void 0},G[j]=K),(K.type!==D||K.texture!==de)&&(C!==j&&(t.activeTexture(j),C=j),t.bindTexture(D,de||Z[D]),K.type=D,K.texture=de)}function H(){const D=G[C];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){ge.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ge.copy(D))}function fe(D){Le.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Le.copy(D))}function Ie(D,de){let j=l.get(de);j===void 0&&(j=new WeakMap,l.set(de,j));let K=j.get(D);K===void 0&&(K=t.getUniformBlockIndex(de,D.name),j.set(D,K))}function Ve(D,de){const K=l.get(de).get(D);a.get(de)!==K&&(t.uniformBlockBinding(de,K,D.__bindingPointIndex),a.set(de,K))}function ht(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},C=null,G={},f={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,c=null,g=null,v=null,M=null,L=null,A=new et(0,0,0),T=0,b=!1,w=null,S=null,P=null,W=null,z=null,ge.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:se,bindFramebuffer:Ae,drawBuffers:Ee,useProgram:Fe,setBlending:He,setMaterial:ot,setFlipSided:we,setCullFace:We,setLineWidth:ke,setPolygonOffset:be,setScissorTest:gt,activeTexture:R,bindTexture:y,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:xe,texImage3D:Be,updateUBOMapping:Ie,uniformBlockBinding:Ve,texStorage2D:Ne,texStorage3D:ie,texSubImage2D:ee,texSubImage3D:ye,compressedTexSubImage2D:ue,compressedTexSubImage3D:ce,scissor:Re,viewport:fe,reset:ht}}function iE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return p?new OffscreenCanvas(R,y):al("canvas")}function x(R,y,H){let Q=1;const J=gt(R);if((J.width>H||J.height>H)&&(Q=H/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(Q*J.width),ye=Math.floor(Q*J.height);h===void 0&&(h=_(ee,ye));const ue=y?_(ee,ye):h;return ue.width=ee,ue.height=ye,ue.getContext("2d").drawImage(R,0,0,ee,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ee+"x"+ye+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==gn&&R.minFilter!==Rn}function c(R){t.generateMipmap(R)}function g(R,y,H,Q,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=y;if(y===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8)),y===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),y===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8)),y===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),y===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),y===t.RGBA){const ye=J?il:$e.getTransfer(Q);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=ye===it?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(R,y){let H;return R?y===null||y===_s||y===xs?H=t.DEPTH24_STENCIL8:y===Ci?H=t.DEPTH32F_STENCIL8:y===nl&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_s||y===xs?H=t.DEPTH_COMPONENT24:y===Ci?H=t.DEPTH_COMPONENT32F:y===nl&&(H=t.DEPTH_COMPONENT16),H}function M(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function L(R){const y=R.target;y.removeEventListener("dispose",L),T(y),y.isVideoTexture&&f.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),w(y)}function T(R){const y=i.get(R);if(y.__webglInit===void 0)return;const H=R.source,Q=d.get(H);if(Q){const J=Q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(R),Object.keys(Q).length===0&&d.delete(H)}i.remove(R)}function b(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const H=R.source,Q=d.get(H);delete Q[y.__cacheKey],o.memory.textures--}function w(R){const y=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let J=0;J<y.__webglFramebuffer[Q].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[Q][J]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,J=H.length;Q<J;Q++){const ee=i.get(H[Q]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(H[Q])}i.remove(R)}let S=0;function P(){S=0}function W(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function q(R,y){const H=i.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(H,R,y);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+y)}function $(R,y){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Le(H,R,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+y)}function O(R,y){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Le(H,R,y);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+y)}function X(R,y){const H=i.get(R);if(R.version>0&&H.__version!==R.version){V(H,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+y)}const C={[Ic]:t.REPEAT,[ur]:t.CLAMP_TO_EDGE,[Fc]:t.MIRRORED_REPEAT},G={[gn]:t.NEAREST,[F2]:t.NEAREST_MIPMAP_NEAREST,[qo]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[su]:t.LINEAR_MIPMAP_NEAREST,[cr]:t.LINEAR_MIPMAP_LINEAR},Y={[Z2]:t.NEVER,[i1]:t.ALWAYS,[Q2]:t.LESS,[W0]:t.LEQUAL,[J2]:t.EQUAL,[n1]:t.GEQUAL,[e1]:t.GREATER,[t1]:t.NOTEQUAL};function ne(R,y){if(y.type===Ci&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===su||y.magFilter===qo||y.magFilter===cr||y.minFilter===Rn||y.minFilter===su||y.minFilter===qo||y.minFilter===cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,C[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,C[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,C[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,G[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,G[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Y[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==qo&&y.minFilter!==cr||y.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ge(R,y){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",L));const Q=y.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const ee=z(y);if(ee!==R.__cacheKey){J[ee]===void 0&&(J[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[ee].usedTimes++;const ye=J[R.__cacheKey];ye!==void 0&&(J[R.__cacheKey].usedTimes--,ye.usedTimes===0&&b(y)),R.__cacheKey=ee,R.__webglTexture=J[ee].texture}return H}function Le(R,y,H){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const J=ge(R,y),ee=y.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+H);const ye=i.get(ee);if(ee.version!==ye.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const ue=$e.getPrimaries($e.workingColorSpace),ce=y.colorSpace===wi?null:$e.getPrimaries(y.colorSpace),Ne=y.colorSpace===wi||ue===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ie=x(y.image,!1,r.maxTextureSize);ie=be(y,ie);const xe=s.convert(y.format,y.colorSpace),Be=s.convert(y.type);let Re=g(y.internalFormat,xe,Be,y.colorSpace,y.isVideoTexture);ne(Q,y);let fe;const Ie=y.mipmaps,Ve=y.isVideoTexture!==!0,ht=ye.__version===void 0||J===!0,D=ee.dataReady,de=M(y,ie);if(y.isDepthTexture)Re=v(y.format===Ss,y.type),ht&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,xe,Be,null));else if(y.isDataTexture)if(Ie.length>0){Ve&&ht&&n.texStorage2D(t.TEXTURE_2D,de,Re,Ie[0].width,Ie[0].height);for(let j=0,K=Ie.length;j<K;j++)fe=Ie[j],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,fe.width,fe.height,xe,Be,fe.data):n.texImage2D(t.TEXTURE_2D,j,Re,fe.width,fe.height,0,xe,Be,fe.data);y.generateMipmaps=!1}else Ve?(ht&&n.texStorage2D(t.TEXTURE_2D,de,Re,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,Be,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,xe,Be,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Re,Ie[0].width,Ie[0].height,ie.depth);for(let j=0,K=Ie.length;j<K;j++)if(fe=Ie[j],y.format!==Bn)if(xe!==null)if(Ve){if(D)if(y.layerUpdates.size>0){for(const oe of y.layerUpdates){const Pe=fe.width*fe.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,oe,fe.width,fe.height,1,xe,fe.data.slice(Pe*oe,Pe*(oe+1)),0,0)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,ie.depth,xe,fe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,Re,fe.width,fe.height,ie.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,ie.depth,xe,Be,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,Re,fe.width,fe.height,ie.depth,0,xe,Be,fe.data)}else{Ve&&ht&&n.texStorage2D(t.TEXTURE_2D,de,Re,Ie[0].width,Ie[0].height);for(let j=0,K=Ie.length;j<K;j++)fe=Ie[j],y.format!==Bn?xe!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,fe.width,fe.height,xe,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,j,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,fe.width,fe.height,xe,Be,fe.data):n.texImage2D(t.TEXTURE_2D,j,Re,fe.width,fe.height,0,xe,Be,fe.data)}else if(y.isDataArrayTexture)if(Ve){if(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Re,ie.width,ie.height,ie.depth),D)if(y.layerUpdates.size>0){let j;switch(Be){case t.UNSIGNED_BYTE:switch(xe){case t.ALPHA:j=1;break;case t.LUMINANCE:j=1;break;case t.LUMINANCE_ALPHA:j=2;break;case t.RGB:j=3;break;case t.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${xe}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${Be}.`)}const K=ie.width*ie.height*j;for(const oe of y.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ie.width,ie.height,1,xe,Be,ie.data.slice(K*oe,K*(oe+1)));y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Be,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,xe,Be,ie.data);else if(y.isData3DTexture)Ve?(ht&&n.texStorage3D(t.TEXTURE_3D,de,Re,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Be,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,xe,Be,ie.data);else if(y.isFramebufferTexture){if(ht)if(Ve)n.texStorage2D(t.TEXTURE_2D,de,Re,ie.width,ie.height);else{let j=ie.width,K=ie.height;for(let oe=0;oe<de;oe++)n.texImage2D(t.TEXTURE_2D,oe,Re,j,K,0,xe,Be,null),j>>=1,K>>=1}}else if(Ie.length>0){if(Ve&&ht){const j=gt(Ie[0]);n.texStorage2D(t.TEXTURE_2D,de,Re,j.width,j.height)}for(let j=0,K=Ie.length;j<K;j++)fe=Ie[j],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,xe,Be,fe):n.texImage2D(t.TEXTURE_2D,j,Re,xe,Be,fe);y.generateMipmaps=!1}else if(Ve){if(ht){const j=gt(ie);n.texStorage2D(t.TEXTURE_2D,de,Re,j.width,j.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Be,ie)}else n.texImage2D(t.TEXTURE_2D,0,Re,xe,Be,ie);m(y)&&c(Q),ye.__version=ee.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function V(R,y,H){if(y.image.length!==6)return;const Q=ge(R,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const ee=i.get(J);if(J.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const ye=$e.getPrimaries($e.workingColorSpace),ue=y.colorSpace===wi?null:$e.getPrimaries(y.colorSpace),ce=y.colorSpace===wi||ye===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ne=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let K=0;K<6;K++)!Ne&&!ie?xe[K]=x(y.image[K],!0,r.maxCubemapSize):xe[K]=ie?y.image[K].image:y.image[K],xe[K]=be(y,xe[K]);const Be=xe[0],Re=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),Ie=g(y.internalFormat,Re,fe,y.colorSpace),Ve=y.isVideoTexture!==!0,ht=ee.__version===void 0||Q===!0,D=J.dataReady;let de=M(y,Be);ne(t.TEXTURE_CUBE_MAP,y);let j;if(Ne){Ve&&ht&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ie,Be.width,Be.height);for(let K=0;K<6;K++){j=xe[K].mipmaps;for(let oe=0;oe<j.length;oe++){const Pe=j[oe];y.format!==Bn?Re!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Pe.width,Pe.height,Re,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,Pe.width,Pe.height,Re,fe,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Ie,Pe.width,Pe.height,0,Re,fe,Pe.data)}}}else{if(j=y.mipmaps,Ve&&ht){j.length>0&&de++;const K=gt(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ie,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xe[K].width,xe[K].height,Re,fe,xe[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,xe[K].width,xe[K].height,0,Re,fe,xe[K].data);for(let oe=0;oe<j.length;oe++){const Xe=j[oe].image[K].image;Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Xe.width,Xe.height,Re,fe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Ie,Xe.width,Xe.height,0,Re,fe,Xe.data)}}else{Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,fe,xe[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ie,Re,fe,xe[K]);for(let oe=0;oe<j.length;oe++){const Pe=j[oe];Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Re,fe,Pe.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Ie,Re,fe,Pe.image[K])}}}m(y)&&c(t.TEXTURE_CUBE_MAP),ee.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Z(R,y,H,Q,J,ee){const ye=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),ce=g(H.internalFormat,ye,ue,H.colorSpace);if(!i.get(y).__hasExternalTextures){const ie=Math.max(1,y.width>>ee),xe=Math.max(1,y.height>>ee);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ee,ce,ie,xe,y.depth,0,ye,ue,null):n.texImage2D(J,ee,ce,ie,xe,0,ye,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,J,i.get(H).__webglTexture,0,we(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,J,i.get(H).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(R,y,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const Q=y.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,ee=v(y.stencilBuffer,J),ye=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=we(y);We(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ee,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,R)}else{const Q=y.textures;for(let J=0;J<Q.length;J++){const ee=Q[J],ye=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),ce=g(ee.internalFormat,ye,ue,ee.colorSpace),Ne=we(y);H&&We(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ce,y.width,y.height):We(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,ce,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ce,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const Q=i.get(y.depthTexture).__webglTexture,J=we(y);if(y.depthTexture.format===as)We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Ss)We(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const y=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");se(y.__webglFramebuffer,R)}else if(H){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=t.createRenderbuffer(),ae(y.__webglDepthbuffer[Q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),ae(y.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(R,y,H){const Q=i.get(R);y!==void 0&&Z(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ae(R)}function Fe(R){const y=R.texture,H=i.get(R),Q=i.get(y);R.addEventListener("dispose",A);const J=R.textures,ee=R.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++),ee){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let ce=0;ce<y.mipmaps.length;ce++)H.__webglFramebuffer[ue][ce]=t.createFramebuffer()}else H.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)H.__webglFramebuffer[ue]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ye)for(let ue=0,ce=J.length;ue<ce;ue++){const Ne=i.get(J[ue]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&We(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const ce=J[ue];H.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const Ne=s.convert(ce.format,ce.colorSpace),ie=s.convert(ce.type),xe=g(ce.internalFormat,Ne,ie,ce.colorSpace,R.isXRRenderTarget===!0),Be=we(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(t.TEXTURE_CUBE_MAP,y);for(let ue=0;ue<6;ue++)if(y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Z(H.__webglFramebuffer[ue][ce],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else Z(H.__webglFramebuffer[ue],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(y)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ue=0,ce=J.length;ue<ce;ue++){const Ne=J[ue],ie=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ne(t.TEXTURE_2D,Ne),Z(H.__webglFramebuffer,R,Ne,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(Ne)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),ne(ue,y),y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Z(H.__webglFramebuffer[ce],R,y,t.COLOR_ATTACHMENT0,ue,ce);else Z(H.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,ue,0);m(y)&&c(ue),n.unbindTexture()}R.depthBuffer&&Ae(R)}function U(R){const y=R.textures;for(let H=0,Q=y.length;H<Q;H++){const J=y[H];if(m(J)){const ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(J).__webglTexture;n.bindTexture(ee,ye),c(ee),n.unbindTexture()}}}const Oe=[],He=[];function ot(R){if(R.samples>0){if(We(R)===!1){const y=R.textures,H=R.width,Q=R.height;let J=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(R),ue=y.length>1;if(ue)for(let ce=0;ce<y.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);const Ne=i.get(y[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,J,t.NEAREST),l===!0&&(Oe.length=0,He.length=0,Oe.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Oe.push(ee),He.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,He)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ce=0;ce<y.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ce]);const Ne=i.get(y[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function we(R){return Math.min(r.maxSamples,R.samples)}function We(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ke(R){const y=o.render.frame;f.get(R)!==y&&(f.set(R,y),R.update())}function be(R,y){const H=R.colorSpace,Q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Xi&&H!==wi&&($e.getTransfer(H)===it?(Q!==Bn||J!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function gt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=O,this.setTextureCube=X,this.rebindTextures=Ee,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=We}function rE(t,e){function n(i,r=wi){let s;const o=$e.getTransfer(r);if(i===Hi)return t.UNSIGNED_BYTE;if(i===z0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===B0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===z2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===O2)return t.BYTE;if(i===k2)return t.SHORT;if(i===nl)return t.UNSIGNED_SHORT;if(i===k0)return t.INT;if(i===_s)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===Tl)return t.HALF_FLOAT;if(i===B2)return t.ALPHA;if(i===H2)return t.RGB;if(i===Bn)return t.RGBA;if(i===V2)return t.LUMINANCE;if(i===G2)return t.LUMINANCE_ALPHA;if(i===as)return t.DEPTH_COMPONENT;if(i===Ss)return t.DEPTH_STENCIL;if(i===W2)return t.RED;if(i===H0)return t.RED_INTEGER;if(i===X2)return t.RG;if(i===V0)return t.RG_INTEGER;if(i===G0)return t.RGBA_INTEGER;if(i===ou||i===au||i===lu||i===uu)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ou)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ou)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===uh||i===ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===uh)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ch)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===dh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh||i===Sh||i===yh||i===Mh||i===Eh||i===wh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_h)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cu||i===Th||i===Ah)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cu)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===j2||i===Ch||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class sE extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ga extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oE={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const aE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:aE,fragmentShader:lE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hn(new Co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class cE extends Ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,_=null;const x=new uE,m=n.getContextAttributes();let c=null,g=null;const v=[],M=[],L=new je;let A=null;const T=new Cn;T.layers.enable(1),T.viewport=new Lt;const b=new Cn;b.layers.enable(2),b.viewport=new Lt;const w=[T,b],S=new sE;S.layers.enable(1),S.layers.enable(2);let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=v[V];return Z===void 0&&(Z=new Ou,v[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=v[V];return Z===void 0&&(Z=new Ou,v[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=v[V];return Z===void 0&&(Z=new Ou,v[V]=Z),Z.getHandSpace()};function z(V){const Z=M.indexOf(V.inputSource);if(Z===-1)return;const ae=v[Z];ae!==void 0&&(ae.update(V.inputSource,V.frame,u||o),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let V=0;V<v.length;V++){const Z=M[V];Z!==null&&(M[V]=null,v[V].disconnect(Z))}P=null,W=null,x.reset(),e.setRenderTarget(c),p=null,d=null,h=null,r=null,g=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new xr(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ae=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?Ss:as,ae=m.stencil?xs:_s);const Ae={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new xr(d.textureWidth,d.textureHeight,{format:Bn,type:Hi,depthTexture:new og(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(V){for(let Z=0;Z<V.removed.length;Z++){const ae=V.removed[Z],se=M.indexOf(ae);se>=0&&(M[se]=null,v[se].disconnect(ae))}for(let Z=0;Z<V.added.length;Z++){const ae=V.added[Z];let se=M.indexOf(ae);if(se===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=M.length){M.push(ae),se=Ee;break}else if(M[Ee]===null){M[Ee]=ae,se=Ee;break}if(se===-1)break}const Ae=v[se];Ae&&Ae.connect(ae)}}const O=new B,X=new B;function C(V,Z,ae){O.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const se=O.distanceTo(X),Ae=Z.projectionMatrix.elements,Ee=ae.projectionMatrix.elements,Fe=Ae[14]/(Ae[10]-1),U=Ae[14]/(Ae[10]+1),Oe=(Ae[9]+1)/Ae[5],He=(Ae[9]-1)/Ae[5],ot=(Ae[8]-1)/Ae[0],we=(Ee[8]+1)/Ee[0],We=Fe*ot,ke=Fe*we,be=se/(-ot+we),gt=be*-ot;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(gt),V.translateZ(be),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const R=Fe+be,y=U+be,H=We-gt,Q=ke+(se-gt),J=Oe*U/y*R,ee=He*U/y*R;V.projectionMatrix.makePerspective(H,Q,J,ee,R,y),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function G(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;x.texture!==null&&(V.near=x.depthNear,V.far=x.depthFar),S.near=b.near=T.near=V.near,S.far=b.far=T.far=V.far,(P!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,W=S.far,T.near=P,T.far=W,b.near=P,b.far=W,T.updateProjectionMatrix(),b.updateProjectionMatrix(),V.updateProjectionMatrix());const Z=V.parent,ae=S.cameras;G(S,Z);for(let se=0;se<ae.length;se++)G(ae[se],Z);ae.length===2?C(S,T,b):S.projectionMatrix.copy(T.projectionMatrix),Y(V,S,Z)};function Y(V,Z,ae){ae===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Oc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ne=null;function ge(V,Z){if(f=Z.getViewerPose(u||o),_=Z,f!==null){const ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let se=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Ee=0;Ee<ae.length;Ee++){const Fe=ae[Ee];let U=null;if(p!==null)U=p.getViewport(Fe);else{const He=h.getViewSubImage(d,Fe);U=He.viewport,Ee===0&&(e.setRenderTargetTextures(g,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(g))}let Oe=w[Ee];Oe===void 0&&(Oe=new Cn,Oe.layers.enable(Ee),Oe.viewport=new Lt,w[Ee]=Oe),Oe.matrix.fromArray(Fe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Fe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(U.x,U.y,U.width,U.height),Ee===0&&(S.matrix.copy(Oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Oe)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ee=h.getDepthInformation(ae[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,r.renderState)}}for(let ae=0;ae<v.length;ae++){const se=M[ae],Ae=v[ae];se!==null&&Ae!==void 0&&Ae.update(se,Z,u||o)}ne&&ne(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Le=new rg;Le.setAnimationLoop(ge),this.setAnimationLoop=function(V){ne=V},this.dispose=function(){}}}const Ji=new ui,fE=new yt;function dE(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,eg(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,v,M){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,M)):c.isMeshMatcapMaterial?(s(m,c),_(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,v):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===Qt&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===Qt&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),v=g.envMap,M=g.envMapRotation;v&&(m.envMap.value=v,Ji.copy(M),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(fE.makeRotationFromEuler(Ji)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,v){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=v*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Qt&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function u(g,v){let M=r[g.id];M===void 0&&(_(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",m));const L=v.program;i.updateUBOMapping(g,L);const A=e.render.frame;s[g.id]!==A&&(d(g),s[g.id]=A)}function f(g){const v=h();g.__bindingPointIndex=v;const M=t.createBuffer(),L=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],M=g.uniforms,L=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=M.length;A<T;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let w=0,S=b.length;w<S;w++){const P=b[w];if(p(P,A,w,L)===!0){const W=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let $=0;$<z.length;$++){const O=z[$],X=x(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,W+q,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,q),q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,M,L){const A=g.value,T=v+"_"+M;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const b=L[T];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return L[T]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function _(g){const v=g.uniforms;let M=0;const L=16;for(let T=0,b=v.length;T<b;T++){const w=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,P=w.length;S<P;S++){const W=w[S],z=Array.isArray(W.value)?W.value:[W.value];for(let q=0,$=z.length;q<$;q++){const O=z[q],X=x(O),C=M%L;C!==0&&L-C<X.boundary&&(M+=L-C),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=X.storage}}}const A=M%L;return A>0&&(M+=L-A),g.__size=M,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class pE{constructor(e={}){const{canvas:n=s1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Oi,this.toneMappingExposure=1;const v=this;let M=!1,L=0,A=0,T=null,b=-1,w=null;const S=new Lt,P=new Lt;let W=null;const z=new et(0);let q=0,$=n.width,O=n.height,X=1,C=null,G=null;const Y=new Lt(0,0,$,O),ne=new Lt(0,0,$,O);let ge=!1;const Le=new ig;let V=!1,Z=!1;const ae=new yt,se=new B,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Fe(){return T===null?X:1}let U=i;function Oe(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",K,!1),U===null){const N="webgl2";if(U=Oe(N,E),U===null)throw Oe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,ot,we,We,ke,be,gt,R,y,H,Q,J,ee,ye,ue,ce,Ne,ie,xe,Be,Re,fe,Ie,Ve;function ht(){He=new My(U),He.init(),fe=new rE(U,He),ot=new gy(U,He,e,fe),we=new nE(U),We=new Ty(U),ke=new VM,be=new iE(U,He,we,ke,ot,fe,We),gt=new _y(v),R=new yy(v),y=new D1(U),Ie=new py(U,y),H=new Ey(U,y,We,Ie),Q=new Cy(U,H,y,We),xe=new Ay(U,ot,be),ce=new vy(ke),J=new HM(v,gt,R,He,ot,Ie,ce),ee=new dE(v,ke),ye=new WM,ue=new KM(He),ie=new hy(v,gt,R,we,Q,d,l),Ne=new tE(v,Q,ot),Ve=new hE(U,We,ot,we),Be=new my(U,He,We),Re=new wy(U,He,We),We.programs=J.programs,v.capabilities=ot,v.extensions=He,v.properties=ke,v.renderLists=ye,v.shadowMap=Ne,v.state=we,v.info=We}ht();const D=new cE(v,U);this.xr=D,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize($,O,!1))},this.getSize=function(E){return E.set($,O)},this.setSize=function(E,N,F=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,O=N,n.width=Math.floor(E*X),n.height=Math.floor(N*X),F===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set($*X,O*X).floor()},this.setDrawingBufferSize=function(E,N,F){$=E,O=N,X=F,n.width=Math.floor(E*F),n.height=Math.floor(N*F),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,N,F,k){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,N,F,k),we.viewport(S.copy(Y).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,N,F,k){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,N,F,k),we.scissor(P.copy(ne).multiplyScalar(X).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){we.setScissorTest(ge=E)},this.setOpaqueSort=function(E){C=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,N=!0,F=!0){let k=0;if(E){let I=!1;if(T!==null){const re=T.texture.format;I=re===G0||re===V0||re===H0}if(I){const re=T.texture.type,he=re===Hi||re===_s||re===nl||re===xs||re===z0||re===B0,ve=ie.getClearColor(),_e=ie.getClearAlpha(),Te=ve.r,Ce=ve.g,Me=ve.b;he?(p[0]=Te,p[1]=Ce,p[2]=Me,p[3]=_e,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=Te,_[1]=Ce,_[2]=Me,_[3]=_e,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}N&&(k|=U.DEPTH_BUFFER_BIT),F&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",K,!1),ye.dispose(),ue.dispose(),ke.dispose(),gt.dispose(),R.dispose(),Q.dispose(),Ie.dispose(),Ve.dispose(),J.dispose(),D.dispose(),D.removeEventListener("sessionstart",Dn),D.removeEventListener("sessionend",Un),ji.stop()};function de(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=We.autoReset,N=Ne.enabled,F=Ne.autoUpdate,k=Ne.needsUpdate,I=Ne.type;ht(),We.autoReset=E,Ne.enabled=N,Ne.autoUpdate=F,Ne.needsUpdate=k,Ne.type=I}function K(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const N=E.target;N.removeEventListener("dispose",oe),Pe(N)}function Pe(E){Xe(E),ke.remove(E)}function Xe(E){const N=ke.get(E).programs;N!==void 0&&(N.forEach(function(F){J.releaseProgram(F)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,F,k,I,re){N===null&&(N=Ae);const he=I.isMesh&&I.matrixWorld.determinant()<0,ve=dg(E,N,F,k,I);we.setMaterial(k,he);let _e=F.index,Te=1;if(k.wireframe===!0){if(_e=H.getWireframeAttribute(F),_e===void 0)return;Te=2}const Ce=F.drawRange,Me=F.attributes.position;let Ye=Ce.start*Te,ct=(Ce.start+Ce.count)*Te;re!==null&&(Ye=Math.max(Ye,re.start*Te),ct=Math.min(ct,(re.start+re.count)*Te)),_e!==null?(Ye=Math.max(Ye,0),ct=Math.min(ct,_e.count)):Me!=null&&(Ye=Math.max(Ye,0),ct=Math.min(ct,Me.count));const ft=ct-Ye;if(ft<0||ft===1/0)return;Ie.setup(I,k,ve,F,_e);let en,qe=Be;if(_e!==null&&(en=y.get(_e),qe=Re,qe.setIndex(en)),I.isMesh)k.wireframe===!0?(we.setLineWidth(k.wireframeLinewidth*Fe()),qe.setMode(U.LINES)):qe.setMode(U.TRIANGLES);else if(I.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),we.setLineWidth(Se*Fe()),I.isLineSegments?qe.setMode(U.LINES):I.isLineLoop?qe.setMode(U.LINE_LOOP):qe.setMode(U.LINE_STRIP)}else I.isPoints?qe.setMode(U.POINTS):I.isSprite&&qe.setMode(U.TRIANGLES);if(I.isBatchedMesh)I._multiDrawInstances!==null?qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances):qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)qe.renderInstances(Ye,ft,I.count);else if(F.isInstancedBufferGeometry){const Se=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,zt=Math.min(F.instanceCount,Se);qe.renderInstances(Ye,ft,zt)}else qe.render(Ye,ft)};function pt(E,N,F){E.transparent===!0&&E.side===ei&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,Po(E,N,F),E.side=Bi,E.needsUpdate=!0,Po(E,N,F),E.side=ei):Po(E,N,F)}this.compile=function(E,N,F=null){F===null&&(F=E),m=ue.get(F),m.init(N),g.push(m),F.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),E!==F&&E.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights();const k=new Set;return E.traverse(function(I){const re=I.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ve=re[he];pt(ve,F,I),k.add(ve)}else pt(re,F,I),k.add(re)}),g.pop(),m=null,k},this.compileAsync=function(E,N,F=null){const k=this.compile(E,N,F);return new Promise(I=>{function re(){if(k.forEach(function(he){ke.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){I(E);return}setTimeout(re,10)}He.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let wt=null;function Ze(E){wt&&wt(E)}function Dn(){ji.stop()}function Un(){ji.start()}const ji=new rg;ji.setAnimationLoop(Ze),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(E){wt=E,D.setAnimationLoop(E),E===null?ji.stop():ji.start()},D.addEventListener("sessionstart",Dn),D.addEventListener("sessionend",Un),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(N),N=D.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,T),m=ue.get(E,g.length),m.init(N),g.push(m),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Le.setFromProjectionMatrix(ae),Z=this.localClippingEnabled,V=ce.init(this.clippingPlanes,Z),x=ye.get(E,c.length),x.init(),c.push(x),D.enabled===!0&&D.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Pl(re,N,-1/0,v.sortObjects)}Pl(E,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(C,G),Ee=D.enabled===!1||D.isPresenting===!1||D.hasDepthSensing()===!1,Ee&&ie.addToRenderList(x,E),this.info.render.frame++,V===!0&&ce.beginShadows();const F=m.state.shadowsArray;Ne.render(F,E,N),V===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,I=x.transmissive;if(m.setupLights(),N.isArrayCamera){const re=N.cameras;if(I.length>0)for(let he=0,ve=re.length;he<ve;he++){const _e=re[he];Bf(k,I,E,_e)}Ee&&ie.render(E);for(let he=0,ve=re.length;he<ve;he++){const _e=re[he];zf(x,E,_e,_e.viewport)}}else I.length>0&&Bf(k,I,E,N),Ee&&ie.render(E),zf(x,E,N);T!==null&&(be.updateMultisampleRenderTarget(T),be.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,N),Ie.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?(m=g[g.length-1],V===!0&&ce.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function Pl(E,N,F,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){k&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const he=Q.update(E),ve=E.material;ve.visible&&x.push(E,he,ve,F,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const he=Q.update(E),ve=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),se.copy(he.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(ve)){const _e=he.groups;for(let Te=0,Ce=_e.length;Te<Ce;Te++){const Me=_e[Te],Ye=ve[Me.materialIndex];Ye&&Ye.visible&&x.push(E,he,Ye,F,se.z,Me)}}else ve.visible&&x.push(E,he,ve,F,se.z,null)}}const re=E.children;for(let he=0,ve=re.length;he<ve;he++)Pl(re[he],N,F,k)}function zf(E,N,F,k){const I=E.opaque,re=E.transmissive,he=E.transparent;m.setupLightsView(F),V===!0&&ce.setGlobalState(v.clippingPlanes,F),k&&we.viewport(S.copy(k)),I.length>0&&Ro(I,N,F),re.length>0&&Ro(re,N,F),he.length>0&&Ro(he,N,F),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Bf(E,N,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new xr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Tl:Hi,minFilter:cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const re=m.state.transmissionRenderTarget[k.id],he=k.viewport||S;re.setSize(he.z,he.w);const ve=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(z),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),Ee?ie.render(F):v.clear();const _e=v.toneMapping;v.toneMapping=Oi;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),V===!0&&ce.setGlobalState(v.clippingPlanes,k),Ro(E,F,k),be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,Ye=N.length;Me<Ye;Me++){const ct=N[Me],ft=ct.object,en=ct.geometry,qe=ct.material,Se=ct.group;if(qe.side===ei&&ft.layers.test(k.layers)){const zt=qe.side;qe.side=Qt,qe.needsUpdate=!0,Hf(ft,F,k,en,qe,Se),qe.side=zt,qe.needsUpdate=!0,Ce=!0}}Ce===!0&&(be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re))}v.setRenderTarget(ve),v.setClearColor(z,q),Te!==void 0&&(k.viewport=Te),v.toneMapping=_e}function Ro(E,N,F){const k=N.isScene===!0?N.overrideMaterial:null;for(let I=0,re=E.length;I<re;I++){const he=E[I],ve=he.object,_e=he.geometry,Te=k===null?he.material:k,Ce=he.group;ve.layers.test(F.layers)&&Hf(ve,N,F,_e,Te,Ce)}}function Hf(E,N,F,k,I,re){E.onBeforeRender(v,N,F,k,I,re),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(v,N,F,k,E,re),I.transparent===!0&&I.side===ei&&I.forceSinglePass===!1?(I.side=Qt,I.needsUpdate=!0,v.renderBufferDirect(F,N,k,I,E,re),I.side=Bi,I.needsUpdate=!0,v.renderBufferDirect(F,N,k,I,E,re),I.side=ei):v.renderBufferDirect(F,N,k,I,E,re),E.onAfterRender(v,N,F,k,I,re)}function Po(E,N,F){N.isScene!==!0&&(N=Ae);const k=ke.get(E),I=m.state.lights,re=m.state.shadowsArray,he=I.state.version,ve=J.getParameters(E,I.state,re,N,F),_e=J.getProgramCacheKey(ve);let Te=k.programs;k.environment=E.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(E.isMeshStandardMaterial?R:gt).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",oe),Te=new Map,k.programs=Te);let Ce=Te.get(_e);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===he)return Gf(E,ve),Ce}else ve.uniforms=J.getUniforms(E),E.onBuild(F,ve,v),E.onBeforeCompile(ve,v),Ce=J.acquireProgram(ve,_e),Te.set(_e,Ce),k.uniforms=ve.uniforms;const Me=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ce.uniform),Gf(E,ve),k.needsLights=pg(E),k.lightsStateVersion=he,k.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function Vf(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=La.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Gf(E,N){const F=ke.get(E);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function dg(E,N,F,k,I){N.isScene!==!0&&(N=Ae),be.resetTextureUnits();const re=N.fog,he=k.isMeshStandardMaterial?N.environment:null,ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xi,_e=(k.isMeshStandardMaterial?R:gt).get(k.envMap||he),Te=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ce=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!F.morphAttributes.position,Ye=!!F.morphAttributes.normal,ct=!!F.morphAttributes.color;let ft=Oi;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=v.toneMapping);const en=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,qe=en!==void 0?en.length:0,Se=ke.get(k),zt=m.state.lights;if(V===!0&&(Z===!0||E!==w)){const fn=E===w&&k.id===b;ce.setState(k,E,fn)}let Qe=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==zt.state.version||Se.outputColorSpace!==ve||I.isBatchedMesh&&Se.batching===!1||!I.isBatchedMesh&&Se.batching===!0||I.isBatchedMesh&&Se.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Se.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Se.instancing===!1||!I.isInstancedMesh&&Se.instancing===!0||I.isSkinnedMesh&&Se.skinning===!1||!I.isSkinnedMesh&&Se.skinning===!0||I.isInstancedMesh&&Se.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Se.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Se.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Se.instancingMorph===!1&&I.morphTexture!==null||Se.envMap!==_e||k.fog===!0&&Se.fog!==re||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ce.numPlanes||Se.numIntersection!==ce.numIntersection)||Se.vertexAlphas!==Te||Se.vertexTangents!==Ce||Se.morphTargets!==Me||Se.morphNormals!==Ye||Se.morphColors!==ct||Se.toneMapping!==ft||Se.morphTargetsCount!==qe)&&(Qe=!0):(Qe=!0,Se.__version=k.version);let Xn=Se.currentProgram;Qe===!0&&(Xn=Po(k,N,I));let Lo=!1,Yi=!1,Ll=!1;const Tt=Xn.getUniforms(),di=Se.uniforms;if(we.useProgram(Xn.program)&&(Lo=!0,Yi=!0,Ll=!0),k.id!==b&&(b=k.id,Yi=!0),Lo||w!==E){Tt.setValue(U,"projectionMatrix",E.projectionMatrix),Tt.setValue(U,"viewMatrix",E.matrixWorldInverse);const fn=Tt.map.cameraPosition;fn!==void 0&&fn.setValue(U,se.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Tt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Tt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Yi=!0,Ll=!0)}if(I.isSkinnedMesh){Tt.setOptional(U,I,"bindMatrix"),Tt.setOptional(U,I,"bindMatrixInverse");const fn=I.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Tt.setValue(U,"boneTexture",fn.boneTexture,be))}I.isBatchedMesh&&(Tt.setOptional(U,I,"batchingTexture"),Tt.setValue(U,"batchingTexture",I._matricesTexture,be),Tt.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&Tt.setValue(U,"batchingColorTexture",I._colorsTexture,be));const bl=F.morphAttributes;if((bl.position!==void 0||bl.normal!==void 0||bl.color!==void 0)&&xe.update(I,F,Xn),(Yi||Se.receiveShadow!==I.receiveShadow)&&(Se.receiveShadow=I.receiveShadow,Tt.setValue(U,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(di.envMap.value=_e,di.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(di.envMapIntensity.value=N.environmentIntensity),Yi&&(Tt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&hg(di,Ll),re&&k.fog===!0&&ee.refreshFogUniforms(di,re),ee.refreshMaterialUniforms(di,k,X,O,m.state.transmissionRenderTarget[E.id]),La.upload(U,Vf(Se),di,be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(La.upload(U,Vf(Se),di,be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Tt.setValue(U,"center",I.center),Tt.setValue(U,"modelViewMatrix",I.modelViewMatrix),Tt.setValue(U,"normalMatrix",I.normalMatrix),Tt.setValue(U,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const fn=k.uniformsGroups;for(let Dl=0,mg=fn.length;Dl<mg;Dl++){const Wf=fn[Dl];Ve.update(Wf,Xn),Ve.bind(Wf,Xn)}}return Xn}function hg(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function pg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,F){ke.get(E.texture).__webglTexture=N,ke.get(E.depthTexture).__webglTexture=F;const k=ke.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const F=ke.get(E);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,F=0){T=E,L=N,A=F;let k=!0,I=null,re=!1,he=!1;if(E){const _e=ke.get(E);_e.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(U.FRAMEBUFFER,null),k=!1):_e.__webglFramebuffer===void 0?be.setupRenderTarget(E):_e.__hasExternalTextures&&be.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(he=!0);const Ce=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?I=Ce[N][F]:I=Ce[N],re=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?I=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[F]:I=Ce,S.copy(E.viewport),P.copy(E.scissor),W=E.scissorTest}else S.copy(Y).multiplyScalar(X).floor(),P.copy(ne).multiplyScalar(X).floor(),W=ge;if(we.bindFramebuffer(U.FRAMEBUFFER,I)&&k&&we.drawBuffers(E,I),we.viewport(S),we.scissor(P),we.setScissorTest(W),re){const _e=ke.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,F)}else if(he){const _e=ke.get(E.texture),Te=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,F||0,Te)}b=-1},this.readRenderTargetPixels=function(E,N,F,k,I,re,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){we.bindFramebuffer(U.FRAMEBUFFER,ve);try{const _e=E.texture,Te=_e.format,Ce=_e.type;if(!ot.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&F>=0&&F<=E.height-I&&U.readPixels(N,F,k,I,fe.convert(Te),fe.convert(Ce),re)}finally{const _e=T!==null?ke.get(T).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,N,F,k,I,re,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ve=ve[he]),ve){we.bindFramebuffer(U.FRAMEBUFFER,ve);try{const _e=E.texture,Te=_e.format,Ce=_e.type;if(!ot.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-k&&F>=0&&F<=E.height-I){const Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(N,F,k,I,fe.convert(Te),fe.convert(Ce),0),U.flush();const Ye=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await o1(U,Ye,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re)}finally{U.deleteBuffer(Me),U.deleteSync(Ye)}return re}}finally{const _e=T!==null?ke.get(T).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(E,N=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-F),I=Math.floor(E.image.width*k),re=Math.floor(E.image.height*k),he=N!==null?N.x:0,ve=N!==null?N.y:0;be.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,he,ve,I,re),we.unbindTexture()},this.copyTextureToTexture=function(E,N,F=null,k=null,I=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],N=arguments[2],I=arguments[3]||0,F=null);let re,he,ve,_e,Te,Ce;F!==null?(re=F.max.x-F.min.x,he=F.max.y-F.min.y,ve=F.min.x,_e=F.min.y):(re=E.image.width,he=E.image.height,ve=0,_e=0),k!==null?(Te=k.x,Ce=k.y):(Te=0,Ce=0);const Me=fe.convert(N.format),Ye=fe.convert(N.type);be.setTexture2D(N,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const ct=U.getParameter(U.UNPACK_ROW_LENGTH),ft=U.getParameter(U.UNPACK_IMAGE_HEIGHT),en=U.getParameter(U.UNPACK_SKIP_PIXELS),qe=U.getParameter(U.UNPACK_SKIP_ROWS),Se=U.getParameter(U.UNPACK_SKIP_IMAGES),zt=E.isCompressedTexture?E.mipmaps[I]:E.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,zt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,_e),E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,Te,Ce,re,he,Me,Ye,zt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,Te,Ce,zt.width,zt.height,Me,zt.data):U.texSubImage2D(U.TEXTURE_2D,I,Te,Ce,Me,Ye,zt),U.pixelStorei(U.UNPACK_ROW_LENGTH,ct),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft),U.pixelStorei(U.UNPACK_SKIP_PIXELS,en),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Se),I===0&&N.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(E,N,F=null,k=null,I=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,E=arguments[2],N=arguments[3],I=arguments[4]||0);let re,he,ve,_e,Te,Ce,Me,Ye,ct;const ft=E.isCompressedTexture?E.mipmaps[I]:E.image;F!==null?(re=F.max.x-F.min.x,he=F.max.y-F.min.y,ve=F.max.z-F.min.z,_e=F.min.x,Te=F.min.y,Ce=F.min.z):(re=ft.width,he=ft.height,ve=ft.depth,_e=0,Te=0,Ce=0),k!==null?(Me=k.x,Ye=k.y,ct=k.z):(Me=0,Ye=0,ct=0);const en=fe.convert(N.format),qe=fe.convert(N.type);let Se;if(N.isData3DTexture)be.setTexture3D(N,0),Se=U.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)be.setTexture2DArray(N,0),Se=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const zt=U.getParameter(U.UNPACK_ROW_LENGTH),Qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xn=U.getParameter(U.UNPACK_SKIP_PIXELS),Lo=U.getParameter(U.UNPACK_SKIP_ROWS),Yi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_e),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Se,I,Me,Ye,ct,re,he,ve,en,qe,ft.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,I,Me,Ye,ct,re,he,ve,en,ft.data):U.texSubImage3D(Se,I,Me,Ye,ct,re,he,ve,en,qe,ft),U.pixelStorei(U.UNPACK_ROW_LENGTH,zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Lo),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yi),I===0&&N.generateMipmaps&&U.generateMipmap(Se),we.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,we.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ff?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===Al?"display-p3":"srgb"}}class mE extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);function gE(){const t=Je.useRef(null);return Je.useEffect(()=>{const e=t.current;if(!e)return;const n=new mE,i=new sg(-1,1,1,-1,0,1),r=new pE({antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement);const s=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,o=`
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      mat2 rotate2D(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      // 2D Simplex Noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // Heightmap function: Parallel diagonal pleats with subtle liquid wave flow
      float getPleatHeight(vec2 st, float t) {
        vec2 p = rotate2D(-0.7) * st;

        float waveDistort = snoise(p * 2.5 + vec2(t * 0.25, -t * 0.2)) * 0.12;
        float microDistort = sin(p.y * 8.0 + t * 0.6) * 0.04;
        
        float xPos = (p.x + waveDistort + microDistort) * 18.0;

        float ridgePattern = abs(sin(xPos));
        float pleatHeight = pow(1.0 - ridgePattern, 1.6);

        float depthMod = snoise(p * 1.2 + t * 0.15) * 0.15;
        return pleatHeight * (0.85 + depthMod);
      }

      // Compute normal map for lighting calculations
      vec3 getNormal(vec2 st, float t) {
        vec2 eps = vec2(0.002, 0.0);
        float h  = getPleatHeight(st, t);
        float hx = getPleatHeight(st + eps.xy, t);
        float hy = getPleatHeight(st + eps.yx, t);

        vec3 tangentX = vec3(eps.x, 0.0, (hx - h) * 1.8);
        vec3 tangentY = vec3(0.0, eps.x, (hy - h) * 1.8);

        return normalize(cross(tangentX, tangentY));
      }

      void main() {
        vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
        float t = uTime * 0.4;

        vec3 N = getNormal(st, t);
        vec3 V = vec3(0.0, 0.0, 1.0);

        // Base dark charcoal tone
        float pleatH = getPleatHeight(st, t);
        vec3 ridgeBaseShade = mix(vec3(0.005, 0.005, 0.008), vec3(0.035, 0.035, 0.045), pleatH);

        // Autonomous Light Spot
        vec2 lightPos1 = vec2(sin(t * 0.5) * 0.5, cos(t * 0.4) * 0.3);
        vec2 lightPos2 = vec2(cos(t * 0.35) * 0.35, sin(t * 0.6) * 0.25);

        float d1 = length(st - lightPos1);
        float d2 = length(st - lightPos2);

        float spotMask1 = smoothstep(0.70, 0.0, d1);
        float spotMask2 = smoothstep(0.55, 0.0, d2) * 0.6;
        float totalSpotMask = clamp(spotMask1 + spotMask2, 0.0, 1.0);

        // Specular Highlights
        vec3 L1 = normalize(vec3(lightPos1 - st, 0.8));
        vec3 H1 = normalize(L1 + V);
        float NdotH1 = max(dot(N, H1), 0.0);

        float specSharp = pow(NdotH1, 48.0) * totalSpotMask * 0.5;
        float specSoft  = pow(NdotH1, 16.0) * totalSpotMask * 0.25;

        // Chromatic Dispersion
        vec2 rotatedSt = rotate2D(-0.7) * st;
        float chromaPhase = (rotatedSt.x * 12.0 + N.x * 3.0 + N.y * 2.0 + t * 0.3);
        vec3 rainbow = 0.5 + 0.5 * cos(6.28318 * (chromaPhase + vec3(0.0, 0.33, 0.67)));
        
        vec3 chromaSpecular = mix(vec3(specSharp), rainbow * specSharp * 1.1, totalSpotMask * 0.7);

        // Ambient sheen
        vec3 L_ambient = normalize(vec3(-0.4, 0.6, 1.0));
        vec3 H_ambient = normalize(L_ambient + V);
        float specAmbient = pow(max(dot(N, H_ambient), 0.0), 28.0) * 0.06;

        // Combine lighting
        vec3 finalColor = ridgeBaseShade;
        finalColor += vec3(specAmbient);
        finalColor += vec3(specSoft * 0.2);
        finalColor += chromaSpecular * 0.6;

        finalColor *= 0.7;

        // Output with 65% opacity
        gl_FragColor = vec4(finalColor, 0.65);
      }
    `,a=new ci({vertexShader:s,fragmentShader:o,uniforms:{uTime:{value:0},uResolution:{value:new je(e.clientWidth,e.clientHeight)}},transparent:!0,depthWrite:!1,depthTest:!1}),l=new Co(2,2),u=new Hn(l,a);n.add(u);let f;const h=performance.now(),d=_=>{const x=(_-h)*.001;a.uniforms.uTime.value=x,r.render(n,i),f=requestAnimationFrame(d)};f=requestAnimationFrame(d);const p=()=>{if(!e)return;const _=e.clientWidth,x=e.clientHeight;r.setSize(_,x),a.uniforms.uResolution.value.set(_,x)};return window.addEventListener("resize",p),()=>{cancelAnimationFrame(f),window.removeEventListener("resize",p),e&&r.domElement&&e.removeChild(r.domElement),l.dispose(),a.dispose(),r.dispose()}},[]),pe.jsx("div",{ref:t,className:"absolute inset-0 pointer-events-none z-0 overflow-hidden",style:{opacity:.65}})}const va="!<>-_\\/[]{}—=+*^?#________!@#$%&*";function vE({text:t,className:e=""}){const n=Je.useRef(null),[i,r]=Je.useState(t),[s,o]=Je.useState(0);return Je.useEffect(()=>{const a=()=>{if(!n.current)return;const l=n.current.getBoundingClientRect(),u=window.innerHeight,f=u,h=u*.25,d=l.top;let p=(f-d)/(f-h);p=Math.max(0,Math.min(1,p)),o(p)};return window.addEventListener("scroll",a),a(),()=>window.removeEventListener("scroll",a)},[]),Je.useEffect(()=>{const a=t.length,l=Math.floor(s*a),f=t.split("").map((h,d)=>h===" "||h===`
`||d<l?h:d<l+8?va[Math.floor(Math.random()*va.length)]:va[d%va.length]);r(f.join(""))},[s,t]),pe.jsx("span",{ref:n,className:`font-mori tracking-wide transition-colors ${e}`,children:i})}const _E="/assets/img-sobre-mim-H79e-uMt.svg",xE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.6'%20d='M11.6665%202H8.33252C7.44842%202%206.60054%202.35121%205.97538%202.97636C5.35023%203.60151%204.99902%204.4494%204.99902%205.3335C4.99902%206.2176%205.35023%207.06549%205.97538%207.69064C6.60054%208.31579%207.44842%208.667%208.33252%208.667H11.6665V2Z'%20fill='%23F6FBFF'%20fill-opacity='0.5'/%3e%3cpath%20opacity='0.4'%20d='M11.667%208.66699H8.333C7.44903%208.66699%206.60127%209.01815%205.97621%209.64321C5.35115%2010.2683%205%2011.116%205%2012C5%2012.884%205.35115%2013.7317%205.97621%2014.3568C6.60127%2014.9818%207.44903%2015.333%208.333%2015.333H11.667V8.66699Z'%20fill='%23F6FBFF'%20fill-opacity='0.5'/%3e%3cpath%20d='M18.333%2012C18.333%2012.8841%2017.9818%2013.732%2017.3567%2014.3571C16.7315%2014.9823%2015.8836%2015.3335%2014.9995%2015.3335C14.1154%2015.3335%2013.2675%2014.9823%2012.6424%2014.3571C12.0172%2013.732%2011.666%2012.8841%2011.666%2012C11.666%2011.1159%2012.0172%2010.268%2012.6424%209.64286C13.2675%209.01771%2014.1154%208.6665%2014.9995%208.6665C15.8836%208.6665%2016.7315%209.01771%2017.3567%209.64286C17.9818%2010.268%2018.333%2011.1159%2018.333%2012Z'%20fill='%23F6FBFF'/%3e%3cpath%20opacity='0.2'%20d='M8.33298%2015.334H11.667V18.667C11.6668%2019.3261%2011.4712%2019.9704%2011.1048%2020.5183C10.7385%2021.0663%2010.218%2021.4933%209.609%2021.7455C9.00002%2021.9976%208.32994%2022.0636%207.6835%2021.9349C7.03705%2021.8063%206.44326%2021.4889%205.97719%2021.0228C5.51112%2020.5567%205.19371%2019.9629%205.06507%2019.3165C4.93643%2018.67%205.00235%2018%205.2545%2017.391C5.50664%2016.782%205.93368%2016.2614%206.48164%2015.8951C7.02959%2015.5288%207.67386%2015.3342%208.33298%2015.334Z'%20fill='%23F6FBFF'%20fill-opacity='0.5'/%3e%3cpath%20opacity='0.8'%20d='M11.666%202H14.999C15.8831%202%2016.731%202.35121%2017.3562%202.97636C17.9813%203.60151%2018.3325%204.4494%2018.3325%205.3335C18.3325%206.2176%2017.9813%207.06549%2017.3562%207.69064C16.731%208.31579%2015.8831%208.667%2014.999%208.667H11.666V2Z'%20fill='%23F6FBFF'/%3e%3c/svg%3e",SE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20opacity='0.6'%20d='M11.6665%202H8.33252C7.44842%202%206.60054%202.35121%205.97538%202.97636C5.35023%203.60151%204.99902%204.4494%204.99902%205.3335C4.99902%206.2176%205.35023%207.06549%205.97538%207.69064C6.60054%208.31579%207.44842%208.667%208.33252%208.667H11.6665V2Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3cpath%20opacity='0.4'%20d='M11.667%208.66699H8.333C7.44903%208.66699%206.60127%209.01815%205.97621%209.64321C5.35115%2010.2683%205%2011.116%205%2012C5%2012.884%205.35115%2013.7317%205.97621%2014.3568C6.60127%2014.9818%207.44903%2015.333%208.333%2015.333H11.667V8.66699Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3cpath%20d='M18.333%2012C18.333%2012.8841%2017.9818%2013.732%2017.3567%2014.3571C16.7315%2014.9823%2015.8836%2015.3335%2014.9995%2015.3335C14.1154%2015.3335%2013.2675%2014.9823%2012.6424%2014.3571C12.0172%2013.732%2011.666%2012.8841%2011.666%2012C11.666%2011.1159%2012.0172%2010.268%2012.6424%209.64286C13.2675%209.01771%2014.1154%208.6665%2014.9995%208.6665C15.8836%208.6665%2016.7315%209.01771%2017.3567%209.64286C17.9818%2010.268%2018.333%2011.1159%2018.333%2012Z'%20fill='%230A0A0A'/%3e%3cpath%20opacity='0.2'%20d='M8.33298%2015.334H11.667V18.667C11.6668%2019.3261%2011.4712%2019.9704%2011.1048%2020.5183C10.7385%2021.0663%2010.218%2021.4933%209.609%2021.7455C9.00002%2021.9976%208.32994%2022.0636%207.6835%2021.9349C7.03705%2021.8063%206.44326%2021.4889%205.97719%2021.0228C5.51112%2020.5567%205.19371%2019.9629%205.06507%2019.3165C4.93643%2018.67%205.00235%2018%205.2545%2017.391C5.50664%2016.782%205.93368%2016.2614%206.48164%2015.8951C7.02959%2015.5288%207.67386%2015.3342%208.33298%2015.334Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3cpath%20opacity='0.8'%20d='M11.666%202H14.999C15.8831%202%2016.731%202.35121%2017.3562%202.97636C17.9813%203.60151%2018.3325%204.4494%2018.3325%205.3335C18.3325%206.2176%2017.9813%207.06549%2017.3562%207.69064C16.731%208.31579%2015.8831%208.667%2014.999%208.667H11.666V2Z'%20fill='%230A0A0A'/%3e%3c/svg%3e",yE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2021V9H6V15L12%2021Z'%20fill='white'%20fill-opacity='0.5'/%3e%3cpath%20d='M18%209V3H6L12%209H6V15H18L12%209H18Z'%20fill='%23F6FBFF'/%3e%3c/svg%3e",ME="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2021V9H6V15L12%2021Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3cpath%20d='M18%209V3H6L12%209H6V15H18L12%209H18Z'%20fill='%230A0A0A'/%3e%3c/svg%3e",EE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%2017L1%2012L6%207L7.4%208.4L3.825%2012L7.4%2015.6L6%2017ZM18%2017L16.6%2015.6L20.175%2012L16.6%208.4L18%207L23%2012L18%2017Z'%20fill='%23F6FBFF'/%3e%3cpath%20d='M8.5498%2019.7002L10.4498%2020.3002L15.4498%204.3002L13.5498%203.7002L8.5498%2019.7002Z'%20fill='%23F6FBFF'%20fill-opacity='0.5'/%3e%3c/svg%3e",wE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%2017L1%2012L6%207L7.4%208.4L3.825%2012L7.4%2015.6L6%2017ZM18%2017L16.6%2015.6L20.175%2012L16.6%208.4L18%207L23%2012L18%2017Z'%20fill='%230A0A0A'/%3e%3cpath%20d='M8.5498%2019.7002L10.4498%2020.3002L15.4498%204.3002L13.5498%203.7002L8.5498%2019.7002Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3c/svg%3e",TE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.1071%205.44822C9.7051%203.69822%2012.1231%203.64522%2012.8321%205.28922L12.8921%205.44922L13.6991%207.80922C13.884%208.35045%2014.1829%208.84573%2014.5755%209.26164C14.9682%209.67755%2015.4454%2010.0044%2015.9751%2010.2202L16.1921%2010.3012L18.5521%2011.1072C20.3021%2011.7052%2020.3551%2014.1232%2018.7121%2014.8322L18.5521%2014.8922L16.1921%2015.6992C15.6507%2015.884%2015.1552%2016.1828%2014.7391%2016.5755C14.323%2016.9681%2013.996%2017.4454%2013.7801%2017.9752L13.6991%2018.1912L12.8931%2020.5522C12.2951%2022.3022%209.8771%2022.3552%209.1691%2020.7122L9.1071%2020.5522L8.3011%2018.1922C8.11628%2017.6508%207.81748%2017.1553%207.42485%2016.7392C7.03222%2016.3231%206.5549%2015.9961%206.0251%2015.7802L5.8091%2015.6992L3.4491%2014.8932C1.6981%2014.2952%201.6451%2011.8772%203.2891%2011.1692L3.4491%2011.1072L5.8091%2010.3012C6.35034%2010.1163%206.84562%209.81741%207.26153%209.42479C7.67744%209.03216%208.00432%208.55491%208.2201%208.02522L8.3011%207.80922L9.1071%205.44822Z'%20fill='%23F6FBFF'/%3e%3cpath%20d='M19.5305%202.15147C19.3717%202.05248%2019.1884%202%2019.0013%202C18.7926%201.99987%2018.589%202.06509%2018.4192%202.1865C18.2493%202.30791%2018.1217%202.47943%2018.0543%202.677L17.7043%203.704L16.6783%204.054L16.5603%204.102C16.3825%204.18906%2016.2345%204.32696%2016.1351%204.49821C16.0357%204.66947%2015.9894%204.86638%2016.002%205.06398C16.0147%205.26158%2016.0857%205.45099%2016.2061%205.60819C16.3265%205.76538%2016.4908%205.8833%2016.6783%205.947L17.7053%206.297L18.0553%207.323L18.1033%207.44C18.1903%207.61787%2018.3281%207.76591%2018.4993%207.86538C18.6705%207.96484%2018.8674%208.01125%2019.065%207.99872C19.2626%207.98619%2019.452%207.91529%2019.6092%207.79499C19.7665%207.6747%2019.8845%207.51043%2019.9483%207.323L20.2983%206.296L21.3243%205.946L21.4423%205.898C21.6202%205.81094%2021.7681%205.67304%2021.8675%205.50179C21.9669%205.33053%2022.0132%205.13362%2022.0006%204.93602C21.988%204.73842%2021.9169%204.54902%2021.7965%204.39182C21.6762%204.23462%2021.5118%204.1167%2021.3243%204.053L20.2973%203.703L19.9473%202.677L19.8993%202.56C19.817%202.392%2019.6892%202.25046%2019.5305%202.15147Z'%20fill='%23F6FBFF'%20fill-opacity='0.5'/%3e%3c/svg%3e",AE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.1071%205.44822C9.7051%203.69822%2012.1231%203.64522%2012.8321%205.28922L12.8921%205.44922L13.6991%207.80922C13.884%208.35045%2014.1829%208.84573%2014.5755%209.26164C14.9682%209.67755%2015.4454%2010.0044%2015.9751%2010.2202L16.1921%2010.3012L18.5521%2011.1072C20.3021%2011.7052%2020.3551%2014.1232%2018.7121%2014.8322L18.5521%2014.8922L16.1921%2015.6992C15.6507%2015.884%2015.1552%2016.1828%2014.7391%2016.5755C14.323%2016.9681%2013.996%2017.4454%2013.7801%2017.9752L13.6991%2018.1912L12.8931%2020.5522C12.2951%2022.3022%209.8771%2022.3552%209.1691%2020.7122L9.1071%2020.5522L8.3011%2018.1922C8.11628%2017.6508%207.81748%2017.1553%207.42485%2016.7392C7.03222%2016.3231%206.5549%2015.9961%206.0251%2015.7802L5.8091%2015.6992L3.4491%2014.8932C1.6981%2014.2952%201.6451%2011.8772%203.2891%2011.1692L3.4491%2011.1072L5.8091%2010.3012C6.35034%2010.1163%206.84562%209.81741%207.26153%209.42479C7.67744%209.03216%208.00432%208.55491%208.2201%208.02522L8.3011%207.80922L9.1071%205.44822Z'%20fill='%230A0A0A'/%3e%3cpath%20d='M19.5305%202.15147C19.3717%202.05248%2019.1884%202%2019.0013%202C18.7926%201.99987%2018.589%202.06509%2018.4192%202.1865C18.2493%202.30791%2018.1217%202.47943%2018.0543%202.677L17.7043%203.704L16.6783%204.054L16.5603%204.102C16.3825%204.18906%2016.2345%204.32696%2016.1351%204.49821C16.0357%204.66947%2015.9894%204.86638%2016.002%205.06398C16.0147%205.26158%2016.0857%205.45099%2016.2061%205.60819C16.3265%205.76538%2016.4908%205.8833%2016.6783%205.947L17.7053%206.297L18.0553%207.323L18.1033%207.44C18.1903%207.61787%2018.3281%207.76591%2018.4993%207.86538C18.6705%207.96484%2018.8674%208.01125%2019.065%207.99872C19.2626%207.98619%2019.452%207.91529%2019.6092%207.79499C19.7665%207.6747%2019.8845%207.51043%2019.9483%207.323L20.2983%206.296L21.3243%205.946L21.4423%205.898C21.6202%205.81094%2021.7681%205.67304%2021.8675%205.50179C21.9669%205.33053%2022.0132%205.13362%2022.0006%204.93602C21.988%204.73842%2021.9169%204.54902%2021.7965%204.39182C21.6762%204.23462%2021.5118%204.1167%2021.3243%204.053L20.2973%203.703L19.9473%202.677L19.8993%202.56C19.817%202.392%2019.6892%202.25046%2019.5305%202.15147Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3c/svg%3e",CE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.37525%202.63795H21.6248V21.3624H2.37525V2.63795ZM1.5%2022.2377H22.5V1.7627H1.5V22.2377Z'%20fill='%23F6FBFF'%20fill-opacity='0.5'/%3e%3cpath%20d='M14.7297%2010.8009C14.7297%2010.5122%2014.966%2010.1619%2015.6575%2010.1619L15.6552%2010.1634C16.189%2010.1547%2016.7151%2010.2908%2017.1777%2010.5572C17.2655%2010.5834%2017.309%2010.5392%2017.309%2010.4694V9.26943C17.311%209.23515%2017.304%209.20094%2017.2886%209.17026C17.2732%209.13957%2017.2499%209.1135%2017.2212%209.09468C16.7205%208.91058%2016.1883%208.82723%2015.6552%208.84943C14.1237%208.84943%2013.2402%209.78543%2013.2402%2010.9142C13.2402%2011.9192%2013.7562%2012.5244%2014.999%2013.1192C15.8832%2013.5744%2016.0842%2013.8542%2016.0842%2014.1692C16.0842%2014.5629%2015.7955%2014.8517%2015.104%2014.8517C14.4803%2014.8521%2013.8698%2014.673%2013.3452%2014.3357C13.2837%2014.2914%2013.2402%2014.3177%2013.2402%2014.4054V15.6932C13.2402%2015.7637%2013.2485%2015.8072%2013.31%2015.8334C13.8687%2016.102%2014.4844%2016.2307%2015.104%2016.2084C16.5477%2016.2084%2017.615%2015.4562%2017.615%2014.0559C17.615%2013.1192%2017.189%2012.4809%2015.815%2011.8157C14.8872%2011.3349%2014.7297%2011.1159%2014.7297%2010.8009Z'%20fill='%239D9FA2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.57422%206.55293C6.57422%206.49143%206.69647%206.44793%206.76697%206.44793C7.51907%206.41725%208.27174%206.40274%209.02447%206.40443C11.4485%206.40443%2012.3935%207.73418%2012.3935%209.43218C12.3935%2011.6544%2010.7832%2012.6084%208.80622%2012.6084C8.62597%2012.6084%208.50995%2012.6034%208.4038%2012.5987C8.31429%2012.5948%208.2318%2012.5912%208.12372%2012.5912V15.9512C8.12372%2016.0209%208.09747%2016.0562%208.01872%2016.0562H6.67997C6.61022%2016.0562%206.57497%2016.0299%206.57497%2015.9512V6.55668L6.57422%206.55293ZM8.84072%2011.2202C8.49047%2011.2202%208.33297%2011.2202%208.13197%2011.2029V7.82568C8.28947%207.81668%208.62172%207.79943%208.97197%207.79943C10.1352%207.79943%2010.8267%208.35893%2010.8267%209.47043C10.8267%2010.8617%209.86447%2011.2202%208.84072%2011.2202Z'%20fill='%239D9FA2'/%3e%3c/svg%3e",RE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.37525%202.63795H21.6248V21.3624H2.37525V2.63795ZM1.5%2022.2377H22.5V1.7627H1.5V22.2377Z'%20fill='%230A0A0A'%20fill-opacity='0.5'/%3e%3cpath%20d='M14.7297%2010.8009C14.7297%2010.5122%2014.966%2010.1619%2015.6575%2010.1619L15.6552%2010.1634C16.189%2010.1547%2016.7151%2010.2908%2017.1777%2010.5572C17.2655%2010.5834%2017.309%2010.5392%2017.309%2010.4694V9.26943C17.311%209.23515%2017.304%209.20094%2017.2886%209.17026C17.2732%209.13957%2017.2499%209.1135%2017.2212%209.09468C16.7205%208.91058%2016.1883%208.82723%2015.6552%208.84943C14.1237%208.84943%2013.2402%209.78543%2013.2402%2010.9142C13.2402%2011.9192%2013.7562%2012.5244%2014.999%2013.1192C15.8832%2013.5744%2016.0842%2013.8542%2016.0842%2014.1692C16.0842%2014.5629%2015.7955%2014.8517%2015.104%2014.8517C14.4803%2014.8521%2013.8698%2014.673%2013.3452%2014.3357C13.2837%2014.2914%2013.2402%2014.3177%2013.2402%2014.4054V15.6932C13.2402%2015.7637%2013.2485%2015.8072%2013.31%2015.8334C13.8687%2016.102%2014.4844%2016.2307%2015.104%2016.2084C16.5477%2016.2084%2017.615%2015.4562%2017.615%2014.0559C17.615%2013.1192%2017.189%2012.4809%2015.815%2011.8157C14.8872%2011.3349%2014.7297%2011.1159%2014.7297%2010.8009Z'%20fill='%230A0A0A'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.57422%206.55293C6.57422%206.49143%206.69647%206.44793%206.76697%206.44793C7.51907%206.41725%208.27174%206.40274%209.02447%206.40443C11.4485%206.40443%2012.3935%207.73418%2012.3935%209.43218C12.3935%2011.6544%2010.7832%2012.6084%208.80622%2012.6084C8.62597%2012.6084%208.50995%2012.6034%208.4038%2012.5987C8.31429%2012.5948%208.2318%2012.5912%208.12372%2012.5912V15.9512C8.12372%2016.0209%208.09747%2016.0562%208.01872%2016.0562H6.67997C6.61022%2016.0562%206.57497%2016.0299%206.57497%2015.9512V6.55668L6.57422%206.55293ZM8.84072%2011.2202C8.49047%2011.2202%208.33297%2011.2202%208.13197%2011.2029V7.82568C8.28947%207.81668%208.62172%207.79943%208.97197%207.79943C10.1352%207.79943%2010.8267%208.35893%2010.8267%209.47043C10.8267%2010.8617%209.86447%2011.2202%208.84072%2011.2202Z'%20fill='%230A0A0A'/%3e%3c/svg%3e";function PE(){const{theme:t,t:e}=Nf(),n=t==="dark",i=[{name:"Figma",icon:n?xE:SE},{name:"Framer",icon:n?yE:ME},{name:"VibeCode",icon:n?EE:wE},{name:"IA",icon:n?TE:AE},{name:"Photoshop",icon:n?CE:RE}];return pe.jsxs("section",{id:"sobre-mim",className:`relative min-h-screen w-full flex flex-col justify-center items-center px-6 py-24 z-20 overflow-hidden transition-colors duration-500 ${n?"bg-[#0a0a0a] text-white":"bg-neutral-100 text-neutral-900"}`,children:[pe.jsx(gE,{}),pe.jsx("div",{className:"absolute top-0 left-0 w-full h-40 pointer-events-none z-10",style:{background:n?"linear-gradient(to bottom, #0d0d0d 0%, rgba(10,10,10,0.8) 50%, transparent 100%)":"linear-gradient(to bottom, #f7f7f8 0%, rgba(247,247,248,0.8) 50%, transparent 100%)"}}),pe.jsxs("div",{className:"relative z-20 w-full max-w-6xl flex flex-col items-center justify-center",children:[pe.jsxs("div",{className:"relative w-full flex items-center justify-center gap-6 sm:gap-12 md:gap-20 mb-14 md:mb-16",children:[pe.jsx("div",{className:"flex-1 text-right",children:pe.jsx("span",{className:"font-editorial-ultrabold text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 dark:text-neutral-200 tracking-tight select-none",children:e.aboutLabelPt})}),pe.jsx("div",{className:"relative shrink-0 w-48 sm:w-60 md:w-72 lg:w-80 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-neutral-800/60 bg-black/40 group",children:pe.jsx("img",{src:_E,alt:"Sobre Mim - Gabux",className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"})}),pe.jsx("div",{className:"flex-1 text-left",children:pe.jsx("span",{className:"font-editorial-ultrabold text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 dark:text-neutral-200 tracking-tight select-none",children:e.aboutLabelEn})})]}),pe.jsx("div",{className:"w-full max-w-[calc(100vw-40px)] lg:max-w-[1300px] text-center px-4 mb-14 md:mb-20",children:pe.jsx("h2",{className:"font-mori text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.65rem] leading-[1.3] md:leading-[1.35] uppercase font-semibold text-neutral-100 dark:text-white select-text",children:pe.jsx(vE,{text:e.aboutDecryptText})})}),pe.jsxs("div",{className:"w-full flex flex-col items-center gap-6",children:[pe.jsx("div",{className:"w-32 h-[1px] bg-neutral-800 dark:bg-neutral-700"}),pe.jsxs("span",{className:"font-mori text-xs tracking-widest uppercase text-neutral-400",children:[e.aboutLabelPt," — Tools & Tech"]}),pe.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-2",children:i.map((r,s)=>pe.jsxs("div",{className:`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mori font-medium transition-all hover:scale-105 ${n?"bg-neutral-900/80 border-neutral-800 text-neutral-200 hover:border-neutral-600":"bg-white/80 border-neutral-200 text-neutral-800 hover:border-neutral-400"}`,children:[pe.jsx("img",{src:r.icon,alt:r.name,className:"w-4 h-4 object-contain"}),pe.jsx("span",{children:r.name})]},s))})]})]}),pe.jsx("div",{className:"absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10",style:{background:n?"linear-gradient(to top, #0a0a0a 0%, transparent 100%)":"linear-gradient(to top, #f7f7f8 0%, transparent 100%)"}})]})}function LE(){const[t,e]=Je.useState(!1);return pe.jsxs("div",{className:"relative min-h-screen w-full font-mori overflow-x-hidden",children:[pe.jsx(K_,{isScrolled:t}),pe.jsx(Q_,{onScrollProgress:n=>e(n>.85)}),pe.jsx(PE,{})]})}function bE(){return pe.jsx(X_,{children:pe.jsx(LE,{})})}ku.createRoot(document.getElementById("root")).render(pe.jsx(Dg.StrictMode,{children:pe.jsx(bE,{})}));
