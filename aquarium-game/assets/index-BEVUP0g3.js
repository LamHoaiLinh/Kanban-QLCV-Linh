var J_=Object.defineProperty;var Q_=(n,e,t)=>e in n?J_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var W=(n,e,t)=>Q_(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Eg={exports:{}},Dc={},Tg={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Na=Symbol.for("react.element"),ex=Symbol.for("react.portal"),tx=Symbol.for("react.fragment"),nx=Symbol.for("react.strict_mode"),ix=Symbol.for("react.profiler"),rx=Symbol.for("react.provider"),sx=Symbol.for("react.context"),ox=Symbol.for("react.forward_ref"),ax=Symbol.for("react.suspense"),lx=Symbol.for("react.memo"),cx=Symbol.for("react.lazy"),Hp=Symbol.iterator;function ux(n){return n===null||typeof n!="object"?null:(n=Hp&&n[Hp]||n["@@iterator"],typeof n=="function"?n:null)}var bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cg=Object.assign,Ag={};function ho(n,e,t){this.props=n,this.context=e,this.refs=Ag,this.updater=t||bg}ho.prototype.isReactComponent={};ho.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ho.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Rg(){}Rg.prototype=ho.prototype;function hf(n,e,t){this.props=n,this.context=e,this.refs=Ag,this.updater=t||bg}var df=hf.prototype=new Rg;df.constructor=hf;Cg(df,ho.prototype);df.isPureReactComponent=!0;var Vp=Array.isArray,Pg=Object.prototype.hasOwnProperty,ff={current:null},Lg={key:!0,ref:!0,__self:!0,__source:!0};function Dg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pg.call(e,i)&&!Lg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Na,type:n,key:s,ref:o,props:r,_owner:ff.current}}function hx(n,e){return{$$typeof:Na,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function pf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Na}function dx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Gp=/\/+/g;function su(n,e){return typeof n=="object"&&n!==null&&n.key!=null?dx(""+n.key):e.toString(36)}function Il(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Na:case ex:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+su(o,0):i,Vp(r)?(t="",n!=null&&(t=n.replace(Gp,"$&/")+"/"),Il(r,e,t,"",function(c){return c})):r!=null&&(pf(r)&&(r=hx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Gp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Vp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+su(s,a);o+=Il(s,e,t,l,r)}else if(l=ux(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+su(s,a++),o+=Il(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(n,e,t){if(n==null)return n;var i=[],r=0;return Il(n,i,"","",function(s){return e.call(t,s,r++)}),i}function fx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Ul={transition:null},px={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:ff};function Ng(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Ha,forEach:function(n,e,t){Ha(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ha(n,function(){e++}),e},toArray:function(n){return Ha(n,function(e){return e})||[]},only:function(n){if(!pf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};je.Component=ho;je.Fragment=tx;je.Profiler=ix;je.PureComponent=hf;je.StrictMode=nx;je.Suspense=ax;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=px;je.act=Ng;je.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Cg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ff.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Pg.call(e,l)&&!Lg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Na,type:n.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(n){return n={$$typeof:sx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:rx,_context:n},n.Consumer=n};je.createElement=Dg;je.createFactory=function(n){var e=Dg.bind(null,n);return e.type=n,e};je.createRef=function(){return{current:null}};je.forwardRef=function(n){return{$$typeof:ox,render:n}};je.isValidElement=pf;je.lazy=function(n){return{$$typeof:cx,_payload:{_status:-1,_result:n},_init:fx}};je.memo=function(n,e){return{$$typeof:lx,type:n,compare:e===void 0?null:e}};je.startTransition=function(n){var e=Ul.transition;Ul.transition={};try{n()}finally{Ul.transition=e}};je.unstable_act=Ng;je.useCallback=function(n,e){return fn.current.useCallback(n,e)};je.useContext=function(n){return fn.current.useContext(n)};je.useDebugValue=function(){};je.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};je.useEffect=function(n,e){return fn.current.useEffect(n,e)};je.useId=function(){return fn.current.useId()};je.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};je.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};je.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};je.useMemo=function(n,e){return fn.current.useMemo(n,e)};je.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};je.useRef=function(n){return fn.current.useRef(n)};je.useState=function(n){return fn.current.useState(n)};je.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};je.useTransition=function(){return fn.current.useTransition()};je.version="18.3.1";Tg.exports=je;var et=Tg.exports;const Ig=wg(et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx=et,gx=Symbol.for("react.element"),vx=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,_x=mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xx={key:!0,ref:!0,__self:!0,__source:!0};function Ug(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)yx.call(e,i)&&!xx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gx,type:n,key:s,ref:o,props:r,_owner:_x.current}}Dc.Fragment=vx;Dc.jsx=Ug;Dc.jsxs=Ug;Eg.exports=Dc;var L=Eg.exports,Sh={},Fg={exports:{}},Nn={},kg={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,$){var Z=D.length;D.push($);e:for(;0<Z;){var re=Z-1>>>1,Ae=D[re];if(0<r(Ae,$))D[re]=$,D[Z]=Ae,Z=re;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var $=D[0],Z=D.pop();if(Z!==$){D[0]=Z;e:for(var re=0,Ae=D.length,Ge=Ae>>>1;re<Ge;){var q=2*(re+1)-1,te=D[q],ce=q+1,de=D[ce];if(0>r(te,Z))ce<Ae&&0>r(de,te)?(D[re]=de,D[ce]=Z,re=ce):(D[re]=te,D[q]=Z,re=q);else if(ce<Ae&&0>r(de,Z))D[re]=de,D[ce]=Z,re=ce;else break e}}return $}function r(D,$){var Z=D.sortIndex-$.sortIndex;return Z!==0?Z:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,u=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var $=t(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=D)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(c)}}function M(D){if(y=!1,_(D),!g)if(t(l)!==null)g=!0,H(b);else{var $=t(c);$!==null&&K(M,$.startTime-D)}}function b(D,$){g=!1,y&&(y=!1,f(R),R=-1),p=!0;var Z=d;try{for(_($),u=t(l);u!==null&&(!(u.expirationTime>$)||D&&!S());){var re=u.callback;if(typeof re=="function"){u.callback=null,d=u.priorityLevel;var Ae=re(u.expirationTime<=$);$=n.unstable_now(),typeof Ae=="function"?u.callback=Ae:u===t(l)&&i(l),_($)}else i(l);u=t(l)}if(u!==null)var Ge=!0;else{var q=t(c);q!==null&&K(M,q.startTime-$),Ge=!1}return Ge}finally{u=null,d=Z,p=!1}}var E=!1,C=null,R=-1,U=5,x=-1;function S(){return!(n.unstable_now()-x<U)}function k(){if(C!==null){var D=n.unstable_now();x=D;var $=!0;try{$=C(!0,D)}finally{$?B():(E=!1,C=null)}}else E=!1}var B;if(typeof v=="function")B=function(){v(k)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,X=O.port2;O.port1.onmessage=k,B=function(){X.postMessage(null)}}else B=function(){m(k,0)};function H(D){C=D,E||(E=!0,B())}function K(D,$){R=m(function(){D(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,H(b))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var Z=d;d=$;try{return D()}finally{d=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=d;d=D;try{return $()}finally{d=Z}},n.unstable_scheduleCallback=function(D,$,Z){var re=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,D){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=Z+Ae,D={id:h++,callback:$,priorityLevel:D,startTime:Z,expirationTime:Ae,sortIndex:-1},Z>re?(D.sortIndex=Z,e(c,D),t(l)===null&&D===t(c)&&(y?(f(R),R=-1):y=!0,K(M,Z-re))):(D.sortIndex=Ae,e(l,D),g||p||(g=!0,H(b))),D},n.unstable_shouldYield=S,n.unstable_wrapCallback=function(D){var $=d;return function(){var Z=d;d=$;try{return D.apply(this,arguments)}finally{d=Z}}}})(zg);kg.exports=zg;var Mx=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx=et,Dn=Mx;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Og=new Set,aa={};function Jr(n,e){qs(n,e),qs(n+"Capture",e)}function qs(n,e){for(aa[n]=e,n=0;n<e.length;n++)Og.add(e[n])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wp={},jp={};function Ex(n){return wh.call(jp,n)?!0:wh.call(Wp,n)?!1:wx.test(n)?jp[n]=!0:(Wp[n]=!0,!1)}function Tx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function bx(n,e,t,i){if(e===null||typeof e>"u"||Tx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Zt[n]=new pn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Zt[e]=new pn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Zt[n]=new pn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Zt[n]=new pn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Zt[n]=new pn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Zt[n]=new pn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Zt[n]=new pn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Zt[n]=new pn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Zt[n]=new pn(n,5,!1,n.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(mf,gf);Zt[e]=new pn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(mf,gf);Zt[e]=new pn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(mf,gf);Zt[e]=new pn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Zt[n]=new pn(n,1,!1,n.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Zt[n]=new pn(n,1,!1,n.toLowerCase(),null,!0,!0)});function vf(n,e,t,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bx(e,t,r,i)&&(t=null),i||r===null?Ex(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Hi=Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),Vg=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function xo(n){return n===null||typeof n!="object"?null:(n=Xp&&n[Xp]||n["@@iterator"],typeof n=="function"?n:null)}var Tt=Object.assign,ou;function Ho(n){if(ou===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ou=e&&e[1]||""}return`
`+ou+n}var au=!1;function lu(n,e){if(!n||au)return"";au=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{au=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ho(n):""}function Cx(n){switch(n.tag){case 5:return Ho(n.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return n=lu(n.type,!1),n;case 11:return n=lu(n.type.render,!1),n;case 1:return n=lu(n.type,!0),n;default:return""}}function Ch(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Cs:return"Fragment";case bs:return"Portal";case Eh:return"Profiler";case yf:return"StrictMode";case Th:return"Suspense";case bh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Hg:return(n.displayName||"Context")+".Consumer";case Bg:return(n._context.displayName||"Context")+".Provider";case _f:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xf:return e=n.displayName||null,e!==null?e:Ch(n.type)||"Memo";case Ji:e=n._payload,n=n._init;try{return Ch(n(e))}catch{}}return null}function Ax(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ch(e);case 8:return e===yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Gg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rx(n){var e=Gg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ga(n){n._valueTracker||(n._valueTracker=Rx(n))}function Wg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Gg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function tc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ah(n,e){var t=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Yp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=gr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jg(n,e){e=e.checked,e!=null&&vf(n,"checked",e,!1)}function Rh(n,e){jg(n,e);var t=gr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ph(n,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function qp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ph(n,e,t){(e!=="number"||tc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Vo=Array.isArray;function Os(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+gr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Lh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $p(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(Vo(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:gr(t)}}function Xg(n,e){var t=gr(e.value),i=gr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Kp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Yg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Yg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Wa,qg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function la(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Px=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(n){Px.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Xo[e]=Xo[n]})});function $g(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Xo.hasOwnProperty(n)&&Xo[n]?(""+e).trim():e+"px"}function Kg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=$g(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Lx=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(n,e){if(e){if(Lx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Ih(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=null;function Mf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fh=null,Bs=null,Hs=null;function Zp(n){if(n=Fa(n)){if(typeof Fh!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=kc(e),Fh(n.stateNode,n.type,e))}}function Zg(n){Bs?Hs?Hs.push(n):Hs=[n]:Bs=n}function Jg(){if(Bs){var n=Bs,e=Hs;if(Hs=Bs=null,Zp(n),e)for(n=0;n<e.length;n++)Zp(e[n])}}function Qg(n,e){return n(e)}function ev(){}var cu=!1;function tv(n,e,t){if(cu)return n(e,t);cu=!0;try{return Qg(n,e,t)}finally{cu=!1,(Bs!==null||Hs!==null)&&(ev(),Jg())}}function ca(n,e){var t=n.stateNode;if(t===null)return null;var i=kc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var kh=!1;if(Fi)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){kh=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{kh=!1}function Dx(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Yo=!1,nc=null,ic=!1,zh=null,Nx={onError:function(n){Yo=!0,nc=n}};function Ix(n,e,t,i,r,s,o,a,l){Yo=!1,nc=null,Dx.apply(Nx,arguments)}function Ux(n,e,t,i,r,s,o,a,l){if(Ix.apply(this,arguments),Yo){if(Yo){var c=nc;Yo=!1,nc=null}else throw Error(ie(198));ic||(ic=!0,zh=c)}}function Qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function nv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(n){if(Qr(n)!==n)throw Error(ie(188))}function Fx(n){var e=n.alternate;if(!e){if(e=Qr(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Jp(r),n;if(s===i)return Jp(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function iv(n){return n=Fx(n),n!==null?rv(n):null}function rv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=rv(n);if(e!==null)return e;n=n.sibling}return null}var sv=Dn.unstable_scheduleCallback,Qp=Dn.unstable_cancelCallback,kx=Dn.unstable_shouldYield,zx=Dn.unstable_requestPaint,Pt=Dn.unstable_now,Ox=Dn.unstable_getCurrentPriorityLevel,Sf=Dn.unstable_ImmediatePriority,ov=Dn.unstable_UserBlockingPriority,rc=Dn.unstable_NormalPriority,Bx=Dn.unstable_LowPriority,av=Dn.unstable_IdlePriority,Nc=null,pi=null;function Hx(n){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Nc,n,void 0,(n.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:Wx,Vx=Math.log,Gx=Math.LN2;function Wx(n){return n>>>=0,n===0?32:31-(Vx(n)/Gx|0)|0}var ja=64,Xa=4194304;function Go(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function sc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=t&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-si(e),r=1<<t,i|=n[t],e&=~r;return i}function jx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-si(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=jx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Oh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function lv(){var n=ja;return ja<<=1,!(ja&4194240)&&(ja=64),n}function uu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ia(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-si(e),n[e]=t}function Yx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function wf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var dt=0;function cv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var uv,Ef,hv,dv,fv,Bh=!1,Ya=[],ar=null,lr=null,cr=null,ua=new Map,ha=new Map,tr=[],qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(n,e){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function So(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&Ef(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function $x(n,e,t,i,r){switch(e){case"focusin":return ar=So(ar,n,e,t,i,r),!0;case"dragenter":return lr=So(lr,n,e,t,i,r),!0;case"mouseover":return cr=So(cr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ua.set(s,So(ua.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,So(ha.get(s)||null,n,e,t,i,r)),!0}return!1}function pv(n){var e=Or(n.target);if(e!==null){var t=Qr(e);if(t!==null){if(e=t.tag,e===13){if(e=nv(t),e!==null){n.blockedOn=e,fv(n.priority,function(){hv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Hh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Uh=i,t.target.dispatchEvent(i),Uh=null}else return e=Fa(t),e!==null&&Ef(e),n.blockedOn=t,!1;e.shift()}return!0}function tm(n,e,t){Fl(n)&&t.delete(e)}function Kx(){Bh=!1,ar!==null&&Fl(ar)&&(ar=null),lr!==null&&Fl(lr)&&(lr=null),cr!==null&&Fl(cr)&&(cr=null),ua.forEach(tm),ha.forEach(tm)}function wo(n,e){n.blockedOn===e&&(n.blockedOn=null,Bh||(Bh=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Kx)))}function da(n){function e(r){return wo(r,n)}if(0<Ya.length){wo(Ya[0],n);for(var t=1;t<Ya.length;t++){var i=Ya[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ar!==null&&wo(ar,n),lr!==null&&wo(lr,n),cr!==null&&wo(cr,n),ua.forEach(e),ha.forEach(e),t=0;t<tr.length;t++)i=tr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<tr.length&&(t=tr[0],t.blockedOn===null);)pv(t),t.blockedOn===null&&tr.shift()}var Vs=Hi.ReactCurrentBatchConfig,oc=!0;function Zx(n,e,t,i){var r=dt,s=Vs.transition;Vs.transition=null;try{dt=1,Tf(n,e,t,i)}finally{dt=r,Vs.transition=s}}function Jx(n,e,t,i){var r=dt,s=Vs.transition;Vs.transition=null;try{dt=4,Tf(n,e,t,i)}finally{dt=r,Vs.transition=s}}function Tf(n,e,t,i){if(oc){var r=Hh(n,e,t,i);if(r===null)xu(n,e,i,ac,t),em(n,i);else if($x(r,n,e,t,i))i.stopPropagation();else if(em(n,i),e&4&&-1<qx.indexOf(n)){for(;r!==null;){var s=Fa(r);if(s!==null&&uv(s),s=Hh(n,e,t,i),s===null&&xu(n,e,i,ac,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(n,e,i,null,t)}}var ac=null;function Hh(n,e,t,i){if(ac=null,n=Mf(i),n=Or(n),n!==null)if(e=Qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=nv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ac=n,null}function mv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ox()){case Sf:return 1;case ov:return 4;case rc:case Bx:return 16;case av:return 536870912;default:return 16}default:return 16}}var rr=null,bf=null,kl=null;function gv(){if(kl)return kl;var n,e=bf,t=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return kl=r.slice(n,1<i?1-i:void 0)}function zl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qa(){return!0}function nm(){return!1}function In(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:nm,this.isPropagationStopped=nm,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=In(fo),Ua=Tt({},fo,{view:0,detail:0}),Qx=In(Ua),hu,du,Eo,Ic=Tt({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Eo&&(Eo&&n.type==="mousemove"?(hu=n.screenX-Eo.screenX,du=n.screenY-Eo.screenY):du=hu=0,Eo=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:du}}),im=In(Ic),eM=Tt({},Ic,{dataTransfer:0}),tM=In(eM),nM=Tt({},Ua,{relatedTarget:0}),fu=In(nM),iM=Tt({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),rM=In(iM),sM=Tt({},fo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),oM=In(sM),aM=Tt({},fo,{data:0}),rm=In(aM),lM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=uM[n])?!!e[n]:!1}function Af(){return hM}var dM=Tt({},Ua,{key:function(n){if(n.key){var e=lM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(n){return n.type==="keypress"?zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fM=In(dM),pM=Tt({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=In(pM),mM=Tt({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),gM=In(mM),vM=Tt({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yM=In(vM),_M=Tt({},Ic,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xM=In(_M),MM=[9,13,27,32],Rf=Fi&&"CompositionEvent"in window,qo=null;Fi&&"documentMode"in document&&(qo=document.documentMode);var SM=Fi&&"TextEvent"in window&&!qo,vv=Fi&&(!Rf||qo&&8<qo&&11>=qo),om=" ",am=!1;function yv(n,e){switch(n){case"keyup":return MM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _v(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function wM(n,e){switch(n){case"compositionend":return _v(e);case"keypress":return e.which!==32?null:(am=!0,om);case"textInput":return n=e.data,n===om&&am?null:n;default:return null}}function EM(n,e){if(As)return n==="compositionend"||!Rf&&yv(n,e)?(n=gv(),kl=bf=rr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vv&&e.locale!=="ko"?null:e.data;default:return null}}var TM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!TM[n.type]:e==="textarea"}function xv(n,e,t,i){Zg(i),e=lc(e,"onChange"),0<e.length&&(t=new Cf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var $o=null,fa=null;function bM(n){Lv(n,0)}function Uc(n){var e=Ls(n);if(Wg(e))return n}function CM(n,e){if(n==="change")return e}var Mv=!1;if(Fi){var pu;if(Fi){var mu="oninput"in document;if(!mu){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),mu=typeof cm.oninput=="function"}pu=mu}else pu=!1;Mv=pu&&(!document.documentMode||9<document.documentMode)}function um(){$o&&($o.detachEvent("onpropertychange",Sv),fa=$o=null)}function Sv(n){if(n.propertyName==="value"&&Uc(fa)){var e=[];xv(e,fa,n,Mf(n)),tv(bM,e)}}function AM(n,e,t){n==="focusin"?(um(),$o=e,fa=t,$o.attachEvent("onpropertychange",Sv)):n==="focusout"&&um()}function RM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uc(fa)}function PM(n,e){if(n==="click")return Uc(e)}function LM(n,e){if(n==="input"||n==="change")return Uc(e)}function DM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var li=typeof Object.is=="function"?Object.is:DM;function pa(n,e){if(li(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!wh.call(e,r)||!li(n[r],e[r]))return!1}return!0}function hm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dm(n,e){var t=hm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=hm(t)}}function wv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?wv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ev(){for(var n=window,e=tc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=tc(n.document)}return e}function Pf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function NM(n){var e=Ev(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&wv(t.ownerDocument.documentElement,t)){if(i!==null&&Pf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=dm(t,s);var o=dm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var IM=Fi&&"documentMode"in document&&11>=document.documentMode,Rs=null,Vh=null,Ko=null,Gh=!1;function fm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gh||Rs==null||Rs!==tc(i)||(i=Rs,"selectionStart"in i&&Pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&pa(Ko,i)||(Ko=i,i=lc(Vh,"onSelect"),0<i.length&&(e=new Cf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Rs)))}function $a(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ps={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},gu={},Tv={};Fi&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Fc(n){if(gu[n])return gu[n];if(!Ps[n])return n;var e=Ps[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Tv)return gu[n]=e[t];return n}var bv=Fc("animationend"),Cv=Fc("animationiteration"),Av=Fc("animationstart"),Rv=Fc("transitionend"),Pv=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(n,e){Pv.set(n,e),Jr(e,[n])}for(var vu=0;vu<pm.length;vu++){var yu=pm[vu],UM=yu.toLowerCase(),FM=yu[0].toUpperCase()+yu.slice(1);_r(UM,"on"+FM)}_r(bv,"onAnimationEnd");_r(Cv,"onAnimationIteration");_r(Av,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Rv,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function mm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Ux(i,e,void 0,n),n.currentTarget=null}function Lv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;mm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;mm(r,a,c),s=l}}}if(ic)throw n=zh,ic=!1,zh=null,n}function _t(n,e){var t=e[qh];t===void 0&&(t=e[qh]=new Set);var i=n+"__bubble";t.has(i)||(Dv(e,n,2,!1),t.add(i))}function _u(n,e,t){var i=0;e&&(i|=4),Dv(t,n,i,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function ma(n){if(!n[Ka]){n[Ka]=!0,Og.forEach(function(t){t!=="selectionchange"&&(kM.has(t)||_u(t,!1,n),_u(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,_u("selectionchange",!1,e))}}function Dv(n,e,t,i){switch(mv(e)){case 1:var r=Zx;break;case 4:r=Jx;break;default:r=Tf}t=r.bind(null,e,t,n),r=void 0,!kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function xu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}tv(function(){var c=s,h=Mf(t),u=[];e:{var d=Pv.get(n);if(d!==void 0){var p=Cf,g=n;switch(n){case"keypress":if(zl(t)===0)break e;case"keydown":case"keyup":p=fM;break;case"focusin":g="focus",p=fu;break;case"focusout":g="blur",p=fu;break;case"beforeblur":case"afterblur":p=fu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gM;break;case bv:case Cv:case Av:p=rM;break;case Rv:p=yM;break;case"scroll":p=Qx;break;case"wheel":p=xM;break;case"copy":case"cut":case"paste":p=oM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sm}var y=(e&4)!==0,m=!y&&n==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,f!==null&&(M=ca(v,f),M!=null&&y.push(ga(v,M,_)))),m)break;v=v.return}0<y.length&&(d=new p(d,g,null,t,h),u.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Uh&&(g=t.relatedTarget||t.fromElement)&&(Or(g)||g[ki]))break e;if((p||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Or(g):null,g!==null&&(m=Qr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=im,M="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=sm,M="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:Ls(p),_=g==null?d:Ls(g),d=new y(M,v+"leave",p,t,h),d.target=m,d.relatedTarget=_,M=null,Or(h)===c&&(y=new y(f,v+"enter",g,t,h),y.target=_,y.relatedTarget=m,M=y),m=M,p&&g)t:{for(y=p,f=g,v=0,_=y;_;_=is(_))v++;for(_=0,M=f;M;M=is(M))_++;for(;0<v-_;)y=is(y),v--;for(;0<_-v;)f=is(f),_--;for(;v--;){if(y===f||f!==null&&y===f.alternate)break t;y=is(y),f=is(f)}y=null}else y=null;p!==null&&gm(u,d,p,y,!1),g!==null&&m!==null&&gm(u,m,g,y,!0)}}e:{if(d=c?Ls(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=CM;else if(lm(d))if(Mv)b=LM;else{b=RM;var E=AM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=PM);if(b&&(b=b(n,c))){xv(u,b,t,h);break e}E&&E(n,d,c),n==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Ph(d,"number",d.value)}switch(E=c?Ls(c):window,n){case"focusin":(lm(E)||E.contentEditable==="true")&&(Rs=E,Vh=c,Ko=null);break;case"focusout":Ko=Vh=Rs=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,fm(u,t,h);break;case"selectionchange":if(IM)break;case"keydown":case"keyup":fm(u,t,h)}var C;if(Rf)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else As?yv(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(vv&&t.locale!=="ko"&&(As||R!=="onCompositionStart"?R==="onCompositionEnd"&&As&&(C=gv()):(rr=h,bf="value"in rr?rr.value:rr.textContent,As=!0)),E=lc(c,R),0<E.length&&(R=new rm(R,n,null,t,h),u.push({event:R,listeners:E}),C?R.data=C:(C=_v(t),C!==null&&(R.data=C)))),(C=SM?wM(n,t):EM(n,t))&&(c=lc(c,"onBeforeInput"),0<c.length&&(h=new rm("onBeforeInput","beforeinput",null,t,h),u.push({event:h,listeners:c}),h.data=C))}Lv(u,e)})}function ga(n,e,t){return{instance:n,listener:e,currentTarget:t}}function lc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ca(n,t),s!=null&&i.unshift(ga(n,s,r)),s=ca(n,e),s!=null&&i.push(ga(n,s,r))),n=n.return}return i}function is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ca(t,s),l!=null&&o.unshift(ga(t,l,a))):r||(l=ca(t,s),l!=null&&o.push(ga(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var zM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function vm(n){return(typeof n=="string"?n:""+n).replace(zM,`
`).replace(OM,"")}function Za(n,e,t){if(e=vm(e),vm(n)!==e&&t)throw Error(ie(425))}function cc(){}var Wh=null,jh=null;function Xh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yh=typeof setTimeout=="function"?setTimeout:void 0,BM=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,HM=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(n){return ym.resolve(null).then(n).catch(VM)}:Yh;function VM(n){setTimeout(function(){throw n})}function Mu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),da(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);da(e)}function ur(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function _m(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var po=Math.random().toString(36).slice(2),di="__reactFiber$"+po,va="__reactProps$"+po,ki="__reactContainer$"+po,qh="__reactEvents$"+po,GM="__reactListeners$"+po,WM="__reactHandles$"+po;function Or(n){var e=n[di];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ki]||t[di]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=_m(n);n!==null;){if(t=n[di])return t;n=_m(n)}return e}n=t,t=n.parentNode}return null}function Fa(n){return n=n[di]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function kc(n){return n[va]||null}var $h=[],Ds=-1;function xr(n){return{current:n}}function Mt(n){0>Ds||(n.current=$h[Ds],$h[Ds]=null,Ds--)}function gt(n,e){Ds++,$h[Ds]=n.current,n.current=e}var vr={},sn=xr(vr),xn=xr(!1),jr=vr;function $s(n,e){var t=n.type.contextTypes;if(!t)return vr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(n){return n=n.childContextTypes,n!=null}function uc(){Mt(xn),Mt(sn)}function xm(n,e,t){if(sn.current!==vr)throw Error(ie(168));gt(sn,e),gt(xn,t)}function Nv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Ax(n)||"Unknown",r));return Tt({},t,i)}function hc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,jr=sn.current,gt(sn,n),gt(xn,xn.current),!0}function Mm(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=Nv(n,e,jr),i.__reactInternalMemoizedMergedChildContext=n,Mt(xn),Mt(sn),gt(sn,n)):Mt(xn),gt(xn,t)}var Ai=null,zc=!1,Su=!1;function Iv(n){Ai===null?Ai=[n]:Ai.push(n)}function jM(n){zc=!0,Iv(n)}function Mr(){if(!Su&&Ai!==null){Su=!0;var n=0,e=dt;try{var t=Ai;for(dt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ai=null,zc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(n+1)),sv(Sf,Mr),r}finally{dt=e,Su=!1}}return null}var Ns=[],Is=0,dc=null,fc=0,kn=[],zn=0,Xr=null,Ri=1,Pi="";function Ir(n,e){Ns[Is++]=fc,Ns[Is++]=dc,dc=n,fc=e}function Uv(n,e,t){kn[zn++]=Ri,kn[zn++]=Pi,kn[zn++]=Xr,Xr=n;var i=Ri;n=Pi;var r=32-si(i)-1;i&=~(1<<r),t+=1;var s=32-si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-si(e)+r|t<<r|i,Pi=s+n}else Ri=1<<s|t<<r|i,Pi=n}function Lf(n){n.return!==null&&(Ir(n,1),Uv(n,1,0))}function Df(n){for(;n===dc;)dc=Ns[--Is],Ns[Is]=null,fc=Ns[--Is],Ns[Is]=null;for(;n===Xr;)Xr=kn[--zn],kn[zn]=null,Pi=kn[--zn],kn[zn]=null,Ri=kn[--zn],kn[zn]=null}var Ln=null,Pn=null,St=!1,Jn=null;function Fv(n,e){var t=Bn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Sm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ln=n,Pn=ur(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ln=n,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Xr!==null?{id:Ri,overflow:Pi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Bn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ln=n,Pn=null,!0):!1;default:return!1}}function Kh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zh(n){if(St){var e=Pn;if(e){var t=e;if(!Sm(n,e)){if(Kh(n))throw Error(ie(418));e=ur(t.nextSibling);var i=Ln;e&&Sm(n,e)?Fv(i,t):(n.flags=n.flags&-4097|2,St=!1,Ln=n)}}else{if(Kh(n))throw Error(ie(418));n.flags=n.flags&-4097|2,St=!1,Ln=n}}}function wm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ln=n}function Ja(n){if(n!==Ln)return!1;if(!St)return wm(n),St=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Xh(n.type,n.memoizedProps)),e&&(e=Pn)){if(Kh(n))throw kv(),Error(ie(418));for(;e;)Fv(n,e),e=ur(e.nextSibling)}if(wm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Pn=ur(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Pn=null}}else Pn=Ln?ur(n.stateNode.nextSibling):null;return!0}function kv(){for(var n=Pn;n;)n=ur(n.nextSibling)}function Ks(){Pn=Ln=null,St=!1}function Nf(n){Jn===null?Jn=[n]:Jn.push(n)}var XM=Hi.ReactCurrentBatchConfig;function To(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function Qa(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Em(n){var e=n._init;return e(n._payload)}function zv(n){function e(f,v){if(n){var _=f.deletions;_===null?(f.deletions=[v],f.flags|=16):_.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=pr(f,v),f.index=0,f.sibling=null,f}function s(f,v,_){return f.index=_,n?(_=f.alternate,_!==null?(_=_.index,_<v?(f.flags|=2,v):_):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,_,M){return v===null||v.tag!==6?(v=Ru(_,f.mode,M),v.return=f,v):(v=r(v,_),v.return=f,v)}function l(f,v,_,M){var b=_.type;return b===Cs?h(f,v,_.props.children,M,_.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ji&&Em(b)===v.type)?(M=r(v,_.props),M.ref=To(f,v,_),M.return=f,M):(M=jl(_.type,_.key,_.props,null,f.mode,M),M.ref=To(f,v,_),M.return=f,M)}function c(f,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Pu(_,f.mode,M),v.return=f,v):(v=r(v,_.children||[]),v.return=f,v)}function h(f,v,_,M,b){return v===null||v.tag!==7?(v=Wr(_,f.mode,M,b),v.return=f,v):(v=r(v,_),v.return=f,v)}function u(f,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ru(""+v,f.mode,_),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return _=jl(v.type,v.key,v.props,null,f.mode,_),_.ref=To(f,null,v),_.return=f,_;case bs:return v=Pu(v,f.mode,_),v.return=f,v;case Ji:var M=v._init;return u(f,M(v._payload),_)}if(Vo(v)||xo(v))return v=Wr(v,f.mode,_,null),v.return=f,v;Qa(f,v)}return null}function d(f,v,_,M){var b=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(f,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return _.key===b?l(f,v,_,M):null;case bs:return _.key===b?c(f,v,_,M):null;case Ji:return b=_._init,d(f,v,b(_._payload),M)}if(Vo(_)||xo(_))return b!==null?null:h(f,v,_,M,null);Qa(f,_)}return null}function p(f,v,_,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(_)||null,a(v,f,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Va:return f=f.get(M.key===null?_:M.key)||null,l(v,f,M,b);case bs:return f=f.get(M.key===null?_:M.key)||null,c(v,f,M,b);case Ji:var E=M._init;return p(f,v,_,E(M._payload),b)}if(Vo(M)||xo(M))return f=f.get(_)||null,h(v,f,M,b,null);Qa(v,M)}return null}function g(f,v,_,M){for(var b=null,E=null,C=v,R=v=0,U=null;C!==null&&R<_.length;R++){C.index>R?(U=C,C=null):U=C.sibling;var x=d(f,C,_[R],M);if(x===null){C===null&&(C=U);break}n&&C&&x.alternate===null&&e(f,C),v=s(x,v,R),E===null?b=x:E.sibling=x,E=x,C=U}if(R===_.length)return t(f,C),St&&Ir(f,R),b;if(C===null){for(;R<_.length;R++)C=u(f,_[R],M),C!==null&&(v=s(C,v,R),E===null?b=C:E.sibling=C,E=C);return St&&Ir(f,R),b}for(C=i(f,C);R<_.length;R++)U=p(C,f,R,_[R],M),U!==null&&(n&&U.alternate!==null&&C.delete(U.key===null?R:U.key),v=s(U,v,R),E===null?b=U:E.sibling=U,E=U);return n&&C.forEach(function(S){return e(f,S)}),St&&Ir(f,R),b}function y(f,v,_,M){var b=xo(_);if(typeof b!="function")throw Error(ie(150));if(_=b.call(_),_==null)throw Error(ie(151));for(var E=b=null,C=v,R=v=0,U=null,x=_.next();C!==null&&!x.done;R++,x=_.next()){C.index>R?(U=C,C=null):U=C.sibling;var S=d(f,C,x.value,M);if(S===null){C===null&&(C=U);break}n&&C&&S.alternate===null&&e(f,C),v=s(S,v,R),E===null?b=S:E.sibling=S,E=S,C=U}if(x.done)return t(f,C),St&&Ir(f,R),b;if(C===null){for(;!x.done;R++,x=_.next())x=u(f,x.value,M),x!==null&&(v=s(x,v,R),E===null?b=x:E.sibling=x,E=x);return St&&Ir(f,R),b}for(C=i(f,C);!x.done;R++,x=_.next())x=p(C,f,R,x.value,M),x!==null&&(n&&x.alternate!==null&&C.delete(x.key===null?R:x.key),v=s(x,v,R),E===null?b=x:E.sibling=x,E=x);return n&&C.forEach(function(k){return e(f,k)}),St&&Ir(f,R),b}function m(f,v,_,M){if(typeof _=="object"&&_!==null&&_.type===Cs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:e:{for(var b=_.key,E=v;E!==null;){if(E.key===b){if(b=_.type,b===Cs){if(E.tag===7){t(f,E.sibling),v=r(E,_.props.children),v.return=f,f=v;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ji&&Em(b)===E.type){t(f,E.sibling),v=r(E,_.props),v.ref=To(f,E,_),v.return=f,f=v;break e}t(f,E);break}else e(f,E);E=E.sibling}_.type===Cs?(v=Wr(_.props.children,f.mode,M,_.key),v.return=f,f=v):(M=jl(_.type,_.key,_.props,null,f.mode,M),M.ref=To(f,v,_),M.return=f,f=M)}return o(f);case bs:e:{for(E=_.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(f,v.sibling),v=r(v,_.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=Pu(_,f.mode,M),v.return=f,f=v}return o(f);case Ji:return E=_._init,m(f,v,E(_._payload),M)}if(Vo(_))return g(f,v,_,M);if(xo(_))return y(f,v,_,M);Qa(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,_),v.return=f,f=v):(t(f,v),v=Ru(_,f.mode,M),v.return=f,f=v),o(f)):t(f,v)}return m}var Zs=zv(!0),Ov=zv(!1),pc=xr(null),mc=null,Us=null,If=null;function Uf(){If=Us=mc=null}function Ff(n){var e=pc.current;Mt(pc),n._currentValue=e}function Jh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Gs(n,e){mc=n,If=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(yn=!0),n.firstContext=null)}function Vn(n){var e=n._currentValue;if(If!==n)if(n={context:n,memoizedValue:e,next:null},Us===null){if(mc===null)throw Error(ie(308));Us=n,mc.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return e}var Br=null;function kf(n){Br===null?Br=[n]:Br.push(n)}function Bv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,kf(e)):(t.next=r.next,r.next=t),e.interleaved=t,zi(n,i)}function zi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Qi=!1;function zf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Di(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(n,t)}return r=i.interleaved,r===null?(e.next=e,kf(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(n,t)}function Ol(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,wf(n,t)}}function Tm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function gc(n,e,t,i){var r=n.updateQueue;Qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,y=a;switch(d=e,p=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){u=g.call(p,u,d);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,u,d):g,d==null)break e;u=Tt({},u,d);break e;case 2:Qi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=u):h=h.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,n.lanes=o,n.memoizedState=u}}function bm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ka={},mi=xr(ka),ya=xr(ka),_a=xr(ka);function Hr(n){if(n===ka)throw Error(ie(174));return n}function Of(n,e){switch(gt(_a,e),gt(ya,n),gt(mi,ka),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Dh(e,n)}Mt(mi),gt(mi,e)}function Js(){Mt(mi),Mt(ya),Mt(_a)}function Vv(n){Hr(_a.current);var e=Hr(mi.current),t=Dh(e,n.type);e!==t&&(gt(ya,n),gt(mi,t))}function Bf(n){ya.current===n&&(Mt(mi),Mt(ya))}var wt=xr(0);function vc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wu=[];function Hf(){for(var n=0;n<wu.length;n++)wu[n]._workInProgressVersionPrimary=null;wu.length=0}var Bl=Hi.ReactCurrentDispatcher,Eu=Hi.ReactCurrentBatchConfig,Yr=0,Et=null,kt=null,Wt=null,yc=!1,Zo=!1,xa=0,YM=0;function Jt(){throw Error(ie(321))}function Vf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!li(n[t],e[t]))return!1;return!0}function Gf(n,e,t,i,r,s){if(Yr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=n===null||n.memoizedState===null?ZM:JM,n=t(i,r),Zo){s=0;do{if(Zo=!1,xa=0,25<=s)throw Error(ie(301));s+=1,Wt=kt=null,e.updateQueue=null,Bl.current=QM,n=t(i,r)}while(Zo)}if(Bl.current=_c,e=kt!==null&&kt.next!==null,Yr=0,Wt=kt=Et=null,yc=!1,e)throw Error(ie(300));return n}function Wf(){var n=xa!==0;return xa=0,n}function ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function Gn(){if(kt===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,kt=n;else{if(n===null)throw Error(ie(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Wt===null?Et.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function Ma(n,e){return typeof e=="function"?e(n):e}function Tu(n){var e=Gn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Yr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,Et.lanes|=h,qr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,qr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function bu(n){var e=Gn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Gv(){}function Wv(n,e){var t=Et,i=Gn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,jf(Yv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,Sa(9,Xv.bind(null,t,i,r,e),void 0,null),Xt===null)throw Error(ie(349));Yr&30||jv(t,e,r)}return r}function jv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Xv(n,e,t,i){e.value=t,e.getSnapshot=i,qv(e)&&$v(n)}function Yv(n,e,t){return t(function(){qv(e)&&$v(n)})}function qv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!li(n,t)}catch{return!0}}function $v(n){var e=zi(n,1);e!==null&&oi(e,n,1,-1)}function Cm(n){var e=ui();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},e.queue=n,n=n.dispatch=KM.bind(null,Et,n),[e.memoizedState,n]}function Sa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Kv(){return Gn().memoizedState}function Hl(n,e,t,i){var r=ui();Et.flags|=n,r.memoizedState=Sa(1|e,t,void 0,i===void 0?null:i)}function Oc(n,e,t,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Vf(i,o.deps)){r.memoizedState=Sa(e,t,s,i);return}}Et.flags|=n,r.memoizedState=Sa(1|e,t,s,i)}function Am(n,e){return Hl(8390656,8,n,e)}function jf(n,e){return Oc(2048,8,n,e)}function Zv(n,e){return Oc(4,2,n,e)}function Jv(n,e){return Oc(4,4,n,e)}function Qv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ey(n,e,t){return t=t!=null?t.concat([n]):null,Oc(4,4,Qv.bind(null,e,n),t)}function Xf(){}function ty(n,e){var t=Gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ny(n,e){var t=Gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function iy(n,e,t){return Yr&21?(li(t,e)||(t=lv(),Et.lanes|=t,qr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,yn=!0),n.memoizedState=t)}function qM(n,e){var t=dt;dt=t!==0&&4>t?t:4,n(!0);var i=Eu.transition;Eu.transition={};try{n(!1),e()}finally{dt=t,Eu.transition=i}}function ry(){return Gn().memoizedState}function $M(n,e,t){var i=fr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},sy(n))oy(e,t);else if(t=Bv(n,e,t,i),t!==null){var r=hn();oi(t,n,i,r),ay(t,e,i)}}function KM(n,e,t){var i=fr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(sy(n))oy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,kf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Bv(n,e,r,i),t!==null&&(r=hn(),oi(t,n,i,r),ay(t,e,i))}}function sy(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function oy(n,e){Zo=yc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ay(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,wf(n,t)}}var _c={readContext:Vn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},ZM={readContext:Vn,useCallback:function(n,e){return ui().memoizedState=[n,e===void 0?null:e],n},useContext:Vn,useEffect:Am,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Hl(4194308,4,Qv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Hl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Hl(4,2,n,e)},useMemo:function(n,e){var t=ui();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ui();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=$M.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=ui();return n={current:n},e.memoizedState=n},useState:Cm,useDebugValue:Xf,useDeferredValue:function(n){return ui().memoizedState=n},useTransition:function(){var n=Cm(!1),e=n[0];return n=qM.bind(null,n[1]),ui().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=ui();if(St){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),Xt===null)throw Error(ie(349));Yr&30||jv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Am(Yv.bind(null,i,s,n),[n]),i.flags|=2048,Sa(9,Xv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ui(),e=Xt.identifierPrefix;if(St){var t=Pi,i=Ri;t=(i&~(1<<32-si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=xa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=YM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},JM={readContext:Vn,useCallback:ty,useContext:Vn,useEffect:jf,useImperativeHandle:ey,useInsertionEffect:Zv,useLayoutEffect:Jv,useMemo:ny,useReducer:Tu,useRef:Kv,useState:function(){return Tu(Ma)},useDebugValue:Xf,useDeferredValue:function(n){var e=Gn();return iy(e,kt.memoizedState,n)},useTransition:function(){var n=Tu(Ma)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:Gv,useSyncExternalStore:Wv,useId:ry,unstable_isNewReconciler:!1},QM={readContext:Vn,useCallback:ty,useContext:Vn,useEffect:jf,useImperativeHandle:ey,useInsertionEffect:Zv,useLayoutEffect:Jv,useMemo:ny,useReducer:bu,useRef:Kv,useState:function(){return bu(Ma)},useDebugValue:Xf,useDeferredValue:function(n){var e=Gn();return kt===null?e.memoizedState=n:iy(e,kt.memoizedState,n)},useTransition:function(){var n=bu(Ma)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:Gv,useSyncExternalStore:Wv,useId:ry,unstable_isNewReconciler:!1};function $n(n,e){if(n&&n.defaultProps){e=Tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Qh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Bc={isMounted:function(n){return(n=n._reactInternals)?Qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=hn(),r=fr(n),s=Di(i,r);s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(oi(e,n,r,i),Ol(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=hn(),r=fr(n),s=Di(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(oi(e,n,r,i),Ol(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),i=fr(n),r=Di(t,i);r.tag=2,e!=null&&(r.callback=e),e=hr(n,r,i),e!==null&&(oi(e,n,i,t),Ol(e,n,i))}};function Rm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!pa(t,i)||!pa(r,s):!0}function ly(n,e,t){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=Mn(e)?jr:sn.current,i=e.contextTypes,s=(i=i!=null)?$s(n,r):vr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Pm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Bc.enqueueReplaceState(e,e.state,null)}function ed(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},zf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=Mn(e)?jr:sn.current,r.context=$s(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bc.enqueueReplaceState(r,r.state,null),gc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Qs(n,e){try{var t="",i=e;do t+=Cx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Cu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function td(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var eS=typeof WeakMap=="function"?WeakMap:Map;function cy(n,e,t){t=Di(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Mc||(Mc=!0,hd=i),td(n,e)},t}function uy(n,e,t){t=Di(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){td(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){td(n,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Lm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new eS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=pS.bind(null,n,e,t),e.then(n,n))}function Dm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Nm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Di(-1,1),e.tag=2,hr(t,e,1))),t.lanes|=1),n)}var tS=Hi.ReactCurrentOwner,yn=!1;function cn(n,e,t,i){e.child=n===null?Ov(e,null,t,i):Zs(e,n.child,t,i)}function Im(n,e,t,i,r){t=t.render;var s=e.ref;return Gs(e,r),i=Gf(n,e,t,i,s,r),t=Wf(),n!==null&&!yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(St&&t&&Lf(e),e.flags|=1,cn(n,e,i,r),e.child)}function Um(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ep(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,hy(n,e,s,i,r)):(n=jl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:pa,t(o,i)&&n.ref===e.ref)return Oi(n,e,r)}return e.flags|=1,n=pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function hy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(pa(s,i)&&n.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(yn=!0);else return e.lanes=n.lanes,Oi(n,e,r)}return nd(n,e,t,i,r)}function dy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ks,An),An|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gt(ks,An),An|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,gt(ks,An),An|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,gt(ks,An),An|=i;return cn(n,e,r,t),e.child}function fy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function nd(n,e,t,i,r){var s=Mn(t)?jr:sn.current;return s=$s(e,s),Gs(e,r),t=Gf(n,e,t,i,s,r),i=Wf(),n!==null&&!yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(St&&i&&Lf(e),e.flags|=1,cn(n,e,t,r),e.child)}function Fm(n,e,t,i,r){if(Mn(t)){var s=!0;hc(e)}else s=!1;if(Gs(e,r),e.stateNode===null)Vl(n,e),ly(e,t,i),ed(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=Mn(t)?jr:sn.current,c=$s(e,c));var h=t.getDerivedStateFromProps,u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Pm(e,o,i,c),Qi=!1;var d=e.memoizedState;o.state=d,gc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||xn.current||Qi?(typeof h=="function"&&(Qh(e,t,h,i),l=e.memoizedState),(a=Qi||Rm(e,t,a,i,d,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Hv(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:$n(e.type,a),o.props=c,u=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=Mn(t)?jr:sn.current,l=$s(e,l));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||d!==l)&&Pm(e,o,i,l),Qi=!1,d=e.memoizedState,o.state=d,gc(e,i,o,r);var g=e.memoizedState;a!==u||d!==g||xn.current||Qi?(typeof p=="function"&&(Qh(e,t,p,i),g=e.memoizedState),(c=Qi||Rm(e,t,c,i,d,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return id(n,e,t,i,s,r)}function id(n,e,t,i,r,s){fy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mm(e,t,!1),Oi(n,e,s);i=e.stateNode,tS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Zs(e,n.child,null,s),e.child=Zs(e,null,a,s)):cn(n,e,a,s),e.memoizedState=i.state,r&&Mm(e,t,!0),e.child}function py(n){var e=n.stateNode;e.pendingContext?xm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(n,e.context,!1),Of(n,e.containerInfo)}function km(n,e,t,i,r){return Ks(),Nf(r),e.flags|=256,cn(n,e,t,i),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(n){return{baseLanes:n,cachePool:null,transitions:null}}function my(n,e,t){var i=e.pendingProps,r=wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),gt(wt,r&1),n===null)return Zh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,i,0,null),n=Wr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=sd(t),e.memoizedState=rd,n):Yf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=Wr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?sd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=rd,i}return s=n.child,n=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Yf(n,e){return e=Gc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function el(n,e,t,i){return i!==null&&Nf(i),Zs(e,n.child,null,t),n=Yf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function nS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Cu(Error(ie(422))),el(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gc({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,n.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=rd,s);if(!(e.mode&1))return el(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Cu(s,i,void 0),el(n,e,o,i)}if(a=(o&n.childLanes)!==0,yn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(n,r),oi(i,n,r,-1))}return Qf(),i=Cu(Error(ie(421))),el(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=mS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Pn=ur(r.nextSibling),Ln=e,St=!0,Jn=null,n!==null&&(kn[zn++]=Ri,kn[zn++]=Pi,kn[zn++]=Xr,Ri=n.id,Pi=n.overflow,Xr=e),e=Yf(e,i.children),e.flags|=4096,e)}function zm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Jh(n.return,e,t)}function Au(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function gy(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zm(n,t,e);else if(n.tag===19)zm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(gt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&vc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Au(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&vc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Au(e,!0,t,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Oi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),qr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function iS(n,e,t){switch(e.tag){case 3:py(e),Ks();break;case 5:Vv(e);break;case 1:Mn(e.type)&&hc(e);break;case 4:Of(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(wt,wt.current&1),e.flags|=128,null):t&e.child.childLanes?my(n,e,t):(gt(wt,wt.current&1),n=Oi(n,e,t),n!==null?n.sibling:null);gt(wt,wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return gy(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,dy(n,e,t)}return Oi(n,e,t)}var vy,od,yy,_y;vy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};od=function(){};yy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Hr(mi.current);var s=null;switch(t){case"input":r=Ah(n,r),i=Ah(n,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Lh(n,r),i=Lh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=cc)}Nh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};_y=function(n,e,t,i){t!==i&&(e.flags|=4)};function bo(n,e){if(!St)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function rS(n,e,t){var i=e.pendingProps;switch(Df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Mn(e.type)&&uc(),Qt(e),null;case 3:return i=e.stateNode,Js(),Mt(xn),Mt(sn),Hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ja(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(pd(Jn),Jn=null))),od(n,e),Qt(e),null;case 5:Bf(e);var r=Hr(_a.current);if(t=e.type,n!==null&&e.stateNode!=null)yy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Qt(e),null}if(n=Hr(mi.current),Ja(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[di]=e,i[va]=s,n=(e.mode&1)!==0,t){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Yp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":$p(i,s),_t("invalid",i)}Nh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,a,n),r=["children",""+a]):aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(t){case"input":Ga(i),qp(i,s,!0);break;case"textarea":Ga(i),Kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Yg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[di]=e,n[va]=i,vy(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ih(t,i),t){case"dialog":_t("cancel",n),_t("close",n),r=i;break;case"iframe":case"object":case"embed":_t("load",n),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],n);r=i;break;case"source":_t("error",n),r=i;break;case"img":case"image":case"link":_t("error",n),_t("load",n),r=i;break;case"details":_t("toggle",n),r=i;break;case"input":Yp(n,i),r=Ah(n,i),_t("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),_t("invalid",n);break;case"textarea":$p(n,i),r=Lh(n,i),_t("invalid",n);break;default:r=i}Nh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&la(n,l):typeof l=="number"&&la(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",n):l!=null&&vf(n,s,l,o))}switch(t){case"input":Ga(n),qp(n,i,!1);break;case"textarea":Ga(n),Kp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+gr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Os(n,!!i.multiple,s,!1):i.defaultValue!=null&&Os(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=cc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(n&&e.stateNode!=null)_y(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Hr(_a.current),Hr(mi.current),Ja(e)){if(i=e.stateNode,t=e.memoizedProps,i[di]=e,(s=i.nodeValue!==t)&&(n=Ln,n!==null))switch(n.tag){case 3:Za(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Za(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Qt(e),null;case 13:if(Mt(wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(St&&Pn!==null&&e.mode&1&&!(e.flags&128))kv(),Ks(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[di]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Jn!==null&&(pd(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||wt.current&1?Ot===0&&(Ot=3):Qf())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Js(),od(n,e),n===null&&ma(e.stateNode.containerInfo),Qt(e),null;case 10:return Ff(e.type._context),Qt(e),null;case 17:return Mn(e.type)&&uc(),Qt(e),null;case 19:if(Mt(wt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bo(s,!1);else{if(Ot!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=vc(n),o!==null){for(e.flags|=128,bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gt(wt,wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Pt()>eo&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304)}else{if(!i)if(n=vc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return Qt(e),null}else 2*Pt()-s.renderingStartTime>eo&&t!==1073741824&&(e.flags|=128,i=!0,bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,t=wt.current,gt(wt,i?t&1|2:t&1),e):(Qt(e),null);case 22:case 23:return Jf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function sS(n,e){switch(Df(e),e.tag){case 1:return Mn(e.type)&&uc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Js(),Mt(xn),Mt(sn),Hf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(Mt(wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ks()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Mt(wt),null;case 4:return Js(),null;case 10:return Ff(e.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var tl=!1,nn=!1,oS=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Fs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ct(n,e,i)}else t.current=null}function ad(n,e,t){try{t()}catch(i){Ct(n,e,i)}}var Om=!1;function aS(n,e){if(Wh=oc,n=Ev(),Pf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,h=0,u=n,d=null;t:for(;;){for(var p;u!==t||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)d=u,u=p;for(;;){if(u===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(p=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(jh={focusedElem:n,selectionRange:t},oc=!1,ve=e;ve!==null;)if(e=ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ve=n;else for(;ve!==null;){e=ve;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:$n(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){Ct(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}return g=Om,Om=!1,g}function Jo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&ad(e,t,s)}r=r.next}while(r!==i)}}function Hc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ld(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function xy(n){var e=n.alternate;e!==null&&(n.alternate=null,xy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[di],delete e[va],delete e[qh],delete e[GM],delete e[WM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function My(n){return n.tag===5||n.tag===3||n.tag===4}function Bm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||My(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=cc));else if(i!==4&&(n=n.child,n!==null))for(cd(n,e,t),n=n.sibling;n!==null;)cd(n,e,t),n=n.sibling}function ud(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ud(n,e,t),n=n.sibling;n!==null;)ud(n,e,t),n=n.sibling}var qt=null,Kn=!1;function Gi(n,e,t){for(t=t.child;t!==null;)Sy(n,e,t),t=t.sibling}function Sy(n,e,t){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Nc,t)}catch{}switch(t.tag){case 5:nn||Fs(t,e);case 6:var i=qt,r=Kn;qt=null,Gi(n,e,t),qt=i,Kn=r,qt!==null&&(Kn?(n=qt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):qt.removeChild(t.stateNode));break;case 18:qt!==null&&(Kn?(n=qt,t=t.stateNode,n.nodeType===8?Mu(n.parentNode,t):n.nodeType===1&&Mu(n,t),da(n)):Mu(qt,t.stateNode));break;case 4:i=qt,r=Kn,qt=t.stateNode.containerInfo,Kn=!0,Gi(n,e,t),qt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(t,e,o),r=r.next}while(r!==i)}Gi(n,e,t);break;case 1:if(!nn&&(Fs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ct(t,e,a)}Gi(n,e,t);break;case 21:Gi(n,e,t);break;case 22:t.mode&1?(nn=(i=nn)||t.memoizedState!==null,Gi(n,e,t),nn=i):Gi(n,e,t);break;default:Gi(n,e,t)}}function Hm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new oS),e.forEach(function(i){var r=gS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,Kn=!1;break e;case 3:qt=a.stateNode.containerInfo,Kn=!0;break e;case 4:qt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(qt===null)throw Error(ie(160));Sy(s,o,r),qt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)wy(e,n),e=e.sibling}function wy(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),ci(n),i&4){try{Jo(3,n,n.return),Hc(3,n)}catch(y){Ct(n,n.return,y)}try{Jo(5,n,n.return)}catch(y){Ct(n,n.return,y)}}break;case 1:jn(e,n),ci(n),i&512&&t!==null&&Fs(t,t.return);break;case 5:if(jn(e,n),ci(n),i&512&&t!==null&&Fs(t,t.return),n.flags&32){var r=n.stateNode;try{la(r,"")}catch(y){Ct(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jg(r,s),Ih(a,o);var c=Ih(a,s);for(o=0;o<l.length;o+=2){var h=l[o],u=l[o+1];h==="style"?Kg(r,u):h==="dangerouslySetInnerHTML"?qg(r,u):h==="children"?la(r,u):vf(r,h,u,c)}switch(a){case"input":Rh(r,s);break;case"textarea":Xg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Os(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(y){Ct(n,n.return,y)}}break;case 6:if(jn(e,n),ci(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){Ct(n,n.return,y)}}break;case 3:if(jn(e,n),ci(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(y){Ct(n,n.return,y)}break;case 4:jn(e,n),ci(n);break;case 13:jn(e,n),ci(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kf=Pt())),i&4&&Hm(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(nn=(c=nn)||h,jn(e,n),nn=c):jn(e,n),ci(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(ve=n,h=n.child;h!==null;){for(u=ve=h;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:Jo(4,d,d.return);break;case 1:Fs(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ct(i,t,y)}}break;case 5:Fs(d,d.return);break;case 22:if(d.memoizedState!==null){Gm(u);continue}}p!==null?(p.return=d,ve=p):Gm(u)}h=h.sibling}e:for(h=null,u=n;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$g("display",o))}catch(y){Ct(n,n.return,y)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){Ct(n,n.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===n)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:jn(e,n),ci(n),i&4&&Hm(n);break;case 21:break;default:jn(e,n),ci(n)}}function ci(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(My(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(la(r,""),i.flags&=-33);var s=Bm(n);ud(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Bm(n);cd(n,a,o);break;default:throw Error(ie(161))}}catch(l){Ct(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function lS(n,e,t){ve=n,Ey(n)}function Ey(n,e,t){for(var i=(n.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=tl;var c=nn;if(tl=o,(nn=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Wm(r):l!==null?(l.return=o,ve=l):Wm(r);for(;s!==null;)ve=s,Ey(s),s=s.sibling;ve=r,tl=a,nn=c}Vm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Vm(n)}}function Vm(n){for(;ve!==null;){var e=ve;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:$n(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}bm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&da(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}nn||e.flags&512&&ld(e)}catch(d){Ct(e,e.return,d)}}if(e===n){ve=null;break}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}}function Gm(n){for(;ve!==null;){var e=ve;if(e===n){ve=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ve=t;break}ve=e.return}}function Wm(n){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Hc(4,e)}catch(l){Ct(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{ld(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{ld(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===n){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var cS=Math.ceil,xc=Hi.ReactCurrentDispatcher,qf=Hi.ReactCurrentOwner,Hn=Hi.ReactCurrentBatchConfig,tt=0,Xt=null,It=null,$t=0,An=0,ks=xr(0),Ot=0,wa=null,qr=0,Vc=0,$f=0,Qo=null,vn=null,Kf=0,eo=1/0,Ci=null,Mc=!1,hd=null,dr=null,nl=!1,sr=null,Sc=0,ea=0,dd=null,Gl=-1,Wl=0;function hn(){return tt&6?Pt():Gl!==-1?Gl:Gl=Pt()}function fr(n){return n.mode&1?tt&2&&$t!==0?$t&-$t:XM.transition!==null?(Wl===0&&(Wl=lv()),Wl):(n=dt,n!==0||(n=window.event,n=n===void 0?16:mv(n.type)),n):1}function oi(n,e,t,i){if(50<ea)throw ea=0,dd=null,Error(ie(185));Ia(n,t,i),(!(tt&2)||n!==Xt)&&(n===Xt&&(!(tt&2)&&(Vc|=t),Ot===4&&nr(n,$t)),Sn(n,i),t===1&&tt===0&&!(e.mode&1)&&(eo=Pt()+500,zc&&Mr()))}function Sn(n,e){var t=n.callbackNode;Xx(n,e);var i=sc(n,n===Xt?$t:0);if(i===0)t!==null&&Qp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Qp(t),e===1)n.tag===0?jM(jm.bind(null,n)):Iv(jm.bind(null,n)),HM(function(){!(tt&6)&&Mr()}),t=null;else{switch(cv(i)){case 1:t=Sf;break;case 4:t=ov;break;case 16:t=rc;break;case 536870912:t=av;break;default:t=rc}t=Dy(t,Ty.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ty(n,e){if(Gl=-1,Wl=0,tt&6)throw Error(ie(327));var t=n.callbackNode;if(Ws()&&n.callbackNode!==t)return null;var i=sc(n,n===Xt?$t:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=wc(n,i);else{e=i;var r=tt;tt|=2;var s=Cy();(Xt!==n||$t!==e)&&(Ci=null,eo=Pt()+500,Gr(n,e));do try{dS();break}catch(a){by(n,a)}while(!0);Uf(),xc.current=s,tt=r,It!==null?e=0:(Xt=null,$t=0,e=Ot)}if(e!==0){if(e===2&&(r=Oh(n),r!==0&&(i=r,e=fd(n,r))),e===1)throw t=wa,Gr(n,0),nr(n,i),Sn(n,Pt()),t;if(e===6)nr(n,i);else{if(r=n.current.alternate,!(i&30)&&!uS(r)&&(e=wc(n,i),e===2&&(s=Oh(n),s!==0&&(i=s,e=fd(n,s))),e===1))throw t=wa,Gr(n,0),nr(n,i),Sn(n,Pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Ur(n,vn,Ci);break;case 3:if(nr(n,i),(i&130023424)===i&&(e=Kf+500-Pt(),10<e)){if(sc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Yh(Ur.bind(null,n,vn,Ci),e);break}Ur(n,vn,Ci);break;case 4:if(nr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cS(i/1960))-i,10<i){n.timeoutHandle=Yh(Ur.bind(null,n,vn,Ci),i);break}Ur(n,vn,Ci);break;case 5:Ur(n,vn,Ci);break;default:throw Error(ie(329))}}}return Sn(n,Pt()),n.callbackNode===t?Ty.bind(null,n):null}function fd(n,e){var t=Qo;return n.current.memoizedState.isDehydrated&&(Gr(n,e).flags|=256),n=wc(n,e),n!==2&&(e=vn,vn=t,e!==null&&pd(e)),n}function pd(n){vn===null?vn=n:vn.push.apply(vn,n)}function uS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(n,e){for(e&=~$f,e&=~Vc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-si(e),i=1<<t;n[t]=-1,e&=~i}}function jm(n){if(tt&6)throw Error(ie(327));Ws();var e=sc(n,0);if(!(e&1))return Sn(n,Pt()),null;var t=wc(n,e);if(n.tag!==0&&t===2){var i=Oh(n);i!==0&&(e=i,t=fd(n,i))}if(t===1)throw t=wa,Gr(n,0),nr(n,e),Sn(n,Pt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ur(n,vn,Ci),Sn(n,Pt()),null}function Zf(n,e){var t=tt;tt|=1;try{return n(e)}finally{tt=t,tt===0&&(eo=Pt()+500,zc&&Mr())}}function $r(n){sr!==null&&sr.tag===0&&!(tt&6)&&Ws();var e=tt;tt|=1;var t=Hn.transition,i=dt;try{if(Hn.transition=null,dt=1,n)return n()}finally{dt=i,Hn.transition=t,tt=e,!(tt&6)&&Mr()}}function Jf(){An=ks.current,Mt(ks)}function Gr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,BM(t)),It!==null)for(t=It.return;t!==null;){var i=t;switch(Df(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&uc();break;case 3:Js(),Mt(xn),Mt(sn),Hf();break;case 5:Bf(i);break;case 4:Js();break;case 13:Mt(wt);break;case 19:Mt(wt);break;case 10:Ff(i.type._context);break;case 22:case 23:Jf()}t=t.return}if(Xt=n,It=n=pr(n.current,null),$t=An=e,Ot=0,wa=null,$f=Vc=qr=0,vn=Qo=null,Br!==null){for(e=0;e<Br.length;e++)if(t=Br[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Br=null}return n}function by(n,e){do{var t=It;try{if(Uf(),Bl.current=_c,yc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yc=!1}if(Yr=0,Wt=kt=Et=null,Zo=!1,xa=0,qf.current=null,t===null||t.return===null){Ot=1,wa=e,It=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Dm(o);if(p!==null){p.flags&=-257,Nm(p,o,a,s,e),p.mode&1&&Lm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Lm(s,c,e),Qf();break e}l=Error(ie(426))}}else if(St&&a.mode&1){var m=Dm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Nm(m,o,a,s,e),Nf(Qs(l,a));break e}}s=l=Qs(l,a),Ot!==4&&(Ot=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=cy(s,l,e);Tm(s,f);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(dr===null||!dr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=uy(s,a,e);Tm(s,M);break e}}s=s.return}while(s!==null)}Ry(t)}catch(b){e=b,It===t&&t!==null&&(It=t=t.return);continue}break}while(!0)}function Cy(){var n=xc.current;return xc.current=_c,n===null?_c:n}function Qf(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Xt===null||!(qr&268435455)&&!(Vc&268435455)||nr(Xt,$t)}function wc(n,e){var t=tt;tt|=2;var i=Cy();(Xt!==n||$t!==e)&&(Ci=null,Gr(n,e));do try{hS();break}catch(r){by(n,r)}while(!0);if(Uf(),tt=t,xc.current=i,It!==null)throw Error(ie(261));return Xt=null,$t=0,Ot}function hS(){for(;It!==null;)Ay(It)}function dS(){for(;It!==null&&!kx();)Ay(It)}function Ay(n){var e=Ly(n.alternate,n,An);n.memoizedProps=n.pendingProps,e===null?Ry(n):It=e,qf.current=null}function Ry(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=sS(t,e),t!==null){t.flags&=32767,It=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ot=6,It=null;return}}else if(t=rS(t,e,An),t!==null){It=t;return}if(e=e.sibling,e!==null){It=e;return}It=e=n}while(e!==null);Ot===0&&(Ot=5)}function Ur(n,e,t){var i=dt,r=Hn.transition;try{Hn.transition=null,dt=1,fS(n,e,t,i)}finally{Hn.transition=r,dt=i}return null}function fS(n,e,t,i){do Ws();while(sr!==null);if(tt&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Yx(n,s),n===Xt&&(It=Xt=null,$t=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||nl||(nl=!0,Dy(rc,function(){return Ws(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=dt;dt=1;var a=tt;tt|=4,qf.current=null,aS(n,t),wy(t,n),NM(jh),oc=!!Wh,jh=Wh=null,n.current=t,lS(t),zx(),tt=a,dt=o,Hn.transition=s}else n.current=t;if(nl&&(nl=!1,sr=n,Sc=r),s=n.pendingLanes,s===0&&(dr=null),Hx(t.stateNode),Sn(n,Pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Mc)throw Mc=!1,n=hd,hd=null,n;return Sc&1&&n.tag!==0&&Ws(),s=n.pendingLanes,s&1?n===dd?ea++:(ea=0,dd=n):ea=0,Mr(),null}function Ws(){if(sr!==null){var n=cv(Sc),e=Hn.transition,t=dt;try{if(Hn.transition=null,dt=16>n?16:n,sr===null)var i=!1;else{if(n=sr,sr=null,Sc=0,tt&6)throw Error(ie(331));var r=tt;for(tt|=4,ve=n.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var h=ve;switch(h.tag){case 0:case 11:case 15:Jo(8,h,s)}var u=h.child;if(u!==null)u.return=h,ve=u;else for(;ve!==null;){h=ve;var d=h.sibling,p=h.return;if(xy(h),h===c){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ve=f;break e}ve=s.return}}var v=n.current;for(ve=v;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(b){Ct(a,a.return,b)}if(a===o){ve=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ve=M;break e}ve=a.return}}if(tt=r,Mr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Nc,n)}catch{}i=!0}return i}finally{dt=t,Hn.transition=e}}return!1}function Xm(n,e,t){e=Qs(t,e),e=cy(n,e,1),n=hr(n,e,1),e=hn(),n!==null&&(Ia(n,1,e),Sn(n,e))}function Ct(n,e,t){if(n.tag===3)Xm(n,n,t);else for(;e!==null;){if(e.tag===3){Xm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){n=Qs(t,n),n=uy(e,n,1),e=hr(e,n,1),n=hn(),e!==null&&(Ia(e,1,n),Sn(e,n));break}}e=e.return}}function pS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,Xt===n&&($t&t)===t&&(Ot===4||Ot===3&&($t&130023424)===$t&&500>Pt()-Kf?Gr(n,0):$f|=t),Sn(n,e)}function Py(n,e){e===0&&(n.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var t=hn();n=zi(n,e),n!==null&&(Ia(n,e,t),Sn(n,t))}function mS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Py(n,t)}function gS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Py(n,t)}var Ly;Ly=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||xn.current)yn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return yn=!1,iS(n,e,t);yn=!!(n.flags&131072)}else yn=!1,St&&e.flags&1048576&&Uv(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vl(n,e),n=e.pendingProps;var r=$s(e,sn.current);Gs(e,t),r=Gf(null,e,i,n,r,t);var s=Wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zf(e),r.updater=Bc,e.stateNode=r,r._reactInternals=e,ed(e,i,n,t),e=id(null,e,i,!0,s,t)):(e.tag=0,St&&s&&Lf(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Vl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yS(i),n=$n(i,n),r){case 0:e=nd(null,e,i,n,t);break e;case 1:e=Fm(null,e,i,n,t);break e;case 11:e=Im(null,e,i,n,t);break e;case 14:e=Um(null,e,i,$n(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),nd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Fm(n,e,i,r,t);case 3:e:{if(py(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hv(n,e),gc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(ie(423)),e),e=km(n,e,i,t,r);break e}else if(i!==r){r=Qs(Error(ie(424)),e),e=km(n,e,i,t,r);break e}else for(Pn=ur(e.stateNode.containerInfo.firstChild),Ln=e,St=!0,Jn=null,t=Ov(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ks(),i===r){e=Oi(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return Vv(e),n===null&&Zh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Xh(i,r)?o=null:s!==null&&Xh(i,s)&&(e.flags|=32),fy(n,e),cn(n,e,o,t),e.child;case 6:return n===null&&Zh(e),null;case 13:return my(n,e,t);case 4:return Of(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Zs(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Im(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,gt(pc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!xn.current){e=Oi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Jh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Jh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,t),r=Vn(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),Um(n,e,i,r,t);case 15:return hy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Vl(n,e),e.tag=1,Mn(i)?(n=!0,hc(e)):n=!1,Gs(e,t),ly(e,i,r),ed(e,i,r,t),id(null,e,i,!0,n,t);case 19:return gy(n,e,t);case 22:return dy(n,e,t)}throw Error(ie(156,e.tag))};function Dy(n,e){return sv(n,e)}function vS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(n,e,t,i){return new vS(n,e,t,i)}function ep(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yS(n){if(typeof n=="function")return ep(n)?1:0;if(n!=null){if(n=n.$$typeof,n===_f)return 11;if(n===xf)return 14}return 2}function pr(n,e){var t=n.alternate;return t===null?(t=Bn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function jl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ep(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Cs:return Wr(t.children,r,s,e);case yf:o=8,r|=8;break;case Eh:return n=Bn(12,t,e,r|2),n.elementType=Eh,n.lanes=s,n;case Th:return n=Bn(13,t,e,r),n.elementType=Th,n.lanes=s,n;case bh:return n=Bn(19,t,e,r),n.elementType=bh,n.lanes=s,n;case Vg:return Gc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Bg:o=10;break e;case Hg:o=9;break e;case _f:o=11;break e;case xf:o=14;break e;case Ji:o=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=Bn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Wr(n,e,t,i){return n=Bn(7,n,i,e),n.lanes=t,n}function Gc(n,e,t,i){return n=Bn(22,n,i,e),n.elementType=Vg,n.lanes=t,n.stateNode={isHidden:!1},n}function Ru(n,e,t){return n=Bn(6,n,null,e),n.lanes=t,n}function Pu(n,e,t){return e=Bn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function _S(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uu(0),this.expirationTimes=uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tp(n,e,t,i,r,s,o,a,l){return n=new _S(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(s),n}function xS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ny(n){if(!n)return vr;n=n._reactInternals;e:{if(Qr(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(Mn(t))return Nv(n,t,e)}return e}function Iy(n,e,t,i,r,s,o,a,l){return n=tp(t,i,!0,n,r,s,o,a,l),n.context=Ny(null),t=n.current,i=hn(),r=fr(t),s=Di(i,r),s.callback=e??null,hr(t,s,r),n.current.lanes=r,Ia(n,r,i),Sn(n,i),n}function Wc(n,e,t,i){var r=e.current,s=hn(),o=fr(r);return t=Ny(t),e.context===null?e.context=t:e.pendingContext=t,e=Di(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=hr(r,e,o),n!==null&&(oi(n,r,o,s),Ol(n,r,o)),o}function Ec(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ym(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function np(n,e){Ym(n,e),(n=n.alternate)&&Ym(n,e)}function MS(){return null}var Uy=typeof reportError=="function"?reportError:function(n){console.error(n)};function ip(n){this._internalRoot=n}jc.prototype.render=ip.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));Wc(n,e,null,null)};jc.prototype.unmount=ip.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;$r(function(){Wc(null,n,null,null)}),e[ki]=null}};function jc(n){this._internalRoot=n}jc.prototype.unstable_scheduleHydration=function(n){if(n){var e=dv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<tr.length&&e!==0&&e<tr[t].priority;t++);tr.splice(t,0,n),t===0&&pv(n)}};function rp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function qm(){}function SS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ec(o);s.call(c)}}var o=Iy(e,i,n,0,null,!1,!1,"",qm);return n._reactRootContainer=o,n[ki]=o.current,ma(n.nodeType===8?n.parentNode:n),$r(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ec(l);a.call(c)}}var l=tp(n,0,!1,null,null,!1,!1,"",qm);return n._reactRootContainer=l,n[ki]=l.current,ma(n.nodeType===8?n.parentNode:n),$r(function(){Wc(e,l,t,i)}),l}function Yc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ec(o);a.call(l)}}Wc(e,o,n,r)}else o=SS(t,e,n,r,i);return Ec(o)}uv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Go(e.pendingLanes);t!==0&&(wf(e,t|1),Sn(e,Pt()),!(tt&6)&&(eo=Pt()+500,Mr()))}break;case 13:$r(function(){var i=zi(n,1);if(i!==null){var r=hn();oi(i,n,1,r)}}),np(n,1)}};Ef=function(n){if(n.tag===13){var e=zi(n,134217728);if(e!==null){var t=hn();oi(e,n,134217728,t)}np(n,134217728)}};hv=function(n){if(n.tag===13){var e=fr(n),t=zi(n,e);if(t!==null){var i=hn();oi(t,n,e,i)}np(n,e)}};dv=function(){return dt};fv=function(n,e){var t=dt;try{return dt=n,e()}finally{dt=t}};Fh=function(n,e,t){switch(e){case"input":if(Rh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=kc(i);if(!r)throw Error(ie(90));Wg(i),Rh(i,r)}}}break;case"textarea":Xg(n,t);break;case"select":e=t.value,e!=null&&Os(n,!!t.multiple,e,!1)}};Qg=Zf;ev=$r;var wS={usingClientEntryPoint:!1,Events:[Fa,Ls,kc,Zg,Jg,Zf]},Co={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=iv(n),n===null?null:n.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Nc=il.inject(ES),pi=il}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;Nn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(e))throw Error(ie(200));return xS(n,e,null,t)};Nn.createRoot=function(n,e){if(!rp(n))throw Error(ie(299));var t=!1,i="",r=Uy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tp(n,1,!1,null,null,t,!1,i,r),n[ki]=e.current,ma(n.nodeType===8?n.parentNode:n),new ip(e)};Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=iv(e),n=n===null?null:n.stateNode,n};Nn.flushSync=function(n){return $r(n)};Nn.hydrate=function(n,e,t){if(!Xc(e))throw Error(ie(200));return Yc(null,n,e,!0,t)};Nn.hydrateRoot=function(n,e,t){if(!rp(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Uy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Iy(e,null,n,1,t??null,r,!1,s,o),n[ki]=e.current,ma(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new jc(e)};Nn.render=function(n,e,t){if(!Xc(e))throw Error(ie(200));return Yc(null,n,e,!1,t)};Nn.unmountComponentAtNode=function(n){if(!Xc(n))throw Error(ie(40));return n._reactRootContainer?($r(function(){Yc(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1};Nn.unstable_batchedUpdates=Zf;Nn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Xc(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return Yc(n,e,t,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function Fy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fy)}catch(n){console.error(n)}}Fy(),Fg.exports=Nn;var TS=Fg.exports,$m=TS;Sh.createRoot=$m.createRoot,Sh.hydrateRoot=$m.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="169",bS=0,Km=1,CS=2,ky=1,AS=2,Ti=3,yr=0,dn=1,jt=2,Ni=0,js=1,Ea=2,Zm=3,Jm=4,RS=5,kr=100,PS=101,LS=102,DS=103,NS=104,IS=200,US=201,FS=202,kS=203,md=204,gd=205,zS=206,OS=207,BS=208,HS=209,VS=210,GS=211,WS=212,jS=213,XS=214,vd=0,yd=1,_d=2,to=3,xd=4,Md=5,Sd=6,wd=7,zy=0,YS=1,qS=2,mr=0,Oy=1,By=2,Hy=3,op=4,$S=5,Vy=6,Gy=7,Wy=300,no=301,io=302,Ed=303,Td=304,qc=306,Ta=1e3,or=1001,bd=1002,_n=1003,KS=1004,rl=1005,ei=1006,Lu=1007,Vr=1008,Bi=1009,jy=1010,Xy=1011,ba=1012,ap=1013,Kr=1014,fi=1015,Ii=1016,lp=1017,cp=1018,ro=1020,Yy=35902,qy=1021,$y=1022,ii=1023,Ky=1024,Zy=1025,Xs=1026,so=1027,up=1028,hp=1029,Jy=1030,dp=1031,fp=1033,Xl=33776,Yl=33777,ql=33778,$l=33779,Cd=35840,Ad=35841,Rd=35842,Pd=35843,Ld=36196,Dd=37492,Nd=37496,Id=37808,Ud=37809,Fd=37810,kd=37811,zd=37812,Od=37813,Bd=37814,Hd=37815,Vd=37816,Gd=37817,Wd=37818,jd=37819,Xd=37820,Yd=37821,Kl=36492,qd=36494,$d=36495,Qy=36283,Kd=36284,Zd=36285,Jd=36286,ZS=3200,JS=3201,e_=0,QS=1,ir="",un="srgb",Sr="srgb-linear",pp="display-p3",$c="display-p3-linear",Tc="linear",mt="srgb",bc="rec709",Cc="p3",rs=7680,Qm=519,ew=512,tw=513,nw=514,t_=515,iw=516,rw=517,sw=518,ow=519,Qd=35044,aw=35048,e0="300 es",Li=2e3,Ac=2001;class mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let t0=1234567;const ta=Math.PI/180,Ca=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function mp(n,e){return(n%e+e)%e}function lw(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function cw(n,e,t){return n!==e?(t-n)/(e-n):0}function na(n,e,t){return(1-t)*n+t*e}function uw(n,e,t,i){return na(n,e,1-Math.exp(-t*i))}function hw(n,e=1){return e-Math.abs(mp(n,e*2)-e)}function dw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mw(n,e){return n+Math.random()*(e-n)}function gw(n){return n*(.5-Math.random())}function vw(n){n!==void 0&&(t0=n);let e=t0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yw(n){return n*ta}function _w(n){return n*Ca}function xw(n){return(n&n-1)===0&&n!==0}function Mw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ww(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const le={DEG2RAD:ta,RAD2DEG:Ca,generateUUID:Ui,clamp:zt,euclideanModulo:mp,mapLinear:lw,inverseLerp:cw,lerp:na,damp:uw,pingpong:hw,smoothstep:dw,smootherstep:fw,randInt:pw,randFloat:mw,randFloatSpread:gw,seededRandom:vw,degToRad:yw,radToDeg:_w,isPowerOfTwo:xw,ceilPowerOfTwo:Mw,floorPowerOfTwo:Sw,setQuaternionFromProperEuler:ww,normalize:ut,denormalize:ti};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],f=r[6],v=r[1],_=r[4],M=r[7],b=r[2],E=r[5],C=r[8];return s[0]=o*y+a*v+l*b,s[3]=o*m+a*_+l*E,s[6]=o*f+a*M+l*C,s[1]=c*y+h*v+u*b,s[4]=c*m+h*_+u*E,s[7]=c*f+h*M+u*C,s[2]=d*y+p*v+g*b,s[5]=d*m+p*_+g*E,s[8]=d*f+p*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(r*c-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Du.makeScale(e,t)),this}rotate(e){return this.premultiply(Du.makeRotation(-e)),this}translate(e,t){return this.premultiply(Du.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Du=new Ve;function n_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ew(){const n=Aa("canvas");return n.style.display="block",n}const n0={};function Zl(n){n in n0||(n0[n]=!0,console.warn(n))}function Tw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function bw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const i0=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),r0=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ao={[Sr]:{transfer:Tc,primaries:bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[un]:{transfer:mt,primaries:bc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[$c]:{transfer:Tc,primaries:Cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(r0),fromReference:n=>n.applyMatrix3(i0)},[pp]:{transfer:mt,primaries:Cc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(r0),fromReference:n=>n.applyMatrix3(i0).convertLinearToSRGB()}},Aw=new Set([Sr,$c]),ot={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Aw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ao[e].toReference,r=Ao[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ao[n].primaries},getTransfer:function(n){return n===ir?Tc:Ao[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ao[e].luminanceCoefficients)}};function Ys(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class Rw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=Aa("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ys(t[i]/255)*255):t[i]=Ys(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pw=0;class i_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Iu(r[o].image)):s.push(Iu(r[o]))}else s=Iu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Iu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lw=0;class Kt extends mo{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=or,r=or,s=ei,o=Vr,a=ii,l=Bi,c=Kt.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Ui(),this.name="",this.source=new i_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Wy;Kt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(p+1)/2,b=(f+1)/2,E=(h+d)/4,C=(u+y)/4,R=(g+m)/4;return _>M&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dw extends mo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new i_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Dw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class r_ extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nw extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*y,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const b=Math.sqrt(_),E=Math.atan2(b,f*v);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const M=a*v;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+y*M,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new T,s0=new xt;class es{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ol.subVectors(this.max,Ro),os.subVectors(e.a,Ro),as.subVectors(e.b,Ro),ls.subVectors(e.c,Ro),Wi.subVectors(as,os),ji.subVectors(ls,as),Er.subVectors(os,ls);let t=[0,-Wi.z,Wi.y,0,-ji.z,ji.y,0,-Er.z,Er.y,Wi.z,0,-Wi.x,ji.z,0,-ji.x,Er.z,0,-Er.x,-Wi.y,Wi.x,0,-ji.y,ji.x,0,-Er.y,Er.x,0];return!Fu(t,os,as,ls,ol)||(t=[1,0,0,0,1,0,0,0,1],!Fu(t,os,as,ls,ol))?!1:(al.crossVectors(Wi,ji),t=[al.x,al.y,al.z],Fu(t,os,as,ls,ol))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new T,new T,new T,new T,new T,new T,new T,new T],Xn=new T,sl=new es,os=new T,as=new T,ls=new T,Wi=new T,ji=new T,Er=new T,Ro=new T,ol=new T,al=new T,Tr=new T;function Fu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Tr.fromArray(n,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=t.dot(Tr),h=i.dot(Tr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Iw=new es,Po=new T,ku=new T;class go{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Iw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(ku)),this.expandByPoint(Po.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new T,zu=new T,ll=new T,Xi=new T,Ou=new T,cl=new T,Bu=new T;class gp{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zu.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(zu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ll),a=Xi.dot(this.direction),l=-Xi.dot(ll),c=Xi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zu).addScaledVector(ll,d),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,s){Ou.subVectors(t,e),cl.subVectors(i,e),Bu.crossVectors(Ou,cl);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);const l=a*this.direction.dot(cl.crossVectors(Xi,cl));if(l<0)return null;const c=a*this.direction.dot(Ou.cross(Xi));if(c<0||l+c>o)return null;const h=-a*Xi.dot(Bu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,s,o,a,l,c,h,u,d,p,g,y,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,d,p,g,y,m)}set(e,t,i,r,s,o,a,l,c,h,u,d,p,g,y,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,y=c*u;t[0]=d-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-y*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uw,e,Fw)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Yi.crossVectors(i,bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Yi.crossVectors(i,bn)),Yi.normalize(),ul.crossVectors(bn,Yi),r[0]=Yi.x,r[4]=ul.x,r[8]=bn.x,r[1]=Yi.y,r[5]=ul.y,r[9]=bn.y,r[2]=Yi.z,r[6]=ul.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],f=i[14],v=i[3],_=i[7],M=i[11],b=i[15],E=r[0],C=r[4],R=r[8],U=r[12],x=r[1],S=r[5],k=r[9],B=r[13],O=r[2],X=r[6],H=r[10],K=r[14],D=r[3],$=r[7],Z=r[11],re=r[15];return s[0]=o*E+a*x+l*O+c*D,s[4]=o*C+a*S+l*X+c*$,s[8]=o*R+a*k+l*H+c*Z,s[12]=o*U+a*B+l*K+c*re,s[1]=h*E+u*x+d*O+p*D,s[5]=h*C+u*S+d*X+p*$,s[9]=h*R+u*k+d*H+p*Z,s[13]=h*U+u*B+d*K+p*re,s[2]=g*E+y*x+m*O+f*D,s[6]=g*C+y*S+m*X+f*$,s[10]=g*R+y*k+m*H+f*Z,s[14]=g*U+y*B+m*K+f*re,s[3]=v*E+_*x+M*O+b*D,s[7]=v*C+_*S+M*X+b*$,s[11]=v*R+_*k+M*H+b*Z,s[15]=v*U+_*B+M*K+b*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*l*u-r*c*u-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+f*(-r*a*h-t*l*u+t*a*d+r*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],v=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,b=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,E=t*v+i*_+r*M+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(y*d*s-u*m*s-y*r*p+i*m*p+u*r*f-i*d*f)*C,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*C,e[3]=(u*l*s-a*d*s-u*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=_*C,e[5]=(h*m*s-g*d*s+g*r*p-t*m*p-h*r*f+t*d*f)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*C,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*p+t*l*p)*C,e[8]=M*C,e[9]=(g*u*s-h*y*s-g*i*p+t*y*p+h*i*f-t*u*f)*C,e[10]=(o*y*s-g*a*s+g*i*c-t*y*c-o*i*f+t*a*f)*C,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*p-t*a*p)*C,e[12]=b*C,e[13]=(h*y*r-g*u*r+g*i*d-t*y*d-h*i*m+t*u*m)*C,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*C,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,y=o*h,m=o*u,f=a*u,v=l*c,_=l*h,M=l*u,b=i.x,E=i.y,C=i.z;return r[0]=(1-(y+f))*b,r[1]=(p+M)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(d+f))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(g+_)*C,r[9]=(m-v)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,h=1/o,u=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Li){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===Li)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ac)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Li){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(o-s),d=(t+e)*c,p=(i+r)*h;let g,y;if(a===Li)g=(o+s)*u,y=-2*u;else if(a===Ac)g=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cs=new T,Yn=new rt,Uw=new T(0,0,0),Fw=new T(1,1,1),Yi=new T,ul=new T,bn=new T,o0=new rt,a0=new xt;class Rt{constructor(e=0,t=0,i=0,r=Rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rt.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kw=0;const l0=new T,us=new xt,Si=new rt,hl=new T,Lo=new T,zw=new T,Ow=new xt,c0=new T(1,0,0),u0=new T(0,1,0),h0=new T(0,0,1),d0={type:"added"},Bw={type:"removed"},hs={type:"childadded",child:null},Hu={type:"childremoved",child:null};class Bt extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new T,t=new Rt,i=new xt,r=new T(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ve}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(u0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,t){return l0.copy(e).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(u0,e)}translateZ(e){return this.translateOnAxis(h0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hl.copy(e):hl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Lo,hl,this.up):Si.lookAt(hl,Lo,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Si),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d0),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bw),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d0),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,zw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Ow,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new T(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new T,wi=new T,Vu=new T,Ei=new T,ds=new T,fs=new T,f0=new T,Gu=new T,Wu=new T,ju=new T,Xu=new ht,Yu=new ht,qu=new ht;class On{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qn.subVectors(e,t),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qn.subVectors(r,t),wi.subVectors(i,t),Vu.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(wi),l=qn.dot(Vu),c=wi.dot(wi),h=wi.dot(Vu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Xu.setScalar(0),Yu.setScalar(0),qu.setScalar(0),Xu.fromBufferAttribute(e,t),Yu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Xu,s.x),o.addScaledVector(Yu,s.y),o.addScaledVector(qu,s.z),o}static isFrontFacing(e,t,i,r){return qn.subVectors(i,t),wi.subVectors(e,t),qn.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,i),fs.subVectors(s,i),Gu.subVectors(e,i);const l=ds.dot(Gu),c=fs.dot(Gu);if(l<=0&&c<=0)return t.copy(i);Wu.subVectors(e,r);const h=ds.dot(Wu),u=fs.dot(Wu);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ds,o);ju.subVectors(e,s);const p=ds.dot(ju),g=fs.dot(ju);if(g>=0&&p<=g)return t.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return f0.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(f0,a);const f=1/(m+y+d);return o=y*f,a=d*f,t.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},dl={h:0,s:0,l:0};function $u(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=mp(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$u(o,s,e+1/3),this.g=$u(o,s,e),this.b=$u(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Nu(e.r),this.g=Nu(e.g),this.b=Nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return ot.fromWorkingColorSpace(tn.copy(this),e),Math.round(zt(tn.r*255,0,255))*65536+Math.round(zt(tn.g*255,0,255))*256+Math.round(zt(tn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=un){ot.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,r=tn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(dl);const i=na(qi.h,dl.h,t),r=na(qi.s,dl.s,t),s=na(qi.l,dl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Re;Re.NAMES=s_;let Hw=0;class ts extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hw++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=js,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vo extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=zy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new T,fl=new ae;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class o_ extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class a_ extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ze extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vw=0;const Fn=new rt,Ku=new Bt,ps=new T,Cn=new es,Do=new es,Gt=new T;class Lt extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n_(e)?a_:o_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Cn.min,Do.min),Cn.expandByPoint(Gt),Gt.addVectors(Cn.max,Do.max),Cn.expandByPoint(Gt)):(Cn.expandByPoint(Do.min),Cn.expandByPoint(Do.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Gt.add(ps)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new T,l[R]=new T;const c=new T,h=new T,u=new T,d=new ae,p=new ae,g=new ae,y=new T,m=new T;function f(R,U,x){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,U),u.fromBufferAttribute(i,x),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,U),g.fromBufferAttribute(s,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(S),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),a[R].add(y),a[U].add(y),a[x].add(y),l[R].add(m),l[U].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,U=v.length;R<U;++R){const x=v[R],S=x.start,k=x.count;for(let B=S,O=S+k;B<O;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new T,M=new T,b=new T,E=new T;function C(R){b.fromBufferAttribute(r,R),E.copy(b);const U=a[R];_.copy(U),_.sub(b.multiplyScalar(b.dot(U))).normalize(),M.crossVectors(E,U);const S=M.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,S)}for(let R=0,U=v.length;R<U;++R){const x=v[R],S=x.start,k=x.count;for(let B=S,O=S+k;B<O;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new T,s=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const p0=new rt,br=new gp,pl=new go,m0=new T,ml=new T,gl=new T,vl=new T,Zu=new T,yl=new T,g0=new T,_l=new T;class Ee extends Bt{constructor(e=new Lt,t=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Zu.fromBufferAttribute(u,e),o?yl.addScaledVector(Zu,h):yl.addScaledVector(Zu.sub(t),h))}t.add(yl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(pl.containsPoint(br.origin)===!1&&(br.intersectSphere(pl,m0)===null||br.origin.distanceToSquared(m0)>(e.far-e.near)**2))&&(p0.copy(s).invert(),br.copy(e.ray).applyMatrix4(p0),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,b=_;M<b;M+=3){const E=a.getX(M),C=a.getX(M+1),R=a.getX(M+2);r=xl(this,f,e,i,c,h,u,E,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=xl(this,o,e,i,c,h,u,v,_,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,b=_;M<b;M+=3){const E=M,C=M+1,R=M+2;r=xl(this,f,e,i,c,h,u,E,C,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){const v=m,_=m+1,M=m+2;r=xl(this,o,e,i,c,h,u,v,_,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Gw(n,e,t,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yr,a),l===null)return null;_l.copy(a),_l.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_l);return c<t.near||c>t.far?null:{distance:c,point:_l.clone(),object:n}}function xl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ml),n.getVertexPosition(l,gl),n.getVertexPosition(c,vl);const h=Gw(n,e,t,i,ml,gl,vl,g0);if(h){const u=new T;On.getBarycoord(g0,ml,gl,vl,u),r&&(h.uv=On.getInterpolatedAttribute(r,a,l,c,u,new ae)),s&&(h.uv1=On.getInterpolatedAttribute(s,a,l,c,u,new ae)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new T,materialIndex:0};On.getNormal(ml,gl,vl,d.normal),h.face=d,h.barycoord=u}return h}class vi extends Lt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function g(y,m,f,v,_,M,b,E,C,R,U){const x=M/C,S=b/R,k=M/2,B=b/2,O=E/2,X=C+1,H=R+1;let K=0,D=0;const $=new T;for(let Z=0;Z<H;Z++){const re=Z*S-B;for(let Ae=0;Ae<X;Ae++){const Ge=Ae*x-k;$[y]=Ge*v,$[m]=re*_,$[f]=O,c.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[f]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(Ae/C),u.push(1-Z/R),K+=1}}for(let Z=0;Z<R;Z++)for(let re=0;re<C;re++){const Ae=d+re+X*Z,Ge=d+re+X*(Z+1),q=d+(re+1)+X*(Z+1),te=d+(re+1)+X*Z;l.push(Ae,Ge,te),l.push(Ge,q,te),D+=6}a.addGroup(p,D,U),p+=D,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=oo(n[t]);for(const r in i)e[r]=i[r]}return e}function Ww(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function l_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Ra={clone:oo,merge:ln};var jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jw,this.fragmentShader=Xw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=Ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class c_ extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new T,v0=new ae,y0=new ae;class Rn extends c_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,v0,y0),t.subVectors(y0,v0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class Yw extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(ms,gs,e,t);r.layers=this.layers,this.add(r);const s=new Rn(ms,gs,e,t);s.layers=this.layers,this.add(s);const o=new Rn(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new Rn(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new Rn(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new Rn(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class u_ extends Kt{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:no,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qw extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new u_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ni});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===Vr&&(t.minFilter=ei),new Yw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ju=new T,$w=new T,Kw=new Ve;class er{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ju.subVectors(i,t).cross($w.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kw.getNormalMatrix(e),r=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new go,Ml=new T;class yp{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-f).normalize(),i[1].setComponents(l+s,d+c,m+p,M+f).normalize(),i[2].setComponents(l+o,d+h,m+g,M+v).normalize(),i[3].setComponents(l-o,d-h,m-g,M-v).normalize(),i[4].setComponents(l-a,d-u,m-y,M-_).normalize(),t===Li)i[5].setComponents(l+a,d+u,m+y,M+_).normalize();else if(t===Ac)i[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zw(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const y=u[p];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ni extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){const v=f*d-o;for(let _=0;_<c;_++){const M=_*u-s;g.push(M,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const _=v+c*f,M=v+c*(f+1),b=v+1+c*(f+1),E=v+1+c*f;p.push(_,M,E),p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qw=`#ifdef USE_ALPHAHASH
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
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
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
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h1=`#ifdef USE_IRIDESCENCE
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
#endif`,d1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,M1=`#define PI 3.141592653589793
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
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w1=`vec3 transformedNormal = objectNormal;
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
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`
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
}`,P1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O1=`#ifdef USE_GRADIENTMAP
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
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
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
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,j1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$1=`PhysicalMaterial material;
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
#endif`,K1=`struct PhysicalMaterial {
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
}`,Z1=`
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
#endif`,J1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FE=`float getShadowMask() {
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
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
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
}`,rT=`#if DEPTH_PACKING == 3200
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
}`,sT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
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
}`,uT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,dT=`uniform vec3 diffuse;
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
}`,fT=`#define LAMBERT
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define MATCAP
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
}`,gT=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,_T=`#define PHONG
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
}`,xT=`#define PHONG
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
}`,MT=`#define STANDARD
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
}`,ST=`#define STANDARD
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
}`,wT=`#define TOON
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
}`,ET=`#define TOON
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
}`,TT=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,AT=`uniform vec3 color;
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
}`,RT=`uniform float rotation;
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
}`,PT=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Jw,alphahash_pars_fragment:Qw,alphamap_fragment:e1,alphamap_pars_fragment:t1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:r1,aomap_pars_fragment:s1,batching_pars_vertex:o1,batching_vertex:a1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:h1,bumpmap_pars_fragment:d1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:v1,color_pars_fragment:y1,color_pars_vertex:_1,color_vertex:x1,common:M1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:w1,displacementmap_pars_vertex:E1,displacementmap_vertex:T1,emissivemap_fragment:b1,emissivemap_pars_fragment:C1,colorspace_fragment:A1,colorspace_pars_fragment:R1,envmap_fragment:P1,envmap_common_pars_fragment:L1,envmap_pars_fragment:D1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:W1,envmap_vertex:I1,fog_vertex:U1,fog_pars_vertex:F1,fog_fragment:k1,fog_pars_fragment:z1,gradientmap_pars_fragment:O1,lightmap_pars_fragment:B1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:V1,lights_pars_begin:G1,lights_toon_fragment:j1,lights_toon_pars_fragment:X1,lights_phong_fragment:Y1,lights_phong_pars_fragment:q1,lights_physical_fragment:$1,lights_physical_pars_fragment:K1,lights_fragment_begin:Z1,lights_fragment_maps:J1,lights_fragment_end:Q1,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:oE,map_particle_pars_fragment:aE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:hE,morphnormal_vertex:dE,morphtarget_pars_vertex:fE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:vE,normal_pars_vertex:yE,normal_vertex:_E,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:EE,opaque_fragment:TE,packing:bE,premultiplied_alpha_fragment:CE,project_vertex:AE,dithering_fragment:RE,dithering_pars_fragment:PE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:IE,shadowmap_vertex:UE,shadowmask_pars_fragment:FE,skinbase_vertex:kE,skinning_pars_vertex:zE,skinning_vertex:OE,skinnormal_vertex:BE,specularmap_fragment:HE,specularmap_pars_fragment:VE,tonemapping_fragment:GE,tonemapping_pars_fragment:WE,transmission_fragment:jE,transmission_pars_fragment:XE,uv_pars_fragment:YE,uv_pars_vertex:qE,uv_vertex:$E,worldpos_vertex:KE,background_vert:ZE,background_frag:JE,backgroundCube_vert:QE,backgroundCube_frag:eT,cube_vert:tT,cube_frag:nT,depth_vert:iT,depth_frag:rT,distanceRGBA_vert:sT,distanceRGBA_frag:oT,equirect_vert:aT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:hT,meshbasic_frag:dT,meshlambert_vert:fT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:vT,meshnormal_frag:yT,meshphong_vert:_T,meshphong_frag:xT,meshphysical_vert:MT,meshphysical_frag:ST,meshtoon_vert:wT,meshtoon_frag:ET,points_vert:TT,points_frag:bT,shadow_vert:CT,shadow_frag:AT,sprite_vert:RT,sprite_frag:PT},ue={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},hi={basic:{uniforms:ln([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:ln([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:ln([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:ln([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:ln([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:ln([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:ln([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:ln([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:ln([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:ln([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:ln([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:ln([ue.common,ue.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:ln([ue.lights,ue.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Sl={r:0,b:0,g:0},Ar=new Rt,LT=new rt;function DT(n,e,t,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function y(v){let _=!1;const M=g(v);M===null?f(a,l):M&&M.isColor&&(f(M,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===qc)?(h===void 0&&(h=new Ee(new vi(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:oo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ar.copy(_.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(LT.makeRotationFromEuler(Ar)),h.material.toneMapped=ot.getTransfer(M.colorSpace)!==mt,(u!==M||d!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ee(new ni(2,2),new Ut({name:"BackgroundMaterial",uniforms:oo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,_){v.getRGB(Sl,l_(n)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:y,addToRenderList:m}}function NT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,S,k,B,O){let X=!1;const H=u(B,k,S);s!==H&&(s=H,c(s.object)),X=p(x,B,k,O),X&&g(x,B,k,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,S,k,B),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,S,k){const B=k.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let X=O[S.id];X===void 0&&(X={},O[S.id]=X);let H=X[B];return H===void 0&&(H=d(l()),X[B]=H),H}function d(x){const S=[],k=[],B=[];for(let O=0;O<t;O++)S[O]=0,k[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:k,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,S,k,B){const O=s.attributes,X=S.attributes;let H=0;const K=k.getAttributes();for(const D in K)if(K[D].location>=0){const Z=O[D];let re=X[D];if(re===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(x,S,k,B){const O={},X=S.attributes;let H=0;const K=k.getAttributes();for(const D in K)if(K[D].location>=0){let Z=X[D];Z===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),O[D]=re,H++}s.attributes=O,s.attributesNum=H,s.index=B}function y(){const x=s.newAttributes;for(let S=0,k=x.length;S<k;S++)x[S]=0}function m(x){f(x,0)}function f(x,S){const k=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;k[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),O[x]!==S&&(n.vertexAttribDivisor(x,S),O[x]=S)}function v(){const x=s.newAttributes,S=s.enabledAttributes;for(let k=0,B=S.length;k<B;k++)S[k]!==x[k]&&(n.disableVertexAttribArray(k),S[k]=0)}function _(x,S,k,B,O,X,H){H===!0?n.vertexAttribIPointer(x,S,k,O,X):n.vertexAttribPointer(x,S,k,B,O,X)}function M(x,S,k,B){y();const O=B.attributes,X=k.getAttributes(),H=S.defaultAttributeValues;for(const K in X){const D=X[K];if(D.location>=0){let $=O[K];if($===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&($=x.instanceColor)),$!==void 0){const Z=$.normalized,re=$.itemSize,Ae=e.get($);if(Ae===void 0)continue;const Ge=Ae.buffer,q=Ae.type,te=Ae.bytesPerElement,ce=q===n.INT||q===n.UNSIGNED_INT||$.gpuType===ap;if($.isInterleavedBufferAttribute){const de=$.data,Oe=de.stride,De=$.offset;if(de.isInstancedInterleavedBuffer){for(let Ze=0;Ze<D.locationSize;Ze++)f(D.location+Ze,de.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ze=0;Ze<D.locationSize;Ze++)m(D.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ze=0;Ze<D.locationSize;Ze++)_(D.location+Ze,re/D.locationSize,q,Z,Oe*te,(De+re/D.locationSize*Ze)*te,ce)}else{if($.isInstancedBufferAttribute){for(let de=0;de<D.locationSize;de++)f(D.location+de,$.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<D.locationSize;de++)m(D.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let de=0;de<D.locationSize;de++)_(D.location+de,re/D.locationSize,q,Z,re*te,re/D.locationSize*de*te,ce)}}else if(H!==void 0){const Z=H[K];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(D.location,Z);break;case 3:n.vertexAttrib3fv(D.location,Z);break;case 4:n.vertexAttrib4fv(D.location,Z);break;default:n.vertexAttrib1fv(D.location,Z)}}}}v()}function b(){R();for(const x in i){const S=i[x];for(const k in S){const B=S[k];for(const O in B)h(B[O].object),delete B[O];delete S[k]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const S=i[x.id];for(const k in S){const B=S[k];for(const O in B)h(B[O].object),delete B[O];delete S[k]}delete i[x.id]}function C(x){for(const S in i){const k=i[S];if(k[x.id]===void 0)continue;const B=k[x.id];for(const O in B)h(B[O].object),delete B[O];delete k[x.id]}}function R(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function IT(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)t.update(g,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ii&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fi&&!R)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:b,maxSamples:E}}function FT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new er,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||r;return r=d,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,_=v*4;let M=f.clippingState||null;l.value=M,M=h(g,d,_,p);for(let b=0;b!==_;++b)M[b]=t[b];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const f=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,M=p;_!==y;++_,M+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function kT(n){let e=new WeakMap;function t(o,a){return a===Ed?o.mapping=no:a===Td&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ed||a===Td)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qw(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _p extends c_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zs=4,_0=[.125,.215,.35,.446,.526,.582],zr=20,Qu=new _p,x0=new Re;let eh=null,th=0,nh=0,ih=!1;const Fr=(1+Math.sqrt(5))/2,vs=1/Fr,M0=[new T(-Fr,vs,0),new T(Fr,vs,0),new T(-vs,0,Fr),new T(vs,0,Fr),new T(0,Fr,-vs),new T(0,Fr,vs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class ef{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Ii,format:ii,colorSpace:Sr,depthBuffer:!1},r=S0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(s)),this._blurMaterial=OT(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Qu)}_sceneToCubeUV(e,t,i,r){const a=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(x0),h.toneMapping=mr,h.autoClear=!1;const p=new vo({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Ee(new vi,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(x0),y=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;wl(r,v*_,f>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=E0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=M0[(r-s-1)%M0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ee(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zr-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const f=[];let v=0;for(let C=0;C<zr;++C){const R=C/y,U=Math.exp(-R*R/2);f.push(U),C===0?v+=U:C<m&&(v+=2*U)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const M=this._sizeLods[r],b=3*M*(r>_-zs?r-_+zs:0),E=4*(this._cubeSize-M);wl(t,b,E,3*M,2*M),l.setRenderTarget(t),l.render(u,Qu)}}function zT(n){const e=[],t=[],i=[];let r=n;const s=n-zs+1+_0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-zs?l=_0[o-n+zs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,R=E>2?0:-1,U=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];v.set(U,y*g*E),_.set(d,m*g*E);const x=[E,E,E,E,E,E];M.set(x,f*g*E)}const b=new Lt;b.setAttribute("position",new rn(v,y)),b.setAttribute("uv",new rn(_,m)),b.setAttribute("faceIndex",new rn(M,f)),e.push(b),r>zs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function S0(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function OT(n,e,t){const i=new Float32Array(zr),r=new T(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function w0(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xp(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function E0(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xp(){return`

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
	`}function BT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ed||l===Td,h=l===no||l===io;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ef(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new ef(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function HT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function VT(n,e,t,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const y=p[g];for(let m=0,f=y.length;m<f;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,M=v.length;_<M;_+=3){const b=v[_+0],E=v[_+1],C=v[_+2];d.push(b,E,E,C,C,b)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const b=_+0,E=_+1,C=_+2;d.push(b,E,E,C,C,b)}}else return;const m=new(n_(d)?a_:o_)(d,1);m.version=y;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function GT(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v];for(let v=0;v<y.length;v++)t.update(f,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function WT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jT(n,e,t){const i=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let b=a.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*E*4*u),R=new r_(C,b,E,u);R.type=fi,R.needsUpdate=!0;const U=M*4;for(let S=0;S<u;S++){const k=f[S],B=v[S],O=_[S],X=b*E*4*S;for(let H=0;H<k.count;H++){const K=H*U;g===!0&&(r.fromBufferAttribute(k,H),C[X+K+0]=r.x,C[X+K+1]=r.y,C[X+K+2]=r.z,C[X+K+3]=0),y===!0&&(r.fromBufferAttribute(B,H),C[X+K+4]=r.x,C[X+K+5]=r.y,C[X+K+6]=r.z,C[X+K+7]=0),m===!0&&(r.fromBufferAttribute(O,H),C[X+K+8]=r.x,C[X+K+9]=r.y,C[X+K+10]=r.z,C[X+K+11]=O.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new ae(b,E)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function XT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class d_ extends Kt{constructor(e,t,i,r,s,o,a,l,c,h=Xs){if(h!==Xs&&h!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xs&&(i=Kr),i===void 0&&h===so&&(i=ro),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const f_=new Kt,T0=new d_(1,1),p_=new r_,m_=new Nw,g_=new u_,b0=[],C0=[],A0=new Float32Array(16),R0=new Float32Array(9),P0=new Float32Array(4);function yo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=b0[r];if(s===void 0&&(s=new Float32Array(r),b0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Kc(n,e){let t=C0[e];t===void 0&&(t=new Int32Array(e),C0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function $T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function KT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function ZT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;P0.set(i),n.uniformMatrix2fv(this.addr,!1,P0),Vt(t,i)}}function JT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;R0.set(i),n.uniformMatrix3fv(this.addr,!1,R0),Vt(t,i)}}function QT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;A0.set(i),n.uniformMatrix4fv(this.addr,!1,A0),Vt(t,i)}}function eb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function ib(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function rb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function lb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(T0.compareFunction=t_,s=T0):s=f_,t.setTexture2D(e||s,r)}function cb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||m_,r)}function ub(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||g_,r)}function hb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||p_,r)}function db(n){switch(n){case 5126:return YT;case 35664:return qT;case 35665:return $T;case 35666:return KT;case 35674:return ZT;case 35675:return JT;case 35676:return QT;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return hb}}function fb(n,e){n.uniform1fv(this.addr,e)}function pb(n,e){const t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function mb(n,e){const t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function gb(n,e){const t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function vb(n,e){const t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yb(n,e){const t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _b(n,e){const t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xb(n,e){n.uniform1iv(this.addr,e)}function Mb(n,e){n.uniform2iv(this.addr,e)}function Sb(n,e){n.uniform3iv(this.addr,e)}function wb(n,e){n.uniform4iv(this.addr,e)}function Eb(n,e){n.uniform1uiv(this.addr,e)}function Tb(n,e){n.uniform2uiv(this.addr,e)}function bb(n,e){n.uniform3uiv(this.addr,e)}function Cb(n,e){n.uniform4uiv(this.addr,e)}function Ab(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||f_,s[o])}function Rb(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||m_,s[o])}function Pb(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||g_,s[o])}function Lb(n,e,t){const i=this.cache,r=e.length,s=Kc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||p_,s[o])}function Db(n){switch(n){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return vb;case 35675:return yb;case 35676:return _b;case 5124:case 35670:return xb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return wb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}class Nb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=db(t.type)}}class Ib{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Db(t.type)}}class Ub{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function L0(n,e){n.seq.push(e),n.map[e.id]=e}function Fb(n,e,t){const i=n.name,r=i.length;for(rh.lastIndex=0;;){const s=rh.exec(i),o=rh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){L0(t,c===void 0?new Nb(a,n,e):new Ib(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ub(a),L0(t,u)),t=u}}}class Jl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Fb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function D0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kb=37297;let zb=0;function Ob(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Bb(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===Cc&&t===bc?i="LinearDisplayP3ToLinearSRGB":e===bc&&t===Cc&&(i="LinearSRGBToLinearDisplayP3"),n){case Sr:case $c:return[i,"LinearTransferOETF"];case un:case pp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function N0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ob(n.getShaderSource(e),o)}else return r}function Hb(n,e){const t=Bb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vb(n,e){let t;switch(e){case Oy:t="Linear";break;case By:t="Reinhard";break;case Hy:t="Cineon";break;case op:t="ACESFilmic";break;case Vy:t="AgX";break;case Gy:t="Neutral";break;case $S:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const El=new T;function Gb(){ot.getLuminanceCoefficients(El);const n=El.x.toFixed(4),e=El.y.toFixed(4),t=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function jb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jo(n){return n!==""}function I0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(n){return n.replace(Yb,$b)}const qb=new Map;function $b(n,e){let t=He[e];if(t===void 0){const i=qb.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tf(t)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(n){return n.replace(Kb,Zb)}function Zb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function k0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Jb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ky?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===AS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Qb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function e2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function t2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zy:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case qS:e="ENVMAP_BLENDING_ADD";break}return e}function n2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function i2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jb(t),c=Qb(t),h=e2(t),u=t2(t),d=n2(t),p=Wb(t),g=jb(s),y=r.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jo).join(`
`),f.length>0&&(f+=`
`)):(m=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),f=[k0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?He.tonemapping_pars_fragment:"",t.toneMapping!==mr?Vb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Hb("linearToOutputTexel",t.outputColorSpace),Gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=tf(o),o=I0(o,t),o=U0(o,t),a=tf(a),a=I0(a,t),a=U0(a,t),o=F0(o),a=F0(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===e0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===e0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=v+m+o,M=v+f+a,b=D0(r,r.VERTEX_SHADER,_),E=D0(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(S){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(b).trim(),O=r.getShaderInfoLog(E).trim();let X=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,b,E);else{const K=N0(r,b,"vertex"),D=N0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+k+`
`+K+`
`+D)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||O==="")&&(H=!1);H&&(S.diagnostics={runnable:X,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(b),r.deleteShader(E),R=new Jl(r,y),U=Xb(r,y)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let U;this.getAttributes=function(){return U===void 0&&C(this),U};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,kb)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}let r2=0;class s2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new o2(e),t.set(e,i)),i}}class o2{constructor(e){this.id=r2++,this.code=e,this.usedTimes=0}}function a2(n,e,t,i,r,s,o){const a=new vp,l=new s2,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,S,k,B,O){const X=B.fog,H=O.geometry,K=x.isMeshStandardMaterial?B.environment:null,D=(x.isMeshStandardMaterial?t:e).get(x.envMap||K),$=D&&D.mapping===qc?D.image.height:null,Z=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ae=re!==void 0?re.length:0;let Ge=0;H.morphAttributes.position!==void 0&&(Ge=1),H.morphAttributes.normal!==void 0&&(Ge=2),H.morphAttributes.color!==void 0&&(Ge=3);let q,te,ce,de;if(Z){const gn=hi[Z];q=gn.vertexShader,te=gn.fragmentShader}else q=x.vertexShader,te=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),de=l.getFragmentShaderID(x);const Oe=n.getRenderTarget(),De=O.isInstancedMesh===!0,Ze=O.isBatchedMesh===!0,ft=!!x.map,Je=!!x.matcap,N=!!D,wn=!!x.aoMap,Xe=!!x.lightMap,nt=!!x.bumpMap,Ie=!!x.normalMap,vt=!!x.displacementMap,ke=!!x.emissiveMap,P=!!x.metalnessMap,w=!!x.roughnessMap,V=x.anisotropy>0,Q=x.clearcoat>0,ne=x.dispersion>0,J=x.iridescence>0,Te=x.sheen>0,he=x.transmission>0,ye=V&&!!x.anisotropyMap,it=Q&&!!x.clearcoatMap,se=Q&&!!x.clearcoatNormalMap,_e=Q&&!!x.clearcoatRoughnessMap,Ue=J&&!!x.iridescenceMap,Fe=J&&!!x.iridescenceThicknessMap,xe=Te&&!!x.sheenColorMap,Ye=Te&&!!x.sheenRoughnessMap,Be=!!x.specularMap,pt=!!x.specularColorMap,I=!!x.specularIntensityMap,me=he&&!!x.transmissionMap,Y=he&&!!x.thicknessMap,ee=!!x.gradientMap,fe=!!x.alphaMap,ge=x.alphaTest>0,Qe=!!x.alphaHash,Dt=!!x.extensions;let mn=mr;x.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(mn=n.toneMapping);const st={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:te,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Sr,alphaToCoverage:!!x.alphaToCoverage,map:ft,matcap:Je,envMap:N,envMapMode:N&&D.mapping,envMapCubeUVHeight:$,aoMap:wn,lightMap:Xe,bumpMap:nt,normalMap:Ie,displacementMap:p&&vt,emissiveMap:ke,normalMapObjectSpace:Ie&&x.normalMapType===QS,normalMapTangentSpace:Ie&&x.normalMapType===e_,metalnessMap:P,roughnessMap:w,anisotropy:V,anisotropyMap:ye,clearcoat:Q,clearcoatMap:it,clearcoatNormalMap:se,clearcoatRoughnessMap:_e,dispersion:ne,iridescence:J,iridescenceMap:Ue,iridescenceThicknessMap:Fe,sheen:Te,sheenColorMap:xe,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:pt,specularIntensityMap:I,transmission:he,transmissionMap:me,thicknessMap:Y,gradientMap:ee,opaque:x.transparent===!1&&x.blending===js&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:ge,alphaHash:Qe,combine:x.combine,mapUv:ft&&m(x.map.channel),aoMapUv:wn&&m(x.aoMap.channel),lightMapUv:Xe&&m(x.lightMap.channel),bumpMapUv:nt&&m(x.bumpMap.channel),normalMapUv:Ie&&m(x.normalMap.channel),displacementMapUv:vt&&m(x.displacementMap.channel),emissiveMapUv:ke&&m(x.emissiveMap.channel),metalnessMapUv:P&&m(x.metalnessMap.channel),roughnessMapUv:w&&m(x.roughnessMap.channel),anisotropyMapUv:ye&&m(x.anisotropyMap.channel),clearcoatMapUv:it&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(x.sheenRoughnessMap.channel),specularMapUv:Be&&m(x.specularMap.channel),specularColorMapUv:pt&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:me&&m(x.transmissionMap.channel),thicknessMapUv:Y&&m(x.thicknessMap.channel),alphaMapUv:fe&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ie||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(ft||fe),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:mn,decodeVideoTexture:ft&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jt,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Dt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&x.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function v(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)S.push(k),S.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(_(S,x),M(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const S=y[x.type];let k;if(S){const B=hi[S];k=Ra.clone(B.uniforms)}else k=x.uniforms;return k}function E(x,S){let k;for(let B=0,O=h.length;B<O;B++){const X=h[B];if(X.cacheKey===S){k=X,++k.usedTimes;break}}return k===void 0&&(k=new i2(n,S,x,s),h.push(k)),k}function C(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function R(x){l.remove(x)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:v,getUniforms:b,acquireProgram:E,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:U}}function l2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function c2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function O0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,p,g,y,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function a(u,d,p,g,y,m){const f=o(u,d,p,g,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,g,y,m){const f=o(u,d,p,g,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||c2),i.length>1&&i.sort(d||z0),r.length>1&&r.sort(d||z0)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function u2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new O0,n.set(i,[o])):r>=s.length?(o=new O0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function h2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Re};break;case"SpotLight":t={position:new T,direction:new T,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function d2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let f2=0;function p2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function m2(n){const e=new h2,t=d2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);const r=new T,s=new rt,o=new rt;function a(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,v=0,_=0,M=0,b=0,E=0,C=0;c.sort(p2);for(let U=0,x=c.length;U<x;U++){const S=c[U],k=S.color,B=S.intensity,O=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(S.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(S.sh.coefficients[H],B);C++}else if(S.isDirectionalLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const K=S.shadow,D=t.get(S);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=S.shadow.matrix,v++}i.directional[p]=H,p++}else if(S.isSpotLight){const H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(k).multiplyScalar(B),H.distance=O,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,i.spot[y]=H;const K=S.shadow;if(S.map&&(i.spotLightMap[b]=S.map,b++,K.updateMatrices(S),S.castShadow&&E++),i.spotLightMatrix[y]=K.matrix,S.castShadow){const D=t.get(S);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=X,M++}y++}else if(S.isRectAreaLight){const H=e.get(S);H.color.copy(k).multiplyScalar(B),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=H,m++}else if(S.isPointLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const K=S.shadow,D=t.get(S);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=H,g++}else if(S.isHemisphereLight){const H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(B),H.groundColor.copy(S.groundColor).multiplyScalar(B),i.hemi[f]=H,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==b||R.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=b,R.numLightProbes=C,i.version=f2++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function B0(n){const e=new m2(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function g2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new B0(n),e.set(r,[a])):s>=o.length?(a=new B0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class v2 extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y2 extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x2=`uniform sampler2D shadow_pass;
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
}`;function M2(n,e,t){let i=new yp;const r=new ae,s=new ae,o=new ht,a=new v2({depthPacking:JS}),l=new y2,c={},h=t.maxTextureSize,u={[yr]:dn,[dn]:yr,[jt]:jt},d=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:_2,fragmentShader:x2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ky;let f=this.type;this.render=function(E,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const U=n.getRenderTarget(),x=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ni),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=f!==Ti&&this.type===Ti,O=f===Ti&&this.type!==Ti;for(let X=0,H=E.length;X<H;X++){const K=E[X],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const $=D.getFrameExtents();if(r.multiply($),s.copy(D.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,D.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,D.mapSize.y=s.y)),D.map===null||B===!0||O===!0){const re=this.type!==Ti?{minFilter:_n,magFilter:_n}:{};D.map!==null&&D.map.dispose(),D.map=new ai(r.x,r.y,re),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const Z=D.getViewportCount();for(let re=0;re<Z;re++){const Ae=D.getViewport(re);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),k.viewport(o),D.updateMatrices(K,re),i=D.getFrustum(),M(C,R,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===Ti&&v(D,R),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(U,x,S)};function v(E,C){const R=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ai(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,R,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,R,p,y,null)}function _(E,C,R,U){let x=null;const S=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)x=S;else if(x=R.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=x.uuid,B=C.uuid;let O=c[k];O===void 0&&(O={},c[k]=O);let X=O[B];X===void 0&&(X=x.clone(),O[B]=X,C.addEventListener("dispose",b)),x=X}if(x.visible=C.visible,x.wireframe=C.wireframe,U===Ti?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=n.properties.get(x);k.light=R}return x}function M(E,C,R,U,x){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Ti)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const B=e.update(E),O=E.material;if(Array.isArray(O)){const X=B.groups;for(let H=0,K=X.length;H<K;H++){const D=X[H],$=O[D.materialIndex];if($&&$.visible){const Z=_(E,$,U,x);E.onBeforeShadow(n,E,C,R,B,Z,D),n.renderBufferDirect(R,null,B,Z,E,D),E.onAfterShadow(n,E,C,R,B,Z,D)}}}else if(O.visible){const X=_(E,O,U,x);E.onBeforeShadow(n,E,C,R,B,X,null),n.renderBufferDirect(R,null,B,X,E,null),E.onAfterShadow(n,E,C,R,B,X,null)}}const k=E.children;for(let B=0,O=k.length;B<O;B++)M(k[B],C,R,U,x)}function b(E){E.target.removeEventListener("dispose",b);for(const R in c){const U=c[R],x=E.target.uuid;x in U&&(U[x].dispose(),delete U[x])}}}const S2={[vd]:yd,[_d]:Sd,[xd]:wd,[to]:Md,[yd]:vd,[Sd]:_d,[wd]:xd,[Md]:to};function w2(n){function e(){let I=!1;const me=new ht;let Y=null;const ee=new ht(0,0,0,0);return{setMask:function(fe){Y!==fe&&!I&&(n.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ge,Qe,Dt,mn){mn===!0&&(fe*=Dt,ge*=Dt,Qe*=Dt),me.set(fe,ge,Qe,Dt),ee.equals(me)===!1&&(n.clearColor(fe,ge,Qe,Dt),ee.copy(me))},reset:function(){I=!1,Y=null,ee.set(-1,0,0,0)}}}function t(){let I=!1,me=!1,Y=null,ee=null,fe=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?ce(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!I&&(n.depthMask(ge),Y=ge)},setFunc:function(ge){if(me&&(ge=S2[ge]),ee!==ge){switch(ge){case vd:n.depthFunc(n.NEVER);break;case yd:n.depthFunc(n.ALWAYS);break;case _d:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case xd:n.depthFunc(n.EQUAL);break;case Md:n.depthFunc(n.GEQUAL);break;case Sd:n.depthFunc(n.GREATER);break;case wd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ge}},setLocked:function(ge){I=ge},setClear:function(ge){fe!==ge&&(n.clearDepth(ge),fe=ge)},reset:function(){I=!1,Y=null,ee=null,fe=null}}}function i(){let I=!1,me=null,Y=null,ee=null,fe=null,ge=null,Qe=null,Dt=null,mn=null;return{setTest:function(st){I||(st?ce(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(st){me!==st&&!I&&(n.stencilMask(st),me=st)},setFunc:function(st,gn,_i){(Y!==st||ee!==gn||fe!==_i)&&(n.stencilFunc(st,gn,_i),Y=st,ee=gn,fe=_i)},setOp:function(st,gn,_i){(ge!==st||Qe!==gn||Dt!==_i)&&(n.stencilOp(st,gn,_i),ge=st,Qe=gn,Dt=_i)},setLocked:function(st){I=st},setClear:function(st){mn!==st&&(n.clearStencil(st),mn=st)},reset:function(){I=!1,me=null,Y=null,ee=null,fe=null,ge=null,Qe=null,Dt=null,mn=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,y=null,m=null,f=null,v=null,_=null,M=null,b=null,E=new Re(0,0,0),C=0,R=!1,U=null,x=null,S=null,k=null,B=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=H>=2);let D=null,$={};const Z=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Ae=new ht().fromArray(Z),Ge=new ht().fromArray(re);function q(I,me,Y,ee){const fe=new Uint8Array(4),ge=n.createTexture();n.bindTexture(I,ge),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<Y;Qe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(me+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ge}const te={};te[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),s.setFunc(to),Xe(!1),nt(Km),ce(n.CULL_FACE),N(Ni);function ce(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function de(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Oe(I,me){return h[I]!==me?(n.bindFramebuffer(I,me),h[I]=me,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=me),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=me),!0):!1}function De(I,me){let Y=d,ee=!1;if(I){Y=u.get(me),Y===void 0&&(Y=[],u.set(me,Y));const fe=I.textures;if(Y.length!==fe.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Qe=fe.length;ge<Qe;ge++)Y[ge]=n.COLOR_ATTACHMENT0+ge;Y.length=fe.length,ee=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,ee=!0);ee&&n.drawBuffers(Y)}function Ze(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const ft={[kr]:n.FUNC_ADD,[PS]:n.FUNC_SUBTRACT,[LS]:n.FUNC_REVERSE_SUBTRACT};ft[DS]=n.MIN,ft[NS]=n.MAX;const Je={[IS]:n.ZERO,[US]:n.ONE,[FS]:n.SRC_COLOR,[md]:n.SRC_ALPHA,[VS]:n.SRC_ALPHA_SATURATE,[BS]:n.DST_COLOR,[zS]:n.DST_ALPHA,[kS]:n.ONE_MINUS_SRC_COLOR,[gd]:n.ONE_MINUS_SRC_ALPHA,[HS]:n.ONE_MINUS_DST_COLOR,[OS]:n.ONE_MINUS_DST_ALPHA,[GS]:n.CONSTANT_COLOR,[WS]:n.ONE_MINUS_CONSTANT_COLOR,[jS]:n.CONSTANT_ALPHA,[XS]:n.ONE_MINUS_CONSTANT_ALPHA};function N(I,me,Y,ee,fe,ge,Qe,Dt,mn,st){if(I===Ni){g===!0&&(de(n.BLEND),g=!1);return}if(g===!1&&(ce(n.BLEND),g=!0),I!==RS){if(I!==y||st!==R){if((m!==kr||_!==kr)&&(n.blendEquation(n.FUNC_ADD),m=kr,_=kr),st)switch(I){case js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ea:n.blendFunc(n.ONE,n.ONE);break;case Zm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ea:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,v=null,M=null,b=null,E.set(0,0,0),C=0,y=I,R=st}return}fe=fe||me,ge=ge||Y,Qe=Qe||ee,(me!==m||fe!==_)&&(n.blendEquationSeparate(ft[me],ft[fe]),m=me,_=fe),(Y!==f||ee!==v||ge!==M||Qe!==b)&&(n.blendFuncSeparate(Je[Y],Je[ee],Je[ge],Je[Qe]),f=Y,v=ee,M=ge,b=Qe),(Dt.equals(E)===!1||mn!==C)&&(n.blendColor(Dt.r,Dt.g,Dt.b,mn),E.copy(Dt),C=mn),y=I,R=!1}function wn(I,me){I.side===jt?de(n.CULL_FACE):ce(n.CULL_FACE);let Y=I.side===dn;me&&(Y=!Y),Xe(Y),I.blending===js&&I.transparent===!1?N(Ni):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ee=I.stencilWrite;o.setTest(ee),ee&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){U!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),U=I)}function nt(I){I!==bS?(ce(n.CULL_FACE),I!==x&&(I===Km?n.cullFace(n.BACK):I===CS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),x=I}function Ie(I){I!==S&&(X&&n.lineWidth(I),S=I)}function vt(I,me,Y){I?(ce(n.POLYGON_OFFSET_FILL),(k!==me||B!==Y)&&(n.polygonOffset(me,Y),k=me,B=Y)):de(n.POLYGON_OFFSET_FILL)}function ke(I){I?ce(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function P(I){I===void 0&&(I=n.TEXTURE0+O-1),D!==I&&(n.activeTexture(I),D=I)}function w(I,me,Y){Y===void 0&&(D===null?Y=n.TEXTURE0+O-1:Y=D);let ee=$[Y];ee===void 0&&(ee={type:void 0,texture:void 0},$[Y]=ee),(ee.type!==I||ee.texture!==me)&&(D!==Y&&(n.activeTexture(Y),D=Y),n.bindTexture(I,me||te[I]),ee.type=I,ee.texture=me)}function V(){const I=$[D];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){Ae.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ae.copy(I))}function xe(I){Ge.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ge.copy(I))}function Ye(I,me){let Y=l.get(me);Y===void 0&&(Y=new WeakMap,l.set(me,Y));let ee=Y.get(I);ee===void 0&&(ee=n.getUniformBlockIndex(me,I.name),Y.set(I,ee))}function Be(I,me){const ee=l.get(me).get(I);a.get(me)!==ee&&(n.uniformBlockBinding(me,ee,I.__bindingPointIndex),a.set(me,ee))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},D=null,$={},h={},u=new WeakMap,d=[],p=null,g=!1,y=null,m=null,f=null,v=null,_=null,M=null,b=null,E=new Re(0,0,0),C=0,R=!1,U=null,x=null,S=null,k=null,B=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:de,bindFramebuffer:Oe,drawBuffers:De,useProgram:Ze,setBlending:N,setMaterial:wn,setFlipSided:Xe,setCullFace:nt,setLineWidth:Ie,setPolygonOffset:vt,setScissorTest:ke,activeTexture:P,bindTexture:w,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:_e,texImage3D:Ue,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:it,texStorage3D:se,texSubImage2D:J,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:Fe,viewport:xe,reset:pt}}function H0(n,e,t,i){const r=E2(i);switch(t){case qy:return n*e;case Ky:return n*e;case Zy:return n*e*2;case up:return n*e/r.components*r.byteLength;case hp:return n*e/r.components*r.byteLength;case Jy:return n*e*2/r.components*r.byteLength;case dp:return n*e*2/r.components*r.byteLength;case $y:return n*e*3/r.components*r.byteLength;case ii:return n*e*4/r.components*r.byteLength;case fp:return n*e*4/r.components*r.byteLength;case Xl:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ql:case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ad:case Pd:return Math.max(n,16)*Math.max(e,8)/4;case Cd:case Rd:return Math.max(n,8)*Math.max(e,8)/2;case Ld:case Dd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kl:case qd:case $d:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qy:case Kd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zd:case Jd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E2(n){switch(n){case Bi:case jy:return{byteLength:1,components:1};case ba:case Xy:case Ii:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Kr:case ap:case fi:return{byteLength:4,components:1};case Yy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function T2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Aa("canvas")}function y(P,w,V){let Q=1;const ne=ke(P);if((ne.width>V||ne.height>V)&&(Q=V/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(Q*ne.width),Te=Math.floor(Q*ne.height);u===void 0&&(u=g(J,Te));const he=w?g(J,Te):u;return he.width=J,he.height=Te,he.getContext("2d").drawImage(P,0,0,J,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Te+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==_n&&P.minFilter!==ei}function f(P){n.generateMipmap(P)}function v(P,w,V,Q,ne=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=w;if(w===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),w===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),w===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),w===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),w===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),w===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),w===n.RGBA){const Te=ne?Tc:ot.getTransfer(Q);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Te===mt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(P,w){let V;return P?w===null||w===Kr||w===ro?V=n.DEPTH24_STENCIL8:w===fi?V=n.DEPTH32F_STENCIL8:w===ba&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Kr||w===ro?V=n.DEPTH_COMPONENT24:w===fi?V=n.DEPTH_COMPONENT32F:w===ba&&(V=n.DEPTH_COMPONENT16),V}function M(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==_n&&P.minFilter!==ei?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function b(P){const w=P.target;w.removeEventListener("dispose",b),C(w),w.isVideoTexture&&h.delete(w)}function E(P){const w=P.target;w.removeEventListener("dispose",E),U(w)}function C(P){const w=i.get(P);if(w.__webglInit===void 0)return;const V=P.source,Q=d.get(V);if(Q){const ne=Q[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(P),Object.keys(Q).length===0&&d.delete(V)}i.remove(P)}function R(P){const w=i.get(P);n.deleteTexture(w.__webglTexture);const V=P.source,Q=d.get(V);delete Q[w.__cacheKey],o.memory.textures--}function U(P){const w=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ne=0;ne<w.__webglFramebuffer[Q].length;ne++)n.deleteFramebuffer(w.__webglFramebuffer[Q][ne]);else n.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)n.deleteFramebuffer(w.__webglFramebuffer[Q]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=P.textures;for(let Q=0,ne=V.length;Q<ne;Q++){const J=i.get(V[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(P)}let x=0;function S(){x=0}function k(){const P=x;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),x+=1,P}function B(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function O(P,w){const V=i.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(V,P,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function X(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ge(V,P,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function H(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){Ge(V,P,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function K(P,w){const V=i.get(P);if(P.version>0&&V.__version!==P.version){q(V,P,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const D={[Ta]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[bd]:n.MIRRORED_REPEAT},$={[_n]:n.NEAREST,[KS]:n.NEAREST_MIPMAP_NEAREST,[rl]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[Lu]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},Z={[ew]:n.NEVER,[ow]:n.ALWAYS,[tw]:n.LESS,[t_]:n.LEQUAL,[nw]:n.EQUAL,[sw]:n.GEQUAL,[iw]:n.GREATER,[rw]:n.NOTEQUAL};function re(P,w){if(w.type===fi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ei||w.magFilter===Lu||w.magFilter===rl||w.magFilter===Vr||w.minFilter===ei||w.minFilter===Lu||w.minFilter===rl||w.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,D[w.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,D[w.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,D[w.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,$[w.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,$[w.minFilter]),w.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==rl&&w.minFilter!==Vr||w.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ae(P,w){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",b));const Q=w.source;let ne=d.get(Q);ne===void 0&&(ne={},d.set(Q,ne));const J=B(w);if(J!==P.__cacheKey){ne[J]===void 0&&(ne[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[J].usedTimes++;const Te=ne[P.__cacheKey];Te!==void 0&&(ne[P.__cacheKey].usedTimes--,Te.usedTimes===0&&R(w)),P.__cacheKey=J,P.__webglTexture=ne[J].texture}return V}function Ge(P,w,V){let Q=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=n.TEXTURE_3D);const ne=Ae(P,w),J=w.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+V);const Te=i.get(J);if(J.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const he=ot.getPrimaries(ot.workingColorSpace),ye=w.colorSpace===ir?null:ot.getPrimaries(w.colorSpace),it=w.colorSpace===ir||he===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let se=y(w.image,!1,r.maxTextureSize);se=vt(w,se);const _e=s.convert(w.format,w.colorSpace),Ue=s.convert(w.type);let Fe=v(w.internalFormat,_e,Ue,w.colorSpace,w.isVideoTexture);re(Q,w);let xe;const Ye=w.mipmaps,Be=w.isVideoTexture!==!0,pt=Te.__version===void 0||ne===!0,I=J.dataReady,me=M(w,se);if(w.isDepthTexture)Fe=_(w.format===so,w.type),pt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Fe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Fe,se.width,se.height,0,_e,Ue,null));else if(w.isDataTexture)if(Ye.length>0){Be&&pt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,Ye[0].width,Ye[0].height);for(let Y=0,ee=Ye.length;Y<ee;Y++)xe=Ye[Y],Be?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,_e,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,Y,Fe,xe.width,xe.height,0,_e,Ue,xe.data);w.generateMipmaps=!1}else Be?(pt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,se.width,se.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,_e,Ue,se.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,se.width,se.height,0,_e,Ue,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Be&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Fe,Ye[0].width,Ye[0].height,se.depth);for(let Y=0,ee=Ye.length;Y<ee;Y++)if(xe=Ye[Y],w.format!==ii)if(_e!==null)if(Be){if(I)if(w.layerUpdates.size>0){const fe=H0(xe.width,xe.height,w.format,w.type);for(const ge of w.layerUpdates){const Qe=xe.data.subarray(ge*fe/xe.data.BYTES_PER_ELEMENT,(ge+1)*fe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,ge,xe.width,xe.height,1,_e,Qe,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,se.depth,_e,xe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Fe,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,se.depth,_e,Ue,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Fe,xe.width,xe.height,se.depth,0,_e,Ue,xe.data)}else{Be&&pt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,Ye[0].width,Ye[0].height);for(let Y=0,ee=Ye.length;Y<ee;Y++)xe=Ye[Y],w.format!==ii?_e!==null?Be?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,xe.width,xe.height,_e,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,Y,Fe,xe.width,xe.height,0,_e,Ue,xe.data)}else if(w.isDataArrayTexture)if(Be){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Fe,se.width,se.height,se.depth),I)if(w.layerUpdates.size>0){const Y=H0(se.width,se.height,w.format,w.type);for(const ee of w.layerUpdates){const fe=se.data.subarray(ee*Y/se.data.BYTES_PER_ELEMENT,(ee+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,_e,Ue,fe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Ue,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,_e,Ue,se.data);else if(w.isData3DTexture)Be?(pt&&t.texStorage3D(n.TEXTURE_3D,me,Fe,se.width,se.height,se.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Ue,se.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,_e,Ue,se.data);else if(w.isFramebufferTexture){if(pt)if(Be)t.texStorage2D(n.TEXTURE_2D,me,Fe,se.width,se.height);else{let Y=se.width,ee=se.height;for(let fe=0;fe<me;fe++)t.texImage2D(n.TEXTURE_2D,fe,Fe,Y,ee,0,_e,Ue,null),Y>>=1,ee>>=1}}else if(Ye.length>0){if(Be&&pt){const Y=ke(Ye[0]);t.texStorage2D(n.TEXTURE_2D,me,Fe,Y.width,Y.height)}for(let Y=0,ee=Ye.length;Y<ee;Y++)xe=Ye[Y],Be?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,_e,Ue,xe):t.texImage2D(n.TEXTURE_2D,Y,Fe,_e,Ue,xe);w.generateMipmaps=!1}else if(Be){if(pt){const Y=ke(se);t.texStorage2D(n.TEXTURE_2D,me,Fe,Y.width,Y.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ue,se)}else t.texImage2D(n.TEXTURE_2D,0,Fe,_e,Ue,se);m(w)&&f(Q),Te.__version=J.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function q(P,w,V){if(w.image.length!==6)return;const Q=Ae(P,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const J=i.get(ne);if(ne.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+V);const Te=ot.getPrimaries(ot.workingColorSpace),he=w.colorSpace===ir?null:ot.getPrimaries(w.colorSpace),ye=w.colorSpace===ir||Te===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const it=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!it&&!se?_e[ee]=y(w.image[ee],!0,r.maxCubemapSize):_e[ee]=se?w.image[ee].image:w.image[ee],_e[ee]=vt(w,_e[ee]);const Ue=_e[0],Fe=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Ye=v(w.internalFormat,Fe,xe,w.colorSpace),Be=w.isVideoTexture!==!0,pt=J.__version===void 0||Q===!0,I=ne.dataReady;let me=M(w,Ue);re(n.TEXTURE_CUBE_MAP,w);let Y;if(it){Be&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ye,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){Y=_e[ee].mipmaps;for(let fe=0;fe<Y.length;fe++){const ge=Y[fe];w.format!==ii?Fe!==null?Be?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ge.width,ge.height,Fe,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ge.width,ge.height,Fe,xe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,Ye,ge.width,ge.height,0,Fe,xe,ge.data)}}}else{if(Y=w.mipmaps,Be&&pt){Y.length>0&&me++;const ee=ke(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Fe,xe,_e[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,_e[ee].width,_e[ee].height,0,Fe,xe,_e[ee].data);for(let fe=0;fe<Y.length;fe++){const Qe=Y[fe].image[ee].image;Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Qe.width,Qe.height,Fe,xe,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ye,Qe.width,Qe.height,0,Fe,xe,Qe.data)}}else{Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,xe,_e[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Fe,xe,_e[ee]);for(let fe=0;fe<Y.length;fe++){const ge=Y[fe];Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Fe,xe,ge.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,Ye,Fe,xe,ge.image[ee])}}}m(w)&&f(n.TEXTURE_CUBE_MAP),J.__version=ne.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function te(P,w,V,Q,ne,J){const Te=s.convert(V.format,V.colorSpace),he=s.convert(V.type),ye=v(V.internalFormat,Te,he,V.colorSpace);if(!i.get(w).__hasExternalTextures){const se=Math.max(1,w.width>>J),_e=Math.max(1,w.height>>J);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,ye,se,_e,w.depth,0,Te,he,null):t.texImage2D(ne,J,ye,se,_e,0,Te,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),nt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ne,i.get(V).__webglTexture,0,Xe(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ne,i.get(V).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(P,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),w.depthBuffer){const Q=w.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,J=_(w.stencilBuffer,ne),Te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Xe(w);nt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,J,w.width,w.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,J,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,J,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,P)}else{const Q=w.textures;for(let ne=0;ne<Q.length;ne++){const J=Q[ne],Te=s.convert(J.format,J.colorSpace),he=s.convert(J.type),ye=v(J.internalFormat,Te,he,J.colorSpace),it=Xe(w);V&&nt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,ye,w.width,w.height):nt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,ye,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ye,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,ne=Xe(w);if(w.depthTexture.format===Xs)nt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(w.depthTexture.format===so)nt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const w=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=Q}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,P)}else if(V){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=n.createRenderbuffer(),ce(w.__webglDepthbuffer[Q],P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ce(w.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(P,w,V){const Q=i.get(P);w!==void 0&&te(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Oe(P)}function Ze(P){const w=P.texture,V=i.get(P),Q=i.get(w);P.addEventListener("dispose",E);const ne=P.textures,J=P.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=w.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let ye=0;ye<w.mipmaps.length;ye++)V.__webglFramebuffer[he][ye]=n.createFramebuffer()}else V.__webglFramebuffer[he]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)V.__webglFramebuffer[he]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let he=0,ye=ne.length;he<ye;he++){const it=i.get(ne[he]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&nt(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const ye=ne[he];V.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const it=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),_e=v(ye.internalFormat,it,se,ye.colorSpace,P.isXRRenderTarget===!0),Ue=Xe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,_e,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,V.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)te(V.__webglFramebuffer[he][ye],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else te(V.__webglFramebuffer[he],P,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(w)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let he=0,ye=ne.length;he<ye;he++){const it=ne[he],se=i.get(it);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),re(n.TEXTURE_2D,it),te(V.__webglFramebuffer,P,it,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(it)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Q.__webglTexture),re(he,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)te(V.__webglFramebuffer[ye],P,w,n.COLOR_ATTACHMENT0,he,ye);else te(V.__webglFramebuffer,P,w,n.COLOR_ATTACHMENT0,he,0);m(w)&&f(he),t.unbindTexture()}P.depthBuffer&&Oe(P)}function ft(P){const w=P.textures;for(let V=0,Q=w.length;V<Q;V++){const ne=w[V];if(m(ne)){const J=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ne).__webglTexture;t.bindTexture(J,Te),f(J),t.unbindTexture()}}}const Je=[],N=[];function wn(P){if(P.samples>0){if(nt(P)===!1){const w=P.textures,V=P.width,Q=P.height;let ne=n.COLOR_BUFFER_BIT;const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(P),he=w.length>1;if(he)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const it=i.get(w[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,ne,n.NEAREST),l===!0&&(Je.length=0,N.length=0,Je.push(n.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(J),N.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ye]);const it=i.get(w[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Xe(P){return Math.min(r.maxSamples,P.samples)}function nt(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function vt(P,w){const V=P.colorSpace,Q=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Sr&&V!==ir&&(ot.getTransfer(V)===mt?(Q!==ii||ne!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=S,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=De,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=nt}function b2(n,e){function t(i,r=ir){let s;const o=ot.getTransfer(r);if(i===Bi)return n.UNSIGNED_BYTE;if(i===lp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jy)return n.BYTE;if(i===Xy)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===ap)return n.INT;if(i===Kr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===qy)return n.ALPHA;if(i===$y)return n.RGB;if(i===ii)return n.RGBA;if(i===Ky)return n.LUMINANCE;if(i===Zy)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===so)return n.DEPTH_STENCIL;if(i===up)return n.RED;if(i===hp)return n.RED_INTEGER;if(i===Jy)return n.RG;if(i===dp)return n.RG_INTEGER;if(i===fp)return n.RGBA_INTEGER;if(i===Xl||i===Yl||i===ql||i===$l)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===Ad||i===Rd||i===Pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===Dd||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ld||i===Dd)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Id||i===Ud||i===Fd||i===kd||i===zd||i===Od||i===Bd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===Yd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Id)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Od)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kl||i===qd||i===$d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kl)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qy||i===Kd||i===Zd||i===Jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class C2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A2={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const R2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P2=`
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

}`;class L2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ut({vertexShader:R2,fragmentShader:P2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D2 extends mo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const y=new L2,m=t.getContextAttributes();let f=null,v=null;const _=[],M=[],b=new ae;let E=null;const C=new Rn;C.layers.enable(1),C.viewport=new ht;const R=new Rn;R.layers.enable(2),R.viewport=new ht;const U=[C,R],x=new C2;x.layers.enable(1),x.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=_[q];return te===void 0&&(te=new sh,_[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=_[q];return te===void 0&&(te=new sh,_[q]=te),te.getGripSpace()},this.getHand=function(q){let te=_[q];return te===void 0&&(te=new sh,_[q]=te),te.getHandSpace()};function B(q){const te=M.indexOf(q.inputSource);if(te===-1)return;const ce=_[te];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",X);for(let q=0;q<_.length;q++){const te=M[q];te!==null&&(M[q]=null,_[q].disconnect(te))}S=null,k=null,y.reset(),e.setRenderTarget(f),p=null,d=null,u=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",O),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ai(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ce=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?so:Xs,ce=m.stencil?ro:Kr);const Oe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ai(d.textureWidth,d.textureHeight,{format:ii,type:Bi,depthTexture:new d_(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(q){for(let te=0;te<q.removed.length;te++){const ce=q.removed[te],de=M.indexOf(ce);de>=0&&(M[de]=null,_[de].disconnect(ce))}for(let te=0;te<q.added.length;te++){const ce=q.added[te];let de=M.indexOf(ce);if(de===-1){for(let De=0;De<_.length;De++)if(De>=M.length){M.push(ce),de=De;break}else if(M[De]===null){M[De]=ce,de=De;break}if(de===-1)break}const Oe=_[de];Oe&&Oe.connect(ce)}}const H=new T,K=new T;function D(q,te,ce){H.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ce.matrixWorld);const de=H.distanceTo(K),Oe=te.projectionMatrix.elements,De=ce.projectionMatrix.elements,Ze=Oe[14]/(Oe[10]-1),ft=Oe[14]/(Oe[10]+1),Je=(Oe[9]+1)/Oe[5],N=(Oe[9]-1)/Oe[5],wn=(Oe[8]-1)/Oe[0],Xe=(De[8]+1)/De[0],nt=Ze*wn,Ie=Ze*Xe,vt=de/(-wn+Xe),ke=vt*-wn;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ke),q.translateZ(vt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Oe[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const P=Ze+vt,w=ft+vt,V=nt-ke,Q=Ie+(de-ke),ne=Je*ft/w*P,J=N*ft/w*P;q.projectionMatrix.makePerspective(V,Q,ne,J,P,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function $(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ce=q.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),x.near=R.near=C.near=te,x.far=R.far=C.far=ce,(S!==x.near||k!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,k=x.far);const de=q.parent,Oe=x.cameras;$(x,de);for(let De=0;De<Oe.length;De++)$(Oe[De],de);Oe.length===2?D(x,C,R):x.projectionMatrix.copy(C.projectionMatrix),Z(q,x,de)};function Z(q,te,ce){ce===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ca*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let re=null;function Ae(q,te){if(h=te.getViewerPose(c||o),g=te,h!==null){const ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let De=0;De<ce.length;De++){const Ze=ce[De];let ft=null;if(p!==null)ft=p.getViewport(Ze);else{const N=u.getViewSubImage(d,Ze);ft=N.viewport,De===0&&(e.setRenderTargetTextures(v,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(v))}let Je=U[De];Je===void 0&&(Je=new Rn,Je.layers.enable(De),Je.viewport=new ht,U[De]=Je),Je.matrix.fromArray(Ze.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ze.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ft.x,ft.y,ft.width,ft.height),De===0&&(x.matrix.copy(Je.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(Je)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const De=u.getDepthInformation(ce[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let ce=0;ce<_.length;ce++){const de=M[ce],Oe=_[ce];de!==null&&Oe!==void 0&&Oe.update(de,te,c||o)}re&&re(q,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ge=new h_;Ge.setAnimationLoop(Ae),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}}const Rr=new Rt,N2=new rt;function I2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,l_(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===dn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===dn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,Rr.copy(M),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(N2.makeRotationFromEuler(Rr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function U2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function c(v,_){let M=r[v.id];M===void 0&&(g(v),M=h(v),r[v.id]=M,v.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(v,b);const E=e.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function h(v){const _=u();v.__bindingPointIndex=_;const M=n.createBuffer(),b=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,b,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],M=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,C=M.length;E<C;E++){const R=Array.isArray(M[E])?M[E]:[M[E]];for(let U=0,x=R.length;U<x;U++){const S=R[U];if(p(S,E,U,b)===!0){const k=S.__offset,B=Array.isArray(S.value)?S.value:[S.value];let O=0;for(let X=0;X<B.length;X++){const H=B[X],K=y(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,k+O,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,_,M,b){const E=v.value,C=_+"_"+M;if(b[C]===void 0)return typeof E=="number"||typeof E=="boolean"?b[C]=E:b[C]=E.clone(),!0;{const R=b[C];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return b[C]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(v){const _=v.uniforms;let M=0;const b=16;for(let C=0,R=_.length;C<R;C++){const U=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,S=U.length;x<S;x++){const k=U[x],B=Array.isArray(k.value)?k.value:[k.value];for(let O=0,X=B.length;O<X;O++){const H=B[O],K=y(H),D=M%b,$=D%K.boundary,Z=D+$;M+=$,Z!==0&&b-Z<K.storage&&(M+=b-Z),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=K.storage}}}const E=M%b;return E>0&&(M+=b-E),v.__size=M,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class F2{constructor(e={}){const{canvas:t=Ew(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=mr,this.toneMappingExposure=1;const _=this;let M=!1,b=0,E=0,C=null,R=-1,U=null;const x=new ht,S=new ht;let k=null;const B=new Re(0);let O=0,X=t.width,H=t.height,K=1,D=null,$=null;const Z=new ht(0,0,X,H),re=new ht(0,0,X,H);let Ae=!1;const Ge=new yp;let q=!1,te=!1;const ce=new rt,de=new rt,Oe=new T,De=new ht,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Je(){return C===null?K:1}let N=i;function wn(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sp}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),N===null){const F="webgl2";if(N=wn(F,A),N===null)throw wn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Xe,nt,Ie,vt,ke,P,w,V,Q,ne,J,Te,he,ye,it,se,_e,Ue,Fe,xe,Ye,Be,pt,I;function me(){Xe=new HT(N),Xe.init(),Be=new b2(N,Xe),nt=new UT(N,Xe,e,Be),Ie=new w2(N),nt.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),vt=new WT(N),ke=new l2,P=new T2(N,Xe,Ie,ke,nt,Be,vt),w=new kT(_),V=new BT(_),Q=new Zw(N),pt=new NT(N,Q),ne=new VT(N,Q,vt,pt),J=new XT(N,ne,Q,vt),Fe=new jT(N,nt,P),se=new FT(ke),Te=new a2(_,w,V,Xe,nt,pt,se),he=new I2(_,ke),ye=new u2,it=new g2(Xe),Ue=new DT(_,w,V,Ie,J,d,l),_e=new M2(_,J,nt),I=new U2(N,vt,nt,Ie),xe=new IT(N,Xe,vt),Ye=new GT(N,Xe,vt),vt.programs=Te.programs,_.capabilities=nt,_.extensions=Xe,_.properties=ke,_.renderLists=ye,_.shadowMap=_e,_.state=Ie,_.info=vt}me();const Y=new D2(_,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(X,H,!1))},this.getSize=function(A){return A.set(X,H)},this.setSize=function(A,F,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,H=F,t.width=Math.floor(A*K),t.height=Math.floor(F*K),G===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(X*K,H*K).floor()},this.setDrawingBufferSize=function(A,F,G){X=A,H=F,K=G,t.width=Math.floor(A*G),t.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,F,G,j){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,F,G,j),Ie.viewport(x.copy(Z).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,F,G,j){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,F,G,j),Ie.scissor(S.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){Ie.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(A=!0,F=!0,G=!0){let j=0;if(A){let z=!1;if(C!==null){const oe=C.texture.format;z=oe===fp||oe===dp||oe===hp}if(z){const oe=C.texture.type,pe=oe===Bi||oe===Kr||oe===ba||oe===ro||oe===lp||oe===cp,Se=Ue.getClearColor(),we=Ue.getClearAlpha(),Le=Se.r,Ne=Se.g,be=Se.b;pe?(p[0]=Le,p[1]=Ne,p[2]=be,p[3]=we,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Le,g[1]=Ne,g[2]=be,g[3]=we,N.clearBufferiv(N.COLOR,0,g))}else j|=N.COLOR_BUFFER_BIT}F&&(j|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),it.dispose(),ke.dispose(),w.dispose(),V.dispose(),J.dispose(),pt.dispose(),I.dispose(),Te.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Np),Y.removeEventListener("sessionend",Ip),wr.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=vt.autoReset,F=_e.enabled,G=_e.autoUpdate,j=_e.needsUpdate,z=_e.type;me(),vt.autoReset=A,_e.enabled=F,_e.autoUpdate=G,_e.needsUpdate=j,_e.type=z}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){const F=A.target;F.removeEventListener("dispose",Qe),Dt(F)}function Dt(A){mn(A),ke.remove(A)}function mn(A){const F=ke.get(A).programs;F!==void 0&&(F.forEach(function(G){Te.releaseProgram(G)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,j,z,oe){F===null&&(F=Ze);const pe=z.isMesh&&z.matrixWorld.determinant()<0,Se=q_(A,F,G,j,z);Ie.setMaterial(j,pe);let we=G.index,Le=1;if(j.wireframe===!0){if(we=ne.getWireframeAttribute(G),we===void 0)return;Le=2}const Ne=G.drawRange,be=G.attributes.position;let ct=Ne.start*Le,yt=(Ne.start+Ne.count)*Le;oe!==null&&(ct=Math.max(ct,oe.start*Le),yt=Math.min(yt,(oe.start+oe.count)*Le)),we!==null?(ct=Math.max(ct,0),yt=Math.min(yt,we.count)):be!=null&&(ct=Math.max(ct,0),yt=Math.min(yt,be.count));const bt=yt-ct;if(bt<0||bt===1/0)return;pt.setup(z,j,Se,G,we);let En,at=xe;if(we!==null&&(En=Q.get(we),at=Ye,at.setIndex(En)),z.isMesh)j.wireframe===!0?(Ie.setLineWidth(j.wireframeLinewidth*Je()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(z.isLine){let Ce=j.linewidth;Ce===void 0&&(Ce=1),Ie.setLineWidth(Ce*Je()),z.isLineSegments?at.setMode(N.LINES):z.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else z.isPoints?at.setMode(N.POINTS):z.isSprite&&at.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ce=z._multiDrawStarts,Yt=z._multiDrawCounts,lt=z._multiDrawCount,Wn=we?Q.get(we).bytesPerElement:1,ns=ke.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<lt;Tn++)ns.setValue(N,"_gl_DrawID",Tn),at.render(Ce[Tn]/Wn,Yt[Tn])}else if(z.isInstancedMesh)at.renderInstances(ct,bt,z.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Yt=Math.min(G.instanceCount,Ce);at.renderInstances(ct,bt,Yt)}else at.render(ct,bt)};function st(A,F,G){A.transparent===!0&&A.side===jt&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,Ba(A,F,G),A.side=yr,A.needsUpdate=!0,Ba(A,F,G),A.side=jt):Ba(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),m=it.get(G),m.init(F),v.push(m),G.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),A!==G&&A.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const j=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const oe=z.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const Se=oe[pe];st(Se,G,z),j.add(Se)}else st(oe,G,z),j.add(oe)}),v.pop(),m=null,j},this.compileAsync=function(A,F,G=null){const j=this.compile(A,F,G);return new Promise(z=>{function oe(){if(j.forEach(function(pe){ke.get(pe).currentProgram.isReady()&&j.delete(pe)}),j.size===0){z(A);return}setTimeout(oe,10)}Xe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let gn=null;function _i(A){gn&&gn(A)}function Np(){wr.stop()}function Ip(){wr.start()}const wr=new h_;wr.setAnimationLoop(_i),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(A){gn=A,Y.setAnimationLoop(A),A===null?wr.stop():wr.start()},Y.addEventListener("sessionstart",Np),Y.addEventListener("sessionend",Ip),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,F,C),m=it.get(A,v.length),m.init(F),v.push(m),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ge.setFromProjectionMatrix(de),te=this.localClippingEnabled,q=se.init(this.clippingPlanes,te),y=ye.get(A,f.length),y.init(),f.push(y),Y.enabled===!0&&Y.isPresenting===!0){const oe=_.xr.getDepthSensingMesh();oe!==null&&tu(oe,F,-1/0,_.sortObjects)}tu(A,F,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(D,$),ft=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ft&&Ue.addToRenderList(y,A),this.info.render.frame++,q===!0&&se.beginShadows();const G=m.state.shadowsArray;_e.render(G,A,F),q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,z=y.transmissive;if(m.setupLights(),F.isArrayCamera){const oe=F.cameras;if(z.length>0)for(let pe=0,Se=oe.length;pe<Se;pe++){const we=oe[pe];Fp(j,z,A,we)}ft&&Ue.render(A);for(let pe=0,Se=oe.length;pe<Se;pe++){const we=oe[pe];Up(y,A,we,we.viewport)}}else z.length>0&&Fp(j,z,A,F),ft&&Ue.render(A),Up(y,A,F);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,F),pt.resetDefaultState(),R=-1,U=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&se.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function tu(A,F,G,j){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){j&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const pe=J.update(A),Se=A.material;Se.visible&&y.push(A,pe,Se,G,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const pe=J.update(A),Se=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){const we=pe.groups;for(let Le=0,Ne=we.length;Le<Ne;Le++){const be=we[Le],ct=Se[be.materialIndex];ct&&ct.visible&&y.push(A,pe,ct,G,De.z,be)}}else Se.visible&&y.push(A,pe,Se,G,De.z,null)}}const oe=A.children;for(let pe=0,Se=oe.length;pe<Se;pe++)tu(oe[pe],F,G,j)}function Up(A,F,G,j){const z=A.opaque,oe=A.transmissive,pe=A.transparent;m.setupLightsView(G),q===!0&&se.setGlobalState(_.clippingPlanes,G),j&&Ie.viewport(x.copy(j)),z.length>0&&Oa(z,F,G),oe.length>0&&Oa(oe,F,G),pe.length>0&&Oa(pe,F,G),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Fp(A,F,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new ai(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Ii:Bi,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const oe=m.state.transmissionRenderTarget[j.id],pe=j.viewport||x;oe.setSize(pe.z,pe.w);const Se=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(B),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),ft&&Ue.render(G);const we=_.toneMapping;_.toneMapping=mr;const Le=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),q===!0&&se.setGlobalState(_.clippingPlanes,j),Oa(A,G,j),P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let be=0,ct=F.length;be<ct;be++){const yt=F[be],bt=yt.object,En=yt.geometry,at=yt.material,Ce=yt.group;if(at.side===jt&&bt.layers.test(j.layers)){const Yt=at.side;at.side=dn,at.needsUpdate=!0,kp(bt,G,j,En,at,Ce),at.side=Yt,at.needsUpdate=!0,Ne=!0}}Ne===!0&&(P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe))}_.setRenderTarget(Se),_.setClearColor(B,O),Le!==void 0&&(j.viewport=Le),_.toneMapping=we}function Oa(A,F,G){const j=F.isScene===!0?F.overrideMaterial:null;for(let z=0,oe=A.length;z<oe;z++){const pe=A[z],Se=pe.object,we=pe.geometry,Le=j===null?pe.material:j,Ne=pe.group;Se.layers.test(G.layers)&&kp(Se,F,G,we,Le,Ne)}}function kp(A,F,G,j,z,oe){A.onBeforeRender(_,F,G,j,z,oe),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(_,F,G,j,A,oe),z.transparent===!0&&z.side===jt&&z.forceSinglePass===!1?(z.side=dn,z.needsUpdate=!0,_.renderBufferDirect(G,F,j,z,A,oe),z.side=yr,z.needsUpdate=!0,_.renderBufferDirect(G,F,j,z,A,oe),z.side=jt):_.renderBufferDirect(G,F,j,z,A,oe),A.onAfterRender(_,F,G,j,z,oe)}function Ba(A,F,G){F.isScene!==!0&&(F=Ze);const j=ke.get(A),z=m.state.lights,oe=m.state.shadowsArray,pe=z.state.version,Se=Te.getParameters(A,z.state,oe,F,G),we=Te.getProgramCacheKey(Se);let Le=j.programs;j.environment=A.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",Qe),Le=new Map,j.programs=Le);let Ne=Le.get(we);if(Ne!==void 0){if(j.currentProgram===Ne&&j.lightsStateVersion===pe)return Op(A,Se),Ne}else Se.uniforms=Te.getUniforms(A),A.onBeforeCompile(Se,_),Ne=Te.acquireProgram(Se,we),Le.set(we,Ne),j.uniforms=Se.uniforms;const be=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(be.clippingPlanes=se.uniform),Op(A,Se),j.needsLights=K_(A),j.lightsStateVersion=pe,j.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMap.value=z.state.directionalShadowMap,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotShadowMap.value=z.state.spotShadowMap,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMap.value=z.state.pointShadowMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Ne,j.uniformsList=null,Ne}function zp(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Jl.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Op(A,F){const G=ke.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function q_(A,F,G,j,z){F.isScene!==!0&&(F=Ze),P.resetTextureUnits();const oe=F.fog,pe=j.isMeshStandardMaterial?F.environment:null,Se=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Sr,we=(j.isMeshStandardMaterial?V:w).get(j.envMap||pe),Le=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),be=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,yt=!!G.morphAttributes.color;let bt=mr;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(bt=_.toneMapping);const En=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,at=En!==void 0?En.length:0,Ce=ke.get(j),Yt=m.state.lights;if(q===!0&&(te===!0||A!==U)){const Un=A===U&&j.id===R;se.setState(j,A,Un)}let lt=!1;j.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Yt.state.version||Ce.outputColorSpace!==Se||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==we||j.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Ne||Ce.morphTargets!==be||Ce.morphNormals!==ct||Ce.morphColors!==yt||Ce.toneMapping!==bt||Ce.morphTargetsCount!==at)&&(lt=!0):(lt=!0,Ce.__version=j.version);let Wn=Ce.currentProgram;lt===!0&&(Wn=Ba(j,F,z));let ns=!1,Tn=!1,nu=!1;const At=Wn.getUniforms(),Vi=Ce.uniforms;if(Ie.useProgram(Wn.program)&&(ns=!0,Tn=!0,nu=!0),j.id!==R&&(R=j.id,Tn=!0),ns||U!==A){nt.reverseDepthBuffer?(ce.copy(A.projectionMatrix),bw(ce),Cw(ce),At.setValue(N,"projectionMatrix",ce)):At.setValue(N,"projectionMatrix",A.projectionMatrix),At.setValue(N,"viewMatrix",A.matrixWorldInverse);const Un=At.map.cameraPosition;Un!==void 0&&Un.setValue(N,Oe.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&At.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,Tn=!0,nu=!0)}if(z.isSkinnedMesh){At.setOptional(N,z,"bindMatrix"),At.setOptional(N,z,"bindMatrixInverse");const Un=z.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),At.setValue(N,"boneTexture",Un.boneTexture,P))}z.isBatchedMesh&&(At.setOptional(N,z,"batchingTexture"),At.setValue(N,"batchingTexture",z._matricesTexture,P),At.setOptional(N,z,"batchingIdTexture"),At.setValue(N,"batchingIdTexture",z._indirectTexture,P),At.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&At.setValue(N,"batchingColorTexture",z._colorsTexture,P));const iu=G.morphAttributes;if((iu.position!==void 0||iu.normal!==void 0||iu.color!==void 0)&&Fe.update(z,G,Wn),(Tn||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,At.setValue(N,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Vi.envMap.value=we,Vi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Vi.envMapIntensity.value=F.environmentIntensity),Tn&&(At.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&$_(Vi,nu),oe&&j.fog===!0&&he.refreshFogUniforms(Vi,oe),he.refreshMaterialUniforms(Vi,j,K,H,m.state.transmissionRenderTarget[A.id]),Jl.upload(N,zp(Ce),Vi,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jl.upload(N,zp(Ce),Vi,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(N,"center",z.center),At.setValue(N,"modelViewMatrix",z.modelViewMatrix),At.setValue(N,"normalMatrix",z.normalMatrix),At.setValue(N,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Un=j.uniformsGroups;for(let ru=0,Z_=Un.length;ru<Z_;ru++){const Bp=Un[ru];I.update(Bp,Wn),I.bind(Bp,Wn)}}return Wn}function $_(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function K_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,F,G){ke.get(A.texture).__webglTexture=F,ke.get(A.depthTexture).__webglTexture=G;const j=ke.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=G===void 0,j.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const G=ke.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){C=A,b=F,E=G;let j=!0,z=null,oe=!1,pe=!1;if(A){const we=ke.get(A);if(we.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(we.__hasExternalTextures)P.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const be=A.depthTexture;if(we.__boundDepthTexture!==be){if(be!==null&&ke.has(be)&&(A.width!==be.image.width||A.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ne=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?z=Ne[F][G]:z=Ne[F],oe=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?z=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[G]:z=Ne,x.copy(A.viewport),S.copy(A.scissor),k=A.scissorTest}else x.copy(Z).multiplyScalar(K).floor(),S.copy(re).multiplyScalar(K).floor(),k=Ae;if(Ie.bindFramebuffer(N.FRAMEBUFFER,z)&&j&&Ie.drawBuffers(A,z),Ie.viewport(x),Ie.scissor(S),Ie.setScissorTest(k),oe){const we=ke.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,G)}else if(pe){const we=ke.get(A.texture),Le=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,G||0,Le)}R=-1},this.readRenderTargetPixels=function(A,F,G,j,z,oe,pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){Ie.bindFramebuffer(N.FRAMEBUFFER,Se);try{const we=A.texture,Le=we.format,Ne=we.type;if(!nt.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-j&&G>=0&&G<=A.height-z&&N.readPixels(F,G,j,z,Be.convert(Le),Be.convert(Ne),oe)}finally{const we=C!==null?ke.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,j,z,oe,pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){const we=A.texture,Le=we.format,Ne=we.type;if(!nt.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-j&&G>=0&&G<=A.height-z){Ie.bindFramebuffer(N.FRAMEBUFFER,Se);const be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,oe.byteLength,N.STREAM_READ),N.readPixels(F,G,j,z,Be.convert(Le),Be.convert(Ne),0);const ct=C!==null?ke.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(N.FRAMEBUFFER,ct);const yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Tw(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,oe),N.deleteBuffer(be),N.deleteSync(yt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,G=0){A.isTexture!==!0&&(Zl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-G),z=Math.floor(A.image.width*j),oe=Math.floor(A.image.height*j),pe=F!==null?F.x:0,Se=F!==null?F.y:0;P.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,pe,Se,z,oe),Ie.unbindTexture()},this.copyTextureToTexture=function(A,F,G=null,j=null,z=0){A.isTexture!==!0&&(Zl("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],F=arguments[2],z=arguments[3]||0,G=null);let oe,pe,Se,we,Le,Ne;G!==null?(oe=G.max.x-G.min.x,pe=G.max.y-G.min.y,Se=G.min.x,we=G.min.y):(oe=A.image.width,pe=A.image.height,Se=0,we=0),j!==null?(Le=j.x,Ne=j.y):(Le=0,Ne=0);const be=Be.convert(F.format),ct=Be.convert(F.type);P.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const yt=N.getParameter(N.UNPACK_ROW_LENGTH),bt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),En=N.getParameter(N.UNPACK_SKIP_PIXELS),at=N.getParameter(N.UNPACK_SKIP_ROWS),Ce=N.getParameter(N.UNPACK_SKIP_IMAGES),Yt=A.isCompressedTexture?A.mipmaps[z]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,we),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,Le,Ne,oe,pe,be,ct,Yt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,Le,Ne,Yt.width,Yt.height,be,Yt.data):N.texSubImage2D(N.TEXTURE_2D,z,Le,Ne,oe,pe,be,ct,Yt),N.pixelStorei(N.UNPACK_ROW_LENGTH,yt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,En),N.pixelStorei(N.UNPACK_SKIP_ROWS,at),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce),z===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,j=null,z=0){A.isTexture!==!0&&(Zl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,j=arguments[1]||null,A=arguments[2],F=arguments[3],z=arguments[4]||0);let oe,pe,Se,we,Le,Ne,be,ct,yt;const bt=A.isCompressedTexture?A.mipmaps[z]:A.image;G!==null?(oe=G.max.x-G.min.x,pe=G.max.y-G.min.y,Se=G.max.z-G.min.z,we=G.min.x,Le=G.min.y,Ne=G.min.z):(oe=bt.width,pe=bt.height,Se=bt.depth,we=0,Le=0,Ne=0),j!==null?(be=j.x,ct=j.y,yt=j.z):(be=0,ct=0,yt=0);const En=Be.convert(F.format),at=Be.convert(F.type);let Ce;if(F.isData3DTexture)P.setTexture3D(F,0),Ce=N.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)P.setTexture2DArray(F,0),Ce=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const Yt=N.getParameter(N.UNPACK_ROW_LENGTH),lt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Wn=N.getParameter(N.UNPACK_SKIP_PIXELS),ns=N.getParameter(N.UNPACK_SKIP_ROWS),Tn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ce,z,be,ct,yt,oe,pe,Se,En,at,bt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,z,be,ct,yt,oe,pe,Se,En,bt.data):N.texSubImage3D(Ce,z,be,ct,yt,oe,pe,Se,En,at,bt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Wn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ns),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tn),z===0&&F.generateMipmaps&&N.generateMipmap(Ce),Ie.unbindTexture()},this.initRenderTarget=function(A){ke.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ie.unbindTexture()},this.resetState=function(){b=0,E=0,C=null,Ie.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pp?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===$c?"display-p3":"srgb"}}class Mp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new Mp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class v_ extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rt,this.environmentIntensity=1,this.environmentRotation=new Rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class k2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qd,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new T;class Rc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class y_ extends ts{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ys;const No=new T,_s=new T,xs=new T,Ms=new ae,Io=new ae,__=new rt,Tl=new T,Uo=new T,bl=new T,V0=new ae,oh=new ae,G0=new ae;class z2 extends Bt{constructor(e=new y_){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new k2(t,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Rc(i,3,0,!1)),ys.setAttribute("uv",new Rc(i,2,3,!1))}this.geometry=ys,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),__.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Cl(Tl.set(-.5,-.5,0),xs,o,_s,r,s),Cl(Uo.set(.5,-.5,0),xs,o,_s,r,s),Cl(bl.set(.5,.5,0),xs,o,_s,r,s),V0.set(0,0),oh.set(1,0),G0.set(1,1);let a=e.ray.intersectTriangle(Tl,Uo,bl,!1,No);if(a===null&&(Cl(Uo.set(-.5,.5,0),xs,o,_s,r,s),oh.set(0,1),a=e.ray.intersectTriangle(Tl,bl,Uo,!1,No),a===null))return;const l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||t.push({distance:l,point:No.clone(),uv:On.getInterpolation(No,Tl,Uo,bl,V0,oh,G0,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cl(n,e,t,i,r,s){Ms.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Io.x=s*Ms.x-r*Ms.y,Io.y=r*Ms.x+s*Ms.y):Io.copy(Ms),n.copy(e),n.x+=Io.x,n.y+=Io.y,n.applyMatrix4(__)}class O2 extends Kt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=_n,h=_n,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pc extends rn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new rt,W0=new rt,Al=[],j0=new es,B2=new rt,Fo=new Ee,ko=new go;class H2 extends Ee{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,B2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),j0.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(j0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),ko.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),W0.multiplyMatrices(i,Ss),Fo.matrixWorld=W0,Fo.raycast(e,Al);for(let o=0,a=Al.length;o<a;o++){const l=Al[o];l.instanceId=s,l.object=this,t.push(l)}Al.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new O2(new Float32Array(r*this.count),r,this.count,up,fi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class V2 extends ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const X0=new rt,nf=new gp,Rl=new go,Pl=new T;class Y0 extends Bt{constructor(e=new Lt,t=new V2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;X0.copy(r).invert(),nf.copy(e.ray).applyMatrix4(X0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){const m=c.getX(g);Pl.fromBufferAttribute(u,m),q0(Pl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++)Pl.fromBufferAttribute(u,g),q0(Pl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function q0(n,e,t,i,r,s,o){const a=nf.distanceSqToPoint(n);if(a<t){const l=new T;nf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class za extends Kt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,p=(o-h)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ae:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new T,r=[],s=[],o=[],a=new T,l=new rt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new T)}s[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sp extends yi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ae){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class G2 extends Sp{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ll=new T,ah=new wp,lh=new wp,ch=new wp;class bi extends yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new T){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Ll.subVectors(r[0],r[1]).add(r[0]),c=Ll);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ll.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ll),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ah.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),lh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),ch.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ch.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ah.calc(l),lh.calc(l),ch.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $0(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function W2(n,e){const t=1-n;return t*t*e}function j2(n,e){return 2*(1-n)*n*e}function X2(n,e){return n*n*e}function ia(n,e,t,i){return W2(n,e)+j2(n,t)+X2(n,i)}function Y2(n,e){const t=1-n;return t*t*t*e}function q2(n,e){const t=1-n;return 3*t*t*n*e}function $2(n,e){return 3*(1-n)*n*n*e}function K2(n,e){return n*n*n*e}function ra(n,e,t,i,r){return Y2(n,e)+q2(n,t)+$2(n,i)+K2(n,r)}class x_ extends yi{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Z2 extends yi{constructor(e=new T,t=new T,i=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new T){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y),ra(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class M_ extends yi{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J2 extends yi{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends yi{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w_ extends yi{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y),ia(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E_ extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set($0(a,l.x,c.x,h.x,u.x),$0(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ae().fromArray(r))}return this}}var rf=Object.freeze({__proto__:null,ArcCurve:G2,CatmullRomCurve3:bi,CubicBezierCurve:x_,CubicBezierCurve3:Z2,EllipseCurve:Sp,LineCurve:M_,LineCurve3:J2,QuadraticBezierCurve:S_,QuadraticBezierCurve3:w_,SplineCurve:E_});class Q2 extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new rf[r.type]().fromJSON(r))}return this}}class eC extends Q2{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new M_(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new S_(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new x_(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new E_(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Sp(e,t,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ep extends Lt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=zt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/t,u=new T,d=new ae,p=new T,g=new T,y=new T;let m=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let v=0;v<=t;v++){const _=i+v*h*r,M=Math.sin(_),b=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*M,u.y=e[E].y,u.z=e[E].x*b,o.push(u.x,u.y,u.z),d.x=v/t,d.y=E/(e.length-1),a.push(d.x,d.y);const C=l[3*E+0]*M,R=l[3*E+1],U=l[3*E+0]*b;c.push(C,R,U)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){const M=_+v*e.length,b=M,E=M+e.length,C=M+e.length+1,R=M+1;s.push(b,E,R),s.push(C,R,E)}this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("uv",new ze(a,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.points,e.segments,e.phiStart,e.phiLength)}}class Tp extends Ep{constructor(e=1,t=1,i=4,r=8){const s=new eC;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new Tp(e.radius,e.length,e.capSegments,e.radialSegments)}}class Qn extends Lt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const y=[],m=i/2;let f=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2));function v(){const M=new T,b=new T;let E=0;const C=(t-e)/i;for(let R=0;R<=s;R++){const U=[],x=R/s,S=x*(t-e)+e;for(let k=0;k<=r;k++){const B=k/r,O=B*l+a,X=Math.sin(O),H=Math.cos(O);b.x=S*X,b.y=-x*i+m,b.z=S*H,u.push(b.x,b.y,b.z),M.set(X,C,H).normalize(),d.push(M.x,M.y,M.z),p.push(B,1-x),U.push(g++)}y.push(U)}for(let R=0;R<r;R++)for(let U=0;U<s;U++){const x=y[U][R],S=y[U+1][R],k=y[U+1][R+1],B=y[U][R+1];e>0&&(h.push(x,S,B),E+=3),t>0&&(h.push(S,k,B),E+=3)}c.addGroup(f,E,0),f+=E}function _(M){const b=g,E=new ae,C=new T;let R=0;const U=M===!0?e:t,x=M===!0?1:-1;for(let k=1;k<=r;k++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const S=g;for(let k=0;k<=r;k++){const O=k/r*l+a,X=Math.cos(O),H=Math.sin(O);C.x=U*H,C.y=m*x,C.z=U*X,u.push(C.x,C.y,C.z),d.push(0,x,0),E.x=X*.5+.5,E.y=H*.5*x+.5,p.push(E.x,E.y),g++}for(let k=0;k<r;k++){const B=b+k,O=S+k;M===!0?h.push(O,O+1,B):h.push(O+1,O,B),R+=3}c.addGroup(f,R,M===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends Qn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Pa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bp extends Lt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/r,p=new T,g=new ae;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<r;y++){const m=y*(i+1);for(let f=0;f<i;f++){const v=f+m,_=v,M=v+i+1,b=v+i+2,E=v+1;a.push(_,M,E),a.push(M,b,E)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ao extends Lt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new T,d=new T,p=[],g=[],y=[],m=[];for(let f=0;f<=i;f++){const v=[],_=f/i;let M=0;f===0&&o===0?M=.5/t:f===i&&l===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){const E=b/t;u.x=-e*Math.cos(r+E*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(r+E*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(E+M,1-_),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const _=h[f][v+1],M=h[f][v],b=h[f+1][v],E=h[f+1][v+1];(f!==0||o>0)&&p.push(_,M,E),(f!==i-1||l<Math.PI)&&p.push(M,b,E)}this.setIndex(p),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(y,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cp extends Lt{constructor(e=new w_(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new ae;let h=new T;const u=[],d=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2));function y(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),v(),f()}function m(_){h=e.getPointAt(_/t,h);const M=o.normals[_],b=o.binormals[_];for(let E=0;E<=r;E++){const C=E/r*Math.PI*2,R=Math.sin(C),U=-Math.cos(C);l.x=U*M.x+R*b.x,l.y=U*M.y+R*b.y,l.z=U*M.z+R*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=t;_++)for(let M=1;M<=r;M++){const b=(r+1)*(_-1)+(M-1),E=(r+1)*_+(M-1),C=(r+1)*_+M,R=(r+1)*(_-1)+M;g.push(b,E,R),g.push(E,C,R)}}function v(){for(let _=0;_<=t;_++)for(let M=0;M<=r;M++)c.x=_/t,c.y=M/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Cp(new rf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class tC extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gi extends ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e_,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nC extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const K0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class iC{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const rC=new iC;class Ap{constructor(e){this.manager=e!==void 0?e:rC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ap.DEFAULT_MATERIAL_NAME="__DEFAULT";class sC extends Ap{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=K0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Aa("img");function l(){h(),K0.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class oC extends Ap{constructor(e){super(e)}load(e,t,i,r){const s=new Kt,o=new sC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Rp extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class aC extends Rp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const uh=new rt,Z0=new T,J0=new T;class T_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yp,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Z0.setFromMatrixPosition(e.matrixWorld),t.position.copy(Z0),J0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(J0),t.updateMatrixWorld(),uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Q0=new rt,zo=new T,hh=new T;class lC extends T_{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(zo),hh.copy(i.position),hh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(hh),i.updateMatrixWorld(),r.makeTranslation(-zo.x,-zo.y,-zo.z),Q0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Q0)}}class b_ extends Rp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cC extends T_{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uC extends Rp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new cC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class C_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eg(){return performance.now()}const tg=new rt;class ng{constructor(e,t,i=0,r=1/0){this.ray=new gp(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tg),this}intersectObject(e,t=!0,i=[]){return sf(e,this,i,t),i.sort(ig),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sf(e[r],this,i,t);return i.sort(ig),i}}function ig(n,e){return n.distance-e.distance}function sf(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)sf(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);const A_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hC=new _p(-1,1,1,-1,0,1);class dC extends Lt{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}}const fC=new dC;class Pp{constructor(e){this._mesh=new Ee(fC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pC extends _o{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ra.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rg extends _o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class mC extends _o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gC{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ae);this._width=i.width,this._height=i.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pC(A_),this.copyPass.material.blending=Ni,this.clock=new C_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rg!==void 0&&(o instanceof rg?i=!0:o instanceof mC&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vC extends _o{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const yC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class lo extends _o{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(s,o,{type:Ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ai(s,o,{type:Ii});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new ai(s,o,{type:Ii});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=yC;this.highPassUniforms=Ra.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=A_;this.copyUniforms=Ra.clone(h.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ea,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new vo,this.fsQuad=new Pp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ae(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=lo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=lo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}lo.BlurDirectionX=new ae(1,0);lo.BlurDirectionY=new ae(0,1);const _C={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class xC extends _o{constructor(){super();const e=_C;this.uniforms=Ra.clone(e.uniforms),this.material=new tC({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===By?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===op?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vy?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gy&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class MC extends v_{constructor(){super();const e=new vi;e.deleteAttribute("uv");const t=new gi({side:dn}),i=new gi,r=new b_(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ee(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Ee(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ee(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Ee(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ee(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Ee(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ee(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ee(e,ws(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new Ee(e,ws(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Ee(e,ws(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const y=new Ee(e,ws(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const m=new Ee(e,ws(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new Ee(e,ws(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ws(n){const e=new vo;return e.color.setScalar(n),e}const of=[{name:"Siêu nhỏ",gallons:5,blurb:"Bể trên bàn cho cá Betta hoặc một đàn tép"},{name:"Nhỏ",gallons:20,blurb:"Bể cộng đồng dễ bắt đầu"},{name:"Vừa",gallons:40,blurb:"Đủ chỗ cho cá bơi theo đàn"},{name:"Lớn",gallons:75,blurb:"Cho đàn cá lớn hoặc bể rạn san hô"},{name:"Rất lớn",gallons:120,blurb:"Bể trưng bày rộng cho cá biển"}],af=5,R_=180;function Zc(n){const e=n*.003785,t=Math.min(1,(n-af)/(R_-af)),i=1.6+t*1.4,r=.85+t*.25,s=Math.cbrt(e/(i*r)),o={gallons:n,width:i*s,depth:r*s,height:s,capacity:0},a=o.width*o.depth;return o.capacity=Math.round(a*220+n*.45),o}function SC(n){let e=of[0];for(const t of of)Math.abs(t.gallons-n)<Math.abs(e.gallons-n)&&(e=t);return Math.abs(e.gallons-n)<=3?e.name:`${Math.round(n)} gal (tùy chỉnh)`}const Zn={uTime:{value:0},uCausticIntensity:{value:.9},uCausticScale:{value:3.2},uSurfaceY:{value:.5},uWaterColor:{value:new Re("#1a4d66")},uSunTint:{value:new Re("#fff6e0")}},P_=`
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
`,wC=`
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
`;function EC(){He.fog_fragment=`
    #ifdef USE_FOG
      vec3 chan = vec3(1.75, 1.0, 0.68);
      vec3 att = exp(-vFogDepth * fogDensity * chan * 0.5);
      gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, att);
    #endif
  `}function Jc(n,e={}){const{caustics:t=!0,causticStrength:i=1,vertexHook:r="",vertexPars:s="",extraUniforms:o={}}=e,a=`uw|${t?1:0}|${i}|${s}|${r}`;n.customProgramCacheKey=()=>a,n.onBeforeCompile=l=>{Object.assign(l.uniforms,Zn,o),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
${wC}`).replace("vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;",`
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
varying vec3 vCausticWorld;`))},n.needsUpdate=!0}const Pr=(n,e,t)=>Math.max(e,Math.min(t,n));class TC{constructor(){W(this,"elapsed",0);W(this,"waste",.1);W(this,"feeds",0);W(this,"consumed",0);W(this,"grazeEvents",0);W(this,"restEvents",0);W(this,"shelterEvents",0);W(this,"schoolEvents",0);W(this,"info",{water:"freshwater",gallons:30,fish:0,plants:0});W(this,"current",{temperature:25,oxygen:96,cleanliness:94,leftover:0,waste:.1,grazeEvents:0,restEvents:0,shelterEvents:0,schoolEvents:0,consumed:0,elapsed:0})}configure(e){const t={water:e.water,gallons:e.gallons,fish:Object.values(e.fish).reduce((i,r)=>i+Math.max(0,r),0),plants:Object.values(e.flora).reduce((i,r)=>i+Math.max(0,r),0)};(this.info.water!==t.water||Math.abs(this.info.gallons-t.gallons)>1)&&(this.waste=.1),this.info=t}feed(e){this.feeds++,this.waste=Pr(this.waste+(e==="normal"?.0018:.003),0,1)}eat(){this.consumed++,this.waste=Pr(this.waste-.002,0,1)}event(e){e==="graze"?this.grazeEvents++:e==="rest"?this.restEvents++:e==="shelter"?this.shelterEvents++:this.schoolEvents++}clean(){this.waste=Math.min(this.waste,.08)}advance(e,t,i,r){if(!Number.isFinite(e)||e<=0)return;e=Pr(e,0,.1),this.elapsed+=e;const s=this.info.fish/Math.max(8,this.info.gallons),o=this.info.plants,a=t==="natural"?e*(13e-5*s+45e-6*r):0,l=e*(24e-5+Math.min(1e-4,o*8e-6));this.waste=Pr(this.waste+a-l,.02,.5);const c=Math.sin(this.elapsed*.009)*.3,h=this.info.water==="saltwater"?25.3:24.7,u=Pr(h+c+(i-.5)*.55,23.1,27.2),d=Pr(96+Math.min(3,o*.25)-s*2.5-this.waste*13-(1-i)*1.4,78,99),p=Pr(99-this.waste*47-Math.min(5,r*.18),70,99);this.current={temperature:+u.toFixed(1),oxygen:Math.round(d),cleanliness:Math.round(p),leftover:r,waste:+this.waste.toFixed(4),grazeEvents:this.grazeEvents,restEvents:this.restEvents,shelterEvents:this.shelterEvents,schoolEvents:this.schoolEvents,consumed:this.consumed,elapsed:Math.round(this.elapsed)}}snapshot(){return{...this.current}}}function lf(){return window.__NATIVE_IOS__===!0}function L_(n){const e=window.webkit?.messageHandlers?.native;return e?(e.postMessage(n),!0):!1}function bC(n){return L_({type:"share",url:n})}function CC(n){return L_({type:"saveImage",dataUrl:n})}function AC(){window.__AQUARIUM_READY__=!0}const Oo={low:{tier:"low",pixelRatioCap:1,bloom:!1,godRayCount:0,snowCount:120,bubbleCount:40,maxFish:60,causticStrength:.8,antialias:!1},medium:{tier:"medium",pixelRatioCap:1.25,bloom:!1,godRayCount:5,snowCount:300,bubbleCount:80,maxFish:120,causticStrength:1,antialias:!0},high:{tier:"high",pixelRatioCap:1.75,bloom:!0,godRayCount:9,snowCount:700,bubbleCount:140,maxFish:220,causticStrength:1,antialias:!0},ultra:{tier:"ultra",pixelRatioCap:2,bloom:!0,godRayCount:14,snowCount:1400,bubbleCount:220,maxFish:400,causticStrength:1.1,antialias:!0}};function sg(n){try{const e=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),t=navigator.hardwareConcurrency??4;let i="";if(n){const r=n.getContext(),s=r.getExtension("WEBGL_debug_renderer_info");s&&(i=String(r.getParameter(s.UNMASKED_RENDERER_WEBGL)).toLowerCase())}return e?/apple/.test(i)?"medium":"low":/(rtx|radeon rx|apple m[1-9])/i.test(i)?t>=8?"ultra":"high":/(intel|uhd|iris)/.test(i)?"medium":t>=8?"high":"medium"}catch{return"medium"}}const og=new T;class RC{constructor(e,t){W(this,"camera");W(this,"mode","orbit");W(this,"reducedMotion",!1);W(this,"theta",0);W(this,"phi",Math.PI/2.2);W(this,"radius",1.4);W(this,"tTheta",0);W(this,"tPhi",Math.PI/2.2);W(this,"tRadius",1.4);W(this,"lookAt",new T);W(this,"tLookAt",new T);W(this,"dragging",!1);W(this,"lastX",0);W(this,"lastY",0);W(this,"idleTime",0);W(this,"pinchDist",0);W(this,"minR",.4);W(this,"maxR",4);W(this,"cineT",0);W(this,"followTarget",null);W(this,"lastPointerTravel",0);W(this,"onDown",e=>{e.button===0&&(this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY,this.lastPointerTravel=0,this.idleTime=0)});W(this,"onMove",e=>{if(!this.dragging)return;const t=e.clientX-this.lastX,i=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.lastPointerTravel+=Math.abs(t)+Math.abs(i),this.mode!=="still"&&(this.tTheta-=t*.005,this.tPhi=le.clamp(this.tPhi-i*.004,.9,2),(this.mode==="cinematic"||this.mode==="follow")&&(this.mode="orbit"),this.idleTime=0)});W(this,"onUp",()=>{this.dragging=!1});W(this,"onWheel",e=>{e.preventDefault(),this.tRadius=le.clamp(this.tRadius*(1+Math.sign(e.deltaY)*.09),this.minR,this.maxR),this.idleTime=0});W(this,"onTouchStart",e=>{e.touches.length===2&&(this.pinchDist=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY))});W(this,"onTouchMove",e=>{if(e.touches.length===2){e.preventDefault();const t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);this.pinchDist>0&&(this.tRadius=le.clamp(this.tRadius*(this.pinchDist/t),this.minR,this.maxR)),this.pinchDist=t}});this.dom=e,this.camera=new Rn(46,t,.01,60),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("touchstart",this.onTouchStart,{passive:!0}),e.addEventListener("touchmove",this.onTouchMove,{passive:!1})}dispose(){this.dom.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),this.dom.removeEventListener("wheel",this.onWheel),this.dom.removeEventListener("touchstart",this.onTouchStart),this.dom.removeEventListener("touchmove",this.onTouchMove)}frameTank(e,t,i){this.tLookAt.set(0,i,0),this.lookAt.copy(this.tLookAt),this.tRadius=Math.max(.5,e*2.6),this.radius=this.tRadius*1.05,this.minR=Math.max(.18,e*.5),this.maxR=e*6+1,this.tTheta=this.theta=0,this.tPhi=this.phi=Math.PI/2.14}setMode(e){this.mode=e,this.cineT=0}update(e){const t=(s,o,a)=>le.damp(s,o,a,e);this.idleTime+=e;const i=this.reducedMotion?.3:1;if(this.mode==="cinematic"?(this.cineT+=e*.05*i,this.tTheta=Math.sin(this.cineT)*.55,this.tPhi=Math.PI/2.15+Math.sin(this.cineT*.7)*.1,this.tRadius=le.clamp(this.tRadius,this.minR,this.maxR),this.tRadius+=Math.sin(this.cineT*.43)*e*.02):this.mode==="orbit"&&this.idleTime>14&&!this.dragging&&(this.tTheta+=e*.012*i),this.mode==="follow"&&this.followTarget){const s=this.followTarget();s&&(this.tLookAt.copy(s),this.tRadius=le.clamp(this.tRadius,this.minR,this.maxR*.4))}this.theta=t(this.theta,this.tTheta,3),this.phi=t(this.phi,this.tPhi,3),this.radius=t(this.radius,this.tRadius,3),this.lookAt.x=t(this.lookAt.x,this.tLookAt.x,2.5),this.lookAt.y=t(this.lookAt.y,this.tLookAt.y,2.5),this.lookAt.z=t(this.lookAt.z,this.tLookAt.z,2.5);const r=Math.sin(this.phi);this.camera.position.set(this.lookAt.x+this.radius*r*Math.sin(this.theta),this.lookAt.y+this.radius*Math.cos(this.phi),this.lookAt.z+this.radius*r*Math.cos(this.theta)),og.copy(this.lookAt),this.camera.lookAt(og)}releaseFollow(e){this.tLookAt.set(0,e,0),this.followTarget=null}lockFrontView(e,t,i,r,s=1,o=1.04){const a=Math.tan(le.degToRad(this.camera.fov/2)),l=Math.min(t/a,e/(a*this.camera.aspect))/o,c=le.lerp(i,-i,le.clamp(s,0,1)),h=Math.max(l+c,i*1.06);this.mode="still",this.tLookAt.set(0,r,0),this.lookAt.copy(this.tLookAt),this.tTheta=this.theta=0,this.tPhi=this.phi=Math.PI/2,this.minR=Math.min(this.minR,h),this.tRadius=this.radius=h}}const dh=new T;class PC{constructor(){W(this,"jetOrigin",new T);W(this,"jetDir",new T(1,-.15,.2).normalize());W(this,"jetStrength",.16);W(this,"ambient",.02);W(this,"time",0)}setup(e,t,i){this.jetOrigin.set(-e*.46,t*.82,-i*.3),this.jetDir.set(1,-.18,.35).normalize(),this.jetStrength=.1+e*.06}sample(e,t){dh.copy(e).sub(this.jetOrigin);const i=dh.dot(this.jetDir);if(t.set(0,0,0),i>0){const s=Math.sqrt(Math.max(0,dh.lengthSq()-i*i)),o=.08+i*.45,a=Math.exp(-i*1.6),l=Math.exp(-(s*s)/(o*o));t.copy(this.jetDir).multiplyScalar(this.jetStrength*a*l)}const r=this.time*.3;return t.x+=Math.sin(e.y*3.1+r+e.z*2)*this.ambient,t.y+=Math.sin(e.x*2.3+r*1.3)*this.ambient*.35,t.z+=Math.cos(e.x*2.7-r+e.y*1.7)*this.ambient,t}}function Zr(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");if(!i)throw new Error("2D canvas unavailable — cannot generate textures");return[t,i]}function Lp(n,e=1){const t=new za(n);return t.wrapS=t.wrapT=Ta,t.repeat.set(e,e),t.colorSpace=un,t.anisotropy=4,t}const Pe=(n,e)=>n+Math.random()*(e-n);function LC(n){const[e,t]=Zr(512,512),[i,r]=Zr(512,512),o={sand:{bg:"#c8b48c",grains:["#d8c49c","#b8a47c","#e0d0ac","#a89468","#d0bc94"],grainSize:[.6,1.8],count:26e3},blacksand:{bg:"#26262a",grains:["#3a3a40","#1a1a1e","#4a4a52","#2e2e34","#565660"],grainSize:[.6,1.8],count:26e3},gravel:{bg:"#8a7a66",grains:["#a89880","#6a5c4c","#b0a088","#7c6e5c","#948470","#5c5044"],grainSize:[3,9],count:3200},crushedcoral:{bg:"#ddd6c8",grains:["#f0eadc","#c8c0b0","#e8d8c8","#f4f0e4","#d0c4ae","#e8c8c0"],grainSize:[2,6],count:5200}}[n];t.fillStyle=o.bg,t.fillRect(0,0,512,512),r.fillStyle="#808080",r.fillRect(0,0,512,512);for(let l=0;l<o.count;l++){const c=Math.random()*512,h=Math.random()*512,u=Pe(o.grainSize[0],o.grainSize[1]);t.fillStyle=o.grains[Math.floor(Math.random()*o.grains.length)],t.beginPath(),t.ellipse(c,h,u,u*Pe(.7,1),Pe(0,Math.PI),0,Math.PI*2),t.fill();const d=Math.floor(Pe(120,200));r.fillStyle=`rgb(${d},${d},${d})`,r.beginPath(),r.arc(c-u*.2,h-u*.2,u*.8,0,Math.PI*2),r.fill();const p=Math.floor(Pe(40,90));r.fillStyle=`rgb(${p},${p},${p})`,r.beginPath(),r.arc(c+u*.25,h+u*.25,u*.55,0,Math.PI*2),r.fill()}const a=new za(i);return a.wrapS=a.wrapT=Ta,a.repeat.set(3,3),{map:Lp(e,3),bumpMap:a,color:o.bg}}function DC(n,e){const[t,i]=Zr(1024,512),r=i.createLinearGradient(0,0,0,512),s=(a,l,c)=>{i.save(),i.filter=`blur(${l}px)`,i.fillStyle=a,c(),i.restore()};switch(n){case"black":i.fillStyle="#050608",i.fillRect(0,0,1024,512);break;case"deepblue":r.addColorStop(0,"#0a2c4a"),r.addColorStop(1,"#04121f"),i.fillStyle=r,i.fillRect(0,0,1024,512);break;case"natural":{r.addColorStop(0,e==="saltwater"?"#1a5a7a":"#3a6a5a"),r.addColorStop(1,e==="saltwater"?"#0a2a3e":"#16302a"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let a=0;a<7;a++)s(`rgba(10,25,25,${Pe(.25,.5)})`,18,()=>{i.beginPath(),i.ellipse(Pe(0,1024),512-Pe(0,60),Pe(80,220),Pe(60,160),0,Math.PI,0),i.fill()});break}case"planted":{r.addColorStop(0,"#2e5a3a"),r.addColorStop(1,"#122616"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let a=0;a<40;a++){const l=Pe(0,1024),c=Pe(8,26),h=Pe(160,420);s(`rgba(${Math.floor(Pe(10,40))},${Math.floor(Pe(50,95))},${Math.floor(Pe(15,45))},${Pe(.3,.65)})`,10,()=>{i.beginPath(),i.ellipse(l,512-h/2,c,h/2,Pe(-.12,.12),0,Math.PI*2),i.fill()})}break}case"reef":{r.addColorStop(0,"#2a7ab0"),r.addColorStop(1,"#0a2440"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let a=0;a<10;a++)s(`rgba(15,30,50,${Pe(.3,.55)})`,14,()=>{const l=Pe(0,1024),c=512-Pe(0,40);i.beginPath(),i.ellipse(l,c,Pe(60,160),Pe(70,200),0,Math.PI,0),i.fill();for(let h=0;h<5;h++)i.fillRect(l+Pe(-60,60),c-Pe(120,240),Pe(6,14),Pe(60,140))});break}}const o=new za(t);return o.colorSpace=un,o}function NC(n,e){const[r,s]=Zr(256,128),o=s.createLinearGradient(0,128,0,0);o.addColorStop(0,n.belly),o.addColorStop(.45,n.base),o.addColorStop(1,n.back),s.fillStyle=o,s.fillRect(0,0,256,128),s.globalAlpha=.06,s.strokeStyle="#ffffff";for(let c=8;c<128;c+=7)for(let h=0;h<256;h+=9)s.beginPath(),s.arc(h+(c%14>7?4.5:0),c,4,Math.PI*.15,Math.PI*.85),s.stroke();s.globalAlpha=1;const a=n.patternParams??[];switch(n.pattern){case"hstripe":{const c=a[0]??1;for(let h=0;h<c;h++){const u=128*(.38+h*.18),d=s.createLinearGradient(0,u-9,0,u+9);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.5,n.patternColor),d.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=d,s.fillRect(0,u-9,256,18)}if(n.patternColor2&&c===1){const u=s.createLinearGradient(0,69.36,0,89.36);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,n.patternColor2),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect(256*(n.patternColor2===n.base?0:.35),79.36-10,256,20)}break}case"vbars":{const c=a[0]??4,h=a[1]??.7;for(let u=0;u<c;u++){const d=256*((u+.75)/(c+1)),p=256/(c+1)*.42*h,g=s.createLinearGradient(d-p,0,d+p,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.5,n.patternColor),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(d-p,0,p*2,128),n.patternColor2&&(s.strokeStyle=n.patternColor2,s.lineWidth=2.5,s.strokeRect(d-p*.55,-2,p*1.1,132))}break}case"spots":{const c=n.patternColor,h=n.patternColor2??n.patternColor;for(let u=0;u<26;u++)s.fillStyle=Math.random()<.5?c:h,s.globalAlpha=Pe(.35,.8),s.beginPath(),s.arc(Pe(256*.2,256),Pe(0,128),Pe(2,7),0,Math.PI*2),s.fill();s.globalAlpha=1;break}case"headpatch":{const c=a[0]??.3,h=a[1]??0,u=0,d=256*c,p=s.createLinearGradient(h>=0?u:256,0,h>=0?d:256-d,0);if(p.addColorStop(0,h===1?n.patternColor2??n.patternColor:n.patternColor),p.addColorStop(1,"rgba(0,0,0,0)"),h===1){const g=s.createLinearGradient(256*c,0,256,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.5,n.patternColor2??"#f2c80a"),s.fillStyle=g,s.fillRect(256*c,0,256,128)}else if(h===-1){const g=s.createLinearGradient(102.4,0,256,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,n.patternColor2??"#d82a10"),s.fillStyle=g,s.fillRect(0,0,256,128)}else if(s.fillStyle=p,s.fillRect(0,0,d,128),n.patternColor2&&n.patternColor2!=="#00000000")for(let g=0;g<3;g++)s.fillStyle=n.patternColor2,s.fillRect(256*(.86+g*.05),0,256*.024,128);break}case"lateralline":{const c=256*(a[0]??.45);s.fillStyle=n.patternColor,s.beginPath(),s.moveTo(c,128*.28),s.lineTo(256,128*.42),s.lineTo(256,128*.58),s.lineTo(c,128*.52),s.closePath(),s.fill();break}case"mottle":{for(let c=0;c<90;c++)s.fillStyle=n.patternColor,s.globalAlpha=Pe(.15,.45),s.beginPath(),s.ellipse(Pe(0,256),Pe(0,128),Pe(4,16),Pe(3,9),Pe(0,Math.PI),0,Math.PI*2),s.fill();s.globalAlpha=1;break}}s.strokeStyle="rgba(0,0,0,0.18)",s.lineWidth=3,s.beginPath(),s.arc(256*.16,128*.5,128*.32,-.9,.9),s.stroke();const l=new za(r);return l.colorSpace=un,l.wrapS=l.wrapT=or,l}function ag(n,e,t=!1){const[i,r]=Zr(64,64),s=r.createRadialGradient(32,32,2,32,32,30);return t?(s.addColorStop(0,"rgba(255,255,255,0.05)"),s.addColorStop(.72,"rgba(255,255,255,0.10)"),s.addColorStop(.88,n),s.addColorStop(1,"rgba(255,255,255,0)")):(s.addColorStop(0,n),s.addColorStop(1,e)),r.fillStyle=s,r.fillRect(0,0,64,64),t&&(r.fillStyle="rgba(255,255,255,0.85)",r.beginPath(),r.ellipse(24,22,5,3.4,-.6,0,Math.PI*2),r.fill()),new za(i)}function Es(){const[n,e]=Zr(256,256);e.fillStyle="#4a3826",e.fillRect(0,0,256,256);for(let t=0;t<60;t++){e.strokeStyle=`rgba(${Math.floor(Pe(30,90))},${Math.floor(Pe(22,60))},${Math.floor(Pe(12,38))},${Pe(.3,.7)})`,e.lineWidth=Pe(1,4),e.beginPath();const i=Pe(0,256);e.moveTo(0,i);for(let r=0;r<=256;r+=32)e.lineTo(r,i+Math.sin(r*.05+t)*Pe(2,9));e.stroke()}return Lp(n,2)}function Bo(n="#6a6a66"){const[e,t]=Zr(256,256);t.fillStyle=n,t.fillRect(0,0,256,256);for(let i=0;i<2200;i++){const r=Math.floor(Pe(-28,28));t.fillStyle=`rgba(${128+r},${128+r},${124+r},${Pe(.08,.3)})`,t.beginPath(),t.arc(Pe(0,256),Pe(0,256),Pe(1,7),0,Math.PI*2),t.fill()}return Lp(e,2)}const lg={daylight:{sun:"#fff2dc",sunNight:"#5f7fb8",sunIntensity:2.6,hemi:"#a8d4e8",hemiIntensity:.55,fog:{fw:"#173f43",sw:"#0e3a55"},fogDensity:1,caustic:1,rayColor:"#cfe8ff"},warm:{sun:"#ffd9a8",sunNight:"#5f7fb8",sunIntensity:2.3,hemi:"#e0c8a0",hemiIntensity:.5,fog:{fw:"#2a3a2c",sw:"#1a3a48"},fogDensity:1.05,caustic:.9,rayColor:"#ffe8c0"},actinic:{sun:"#9cc4ff",sunNight:"#4a66a8",sunIntensity:2.4,hemi:"#6a9ae0",hemiIntensity:.6,fog:{fw:"#0e3050",sw:"#0a2c50"},fogDensity:.95,caustic:.85,rayColor:"#a8ccff"},blackwater:{sun:"#f0bf78",sunNight:"#54689a",sunIntensity:1.7,hemi:"#8a7a50",hemiIntensity:.35,fog:{fw:"#2e2410",sw:"#1a3040"},fogDensity:1.7,caustic:.55,rayColor:"#e8c890"}},IC=`
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  void main() {
    vUv = uv;
    vec3 p = position;
    // Gentle long swell so the surface line itself moves a little.
    p.z += sin(p.x * 11.0 + uTime * 0.83) * 0.0018 + cos(p.y * 9.0 - uTime * 0.57) * 0.0013;
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorld = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,UC=`
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSky;
  uniform float uBright;
  ${P_}
  void main() {
    // Procedural wave normal from two scrolling noise layers.
    vec2 p = vWorld.xz * 18.0;
    float e = 0.09;
    float h  = fbm(p + vec2(uTime * 0.19, uTime * 0.14));
    float hx = fbm(p + vec2(e, 0.0) + vec2(uTime * 0.19, uTime * 0.14));
    float hz = fbm(p + vec2(0.0, e) + vec2(uTime * 0.19, uTime * 0.14));
    vec3 n = normalize(vec3((h - hx) / e * 0.35, 1.0, (h - hz) / e * 0.35));

    vec3 viewDir = normalize(cameraPosition - vWorld);
    // From below, steep angles mirror the water (total internal reflection):
    // darker + deeper; near-vertical shows the bright sky (Snell's window).
    float facing = clamp(abs(dot(viewDir,n)),0.0,1.0);
    float fresnel = .02 + .98*pow(1.0-facing,5.0);
    vec3 col = mix(uSky, uDeep, fresnel);
    // Sparkling glints where wave slopes catch the light.
    float glint = pow(clamp(n.x * 0.6 + n.z * 0.6 + h * 0.7, 0.0, 1.0), 8.0);
    col += vec3(1.0, 0.98, 0.9) * glint * 0.18;
    gl_FragColor = vec4(col * uBright, 0.76);
  }
`,FC=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,kC=`
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;
  uniform float uSeed;
  uniform vec3 uColor;
  ${P_}
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
`,cg=`
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
`,ug=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    gl_FragColor = vec4(tex.rgb, tex.a * uOpacity * vFade);
  }
`;class zC{constructor(e){W(this,"group",new ri);W(this,"sun");W(this,"hemi");W(this,"fill");W(this,"fog");W(this,"surface",null);W(this,"surfaceUniforms",null);W(this,"rays",[]);W(this,"snow",null);W(this,"bubbles",null);W(this,"bubbleUniforms",null);W(this,"disposables",[]);W(this,"mood",lg.daylight);W(this,"water","freshwater");W(this,"snowTex");W(this,"bubbleTex");this.scene=e,e.add(this.group),this.sun=new uC("#fff2dc",2.6),this.sun.position.set(.4,2.5,.6),this.hemi=new aC("#a8d4e8","#3a3428",.55),this.fill=new b_("#88b8d8",.35,0,2),this.scene.add(this.sun,this.hemi,this.fill),this.fog=new Mp("#173f43",.9),e.fog=this.fog,this.snowTex=ag("rgba(255,255,255,0.75)","rgba(255,255,255,0)"),this.bubbleTex=ag("rgba(220,240,255,0.9)","rgba(255,255,255,0)",!0)}rebuild(e,t,i,r,s,o,a){this.group.clear();for(const p of this.disposables)p.dispose();this.disposables=[],this.rays=[],this.mood=lg[s],this.water=t;const{halfW:l,halfD:c,height:h,floorY:u,surfaceY:d}=e;this.fill.position.set(0,d+.3,c*2),this.fog.density=this.mood.fogDensity*.3/Math.max(.35,l);{const p=LC(i),g=48,y=new ni(l*2,c*2,g,Math.round(g*(c/l)));y.rotateX(-Math.PI/2);const m=y.getAttribute("position");for(let _=0;_<m.count;_++){const M=m.getX(_),b=m.getZ(_);m.setY(_,Math.sin(M*9+2)*Math.cos(b*7)*.008+Math.sin(M*3.2)*.012)}y.computeVertexNormals();const f=new gi({map:p.map,bumpMap:p.bumpMap,bumpScale:.13,roughness:.91});Jc(f,{caustics:!0,causticStrength:1.9});const v=new Ee(y,f);v.position.y=u,this.group.add(v),this.disposables.push(y,f,p.map,p.bumpMap)}{const p=DC(r,t),g=new vo({map:p,fog:!0}),y=new Ee(new ni(l*2.06,h*1.15),g);y.position.set(0,u+h*.52,-c-.02),this.group.add(y),this.disposables.push(g,p,y.geometry)}{this.surfaceUniforms={uTime:Zn.uTime,uDeep:{value:new Re(this.mood.fog[t==="saltwater"?"sw":"fw"])},uSky:{value:new Re("#bfe4f8")},uBright:{value:1}};const p=new Ut({vertexShader:IC,fragmentShader:UC,uniforms:this.surfaceUniforms,transparent:!0,side:jt,depthWrite:!1});this.surface=new Ee(new ni(l*2,c*2,24,24),p),this.surface.rotation.x=-Math.PI/2,this.surface.position.y=d,this.surface.renderOrder=5,this.group.add(this.surface),this.disposables.push(p,this.surface.geometry)}{const p=new nC({color:"#cfe8ee",transparent:!0,opacity:.048,roughness:.04,metalness:0,envMapIntensity:1.2,side:jt,depthWrite:!1}),g=[[l*2,h*1.06,[0,u+h*.53,c],[0,0,0]],[l*2,h*1.06,[0,u+h*.53,-c],[0,Math.PI,0]],[c*2,h*1.06,[-l,u+h*.53,0],[0,Math.PI/2,0]],[c*2,h*1.06,[l,u+h*.53,0],[0,-Math.PI/2,0]]];for(const[b,E,C,R]of g){const U=new Ee(new ni(b,E),p);U.position.set(...C),U.rotation.set(...R),U.renderOrder=6,this.group.add(U),this.disposables.push(U.geometry)}this.disposables.push(p);const y=new gi({color:"#101418",roughness:.6}),m=Math.max(.006,l*.012),f=(b,E,C,R,U,x)=>{const S=new Ee(new vi(b,E,C),y);S.position.set(R,U,x),this.group.add(S),this.disposables.push(S.geometry)},v=u+h*.53,_=h*1.06;for(const[b,E]of[[-l,-c],[l,-c],[-l,c],[l,c]])f(m,_,m,b,v,E);for(const b of[u-.002,u+h*1.06-.004])f(l*2+m,m,m,0,b,c),f(l*2+m,m,m,0,b,-c),f(m,m,c*2+m,-l,b,0),f(m,m,c*2+m,l,b,0);this.disposables.push(y);const M=new Ee(new vi(l*2+.1,.05,c*2+.1),new gi({color:"#0a0c10",roughness:.4}));M.position.y=u-.045,this.group.add(M),this.disposables.push(M.geometry,M.material)}for(let p=0;p<o.godRayCount;p++){const g=.1+Math.random()*l*.5,y={uTime:Zn.uTime,uIntensity:{value:.3+Math.random()*.15},uSeed:{value:Math.random()},uColor:{value:new Re(this.mood.rayColor)}},m=new Ut({vertexShader:FC,fragmentShader:kC,uniforms:y,transparent:!0,blending:Ea,depthWrite:!1,side:jt}),f=new Ee(new ni(g,h*1.05),m);f.position.set((Math.random()-.5)*l*1.8,u+h*.52,(Math.random()-.5)*c*1.6),f.rotation.z=(Math.random()-.5)*.14,f.renderOrder=4,f.userData.driftSeed=Math.random()*100,this.rays.push(f),this.group.add(f),this.disposables.push(m,f.geometry)}if(o.snowCount>0){const p=o.snowCount,g=new Float32Array(p*3),y=new Float32Array(p);for(let v=0;v<p;v++)g[v*3]=(Math.random()-.5)*l*1.9,g[v*3+1]=Math.random()*h,g[v*3+2]=(Math.random()-.5)*c*1.9,y[v]=Math.random();const m=new Lt;m.setAttribute("position",new rn(g,3)),m.setAttribute("aSeed",new rn(y,1));const f=new Ut({vertexShader:cg,fragmentShader:ug,uniforms:{uTime:Zn.uTime,uBounds:{value:new T(l,h,c)},uRise:{value:-.006},uSize:{value:1.6},uWobble:{value:.02},uMap:{value:this.snowTex},uOpacity:{value:.35}},transparent:!0,depthWrite:!1});this.snow=new Y0(m,f),this.snow.position.y=u,this.snow.frustumCulled=!1,this.group.add(this.snow),this.disposables.push(m,f)}if(a&&o.bubbleCount>0){const p=o.bubbleCount,g=new Float32Array(p*3),y=new Float32Array(p);for(let v=0;v<p;v++)g[v*3]=a.x+(Math.random()-.5)*.02,g[v*3+1]=Math.random()*h,g[v*3+2]=a.z+(Math.random()-.5)*.02,y[v]=Math.random();const m=new Lt;m.setAttribute("position",new rn(g,3)),m.setAttribute("aSeed",new rn(y,1)),this.bubbleUniforms={uTime:Zn.uTime,uBounds:{value:new T(l,h*.98,c)},uRise:{value:.22},uSize:{value:2.4},uWobble:{value:.012},uMap:{value:this.bubbleTex},uOpacity:{value:.85}};const f=new Ut({vertexShader:cg,fragmentShader:ug,uniforms:this.bubbleUniforms,transparent:!0,depthWrite:!1,blending:Ea});this.bubbles=new Y0(m,f),this.bubbles.position.y=u,this.bubbles.frustumCulled=!1,this.group.add(this.bubbles),this.disposables.push(m,f)}else this.bubbles=null}update(e,t){const i=this.mood,r=new Re(i.sun).lerp(new Re(i.sunNight),1-e);this.sun.color.copy(r),this.sun.intensity=le.lerp(.18,i.sunIntensity,e),this.hemi.color.set(i.hemi),this.hemi.intensity=le.lerp(.06,i.hemiIntensity,e),this.fill.intensity=le.lerp(.06,.35,e),Zn.uCausticIntensity.value=i.caustic*le.lerp(.12,1,e),Zn.uSunTint.value.copy(r);const s=new Re(i.fog[this.water==="saltwater"?"sw":"fw"]);s.multiplyScalar(le.lerp(.18,1,e)),this.fog.color.copy(s),this.surfaceUniforms&&(this.surfaceUniforms.uBright.value=le.lerp(.12,1,e),this.surfaceUniforms.uBright.value=le.lerp(.12,1,e),this.surfaceUniforms.uDeep.value.copy(s));const o=Zn.uTime.value;for(const a of this.rays){const l=a.userData.driftSeed;a.position.x+=Math.sin(o*.05+l)*4e-4,a.rotation.y=Math.atan2(t.position.x-a.position.x,t.position.z-a.position.z);const c=a.material;c.uniforms.uIntensity.value=(.3+.14*Math.sin(l*40))*e*e}}}function Dl(n,e,t=1){const i=n.getAttribute("position"),r=new T;for(let s=0;s<i.count;s++){r.set(i.getX(s),i.getY(s),i.getZ(s));const o=Math.sin(r.x*12.3*t+r.y*7.7)*Math.cos(r.z*9.1-r.y*5.3)*.5+Math.sin(r.x*27.1+r.z*19.7)*.25;r.multiplyScalar(1+o*e),i.setXYZ(s,r.x,r.y,r.z)}return n.computeVertexNormals(),n}function OC(n,e,t){const o=[],a=[],l=[],c=[],h=(m,f)=>n*(1-.065*m)*(1+.075*Math.sin(f*5+t*3+m*5)+.038*Math.cos(f*9-t*2+m*3)),u=(m,f)=>n*.59*(1+.025*Math.sin(f*7+m*5+t)),d=(m,f)=>(m-.5)*e+.003*n*Math.sin(f*5+t+m*7),p=(m,f,v,_,M)=>(o.push(m*Math.cos(v),f,m*Math.sin(v)),a.push(_,M),o.length/3-1);for(const m of[!1,!0]){const f=l.length,v=o.length/3;for(let _=0;_<=8;_++){const M=_/8;for(let b=0;b<=32;b++){const E=b/32*Math.PI*2;p(m?u(M,E):h(M,E),d(M,E),E,b/32,M)}}for(let _=0;_<8;_++)for(let M=0;M<32;M++){const b=v+_*33+M,E=b+33;m?l.push(b,b+1,E,E,b+1,E+1):l.push(b,E,b+1,E,E+1,b+1)}c.push({start:f,count:l.length-f,material:m?1:0})}const g=l.length;for(const m of[0,1]){const f=o.length/3;for(let v=0;v<=32;v++){const _=v/32*Math.PI*2,M=d(m,_);p(h(m,_),M,_,v/32,1),p(u(m,_),M,_,v/32,0)}for(let v=0;v<32;v++){const _=f+v*2;m===1?l.push(_,_+2,_+1,_+2,_+3,_+1):l.push(_,_+1,_+2,_+2,_+1,_+3)}}c.push({start:g,count:l.length-g,material:0});const y=new Lt;y.setAttribute("position",new ze(o,3)),y.setAttribute("uv",new ze(a,2)),y.setIndex(l),y.computeVertexNormals();for(const m of c)y.addGroup(m.start,m.count,m.material);return y.userData.hollowBark={radial:32,longitudinal:8,innerFraction:.59,fullCircle:!0,cutFaces:2,outerWall:!0,innerWall:!0},y}function Ki(n,e,t,i,r=!1){const s=new Cp(n,e,t,i,r);if(r)return s;const o=Array.from(s.getAttribute("position").array),a=Array.from(s.getAttribute("uv").array),l=Array.from(s.getIndex().array),c=o.length/3,h=n.getPoint(0),u=n.getPoint(1);o.push(h.x,h.y,h.z,u.x,u.y,u.z),a.push(.5,.5,.5,.5);const d=e*(i+1);for(let p=0;p<i;p++)l.push(c,p,p+1),l.push(c+1,d+p+1,d+p);return s.setAttribute("position",new ze(o,3)),s.setAttribute("uv",new ze(a,2)),s.setIndex(l),s.computeVertexNormals(),s.userData.cappedWoodEnds=2,s}class BC{constructor(e){W(this,"group",new ri);W(this,"materials",[]);e.add(this.group)}getVisualGeometrySnapshot(){const e=[];return this.group.traverse(i=>{i instanceof Ee&&e.push(i)}),{logs:e.filter(i=>i.name.startsWith("hollow-bark-")).map(i=>{const r=i.geometry,s=r.userData.hollowBark,o=r.getAttribute("position"),a=new Set;if(s)for(let l=0;l<s.radial;l++){const c=Math.atan2(o.getZ(l),o.getX(l));a.add(Math.floor((c+Math.PI*2)%(Math.PI*2)/(Math.PI/2))%4)}return{name:i.name,vertices:o.count,triangles:(r.getIndex()?.count??0)/3,sectors:a.size,groups:r.groups.length,fullCircle:!!s?.fullCircle,innerWall:!!s?.innerWall,outerWall:!!s?.outerWall,cutFaces:s?.cutFaces??0,wallFraction:s?1-s.innerFraction:0}}),cappedBranches:e.filter(i=>i.geometry.userData.cappedWoodEnds===2).length}}mat(e){const t=new gi(e);return Jc(t,{caustics:!0,causticStrength:1}),this.materials.push(t),t}rebuild(e,t){this.group.traverse(l=>{l instanceof Ee&&l.geometry.dispose()}),this.group.clear();for(const l of this.materials)l.dispose();this.materials=[];const i={obstacles:[],shelters:[],tunnels:[],anchors:[],airstone:null},{halfW:r,halfD:s,floorY:o}=t,a=Math.min(1.2,r*1.6);for(const l of e)switch(l){case"driftwood":{const c=this.mat({map:Es(),color:"#a58359",roughness:.92}),h=new bi([new T(-r*.7,o,-s*.2),new T(-r*.3,o+t.height*.35,0),new T(r*.15,o+t.height*.55,s*.25)]),u=new Ee(Ki(h,24,.02*a+.008,9),c);this.group.add(u);for(let p=0;p<4;p++){const g=.17+p*.2,y=h.getPoint(g),m=p%2===0?-1:1,f=new bi([y,y.clone().add(new T(m*r*.075,t.height*(.08+.015*p),-m*s*.07)),y.clone().add(new T(m*r*(.14+.03*p),t.height*(.13+.01*p),m*s*.2))]);this.group.add(new Ee(Ki(f,8,.012*a+.004,6),c))}const d=h.getPoint(.5);i.obstacles.push({pos:d,radius:.1*a}),i.shelters.push(new T(-r*.5,o+.02,-s*.1)),i.anchors.push(h.getPoint(.3),h.getPoint(.7));break}case"spider-wood":{const c=this.mat({map:Es(),color:"#6a5236",roughness:.9}),h=r*.35,u=-s*.1,d=new T(h,o+.01,u),p=d.clone().add(new T(.02*a,t.height*.2,.01*a));this.group.add(new Ee(Ki(new bi([d,d.clone().add(new T(0,t.height*.09,0)),p]),8,.014*a+.005,6),c));const g=8;for(let y=0;y<g;y++){const m=y/g*Math.PI*2+.5,f=.12*a+.04,v=(.22+y%3*.06)*t.height,_=new T(h+Math.cos(m)*f,o+v,u+Math.sin(m)*f),M=new T((p.x+_.x)/2+Math.cos(m)*.02,(p.y+_.y)/2,(p.z+_.z)/2+Math.sin(m)*.02);if(this.group.add(new Ee(Ki(new bi([p,M,_]),8,.007*a+.002,5),c)),i.anchors.push(_),y%2===0){const b=new bi([M,M.clone().add(new T(.02,v*.08,-.014)),_.clone().add(new T(-.025,v*.14,.012))]);this.group.add(new Ee(Ki(b,8,.003*a+.0015,5),c))}}i.obstacles.push({pos:p.clone(),radius:.07*a}),i.shelters.push(d.clone().add(new T(0,.02,.03)));break}case"driftwood-stump":{const c=this.mat({map:Es(),color:"#5f4a30",roughness:.92}),h=-r*.35,u=s*.25,d=.06*a+.02,p=.09*a+.03,g=new Ee(Dl(new Qn(d*.85,d,p,10,2),.12,3),c);g.position.set(h,o+p/2,u),this.group.add(g);const y=7;for(let m=0;m<y;m++){const f=m/y*Math.PI*2+.3,v=d+.08*a+.03,_=new T(h+Math.cos(f)*d*.8,o+p*.3,u+Math.sin(f)*d*.8),M=new T(h+Math.cos(f)*v,o+.008,u+Math.sin(f)*v),b=new T((_.x+M.x)/2,o+p*.15,(_.z+M.z)/2);this.group.add(new Ee(Ki(new bi([_,b,M]),8,.01*a+.003,5),c))}i.obstacles.push({pos:g.position.clone(),radius:d*1.3}),i.shelters.push(new T(h,o+.02,u+d+.03)),i.anchors.push(g.position.clone().add(new T(0,p/2,0)));break}case"split-log":case"hollow-log":{const c=l==="split-log",h=Es(),u=this.mat({map:h,color:c?"#8b6945":"#ac8253",roughness:.94,side:jt}),d=this.mat({map:h,color:c?"#423024":"#523e2d",roughness:.98,side:jt}),p=(c?.072:.06)*a+.03,g=(c?.34:.26)*a+.08,y=r*(c?-.06:.1),m=s*(c?-.3:.2),f=OC(p,g,c?3.4:2.2),v=new Ee(f,[u,d]);v.name="hollow-bark-"+l;const _=new T(c?-.72:.66,0,c?.69:.75).normalize();v.quaternion.setFromUnitVectors(new T(0,1,0),_),v.position.set(y,o+p*1.12,m),this.group.add(v);for(const[C,R,U]of[[-.06,.02,.6],[.05,-.03,-.8]]){const x=new Ee(new Qn(.008,.012,.05*a+.02,6),u);x.position.set(y+C*a,o+p*1.2,m+R*a),x.rotation.set(.4,0,U),this.group.add(x)}const M=new T(0,1,0).applyQuaternion(v.quaternion).normalize(),b=p*.83;for(const C of[-.38,0,.38])for(let R=0;R<12;R++){const U=R/12*Math.PI*2,S=new T(b*Math.cos(U),g*C,b*Math.sin(U)).applyQuaternion(v.quaternion).add(v.position);S.y>o+.005&&i.obstacles.push({pos:S,radius:Math.max(.006,p*.24)})}const E=p*.56;i.tunnels.push({id:l,entrance:v.position.clone().addScaledVector(M,-g*.58),middle:v.position.clone(),exit:v.position.clone().addScaledVector(M,g*.58),boreRadius:E,capacity:c?2:1,through:!0}),i.shelters.push(v.position.clone()),i.anchors.push(v.position.clone().add(new T(0,p,0)));break}case"root-bridge":case"log-arch":{const c=l==="root-bridge",h=this.mat({map:Es(),color:c?"#675039":"#6f5232",roughness:.9,side:jt}),u=-r*.2,d=-s*.05,p=.05*a+.022,g=.14*a+.05,y=.1*a+.05,m=s*.05,f=new bi([new T(u-g,o+p*.9,d),new T(u-g*.4,o+y,d+m),new T(u+g*.4,o+y,d-m),new T(u+g,o+p*.9,d)]);if(this.group.add(new Ee(Ki(f,24,c?p*.8:p,12,!1),h)),c)for(let M=0;M<3;M++){const b=new bi([f.getPoint(.12+M*.12),f.getPoint(.35+M*.1).add(new T(0,.012,-.015+M*.012)),f.getPoint(.72+M*.06)]);this.group.add(new Ee(Ki(b,12,p*.16,6,!1),h))}i.obstacles.push({pos:f.getPoint(.06),radius:p*1.1}),i.obstacles.push({pos:f.getPoint(.94),radius:p*1.1});const v=f.getPoint(.5).setY(o+p*.6),_=Math.min(s*.64,Math.max(.045,p*.8));i.tunnels.push({id:l,entrance:v.clone().add(new T(0,0,-_)),middle:v.clone(),exit:v.clone().add(new T(0,0,_)),boreRadius:Math.min(p*.78,Math.max(.008,y-p*.55)),capacity:c?2:1,through:!0}),i.shelters.push(v),i.anchors.push(f.getPoint(.5));break}case"river-rocks":{const c=this.mat({map:Bo("#5e5852"),roughness:.9});for(let h=0;h<5;h++){const u=(.03+Math.random()*.05)*a+.015,d=Dl(new ao(u,10,8),.25,h+2),p=new Ee(d,c);p.position.set(r*(.15+Math.random()*.5),o+u*.55,s*(Math.random()*.8-.5)),p.rotation.set(Math.random(),Math.random()*Math.PI,Math.random()),this.group.add(p),i.obstacles.push({pos:p.position.clone(),radius:u*1.1}),i.anchors.push(p.position.clone().add(new T(0,u*.8,0)))}break}case"slate-stack":{const c=this.mat({map:Bo("#565a60"),roughness:.8}),h=-r*.45,u=s*.15;let d=o;for(let p=0;p<3;p++){const g=(.16-p*.03)*a+.04,y=(.12-p*.02)*a+.03,m=.014*a+.006,f=new Ee(Dl(new vi(g,m,y,4,1,4),.08,p+5),c);f.position.set(h+(Math.random()-.5)*.03,d+m/2+(p>0?.02:0),u+(Math.random()-.5)*.03),f.rotation.y=Math.random()*.6,this.group.add(f),d=f.position.y+m/2}i.obstacles.push({pos:new T(h,d,u),radius:.12*a}),i.shelters.push(new T(h,o+.025,u+.05)),i.anchors.push(new T(h,d+.01,u));break}case"reef-rock":{const c=this.mat({map:Bo("#6a625a"),roughness:.95});for(let h=0;h<7;h++){const u=(.06+Math.random()*.09)*a+.02,d=Dl(new ao(u,12,9),.45,h*1.7+1),p=new Ee(d,c),g=-r*.8+h/6*r*1.6;p.position.set(g+(Math.random()-.5)*.06,o+u*(.4+Math.random()*.5),-s*(.35+Math.random()*.3)),p.rotation.set(Math.random(),Math.random()*Math.PI,Math.random()),this.group.add(p),i.obstacles.push({pos:p.position.clone(),radius:u}),i.shelters.push(p.position.clone().add(new T(.03,u*.3,u*.9))),i.anchors.push(p.position.clone().add(new T((Math.random()-.5)*u,u*.85,(Math.random()-.5)*u*.5)))}break}case"sunken-ship":{const c=this.mat({map:Es(),color:"#7a6a52",roughness:.9}),h=new ri,u=new Ee(new Tp(.045*a+.02,.22*a+.06,4,8),c);u.scale.set(1,.7,1.4),u.rotation.z=Math.PI/2,h.add(u);const d=new Ee(new vi(.07*a+.02,.04*a+.01,.05*a+.015),c);d.position.y=.045*a+.015,h.add(d);for(const p of[-.07,.05]){const g=new Ee(new Qn(.004,.006,.18*a+.05,5),c);g.position.set(p*a,.1*a+.03,0),g.rotation.z=.15,h.add(g)}h.position.set(r*.45,o+.03*a,-s*.15),h.rotation.set(.18,-.5,-.28),this.group.add(h),i.obstacles.push({pos:h.position.clone(),radius:.16*a}),i.shelters.push(h.position.clone().add(new T(0,.02,.08)));break}case"castle":{const c=this.mat({map:Bo("#8a8288"),roughness:.85}),h=new ri,u=new Ee(new Qn(.05*a+.015,.06*a+.02,.16*a+.05,8),c);u.position.y=.08*a+.025,h.add(u);const d=new Ee(new Pa(.055*a+.018,.06*a+.02,8),this.mat({color:"#5a4a7a",roughness:.7}));d.position.y=.19*a+.06,h.add(d);for(const[p,g]of[[-.07,.04],[.07,.04],[0,-.07]]){const y=new Ee(new Qn(.02*a+.008,.025*a+.01,.1*a+.03,7),c);y.position.set(p*a,.05*a+.015,g*a),h.add(y);const m=new Ee(new Pa(.024*a+.009,.035*a+.012,7),d.material);m.position.set(p*a,.115*a+.038,g*a),h.add(m)}h.position.set(-r*.15,o,s*.3),h.rotation.y=.4,this.group.add(h),i.obstacles.push({pos:h.position.clone().add(new T(0,.08*a,0)),radius:.13*a}),i.shelters.push(h.position.clone().add(new T(.06*a,.02,.03)));break}case"airstone":{const c=this.mat({map:Bo("#b8b4ac"),roughness:1}),h=new Ee(new Qn(.016,.02,.02,10),c);h.position.set(r*.72,o+.01,-s*.55),this.group.add(h),i.airstone=h.position.clone();break}}return i}}const D_=[{id:"amazon-sword",name:"Kiếm Amazon",scientific:"Echinodorus grisebachii",water:"freshwater",kind:"rosette",heightM:.3,colors:["#2e6b2e","#3f8a38","#357a30"],careLevel:"easy",info:"Cây hậu cảnh với lá dài, rộng, đung đưa theo dòng nước."},{id:"vallisneria",name:"Cỏ lươn",scientific:"Vallisneria spiralis",water:"freshwater",kind:"stem",heightM:.42,colors:["#4a9a3a","#5cb04a","#3a8a30"],careLevel:"easy",info:"Lá dài như dải lụa vươn tới mặt nước và uốn theo dòng chảy."},{id:"java-fern",name:"Dương xỉ Java",scientific:"Microsorum pteropus",water:"freshwater",kind:"rosette",heightM:.2,colors:["#2a5c2a","#356e30","#244f24"],careLevel:"easy",info:"Lá dày, xanh đậm; nên buộc vào lũa hoặc đá, không chôn thân rễ."},{id:"anubias",name:"Ráy Nana",scientific:"Anubias barteri var. nana",water:"freshwater",kind:"rosette",heightM:.1,colors:["#1e4a1e","#2a5c26","#183f18"],careLevel:"easy",info:"Lá tròn dày, bóng, tăng trưởng chậm và ít dao động theo dòng nước."},{id:"cryptocoryne",name:"Tiêu thảo",scientific:"Cryptocoryne wendtii",water:"freshwater",kind:"rosette",heightM:.14,colors:["#5a4a2a","#6e5230","#4a6a30"],careLevel:"easy",info:"Lá gợn sóng xanh nâu dùng cho trung cảnh; có thể rụng lá khi thay đổi môi trường."},{id:"java-moss",name:"Rêu Java",scientific:"Taxiphyllum barbieri",water:"freshwater",kind:"moss",heightM:.04,colors:["#3a7a2a","#4a9036","#2e6822"],careLevel:"easy",info:"Tạo thảm rêu mềm trên lũa và đá, là nơi tép tìm thức ăn."},{id:"dwarf-hairgrass",name:"Cỏ tóc tiên lùn",scientific:"Eleocharis parvula",water:"freshwater",kind:"carpet",heightM:.05,colors:["#5ab040","#6ec850","#4a9a34"],careLevel:"moderate",info:"Cây tiền cảnh tạo thảm cỏ mảnh dao động theo dòng nước."},{id:"frogbit",name:"Bèo Amazon",scientific:"Limnobium laevigatum",water:"freshwater",kind:"floating",heightM:.08,colors:["#4a9a3a","#5cb44a"],careLevel:"easy",info:"Cây nổi có rễ dài giúp tạo bóng mát cho cá."},{id:"pulsing-xenia",name:"San hô Xenia nhịp đập",scientific:"Xenia elongata",water:"saltwater",kind:"xenia",heightM:.09,colors:["#c8b8d8","#b8a8cc","#d8cce4"],careLevel:"easy",info:"Các tua nhỏ co mở nhịp nhàng như đang vẫy tay."},{id:"kenya-tree",name:"San hô cây Kenya",scientific:"Capnella imbricata",water:"saltwater",kind:"softcoral",heightM:.14,colors:["#c8a888","#b89878","#d8b898"],careLevel:"easy",info:"San hô mềm phân nhánh, đung đưa theo dòng chảy."},{id:"toadstool",name:"San hô da nấm",scientific:"Sarcophyton sp.",water:"saltwater",kind:"softcoral",heightM:.1,colors:["#c8b878","#d8c888","#b8a868"],careLevel:"easy",info:"Thân hình nấm, phần mũ mang các polyp nhỏ dao động."},{id:"zoanthids",name:"Vườn san hô nút áo",scientific:"Zoanthus sp.",water:"saltwater",kind:"zoa",heightM:.025,colors:["#e85a2a","#3ab8a8","#e8c82a","#c84ae0"],careLevel:"easy",info:"Nhiều polyp nhỏ xếp như thảm hoa dưới nước."},{id:"hammer-coral",name:"San hô búa",scientific:"Euphyllia ancora",water:"saltwater",kind:"lps",heightM:.08,colors:["#4ac8a8","#5ad8b8","#3ab090"],careLevel:"moderate",info:"Tua mềm có đầu hình búa, chuyển động trong dòng nước."},{id:"bubble-anemone",name:"Hải quỳ bong bóng",scientific:"Entacmaea quadricolor",water:"saltwater",kind:"anemone",heightM:.09,colors:["#48b088","#e0685a","#58c098"],careLevel:"moderate",info:"Nơi cá hề thường trú ẩn; các xúc tu căng tròn, uốn theo dòng nước."},{id:"acropora",name:"San hô sừng hươu",scientific:"Acropora sp.",water:"saltwater",kind:"hardcoral",heightM:.12,colors:["#8a5ac8","#5a8ac8","#c85a8a"],careLevel:"advanced",info:"San hô đá phân nhánh giúp tạo cấu trúc rạn."},{id:"brain-coral",name:"San hô não",scientific:"Trachyphyllia geoffroyi",water:"saltwater",kind:"hardcoral",heightM:.05,colors:["#c8683a","#3a9a7a","#c8a83a"],careLevel:"moderate",info:"Bề mặt uốn nếp như não với những dải màu nổi bật."},{id:"montipora-plate",name:"San hô đĩa Montipora",scientific:"Montipora capricornis",water:"saltwater",kind:"hardcoral",heightM:.06,colors:["#e07a3a","#d86a8a"],careLevel:"advanced",info:"Các phiến san hô cứng chồng tầng như cánh hoa bằng đá."}],cf=new Map(D_.map(n=>[n.id,n])),N_=n=>D_.filter(e=>e.water===n),We=new rt,Ft=new Re;class HC{constructor(){W(this,"positions",[]);W(this,"normals",[]);W(this,"colors",[]);W(this,"sway",[]);W(this,"phase",[]);W(this,"index",[]);W(this,"offset",0)}add(e,t,i,r,s){const o=e.getAttribute("position"),a=e.getAttribute("normal"),l=new Ve().getNormalMatrix(t),c=new T,h=new T;for(let d=0;d<o.count;d++){const p=o.getX(d),g=o.getY(d),y=o.getZ(d);c.set(p,g,y).applyMatrix4(t),h.set(a.getX(d),a.getY(d),a.getZ(d)).applyMatrix3(l).normalize(),this.positions.push(c.x,c.y,c.z),this.normals.push(h.x,h.y,h.z),this.colors.push(i.r,i.g,i.b),this.sway.push(r(p,g,y)),this.phase.push(s)}const u=e.getIndex();if(u)for(let d=0;d<u.count;d++)this.index.push(u.getX(d)+this.offset);else for(let d=0;d<o.count;d++)this.index.push(d+this.offset);this.offset+=o.count}build(){const e=new Lt;return e.setAttribute("position",new ze(this.positions,3)),e.setAttribute("normal",new ze(this.normals,3)),e.setAttribute("color",new ze(this.colors,3)),e.setAttribute("aSway",new ze(this.sway,1)),e.setAttribute("aPhase",new ze(this.phase,1)),e.setIndex(this.index),e}}const fh=new ni(1,1,1,6),ph=(()=>{const n=new ni(1,1,4,10),e=n.getAttribute("position");for(let t=0;t<e.count;t++){const i=e.getY(t)+.5,r=e.getX(t),s=Math.pow(Math.sin(Math.PI*Math.min(1,i*1.04)),.85);e.setX(t,r*s),e.setZ(t,r*r*.05+.014*Math.sin(i*Math.PI))}return n.computeVertexNormals(),n})(),mh=new Pa(.5,1,5,3),Lr=new ao(.5,7,5),gh=new Qn(.5,.6,1,6,2),VC=`
  attribute float aSway;
  attribute float aPhase;
  uniform float uSwayAmp;
  uniform float uSwayFreq;
  uniform float uPulse;      // >0 only for self-pulsing corals (Xenia)
  uniform vec2 uLean;        // static lean from the filter jet at this cluster
  uniform vec4 uKanBounds; // inner glass x/z limits, floorY, surfaceY
`,GC=`
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
  // Animation must never move a leaf through the aquarium glass.
  transformed.x=clamp(transformed.x,-uKanBounds.x,uKanBounds.x);
  transformed.z=clamp(transformed.z,-uKanBounds.y,uKanBounds.y);
  transformed.y=clamp(transformed.y,uKanBounds.z,uKanBounds.w);
}
`,WC={stem:{swayAmp:.035,swayFreq:.9,pulse:0},rosette:{swayAmp:.02,swayFreq:.8,pulse:0},carpet:{swayAmp:.008,swayFreq:1.6,pulse:0},moss:{swayAmp:.004,swayFreq:2.2,pulse:0},floating:{swayAmp:.02,swayFreq:.7,pulse:0},softcoral:{swayAmp:.02,swayFreq:.7,pulse:0},xenia:{swayAmp:.008,swayFreq:.9,pulse:.02},lps:{swayAmp:.028,swayFreq:1.1,pulse:0},anemone:{swayAmp:.022,swayFreq:.9,pulse:.004},zoa:{swayAmp:.006,swayFreq:1.4,pulse:0},hardcoral:{swayAmp:0,swayFreq:0,pulse:0}};class jC{constructor(e){W(this,"group",new ri);W(this,"meshes",[]);e.add(this.group)}getContainmentSnapshot(e){let t=0,i=0,r=0;for(const s of this.meshes){const o=s.geometry.getAttribute("position");for(let a=0;a<o.count;a++){t++;const l=Math.max(0,Math.abs(o.getX(a))-e.halfW+.005,Math.abs(o.getZ(a))-e.halfD+.005,e.floorY-o.getY(a),o.getY(a)-e.surfaceY);l>5e-4&&(i++,r=Math.max(l,r))}}return{vertices:t,violations:i,maxOverflow:r}}rebuild(e,t,i,r){for(const a of this.meshes)this.group.remove(a),a.geometry.dispose(),a.material.dispose();this.meshes=[];const s=[];let o=0;for(const[a,l]of Object.entries(e)){const c=cf.get(a);if(!c||l<=0)continue;const h=WC[c.kind],u=new HC;for(let f=0;f<l;f++){let v,_,M=t.floorY;const b=["softcoral","xenia","lps","anemone","zoa","hardcoral"].includes(c.kind),E=["java-fern","anubias","java-moss"].includes(c.id);if(c.kind==="floating")v=(Math.random()-.5)*t.halfW*1.7,_=(Math.random()-.5)*t.halfD*1.5,M=t.surfaceY;else if((b||E)&&r.length>0){const O=r[o++%r.length];v=O.x+(Math.random()-.5)*.06,_=O.z+(Math.random()-.5)*.06,M=O.y}else c.kind==="stem"||c.kind==="rosette"?(v=(Math.random()-.5)*t.halfW*1.8,_=-t.halfD*(.25+Math.random()*.65)):(v=(Math.random()-.5)*t.halfW*1.7,_=t.halfD*(Math.random()*1.4-.55));const C=Math.min(.07,Math.max(.016,h.swayAmp*1.65+.008));v=le.clamp(v,-t.halfW+C,t.halfW-C),_=le.clamp(_,-t.halfD+C,t.halfD-C);const R=new T(v,M,_),U=u.positions.length;this.buildOne(c,u,R,t);let x=1;const S=t.halfW-C,k=t.halfD-C;for(let O=U;O<u.positions.length;O+=3){const X=u.positions[O],H=u.positions[O+2],K=X-v,D=H-_;K>0&&X>S&&(x=Math.min(x,(S-v)/K)),K<0&&X<-S&&(x=Math.min(x,(-S-v)/K)),D>0&&H>k&&(x=Math.min(x,(k-_)/D)),D<0&&H<-k&&(x=Math.min(x,(-k-_)/D))}if(x<1)for(let O=U;O<u.positions.length;O+=3)u.positions[O]=v+(u.positions[O]-v)*Math.max(.15,x),u.positions[O+2]=_+(u.positions[O+2]-_)*Math.max(.15,x);for(let O=U;O<u.positions.length;O+=3)u.positions[O]=le.clamp(u.positions[O],-S,S),u.positions[O+1]=le.clamp(u.positions[O+1],t.floorY+.002,t.surfaceY-.004),u.positions[O+2]=le.clamp(u.positions[O+2],-k,k);if(c.kind==="hardcoral"||c.kind==="lps"||c.kind==="rosette"){const O=le.clamp(R.y+c.heightM*.2,t.floorY+.014,t.surfaceY-.014),X=c.kind==="hardcoral"?.24:c.kind==="lps"?.19:.13;s.push({pos:new T(R.x,O,R.z),radius:Math.min(.054,Math.max(.01,c.heightM*X))})}}const d=u.build(),p=new gi({vertexColors:!0,roughness:.75,metalness:0,side:jt});d.computeBoundingSphere();const g=d.boundingSphere?.center??new T,y=i.sample(g,new T);Jc(p,{caustics:!0,causticStrength:.85,vertexPars:VC,vertexHook:GC,extraUniforms:{uSwayAmp:{value:h.swayAmp},uSwayFreq:{value:h.swayFreq},uPulse:{value:h.pulse},uLean:{value:new ae(y.x*.5,y.z*.5)},uKanBounds:{value:new ht(t.halfW-.008,t.halfD-.008,t.floorY+.001,t.surfaceY-.002)}}});const m=new Ee(d,p);m.frustumCulled=!1,this.group.add(m),this.meshes.push(m)}return{obstacles:s}}buildOne(e,t,i,r){const s=r.surfaceY-r.floorY,o=Math.min(e.heightM*(.75+Math.random()*.5),s*.88),a=e.colors.map(u=>new Re(u).multiplyScalar(.72)),l=()=>a[Math.floor(Math.random()*a.length)],c=Math.random(),h=(u,d)=>le.clamp(d+.5,0,1);switch(e.kind){case"stem":{const u=5+Math.floor(Math.random()*5);for(let d=0;d<u;d++){const p=o*(.7+Math.random()*.5);We.compose(new T(i.x+(Math.random()-.5)*.05,i.y+p/2,i.z+(Math.random()-.5)*.05),new xt().setFromEuler(new Rt(0,Math.random()*Math.PI,(Math.random()-.5)*.15)),new T(.012+Math.random()*.006,p,1)),t.add(fh,We,Ft.copy(l()).multiplyScalar(.8+Math.random()*.4),h,c+d*.13)}break}case"rosette":{const u=7+Math.floor(Math.random()*6);for(let d=0;d<u;d++){const p=d/u*Math.PI*2+Math.random()*.5,g=.35+Math.random()*.55,y=o*(.7+Math.random()*.5);We.compose(new T(i.x+Math.cos(p)*.015,i.y+y/2*Math.cos(g*.8),i.z+Math.sin(p)*.015),new xt().setFromEuler(new Rt(Math.sin(p)*g,-p,Math.cos(p)*g,"YXZ")),new T(y*(e.id==="amazon-sword"?.28:e.id==="anubias"?.5:.31),y,1)),t.add(ph,We,Ft.copy(l()).multiplyScalar(.75+Math.random()*.5),h,c+d*.11)}break}case"carpet":{for(let d=0;d<24;d++){const p=o*(.6+Math.random()*.8);We.compose(new T(i.x+(Math.random()-.5)*.09,i.y+p/2,i.z+(Math.random()-.5)*.09),new xt().setFromEuler(new Rt((Math.random()-.5)*.4,Math.random()*Math.PI,(Math.random()-.5)*.4)),new T(.004,p,1)),t.add(fh,We,Ft.copy(l()).multiplyScalar(.8+Math.random()*.5),h,Math.random())}break}case"moss":{for(let u=0;u<30;u++)We.compose(new T(i.x+(Math.random()-.5)*.08,i.y+Math.random()*o,i.z+(Math.random()-.5)*.08),new xt().setFromEuler(new Rt(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),new T(.014,.02,1)),t.add(ph,We,Ft.copy(l()).multiplyScalar(.6+Math.random()*.7),()=>.4+Math.random()*.4,Math.random());break}case"floating":{const u=5+Math.floor(Math.random()*3);for(let d=0;d<u;d++){const p=d/u*Math.PI*2;We.compose(new T(i.x+Math.cos(p)*.018,i.y-.004,i.z+Math.sin(p)*.018),new xt().setFromEuler(new Rt(-Math.PI/2+.15,-p,0,"YXZ")),new T(.03,.035,1)),t.add(ph,We,Ft.copy(l()),()=>.15,c)}for(let d=0;d<5;d++){const p=.05+Math.random()*o;We.compose(new T(i.x+(Math.random()-.5)*.02,i.y-p/2,i.z+(Math.random()-.5)*.02),new xt,new T(.0015,p,1)),t.add(fh,We,Ft.set("#c8c0a0"),(g,y)=>1-(y+.5),Math.random())}break}case"softcoral":{const u=o*.5;if(We.compose(new T(i.x,i.y+u/2,i.z),new xt,new T(o*.22,u,o*.22)),t.add(gh,We,Ft.copy(l()).multiplyScalar(.85),h,c),e.id==="toadstool")We.compose(new T(i.x,i.y+u+o*.08,i.z),new xt,new T(o*.85,o*.22,o*.85)),t.add(Lr,We,Ft.copy(l()),()=>.75,c+.3);else for(let d=0;d<8;d++){const p=Math.random()*Math.PI*2,g=Math.random()*o*.3;We.compose(new T(i.x+Math.cos(p)*g,i.y+u+Math.random()*o*.4,i.z+Math.sin(p)*g),new xt().setFromEuler(new Rt(Math.random(),Math.random(),Math.random())),new T(o*.28,o*.3,o*.28)),t.add(Lr,We,Ft.copy(l()).multiplyScalar(.8+Math.random()*.4),()=>.7+Math.random()*.3,Math.random())}break}case"xenia":{const u=5+Math.floor(Math.random()*4);for(let d=0;d<u;d++){const p=i.x+(Math.random()-.5)*.05,g=i.z+(Math.random()-.5)*.05,y=o*(.6+Math.random()*.5);We.compose(new T(p,i.y+y/2,g),new xt,new T(.008,y,.008)),t.add(gh,We,Ft.copy(l()).multiplyScalar(.8),h,d*.17),We.compose(new T(p,i.y+y+.008,g),new xt,new T(.028,.02,.028)),t.add(Lr,We,Ft.copy(l()),()=>1,d*.17+Math.random()*.1)}break}case"lps":{for(let u=0;u<26;u++){const d=Math.random()*Math.PI*2,p=Math.random()*o*.45,g=o*(.7+Math.random()*.6);We.compose(new T(i.x+Math.cos(d)*p,i.y+g/2,i.z+Math.sin(d)*p),new xt().setFromEuler(new Rt((Math.random()-.5)*.7,0,(Math.random()-.5)*.7)),new T(.014,g,.014)),t.add(mh,We,Ft.copy(l()).multiplyScalar(.8+Math.random()*.5),h,Math.random())}break}case"anemone":{We.compose(new T(i.x,i.y+o*.12,i.z),new xt,new T(o*.7,o*.3,o*.7)),t.add(Lr,We,Ft.copy(a[0]).multiplyScalar(.7),()=>.1,c);for(let u=0;u<34;u++){const d=Math.random()*Math.PI*2,p=Math.random()*o*.32,g=o*(.5+Math.random()*.55);We.compose(new T(i.x+Math.cos(d)*p,i.y+o*.2+g/2,i.z+Math.sin(d)*p),new xt().setFromEuler(new Rt(Math.cos(d)*.5,0,-Math.sin(d)*.5)),new T(.016,g,.016)),t.add(mh,We,Ft.copy(a[1%a.length]).multiplyScalar(.85+Math.random()*.35),h,Math.random())}break}case"zoa":{for(let u=0;u<22;u++){const d=i.x+(Math.random()-.5)*.09,p=i.z+(Math.random()-.5)*.09,g=o*(.6+Math.random()*.6);We.compose(new T(d,i.y+g/2,p),new xt,new T(.006,g,.006)),t.add(gh,We,Ft.set("#7a6a58"),h,Math.random()),We.compose(new T(d,i.y+g,p),new xt,new T(.02,.005,.02)),t.add(Lr,We,Ft.copy(l()),()=>.9,Math.random())}break}case"hardcoral":{if(e.id==="brain-coral")We.compose(new T(i.x,i.y+o*.4,i.z),new xt,new T(o*1.6,o*.8,o*1.4)),t.add(Lr,We,Ft.copy(l()),()=>0,c);else if(e.id==="montipora-plate")for(let u=0;u<3;u++)We.compose(new T(i.x+(Math.random()-.5)*.04,i.y+o*(.3+u*.3),i.z+(Math.random()-.5)*.04),new xt().setFromEuler(new Rt((Math.random()-.5)*.3,Math.random(),(Math.random()-.5)*.3)),new T(o*(1.5-u*.3),o*.08,o*(1.5-u*.3))),t.add(Lr,We,Ft.copy(l()).multiplyScalar(.85+u*.12),()=>0,c);else for(let u=0;u<12;u++){const d=Math.random()*Math.PI*2,p=Math.random()*o*.35,g=o*(.5+Math.random()*.7);We.compose(new T(i.x+Math.cos(d)*p,i.y+g/2,i.z+Math.sin(d)*p),new xt().setFromEuler(new Rt(Math.cos(d)*.45,0,-Math.sin(d)*.45)),new T(.02,g,.02)),t.add(mh,We,Ft.copy(l()).multiplyScalar(.75+Math.random()*.5),()=>0,Math.random())}break}}}}const qe=n=>({height:.32,width:.45,noseSharp:.5,tailFork:.6,tailSize:.22,dorsalHeight:.35,analHeight:.25,finLong:!1,eyeSize:.05,...n}),$e=n=>({base:"#9db4c0",belly:"#e8eef2",back:"#54707e",fin:"#b8ccd6",finOpacity:.55,pattern:"none",patternColor:"#ffffff",iridescence:.2,...n}),Ke=n=>({cruise:1.4,burst:3.2,freqBase:2.2,waveLen:.95,amp:.2,mode:1,turnRate:2.6,...n}),I_=[{id:"neon-tetra",common:"Cá neon xanh",scientific:"Paracheirodon innesi",water:"freshwater",adultSizeIn:1.5,lengthM:.038,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Suối nước đen dưới tán rừng lưu vực Amazon.",funFact:"Sọc xanh phát sáng nhạt đi khi nghỉ đêm; màu này hình thành nhờ cấu trúc phản xạ ánh sáng.",colorTags:["blue","red","silver"],shape:qe({height:.28,noseSharp:.35,tailFork:.65,eyeSize:.07}),palette:$e({base:"#b8d4e6",belly:"#f0f4f6",back:"#5a748a",pattern:"hstripe",patternColor:"#27d3f5",patternColor2:"#e8262d",iridescence:.75,fin:"#cfe3ee",finOpacity:.35}),swim:Ke({cruise:1.6,freqBase:3,turnRate:3.4})},{id:"cardinal-tetra",common:"Cá neon vua",scientific:"Paracheirodon axelrodi",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:15,habitat:"Phụ lưu Rio Negro và Orinoco ở Nam Mỹ.",funFact:"Dải đỏ chạy gần hết chiều dài thân, khác với cá neon xanh thường.",colorTags:["blue","red"],shape:qe({height:.28,noseSharp:.35,tailFork:.65,eyeSize:.07}),palette:$e({base:"#e0453a",belly:"#f2b8ae",back:"#4a5f78",pattern:"hstripe",patternColor:"#2bc8f0",patternColor2:"#e0453a",iridescence:.75,patternParams:[1],finOpacity:.35}),swim:Ke({cruise:1.5,freqBase:2.9,turnRate:3.2})},{id:"ember-tetra",common:"Cá hồng lửa",scientific:"Hyphessobrycon amandae",water:"freshwater",adultSizeIn:.8,lengthM:.02,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:8,bioload:.4,minGallons:5,habitat:"Các nhánh sông chảy chậm, màu trà ở lưu vực Araguaia, Brazil.",funFact:"Cá nhỏ màu cam như than hồng, nổi bật khi bơi theo đàn trên nền đáy tối.",colorTags:["orange","red"],shape:qe({height:.3,noseSharp:.3,tailFork:.55,eyeSize:.08}),palette:$e({base:"#e8702a",belly:"#f0a878",back:"#d85a1e",pattern:"none",fin:"#e88a4a",finOpacity:.45,iridescence:.5}),swim:Ke({cruise:1.4,freqBase:3.2,turnRate:3.6})},{id:"rummynose-tetra",common:"Cá mũi đỏ",scientific:"Hemigrammus rhodostomus",water:"freshwater",adultSizeIn:2,lengthM:.048,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:20,habitat:"Các dòng nước đen mềm, hơi axit ở hạ lưu Amazon.",funFact:"Màu đỏ trên mũi có thể nhạt đi khi môi trường nước không thuận lợi.",colorTags:["red","silver","black"],shape:qe({height:.26,noseSharp:.4,tailFork:.7}),palette:$e({base:"#c9d6da",belly:"#eef2f3",back:"#8fa5ab",pattern:"headpatch",patternColor:"#e03222",patternColor2:"#222831",iridescence:.45,finOpacity:.5}),swim:Ke({cruise:1.7,freqBase:3.1,turnRate:3})},{id:"harlequin-rasbora",common:"Cá lòng tong tam giác",scientific:"Trigonostigma heteromorpha",water:"freshwater",adultSizeIn:2,lengthM:.042,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Suối rừng đầm than bùn ở Malaysia, Singapore và Sumatra.",funFact:"Vệt đen hình tam giác bên sườn là dấu hiệu dễ nhận biết.",colorTags:["orange","black","pink"],shape:qe({height:.34,noseSharp:.3,tailFork:.6}),palette:$e({base:"#e8946a",belly:"#f4c9a8",back:"#c96f4a",pattern:"lateralline",patternColor:"#1d2126",iridescence:.4,patternParams:[.45],fin:"#e8a880"}),swim:Ke({cruise:1.4,freqBase:2.7,turnRate:3})},{id:"zebra-danio",common:"Cá ngựa vằn",scientific:"Danio rerio",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Suối mát chảy nhanh và ruộng lúa từ Ấn Độ đến Bangladesh.",funFact:"Loài này thường được nghiên cứu trong sinh học vì phôi trong suốt và khả năng tái tạo mô.",colorTags:["blue","gold","silver"],shape:qe({height:.24,noseSharp:.45,tailFork:.55}),palette:$e({base:"#d8cfa8",belly:"#f2ecd6",back:"#9a8f6a",pattern:"hstripe",patternColor:"#3a4a8c",patternParams:[3],iridescence:.5}),swim:Ke({cruise:2.4,burst:3.6,freqBase:3.6,turnRate:3.8})},{id:"tiger-barb",common:"Cá tứ vân",scientific:"Puntigrus tetrazona",water:"freshwater",adultSizeIn:3,lengthM:.06,temperament:"semi-aggressive",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:2,minGallons:20,habitat:"Vùng nước trong và đục ở Sumatra, Borneo.",funFact:"Nuôi theo đàn đủ lớn có thể giúp phân tán hành vi rỉa vây đối với bạn cùng bể.",colorTags:["orange","black","gold"],shape:qe({height:.42,noseSharp:.35,tailFork:.6}),palette:$e({base:"#e8b04a",belly:"#f4d9a0",back:"#c98a30",pattern:"vbars",patternColor:"#16181d",patternParams:[4],fin:"#e05a2a",finOpacity:.75,iridescence:.3}),swim:Ke({cruise:1.8,freqBase:3,turnRate:3.4,mode:1})},{id:"guppy",common:"Cá bảy màu",scientific:"Poecilia reticulata",water:"freshwater",adultSizeIn:1.8,lengthM:.035,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"schooler",minGroup:3,bioload:1,minGallons:5,habitat:"Suối ấm, ao và kênh rạch vùng đông bắc Nam Mỹ.",funFact:"Cá đực có nhiều kiểu màu và hoa văn đuôi khác nhau.",colorTags:["orange","blue","yellow","rainbow"],shape:qe({height:.3,noseSharp:.3,tailFork:.1,tailSize:.38,finLong:!0,dorsalHeight:.5}),palette:$e({base:"#a8bcd0",belly:"#e6edf2",back:"#7a90a8",pattern:"spots",patternColor:"#e8642a",patternColor2:"#3a6ae0",fin:"#ffa03a",finOpacity:.85,iridescence:.65}),swim:Ke({cruise:1.2,freqBase:2.6,turnRate:3,mode:3})},{id:"betta",common:"Cá xiêm Betta",scientific:"Betta splendens",water:"freshwater",adultSizeIn:2.8,lengthM:.06,temperament:"aggressive",careLevel:"easy",zone:"top",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:3,minGallons:5,mouthIn:.8,habitat:"Ruộng lúa và đầm nước tĩnh, nông ở Thái Lan.",funFact:"Có cơ quan hô hấp phụ giúp lấy oxy không khí; cá đực tạo tổ bọt khi sinh sản.",colorTags:["red","blue","purple"],shape:qe({height:.34,noseSharp:.25,tailFork:0,tailSize:.45,finLong:!0,dorsalHeight:.6,analHeight:.65}),palette:$e({base:"#5a3ae0",belly:"#8a6ae8",back:"#3a20a8",fin:"#e03a5a",finOpacity:.8,pattern:"none",iridescence:.8}),swim:Ke({cruise:.7,burst:2.6,freqBase:1.6,mode:3,turnRate:2.4,amp:.14})},{id:"dwarf-gourami",common:"Cá sặc gấm",scientific:"Trichogaster lalius",water:"freshwater",adultSizeIn:3.5,lengthM:.075,temperament:"peaceful",careLevel:"moderate",zone:"top",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:3,minGallons:10,habitat:"Nước chảy chậm, nhiều cây thủy sinh tại Ấn Độ và Bangladesh.",funFact:"Hai vây bụng dài như sợi râu giúp cá cảm nhận môi trường xung quanh.",colorTags:["red","blue","orange"],shape:qe({height:.5,width:.32,noseSharp:.3,tailFork:.15,dorsalHeight:.45}),palette:$e({base:"#e05a3a",belly:"#f0b090",back:"#c04028",pattern:"vbars",patternColor:"#3ab8e8",patternParams:[7,.4],fin:"#e88a5a",finOpacity:.7,iridescence:.55}),swim:Ke({cruise:.8,freqBase:1.8,mode:2,turnRate:2.2,amp:.15})},{id:"honey-gourami",common:"Cá sặc mật ong",scientific:"Trichogaster chuna",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:2,minGallons:10,habitat:"Suối và vùng đồng bằng ngập nước nhiều cây ở Ấn Độ, Bangladesh.",funFact:"Cá đực chuyển màu vàng mật nổi bật khi sinh sản và có thể tạo tổ bọt.",colorTags:["orange","yellow","gold"],shape:qe({height:.44,width:.3,noseSharp:.3,tailFork:.15,dorsalHeight:.4,analHeight:.45}),palette:$e({base:"#e8a838",belly:"#f2d488",back:"#d8881f",pattern:"none",fin:"#f0bc50",finOpacity:.7,iridescence:.45}),swim:Ke({cruise:.75,freqBase:1.8,mode:2,turnRate:2.2,amp:.15})},{id:"angelfish",common:"Cá ông tiên",scientific:"Pterophyllum scalare",water:"freshwater",adultSizeIn:6,lengthM:.1,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"hoverer",minGroup:1,bioload:8,minGallons:29,mouthIn:1.6,habitat:"Nhánh sông Amazon nhiều rễ cây và thân thực vật chìm.",funFact:"Thân cao, mỏng và sọc dọc giúp cá ẩn mình giữa những bụi cây.",colorTags:["silver","black"],shape:qe({height:.85,width:.18,noseSharp:.45,tailFork:.2,tailSize:.28,finLong:!0,dorsalHeight:.9,analHeight:.9}),palette:$e({base:"#c8d2d8",belly:"#e8edf0",back:"#98a8b2",pattern:"vbars",patternColor:"#23272e",patternParams:[3,.9],fin:"#b8c4cc",finOpacity:.65,iridescence:.35}),swim:Ke({cruise:.55,burst:2.8,freqBase:1.4,mode:2,turnRate:1.8,amp:.12})},{id:"german-blue-ram",common:"Cá phượng hoàng lam",scientific:"Mikrogeophagus ramirezi",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"advanced",zone:"bottom",archetype:"solitary",minGroup:1,maxPerTank:2,bioload:2,minGallons:20,habitat:"Ao nông ấm tại lưu vực Orinoco, Venezuela và Colombia.",funFact:"Cá bố mẹ có thể thay phiên quạt nước cho trứng và dẫn đàn cá con.",colorTags:["blue","yellow","black"],shape:qe({height:.45,noseSharp:.35,tailFork:.3,dorsalHeight:.55}),palette:$e({base:"#e8d060",belly:"#f2e8a8",back:"#c8a840",pattern:"spots",patternColor:"#3a8ae8",patternColor2:"#16181d",fin:"#e8b83a",finOpacity:.7,iridescence:.7}),swim:Ke({cruise:.8,freqBase:2,mode:2,turnRate:2.6})},{id:"boesemani-rainbow",common:"Cá cầu vồng Boesemani",scientific:"Melanotaenia boesemani",water:"freshwater",adultSizeIn:4,lengthM:.085,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:4,minGallons:40,habitat:"Hồ Ayamaru tại Tây Papua, Indonesia.",funFact:"Thân cá chia hai vùng màu xanh và cam; màu của cá đực đậm hơn khi phô diễn.",colorTags:["blue","orange","rainbow"],shape:qe({height:.4,noseSharp:.4,tailFork:.5}),palette:$e({base:"#7a9ae0",belly:"#b8c8e8",back:"#4a6ac0",pattern:"headpatch",patternColor:"#5a7ae0",patternColor2:"#00000000",iridescence:.8,fin:"#e8983a",finOpacity:.7,patternParams:[.55]}),swim:Ke({cruise:1.6,freqBase:2.4,turnRate:2.8})},{id:"corydoras",common:"Cá chuột đồng",scientific:"Corydoras aeneus",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:2,minGallons:20,habitat:"Suối có đáy cát trên khắp Nam Mỹ.",funFact:"Thỉnh thoảng lao lên mặt nước lấy không khí và có thể chuyển động mắt như đang nháy.",colorTags:["bronze","green"],shape:qe({height:.38,width:.55,noseSharp:.6,tailFork:.5,dorsalHeight:.55,barbels:!0,eyeSize:.06}),palette:$e({base:"#b09a6a",belly:"#e0d2b0",back:"#6a5a3a",pattern:"none",iridescence:.5,fin:"#c8b890",finOpacity:.5}),swim:Ke({cruise:.9,burst:6,freqBase:2.4,mode:1,turnRate:3})},{id:"albino-corydoras",common:"Cá chuột bạch tạng",scientific:"Corydoras aeneus (albino)",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:2,minGallons:20,habitat:"Dòng cá chuột đồng được nhân giống trong bể từ loài gốc Nam Mỹ.",funFact:"Thân trắng hồng và mắt đỏ do thiếu sắc tố; vẫn giữ tập tính kiếm ăn ở đáy.",colorTags:["white","pink"],shape:qe({height:.38,width:.55,noseSharp:.6,tailFork:.5,dorsalHeight:.55,barbels:!0,eyeSize:.06}),palette:$e({base:"#f0dcc4",belly:"#faf2e2",back:"#e6cbaa",pattern:"none",fin:"#f4e4cc",finOpacity:.5,iridescence:.35,eyeColor:"#c03038"}),swim:Ke({cruise:.9,burst:6,freqBase:2.4,mode:1,turnRate:3})},{id:"bristlenose-pleco",common:"Cá lau kiếng râu",scientific:"Ancistrus cirrhosus",water:"freshwater",adultSizeIn:5,lengthM:.1,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"ambusher",minGroup:1,maxPerTank:1,bioload:8,minGallons:29,habitat:"Sông nhiều oxy, chảy nhanh thuộc lưu vực Amazon.",funFact:"Cá đực có những tua thịt ở mõm; miệng dạng giác hút giúp bám vào đá.",colorTags:["brown","black"],shape:qe({height:.3,width:.75,noseSharp:.85,tailFork:.3,dorsalHeight:.6,barbels:!0,eyeSize:.04}),palette:$e({base:"#5a4a36",belly:"#8a7a60",back:"#3a3026",pattern:"spots",patternColor:"#d8c8a0",fin:"#4a4030",finOpacity:.9,iridescence:.05}),swim:Ke({cruise:.5,burst:2.4,freqBase:1.6,mode:1,turnRate:2})},{id:"zebra-oto",common:"Cá oto sọc ngựa vằn",scientific:"Otocinclus cocama",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"cleaner",minGroup:6,bioload:.6,minGallons:10,habitat:"Suối nước trong, nhiều oxy tại lưu vực Ucayali ở Peru.",funFact:"Miệng hút dùng để cạo lớp tảo mỏng trên kính và lá cây.",colorTags:["black","cream","brown"],shape:qe({height:.24,width:.55,noseSharp:.45,tailFork:.4,tailSize:.2,dorsalHeight:.45,eyeSize:.06}),palette:$e({base:"#d8c4a0",belly:"#efe6d2",back:"#3a3026",pattern:"vbars",patternColor:"#2a2018",patternParams:[7,.7],fin:"#cfc0a0",finOpacity:.55,iridescence:.15}),swim:Ke({cruise:.7,burst:3.5,freqBase:2.4,mode:1,turnRate:3.2})},{id:"kuhli-loach",common:"Cá chạch kuhli",scientific:"Pangio kuhlii",water:"freshwater",adultSizeIn:4,lengthM:.08,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"nocturnal",minGroup:5,bioload:1,minGallons:20,habitat:"Đáy suối rừng phủ lá mục ở Đông Nam Á.",funFact:"Thường ẩn vào ban ngày và hoạt động mạnh hơn khi trời tối.",colorTags:["orange","black"],shape:qe({height:.11,width:.9,noseSharp:.5,tailFork:0,tailSize:.08,dorsalHeight:.12,analHeight:.1,eelLike:!0,barbels:!0,eyeSize:.04}),palette:$e({base:"#e8a04a",belly:"#f2cea0",back:"#d8903a",pattern:"vbars",patternColor:"#241c14",patternParams:[9],fin:"#e8b06a",finOpacity:.5,iridescence:.1}),swim:Ke({cruise:.9,freqBase:2.2,waveLen:.62,amp:.16,mode:0,turnRate:3.6})},{id:"hillstream-loach",common:"Cá bám đá suối",scientific:"Sewellia lineolata",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:2,minGallons:20,habitat:"Suối nông chảy xiết, giàu oxy tại miền Trung Việt Nam.",funFact:"Thân dẹp giúp bám đá trong dòng chảy và gặm tảo trên bề mặt.",colorTags:["gold","black","brown"],shape:qe({height:.13,width:4,noseSharp:.15,tailFork:.15,tailSize:.15,dorsalHeight:.22,analHeight:.1,eyeSize:.05}),palette:$e({base:"#c8a458",belly:"#e8d8b8",back:"#a8854a",pattern:"mottle",patternColor:"#2a2418",fin:"#c8ae6a",finOpacity:.75,iridescence:.15}),swim:Ke({cruise:.5,burst:4,freqBase:2,mode:1,amp:.1,turnRate:3})},{id:"cherry-shrimp",common:"Tép anh đào đỏ",scientific:"Neocaridina davidi",water:"freshwater",adultSizeIn:1.2,lengthM:.025,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:.2,minGallons:5,invert:!0,habitat:"Suối và ao ở Đài Loan; dạng đỏ được chọn giống để nuôi cảnh.",funFact:"Tép lột xác khi lớn và đôi khi ăn lại vỏ cũ để thu hồi khoáng chất.",colorTags:["red"],shape:qe({height:.22,width:.5,noseSharp:.7,tailFork:0,tailSize:.12,dorsalHeight:.05,analHeight:.05,eelLike:!0}),palette:$e({base:"#e02a2a",belly:"#f08a7a",back:"#c01a1a",pattern:"none",iridescence:.15,finOpacity:.3}),swim:Ke({cruise:.35,burst:5,freqBase:1.5,mode:3,turnRate:4})},{id:"nerite-snail",common:"Ốc Nerita ăn rêu",scientific:"Neritina natalensis",water:"freshwater",adultSizeIn:1,lengthM:.02,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.2,minGallons:5,invert:!0,habitat:"Cửa sông nước lợ ở Đông Phi.",funFact:"Thường bò trên kính và gặm từng vệt tảo mỏng.",colorTags:["gold","black"],shape:qe({height:.6,width:.8,noseSharp:0,tailFork:0,tailSize:.01,dorsalHeight:0,analHeight:0}),palette:$e({base:"#c8a030",belly:"#e8d8a0",back:"#8a6a1a",pattern:"hstripe",patternColor:"#2a2018",patternParams:[3],iridescence:.1,finOpacity:0}),swim:Ke({cruise:.02,burst:1,freqBase:0,mode:3,turnRate:.5})},{id:"ocellaris-clown",common:"Cá hề Nemo",scientific:"Amphiprion ocellaris",water:"saltwater",adultSizeIn:3.5,lengthM:.07,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:4,minGallons:10,reefSafe:!0,habitat:"Rạn san hô Ấn Độ Dương - Thái Bình Dương, thường gần hải quỳ.",funFact:"Trong một nhóm, con lớn nhất là cá cái; cá đực đầu đàn có thể đổi giới tính khi cần.",colorTags:["orange","white","black"],shape:qe({height:.45,width:.4,noseSharp:.25,tailFork:.1,tailSize:.25,dorsalHeight:.4}),palette:$e({base:"#f07820",belly:"#f8a860",back:"#e06010",pattern:"vbars",patternColor:"#f8f8f4",patternColor2:"#16181d",patternParams:[3,1],fin:"#f08030",finOpacity:.95,iridescence:.25}),swim:Ke({cruise:.9,freqBase:2.6,mode:3,amp:.16,turnRate:3.2})},{id:"blue-tang",common:"Cá đuôi gai xanh Dory",scientific:"Paracanthurus hepatus",water:"saltwater",adultSizeIn:11,lengthM:.14,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:16,minGallons:90,reefSafe:!0,habitat:"Rìa rạn san hô vùng Ấn Độ Dương - Thái Bình Dương.",funFact:"Có gai sắc gần gốc đuôi để tự vệ và thường lẩn vào khe san hô.",colorTags:["blue","yellow","black"],shape:qe({height:.55,width:.22,noseSharp:.5,tailFork:.35,dorsalHeight:.45}),palette:$e({base:"#2858e8",belly:"#4a78e8",back:"#1a3ac8",pattern:"lateralline",patternColor:"#10141c",patternParams:[.7],fin:"#f0d020",finOpacity:.95,iridescence:.5}),swim:Ke({cruise:1.3,freqBase:2,mode:2,turnRate:2.4})},{id:"yellow-tang",common:"Cá đuôi gai vàng",scientific:"Zebrasoma flavescens",water:"saltwater",adultSizeIn:8,lengthM:.12,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:12,minGallons:75,reefSafe:!0,habitat:"Rạn san hô nông ở Hawaii, kiếm ăn trên những mảng tảo.",funFact:"Màu vàng có thể nhạt đi khi ngủ và một vệt sáng bên thân hiện rõ hơn.",colorTags:["yellow"],shape:qe({height:.7,width:.2,noseSharp:.7,tailFork:.15,dorsalHeight:.7,analHeight:.6}),palette:$e({base:"#f2cc0a",belly:"#f8e060",back:"#e0b800",pattern:"none",fin:"#f2d020",finOpacity:.95,iridescence:.3}),swim:Ke({cruise:1.1,freqBase:1.9,mode:2,turnRate:2.6})},{id:"royal-gramma",common:"Cá hoàng gia tím vàng",scientific:"Gramma loreto",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"ambusher",minGroup:1,maxPerTank:1,bioload:3,minGallons:20,reefSafe:!0,habitat:"Hang và mái đá rạn san hô Caribe.",funFact:"Có thể bơi ngược bụng lên trên khi bám sát trần hang.",colorTags:["purple","yellow"],shape:qe({height:.32,noseSharp:.3,tailFork:.2,dorsalHeight:.4}),palette:$e({base:"#8a2ae0",belly:"#a85ae8",back:"#6a1ac0",pattern:"headpatch",patternColor:"#8a2ae0",patternColor2:"#f2c80a",patternParams:[.5,1],fin:"#b060e8",finOpacity:.8,iridescence:.5}),swim:Ke({cruise:.8,burst:4,freqBase:2.4,mode:1,turnRate:3.4})},{id:"green-chromis",common:"Cá thia xanh ngọc",scientific:"Chromis viridis",water:"saltwater",adultSizeIn:3.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:5,bioload:2,minGallons:30,reefSafe:!0,habitat:"Đàn cá lấp lánh phía trên các nhánh san hô ở đầm rạn.",funFact:"Cả đàn đồng loạt lao vào nhánh san hô khi có bóng đen xuất hiện.",colorTags:["green","blue","silver"],shape:qe({height:.36,noseSharp:.35,tailFork:.75}),palette:$e({base:"#8ae0c0",belly:"#c8f0e0",back:"#4ac0a0",pattern:"none",iridescence:.85,fin:"#a8e8d0",finOpacity:.5}),swim:Ke({cruise:1.5,freqBase:2.8,turnRate:3.2})},{id:"firefish",common:"Cá phi tiêu lửa",scientific:"Nemateleotris magnifica",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:2,minGallons:20,reefSafe:!0,habitat:"Khu đá vụn ở rạn, gần hang trú ẩn.",funFact:"Thường lơ lửng ngược dòng và chui nhanh vào hang khi bị giật mình.",colorTags:["white","red","orange"],shape:qe({height:.22,noseSharp:.3,tailFork:.25,dorsalHeight:1.1,tailSize:.28}),palette:$e({base:"#f2ede0",belly:"#f8f4ea",back:"#e8e0d0",pattern:"headpatch",patternColor:"#f2ede0",patternColor2:"#d82a10",patternParams:[.45,-1],fin:"#e85a2a",finOpacity:.8,iridescence:.3}),swim:Ke({cruise:.6,burst:5,freqBase:2.2,mode:3,amp:.14,turnRate:3.6})},{id:"banggai-cardinal",common:"Cá sơn Banggai",scientific:"Pterapogon kauderni",water:"saltwater",adultSizeIn:3,lengthM:.065,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"hoverer",minGroup:1,bioload:3,minGallons:30,reefSafe:!0,habitat:"Vùng biển quanh quần đảo Banggai, Indonesia.",funFact:"Cá đực ngậm và ấp trứng trong miệng nhiều tuần.",colorTags:["silver","black","white"],shape:qe({height:.55,width:.25,noseSharp:.35,tailFork:.5,finLong:!0,dorsalHeight:.8,analHeight:.7,tailSize:.3}),palette:$e({base:"#c8ccd2",belly:"#e8eaee",back:"#a8adb6",pattern:"vbars",patternColor:"#14161c",patternParams:[3,1.2],fin:"#d0d4da",finOpacity:.55,iridescence:.4}),swim:Ke({cruise:.45,freqBase:1.6,mode:2,amp:.12,turnRate:2})},{id:"sixline-wrasse",common:"Cá bàng chài sáu sọc",scientific:"Pseudocheilinus hexataenia",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"semi-aggressive",careLevel:"easy",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:3,minGallons:30,reefSafe:!0,habitat:"Giữa các nhánh san hô vùng Ấn Độ Dương - Thái Bình Dương.",funFact:"Có thể tạo lớp kén chất nhầy để nghỉ đêm và giảm mùi thu hút kẻ săn mồi.",colorTags:["purple","orange"],shape:qe({height:.26,noseSharp:.55,tailFork:.2}),palette:$e({base:"#c05ae0",belly:"#d88ae8",back:"#a03ac8",pattern:"hstripe",patternColor:"#f09030",patternParams:[3],fin:"#c87ae0",finOpacity:.7,iridescence:.6}),swim:Ke({cruise:1.4,freqBase:2.8,mode:1,turnRate:3.8})},{id:"lawnmower-blenny",common:"Cá bống cạo rêu",scientific:"Salarias fasciatus",water:"saltwater",adultSizeIn:5,lengthM:.09,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:1,maxPerTank:1,bioload:5,minGallons:30,reefSafe:!0,habitat:"Bãi đá rạn san hô Ấn Độ Dương - Thái Bình Dương.",funFact:"Tựa lên vây như chống khuỷu tay, quan sát xung quanh khi gặm tảo.",colorTags:["brown","green"],shape:qe({height:.28,width:.6,noseSharp:.1,tailFork:0,dorsalHeight:.5,eyeSize:.08,eelLike:!0}),palette:$e({base:"#8a8a6a",belly:"#b8b89a",back:"#5a5a44",pattern:"mottle",patternColor:"#3c3c2c",fin:"#9a9a7a",finOpacity:.6,iridescence:.05}),swim:Ke({cruise:.5,burst:4,freqBase:2,mode:0,waveLen:.7,turnRate:3.2})},{id:"flame-angel",common:"Cá thiên thần lửa",scientific:"Centropyge loriculus",water:"saltwater",adultSizeIn:4,lengthM:.08,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:6,minGallons:55,reefSafe:!1,habitat:"Các sườn rạn đá vụn ở Thái Bình Dương.",funFact:"Màu đỏ cam rất nổi bật nhưng có thể rỉa san hô mềm.",colorTags:["red","orange","black"],shape:qe({height:.5,width:.25,noseSharp:.35,tailFork:.15,dorsalHeight:.5}),palette:$e({base:"#e83010",belly:"#f06a40",back:"#d02008",pattern:"vbars",patternColor:"#1a1c24",patternParams:[4,.6],fin:"#e84020",finOpacity:.9,iridescence:.4}),swim:Ke({cruise:1,freqBase:2.2,mode:2,turnRate:3})},{id:"cleaner-shrimp",common:"Tép bác sĩ sọc đỏ",scientific:"Lysmata amboinensis",water:"saltwater",adultSizeIn:2.5,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.5,minGallons:20,reefSafe:!0,invert:!0,habitat:"Các điểm làm sạch ký sinh trên rạn san hô.",funFact:"Cá thường đứng yên để tép làm sạch da và mang.",colorTags:["red","white","yellow"],shape:qe({height:.2,width:.45,noseSharp:.75,tailFork:0,tailSize:.14,dorsalHeight:.05,analHeight:.05,eelLike:!0,barbels:!0}),palette:$e({base:"#e8b06a",belly:"#f2d0a0",back:"#d82a1a",pattern:"hstripe",patternColor:"#f8f4ea",patternParams:[1],iridescence:.2,finOpacity:.3}),swim:Ke({cruise:.25,burst:6,freqBase:1.2,mode:3,turnRate:4})},{id:"turbo-snail",common:"Ốc Turbo",scientific:"Turbo fluctuosus",water:"saltwater",adultSizeIn:2,lengthM:.03,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.3,minGallons:10,reefSafe:!0,invert:!0,habitat:"Bờ đá vùng biển Thái Bình Dương từ Mexico đến Peru.",funFact:"Tên gọi theo hình xoắn vỏ giống khăn quấn, không phải tốc độ.",colorTags:["brown","white"],shape:qe({height:.65,width:.85,noseSharp:0,tailFork:0,tailSize:.01,dorsalHeight:0,analHeight:0}),palette:$e({base:"#a89060",belly:"#d8c8a0",back:"#7a6540",pattern:"mottle",patternColor:"#f0e8d0",iridescence:.15,finOpacity:0}),swim:Ke({cruise:.02,burst:1,freqBase:0,mode:3,turnRate:.5})}],Qc=new Map(I_.map(n=>[n.id,n])),U_=n=>I_.filter(e=>e.water===n),Ql=Math.PI*2,XC=`
  attribute vec4 aDyn;      // per-instance dynamics: x = accumulated swim phase,
                            // y = turn bend (curls body into turns), z = pectoral flap amount
  attribute float aRand;    // per-instance random seed (desynchronizes idle motion)
  attribute float aPart;    // per-vertex: 0 body, 1 caudal fin, 2 median fins, 3 pectorals
  attribute float aFinFlex; // distance of fin membrane from its fixed root
  attribute float aFlutterD;// per-vertex: distance from a pectoral fin's root
  uniform float uWaveLen;   // undulation wavelength in body lengths
  uniform float uAmp;       // tail amplitude as a fraction of body length
  uniform float uMode;      // swim mode: 0 eel … 3 tail-only
  uniform float uFinSoftness; // subtle stiffness per species
`,YC=`
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

  // Real membrane flexion: dorsal / anal tips visibly trail in the XY
  // silhouette (not only in Z, which was invisible from a side camera).
  // Fin roots are welded to the body; the quadratic span makes tips supple.
  // Tail responds to the actual tailbeat, median fins to slower water drift.
  if (aPart > 0.5 && aPart < 2.5 && aFinFlex > 0.0) {
    float finSpan = aFinFlex * aFinFlex;
    float finScale = uFinSoftness * finSpan * (0.72 + 0.32 * aDyn.z);
    if (aPart < 1.5) {
      float tailPhase = aDyn.x - 1.5 * aFinFlex + transformed.y * 4.2;
      transformed.z += finScale * 0.65 * sin(tailPhase);
      transformed.y += finScale * 0.23 * cos(tailPhase);
      transformed.x += finScale * 0.32 * sin(tailPhase + 0.7);
    } else {
      float rippling = uTime * 2.15 + aRand * 7.1
        - transformed.x * 5.3 - aFinFlex * 1.5;
      transformed.z += finScale * 0.72 * sin(rippling);
      transformed.x -= finScale * 0.74 * sin(rippling - 0.6);
      transformed.y += finScale * 0.22 * cos(rippling);
    }
  }
  // A brief jaw opening synchronized to real feeding, not a perpetual loop.
  if (aPart < 0.5 && uFinSoftness > 0.0) {
    float lip = 1.0 - smoothstep(0.01, 0.14, s);
    float lowerJaw = 1.0 - smoothstep(-0.01, 0.015, transformed.y);
    transformed.y -= lip * lowerJaw * aDyn.w * 0.042;
    transformed.x -= lip * lowerJaw * aDyn.w * 0.007;
  }

  // Pectoral fin sculling: hovering fish constantly flutter their side fins
  // (a stationary fish is unstable — RESEARCH.md §3.2). aDyn.z rises as the
  // fish slows down, so flutter appears exactly when swimming stops.
  if (aPart > 2.5) {
    transformed.z += aFlutterD * aDyn.z * 0.35 * sin(uTime * 11.0 + aRand * 37.0);
    transformed.y += aFlutterD * aDyn.z * 0.18 * cos(uTime * 11.0 + aRand * 37.0);
  }

  // Gentle gill/breathing pulse near the head — barely visible, but it's the
  // difference between a fish and a statue when the fish is at rest.
  float headness = smoothstep(0.35, 0.05, s);
  transformed.z *= 1.0 + 0.03 * headness * sin(uTime * 2.4 + aRand * 51.0);
}
`,hg=new Map;function dg(n){let e=hg.get(n.id);return e||(e=qC(n),hg.set(n.id,e)),e}function qC(n){const e=n.id.includes("snail")?ZC():KC(n),t={uWaveLen:{value:n.swim.waveLen},uAmp:{value:n.id.includes("snail")?0:n.swim.amp},uMode:{value:n.swim.mode},uFinSoftness:{value:n.invert||n.shape.eelLike?0:n.id==="angelfish"?.085:n.shape.finLong?.045:.018}},i=$C(n),r=new gi({map:i,roughness:n.shape.eelLike?.49:n.id==="betta"||n.id==="guppy"?.44:.37,metalness:.34*n.palette.iridescence,envMapIntensity:.58+n.palette.iridescence*.65}),s=new gi({color:new Re(n.palette.fin),roughness:n.id==="angelfish"?.92:n.shape.finLong?.78:.67,metalness:0,transparent:!0,opacity:n.id==="angelfish"?n.palette.finOpacity*.72:n.palette.finOpacity,vertexColors:!0,side:jt,depthWrite:!1});for(const o of[r,s])Jc(o,{caustics:!0,causticStrength:.7,vertexPars:XC,vertexHook:YC,extraUniforms:t});return{geometry:e,materials:[r,s],uniforms:t}}function $C(n){const e=NC(n.palette,n.shape),t=e.image,i=t.getContext("2d"),r=t.width,s=t.height,o=r*.115,a=s*(1-.62),l=s*n.shape.eyeSize*2.4;if(i.fillStyle="#d8d2c0",i.beginPath(),i.arc(o,a,l*1.25,0,Ql),i.fill(),i.fillStyle=n.palette.eyeColor??"#0a0a0c",i.beginPath(),i.arc(o,a,l*.85,0,Ql),i.fill(),i.fillStyle="rgba(255,255,255,0.9)",i.beginPath(),i.arc(o-l*.3,a-l*.3,l*.28,0,Ql),i.fill(),!n.id.includes("snail")&&!n.invert){const c=r*.2,h=s*.49,u=s*.15;i.save(),i.lineCap="round",i.strokeStyle="rgba(35,35,45,.22)",i.lineWidth=Math.max(.7,s*.003),i.beginPath(),i.moveTo(c-u*.12,h-u*.55),i.bezierCurveTo(c+u*.25,h-u*.2,c+u*.3,h+u*.3,c-u*.1,h+u*.54),i.stroke(),i.restore()}return e.needsUpdate=!0,e}function Nl(n,e){const t=e.shape,i=t.eelLike?.5:.42,r=n<i?n/i:(1-n)/(1-i);let s=Math.pow(Math.sin(Math.PI/2*le.clamp(r,0,1)),t.eelLike?.35:.8+t.noseSharp*.7);return t.eelLike&&(s=.35+.65*s),t.height/2*s}function KC(n){const e=n.shape,t=30,i=16,r=[],s=[],o=[],a=[],l=[],c=[],h=[],u=1-e.tailSize,d=.5-u;for(let f=0;f<=t;f++){const v=f/t,_=.5-v*u,M=Math.max(.004,Nl(v,n)),b=M*e.width*(1-.07*Math.cos(v*Math.PI*2)),E=M*.12*Math.sin(v*Math.PI);for(let C=0;C<=i;C++){const R=C/i*Ql;r.push(_,E+M*Math.cos(R),b*Math.sin(R)),s.push(.03+v*.82,.5+.5*Math.cos(R)),o.push(0),a.push(0),l.push(0),c.push(1,1,1)}}for(let f=0;f<t;f++)for(let v=0;v<i;v++){const _=f*(i+1)+v,M=_+i+1;h.push(_,M,_+1,M,M+1,_+1)}r.length/3;const p=(f,v,_=0,M=0,b)=>{const E=f[0],C=(R,U,x)=>{const S=r.length/3;r.push(R,U,_+M*Math.abs(R-E[0])),s.push(.87+(R+.5)*.08,.5+U*.35),o.push(v),a.push(b?Math.hypot(R-b[0],U-b[1]):0),l.push(v===1||v===2?x:0);const k=v===1||v===2?1-.13*x:.98;return c.push(k,k*.99,k*.98),S};if(v===1||v===2){const R=e.finLong?5:3;for(let U=1;U<f.length-1;U++){const x=f[U],S=f[U+1],k=C(E[0],E[1],0);let B=k,O=k;for(let X=1;X<=R;X++){const H=X/R,K=C(le.lerp(E[0],x[0],H),le.lerp(E[1],x[1],H),H),D=C(le.lerp(E[0],S[0],H),le.lerp(E[1],S[1],H),H);X===1?h.push(k,K,D):h.push(B,K,O,K,D,O),B=K,O=D}}}else{const R=r.length/3;for(const[U,x]of f)C(U,x,0);for(let U=1;U<f.length-1;U++)h.push(R,R+U,R+U+1)}},g=(f,v,_,M)=>{const b=e.finLong?22:13,E=e.finLong?8:5,C=r.length/3,R=E+1;for(let U=0;U<=b;U++){const x=U/b,S=le.lerp(f,v,x),k=.5-S*u,B=_*(Nl(S,n)*(_>0?1.12:1)),O=n.id==="angelfish"?Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(x,.79))),.83):Math.pow(Math.max(0,Math.sin(Math.PI*x)),e.finLong?.48:1.12),X=n.id==="angelfish"?1+.018*Math.cos(x*Math.PI*16):1,H=O*X*(.86+.14*x),K=M*e.height*H*(n.id==="angelfish"?.46:1);for(let D=0;D<=E;D++){const $=D/E,Z=$*$*(3-2*$),re=n.id==="angelfish"?.075:e.finLong?.06:.013,Ae=k-re*Z*(.55+.45*x),Ge=B+_*K*$*(1+.012*Math.sin(x*16*Math.PI)*$),q=(Math.sin(Math.PI*x)*(n.id==="angelfish"?.033:.018)+Math.sin(x*15+S*3)*.004+Math.sin(x*34)*.003)*Z*_;r.push(Ae,Ge,q),s.push(.87+x*.08,.13+.74*$),o.push(2),a.push(0),l.push($);const te=.8+.2*(.5+.5*Math.cos(x*Math.PI*20)),ce=(1-.3*$)*te;c.push(ce,ce*.995,ce*.98)}}for(let U=0;U<b;U++)for(let x=0;x<E;x++){const S=C+U*R+x,k=S+R;h.push(S,k,S+1,k,k+1,S+1)}};{const f=d+.02,v=-.5,_=e.height*(.55+e.tailFork*.45)*(e.finLong?1.35:1),M=[[f,0]],b=e.finLong?28:16;for(let E=0;E<=b;E++){const C=E/b,R=(.5-C)*_*(1+.007*Math.sin(C*Math.PI*6)),U=Math.pow(Math.abs(.5-C)*2,1.4),x=v+(1-U)*e.tailFork*e.tailSize*.85+(e.finLong?.007*Math.sin(C*Math.PI*12):0);M.push([x,R])}p(M,1)}e.dorsalHeight>.02&&g(e.finLong?.28:.34,e.finLong?.92:.72,1,e.dorsalHeight),e.analHeight>.02&&g(.55,.85,-1,e.analHeight);{const v=.5-.24*u,_=Nl(.24,n)*e.width,M=.13*(e.finLong?1.5:1);for(const b of[1,-1]){const E=[[v,-.02],[v-M*.35,-.02-M*.5],[v-M,-.03-M*.55],[v-M*.8,-.01]];p(E,3,b*_*.95,b*.25,[v,-.02])}}if(!e.eelLike&&!n.invert){const f=.5-.39*u,v=Nl(.39,n);for(const _ of[-1,1]){const M=_*v*e.width*.63;p([[f,-v*.76],[f-.025,-v*.76-.023],[f-.09,-v*.76-.047],[f-.055,-v*.76-.005]],2,M,_*.12)}}const y=new Lt;y.setAttribute("position",new ze(r,3)),y.setAttribute("uv",new ze(s,2)),y.setAttribute("aPart",new ze(o,1)),y.setAttribute("aFlutterD",new ze(a,1)),y.setAttribute("aFinFlex",new ze(l,1)),y.setAttribute("color",new ze(c,3)),y.setIndex(h),y.computeVertexNormals(),y.userData.medianMembraneStrip=e.dorsalHeight>.02||e.analHeight>.02;const m=t*i*6;return y.clearGroups(),y.addGroup(0,m,0),y.addGroup(m,h.length-m,1),y}function ZC(n){const e=new ao(.32,14,10);e.scale(1,.85,.8),e.translate(.02,.3,0);const t=new Qn(.3,.36,.14,12);t.translate(0,.07,0);const i=[e,t],r=[],s=[],o=[],a=[],l=[],c=[];let h=0;for(const d of i){const p=d.getAttribute("position"),g=d.getAttribute("uv"),y=d.getIndex();for(let m=0;m<p.count;m++)r.push(p.getX(m),p.getY(m),p.getZ(m)),s.push(g.getX(m),g.getY(m)),o.push(0),a.push(0),l.push(0);for(let m=0;m<y.count;m++)c.push(y.getX(m)+h);h+=p.count}const u=new Lt;return u.setAttribute("position",new ze(r,3)),u.setAttribute("uv",new ze(s,2)),u.setAttribute("aPart",new ze(o,1)),u.setAttribute("aFlutterD",new ze(a,1)),u.setAttribute("aFinFlex",new ze(l,1)),u.setIndex(c),u.computeVertexNormals(),u.clearGroups(),u.addGroup(0,c.length,0),u.addGroup(c.length,0,1),u}const vh=["wood-approach","cave-inspect","cave-through","wood-interior-graze","cave-rest","second-visitor","cave-jostle","territory-display","brief-chase","nip-and-dodge","school-scout","school-rejoin","school-startle","school-split","yield-to-large","wood-graze","shrimp-root-forage","snail-film-graze","bottom-crumbs","shade-retreat"],JC=n=>n.clone(),Dr=n=>n[Math.floor(Math.random()*n.length)],fg=(n,e)=>n.pos.distanceTo(e.pos),F_=n=>n.sp.id.includes("shrimp"),QC=n=>n.sp.id.includes("snail"),eA=(n,e,t)=>{if(n.sp.invert||n.scale*.38>=e.boreRadius*.73||n.scale>=e.entrance.distanceTo(e.exit)*.55)return!1;const i=Math.max(.007,n.scale*.3);for(let r=0;r<=8;r++){const s=r/8,o=s<.5?e.entrance.clone().lerp(e.middle,s*2):e.middle.clone().lerp(e.exit,(s-.5)*2);for(const a of t.obstacles)if(o.distanceToSquared(a.pos)<Math.pow(a.radius+i,2))return!1}return!0},tA=n=>n.sp.temperament!=="peaceful"&&!n.sp.invert,pg=n=>n.sp.archetype==="bottom"||n.sp.archetype==="cleaner"||F_(n);class nA{constructor(){W(this,"counts",Object.fromEntries(vh.map(e=>[e,0])));W(this,"routes",new Map);W(this,"active",null);W(this,"activeTime",0);W(this,"nextIn",5);W(this,"recent",new Map);W(this,"now",0)}reset(){this.routes.clear(),this.active=null,this.activeTime=0,this.nextIn=7,this.recent.clear()}snapshot(e){return{types:[...vh],counts:{...this.counts},active:this.active,activeFish:[...this.routes.keys()],tunnels:e.tunnels.map(t=>({id:t.id,through:t.through,capacity:t.capacity,radius:t.boreRadius,entry:t.entrance.toArray(),mid:t.middle.toArray(),exit:t.exit.toArray()}))}}occupy(e){return[...this.routes.values()].filter(t=>t.waypoints.some(i=>i.distanceToSquared(e.middle)<Math.pow(e.boreRadius*1.6,2))).length}assign(e,t,i,r=15){const s=i.map(JC);this.routes.set(e.key,{fish:e,waypoints:s,index:0,ttl:r,kind:t,lastDist:1/0,stalled:0,hold:0}),e.mode="cruise",e.modeT=r}safePath(e,t,i){const r=t.clone().sub(e),s=r.lengthSq();if(s<1e-6)return[t.clone()];for(const o of i.obstacles){const a=le.clamp(o.pos.clone().sub(e).dot(r)/s,0,1);if(a<.04||a>.96)continue;const l=e.clone().addScaledVector(r,a),c=o.radius+.04;if(l.distanceToSquared(o.pos)>c*c)continue;const h=new T(-r.z,0,r.x).normalize();h.lengthSq()<.1&&h.set(1,0,0);const u=o.pos.clone().addScaledVector(h,c),d=o.pos.clone().addScaledVector(h,-c),p=y=>e.distanceTo(y)+y.distanceTo(t),g=p(u)<p(d)?u:d;return g.x=le.clamp(g.x,-i.halfW*.82,i.halfW*.82),g.y=le.clamp(t.y,i.floorY+.025,i.surfaceY-.025),g.z=le.clamp(g.z,-i.halfD*.82,i.halfD*.82),[g,t.clone()]}return[t.clone()]}nearWood(e,t){const i=t.tunnels.filter(r=>e.pos.distanceTo(r.middle)<.34);return i.length?(i.sort((r,s)=>e.pos.distanceToSquared(r.middle)-e.pos.distanceToSquared(s.middle)),i[0].middle.clone()):null}update(e,t,i){this.now+=e;for(const[s,o]of this.routes)o.ttl-=e,(o.ttl<=0||!t.includes(o.fish))&&this.routes.delete(s);if(this.active){this.activeTime-=e,(this.activeTime<=0||this.routes.size===0)&&(this.routes.clear(),this.active=null,this.nextIn=8+Math.random()*14);return}if(this.nextIn-=e,this.nextIn>0||t.length===0||i.ecoMode==="relax")return;this.nextIn=5+Math.random()*9;const r=[...vh].sort(()=>Math.random()-.5);for(const s of r)if(this.launch(s,t,i)){this.active=s,this.counts[s]++,this.activeTime=26;break}}launch(e,t,i){const r=t.filter(y=>!y.sp.invert),s=r.filter(y=>y.sp.archetype==="schooler"),o=r.filter(tA),a=t.filter(pg),l=t.filter(F_),c=t.filter(QC),h=i.dayFactor<.5,u=i.tunnels.length?Dr(i.tunnels):null,d=u?r.filter(y=>eA(y,u,i)&&this.recent.get(y.key)?.tunnel!==u.id):[],p=(y,m,f=.38)=>y.filter(v=>v!==m&&fg(v,m)<f),g=(y,m)=>{this.recent.set(y.key,{type:e,tunnel:m,until:this.now+80})};for(const[y,m]of this.recent)m.until<this.now&&this.recent.delete(y);if(e==="wood-approach"||e==="cave-inspect"||e==="cave-through"||e==="wood-interior-graze"||e==="cave-rest"){if(!u||!d.length||this.occupy(u)>=u.capacity)return!1;const y=Dr(d);if(e==="wood-interior-graze"&&!pg(y))return!1;const m=e==="wood-approach"?[u.entrance]:e==="cave-inspect"?[u.entrance,u.middle,u.entrance]:e==="cave-through"&&u.through?[u.entrance,u.middle,u.exit]:e==="wood-interior-graze"?[u.entrance,u.middle,u.entrance]:[u.entrance,u.middle,u.entrance];return this.assign(y,e,m,e==="cave-through"?28:19),g(y,u.id),!0}if(e==="second-visitor"||e==="cave-jostle"){if(!u||d.length<2)return!1;const y=d[0],m=d[1];return this.occupy(u)>=u.capacity?!1:(this.assign(y,e,[u.entrance,u.middle,u.entrance],21),this.assign(m,e,[u.entrance.clone().add(new T(.035,0,.018)),u.entrance],20),g(y,u.id),g(m,u.id),!0)}if(e==="territory-display"||e==="brief-chase"||e==="nip-and-dodge"){const y=o.length?Dr(o):null;if(!y)return!1;const m=p(r,y).filter(M=>M.key!==y.key);if(!m.length)return!1;const f=Dr(m),v=f.pos.clone().sub(y.pos).normalize();v.lengthSq()<.5&&v.set(1,0,0);const _=M=>new T(le.clamp(M.x,-i.halfW*.75,i.halfW*.75),le.clamp(M.y,i.floorY+.03,i.surfaceY-.03),le.clamp(M.z,-i.halfD*.75,i.halfD*.75));if(e==="territory-display")this.assign(y,e,this.safePath(y.pos,_(y.pos.clone().lerp(f.pos,.45)),i),9);else{const M=_(f.pos.clone().addScaledVector(v,.11));this.assign(f,e,this.safePath(f.pos,M,i),8),this.assign(y,e,this.safePath(y.pos,_(y.pos.clone().lerp(M,.6)),i),7)}return g(y,null),g(f,null),!0}if(e==="school-scout"||e==="school-rejoin"||e==="school-startle"||e==="school-split"){const y=new Map;for(const b of s)y.set(b.sp.id,[...y.get(b.sp.id)||[],b]);const m=[...y.values()].filter(b=>b.length>=(e==="school-split"?4:3));if(!m.length)return!1;const f=Dr(m),v=Dr(f),_=new T;for(const b of f)_.add(b.pos);_.multiplyScalar(1/f.length);const M=new T(.06,0,.05);if(e==="school-scout"&&this.assign(v,e,[v.pos.clone().add(M),_],17),e==="school-rejoin"&&this.assign(v,e,[_],12),e==="school-startle")for(const b of f.slice(0,Math.min(f.length,4)))this.assign(b,e,[b.pos.clone().add(M.clone().multiplyScalar((b.rand-.5)*2))],5);return e==="school-split"&&f.slice(0,4).forEach((b,E)=>{this.assign(b,e,[_.clone().add(new T(E%2===0?-.07:.07,0,.03)),_],15)}),g(v,null),!0}if(e==="yield-to-large"){const y=[...r].sort((v,_)=>v.scale-_.scale),m=y[0],f=y[y.length-1];return!m||!f||f.scale<m.scale*1.4||fg(m,f)>.33?!1:(this.assign(m,e,[m.pos.clone().add(new T(0,.02,.06))],8),g(m,null),!0)}if(e==="wood-graze"||e==="shrimp-root-forage"||e==="snail-film-graze"||e==="bottom-crumbs"||e==="shade-retreat"){const y=e==="shrimp-root-forage"?l:e==="snail-film-graze"?c:e==="bottom-crumbs"?a:e==="shade-retreat"?h?r.filter(b=>b.sp.archetype==="nocturnal"||b.sp.archetype==="ambusher"):[]:a;if(!y.length)return!1;const m=Dr(y),f=this.nearWood(m,i);if((e==="wood-graze"||e==="shrimp-root-forage")&&!f||e==="snail-film-graze"&&(m.pos.y>i.floorY+.08||m.pos.distanceTo(f??m.pos)>.22))return!1;const v=f??new T(m.pos.x,i.floorY+.025,m.pos.z),_=e==="shrimp-root-forage"?i.tunnels.find(b=>m.pos.distanceTo(b.entrance)<.32&&m.scale*.4<b.boreRadius*.7&&b.entrance.distanceTo(b.exit)>m.scale*2):null,M=_?[_.entrance,_.middle,_.entrance]:e==="snail-film-graze"?[m.pos.clone().add(new T(.015,0,.01))]:[v.clone().add(new T(.03,.01,0)),v];return this.assign(m,e,M,14),(e.includes("graze")||e.includes("forage")||e==="bottom-crumbs")&&(m.mode="forage"),e==="shade-retreat"&&(m.mode="rest"),g(m,null),!0}return!1}cancelFor(e){this.routes.delete(e.key)}crawl(e,t,i){const r=this.routes.get(e.key);if(!r)return;const s=r.waypoints[r.index];if(!s){this.routes.delete(e.key);return}const o=s.x-e.pos.x,a=s.z-e.pos.z,l=Math.hypot(o,a);if(l<.012){this.routes.delete(e.key);return}const c=Math.min(l,t*.004),h=le.clamp(e.pos.x+o/l*c,-i.halfW*.95,i.halfW*.95),u=le.clamp(e.pos.z+a/l*c,-i.halfD*.95,i.halfD*.95);e.sp.id.includes("snail")&&(e.pos.x=h,e.pos.z=u,e.mode="forage")}steer(e,t,i,r){const s=this.routes.get(e.key);if(!s)return;const o=s.waypoints[s.index];if(!o){this.routes.delete(e.key);return}if(s.hold>0){s.hold-=i,e.mode=s.kind==="cave-rest"?"rest":"forage",e.modeT=Math.max(e.modeT,.25);return}const a=o.clone().sub(e.pos),l=a.length();if(l<Math.max(.018,e.scale*.45)){if(s.index===1&&s.waypoints.length>=3&&(s.kind==="cave-rest"||s.kind==="cave-inspect"||s.kind==="wood-interior-graze")&&(s.hold=s.kind==="cave-rest"?5:s.kind==="cave-inspect"?1.5:3),s.index++,s.index>=s.waypoints.length){this.routes.delete(e.key);return}}else{const c=s.lastDist-l;if(s.stalled=c>5e-5?0:s.stalled+i,s.lastDist=l,s.stalled>6){this.routes.delete(e.key);return}t.addScaledVector(a.divideScalar(Math.max(l,1e-6)),3.2),e.anchor.copy(o),e.mode=s.kind==="shade-retreat"?"rest":s.kind.includes("graze")||s.kind.includes("forage")?"forage":"cruise",e.modeT=Math.max(e.modeT,.3)}}}const Zi=Math.PI*2,mg=.25;function Nr(n){return n.id.includes("snail")||n.id.includes("hillstream")}const iA=new T,an=new T,yh=new T,_h=new xt,gg=new Rt,vg=new rt,rA=new T;class sA{constructor(e){W(this,"bits",[]);W(this,"onEat");W(this,"group",new ri);W(this,"mats",new Map);W(this,"variants",{normal:["pellet-brown.svg","pellet-green.svg"],"fish-cookie":["cookie-fish.png"],"bear-cookie":["cookie-bear.png"]});e.add(this.group);const t=new oC;for(const i of Object.values(this.variants).flat()){const r=t.load(new URL("feed-items/"+i,document.baseURI).href);r.colorSpace=un,this.mats.set(i,new y_({map:r,transparent:!0,depthTest:!1,depthWrite:!1,alphaTest:.02,toneMapped:!1}))}}scatter(e,t,i,r="normal"){this.bits.length>=65&&this.remove(this.bits[0]);const s=this.variants[r],o=s[Math.floor(Math.random()*s.length)],a=new z2(this.mats.get(o)),l=r==="normal"?.012:.0325;a.scale.set(l,l,1),a.visible=!new URLSearchParams(location.search).has("kanban"),a.renderOrder=1500;const c={pos:new T(e,i,t),age:0,state:"sink",kind:r,sprite:a};a.position.copy(c.pos),this.group.add(a),this.bits.push(c)}remove(e){this.group.remove(e.sprite);const t=this.bits.indexOf(e);t>=0&&this.bits.splice(t,1)}update(e,t){for(let i=this.bits.length-1;i>=0;i--){const r=this.bits[i];r.age+=e;const s=r.kind!=="normal";if(r.state==="sink"&&(r.pos.y-=e*(s?.075:.09),r.pos.x+=Math.sin(r.age*2.2+r.pos.z*35)*e*.003,r.pos.y<=t+.01&&(r.pos.y=t+.01,r.state="settled")),r.age>(s?55:26)&&(r.state="gone"),r.state==="gone"){this.remove(r);continue}r.sprite.position.copy(r.pos),r.sprite.material.rotation=Math.sin(r.age*.6+r.pos.x*5)*.08}}get active(){return this.bits.length>0}get hasCookie(){return this.bits.some(e=>e.kind!=="normal"&&e.state!=="gone")}nearest(e,t,i){let r=null,s=1/0;for(const o of this.bits){if(o.state==="gone"||o.age<(o.kind==="normal"?.35:.45))continue;const a=o.kind!=="normal";if(!a&&i&&o.state!=="settled"||!a&&!i&&o.state==="settled")continue;const l=o.pos.distanceToSquared(e);if(l>Math.pow(a?t*1.45:t,2))continue;const c=l/(a?1.7:1);c<s&&(s=c,r=o)}return r}eat(e){e.state="gone",this.remove(e),this.onEat?.()}}class oA{constructor(e){W(this,"group",new ri);W(this,"food");W(this,"onEcoEvent");W(this,"populations",[]);W(this,"feedTimer",0);W(this,"habitat",new nA);W(this,"softFinsOn",!0);W(this,"pendingDrop",null);W(this,"splashes",[]);e.add(this.group),this.food=new sA(this.group)}setSoftFins(e){this.softFinsOn=e;for(const t of this.populations){const i=dg(t.sp);i.uniforms.uFinSoftness.value=this.finSoftness(t.sp)}}finSoftness(e){return!this.softFinsOn||e.invert||e.shape.eelLike?0:e.id==="angelfish"?.085:e.shape.finLong?.045:.018}resetHabitat(){this.habitat.reset()}getHabitatSnapshot(e){return this.habitat.snapshot(e)}getFinSnapshot(){return this.populations.map(e=>({id:e.sp.id,vertices:e.mesh.geometry.getAttribute("position").count,medianStrip:e.mesh.geometry.userData.medianMembraneStrip===!0,medianTips:[...Array(e.mesh.geometry.getAttribute("aFinFlex").count).keys()].filter(t=>e.mesh.geometry.getAttribute("aPart").getX(t)===2&&e.mesh.geometry.getAttribute("aFinFlex").getX(t)>.95).length,flexible:[...Array(e.mesh.geometry.getAttribute("aFinFlex").count).keys()].filter(t=>e.mesh.geometry.getAttribute("aFinFlex").getX(t)>.001).length,mouth:[...e.agents].map(t=>t.jaw)}))}getAngelfishMotionSnapshot(e){return this.populations.filter(t=>t.sp.id==="angelfish").flatMap(t=>t.agents.filter(i=>!i.drop).map(i=>({key:i.key,pos:i.pos.toArray(),vel:i.vel.toArray(),speed:i.vel.length(),mode:i.mode,yaw:i.prevYaw,pitch:i.prevPitch,stuckTime:i.stuckTime,finClearance:this.verticalClearance(i,e),anchor:i.anchor.toArray()})))}collisionRadius(e){return Math.max(.007,e.scale*.3)}verticalClearance(e,t){const i=e.sp.shape,r=e.sp.id==="angelfish"?.54:1,s=Math.max(i.dorsalHeight,i.analHeight)*i.height*r,o=e.scale*(i.height*.5+s)+.005;return Math.min((t.surfaceY-t.floorY)*.43,Math.max(.006,e.scale*.2,o))}constrain(e,t,i=0){const r=e.vel.length(),s=r>1e-6?Math.abs(e.vel.x)/r:.65,o=r>1e-6?Math.abs(e.vel.z)/r:.65,a=Math.min(t.halfW*.82,Math.max(.007,e.scale*(.24+.33*s))),l=Math.min(t.halfD*.82,Math.max(.007,e.scale*(.24+.33*o))),c=this.verticalClearance(e,t),h=-t.halfW+a,u=t.halfW-a,d=-t.halfD+l,p=t.halfD-l,g=t.floorY+c,y=t.surfaceY-c;e.pos.x<h?(e.pos.x=h,e.vel.x=Math.max(0,e.vel.x)):e.pos.x>u&&(e.pos.x=u,e.vel.x=Math.min(0,e.vel.x)),e.pos.z<d?(e.pos.z=d,e.vel.z=Math.max(0,e.vel.z)):e.pos.z>p&&(e.pos.z=p,e.vel.z=Math.min(0,e.vel.z)),e.pos.y<g?(e.pos.y=g,e.vel.y=Math.max(0,e.vel.y)):e.pos.y>y&&(e.pos.y=y,e.vel.y=Math.min(0,e.vel.y));const m=this.collisionRadius(e);for(let R=0;R<6;R++){let U=!1;for(const x of t.obstacles){const S=Math.max(.005,x.radius)+m,k=e.pos.x-x.pos.x,B=e.pos.y-x.pos.y,O=e.pos.z-x.pos.z,X=k*k+B*B+O*O;if(X>=S*S)continue;const H=Math.sqrt(X),K=H>1e-6?k/H:1,D=H>1e-6?B/H:0,$=H>1e-6?O/H:0;e.pos.x=le.clamp(x.pos.x+K*(S+.001),h,u),e.pos.y=le.clamp(x.pos.y+D*(S+.001),g,y),e.pos.z=le.clamp(x.pos.z+$*(S+.001),d,p);const Z=e.vel.x*K+e.vel.y*D+e.vel.z*$;Z<0&&(e.vel.x-=Z*K,e.vel.y-=Z*D,e.vel.z-=Z*$),U=!0}if(!U)break}const f=(R,U,x)=>{let S=0;for(const k of t.obstacles){const B=R-k.pos.x,O=U-k.pos.y,X=x-k.pos.z,H=Math.sqrt(B*B+O*O+X*X);S=Math.max(S,k.radius+m-H)}return Math.max(0,S)},v=f(e.pos.x,e.pos.y,e.pos.z);if(v>.006){const R=e.pos.x,U=e.pos.y,x=e.pos.z;let S=R,k=U,B=x,O=v*80,X=!1;const H=[.018,.04,.075,.12,.19,.27];for(const K of H){for(let D=0;D<16;D++){const $=D*(Math.PI/8)+e.rand*Math.PI*.5,Z=le.clamp(R+Math.cos($)*K,h,u),re=le.clamp(x+Math.sin($)*K,d,p);for(const Ae of[0,-.035,.035,-.08,.08]){const Ge=le.clamp(U+Ae,g,y),q=f(Z,Ge,re),te=Math.hypot(Z-R,Ge-U,re-x),ce=q*80+te*.5;if(ce<O&&(O=ce,S=Z,k=Ge,B=re,q<.002)){X=!0;break}}if(X)break}if(X)break}O<v*80&&(e.pos.set(S,k,B),Math.hypot(S-R,k-U,B-x)>.035&&e.vel.multiplyScalar(.4))}if(e.sp.id==="angelfish"){const R=e.pos.distanceTo(e.moveOrigin);if(e.stuckTime=R<Math.max(4e-5,e.scale*7e-4)?e.stuckTime+i:Math.max(0,e.stuckTime-i*2),e.moveOrigin.copy(e.pos),e.stuckTime>2.5&&!e.drop){e.stuckTime=0,e.mode="cruise",e.modeT=4+Math.random()*3,this.newAnchorNear(e,t,.7),e.vel.y=0;const U=e.anchor.clone().sub(e.pos).setY(0);U.lengthSq()>1e-7&&e.vel.addScaledVector(U.normalize(),.006)}}const _=e.vel.length(),M=_>1e-6?Math.abs(e.vel.x)/_:.65,b=_>1e-6?Math.abs(e.vel.z)/_:.65,E=Math.min(t.halfW*.82,Math.max(.007,e.scale*(.24+.33*M))),C=Math.min(t.halfD*.82,Math.max(.007,e.scale*(.24+.33*b)));e.pos.x=le.clamp(e.pos.x,-t.halfW+E,t.halfW-E),e.pos.z=le.clamp(e.pos.z,-t.halfD+C,t.halfD-C),e.pos.y=le.clamp(e.pos.y,g,y)}getMovementSnapshot(){return this.populations.map(e=>{const t=e.agents.filter(r=>!r.drop),i=Math.max(1,t.length);return{species:e.sp.id,count:t.length,meanSpeed:t.reduce((r,s)=>r+s.vel.length(),0)/i,turns:t.reduce((r,s)=>r+Math.abs(s.bend),0)/i,meshVertices:e.mesh.geometry.getAttribute("position").count,finGroups:e.mesh.geometry.groups.length}})}getPhysicsSnapshot(e){let t=0,i=0,r=0,s=0;for(const o of this.populations)for(const a of o.agents){if(Nr(a.sp)||a.drop)continue;t++;const l=a.vel.length(),c=l>1e-6?Math.abs(a.vel.x)/l:.65,h=l>1e-6?Math.abs(a.vel.z)/l:.65,u=Math.min(e.halfW*.82,Math.max(.007,a.scale*(.24+.33*c))),d=Math.min(e.halfD*.82,Math.max(.007,a.scale*(.24+.33*h))),p=this.verticalClearance(a,e);(Math.abs(a.pos.x)>e.halfW-u+.002||Math.abs(a.pos.z)>e.halfD-d+.002||a.pos.y<e.floorY+p-.002||a.pos.y>e.surfaceY-p+.002)&&i++;for(const g of e.obstacles){const y=g.radius+this.collisionRadius(a)-a.pos.distanceTo(g.pos);y>.004&&(r++,s=Math.max(s,y))}}return{fish:t,wallViolations:i,solidOverlaps:r,maxOverlap:s}}queueDrop(e,t){this.pendingDrop={x:e,z:t}}splash(e,t,i){const r=new bp(.018,.03,32),s=new vo({color:10219263,transparent:!0,opacity:.88,depthTest:!1,depthWrite:!1,side:jt}),o=new Ee(r,s);o.rotation.x=-Math.PI/2,o.position.set(e,i+.01,t),o.renderOrder=1490,this.group.add(o),this.splashes.push({mesh:o,age:0})}updateSplashes(e){for(let t=this.splashes.length-1;t>=0;t--){const i=this.splashes[t];i.age+=e;const r=Math.min(1,i.age/1.1);i.mesh.scale.setScalar(1+r*4),i.mesh.material.opacity=(1-r)*.85,r>=1&&(this.group.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.splashes.splice(t,1))}}animateDrop(e,t,i){const r=e.drop;if(!r)return!1;if(r.elapsed+=t,r.stage==="fall")r.velocityY-=1.7*t,e.pos.y+=r.velocityY*t,e.vel.set(.003,r.velocityY,.003),e.pos.y<=i.surfaceY-e.scale*.32&&(e.pos.y=i.surfaceY-e.scale*.32,r.stage="dive",r.elapsed=0,this.splash(e.pos.x,e.pos.z,i.surfaceY));else{const s=Math.min(1,r.elapsed/.85),o=s*s*(3-2*s);e.pos.y=le.lerp(i.surfaceY-e.scale*.32,r.targetY,o),e.vel.set(.035,-.08,.004),s>=1&&(e.drop=void 0,e.mode="dart",e.modeT=1.1)}return!0}rebuild(e,t,i){const r=new Map(this.populations.flatMap(a=>a.agents.map(l=>[l.key,l])));for(const a of this.populations)this.group.remove(a.mesh),a.mesh.dispose();this.populations=[],this.habitat.reset();const s=Object.values(e).reduce((a,l)=>a+l,0),o=s>i?i/s:1;for(const[a,l]of Object.entries(e)){const c=Qc.get(a);if(!c||l<=0)continue;const h=Math.max(1,Math.round(l*o)),u=dg(c);u.uniforms.uFinSoftness.value=this.finSoftness(c);const d=new H2(u.geometry,u.materials,h);d.frustumCulled=!1,d.userData.speciesId=a;const p=new Pc(new Float32Array(h*4),4);p.setUsage(aw);const g=new Pc(new Float32Array(h),1);u.geometry.setAttribute("aDyn",p),u.geometry.setAttribute("aRand",g);const y=[];for(let f=0;f<h;f++){g.setX(f,Math.random());const v=this.spawnAgent(c,f,t),_=r.get(v.key);if(_&&(v.pos.copy(_.pos),v.vel.copy(_.vel),v.anchor.copy(_.anchor),v.mode=_.mode,v.modeT=_.modeT,v.phase=_.phase,v.prevPitch=_.prevPitch??0,v.stuckTime=_.stuckTime??0,v.moveOrigin.copy(_.moveOrigin??_.pos),v.jaw=_.jaw??0,v.jawTime=_.jawTime??0,v.rand=_.rand,v.scale=_.scale,v.hunger=_.hunger,v.drop=_.drop?{..._.drop}:void 0),!_&&this.pendingDrop&&!Nr(c)){const M=this.pendingDrop;this.pendingDrop=null,v.pos.set(M.x,t.surfaceY+Math.max(.13,t.surfaceY*.22),M.z),v.vel.set(0,-.03,0);const b=this.zoneBand(c,t);v.drop={stage:"fall",velocityY:-.03,elapsed:0,targetY:le.lerp(b[0],b[1],.55)}}!Nr(c)&&!v.drop&&this.constrain(v,t),y.push(v)}g.needsUpdate=!0;const m={sp:c,mesh:d,agents:y,dyn:p};this.populations.push(m),this.group.add(d)}this.pendingDrop=null,r.size===0&&(this.feedTimer=0)}spawnAgent(e,t,i){const r=this.zoneBand(e,i),s=new T((Math.random()-.5)*i.halfW*1.6,le.lerp(r[0],r[1],Math.random()),(Math.random()-.5)*i.halfD*1.6),o=new T((Math.random()-.5)*.05,0,(Math.random()-.5)*.05),a={sp:e,index:t,key:`${e.id}:${t}`,pos:s,vel:o,phase:Math.random()*Zi,bend:0,flap:0,jaw:0,jawTime:0,rand:Math.random(),scale:e.lengthM*(.82+Math.random()*.36),mode:"cruise",modeT:1+Math.random()*4,anchor:new T((Math.random()-.5)*i.halfW*1.4,le.lerp(r[0],r[1],.5),(Math.random()-.5)*i.halfD*1.4),prevYaw:Math.atan2(-o.z,o.x),prevPitch:0,moveOrigin:s.clone(),stuckTime:0,hunger:0};if(Nr(e)){const l=["floor","back","left","right"];a.wall=l[t%l.length],a.crawlDir=Math.random()*Zi}return a}zoneBand(e,t){const i=t.surfaceY-t.floorY;switch(e.zone){case"top":return[t.floorY+i*.68,t.floorY+i*.92];case"bottom":return[t.floorY+i*.02,t.floorY+i*.22];default:return[t.floorY+i*.3,t.floorY+i*.7]}}feed(e,t,i,r="normal",s=i.surfaceY-.035){this.food.scatter(e,t,s,r),this.feedTimer=75}findByKey(e){for(const t of this.populations)for(const i of t.agents)if(i.key===e)return{agent:i,sp:t.sp};return null}agentAt(e,t){return this.populations.find(r=>r.sp.id===e)?.agents[t]??null}update(e,t){e=Math.min(e,.05),this.feedTimer=Math.max(0,this.feedTimer-e),this.food.update(e,t.floorY),this.updateSplashes(e);const i=this.populations.flatMap(r=>r.agents);this.habitat.update(e,i,t);for(const r of this.populations){const{sp:s,agents:o,mesh:a,dyn:l}=r;for(const c of o)this.animateDrop(c,e,t)||(Nr(s)?(this.updateCrawler(c,e,t),this.habitat.crawl(c,e,t)):this.updateFish(c,o,e,t)),!Nr(s)&&!c.drop&&this.constrain(c,t,e),this.writeInstance(r,c,e);a.instanceMatrix.needsUpdate=!0,l.needsUpdate=!0}}updateFish(e,t,i,r){const s=e.sp,o=e.scale;e.feedDistance=void 0,e.jawTime=Math.max(0,e.jawTime-i),e.jaw=le.damp(e.jaw,e.jawTime>0?1:0,e.jawTime>0?19:11,i);const a=s.swim.cruise*o*mg,l=a*s.swim.burst,h=s.archetype==="nocturnal"?le.lerp(1.15,.25,r.dayFactor):le.lerp(.3,1,r.dayFactor);e.modeT-=i,e.modeT<=0&&this.pickMode(e,r,h);const u=iA.set(0,0,0),d=s.id==="angelfish",p=d?Math.max(.035,o*.9):Math.max(.065,o*2.3),g=b=>le.clamp((p-b)/p,0,1)**2*1.6;u.x+=g(e.pos.x+r.halfW)-g(r.halfW-e.pos.x),u.z+=g(e.pos.z+r.halfD)-g(r.halfD-e.pos.z);const y=d?this.verticalClearance(e,r):0;u.y+=g(e.pos.y-r.floorY-y)-g(r.surfaceY-y-e.pos.y);for(const b of r.obstacles){an.copy(e.pos).sub(b.pos);const E=an.length();E<b.radius+p+this.collisionRadius(e)&&E>1e-5&&u.addScaledVector(an.divideScalar(E),(b.radius+p+this.collisionRadius(e)-E)/Math.max(b.radius,.025)*1.3)}if(!e.gulp){const[b,E]=this.zoneBand(s,r);e.pos.y<b&&(u.y+=(b-e.pos.y)*1.6),e.pos.y>E&&(u.y-=(e.pos.y-E)*1.6)}if(e.gulp==="up"&&e.pos.y>r.surfaceY-o*2.2?(e.gulp="down",e.mode="dart",e.modeT=3,e.anchor.set(e.pos.x+(Math.random()-.5)*.1,r.floorY+o,e.pos.z+(Math.random()-.5)*.1)):e.gulp==="down"&&e.pos.y<r.floorY+o*2&&(e.gulp=void 0,e.mode="forage",e.modeT=2+Math.random()*3),s.archetype==="schooler"&&t.length>1&&this.boids(e,t,u,o),this.archetypeSteer(e,u,r,h),this.habitat.steer(e,u,i,r),this.feedTimer>0&&this.food.active&&(e.mode!=="rest"||this.food.hasCookie)){const b=s.zone==="bottom",E=this.food.nearest(e.pos,Math.max(.17,o*6),b);if(E){this.habitat.cancelFor(e);const C=E.kind!=="normal";an.copy(E.pos).sub(e.pos);const R=an.length();if(e.feedDistance=R,R<o*.43+.003)this.food.eat(E),e.jawTime=.24,e.mode="feed",e.modeT=.26,e.gulp=void 0;else if(R>1e-6){const U=an.divideScalar(R);((e.vel.lengthSq()>1e-6?U.dot(e.vel.clone().normalize()):1)>-.65||R<o*1.8)&&(R<o*1.2&&(e.jawTime=Math.max(e.jawTime,.085)),u.addScaledVector(U,C?3.15:2.35),e.mode="feed",e.modeT=Math.max(e.modeT,.45))}}}r.current.sample(e.pos,an),e.pos.addScaledVector(an,i),an.length()>.03&&u.addScaledVector(an.normalize(),-.25);const f=r.time*(r.reducedMotion?.5:1);s.id==="guppy"?(u.y+=Math.sin(f*.73+e.rand*24)*.16,u.x+=Math.sin(f*.85+e.rand*18)*.14):s.id==="betta"||s.id==="angelfish"?u.y+=Math.sin(f*.33+e.rand*25)*.055:s.id==="ocellaris-clown"?(u.x+=Math.cos(f*.8+e.rand*11)*.1,u.y+=Math.sin(f*.63+e.rand*19)*.11):s.id==="blue-tang"||s.id==="yellow-tang"?u.z+=Math.sin(f*.58+e.rand*21)*.09:s.id==="dwarf-gourami"||s.id==="honey-gourami"?u.y+=Math.sin(f*.39+e.rand*14)*.065:s.id.includes("corydoras")&&e.mode==="forage"?(u.y-=.13,u.x+=Math.sin(f*1.7+e.rand*13)*.24):s.archetype==="schooler"&&(u.z+=Math.sin(f*1.13+e.rand*18)*.13),u.x+=Math.sin(f*.7+e.rand*40)*.22,u.z+=Math.cos(f*.53+e.rand*71)*.22,u.y+=Math.sin(f*.41+e.rand*23)*.1;let v=a*h;if(s.id==="betta"&&(v*=.77),d&&(v*=1.06),s.id==="guppy"&&(v*=1.08),s.id==="ocellaris-clown"&&(v*=.88),(s.id==="dwarf-gourami"||s.id==="honey-gourami")&&(v*=.82),e.mode==="rest"&&(v=a*(d?.42:.06)),e.mode==="dart"&&(v=l*(s.id==="betta"?.63:s.id==="angelfish"?.72:1)),e.mode==="feed"&&(v=a*(this.food.hasCookie?1.5:1.2),e.feedDistance!==void 0)){const b=le.clamp(e.feedDistance/(o*2.6),.22,1);v*=b}e.mode==="forage"&&(v=a*.4),r.ecoMode==="natural"&&(v*=Math.max(.86,Math.min(1.03,r.ecoComfort??1))),r.ecoMode==="natural"&&e.mode==="rest"&&(v*=.75);const _=e.mode==="dart"?4:1.8;e.vel.addScaledVector(u,i*_*Math.max(a,.05)*6);const M=e.vel.length();if(M>1e-6){const b=le.damp(M,v,2.2,i);e.vel.multiplyScalar(b/M)}else e.vel.set(.01,0,0);e.gulp||(e.vel.y*=1-.6*i),e.pos.addScaledVector(e.vel,i)}pickMode(e,t,i){const r=e.sp,s=Math.random();if(t.ecoMode==="natural"){const o=Math.random();if((r.archetype==="bottom"||r.archetype==="cleaner")&&o<.2){e.mode="forage",e.modeT=3+Math.random()*5,this.newAnchorNear(e,t,.2),this.onEcoEvent?.("graze");return}if((r.archetype==="solitary"||r.archetype==="ambusher"||r.archetype==="hoverer")&&o<(r.id==="angelfish"?.055:.16)){e.mode="rest",e.modeT=4+Math.random()*7,r.id==="angelfish"?e.anchor.copy(e.pos):this.anchorToShelter(e,t),this.onEcoEvent?.(t.shelters.length?"shelter":"rest");return}if(r.archetype==="schooler"&&o<.045&&!t.reducedMotion){e.mode="dart",e.modeT=.35+.35*Math.random(),this.onEcoEvent?.("school");return}}switch(r.archetype){case"schooler":s<.06&&!t.reducedMotion?(e.mode="dart",e.modeT=.5):(e.mode="cruise",e.modeT=3+Math.random()*6);break;case"solitary":e.mode=s<.25?"rest":"cruise",e.modeT=3+Math.random()*5,e.mode==="cruise"&&this.newAnchorNear(e,t,.6);break;case"bottom":e.gulp=void 0,e.mode=s<.55?"forage":"cruise",e.modeT=2+Math.random()*5,s>.9&&r.id.includes("corydoras")?(e.mode="dart",e.gulp="up",e.anchor.set(e.pos.x,t.surfaceY-.02,e.pos.z),e.modeT=5):this.newAnchorNear(e,t,.4);break;case"hoverer":e.mode=s<(r.id==="angelfish"?.12:.6)?"rest":"cruise",e.modeT=r.id==="angelfish"?3+Math.random()*4:4+Math.random()*6,e.mode==="cruise"?this.newAnchorNear(e,t,.5):r.id==="angelfish"&&e.anchor.copy(e.pos);break;case"ambusher":s<.75*(2-i)?(e.mode="rest",e.modeT=6+Math.random()*10,this.anchorToShelter(e,t)):(e.mode="dart",e.modeT=.8,this.newAnchorNear(e,t,.9));break;case"nocturnal":i<.6?(e.mode="rest",e.modeT=8+Math.random()*8,this.anchorToShelter(e,t)):(e.mode=s<.4?"forage":"cruise",e.modeT=3+Math.random()*4,this.newAnchorNear(e,t,.5));break;case"surface":s<.12&&!t.reducedMotion?(e.mode="dart",e.modeT=.4):(e.mode="cruise",e.modeT=2+Math.random()*4);break;case"cleaner":e.mode=s<.7?"forage":"cruise",e.modeT=2+Math.random()*4,e.mode==="cruise"&&this.newAnchorNear(e,t,.25);break}}newAnchorNear(e,t,i){const[r,s]=this.zoneBand(e.sp,t),o=e.sp.id==="angelfish",a=o?this.verticalClearance(e,t)+.014:0,l=Math.max(r,t.floorY+a),c=Math.max(l,Math.min(s,t.surfaceY-a)),h=e.pos.clone();for(let u=0;u<(o?18:1);u++){const d=le.clamp(h.x+(Math.random()-.5)*t.halfW*2*i,-t.halfW*.72,t.halfW*.72),p=le.clamp(h.z+(Math.random()-.5)*t.halfD*2*i,-t.halfD*.68,t.halfD*.68),g=le.lerp(l,c,Math.random());if(e.anchor.set(d,g,p),!o||t.obstacles.every(y=>e.anchor.distanceTo(y.pos)>y.radius+this.collisionRadius(e)+.035))break}}anchorToShelter(e,t){if(t.shelters.length>0){const i=t.shelters[Math.floor(e.rand*t.shelters.length)%t.shelters.length];e.anchor.copy(i).add(yh.set((e.rand-.5)*.15,.02+e.rand*.05,(e.rand-.5)*.15))}else e.anchor.set(e.pos.x,t.floorY+.03,e.pos.z)}boids(e,t,i,r){const s=r*1.6,o=r*7,a=an.set(0,0,0),l=yh.set(0,0,0),c=new T;let h=0,u=0;for(const d of t){if(d===e)continue;const p=d.pos.x-e.pos.x,g=d.pos.y-e.pos.y,y=d.pos.z-e.pos.z,m=p*p+g*g+y*y;if(m>o*o||m<1e-8||p*e.vel.x+g*e.vel.y+y*e.vel.z<0&&m>s*s)continue;const v=Math.sqrt(m);v<s&&(a.x-=p/v*(s-v)/s,a.y-=g/v*(s-v)/s,a.z-=y/v*(s-v)/s,h++),l.add(d.vel),c.set(c.x+p,c.y+g,c.z+y),u++}h>0&&i.addScaledVector(a.normalize(),2),u>0&&(i.addScaledVector(l.normalize(),.5),i.addScaledVector(c.normalize(),.5))}archetypeSteer(e,t,i,r){const s=e.gulp?3.5:{schooler:.15,solitary:.6,bottom:.8,hoverer:.5,ambusher:1.4,nocturnal:.9,surface:.2,cleaner:1.6}[e.sp.archetype];an.copy(e.anchor).sub(e.pos);const o=an.length();o>(e.sp.id==="angelfish"?.018:.05)&&t.addScaledVector(an.divideScalar(o),s*(e.sp.id==="angelfish"?2.5:1)*Math.min(1,o*(e.sp.id==="angelfish"?5:2))),(e.sp.archetype==="bottom"||e.sp.archetype==="nocturnal")&&e.mode==="forage"&&(t.y-=.5),e.sp.archetype==="surface"&&(t.y+=(i.surfaceY-.04-e.pos.y)*3)}updateCrawler(e,t,i){const r=e.sp.id.includes("hillstream");let s=.004;i.ecoMode==="natural"&&!r&&(e.modeT-=t,e.modeT<=0&&(e.mode=e.mode==="forage"?"rest":"forage",e.modeT=e.mode==="rest"?1.5+Math.random()*3:4+Math.random()*7,e.mode==="forage"&&this.onEcoEvent?.("graze")),e.mode==="rest"&&(s=35e-5)),r&&(e.modeT-=t,e.modeT<=0&&(e.mode=e.mode==="dart"?"forage":"dart",e.modeT=e.mode==="dart"?.5+Math.random():3+Math.random()*6,e.mode==="dart"&&(e.crawlDir=Math.random()*Zi)),s=e.mode==="dart"?.06:.003),e.crawlDir+=(Math.random()-.5)*t*.8;const o=e.crawlDir;if(e.wall==="floor")e.pos.y=i.floorY+.002,e.pos.x+=Math.cos(o)*s*t,e.pos.z+=Math.sin(o)*s*t,e.pos.x=le.clamp(e.pos.x,-i.halfW*.95,i.halfW*.95),e.pos.z=le.clamp(e.pos.z,-i.halfD*.95,i.halfD*.95);else{const a=Math.cos(o)*s*t,l=Math.sin(o)*s*t;e.wall==="back"&&(e.pos.z=-i.halfD+.006,e.pos.x+=a,e.pos.y+=l),e.wall==="left"&&(e.pos.x=-i.halfW+.006,e.pos.z+=a,e.pos.y+=l),e.wall==="right"&&(e.pos.x=i.halfW-.006,e.pos.z+=a,e.pos.y+=l),e.pos.y=le.clamp(e.pos.y,i.floorY+.03,i.surfaceY-.04),e.pos.x=le.clamp(e.pos.x,-i.halfW*.95,i.halfW*.95),e.pos.z=le.clamp(e.pos.z,-i.halfD*.95,i.halfD*.95),(e.pos.y>=i.surfaceY-.041||e.pos.y<=i.floorY+.031)&&(e.crawlDir=-o)}e.vel.set(Math.cos(o),0,Math.sin(o)).multiplyScalar(Math.max(s,.001))}writeInstance(e,t,i){const r=t.sp,s=t.vel.length();let o,a,l=null;if(Nr(r)&&t.wall&&t.wall!=="floor")o=t.crawlDir,a=0,l=yh.set(t.wall==="back"?0:t.wall==="left"?1:-1,0,t.wall==="back"?1:0);else{const g=Math.hypot(t.vel.x,t.vel.z);let m=(r.id==="angelfish"&&g<.0035?t.prevYaw:Math.atan2(-t.vel.z,t.vel.x))-t.prevYaw;for(;m>Math.PI;)m-=Zi;for(;m<-Math.PI;)m+=Zi;const f=r.swim.turnRate*i*(r.id==="betta"?.67:r.id==="angelfish"?.43:1);o=t.prevYaw+le.clamp(m,-f,f),a=Math.asin(le.clamp(s>1e-5?t.vel.y/s:0,-1,1));const v=t.gulp?1.25:.5;a=le.clamp(a,-v,r.id==="angelfish"?.19:v),r.id==="angelfish"&&(a=le.damp(t.prevPitch,a,2.8,i))}let c=o-t.prevYaw;c>Math.PI&&(c-=Zi),c<-Math.PI&&(c+=Zi),t.prevYaw=o,t.prevPitch=a;const h=le.clamp(-c/Math.max(i,1e-4)*s*(r.id==="angelfish"?.55:1.4),r.id==="angelfish"?-.18:-.6,r.id==="angelfish"?.18:.6);t.bend=le.damp(t.bend,le.clamp(c/Math.max(i,1e-4)*.5,-.5,.5),6,i),gg.set(h*.6,o,a,"YZX"),_h.setFromEuler(gg),l&&_h.setFromUnitVectors(an.set(0,1,0),l.normalize()),vg.compose(t.pos,_h,rA.set(t.scale,t.scale,t.scale)),e.mesh.setMatrixAt(t.index,vg);const u=t.scale,d=r.swim.freqBase*.35+s/(.7*u+1e-6);t.phase+=Zi*Math.min(d,14)*i;const p=le.clamp(s/(r.swim.cruise*u*mg+1e-6),0,1);t.flap=le.damp(t.flap,1-p*.85,4,i),e.dyn.setXYZW(t.index,t.phase,t.bend,t.flap,t.jaw)}}class k_{constructor(e){W(this,"renderer");W(this,"scene",new v_);W(this,"rig");W(this,"callbacks",{});W(this,"composer",null);W(this,"bloomPass",null);W(this,"environment");W(this,"decor");W(this,"flora");W(this,"fish");W(this,"current",new PC);W(this,"clock",new C_);W(this,"simEnv");W(this,"dims",{halfW:.5,halfD:.25,height:.5,floorY:0,surfaceY:.48});W(this,"config",null);W(this,"quality",Oo.medium);W(this,"requestedTier","auto");W(this,"dayFactor",1);W(this,"raycaster",new ng);W(this,"running",!0);W(this,"firstFrameDone",!1);W(this,"disposed",!1);W(this,"frameTimes",[]);W(this,"feedMode",!1);W(this,"kanAquariumMode",new URLSearchParams(location.search).has("kanban"));W(this,"clickFoodCount",0);W(this,"lastFoodSpawn",null);W(this,"pointerDown",{x:0,y:0});W(this,"foodLayer",null);W(this,"foodElements",new Map);W(this,"foodOccluders",[]);W(this,"foodDepthCache",new WeakMap);W(this,"foodDepthRay",new ng);W(this,"foodDepthRayDirection",new T);W(this,"lastCycleT",0);W(this,"stats",{fps:60,drawCalls:0,triangles:0,fishCount:0});W(this,"ecology",new TC);W(this,"ecoMode","natural");W(this,"onVisibility",()=>{this.running=document.visibilityState==="visible"});W(this,"applySize",()=>{const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight,i=Math.min(window.devicePixelRatio||1,this.quality.pixelRatioCap);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t),this.rig.camera.aspect=e/t,this.rig.camera.updateProjectionMatrix(),this.rebuildComposer(e,t)});W(this,"lastStructureKey","");W(this,"lastFishKey","");W(this,"rememberPointer",e=>{this.pointerDown={x:e.clientX,y:e.clientY}});W(this,"onRightClick",e=>{this.kanAquariumMode&&(e.preventDefault(),e.shiftKey?this.callbacks.onRemoveFish?.():this.callbacks.onAddFish?.(e.clientX,e.clientY))});W(this,"onClick",e=>{if(e.button!==0)return;if(this.kanAquariumMode){if(Math.hypot(e.clientX-this.pointerDown.x,e.clientY-this.pointerDown.y)>9)return;const s=this.clickFoodCount+1,o=s%10===0?s/10%2===1?"fish-cookie":"bear-cookie":"normal";this.feedAt(e.clientX,e.clientY,o,s)&&(this.clickFoodCount=s);return}if(this.rig.lastPointerTravel>8)return;const t=this.toNdc(e.clientX,e.clientY);this.raycaster.setFromCamera(t,this.rig.camera);const i=this.fish.populations.map(s=>s.mesh),r=this.raycaster.intersectObjects(i,!1);if(r.length>0&&r[0].instanceId!==void 0){const s=r[0].object.userData.speciesId,o=this.fish.agentAt(s,r[0].instanceId);if(o){this.callbacks.onFishPicked?.(o.key);return}}if(this.feedMode){this.feedAt(e.clientX,e.clientY);return}this.callbacks.onFishPicked?.(null)});W(this,"tick",()=>{if(this.disposed)return;const e=Math.min(this.clock.getDelta(),.1);this.running&&this.advance(e)});if(this.container=e,EC(),this.renderer=new F2({antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=op,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=un,e.appendChild(this.renderer.domElement),this.renderer.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:none;",this.kanAquariumMode){const i=document.createElement("div");i.id="kan-food-layer",i.className="kan-food-layer",i.setAttribute("aria-label","Thức ăn cá đang rơi trong hồ"),i.setAttribute("data-food-count","0"),e.appendChild(i),this.foodLayer=i}const t=new ef(this.renderer);this.scene.environment=t.fromScene(new MC,.06).texture,t.dispose(),this.scene.background=new Re("#04141f"),this.rig=new RC(this.renderer.domElement,1),this.environment=new zC(this.scene),this.decor=new BC(this.scene),this.flora=new jC(this.scene),this.fish=new oA(this.scene),this.fish.onEcoEvent=i=>this.ecology.event(i),this.fish.food.onEat=()=>this.ecology.eat(),this.simEnv={time:0,dayFactor:1,halfW:.5,halfD:.25,floorY:0,surfaceY:.48,current:this.current,reducedMotion:!1,obstacles:[],shelters:[],tunnels:[],ecoMode:"natural",ecoComfort:1},new URLSearchParams(location.search).get("qa")==="1"&&(window.__kanEcoFastForward=i=>{const r=Math.min(3600,Math.max(0,Math.ceil(i/.05)));for(let s=0;s<r;s++)this.simEnv.time+=.05,this.current.time=this.simEnv.time,this.ecology.advance(.05,this.ecoMode,this.dayFactor,this.fish.food.bits.filter(o=>o.state==="settled").length),this.fish.update(.05,this.simEnv);return this.ecology.snapshot()},window.__kanFoodProbe=()=>({count:this.clickFoodCount,dims:{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,surfaceY:this.dims.surfaceY},lastSpawn:this.lastFoodSpawn?.toArray()??null,lastScreen:this.lastFoodSpawn?(()=>{const i=this.lastFoodSpawn.clone().project(this.rig.camera);return[i.x,i.y,i.z]})():null,obstacles:this.simEnv.obstacles.map(i=>[i.pos.x,i.pos.y,i.pos.z,i.radius]),food:this.fish.food.bits.map(i=>({pos:i.pos.toArray(),kind:i.kind,state:i.state,age:i.age}))}),window.__kanFoodTestCamera=i=>this.setCameraMode(i),window.__kanHabitatPopulate=(i,r)=>{this.config&&this.applyConfig({...this.config,fish:{[i]:Math.min(60,Math.max(0,r))}},!0)},window.__kanVisualHotfixScene=()=>this.config?(this.applyConfig({...this.config,name:"Realism visual hotfix QA",gallons:75,water:"freshwater",fish:{angelfish:6,betta:1,guppy:8},decor:["driftwood","hollow-log","split-log","log-arch"],flora:{},lighting:"daylight"},!0),this.setCameraMode("still"),!0):!1,window.__kanVisualFinToggle=i=>this.setSoftFins(i),window.__kanAngelfishMotionScene=i=>{this.config&&(this.applyConfig({...this.config,water:"freshwater",gallons:85,name:"Angelfish motion test",fish:{angelfish:6},decor:i?["hollow-log","split-log","driftwood","river-rocks"]:[],flora:{},lighting:"daylight"},!0),this.setCameraMode("still"))},window.__kanAngelfishMotionProbe=()=>({fish:this.fish.getAngelfishMotionSnapshot(this.simEnv),dims:{floorY:this.simEnv.floorY,surfaceY:this.simEnv.surfaceY,halfW:this.simEnv.halfW,halfD:this.simEnv.halfD},physics:this.fish.getPhysicsSnapshot(this.simEnv)}),window.__kanRealismProbe=()=>({name:this.config?.name,fish:this.fish.getPhysicsSnapshot(this.simEnv),habitat:this.fish.getHabitatSnapshot(this.simEnv),hardscape:this.decor.getVisualGeometrySnapshot(),fins:this.fish.getFinSnapshot(),flora:this.flora.getContainmentSnapshot(this.dims),obstacles:this.simEnv.obstacles.length,food:this.fish.food.bits.length,eco:this.ecology.snapshot(),ecoMode:this.ecoMode,species:this.fish.getMovementSnapshot(),drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,optics:{surface:this.environment.group.children.some(i=>i instanceof Ee&&i.material instanceof Ut&&i.material.fragmentShader.includes(".02 + .98"))}})),this.quality=Oo[sg(this.renderer)],this.applySize(),window.addEventListener("resize",this.applySize),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("pointerup",this.onClick),this.kanAquariumMode&&(this.renderer.domElement.addEventListener("pointerdown",this.rememberPointer),this.renderer.domElement.addEventListener("contextmenu",this.onRightClick)),this.renderer.setAnimationLoop(this.tick)}getEcoSnapshot(){return this.ecology.snapshot()}cleanEco(){this.ecology.clean()}setEcoMode(e){this.ecoMode=e,this.simEnv.ecoMode=e}dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.applySize),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("pointerup",this.onClick),this.renderer.domElement.removeEventListener("pointerdown",this.rememberPointer),this.renderer.domElement.removeEventListener("contextmenu",this.onRightClick),this.rig.dispose(),this.foodElements.clear(),this.foodLayer?.remove(),this.foodLayer=null,new URLSearchParams(location.search).get("qa")==="1"&&(delete window.__kanRealismProbe,delete window.__kanEcoFastForward,delete window.__kanFoodProbe,delete window.__kanHabitatPopulate,delete window.__kanVisualHotfixScene,delete window.__kanAngelfishMotionScene,delete window.__kanAngelfishMotionProbe,delete window.__kanVisualFinToggle,delete window.__kanFoodTestCamera),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}rebuildComposer(e,t){this.composer?.dispose(),this.quality.bloom?(this.composer=new gC(this.renderer),this.composer.addPass(new vC(this.scene,this.rig.camera)),this.bloomPass=new lo(new ae(e,t),.32,.6,.82),this.composer.addPass(this.bloomPass),this.composer.addPass(new xC),this.composer.setSize(e,t)):(this.composer=null,this.bloomPass=null)}setQuality(e){this.requestedTier=e;const t=e==="auto"?sg(this.renderer):e;Oo[t].tier!==this.quality.tier&&(this.quality=Oo[t],this.applySize(),this.config&&this.applyConfig(this.config,!0))}setReducedMotion(e){this.simEnv.reducedMotion=e,this.rig.reducedMotion=e}setFeedMode(e){this.feedMode=e}setSoftFins(e){this.fish.setSoftFins(e)}setCameraMode(e){this.rig.setMode(e),e!=="follow"&&this.rig.releaseFollow(this.dims.floorY+this.dims.height*.5)}followFish(e){if(!e){this.rig.releaseFollow(this.dims.floorY+this.dims.height*.5),this.rig.mode==="follow"&&this.rig.setMode("orbit");return}this.fish.findByKey(e)&&(this.rig.followTarget=()=>this.fish.findByKey(e)?.agent.pos??null,this.rig.setMode("follow"))}applyConfig(e,t=!1){const i=JSON.stringify([e.water,Math.round(e.gallons*10),e.substrate,e.background,e.lighting,e.decor,e.flora,this.quality.tier]),r=JSON.stringify(e.fish)+this.quality.tier,s=t||i!==this.lastStructureKey,o=t||s||r!==this.lastFishKey;if(this.config=e,this.ecology.configure(e),s){this.lastStructureKey=i;const a=Zc(e.gallons);this.dims={halfW:a.width/2,halfD:a.depth/2,height:a.height,floorY:0,surfaceY:a.height*.94},Object.assign(this.simEnv,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,surfaceY:this.dims.surfaceY}),this.current.setup(a.width,a.height,a.depth);const l=this.decor.rebuild(e.decor,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,height:this.dims.height}),c=this.flora.rebuild(e.flora,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,surfaceY:this.dims.surfaceY},this.current,l.anchors);this.simEnv.obstacles=[...l.obstacles,...c.obstacles],this.foodOccluders=[...this.decor.group.children,...this.flora.group.children],this.foodDepthCache=new WeakMap,this.simEnv.shelters=l.shelters,this.simEnv.tunnels=l.tunnels,this.fish.resetHabitat(),this.environment.rebuild(this.dims,e.water,e.substrate,e.background,e.lighting,this.quality,l.airstone),Zn.uSurfaceY.value=this.dims.surfaceY,this.rig.frameTank(this.dims.halfW,this.dims.height,this.dims.floorY+this.dims.height*.52)}o&&(this.lastFishKey=r,this.fish.rebuild(e.fish,this.simEnv,this.quality.maxFish))}tankPoint(e,t){const i=this.renderer.domElement.getBoundingClientRect(),r=e??i.left+i.width*(.25+Math.random()*.5),s=t??i.top+i.height*(.2+Math.random()*.3);this.raycaster.setFromCamera(this.toNdc(r,s),this.rig.camera);const o=this.rig.camera.getWorldDirection(new T).normalize(),a=new er().setFromNormalAndCoplanarPoint(o,new T(0,this.dims.surfaceY*.55,0)),l=new T;return this.raycaster.ray.intersectPlane(a,l)||l.set(((r-i.left)/Math.max(1,i.width)*2-1)*this.dims.halfW*.8,0,0),l.x=le.clamp(l.x,-this.dims.halfW*.78,this.dims.halfW*.78),l.z=le.clamp(l.z,-this.dims.halfD*.55,this.dims.halfD*.55),l.y=this.dims.surfaceY,l}foodPoint(e,t){const i=this.renderer.domElement.getBoundingClientRect();if(!Number.isFinite(e)||!Number.isFinite(t)||e<i.left||e>i.right||t<i.top||t>i.bottom)return null;this.raycaster.setFromCamera(this.toNdc(e,t),this.rig.camera);const r=this.raycaster.ray,s=Math.min(.012,this.dims.halfW*.08,this.dims.halfD*.08,(this.dims.surfaceY-this.dims.floorY)*.08),o=new T(-this.dims.halfW+s,this.dims.floorY+s,-this.dims.halfD+s),a=new T(this.dims.halfW-s,this.dims.surfaceY-s,this.dims.halfD-s);let l=0,c=1/0;for(const d of["x","y","z"]){const p=r.origin[d],g=r.direction[d];if(Math.abs(g)<1e-9){if(p<o[d]||p>a[d])return null;continue}const y=(o[d]-p)/g,m=(a[d]-p)/g;if(l=Math.max(l,Math.min(y,m)),c=Math.min(c,Math.max(y,m)),c<=l)return null}if(!Number.isFinite(c)||c-l<5e-4)return null;const h=Math.min((c-l)*.06,.01);if(l+=h,c-=h,c<=l)return null;const u=new T;for(let d=0;d<28;d++)if(r.at(l+Math.random()*(c-l),u),!this.simEnv.obstacles.some(g=>u.distanceToSquared(g.pos)<Math.pow(Math.max(.005,g.radius)+.006,2)))return u;return null}queueFishDrop(e,t){const i=this.tankPoint(e,t);this.fish.queueDrop(i.x,i.z)}feedAt(e,t,i="normal",r=this.clickFoodCount){const s=this.foodPoint(e,t);return s?(this.fish.feed(s.x,s.z,this.simEnv,i,s.y),this.lastFoodSpawn=s.clone(),this.ecology.feed(i),this.callbacks.onFed?.(i,r),!0):!1}toNdc(e,t){const i=this.renderer.domElement.getBoundingClientRect();return new ae((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1)}targetDayFactor(){switch(this.config?.dayNight??"day"){case"day":return 1;case"night":return 0;case"realtime":{const t=new Date().getHours()+new Date().getMinutes()/60;return t>=8&&t<18?1:t>=6&&t<8?(t-6)/2:t>=18&&t<21?1-(t-18)/3:0}case"cycle":{const t=this.lastCycleT%240/240;return t<.55?1:t<.62?1-(t-.55)/.07:t<.93?0:(t-.93)/.07}}}screenshot(){return this.composer?this.composer.render():this.renderer.render(this.scene,this.rig.camera),this.renderer.domElement.toDataURL("image/png")}fishPosition(e){return this.fish.findByKey(e)?.agent.pos??null}enableExternalDrive(){this.renderer.setAnimationLoop(null)}captureFrontView(e,t,i="cover",r=.52){const{floorY:s,height:o,halfW:a,halfD:l}=this.dims,c=s+o*r,h=s+o-c,u=c-s,d=i==="contain"?Math.max(h,u):Math.min(h,u);this.rig.lockFrontView(a,d,l,c,e,t)}syncFoodLayer(){const e=this.foodLayer;if(!e)return;const t=this.renderer.domElement.getBoundingClientRect(),i=new Set,r=new T;let s=2;for(const o of this.fish.food.bits){i.add(o);let a=this.foodElements.get(o);if(!a){if(a=document.createElement("div"),a.className=o.kind==="normal"?"kan-food-item kan-food-pellet":"kan-food-item kan-food-cookie",a.dataset.kind=o.kind,a.setAttribute("aria-hidden","true"),o.kind!=="normal"){const p=document.createElement("img");p.alt="",p.src=new URL("feed-items/"+(o.kind==="fish-cookie"?"cookie-fish.png":"cookie-bear.png"),document.baseURI).href,p.draggable=!1,a.appendChild(p)}e.appendChild(a),this.foodElements.set(o,a)}r.copy(o.pos).project(this.rig.camera);const l=(r.x+1)*.5,c=(1-r.y)*.5;let h=r.z>=-1&&r.z<=1&&l>=0&&l<=1&&c>=0&&c<=1;const u=performance.now();let d=this.foodDepthCache.get(o);if(h&&this.foodOccluders.length&&s>0&&(!d||u-d.last>280)){s--;const p=this.rig.camera.position;this.foodDepthRayDirection.copy(o.pos).sub(p);const g=this.foodDepthRayDirection.length();g>.02&&(this.foodDepthRay.set(p,this.foodDepthRayDirection.divideScalar(g)),this.foodDepthRay.near=.005,this.foodDepthRay.far=g-.012,h=this.foodDepthRay.intersectObjects(this.foodOccluders,!0).length===0),d={last:u,visible:h},this.foodDepthCache.set(o,d)}else h&&d&&(h=d.visible);a.style.transform="translate3d("+(l*t.width).toFixed(1)+"px,"+(c*t.height).toFixed(1)+"px,0) translate(-50%,-50%)",a.style.opacity=h?"1":"0",a.dataset.occluded=h?"false":"true",a.dataset.worldY=o.pos.y.toFixed(5),a.dataset.foodState=o.state}for(const[o,a]of this.foodElements)i.has(o)||(a.remove(),this.foodElements.delete(o));e.dataset.foodCount=String(i.size)}advance(e){const t=Zn.uTime.value+e;Zn.uTime.value=t,this.lastCycleT+=e,this.simEnv.time=t,this.current.time=t,this.dayFactor=le.damp(this.dayFactor,this.targetDayFactor(),.5,e),this.simEnv.dayFactor=this.dayFactor,this.ecology.advance(e,this.ecoMode,this.dayFactor,this.fish.food.bits.filter(r=>r.state==="settled").length);const i=this.ecology.snapshot();if(this.simEnv.ecoComfort=this.ecoMode==="natural"?Math.max(.86,Math.min(1.03,(i.oxygen+i.cleanliness)/200*1.04)):1,this.fish.update(e,this.simEnv),this.environment.update(this.dayFactor,this.rig.camera),this.rig.update(e),this.syncFoodLayer(),this.composer?this.composer.render():this.renderer.render(this.scene,this.rig.camera),this.firstFrameDone||(this.firstFrameDone=!0,AC()),this.frameTimes.push(e),this.frameTimes.length>=60){const r=this.frameTimes.reduce((s,o)=>s+o,0)/this.frameTimes.length;if(this.stats.fps=Math.round(1/r),this.frameTimes=[],this.requestedTier==="auto"&&this.stats.fps<28){const s=["ultra","high","medium","low"],o=s.indexOf(this.quality.tier);o>=0&&o<s.length-1&&(this.quality=Oo[s[o+1]],this.applySize(),this.config&&this.applyConfig(this.config,!0),this.callbacks.onAutoQuality?.(this.quality.tier))}}this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles,this.stats.fishCount=this.fish.populations.reduce((r,s)=>r+s.agents.length,0)}}let z_=null;function yg(n){z_=n}function co(){return z_}const aA={},_g=n=>{let e;const t=new Set,i=(h,u)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const p=e;e=u??(typeof d!="object"||d===null)?d:Object.assign({},e,d),t.forEach(g=>g(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(t.add(h),()=>t.delete(h)),destroy:()=>{(aA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,l);return l},lA=n=>n?_g(n):_g;var O_={exports:{}},B_={},H_={exports:{}},V_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=et;function cA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var uA=typeof Object.is=="function"?Object.is:cA,hA=uo.useState,dA=uo.useEffect,fA=uo.useLayoutEffect,pA=uo.useDebugValue;function mA(n,e){var t=e(),i=hA({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return fA(function(){r.value=t,r.getSnapshot=e,xh(r)&&s({inst:r})},[n,t,e]),dA(function(){return xh(r)&&s({inst:r}),n(function(){xh(r)&&s({inst:r})})},[n]),pA(t),t}function xh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!uA(n,t)}catch{return!0}}function gA(n,e){return e()}var vA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?gA:mA;V_.useSyncExternalStore=uo.useSyncExternalStore!==void 0?uo.useSyncExternalStore:vA;H_.exports=V_;var yA=H_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu=et,_A=yA;function xA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var MA=typeof Object.is=="function"?Object.is:xA,SA=_A.useSyncExternalStore,wA=eu.useRef,EA=eu.useEffect,TA=eu.useMemo,bA=eu.useDebugValue;B_.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=wA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=TA(function(){function l(p){if(!c){if(c=!0,h=p,p=i(p),r!==void 0&&o.hasValue){var g=o.value;if(r(g,p))return u=g}return u=p}if(g=u,MA(h,p))return g;var y=i(p);return r!==void 0&&r(g,y)?(h=p,g):(h=p,u=y)}var c=!1,h,u,d=t===void 0?null:t;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,t,i,r]);var a=SA(n,s[0],s[1]);return EA(function(){o.hasValue=!0,o.value=a},[a]),bA(a),a};O_.exports=B_;var CA=O_.exports;const AA=wg(CA),G_={},{useDebugValue:RA}=Ig,{useSyncExternalStoreWithSelector:PA}=AA;let xg=!1;const LA=n=>n;function DA(n,e=LA,t){(G_?"production":void 0)!=="production"&&t&&!xg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),xg=!0);const i=PA(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return RA(i),i}const NA=n=>{(G_?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?lA(n):n,t=(i,r)=>DA(e,i,r);return Object.assign(t,e),t},IA=n=>NA,UA={};function FA(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var s;const o=l=>l===null?null:JSON.parse(l,void 0),a=(s=t.getItem(r))!=null?s:null;return a instanceof Promise?a.then(o):o(a)},setItem:(r,s)=>t.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>t.removeItem(r)}}const La=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(i){return La(i)(t)},catch(i){return this}}}catch(t){return{then(i){return this},catch(i){return La(i)(t)}}}},kA=(n,e)=>(t,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,f)=>({...f,...m}),...e},o=!1;const a=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return n((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...m)},i,r);const h=La(s.serialize),u=()=>{const m=s.partialize({...i()});let f;const v=h({state:m,version:s.version}).then(_=>c.setItem(s.name,_)).catch(_=>{f=_});if(f)throw f;return v},d=r.setState;r.setState=(m,f)=>{d(m,f),u()};const p=n((...m)=>{t(...m),u()},i,r);let g;const y=()=>{var m;if(!c)return;o=!1,a.forEach(v=>v(i()));const f=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return La(c.getItem.bind(c))(s.name).then(v=>{if(v)return s.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return s.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var _;return g=s.merge(v,(_=i())!=null?_:p),t(g,!0),u()}).then(()=>{f?.(g,void 0),o=!0,l.forEach(v=>v(g))}).catch(v=>{f?.(void 0,v)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:m=>(a.add(m),()=>{a.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},y(),g||p},zA=(n,e)=>(t,i,r)=>{let s={storage:FA(()=>localStorage),partialize:y=>y,version:0,merge:(y,m)=>({...m,...y}),...e},o=!1;const a=new Set,l=new Set;let c=s.storage;if(!c)return n((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...y)},i,r);const h=()=>{const y=s.partialize({...i()});return c.setItem(s.name,{state:y,version:s.version})},u=r.setState;r.setState=(y,m)=>{u(y,m),h()};const d=n((...y)=>{t(...y),h()},i,r);r.getInitialState=()=>d;let p;const g=()=>{var y,m;if(!c)return;o=!1,a.forEach(v=>{var _;return v((_=i())!=null?_:d)});const f=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(y=i())!=null?y:d))||void 0;return La(c.getItem.bind(c))(s.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return[!0,s.migrate(v.state,v.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var _;const[M,b]=v;if(p=s.merge(b,(_=i())!=null?_:d),t(p,!0),M)return h()}).then(()=>{f?.(p,void 0),p=i(),o=!0,l.forEach(v=>v(p))}).catch(v=>{f?.(void 0,v)})};return r.persist={setOptions:y=>{s={...s,...y},y.storage&&(c=y.storage)},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>o,onHydrate:y=>(a.add(y),()=>{a.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},s.skipHydration||g(),p||d},OA=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((UA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),kA(n,e)):zA(n,e),BA=OA,Ts={dayNight:"cycle",fishNames:{}},Dp=[{...Ts,name:"Cộng đồng Amazon",water:"freshwater",gallons:55,substrate:"sand",background:"natural",lighting:"daylight",fish:{"cardinal-tetra":12,"rummynose-tetra":8,angelfish:2,corydoras:6,"bristlenose-pleco":1},flora:{"amazon-sword":3,vallisneria:5,cryptocoryne:4,"java-fern":2},decor:["driftwood","river-rocks"]},{...Ts,name:"Hồ thủy sinh mini",water:"freshwater",gallons:8,substrate:"blacksand",background:"planted",lighting:"daylight",fish:{"neon-tetra":8,"cherry-shrimp":10,"nerite-snail":2},flora:{"java-moss":3,"dwarf-hairgrass":6,anubias:2,cryptocoryne:2},decor:["river-rocks"]},{...Ts,name:"Đầm san hô",water:"saltwater",gallons:75,substrate:"crushedcoral",background:"reef",lighting:"actinic",fish:{"ocellaris-clown":2,"green-chromis":7,firefish:2,"royal-gramma":1,"lawnmower-blenny":1,"cleaner-shrimp":1,"turbo-snail":3},flora:{"pulsing-xenia":2,"hammer-coral":2,zoanthids:3,"bubble-anemone":1,"kenya-tree":2,acropora:2,"brain-coral":1},decor:["reef-rock","airstone"]},{...Ts,name:"Ốc đảo Betta",water:"freshwater",gallons:10,substrate:"gravel",background:"planted",lighting:"warm",fish:{betta:1,"nerite-snail":1},flora:{anubias:3,"java-fern":2,frogbit:4,cryptocoryne:3},decor:["driftwood"]},{...Ts,name:"Suối nước trà",water:"freshwater",gallons:29,substrate:"sand",background:"black",lighting:"blackwater",fish:{"rummynose-tetra":10,"harlequin-rasbora":8,"kuhli-loach":6},flora:{"java-fern":3,cryptocoryne:5,"java-moss":2,frogbit:5},decor:["driftwood","slate-stack"]},{...Ts,name:"Đại dương xanh",water:"saltwater",gallons:150,substrate:"sand",background:"deepblue",lighting:"actinic",fish:{"blue-tang":1,"yellow-tang":1,"green-chromis":9,"sixline-wrasse":1,"banggai-cardinal":3,"turbo-snail":4},flora:{acropora:3,"montipora-plate":2,toadstool:2,zoanthids:2},decor:["reef-rock","airstone"]}],HA=Dp[0];function VA(n){const e=JSON.stringify(n),t=btoa(unescape(encodeURIComponent(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),i=new URL(window.location.href);return i.hash=`t=${t}`,i.toString()}function GA(){try{const n=window.location.hash.match(/t=([A-Za-z0-9\-_]+)/);if(!n)return null;const e=n[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(escape(atob(e))),i=JSON.parse(t);return!i||typeof i!="object"||!i.water||!i.gallons?null:{...i,fishNames:i.fishNames??{},decor:i.decor??[],flora:i.flora??{},fish:i.fish??{}}}catch{return null}}const W_=[{id:"driftwood",name:"Cành lũa tự nhiên",water:"freshwater",kind:"driftwood",info:"Cành gỗ lâu năm làm điểm tựa cho cây và chỗ trú của cá."},{id:"spider-wood",name:"Lũa rễ nhện",water:"freshwater",kind:"spiderwood",info:"Các nhánh rễ mảnh đan xen, phù hợp cho tép và cá con trú ẩn."},{id:"driftwood-stump",name:"Gốc lũa chìm",water:"freshwater",kind:"stump",info:"Gốc cây phân nhánh tạo bóng râm và hốc trú ẩn."},{id:"split-log",name:"Lũa ống cổ thụ nứt",water:"freshwater",kind:"log",info:"Lũa dài có lòng rỗng đủ rộng cho cá nhỏ trú và bơi xuyên qua."},{id:"root-bridge",name:"Cầu rễ lũa đan",water:"freshwater",kind:"log",info:"Rễ lũa đan trên vòm, bên dưới là lối bơi thông cho cá nhỏ."},{id:"hollow-log",name:"Khúc gỗ rỗng",water:"both",kind:"log",info:"Đường hầm bằng gỗ để cá chui qua và nghỉ ngơi."},{id:"log-arch",name:"Cầu gỗ vòm",water:"both",kind:"log",info:"Khúc gỗ hình vòm tạo lối bơi bên dưới."},{id:"river-rocks",name:"Đá cuội suối",water:"both",kind:"rock",info:"Cụm đá tròn nhẵn trang trí nền tự nhiên."},{id:"slate-stack",name:"Đá phiến xếp tầng",water:"freshwater",kind:"slate",info:"Các tấm đá phẳng tạo khe trú ẩn."},{id:"reef-rock",name:"Đá tạo rạn san hô",water:"saltwater",kind:"reefrock",info:"Đá xốp nhiều khe hở làm nơi bám cho san hô."},{id:"airstone",name:"Đá sủi bọt",water:"both",kind:"airstone",info:"Tạo cột bọt khí nổi đều lên mặt nước."},{id:"sunken-ship",name:"Tàu đắm mini",water:"both",kind:"ship",playful:!0,info:"Mô hình tàu đắm nhỏ nằm trên nền cát."},{id:"castle",name:"Lâu đài cổ",water:"both",kind:"castle",playful:!0,info:"Lâu đài trang trí có ô cửa để cá bơi xuyên qua."}];new Map(W_.map(n=>[n.id,n]));const uf=n=>W_.filter(e=>e.water==="both"||e.water===n),Mh=typeof window<"u"?GA():null;let Mg;const Me=IA()(BA((n,e)=>({config:Mh??HA,savedTanks:{},quality:"auto",audioOn:!1,audioVolume:.6,musicOn:!1,ecoMode:"natural",cameraMode:"orbit",followFishKey:null,selectedFishKey:null,uiHidden:!1,panelOpen:new URLSearchParams(location.search).has("kanban")?!0:window.matchMedia?.("(min-width: 900px)").matches??!0,showHud:!1,reducedMotion:window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,softFinsOn:!0,feedMode:!1,toast:null,setConfig:t=>n(i=>({config:{...i.config,...t}})),setWater:t=>n(i=>i.config.water===t?i:{config:{...i.config,water:t,fish:{},flora:{},fishNames:{},decor:i.config.decor.filter(r=>uf(t).some(s=>s.id===r)),substrate:t==="saltwater"?"crushedcoral":"sand",background:t==="saltwater"?"reef":"natural",lighting:t==="saltwater"?"actinic":"daylight"}}),setFishCount:(t,i)=>n(r=>{const s={...r.config.fish};return i<=0?delete s[t]:s[t]=Math.min(i,60),{config:{...r.config,fish:s}}}),setFloraCount:(t,i)=>n(r=>{const s={...r.config.flora};return i<=0?delete s[t]:s[t]=Math.min(i,24),{config:{...r.config,flora:s}}}),toggleDecor:t=>n(i=>({config:{...i.config,decor:i.config.decor.includes(t)?i.config.decor.filter(r=>r!==t):[...i.config.decor,t]}})),nameFish:(t,i)=>n(r=>({config:{...r.config,fishNames:{...r.config.fishNames,[t]:i}}})),applyPreset:t=>n({config:structuredClone(t),followFishKey:null,selectedFishKey:null}),randomize:()=>{const t=Math.random()<.55?"freshwater":"saltwater",i=[10,20,29,40,55,75,120][Math.floor(Math.random()*7)],r=Zc(i).capacity,s=U_(t).filter(g=>g.minGallons<=i),o={};let a=0,l=0;const c=[...s].sort(()=>Math.random()-.5);for(const g of c){if(a>=r*.8)break;const y=g.minGroup>1?g.minGroup+Math.floor(Math.random()*5):g.maxPerTank??1,m=g.bioload*y;l+y>60||a+m<=r*.85&&!(g.mouthIn&&Object.keys(o).length>0)&&(o[g.id]=y,a+=m,l+=y)}const h=N_(t).sort(()=>Math.random()-.5).slice(0,4+Math.floor(Math.random()*3)),u={};for(const g of h)u[g.id]=1+Math.floor(Math.random()*4);const d=uf(t).filter(g=>!g.playful||Math.random()<.2).filter(()=>Math.random()<.6).map(g=>g.id),p=t==="saltwater"?["sand","crushedcoral"]:["sand","gravel","blacksand"];n(g=>({config:{...g.config,water:t,gallons:i,fish:o,flora:u,decor:d,fishNames:{},substrate:p[Math.floor(Math.random()*p.length)],background:t==="saltwater"?"reef":["natural","planted","deepblue"][Math.floor(Math.random()*3)],lighting:t==="saltwater"?"actinic":"daylight",name:"Hồ cá ngẫu nhiên"}})),e().showToast("Đã tạo hồ cá ngẫu nhiên. Anh có thể chỉnh sửa theo ý thích.")},saveTank:t=>n(i=>({savedTanks:{...i.savedTanks,[t]:{...structuredClone(i.config),name:t}},config:{...i.config,name:t}})),loadTank:t=>{const i=e().savedTanks[t];if(i){const r=structuredClone(i);(r.name==="Surprise Tank"||r.name==="Hồ cá bất ngờ")&&(r.name="Hồ cá ngẫu nhiên"),n({config:r,followFishKey:null,selectedFishKey:null})}},deleteTank:t=>n(i=>{const r={...i.savedTanks};return delete r[t],{savedTanks:r}}),set:t=>n(t),showToast:t=>{clearTimeout(Mg),n({toast:t}),Mg=setTimeout(()=>n({toast:null}),4200)}}),{name:"aquarium-v1",partialize:n=>({config:n.config,savedTanks:n.savedTanks,quality:n.quality,audioOn:n.audioOn,audioVolume:n.audioVolume,musicOn:n.musicOn,ecoMode:n.ecoMode}),merge:(n,e)=>{const t={...e,...n};return t.ecoMode!=="natural"&&t.ecoMode!=="relax"&&(t.ecoMode="natural"),Mh&&(t.config=Mh),(t.config?.name==="Surprise Tank"||t.config?.name==="Hồ cá bất ngờ")&&(t.config={...t.config,name:"Hồ cá ngẫu nhiên"}),t}}));let ec=null;function j_(n,e){const t=Me.getState();if(Object.values(t.config.fish).reduce((o,a)=>o+a,0)>=60){t.showToast("Đã đủ 60 sinh vật, hãy bớt cá trước");return}const r=Object.entries(t.config.fish).filter(([o,a])=>a>0&&!o.includes("snail")&&!o.includes("shrimp")),s=r.length?r[Math.floor(Math.random()*r.length)][0]:t.config.water==="freshwater"?"guppy":"green-chromis";co()?.queueFishDrop(n,e),t.setFishCount(s,(t.config.fish[s]||0)+1),ec=s,t.showToast("Cá mới đang rơi vào hồ")}function X_(){const n=Me.getState(),e=Object.entries(n.config.fish).filter(([i,r])=>r>0&&!i.includes("snail")&&!i.includes("shrimp"));if(!e.length){n.showToast("Không còn cá để bớt");return}const t=ec&&n.config.fish[ec]>0?ec:e.sort((i,r)=>r[1]-i[1])[0][0];n.setFishCount(t,(n.config.fish[t]||0)-1),n.showToast("Đã đưa bớt 1 con cá ra khỏi hồ")}function WA(){const n=et.useRef(null);return et.useEffect(()=>{const e=n.current;if(!e)return;let t;try{t=new k_(e)}catch(s){console.error("WebGL init failed:",s),e.innerHTML='<div style="display:grid;place-items:center;height:100%;color:#8fa8b8;font-size:15px;padding:24px;text-align:center">This aquarium needs WebGL, which your browser has disabled or doesn’t support.</div>';return}yg(t),t.callbacks.onFishPicked=s=>{const o=Me.getState();s?(o.set({selectedFishKey:s,followFishKey:s}),t.followFish(s)):o.selectedFishKey&&(o.set({selectedFishKey:null,followFishKey:null}),t.followFish(null))},t.callbacks.onAddFish=j_,t.callbacks.onRemoveFish=X_,t.callbacks.onFed=(s,o)=>window.dispatchEvent(new CustomEvent("kanaquarium-fed",{detail:{kind:s,count:o}})),t.callbacks.onAutoQuality=s=>{Me.getState().showToast(`Lowered quality to “${s}” to keep things smooth. You can pin a tier in Settings.`)};const i=Me.getState();t.setQuality(i.quality),t.applyConfig(i.config),t.setReducedMotion(i.reducedMotion),t.setSoftFins(i.softFinsOn),t.setEcoMode(i.ecoMode),t.setCameraMode(i.cameraMode);const r=Me.subscribe((s,o)=>{s.config!==o.config&&t.applyConfig(s.config),s.quality!==o.quality&&t.setQuality(s.quality),s.feedMode!==o.feedMode&&t.setFeedMode(s.feedMode),s.reducedMotion!==o.reducedMotion&&t.setReducedMotion(s.reducedMotion),s.softFinsOn!==o.softFinsOn&&t.setSoftFins(s.softFinsOn),s.ecoMode!==o.ecoMode&&t.setEcoMode(s.ecoMode),s.cameraMode!==o.cameraMode&&s.cameraMode!=="follow"&&t.setCameraMode(s.cameraMode),s.followFishKey!==o.followFishKey&&t.followFish(s.followFishKey)});return()=>{r(),yg(null),t.dispose()}},[]),et.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>Me.getState().set({reducedMotion:e.matches});return e.addEventListener?.("change",t),()=>e.removeEventListener?.("change",t)},[]),L.jsx("div",{id:"canvas-host",ref:n,"aria-label":"Aquarium view. Drag to look around, scroll to zoom.",role:"img"})}function Y_(n){let e=0;for(const[t,i]of Object.entries(n)){const r=Qc.get(t);r&&(e+=r.bioload*i)}return e}function jA(n){const e=[],t=Zc(n.gallons),r=Object.entries(n.fish).filter(([,c])=>c>0).map(([c,h])=>({sp:Qc.get(c),n:h})).filter(c=>c.sp),s=Object.entries(n.flora).some(([c,h])=>h>0&&["stem","rosette","carpet","moss","floating"].includes(cf.get(c)?.kind??""))?1.15:1,o=Y_(n.fish),a=t.capacity*s;o>a*1.25?e.push({severity:"warning",message:`Bể đang nuôi quá dày (${Math.round(o/a*100)}% sức chứa). Chất thải có thể tích tụ nhanh hơn khả năng xử lý của lọc và cây.`}):o>a&&e.push({severity:"caution",message:`Bể hơi đông cá (${Math.round(o/a*100)}% sức chứa). Nên nâng cấp lọc hoặc giảm số cá.`});for(const{sp:c,n:h}of r){if(c.minGroup>1&&h<c.minGroup&&e.push({severity:"caution",message:`${c.common} là cá sống theo đàn; ít hơn ${c.minGroup} con có thể khiến chúng căng thẳng. Hãy thử nuôi ${c.minGroup} con trở lên để thấy cá bơi theo đàn.`}),n.gallons<c.minGallons&&e.push({severity:"caution",message:`Cá ${c.common} cần bể tối thiểu ${c.minGallons} gallon (bể hiện có ${Math.round(n.gallons)}). Cá trưởng thành cần đủ không gian bơi.`}),c.maxPerTank&&h>c.maxPerTank&&e.push({severity:"warning",message:`Nuôi quá ${c.maxPerTank} ${c.common} trong một bể có thể dẫn tới tranh giành lãnh thổ${c.id==="betta"?" — cá Betta đực có thể đánh nhau nghiêm trọng":""}.`}),c.mouthIn)for(const{sp:u}of r)u.id!==c.id&&u.adultSizeIn<=c.mouthIn&&e.push({severity:"warning",message:`Cá trưởng thành ${c.common} có thể ăn ${u.common} nếu vừa miệng.`});if(c.temperament==="aggressive")for(const{sp:u}of r)u.id!==c.id&&u.temperament==="peaceful"&&!u.invert&&u.adultSizeIn<c.adultSizeIn*1.2&&e.push({severity:"caution",message:`${c.common} có thể gây hấn với ${u.common} — chú ý nguy cơ rỉa vây.`});if(c.id==="tiger-barb")for(const{sp:u}of r)u.shape.finLong&&e.push({severity:"caution",message:`Cá tứ vân thường rỉa vây; vây dài của ${u.common} có thể bị tấn công.`});if(c.water==="saltwater"&&c.reefSafe===!1&&Object.entries(n.flora).some(([d,p])=>p>0&&cf.get(d))&&e.push({severity:"caution",message:`${c.common} có thể rỉa san hô, nên cân nhắc trước khi thả vào bể rạn.`}),c.invert&&c.id.includes("shrimp"))for(const{sp:u}of r)!u.invert&&u.adultSizeIn>=3.5&&e.push({severity:"caution",message:`${u.common} có thể xem ${c.common} là thức ăn.`})}const l=new Set;return e.filter(c=>l.has(c.message)?!1:(l.add(c.message),!0))}const XA={"Amazon Community":"Cộng đồng Amazon","Nano Planted":"Hồ thủy sinh mini","Reef Lagoon":"Đầm san hô","Betta Oasis":"Ốc đảo Betta","Blackwater Stream":"Suối nước trà","Tang Highway":"Đại dương xanh","My Aquarium":"Hồ cá của tôi","My Tank":"Hồ của tôi","Surprise Tank":"Hồ cá ngẫu nhiên","Hồ cá bất ngờ":"Hồ cá ngẫu nhiên"},sa=n=>XA[n]||n,Lc=n=>Math.round(n*3.785),Da=n=>({peaceful:"Hiền hòa",aggressive:"Hung dữ",semiaggressive:"Hơi dữ","semi-aggressive":"Hơi dữ",easy:"Dễ chăm",moderate:"Trung bình",advanced:"Khó chăm",expert:"Khó chăm",mid:"Tầng giữa",bottom:"Tầng đáy",top:"Tầng mặt",all:"Mọi tầng",rosette:"Dạng bụi",stem:"Dạng thân",moss:"Rêu",carpet:"Thảm nền",floating:"Cây nổi",softcoral:"San hô mềm",hardcoral:"San hô cứng",anemone:"Hải quỳ"})[n]||n;function YA(){const n=et.useRef(null),[e,t]=et.useState("tank"),i=Me(o=>o.config),r=Me(o=>o.set),s=i.water==="saltwater";return et.useEffect(()=>{if(!new URLSearchParams(location.search).has("kanban"))return;const o=n.current;if(!o)return;let a,l=0;const c=()=>{clearTimeout(a),a=setTimeout(()=>Me.getState().set({panelOpen:!1}),15e3)},h=()=>{const u=Date.now();u-l<750||(l=u,c())};for(const u of["click","pointerdown","keydown","input","change","wheel","focusin","touchstart"])o.addEventListener(u,c,{passive:!0});return o.addEventListener("pointermove",h,{passive:!0}),c(),()=>{clearTimeout(a);for(const u of["click","pointerdown","keydown","input","change","wheel","focusin","touchstart"])o.removeEventListener(u,c);o.removeEventListener("pointermove",h)}},[]),L.jsxs("aside",{ref:n,className:"panel","aria-label":"Bảng điều khiển hồ cá",children:[L.jsxs("div",{className:"panel-head",children:[L.jsxs("h1",{children:["🐠 ",sa(i.name||"Hồ cá của tôi")]}),L.jsx("button",{className:"close","aria-label":"Đóng bảng điều khiển",onClick:()=>r({panelOpen:!1}),children:"✕"})]}),L.jsx("nav",{className:"tabs","aria-label":"Danh mục điều khiển",children:[["tank","Bể"],["fish","Cá"],["flora",s?"San hô":"Cây"],["decor","Trang trí"],["saved","Đã lưu"],["settings","Cài đặt"]].map(([o,a])=>L.jsx("button",{className:e===o?"active":"",onClick:()=>t(o),children:a},o))}),L.jsxs("div",{className:"panel-body",children:[e==="tank"&&L.jsx(qA,{}),e==="fish"&&L.jsx(ZA,{}),e==="flora"&&L.jsx(QA,{}),e==="decor"&&L.jsx(eR,{}),e==="saved"&&L.jsx(tR,{}),e==="settings"&&L.jsx(nR,{})]})]})}function qA(){const n=Me(o=>o.config),e=Me(o=>o.setConfig),t=Me(o=>o.setWater),i=Me(o=>o.applyPreset),r=Me(o=>o.randomize),s=n.water==="saltwater";return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Loại nước"}),L.jsxs("div",{className:"seg",role:"radiogroup","aria-label":"Loại nước",children:[L.jsx("button",{className:s?"":"active",onClick:()=>t("freshwater"),children:"🌿 Nước ngọt"}),L.jsx("button",{className:s?"active":"",onClick:()=>t("saltwater"),children:"🪸 Nước mặn"})]}),Object.keys(n.fish).length>0&&L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"Thay loại nước sẽ xóa đàn cá hiện có vì sinh vật nước ngọt và nước mặn không thể ở chung."})]}),L.jsxs("div",{className:"section",children:[L.jsxs("h2",{children:["Dung tích — ",SC(n.gallons)]}),L.jsxs("div",{className:"slider-row",children:[L.jsx("input",{type:"range",min:af,max:R_,step:1,value:n.gallons,"aria-label":"Dung tích của hồ cá",onChange:o=>e({gallons:Number(o.target.value)})}),L.jsxs("span",{className:"value",children:[Lc(n.gallons)," lít"]})]}),L.jsx("div",{className:"seg",style:{marginTop:8},children:of.map(o=>L.jsx("button",{className:Math.abs(n.gallons-o.gallons)<=3?"active":"",title:o.blurb,onClick:()=>e({gallons:o.gallons}),children:o.name},o.name))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Nền đáy"}),L.jsx("div",{className:"seg",children:(s?[["sand","Cát"],["crushedcoral","San hô vụn"],["blacksand","Cát đen"]]:[["sand","Cát"],["gravel","Sỏi"],["blacksand","Cát đen"]]).map(([o,a])=>L.jsx("button",{className:n.substrate===o?"active":"",onClick:()=>e({substrate:o}),children:a},o))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Phông nền"}),L.jsx("div",{className:"seg",children:[["natural","Tự nhiên"],["planted","Thủy sinh"],["reef","San hô"],["deepblue","Xanh thẳm"],["black","Đen"]].map(([o,a])=>L.jsx("button",{className:n.background===o?"active":"",onClick:()=>e({background:o}),children:a},o))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Ánh sáng"}),L.jsx("div",{className:"seg",children:[["daylight","☀️ Ban ngày"],["warm","🌅 Ánh vàng"],["actinic","💙 Xanh biển"],["blackwater","🍂 Nước trà"]].map(([o,a])=>L.jsx("button",{className:n.lighting===o?"active":"",onClick:()=>e({lighting:o}),children:a},o))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Ngày và đêm"}),L.jsx("div",{className:"seg",children:[["day","Ngày"],["night","Đêm"],["cycle","Chu kỳ"],["realtime","Giờ thực"]].map(([o,a])=>L.jsx("button",{className:n.dayNight===o?"active":"",onClick:()=>e({dayNight:o}),children:a},o))}),L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"“Chu kỳ” mô phỏng một ngày trong 4 phút. “Giờ thực” dùng giờ của máy tính; cá hoạt động về đêm sẽ thức khi trời tối."})]}),L.jsx($A,{}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Các mẫu bể"}),L.jsx("div",{className:"preset-list",children:Dp.map(o=>L.jsxs("button",{onClick:()=>i(o),children:[L.jsx("div",{className:"p-name",children:sa(o.name)}),L.jsxs("div",{className:"p-desc",children:[o.water==="saltwater"?"Nước mặn":"Nước ngọt"," · ",Lc(o.gallons)," lít ·"," ",Object.values(o.fish).reduce((a,l)=>a+l,0)," sinh vật"]})]},o.name))}),L.jsx("div",{className:"row-actions",style:{marginTop:10},children:L.jsx("button",{className:"btn primary",onClick:r,children:"🎲 Tạo ngẫu nhiên"})})]})]})}function $A(){const n=Me(s=>s.ecoMode),e=Me(s=>s.set),[t,i]=et.useState(null),r=()=>i(co()?.getEcoSnapshot()??null);return et.useEffect(()=>{r();const s=window.setInterval(r,2e3);return()=>window.clearInterval(s)},[]),L.jsxs("div",{className:"section","aria-label":"Hệ sinh thái mô phỏng",children:[L.jsx("h2",{children:"Hệ sinh thái mô phỏng"}),L.jsxs("div",{className:"seg",role:"group","aria-label":"Chế độ hồ cá",children:[L.jsx("button",{className:n==="natural"?"active":"","aria-pressed":n==="natural",onClick:()=>e({ecoMode:"natural"}),children:"Ngắm cá tự nhiên"}),L.jsx("button",{className:n==="relax"?"active":"","aria-pressed":n==="relax",onClick:()=>e({ecoMode:"relax"}),children:"Thư giãn tương tác"})]}),L.jsx("p",{className:"eco-note",children:n==="natural"?"Cá tự tìm chỗ nghỉ, trú ẩn và rỉa nền. Nước biến đổi nhẹ theo thức ăn, cây và số cá.":"Giữ chuyển động quen thuộc, giảm các hoạt động tự phát. Hồ không cần chăm sóc."}),t&&L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"eco-metrics","aria-label":"Chỉ số mô phỏng",children:[L.jsxs("div",{children:[L.jsx("span",{children:"Nhiệt độ"}),L.jsxs("strong",{children:[t.temperature.toFixed(1),"°C"]})]}),L.jsxs("div",{children:[L.jsx("span",{children:"Oxy (chỉ số)"}),L.jsxs("strong",{children:[t.oxygen,"/100"]})]}),L.jsxs("div",{children:[L.jsx("span",{children:"Nước sạch"}),L.jsxs("strong",{children:[t.cleanliness,"/100"]})]}),L.jsxs("div",{children:[L.jsx("span",{children:"Thức ăn dư"}),L.jsx("strong",{children:t.leftover})]})]}),L.jsxs("p",{className:"eco-note",children:["Hoạt động tự nhiên: ",t.grazeEvents," lần rỉa nền · ",t.restEvents," lượt nghỉ · ",t.shelterEvents," lượt trú ẩn · ",t.schoolEvents," lần đàn đổi hướng."]})]}),L.jsx("div",{className:"row-actions",style:{marginTop:8},children:L.jsx("button",{className:"btn",onClick:()=>{co()?.cleanEco(),r()},children:"Làm sạch nước mô phỏng"})}),L.jsx("p",{className:"eco-note",children:"Các chỉ số chỉ để minh họa, không phải phép đo nước thực tế. Không có cá chết hoặc mất hồ khi không mở ứng dụng."})]})}const KA=n=>({background:`linear-gradient(180deg, ${n.palette.back}, ${n.palette.base} 55%, ${n.palette.belly})`});function ZA(){const n=Me(g=>g.config),e=Me(g=>g.setFishCount),[t,i]=et.useState(""),[r,s]=et.useState("all"),[o,a]=et.useState(null),l=U_(n.water),c=et.useMemo(()=>{const g=t.trim().toLowerCase();return l.filter(y=>{if(g&&!`${y.common} ${y.scientific} ${y.colorTags.join(" ")}`.toLowerCase().includes(g))return!1;switch(r){case"peaceful":return y.temperament==="peaceful"&&!y.invert;case"schooling":return y.archetype==="schooler";case"bottom":return y.zone==="bottom"&&!y.invert;case"easy":return y.careLevel==="easy";case"inverts":return!!y.invert;default:return!0}})},[l,t,r]),h=Zc(n.gallons),u=Y_(n.fish),d=Math.min(160,Math.round(u/h.capacity*100)),p=et.useMemo(()=>jA(n),[n]);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"capacity","aria-label":`Mật độ nuôi ${d}%`,children:[L.jsx("div",{className:"bar",children:L.jsx("div",{className:`fill ${d>125?"over":d>100?"warn":""}`,style:{width:`${Math.min(100,d/160*100*1.6)}%`}})}),L.jsxs("div",{className:"label",children:["Mật độ nuôi: ",L.jsxs("strong",{children:[d,"%"]})," sức chứa bể ",Lc(n.gallons)," lít",d<=100?" — phù hợp":d<=125?" — hơi đông":" — quá đông"]})]}),p.length>0&&L.jsx("div",{className:"section",children:L.jsx("div",{className:"warning-list",children:p.map((g,y)=>L.jsx("div",{className:`warning warning-${g.severity}`,role:"note",children:g.message},y))})}),L.jsx("div",{className:"search-row",children:L.jsx("input",{type:"search",placeholder:"Tìm cá theo tên hoặc màu…",value:t,onChange:g=>i(g.target.value),"aria-label":"Tìm cá"})}),L.jsx("div",{className:"filter-chips",role:"group","aria-label":"Lọc danh sách cá",children:[["all","Tất cả"],["schooling","Bơi theo đàn"],["peaceful","Hiền hòa"],["bottom","Tầng đáy"],["easy","Dễ nuôi"],["inverts","Tép, ốc"]].map(([g,y])=>L.jsx("button",{className:r===g?"active":"",onClick:()=>s(g),children:y},g))}),c.map(g=>{const y=n.fish[g.id]??0;return L.jsxs("div",{children:[L.jsxs("div",{className:"species-row",children:[L.jsx("div",{className:"species-chip",style:KA(g),"aria-hidden":!0}),L.jsxs("div",{className:"species-info",children:[L.jsx("div",{className:"name",children:g.common}),L.jsxs("div",{className:"meta",children:[(g.adultSizeIn*2.54).toFixed(1)," cm · ",Da(g.temperament)," · ",Da(g.zone)," · ",g.minGroup>1?`Đàn từ ${g.minGroup} con`:"Có thể ở riêng"]})]}),L.jsx("button",{className:"info-btn","aria-label":`Thông tin ${g.common}`,onClick:()=>a(o===g.id?null:g.id),children:"ⓘ"}),L.jsxs("div",{className:"stepper",children:[L.jsx("button",{"aria-label":`Bớt một ${g.common}`,onClick:()=>e(g.id,y-1),disabled:y===0,children:"−"}),L.jsx("span",{className:"count",children:y}),L.jsx("button",{"aria-label":`Thêm một ${g.common}`,onClick:()=>e(g.id,y+1),children:"+"})]})]}),o===g.id&&L.jsx(JA,{sp:g})]},g.id)}),c.length===0&&L.jsx("p",{style:{color:"var(--text-dim)",fontSize:13.5},children:"Không tìm thấy loài phù hợp. Hãy thử tên khác."})]})}function JA({sp:n}){return L.jsxs("div",{style:{padding:"4px 10px 12px 62px",fontSize:13,lineHeight:1.5,color:"#c4d4de"},children:[L.jsx("div",{style:{fontStyle:"italic",color:"var(--text-dim)",marginBottom:4},children:n.scientific}),L.jsxs("div",{children:[L.jsx("strong",{children:"Xuất xứ:"})," ",n.habitat]}),L.jsx("div",{style:{marginTop:4,borderLeft:"2.5px solid var(--accent)",paddingLeft:9},children:n.funFact}),L.jsxs("div",{style:{marginTop:4,color:"var(--text-dim)"},children:["Mức chăm sóc: ",Da(n.careLevel)," · Bể tối thiểu ",Lc(n.minGallons)," lít",n.water==="saltwater"&&n.reefSafe===!1?" · Có thể rỉa san hô":""]})]})}function QA(){const n=Me(o=>o.config),e=Me(o=>o.setFloraCount),[t,i]=et.useState(null),r=N_(n.water),s=n.water==="saltwater";return L.jsxs(L.Fragment,{children:[L.jsx("p",{style:{fontSize:13,color:"var(--text-dim)",marginTop:0},children:s?"San hô bám lên đá. Thêm đá tạo rạn trong mục Trang trí để hồ tự nhiên; quan sát Xenia co mở.":"Cây đung đưa theo dòng nước. Dương xỉ Java, ráy và rêu thích hợp bám vào lũa hoặc đá."}),r.map(o=>{const a=n.flora[o.id]??0;return L.jsxs("div",{children:[L.jsxs("div",{className:"species-row",children:[L.jsx("div",{className:"species-chip",style:{background:`linear-gradient(135deg, ${o.colors[0]}, ${o.colors[1%o.colors.length]})`},"aria-hidden":!0}),L.jsxs("div",{className:"species-info",children:[L.jsx("div",{className:"name",children:o.name}),L.jsxs("div",{className:"meta",children:[Da(o.kind)," · ",Da(o.careLevel)]})]}),L.jsx("button",{className:"info-btn","aria-label":`Thông tin ${o.name}`,onClick:()=>i(t===o.id?null:o.id),children:"ⓘ"}),L.jsxs("div",{className:"stepper",children:[L.jsx("button",{"aria-label":`Bớt một ${o.name}`,onClick:()=>e(o.id,a-1),disabled:a===0,children:"−"}),L.jsx("span",{className:"count",children:a}),L.jsx("button",{"aria-label":`Thêm một ${o.name}`,onClick:()=>e(o.id,a+1),children:"+"})]})]}),t===o.id&&L.jsxs("div",{style:{padding:"4px 10px 12px 62px",fontSize:13,lineHeight:1.5,color:"#c4d4de"},children:[L.jsx("div",{style:{fontStyle:"italic",color:"var(--text-dim)",marginBottom:4},children:o.scientific}),o.info]})]},o.id)})]})}function eR(){const n=Me(s=>s.config),e=Me(s=>s.toggleDecor),t=uf(n.water),i=t.filter(s=>!s.playful),r=t.filter(s=>s.playful);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Đá và lũa"}),L.jsx("div",{className:"decor-grid",children:i.map(s=>L.jsx("button",{className:n.decor.includes(s.id)?"active":"",onClick:()=>e(s.id),title:s.info,"aria-pressed":n.decor.includes(s.id),children:s.name},s.id))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Vật trang trí"}),L.jsx("div",{className:"decor-grid",children:r.map(s=>L.jsx("button",{className:n.decor.includes(s.id)?"active":"",onClick:()=>e(s.id),title:s.info,"aria-pressed":n.decor.includes(s.id),children:s.name},s.id))})]}),L.jsx("p",{style:{fontSize:12.5,color:"var(--text-dim)"},children:"Đá sủi tạo cột bọt khí, đá rạn là chỗ bám của san hô và nơi cá trú ẩn."})]})}function tR(){const n=Me(c=>c.config),e=Me(c=>c.savedTanks),t=Me(c=>c.saveTank),i=Me(c=>c.loadTank),r=Me(c=>c.deleteTank),s=Me(c=>c.showToast),[o,a]=et.useState(sa(n.name||"Hồ của tôi")),l=Object.keys(e);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Lưu hồ hiện tại"}),L.jsxs("div",{className:"name-input",children:[L.jsx("input",{value:o,onChange:c=>a(c.target.value),"aria-label":"Tên hồ cá",maxLength:40}),L.jsx("button",{className:"btn primary",onClick:()=>{t(o.trim()||"Hồ của tôi"),s(`Đã lưu “${o.trim()||"Hồ của tôi"}”.`)},children:"Lưu"})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Hồ đã lưu"}),l.length===0&&L.jsx("p",{style:{color:"var(--text-dim)",fontSize:13.5},children:"Chưa có hồ nào được lưu. Dữ liệu hồ được giữ trong trình duyệt này."}),l.map(c=>L.jsxs("div",{className:"saved-row",children:[L.jsx("span",{className:"s-name",children:sa(c)}),L.jsx("button",{className:"btn",onClick:()=>i(c),children:"Mở"}),L.jsx("button",{className:"btn danger","aria-label":`Xóa hồ ${sa(c)}`,onClick:()=>r(c),children:"🗑"})]},c))]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Chia sẻ"}),L.jsx("button",{className:"btn",onClick:async()=>{const c=VA(n);if(!(lf()&&bC(c)))try{await navigator.clipboard.writeText(c),s("Đã sao chép liên kết chia sẻ hồ cá.")}catch{window.prompt("Sao chép liên kết này:",c)}},children:"🔗 Sao chép liên kết"})]})]})}function nR(){const n=Me(l=>l.quality),e=Me(l=>l.audioOn),t=Me(l=>l.audioVolume),i=Me(l=>l.musicOn),r=Me(l=>l.showHud),s=Me(l=>l.reducedMotion),o=Me(l=>l.softFinsOn),a=Me(l=>l.set);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Chất lượng đồ họa"}),L.jsx("div",{className:"seg",children:["auto","low","medium","high","ultra"].map(l=>L.jsx("button",{className:n===l?"active":"",onClick:()=>a({quality:l}),children:{auto:"Tự động",low:"Thấp",medium:"Vừa",high:"Cao",ultra:"Siêu cao"}[l]},l))}),L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"Tự động chọn chất lượng phù hợp và giảm bớt hiệu ứng nếu máy chạy chậm."})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Âm thanh"}),L.jsxs("div",{className:"seg",children:[L.jsx("button",{className:e?"active":"",onClick:()=>a({audioOn:!e}),children:e?"🔊 Tiếng nước: Bật":"🔇 Tắt tiếng"}),L.jsx("button",{className:i?"active":"",onClick:()=>a({musicOn:!i}),children:i?"🎵 Nhạc: Bật":"🎵 Nhạc: Tắt"})]}),L.jsxs("div",{className:"slider-row",style:{marginTop:10},children:[L.jsx("span",{style:{fontSize:13,color:"var(--text-dim)"},children:"Âm lượng"}),L.jsx("input",{type:"range",min:0,max:1,step:.05,value:t,"aria-label":"Âm lượng",onChange:l=>a({audioVolume:Number(l.target.value)})})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Chuyển động và hiệu năng"}),L.jsxs("div",{className:"seg",children:[L.jsx("button",{className:o?"active":"",onClick:()=>a({softFinsOn:!o}),children:o?"Vây mềm tự nhiên: Bật":"Vây mềm tự nhiên: Tắt (bản cũ)"}),L.jsx("button",{className:s?"active":"",onClick:()=>a({reducedMotion:!s}),children:s?"🐢 Bơi chậm: Bật":"Bơi chậm: Tắt"}),L.jsx("button",{className:r?"active":"",onClick:()=>a({showHud:!r}),children:r?"📈 Hiệu năng: Bật":"Hiệu năng: Tắt"})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Giới thiệu"}),L.jsxs("p",{style:{fontSize:12.5,color:"var(--text-dim)",lineHeight:1.6},children:["Hồ cá 3D được dựng trong trình duyệt bằng Three.js, không cần cài thêm phần mềm. Phím tắt: ",L.jsx("kbd",{children:"H"})," ẩn giao diện · ",L.jsx("kbd",{children:"F"})," cho ăn · ",L.jsx("kbd",{children:"C"})," camera điện ảnh · ",L.jsx("kbd",{children:"P"})," chụp ảnh."]})]})]})}class iR{constructor(){W(this,"ctx",null);W(this,"master",null);W(this,"musicGain",null);W(this,"bubbleTimer",null);W(this,"musicTimer",null);W(this,"started",!1);W(this,"volume",.6)}async start(){if(this.started){await this.ctx?.resume();return}try{this.ctx=new AudioContext,await this.ctx.resume()}catch{return}const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume*.5,this.master.connect(e.destination);const t=e.createBuffer(1,e.sampleRate*4,e.sampleRate),i=t.getChannelData(0);let r=0;for(let m=0;m<i.length;m++){const f=Math.random()*2-1;r=(r+.02*f)/1.02,i[m]=r*3.2}const s=e.createBufferSource();s.buffer=t,s.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=220;const a=e.createGain();a.gain.value=.5,s.connect(o).connect(a).connect(this.master),s.start();const l=e.createOscillator();l.frequency.value=90;const c=e.createGain();c.gain.value=.015;const h=e.createOscillator();h.frequency.value=.4;const u=e.createGain();u.gain.value=.006,h.connect(u).connect(c.gain),l.connect(c).connect(this.master),l.start(),h.start();const d=()=>{if(!this.ctx||this.ctx.state!=="running"){this.bubbleTimer=window.setTimeout(d,400);return}const m=e.currentTime,f=e.createOscillator(),v=e.createGain(),_=380+Math.random()*500;f.frequency.setValueAtTime(_,m),f.frequency.exponentialRampToValueAtTime(_*(1.3+Math.random()*.6),m+.06),v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(.012+Math.random()*.02,m+.008),v.gain.exponentialRampToValueAtTime(1e-4,m+.05+Math.random()*.05),f.connect(v).connect(this.master),f.start(m),f.stop(m+.14),this.bubbleTimer=window.setTimeout(d,60+Math.random()*260)};d(),this.musicGain=e.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master);const p=[220,174.61,196,146.83];let g=0;const y=()=>{if(!this.ctx)return;const m=e.currentTime,f=p[g%p.length];g++;for(const v of[1,1.5,2,2.4]){const _=e.createOscillator();_.type="sine",_.frequency.value=f*v*(1+(Math.random()-.5)*.003);const M=e.createGain();M.gain.setValueAtTime(0,m),M.gain.linearRampToValueAtTime(.03/v,m+4),M.gain.linearRampToValueAtTime(0,m+11),_.connect(M).connect(this.musicGain),_.start(m),_.stop(m+12)}this.musicTimer=window.setTimeout(y,8e3)};y(),this.started=!0}setVolume(e){this.volume=e,this.master&&this.ctx&&this.master.gain.linearRampToValueAtTime(e*.5,this.ctx.currentTime+.15)}setMusic(e){this.musicGain&&this.ctx&&this.musicGain.gain.linearRampToValueAtTime(e?1:0,this.ctx.currentTime+2)}async setEnabled(e){e?await this.start():await this.ctx?.suspend()}}const oa=new iR;function rR(){const n=Me(u=>u.feedMode),e=Me(u=>u.cameraMode),t=Me(u=>u.audioOn),i=Me(u=>u.panelOpen),r=Me(u=>u.config),s=Me(u=>u.set),o=Me(u=>u.setConfig),a=Me(u=>u.showToast),l=()=>{const u=co();if(!u)return;const d=u.screenshot();if(lf()&&CC(d))return;const p=document.createElement("a");p.href=d,p.download=`aquarium-${(r.name||"tank").replace(/\s+/g,"-").toLowerCase()}.png`,p.click(),a("Đã lưu ảnh hồ cá")},c=async()=>{const u=!t;s({audioOn:u}),await oa.setEnabled(u),u&&(oa.setVolume(Me.getState().audioVolume),oa.setMusic(Me.getState().musicOn))},h=r.dayNight==="night";return L.jsxs("div",{className:"toolbar",role:"toolbar","aria-label":"Thanh điều khiển hồ cá",children:[L.jsx("button",{"data-tip":"Cho cá ăn (F)",className:n?"active":"","aria-pressed":n,onClick:()=>s({feedMode:!n}),children:"🫘"}),L.jsx("button",{"data-tip":h?"Chuyển sang ngày":"Chuyển sang đêm",onClick:()=>o({dayNight:h?"day":"night"}),children:h?"☀️":"🌙"}),L.jsx("button",{"data-tip":"Camera điện ảnh (C)",className:e==="cinematic"?"active":"","aria-pressed":e==="cinematic",onClick:()=>s({cameraMode:e==="cinematic"?"orbit":"cinematic"}),children:"🎥"}),L.jsx("button",{"data-tip":t?"Tắt tiếng":"Bật âm thanh","aria-pressed":t,onClick:c,children:t?"🔊":"🔇"}),L.jsx("button",{"data-tip":"Chụp ảnh hồ cá (P)",onClick:l,children:"📸"}),L.jsx("div",{className:"divider","aria-hidden":!0}),L.jsx("button",{"data-tip":"Chỉ ngắm cá, ẩn giao diện (H)",onClick:()=>s({uiHidden:!0,cameraMode:"cinematic",panelOpen:!1,selectedFishKey:null,followFishKey:null}),children:"🖥️"}),!lf()&&L.jsx("button",{"data-tip":"Toàn màn hình",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()},children:"⛶"}),!i&&L.jsx("button",{"data-tip":"Tùy chỉnh bể",onClick:()=>s({panelOpen:!0}),children:"🛠️"})]})}function sR(){const n=Me(u=>u.selectedFishKey),e=Me(u=>u.followFishKey),t=Me(u=>u.config.fishNames),i=Me(u=>u.nameFish),r=Me(u=>u.set),[s,o]=et.useState("");if(!n)return null;const a=n.split(":")[0],l=Qc.get(a);if(!l)return null;const c=t[n],h=e===n;return L.jsxs("div",{className:"info-card",role:"dialog","aria-label":`Thông tin về ${l.common}`,children:[L.jsx("button",{className:"close","aria-label":"Đóng",onClick:()=>r({selectedFishKey:null,followFishKey:null}),children:"✕"}),L.jsx("h3",{children:c?`${c} · ${l.common}`:l.common}),L.jsx("div",{className:"sci",children:l.scientific}),L.jsxs("div",{className:"chips",children:[L.jsxs("span",{className:"chip",children:[(l.adultSizeIn*2.54).toFixed(1)," cm trưởng thành"]}),L.jsx("span",{className:"chip",children:{peaceful:"Hiền hòa",aggressive:"Hung dữ",semiaggressive:"Hơi dữ"}[l.temperament]||l.temperament}),L.jsx("span",{className:"chip",children:{top:"Tầng mặt",mid:"Tầng giữa",bottom:"Tầng đáy"}[l.zone]||l.zone}),L.jsxs("span",{className:"chip",children:["Chăm sóc: ",{easy:"Dễ",moderate:"Vừa",expert:"Khó"}[l.careLevel]||l.careLevel]}),l.minGroup>1&&L.jsxs("span",{className:"chip",children:["Đàn từ ",l.minGroup," con"]})]}),L.jsxs("p",{children:[L.jsx("strong",{children:"Xuất xứ:"})," ",l.habitat]}),L.jsx("p",{className:"fact",children:l.funFact}),L.jsxs("div",{className:"name-input",children:[L.jsx("input",{placeholder:c?`Đổi tên ${c}…`:"Đặt tên cá…",value:s,maxLength:24,onChange:u=>o(u.target.value),onKeyDown:u=>{u.key==="Enter"&&s.trim()&&(i(n,s.trim()),o(""))},"aria-label":"Đặt tên cá"}),L.jsx("button",{className:"btn primary",disabled:!s.trim(),onClick:()=>{i(n,s.trim()),o("")},children:"Lưu tên"})]}),L.jsx("div",{className:"row-actions",style:{marginTop:8},children:L.jsx("button",{className:"btn",onClick:()=>r({followFishKey:h?null:n,cameraMode:h?"orbit":"follow"}),children:h?"👁 Ngừng theo dõi":"👁 Theo dõi cá"})})]})}function oR(){const[n,e]=et.useState({fps:0,drawCalls:0,triangles:0,fishCount:0});return et.useEffect(()=>{const t=setInterval(()=>{const i=co();i&&e({...i.stats})},500);return()=>clearInterval(t)},[]),L.jsxs("div",{className:"hud","aria-hidden":!0,children:[n.fps," fps",L.jsx("br",{}),n.drawCalls," draw calls",L.jsx("br",{}),(n.triangles/1e3).toFixed(1),"k tris",L.jsx("br",{}),n.fishCount," fish"]})}function aR(){const n=Me(y=>y.uiHidden),e=Me(y=>y.panelOpen),t=Me(y=>y.showHud),i=Me(y=>y.feedMode),r=Me(y=>y.toast),s=Me(y=>y.audioVolume),o=Me(y=>y.musicOn),a=Me(y=>y.set),[l,c]=et.useState(!1),[h,u]=et.useState(0),d=Me(y=>Object.values(y.config.fish).reduce((m,f)=>m+f,0)),p=new URLSearchParams(location.search).has("kanban");et.useEffect(()=>{const y=m=>u(m.detail.count);return window.addEventListener("kanaquarium-fed",y),()=>window.removeEventListener("kanaquarium-fed",y)},[]);const g=et.useRef();return et.useEffect(()=>{new URLSearchParams(window.location.search).get("kiosk")&&a({uiHidden:!0,cameraMode:"cinematic",panelOpen:!1})},[a]),et.useEffect(()=>{p&&a({uiHidden:!1,panelOpen:!0})},[p,a]),et.useEffect(()=>{oa.setVolume(s)},[s]),et.useEffect(()=>{oa.setMusic(o)},[o]),et.useEffect(()=>{const y=m=>{const f=m.target;if(f.tagName==="INPUT"||f.tagName==="TEXTAREA")return;const v=Me.getState();if(m.key==="Escape"&&new URLSearchParams(location.search).has("kanban")&&window.parent!==window){m.preventDefault(),window.parent.postMessage({type:"aquarium-game-close"},location.origin);return}switch(m.key.toLowerCase()){case"h":a({uiHidden:!v.uiHidden,...v.uiHidden?{}:{panelOpen:!1}});break;case"f":a({feedMode:!v.feedMode});break;case"c":a({cameraMode:v.cameraMode==="cinematic"?"orbit":"cinematic"});break;case"p":{const _=co();if(_){const M=document.createElement("a");M.href=_.screenshot(),M.download="aquarium.png",M.click()}break}case"escape":v.selectedFishKey?a({selectedFishKey:null,followFishKey:null}):v.uiHidden?a({uiHidden:!1}):a({panelOpen:!1});break}};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[a]),et.useEffect(()=>{if(!n)return;const y=()=>{c(!0),clearTimeout(g.current),g.current=setTimeout(()=>c(!1),2500)};return window.addEventListener("pointermove",y),()=>{window.removeEventListener("pointermove",y),clearTimeout(g.current)}},[n]),L.jsxs(L.Fragment,{children:[L.jsx(WA,{}),p&&L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"kanban-aquarium-help",children:"Trái: thả thức ăn · Mỗi 10 lần: bánh cá/gấu · Phải: thêm cá · Shift + phải: bớt cá · ESC: về KanBan"}),L.jsxs("div",{className:"kanban-aquarium-stock",children:[L.jsx("button",{title:"Bớt 1 con cá (Shift + chuột phải)","aria-label":"Bớt một cá",onClick:X_,children:"−"}),L.jsxs("span",{children:["Cá: ",L.jsx("strong",{children:d}),"/60"]}),L.jsx("button",{title:"Thêm cá, có hiệu ứng rơi","aria-label":"Thêm một cá",disabled:d>=60,onClick:()=>j_(),children:"+"}),L.jsxs("span",{className:"kanban-aquarium-feed-count",children:["Đã thả: ",h," · Còn ",10-h%10," lượt đến bánh"]})]}),L.jsx("button",{className:"kanban-aquarium-exit",title:"Về KanBan (ESC)",onClick:()=>window.parent.postMessage({type:"aquarium-game-close"},location.origin),children:"✕"})]}),!n&&L.jsxs(L.Fragment,{children:[L.jsx(rR,{}),e?L.jsx(YA,{}):L.jsx("button",{className:"open-panel","aria-label":"Mở bảng cài đặt hồ cá",onClick:()=>a({panelOpen:!0}),children:"🛠️"}),L.jsx(sR,{}),i&&L.jsx("div",{className:"feed-hint",children:"Nhấp chuột để cho cá ăn · nhấn F để tắt"})]}),n&&L.jsx("button",{className:`reveal ${l?"visible":""}`,onClick:()=>a({uiHidden:!1}),children:"Hiện bảng điều khiển (H)"}),t&&L.jsx(oR,{}),r&&L.jsx("div",{className:"toast",role:"status",children:r})]})}const lR={bordered:{coverDepth:0,overfill:.82,fit:"contain",lookFrac:.52},fullbleed:{coverDepth:1,overfill:1.04,fit:"cover",lookFrac:.52}},cR={"tang-highway":"fullbleed","reef-lagoon":"fullbleed","amazon-community":"fullbleed","blackwater-stream":"bordered","betta-oasis":"bordered","nano-planted":"bordered"},uR=n=>n.toLowerCase().replace(/\s+/g,"-");function hR(){const n=new URLSearchParams(window.location.hash.replace(/^#/,"")),e=n.get("capture");if(!e)return null;const t=n.get("view");return{preset:e,fps:Number(n.get("fps"))||30,secs:Number(n.get("secs"))||70,view:t==="bordered"||t==="fullbleed"?t:void 0}}function dR(n){const e=Dp.find(c=>uR(c.name)===n.preset.toLowerCase());if(!e){document.body.textContent=`Unknown capture preset: ${n.preset}`;return}const t=document.getElementById("root");t.style.cssText="position:fixed;inset:0;background:#04141f";const i=new k_(t);i.setQuality("ultra"),i.applyConfig({...e,dayNight:"day"});const r=n.view??cR[n.preset.toLowerCase()]??"fullbleed",{coverDepth:s,overfill:o,fit:a,lookFrac:l}=lR[r];i.setCameraMode("still"),i.captureFrontView(s,o,a,l),i.enableExternalDrive(),window.__step=c=>i.advance(c),window.__frontView=(c,h,u,d)=>i.captureFrontView(c,h,u,d),window.__cameraState=()=>({pos:i.rig.camera.position.toArray(),quat:i.rig.camera.quaternion.toArray()}),window.__captureInfo={...n,presetName:e.name,view:r}}const Sg=hR();Sg?dR(Sg):Sh.createRoot(document.getElementById("root")).render(L.jsx(Ig.StrictMode,{children:L.jsx(aR,{})}));
