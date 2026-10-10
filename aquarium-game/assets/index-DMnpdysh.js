var Vy=Object.defineProperty;var Wy=(n,e,t)=>e in n?Vy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Y=(n,e,t)=>Wy(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function m0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var g0={exports:{}},Rc={},v0={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),Xy=Symbol.for("react.portal"),jy=Symbol.for("react.fragment"),Yy=Symbol.for("react.strict_mode"),qy=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),Ky=Symbol.for("react.context"),Jy=Symbol.for("react.forward_ref"),Zy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),kp=Symbol.iterator;function tx(n){return n===null||typeof n!="object"?null:(n=kp&&n[kp]||n["@@iterator"],typeof n=="function"?n:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,x0={};function oa(n,e,t){this.props=n,this.context=e,this.refs=x0,this.updater=t||_0}oa.prototype.isReactComponent={};oa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};oa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function S0(){}S0.prototype=oa.prototype;function lf(n,e,t){this.props=n,this.context=e,this.refs=x0,this.updater=t||_0}var cf=lf.prototype=new S0;cf.constructor=lf;y0(cf,oa.prototype);cf.isPureReactComponent=!0;var Op=Array.isArray,M0=Object.prototype.hasOwnProperty,uf={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function E0(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!w0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Po,type:n,key:s,ref:a,props:r,_owner:uf.current}}function nx(n,e){return{$$typeof:Po,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function hf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Po}function ix(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var zp=/\/+/g;function iu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ix(""+n.key):e.toString(36)}function Ll(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Po:case Xy:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+iu(a,0):i,Op(r)?(t="",n!=null&&(t=n.replace(zp,"$&/")+"/"),Ll(r,e,t,"",function(c){return c})):r!=null&&(hf(r)&&(r=nx(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(zp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Op(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+iu(s,o);a+=Ll(s,e,t,l,r)}else if(l=tx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+iu(s,o++),a+=Ll(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oo(n,e,t){if(n==null)return n;var i=[],r=0;return Ll(n,i,"","",function(s){return e.call(t,s,r++)}),i}function rx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Dl={transition:null},sx={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:uf};function T0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Oo,forEach:function(n,e,t){Oo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Oo(n,function(){e++}),e},toArray:function(n){return Oo(n,function(e){return e})||[]},only:function(n){if(!hf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};We.Component=oa;We.Fragment=jy;We.Profiler=qy;We.PureComponent=lf;We.StrictMode=Yy;We.Suspense=Zy;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;We.act=T0;We.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=y0({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=uf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)M0.call(e,l)&&!w0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Po,type:n.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(n){return n={$$typeof:Ky,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:$y,_context:n},n.Consumer=n};We.createElement=E0;We.createFactory=function(n){var e=E0.bind(null,n);return e.type=n,e};We.createRef=function(){return{current:null}};We.forwardRef=function(n){return{$$typeof:Jy,render:n}};We.isValidElement=hf;We.lazy=function(n){return{$$typeof:ex,_payload:{_status:-1,_result:n},_init:rx}};We.memo=function(n,e){return{$$typeof:Qy,type:n,compare:e===void 0?null:e}};We.startTransition=function(n){var e=Dl.transition;Dl.transition={};try{n()}finally{Dl.transition=e}};We.unstable_act=T0;We.useCallback=function(n,e){return fn.current.useCallback(n,e)};We.useContext=function(n){return fn.current.useContext(n)};We.useDebugValue=function(){};We.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};We.useEffect=function(n,e){return fn.current.useEffect(n,e)};We.useId=function(){return fn.current.useId()};We.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};We.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};We.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};We.useMemo=function(n,e){return fn.current.useMemo(n,e)};We.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};We.useRef=function(n){return fn.current.useRef(n)};We.useState=function(n){return fn.current.useState(n)};We.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};We.useTransition=function(){return fn.current.useTransition()};We.version="18.3.1";v0.exports=We;var at=v0.exports;const b0=m0(at);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=at,ox=Symbol.for("react.element"),lx=Symbol.for("react.fragment"),cx=Object.prototype.hasOwnProperty,ux=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hx={key:!0,ref:!0,__self:!0,__source:!0};function C0(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)cx.call(e,i)&&!hx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ox,type:n,key:s,ref:a,props:r,_owner:ux.current}}Rc.Fragment=lx;Rc.jsx=C0;Rc.jsxs=C0;g0.exports=Rc;var L=g0.exports,yh={},A0={exports:{}},Nn={},R0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,K){var Q=N.length;N.push(K);e:for(;0<Q;){var oe=Q-1>>>1,Ae=N[oe];if(0<r(Ae,K))N[oe]=K,N[Q]=Ae,Q=oe;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],Q=N.pop();if(Q!==K){N[0]=Q;e:for(var oe=0,Ae=N.length,Xe=Ae>>>1;oe<Xe;){var j=2*(oe+1)-1,ie=N[j],fe=j+1,ue=N[fe];if(0>r(ie,Q))fe<Ae&&0>r(ue,ie)?(N[oe]=ue,N[fe]=Q,oe=fe):(N[oe]=ie,N[j]=Q,oe=j);else if(fe<Ae&&0>r(ue,Q))N[oe]=ue,N[fe]=Q,oe=fe;else break e}}return K}function r(N,K){var Q=N.sortIndex-K.sortIndex;return Q!==0?Q:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,u=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var K=t(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=N)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(c)}}function x(N){if(_=!1,y(N),!g)if(t(l)!==null)g=!0,G(A);else{var K=t(c);K!==null&&ee(x,K.startTime-N)}}function A(N,K){g=!1,_&&(_=!1,f(P),P=-1),p=!0;var Q=d;try{for(y(K),u=t(l);u!==null&&(!(u.expirationTime>K)||N&&!E());){var oe=u.callback;if(typeof oe=="function"){u.callback=null,d=u.priorityLevel;var Ae=oe(u.expirationTime<=K);K=n.unstable_now(),typeof Ae=="function"?u.callback=Ae:u===t(l)&&i(l),y(K)}else i(l);u=t(l)}if(u!==null)var Xe=!0;else{var j=t(c);j!==null&&ee(x,j.startTime-K),Xe=!1}return Xe}finally{u=null,d=Q,p=!1}}var C=!1,b=null,P=-1,V=5,S=-1;function E(){return!(n.unstable_now()-S<V)}function H(){if(b!==null){var N=n.unstable_now();S=N;var K=!0;try{K=b(!0,N)}finally{K?B():(C=!1,b=null)}}else C=!1}var B;if(typeof v=="function")B=function(){v(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=H,B=function(){J.postMessage(null)}}else B=function(){m(H,0)};function G(N){b=N,C||(C=!0,B())}function ee(N,K){P=m(function(){N(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,G(A))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var Q=d;d=K;try{return N()}finally{d=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=d;d=N;try{return K()}finally{d=Q}},n.unstable_scheduleCallback=function(N,K,Q){var oe=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,N){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=Q+Ae,N={id:h++,callback:K,priorityLevel:N,startTime:Q,expirationTime:Ae,sortIndex:-1},Q>oe?(N.sortIndex=Q,e(c,N),t(l)===null&&N===t(c)&&(_?(f(P),P=-1):_=!0,ee(x,Q-oe))):(N.sortIndex=Ae,e(l,N),g||p||(g=!0,G(A))),N},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(N){var K=d;return function(){var Q=d;d=K;try{return N.apply(this,arguments)}finally{d=Q}}}})(P0);R0.exports=P0;var dx=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx=at,Dn=dx;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L0=new Set,io={};function qr(n,e){Xs(n,e),Xs(n+"Capture",e)}function Xs(n,e){for(io[n]=e,n=0;n<e.length;n++)L0.add(e[n])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=Object.prototype.hasOwnProperty,px=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bp={},Hp={};function mx(n){return xh.call(Hp,n)?!0:xh.call(Bp,n)?!1:px.test(n)?Hp[n]=!0:(Bp[n]=!0,!1)}function gx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function vx(n,e,t,i){if(e===null||typeof e>"u"||gx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Jt[n]=new pn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Jt[e]=new pn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Jt[n]=new pn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Jt[n]=new pn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Jt[n]=new pn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Jt[n]=new pn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Jt[n]=new pn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Jt[n]=new pn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Jt[n]=new pn(n,5,!1,n.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(df,ff);Jt[e]=new pn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(df,ff);Jt[e]=new pn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(df,ff);Jt[e]=new pn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Jt[n]=new pn(n,1,!1,n.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Jt[n]=new pn(n,1,!1,n.toLowerCase(),null,!0,!0)});function pf(n,e,t,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vx(e,t,r,i)&&(t=null),i||r===null?mx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Bi=fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),mf=Symbol.for("react.strict_mode"),Sh=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),Mh=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),Gp=Symbol.iterator;function ma(n){return n===null||typeof n!="object"?null:(n=Gp&&n[Gp]||n["@@iterator"],typeof n=="function"?n:null)}var Tt=Object.assign,ru;function ka(n){if(ru===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+n}var su=!1;function au(n,e){if(!n||su)return"";su=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{su=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ka(n):""}function _x(n){switch(n.tag){case 5:return ka(n.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return n=au(n.type,!1),n;case 11:return n=au(n.type.render,!1),n;case 1:return n=au(n.type,!0),n;default:return""}}function Eh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Es:return"Fragment";case ws:return"Portal";case Sh:return"Profiler";case mf:return"StrictMode";case Mh:return"Suspense";case wh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N0:return(n.displayName||"Context")+".Consumer";case D0:return(n._context.displayName||"Context")+".Provider";case gf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vf:return e=n.displayName||null,e!==null?e:Eh(n.type)||"Memo";case $i:e=n._payload,n=n._init;try{return Eh(n(e))}catch{}}return null}function yx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function U0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xx(n){var e=U0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Bo(n){n._valueTracker||(n._valueTracker=xx(n))}function F0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=U0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Zl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Th(n,e){var t=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Vp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=pr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k0(n,e){e=e.checked,e!=null&&pf(n,"checked",e,!1)}function bh(n,e){k0(n,e);var t=pr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ch(n,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Wp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ch(n,e,t){(e!=="number"||Zl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Oa=Array.isArray;function Fs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+pr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ah(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(Oa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:pr(t)}}function O0(n,e){var t=pr(e.value),i=pr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function jp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function z0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?z0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ho,B0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ro(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sx=["Webkit","ms","Moz","O"];Object.keys(Ga).forEach(function(n){Sx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ga[e]=Ga[n]})});function H0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ga.hasOwnProperty(n)&&Ga[n]?(""+e).trim():e+"px"}function G0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=H0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Mx=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(n,e){if(e){if(Mx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Lh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function _f(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Nh=null,ks=null,Os=null;function Yp(n){if(n=No(n)){if(typeof Nh!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Ic(e),Nh(n.stateNode,n.type,e))}}function V0(n){ks?Os?Os.push(n):Os=[n]:ks=n}function W0(){if(ks){var n=ks,e=Os;if(Os=ks=null,Yp(n),e)for(n=0;n<e.length;n++)Yp(e[n])}}function X0(n,e){return n(e)}function j0(){}var ou=!1;function Y0(n,e,t){if(ou)return n(e,t);ou=!0;try{return X0(n,e,t)}finally{ou=!1,(ks!==null||Os!==null)&&(j0(),W0())}}function so(n,e){var t=n.stateNode;if(t===null)return null;var i=Ic(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Ih=!1;if(Ui)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{Ih=!1}function wx(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Va=!1,Ql=null,ec=!1,Uh=null,Ex={onError:function(n){Va=!0,Ql=n}};function Tx(n,e,t,i,r,s,a,o,l){Va=!1,Ql=null,wx.apply(Ex,arguments)}function bx(n,e,t,i,r,s,a,o,l){if(Tx.apply(this,arguments),Va){if(Va){var c=Ql;Va=!1,Ql=null}else throw Error(ne(198));ec||(ec=!0,Uh=c)}}function $r(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function q0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function qp(n){if($r(n)!==n)throw Error(ne(188))}function Cx(n){var e=n.alternate;if(!e){if(e=$r(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return qp(r),n;if(s===i)return qp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function $0(n){return n=Cx(n),n!==null?K0(n):null}function K0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=K0(n);if(e!==null)return e;n=n.sibling}return null}var J0=Dn.unstable_scheduleCallback,$p=Dn.unstable_cancelCallback,Ax=Dn.unstable_shouldYield,Rx=Dn.unstable_requestPaint,Pt=Dn.unstable_now,Px=Dn.unstable_getCurrentPriorityLevel,yf=Dn.unstable_ImmediatePriority,Z0=Dn.unstable_UserBlockingPriority,tc=Dn.unstable_NormalPriority,Lx=Dn.unstable_LowPriority,Q0=Dn.unstable_IdlePriority,Pc=null,pi=null;function Dx(n){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Pc,n,void 0,(n.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:Ux,Nx=Math.log,Ix=Math.LN2;function Ux(n){return n>>>=0,n===0?32:31-(Nx(n)/Ix|0)|0}var Go=64,Vo=4194304;function za(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function nc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=za(o):(s&=a,s!==0&&(i=za(s)))}else a=t&~r,a!==0?i=za(a):s!==0&&(i=za(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-si(e),r=1<<t,i|=n[t],e&=~r;return i}function Fx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-si(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=Fx(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Fh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ev(){var n=Go;return Go<<=1,!(Go&4194240)&&(Go=64),n}function lu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Lo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-si(e),n[e]=t}function Ox(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function xf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ht=0;function tv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nv,Sf,iv,rv,sv,kh=!1,Wo=[],sr=null,ar=null,or=null,ao=new Map,oo=new Map,Qi=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(n,e){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function va(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&Sf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Bx(n,e,t,i,r){switch(e){case"focusin":return sr=va(sr,n,e,t,i,r),!0;case"dragenter":return ar=va(ar,n,e,t,i,r),!0;case"mouseover":return or=va(or,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,va(ao.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oo.set(s,va(oo.get(s)||null,n,e,t,i,r)),!0}return!1}function av(n){var e=Ur(n.target);if(e!==null){var t=$r(e);if(t!==null){if(e=t.tag,e===13){if(e=q0(t),e!==null){n.blockedOn=e,sv(n.priority,function(){iv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Nl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Oh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Dh=i,t.target.dispatchEvent(i),Dh=null}else return e=No(t),e!==null&&Sf(e),n.blockedOn=t,!1;e.shift()}return!0}function Jp(n,e,t){Nl(n)&&t.delete(e)}function Hx(){kh=!1,sr!==null&&Nl(sr)&&(sr=null),ar!==null&&Nl(ar)&&(ar=null),or!==null&&Nl(or)&&(or=null),ao.forEach(Jp),oo.forEach(Jp)}function _a(n,e){n.blockedOn===e&&(n.blockedOn=null,kh||(kh=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Hx)))}function lo(n){function e(r){return _a(r,n)}if(0<Wo.length){_a(Wo[0],n);for(var t=1;t<Wo.length;t++){var i=Wo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(sr!==null&&_a(sr,n),ar!==null&&_a(ar,n),or!==null&&_a(or,n),ao.forEach(e),oo.forEach(e),t=0;t<Qi.length;t++)i=Qi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Qi.length&&(t=Qi[0],t.blockedOn===null);)av(t),t.blockedOn===null&&Qi.shift()}var zs=Bi.ReactCurrentBatchConfig,ic=!0;function Gx(n,e,t,i){var r=ht,s=zs.transition;zs.transition=null;try{ht=1,Mf(n,e,t,i)}finally{ht=r,zs.transition=s}}function Vx(n,e,t,i){var r=ht,s=zs.transition;zs.transition=null;try{ht=4,Mf(n,e,t,i)}finally{ht=r,zs.transition=s}}function Mf(n,e,t,i){if(ic){var r=Oh(n,e,t,i);if(r===null)_u(n,e,i,rc,t),Kp(n,i);else if(Bx(r,n,e,t,i))i.stopPropagation();else if(Kp(n,i),e&4&&-1<zx.indexOf(n)){for(;r!==null;){var s=No(r);if(s!==null&&nv(s),s=Oh(n,e,t,i),s===null&&_u(n,e,i,rc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else _u(n,e,i,null,t)}}var rc=null;function Oh(n,e,t,i){if(rc=null,n=_f(i),n=Ur(n),n!==null)if(e=$r(n),e===null)n=null;else if(t=e.tag,t===13){if(n=q0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return rc=n,null}function ov(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Px()){case yf:return 1;case Z0:return 4;case tc:case Lx:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var nr=null,wf=null,Il=null;function lv(){if(Il)return Il;var n,e=wf,t=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Il=r.slice(n,1<i?1-i:void 0)}function Ul(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Xo(){return!0}function Zp(){return!1}function In(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Zp,this.isPropagationStopped=Zp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=In(la),Do=Tt({},la,{view:0,detail:0}),Wx=In(Do),cu,uu,ya,Lc=Tt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ya&&(ya&&n.type==="mousemove"?(cu=n.screenX-ya.screenX,uu=n.screenY-ya.screenY):uu=cu=0,ya=n),cu)},movementY:function(n){return"movementY"in n?n.movementY:uu}}),Qp=In(Lc),Xx=Tt({},Lc,{dataTransfer:0}),jx=In(Xx),Yx=Tt({},Do,{relatedTarget:0}),hu=In(Yx),qx=Tt({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=In(qx),Kx=Tt({},la,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Jx=In(Kx),Zx=Tt({},la,{data:0}),em=In(Zx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=tS[n])?!!e[n]:!1}function Tf(){return nS}var iS=Tt({},Do,{key:function(n){if(n.key){var e=Qx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?eS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(n){return n.type==="keypress"?Ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),rS=In(iS),sS=Tt({},Lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=In(sS),aS=Tt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),oS=In(aS),lS=Tt({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=In(lS),uS=Tt({},Lc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=In(uS),dS=[9,13,27,32],bf=Ui&&"CompositionEvent"in window,Wa=null;Ui&&"documentMode"in document&&(Wa=document.documentMode);var fS=Ui&&"TextEvent"in window&&!Wa,cv=Ui&&(!bf||Wa&&8<Wa&&11>=Wa),nm=" ",im=!1;function uv(n,e){switch(n){case"keyup":return dS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function pS(n,e){switch(n){case"compositionend":return hv(e);case"keypress":return e.which!==32?null:(im=!0,nm);case"textInput":return n=e.data,n===nm&&im?null:n;default:return null}}function mS(n,e){if(Ts)return n==="compositionend"||!bf&&uv(n,e)?(n=lv(),Il=wf=nr=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cv&&e.locale!=="ko"?null:e.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!gS[n.type]:e==="textarea"}function dv(n,e,t,i){V0(i),e=sc(e,"onChange"),0<e.length&&(t=new Ef("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Xa=null,co=null;function vS(n){wv(n,0)}function Dc(n){var e=As(n);if(F0(e))return n}function _S(n,e){if(n==="change")return e}var fv=!1;if(Ui){var du;if(Ui){var fu="oninput"in document;if(!fu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),fu=typeof sm.oninput=="function"}du=fu}else du=!1;fv=du&&(!document.documentMode||9<document.documentMode)}function am(){Xa&&(Xa.detachEvent("onpropertychange",pv),co=Xa=null)}function pv(n){if(n.propertyName==="value"&&Dc(co)){var e=[];dv(e,co,n,_f(n)),Y0(vS,e)}}function yS(n,e,t){n==="focusin"?(am(),Xa=e,co=t,Xa.attachEvent("onpropertychange",pv)):n==="focusout"&&am()}function xS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dc(co)}function SS(n,e){if(n==="click")return Dc(e)}function MS(n,e){if(n==="input"||n==="change")return Dc(e)}function wS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var li=typeof Object.is=="function"?Object.is:wS;function uo(n,e){if(li(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!xh.call(e,r)||!li(n[r],e[r]))return!1}return!0}function om(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function lm(n,e){var t=om(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=om(t)}}function mv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?mv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gv(){for(var n=window,e=Zl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Zl(n.document)}return e}function Cf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ES(n){var e=gv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&mv(t.ownerDocument.documentElement,t)){if(i!==null&&Cf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=lm(t,s);var a=lm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var TS=Ui&&"documentMode"in document&&11>=document.documentMode,bs=null,zh=null,ja=null,Bh=!1;function cm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bh||bs==null||bs!==Zl(i)||(i=bs,"selectionStart"in i&&Cf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ja&&uo(ja,i)||(ja=i,i=sc(zh,"onSelect"),0<i.length&&(e=new Ef("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=bs)))}function jo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Cs={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},pu={},vv={};Ui&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Nc(n){if(pu[n])return pu[n];if(!Cs[n])return n;var e=Cs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in vv)return pu[n]=e[t];return n}var _v=Nc("animationend"),yv=Nc("animationiteration"),xv=Nc("animationstart"),Sv=Nc("transitionend"),Mv=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,e){Mv.set(n,e),qr(e,[n])}for(var mu=0;mu<um.length;mu++){var gu=um[mu],bS=gu.toLowerCase(),CS=gu[0].toUpperCase()+gu.slice(1);vr(bS,"on"+CS)}vr(_v,"onAnimationEnd");vr(yv,"onAnimationIteration");vr(xv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Sv,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function hm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,bx(i,e,void 0,n),n.currentTarget=null}function wv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;hm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;hm(r,o,c),s=l}}}if(ec)throw n=Uh,ec=!1,Uh=null,n}function yt(n,e){var t=e[Xh];t===void 0&&(t=e[Xh]=new Set);var i=n+"__bubble";t.has(i)||(Ev(e,n,2,!1),t.add(i))}function vu(n,e,t){var i=0;e&&(i|=4),Ev(t,n,i,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function ho(n){if(!n[Yo]){n[Yo]=!0,L0.forEach(function(t){t!=="selectionchange"&&(AS.has(t)||vu(t,!1,n),vu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,vu("selectionchange",!1,e))}}function Ev(n,e,t,i){switch(ov(e)){case 1:var r=Gx;break;case 4:r=Vx;break;default:r=Mf}t=r.bind(null,e,t,n),r=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function _u(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ur(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Y0(function(){var c=s,h=_f(t),u=[];e:{var d=Mv.get(n);if(d!==void 0){var p=Ef,g=n;switch(n){case"keypress":if(Ul(t)===0)break e;case"keydown":case"keyup":p=rS;break;case"focusin":g="focus",p=hu;break;case"focusout":g="blur",p=hu;break;case"beforeblur":case"afterblur":p=hu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oS;break;case _v:case yv:case xv:p=$x;break;case Sv:p=cS;break;case"scroll":p=Wx;break;case"wheel":p=hS;break;case"copy":case"cut":case"paste":p=Jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tm}var _=(e&4)!==0,m=!_&&n==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,f!==null&&(x=so(v,f),x!=null&&_.push(fo(v,x,y)))),m)break;v=v.return}0<_.length&&(d=new p(d,g,null,t,h),u.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Dh&&(g=t.relatedTarget||t.fromElement)&&(Ur(g)||g[Fi]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Ur(g):null,g!==null&&(m=$r(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Qp,x="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=tm,x="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:As(p),y=g==null?d:As(g),d=new _(x,v+"leave",p,t,h),d.target=m,d.relatedTarget=y,x=null,Ur(h)===c&&(_=new _(f,v+"enter",g,t,h),_.target=y,_.relatedTarget=m,x=_),m=x,p&&g)t:{for(_=p,f=g,v=0,y=_;y;y=Qr(y))v++;for(y=0,x=f;x;x=Qr(x))y++;for(;0<v-y;)_=Qr(_),v--;for(;0<y-v;)f=Qr(f),y--;for(;v--;){if(_===f||f!==null&&_===f.alternate)break t;_=Qr(_),f=Qr(f)}_=null}else _=null;p!==null&&dm(u,d,p,_,!1),g!==null&&m!==null&&dm(u,m,g,_,!0)}}e:{if(d=c?As(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=_S;else if(rm(d))if(fv)A=MS;else{A=xS;var C=yS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=SS);if(A&&(A=A(n,c))){dv(u,A,t,h);break e}C&&C(n,d,c),n==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Ch(d,"number",d.value)}switch(C=c?As(c):window,n){case"focusin":(rm(C)||C.contentEditable==="true")&&(bs=C,zh=c,ja=null);break;case"focusout":ja=zh=bs=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,cm(u,t,h);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":cm(u,t,h)}var b;if(bf)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ts?uv(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(cv&&t.locale!=="ko"&&(Ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ts&&(b=lv()):(nr=h,wf="value"in nr?nr.value:nr.textContent,Ts=!0)),C=sc(c,P),0<C.length&&(P=new em(P,n,null,t,h),u.push({event:P,listeners:C}),b?P.data=b:(b=hv(t),b!==null&&(P.data=b)))),(b=fS?pS(n,t):mS(n,t))&&(c=sc(c,"onBeforeInput"),0<c.length&&(h=new em("onBeforeInput","beforeinput",null,t,h),u.push({event:h,listeners:c}),h.data=b))}wv(u,e)})}function fo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function sc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(n,t),s!=null&&i.unshift(fo(n,s,r)),s=so(n,e),s!=null&&i.push(fo(n,s,r))),n=n.return}return i}function Qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dm(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=so(t,s),l!=null&&a.unshift(fo(t,l,o))):r||(l=so(t,s),l!=null&&a.push(fo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var RS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function fm(n){return(typeof n=="string"?n:""+n).replace(RS,`
`).replace(PS,"")}function qo(n,e,t){if(e=fm(e),fm(n)!==e&&t)throw Error(ne(425))}function ac(){}var Hh=null,Gh=null;function Vh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wh=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(n){return pm.resolve(null).then(n).catch(NS)}:Wh;function NS(n){setTimeout(function(){throw n})}function yu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),lo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);lo(e)}function lr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function mm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ca=Math.random().toString(36).slice(2),di="__reactFiber$"+ca,po="__reactProps$"+ca,Fi="__reactContainer$"+ca,Xh="__reactEvents$"+ca,IS="__reactListeners$"+ca,US="__reactHandles$"+ca;function Ur(n){var e=n[di];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Fi]||t[di]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=mm(n);n!==null;){if(t=n[di])return t;n=mm(n)}return e}n=t,t=n.parentNode}return null}function No(n){return n=n[di]||n[Fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Ic(n){return n[po]||null}var jh=[],Rs=-1;function _r(n){return{current:n}}function St(n){0>Rs||(n.current=jh[Rs],jh[Rs]=null,Rs--)}function gt(n,e){Rs++,jh[Rs]=n.current,n.current=e}var mr={},sn=_r(mr),xn=_r(!1),Hr=mr;function js(n,e){var t=n.type.contextTypes;if(!t)return mr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(n){return n=n.childContextTypes,n!=null}function oc(){St(xn),St(sn)}function gm(n,e,t){if(sn.current!==mr)throw Error(ne(168));gt(sn,e),gt(xn,t)}function Tv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,yx(n)||"Unknown",r));return Tt({},t,i)}function lc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,Hr=sn.current,gt(sn,n),gt(xn,xn.current),!0}function vm(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=Tv(n,e,Hr),i.__reactInternalMemoizedMergedChildContext=n,St(xn),St(sn),gt(sn,n)):St(xn),gt(xn,t)}var Ci=null,Uc=!1,xu=!1;function bv(n){Ci===null?Ci=[n]:Ci.push(n)}function FS(n){Uc=!0,bv(n)}function yr(){if(!xu&&Ci!==null){xu=!0;var n=0,e=ht;try{var t=Ci;for(ht=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ci=null,Uc=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(n+1)),J0(yf,yr),r}finally{ht=e,xu=!1}}return null}var Ps=[],Ls=0,cc=null,uc=0,On=[],zn=0,Gr=null,Ai=1,Ri="";function Rr(n,e){Ps[Ls++]=uc,Ps[Ls++]=cc,cc=n,uc=e}function Cv(n,e,t){On[zn++]=Ai,On[zn++]=Ri,On[zn++]=Gr,Gr=n;var i=Ai;n=Ri;var r=32-si(i)-1;i&=~(1<<r),t+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ai=1<<32-si(e)+r|t<<r|i,Ri=s+n}else Ai=1<<s|t<<r|i,Ri=n}function Af(n){n.return!==null&&(Rr(n,1),Cv(n,1,0))}function Rf(n){for(;n===cc;)cc=Ps[--Ls],Ps[Ls]=null,uc=Ps[--Ls],Ps[Ls]=null;for(;n===Gr;)Gr=On[--zn],On[zn]=null,Ri=On[--zn],On[zn]=null,Ai=On[--zn],On[zn]=null}var Ln=null,Pn=null,Mt=!1,Qn=null;function Av(n,e){var t=Hn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function _m(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ln=n,Pn=lr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ln=n,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Gr!==null?{id:Ai,overflow:Ri}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ln=n,Pn=null,!0):!1;default:return!1}}function Yh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qh(n){if(Mt){var e=Pn;if(e){var t=e;if(!_m(n,e)){if(Yh(n))throw Error(ne(418));e=lr(t.nextSibling);var i=Ln;e&&_m(n,e)?Av(i,t):(n.flags=n.flags&-4097|2,Mt=!1,Ln=n)}}else{if(Yh(n))throw Error(ne(418));n.flags=n.flags&-4097|2,Mt=!1,Ln=n}}}function ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ln=n}function $o(n){if(n!==Ln)return!1;if(!Mt)return ym(n),Mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Vh(n.type,n.memoizedProps)),e&&(e=Pn)){if(Yh(n))throw Rv(),Error(ne(418));for(;e;)Av(n,e),e=lr(e.nextSibling)}if(ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Pn=lr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Pn=null}}else Pn=Ln?lr(n.stateNode.nextSibling):null;return!0}function Rv(){for(var n=Pn;n;)n=lr(n.nextSibling)}function Ys(){Pn=Ln=null,Mt=!1}function Pf(n){Qn===null?Qn=[n]:Qn.push(n)}var kS=Bi.ReactCurrentBatchConfig;function xa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Ko(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function xm(n){var e=n._init;return e(n._payload)}function Pv(n){function e(f,v){if(n){var y=f.deletions;y===null?(f.deletions=[v],f.flags|=16):y.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=dr(f,v),f.index=0,f.sibling=null,f}function s(f,v,y){return f.index=y,n?(y=f.alternate,y!==null?(y=y.index,y<v?(f.flags|=2,v):y):(f.flags|=2,v)):(f.flags|=1048576,v)}function a(f){return n&&f.alternate===null&&(f.flags|=2),f}function o(f,v,y,x){return v===null||v.tag!==6?(v=Cu(y,f.mode,x),v.return=f,v):(v=r(v,y),v.return=f,v)}function l(f,v,y,x){var A=y.type;return A===Es?h(f,v,y.props.children,x,y.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===$i&&xm(A)===v.type)?(x=r(v,y.props),x.ref=xa(f,v,y),x.return=f,x):(x=Gl(y.type,y.key,y.props,null,f.mode,x),x.ref=xa(f,v,y),x.return=f,x)}function c(f,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Au(y,f.mode,x),v.return=f,v):(v=r(v,y.children||[]),v.return=f,v)}function h(f,v,y,x,A){return v===null||v.tag!==7?(v=Br(y,f.mode,x,A),v.return=f,v):(v=r(v,y),v.return=f,v)}function u(f,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Cu(""+v,f.mode,y),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:return y=Gl(v.type,v.key,v.props,null,f.mode,y),y.ref=xa(f,null,v),y.return=f,y;case ws:return v=Au(v,f.mode,y),v.return=f,v;case $i:var x=v._init;return u(f,x(v._payload),y)}if(Oa(v)||ma(v))return v=Br(v,f.mode,y,null),v.return=f,v;Ko(f,v)}return null}function d(f,v,y,x){var A=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:o(f,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zo:return y.key===A?l(f,v,y,x):null;case ws:return y.key===A?c(f,v,y,x):null;case $i:return A=y._init,d(f,v,A(y._payload),x)}if(Oa(y)||ma(y))return A!==null?null:h(f,v,y,x,null);Ko(f,y)}return null}function p(f,v,y,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(y)||null,o(v,f,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case zo:return f=f.get(x.key===null?y:x.key)||null,l(v,f,x,A);case ws:return f=f.get(x.key===null?y:x.key)||null,c(v,f,x,A);case $i:var C=x._init;return p(f,v,y,C(x._payload),A)}if(Oa(x)||ma(x))return f=f.get(y)||null,h(v,f,x,A,null);Ko(v,x)}return null}function g(f,v,y,x){for(var A=null,C=null,b=v,P=v=0,V=null;b!==null&&P<y.length;P++){b.index>P?(V=b,b=null):V=b.sibling;var S=d(f,b,y[P],x);if(S===null){b===null&&(b=V);break}n&&b&&S.alternate===null&&e(f,b),v=s(S,v,P),C===null?A=S:C.sibling=S,C=S,b=V}if(P===y.length)return t(f,b),Mt&&Rr(f,P),A;if(b===null){for(;P<y.length;P++)b=u(f,y[P],x),b!==null&&(v=s(b,v,P),C===null?A=b:C.sibling=b,C=b);return Mt&&Rr(f,P),A}for(b=i(f,b);P<y.length;P++)V=p(b,f,P,y[P],x),V!==null&&(n&&V.alternate!==null&&b.delete(V.key===null?P:V.key),v=s(V,v,P),C===null?A=V:C.sibling=V,C=V);return n&&b.forEach(function(E){return e(f,E)}),Mt&&Rr(f,P),A}function _(f,v,y,x){var A=ma(y);if(typeof A!="function")throw Error(ne(150));if(y=A.call(y),y==null)throw Error(ne(151));for(var C=A=null,b=v,P=v=0,V=null,S=y.next();b!==null&&!S.done;P++,S=y.next()){b.index>P?(V=b,b=null):V=b.sibling;var E=d(f,b,S.value,x);if(E===null){b===null&&(b=V);break}n&&b&&E.alternate===null&&e(f,b),v=s(E,v,P),C===null?A=E:C.sibling=E,C=E,b=V}if(S.done)return t(f,b),Mt&&Rr(f,P),A;if(b===null){for(;!S.done;P++,S=y.next())S=u(f,S.value,x),S!==null&&(v=s(S,v,P),C===null?A=S:C.sibling=S,C=S);return Mt&&Rr(f,P),A}for(b=i(f,b);!S.done;P++,S=y.next())S=p(b,f,P,S.value,x),S!==null&&(n&&S.alternate!==null&&b.delete(S.key===null?P:S.key),v=s(S,v,P),C===null?A=S:C.sibling=S,C=S);return n&&b.forEach(function(H){return e(f,H)}),Mt&&Rr(f,P),A}function m(f,v,y,x){if(typeof y=="object"&&y!==null&&y.type===Es&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case zo:e:{for(var A=y.key,C=v;C!==null;){if(C.key===A){if(A=y.type,A===Es){if(C.tag===7){t(f,C.sibling),v=r(C,y.props.children),v.return=f,f=v;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===$i&&xm(A)===C.type){t(f,C.sibling),v=r(C,y.props),v.ref=xa(f,C,y),v.return=f,f=v;break e}t(f,C);break}else e(f,C);C=C.sibling}y.type===Es?(v=Br(y.props.children,f.mode,x,y.key),v.return=f,f=v):(x=Gl(y.type,y.key,y.props,null,f.mode,x),x.ref=xa(f,v,y),x.return=f,f=x)}return a(f);case ws:e:{for(C=y.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(f,v.sibling),v=r(v,y.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=Au(y,f.mode,x),v.return=f,f=v}return a(f);case $i:return C=y._init,m(f,v,C(y._payload),x)}if(Oa(y))return g(f,v,y,x);if(ma(y))return _(f,v,y,x);Ko(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,y),v.return=f,f=v):(t(f,v),v=Cu(y,f.mode,x),v.return=f,f=v),a(f)):t(f,v)}return m}var qs=Pv(!0),Lv=Pv(!1),hc=_r(null),dc=null,Ds=null,Lf=null;function Df(){Lf=Ds=dc=null}function Nf(n){var e=hc.current;St(hc),n._currentValue=e}function $h(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Bs(n,e){dc=n,Lf=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(_n=!0),n.firstContext=null)}function Vn(n){var e=n._currentValue;if(Lf!==n)if(n={context:n,memoizedValue:e,next:null},Ds===null){if(dc===null)throw Error(ne(308));Ds=n,dc.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return e}var Fr=null;function If(n){Fr===null?Fr=[n]:Fr.push(n)}function Dv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,If(e)):(t.next=r.next,r.next=t),e.interleaved=t,ki(n,i)}function ki(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ki=!1;function Uf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(n,t)}return r=i.interleaved,r===null?(e.next=e,If(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(n,t)}function Fl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xf(n,t)}}function Sm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function fc(n,e,t,i){var r=n.updateQueue;Ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=n.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,_=o;switch(d=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){u=g.call(p,u,d);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,u,d):g,d==null)break e;u=Tt({},u,d);break e;case 2:Ki=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=u):h=h.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=a,n.lanes=a,n.memoizedState=u}}function Mm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Io={},mi=_r(Io),mo=_r(Io),go=_r(Io);function kr(n){if(n===Io)throw Error(ne(174));return n}function Ff(n,e){switch(gt(go,e),gt(mo,n),gt(mi,Io),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Rh(e,n)}St(mi),gt(mi,e)}function $s(){St(mi),St(mo),St(go)}function Iv(n){kr(go.current);var e=kr(mi.current),t=Rh(e,n.type);e!==t&&(gt(mo,n),gt(mi,t))}function kf(n){mo.current===n&&(St(mi),St(mo))}var wt=_r(0);function pc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function Of(){for(var n=0;n<Su.length;n++)Su[n]._workInProgressVersionPrimary=null;Su.length=0}var kl=Bi.ReactCurrentDispatcher,Mu=Bi.ReactCurrentBatchConfig,Vr=0,Et=null,Ft=null,Wt=null,mc=!1,Ya=!1,vo=0,OS=0;function Zt(){throw Error(ne(321))}function zf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!li(n[t],e[t]))return!1;return!0}function Bf(n,e,t,i,r,s){if(Vr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=n===null||n.memoizedState===null?GS:VS,n=t(i,r),Ya){s=0;do{if(Ya=!1,vo=0,25<=s)throw Error(ne(301));s+=1,Wt=Ft=null,e.updateQueue=null,kl.current=WS,n=t(i,r)}while(Ya)}if(kl.current=gc,e=Ft!==null&&Ft.next!==null,Vr=0,Wt=Ft=Et=null,mc=!1,e)throw Error(ne(300));return n}function Hf(){var n=vo!==0;return vo=0,n}function ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function Wn(){if(Ft===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=Ft.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,Ft=n;else{if(n===null)throw Error(ne(310));Ft=n,n={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Wt===null?Et.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function _o(n,e){return typeof e=="function"?e(n):e}function wu(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Ft,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Vr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=i):l=l.next=u,Et.lanes|=h,Wr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,li(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,Wr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Eu(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);li(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Uv(){}function Fv(n,e){var t=Et,i=Wn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Gf(zv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,yo(9,Ov.bind(null,t,i,r,e),void 0,null),Xt===null)throw Error(ne(349));Vr&30||kv(t,e,r)}return r}function kv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ov(n,e,t,i){e.value=t,e.getSnapshot=i,Bv(e)&&Hv(n)}function zv(n,e,t){return t(function(){Bv(e)&&Hv(n)})}function Bv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!li(n,t)}catch{return!0}}function Hv(n){var e=ki(n,1);e!==null&&ai(e,n,1,-1)}function wm(n){var e=ui();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:n},e.queue=n,n=n.dispatch=HS.bind(null,Et,n),[e.memoizedState,n]}function yo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Gv(){return Wn().memoizedState}function Ol(n,e,t,i){var r=ui();Et.flags|=n,r.memoizedState=yo(1|e,t,void 0,i===void 0?null:i)}function Fc(n,e,t,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&zf(i,a.deps)){r.memoizedState=yo(e,t,s,i);return}}Et.flags|=n,r.memoizedState=yo(1|e,t,s,i)}function Em(n,e){return Ol(8390656,8,n,e)}function Gf(n,e){return Fc(2048,8,n,e)}function Vv(n,e){return Fc(4,2,n,e)}function Wv(n,e){return Fc(4,4,n,e)}function Xv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function jv(n,e,t){return t=t!=null?t.concat([n]):null,Fc(4,4,Xv.bind(null,e,n),t)}function Vf(){}function Yv(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function qv(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&zf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function $v(n,e,t){return Vr&21?(li(t,e)||(t=ev(),Et.lanes|=t,Wr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=t)}function zS(n,e){var t=ht;ht=t!==0&&4>t?t:4,n(!0);var i=Mu.transition;Mu.transition={};try{n(!1),e()}finally{ht=t,Mu.transition=i}}function Kv(){return Wn().memoizedState}function BS(n,e,t){var i=hr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Jv(n))Zv(e,t);else if(t=Dv(n,e,t,i),t!==null){var r=hn();ai(t,n,i,r),Qv(t,e,i)}}function HS(n,e,t){var i=hr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Jv(n))Zv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,li(o,a)){var l=e.interleaved;l===null?(r.next=r,If(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Dv(n,e,r,i),t!==null&&(r=hn(),ai(t,n,i,r),Qv(t,e,i))}}function Jv(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function Zv(n,e){Ya=mc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Qv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xf(n,t)}}var gc={readContext:Vn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},GS={readContext:Vn,useCallback:function(n,e){return ui().memoizedState=[n,e===void 0?null:e],n},useContext:Vn,useEffect:Em,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ol(4194308,4,Xv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ol(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ol(4,2,n,e)},useMemo:function(n,e){var t=ui();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ui();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=BS.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=ui();return n={current:n},e.memoizedState=n},useState:wm,useDebugValue:Vf,useDeferredValue:function(n){return ui().memoizedState=n},useTransition:function(){var n=wm(!1),e=n[0];return n=zS.bind(null,n[1]),ui().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=ui();if(Mt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Xt===null)throw Error(ne(349));Vr&30||kv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Em(zv.bind(null,i,s,n),[n]),i.flags|=2048,yo(9,Ov.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ui(),e=Xt.identifierPrefix;if(Mt){var t=Ri,i=Ai;t=(i&~(1<<32-si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=vo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=OS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},VS={readContext:Vn,useCallback:Yv,useContext:Vn,useEffect:Gf,useImperativeHandle:jv,useInsertionEffect:Vv,useLayoutEffect:Wv,useMemo:qv,useReducer:wu,useRef:Gv,useState:function(){return wu(_o)},useDebugValue:Vf,useDeferredValue:function(n){var e=Wn();return $v(e,Ft.memoizedState,n)},useTransition:function(){var n=wu(_o)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Kv,unstable_isNewReconciler:!1},WS={readContext:Vn,useCallback:Yv,useContext:Vn,useEffect:Gf,useImperativeHandle:jv,useInsertionEffect:Vv,useLayoutEffect:Wv,useMemo:qv,useReducer:Eu,useRef:Gv,useState:function(){return Eu(_o)},useDebugValue:Vf,useDeferredValue:function(n){var e=Wn();return Ft===null?e.memoizedState=n:$v(e,Ft.memoizedState,n)},useTransition:function(){var n=Eu(_o)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Kv,unstable_isNewReconciler:!1};function Kn(n,e){if(n&&n.defaultProps){e=Tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Kh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var kc={isMounted:function(n){return(n=n._reactInternals)?$r(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=hn(),r=hr(n),s=Li(i,r);s.payload=e,t!=null&&(s.callback=t),e=cr(n,s,r),e!==null&&(ai(e,n,r,i),Fl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=hn(),r=hr(n),s=Li(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=cr(n,s,r),e!==null&&(ai(e,n,r,i),Fl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),i=hr(n),r=Li(t,i);r.tag=2,e!=null&&(r.callback=e),e=cr(n,r,i),e!==null&&(ai(e,n,i,t),Fl(e,n,i))}};function Tm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!uo(t,i)||!uo(r,s):!0}function e_(n,e,t){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=Sn(e)?Hr:sn.current,i=e.contextTypes,s=(i=i!=null)?js(n,r):mr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function bm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&kc.enqueueReplaceState(e,e.state,null)}function Jh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Uf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=Sn(e)?Hr:sn.current,r.context=js(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kc.enqueueReplaceState(r,r.state,null),fc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,e){try{var t="",i=e;do t+=_x(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Tu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Zh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function t_(n,e,t){t=Li(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){_c||(_c=!0,ld=i),Zh(n,e)},t}function n_(n,e,t){t=Li(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Zh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Zh(n,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Cm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new XS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=sM.bind(null,n,e,t),e.then(n,n))}function Am(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Rm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Li(-1,1),e.tag=2,cr(t,e,1))),t.lanes|=1),n)}var jS=Bi.ReactCurrentOwner,_n=!1;function cn(n,e,t,i){e.child=n===null?Lv(e,null,t,i):qs(e,n.child,t,i)}function Pm(n,e,t,i,r){t=t.render;var s=e.ref;return Bs(e,r),i=Bf(n,e,t,i,s,r),t=Hf(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(Mt&&t&&Af(e),e.flags|=1,cn(n,e,i,r),e.child)}function Lm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Jf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,i_(n,e,s,i,r)):(n=Gl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:uo,t(a,i)&&n.ref===e.ref)return Oi(n,e,r)}return e.flags|=1,n=dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function i_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(uo(s,i)&&n.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(_n=!0);else return e.lanes=n.lanes,Oi(n,e,r)}return Qh(n,e,t,i,r)}function r_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Is,An),An|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gt(Is,An),An|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,gt(Is,An),An|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,gt(Is,An),An|=i;return cn(n,e,r,t),e.child}function s_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Qh(n,e,t,i,r){var s=Sn(t)?Hr:sn.current;return s=js(e,s),Bs(e,r),t=Bf(n,e,t,i,s,r),i=Hf(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(Mt&&i&&Af(e),e.flags|=1,cn(n,e,t,r),e.child)}function Dm(n,e,t,i,r){if(Sn(t)){var s=!0;lc(e)}else s=!1;if(Bs(e,r),e.stateNode===null)zl(n,e),e_(e,t,i),Jh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=Sn(t)?Hr:sn.current,c=js(e,c));var h=t.getDerivedStateFromProps,u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&bm(e,a,i,c),Ki=!1;var d=e.memoizedState;a.state=d,fc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||xn.current||Ki?(typeof h=="function"&&(Kh(e,t,h,i),l=e.memoizedState),(o=Ki||Tm(e,t,o,i,d,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Nv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Kn(e.type,o),a.props=c,u=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=Sn(t)?Hr:sn.current,l=js(e,l));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||d!==l)&&bm(e,a,i,l),Ki=!1,d=e.memoizedState,a.state=d,fc(e,i,a,r);var g=e.memoizedState;o!==u||d!==g||xn.current||Ki?(typeof p=="function"&&(Kh(e,t,p,i),g=e.memoizedState),(c=Ki||Tm(e,t,c,i,d,g,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return ed(n,e,t,i,s,r)}function ed(n,e,t,i,r,s){s_(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&vm(e,t,!1),Oi(n,e,s);i=e.stateNode,jS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=qs(e,n.child,null,s),e.child=qs(e,null,o,s)):cn(n,e,o,s),e.memoizedState=i.state,r&&vm(e,t,!0),e.child}function a_(n){var e=n.stateNode;e.pendingContext?gm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(n,e.context,!1),Ff(n,e.containerInfo)}function Nm(n,e,t,i,r){return Ys(),Pf(r),e.flags|=256,cn(n,e,t,i),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(n){return{baseLanes:n,cachePool:null,transitions:null}}function o_(n,e,t){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),gt(wt,r&1),n===null)return qh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Bc(a,i,0,null),n=Br(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=nd(t),e.memoizedState=td,n):Wf(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return YS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Br(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?nd(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=td,i}return s=n.child,n=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Wf(n,e){return e=Bc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Jo(n,e,t,i){return i!==null&&Pf(i),qs(e,n.child,null,t),n=Wf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function YS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Tu(Error(ne(422))),Jo(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bc({mode:"visible",children:i.children},r,0,null),s=Br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,n.child,null,a),e.child.memoizedState=nd(a),e.memoizedState=td,s);if(!(e.mode&1))return Jo(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Tu(s,i,void 0),Jo(n,e,a,i)}if(o=(a&n.childLanes)!==0,_n||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(n,r),ai(i,n,r,-1))}return Kf(),i=Tu(Error(ne(421))),Jo(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=aM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Pn=lr(r.nextSibling),Ln=e,Mt=!0,Qn=null,n!==null&&(On[zn++]=Ai,On[zn++]=Ri,On[zn++]=Gr,Ai=n.id,Ri=n.overflow,Gr=e),e=Wf(e,i.children),e.flags|=4096,e)}function Im(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),$h(n.return,e,t)}function bu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function l_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Im(n,t,e);else if(n.tag===19)Im(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(gt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&pc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),bu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&pc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}bu(e,!0,t,null,s);break;case"together":bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Oi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Wr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function qS(n,e,t){switch(e.tag){case 3:a_(e),Ys();break;case 5:Iv(e);break;case 1:Sn(e.type)&&lc(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(wt,wt.current&1),e.flags|=128,null):t&e.child.childLanes?o_(n,e,t):(gt(wt,wt.current&1),n=Oi(n,e,t),n!==null?n.sibling:null);gt(wt,wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return l_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,r_(n,e,t)}return Oi(n,e,t)}var c_,id,u_,h_;c_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};id=function(){};u_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,kr(mi.current);var s=null;switch(t){case"input":r=Th(n,r),i=Th(n,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Ah(n,r),i=Ah(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ac)}Ph(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h_=function(n,e,t,i){t!==i&&(e.flags|=4)};function Sa(n,e){if(!Mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function $S(n,e,t){var i=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&oc(),Qt(e),null;case 3:return i=e.stateNode,$s(),St(xn),St(sn),Of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&($o(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(hd(Qn),Qn=null))),id(n,e),Qt(e),null;case 5:kf(e);var r=kr(go.current);if(t=e.type,n!==null&&e.stateNode!=null)u_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Qt(e),null}if(n=kr(mi.current),$o(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[di]=e,i[po]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<Ba.length;r++)yt(Ba[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Vp(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Xp(i,s),yt("invalid",i)}Ph(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,o,n),r=["children",""+o]):io.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(t){case"input":Bo(i),Wp(i,s,!0);break;case"textarea":Bo(i),jp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=z0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[di]=e,n[po]=i,c_(n,e,!1,!1),e.stateNode=n;e:{switch(a=Lh(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ba.length;r++)yt(Ba[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":Vp(n,i),r=Th(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":Xp(n,i),r=Ah(n,i),yt("invalid",n);break;default:r=i}Ph(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?G0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ro(n,l):typeof l=="number"&&ro(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&pf(n,s,l,a))}switch(t){case"input":Bo(n),Wp(n,i,!1);break;case"textarea":Bo(n),jp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+pr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Fs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ac)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(n&&e.stateNode!=null)h_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=kr(go.current),kr(mi.current),$o(e)){if(i=e.stateNode,t=e.memoizedProps,i[di]=e,(s=i.nodeValue!==t)&&(n=Ln,n!==null))switch(n.tag){case 3:qo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Qt(e),null;case 13:if(St(wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Mt&&Pn!==null&&e.mode&1&&!(e.flags&128))Rv(),Ys(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[di]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Qn!==null&&(hd(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||wt.current&1?Ot===0&&(Ot=3):Kf())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return $s(),id(n,e),n===null&&ho(e.stateNode.containerInfo),Qt(e),null;case 10:return Nf(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&oc(),Qt(e),null;case 19:if(St(wt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Sa(s,!1);else{if(Ot!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=pc(n),a!==null){for(e.flags|=128,Sa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gt(wt,wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Pt()>Js&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304)}else{if(!i)if(n=pc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return Qt(e),null}else 2*Pt()-s.renderingStartTime>Js&&t!==1073741824&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,t=wt.current,gt(wt,i?t&1|2:t&1),e):(Qt(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function KS(n,e){switch(Rf(e),e.tag){case 1:return Sn(e.type)&&oc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $s(),St(xn),St(sn),Of(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return kf(e),null;case 13:if(St(wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ys()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return St(wt),null;case 4:return $s(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var Zo=!1,nn=!1,JS=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ns(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ct(n,e,i)}else t.current=null}function rd(n,e,t){try{t()}catch(i){Ct(n,e,i)}}var Um=!1;function ZS(n,e){if(Hh=ic,n=gv(),Cf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,h=0,u=n,d=null;t:for(;;){for(var p;u!==t||r!==0&&u.nodeType!==3||(o=a+r),u!==s||i!==0&&u.nodeType!==3||(l=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(p=u.firstChild)!==null;)d=u,u=p;for(;;){if(u===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(p=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gh={focusedElem:n,selectionRange:t},ic=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Kn(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(x){Ct(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return g=Um,Um=!1,g}function qa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&rd(e,t,s)}r=r.next}while(r!==i)}}function Oc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function sd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function d_(n){var e=n.alternate;e!==null&&(n.alternate=null,d_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[di],delete e[po],delete e[Xh],delete e[IS],delete e[US])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function f_(n){return n.tag===5||n.tag===3||n.tag===4}function Fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||f_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ac));else if(i!==4&&(n=n.child,n!==null))for(ad(n,e,t),n=n.sibling;n!==null;)ad(n,e,t),n=n.sibling}function od(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(od(n,e,t),n=n.sibling;n!==null;)od(n,e,t),n=n.sibling}var Yt=null,Jn=!1;function Gi(n,e,t){for(t=t.child;t!==null;)p_(n,e,t),t=t.sibling}function p_(n,e,t){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Pc,t)}catch{}switch(t.tag){case 5:nn||Ns(t,e);case 6:var i=Yt,r=Jn;Yt=null,Gi(n,e,t),Yt=i,Jn=r,Yt!==null&&(Jn?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(Jn?(n=Yt,t=t.stateNode,n.nodeType===8?yu(n.parentNode,t):n.nodeType===1&&yu(n,t),lo(n)):yu(Yt,t.stateNode));break;case 4:i=Yt,r=Jn,Yt=t.stateNode.containerInfo,Jn=!0,Gi(n,e,t),Yt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&rd(t,e,a),r=r.next}while(r!==i)}Gi(n,e,t);break;case 1:if(!nn&&(Ns(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Ct(t,e,o)}Gi(n,e,t);break;case 21:Gi(n,e,t);break;case 22:t.mode&1?(nn=(i=nn)||t.memoizedState!==null,Gi(n,e,t),nn=i):Gi(n,e,t);break;default:Gi(n,e,t)}}function km(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new JS),e.forEach(function(i){var r=oM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,Jn=!1;break e;case 3:Yt=o.stateNode.containerInfo,Jn=!0;break e;case 4:Yt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(Yt===null)throw Error(ne(160));p_(s,a,r),Yt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m_(e,n),e=e.sibling}function m_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),ci(n),i&4){try{qa(3,n,n.return),Oc(3,n)}catch(_){Ct(n,n.return,_)}try{qa(5,n,n.return)}catch(_){Ct(n,n.return,_)}}break;case 1:jn(e,n),ci(n),i&512&&t!==null&&Ns(t,t.return);break;case 5:if(jn(e,n),ci(n),i&512&&t!==null&&Ns(t,t.return),n.flags&32){var r=n.stateNode;try{ro(r,"")}catch(_){Ct(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&k0(r,s),Lh(o,a);var c=Lh(o,s);for(a=0;a<l.length;a+=2){var h=l[a],u=l[a+1];h==="style"?G0(r,u):h==="dangerouslySetInnerHTML"?B0(r,u):h==="children"?ro(r,u):pf(r,h,u,c)}switch(o){case"input":bh(r,s);break;case"textarea":O0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(_){Ct(n,n.return,_)}}break;case 6:if(jn(e,n),ci(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Ct(n,n.return,_)}}break;case 3:if(jn(e,n),ci(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(_){Ct(n,n.return,_)}break;case 4:jn(e,n),ci(n);break;case 13:jn(e,n),ci(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yf=Pt())),i&4&&km(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(nn=(c=nn)||h,jn(e,n),nn=c):jn(e,n),ci(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(ge=n,h=n.child;h!==null;){for(u=ge=h;ge!==null;){switch(d=ge,p=d.child,d.tag){case 0:case 11:case 14:case 15:qa(4,d,d.return);break;case 1:Ns(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Ct(i,t,_)}}break;case 5:Ns(d,d.return);break;case 22:if(d.memoizedState!==null){zm(u);continue}}p!==null?(p.return=d,ge=p):zm(u)}h=h.sibling}e:for(h=null,u=n;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=H0("display",a))}catch(_){Ct(n,n.return,_)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(_){Ct(n,n.return,_)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===n)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:jn(e,n),ci(n),i&4&&km(n);break;case 21:break;default:jn(e,n),ci(n)}}function ci(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(f_(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=Fm(n);od(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Fm(n);ad(n,o,a);break;default:throw Error(ne(161))}}catch(l){Ct(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function QS(n,e,t){ge=n,g_(n)}function g_(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Zo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||nn;o=Zo;var c=nn;if(Zo=a,(nn=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Bm(r):l!==null?(l.return=a,ge=l):Bm(r);for(;s!==null;)ge=s,g_(s),s=s.sibling;ge=r,Zo=o,nn=c}Om(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Om(n)}}function Om(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Kn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Mm(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&lo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}nn||e.flags&512&&sd(e)}catch(d){Ct(e,e.return,d)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function zm(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Bm(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Oc(4,e)}catch(l){Ct(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{sd(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{sd(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===n){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var eM=Math.ceil,vc=Bi.ReactCurrentDispatcher,Xf=Bi.ReactCurrentOwner,Gn=Bi.ReactCurrentBatchConfig,et=0,Xt=null,Nt=null,$t=0,An=0,Is=_r(0),Ot=0,xo=null,Wr=0,zc=0,jf=0,$a=null,vn=null,Yf=0,Js=1/0,bi=null,_c=!1,ld=null,ur=null,Qo=!1,ir=null,yc=0,Ka=0,cd=null,Bl=-1,Hl=0;function hn(){return et&6?Pt():Bl!==-1?Bl:Bl=Pt()}function hr(n){return n.mode&1?et&2&&$t!==0?$t&-$t:kS.transition!==null?(Hl===0&&(Hl=ev()),Hl):(n=ht,n!==0||(n=window.event,n=n===void 0?16:ov(n.type)),n):1}function ai(n,e,t,i){if(50<Ka)throw Ka=0,cd=null,Error(ne(185));Lo(n,t,i),(!(et&2)||n!==Xt)&&(n===Xt&&(!(et&2)&&(zc|=t),Ot===4&&er(n,$t)),Mn(n,i),t===1&&et===0&&!(e.mode&1)&&(Js=Pt()+500,Uc&&yr()))}function Mn(n,e){var t=n.callbackNode;kx(n,e);var i=nc(n,n===Xt?$t:0);if(i===0)t!==null&&$p(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&$p(t),e===1)n.tag===0?FS(Hm.bind(null,n)):bv(Hm.bind(null,n)),DS(function(){!(et&6)&&yr()}),t=null;else{switch(tv(i)){case 1:t=yf;break;case 4:t=Z0;break;case 16:t=tc;break;case 536870912:t=Q0;break;default:t=tc}t=E_(t,v_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function v_(n,e){if(Bl=-1,Hl=0,et&6)throw Error(ne(327));var t=n.callbackNode;if(Hs()&&n.callbackNode!==t)return null;var i=nc(n,n===Xt?$t:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=xc(n,i);else{e=i;var r=et;et|=2;var s=y_();(Xt!==n||$t!==e)&&(bi=null,Js=Pt()+500,zr(n,e));do try{iM();break}catch(o){__(n,o)}while(!0);Df(),vc.current=s,et=r,Nt!==null?e=0:(Xt=null,$t=0,e=Ot)}if(e!==0){if(e===2&&(r=Fh(n),r!==0&&(i=r,e=ud(n,r))),e===1)throw t=xo,zr(n,0),er(n,i),Mn(n,Pt()),t;if(e===6)er(n,i);else{if(r=n.current.alternate,!(i&30)&&!tM(r)&&(e=xc(n,i),e===2&&(s=Fh(n),s!==0&&(i=s,e=ud(n,s))),e===1))throw t=xo,zr(n,0),er(n,i),Mn(n,Pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Pr(n,vn,bi);break;case 3:if(er(n,i),(i&130023424)===i&&(e=Yf+500-Pt(),10<e)){if(nc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Wh(Pr.bind(null,n,vn,bi),e);break}Pr(n,vn,bi);break;case 4:if(er(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eM(i/1960))-i,10<i){n.timeoutHandle=Wh(Pr.bind(null,n,vn,bi),i);break}Pr(n,vn,bi);break;case 5:Pr(n,vn,bi);break;default:throw Error(ne(329))}}}return Mn(n,Pt()),n.callbackNode===t?v_.bind(null,n):null}function ud(n,e){var t=$a;return n.current.memoizedState.isDehydrated&&(zr(n,e).flags|=256),n=xc(n,e),n!==2&&(e=vn,vn=t,e!==null&&hd(e)),n}function hd(n){vn===null?vn=n:vn.push.apply(vn,n)}function tM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(n,e){for(e&=~jf,e&=~zc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-si(e),i=1<<t;n[t]=-1,e&=~i}}function Hm(n){if(et&6)throw Error(ne(327));Hs();var e=nc(n,0);if(!(e&1))return Mn(n,Pt()),null;var t=xc(n,e);if(n.tag!==0&&t===2){var i=Fh(n);i!==0&&(e=i,t=ud(n,i))}if(t===1)throw t=xo,zr(n,0),er(n,e),Mn(n,Pt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Pr(n,vn,bi),Mn(n,Pt()),null}function qf(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(Js=Pt()+500,Uc&&yr())}}function Xr(n){ir!==null&&ir.tag===0&&!(et&6)&&Hs();var e=et;et|=1;var t=Gn.transition,i=ht;try{if(Gn.transition=null,ht=1,n)return n()}finally{ht=i,Gn.transition=t,et=e,!(et&6)&&yr()}}function $f(){An=Is.current,St(Is)}function zr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,LS(t)),Nt!==null)for(t=Nt.return;t!==null;){var i=t;switch(Rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&oc();break;case 3:$s(),St(xn),St(sn),Of();break;case 5:kf(i);break;case 4:$s();break;case 13:St(wt);break;case 19:St(wt);break;case 10:Nf(i.type._context);break;case 22:case 23:$f()}t=t.return}if(Xt=n,Nt=n=dr(n.current,null),$t=An=e,Ot=0,xo=null,jf=zc=Wr=0,vn=$a=null,Fr!==null){for(e=0;e<Fr.length;e++)if(t=Fr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Fr=null}return n}function __(n,e){do{var t=Nt;try{if(Df(),kl.current=gc,mc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mc=!1}if(Vr=0,Wt=Ft=Et=null,Ya=!1,vo=0,Xf.current=null,t===null||t.return===null){Ot=1,xo=e,Nt=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=$t,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Am(a);if(p!==null){p.flags&=-257,Rm(p,a,o,s,e),p.mode&1&&Cm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Cm(s,c,e),Kf();break e}l=Error(ne(426))}}else if(Mt&&o.mode&1){var m=Am(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Rm(m,a,o,s,e),Pf(Ks(l,o));break e}}s=l=Ks(l,o),Ot!==4&&(Ot=2),$a===null?$a=[s]:$a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=t_(s,l,e);Sm(s,f);break e;case 1:o=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ur===null||!ur.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=n_(s,o,e);Sm(s,x);break e}}s=s.return}while(s!==null)}S_(t)}catch(A){e=A,Nt===t&&t!==null&&(Nt=t=t.return);continue}break}while(!0)}function y_(){var n=vc.current;return vc.current=gc,n===null?gc:n}function Kf(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Xt===null||!(Wr&268435455)&&!(zc&268435455)||er(Xt,$t)}function xc(n,e){var t=et;et|=2;var i=y_();(Xt!==n||$t!==e)&&(bi=null,zr(n,e));do try{nM();break}catch(r){__(n,r)}while(!0);if(Df(),et=t,vc.current=i,Nt!==null)throw Error(ne(261));return Xt=null,$t=0,Ot}function nM(){for(;Nt!==null;)x_(Nt)}function iM(){for(;Nt!==null&&!Ax();)x_(Nt)}function x_(n){var e=w_(n.alternate,n,An);n.memoizedProps=n.pendingProps,e===null?S_(n):Nt=e,Xf.current=null}function S_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=KS(t,e),t!==null){t.flags&=32767,Nt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ot=6,Nt=null;return}}else if(t=$S(t,e,An),t!==null){Nt=t;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=n}while(e!==null);Ot===0&&(Ot=5)}function Pr(n,e,t){var i=ht,r=Gn.transition;try{Gn.transition=null,ht=1,rM(n,e,t,i)}finally{Gn.transition=r,ht=i}return null}function rM(n,e,t,i){do Hs();while(ir!==null);if(et&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Ox(n,s),n===Xt&&(Nt=Xt=null,$t=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Qo||(Qo=!0,E_(tc,function(){return Hs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=ht;ht=1;var o=et;et|=4,Xf.current=null,ZS(n,t),m_(t,n),ES(Gh),ic=!!Hh,Gh=Hh=null,n.current=t,QS(t),Rx(),et=o,ht=a,Gn.transition=s}else n.current=t;if(Qo&&(Qo=!1,ir=n,yc=r),s=n.pendingLanes,s===0&&(ur=null),Dx(t.stateNode),Mn(n,Pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(_c)throw _c=!1,n=ld,ld=null,n;return yc&1&&n.tag!==0&&Hs(),s=n.pendingLanes,s&1?n===cd?Ka++:(Ka=0,cd=n):Ka=0,yr(),null}function Hs(){if(ir!==null){var n=tv(yc),e=Gn.transition,t=ht;try{if(Gn.transition=null,ht=16>n?16:n,ir===null)var i=!1;else{if(n=ir,ir=null,yc=0,et&6)throw Error(ne(331));var r=et;for(et|=4,ge=n.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var h=ge;switch(h.tag){case 0:case 11:case 15:qa(8,h,s)}var u=h.child;if(u!==null)u.return=h,ge=u;else for(;ge!==null;){h=ge;var d=h.sibling,p=h.return;if(d_(h),h===c){ge=null;break}if(d!==null){d.return=p,ge=d;break}ge=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ge=f;break e}ge=s.return}}var v=n.current;for(ge=v;ge!==null;){a=ge;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,ge=y;else e:for(a=v;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Oc(9,o)}}catch(A){Ct(o,o.return,A)}if(o===a){ge=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,ge=x;break e}ge=o.return}}if(et=r,yr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Pc,n)}catch{}i=!0}return i}finally{ht=t,Gn.transition=e}}return!1}function Gm(n,e,t){e=Ks(t,e),e=t_(n,e,1),n=cr(n,e,1),e=hn(),n!==null&&(Lo(n,1,e),Mn(n,e))}function Ct(n,e,t){if(n.tag===3)Gm(n,n,t);else for(;e!==null;){if(e.tag===3){Gm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){n=Ks(t,n),n=n_(e,n,1),e=cr(e,n,1),n=hn(),e!==null&&(Lo(e,1,n),Mn(e,n));break}}e=e.return}}function sM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,Xt===n&&($t&t)===t&&(Ot===4||Ot===3&&($t&130023424)===$t&&500>Pt()-Yf?zr(n,0):jf|=t),Mn(n,e)}function M_(n,e){e===0&&(n.mode&1?(e=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):e=1);var t=hn();n=ki(n,e),n!==null&&(Lo(n,e,t),Mn(n,t))}function aM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),M_(n,t)}function oM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),M_(n,t)}var w_;w_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||xn.current)_n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return _n=!1,qS(n,e,t);_n=!!(n.flags&131072)}else _n=!1,Mt&&e.flags&1048576&&Cv(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zl(n,e),n=e.pendingProps;var r=js(e,sn.current);Bs(e,t),r=Bf(null,e,i,n,r,t);var s=Hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,lc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uf(e),r.updater=kc,e.stateNode=r,r._reactInternals=e,Jh(e,i,n,t),e=ed(null,e,i,!0,s,t)):(e.tag=0,Mt&&s&&Af(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(zl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cM(i),n=Kn(i,n),r){case 0:e=Qh(null,e,i,n,t);break e;case 1:e=Dm(null,e,i,n,t);break e;case 11:e=Pm(null,e,i,n,t);break e;case 14:e=Lm(null,e,i,Kn(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Qh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Dm(n,e,i,r,t);case 3:e:{if(a_(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Nv(n,e),fc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(ne(423)),e),e=Nm(n,e,i,t,r);break e}else if(i!==r){r=Ks(Error(ne(424)),e),e=Nm(n,e,i,t,r);break e}else for(Pn=lr(e.stateNode.containerInfo.firstChild),Ln=e,Mt=!0,Qn=null,t=Lv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ys(),i===r){e=Oi(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return Iv(e),n===null&&qh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Vh(i,r)?a=null:s!==null&&Vh(i,s)&&(e.flags|=32),s_(n,e),cn(n,e,a,t),e.child;case 6:return n===null&&qh(e),null;case 13:return o_(n,e,t);case 4:return Ff(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=qs(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Pm(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(hc,i._currentValue),i._currentValue=a,s!==null)if(li(s.value,a)){if(s.children===r.children&&!xn.current){e=Oi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),$h(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),$h(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,t),r=Vn(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),Lm(n,e,i,r,t);case 15:return i_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),zl(n,e),e.tag=1,Sn(i)?(n=!0,lc(e)):n=!1,Bs(e,t),e_(e,i,r),Jh(e,i,r,t),ed(null,e,i,!0,n,t);case 19:return l_(n,e,t);case 22:return r_(n,e,t)}throw Error(ne(156,e.tag))};function E_(n,e){return J0(n,e)}function lM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,e,t,i){return new lM(n,e,t,i)}function Jf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cM(n){if(typeof n=="function")return Jf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===gf)return 11;if(n===vf)return 14}return 2}function dr(n,e){var t=n.alternate;return t===null?(t=Hn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Gl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Jf(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Es:return Br(t.children,r,s,e);case mf:a=8,r|=8;break;case Sh:return n=Hn(12,t,e,r|2),n.elementType=Sh,n.lanes=s,n;case Mh:return n=Hn(13,t,e,r),n.elementType=Mh,n.lanes=s,n;case wh:return n=Hn(19,t,e,r),n.elementType=wh,n.lanes=s,n;case I0:return Bc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case D0:a=10;break e;case N0:a=9;break e;case gf:a=11;break e;case vf:a=14;break e;case $i:a=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Hn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Br(n,e,t,i){return n=Hn(7,n,i,e),n.lanes=t,n}function Bc(n,e,t,i){return n=Hn(22,n,i,e),n.elementType=I0,n.lanes=t,n.stateNode={isHidden:!1},n}function Cu(n,e,t){return n=Hn(6,n,null,e),n.lanes=t,n}function Au(n,e,t){return e=Hn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function uM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(n,e,t,i,r,s,a,o,l){return n=new uM(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(s),n}function hM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function T_(n){if(!n)return mr;n=n._reactInternals;e:{if($r(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(Sn(t))return Tv(n,t,e)}return e}function b_(n,e,t,i,r,s,a,o,l){return n=Zf(t,i,!0,n,r,s,a,o,l),n.context=T_(null),t=n.current,i=hn(),r=hr(t),s=Li(i,r),s.callback=e??null,cr(t,s,r),n.current.lanes=r,Lo(n,r,i),Mn(n,i),n}function Hc(n,e,t,i){var r=e.current,s=hn(),a=hr(r);return t=T_(t),e.context===null?e.context=t:e.pendingContext=t,e=Li(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=cr(r,e,a),n!==null&&(ai(n,r,a,s),Fl(n,r,a)),a}function Sc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Qf(n,e){Vm(n,e),(n=n.alternate)&&Vm(n,e)}function dM(){return null}var C_=typeof reportError=="function"?reportError:function(n){console.error(n)};function ep(n){this._internalRoot=n}Gc.prototype.render=ep.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Hc(n,e,null,null)};Gc.prototype.unmount=ep.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Xr(function(){Hc(null,n,null,null)}),e[Fi]=null}};function Gc(n){this._internalRoot=n}Gc.prototype.unstable_scheduleHydration=function(n){if(n){var e=rv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Qi.length&&e!==0&&e<Qi[t].priority;t++);Qi.splice(t,0,n),t===0&&av(n)}};function tp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wm(){}function fM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sc(a);s.call(c)}}var a=b_(e,i,n,0,null,!1,!1,"",Wm);return n._reactRootContainer=a,n[Fi]=a.current,ho(n.nodeType===8?n.parentNode:n),Xr(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Sc(l);o.call(c)}}var l=Zf(n,0,!1,null,null,!1,!1,"",Wm);return n._reactRootContainer=l,n[Fi]=l.current,ho(n.nodeType===8?n.parentNode:n),Xr(function(){Hc(e,l,t,i)}),l}function Wc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Sc(a);o.call(l)}}Hc(e,a,n,r)}else a=fM(t,e,n,r,i);return Sc(a)}nv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=za(e.pendingLanes);t!==0&&(xf(e,t|1),Mn(e,Pt()),!(et&6)&&(Js=Pt()+500,yr()))}break;case 13:Xr(function(){var i=ki(n,1);if(i!==null){var r=hn();ai(i,n,1,r)}}),Qf(n,1)}};Sf=function(n){if(n.tag===13){var e=ki(n,134217728);if(e!==null){var t=hn();ai(e,n,134217728,t)}Qf(n,134217728)}};iv=function(n){if(n.tag===13){var e=hr(n),t=ki(n,e);if(t!==null){var i=hn();ai(t,n,e,i)}Qf(n,e)}};rv=function(){return ht};sv=function(n,e){var t=ht;try{return ht=n,e()}finally{ht=t}};Nh=function(n,e,t){switch(e){case"input":if(bh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ic(i);if(!r)throw Error(ne(90));F0(i),bh(i,r)}}}break;case"textarea":O0(n,t);break;case"select":e=t.value,e!=null&&Fs(n,!!t.multiple,e,!1)}};X0=qf;j0=Xr;var pM={usingClientEntryPoint:!1,Events:[No,As,Ic,V0,W0,qf]},Ma={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mM={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$0(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||dM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Pc=el.inject(mM),pi=el}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pM;Nn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(e))throw Error(ne(200));return hM(n,e,null,t)};Nn.createRoot=function(n,e){if(!tp(n))throw Error(ne(299));var t=!1,i="",r=C_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(n,1,!1,null,null,t,!1,i,r),n[Fi]=e.current,ho(n.nodeType===8?n.parentNode:n),new ep(e)};Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=$0(e),n=n===null?null:n.stateNode,n};Nn.flushSync=function(n){return Xr(n)};Nn.hydrate=function(n,e,t){if(!Vc(e))throw Error(ne(200));return Wc(null,n,e,!0,t)};Nn.hydrateRoot=function(n,e,t){if(!tp(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=C_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=b_(e,null,n,1,t??null,r,!1,s,a),n[Fi]=e.current,ho(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Gc(e)};Nn.render=function(n,e,t){if(!Vc(e))throw Error(ne(200));return Wc(null,n,e,!1,t)};Nn.unmountComponentAtNode=function(n){if(!Vc(n))throw Error(ne(40));return n._reactRootContainer?(Xr(function(){Wc(null,null,n,!1,function(){n._reactRootContainer=null,n[Fi]=null})}),!0):!1};Nn.unstable_batchedUpdates=qf;Nn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Vc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Wc(n,e,t,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function A_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A_)}catch(n){console.error(n)}}A_(),A0.exports=Nn;var gM=A0.exports,Xm=gM;yh.createRoot=Xm.createRoot,yh.hydrateRoot=Xm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="169",vM=0,jm=1,_M=2,R_=1,yM=2,Ti=3,gr=0,dn=1,qt=2,Di=0,Gs=1,So=2,Ym=3,qm=4,xM=5,Nr=100,SM=101,MM=102,wM=103,EM=104,TM=200,bM=201,CM=202,AM=203,dd=204,fd=205,RM=206,PM=207,LM=208,DM=209,NM=210,IM=211,UM=212,FM=213,kM=214,pd=0,md=1,gd=2,Zs=3,vd=4,_d=5,yd=6,xd=7,P_=0,OM=1,zM=2,fr=0,L_=1,D_=2,N_=3,ip=4,BM=5,I_=6,U_=7,F_=300,Qs=301,ea=302,Sd=303,Md=304,Xc=306,Mo=1e3,rr=1001,wd=1002,yn=1003,HM=1004,tl=1005,ei=1006,Ru=1007,Or=1008,zi=1009,k_=1010,O_=1011,wo=1012,rp=1013,jr=1014,fi=1015,Ni=1016,sp=1017,ap=1018,ta=1020,z_=35902,B_=1021,H_=1022,ii=1023,G_=1024,V_=1025,Vs=1026,na=1027,op=1028,lp=1029,W_=1030,cp=1031,up=1033,Vl=33776,Wl=33777,Xl=33778,jl=33779,Ed=35840,Td=35841,bd=35842,Cd=35843,Ad=36196,Rd=37492,Pd=37496,Ld=37808,Dd=37809,Nd=37810,Id=37811,Ud=37812,Fd=37813,kd=37814,Od=37815,zd=37816,Bd=37817,Hd=37818,Gd=37819,Vd=37820,Wd=37821,Yl=36492,Xd=36494,jd=36495,X_=36283,Yd=36284,qd=36285,$d=36286,GM=3200,VM=3201,j_=0,WM=1,tr="",un="srgb",xr="srgb-linear",hp="display-p3",jc="display-p3-linear",Mc="linear",mt="srgb",wc="rec709",Ec="p3",es=7680,$m=519,XM=512,jM=513,YM=514,Y_=515,qM=516,$M=517,KM=518,JM=519,Kd=35044,ZM=35048,Km="300 es",Pi=2e3,Tc=2001;class ua{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jm=1234567;const Ja=Math.PI/180,Eo=180/Math.PI;function Ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function dp(n,e){return(n%e+e)%e}function QM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ew(n,e,t){return n!==e?(t-n)/(e-n):0}function Za(n,e,t){return(1-t)*n+t*e}function tw(n,e,t,i){return Za(n,e,1-Math.exp(-t*i))}function nw(n,e=1){return e-Math.abs(dp(n,e*2)-e)}function iw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function aw(n,e){return n+Math.random()*(e-n)}function ow(n){return n*(.5-Math.random())}function lw(n){n!==void 0&&(Jm=n);let e=Jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cw(n){return n*Ja}function uw(n){return n*Eo}function hw(n){return(n&n-1)===0&&n!==0}function dw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pw(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Re={DEG2RAD:Ja,RAD2DEG:Eo,generateUUID:Ii,clamp:kt,euclideanModulo:dp,mapLinear:QM,inverseLerp:ew,lerp:Za,damp:tw,pingpong:nw,smoothstep:iw,smootherstep:rw,randInt:sw,randFloat:aw,randFloatSpread:ow,seededRandom:lw,degToRad:cw,radToDeg:uw,isPowerOfTwo:hw,ceilPowerOfTwo:dw,floorPowerOfTwo:fw,setQuaternionFromProperEuler:pw,normalize:ut,denormalize:ti};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],v=r[1],y=r[4],x=r[7],A=r[2],C=r[5],b=r[8];return s[0]=a*_+o*v+l*A,s[3]=a*m+o*y+l*C,s[6]=a*f+o*x+l*b,s[1]=c*_+h*v+u*A,s[4]=c*m+h*y+u*C,s[7]=c*f+h*x+u*b,s[2]=d*_+p*v+g*A,s[5]=d*m+p*y+g*C,s[8]=d*f+p*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pu.makeScale(e,t)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new He;function q_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mw(){const n=To("canvas");return n.style.display="block",n}const Zm={};function ql(n){n in Zm||(Zm[n]=!0,console.warn(n))}function gw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function vw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _w(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qm=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eg=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wa={[xr]:{transfer:Mc,primaries:wc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[un]:{transfer:mt,primaries:wc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jc]:{transfer:Mc,primaries:Ec,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(eg),fromReference:n=>n.applyMatrix3(Qm)},[hp]:{transfer:mt,primaries:Ec,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(eg),fromReference:n=>n.applyMatrix3(Qm).convertLinearToSRGB()}},yw=new Set([xr,jc]),st={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=wa[e].toReference,r=wa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wa[n].primaries},getTransfer:function(n){return n===tr?Mc:wa[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(wa[e].luminanceCoefficients)}};function Ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class xw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=To("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ws(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ws(t[i]/255)*255):t[i]=Ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sw=0;class $_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Du(r[a].image)):s.push(Du(r[a]))}else s=Du(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Du(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mw=0;class Kt extends ua{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=rr,r=rr,s=ei,a=Or,o=ii,l=zi,c=Kt.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Ii(),this.name="",this.source=new $_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=F_;Kt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,A=(f+1)/2,C=(h+d)/4,b=(u+_)/4,P=(g+m)/4;return y>x&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=b/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ww extends ua{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends ww{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class K_ extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ew extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),C=Math.atan2(A,f*v);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const x=o*v;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nu.copy(this).projectOnVector(e),this.sub(Nu)}reflect(e){return this.sub(Nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nu=new T,tg=new xt;class Kr{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),il.subVectors(this.max,Ea),ns.subVectors(e.a,Ea),is.subVectors(e.b,Ea),rs.subVectors(e.c,Ea),Vi.subVectors(is,ns),Wi.subVectors(rs,is),Mr.subVectors(ns,rs);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Mr.z,Mr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Mr.z,0,-Mr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Mr.y,Mr.x,0];return!Iu(t,ns,is,rs,il)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,ns,is,rs,il))?!1:(rl.crossVectors(Vi,Wi),t=[rl.x,rl.y,rl.z],Iu(t,ns,is,rs,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new T,new T,new T,new T,new T,new T,new T,new T],Yn=new T,nl=new Kr,ns=new T,is=new T,rs=new T,Vi=new T,Wi=new T,Mr=new T,Ea=new T,il=new T,rl=new T,wr=new T;function Iu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),h=i.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tw=new Kr,Ta=new T,Uu=new T;class ha{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Uu)),this.expandByPoint(Ta.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new T,Fu=new T,sl=new T,Xi=new T,ku=new T,al=new T,Ou=new T;class fp{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fu.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Fu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sl),o=Xi.dot(this.direction),l=-Xi.dot(sl),c=Xi.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fu).addScaledVector(sl,d),p}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){ku.subVectors(t,e),al.subVectors(i,e),Ou.crossVectors(ku,al);let a=this.direction.dot(Ou),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(al.crossVectors(Xi,al));if(l<0)return null;const c=o*this.direction.dot(ku.cross(Xi));if(c<0||l+c>a)return null;const h=-o*Xi.dot(Ou);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m)}set(e,t,i,r,s,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bw,e,Cw)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ji.crossVectors(i,bn),ji.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ji.crossVectors(i,bn)),ji.normalize(),ol.crossVectors(bn,ji),r[0]=ji.x,r[4]=ol.x,r[8]=bn.x,r[1]=ji.y,r[5]=ol.y,r[9]=bn.y,r[2]=ji.z,r[6]=ol.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],y=i[7],x=i[11],A=i[15],C=r[0],b=r[4],P=r[8],V=r[12],S=r[1],E=r[5],H=r[9],B=r[13],X=r[2],J=r[6],G=r[10],ee=r[14],N=r[3],K=r[7],Q=r[11],oe=r[15];return s[0]=a*C+o*S+l*X+c*N,s[4]=a*b+o*E+l*J+c*K,s[8]=a*P+o*H+l*G+c*Q,s[12]=a*V+o*B+l*ee+c*oe,s[1]=h*C+u*S+d*X+p*N,s[5]=h*b+u*E+d*J+p*K,s[9]=h*P+u*H+d*G+p*Q,s[13]=h*V+u*B+d*ee+p*oe,s[2]=g*C+_*S+m*X+f*N,s[6]=g*b+_*E+m*J+f*K,s[10]=g*P+_*H+m*G+f*Q,s[14]=g*V+_*B+m*ee+f*oe,s[3]=v*C+y*S+x*X+A*N,s[7]=v*b+y*E+x*J+A*K,s[11]=v*P+y*H+x*G+A*Q,s[15]=v*V+y*B+x*ee+A*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*p-i*l*p)+_*(+t*l*p-t*c*d+s*a*d-r*a*p+r*c*h-s*l*h)+m*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+f*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,x=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,A=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,C=t*v+i*y+r*x+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(_*d*s-u*m*s-_*r*p+i*m*p+u*r*f-i*d*f)*b,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*f+i*l*f)*b,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*p-i*l*p)*b,e[4]=y*b,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*b,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*b,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*p+t*l*p)*b,e[8]=x*b,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*f-t*u*f)*b,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*f+t*o*f)*b,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*b,e[12]=A*b,e[13]=(h*_*r-g*u*r+g*i*d-t*_*d-h*i*m+t*u*m)*b,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*b,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,g=s*u,_=a*h,m=a*u,f=o*u,v=l*c,y=l*h,x=l*u,A=i.x,C=i.y,b=i.z;return r[0]=(1-(_+f))*A,r[1]=(p+x)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+f))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+y)*b,r[9]=(m-v)*b,r[10]=(1-(d+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const a=ss.set(r[4],r[5],r[6]).length(),o=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,h=1/a,u=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Pi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(o===Pi)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Tc)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pi){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,p=(i+r)*h;let g,_;if(o===Pi)g=(a+s)*u,_=-2*u;else if(o===Tc)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new T,qn=new it,bw=new T(0,0,0),Cw=new T(1,1,1),ji=new T,ol=new T,bn=new T,ng=new it,ig=new xt;class Rt{constructor(e=0,t=0,i=0,r=Rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rt.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Aw=0;const rg=new T,as=new xt,Mi=new it,ll=new T,ba=new T,Rw=new T,Pw=new xt,sg=new T(1,0,0),ag=new T(0,1,0),og=new T(0,0,1),lg={type:"added"},Lw={type:"removed"},os={type:"childadded",child:null},zu={type:"childremoved",child:null};class Bt extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new T,t=new Rt,i=new xt,r=new T(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new He}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(ag,e)}rotateZ(e){return this.rotateOnAxis(og,e)}translateOnAxis(e,t){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(ag,e)}translateZ(e){return this.translateOnAxis(og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ll.copy(e):ll.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ba,ll,this.up):Mi.lookAt(ll,ba,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Mi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lw),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Pw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new T(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new T,wi=new T,Bu=new T,Ei=new T,ls=new T,cs=new T,cg=new T,Hu=new T,Gu=new T,Vu=new T,Wu=new ft,Xu=new ft,ju=new ft;class Bn{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),wi.subVectors(i,t),Bu.subVectors(e,t);const a=$n.dot($n),o=$n.dot(wi),l=$n.dot(Bu),c=wi.dot(wi),h=wi.dot(Bu),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Wu.setScalar(0),Xu.setScalar(0),ju.setScalar(0),Wu.fromBufferAttribute(e,t),Xu.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wu,s.x),a.addScaledVector(Xu,s.y),a.addScaledVector(ju,s.z),a}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),wi.subVectors(e,t),$n.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),cs.subVectors(s,i),Hu.subVectors(e,i);const l=ls.dot(Hu),c=cs.dot(Hu);if(l<=0&&c<=0)return t.copy(i);Gu.subVectors(e,r);const h=ls.dot(Gu),u=cs.dot(Gu);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ls,a);Vu.subVectors(e,s);const p=ls.dot(Vu),g=cs.dot(Vu);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(cs,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return cg.subVectors(s,r),o=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(cg,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Yu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ce{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=dp(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Yu(a,s,e+1/3),this.g=Yu(a,s,e),this.b=Yu(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=J_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=Lu(e.r),this.g=Lu(e.g),this.b=Lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return st.fromWorkingColorSpace(tn.copy(this),e),Math.round(kt(tn.r*255,0,255))*65536+Math.round(kt(tn.g*255,0,255))*256+Math.round(kt(tn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=un){st.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,r=tn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(cl);const i=Za(Yi.h,cl.h,t),r=Za(Yi.s,cl.s,t),s=Za(Yi.l,cl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ce;Ce.NAMES=J_;let Dw=0;class Jr extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Gs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dd&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$m&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class da extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new T,ul=new ae;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kd,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kd&&(e.usage=this.usage),e}}class Z_ extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Q_ extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ve extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nw=0;const Fn=new it,qu=new Bt,us=new T,Cn=new Kr,Ca=new Kr,Vt=new T;class It extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?Q_:Z_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(Cn.min,Ca.min),Cn.expandByPoint(Vt),Vt.addVectors(Cn.max,Ca.max),Cn.expandByPoint(Vt)):(Cn.expandByPoint(Ca.min),Cn.expandByPoint(Ca.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Vt.add(us)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new T,l[P]=new T;const c=new T,h=new T,u=new T,d=new ae,p=new ae,g=new ae,_=new T,m=new T;function f(P,V,S){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,V),u.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(E),o[P].add(_),o[V].add(_),o[S].add(_),l[P].add(m),l[V].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,V=v.length;P<V;++P){const S=v[P],E=S.start,H=S.count;for(let B=E,X=E+H;B<X;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new T,x=new T,A=new T,C=new T;function b(P){A.fromBufferAttribute(r,P),C.copy(A);const V=o[P];y.copy(V),y.sub(A.multiplyScalar(A.dot(V))).normalize(),x.crossVectors(C,V);const E=x.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,E)}for(let P=0,V=v.length;P<V;++P){const S=v[P],E=S.start,H=S.count;for(let B=E,X=E+H;B<X;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ug=new it,Er=new fp,hl=new ha,hg=new T,dl=new T,fl=new T,pl=new T,$u=new T,ml=new T,dg=new T,gl=new T;class be extends Bt{constructor(e=new It,t=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&($u.fromBufferAttribute(u,e),a?ml.addScaledVector($u,h):ml.addScaledVector($u.sub(t),h))}t.add(ml)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(hl.containsPoint(Er.origin)===!1&&(Er.intersectSphere(hl,hg)===null||Er.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),Er.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=y;x<A;x+=3){const C=o.getX(x),b=o.getX(x+1),P=o.getX(x+2);r=vl(this,f,e,i,c,h,u,C,b,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);r=vl(this,a,e,i,c,h,u,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,A=y;x<A;x+=3){const C=x,b=x+1,P=x+2;r=vl(this,f,e,i,c,h,u,C,b,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,y=m+1,x=m+2;r=vl(this,a,e,i,c,h,u,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Iw(n,e,t,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gr,o),l===null)return null;gl.copy(o),gl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(gl);return c<t.near||c>t.far?null:{distance:c,point:gl.clone(),object:n}}function vl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,dl),n.getVertexPosition(l,fl),n.getVertexPosition(c,pl);const h=Iw(n,e,t,i,dl,fl,pl,dg);if(h){const u=new T;Bn.getBarycoord(dg,dl,fl,pl,u),r&&(h.uv=Bn.getInterpolatedAttribute(r,o,l,c,u,new ae)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,o,l,c,u,new ae)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};Bn.getNormal(dl,fl,pl,d.normal),h.face=d,h.barycoord=u}return h}class vi extends It{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function g(_,m,f,v,y,x,A,C,b,P,V){const S=x/b,E=A/P,H=x/2,B=A/2,X=C/2,J=b+1,G=P+1;let ee=0,N=0;const K=new T;for(let Q=0;Q<G;Q++){const oe=Q*E-B;for(let Ae=0;Ae<J;Ae++){const Xe=Ae*S-H;K[_]=Xe*v,K[m]=oe*y,K[f]=X,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=C>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ae/b),u.push(1-Q/P),ee+=1}}for(let Q=0;Q<P;Q++)for(let oe=0;oe<b;oe++){const Ae=d+oe+J*Q,Xe=d+oe+J*(Q+1),j=d+(oe+1)+J*(Q+1),ie=d+(oe+1)+J*Q;l.push(Ae,Xe,ie),l.push(Xe,j,ie),N+=6}o.addGroup(p,N,V),p+=N,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=ia(n[t]);for(const r in i)e[r]=i[r]}return e}function Uw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ey(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const bo={clone:ia,merge:ln};var Fw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fw,this.fragmentShader=kw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=Uw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ty extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new T,fg=new ae,pg=new ae;class Rn extends ty{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,fg,pg),t.subVectors(pg,fg)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class Ow extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(hs,ds,e,t);r.layers=this.layers,this.add(r);const s=new Rn(hs,ds,e,t);s.layers=this.layers,this.add(s);const a=new Rn(hs,ds,e,t);a.layers=this.layers,this.add(a);const o=new Rn(hs,ds,e,t);o.layers=this.layers,this.add(o);const l=new Rn(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new Rn(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ny extends Kt{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zw extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ny(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Di});s.uniforms.tEquirect.value=t;const a=new be(r,s),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=ei),new Ow(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ku=new T,Bw=new T,Hw=new He;class Ji{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ku.subVectors(i,t).cross(Bw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hw.getNormalMatrix(e),r=this.coplanarPoint(Ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new ha,_l=new T;class mp{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-f).normalize(),i[1].setComponents(l+s,d+c,m+p,x+f).normalize(),i[2].setComponents(l+a,d+h,m+g,x+v).normalize(),i[3].setComponents(l-a,d-h,m-g,x-v).normalize(),i[4].setComponents(l-o,d-u,m-_,x-y).normalize(),t===Pi)i[5].setComponents(l+o,d+u,m+_,x+y).normalize();else if(t===Tc)i[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iy(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Gw(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ni extends It{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*d-a;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+c*f,x=v+c*(f+1),A=v+1+c*(f+1),C=v+1+c*f;p.push(y,x,C),p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ww=`#ifdef USE_ALPHAHASH
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
#endif`,Xw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$w=`#ifdef USE_AOMAP
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
#endif`,Kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,Zw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n1=`#ifdef USE_IRIDESCENCE
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
#endif`,i1=`#ifdef USE_BUMPMAP
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
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,d1=`#define PI 3.141592653589793
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
} // validated`,f1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p1=`vec3 transformedNormal = objectNormal;
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
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`
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
}`,S1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P1=`#ifdef USE_GRADIENTMAP
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
}`,L1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I1=`uniform bool receiveShadow;
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
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,F1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
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
#endif`,H1=`struct PhysicalMaterial {
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
}`,G1=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z1=`#if defined( USE_POINTS_UV )
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
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
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
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hE=`#ifdef USE_NORMALMAP
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
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
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
}`,$E=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KE=`#define DISTANCE
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
}`,JE=`#define DISTANCE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 diffuse;
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
}`,rT=`#define LAMBERT
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
}`,sT=`#define LAMBERT
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
}`,aT=`#define MATCAP
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
}`,oT=`#define MATCAP
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
}`,lT=`#define NORMAL
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
}`,cT=`#define NORMAL
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
}`,uT=`#define PHONG
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
}`,hT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,pT=`#define TOON
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
}`,mT=`#define TOON
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
}`,gT=`uniform float size;
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
}`,vT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,yT=`uniform vec3 color;
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
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ST=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Vw,alphahash_pars_fragment:Ww,alphamap_fragment:Xw,alphamap_pars_fragment:jw,alphatest_fragment:Yw,alphatest_pars_fragment:qw,aomap_fragment:$w,aomap_pars_fragment:Kw,batching_pars_vertex:Jw,batching_vertex:Zw,begin_vertex:Qw,beginnormal_vertex:e1,bsdfs:t1,iridescence_fragment:n1,bumpmap_pars_fragment:i1,clipping_planes_fragment:r1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:o1,color_fragment:l1,color_pars_fragment:c1,color_pars_vertex:u1,color_vertex:h1,common:d1,cube_uv_reflection_fragment:f1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:v1,emissivemap_pars_fragment:_1,colorspace_fragment:y1,colorspace_pars_fragment:x1,envmap_fragment:S1,envmap_common_pars_fragment:M1,envmap_pars_fragment:w1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:U1,envmap_vertex:T1,fog_vertex:b1,fog_pars_vertex:C1,fog_fragment:A1,fog_pars_fragment:R1,gradientmap_pars_fragment:P1,lightmap_pars_fragment:L1,lights_lambert_fragment:D1,lights_lambert_pars_fragment:N1,lights_pars_begin:I1,lights_toon_fragment:F1,lights_toon_pars_fragment:k1,lights_phong_fragment:O1,lights_phong_pars_fragment:z1,lights_physical_fragment:B1,lights_physical_pars_fragment:H1,lights_fragment_begin:G1,lights_fragment_maps:V1,lights_fragment_end:W1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:q1,map_fragment:$1,map_pars_fragment:K1,map_particle_fragment:J1,map_particle_pars_fragment:Z1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:eE,morphinstance_vertex:tE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:rE,morphtarget_vertex:sE,normal_fragment_begin:aE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:hE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:vE,premultiplied_alpha_fragment:_E,project_vertex:yE,dithering_fragment:xE,dithering_pars_fragment:SE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:TE,shadowmap_vertex:bE,shadowmask_pars_fragment:CE,skinbase_vertex:AE,skinning_pars_vertex:RE,skinning_vertex:PE,skinnormal_vertex:LE,specularmap_fragment:DE,specularmap_pars_fragment:NE,tonemapping_fragment:IE,tonemapping_pars_fragment:UE,transmission_fragment:FE,transmission_pars_fragment:kE,uv_pars_fragment:OE,uv_pars_vertex:zE,uv_vertex:BE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:WE,backgroundCube_frag:XE,cube_vert:jE,cube_frag:YE,depth_vert:qE,depth_frag:$E,distanceRGBA_vert:KE,distanceRGBA_frag:JE,equirect_vert:ZE,equirect_frag:QE,linedashed_vert:eT,linedashed_frag:tT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:rT,meshlambert_frag:sT,meshmatcap_vert:aT,meshmatcap_frag:oT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:uT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:fT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:vT,shadow_vert:_T,shadow_frag:yT,sprite_vert:xT,sprite_frag:ST},le={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},hi={basic:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ln([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ln([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ln([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ln([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ln([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ln([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ln([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ln([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ln([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ln([le.lights,le.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const yl={r:0,b:0,g:0},br=new Rt,MT=new it;function wT(n,e,t,i,r,s,a){const o=new Ce(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?f(o,l):x&&x.isColor&&(f(x,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Xc)?(h===void 0&&(h=new be(new vi(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:ia(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),br.copy(y.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(MT.makeRotationFromEuler(br)),h.material.toneMapped=st.getTransfer(x.colorSpace)!==mt,(u!==x||d!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new be(new ni(2,2),new zt({name:"BackgroundMaterial",uniforms:ia(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,y){v.getRGB(yl,ey(n)),i.buffers.color.setClear(yl.r,yl.g,yl.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:_,addToRenderList:m}}function ET(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,E,H,B,X){let J=!1;const G=u(B,H,E);s!==G&&(s=G,c(s.object)),J=p(S,B,H,X),J&&g(S,B,H,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(S,E,H,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,E,H){const B=H.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let J=X[E.id];J===void 0&&(J={},X[E.id]=J);let G=J[B];return G===void 0&&(G=d(l()),J[B]=G),G}function d(S){const E=[],H=[],B=[];for(let X=0;X<t;X++)E[X]=0,H[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,E,H,B){const X=s.attributes,J=E.attributes;let G=0;const ee=H.getAttributes();for(const N in ee)if(ee[N].location>=0){const Q=X[N];let oe=J[N];if(oe===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(S,E,H,B){const X={},J=E.attributes;let G=0;const ee=H.getAttributes();for(const N in ee)if(ee[N].location>=0){let Q=J[N];Q===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),X[N]=oe,G++}s.attributes=X,s.attributesNum=G,s.index=B}function _(){const S=s.newAttributes;for(let E=0,H=S.length;E<H;E++)S[E]=0}function m(S){f(S,0)}function f(S,E){const H=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;H[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),X[S]!==E&&(n.vertexAttribDivisor(S,E),X[S]=E)}function v(){const S=s.newAttributes,E=s.enabledAttributes;for(let H=0,B=E.length;H<B;H++)E[H]!==S[H]&&(n.disableVertexAttribArray(H),E[H]=0)}function y(S,E,H,B,X,J,G){G===!0?n.vertexAttribIPointer(S,E,H,X,J):n.vertexAttribPointer(S,E,H,B,X,J)}function x(S,E,H,B){_();const X=B.attributes,J=H.getAttributes(),G=E.defaultAttributeValues;for(const ee in J){const N=J[ee];if(N.location>=0){let K=X[ee];if(K===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Q=K.normalized,oe=K.itemSize,Ae=e.get(K);if(Ae===void 0)continue;const Xe=Ae.buffer,j=Ae.type,ie=Ae.bytesPerElement,fe=j===n.INT||j===n.UNSIGNED_INT||K.gpuType===rp;if(K.isInterleavedBufferAttribute){const ue=K.data,Oe=ue.stride,De=K.offset;if(ue.isInstancedInterleavedBuffer){for(let Je=0;Je<N.locationSize;Je++)f(N.location+Je,ue.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Je=0;Je<N.locationSize;Je++)m(N.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let Je=0;Je<N.locationSize;Je++)y(N.location+Je,oe/N.locationSize,j,Q,Oe*ie,(De+oe/N.locationSize*Je)*ie,fe)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<N.locationSize;ue++)f(N.location+ue,K.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<N.locationSize;ue++)m(N.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let ue=0;ue<N.locationSize;ue++)y(N.location+ue,oe/N.locationSize,j,Q,oe*ie,oe/N.locationSize*ue*ie,fe)}}else if(G!==void 0){const Q=G[ee];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(N.location,Q);break;case 3:n.vertexAttrib3fv(N.location,Q);break;case 4:n.vertexAttrib4fv(N.location,Q);break;default:n.vertexAttrib1fv(N.location,Q)}}}}v()}function A(){P();for(const S in i){const E=i[S];for(const H in E){const B=E[H];for(const X in B)h(B[X].object),delete B[X];delete E[H]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const H in E){const B=E[H];for(const X in B)h(B[X].object),delete B[X];delete E[H]}delete i[S.id]}function b(S){for(const E in i){const H=i[E];if(H[S.id]===void 0)continue;const B=H[S.id];for(const X in B)h(B[X].object),delete B[X];delete H[S.id]}}function P(){V(),a=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function TT(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==ii&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==zi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==fi&&!P)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function CT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ji,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,y=v*4;let x=f.clippingState||null;l.value=x,x=h(g,d,y,p);for(let A=0;A!==y;++A)x[A]=t[A];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function AT(n){let e=new WeakMap;function t(a,o){return o===Sd?a.mapping=Qs:o===Md&&(a.mapping=ea),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sd||o===Md)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zw(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gp extends ty{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,mg=[.125,.215,.35,.446,.526,.582],Ir=20,Ju=new gp,gg=new Ce;let Zu=null,Qu=0,eh=0,th=!1;const Lr=(1+Math.sqrt(5))/2,fs=1/Lr,vg=[new T(-Lr,fs,0),new T(Lr,fs,0),new T(-fs,0,Lr),new T(fs,0,Lr),new T(0,Lr,-fs),new T(0,Lr,fs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Qu,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Ni,format:ii,colorSpace:xr,depthBuffer:!1},r=_g(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(s)),this._blurMaterial=PT(s,e,t)}return r}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Ju)}_sceneToCubeUV(e,t,i,r){const o=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gg),h.toneMapping=fr,h.autoClear=!1;const p=new da({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new be(new vi,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(gg),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;xl(r,v*y,f>2?y:0,y,y),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qs||e.mapping===ea;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ju)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vg[(r-s-1)%vg.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const f=[];let v=0;for(let b=0;b<Ir;++b){const P=b/_,V=Math.exp(-P*P/2);f.push(V),b===0?v+=V:b<m&&(v+=2*V)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[r],A=3*x*(r>y-Us?r-y+Us:0),C=4*(this._cubeSize-x);xl(t,A,C,3*x,2*x),l.setRenderTarget(t),l.render(u,Ju)}}function RT(n){const e=[],t=[],i=[];let r=n;const s=n-Us+1+mg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Us?l=mg[a-n+Us-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,P=C>2?0:-1,V=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(V,_*g*C),y.set(d,m*g*C);const S=[C,C,C,C,C,C];x.set(S,f*g*C)}const A=new It;A.setAttribute("position",new rn(v,_)),A.setAttribute("uv",new rn(y,m)),A.setAttribute("faceIndex",new rn(x,f)),e.push(A),r>Us&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _g(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function PT(n,e,t){const i=new Float32Array(Ir),r=new T(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vp(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function yg(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vp(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function xg(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function vp(){return`

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
	`}function LT(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sd||l===Md,h=l===Qs||l===ea;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jd(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Jd(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function DT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ql("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NT(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const A=v[y+0],C=v[y+1],b=v[y+2];d.push(A,C,C,b,b,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const A=y+0,C=y+1,b=y+2;d.push(A,C,C,b,b,A)}}else return;const m=new(q_(d)?Q_:Z_)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function IT(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v];for(let v=0;v<_.length;v++)t.update(f,i,_[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function UT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FT(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const b=new Float32Array(A*C*4*u),P=new K_(b,A,C,u);P.type=fi,P.needsUpdate=!0;const V=x*4;for(let E=0;E<u;E++){const H=f[E],B=v[E],X=y[E],J=A*C*4*E;for(let G=0;G<H.count;G++){const ee=G*V;g===!0&&(r.fromBufferAttribute(H,G),b[J+ee+0]=r.x,b[J+ee+1]=r.y,b[J+ee+2]=r.z,b[J+ee+3]=0),_===!0&&(r.fromBufferAttribute(B,G),b[J+ee+4]=r.x,b[J+ee+5]=r.y,b[J+ee+6]=r.z,b[J+ee+7]=0),m===!0&&(r.fromBufferAttribute(X,G),b[J+ee+8]=r.x,b[J+ee+9]=r.y,b[J+ee+10]=r.z,b[J+ee+11]=X.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new ae(A,C)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function kT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ry extends Kt{constructor(e,t,i,r,s,a,o,l,c,h=Vs){if(h!==Vs&&h!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vs&&(i=jr),i===void 0&&h===na&&(i=ta),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sy=new Kt,Sg=new ry(1,1),ay=new K_,oy=new Ew,ly=new ny,Mg=[],wg=[],Eg=new Float32Array(16),Tg=new Float32Array(9),bg=new Float32Array(4);function fa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mg[r];if(s===void 0&&(s=new Float32Array(r),Mg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Yc(n,e){let t=wg[e];t===void 0&&(t=new Int32Array(e),wg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function HT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function GT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;bg.set(i),n.uniformMatrix2fv(this.addr,!1,bg),Gt(t,i)}}function VT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Tg.set(i),n.uniformMatrix3fv(this.addr,!1,Tg),Gt(t,i)}}function WT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Eg.set(i),n.uniformMatrix4fv(this.addr,!1,Eg),Gt(t,i)}}function XT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function YT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function qT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function $T(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function KT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function JT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function ZT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function QT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Sg.compareFunction=Y_,s=Sg):s=sy,t.setTexture2D(e||s,r)}function eb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||oy,r)}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ly,r)}function nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ay,r)}function ib(n){switch(n){case 5126:return OT;case 35664:return zT;case 35665:return BT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return jT;case 35668:case 35672:return YT;case 35669:case 35673:return qT;case 5125:return $T;case 36294:return KT;case 36295:return JT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(n,e){n.uniform1fv(this.addr,e)}function sb(n,e){const t=fa(e,this.size,2);n.uniform2fv(this.addr,t)}function ab(n,e){const t=fa(e,this.size,3);n.uniform3fv(this.addr,t)}function ob(n,e){const t=fa(e,this.size,4);n.uniform4fv(this.addr,t)}function lb(n,e){const t=fa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cb(n,e){const t=fa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ub(n,e){const t=fa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hb(n,e){n.uniform1iv(this.addr,e)}function db(n,e){n.uniform2iv(this.addr,e)}function fb(n,e){n.uniform3iv(this.addr,e)}function pb(n,e){n.uniform4iv(this.addr,e)}function mb(n,e){n.uniform1uiv(this.addr,e)}function gb(n,e){n.uniform2uiv(this.addr,e)}function vb(n,e){n.uniform3uiv(this.addr,e)}function _b(n,e){n.uniform4uiv(this.addr,e)}function yb(n,e,t){const i=this.cache,r=e.length,s=Yc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||sy,s[a])}function xb(n,e,t){const i=this.cache,r=e.length,s=Yc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||oy,s[a])}function Sb(n,e,t){const i=this.cache,r=e.length,s=Yc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ly,s[a])}function Mb(n,e,t){const i=this.cache,r=e.length,s=Yc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ay,s[a])}function wb(n){switch(n){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}class Eb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wb(t.type)}}class bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function Cg(n,e){n.seq.push(e),n.map[e.id]=e}function Cb(n,e,t){const i=n.name,r=i.length;for(nh.lastIndex=0;;){const s=nh.exec(i),a=nh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Cg(t,c===void 0?new Eb(o,n,e):new Tb(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new bb(o),Cg(t,u)),t=u}}}class $l{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Cb(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ag(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ab=37297;let Rb=0;function Pb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Lb(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===Ec&&t===wc?i="LinearDisplayP3ToLinearSRGB":e===wc&&t===Ec&&(i="LinearSRGBToLinearDisplayP3"),n){case xr:case jc:return[i,"LinearTransferOETF"];case un:case hp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Pb(n.getShaderSource(e),a)}else return r}function Db(n,e){const t=Lb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nb(n,e){let t;switch(e){case L_:t="Linear";break;case D_:t="Reinhard";break;case N_:t="Cineon";break;case ip:t="ACESFilmic";break;case I_:t="AgX";break;case U_:t="Neutral";break;case BM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sl=new T;function Ib(){st.getLuminanceCoefficients(Sl);const n=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function Fb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ha(n){return n!==""}function Pg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(n){return n.replace(Ob,Bb)}const zb=new Map;function Bb(n,e){let t=Be[e];if(t===void 0){const i=zb.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(t)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(n){return n.replace(Hb,Gb)}function Gb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ng(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Wb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case ea:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ea:e="ENVMAP_MODE_REFRACTION";break}return e}function jb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case OM:e="ENVMAP_BLENDING_MIX";break;case zM:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vb(t),c=Wb(t),h=Xb(t),u=jb(t),d=Yb(t),p=Ub(t),g=Fb(s),_=r.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ha).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ha).join(`
`),f.length>0&&(f+=`
`)):(m=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),f=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?Be.tonemapping_pars_fragment:"",t.toneMapping!==fr?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Db("linearToOutputTexel",t.outputColorSpace),Ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),a=Zd(a),a=Pg(a,t),a=Lg(a,t),o=Zd(o),o=Pg(o,t),o=Lg(o,t),a=Dg(a),o=Dg(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+a,x=v+f+o,A=Ag(r,r.VERTEX_SHADER,y),C=Ag(r,r.FRAGMENT_SHADER,x);r.attachShader(_,A),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(E){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(A).trim(),X=r.getShaderInfoLog(C).trim();let J=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,C);else{const ee=Rg(r,A,"vertex"),N=Rg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+ee+`
`+N)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||X==="")&&(G=!1);G&&(E.diagnostics={runnable:J,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:f}})}r.deleteShader(A),r.deleteShader(C),P=new $l(r,_),V=kb(r,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let V;this.getAttributes=function(){return V===void 0&&b(this),V};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Ab)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let $b=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jb(e),t.set(e,i)),i}}class Jb{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function Zb(n,e,t,i,r,s,a){const o=new pp,l=new Kb,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,E,H,B,X){const J=B.fog,G=X.geometry,ee=S.isMeshStandardMaterial?B.environment:null,N=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),K=N&&N.mapping===Xc?N.image.height:null,Q=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ae=oe!==void 0?oe.length:0;let Xe=0;G.morphAttributes.position!==void 0&&(Xe=1),G.morphAttributes.normal!==void 0&&(Xe=2),G.morphAttributes.color!==void 0&&(Xe=3);let j,ie,fe,ue;if(Q){const gn=hi[Q];j=gn.vertexShader,ie=gn.fragmentShader}else j=S.vertexShader,ie=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const Oe=n.getRenderTarget(),De=X.isInstancedMesh===!0,Je=X.isBatchedMesh===!0,dt=!!S.map,Ze=!!S.matcap,D=!!N,wn=!!S.aoMap,je=!!S.lightMap,tt=!!S.bumpMap,Ie=!!S.normalMap,vt=!!S.displacementMap,ke=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,k=S.anisotropy>0,$=S.clearcoat>0,te=S.dispersion>0,q=S.iridescence>0,we=S.sheen>0,ce=S.transmission>0,ve=k&&!!S.anisotropyMap,nt=$&&!!S.clearcoatMap,re=$&&!!S.clearcoatNormalMap,_e=$&&!!S.clearcoatRoughnessMap,Ue=q&&!!S.iridescenceMap,Fe=q&&!!S.iridescenceThicknessMap,ye=we&&!!S.sheenColorMap,Ye=we&&!!S.sheenRoughnessMap,ze=!!S.specularMap,pt=!!S.specularColorMap,I=!!S.specularIntensityMap,pe=ce&&!!S.transmissionMap,W=ce&&!!S.thicknessMap,Z=!!S.gradientMap,he=!!S.alphaMap,me=S.alphaTest>0,Qe=!!S.alphaHash,Lt=!!S.extensions;let mn=fr;S.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(mn=n.toneMapping);const rt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:ie,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Je,batchingColor:Je&&X._colorsTexture!==null,instancing:De,instancingColor:De&&X.instanceColor!==null,instancingMorph:De&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:xr,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:Ze,envMap:D,envMapMode:D&&N.mapping,envMapCubeUVHeight:K,aoMap:wn,lightMap:je,bumpMap:tt,normalMap:Ie,displacementMap:p&&vt,emissiveMap:ke,normalMapObjectSpace:Ie&&S.normalMapType===WM,normalMapTangentSpace:Ie&&S.normalMapType===j_,metalnessMap:R,roughnessMap:M,anisotropy:k,anisotropyMap:ve,clearcoat:$,clearcoatMap:nt,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:te,iridescence:q,iridescenceMap:Ue,iridescenceThicknessMap:Fe,sheen:we,sheenColorMap:ye,sheenRoughnessMap:Ye,specularMap:ze,specularColorMap:pt,specularIntensityMap:I,transmission:ce,transmissionMap:pe,thicknessMap:W,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:me,alphaHash:Qe,combine:S.combine,mapUv:dt&&m(S.map.channel),aoMapUv:wn&&m(S.aoMap.channel),lightMapUv:je&&m(S.lightMap.channel),bumpMapUv:tt&&m(S.bumpMap.channel),normalMapUv:Ie&&m(S.normalMap.channel),displacementMapUv:vt&&m(S.displacementMap.channel),emissiveMapUv:ke&&m(S.emissiveMap.channel),metalnessMapUv:R&&m(S.metalnessMap.channel),roughnessMapUv:M&&m(S.roughnessMap.channel),anisotropyMapUv:ve&&m(S.anisotropyMap.channel),clearcoatMapUv:nt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(S.sheenRoughnessMap.channel),specularMapUv:ze&&m(S.specularMap.channel),specularColorMapUv:pt&&m(S.specularColorMap.channel),specularIntensityMapUv:I&&m(S.specularIntensityMap.channel),transmissionMapUv:pe&&m(S.transmissionMap.channel),thicknessMapUv:W&&m(S.thicknessMap.channel),alphaMapUv:he&&m(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ie||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(dt||he),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:mn,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function v(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)E.push(H),E.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(y(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),S.push(o.mask)}function A(S){const E=_[S.type];let H;if(E){const B=hi[E];H=bo.clone(B.uniforms)}else H=S.uniforms;return H}function C(S,E){let H;for(let B=0,X=h.length;B<X;B++){const J=h[B];if(J.cacheKey===E){H=J,++H.usedTimes;break}}return H===void 0&&(H=new qb(n,E,S,s),h.push(H)),H}function b(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function V(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:A,acquireProgram:C,releaseProgram:b,releaseShaderCache:P,programs:h,dispose:V}}function Qb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function e2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ig(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ug(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||e2),i.length>1&&i.sort(d||Ig),r.length>1&&r.sort(d||Ig)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function t2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ug,n.set(i,[a])):r>=s.length?(a=new Ug,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function n2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Ce};break;case"SpotLight":t={position:new T,direction:new T,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function i2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let r2=0;function s2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a2(n){const e=new n2,t=i2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);const r=new T,s=new it,a=new it;function o(c){let h=0,u=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,y=0,x=0,A=0,C=0,b=0;c.sort(s2);for(let V=0,S=c.length;V<S;V++){const E=c[V],H=E.color,B=E.intensity,X=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=H.r*B,u+=H.g*B,d+=H.b*B;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],B);b++}else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,N=t.get(E);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=G,p++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(H).multiplyScalar(B),G.distance=X,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[_]=G;const ee=E.shadow;if(E.map&&(i.spotLightMap[A]=E.map,A++,ee.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[_]=ee.matrix,E.castShadow){const N=t.get(E);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=J,x++}_++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(H).multiplyScalar(B),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const ee=E.shadow,N=t.get(E);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,N.shadowCameraNear=ee.camera.near,N.shadowCameraFar=ee.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=E.shadow.matrix,y++}i.point[g]=G,g++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(B),G.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==A||P.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=A,P.numLightProbes=b,i.version=r2++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Fg(n){const e=new a2(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function o2(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fg(n),e.set(r,[o])):s>=a.length?(o=new Fg(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class l2 extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c2 extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const u2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h2=`uniform sampler2D shadow_pass;
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
}`;function d2(n,e,t){let i=new mp;const r=new ae,s=new ae,a=new ft,o=new l2({depthPacking:VM}),l=new c2,c={},h=t.maxTextureSize,u={[gr]:dn,[dn]:gr,[qt]:qt},d=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:u2,fragmentShader:h2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let f=this.type;this.render=function(C,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const V=n.getRenderTarget(),S=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=f!==Ti&&this.type===Ti,X=f===Ti&&this.type!==Ti;for(let J=0,G=C.length;J<G;J++){const ee=C[J],N=ee.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||B===!0||X===!0){const oe=this.type!==Ti?{minFilter:yn,magFilter:yn}:{};N.map!==null&&N.map.dispose(),N.map=new oi(r.x,r.y,oe),N.map.texture.name=ee.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const Q=N.getViewportCount();for(let oe=0;oe<Q;oe++){const Ae=N.getViewport(oe);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),H.viewport(a),N.updateMatrices(ee,oe),i=N.getFrustum(),x(b,P,N.camera,ee,this.type)}N.isPointLightShadow!==!0&&this.type===Ti&&v(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(V,S,E)};function v(C,b){const P=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(b,null,P,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(b,null,P,p,_,null)}function y(C,b,P,V){let S=null;const E=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)S=E;else if(S=P.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=S.uuid,B=b.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let J=X[B];J===void 0&&(J=S.clone(),X[B]=J,b.addEventListener("dispose",A)),S=J}if(S.visible=b.visible,S.wireframe=b.wireframe,V===Ti?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=P}return S}function x(C,b,P,V,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const B=e.update(C),X=C.material;if(Array.isArray(X)){const J=B.groups;for(let G=0,ee=J.length;G<ee;G++){const N=J[G],K=X[N.materialIndex];if(K&&K.visible){const Q=y(C,K,V,S);C.onBeforeShadow(n,C,b,P,B,Q,N),n.renderBufferDirect(P,null,B,Q,C,N),C.onAfterShadow(n,C,b,P,B,Q,N)}}}else if(X.visible){const J=y(C,X,V,S);C.onBeforeShadow(n,C,b,P,B,J,null),n.renderBufferDirect(P,null,B,J,C,null),C.onAfterShadow(n,C,b,P,B,J,null)}}const H=C.children;for(let B=0,X=H.length;B<X;B++)x(H[B],b,P,V,S)}function A(C){C.target.removeEventListener("dispose",A);for(const P in c){const V=c[P],S=C.target.uuid;S in V&&(V[S].dispose(),delete V[S])}}}const f2={[pd]:md,[gd]:yd,[vd]:xd,[Zs]:_d,[md]:pd,[yd]:gd,[xd]:vd,[_d]:Zs};function p2(n){function e(){let I=!1;const pe=new ft;let W=null;const Z=new ft(0,0,0,0);return{setMask:function(he){W!==he&&!I&&(n.colorMask(he,he,he,he),W=he)},setLocked:function(he){I=he},setClear:function(he,me,Qe,Lt,mn){mn===!0&&(he*=Lt,me*=Lt,Qe*=Lt),pe.set(he,me,Qe,Lt),Z.equals(pe)===!1&&(n.clearColor(he,me,Qe,Lt),Z.copy(pe))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function t(){let I=!1,pe=!1,W=null,Z=null,he=null;return{setReversed:function(me){pe=me},setTest:function(me){me?fe(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(me){W!==me&&!I&&(n.depthMask(me),W=me)},setFunc:function(me){if(pe&&(me=f2[me]),Z!==me){switch(me){case pd:n.depthFunc(n.NEVER);break;case md:n.depthFunc(n.ALWAYS);break;case gd:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case vd:n.depthFunc(n.EQUAL);break;case _d:n.depthFunc(n.GEQUAL);break;case yd:n.depthFunc(n.GREATER);break;case xd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=me}},setLocked:function(me){I=me},setClear:function(me){he!==me&&(n.clearDepth(me),he=me)},reset:function(){I=!1,W=null,Z=null,he=null}}}function i(){let I=!1,pe=null,W=null,Z=null,he=null,me=null,Qe=null,Lt=null,mn=null;return{setTest:function(rt){I||(rt?fe(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!I&&(n.stencilMask(rt),pe=rt)},setFunc:function(rt,gn,yi){(W!==rt||Z!==gn||he!==yi)&&(n.stencilFunc(rt,gn,yi),W=rt,Z=gn,he=yi)},setOp:function(rt,gn,yi){(me!==rt||Qe!==gn||Lt!==yi)&&(n.stencilOp(rt,gn,yi),me=rt,Qe=gn,Lt=yi)},setLocked:function(rt){I=rt},setClear:function(rt){mn!==rt&&(n.clearStencil(rt),mn=rt)},reset:function(){I=!1,pe=null,W=null,Z=null,he=null,me=null,Qe=null,Lt=null,mn=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,v=null,y=null,x=null,A=null,C=new Ce(0,0,0),b=0,P=!1,V=null,S=null,E=null,H=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),J=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),J=G>=2);let N=null,K={};const Q=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Ae=new ft().fromArray(Q),Xe=new ft().fromArray(oe);function j(I,pe,W,Z){const he=new Uint8Array(4),me=n.createTexture();n.bindTexture(I,me),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<W;Qe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(pe+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return me}const ie={};ie[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),s.setFunc(Zs),je(!1),tt(jm),fe(n.CULL_FACE),D(Di);function fe(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function ue(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Oe(I,pe){return h[I]!==pe?(n.bindFramebuffer(I,pe),h[I]=pe,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function De(I,pe){let W=d,Z=!1;if(I){W=u.get(pe),W===void 0&&(W=[],u.set(pe,W));const he=I.textures;if(W.length!==he.length||W[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Qe=he.length;me<Qe;me++)W[me]=n.COLOR_ATTACHMENT0+me;W.length=he.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function Je(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const dt={[Nr]:n.FUNC_ADD,[SM]:n.FUNC_SUBTRACT,[MM]:n.FUNC_REVERSE_SUBTRACT};dt[wM]=n.MIN,dt[EM]=n.MAX;const Ze={[TM]:n.ZERO,[bM]:n.ONE,[CM]:n.SRC_COLOR,[dd]:n.SRC_ALPHA,[NM]:n.SRC_ALPHA_SATURATE,[LM]:n.DST_COLOR,[RM]:n.DST_ALPHA,[AM]:n.ONE_MINUS_SRC_COLOR,[fd]:n.ONE_MINUS_SRC_ALPHA,[DM]:n.ONE_MINUS_DST_COLOR,[PM]:n.ONE_MINUS_DST_ALPHA,[IM]:n.CONSTANT_COLOR,[UM]:n.ONE_MINUS_CONSTANT_COLOR,[FM]:n.CONSTANT_ALPHA,[kM]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,pe,W,Z,he,me,Qe,Lt,mn,rt){if(I===Di){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(fe(n.BLEND),g=!0),I!==xM){if(I!==_||rt!==P){if((m!==Nr||y!==Nr)&&(n.blendEquation(n.FUNC_ADD),m=Nr,y=Nr),rt)switch(I){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.ONE,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case So:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,v=null,x=null,A=null,C.set(0,0,0),b=0,_=I,P=rt}return}he=he||pe,me=me||W,Qe=Qe||Z,(pe!==m||he!==y)&&(n.blendEquationSeparate(dt[pe],dt[he]),m=pe,y=he),(W!==f||Z!==v||me!==x||Qe!==A)&&(n.blendFuncSeparate(Ze[W],Ze[Z],Ze[me],Ze[Qe]),f=W,v=Z,x=me,A=Qe),(Lt.equals(C)===!1||mn!==b)&&(n.blendColor(Lt.r,Lt.g,Lt.b,mn),C.copy(Lt),b=mn),_=I,P=!1}function wn(I,pe){I.side===qt?ue(n.CULL_FACE):fe(n.CULL_FACE);let W=I.side===dn;pe&&(W=!W),je(W),I.blending===Gs&&I.transparent===!1?D(Di):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){V!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),V=I)}function tt(I){I!==vM?(fe(n.CULL_FACE),I!==S&&(I===jm?n.cullFace(n.BACK):I===_M?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),S=I}function Ie(I){I!==E&&(J&&n.lineWidth(I),E=I)}function vt(I,pe,W){I?(fe(n.POLYGON_OFFSET_FILL),(H!==pe||B!==W)&&(n.polygonOffset(pe,W),H=pe,B=W)):ue(n.POLYGON_OFFSET_FILL)}function ke(I){I?fe(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function R(I){I===void 0&&(I=n.TEXTURE0+X-1),N!==I&&(n.activeTexture(I),N=I)}function M(I,pe,W){W===void 0&&(N===null?W=n.TEXTURE0+X-1:W=N);let Z=K[W];Z===void 0&&(Z={type:void 0,texture:void 0},K[W]=Z),(Z.type!==I||Z.texture!==pe)&&(N!==W&&(n.activeTexture(W),N=W),n.bindTexture(I,pe||ie[I]),Z.type=I,Z.texture=pe)}function k(){const I=K[N];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){Ae.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ae.copy(I))}function ye(I){Xe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Xe.copy(I))}function Ye(I,pe){let W=l.get(pe);W===void 0&&(W=new WeakMap,l.set(pe,W));let Z=W.get(I);Z===void 0&&(Z=n.getUniformBlockIndex(pe,I.name),W.set(I,Z))}function ze(I,pe){const Z=l.get(pe).get(I);o.get(pe)!==Z&&(n.uniformBlockBinding(pe,Z,I.__bindingPointIndex),o.set(pe,Z))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,K={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,v=null,y=null,x=null,A=null,C=new Ce(0,0,0),b=0,P=!1,V=null,S=null,E=null,H=null,B=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:ue,bindFramebuffer:Oe,drawBuffers:De,useProgram:Je,setBlending:D,setMaterial:wn,setFlipSided:je,setCullFace:tt,setLineWidth:Ie,setPolygonOffset:vt,setScissorTest:ke,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:_e,texImage3D:Ue,updateUBOMapping:Ye,uniformBlockBinding:ze,texStorage2D:nt,texStorage3D:re,texSubImage2D:q,texSubImage3D:we,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Fe,viewport:ye,reset:pt}}function kg(n,e,t,i){const r=m2(i);switch(t){case B_:return n*e;case G_:return n*e;case V_:return n*e*2;case op:return n*e/r.components*r.byteLength;case lp:return n*e/r.components*r.byteLength;case W_:return n*e*2/r.components*r.byteLength;case cp:return n*e*2/r.components*r.byteLength;case H_:return n*e*3/r.components*r.byteLength;case ii:return n*e*4/r.components*r.byteLength;case up:return n*e*4/r.components*r.byteLength;case Vl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xl:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Td:case Cd:return Math.max(n,16)*Math.max(e,8)/4;case Ed:case bd:return Math.max(n,8)*Math.max(e,8)/2;case Ad:case Rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Xd:case jd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case X_:case Yd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case qd:case $d:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m2(n){switch(n){case zi:case k_:return{byteLength:1,components:1};case wo:case O_:case Ni:return{byteLength:2,components:1};case sp:case ap:return{byteLength:2,components:4};case jr:case rp:case fi:return{byteLength:4,components:1};case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function g2(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):To("canvas")}function _(R,M,k){let $=1;const te=ke(R);if((te.width>k||te.height>k)&&($=k/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*te.width),we=Math.floor($*te.height);u===void 0&&(u=g(q,we));const ce=M?g(q,we):u;return ce.width=q,ce.height=we,ce.getContext("2d").drawImage(R,0,0,q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+we+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==yn&&R.minFilter!==ei}function f(R){n.generateMipmap(R)}function v(R,M,k,$,te=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),M===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const we=te?Mc:st.getTransfer($);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=we===mt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(R,M){let k;return R?M===null||M===jr||M===ta?k=n.DEPTH24_STENCIL8:M===fi?k=n.DEPTH32F_STENCIL8:M===wo&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===ta?k=n.DEPTH_COMPONENT24:M===fi?k=n.DEPTH_COMPONENT32F:M===wo&&(k=n.DEPTH_COMPONENT16),k}function x(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&h.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),V(M)}function b(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,$=d.get(k);if($){const te=$[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(R),Object.keys($).length===0&&d.delete(k)}i.remove(R)}function P(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const k=R.source,$=d.get(k);delete $[M.__cacheKey],a.memory.textures--}function V(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let te=0;te<M.__webglFramebuffer[$].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[$][te]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,te=k.length;$<te;$++){const q=i.get(k[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(R)}let S=0;function E(){S=0}function H(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const k=i.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(k,R,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function J(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Xe(k,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function G(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Xe(k,R,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function ee(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const N={[Mo]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[wd]:n.MIRRORED_REPEAT},K={[yn]:n.NEAREST,[HM]:n.NEAREST_MIPMAP_NEAREST,[tl]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[Ru]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},Q={[XM]:n.NEVER,[JM]:n.ALWAYS,[jM]:n.LESS,[Y_]:n.LEQUAL,[YM]:n.EQUAL,[KM]:n.GEQUAL,[qM]:n.GREATER,[$M]:n.NOTEQUAL};function oe(R,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===Ru||M.magFilter===tl||M.magFilter===Or||M.minFilter===ei||M.minFilter===Ru||M.minFilter===tl||M.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,N[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,N[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,N[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==tl&&M.minFilter!==Or||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const q=B(M);if(q!==R.__cacheKey){te[q]===void 0&&(te[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[q].usedTimes++;const we=te[R.__cacheKey];we!==void 0&&(te[R.__cacheKey].usedTimes--,we.usedTimes===0&&P(M)),R.__cacheKey=q,R.__webglTexture=te[q].texture}return k}function Xe(R,M,k){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);const te=Ae(R,M),q=M.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+k);const we=i.get(q);if(q.version!==we.__version||te===!0){t.activeTexture(n.TEXTURE0+k);const ce=st.getPrimaries(st.workingColorSpace),ve=M.colorSpace===tr?null:st.getPrimaries(M.colorSpace),nt=M.colorSpace===tr||ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let re=_(M.image,!1,r.maxTextureSize);re=vt(M,re);const _e=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type);let Fe=v(M.internalFormat,_e,Ue,M.colorSpace,M.isVideoTexture);oe($,M);let ye;const Ye=M.mipmaps,ze=M.isVideoTexture!==!0,pt=we.__version===void 0||te===!0,I=q.dataReady,pe=x(M,re);if(M.isDepthTexture)Fe=y(M.format===na,M.type),pt&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Fe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Fe,re.width,re.height,0,_e,Ue,null));else if(M.isDataTexture)if(Ye.length>0){ze&&pt&&t.texStorage2D(n.TEXTURE_2D,pe,Fe,Ye[0].width,Ye[0].height);for(let W=0,Z=Ye.length;W<Z;W++)ye=Ye[W],ze?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,W,Fe,ye.width,ye.height,0,_e,Ue,ye.data);M.generateMipmaps=!1}else ze?(pt&&t.texStorage2D(n.TEXTURE_2D,pe,Fe,re.width,re.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,_e,Ue,re.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,re.width,re.height,0,_e,Ue,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Fe,Ye[0].width,Ye[0].height,re.depth);for(let W=0,Z=Ye.length;W<Z;W++)if(ye=Ye[W],M.format!==ii)if(_e!==null)if(ze){if(I)if(M.layerUpdates.size>0){const he=kg(ye.width,ye.height,M.format,M.type);for(const me of M.layerUpdates){const Qe=ye.data.subarray(me*he/ye.data.BYTES_PER_ELEMENT,(me+1)*he/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,me,ye.width,ye.height,1,_e,Qe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,re.depth,_e,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Fe,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,re.depth,_e,Ue,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Fe,ye.width,ye.height,re.depth,0,_e,Ue,ye.data)}else{ze&&pt&&t.texStorage2D(n.TEXTURE_2D,pe,Fe,Ye[0].width,Ye[0].height);for(let W=0,Z=Ye.length;W<Z;W++)ye=Ye[W],M.format!==ii?_e!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,Ue,ye.data):t.texImage2D(n.TEXTURE_2D,W,Fe,ye.width,ye.height,0,_e,Ue,ye.data)}else if(M.isDataArrayTexture)if(ze){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Fe,re.width,re.height,re.depth),I)if(M.layerUpdates.size>0){const W=kg(re.width,re.height,M.format,M.type);for(const Z of M.layerUpdates){const he=re.data.subarray(Z*W/re.data.BYTES_PER_ELEMENT,(Z+1)*W/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,_e,Ue,he)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Ue,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,re.width,re.height,re.depth,0,_e,Ue,re.data);else if(M.isData3DTexture)ze?(pt&&t.texStorage3D(n.TEXTURE_3D,pe,Fe,re.width,re.height,re.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Ue,re.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,re.width,re.height,re.depth,0,_e,Ue,re.data);else if(M.isFramebufferTexture){if(pt)if(ze)t.texStorage2D(n.TEXTURE_2D,pe,Fe,re.width,re.height);else{let W=re.width,Z=re.height;for(let he=0;he<pe;he++)t.texImage2D(n.TEXTURE_2D,he,Fe,W,Z,0,_e,Ue,null),W>>=1,Z>>=1}}else if(Ye.length>0){if(ze&&pt){const W=ke(Ye[0]);t.texStorage2D(n.TEXTURE_2D,pe,Fe,W.width,W.height)}for(let W=0,Z=Ye.length;W<Z;W++)ye=Ye[W],ze?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,_e,Ue,ye):t.texImage2D(n.TEXTURE_2D,W,Fe,_e,Ue,ye);M.generateMipmaps=!1}else if(ze){if(pt){const W=ke(re);t.texStorage2D(n.TEXTURE_2D,pe,Fe,W.width,W.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ue,re)}else t.texImage2D(n.TEXTURE_2D,0,Fe,_e,Ue,re);m(M)&&f($),we.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function j(R,M,k){if(M.image.length!==6)return;const $=Ae(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const q=i.get(te);if(te.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const we=st.getPrimaries(st.workingColorSpace),ce=M.colorSpace===tr?null:st.getPrimaries(M.colorSpace),ve=M.colorSpace===tr||we===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let Z=0;Z<6;Z++)!nt&&!re?_e[Z]=_(M.image[Z],!0,r.maxCubemapSize):_e[Z]=re?M.image[Z].image:M.image[Z],_e[Z]=vt(M,_e[Z]);const Ue=_e[0],Fe=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),Ye=v(M.internalFormat,Fe,ye,M.colorSpace),ze=M.isVideoTexture!==!0,pt=q.__version===void 0||$===!0,I=te.dataReady;let pe=x(M,Ue);oe(n.TEXTURE_CUBE_MAP,M);let W;if(nt){ze&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ye,Ue.width,Ue.height);for(let Z=0;Z<6;Z++){W=_e[Z].mipmaps;for(let he=0;he<W.length;he++){const me=W[he];M.format!==ii?Fe!==null?ze?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,me.width,me.height,Fe,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,0,0,me.width,me.height,Fe,ye,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he,Ye,me.width,me.height,0,Fe,ye,me.data)}}}else{if(W=M.mipmaps,ze&&pt){W.length>0&&pe++;const Z=ke(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ye,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e[Z].width,_e[Z].height,Fe,ye,_e[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,_e[Z].width,_e[Z].height,0,Fe,ye,_e[Z].data);for(let he=0;he<W.length;he++){const Qe=W[he].image[Z].image;ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Qe.width,Qe.height,Fe,ye,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ye,Qe.width,Qe.height,0,Fe,ye,Qe.data)}}else{ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Fe,ye,_e[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ye,Fe,ye,_e[Z]);for(let he=0;he<W.length;he++){const me=W[he];ze?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,0,0,Fe,ye,me.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,he+1,Ye,Fe,ye,me.image[Z])}}}m(M)&&f(n.TEXTURE_CUBE_MAP),q.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ie(R,M,k,$,te,q){const we=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),ve=v(k.internalFormat,we,ce,k.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>q),_e=Math.max(1,M.height>>q);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,q,ve,re,_e,M.depth,0,we,ce,null):t.texImage2D(te,q,ve,re,_e,0,we,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,te,i.get(k).__webglTexture,0,je(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,te,i.get(k).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(R,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,te=$&&$.isDepthTexture?$.type:null,q=y(M.stencilBuffer,te),we=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=je(M);tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,q,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,R)}else{const $=M.textures;for(let te=0;te<$.length;te++){const q=$[te],we=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),ve=v(q.internalFormat,we,ce,q.colorSpace),nt=je(M);k&&tt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,ve,M.width,M.height):tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const $=i.get(M.depthTexture).__webglTexture,te=je(M);if(M.depthTexture.format===Vs)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(M.depthTexture.format===na)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),fe(M.__webglDepthbuffer[$],R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),fe(M.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,M,k){const $=i.get(R);M!==void 0&&ie($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Oe(R)}function Je(R){const M=R.texture,k=i.get(R),$=i.get(M);R.addEventListener("dispose",C);const te=R.textures,q=R.isWebGLCubeRenderTarget===!0,we=te.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,a.memory.textures++),q){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let ve=0;ve<M.mipmaps.length;ve++)k.__webglFramebuffer[ce][ve]=n.createFramebuffer()}else k.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ce]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(we)for(let ce=0,ve=te.length;ce<ve;ce++){const nt=i.get(te[ce]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&tt(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const ve=te[ce];k.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const nt=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),_e=v(ve.internalFormat,nt,re,ve.colorSpace,R.isXRRenderTarget===!0),Ue=je(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),oe(n.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ie(k.__webglFramebuffer[ce][ve],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else ie(k.__webglFramebuffer[ce],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ce=0,ve=te.length;ce<ve;ce++){const nt=te[ce],re=i.get(nt);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),oe(n.TEXTURE_2D,nt),ie(k.__webglFramebuffer,R,nt,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(nt)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),oe(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ie(k.__webglFramebuffer[ve],R,M,n.COLOR_ATTACHMENT0,ce,ve);else ie(k.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ce,0);m(M)&&f(ce),t.unbindTexture()}R.depthBuffer&&Oe(R)}function dt(R){const M=R.textures;for(let k=0,$=M.length;k<$;k++){const te=M[k];if(m(te)){const q=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(te).__webglTexture;t.bindTexture(q,we),f(q),t.unbindTexture()}}}const Ze=[],D=[];function wn(R){if(R.samples>0){if(tt(R)===!1){const M=R.textures,k=R.width,$=R.height;let te=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(R),ce=M.length>1;if(ce)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const nt=i.get(M[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,te,n.NEAREST),l===!0&&(Ze.length=0,D.length=0,Ze.push(n.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ze.push(q),D.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,we.__webglColorRenderbuffer[ve]);const nt=i.get(M[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function je(R){return Math.min(r.maxSamples,R.samples)}function tt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function vt(R,M){const k=R.colorSpace,$=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==xr&&k!==tr&&(st.getTransfer(k)===mt?($!==ii||te!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=De,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=tt}function v2(n,e){function t(i,r=tr){let s;const a=st.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===sp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return n.UNSIGNED_SHORT_5_5_5_1;if(i===z_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===k_)return n.BYTE;if(i===O_)return n.SHORT;if(i===wo)return n.UNSIGNED_SHORT;if(i===rp)return n.INT;if(i===jr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Ni)return n.HALF_FLOAT;if(i===B_)return n.ALPHA;if(i===H_)return n.RGB;if(i===ii)return n.RGBA;if(i===G_)return n.LUMINANCE;if(i===V_)return n.LUMINANCE_ALPHA;if(i===Vs)return n.DEPTH_COMPONENT;if(i===na)return n.DEPTH_STENCIL;if(i===op)return n.RED;if(i===lp)return n.RED_INTEGER;if(i===W_)return n.RG;if(i===cp)return n.RG_INTEGER;if(i===up)return n.RGBA_INTEGER;if(i===Vl||i===Wl||i===Xl||i===jl)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ed||i===Td||i===bd||i===Cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===Rd||i===Pd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ad||i===Rd)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ld||i===Dd||i===Nd||i===Id||i===Ud||i===Fd||i===kd||i===Od||i===zd||i===Bd||i===Hd||i===Gd||i===Vd||i===Wd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ld)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Od)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wd)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===Xd||i===jd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yl)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===X_||i===Yd||i===qd||i===$d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class _2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y2={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const x2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S2=`
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

}`;class M2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zt({vertexShader:x2,fragmentShader:S2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w2 extends ua{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new M2,m=t.getContextAttributes();let f=null,v=null;const y=[],x=[],A=new ae;let C=null;const b=new Rn;b.layers.enable(1),b.viewport=new ft;const P=new Rn;P.layers.enable(2),P.viewport=new ft;const V=[b,P],S=new _2;S.layers.enable(1),S.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=y[j];return ie===void 0&&(ie=new ih,y[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=y[j];return ie===void 0&&(ie=new ih,y[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=y[j];return ie===void 0&&(ie=new ih,y[j]=ie),ie.getHandSpace()};function B(j){const ie=x.indexOf(j.inputSource);if(ie===-1)return;const fe=y[ie];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let j=0;j<y.length;j++){const ie=x[j];ie!==null&&(x[j]=null,y[j].disconnect(ie))}E=null,H=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new oi(p.framebufferWidth,p.framebufferHeight,{format:ii,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,fe=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?na:Vs,fe=m.stencil?ta:jr);const Oe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new oi(d.textureWidth,d.textureHeight,{format:ii,type:zi,depthTexture:new ry(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(j){for(let ie=0;ie<j.removed.length;ie++){const fe=j.removed[ie],ue=x.indexOf(fe);ue>=0&&(x[ue]=null,y[ue].disconnect(fe))}for(let ie=0;ie<j.added.length;ie++){const fe=j.added[ie];let ue=x.indexOf(fe);if(ue===-1){for(let De=0;De<y.length;De++)if(De>=x.length){x.push(fe),ue=De;break}else if(x[De]===null){x[De]=fe,ue=De;break}if(ue===-1)break}const Oe=y[ue];Oe&&Oe.connect(fe)}}const G=new T,ee=new T;function N(j,ie,fe){G.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(fe.matrixWorld);const ue=G.distanceTo(ee),Oe=ie.projectionMatrix.elements,De=fe.projectionMatrix.elements,Je=Oe[14]/(Oe[10]-1),dt=Oe[14]/(Oe[10]+1),Ze=(Oe[9]+1)/Oe[5],D=(Oe[9]-1)/Oe[5],wn=(Oe[8]-1)/Oe[0],je=(De[8]+1)/De[0],tt=Je*wn,Ie=Je*je,vt=ue/(-wn+je),ke=vt*-wn;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Oe[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const R=Je+vt,M=dt+vt,k=tt-ke,$=Ie+(ue-ke),te=Ze*dt/M*R,q=D*dt/M*R;j.projectionMatrix.makePerspective(k,$,te,q,R,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,fe=j.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),S.near=P.near=b.near=ie,S.far=P.far=b.far=fe,(E!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,H=S.far);const ue=j.parent,Oe=S.cameras;K(S,ue);for(let De=0;De<Oe.length;De++)K(Oe[De],ue);Oe.length===2?N(S,b,P):S.projectionMatrix.copy(b.projectionMatrix),Q(j,S,ue)};function Q(j,ie,fe){fe===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Eo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let oe=null;function Ae(j,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let De=0;De<fe.length;De++){const Je=fe[De];let dt=null;if(p!==null)dt=p.getViewport(Je);else{const D=u.getViewSubImage(d,Je);dt=D.viewport,De===0&&(e.setRenderTargetTextures(v,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let Ze=V[De];Ze===void 0&&(Ze=new Rn,Ze.layers.enable(De),Ze.viewport=new ft,V[De]=Ze),Ze.matrix.fromArray(Je.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Je.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(dt.x,dt.y,dt.width,dt.height),De===0&&(S.matrix.copy(Ze.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Ze)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const De=u.getDepthInformation(fe[0]);De&&De.isValid&&De.texture&&_.init(e,De,r.renderState)}}for(let fe=0;fe<y.length;fe++){const ue=x[fe],Oe=y[fe];ue!==null&&Oe!==void 0&&Oe.update(ue,ie,c||a)}oe&&oe(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Xe=new iy;Xe.setAnimationLoop(Ae),this.setAnimationLoop=function(j){oe=j},this.dispose=function(){}}}const Cr=new Rt,E2=new it;function T2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ey(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Cr.copy(x),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),m.envMapRotation.value.setFromMatrix4(E2.makeRotationFromEuler(Cr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b2(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(g(v),x=h(v),r[v.id]=x,v.addEventListener("dispose",m));const A=y.program;i.updateUBOMapping(v,A);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function h(v){const y=u();v.__bindingPointIndex=y;const x=n.createBuffer(),A=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=r[v.id],x=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,b=x.length;C<b;C++){const P=Array.isArray(x[C])?x[C]:[x[C]];for(let V=0,S=P.length;V<S;V++){const E=P[V];if(p(E,C,V,A)===!0){const H=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let J=0;J<B.length;J++){const G=B[J],ee=_(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,H+X,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,A){const C=v.value,b=y+"_"+x;if(A[b]===void 0)return typeof C=="number"||typeof C=="boolean"?A[b]=C:A[b]=C.clone(),!0;{const P=A[b];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[b]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(v){const y=v.uniforms;let x=0;const A=16;for(let b=0,P=y.length;b<P;b++){const V=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,E=V.length;S<E;S++){const H=V[S],B=Array.isArray(H.value)?H.value:[H.value];for(let X=0,J=B.length;X<J;X++){const G=B[X],ee=_(G),N=x%A,K=N%ee.boundary,Q=N+K;x+=K,Q!==0&&A-Q<ee.storage&&(x+=A-Q),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=ee.storage}}}const C=x%A;return C>0&&(x+=A-C),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class C2{constructor(e={}){const{canvas:t=mw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=fr,this.toneMappingExposure=1;const y=this;let x=!1,A=0,C=0,b=null,P=-1,V=null;const S=new ft,E=new ft;let H=null;const B=new Ce(0);let X=0,J=t.width,G=t.height,ee=1,N=null,K=null;const Q=new ft(0,0,J,G),oe=new ft(0,0,J,G);let Ae=!1;const Xe=new mp;let j=!1,ie=!1;const fe=new it,ue=new it,Oe=new T,De=new ft,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ze(){return b===null?ee:1}let D=i;function wn(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${np}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){const U="webgl2";if(D=wn(U,w),D===null)throw wn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,tt,Ie,vt,ke,R,M,k,$,te,q,we,ce,ve,nt,re,_e,Ue,Fe,ye,Ye,ze,pt,I;function pe(){je=new DT(D),je.init(),ze=new v2(D,je),tt=new bT(D,je,e,ze),Ie=new p2(D),tt.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),vt=new UT(D),ke=new Qb,R=new g2(D,je,Ie,ke,tt,ze,vt),M=new AT(y),k=new LT(y),$=new Gw(D),pt=new ET(D,$),te=new NT(D,$,vt,pt),q=new kT(D,te,$,vt),Fe=new FT(D,tt,R),re=new CT(ke),we=new Zb(y,M,k,je,tt,pt,re),ce=new T2(y,ke),ve=new t2,nt=new o2(je),Ue=new wT(y,M,k,Ie,q,d,l),_e=new d2(y,q,tt),I=new b2(D,vt,tt,Ie),ye=new TT(D,je,vt),Ye=new IT(D,je,vt),vt.programs=we.programs,y.capabilities=tt,y.extensions=je,y.properties=ke,y.renderLists=ve,y.shadowMap=_e,y.state=Ie,y.info=vt}pe();const W=new w2(y,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(J,G,!1))},this.getSize=function(w){return w.set(J,G)},this.setSize=function(w,U,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,G=U,t.width=Math.floor(w*ee),t.height=Math.floor(U*ee),O===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(J*ee,G*ee).floor()},this.setDrawingBufferSize=function(w,U,O){J=w,G=U,ee=O,t.width=Math.floor(w*O),t.height=Math.floor(U*O),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,U,O,z){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,U,O,z),Ie.viewport(S.copy(Q).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,U,O,z){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,U,O,z),Ie.scissor(E.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Ie.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(w=!0,U=!0,O=!0){let z=0;if(w){let F=!1;if(b!==null){const se=b.texture.format;F=se===up||se===cp||se===lp}if(F){const se=b.texture.type,de=se===zi||se===jr||se===wo||se===ta||se===sp||se===ap,xe=Ue.getClearColor(),Se=Ue.getClearAlpha(),Le=xe.r,Ne=xe.g,Ee=xe.b;de?(p[0]=Le,p[1]=Ne,p[2]=Ee,p[3]=Se,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Le,g[1]=Ne,g[2]=Ee,g[3]=Se,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),nt.dispose(),ke.dispose(),M.dispose(),k.dispose(),q.dispose(),pt.dispose(),I.dispose(),we.dispose(),W.dispose(),W.removeEventListener("sessionstart",Rp),W.removeEventListener("sessionend",Pp),Sr.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=vt.autoReset,U=_e.enabled,O=_e.autoUpdate,z=_e.needsUpdate,F=_e.type;pe(),vt.autoReset=w,_e.enabled=U,_e.autoUpdate=O,_e.needsUpdate=z,_e.type=F}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qe(w){const U=w.target;U.removeEventListener("dispose",Qe),Lt(U)}function Lt(w){mn(w),ke.remove(w)}function mn(w){const U=ke.get(w).programs;U!==void 0&&(U.forEach(function(O){we.releaseProgram(O)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,O,z,F,se){U===null&&(U=Je);const de=F.isMesh&&F.matrixWorld.determinant()<0,xe=zy(w,U,O,z,F);Ie.setMaterial(z,de);let Se=O.index,Le=1;if(z.wireframe===!0){if(Se=te.getWireframeAttribute(O),Se===void 0)return;Le=2}const Ne=O.drawRange,Ee=O.attributes.position;let ct=Ne.start*Le,_t=(Ne.start+Ne.count)*Le;se!==null&&(ct=Math.max(ct,se.start*Le),_t=Math.min(_t,(se.start+se.count)*Le)),Se!==null?(ct=Math.max(ct,0),_t=Math.min(_t,Se.count)):Ee!=null&&(ct=Math.max(ct,0),_t=Math.min(_t,Ee.count));const bt=_t-ct;if(bt<0||bt===1/0)return;pt.setup(F,z,xe,O,Se);let En,ot=ye;if(Se!==null&&(En=$.get(Se),ot=Ye,ot.setIndex(En)),F.isMesh)z.wireframe===!0?(Ie.setLineWidth(z.wireframeLinewidth*Ze()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(F.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),Ie.setLineWidth(Te*Ze()),F.isLineSegments?ot.setMode(D.LINES):F.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else F.isPoints?ot.setMode(D.POINTS):F.isSprite&&ot.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,jt=F._multiDrawCounts,lt=F._multiDrawCount,Xn=Se?$.get(Se).bytesPerElement:1,Zr=ke.get(z).currentProgram.getUniforms();for(let Tn=0;Tn<lt;Tn++)Zr.setValue(D,"_gl_DrawID",Tn),ot.render(Te[Tn]/Xn,jt[Tn])}else if(F.isInstancedMesh)ot.renderInstances(ct,bt,F.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,jt=Math.min(O.instanceCount,Te);ot.renderInstances(ct,bt,jt)}else ot.render(ct,bt)};function rt(w,U,O){w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,ko(w,U,O),w.side=gr,w.needsUpdate=!0,ko(w,U,O),w.side=qt):ko(w,U,O)}this.compile=function(w,U,O=null){O===null&&(O=w),m=nt.get(O),m.init(U),v.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==O&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const z=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const xe=se[de];rt(xe,O,F),z.add(xe)}else rt(se,O,F),z.add(se)}),v.pop(),m=null,z},this.compileAsync=function(w,U,O=null){const z=this.compile(w,U,O);return new Promise(F=>{function se(){if(z.forEach(function(de){ke.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){F(w);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let gn=null;function yi(w){gn&&gn(w)}function Rp(){Sr.stop()}function Pp(){Sr.start()}const Sr=new iy;Sr.setAnimationLoop(yi),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(w){gn=w,W.setAnimationLoop(w),w===null?Sr.stop():Sr.start()},W.addEventListener("sessionstart",Rp),W.addEventListener("sessionend",Pp),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,U,b),m=nt.get(w,v.length),m.init(U),v.push(m),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xe.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,j=re.init(this.clippingPlanes,ie),_=ve.get(w,f.length),_.init(),f.push(_),W.enabled===!0&&W.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&Qc(se,U,-1/0,y.sortObjects)}Qc(w,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(N,K),dt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,dt&&Ue.addToRenderList(_,w),this.info.render.frame++,j===!0&&re.beginShadows();const O=m.state.shadowsArray;_e.render(O,w,U),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,F=_.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let de=0,xe=se.length;de<xe;de++){const Se=se[de];Dp(z,F,w,Se)}dt&&Ue.render(w);for(let de=0,xe=se.length;de<xe;de++){const Se=se[de];Lp(_,w,Se,Se.viewport)}}else F.length>0&&Dp(z,F,w,U),dt&&Ue.render(w),Lp(_,w,U);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,U),pt.resetDefaultState(),P=-1,V=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&re.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Qc(w,U,O,z){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Xe.intersectsSprite(w)){z&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const de=q.update(w),xe=w.material;xe.visible&&_.push(w,de,xe,O,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Xe.intersectsObject(w))){const de=q.update(w),xe=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),De.copy(de.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(xe)){const Se=de.groups;for(let Le=0,Ne=Se.length;Le<Ne;Le++){const Ee=Se[Le],ct=xe[Ee.materialIndex];ct&&ct.visible&&_.push(w,de,ct,O,De.z,Ee)}}else xe.visible&&_.push(w,de,xe,O,De.z,null)}}const se=w.children;for(let de=0,xe=se.length;de<xe;de++)Qc(se[de],U,O,z)}function Lp(w,U,O,z){const F=w.opaque,se=w.transmissive,de=w.transparent;m.setupLightsView(O),j===!0&&re.setGlobalState(y.clippingPlanes,O),z&&Ie.viewport(S.copy(z)),F.length>0&&Fo(F,U,O),se.length>0&&Fo(se,U,O),de.length>0&&Fo(de,U,O),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Dp(w,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new oi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Ni:zi,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const se=m.state.transmissionRenderTarget[z.id],de=z.viewport||S;se.setSize(de.z,de.w);const xe=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(B),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),dt&&Ue.render(O);const Se=y.toneMapping;y.toneMapping=fr;const Le=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),j===!0&&re.setGlobalState(y.clippingPlanes,z),Fo(w,O,z),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ee=0,ct=U.length;Ee<ct;Ee++){const _t=U[Ee],bt=_t.object,En=_t.geometry,ot=_t.material,Te=_t.group;if(ot.side===qt&&bt.layers.test(z.layers)){const jt=ot.side;ot.side=dn,ot.needsUpdate=!0,Np(bt,O,z,En,ot,Te),ot.side=jt,ot.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}y.setRenderTarget(xe),y.setClearColor(B,X),Le!==void 0&&(z.viewport=Le),y.toneMapping=Se}function Fo(w,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=w.length;F<se;F++){const de=w[F],xe=de.object,Se=de.geometry,Le=z===null?de.material:z,Ne=de.group;xe.layers.test(O.layers)&&Np(xe,U,O,Se,Le,Ne)}}function Np(w,U,O,z,F,se){w.onBeforeRender(y,U,O,z,F,se),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(y,U,O,z,w,se),F.transparent===!0&&F.side===qt&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,y.renderBufferDirect(O,U,z,F,w,se),F.side=gr,F.needsUpdate=!0,y.renderBufferDirect(O,U,z,F,w,se),F.side=qt):y.renderBufferDirect(O,U,z,F,w,se),w.onAfterRender(y,U,O,z,F,se)}function ko(w,U,O){U.isScene!==!0&&(U=Je);const z=ke.get(w),F=m.state.lights,se=m.state.shadowsArray,de=F.state.version,xe=we.getParameters(w,F.state,se,U,O),Se=we.getProgramCacheKey(xe);let Le=z.programs;z.environment=w.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Qe),Le=new Map,z.programs=Le);let Ne=Le.get(Se);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===de)return Up(w,xe),Ne}else xe.uniforms=we.getUniforms(w),w.onBeforeCompile(xe,y),Ne=we.acquireProgram(xe,Se),Le.set(Se,Ne),z.uniforms=xe.uniforms;const Ee=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=re.uniform),Up(w,xe),z.needsLights=Hy(w),z.lightsStateVersion=de,z.needsLights&&(Ee.ambientLightColor.value=F.state.ambient,Ee.lightProbe.value=F.state.probe,Ee.directionalLights.value=F.state.directional,Ee.directionalLightShadows.value=F.state.directionalShadow,Ee.spotLights.value=F.state.spot,Ee.spotLightShadows.value=F.state.spotShadow,Ee.rectAreaLights.value=F.state.rectArea,Ee.ltc_1.value=F.state.rectAreaLTC1,Ee.ltc_2.value=F.state.rectAreaLTC2,Ee.pointLights.value=F.state.point,Ee.pointLightShadows.value=F.state.pointShadow,Ee.hemisphereLights.value=F.state.hemi,Ee.directionalShadowMap.value=F.state.directionalShadowMap,Ee.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ee.spotShadowMap.value=F.state.spotShadowMap,Ee.spotLightMatrix.value=F.state.spotLightMatrix,Ee.spotLightMap.value=F.state.spotLightMap,Ee.pointShadowMap.value=F.state.pointShadowMap,Ee.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function Ip(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=$l.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Up(w,U){const O=ke.get(w);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function zy(w,U,O,z,F){U.isScene!==!0&&(U=Je),R.resetTextureUnits();const se=U.fog,de=z.isMeshStandardMaterial?U.environment:null,xe=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:xr,Se=(z.isMeshStandardMaterial?k:M).get(z.envMap||de),Le=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ne=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!O.morphAttributes.position,ct=!!O.morphAttributes.normal,_t=!!O.morphAttributes.color;let bt=fr;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bt=y.toneMapping);const En=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ot=En!==void 0?En.length:0,Te=ke.get(z),jt=m.state.lights;if(j===!0&&(ie===!0||w!==V)){const Un=w===V&&z.id===P;re.setState(z,w,Un)}let lt=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==jt.state.version||Te.outputColorSpace!==xe||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Se||z.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==Le||Te.vertexTangents!==Ne||Te.morphTargets!==Ee||Te.morphNormals!==ct||Te.morphColors!==_t||Te.toneMapping!==bt||Te.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,Te.__version=z.version);let Xn=Te.currentProgram;lt===!0&&(Xn=ko(z,U,F));let Zr=!1,Tn=!1,eu=!1;const At=Xn.getUniforms(),Hi=Te.uniforms;if(Ie.useProgram(Xn.program)&&(Zr=!0,Tn=!0,eu=!0),z.id!==P&&(P=z.id,Tn=!0),Zr||V!==w){tt.reverseDepthBuffer?(fe.copy(w.projectionMatrix),vw(fe),_w(fe),At.setValue(D,"projectionMatrix",fe)):At.setValue(D,"projectionMatrix",w.projectionMatrix),At.setValue(D,"viewMatrix",w.matrixWorldInverse);const Un=At.map.cameraPosition;Un!==void 0&&Un.setValue(D,Oe.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&At.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,Tn=!0,eu=!0)}if(F.isSkinnedMesh){At.setOptional(D,F,"bindMatrix"),At.setOptional(D,F,"bindMatrixInverse");const Un=F.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),At.setValue(D,"boneTexture",Un.boneTexture,R))}F.isBatchedMesh&&(At.setOptional(D,F,"batchingTexture"),At.setValue(D,"batchingTexture",F._matricesTexture,R),At.setOptional(D,F,"batchingIdTexture"),At.setValue(D,"batchingIdTexture",F._indirectTexture,R),At.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",F._colorsTexture,R));const tu=O.morphAttributes;if((tu.position!==void 0||tu.normal!==void 0||tu.color!==void 0)&&Fe.update(F,O,Xn),(Tn||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,At.setValue(D,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Hi.envMap.value=Se,Hi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Hi.envMapIntensity.value=U.environmentIntensity),Tn&&(At.setValue(D,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&By(Hi,eu),se&&z.fog===!0&&ce.refreshFogUniforms(Hi,se),ce.refreshMaterialUniforms(Hi,z,ee,G,m.state.transmissionRenderTarget[w.id]),$l.upload(D,Ip(Te),Hi,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($l.upload(D,Ip(Te),Hi,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&At.setValue(D,"center",F.center),At.setValue(D,"modelViewMatrix",F.modelViewMatrix),At.setValue(D,"normalMatrix",F.normalMatrix),At.setValue(D,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Un=z.uniformsGroups;for(let nu=0,Gy=Un.length;nu<Gy;nu++){const Fp=Un[nu];I.update(Fp,Xn),I.bind(Fp,Xn)}}return Xn}function By(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Hy(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,U,O){ke.get(w.texture).__webglTexture=U,ke.get(w.depthTexture).__webglTexture=O;const z=ke.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const O=ke.get(w);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,O=0){b=w,A=U,C=O;let z=!0,F=null,se=!1,de=!1;if(w){const Se=ke.get(w);if(Se.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Se.__hasExternalTextures)R.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ee=w.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&ke.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const Ne=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?F=Ne[U][O]:F=Ne[U],se=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?F=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[O]:F=Ne,S.copy(w.viewport),E.copy(w.scissor),H=w.scissorTest}else S.copy(Q).multiplyScalar(ee).floor(),E.copy(oe).multiplyScalar(ee).floor(),H=Ae;if(Ie.bindFramebuffer(D.FRAMEBUFFER,F)&&z&&Ie.drawBuffers(w,F),Ie.viewport(S),Ie.scissor(E),Ie.setScissorTest(H),se){const Se=ke.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,O)}else if(de){const Se=ke.get(w.texture),Le=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,O||0,Le)}P=-1},this.readRenderTargetPixels=function(w,U,O,z,F,se,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){Ie.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Se=w.texture,Le=Se.format,Ne=Se.type;if(!tt.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-z&&O>=0&&O<=w.height-F&&D.readPixels(U,O,z,F,ze.convert(Le),ze.convert(Ne),se)}finally{const Se=b!==null?ke.get(b).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,U,O,z,F,se,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){const Se=w.texture,Le=Se.format,Ne=Se.type;if(!tt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-z&&O>=0&&O<=w.height-F){Ie.bindFramebuffer(D.FRAMEBUFFER,xe);const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(U,O,z,F,ze.convert(Le),ze.convert(Ne),0);const ct=b!==null?ke.get(b).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,ct);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await gw(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Ee),D.deleteSync(_t),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,O=0){w.isTexture!==!0&&(ql("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-O),F=Math.floor(w.image.width*z),se=Math.floor(w.image.height*z),de=U!==null?U.x:0,xe=U!==null?U.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,de,xe,F,se),Ie.unbindTexture()},this.copyTextureToTexture=function(w,U,O=null,z=null,F=0){w.isTexture!==!0&&(ql("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let se,de,xe,Se,Le,Ne;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,xe=O.min.x,Se=O.min.y):(se=w.image.width,de=w.image.height,xe=0,Se=0),z!==null?(Le=z.x,Ne=z.y):(Le=0,Ne=0);const Ee=ze.convert(U.format),ct=ze.convert(U.type);R.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const _t=D.getParameter(D.UNPACK_ROW_LENGTH),bt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),En=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),jt=w.isCompressedTexture?w.mipmaps[F]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,jt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Le,Ne,se,de,Ee,ct,jt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Le,Ne,jt.width,jt.height,Ee,jt.data):D.texSubImage2D(D.TEXTURE_2D,F,Le,Ne,se,de,Ee,ct,jt),D.pixelStorei(D.UNPACK_ROW_LENGTH,_t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,En),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),F===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,U,O=null,z=null,F=0){w.isTexture!==!0&&(ql("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0);let se,de,xe,Se,Le,Ne,Ee,ct,_t;const bt=w.isCompressedTexture?w.mipmaps[F]:w.image;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,xe=O.max.z-O.min.z,Se=O.min.x,Le=O.min.y,Ne=O.min.z):(se=bt.width,de=bt.height,xe=bt.depth,Se=0,Le=0,Ne=0),z!==null?(Ee=z.x,ct=z.y,_t=z.z):(Ee=0,ct=0,_t=0);const En=ze.convert(U.format),ot=ze.convert(U.type);let Te;if(U.isData3DTexture)R.setTexture3D(U,0),Te=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=D.getParameter(D.UNPACK_ROW_LENGTH),lt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xn=D.getParameter(D.UNPACK_SKIP_PIXELS),Zr=D.getParameter(D.UNPACK_SKIP_ROWS),Tn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Te,F,Ee,ct,_t,se,de,xe,En,ot,bt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,F,Ee,ct,_t,se,de,xe,En,bt.data):D.texSubImage3D(Te,F,Ee,ct,_t,se,de,xe,En,ot,bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tn),F===0&&U.generateMipmaps&&D.generateMipmap(Te),Ie.unbindTexture()},this.initRenderTarget=function(w){ke.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){A=0,C=0,b=null,Ie.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hp?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===jc?"display-p3":"srgb"}}class _p{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new _p(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cy extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rt,this.environmentIntensity=1,this.environmentRotation=new Rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class A2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kd,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new T;class bc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uy extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ps;const Aa=new T,ms=new T,gs=new T,vs=new ae,Ra=new ae,hy=new it,Ml=new T,Pa=new T,wl=new T,Og=new ae,rh=new ae,zg=new ae;class R2 extends Bt{constructor(e=new uy){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new It;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new A2(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new bc(i,3,0,!1)),ps.setAttribute("uv",new bc(i,2,3,!1))}this.geometry=ps,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),hy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;El(Ml.set(-.5,-.5,0),gs,a,ms,r,s),El(Pa.set(.5,-.5,0),gs,a,ms,r,s),El(wl.set(.5,.5,0),gs,a,ms,r,s),Og.set(0,0),rh.set(1,0),zg.set(1,1);let o=e.ray.intersectTriangle(Ml,Pa,wl,!1,Aa);if(o===null&&(El(Pa.set(-.5,.5,0),gs,a,ms,r,s),rh.set(0,1),o=e.ray.intersectTriangle(Ml,wl,Pa,!1,Aa),o===null))return;const l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||t.push({distance:l,point:Aa.clone(),uv:Bn.getInterpolation(Aa,Ml,Pa,wl,Og,rh,zg,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function El(n,e,t,i,r,s){vs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ra.x=s*vs.x-r*vs.y,Ra.y=r*vs.x+s*vs.y):Ra.copy(vs),n.copy(e),n.x+=Ra.x,n.y+=Ra.y,n.applyMatrix4(hy)}class P2 extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=yn,h=yn,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends rn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new it,Bg=new it,Tl=[],Hg=new Kr,L2=new it,La=new be,Da=new ha;class D2 extends be{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,L2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),Hg.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(Hg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ha),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),Da.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(i),e.ray.intersectsSphere(Da)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_s),Bg.multiplyMatrices(i,_s),La.matrixWorld=Bg,La.raycast(e,Tl);for(let a=0,o=Tl.length;a<o;a++){const l=Tl[a];l.instanceId=s,l.object=this,t.push(l)}Tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new P2(new Float32Array(r*this.count),r,this.count,op,fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class N2 extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gg=new it,Qd=new fp,bl=new ha,Cl=new T;class Vg extends Bt{constructor(e=new It,t=new N2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Gg.copy(r).invert(),Qd.copy(e.ray).applyMatrix4(Gg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Cl.fromBufferAttribute(u,m),Wg(Cl,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Cl.fromBufferAttribute(u,g),Wg(Cl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wg(n,e,t,i,r,s,a){const o=Qd.distanceSqToPoint(n);if(o<t){const l=new T;Qd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Uo extends Kt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(a-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ae:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new T,r=[],s=[],a=[],o=new T,l=new it;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(kt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yp extends _i{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class I2 extends yp{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function xp(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Al=new T,sh=new xp,ah=new xp,oh=new xp;class Dr extends _i{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new T){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Al.subVectors(r[0],r[1]).add(r[0]),c=Al);const u=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Al.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Al),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),sh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ah.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),oh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ah.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),oh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(sh.calc(l),ah.calc(l),oh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xg(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function U2(n,e){const t=1-n;return t*t*e}function F2(n,e){return 2*(1-n)*n*e}function k2(n,e){return n*n*e}function Qa(n,e,t,i){return U2(n,e)+F2(n,t)+k2(n,i)}function O2(n,e){const t=1-n;return t*t*t*e}function z2(n,e){const t=1-n;return 3*t*t*n*e}function B2(n,e){return 3*(1-n)*n*n*e}function H2(n,e){return n*n*n*e}function eo(n,e,t,i,r){return O2(n,e)+z2(n,t)+B2(n,i)+H2(n,r)}class dy extends _i{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(eo(e,r.x,s.x,a.x,o.x),eo(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class G2 extends _i{constructor(e=new T,t=new T,i=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new T){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(eo(e,r.x,s.x,a.x,o.x),eo(e,r.y,s.y,a.y,o.y),eo(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fy extends _i{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V2 extends _i{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class py extends _i{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Qa(e,r.x,s.x,a.x),Qa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class my extends _i{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Qa(e,r.x,s.x,a.x),Qa(e,r.y,s.y,a.y),Qa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gy extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(Xg(o,l.x,c.x,h.x,u.x),Xg(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ae().fromArray(r))}return this}}var ef=Object.freeze({__proto__:null,ArcCurve:I2,CatmullRomCurve3:Dr,CubicBezierCurve:dy,CubicBezierCurve3:G2,EllipseCurve:yp,LineCurve:fy,LineCurve3:V2,QuadraticBezierCurve:py,QuadraticBezierCurve3:my,SplineCurve:gy});class W2 extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ef[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ef[r.type]().fromJSON(r))}return this}}class X2 extends W2{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new fy(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new py(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new dy(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new gy(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new yp(e,t,i,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Sp extends It{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=kt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new ae,p=new T,g=new T,_=new T;let m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=t;v++){const y=i+v*h*r,x=Math.sin(y),A=Math.cos(y);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*x,u.y=e[C].y,u.z=e[C].x*A,a.push(u.x,u.y,u.z),d.x=v/t,d.y=C/(e.length-1),o.push(d.x,d.y);const b=l[3*C+0]*x,P=l[3*C+1],V=l[3*C+0]*A;c.push(b,P,V)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,A=x,C=x+e.length,b=x+e.length+1,P=x+1;s.push(A,C,P),s.push(b,P,C)}this.setIndex(s),this.setAttribute("position",new Ve(a,3)),this.setAttribute("uv",new Ve(o,2)),this.setAttribute("normal",new Ve(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sp(e.points,e.segments,e.phiStart,e.phiLength)}}class Mp extends Sp{constructor(e=1,t=1,i=4,r=8){const s=new X2;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new Mp(e.radius,e.length,e.capSegments,e.radialSegments)}}class kn extends It{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(p,2));function v(){const x=new T,A=new T;let C=0;const b=(t-e)/i;for(let P=0;P<=s;P++){const V=[],S=P/s,E=S*(t-e)+e;for(let H=0;H<=r;H++){const B=H/r,X=B*l+o,J=Math.sin(X),G=Math.cos(X);A.x=E*J,A.y=-S*i+m,A.z=E*G,u.push(A.x,A.y,A.z),x.set(J,b,G).normalize(),d.push(x.x,x.y,x.z),p.push(B,1-S),V.push(g++)}_.push(V)}for(let P=0;P<r;P++)for(let V=0;V<s;V++){const S=_[V][P],E=_[V+1][P],H=_[V+1][P+1],B=_[V][P+1];e>0&&(h.push(S,E,B),C+=3),t>0&&(h.push(E,H,B),C+=3)}c.addGroup(f,C,0),f+=C}function y(x){const A=g,C=new ae,b=new T;let P=0;const V=x===!0?e:t,S=x===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const E=g;for(let H=0;H<=r;H++){const X=H/r*l+o,J=Math.cos(X),G=Math.sin(X);b.x=V*G,b.y=m*S,b.z=V*J,u.push(b.x,b.y,b.z),d.push(0,S,0),C.x=J*.5+.5,C.y=G*.5*S+.5,p.push(C.x,C.y),g++}for(let H=0;H<r;H++){const B=A+H,X=E+H;x===!0?h.push(X,X+1,B):h.push(X+1,X,B),P+=3}c.addGroup(f,P,x===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Co extends kn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Co(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wp extends It{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/r,p=new T,g=new ae;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let f=0;f<i;f++){const v=f+m,y=v,x=v+i+1,A=v+i+2,C=v+1;o.push(y,x,C),o.push(x,A,C)}}this.setIndex(o),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ra extends It{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],y=f/i;let x=0;f===0&&a===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const C=A/t;u.x=-e*Math.cos(r+C*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+C*s)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+x,1-y),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const y=h[f][v+1],x=h[f][v],A=h[f+1][v],C=h[f+1][v+1];(f!==0||a>0)&&p.push(y,x,C),(f!==i-1||l<Math.PI)&&p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zi extends It{constructor(e=new my(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new ae;let h=new T;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(p,2));function _(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),v(),f()}function m(y){h=e.getPointAt(y/t,h);const x=a.normals[y],A=a.binormals[y];for(let C=0;C<=r;C++){const b=C/r*Math.PI*2,P=Math.sin(b),V=-Math.cos(b);l.x=V*x.x+P*A.x,l.y=V*x.y+P*A.y,l.z=V*x.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=t;y++)for(let x=1;x<=r;x++){const A=(r+1)*(y-1)+(x-1),C=(r+1)*y+(x-1),b=(r+1)*y+x,P=(r+1)*(y-1)+x;g.push(A,C,P),g.push(C,b,P)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=r;x++)c.x=y/t,c.y=x/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zi(new ef[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class j2 extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gi extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y2 extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const jg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class q2{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const $2=new q2;class Ep{constructor(e){this.manager=e!==void 0?e:$2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ep.DEFAULT_MATERIAL_NAME="__DEFAULT";class K2 extends Ep{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=jg.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=To("img");function l(){h(),jg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class J2 extends Ep{constructor(e){super(e)}load(e,t,i,r){const s=new Kt,a=new K2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Tp extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Z2 extends Tp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const lh=new it,Yg=new T,qg=new T;class vy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yg),qg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qg),t.updateMatrixWorld(),lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $g=new it,Na=new T,ch=new T;class Q2 extends vy{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Na.setFromMatrixPosition(e.matrixWorld),i.position.copy(Na),ch.copy(i.position),ch.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ch),i.updateMatrixWorld(),r.makeTranslation(-Na.x,-Na.y,-Na.z),$g.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($g)}}class _y extends Tp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Q2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eC extends vy{constructor(){super(new gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tC extends Tp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new eC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kg(){return performance.now()}const Jg=new it;class nC{constructor(e,t,i=0,r=1/0){this.ray=new fp(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jg),this}intersectObject(e,t=!0,i=[]){return tf(e,this,i,t),i.sort(Zg),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)tf(e[r],this,i,t);return i.sort(Zg),i}}function Zg(n,e){return n.distance-e.distance}function tf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)tf(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);const xy={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class pa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iC=new gp(-1,1,1,-1,0,1);class rC extends It{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}}const sC=new rC;class bp{constructor(e){this._mesh=new be(sC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class aC extends pa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bo.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qg extends pa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class oC extends pa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lC{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ae);this._width=i.width,this._height=i.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new aC(xy),this.copyPass.material.blending=Di,this.clock=new yy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qg!==void 0&&(a instanceof Qg?i=!0:a instanceof oC&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cC extends pa{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const uC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class sa extends pa{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(s,a,{type:Ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new oi(s,a,{type:Ni});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new oi(s,a,{type:Ni});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),a=Math.round(a/2)}const o=uC;this.highPassUniforms=bo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=xy;this.copyUniforms=bo.clone(h.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:So,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new da,this.fsQuad=new bp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ae(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}sa.BlurDirectionX=new ae(1,0);sa.BlurDirectionY=new ae(0,1);const hC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class dC extends pa{constructor(){super();const e=hC;this.uniforms=bo.clone(e.uniforms),this.material=new j2({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new bp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===L_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===D_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===N_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ip?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===I_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===U_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fC extends cy{constructor(){super();const e=new vi;e.deleteAttribute("uv");const t=new gi({side:dn}),i=new gi,r=new _y(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new be(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new be(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new be(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new be(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new be(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new be(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new be(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new be(e,ys(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new be(e,ys(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new be(e,ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new be(e,ys(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new be(e,ys(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new be(e,ys(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ys(n){const e=new da;return e.color.setScalar(n),e}const nf=[{name:"Siêu nhỏ",gallons:5,blurb:"Bể trên bàn cho cá Betta hoặc một đàn tép"},{name:"Nhỏ",gallons:20,blurb:"Bể cộng đồng dễ bắt đầu"},{name:"Vừa",gallons:40,blurb:"Đủ chỗ cho cá bơi theo đàn"},{name:"Lớn",gallons:75,blurb:"Cho đàn cá lớn hoặc bể rạn san hô"},{name:"Rất lớn",gallons:120,blurb:"Bể trưng bày rộng cho cá biển"}],rf=5,Sy=180;function qc(n){const e=n*.003785,t=Math.min(1,(n-rf)/(Sy-rf)),i=1.6+t*1.4,r=.85+t*.25,s=Math.cbrt(e/(i*r)),a={gallons:n,width:i*s,depth:r*s,height:s,capacity:0},o=a.width*a.depth;return a.capacity=Math.round(o*220+n*.45),a}function pC(n){let e=nf[0];for(const t of nf)Math.abs(t.gallons-n)<Math.abs(e.gallons-n)&&(e=t);return Math.abs(e.gallons-n)<=3?e.name:`${Math.round(n)} gal (tùy chỉnh)`}const Zn={uTime:{value:0},uCausticIntensity:{value:.9},uCausticScale:{value:3.2},uSurfaceY:{value:.5},uWaterColor:{value:new Ce("#1a4d66")},uSunTint:{value:new Ce("#fff6e0")}},My=`
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f); // smoothstep interpolation
    float a = hash21(i), b = hash21(i + vec2(1, 0));
    float c = hash21(i + vec2(0, 1)), d = hash21(i + vec2(1, 1));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * vnoise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`,mC=`
  float causticPattern(vec2 uv, float t) {
    vec2 p = mod(uv * 6.28318, 6.28318) - 250.0;
    vec2 i = p;
    float c = 1.0;
    float inten = 0.005;
    for (int n = 0; n < 3; n++) {
      float tt = t * (1.0 - (3.5 / float(n + 1)));
      i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
      c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
    }
    c /= 3.0;
    c = 1.17 - pow(c, 1.4);
    return pow(abs(c), 7.0);
  }
`;function gC(){Be.fog_fragment=`
    #ifdef USE_FOG
      vec3 chan = vec3(1.75, 1.0, 0.68);
      vec3 att = exp(-vFogDepth * fogDensity * chan * 0.5);
      gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, att);
    #endif
  `}function $c(n,e={}){const{caustics:t=!0,causticStrength:i=1,vertexHook:r="",vertexPars:s="",extraUniforms:a={}}=e,o=`uw|${t?1:0}|${i}|${s}|${r}`;n.customProgramCacheKey=()=>o,n.onBeforeCompile=l=>{Object.assign(l.uniforms,Zn,a),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCausticWorld;
uniform float uTime;
${s}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${r}`).replace("#include <fog_vertex>",`#include <fog_vertex>
        {
          vec4 cwp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            cwp = instanceMatrix * cwp;
          #endif
          cwp = modelMatrix * cwp;
          vCausticWorld = cwp.xyz;
        }`),t?l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCausticWorld;
uniform float uTime;
uniform float uCausticIntensity;
uniform float uCausticScale;
uniform float uSurfaceY;
uniform vec3 uSunTint;
${mC}`).replace("vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;",`
          vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
          {
            // Project the pattern straight down from the surface. Light hitting
            // steep surfaces gets less (n.y factor), and the pattern softens
            // with depth below the surface, like real focused light diverging.
            float depthBelow = clamp((uSurfaceY - vCausticWorld.y) * 1.4, 0.0, 1.0);
            float soften = mix(1.0, 0.45, depthBelow);
            float ca = causticPattern(vCausticWorld.xz * uCausticScale, uTime * 0.55);
            float upness = clamp(normal.y * 0.75 + 0.35, 0.0, 1.0);
            // Caustics are FOCUSED light: the same energy gathered into ridges.
            // Modulate multiplicatively (slightly darker between ridges, much
            // brighter on them) so the contrast survives tone mapping even on
            // bright sand — a purely additive term clips to invisibility.
            float k = clamp(soften * upness * uCausticIntensity * ${i.toFixed(2)}, 0.0, 1.3);
            outgoingLight *= 1.0 - 0.3 * k + ca * k * 2.8 * (0.5 + 0.5 * dot(uSunTint, vec3(0.33)));
          }`):(r||s)&&(l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCausticWorld;`))},n.needsUpdate=!0}function sf(){return window.__NATIVE_IOS__===!0}function wy(n){const e=window.webkit?.messageHandlers?.native;return e?(e.postMessage(n),!0):!1}function vC(n){return wy({type:"share",url:n})}function _C(n){return wy({type:"saveImage",dataUrl:n})}function yC(){window.__AQUARIUM_READY__=!0}const Ia={low:{tier:"low",pixelRatioCap:1,bloom:!1,godRayCount:0,snowCount:120,bubbleCount:40,maxFish:60,causticStrength:.8,antialias:!1},medium:{tier:"medium",pixelRatioCap:1.25,bloom:!1,godRayCount:5,snowCount:300,bubbleCount:80,maxFish:120,causticStrength:1,antialias:!0},high:{tier:"high",pixelRatioCap:1.75,bloom:!0,godRayCount:9,snowCount:700,bubbleCount:140,maxFish:220,causticStrength:1,antialias:!0},ultra:{tier:"ultra",pixelRatioCap:2,bloom:!0,godRayCount:14,snowCount:1400,bubbleCount:220,maxFish:400,causticStrength:1.1,antialias:!0}};function e0(n){try{const e=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),t=navigator.hardwareConcurrency??4;let i="";if(n){const r=n.getContext(),s=r.getExtension("WEBGL_debug_renderer_info");s&&(i=String(r.getParameter(s.UNMASKED_RENDERER_WEBGL)).toLowerCase())}return e?/apple/.test(i)?"medium":"low":/(rtx|radeon rx|apple m[1-9])/i.test(i)?t>=8?"ultra":"high":/(intel|uhd|iris)/.test(i)?"medium":t>=8?"high":"medium"}catch{return"medium"}}const t0=new T;class xC{constructor(e,t){Y(this,"camera");Y(this,"mode","orbit");Y(this,"reducedMotion",!1);Y(this,"theta",0);Y(this,"phi",Math.PI/2.2);Y(this,"radius",1.4);Y(this,"tTheta",0);Y(this,"tPhi",Math.PI/2.2);Y(this,"tRadius",1.4);Y(this,"lookAt",new T);Y(this,"tLookAt",new T);Y(this,"dragging",!1);Y(this,"lastX",0);Y(this,"lastY",0);Y(this,"idleTime",0);Y(this,"pinchDist",0);Y(this,"minR",.4);Y(this,"maxR",4);Y(this,"cineT",0);Y(this,"followTarget",null);Y(this,"lastPointerTravel",0);Y(this,"onDown",e=>{e.button===0&&(this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY,this.lastPointerTravel=0,this.idleTime=0)});Y(this,"onMove",e=>{if(!this.dragging)return;const t=e.clientX-this.lastX,i=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.lastPointerTravel+=Math.abs(t)+Math.abs(i),this.mode!=="still"&&(this.tTheta-=t*.005,this.tPhi=Re.clamp(this.tPhi-i*.004,.9,2),(this.mode==="cinematic"||this.mode==="follow")&&(this.mode="orbit"),this.idleTime=0)});Y(this,"onUp",()=>{this.dragging=!1});Y(this,"onWheel",e=>{e.preventDefault(),this.tRadius=Re.clamp(this.tRadius*(1+Math.sign(e.deltaY)*.09),this.minR,this.maxR),this.idleTime=0});Y(this,"onTouchStart",e=>{e.touches.length===2&&(this.pinchDist=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY))});Y(this,"onTouchMove",e=>{if(e.touches.length===2){e.preventDefault();const t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);this.pinchDist>0&&(this.tRadius=Re.clamp(this.tRadius*(this.pinchDist/t),this.minR,this.maxR)),this.pinchDist=t}});this.dom=e,this.camera=new Rn(46,t,.01,60),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("touchstart",this.onTouchStart,{passive:!0}),e.addEventListener("touchmove",this.onTouchMove,{passive:!1})}dispose(){this.dom.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),this.dom.removeEventListener("wheel",this.onWheel),this.dom.removeEventListener("touchstart",this.onTouchStart),this.dom.removeEventListener("touchmove",this.onTouchMove)}frameTank(e,t,i){this.tLookAt.set(0,i,0),this.lookAt.copy(this.tLookAt),this.tRadius=Math.max(.5,e*2.6),this.radius=this.tRadius*1.05,this.minR=Math.max(.18,e*.5),this.maxR=e*6+1,this.tTheta=this.theta=0,this.tPhi=this.phi=Math.PI/2.14}setMode(e){this.mode=e,this.cineT=0}update(e){const t=(s,a,o)=>Re.damp(s,a,o,e);this.idleTime+=e;const i=this.reducedMotion?.3:1;if(this.mode==="cinematic"?(this.cineT+=e*.05*i,this.tTheta=Math.sin(this.cineT)*.55,this.tPhi=Math.PI/2.15+Math.sin(this.cineT*.7)*.1,this.tRadius=Re.clamp(this.tRadius,this.minR,this.maxR),this.tRadius+=Math.sin(this.cineT*.43)*e*.02):this.mode==="orbit"&&this.idleTime>14&&!this.dragging&&(this.tTheta+=e*.012*i),this.mode==="follow"&&this.followTarget){const s=this.followTarget();s&&(this.tLookAt.copy(s),this.tRadius=Re.clamp(this.tRadius,this.minR,this.maxR*.4))}this.theta=t(this.theta,this.tTheta,3),this.phi=t(this.phi,this.tPhi,3),this.radius=t(this.radius,this.tRadius,3),this.lookAt.x=t(this.lookAt.x,this.tLookAt.x,2.5),this.lookAt.y=t(this.lookAt.y,this.tLookAt.y,2.5),this.lookAt.z=t(this.lookAt.z,this.tLookAt.z,2.5);const r=Math.sin(this.phi);this.camera.position.set(this.lookAt.x+this.radius*r*Math.sin(this.theta),this.lookAt.y+this.radius*Math.cos(this.phi),this.lookAt.z+this.radius*r*Math.cos(this.theta)),t0.copy(this.lookAt),this.camera.lookAt(t0)}releaseFollow(e){this.tLookAt.set(0,e,0),this.followTarget=null}lockFrontView(e,t,i,r,s=1,a=1.04){const o=Math.tan(Re.degToRad(this.camera.fov/2)),l=Math.min(t/o,e/(o*this.camera.aspect))/a,c=Re.lerp(i,-i,Re.clamp(s,0,1)),h=Math.max(l+c,i*1.06);this.mode="still",this.tLookAt.set(0,r,0),this.lookAt.copy(this.tLookAt),this.tTheta=this.theta=0,this.tPhi=this.phi=Math.PI/2,this.minR=Math.min(this.minR,h),this.tRadius=this.radius=h}}const uh=new T;class SC{constructor(){Y(this,"jetOrigin",new T);Y(this,"jetDir",new T(1,-.15,.2).normalize());Y(this,"jetStrength",.16);Y(this,"ambient",.02);Y(this,"time",0)}setup(e,t,i){this.jetOrigin.set(-e*.46,t*.82,-i*.3),this.jetDir.set(1,-.18,.35).normalize(),this.jetStrength=.1+e*.06}sample(e,t){uh.copy(e).sub(this.jetOrigin);const i=uh.dot(this.jetDir);if(t.set(0,0,0),i>0){const s=Math.sqrt(Math.max(0,uh.lengthSq()-i*i)),a=.08+i*.45,o=Math.exp(-i*1.6),l=Math.exp(-(s*s)/(a*a));t.copy(this.jetDir).multiplyScalar(this.jetStrength*o*l)}const r=this.time*.3;return t.x+=Math.sin(e.y*3.1+r+e.z*2)*this.ambient,t.y+=Math.sin(e.x*2.3+r*1.3)*this.ambient*.35,t.z+=Math.cos(e.x*2.7-r+e.y*1.7)*this.ambient,t}}function Yr(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");if(!i)throw new Error("2D canvas unavailable — cannot generate textures");return[t,i]}function Cp(n,e=1){const t=new Uo(n);return t.wrapS=t.wrapT=Mo,t.repeat.set(e,e),t.colorSpace=un,t.anisotropy=4,t}const Pe=(n,e)=>n+Math.random()*(e-n);function MC(n){const[e,t]=Yr(512,512),[i,r]=Yr(512,512),a={sand:{bg:"#c8b48c",grains:["#d8c49c","#b8a47c","#e0d0ac","#a89468","#d0bc94"],grainSize:[.6,1.8],count:26e3},blacksand:{bg:"#26262a",grains:["#3a3a40","#1a1a1e","#4a4a52","#2e2e34","#565660"],grainSize:[.6,1.8],count:26e3},gravel:{bg:"#8a7a66",grains:["#a89880","#6a5c4c","#b0a088","#7c6e5c","#948470","#5c5044"],grainSize:[3,9],count:3200},crushedcoral:{bg:"#ddd6c8",grains:["#f0eadc","#c8c0b0","#e8d8c8","#f4f0e4","#d0c4ae","#e8c8c0"],grainSize:[2,6],count:5200}}[n];t.fillStyle=a.bg,t.fillRect(0,0,512,512),r.fillStyle="#808080",r.fillRect(0,0,512,512);for(let l=0;l<a.count;l++){const c=Math.random()*512,h=Math.random()*512,u=Pe(a.grainSize[0],a.grainSize[1]);t.fillStyle=a.grains[Math.floor(Math.random()*a.grains.length)],t.beginPath(),t.ellipse(c,h,u,u*Pe(.7,1),Pe(0,Math.PI),0,Math.PI*2),t.fill();const d=Math.floor(Pe(120,200));r.fillStyle=`rgb(${d},${d},${d})`,r.beginPath(),r.arc(c-u*.2,h-u*.2,u*.8,0,Math.PI*2),r.fill();const p=Math.floor(Pe(40,90));r.fillStyle=`rgb(${p},${p},${p})`,r.beginPath(),r.arc(c+u*.25,h+u*.25,u*.55,0,Math.PI*2),r.fill()}const o=new Uo(i);return o.wrapS=o.wrapT=Mo,o.repeat.set(3,3),{map:Cp(e,3),bumpMap:o,color:a.bg}}function wC(n,e){const[t,i]=Yr(1024,512),r=i.createLinearGradient(0,0,0,512),s=(o,l,c)=>{i.save(),i.filter=`blur(${l}px)`,i.fillStyle=o,c(),i.restore()};switch(n){case"black":i.fillStyle="#050608",i.fillRect(0,0,1024,512);break;case"deepblue":r.addColorStop(0,"#0a2c4a"),r.addColorStop(1,"#04121f"),i.fillStyle=r,i.fillRect(0,0,1024,512);break;case"natural":{r.addColorStop(0,e==="saltwater"?"#1a5a7a":"#3a6a5a"),r.addColorStop(1,e==="saltwater"?"#0a2a3e":"#16302a"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let o=0;o<7;o++)s(`rgba(10,25,25,${Pe(.25,.5)})`,18,()=>{i.beginPath(),i.ellipse(Pe(0,1024),512-Pe(0,60),Pe(80,220),Pe(60,160),0,Math.PI,0),i.fill()});break}case"planted":{r.addColorStop(0,"#2e5a3a"),r.addColorStop(1,"#122616"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let o=0;o<40;o++){const l=Pe(0,1024),c=Pe(8,26),h=Pe(160,420);s(`rgba(${Math.floor(Pe(10,40))},${Math.floor(Pe(50,95))},${Math.floor(Pe(15,45))},${Pe(.3,.65)})`,10,()=>{i.beginPath(),i.ellipse(l,512-h/2,c,h/2,Pe(-.12,.12),0,Math.PI*2),i.fill()})}break}case"reef":{r.addColorStop(0,"#2a7ab0"),r.addColorStop(1,"#0a2440"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let o=0;o<10;o++)s(`rgba(15,30,50,${Pe(.3,.55)})`,14,()=>{const l=Pe(0,1024),c=512-Pe(0,40);i.beginPath(),i.ellipse(l,c,Pe(60,160),Pe(70,200),0,Math.PI,0),i.fill();for(let h=0;h<5;h++)i.fillRect(l+Pe(-60,60),c-Pe(120,240),Pe(6,14),Pe(60,140))});break}}const a=new Uo(t);return a.colorSpace=un,a}function EC(n,e){const[r,s]=Yr(256,128),a=s.createLinearGradient(0,128,0,0);a.addColorStop(0,n.belly),a.addColorStop(.45,n.base),a.addColorStop(1,n.back),s.fillStyle=a,s.fillRect(0,0,256,128),s.globalAlpha=.06,s.strokeStyle="#ffffff";for(let c=8;c<128;c+=7)for(let h=0;h<256;h+=9)s.beginPath(),s.arc(h+(c%14>7?4.5:0),c,4,Math.PI*.15,Math.PI*.85),s.stroke();s.globalAlpha=1;const o=n.patternParams??[];switch(n.pattern){case"hstripe":{const c=o[0]??1;for(let h=0;h<c;h++){const u=128*(.38+h*.18),d=s.createLinearGradient(0,u-9,0,u+9);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.5,n.patternColor),d.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=d,s.fillRect(0,u-9,256,18)}if(n.patternColor2&&c===1){const u=s.createLinearGradient(0,69.36,0,89.36);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,n.patternColor2),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect(256*(n.patternColor2===n.base?0:.35),79.36-10,256,20)}break}case"vbars":{const c=o[0]??4,h=o[1]??.7;for(let u=0;u<c;u++){const d=256*((u+.75)/(c+1)),p=256/(c+1)*.42*h,g=s.createLinearGradient(d-p,0,d+p,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.5,n.patternColor),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(d-p,0,p*2,128),n.patternColor2&&(s.strokeStyle=n.patternColor2,s.lineWidth=2.5,s.strokeRect(d-p*.55,-2,p*1.1,132))}break}case"spots":{const c=n.patternColor,h=n.patternColor2??n.patternColor;for(let u=0;u<26;u++)s.fillStyle=Math.random()<.5?c:h,s.globalAlpha=Pe(.35,.8),s.beginPath(),s.arc(Pe(256*.2,256),Pe(0,128),Pe(2,7),0,Math.PI*2),s.fill();s.globalAlpha=1;break}case"headpatch":{const c=o[0]??.3,h=o[1]??0,u=0,d=256*c,p=s.createLinearGradient(h>=0?u:256,0,h>=0?d:256-d,0);if(p.addColorStop(0,h===1?n.patternColor2??n.patternColor:n.patternColor),p.addColorStop(1,"rgba(0,0,0,0)"),h===1){const g=s.createLinearGradient(256*c,0,256,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.5,n.patternColor2??"#f2c80a"),s.fillStyle=g,s.fillRect(256*c,0,256,128)}else if(h===-1){const g=s.createLinearGradient(102.4,0,256,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,n.patternColor2??"#d82a10"),s.fillStyle=g,s.fillRect(0,0,256,128)}else if(s.fillStyle=p,s.fillRect(0,0,d,128),n.patternColor2&&n.patternColor2!=="#00000000")for(let g=0;g<3;g++)s.fillStyle=n.patternColor2,s.fillRect(256*(.86+g*.05),0,256*.024,128);break}case"lateralline":{const c=256*(o[0]??.45);s.fillStyle=n.patternColor,s.beginPath(),s.moveTo(c,128*.28),s.lineTo(256,128*.42),s.lineTo(256,128*.58),s.lineTo(c,128*.52),s.closePath(),s.fill();break}case"mottle":{for(let c=0;c<90;c++)s.fillStyle=n.patternColor,s.globalAlpha=Pe(.15,.45),s.beginPath(),s.ellipse(Pe(0,256),Pe(0,128),Pe(4,16),Pe(3,9),Pe(0,Math.PI),0,Math.PI*2),s.fill();s.globalAlpha=1;break}}s.strokeStyle="rgba(0,0,0,0.18)",s.lineWidth=3,s.beginPath(),s.arc(256*.16,128*.5,128*.32,-.9,.9),s.stroke();const l=new Uo(r);return l.colorSpace=un,l.wrapS=l.wrapT=rr,l}function n0(n,e,t=!1){const[i,r]=Yr(64,64),s=r.createRadialGradient(32,32,2,32,32,30);return t?(s.addColorStop(0,"rgba(255,255,255,0.05)"),s.addColorStop(.72,"rgba(255,255,255,0.10)"),s.addColorStop(.88,n),s.addColorStop(1,"rgba(255,255,255,0)")):(s.addColorStop(0,n),s.addColorStop(1,e)),r.fillStyle=s,r.fillRect(0,0,64,64),t&&(r.fillStyle="rgba(255,255,255,0.85)",r.beginPath(),r.ellipse(24,22,5,3.4,-.6,0,Math.PI*2),r.fill()),new Uo(i)}function xs(){const[n,e]=Yr(256,256);e.fillStyle="#4a3826",e.fillRect(0,0,256,256);for(let t=0;t<60;t++){e.strokeStyle=`rgba(${Math.floor(Pe(30,90))},${Math.floor(Pe(22,60))},${Math.floor(Pe(12,38))},${Pe(.3,.7)})`,e.lineWidth=Pe(1,4),e.beginPath();const i=Pe(0,256);e.moveTo(0,i);for(let r=0;r<=256;r+=32)e.lineTo(r,i+Math.sin(r*.05+t)*Pe(2,9));e.stroke()}return Cp(n,2)}function Ua(n="#6a6a66"){const[e,t]=Yr(256,256);t.fillStyle=n,t.fillRect(0,0,256,256);for(let i=0;i<2200;i++){const r=Math.floor(Pe(-28,28));t.fillStyle=`rgba(${128+r},${128+r},${124+r},${Pe(.08,.3)})`,t.beginPath(),t.arc(Pe(0,256),Pe(0,256),Pe(1,7),0,Math.PI*2),t.fill()}return Cp(e,2)}const i0={daylight:{sun:"#fff2dc",sunNight:"#5f7fb8",sunIntensity:2.6,hemi:"#a8d4e8",hemiIntensity:.55,fog:{fw:"#173f43",sw:"#0e3a55"},fogDensity:1,caustic:1,rayColor:"#cfe8ff"},warm:{sun:"#ffd9a8",sunNight:"#5f7fb8",sunIntensity:2.3,hemi:"#e0c8a0",hemiIntensity:.5,fog:{fw:"#2a3a2c",sw:"#1a3a48"},fogDensity:1.05,caustic:.9,rayColor:"#ffe8c0"},actinic:{sun:"#9cc4ff",sunNight:"#4a66a8",sunIntensity:2.4,hemi:"#6a9ae0",hemiIntensity:.6,fog:{fw:"#0e3050",sw:"#0a2c50"},fogDensity:.95,caustic:.85,rayColor:"#a8ccff"},blackwater:{sun:"#f0bf78",sunNight:"#54689a",sunIntensity:1.7,hemi:"#8a7a50",hemiIntensity:.35,fog:{fw:"#2e2410",sw:"#1a3040"},fogDensity:1.7,caustic:.55,rayColor:"#e8c890"}},TC=`
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  void main() {
    vUv = uv;
    vec3 p = position;
    // Gentle long swell so the surface line itself moves a little.
    p.z += sin(p.x * 14.0 + uTime * 1.1) * 0.0035 + cos(p.y * 11.0 - uTime * 0.9) * 0.003;
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorld = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,bC=`
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSky;
  uniform float uBright;
  ${My}
  void main() {
    // Procedural wave normal from two scrolling noise layers.
    vec2 p = vWorld.xz * 26.0;
    float e = 0.09;
    float h  = fbm(p + vec2(uTime * 0.32, uTime * 0.21));
    float hx = fbm(p + vec2(e, 0.0) + vec2(uTime * 0.32, uTime * 0.21));
    float hz = fbm(p + vec2(0.0, e) + vec2(uTime * 0.32, uTime * 0.21));
    vec3 n = normalize(vec3((h - hx) / e * 0.35, 1.0, (h - hz) / e * 0.35));

    vec3 viewDir = normalize(cameraPosition - vWorld);
    // From below, steep angles mirror the water (total internal reflection):
    // darker + deeper; near-vertical shows the bright sky (Snell's window).
    float facing = abs(dot(viewDir, n));
    float fresnel = pow(1.0 - facing, 3.0);
    vec3 col = mix(uSky, uDeep, fresnel);
    // Sparkling glints where wave slopes catch the light.
    float glint = pow(clamp(n.x * 0.6 + n.z * 0.6 + h * 0.7, 0.0, 1.0), 8.0);
    col += vec3(1.0, 0.98, 0.9) * glint * 0.35;
    gl_FragColor = vec4(col * uBright, 0.82);
  }
`,CC=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,AC=`
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;
  uniform float uSeed;
  uniform vec3 uColor;
  ${My}
  void main() {
    // Horizontal: soft gaussian beam. Vertical: bright at surface, fading down.
    float x = vUv.x - 0.5;
    float beam = exp(-x * x * 18.0);
    float fall = pow(vUv.y, 1.7);
    // The shimmer: the beam's brightness slowly crawls (light through waves).
    float shimmer = 0.55 + 0.45 * vnoise(vec2(vUv.x * 3.0 + uSeed * 17.0, uTime * 0.35 + uSeed * 9.0));
    float a = beam * fall * shimmer * uIntensity;
    gl_FragColor = vec4(uColor * a, a);
  }
`,r0=`
  attribute float aSeed;
  uniform float uTime;
  uniform vec3 uBounds;   // halfW, height, halfD
  uniform float uRise;    // m/s upward (bubbles) — negative = slow sink (snow)
  uniform float uSize;
  uniform float uWobble;
  varying float vFade;
  void main() {
    vec3 p = position;
    // Wrap vertical travel inside the water column; each particle offset by seed.
    float travel = uTime * uRise * (0.6 + aSeed * 0.8);
    p.y = mod(p.y + travel, uBounds.y);
    vFade = smoothstep(0.0, 0.06, p.y) * smoothstep(uBounds.y, uBounds.y - 0.06, p.y);
    // Sideways wobble — snow drifts with the water, bubbles zigzag as they rise.
    p.x += sin(uTime * (0.5 + aSeed) + aSeed * 40.0 + p.y * 8.0) * uWobble;
    p.z += cos(uTime * (0.4 + aSeed * 0.7) + aSeed * 71.0 + p.y * 6.0) * uWobble;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    // Bubbles grow slightly as they rise (decompression), snow doesn't (seeded).
    float grow = uRise > 0.0 ? (0.6 + 0.6 * (p.y / uBounds.y)) : 1.0;
    // Perspective size: ~uSize px at 2.5 m; tiny motes, not blobs.
    gl_PointSize = uSize * grow * (0.5 + aSeed) * (2.5 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`,s0=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    gl_FragColor = vec4(tex.rgb, tex.a * uOpacity * vFade);
  }
`;class RC{constructor(e){Y(this,"group",new ri);Y(this,"sun");Y(this,"hemi");Y(this,"fill");Y(this,"fog");Y(this,"surface",null);Y(this,"surfaceUniforms",null);Y(this,"rays",[]);Y(this,"snow",null);Y(this,"bubbles",null);Y(this,"bubbleUniforms",null);Y(this,"disposables",[]);Y(this,"mood",i0.daylight);Y(this,"water","freshwater");Y(this,"snowTex");Y(this,"bubbleTex");this.scene=e,e.add(this.group),this.sun=new tC("#fff2dc",2.6),this.sun.position.set(.4,2.5,.6),this.hemi=new Z2("#a8d4e8","#3a3428",.55),this.fill=new _y("#88b8d8",.35,0,2),this.scene.add(this.sun,this.hemi,this.fill),this.fog=new _p("#173f43",.9),e.fog=this.fog,this.snowTex=n0("rgba(255,255,255,0.75)","rgba(255,255,255,0)"),this.bubbleTex=n0("rgba(220,240,255,0.9)","rgba(255,255,255,0)",!0)}rebuild(e,t,i,r,s,a,o){this.group.clear();for(const p of this.disposables)p.dispose();this.disposables=[],this.rays=[],this.mood=i0[s],this.water=t;const{halfW:l,halfD:c,height:h,floorY:u,surfaceY:d}=e;this.fill.position.set(0,d+.3,c*2),this.fog.density=this.mood.fogDensity*.3/Math.max(.35,l);{const p=MC(i),g=48,_=new ni(l*2,c*2,g,Math.round(g*(c/l)));_.rotateX(-Math.PI/2);const m=_.getAttribute("position");for(let y=0;y<m.count;y++){const x=m.getX(y),A=m.getZ(y);m.setY(y,Math.sin(x*9+2)*Math.cos(A*7)*.008+Math.sin(x*3.2)*.012)}_.computeVertexNormals();const f=new gi({map:p.map,bumpMap:p.bumpMap,bumpScale:.6,roughness:.95});$c(f,{caustics:!0,causticStrength:1.9});const v=new be(_,f);v.position.y=u,this.group.add(v),this.disposables.push(_,f,p.map,p.bumpMap)}{const p=wC(r,t),g=new da({map:p,fog:!0}),_=new be(new ni(l*2.06,h*1.15),g);_.position.set(0,u+h*.52,-c-.02),this.group.add(_),this.disposables.push(g,p,_.geometry)}{this.surfaceUniforms={uTime:Zn.uTime,uDeep:{value:new Ce(this.mood.fog[t==="saltwater"?"sw":"fw"])},uSky:{value:new Ce("#bfe4f8")},uBright:{value:1}};const p=new zt({vertexShader:TC,fragmentShader:bC,uniforms:this.surfaceUniforms,transparent:!0,side:qt,depthWrite:!1});this.surface=new be(new ni(l*2,c*2,24,24),p),this.surface.rotation.x=-Math.PI/2,this.surface.position.y=d,this.surface.renderOrder=5,this.group.add(this.surface),this.disposables.push(p,this.surface.geometry)}{const p=new Y2({color:"#cfe8ee",transparent:!0,opacity:.07,roughness:.04,metalness:0,envMapIntensity:1.2,side:qt,depthWrite:!1}),g=[[l*2,h*1.06,[0,u+h*.53,c],[0,0,0]],[l*2,h*1.06,[0,u+h*.53,-c],[0,Math.PI,0]],[c*2,h*1.06,[-l,u+h*.53,0],[0,Math.PI/2,0]],[c*2,h*1.06,[l,u+h*.53,0],[0,-Math.PI/2,0]]];for(const[A,C,b,P]of g){const V=new be(new ni(A,C),p);V.position.set(...b),V.rotation.set(...P),V.renderOrder=6,this.group.add(V),this.disposables.push(V.geometry)}this.disposables.push(p);const _=new gi({color:"#101418",roughness:.6}),m=Math.max(.006,l*.012),f=(A,C,b,P,V,S)=>{const E=new be(new vi(A,C,b),_);E.position.set(P,V,S),this.group.add(E),this.disposables.push(E.geometry)},v=u+h*.53,y=h*1.06;for(const[A,C]of[[-l,-c],[l,-c],[-l,c],[l,c]])f(m,y,m,A,v,C);for(const A of[u-.002,u+h*1.06-.004])f(l*2+m,m,m,0,A,c),f(l*2+m,m,m,0,A,-c),f(m,m,c*2+m,-l,A,0),f(m,m,c*2+m,l,A,0);this.disposables.push(_);const x=new be(new vi(l*2+.1,.05,c*2+.1),new gi({color:"#0a0c10",roughness:.4}));x.position.y=u-.045,this.group.add(x),this.disposables.push(x.geometry,x.material)}for(let p=0;p<a.godRayCount;p++){const g=.1+Math.random()*l*.5,_={uTime:Zn.uTime,uIntensity:{value:.3+Math.random()*.15},uSeed:{value:Math.random()},uColor:{value:new Ce(this.mood.rayColor)}},m=new zt({vertexShader:CC,fragmentShader:AC,uniforms:_,transparent:!0,blending:So,depthWrite:!1,side:qt}),f=new be(new ni(g,h*1.05),m);f.position.set((Math.random()-.5)*l*1.8,u+h*.52,(Math.random()-.5)*c*1.6),f.rotation.z=(Math.random()-.5)*.14,f.renderOrder=4,f.userData.driftSeed=Math.random()*100,this.rays.push(f),this.group.add(f),this.disposables.push(m,f.geometry)}if(a.snowCount>0){const p=a.snowCount,g=new Float32Array(p*3),_=new Float32Array(p);for(let v=0;v<p;v++)g[v*3]=(Math.random()-.5)*l*1.9,g[v*3+1]=Math.random()*h,g[v*3+2]=(Math.random()-.5)*c*1.9,_[v]=Math.random();const m=new It;m.setAttribute("position",new rn(g,3)),m.setAttribute("aSeed",new rn(_,1));const f=new zt({vertexShader:r0,fragmentShader:s0,uniforms:{uTime:Zn.uTime,uBounds:{value:new T(l,h,c)},uRise:{value:-.006},uSize:{value:1.6},uWobble:{value:.02},uMap:{value:this.snowTex},uOpacity:{value:.35}},transparent:!0,depthWrite:!1});this.snow=new Vg(m,f),this.snow.position.y=u,this.snow.frustumCulled=!1,this.group.add(this.snow),this.disposables.push(m,f)}if(o&&a.bubbleCount>0){const p=a.bubbleCount,g=new Float32Array(p*3),_=new Float32Array(p);for(let v=0;v<p;v++)g[v*3]=o.x+(Math.random()-.5)*.02,g[v*3+1]=Math.random()*h,g[v*3+2]=o.z+(Math.random()-.5)*.02,_[v]=Math.random();const m=new It;m.setAttribute("position",new rn(g,3)),m.setAttribute("aSeed",new rn(_,1)),this.bubbleUniforms={uTime:Zn.uTime,uBounds:{value:new T(l,h*.98,c)},uRise:{value:.22},uSize:{value:2.4},uWobble:{value:.012},uMap:{value:this.bubbleTex},uOpacity:{value:.85}};const f=new zt({vertexShader:r0,fragmentShader:s0,uniforms:this.bubbleUniforms,transparent:!0,depthWrite:!1,blending:So});this.bubbles=new Vg(m,f),this.bubbles.position.y=u,this.bubbles.frustumCulled=!1,this.group.add(this.bubbles),this.disposables.push(m,f)}else this.bubbles=null}update(e,t){const i=this.mood,r=new Ce(i.sun).lerp(new Ce(i.sunNight),1-e);this.sun.color.copy(r),this.sun.intensity=Re.lerp(.18,i.sunIntensity,e),this.hemi.color.set(i.hemi),this.hemi.intensity=Re.lerp(.06,i.hemiIntensity,e),this.fill.intensity=Re.lerp(.06,.35,e),Zn.uCausticIntensity.value=i.caustic*Re.lerp(.12,1,e),Zn.uSunTint.value.copy(r);const s=new Ce(i.fog[this.water==="saltwater"?"sw":"fw"]);s.multiplyScalar(Re.lerp(.18,1,e)),this.fog.color.copy(s),this.surfaceUniforms&&(this.surfaceUniforms.uBright.value=Re.lerp(.12,1,e),this.surfaceUniforms.uBright.value=Re.lerp(.12,1,e),this.surfaceUniforms.uDeep.value.copy(s));const a=Zn.uTime.value;for(const o of this.rays){const l=o.userData.driftSeed;o.position.x+=Math.sin(a*.05+l)*4e-4,o.rotation.y=Math.atan2(t.position.x-o.position.x,t.position.z-o.position.z);const c=o.material;c.uniforms.uIntensity.value=(.3+.14*Math.sin(l*40))*e*e}}}function Rl(n,e,t=1){const i=n.getAttribute("position"),r=new T;for(let s=0;s<i.count;s++){r.set(i.getX(s),i.getY(s),i.getZ(s));const a=Math.sin(r.x*12.3*t+r.y*7.7)*Math.cos(r.z*9.1-r.y*5.3)*.5+Math.sin(r.x*27.1+r.z*19.7)*.25;r.multiplyScalar(1+a*e),i.setXYZ(s,r.x,r.y,r.z)}return n.computeVertexNormals(),n}class PC{constructor(e){Y(this,"group",new ri);Y(this,"materials",[]);e.add(this.group)}mat(e){const t=new gi(e);return $c(t,{caustics:!0,causticStrength:1}),this.materials.push(t),t}rebuild(e,t){this.group.clear();for(const l of this.materials)l.dispose();this.materials=[];const i={obstacles:[],shelters:[],anchors:[],airstone:null},{halfW:r,halfD:s,floorY:a}=t,o=Math.min(1.2,r*1.6);for(const l of e)switch(l){case"driftwood":{const c=this.mat({map:xs(),color:"#8a6844",roughness:.85}),h=new Dr([new T(-r*.7,a,-s*.2),new T(-r*.3,a+t.height*.35,0),new T(r*.15,a+t.height*.55,s*.25)]),u=new be(new Zi(h,16,.02*o+.008,7),c);this.group.add(u);for(let p=0;p<2;p++){const g=.35+p*.3,_=h.getPoint(g),m=new Dr([_,_.clone().add(new T((p?1:-1)*r*.2,t.height*.18,(p?-1:1)*s*.25))]);this.group.add(new be(new Zi(m,8,.012*o+.004,6),c))}const d=h.getPoint(.5);i.obstacles.push({pos:d,radius:.1*o}),i.shelters.push(new T(-r*.5,a+.02,-s*.1)),i.anchors.push(h.getPoint(.3),h.getPoint(.7));break}case"spider-wood":{const c=this.mat({map:xs(),color:"#6a5236",roughness:.9}),h=r*.35,u=-s*.1,d=new T(h,a+.01,u),p=d.clone().add(new T(.02*o,t.height*.2,.01*o));this.group.add(new be(new Zi(new Dr([d,d.clone().add(new T(0,t.height*.09,0)),p]),8,.014*o+.005,6),c));const g=6;for(let _=0;_<g;_++){const m=_/g*Math.PI*2+.5,f=.12*o+.04,v=(.22+_%3*.06)*t.height,y=new T(h+Math.cos(m)*f,a+v,u+Math.sin(m)*f),x=new T((p.x+y.x)/2+Math.cos(m)*.02,(p.y+y.y)/2,(p.z+y.z)/2+Math.sin(m)*.02);this.group.add(new be(new Zi(new Dr([p,x,y]),8,.007*o+.002,5),c)),i.anchors.push(y)}i.obstacles.push({pos:p.clone(),radius:.07*o}),i.shelters.push(d.clone().add(new T(0,.02,.03)));break}case"driftwood-stump":{const c=this.mat({map:xs(),color:"#5f4a30",roughness:.92}),h=-r*.35,u=s*.25,d=.06*o+.02,p=.09*o+.03,g=new be(Rl(new kn(d*.85,d,p,10,2),.12,3),c);g.position.set(h,a+p/2,u),this.group.add(g);const _=5;for(let m=0;m<_;m++){const f=m/_*Math.PI*2+.3,v=d+.08*o+.03,y=new T(h+Math.cos(f)*d*.8,a+p*.3,u+Math.sin(f)*d*.8),x=new T(h+Math.cos(f)*v,a+.008,u+Math.sin(f)*v),A=new T((y.x+x.x)/2,a+p*.15,(y.z+x.z)/2);this.group.add(new be(new Zi(new Dr([y,A,x]),8,.01*o+.003,5),c))}i.obstacles.push({pos:g.position.clone(),radius:d*1.3}),i.shelters.push(new T(h,a+.02,u+d+.03)),i.anchors.push(g.position.clone().add(new T(0,p/2,0)));break}case"hollow-log":{const c=this.mat({map:xs(),color:"#7a5c3a",roughness:.9,side:qt}),h=.06*o+.03,u=.26*o+.08,d=r*.1,p=s*.2,g=new be(new kn(h,h*1.05,u,14,1,!0),c);g.rotation.z=Math.PI/2,g.rotation.y=.2,g.position.set(d,a+h*.85,p),this.group.add(g);for(const[_,m,f]of[[-.06,.02,.6],[.05,-.03,-.8]]){const v=new be(new kn(.008,.012,.05*o+.02,6),c);v.position.set(d+_*o,a+h*1.2,p+m*o),v.rotation.set(.4,0,f),this.group.add(v)}i.obstacles.push({pos:g.position.clone(),radius:h*1.15}),i.shelters.push(g.position.clone().setY(a+h*.6)),i.anchors.push(g.position.clone().add(new T(0,h,0)));break}case"log-arch":{const c=this.mat({map:xs(),color:"#6f5232",roughness:.9,side:qt}),h=-r*.2,u=-s*.05,d=.05*o+.022,p=.14*o+.05,g=.1*o+.05,_=s*.05,m=new Dr([new T(h-p,a+d*.9,u),new T(h-p*.4,a+g,u+_),new T(h+p*.4,a+g,u-_),new T(h+p,a+d*.9,u)]);this.group.add(new be(new Zi(m,24,d,12,!1),c)),i.obstacles.push({pos:m.getPoint(.06),radius:d*1.1}),i.obstacles.push({pos:m.getPoint(.94),radius:d*1.1}),i.shelters.push(m.getPoint(.5).setY(a+d*.7)),i.anchors.push(m.getPoint(.5));break}case"river-rocks":{const c=this.mat({map:Ua("#5e5852"),roughness:.9});for(let h=0;h<5;h++){const u=(.03+Math.random()*.05)*o+.015,d=Rl(new ra(u,10,8),.25,h+2),p=new be(d,c);p.position.set(r*(.15+Math.random()*.5),a+u*.55,s*(Math.random()*.8-.5)),p.rotation.set(Math.random(),Math.random()*Math.PI,Math.random()),this.group.add(p),i.obstacles.push({pos:p.position.clone(),radius:u*1.1}),i.anchors.push(p.position.clone().add(new T(0,u*.8,0)))}break}case"slate-stack":{const c=this.mat({map:Ua("#565a60"),roughness:.8}),h=-r*.45,u=s*.15;let d=a;for(let p=0;p<3;p++){const g=(.16-p*.03)*o+.04,_=(.12-p*.02)*o+.03,m=.014*o+.006,f=new be(Rl(new vi(g,m,_,4,1,4),.08,p+5),c);f.position.set(h+(Math.random()-.5)*.03,d+m/2+(p>0?.02:0),u+(Math.random()-.5)*.03),f.rotation.y=Math.random()*.6,this.group.add(f),d=f.position.y+m/2}i.obstacles.push({pos:new T(h,d,u),radius:.12*o}),i.shelters.push(new T(h,a+.025,u+.05)),i.anchors.push(new T(h,d+.01,u));break}case"reef-rock":{const c=this.mat({map:Ua("#6a625a"),roughness:.95});for(let h=0;h<7;h++){const u=(.06+Math.random()*.09)*o+.02,d=Rl(new ra(u,12,9),.45,h*1.7+1),p=new be(d,c),g=-r*.8+h/6*r*1.6;p.position.set(g+(Math.random()-.5)*.06,a+u*(.4+Math.random()*.5),-s*(.35+Math.random()*.3)),p.rotation.set(Math.random(),Math.random()*Math.PI,Math.random()),this.group.add(p),i.obstacles.push({pos:p.position.clone(),radius:u}),i.shelters.push(p.position.clone().add(new T(.03,u*.3,u*.9))),i.anchors.push(p.position.clone().add(new T((Math.random()-.5)*u,u*.85,(Math.random()-.5)*u*.5)))}break}case"sunken-ship":{const c=this.mat({map:xs(),color:"#7a6a52",roughness:.9}),h=new ri,u=new be(new Mp(.045*o+.02,.22*o+.06,4,8),c);u.scale.set(1,.7,1.4),u.rotation.z=Math.PI/2,h.add(u);const d=new be(new vi(.07*o+.02,.04*o+.01,.05*o+.015),c);d.position.y=.045*o+.015,h.add(d);for(const p of[-.07,.05]){const g=new be(new kn(.004,.006,.18*o+.05,5),c);g.position.set(p*o,.1*o+.03,0),g.rotation.z=.15,h.add(g)}h.position.set(r*.45,a+.03*o,-s*.15),h.rotation.set(.18,-.5,-.28),this.group.add(h),i.obstacles.push({pos:h.position.clone(),radius:.16*o}),i.shelters.push(h.position.clone().add(new T(0,.02,.08)));break}case"castle":{const c=this.mat({map:Ua("#8a8288"),roughness:.85}),h=new ri,u=new be(new kn(.05*o+.015,.06*o+.02,.16*o+.05,8),c);u.position.y=.08*o+.025,h.add(u);const d=new be(new Co(.055*o+.018,.06*o+.02,8),this.mat({color:"#5a4a7a",roughness:.7}));d.position.y=.19*o+.06,h.add(d);for(const[p,g]of[[-.07,.04],[.07,.04],[0,-.07]]){const _=new be(new kn(.02*o+.008,.025*o+.01,.1*o+.03,7),c);_.position.set(p*o,.05*o+.015,g*o),h.add(_);const m=new be(new Co(.024*o+.009,.035*o+.012,7),d.material);m.position.set(p*o,.115*o+.038,g*o),h.add(m)}h.position.set(-r*.15,a,s*.3),h.rotation.y=.4,this.group.add(h),i.obstacles.push({pos:h.position.clone().add(new T(0,.08*o,0)),radius:.13*o}),i.shelters.push(h.position.clone().add(new T(.06*o,.02,.03)));break}case"airstone":{const c=this.mat({map:Ua("#b8b4ac"),roughness:1}),h=new be(new kn(.016,.02,.02,10),c);h.position.set(r*.72,a+.01,-s*.55),this.group.add(h),i.airstone=h.position.clone();break}}return i}}const Ey=[{id:"amazon-sword",name:"Kiếm Amazon",scientific:"Echinodorus grisebachii",water:"freshwater",kind:"rosette",heightM:.3,colors:["#2e6b2e","#3f8a38","#357a30"],careLevel:"easy",info:"Cây hậu cảnh với lá dài, rộng, đung đưa theo dòng nước."},{id:"vallisneria",name:"Cỏ lươn",scientific:"Vallisneria spiralis",water:"freshwater",kind:"stem",heightM:.42,colors:["#4a9a3a","#5cb04a","#3a8a30"],careLevel:"easy",info:"Lá dài như dải lụa vươn tới mặt nước và uốn theo dòng chảy."},{id:"java-fern",name:"Dương xỉ Java",scientific:"Microsorum pteropus",water:"freshwater",kind:"rosette",heightM:.2,colors:["#2a5c2a","#356e30","#244f24"],careLevel:"easy",info:"Lá dày, xanh đậm; nên buộc vào lũa hoặc đá, không chôn thân rễ."},{id:"anubias",name:"Ráy Nana",scientific:"Anubias barteri var. nana",water:"freshwater",kind:"rosette",heightM:.1,colors:["#1e4a1e","#2a5c26","#183f18"],careLevel:"easy",info:"Lá tròn dày, bóng, tăng trưởng chậm và ít dao động theo dòng nước."},{id:"cryptocoryne",name:"Tiêu thảo",scientific:"Cryptocoryne wendtii",water:"freshwater",kind:"rosette",heightM:.14,colors:["#5a4a2a","#6e5230","#4a6a30"],careLevel:"easy",info:"Lá gợn sóng xanh nâu dùng cho trung cảnh; có thể rụng lá khi thay đổi môi trường."},{id:"java-moss",name:"Rêu Java",scientific:"Taxiphyllum barbieri",water:"freshwater",kind:"moss",heightM:.04,colors:["#3a7a2a","#4a9036","#2e6822"],careLevel:"easy",info:"Tạo thảm rêu mềm trên lũa và đá, là nơi tép tìm thức ăn."},{id:"dwarf-hairgrass",name:"Cỏ tóc tiên lùn",scientific:"Eleocharis parvula",water:"freshwater",kind:"carpet",heightM:.05,colors:["#5ab040","#6ec850","#4a9a34"],careLevel:"moderate",info:"Cây tiền cảnh tạo thảm cỏ mảnh dao động theo dòng nước."},{id:"frogbit",name:"Bèo Amazon",scientific:"Limnobium laevigatum",water:"freshwater",kind:"floating",heightM:.08,colors:["#4a9a3a","#5cb44a"],careLevel:"easy",info:"Cây nổi có rễ dài giúp tạo bóng mát cho cá."},{id:"pulsing-xenia",name:"San hô Xenia nhịp đập",scientific:"Xenia elongata",water:"saltwater",kind:"xenia",heightM:.09,colors:["#c8b8d8","#b8a8cc","#d8cce4"],careLevel:"easy",info:"Các tua nhỏ co mở nhịp nhàng như đang vẫy tay."},{id:"kenya-tree",name:"San hô cây Kenya",scientific:"Capnella imbricata",water:"saltwater",kind:"softcoral",heightM:.14,colors:["#c8a888","#b89878","#d8b898"],careLevel:"easy",info:"San hô mềm phân nhánh, đung đưa theo dòng chảy."},{id:"toadstool",name:"San hô da nấm",scientific:"Sarcophyton sp.",water:"saltwater",kind:"softcoral",heightM:.1,colors:["#c8b878","#d8c888","#b8a868"],careLevel:"easy",info:"Thân hình nấm, phần mũ mang các polyp nhỏ dao động."},{id:"zoanthids",name:"Vườn san hô nút áo",scientific:"Zoanthus sp.",water:"saltwater",kind:"zoa",heightM:.025,colors:["#e85a2a","#3ab8a8","#e8c82a","#c84ae0"],careLevel:"easy",info:"Nhiều polyp nhỏ xếp như thảm hoa dưới nước."},{id:"hammer-coral",name:"San hô búa",scientific:"Euphyllia ancora",water:"saltwater",kind:"lps",heightM:.08,colors:["#4ac8a8","#5ad8b8","#3ab090"],careLevel:"moderate",info:"Tua mềm có đầu hình búa, chuyển động trong dòng nước."},{id:"bubble-anemone",name:"Hải quỳ bong bóng",scientific:"Entacmaea quadricolor",water:"saltwater",kind:"anemone",heightM:.09,colors:["#48b088","#e0685a","#58c098"],careLevel:"moderate",info:"Nơi cá hề thường trú ẩn; các xúc tu căng tròn, uốn theo dòng nước."},{id:"acropora",name:"San hô sừng hươu",scientific:"Acropora sp.",water:"saltwater",kind:"hardcoral",heightM:.12,colors:["#8a5ac8","#5a8ac8","#c85a8a"],careLevel:"advanced",info:"San hô đá phân nhánh giúp tạo cấu trúc rạn."},{id:"brain-coral",name:"San hô não",scientific:"Trachyphyllia geoffroyi",water:"saltwater",kind:"hardcoral",heightM:.05,colors:["#c8683a","#3a9a7a","#c8a83a"],careLevel:"moderate",info:"Bề mặt uốn nếp như não với những dải màu nổi bật."},{id:"montipora-plate",name:"San hô đĩa Montipora",scientific:"Montipora capricornis",water:"saltwater",kind:"hardcoral",heightM:.06,colors:["#e07a3a","#d86a8a"],careLevel:"advanced",info:"Các phiến san hô cứng chồng tầng như cánh hoa bằng đá."}],af=new Map(Ey.map(n=>[n.id,n])),Ty=n=>Ey.filter(e=>e.water===n),Ge=new it,Ut=new Ce;class LC{constructor(){Y(this,"positions",[]);Y(this,"normals",[]);Y(this,"colors",[]);Y(this,"sway",[]);Y(this,"phase",[]);Y(this,"index",[]);Y(this,"offset",0)}add(e,t,i,r,s){const a=e.getAttribute("position"),o=e.getAttribute("normal"),l=new He().getNormalMatrix(t),c=new T,h=new T;for(let d=0;d<a.count;d++){const p=a.getX(d),g=a.getY(d),_=a.getZ(d);c.set(p,g,_).applyMatrix4(t),h.set(o.getX(d),o.getY(d),o.getZ(d)).applyMatrix3(l).normalize(),this.positions.push(c.x,c.y,c.z),this.normals.push(h.x,h.y,h.z),this.colors.push(i.r,i.g,i.b),this.sway.push(r(p,g,_)),this.phase.push(s)}const u=e.getIndex();if(u)for(let d=0;d<u.count;d++)this.index.push(u.getX(d)+this.offset);else for(let d=0;d<a.count;d++)this.index.push(d+this.offset);this.offset+=a.count}build(){const e=new It;return e.setAttribute("position",new Ve(this.positions,3)),e.setAttribute("normal",new Ve(this.normals,3)),e.setAttribute("color",new Ve(this.colors,3)),e.setAttribute("aSway",new Ve(this.sway,1)),e.setAttribute("aPhase",new Ve(this.phase,1)),e.setIndex(this.index),e}}const hh=new ni(1,1,1,6),dh=(()=>{const n=new ni(1,1,2,7),e=n.getAttribute("position");for(let t=0;t<e.count;t++){const i=e.getY(t)+.5;e.setX(t,e.getX(t)*Math.sin(Math.PI*Math.min(1,i*1.05)))}return n.computeVertexNormals(),n})(),fh=new Co(.5,1,5,3),Ar=new ra(.5,7,5),ph=new kn(.5,.6,1,6,2),DC=`
  attribute float aSway;
  attribute float aPhase;
  uniform float uSwayAmp;
  uniform float uSwayFreq;
  uniform float uPulse;      // >0 only for self-pulsing corals (Xenia)
  uniform vec2 uLean;        // static lean from the filter jet at this cluster
`,NC=`
{
  float sw = aSway * aSway; // quadratic: roots pinned, tips move most
  vec4 wp4 = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    wp4 = instanceMatrix * wp4;
  #endif
  vec3 wp = (modelMatrix * wp4).xyz;
  float t = uTime;
  // World-coherent flow (same spirit as the JS CurrentField): one slow wave
  // traveling across the tank + a faster small flutter.
  float w1 = sin(t * uSwayFreq + wp.x * 2.2 + wp.z * 1.6 + aPhase);
  float w2 = sin(t * uSwayFreq * 2.63 + wp.y * 9.0 + aPhase * 2.7);
  transformed.x += sw * ((w1 * 0.7 + w2 * 0.18) * uSwayAmp + uLean.x);
  transformed.z += sw * ((cos(t * uSwayFreq * 0.81 + wp.x * 1.9 + aPhase) * 0.55 + w2 * 0.12) * uSwayAmp + uLean.y);
  // Self-driven pulsing (Xenia): breathe along the normal, per-polyp phase.
  if (uPulse > 0.0) {
    float breathe = 0.5 + 0.5 * sin(t * 1.35 + aPhase * 6.2831);
    transformed += objectNormal * aSway * uPulse * breathe;
  }
}
`,IC={stem:{swayAmp:.035,swayFreq:.9,pulse:0},rosette:{swayAmp:.02,swayFreq:.8,pulse:0},carpet:{swayAmp:.008,swayFreq:1.6,pulse:0},moss:{swayAmp:.004,swayFreq:2.2,pulse:0},floating:{swayAmp:.02,swayFreq:.7,pulse:0},softcoral:{swayAmp:.02,swayFreq:.7,pulse:0},xenia:{swayAmp:.008,swayFreq:.9,pulse:.02},lps:{swayAmp:.028,swayFreq:1.1,pulse:0},anemone:{swayAmp:.022,swayFreq:.9,pulse:.004},zoa:{swayAmp:.006,swayFreq:1.4,pulse:0},hardcoral:{swayAmp:0,swayFreq:0,pulse:0}};class UC{constructor(e){Y(this,"group",new ri);Y(this,"meshes",[]);e.add(this.group)}rebuild(e,t,i,r){for(const o of this.meshes)this.group.remove(o),o.geometry.dispose(),o.material.dispose();this.meshes=[];const s=[];let a=0;for(const[o,l]of Object.entries(e)){const c=af.get(o);if(!c||l<=0)continue;const h=IC[c.kind],u=new LC;for(let f=0;f<l;f++){let v,y,x=t.floorY;const A=["softcoral","xenia","lps","anemone","zoa","hardcoral"].includes(c.kind),C=["java-fern","anubias","java-moss"].includes(c.id);if(c.kind==="floating")v=(Math.random()-.5)*t.halfW*1.7,y=(Math.random()-.5)*t.halfD*1.5,x=t.surfaceY;else if((A||C)&&r.length>0){const P=r[a++%r.length];v=P.x+(Math.random()-.5)*.06,y=P.z+(Math.random()-.5)*.06,x=P.y}else c.kind==="stem"||c.kind==="rosette"?(v=(Math.random()-.5)*t.halfW*1.8,y=-t.halfD*(.25+Math.random()*.65)):(v=(Math.random()-.5)*t.halfW*1.7,y=t.halfD*(Math.random()*1.4-.55));const b=new T(v,x,y);this.buildOne(c,u,b,t),A&&s.push({pos:b.clone().add(new T(0,c.heightM*.5,0)),radius:c.heightM*.7})}const d=u.build(),p=new gi({vertexColors:!0,roughness:.75,metalness:0,side:qt});d.computeBoundingSphere();const g=d.boundingSphere?.center??new T,_=i.sample(g,new T);$c(p,{caustics:!0,causticStrength:.85,vertexPars:DC,vertexHook:NC,extraUniforms:{uSwayAmp:{value:h.swayAmp},uSwayFreq:{value:h.swayFreq},uPulse:{value:h.pulse},uLean:{value:new ae(_.x*.5,_.z*.5)}}});const m=new be(d,p);m.frustumCulled=!1,this.group.add(m),this.meshes.push(m)}return{obstacles:s}}buildOne(e,t,i,r){const s=r.surfaceY-r.floorY,a=Math.min(e.heightM*(.75+Math.random()*.5),s*.88),o=e.colors.map(u=>new Ce(u).multiplyScalar(.72)),l=()=>o[Math.floor(Math.random()*o.length)],c=Math.random(),h=(u,d)=>Re.clamp(d+.5,0,1);switch(e.kind){case"stem":{const u=5+Math.floor(Math.random()*5);for(let d=0;d<u;d++){const p=a*(.7+Math.random()*.5);Ge.compose(new T(i.x+(Math.random()-.5)*.05,i.y+p/2,i.z+(Math.random()-.5)*.05),new xt().setFromEuler(new Rt(0,Math.random()*Math.PI,(Math.random()-.5)*.15)),new T(.012+Math.random()*.006,p,1)),t.add(hh,Ge,Ut.copy(l()).multiplyScalar(.8+Math.random()*.4),h,c+d*.13)}break}case"rosette":{const u=7+Math.floor(Math.random()*6);for(let d=0;d<u;d++){const p=d/u*Math.PI*2+Math.random()*.5,g=.35+Math.random()*.55,_=a*(.75+Math.random()*.45);Ge.compose(new T(i.x+Math.cos(p)*.015,i.y+_/2*Math.cos(g*.8),i.z+Math.sin(p)*.015),new xt().setFromEuler(new Rt(Math.sin(p)*g,-p,Math.cos(p)*g,"YXZ")),new T(_*(e.id==="amazon-sword"?.3:e.id==="anubias"?.55:.35),_,1)),t.add(dh,Ge,Ut.copy(l()).multiplyScalar(.75+Math.random()*.5),h,c+d*.11)}break}case"carpet":{for(let d=0;d<24;d++){const p=a*(.6+Math.random()*.8);Ge.compose(new T(i.x+(Math.random()-.5)*.09,i.y+p/2,i.z+(Math.random()-.5)*.09),new xt().setFromEuler(new Rt((Math.random()-.5)*.4,Math.random()*Math.PI,(Math.random()-.5)*.4)),new T(.004,p,1)),t.add(hh,Ge,Ut.copy(l()).multiplyScalar(.8+Math.random()*.5),h,Math.random())}break}case"moss":{for(let u=0;u<30;u++)Ge.compose(new T(i.x+(Math.random()-.5)*.08,i.y+Math.random()*a,i.z+(Math.random()-.5)*.08),new xt().setFromEuler(new Rt(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),new T(.014,.02,1)),t.add(dh,Ge,Ut.copy(l()).multiplyScalar(.6+Math.random()*.7),()=>.4+Math.random()*.4,Math.random());break}case"floating":{const u=5+Math.floor(Math.random()*3);for(let d=0;d<u;d++){const p=d/u*Math.PI*2;Ge.compose(new T(i.x+Math.cos(p)*.018,i.y-.004,i.z+Math.sin(p)*.018),new xt().setFromEuler(new Rt(-Math.PI/2+.15,-p,0,"YXZ")),new T(.03,.035,1)),t.add(dh,Ge,Ut.copy(l()),()=>.15,c)}for(let d=0;d<5;d++){const p=.05+Math.random()*a;Ge.compose(new T(i.x+(Math.random()-.5)*.02,i.y-p/2,i.z+(Math.random()-.5)*.02),new xt,new T(.0015,p,1)),t.add(hh,Ge,Ut.set("#c8c0a0"),(g,_)=>1-(_+.5),Math.random())}break}case"softcoral":{const u=a*.5;if(Ge.compose(new T(i.x,i.y+u/2,i.z),new xt,new T(a*.22,u,a*.22)),t.add(ph,Ge,Ut.copy(l()).multiplyScalar(.85),h,c),e.id==="toadstool")Ge.compose(new T(i.x,i.y+u+a*.08,i.z),new xt,new T(a*.85,a*.22,a*.85)),t.add(Ar,Ge,Ut.copy(l()),()=>.75,c+.3);else for(let d=0;d<8;d++){const p=Math.random()*Math.PI*2,g=Math.random()*a*.3;Ge.compose(new T(i.x+Math.cos(p)*g,i.y+u+Math.random()*a*.4,i.z+Math.sin(p)*g),new xt().setFromEuler(new Rt(Math.random(),Math.random(),Math.random())),new T(a*.28,a*.3,a*.28)),t.add(Ar,Ge,Ut.copy(l()).multiplyScalar(.8+Math.random()*.4),()=>.7+Math.random()*.3,Math.random())}break}case"xenia":{const u=5+Math.floor(Math.random()*4);for(let d=0;d<u;d++){const p=i.x+(Math.random()-.5)*.05,g=i.z+(Math.random()-.5)*.05,_=a*(.6+Math.random()*.5);Ge.compose(new T(p,i.y+_/2,g),new xt,new T(.008,_,.008)),t.add(ph,Ge,Ut.copy(l()).multiplyScalar(.8),h,d*.17),Ge.compose(new T(p,i.y+_+.008,g),new xt,new T(.028,.02,.028)),t.add(Ar,Ge,Ut.copy(l()),()=>1,d*.17+Math.random()*.1)}break}case"lps":{for(let u=0;u<26;u++){const d=Math.random()*Math.PI*2,p=Math.random()*a*.45,g=a*(.7+Math.random()*.6);Ge.compose(new T(i.x+Math.cos(d)*p,i.y+g/2,i.z+Math.sin(d)*p),new xt().setFromEuler(new Rt((Math.random()-.5)*.7,0,(Math.random()-.5)*.7)),new T(.014,g,.014)),t.add(fh,Ge,Ut.copy(l()).multiplyScalar(.8+Math.random()*.5),h,Math.random())}break}case"anemone":{Ge.compose(new T(i.x,i.y+a*.12,i.z),new xt,new T(a*.7,a*.3,a*.7)),t.add(Ar,Ge,Ut.copy(o[0]).multiplyScalar(.7),()=>.1,c);for(let u=0;u<34;u++){const d=Math.random()*Math.PI*2,p=Math.random()*a*.32,g=a*(.5+Math.random()*.55);Ge.compose(new T(i.x+Math.cos(d)*p,i.y+a*.2+g/2,i.z+Math.sin(d)*p),new xt().setFromEuler(new Rt(Math.cos(d)*.5,0,-Math.sin(d)*.5)),new T(.016,g,.016)),t.add(fh,Ge,Ut.copy(o[1%o.length]).multiplyScalar(.85+Math.random()*.35),h,Math.random())}break}case"zoa":{for(let u=0;u<22;u++){const d=i.x+(Math.random()-.5)*.09,p=i.z+(Math.random()-.5)*.09,g=a*(.6+Math.random()*.6);Ge.compose(new T(d,i.y+g/2,p),new xt,new T(.006,g,.006)),t.add(ph,Ge,Ut.set("#7a6a58"),h,Math.random()),Ge.compose(new T(d,i.y+g,p),new xt,new T(.02,.005,.02)),t.add(Ar,Ge,Ut.copy(l()),()=>.9,Math.random())}break}case"hardcoral":{if(e.id==="brain-coral")Ge.compose(new T(i.x,i.y+a*.4,i.z),new xt,new T(a*1.6,a*.8,a*1.4)),t.add(Ar,Ge,Ut.copy(l()),()=>0,c);else if(e.id==="montipora-plate")for(let u=0;u<3;u++)Ge.compose(new T(i.x+(Math.random()-.5)*.04,i.y+a*(.3+u*.3),i.z+(Math.random()-.5)*.04),new xt().setFromEuler(new Rt((Math.random()-.5)*.3,Math.random(),(Math.random()-.5)*.3)),new T(a*(1.5-u*.3),a*.08,a*(1.5-u*.3))),t.add(Ar,Ge,Ut.copy(l()).multiplyScalar(.85+u*.12),()=>0,c);else for(let u=0;u<12;u++){const d=Math.random()*Math.PI*2,p=Math.random()*a*.35,g=a*(.5+Math.random()*.7);Ge.compose(new T(i.x+Math.cos(d)*p,i.y+g/2,i.z+Math.sin(d)*p),new xt().setFromEuler(new Rt(Math.cos(d)*.45,0,-Math.sin(d)*.45)),new T(.02,g,.02)),t.add(fh,Ge,Ut.copy(l()).multiplyScalar(.75+Math.random()*.5),()=>0,Math.random())}break}}}}const qe=n=>({height:.32,width:.45,noseSharp:.5,tailFork:.6,tailSize:.22,dorsalHeight:.35,analHeight:.25,finLong:!1,eyeSize:.05,...n}),$e=n=>({base:"#9db4c0",belly:"#e8eef2",back:"#54707e",fin:"#b8ccd6",finOpacity:.55,pattern:"none",patternColor:"#ffffff",iridescence:.2,...n}),Ke=n=>({cruise:1.4,burst:3.2,freqBase:2.2,waveLen:.95,amp:.2,mode:1,turnRate:2.6,...n}),by=[{id:"neon-tetra",common:"Cá neon xanh",scientific:"Paracheirodon innesi",water:"freshwater",adultSizeIn:1.5,lengthM:.038,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Suối nước đen dưới tán rừng lưu vực Amazon.",funFact:"Sọc xanh phát sáng nhạt đi khi nghỉ đêm; màu này hình thành nhờ cấu trúc phản xạ ánh sáng.",colorTags:["blue","red","silver"],shape:qe({height:.28,noseSharp:.35,tailFork:.65,eyeSize:.07}),palette:$e({base:"#b8d4e6",belly:"#f0f4f6",back:"#5a748a",pattern:"hstripe",patternColor:"#27d3f5",patternColor2:"#e8262d",iridescence:.75,fin:"#cfe3ee",finOpacity:.35}),swim:Ke({cruise:1.6,freqBase:3,turnRate:3.4})},{id:"cardinal-tetra",common:"Cá neon vua",scientific:"Paracheirodon axelrodi",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:15,habitat:"Phụ lưu Rio Negro và Orinoco ở Nam Mỹ.",funFact:"Dải đỏ chạy gần hết chiều dài thân, khác với cá neon xanh thường.",colorTags:["blue","red"],shape:qe({height:.28,noseSharp:.35,tailFork:.65,eyeSize:.07}),palette:$e({base:"#e0453a",belly:"#f2b8ae",back:"#4a5f78",pattern:"hstripe",patternColor:"#2bc8f0",patternColor2:"#e0453a",iridescence:.75,patternParams:[1],finOpacity:.35}),swim:Ke({cruise:1.5,freqBase:2.9,turnRate:3.2})},{id:"ember-tetra",common:"Cá hồng lửa",scientific:"Hyphessobrycon amandae",water:"freshwater",adultSizeIn:.8,lengthM:.02,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:8,bioload:.4,minGallons:5,habitat:"Các nhánh sông chảy chậm, màu trà ở lưu vực Araguaia, Brazil.",funFact:"Cá nhỏ màu cam như than hồng, nổi bật khi bơi theo đàn trên nền đáy tối.",colorTags:["orange","red"],shape:qe({height:.3,noseSharp:.3,tailFork:.55,eyeSize:.08}),palette:$e({base:"#e8702a",belly:"#f0a878",back:"#d85a1e",pattern:"none",fin:"#e88a4a",finOpacity:.45,iridescence:.5}),swim:Ke({cruise:1.4,freqBase:3.2,turnRate:3.6})},{id:"rummynose-tetra",common:"Cá mũi đỏ",scientific:"Hemigrammus rhodostomus",water:"freshwater",adultSizeIn:2,lengthM:.048,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:20,habitat:"Các dòng nước đen mềm, hơi axit ở hạ lưu Amazon.",funFact:"Màu đỏ trên mũi có thể nhạt đi khi môi trường nước không thuận lợi.",colorTags:["red","silver","black"],shape:qe({height:.26,noseSharp:.4,tailFork:.7}),palette:$e({base:"#c9d6da",belly:"#eef2f3",back:"#8fa5ab",pattern:"headpatch",patternColor:"#e03222",patternColor2:"#222831",iridescence:.45,finOpacity:.5}),swim:Ke({cruise:1.7,freqBase:3.1,turnRate:3})},{id:"harlequin-rasbora",common:"Cá lòng tong tam giác",scientific:"Trigonostigma heteromorpha",water:"freshwater",adultSizeIn:2,lengthM:.042,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Suối rừng đầm than bùn ở Malaysia, Singapore và Sumatra.",funFact:"Vệt đen hình tam giác bên sườn là dấu hiệu dễ nhận biết.",colorTags:["orange","black","pink"],shape:qe({height:.34,noseSharp:.3,tailFork:.6}),palette:$e({base:"#e8946a",belly:"#f4c9a8",back:"#c96f4a",pattern:"lateralline",patternColor:"#1d2126",iridescence:.4,patternParams:[.45],fin:"#e8a880"}),swim:Ke({cruise:1.4,freqBase:2.7,turnRate:3})},{id:"zebra-danio",common:"Cá ngựa vằn",scientific:"Danio rerio",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Suối mát chảy nhanh và ruộng lúa từ Ấn Độ đến Bangladesh.",funFact:"Loài này thường được nghiên cứu trong sinh học vì phôi trong suốt và khả năng tái tạo mô.",colorTags:["blue","gold","silver"],shape:qe({height:.24,noseSharp:.45,tailFork:.55}),palette:$e({base:"#d8cfa8",belly:"#f2ecd6",back:"#9a8f6a",pattern:"hstripe",patternColor:"#3a4a8c",patternParams:[3],iridescence:.5}),swim:Ke({cruise:2.4,burst:3.6,freqBase:3.6,turnRate:3.8})},{id:"tiger-barb",common:"Cá tứ vân",scientific:"Puntigrus tetrazona",water:"freshwater",adultSizeIn:3,lengthM:.06,temperament:"semi-aggressive",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:2,minGallons:20,habitat:"Vùng nước trong và đục ở Sumatra, Borneo.",funFact:"Nuôi theo đàn đủ lớn có thể giúp phân tán hành vi rỉa vây đối với bạn cùng bể.",colorTags:["orange","black","gold"],shape:qe({height:.42,noseSharp:.35,tailFork:.6}),palette:$e({base:"#e8b04a",belly:"#f4d9a0",back:"#c98a30",pattern:"vbars",patternColor:"#16181d",patternParams:[4],fin:"#e05a2a",finOpacity:.75,iridescence:.3}),swim:Ke({cruise:1.8,freqBase:3,turnRate:3.4,mode:1})},{id:"guppy",common:"Cá bảy màu",scientific:"Poecilia reticulata",water:"freshwater",adultSizeIn:1.8,lengthM:.035,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"schooler",minGroup:3,bioload:1,minGallons:5,habitat:"Suối ấm, ao và kênh rạch vùng đông bắc Nam Mỹ.",funFact:"Cá đực có nhiều kiểu màu và hoa văn đuôi khác nhau.",colorTags:["orange","blue","yellow","rainbow"],shape:qe({height:.3,noseSharp:.3,tailFork:.1,tailSize:.38,finLong:!0,dorsalHeight:.5}),palette:$e({base:"#a8bcd0",belly:"#e6edf2",back:"#7a90a8",pattern:"spots",patternColor:"#e8642a",patternColor2:"#3a6ae0",fin:"#ffa03a",finOpacity:.85,iridescence:.65}),swim:Ke({cruise:1.2,freqBase:2.6,turnRate:3,mode:3})},{id:"betta",common:"Cá xiêm Betta",scientific:"Betta splendens",water:"freshwater",adultSizeIn:2.8,lengthM:.06,temperament:"aggressive",careLevel:"easy",zone:"top",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:3,minGallons:5,mouthIn:.8,habitat:"Ruộng lúa và đầm nước tĩnh, nông ở Thái Lan.",funFact:"Có cơ quan hô hấp phụ giúp lấy oxy không khí; cá đực tạo tổ bọt khi sinh sản.",colorTags:["red","blue","purple"],shape:qe({height:.34,noseSharp:.25,tailFork:0,tailSize:.45,finLong:!0,dorsalHeight:.6,analHeight:.65}),palette:$e({base:"#5a3ae0",belly:"#8a6ae8",back:"#3a20a8",fin:"#e03a5a",finOpacity:.8,pattern:"none",iridescence:.8}),swim:Ke({cruise:.7,burst:2.6,freqBase:1.6,mode:3,turnRate:2.4,amp:.14})},{id:"dwarf-gourami",common:"Cá sặc gấm",scientific:"Trichogaster lalius",water:"freshwater",adultSizeIn:3.5,lengthM:.075,temperament:"peaceful",careLevel:"moderate",zone:"top",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:3,minGallons:10,habitat:"Nước chảy chậm, nhiều cây thủy sinh tại Ấn Độ và Bangladesh.",funFact:"Hai vây bụng dài như sợi râu giúp cá cảm nhận môi trường xung quanh.",colorTags:["red","blue","orange"],shape:qe({height:.5,width:.32,noseSharp:.3,tailFork:.15,dorsalHeight:.45}),palette:$e({base:"#e05a3a",belly:"#f0b090",back:"#c04028",pattern:"vbars",patternColor:"#3ab8e8",patternParams:[7,.4],fin:"#e88a5a",finOpacity:.7,iridescence:.55}),swim:Ke({cruise:.8,freqBase:1.8,mode:2,turnRate:2.2,amp:.15})},{id:"honey-gourami",common:"Cá sặc mật ong",scientific:"Trichogaster chuna",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:2,minGallons:10,habitat:"Suối và vùng đồng bằng ngập nước nhiều cây ở Ấn Độ, Bangladesh.",funFact:"Cá đực chuyển màu vàng mật nổi bật khi sinh sản và có thể tạo tổ bọt.",colorTags:["orange","yellow","gold"],shape:qe({height:.44,width:.3,noseSharp:.3,tailFork:.15,dorsalHeight:.4,analHeight:.45}),palette:$e({base:"#e8a838",belly:"#f2d488",back:"#d8881f",pattern:"none",fin:"#f0bc50",finOpacity:.7,iridescence:.45}),swim:Ke({cruise:.75,freqBase:1.8,mode:2,turnRate:2.2,amp:.15})},{id:"angelfish",common:"Cá ông tiên",scientific:"Pterophyllum scalare",water:"freshwater",adultSizeIn:6,lengthM:.1,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"hoverer",minGroup:1,bioload:8,minGallons:29,mouthIn:1.6,habitat:"Nhánh sông Amazon nhiều rễ cây và thân thực vật chìm.",funFact:"Thân cao, mỏng và sọc dọc giúp cá ẩn mình giữa những bụi cây.",colorTags:["silver","black"],shape:qe({height:.85,width:.18,noseSharp:.45,tailFork:.2,tailSize:.28,finLong:!0,dorsalHeight:.9,analHeight:.9}),palette:$e({base:"#c8d2d8",belly:"#e8edf0",back:"#98a8b2",pattern:"vbars",patternColor:"#23272e",patternParams:[3,.9],fin:"#b8c4cc",finOpacity:.65,iridescence:.35}),swim:Ke({cruise:.55,burst:2.8,freqBase:1.4,mode:2,turnRate:1.8,amp:.12})},{id:"german-blue-ram",common:"Cá phượng hoàng lam",scientific:"Mikrogeophagus ramirezi",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"advanced",zone:"bottom",archetype:"solitary",minGroup:1,maxPerTank:2,bioload:2,minGallons:20,habitat:"Ao nông ấm tại lưu vực Orinoco, Venezuela và Colombia.",funFact:"Cá bố mẹ có thể thay phiên quạt nước cho trứng và dẫn đàn cá con.",colorTags:["blue","yellow","black"],shape:qe({height:.45,noseSharp:.35,tailFork:.3,dorsalHeight:.55}),palette:$e({base:"#e8d060",belly:"#f2e8a8",back:"#c8a840",pattern:"spots",patternColor:"#3a8ae8",patternColor2:"#16181d",fin:"#e8b83a",finOpacity:.7,iridescence:.7}),swim:Ke({cruise:.8,freqBase:2,mode:2,turnRate:2.6})},{id:"boesemani-rainbow",common:"Cá cầu vồng Boesemani",scientific:"Melanotaenia boesemani",water:"freshwater",adultSizeIn:4,lengthM:.085,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:4,minGallons:40,habitat:"Hồ Ayamaru tại Tây Papua, Indonesia.",funFact:"Thân cá chia hai vùng màu xanh và cam; màu của cá đực đậm hơn khi phô diễn.",colorTags:["blue","orange","rainbow"],shape:qe({height:.4,noseSharp:.4,tailFork:.5}),palette:$e({base:"#7a9ae0",belly:"#b8c8e8",back:"#4a6ac0",pattern:"headpatch",patternColor:"#5a7ae0",patternColor2:"#00000000",iridescence:.8,fin:"#e8983a",finOpacity:.7,patternParams:[.55]}),swim:Ke({cruise:1.6,freqBase:2.4,turnRate:2.8})},{id:"corydoras",common:"Cá chuột đồng",scientific:"Corydoras aeneus",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:2,minGallons:20,habitat:"Suối có đáy cát trên khắp Nam Mỹ.",funFact:"Thỉnh thoảng lao lên mặt nước lấy không khí và có thể chuyển động mắt như đang nháy.",colorTags:["bronze","green"],shape:qe({height:.38,width:.55,noseSharp:.6,tailFork:.5,dorsalHeight:.55,barbels:!0,eyeSize:.06}),palette:$e({base:"#b09a6a",belly:"#e0d2b0",back:"#6a5a3a",pattern:"none",iridescence:.5,fin:"#c8b890",finOpacity:.5}),swim:Ke({cruise:.9,burst:6,freqBase:2.4,mode:1,turnRate:3})},{id:"albino-corydoras",common:"Cá chuột bạch tạng",scientific:"Corydoras aeneus (albino)",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:2,minGallons:20,habitat:"Dòng cá chuột đồng được nhân giống trong bể từ loài gốc Nam Mỹ.",funFact:"Thân trắng hồng và mắt đỏ do thiếu sắc tố; vẫn giữ tập tính kiếm ăn ở đáy.",colorTags:["white","pink"],shape:qe({height:.38,width:.55,noseSharp:.6,tailFork:.5,dorsalHeight:.55,barbels:!0,eyeSize:.06}),palette:$e({base:"#f0dcc4",belly:"#faf2e2",back:"#e6cbaa",pattern:"none",fin:"#f4e4cc",finOpacity:.5,iridescence:.35,eyeColor:"#c03038"}),swim:Ke({cruise:.9,burst:6,freqBase:2.4,mode:1,turnRate:3})},{id:"bristlenose-pleco",common:"Cá lau kiếng râu",scientific:"Ancistrus cirrhosus",water:"freshwater",adultSizeIn:5,lengthM:.1,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"ambusher",minGroup:1,maxPerTank:1,bioload:8,minGallons:29,habitat:"Sông nhiều oxy, chảy nhanh thuộc lưu vực Amazon.",funFact:"Cá đực có những tua thịt ở mõm; miệng dạng giác hút giúp bám vào đá.",colorTags:["brown","black"],shape:qe({height:.3,width:.75,noseSharp:.85,tailFork:.3,dorsalHeight:.6,barbels:!0,eyeSize:.04}),palette:$e({base:"#5a4a36",belly:"#8a7a60",back:"#3a3026",pattern:"spots",patternColor:"#d8c8a0",fin:"#4a4030",finOpacity:.9,iridescence:.05}),swim:Ke({cruise:.5,burst:2.4,freqBase:1.6,mode:1,turnRate:2})},{id:"zebra-oto",common:"Cá oto sọc ngựa vằn",scientific:"Otocinclus cocama",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"cleaner",minGroup:6,bioload:.6,minGallons:10,habitat:"Suối nước trong, nhiều oxy tại lưu vực Ucayali ở Peru.",funFact:"Miệng hút dùng để cạo lớp tảo mỏng trên kính và lá cây.",colorTags:["black","cream","brown"],shape:qe({height:.24,width:.55,noseSharp:.45,tailFork:.4,tailSize:.2,dorsalHeight:.45,eyeSize:.06}),palette:$e({base:"#d8c4a0",belly:"#efe6d2",back:"#3a3026",pattern:"vbars",patternColor:"#2a2018",patternParams:[7,.7],fin:"#cfc0a0",finOpacity:.55,iridescence:.15}),swim:Ke({cruise:.7,burst:3.5,freqBase:2.4,mode:1,turnRate:3.2})},{id:"kuhli-loach",common:"Cá chạch kuhli",scientific:"Pangio kuhlii",water:"freshwater",adultSizeIn:4,lengthM:.08,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"nocturnal",minGroup:5,bioload:1,minGallons:20,habitat:"Đáy suối rừng phủ lá mục ở Đông Nam Á.",funFact:"Thường ẩn vào ban ngày và hoạt động mạnh hơn khi trời tối.",colorTags:["orange","black"],shape:qe({height:.11,width:.9,noseSharp:.5,tailFork:0,tailSize:.08,dorsalHeight:.12,analHeight:.1,eelLike:!0,barbels:!0,eyeSize:.04}),palette:$e({base:"#e8a04a",belly:"#f2cea0",back:"#d8903a",pattern:"vbars",patternColor:"#241c14",patternParams:[9],fin:"#e8b06a",finOpacity:.5,iridescence:.1}),swim:Ke({cruise:.9,freqBase:2.2,waveLen:.62,amp:.16,mode:0,turnRate:3.6})},{id:"hillstream-loach",common:"Cá bám đá suối",scientific:"Sewellia lineolata",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:2,minGallons:20,habitat:"Suối nông chảy xiết, giàu oxy tại miền Trung Việt Nam.",funFact:"Thân dẹp giúp bám đá trong dòng chảy và gặm tảo trên bề mặt.",colorTags:["gold","black","brown"],shape:qe({height:.13,width:4,noseSharp:.15,tailFork:.15,tailSize:.15,dorsalHeight:.22,analHeight:.1,eyeSize:.05}),palette:$e({base:"#c8a458",belly:"#e8d8b8",back:"#a8854a",pattern:"mottle",patternColor:"#2a2418",fin:"#c8ae6a",finOpacity:.75,iridescence:.15}),swim:Ke({cruise:.5,burst:4,freqBase:2,mode:1,amp:.1,turnRate:3})},{id:"cherry-shrimp",common:"Tép anh đào đỏ",scientific:"Neocaridina davidi",water:"freshwater",adultSizeIn:1.2,lengthM:.025,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:.2,minGallons:5,invert:!0,habitat:"Suối và ao ở Đài Loan; dạng đỏ được chọn giống để nuôi cảnh.",funFact:"Tép lột xác khi lớn và đôi khi ăn lại vỏ cũ để thu hồi khoáng chất.",colorTags:["red"],shape:qe({height:.22,width:.5,noseSharp:.7,tailFork:0,tailSize:.12,dorsalHeight:.05,analHeight:.05,eelLike:!0}),palette:$e({base:"#e02a2a",belly:"#f08a7a",back:"#c01a1a",pattern:"none",iridescence:.15,finOpacity:.3}),swim:Ke({cruise:.35,burst:5,freqBase:1.5,mode:3,turnRate:4})},{id:"nerite-snail",common:"Ốc Nerita ăn rêu",scientific:"Neritina natalensis",water:"freshwater",adultSizeIn:1,lengthM:.02,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.2,minGallons:5,invert:!0,habitat:"Cửa sông nước lợ ở Đông Phi.",funFact:"Thường bò trên kính và gặm từng vệt tảo mỏng.",colorTags:["gold","black"],shape:qe({height:.6,width:.8,noseSharp:0,tailFork:0,tailSize:.01,dorsalHeight:0,analHeight:0}),palette:$e({base:"#c8a030",belly:"#e8d8a0",back:"#8a6a1a",pattern:"hstripe",patternColor:"#2a2018",patternParams:[3],iridescence:.1,finOpacity:0}),swim:Ke({cruise:.02,burst:1,freqBase:0,mode:3,turnRate:.5})},{id:"ocellaris-clown",common:"Cá hề Nemo",scientific:"Amphiprion ocellaris",water:"saltwater",adultSizeIn:3.5,lengthM:.07,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:4,minGallons:10,reefSafe:!0,habitat:"Rạn san hô Ấn Độ Dương - Thái Bình Dương, thường gần hải quỳ.",funFact:"Trong một nhóm, con lớn nhất là cá cái; cá đực đầu đàn có thể đổi giới tính khi cần.",colorTags:["orange","white","black"],shape:qe({height:.45,width:.4,noseSharp:.25,tailFork:.1,tailSize:.25,dorsalHeight:.4}),palette:$e({base:"#f07820",belly:"#f8a860",back:"#e06010",pattern:"vbars",patternColor:"#f8f8f4",patternColor2:"#16181d",patternParams:[3,1],fin:"#f08030",finOpacity:.95,iridescence:.25}),swim:Ke({cruise:.9,freqBase:2.6,mode:3,amp:.16,turnRate:3.2})},{id:"blue-tang",common:"Cá đuôi gai xanh Dory",scientific:"Paracanthurus hepatus",water:"saltwater",adultSizeIn:11,lengthM:.14,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:16,minGallons:90,reefSafe:!0,habitat:"Rìa rạn san hô vùng Ấn Độ Dương - Thái Bình Dương.",funFact:"Có gai sắc gần gốc đuôi để tự vệ và thường lẩn vào khe san hô.",colorTags:["blue","yellow","black"],shape:qe({height:.55,width:.22,noseSharp:.5,tailFork:.35,dorsalHeight:.45}),palette:$e({base:"#2858e8",belly:"#4a78e8",back:"#1a3ac8",pattern:"lateralline",patternColor:"#10141c",patternParams:[.7],fin:"#f0d020",finOpacity:.95,iridescence:.5}),swim:Ke({cruise:1.3,freqBase:2,mode:2,turnRate:2.4})},{id:"yellow-tang",common:"Cá đuôi gai vàng",scientific:"Zebrasoma flavescens",water:"saltwater",adultSizeIn:8,lengthM:.12,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:12,minGallons:75,reefSafe:!0,habitat:"Rạn san hô nông ở Hawaii, kiếm ăn trên những mảng tảo.",funFact:"Màu vàng có thể nhạt đi khi ngủ và một vệt sáng bên thân hiện rõ hơn.",colorTags:["yellow"],shape:qe({height:.7,width:.2,noseSharp:.7,tailFork:.15,dorsalHeight:.7,analHeight:.6}),palette:$e({base:"#f2cc0a",belly:"#f8e060",back:"#e0b800",pattern:"none",fin:"#f2d020",finOpacity:.95,iridescence:.3}),swim:Ke({cruise:1.1,freqBase:1.9,mode:2,turnRate:2.6})},{id:"royal-gramma",common:"Cá hoàng gia tím vàng",scientific:"Gramma loreto",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"ambusher",minGroup:1,maxPerTank:1,bioload:3,minGallons:20,reefSafe:!0,habitat:"Hang và mái đá rạn san hô Caribe.",funFact:"Có thể bơi ngược bụng lên trên khi bám sát trần hang.",colorTags:["purple","yellow"],shape:qe({height:.32,noseSharp:.3,tailFork:.2,dorsalHeight:.4}),palette:$e({base:"#8a2ae0",belly:"#a85ae8",back:"#6a1ac0",pattern:"headpatch",patternColor:"#8a2ae0",patternColor2:"#f2c80a",patternParams:[.5,1],fin:"#b060e8",finOpacity:.8,iridescence:.5}),swim:Ke({cruise:.8,burst:4,freqBase:2.4,mode:1,turnRate:3.4})},{id:"green-chromis",common:"Cá thia xanh ngọc",scientific:"Chromis viridis",water:"saltwater",adultSizeIn:3.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:5,bioload:2,minGallons:30,reefSafe:!0,habitat:"Đàn cá lấp lánh phía trên các nhánh san hô ở đầm rạn.",funFact:"Cả đàn đồng loạt lao vào nhánh san hô khi có bóng đen xuất hiện.",colorTags:["green","blue","silver"],shape:qe({height:.36,noseSharp:.35,tailFork:.75}),palette:$e({base:"#8ae0c0",belly:"#c8f0e0",back:"#4ac0a0",pattern:"none",iridescence:.85,fin:"#a8e8d0",finOpacity:.5}),swim:Ke({cruise:1.5,freqBase:2.8,turnRate:3.2})},{id:"firefish",common:"Cá phi tiêu lửa",scientific:"Nemateleotris magnifica",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:2,minGallons:20,reefSafe:!0,habitat:"Khu đá vụn ở rạn, gần hang trú ẩn.",funFact:"Thường lơ lửng ngược dòng và chui nhanh vào hang khi bị giật mình.",colorTags:["white","red","orange"],shape:qe({height:.22,noseSharp:.3,tailFork:.25,dorsalHeight:1.1,tailSize:.28}),palette:$e({base:"#f2ede0",belly:"#f8f4ea",back:"#e8e0d0",pattern:"headpatch",patternColor:"#f2ede0",patternColor2:"#d82a10",patternParams:[.45,-1],fin:"#e85a2a",finOpacity:.8,iridescence:.3}),swim:Ke({cruise:.6,burst:5,freqBase:2.2,mode:3,amp:.14,turnRate:3.6})},{id:"banggai-cardinal",common:"Cá sơn Banggai",scientific:"Pterapogon kauderni",water:"saltwater",adultSizeIn:3,lengthM:.065,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"hoverer",minGroup:1,bioload:3,minGallons:30,reefSafe:!0,habitat:"Vùng biển quanh quần đảo Banggai, Indonesia.",funFact:"Cá đực ngậm và ấp trứng trong miệng nhiều tuần.",colorTags:["silver","black","white"],shape:qe({height:.55,width:.25,noseSharp:.35,tailFork:.5,finLong:!0,dorsalHeight:.8,analHeight:.7,tailSize:.3}),palette:$e({base:"#c8ccd2",belly:"#e8eaee",back:"#a8adb6",pattern:"vbars",patternColor:"#14161c",patternParams:[3,1.2],fin:"#d0d4da",finOpacity:.55,iridescence:.4}),swim:Ke({cruise:.45,freqBase:1.6,mode:2,amp:.12,turnRate:2})},{id:"sixline-wrasse",common:"Cá bàng chài sáu sọc",scientific:"Pseudocheilinus hexataenia",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"semi-aggressive",careLevel:"easy",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:3,minGallons:30,reefSafe:!0,habitat:"Giữa các nhánh san hô vùng Ấn Độ Dương - Thái Bình Dương.",funFact:"Có thể tạo lớp kén chất nhầy để nghỉ đêm và giảm mùi thu hút kẻ săn mồi.",colorTags:["purple","orange"],shape:qe({height:.26,noseSharp:.55,tailFork:.2}),palette:$e({base:"#c05ae0",belly:"#d88ae8",back:"#a03ac8",pattern:"hstripe",patternColor:"#f09030",patternParams:[3],fin:"#c87ae0",finOpacity:.7,iridescence:.6}),swim:Ke({cruise:1.4,freqBase:2.8,mode:1,turnRate:3.8})},{id:"lawnmower-blenny",common:"Cá bống cạo rêu",scientific:"Salarias fasciatus",water:"saltwater",adultSizeIn:5,lengthM:.09,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:1,maxPerTank:1,bioload:5,minGallons:30,reefSafe:!0,habitat:"Bãi đá rạn san hô Ấn Độ Dương - Thái Bình Dương.",funFact:"Tựa lên vây như chống khuỷu tay, quan sát xung quanh khi gặm tảo.",colorTags:["brown","green"],shape:qe({height:.28,width:.6,noseSharp:.1,tailFork:0,dorsalHeight:.5,eyeSize:.08,eelLike:!0}),palette:$e({base:"#8a8a6a",belly:"#b8b89a",back:"#5a5a44",pattern:"mottle",patternColor:"#3c3c2c",fin:"#9a9a7a",finOpacity:.6,iridescence:.05}),swim:Ke({cruise:.5,burst:4,freqBase:2,mode:0,waveLen:.7,turnRate:3.2})},{id:"flame-angel",common:"Cá thiên thần lửa",scientific:"Centropyge loriculus",water:"saltwater",adultSizeIn:4,lengthM:.08,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:6,minGallons:55,reefSafe:!1,habitat:"Các sườn rạn đá vụn ở Thái Bình Dương.",funFact:"Màu đỏ cam rất nổi bật nhưng có thể rỉa san hô mềm.",colorTags:["red","orange","black"],shape:qe({height:.5,width:.25,noseSharp:.35,tailFork:.15,dorsalHeight:.5}),palette:$e({base:"#e83010",belly:"#f06a40",back:"#d02008",pattern:"vbars",patternColor:"#1a1c24",patternParams:[4,.6],fin:"#e84020",finOpacity:.9,iridescence:.4}),swim:Ke({cruise:1,freqBase:2.2,mode:2,turnRate:3})},{id:"cleaner-shrimp",common:"Tép bác sĩ sọc đỏ",scientific:"Lysmata amboinensis",water:"saltwater",adultSizeIn:2.5,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.5,minGallons:20,reefSafe:!0,invert:!0,habitat:"Các điểm làm sạch ký sinh trên rạn san hô.",funFact:"Cá thường đứng yên để tép làm sạch da và mang.",colorTags:["red","white","yellow"],shape:qe({height:.2,width:.45,noseSharp:.75,tailFork:0,tailSize:.14,dorsalHeight:.05,analHeight:.05,eelLike:!0,barbels:!0}),palette:$e({base:"#e8b06a",belly:"#f2d0a0",back:"#d82a1a",pattern:"hstripe",patternColor:"#f8f4ea",patternParams:[1],iridescence:.2,finOpacity:.3}),swim:Ke({cruise:.25,burst:6,freqBase:1.2,mode:3,turnRate:4})},{id:"turbo-snail",common:"Ốc Turbo",scientific:"Turbo fluctuosus",water:"saltwater",adultSizeIn:2,lengthM:.03,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.3,minGallons:10,reefSafe:!0,invert:!0,habitat:"Bờ đá vùng biển Thái Bình Dương từ Mexico đến Peru.",funFact:"Tên gọi theo hình xoắn vỏ giống khăn quấn, không phải tốc độ.",colorTags:["brown","white"],shape:qe({height:.65,width:.85,noseSharp:0,tailFork:0,tailSize:.01,dorsalHeight:0,analHeight:0}),palette:$e({base:"#a89060",belly:"#d8c8a0",back:"#7a6540",pattern:"mottle",patternColor:"#f0e8d0",iridescence:.15,finOpacity:0}),swim:Ke({cruise:.02,burst:1,freqBase:0,mode:3,turnRate:.5})}],Kc=new Map(by.map(n=>[n.id,n])),Cy=n=>by.filter(e=>e.water===n),Kl=Math.PI*2,FC=`
  attribute vec3 aDyn;      // per-instance dynamics: x = accumulated swim phase,
                            // y = turn bend (curls body into turns), z = pectoral flap amount
  attribute float aRand;    // per-instance random seed (desynchronizes idle motion)
  attribute float aPart;    // per-vertex: 0 body, 1 caudal fin, 2 median fins, 3 pectorals
  attribute float aFlutterD;// per-vertex: distance from a pectoral fin's root
  uniform float uWaveLen;   // undulation wavelength in body lengths
  uniform float uAmp;       // tail amplitude as a fraction of body length
  uniform float uMode;      // swim mode: 0 eel … 3 tail-only
`,kC=`
{
  float s = clamp(0.5 - transformed.x, 0.0, 1.0); // 0 at nose → 1 at tail tip

  // Amplitude envelope: which part of the body undulates depends on the swim
  // mode (eels wave everything; tunas & boxfish only wave the tail).
  float env;
  if (uMode < 0.5)      env = 0.25 + 0.75 * s;                        // anguilliform
  else if (uMode < 1.5) env = 0.08 + 0.92 * smoothstep(0.30, 1.0, s); // subcarangiform
  else if (uMode < 2.5) env = 0.05 + 0.95 * smoothstep(0.55, 1.0, s); // carangiform
  else                  env = smoothstep(0.78, 1.0, s);               // ostraciiform

  // The traveling wave: aDyn.x is the phase accumulated on the CPU as
  // phase += 2π·f·dt, so changing speed never "pops" the animation.
  float wave = sin(s * 6.28318 / uWaveLen - aDyn.x);
  transformed.z += uAmp * env * wave;

  // Head recoil: the front of the body counter-sways slightly — without this
  // the fish looks like a flag on a stick instead of a swimmer.
  transformed.z -= uAmp * 0.22 * sin(-aDyn.x) * (1.0 - s) * (1.0 - s);

  // Bank/bend into turns: parabolic curvature along the spine.
  transformed.z += aDyn.y * s * s * 0.7;

  // Pectoral fin sculling: hovering fish constantly flutter their side fins
  // (a stationary fish is unstable — RESEARCH.md §3.2). aDyn.z rises as the
  // fish slows down, so flutter appears exactly when swimming stops.
  if (aPart > 2.5) {
    transformed.z += aFlutterD * aDyn.z * 0.35 * sin(uTime * 11.0 + aRand * 37.0);
    transformed.y += aFlutterD * aDyn.z * 0.15 * cos(uTime * 11.0 + aRand * 37.0);
  }

  // Gentle gill/breathing pulse near the head — barely visible, but it's the
  // difference between a fish and a statue when the fish is at rest.
  float headness = smoothstep(0.35, 0.05, s);
  transformed.z *= 1.0 + 0.03 * headness * sin(uTime * 2.4 + aRand * 51.0);
}
`,a0=new Map;function OC(n){let e=a0.get(n.id);return e||(e=zC(n),a0.set(n.id,e)),e}function zC(n){const e=n.id.includes("snail")?GC():HC(n),t={uWaveLen:{value:n.swim.waveLen},uAmp:{value:n.id.includes("snail")?0:n.swim.amp},uMode:{value:n.swim.mode}},i=BC(n),r=new gi({map:i,roughness:.42,metalness:.55*n.palette.iridescence,envMapIntensity:.8+n.palette.iridescence}),s=new gi({color:new Ce(n.palette.fin),roughness:.55,metalness:.1,transparent:!0,opacity:n.palette.finOpacity,side:qt,depthWrite:!1});for(const a of[r,s])$c(a,{caustics:!0,causticStrength:.7,vertexPars:FC,vertexHook:kC,extraUniforms:t});return{geometry:e,materials:[r,s],uniforms:t}}function BC(n){const e=EC(n.palette,n.shape),t=e.image,i=t.getContext("2d"),r=t.width,s=t.height,a=r*.115,o=s*(1-.62),l=s*n.shape.eyeSize*2.4;return i.fillStyle="#d8d2c0",i.beginPath(),i.arc(a,o,l*1.25,0,Kl),i.fill(),i.fillStyle=n.palette.eyeColor??"#0a0a0c",i.beginPath(),i.arc(a,o,l*.85,0,Kl),i.fill(),i.fillStyle="rgba(255,255,255,0.9)",i.beginPath(),i.arc(a-l*.3,o-l*.3,l*.28,0,Kl),i.fill(),e.needsUpdate=!0,e}function Fa(n,e){const t=e.shape,i=t.eelLike?.5:.42,r=n<i?n/i:(1-n)/(1-i);let s=Math.pow(Math.sin(Math.PI/2*Re.clamp(r,0,1)),t.eelLike?.35:.8+t.noseSharp*.7);return t.eelLike&&(s=.35+.65*s),t.height/2*s}function HC(n){const e=n.shape,t=22,i=12,r=[],s=[],a=[],o=[],l=[],c=1-e.tailSize,h=.5-c;for(let g=0;g<=t;g++){const _=g/t,m=.5-_*c,f=Math.max(.004,Fa(_,n)),v=f*e.width,y=f*.12*Math.sin(_*Math.PI);for(let x=0;x<=i;x++){const A=x/i*Kl;r.push(m,y+f*Math.cos(A),v*Math.sin(A)),s.push(.03+_*.82,.5+.5*Math.cos(A)),a.push(0),o.push(0)}}for(let g=0;g<t;g++)for(let _=0;_<i;_++){const m=g*(i+1)+_,f=m+i+1;l.push(m,f,m+1,f,f+1,m+1)}r.length/3;const u=(g,_,m=0,f=0,v)=>{const y=r.length/3;for(const[x,A]of g)r.push(x,A,m+f*Math.abs(x-g[0][0])),s.push(.9,.5),a.push(_),o.push(v?Math.hypot(x-v[0],A-v[1]):0);for(let x=1;x<g.length-1;x++)l.push(y,y+x,y+x+1)};{const g=h+.02,_=-.5,m=e.height*(.55+e.tailFork*.45)*(e.finLong?1.35:1),f=[[g,0]],v=9;for(let y=0;y<=v;y++){const x=y/v,A=(.5-x)*m,C=Math.pow(Math.abs(.5-x)*2,1.4),b=_+(1-C)*e.tailFork*e.tailSize*.85;f.push([b,A])}u(f,1)}if(e.dorsalHeight>.02){const g=e.finLong?.28:.34,_=e.finLong?.92:.72,m=[],f=y=>Fa(y,n)+Fa(y,n)*.12;m.push([.5-g*c,f(g)]);const v=6;for(let y=0;y<=v;y++){const x=y/v,A=g+(_-g)*x,C=Math.sin(Math.PI*Math.min(1,x*1.4))**(e.finLong?.6:1);m.push([.5-A*c,f(A)+e.dorsalHeight*e.height*C])}m.push([.5-_*c,f(_)]),u(m,2)}if(e.analHeight>.02){const m=[],f=y=>-Fa(y,n);m.push([.5-.55*c,f(.55)]);const v=5;for(let y=0;y<=v;y++){const x=y/v,A=.55+(.85-.55)*x;m.push([.5-A*c,f(A)-e.analHeight*e.height*Math.sin(Math.PI*Math.min(1,x*1.3))])}u(m,2)}{const _=.5-.24*c,m=Fa(.24,n)*e.width,f=.13*(e.finLong?1.5:1);for(const v of[1,-1]){const y=[[_,-.02],[_-f*.35,-.02-f*.5],[_-f,-.03-f*.55],[_-f*.8,-.01]];u(y,3,v*m*.95,v*.25,[_,-.02])}}const d=new It;d.setAttribute("position",new Ve(r,3)),d.setAttribute("uv",new Ve(s,2)),d.setAttribute("aPart",new Ve(a,1)),d.setAttribute("aFlutterD",new Ve(o,1)),d.setIndex(l),d.computeVertexNormals();const p=t*i*6;return d.clearGroups(),d.addGroup(0,p,0),d.addGroup(p,l.length-p,1),d}function GC(n){const e=new ra(.32,14,10);e.scale(1,.85,.8),e.translate(.02,.3,0);const t=new kn(.3,.36,.14,12);t.translate(0,.07,0);const i=[e,t],r=[],s=[],a=[],o=[],l=[];let c=0;for(const u of i){const d=u.getAttribute("position"),p=u.getAttribute("uv"),g=u.getIndex();for(let _=0;_<d.count;_++)r.push(d.getX(_),d.getY(_),d.getZ(_)),s.push(p.getX(_),p.getY(_)),a.push(0),o.push(0);for(let _=0;_<g.count;_++)l.push(g.getX(_)+c);c+=d.count}const h=new It;return h.setAttribute("position",new Ve(r,3)),h.setAttribute("uv",new Ve(s,2)),h.setAttribute("aPart",new Ve(a,1)),h.setAttribute("aFlutterD",new Ve(o,1)),h.setIndex(l),h.computeVertexNormals(),h.clearGroups(),h.addGroup(0,l.length,0),h.addGroup(l.length,0,1),h}const Ss=Math.PI*2,o0=.25;function Pl(n){return n.id.includes("snail")||n.id.includes("hillstream")}const VC=new T,on=new T,mh=new T,gh=new xt,l0=new Rt,c0=new it,WC=new T;class XC{constructor(e){Y(this,"bits",[]);Y(this,"group",new ri);Y(this,"mats",new Map);Y(this,"variants",{normal:["pellet-brown.svg","pellet-green.svg"],"fish-cookie":["cookie-fish.png"],"bear-cookie":["cookie-bear.png"]});e.add(this.group);const t=new J2;for(const i of Object.values(this.variants).flat()){const r=t.load(new URL("feed-items/"+i,document.baseURI).href);r.colorSpace=un,this.mats.set(i,new uy({map:r,transparent:!0,depthTest:!1,depthWrite:!1,alphaTest:.02,toneMapped:!1}))}}scatter(e,t,i,r="normal"){this.bits.length>=65&&this.remove(this.bits[0]);const s=this.variants[r],a=s[Math.floor(Math.random()*s.length)],o=new R2(this.mats.get(a)),l=r==="normal"?.012:.0325;o.scale.set(l,l,1),o.visible=!new URLSearchParams(location.search).has("kanban"),o.renderOrder=1500;const c={pos:new T(e+(Math.random()-.5)*.014,i-.035,t+(Math.random()-.5)*.014),age:0,state:"sink",kind:r,sprite:o};o.position.copy(c.pos),this.group.add(o),this.bits.push(c)}remove(e){this.group.remove(e.sprite);const t=this.bits.indexOf(e);t>=0&&this.bits.splice(t,1)}update(e,t){for(let i=this.bits.length-1;i>=0;i--){const r=this.bits[i];r.age+=e;const s=r.kind!=="normal";if(r.state==="sink"&&(r.pos.y-=e*(s?.075:.09),r.pos.x+=Math.sin(r.age*2.2+r.pos.z*35)*e*.003,r.pos.y<=t+.01&&(r.pos.y=t+.01,r.state="settled")),r.age>(s?55:26)&&(r.state="gone"),r.state==="gone"){this.remove(r);continue}r.sprite.position.copy(r.pos),r.sprite.material.rotation=Math.sin(r.age*.6+r.pos.x*5)*.08}}get active(){return this.bits.length>0}get hasCookie(){return this.bits.some(e=>e.kind!=="normal"&&e.state!=="gone")}nearest(e,t,i){let r=null,s=1/0;for(const a of this.bits){if(a.state==="gone"||a.age<(a.kind==="normal"?1.15:2))continue;const o=a.kind!=="normal";if(!o&&i&&a.state!=="settled"||!o&&!i&&a.state==="settled")continue;const l=a.pos.distanceToSquared(e);if(l>Math.pow(o?t*2.5:t,2))continue;const c=l-(o?100:0);c<s&&(s=c,r=a)}return r}eat(e){e.state="gone",this.remove(e)}}class jC{constructor(e){Y(this,"group",new ri);Y(this,"food");Y(this,"populations",[]);Y(this,"feedTimer",0);Y(this,"pendingDrop",null);Y(this,"splashes",[]);e.add(this.group),this.food=new XC(this.group)}queueDrop(e,t){this.pendingDrop={x:e,z:t}}splash(e,t,i){const r=new wp(.018,.03,32),s=new da({color:10219263,transparent:!0,opacity:.88,depthTest:!1,depthWrite:!1,side:qt}),a=new be(r,s);a.rotation.x=-Math.PI/2,a.position.set(e,i+.01,t),a.renderOrder=1490,this.group.add(a),this.splashes.push({mesh:a,age:0})}updateSplashes(e){for(let t=this.splashes.length-1;t>=0;t--){const i=this.splashes[t];i.age+=e;const r=Math.min(1,i.age/1.1);i.mesh.scale.setScalar(1+r*4),i.mesh.material.opacity=(1-r)*.85,r>=1&&(this.group.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.splashes.splice(t,1))}}animateDrop(e,t,i){const r=e.drop;if(!r)return!1;if(r.elapsed+=t,r.stage==="fall")r.velocityY-=1.7*t,e.pos.y+=r.velocityY*t,e.vel.set(.003,r.velocityY,.003),e.pos.y<=i.surfaceY-e.scale*.32&&(e.pos.y=i.surfaceY-e.scale*.32,r.stage="dive",r.elapsed=0,this.splash(e.pos.x,e.pos.z,i.surfaceY));else{const s=Math.min(1,r.elapsed/.85),a=s*s*(3-2*s);e.pos.y=Re.lerp(i.surfaceY-e.scale*.32,r.targetY,a),e.vel.set(.035,-.08,.004),s>=1&&(e.drop=void 0,e.mode="dart",e.modeT=1.1)}return!0}rebuild(e,t,i){const r=new Map(this.populations.flatMap(o=>o.agents.map(l=>[l.key,l])));for(const o of this.populations)this.group.remove(o.mesh),o.mesh.dispose();this.populations=[];const s=Object.values(e).reduce((o,l)=>o+l,0),a=s>i?i/s:1;for(const[o,l]of Object.entries(e)){const c=Kc.get(o);if(!c||l<=0)continue;const h=Math.max(1,Math.round(l*a)),u=OC(c),d=new D2(u.geometry,u.materials,h);d.frustumCulled=!1,d.userData.speciesId=o;const p=new Cc(new Float32Array(h*3),3);p.setUsage(ZM);const g=new Cc(new Float32Array(h),1);u.geometry.setAttribute("aDyn",p),u.geometry.setAttribute("aRand",g);const _=[];for(let f=0;f<h;f++){g.setX(f,Math.random());const v=this.spawnAgent(c,f,t),y=r.get(v.key);if(y&&(v.pos.copy(y.pos),v.vel.copy(y.vel),v.anchor.copy(y.anchor),v.mode=y.mode,v.modeT=y.modeT,v.phase=y.phase,v.rand=y.rand,v.scale=y.scale,v.hunger=y.hunger,v.drop=y.drop?{...y.drop}:void 0),!y&&this.pendingDrop&&!Pl(c)){const x=this.pendingDrop;this.pendingDrop=null,v.pos.set(x.x,t.surfaceY+Math.max(.13,t.surfaceY*.22),x.z),v.vel.set(0,-.03,0);const A=this.zoneBand(c,t);v.drop={stage:"fall",velocityY:-.03,elapsed:0,targetY:Re.lerp(A[0],A[1],.55)}}_.push(v)}g.needsUpdate=!0;const m={sp:c,mesh:d,agents:_,dyn:p};this.populations.push(m),this.group.add(d)}this.pendingDrop=null,r.size===0&&(this.feedTimer=0)}spawnAgent(e,t,i){const r=this.zoneBand(e,i),s=new T((Math.random()-.5)*i.halfW*1.6,Re.lerp(r[0],r[1],Math.random()),(Math.random()-.5)*i.halfD*1.6),a={sp:e,index:t,key:`${e.id}:${t}`,pos:s,vel:new T((Math.random()-.5)*.05,0,(Math.random()-.5)*.05),phase:Math.random()*Ss,bend:0,flap:0,rand:Math.random(),scale:e.lengthM*(.82+Math.random()*.36),mode:"cruise",modeT:1+Math.random()*4,anchor:new T((Math.random()-.5)*i.halfW*1.4,Re.lerp(r[0],r[1],.5),(Math.random()-.5)*i.halfD*1.4),prevYaw:0,hunger:0};if(Pl(e)){const o=["floor","back","left","right"];a.wall=o[t%o.length],a.crawlDir=Math.random()*Ss}return a}zoneBand(e,t){const i=t.surfaceY-t.floorY;switch(e.zone){case"top":return[t.floorY+i*.68,t.floorY+i*.92];case"bottom":return[t.floorY+i*.02,t.floorY+i*.22];default:return[t.floorY+i*.3,t.floorY+i*.7]}}feed(e,t,i,r="normal"){this.food.scatter(e,t,i.surfaceY,r),this.feedTimer=75}findByKey(e){for(const t of this.populations)for(const i of t.agents)if(i.key===e)return{agent:i,sp:t.sp};return null}agentAt(e,t){return this.populations.find(r=>r.sp.id===e)?.agents[t]??null}update(e,t){e=Math.min(e,.05),this.feedTimer=Math.max(0,this.feedTimer-e),this.food.update(e,t.floorY),this.updateSplashes(e);for(const i of this.populations){const{sp:r,agents:s,mesh:a,dyn:o}=i;for(const l of s)this.animateDrop(l,e,t)||(Pl(r)?this.updateCrawler(l,e,t):this.updateFish(l,s,e,t)),this.writeInstance(i,l,e);a.instanceMatrix.needsUpdate=!0,o.needsUpdate=!0}}updateFish(e,t,i,r){const s=e.sp,a=e.scale,o=s.swim.cruise*a*o0,l=o*s.swim.burst,h=s.archetype==="nocturnal"?Re.lerp(1.15,.25,r.dayFactor):Re.lerp(.3,1,r.dayFactor);e.modeT-=i,e.modeT<=0&&this.pickMode(e,r,h);const u=VC.set(0,0,0),d=Math.max(.06,a*2),p=y=>Re.clamp((d-y)/d,0,1)**2*1.6;u.x+=p(e.pos.x+r.halfW)-p(r.halfW-e.pos.x),u.z+=p(e.pos.z+r.halfD)-p(r.halfD-e.pos.z),u.y+=p(e.pos.y-r.floorY)-p(r.surfaceY-e.pos.y);for(const y of r.obstacles){on.copy(e.pos).sub(y.pos);const x=on.length();x<y.radius+d&&x>1e-5&&u.addScaledVector(on.divideScalar(x),(y.radius+d-x)/y.radius*1.2)}if(!e.gulp){const[y,x]=this.zoneBand(s,r);e.pos.y<y&&(u.y+=(y-e.pos.y)*1.6),e.pos.y>x&&(u.y-=(e.pos.y-x)*1.6)}if(e.gulp==="up"&&e.pos.y>r.surfaceY-a*2.2?(e.gulp="down",e.mode="dart",e.modeT=3,e.anchor.set(e.pos.x+(Math.random()-.5)*.1,r.floorY+a,e.pos.z+(Math.random()-.5)*.1)):e.gulp==="down"&&e.pos.y<r.floorY+a*2&&(e.gulp=void 0,e.mode="forage",e.modeT=2+Math.random()*3),s.archetype==="schooler"&&t.length>1&&this.boids(e,t,u,a),this.archetypeSteer(e,u,r,h),this.feedTimer>0&&this.food.active&&(e.mode!=="rest"||this.food.hasCookie)){const y=s.zone==="bottom",x=this.food.nearest(e.pos,1.2,y);if(x){const A=x.kind!=="normal";A&&(e.mode="feed",e.modeT=Math.max(e.modeT,1.5)),on.copy(x.pos).sub(e.pos);const C=on.length();C<a*(A?1:.55)?(this.food.eat(x),e.modeT=.3,e.mode="feed",e.gulp=void 0):u.addScaledVector(on.divideScalar(C),A?6.4:2.2)}}r.current.sample(e.pos,on),e.pos.addScaledVector(on,i),on.length()>.03&&u.addScaledVector(on.normalize(),-.25);const _=r.time*(r.reducedMotion?.5:1);u.x+=Math.sin(_*.7+e.rand*40)*.22,u.z+=Math.cos(_*.53+e.rand*71)*.22,u.y+=Math.sin(_*.41+e.rand*23)*.1;let m=o*h;e.mode==="rest"&&(m=o*.06),e.mode==="dart"&&(m=l),e.mode==="feed"&&(m=this.food.hasCookie?l*1.2:o*1.8),e.mode==="forage"&&(m=o*.4);const f=e.mode==="dart"?4:1.8;e.vel.addScaledVector(u,i*f*Math.max(o,.05)*6);const v=e.vel.length();if(v>1e-6){const y=Re.damp(v,m,2.2,i);e.vel.multiplyScalar(y/v)}else e.vel.set(.01,0,0);e.gulp||(e.vel.y*=1-.6*i),e.pos.addScaledVector(e.vel,i),e.pos.x=Re.clamp(e.pos.x,-r.halfW,r.halfW),e.pos.z=Re.clamp(e.pos.z,-r.halfD,r.halfD),e.pos.y=Re.clamp(e.pos.y,r.floorY+a*.4,r.surfaceY-a*.35)}pickMode(e,t,i){const r=e.sp,s=Math.random();switch(r.archetype){case"schooler":s<.06&&!t.reducedMotion?(e.mode="dart",e.modeT=.5):(e.mode="cruise",e.modeT=3+Math.random()*6);break;case"solitary":e.mode=s<.25?"rest":"cruise",e.modeT=3+Math.random()*5,e.mode==="cruise"&&this.newAnchorNear(e,t,.6);break;case"bottom":e.gulp=void 0,e.mode=s<.55?"forage":"cruise",e.modeT=2+Math.random()*5,s>.9&&r.id.includes("corydoras")?(e.mode="dart",e.gulp="up",e.anchor.set(e.pos.x,t.surfaceY-.02,e.pos.z),e.modeT=5):this.newAnchorNear(e,t,.4);break;case"hoverer":e.mode=s<.6?"rest":"cruise",e.modeT=4+Math.random()*6,e.mode==="cruise"&&this.newAnchorNear(e,t,.5);break;case"ambusher":s<.75*(2-i)?(e.mode="rest",e.modeT=6+Math.random()*10,this.anchorToShelter(e,t)):(e.mode="dart",e.modeT=.8,this.newAnchorNear(e,t,.9));break;case"nocturnal":i<.6?(e.mode="rest",e.modeT=8+Math.random()*8,this.anchorToShelter(e,t)):(e.mode=s<.4?"forage":"cruise",e.modeT=3+Math.random()*4,this.newAnchorNear(e,t,.5));break;case"surface":s<.12&&!t.reducedMotion?(e.mode="dart",e.modeT=.4):(e.mode="cruise",e.modeT=2+Math.random()*4);break;case"cleaner":e.mode=s<.7?"forage":"cruise",e.modeT=2+Math.random()*4,e.mode==="cruise"&&this.newAnchorNear(e,t,.25);break}}newAnchorNear(e,t,i){const[r,s]=this.zoneBand(e.sp,t);e.anchor.set(Re.clamp(e.anchor.x+(Math.random()-.5)*t.halfW*2*i,-t.halfW*.85,t.halfW*.85),Re.lerp(r,s,Math.random()),Re.clamp(e.anchor.z+(Math.random()-.5)*t.halfD*2*i,-t.halfD*.8,t.halfD*.8))}anchorToShelter(e,t){if(t.shelters.length>0){const i=t.shelters[Math.floor(e.rand*t.shelters.length)%t.shelters.length];e.anchor.copy(i).add(mh.set((e.rand-.5)*.15,.02+e.rand*.05,(e.rand-.5)*.15))}else e.anchor.set(e.pos.x,t.floorY+.03,e.pos.z)}boids(e,t,i,r){const s=r*1.6,a=r*7,o=on.set(0,0,0),l=mh.set(0,0,0),c=new T;let h=0,u=0;for(const d of t){if(d===e)continue;const p=d.pos.x-e.pos.x,g=d.pos.y-e.pos.y,_=d.pos.z-e.pos.z,m=p*p+g*g+_*_;if(m>a*a||m<1e-8||p*e.vel.x+g*e.vel.y+_*e.vel.z<0&&m>s*s)continue;const v=Math.sqrt(m);v<s&&(o.x-=p/v*(s-v)/s,o.y-=g/v*(s-v)/s,o.z-=_/v*(s-v)/s,h++),l.add(d.vel),c.set(c.x+p,c.y+g,c.z+_),u++}h>0&&i.addScaledVector(o.normalize(),2),u>0&&(i.addScaledVector(l.normalize(),.5),i.addScaledVector(c.normalize(),.5))}archetypeSteer(e,t,i,r){const s=e.gulp?3.5:{schooler:.15,solitary:.6,bottom:.8,hoverer:.5,ambusher:1.4,nocturnal:.9,surface:.2,cleaner:1.6}[e.sp.archetype];on.copy(e.anchor).sub(e.pos);const a=on.length();a>.05&&t.addScaledVector(on.divideScalar(a),s*Math.min(1,a*2)),(e.sp.archetype==="bottom"||e.sp.archetype==="nocturnal")&&e.mode==="forage"&&(t.y-=.5),e.sp.archetype==="surface"&&(t.y+=(i.surfaceY-.04-e.pos.y)*3)}updateCrawler(e,t,i){const r=e.sp.id.includes("hillstream");let s=.004;r&&(e.modeT-=t,e.modeT<=0&&(e.mode=e.mode==="dart"?"forage":"dart",e.modeT=e.mode==="dart"?.5+Math.random():3+Math.random()*6,e.mode==="dart"&&(e.crawlDir=Math.random()*Ss)),s=e.mode==="dart"?.06:.003),e.crawlDir+=(Math.random()-.5)*t*.8;const a=e.crawlDir;if(e.wall==="floor")e.pos.y=i.floorY+.002,e.pos.x+=Math.cos(a)*s*t,e.pos.z+=Math.sin(a)*s*t,e.pos.x=Re.clamp(e.pos.x,-i.halfW*.95,i.halfW*.95),e.pos.z=Re.clamp(e.pos.z,-i.halfD*.95,i.halfD*.95);else{const o=Math.cos(a)*s*t,l=Math.sin(a)*s*t;e.wall==="back"&&(e.pos.z=-i.halfD+.006,e.pos.x+=o,e.pos.y+=l),e.wall==="left"&&(e.pos.x=-i.halfW+.006,e.pos.z+=o,e.pos.y+=l),e.wall==="right"&&(e.pos.x=i.halfW-.006,e.pos.z+=o,e.pos.y+=l),e.pos.y=Re.clamp(e.pos.y,i.floorY+.03,i.surfaceY-.04),e.pos.x=Re.clamp(e.pos.x,-i.halfW*.95,i.halfW*.95),e.pos.z=Re.clamp(e.pos.z,-i.halfD*.95,i.halfD*.95),(e.pos.y>=i.surfaceY-.041||e.pos.y<=i.floorY+.031)&&(e.crawlDir=-a)}e.vel.set(Math.cos(a),0,Math.sin(a)).multiplyScalar(Math.max(s,.001))}writeInstance(e,t,i){const r=t.sp,s=t.vel.length();let a,o,l=null;if(Pl(r)&&t.wall&&t.wall!=="floor")a=t.crawlDir,o=0,l=mh.set(t.wall==="back"?0:t.wall==="left"?1:-1,0,t.wall==="back"?1:0);else{a=Math.atan2(-t.vel.z,t.vel.x),o=Math.asin(Re.clamp(s>1e-5?t.vel.y/s:0,-1,1));const g=t.gulp?1.25:.5;o=Re.clamp(o,-g,g)}let c=a-t.prevYaw;c>Math.PI&&(c-=Ss),c<-Math.PI&&(c+=Ss),t.prevYaw=a;const h=Re.clamp(-c/Math.max(i,1e-4)*s*1.4,-.6,.6);t.bend=Re.damp(t.bend,Re.clamp(c/Math.max(i,1e-4)*.5,-.5,.5),6,i),l0.set(h*.6,a,o,"YZX"),gh.setFromEuler(l0),l&&gh.setFromUnitVectors(on.set(0,1,0),l.normalize()),c0.compose(t.pos,gh,WC.set(t.scale,t.scale,t.scale)),e.mesh.setMatrixAt(t.index,c0);const u=t.scale,d=r.swim.freqBase*.35+s/(.7*u+1e-6);t.phase+=Ss*Math.min(d,14)*i;const p=Re.clamp(s/(r.swim.cruise*u*o0+1e-6),0,1);t.flap=Re.damp(t.flap,1-p*.85,4,i),e.dyn.setXYZ(t.index,t.phase,t.bend,t.flap)}}class Ay{constructor(e){Y(this,"renderer");Y(this,"scene",new cy);Y(this,"rig");Y(this,"callbacks",{});Y(this,"composer",null);Y(this,"bloomPass",null);Y(this,"environment");Y(this,"decor");Y(this,"flora");Y(this,"fish");Y(this,"current",new SC);Y(this,"clock",new yy);Y(this,"simEnv");Y(this,"dims",{halfW:.5,halfD:.25,height:.5,floorY:0,surfaceY:.48});Y(this,"config",null);Y(this,"quality",Ia.medium);Y(this,"requestedTier","auto");Y(this,"dayFactor",1);Y(this,"raycaster",new nC);Y(this,"running",!0);Y(this,"firstFrameDone",!1);Y(this,"disposed",!1);Y(this,"frameTimes",[]);Y(this,"feedMode",!1);Y(this,"kanAquariumMode",new URLSearchParams(location.search).has("kanban"));Y(this,"clickFoodCount",0);Y(this,"pointerDown",{x:0,y:0});Y(this,"foodLayer",null);Y(this,"foodElements",new Map);Y(this,"lastCycleT",0);Y(this,"stats",{fps:60,drawCalls:0,triangles:0,fishCount:0});Y(this,"onVisibility",()=>{this.running=document.visibilityState==="visible"});Y(this,"applySize",()=>{const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight,i=Math.min(window.devicePixelRatio||1,this.quality.pixelRatioCap);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t),this.rig.camera.aspect=e/t,this.rig.camera.updateProjectionMatrix(),this.rebuildComposer(e,t)});Y(this,"lastStructureKey","");Y(this,"lastFishKey","");Y(this,"rememberPointer",e=>{this.pointerDown={x:e.clientX,y:e.clientY}});Y(this,"onRightClick",e=>{this.kanAquariumMode&&(e.preventDefault(),e.shiftKey?this.callbacks.onRemoveFish?.():this.callbacks.onAddFish?.(e.clientX,e.clientY))});Y(this,"onClick",e=>{if(e.button!==0)return;if(this.kanAquariumMode){if(Math.hypot(e.clientX-this.pointerDown.x,e.clientY-this.pointerDown.y)>9)return;this.clickFoodCount++;const s=this.clickFoodCount%10===0?this.clickFoodCount/10%2===1?"fish-cookie":"bear-cookie":"normal";this.feedAt(e.clientX,e.clientY,s);return}if(this.rig.lastPointerTravel>8)return;const t=this.toNdc(e.clientX,e.clientY);this.raycaster.setFromCamera(t,this.rig.camera);const i=this.fish.populations.map(s=>s.mesh),r=this.raycaster.intersectObjects(i,!1);if(r.length>0&&r[0].instanceId!==void 0){const s=r[0].object.userData.speciesId,a=this.fish.agentAt(s,r[0].instanceId);if(a){this.callbacks.onFishPicked?.(a.key);return}}if(this.feedMode){this.feedAt(e.clientX,e.clientY);return}this.callbacks.onFishPicked?.(null)});Y(this,"tick",()=>{if(this.disposed)return;const e=Math.min(this.clock.getDelta(),.1);this.running&&this.advance(e)});if(this.container=e,gC(),this.renderer=new C2({antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=ip,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=un,e.appendChild(this.renderer.domElement),this.renderer.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:none;",this.kanAquariumMode){const i=document.createElement("div");i.id="kan-food-layer",i.className="kan-food-layer",i.setAttribute("aria-label","Thức ăn cá đang rơi trong hồ"),i.setAttribute("data-food-count","0"),e.appendChild(i),this.foodLayer=i}const t=new Jd(this.renderer);this.scene.environment=t.fromScene(new fC,.06).texture,t.dispose(),this.scene.background=new Ce("#04141f"),this.rig=new xC(this.renderer.domElement,1),this.environment=new RC(this.scene),this.decor=new PC(this.scene),this.flora=new UC(this.scene),this.fish=new jC(this.scene),this.simEnv={time:0,dayFactor:1,halfW:.5,halfD:.25,floorY:0,surfaceY:.48,current:this.current,reducedMotion:!1,obstacles:[],shelters:[]},this.quality=Ia[e0(this.renderer)],this.applySize(),window.addEventListener("resize",this.applySize),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("pointerup",this.onClick),this.kanAquariumMode&&(this.renderer.domElement.addEventListener("pointerdown",this.rememberPointer),this.renderer.domElement.addEventListener("contextmenu",this.onRightClick)),this.renderer.setAnimationLoop(this.tick)}dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.applySize),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("pointerup",this.onClick),this.renderer.domElement.removeEventListener("pointerdown",this.rememberPointer),this.renderer.domElement.removeEventListener("contextmenu",this.onRightClick),this.rig.dispose(),this.foodElements.clear(),this.foodLayer?.remove(),this.foodLayer=null,this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}rebuildComposer(e,t){this.composer?.dispose(),this.quality.bloom?(this.composer=new lC(this.renderer),this.composer.addPass(new cC(this.scene,this.rig.camera)),this.bloomPass=new sa(new ae(e,t),.32,.6,.82),this.composer.addPass(this.bloomPass),this.composer.addPass(new dC),this.composer.setSize(e,t)):(this.composer=null,this.bloomPass=null)}setQuality(e){this.requestedTier=e;const t=e==="auto"?e0(this.renderer):e;Ia[t].tier!==this.quality.tier&&(this.quality=Ia[t],this.applySize(),this.config&&this.applyConfig(this.config,!0))}setReducedMotion(e){this.simEnv.reducedMotion=e,this.rig.reducedMotion=e}setFeedMode(e){this.feedMode=e}setCameraMode(e){this.rig.setMode(e),e!=="follow"&&this.rig.releaseFollow(this.dims.floorY+this.dims.height*.5)}followFish(e){if(!e){this.rig.releaseFollow(this.dims.floorY+this.dims.height*.5),this.rig.mode==="follow"&&this.rig.setMode("orbit");return}this.fish.findByKey(e)&&(this.rig.followTarget=()=>this.fish.findByKey(e)?.agent.pos??null,this.rig.setMode("follow"))}applyConfig(e,t=!1){const i=JSON.stringify([e.water,Math.round(e.gallons*10),e.substrate,e.background,e.lighting,e.decor,e.flora,this.quality.tier]),r=JSON.stringify(e.fish)+this.quality.tier,s=t||i!==this.lastStructureKey,a=t||s||r!==this.lastFishKey;if(this.config=e,s){this.lastStructureKey=i;const o=qc(e.gallons);this.dims={halfW:o.width/2,halfD:o.depth/2,height:o.height,floorY:0,surfaceY:o.height*.94},Object.assign(this.simEnv,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,surfaceY:this.dims.surfaceY}),this.current.setup(o.width,o.height,o.depth);const l=this.decor.rebuild(e.decor,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,height:this.dims.height}),c=this.flora.rebuild(e.flora,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,surfaceY:this.dims.surfaceY},this.current,l.anchors);this.simEnv.obstacles=[...l.obstacles,...c.obstacles],this.simEnv.shelters=l.shelters,this.environment.rebuild(this.dims,e.water,e.substrate,e.background,e.lighting,this.quality,l.airstone),Zn.uSurfaceY.value=this.dims.surfaceY,this.rig.frameTank(this.dims.halfW,this.dims.height,this.dims.floorY+this.dims.height*.52)}a&&(this.lastFishKey=r,this.fish.rebuild(e.fish,this.simEnv,this.quality.maxFish))}tankPoint(e,t){const i=this.renderer.domElement.getBoundingClientRect(),r=e??i.left+i.width*(.25+Math.random()*.5),s=t??i.top+i.height*(.2+Math.random()*.3);this.raycaster.setFromCamera(this.toNdc(r,s),this.rig.camera);const a=this.rig.camera.getWorldDirection(new T).normalize(),o=new Ji().setFromNormalAndCoplanarPoint(a,new T(0,this.dims.surfaceY*.55,0)),l=new T;return this.raycaster.ray.intersectPlane(o,l)||l.set(((r-i.left)/Math.max(1,i.width)*2-1)*this.dims.halfW*.8,0,0),l.x=Re.clamp(l.x,-this.dims.halfW*.78,this.dims.halfW*.78),l.z=Re.clamp(l.z,-this.dims.halfD*.55,this.dims.halfD*.55),l.y=this.dims.surfaceY,l}queueFishDrop(e,t){const i=this.tankPoint(e,t);this.fish.queueDrop(i.x,i.z)}feedAt(e,t,i="normal"){const r=this.tankPoint(e,t);return this.fish.feed(r.x,r.z,this.simEnv,i),this.callbacks.onFed?.(i,this.clickFoodCount),!0}toNdc(e,t){const i=this.renderer.domElement.getBoundingClientRect();return new ae((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1)}targetDayFactor(){switch(this.config?.dayNight??"day"){case"day":return 1;case"night":return 0;case"realtime":{const t=new Date().getHours()+new Date().getMinutes()/60;return t>=8&&t<18?1:t>=6&&t<8?(t-6)/2:t>=18&&t<21?1-(t-18)/3:0}case"cycle":{const t=this.lastCycleT%240/240;return t<.55?1:t<.62?1-(t-.55)/.07:t<.93?0:(t-.93)/.07}}}screenshot(){return this.composer?this.composer.render():this.renderer.render(this.scene,this.rig.camera),this.renderer.domElement.toDataURL("image/png")}fishPosition(e){return this.fish.findByKey(e)?.agent.pos??null}enableExternalDrive(){this.renderer.setAnimationLoop(null)}captureFrontView(e,t,i="cover",r=.52){const{floorY:s,height:a,halfW:o,halfD:l}=this.dims,c=s+a*r,h=s+a-c,u=c-s,d=i==="contain"?Math.max(h,u):Math.min(h,u);this.rig.lockFrontView(o,d,l,c,e,t)}syncFoodLayer(){const e=this.foodLayer;if(!e)return;const t=this.renderer.domElement.getBoundingClientRect(),i=new Set,r=new T;for(const s of this.fish.food.bits){i.add(s);let a=this.foodElements.get(s);if(!a){if(a=document.createElement("div"),a.className=s.kind==="normal"?"kan-food-item kan-food-pellet":"kan-food-item kan-food-cookie",a.dataset.kind=s.kind,a.setAttribute("aria-hidden","true"),s.kind!=="normal"){const u=document.createElement("img");u.alt="",u.src=new URL("feed-items/"+(s.kind==="fish-cookie"?"cookie-fish.png":"cookie-bear.png"),document.baseURI).href,u.draggable=!1,a.appendChild(u)}e.appendChild(a),this.foodElements.set(s,a)}r.copy(s.pos).project(this.rig.camera);const o=Re.clamp((r.x+1)*.5,.055,.945),l=Re.clamp((1-r.y)*.5,.085,.925),c=o*t.width,h=l*t.height;a.style.transform="translate3d("+c.toFixed(1)+"px,"+h.toFixed(1)+"px,0) translate(-50%,-50%)",a.style.opacity="1",a.dataset.worldY=s.pos.y.toFixed(5),a.dataset.foodState=s.state}for(const[s,a]of this.foodElements)i.has(s)||(a.remove(),this.foodElements.delete(s));e.dataset.foodCount=String(i.size)}advance(e){const t=Zn.uTime.value+e;if(Zn.uTime.value=t,this.lastCycleT+=e,this.simEnv.time=t,this.current.time=t,this.dayFactor=Re.damp(this.dayFactor,this.targetDayFactor(),.5,e),this.simEnv.dayFactor=this.dayFactor,this.fish.update(e,this.simEnv),this.environment.update(this.dayFactor,this.rig.camera),this.rig.update(e),this.syncFoodLayer(),this.composer?this.composer.render():this.renderer.render(this.scene,this.rig.camera),this.firstFrameDone||(this.firstFrameDone=!0,yC()),this.frameTimes.push(e),this.frameTimes.length>=60){const i=this.frameTimes.reduce((r,s)=>r+s,0)/this.frameTimes.length;if(this.stats.fps=Math.round(1/i),this.frameTimes=[],this.requestedTier==="auto"&&this.stats.fps<28){const r=["ultra","high","medium","low"],s=r.indexOf(this.quality.tier);s>=0&&s<r.length-1&&(this.quality=Ia[r[s+1]],this.applySize(),this.config&&this.applyConfig(this.config,!0),this.callbacks.onAutoQuality?.(this.quality.tier))}}this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles,this.stats.fishCount=this.fish.populations.reduce((i,r)=>i+r.agents.length,0)}}let Ry=null;function u0(n){Ry=n}function Jc(){return Ry}const YC={},h0=n=>{let e;const t=new Set,i=(h,u)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const p=e;e=u??(typeof d!="object"||d===null)?d:Object.assign({},e,d),t.forEach(g=>g(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(t.add(h),()=>t.delete(h)),destroy:()=>{(YC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,l);return l},qC=n=>n?h0(n):h0;var Py={exports:{}},Ly={},Dy={exports:{}},Ny={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=at;function $C(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var KC=typeof Object.is=="function"?Object.is:$C,JC=aa.useState,ZC=aa.useEffect,QC=aa.useLayoutEffect,eA=aa.useDebugValue;function tA(n,e){var t=e(),i=JC({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return QC(function(){r.value=t,r.getSnapshot=e,vh(r)&&s({inst:r})},[n,t,e]),ZC(function(){return vh(r)&&s({inst:r}),n(function(){vh(r)&&s({inst:r})})},[n]),eA(t),t}function vh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!KC(n,t)}catch{return!0}}function nA(n,e){return e()}var iA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?nA:tA;Ny.useSyncExternalStore=aa.useSyncExternalStore!==void 0?aa.useSyncExternalStore:iA;Dy.exports=Ny;var rA=Dy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=at,sA=rA;function aA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var oA=typeof Object.is=="function"?Object.is:aA,lA=sA.useSyncExternalStore,cA=Zc.useRef,uA=Zc.useEffect,hA=Zc.useMemo,dA=Zc.useDebugValue;Ly.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=cA(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=hA(function(){function l(p){if(!c){if(c=!0,h=p,p=i(p),r!==void 0&&a.hasValue){var g=a.value;if(r(g,p))return u=g}return u=p}if(g=u,oA(h,p))return g;var _=i(p);return r!==void 0&&r(g,_)?(h=p,g):(h=p,u=_)}var c=!1,h,u,d=t===void 0?null:t;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,t,i,r]);var o=lA(n,s[0],s[1]);return uA(function(){a.hasValue=!0,a.value=o},[o]),dA(o),o};Py.exports=Ly;var fA=Py.exports;const pA=m0(fA),Iy={},{useDebugValue:mA}=b0,{useSyncExternalStoreWithSelector:gA}=pA;let d0=!1;const vA=n=>n;function _A(n,e=vA,t){(Iy?"production":void 0)!=="production"&&t&&!d0&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),d0=!0);const i=gA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return mA(i),i}const yA=n=>{(Iy?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?qC(n):n,t=(i,r)=>_A(e,i,r);return Object.assign(t,e),t},xA=n=>yA,SA={};function MA(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var s;const a=l=>l===null?null:JSON.parse(l,void 0),o=(s=t.getItem(r))!=null?s:null;return o instanceof Promise?o.then(a):a(o)},setItem:(r,s)=>t.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>t.removeItem(r)}}const Ao=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(i){return Ao(i)(t)},catch(i){return this}}}catch(t){return{then(i){return this},catch(i){return Ao(i)(t)}}}},wA=(n,e)=>(t,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,f)=>({...f,...m}),...e},a=!1;const o=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return n((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...m)},i,r);const h=Ao(s.serialize),u=()=>{const m=s.partialize({...i()});let f;const v=h({state:m,version:s.version}).then(y=>c.setItem(s.name,y)).catch(y=>{f=y});if(f)throw f;return v},d=r.setState;r.setState=(m,f)=>{d(m,f),u()};const p=n((...m)=>{t(...m),u()},i,r);let g;const _=()=>{var m;if(!c)return;a=!1,o.forEach(v=>v(i()));const f=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return Ao(c.getItem.bind(c))(s.name).then(v=>{if(v)return s.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return s.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var y;return g=s.merge(v,(y=i())!=null?y:p),t(g,!0),u()}).then(()=>{f?.(g,void 0),a=!0,l.forEach(v=>v(g))}).catch(v=>{f?.(void 0,v)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},_(),g||p},EA=(n,e)=>(t,i,r)=>{let s={storage:MA(()=>localStorage),partialize:_=>_,version:0,merge:(_,m)=>({...m,..._}),...e},a=!1;const o=new Set,l=new Set;let c=s.storage;if(!c)return n((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(..._)},i,r);const h=()=>{const _=s.partialize({...i()});return c.setItem(s.name,{state:_,version:s.version})},u=r.setState;r.setState=(_,m)=>{u(_,m),h()};const d=n((..._)=>{t(..._),h()},i,r);r.getInitialState=()=>d;let p;const g=()=>{var _,m;if(!c)return;a=!1,o.forEach(v=>{var y;return v((y=i())!=null?y:d)});const f=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(_=i())!=null?_:d))||void 0;return Ao(c.getItem.bind(c))(s.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return[!0,s.migrate(v.state,v.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var y;const[x,A]=v;if(p=s.merge(A,(y=i())!=null?y:d),t(p,!0),x)return h()}).then(()=>{f?.(p,void 0),p=i(),a=!0,l.forEach(v=>v(p))}).catch(v=>{f?.(void 0,v)})};return r.persist={setOptions:_=>{s={...s,..._},_.storage&&(c=_.storage)},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>a,onHydrate:_=>(o.add(_),()=>{o.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},s.skipHydration||g(),p||d},TA=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((SA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),wA(n,e)):EA(n,e),bA=TA,Ms={dayNight:"cycle",fishNames:{}},Ap=[{...Ms,name:"Cộng đồng Amazon",water:"freshwater",gallons:55,substrate:"sand",background:"natural",lighting:"daylight",fish:{"cardinal-tetra":12,"rummynose-tetra":8,angelfish:2,corydoras:6,"bristlenose-pleco":1},flora:{"amazon-sword":3,vallisneria:5,cryptocoryne:4,"java-fern":2},decor:["driftwood","river-rocks"]},{...Ms,name:"Hồ thủy sinh mini",water:"freshwater",gallons:8,substrate:"blacksand",background:"planted",lighting:"daylight",fish:{"neon-tetra":8,"cherry-shrimp":10,"nerite-snail":2},flora:{"java-moss":3,"dwarf-hairgrass":6,anubias:2,cryptocoryne:2},decor:["river-rocks"]},{...Ms,name:"Đầm san hô",water:"saltwater",gallons:75,substrate:"crushedcoral",background:"reef",lighting:"actinic",fish:{"ocellaris-clown":2,"green-chromis":7,firefish:2,"royal-gramma":1,"lawnmower-blenny":1,"cleaner-shrimp":1,"turbo-snail":3},flora:{"pulsing-xenia":2,"hammer-coral":2,zoanthids:3,"bubble-anemone":1,"kenya-tree":2,acropora:2,"brain-coral":1},decor:["reef-rock","airstone"]},{...Ms,name:"Ốc đảo Betta",water:"freshwater",gallons:10,substrate:"gravel",background:"planted",lighting:"warm",fish:{betta:1,"nerite-snail":1},flora:{anubias:3,"java-fern":2,frogbit:4,cryptocoryne:3},decor:["driftwood"]},{...Ms,name:"Suối nước trà",water:"freshwater",gallons:29,substrate:"sand",background:"black",lighting:"blackwater",fish:{"rummynose-tetra":10,"harlequin-rasbora":8,"kuhli-loach":6},flora:{"java-fern":3,cryptocoryne:5,"java-moss":2,frogbit:5},decor:["driftwood","slate-stack"]},{...Ms,name:"Đại dương xanh",water:"saltwater",gallons:150,substrate:"sand",background:"deepblue",lighting:"actinic",fish:{"blue-tang":1,"yellow-tang":1,"green-chromis":9,"sixline-wrasse":1,"banggai-cardinal":3,"turbo-snail":4},flora:{acropora:3,"montipora-plate":2,toadstool:2,zoanthids:2},decor:["reef-rock","airstone"]}],CA=Ap[0];function AA(n){const e=JSON.stringify(n),t=btoa(unescape(encodeURIComponent(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),i=new URL(window.location.href);return i.hash=`t=${t}`,i.toString()}function RA(){try{const n=window.location.hash.match(/t=([A-Za-z0-9\-_]+)/);if(!n)return null;const e=n[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(escape(atob(e))),i=JSON.parse(t);return!i||typeof i!="object"||!i.water||!i.gallons?null:{...i,fishNames:i.fishNames??{},decor:i.decor??[],flora:i.flora??{},fish:i.fish??{}}}catch{return null}}const Uy=[{id:"driftwood",name:"Cành lũa tự nhiên",water:"freshwater",kind:"driftwood",info:"Cành gỗ lâu năm làm điểm tựa cho cây và chỗ trú của cá."},{id:"spider-wood",name:"Lũa rễ nhện",water:"freshwater",kind:"spiderwood",info:"Các nhánh rễ mảnh đan xen, phù hợp cho tép và cá con trú ẩn."},{id:"driftwood-stump",name:"Gốc lũa chìm",water:"freshwater",kind:"stump",info:"Gốc cây phân nhánh tạo bóng râm và hốc trú ẩn."},{id:"hollow-log",name:"Khúc gỗ rỗng",water:"both",kind:"log",info:"Đường hầm bằng gỗ để cá chui qua và nghỉ ngơi."},{id:"log-arch",name:"Cầu gỗ vòm",water:"both",kind:"log",info:"Khúc gỗ hình vòm tạo lối bơi bên dưới."},{id:"river-rocks",name:"Đá cuội suối",water:"both",kind:"rock",info:"Cụm đá tròn nhẵn trang trí nền tự nhiên."},{id:"slate-stack",name:"Đá phiến xếp tầng",water:"freshwater",kind:"slate",info:"Các tấm đá phẳng tạo khe trú ẩn."},{id:"reef-rock",name:"Đá tạo rạn san hô",water:"saltwater",kind:"reefrock",info:"Đá xốp nhiều khe hở làm nơi bám cho san hô."},{id:"airstone",name:"Đá sủi bọt",water:"both",kind:"airstone",info:"Tạo cột bọt khí nổi đều lên mặt nước."},{id:"sunken-ship",name:"Tàu đắm mini",water:"both",kind:"ship",playful:!0,info:"Mô hình tàu đắm nhỏ nằm trên nền cát."},{id:"castle",name:"Lâu đài cổ",water:"both",kind:"castle",playful:!0,info:"Lâu đài trang trí có ô cửa để cá bơi xuyên qua."}];new Map(Uy.map(n=>[n.id,n]));const of=n=>Uy.filter(e=>e.water==="both"||e.water===n),_h=typeof window<"u"?RA():null;let f0;const Me=xA()(bA((n,e)=>({config:_h??CA,savedTanks:{},quality:"auto",audioOn:!1,audioVolume:.6,musicOn:!1,cameraMode:"orbit",followFishKey:null,selectedFishKey:null,uiHidden:!1,panelOpen:new URLSearchParams(location.search).has("kanban")?!0:window.matchMedia?.("(min-width: 900px)").matches??!0,showHud:!1,reducedMotion:window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,feedMode:!1,toast:null,setConfig:t=>n(i=>({config:{...i.config,...t}})),setWater:t=>n(i=>i.config.water===t?i:{config:{...i.config,water:t,fish:{},flora:{},fishNames:{},decor:i.config.decor.filter(r=>of(t).some(s=>s.id===r)),substrate:t==="saltwater"?"crushedcoral":"sand",background:t==="saltwater"?"reef":"natural",lighting:t==="saltwater"?"actinic":"daylight"}}),setFishCount:(t,i)=>n(r=>{const s={...r.config.fish};return i<=0?delete s[t]:s[t]=Math.min(i,60),{config:{...r.config,fish:s}}}),setFloraCount:(t,i)=>n(r=>{const s={...r.config.flora};return i<=0?delete s[t]:s[t]=Math.min(i,24),{config:{...r.config,flora:s}}}),toggleDecor:t=>n(i=>({config:{...i.config,decor:i.config.decor.includes(t)?i.config.decor.filter(r=>r!==t):[...i.config.decor,t]}})),nameFish:(t,i)=>n(r=>({config:{...r.config,fishNames:{...r.config.fishNames,[t]:i}}})),applyPreset:t=>n({config:structuredClone(t),followFishKey:null,selectedFishKey:null}),randomize:()=>{const t=Math.random()<.55?"freshwater":"saltwater",i=[10,20,29,40,55,75,120][Math.floor(Math.random()*7)],r=qc(i).capacity,s=Cy(t).filter(p=>p.minGallons<=i),a={};let o=0;const l=[...s].sort(()=>Math.random()-.5);for(const p of l){if(o>=r*.8)break;const g=p.minGroup>1?p.minGroup+Math.floor(Math.random()*5):p.maxPerTank??1,_=p.bioload*g;o+_<=r*.85&&!(p.mouthIn&&Object.keys(a).length>0)&&(a[p.id]=g,o+=_)}const c=Ty(t).sort(()=>Math.random()-.5).slice(0,4+Math.floor(Math.random()*3)),h={};for(const p of c)h[p.id]=1+Math.floor(Math.random()*4);const u=of(t).filter(p=>!p.playful||Math.random()<.2).filter(()=>Math.random()<.6).map(p=>p.id),d=t==="saltwater"?["sand","crushedcoral"]:["sand","gravel","blacksand"];n(p=>({config:{...p.config,water:t,gallons:i,fish:a,flora:h,decor:u,fishNames:{},substrate:d[Math.floor(Math.random()*d.length)],background:t==="saltwater"?"reef":["natural","planted","deepblue"][Math.floor(Math.random()*3)],lighting:t==="saltwater"?"actinic":"daylight",name:"Surprise Tank"}})),e().showToast("Here’s a surprise tank — remix it however you like.")},saveTank:t=>n(i=>({savedTanks:{...i.savedTanks,[t]:{...structuredClone(i.config),name:t}},config:{...i.config,name:t}})),loadTank:t=>{const i=e().savedTanks[t];i&&n({config:structuredClone(i),followFishKey:null,selectedFishKey:null})},deleteTank:t=>n(i=>{const r={...i.savedTanks};return delete r[t],{savedTanks:r}}),set:t=>n(t),showToast:t=>{clearTimeout(f0),n({toast:t}),f0=setTimeout(()=>n({toast:null}),4200)}}),{name:"aquarium-v1",partialize:n=>({config:n.config,savedTanks:n.savedTanks,quality:n.quality,audioOn:n.audioOn,audioVolume:n.audioVolume,musicOn:n.musicOn}),merge:(n,e)=>{const t={...e,...n};return _h&&(t.config=_h),t}}));let Jl=null;function Fy(n,e){const t=Me.getState();if(Object.values(t.config.fish).reduce((a,o)=>a+o,0)>=60){t.showToast("Đã đủ 60 sinh vật, hãy bớt cá trước");return}const r=Object.entries(t.config.fish).filter(([a,o])=>o>0&&!a.includes("snail")&&!a.includes("shrimp")),s=r.length?r[Math.floor(Math.random()*r.length)][0]:t.config.water==="freshwater"?"guppy":"green-chromis";Jc()?.queueFishDrop(n,e),t.setFishCount(s,(t.config.fish[s]||0)+1),Jl=s,t.showToast("Cá mới đang rơi vào hồ")}function ky(){const n=Me.getState(),e=Object.entries(n.config.fish).filter(([i,r])=>r>0&&!i.includes("snail")&&!i.includes("shrimp"));if(!e.length){n.showToast("Không còn cá để bớt");return}const t=Jl&&n.config.fish[Jl]>0?Jl:e.sort((i,r)=>r[1]-i[1])[0][0];n.setFishCount(t,(n.config.fish[t]||0)-1),n.showToast("Đã đưa bớt 1 con cá ra khỏi hồ")}function PA(){const n=at.useRef(null);return at.useEffect(()=>{const e=n.current;if(!e)return;let t;try{t=new Ay(e)}catch(s){console.error("WebGL init failed:",s),e.innerHTML='<div style="display:grid;place-items:center;height:100%;color:#8fa8b8;font-size:15px;padding:24px;text-align:center">This aquarium needs WebGL, which your browser has disabled or doesn’t support.</div>';return}u0(t),t.callbacks.onFishPicked=s=>{const a=Me.getState();s?(a.set({selectedFishKey:s,followFishKey:s}),t.followFish(s)):a.selectedFishKey&&(a.set({selectedFishKey:null,followFishKey:null}),t.followFish(null))},t.callbacks.onAddFish=Fy,t.callbacks.onRemoveFish=ky,t.callbacks.onFed=(s,a)=>window.dispatchEvent(new CustomEvent("kanaquarium-fed",{detail:{kind:s,count:a}})),t.callbacks.onAutoQuality=s=>{Me.getState().showToast(`Lowered quality to “${s}” to keep things smooth. You can pin a tier in Settings.`)};const i=Me.getState();t.setQuality(i.quality),t.applyConfig(i.config),t.setReducedMotion(i.reducedMotion),t.setCameraMode(i.cameraMode);const r=Me.subscribe((s,a)=>{s.config!==a.config&&t.applyConfig(s.config),s.quality!==a.quality&&t.setQuality(s.quality),s.feedMode!==a.feedMode&&t.setFeedMode(s.feedMode),s.reducedMotion!==a.reducedMotion&&t.setReducedMotion(s.reducedMotion),s.cameraMode!==a.cameraMode&&s.cameraMode!=="follow"&&t.setCameraMode(s.cameraMode),s.followFishKey!==a.followFishKey&&t.followFish(s.followFishKey)});return()=>{r(),u0(null),t.dispose()}},[]),at.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>Me.getState().set({reducedMotion:e.matches});return e.addEventListener?.("change",t),()=>e.removeEventListener?.("change",t)},[]),L.jsx("div",{id:"canvas-host",ref:n,"aria-label":"Aquarium view. Drag to look around, scroll to zoom.",role:"img"})}function Oy(n){let e=0;for(const[t,i]of Object.entries(n)){const r=Kc.get(t);r&&(e+=r.bioload*i)}return e}function LA(n){const e=[],t=qc(n.gallons),r=Object.entries(n.fish).filter(([,c])=>c>0).map(([c,h])=>({sp:Kc.get(c),n:h})).filter(c=>c.sp),s=Object.entries(n.flora).some(([c,h])=>h>0&&["stem","rosette","carpet","moss","floating"].includes(af.get(c)?.kind??""))?1.15:1,a=Oy(n.fish),o=t.capacity*s;a>o*1.25?e.push({severity:"warning",message:`Bể đang nuôi quá dày (${Math.round(a/o*100)}% sức chứa). Chất thải có thể tích tụ nhanh hơn khả năng xử lý của lọc và cây.`}):a>o&&e.push({severity:"caution",message:`Bể hơi đông cá (${Math.round(a/o*100)}% sức chứa). Nên nâng cấp lọc hoặc giảm số cá.`});for(const{sp:c,n:h}of r){if(c.minGroup>1&&h<c.minGroup&&e.push({severity:"caution",message:`${c.common} là cá sống theo đàn; ít hơn ${c.minGroup} con có thể khiến chúng căng thẳng. Hãy thử nuôi ${c.minGroup} con trở lên để thấy cá bơi theo đàn.`}),n.gallons<c.minGallons&&e.push({severity:"caution",message:`Cá ${c.common} cần bể tối thiểu ${c.minGallons} gallon (bể hiện có ${Math.round(n.gallons)}). Cá trưởng thành cần đủ không gian bơi.`}),c.maxPerTank&&h>c.maxPerTank&&e.push({severity:"warning",message:`Nuôi quá ${c.maxPerTank} ${c.common} trong một bể có thể dẫn tới tranh giành lãnh thổ${c.id==="betta"?" — cá Betta đực có thể đánh nhau nghiêm trọng":""}.`}),c.mouthIn)for(const{sp:u}of r)u.id!==c.id&&u.adultSizeIn<=c.mouthIn&&e.push({severity:"warning",message:`Cá trưởng thành ${c.common} có thể ăn ${u.common} nếu vừa miệng.`});if(c.temperament==="aggressive")for(const{sp:u}of r)u.id!==c.id&&u.temperament==="peaceful"&&!u.invert&&u.adultSizeIn<c.adultSizeIn*1.2&&e.push({severity:"caution",message:`${c.common} có thể gây hấn với ${u.common} — chú ý nguy cơ rỉa vây.`});if(c.id==="tiger-barb")for(const{sp:u}of r)u.shape.finLong&&e.push({severity:"caution",message:`Cá tứ vân thường rỉa vây; vây dài của ${u.common} có thể bị tấn công.`});if(c.water==="saltwater"&&c.reefSafe===!1&&Object.entries(n.flora).some(([d,p])=>p>0&&af.get(d))&&e.push({severity:"caution",message:`${c.common} có thể rỉa san hô, nên cân nhắc trước khi thả vào bể rạn.`}),c.invert&&c.id.includes("shrimp"))for(const{sp:u}of r)!u.invert&&u.adultSizeIn>=3.5&&e.push({severity:"caution",message:`${u.common} có thể xem ${c.common} là thức ăn.`})}const l=new Set;return e.filter(c=>l.has(c.message)?!1:(l.add(c.message),!0))}const DA={"Amazon Community":"Cộng đồng Amazon","Nano Planted":"Hồ thủy sinh mini","Reef Lagoon":"Đầm san hô","Betta Oasis":"Ốc đảo Betta","Blackwater Stream":"Suối nước trà","Tang Highway":"Đại dương xanh","My Aquarium":"Hồ cá của tôi","My Tank":"Hồ của tôi"},to=n=>DA[n]||n,Ac=n=>Math.round(n*3.785),Ro=n=>({peaceful:"Hiền hòa",aggressive:"Hung dữ",semiaggressive:"Hơi dữ","semi-aggressive":"Hơi dữ",easy:"Dễ chăm",moderate:"Trung bình",advanced:"Khó chăm",expert:"Khó chăm",mid:"Tầng giữa",bottom:"Tầng đáy",top:"Tầng mặt",all:"Mọi tầng",rosette:"Dạng bụi",stem:"Dạng thân",moss:"Rêu",carpet:"Thảm nền",floating:"Cây nổi",softcoral:"San hô mềm",hardcoral:"San hô cứng",anemone:"Hải quỳ"})[n]||n;function NA(){const n=at.useRef(null),[e,t]=at.useState("tank"),i=Me(a=>a.config),r=Me(a=>a.set),s=i.water==="saltwater";return at.useEffect(()=>{if(!new URLSearchParams(location.search).has("kanban"))return;const a=n.current;if(!a)return;let o,l=0;const c=()=>{clearTimeout(o),o=setTimeout(()=>Me.getState().set({panelOpen:!1}),15e3)},h=()=>{const u=Date.now();u-l<750||(l=u,c())};for(const u of["click","pointerdown","keydown","input","change","wheel","focusin","touchstart"])a.addEventListener(u,c,{passive:!0});return a.addEventListener("pointermove",h,{passive:!0}),c(),()=>{clearTimeout(o);for(const u of["click","pointerdown","keydown","input","change","wheel","focusin","touchstart"])a.removeEventListener(u,c);a.removeEventListener("pointermove",h)}},[]),L.jsxs("aside",{ref:n,className:"panel","aria-label":"Bảng điều khiển hồ cá",children:[L.jsxs("div",{className:"panel-head",children:[L.jsxs("h1",{children:["🐠 ",to(i.name||"Hồ cá của tôi")]}),L.jsx("button",{className:"close","aria-label":"Đóng bảng điều khiển",onClick:()=>r({panelOpen:!1}),children:"✕"})]}),L.jsx("nav",{className:"tabs","aria-label":"Danh mục điều khiển",children:[["tank","Bể"],["fish","Cá"],["flora",s?"San hô":"Cây"],["decor","Trang trí"],["saved","Đã lưu"],["settings","Cài đặt"]].map(([a,o])=>L.jsx("button",{className:e===a?"active":"",onClick:()=>t(a),children:o},a))}),L.jsxs("div",{className:"panel-body",children:[e==="tank"&&L.jsx(IA,{}),e==="fish"&&L.jsx(FA,{}),e==="flora"&&L.jsx(OA,{}),e==="decor"&&L.jsx(zA,{}),e==="saved"&&L.jsx(BA,{}),e==="settings"&&L.jsx(HA,{})]})]})}function IA(){const n=Me(a=>a.config),e=Me(a=>a.setConfig),t=Me(a=>a.setWater),i=Me(a=>a.applyPreset),r=Me(a=>a.randomize),s=n.water==="saltwater";return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Loại nước"}),L.jsxs("div",{className:"seg",role:"radiogroup","aria-label":"Loại nước",children:[L.jsx("button",{className:s?"":"active",onClick:()=>t("freshwater"),children:"🌿 Nước ngọt"}),L.jsx("button",{className:s?"active":"",onClick:()=>t("saltwater"),children:"🪸 Nước mặn"})]}),Object.keys(n.fish).length>0&&L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"Thay loại nước sẽ xóa đàn cá hiện có vì sinh vật nước ngọt và nước mặn không thể ở chung."})]}),L.jsxs("div",{className:"section",children:[L.jsxs("h2",{children:["Dung tích — ",pC(n.gallons)]}),L.jsxs("div",{className:"slider-row",children:[L.jsx("input",{type:"range",min:rf,max:Sy,step:1,value:n.gallons,"aria-label":"Dung tích của hồ cá",onChange:a=>e({gallons:Number(a.target.value)})}),L.jsxs("span",{className:"value",children:[Ac(n.gallons)," lít"]})]}),L.jsx("div",{className:"seg",style:{marginTop:8},children:nf.map(a=>L.jsx("button",{className:Math.abs(n.gallons-a.gallons)<=3?"active":"",title:a.blurb,onClick:()=>e({gallons:a.gallons}),children:a.name},a.name))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Nền đáy"}),L.jsx("div",{className:"seg",children:(s?[["sand","Cát"],["crushedcoral","San hô vụn"],["blacksand","Cát đen"]]:[["sand","Cát"],["gravel","Sỏi"],["blacksand","Cát đen"]]).map(([a,o])=>L.jsx("button",{className:n.substrate===a?"active":"",onClick:()=>e({substrate:a}),children:o},a))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Phông nền"}),L.jsx("div",{className:"seg",children:[["natural","Tự nhiên"],["planted","Thủy sinh"],["reef","San hô"],["deepblue","Xanh thẳm"],["black","Đen"]].map(([a,o])=>L.jsx("button",{className:n.background===a?"active":"",onClick:()=>e({background:a}),children:o},a))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Ánh sáng"}),L.jsx("div",{className:"seg",children:[["daylight","☀️ Ban ngày"],["warm","🌅 Ánh vàng"],["actinic","💙 Xanh biển"],["blackwater","🍂 Nước trà"]].map(([a,o])=>L.jsx("button",{className:n.lighting===a?"active":"",onClick:()=>e({lighting:a}),children:o},a))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Ngày và đêm"}),L.jsx("div",{className:"seg",children:[["day","Ngày"],["night","Đêm"],["cycle","Chu kỳ"],["realtime","Giờ thực"]].map(([a,o])=>L.jsx("button",{className:n.dayNight===a?"active":"",onClick:()=>e({dayNight:a}),children:o},a))}),L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"“Chu kỳ” mô phỏng một ngày trong 4 phút. “Giờ thực” dùng giờ của máy tính; cá hoạt động về đêm sẽ thức khi trời tối."})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Các mẫu bể"}),L.jsx("div",{className:"preset-list",children:Ap.map(a=>L.jsxs("button",{onClick:()=>i(a),children:[L.jsx("div",{className:"p-name",children:to(a.name)}),L.jsxs("div",{className:"p-desc",children:[a.water==="saltwater"?"Nước mặn":"Nước ngọt"," · ",Ac(a.gallons)," lít ·"," ",Object.values(a.fish).reduce((o,l)=>o+l,0)," sinh vật"]})]},a.name))}),L.jsx("div",{className:"row-actions",style:{marginTop:10},children:L.jsx("button",{className:"btn primary",onClick:r,children:"🎲 Tạo ngẫu nhiên"})})]})]})}const UA=n=>({background:`linear-gradient(180deg, ${n.palette.back}, ${n.palette.base} 55%, ${n.palette.belly})`});function FA(){const n=Me(g=>g.config),e=Me(g=>g.setFishCount),[t,i]=at.useState(""),[r,s]=at.useState("all"),[a,o]=at.useState(null),l=Cy(n.water),c=at.useMemo(()=>{const g=t.trim().toLowerCase();return l.filter(_=>{if(g&&!`${_.common} ${_.scientific} ${_.colorTags.join(" ")}`.toLowerCase().includes(g))return!1;switch(r){case"peaceful":return _.temperament==="peaceful"&&!_.invert;case"schooling":return _.archetype==="schooler";case"bottom":return _.zone==="bottom"&&!_.invert;case"easy":return _.careLevel==="easy";case"inverts":return!!_.invert;default:return!0}})},[l,t,r]),h=qc(n.gallons),u=Oy(n.fish),d=Math.min(160,Math.round(u/h.capacity*100)),p=at.useMemo(()=>LA(n),[n]);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"capacity","aria-label":`Mật độ nuôi ${d}%`,children:[L.jsx("div",{className:"bar",children:L.jsx("div",{className:`fill ${d>125?"over":d>100?"warn":""}`,style:{width:`${Math.min(100,d/160*100*1.6)}%`}})}),L.jsxs("div",{className:"label",children:["Mật độ nuôi: ",L.jsxs("strong",{children:[d,"%"]})," sức chứa bể ",Ac(n.gallons)," lít",d<=100?" — phù hợp":d<=125?" — hơi đông":" — quá đông"]})]}),p.length>0&&L.jsx("div",{className:"section",children:L.jsx("div",{className:"warning-list",children:p.map((g,_)=>L.jsx("div",{className:`warning warning-${g.severity}`,role:"note",children:g.message},_))})}),L.jsx("div",{className:"search-row",children:L.jsx("input",{type:"search",placeholder:"Tìm cá theo tên hoặc màu…",value:t,onChange:g=>i(g.target.value),"aria-label":"Tìm cá"})}),L.jsx("div",{className:"filter-chips",role:"group","aria-label":"Lọc danh sách cá",children:[["all","Tất cả"],["schooling","Bơi theo đàn"],["peaceful","Hiền hòa"],["bottom","Tầng đáy"],["easy","Dễ nuôi"],["inverts","Tép, ốc"]].map(([g,_])=>L.jsx("button",{className:r===g?"active":"",onClick:()=>s(g),children:_},g))}),c.map(g=>{const _=n.fish[g.id]??0;return L.jsxs("div",{children:[L.jsxs("div",{className:"species-row",children:[L.jsx("div",{className:"species-chip",style:UA(g),"aria-hidden":!0}),L.jsxs("div",{className:"species-info",children:[L.jsx("div",{className:"name",children:g.common}),L.jsxs("div",{className:"meta",children:[(g.adultSizeIn*2.54).toFixed(1)," cm · ",Ro(g.temperament)," · ",Ro(g.zone)," · ",g.minGroup>1?`Đàn từ ${g.minGroup} con`:"Có thể ở riêng"]})]}),L.jsx("button",{className:"info-btn","aria-label":`Thông tin ${g.common}`,onClick:()=>o(a===g.id?null:g.id),children:"ⓘ"}),L.jsxs("div",{className:"stepper",children:[L.jsx("button",{"aria-label":`Bớt một ${g.common}`,onClick:()=>e(g.id,_-1),disabled:_===0,children:"−"}),L.jsx("span",{className:"count",children:_}),L.jsx("button",{"aria-label":`Thêm một ${g.common}`,onClick:()=>e(g.id,_+1),children:"+"})]})]}),a===g.id&&L.jsx(kA,{sp:g})]},g.id)}),c.length===0&&L.jsx("p",{style:{color:"var(--text-dim)",fontSize:13.5},children:"Không tìm thấy loài phù hợp. Hãy thử tên khác."})]})}function kA({sp:n}){return L.jsxs("div",{style:{padding:"4px 10px 12px 62px",fontSize:13,lineHeight:1.5,color:"#c4d4de"},children:[L.jsx("div",{style:{fontStyle:"italic",color:"var(--text-dim)",marginBottom:4},children:n.scientific}),L.jsxs("div",{children:[L.jsx("strong",{children:"Xuất xứ:"})," ",n.habitat]}),L.jsx("div",{style:{marginTop:4,borderLeft:"2.5px solid var(--accent)",paddingLeft:9},children:n.funFact}),L.jsxs("div",{style:{marginTop:4,color:"var(--text-dim)"},children:["Mức chăm sóc: ",Ro(n.careLevel)," · Bể tối thiểu ",Ac(n.minGallons)," lít",n.water==="saltwater"&&n.reefSafe===!1?" · Có thể rỉa san hô":""]})]})}function OA(){const n=Me(a=>a.config),e=Me(a=>a.setFloraCount),[t,i]=at.useState(null),r=Ty(n.water),s=n.water==="saltwater";return L.jsxs(L.Fragment,{children:[L.jsx("p",{style:{fontSize:13,color:"var(--text-dim)",marginTop:0},children:s?"San hô bám lên đá. Thêm đá tạo rạn trong mục Trang trí để hồ tự nhiên; quan sát Xenia co mở.":"Cây đung đưa theo dòng nước. Dương xỉ Java, ráy và rêu thích hợp bám vào lũa hoặc đá."}),r.map(a=>{const o=n.flora[a.id]??0;return L.jsxs("div",{children:[L.jsxs("div",{className:"species-row",children:[L.jsx("div",{className:"species-chip",style:{background:`linear-gradient(135deg, ${a.colors[0]}, ${a.colors[1%a.colors.length]})`},"aria-hidden":!0}),L.jsxs("div",{className:"species-info",children:[L.jsx("div",{className:"name",children:a.name}),L.jsxs("div",{className:"meta",children:[Ro(a.kind)," · ",Ro(a.careLevel)]})]}),L.jsx("button",{className:"info-btn","aria-label":`Thông tin ${a.name}`,onClick:()=>i(t===a.id?null:a.id),children:"ⓘ"}),L.jsxs("div",{className:"stepper",children:[L.jsx("button",{"aria-label":`Bớt một ${a.name}`,onClick:()=>e(a.id,o-1),disabled:o===0,children:"−"}),L.jsx("span",{className:"count",children:o}),L.jsx("button",{"aria-label":`Thêm một ${a.name}`,onClick:()=>e(a.id,o+1),children:"+"})]})]}),t===a.id&&L.jsxs("div",{style:{padding:"4px 10px 12px 62px",fontSize:13,lineHeight:1.5,color:"#c4d4de"},children:[L.jsx("div",{style:{fontStyle:"italic",color:"var(--text-dim)",marginBottom:4},children:a.scientific}),a.info]})]},a.id)})]})}function zA(){const n=Me(s=>s.config),e=Me(s=>s.toggleDecor),t=of(n.water),i=t.filter(s=>!s.playful),r=t.filter(s=>s.playful);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Đá và lũa"}),L.jsx("div",{className:"decor-grid",children:i.map(s=>L.jsx("button",{className:n.decor.includes(s.id)?"active":"",onClick:()=>e(s.id),title:s.info,"aria-pressed":n.decor.includes(s.id),children:s.name},s.id))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Vật trang trí"}),L.jsx("div",{className:"decor-grid",children:r.map(s=>L.jsx("button",{className:n.decor.includes(s.id)?"active":"",onClick:()=>e(s.id),title:s.info,"aria-pressed":n.decor.includes(s.id),children:s.name},s.id))})]}),L.jsx("p",{style:{fontSize:12.5,color:"var(--text-dim)"},children:"Đá sủi tạo cột bọt khí, đá rạn là chỗ bám của san hô và nơi cá trú ẩn."})]})}function BA(){const n=Me(c=>c.config),e=Me(c=>c.savedTanks),t=Me(c=>c.saveTank),i=Me(c=>c.loadTank),r=Me(c=>c.deleteTank),s=Me(c=>c.showToast),[a,o]=at.useState(to(n.name||"Hồ của tôi")),l=Object.keys(e);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Lưu hồ hiện tại"}),L.jsxs("div",{className:"name-input",children:[L.jsx("input",{value:a,onChange:c=>o(c.target.value),"aria-label":"Tên hồ cá",maxLength:40}),L.jsx("button",{className:"btn primary",onClick:()=>{t(a.trim()||"Hồ của tôi"),s(`Đã lưu “${a.trim()||"Hồ của tôi"}”.`)},children:"Lưu"})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Hồ đã lưu"}),l.length===0&&L.jsx("p",{style:{color:"var(--text-dim)",fontSize:13.5},children:"Chưa có hồ nào được lưu. Dữ liệu hồ được giữ trong trình duyệt này."}),l.map(c=>L.jsxs("div",{className:"saved-row",children:[L.jsx("span",{className:"s-name",children:to(c)}),L.jsx("button",{className:"btn",onClick:()=>i(c),children:"Mở"}),L.jsx("button",{className:"btn danger","aria-label":`Xóa hồ ${to(c)}`,onClick:()=>r(c),children:"🗑"})]},c))]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Chia sẻ"}),L.jsx("button",{className:"btn",onClick:async()=>{const c=AA(n);if(!(sf()&&vC(c)))try{await navigator.clipboard.writeText(c),s("Đã sao chép liên kết chia sẻ hồ cá.")}catch{window.prompt("Sao chép liên kết này:",c)}},children:"🔗 Sao chép liên kết"})]})]})}function HA(){const n=Me(o=>o.quality),e=Me(o=>o.audioOn),t=Me(o=>o.audioVolume),i=Me(o=>o.musicOn),r=Me(o=>o.showHud),s=Me(o=>o.reducedMotion),a=Me(o=>o.set);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Chất lượng đồ họa"}),L.jsx("div",{className:"seg",children:["auto","low","medium","high","ultra"].map(o=>L.jsx("button",{className:n===o?"active":"",onClick:()=>a({quality:o}),children:{auto:"Tự động",low:"Thấp",medium:"Vừa",high:"Cao",ultra:"Siêu cao"}[o]},o))}),L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"Tự động chọn chất lượng phù hợp và giảm bớt hiệu ứng nếu máy chạy chậm."})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Âm thanh"}),L.jsxs("div",{className:"seg",children:[L.jsx("button",{className:e?"active":"",onClick:()=>a({audioOn:!e}),children:e?"🔊 Tiếng nước: Bật":"🔇 Tắt tiếng"}),L.jsx("button",{className:i?"active":"",onClick:()=>a({musicOn:!i}),children:i?"🎵 Nhạc: Bật":"🎵 Nhạc: Tắt"})]}),L.jsxs("div",{className:"slider-row",style:{marginTop:10},children:[L.jsx("span",{style:{fontSize:13,color:"var(--text-dim)"},children:"Âm lượng"}),L.jsx("input",{type:"range",min:0,max:1,step:.05,value:t,"aria-label":"Âm lượng",onChange:o=>a({audioVolume:Number(o.target.value)})})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Chuyển động và hiệu năng"}),L.jsxs("div",{className:"seg",children:[L.jsx("button",{className:s?"active":"",onClick:()=>a({reducedMotion:!s}),children:s?"🐢 Bơi chậm: Bật":"Bơi chậm: Tắt"}),L.jsx("button",{className:r?"active":"",onClick:()=>a({showHud:!r}),children:r?"📈 Hiệu năng: Bật":"Hiệu năng: Tắt"})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Giới thiệu"}),L.jsxs("p",{style:{fontSize:12.5,color:"var(--text-dim)",lineHeight:1.6},children:["Hồ cá 3D được dựng trong trình duyệt bằng Three.js, không cần cài thêm phần mềm. Phím tắt: ",L.jsx("kbd",{children:"H"})," ẩn giao diện · ",L.jsx("kbd",{children:"F"})," cho ăn · ",L.jsx("kbd",{children:"C"})," camera điện ảnh · ",L.jsx("kbd",{children:"P"})," chụp ảnh."]})]})]})}class GA{constructor(){Y(this,"ctx",null);Y(this,"master",null);Y(this,"musicGain",null);Y(this,"bubbleTimer",null);Y(this,"musicTimer",null);Y(this,"started",!1);Y(this,"volume",.6)}async start(){if(this.started){await this.ctx?.resume();return}try{this.ctx=new AudioContext,await this.ctx.resume()}catch{return}const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume*.5,this.master.connect(e.destination);const t=e.createBuffer(1,e.sampleRate*4,e.sampleRate),i=t.getChannelData(0);let r=0;for(let m=0;m<i.length;m++){const f=Math.random()*2-1;r=(r+.02*f)/1.02,i[m]=r*3.2}const s=e.createBufferSource();s.buffer=t,s.loop=!0;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220;const o=e.createGain();o.gain.value=.5,s.connect(a).connect(o).connect(this.master),s.start();const l=e.createOscillator();l.frequency.value=90;const c=e.createGain();c.gain.value=.015;const h=e.createOscillator();h.frequency.value=.4;const u=e.createGain();u.gain.value=.006,h.connect(u).connect(c.gain),l.connect(c).connect(this.master),l.start(),h.start();const d=()=>{if(!this.ctx||this.ctx.state!=="running"){this.bubbleTimer=window.setTimeout(d,400);return}const m=e.currentTime,f=e.createOscillator(),v=e.createGain(),y=380+Math.random()*500;f.frequency.setValueAtTime(y,m),f.frequency.exponentialRampToValueAtTime(y*(1.3+Math.random()*.6),m+.06),v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(.012+Math.random()*.02,m+.008),v.gain.exponentialRampToValueAtTime(1e-4,m+.05+Math.random()*.05),f.connect(v).connect(this.master),f.start(m),f.stop(m+.14),this.bubbleTimer=window.setTimeout(d,60+Math.random()*260)};d(),this.musicGain=e.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master);const p=[220,174.61,196,146.83];let g=0;const _=()=>{if(!this.ctx)return;const m=e.currentTime,f=p[g%p.length];g++;for(const v of[1,1.5,2,2.4]){const y=e.createOscillator();y.type="sine",y.frequency.value=f*v*(1+(Math.random()-.5)*.003);const x=e.createGain();x.gain.setValueAtTime(0,m),x.gain.linearRampToValueAtTime(.03/v,m+4),x.gain.linearRampToValueAtTime(0,m+11),y.connect(x).connect(this.musicGain),y.start(m),y.stop(m+12)}this.musicTimer=window.setTimeout(_,8e3)};_(),this.started=!0}setVolume(e){this.volume=e,this.master&&this.ctx&&this.master.gain.linearRampToValueAtTime(e*.5,this.ctx.currentTime+.15)}setMusic(e){this.musicGain&&this.ctx&&this.musicGain.gain.linearRampToValueAtTime(e?1:0,this.ctx.currentTime+2)}async setEnabled(e){e?await this.start():await this.ctx?.suspend()}}const no=new GA;function VA(){const n=Me(u=>u.feedMode),e=Me(u=>u.cameraMode),t=Me(u=>u.audioOn),i=Me(u=>u.panelOpen),r=Me(u=>u.config),s=Me(u=>u.set),a=Me(u=>u.setConfig),o=Me(u=>u.showToast),l=()=>{const u=Jc();if(!u)return;const d=u.screenshot();if(sf()&&_C(d))return;const p=document.createElement("a");p.href=d,p.download=`aquarium-${(r.name||"tank").replace(/\s+/g,"-").toLowerCase()}.png`,p.click(),o("Đã lưu ảnh hồ cá")},c=async()=>{const u=!t;s({audioOn:u}),await no.setEnabled(u),u&&(no.setVolume(Me.getState().audioVolume),no.setMusic(Me.getState().musicOn))},h=r.dayNight==="night";return L.jsxs("div",{className:"toolbar",role:"toolbar","aria-label":"Thanh điều khiển hồ cá",children:[L.jsx("button",{"data-tip":"Cho cá ăn (F)",className:n?"active":"","aria-pressed":n,onClick:()=>s({feedMode:!n}),children:"🫘"}),L.jsx("button",{"data-tip":h?"Chuyển sang ngày":"Chuyển sang đêm",onClick:()=>a({dayNight:h?"day":"night"}),children:h?"☀️":"🌙"}),L.jsx("button",{"data-tip":"Camera điện ảnh (C)",className:e==="cinematic"?"active":"","aria-pressed":e==="cinematic",onClick:()=>s({cameraMode:e==="cinematic"?"orbit":"cinematic"}),children:"🎥"}),L.jsx("button",{"data-tip":t?"Tắt tiếng":"Bật âm thanh","aria-pressed":t,onClick:c,children:t?"🔊":"🔇"}),L.jsx("button",{"data-tip":"Chụp ảnh hồ cá (P)",onClick:l,children:"📸"}),L.jsx("div",{className:"divider","aria-hidden":!0}),L.jsx("button",{"data-tip":"Chỉ ngắm cá, ẩn giao diện (H)",onClick:()=>s({uiHidden:!0,cameraMode:"cinematic",panelOpen:!1,selectedFishKey:null,followFishKey:null}),children:"🖥️"}),!sf()&&L.jsx("button",{"data-tip":"Toàn màn hình",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()},children:"⛶"}),!i&&L.jsx("button",{"data-tip":"Tùy chỉnh bể",onClick:()=>s({panelOpen:!0}),children:"🛠️"})]})}function WA(){const n=Me(u=>u.selectedFishKey),e=Me(u=>u.followFishKey),t=Me(u=>u.config.fishNames),i=Me(u=>u.nameFish),r=Me(u=>u.set),[s,a]=at.useState("");if(!n)return null;const o=n.split(":")[0],l=Kc.get(o);if(!l)return null;const c=t[n],h=e===n;return L.jsxs("div",{className:"info-card",role:"dialog","aria-label":`Thông tin về ${l.common}`,children:[L.jsx("button",{className:"close","aria-label":"Đóng",onClick:()=>r({selectedFishKey:null,followFishKey:null}),children:"✕"}),L.jsx("h3",{children:c?`${c} · ${l.common}`:l.common}),L.jsx("div",{className:"sci",children:l.scientific}),L.jsxs("div",{className:"chips",children:[L.jsxs("span",{className:"chip",children:[(l.adultSizeIn*2.54).toFixed(1)," cm trưởng thành"]}),L.jsx("span",{className:"chip",children:{peaceful:"Hiền hòa",aggressive:"Hung dữ",semiaggressive:"Hơi dữ"}[l.temperament]||l.temperament}),L.jsx("span",{className:"chip",children:{top:"Tầng mặt",mid:"Tầng giữa",bottom:"Tầng đáy"}[l.zone]||l.zone}),L.jsxs("span",{className:"chip",children:["Chăm sóc: ",{easy:"Dễ",moderate:"Vừa",expert:"Khó"}[l.careLevel]||l.careLevel]}),l.minGroup>1&&L.jsxs("span",{className:"chip",children:["Đàn từ ",l.minGroup," con"]})]}),L.jsxs("p",{children:[L.jsx("strong",{children:"Xuất xứ:"})," ",l.habitat]}),L.jsx("p",{className:"fact",children:l.funFact}),L.jsxs("div",{className:"name-input",children:[L.jsx("input",{placeholder:c?`Đổi tên ${c}…`:"Đặt tên cá…",value:s,maxLength:24,onChange:u=>a(u.target.value),onKeyDown:u=>{u.key==="Enter"&&s.trim()&&(i(n,s.trim()),a(""))},"aria-label":"Đặt tên cá"}),L.jsx("button",{className:"btn primary",disabled:!s.trim(),onClick:()=>{i(n,s.trim()),a("")},children:"Lưu tên"})]}),L.jsx("div",{className:"row-actions",style:{marginTop:8},children:L.jsx("button",{className:"btn",onClick:()=>r({followFishKey:h?null:n,cameraMode:h?"orbit":"follow"}),children:h?"👁 Ngừng theo dõi":"👁 Theo dõi cá"})})]})}function XA(){const[n,e]=at.useState({fps:0,drawCalls:0,triangles:0,fishCount:0});return at.useEffect(()=>{const t=setInterval(()=>{const i=Jc();i&&e({...i.stats})},500);return()=>clearInterval(t)},[]),L.jsxs("div",{className:"hud","aria-hidden":!0,children:[n.fps," fps",L.jsx("br",{}),n.drawCalls," draw calls",L.jsx("br",{}),(n.triangles/1e3).toFixed(1),"k tris",L.jsx("br",{}),n.fishCount," fish"]})}function jA(){const n=Me(_=>_.uiHidden),e=Me(_=>_.panelOpen),t=Me(_=>_.showHud),i=Me(_=>_.feedMode),r=Me(_=>_.toast),s=Me(_=>_.audioVolume),a=Me(_=>_.musicOn),o=Me(_=>_.set),[l,c]=at.useState(!1),[h,u]=at.useState(0),d=Me(_=>Object.values(_.config.fish).reduce((m,f)=>m+f,0)),p=new URLSearchParams(location.search).has("kanban");at.useEffect(()=>{const _=m=>u(m.detail.count);return window.addEventListener("kanaquarium-fed",_),()=>window.removeEventListener("kanaquarium-fed",_)},[]);const g=at.useRef();return at.useEffect(()=>{new URLSearchParams(window.location.search).get("kiosk")&&o({uiHidden:!0,cameraMode:"cinematic",panelOpen:!1})},[o]),at.useEffect(()=>{p&&o({uiHidden:!1,panelOpen:!0})},[p,o]),at.useEffect(()=>{no.setVolume(s)},[s]),at.useEffect(()=>{no.setMusic(a)},[a]),at.useEffect(()=>{const _=m=>{const f=m.target;if(f.tagName==="INPUT"||f.tagName==="TEXTAREA")return;const v=Me.getState();if(m.key==="Escape"&&new URLSearchParams(location.search).has("kanban")&&window.parent!==window){m.preventDefault(),window.parent.postMessage({type:"aquarium-game-close"},location.origin);return}switch(m.key.toLowerCase()){case"h":o({uiHidden:!v.uiHidden,...v.uiHidden?{}:{panelOpen:!1}});break;case"f":o({feedMode:!v.feedMode});break;case"c":o({cameraMode:v.cameraMode==="cinematic"?"orbit":"cinematic"});break;case"p":{const y=Jc();if(y){const x=document.createElement("a");x.href=y.screenshot(),x.download="aquarium.png",x.click()}break}case"escape":v.selectedFishKey?o({selectedFishKey:null,followFishKey:null}):v.uiHidden?o({uiHidden:!1}):o({panelOpen:!1});break}};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[o]),at.useEffect(()=>{if(!n)return;const _=()=>{c(!0),clearTimeout(g.current),g.current=setTimeout(()=>c(!1),2500)};return window.addEventListener("pointermove",_),()=>{window.removeEventListener("pointermove",_),clearTimeout(g.current)}},[n]),L.jsxs(L.Fragment,{children:[L.jsx(PA,{}),p&&L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"kanban-aquarium-help",children:"Trái: thả thức ăn · Mỗi 10 lần: bánh cá/gấu · Phải: thêm cá · Shift + phải: bớt cá · ESC: về KanBan"}),L.jsxs("div",{className:"kanban-aquarium-stock",children:[L.jsx("button",{title:"Bớt 1 con cá (Shift + chuột phải)","aria-label":"Bớt một cá",onClick:ky,children:"−"}),L.jsxs("span",{children:["Cá: ",L.jsx("strong",{children:d}),"/60"]}),L.jsx("button",{title:"Thêm cá, có hiệu ứng rơi","aria-label":"Thêm một cá",disabled:d>=60,onClick:()=>Fy(),children:"+"}),L.jsxs("span",{className:"kanban-aquarium-feed-count",children:["Đã thả: ",h," · Còn ",10-h%10," lượt đến bánh"]})]}),L.jsx("button",{className:"kanban-aquarium-exit",title:"Về KanBan (ESC)",onClick:()=>window.parent.postMessage({type:"aquarium-game-close"},location.origin),children:"✕"})]}),!n&&L.jsxs(L.Fragment,{children:[L.jsx(VA,{}),e?L.jsx(NA,{}):L.jsx("button",{className:"open-panel","aria-label":"Mở bảng cài đặt hồ cá",onClick:()=>o({panelOpen:!0}),children:"🛠️"}),L.jsx(WA,{}),i&&L.jsx("div",{className:"feed-hint",children:"Nhấp chuột để cho cá ăn · nhấn F để tắt"})]}),n&&L.jsx("button",{className:`reveal ${l?"visible":""}`,onClick:()=>o({uiHidden:!1}),children:"Hiện bảng điều khiển (H)"}),t&&L.jsx(XA,{}),r&&L.jsx("div",{className:"toast",role:"status",children:r})]})}const YA={bordered:{coverDepth:0,overfill:.82,fit:"contain",lookFrac:.52},fullbleed:{coverDepth:1,overfill:1.04,fit:"cover",lookFrac:.52}},qA={"tang-highway":"fullbleed","reef-lagoon":"fullbleed","amazon-community":"fullbleed","blackwater-stream":"bordered","betta-oasis":"bordered","nano-planted":"bordered"},$A=n=>n.toLowerCase().replace(/\s+/g,"-");function KA(){const n=new URLSearchParams(window.location.hash.replace(/^#/,"")),e=n.get("capture");if(!e)return null;const t=n.get("view");return{preset:e,fps:Number(n.get("fps"))||30,secs:Number(n.get("secs"))||70,view:t==="bordered"||t==="fullbleed"?t:void 0}}function JA(n){const e=Ap.find(c=>$A(c.name)===n.preset.toLowerCase());if(!e){document.body.textContent=`Unknown capture preset: ${n.preset}`;return}const t=document.getElementById("root");t.style.cssText="position:fixed;inset:0;background:#04141f";const i=new Ay(t);i.setQuality("ultra"),i.applyConfig({...e,dayNight:"day"});const r=n.view??qA[n.preset.toLowerCase()]??"fullbleed",{coverDepth:s,overfill:a,fit:o,lookFrac:l}=YA[r];i.setCameraMode("still"),i.captureFrontView(s,a,o,l),i.enableExternalDrive(),window.__step=c=>i.advance(c),window.__frontView=(c,h,u,d)=>i.captureFrontView(c,h,u,d),window.__cameraState=()=>({pos:i.rig.camera.position.toArray(),quat:i.rig.camera.quaternion.toArray()}),window.__captureInfo={...n,presetName:e.name,view:r}}const p0=KA();p0?JA(p0):yh.createRoot(document.getElementById("root")).render(L.jsx(b0.StrictMode,{children:L.jsx(jA,{})}));
