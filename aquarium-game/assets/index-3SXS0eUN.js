var Fy=Object.defineProperty;var ky=(n,e,t)=>e in n?Fy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Y=(n,e,t)=>ky(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ug(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hg={exports:{}},Ec={},dg={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),Oy=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),By=Symbol.for("react.strict_mode"),Hy=Symbol.for("react.profiler"),Gy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Wy=Symbol.for("react.forward_ref"),Xy=Symbol.for("react.suspense"),jy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Dp=Symbol.iterator;function qy(n){return n===null||typeof n!="object"?null:(n=Dp&&n[Dp]||n["@@iterator"],typeof n=="function"?n:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function oa(n,e,t){this.props=n,this.context=e,this.refs=mg,this.updater=t||fg}oa.prototype.isReactComponent={};oa.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};oa.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function gg(){}gg.prototype=oa.prototype;function nf(n,e,t){this.props=n,this.context=e,this.refs=mg,this.updater=t||fg}var rf=nf.prototype=new gg;rf.constructor=nf;pg(rf,oa.prototype);rf.isPureReactComponent=!0;var Ip=Array.isArray,vg=Object.prototype.hasOwnProperty,sf={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function yg(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)vg.call(e,i)&&!_g.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ao,type:n,key:s,ref:a,props:r,_owner:sf.current}}function $y(n,e){return{$$typeof:Ao,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function af(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ao}function Ky(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Np=/\/+/g;function Zc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ky(""+n.key):e.toString(36)}function Cl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Ao:case Oy:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Zc(a,0):i,Ip(r)?(t="",n!=null&&(t=n.replace(Np,"$&/")+"/"),Cl(r,e,t,"",function(c){return c})):r!=null&&(af(r)&&(r=$y(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Np,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ip(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Zc(s,o);a+=Cl(s,e,t,l,r)}else if(l=qy(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Zc(s,o++),a+=Cl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Fo(n,e,t){if(n==null)return n;var i=[],r=0;return Cl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Zy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},Rl={transition:null},Jy={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:sf};function xg(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Fo,forEach:function(n,e,t){Fo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Fo(n,function(){e++}),e},toArray:function(n){return Fo(n,function(e){return e})||[]},only:function(n){if(!af(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ve.Component=oa;Ve.Fragment=zy;Ve.Profiler=Hy;Ve.PureComponent=nf;Ve.StrictMode=By;Ve.Suspense=Xy;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;Ve.act=xg;Ve.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=pg({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=sf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)vg.call(e,l)&&!_g.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ao,type:n.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(n){return n={$$typeof:Vy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Gy,_context:n},n.Consumer=n};Ve.createElement=yg;Ve.createFactory=function(n){var e=yg.bind(null,n);return e.type=n,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(n){return{$$typeof:Wy,render:n}};Ve.isValidElement=af;Ve.lazy=function(n){return{$$typeof:Yy,_payload:{_status:-1,_result:n},_init:Zy}};Ve.memo=function(n,e){return{$$typeof:jy,type:n,compare:e===void 0?null:e}};Ve.startTransition=function(n){var e=Rl.transition;Rl.transition={};try{n()}finally{Rl.transition=e}};Ve.unstable_act=xg;Ve.useCallback=function(n,e){return fn.current.useCallback(n,e)};Ve.useContext=function(n){return fn.current.useContext(n)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};Ve.useEffect=function(n,e){return fn.current.useEffect(n,e)};Ve.useId=function(){return fn.current.useId()};Ve.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};Ve.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};Ve.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};Ve.useMemo=function(n,e){return fn.current.useMemo(n,e)};Ve.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};Ve.useRef=function(n){return fn.current.useRef(n)};Ve.useState=function(n){return fn.current.useState(n)};Ve.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};Ve.useTransition=function(){return fn.current.useTransition()};Ve.version="18.3.1";dg.exports=Ve;var mt=dg.exports;const Sg=ug(mt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=mt,ex=Symbol.for("react.element"),tx=Symbol.for("react.fragment"),nx=Object.prototype.hasOwnProperty,ix=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rx={key:!0,ref:!0,__self:!0,__source:!0};function Mg(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)nx.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ex,type:n,key:s,ref:a,props:r,_owner:ix.current}}Ec.Fragment=tx;Ec.jsx=Mg;Ec.jsxs=Mg;hg.exports=Ec;var L=hg.exports,ph={},wg={exports:{}},In={},Eg={exports:{}},Tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,K){var Q=I.length;I.push(K);e:for(;0<Q;){var oe=Q-1>>>1,Ce=I[oe];if(0<r(Ce,K))I[oe]=K,I[Q]=Ce,Q=oe;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],Q=I.pop();if(Q!==K){I[0]=Q;e:for(var oe=0,Ce=I.length,We=Ce>>>1;oe<We;){var j=2*(oe+1)-1,ie=I[j],fe=j+1,ue=I[fe];if(0>r(ie,Q))fe<Ce&&0>r(ue,ie)?(I[oe]=ue,I[fe]=Q,oe=fe):(I[oe]=ie,I[j]=Q,oe=j);else if(fe<Ce&&0>r(ue,Q))I[oe]=ue,I[fe]=Q,oe=fe;else break e}}return K}function r(I,K){var Q=I.sortIndex-K.sortIndex;return Q!==0?Q:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,u=null,d=3,f=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var K=t(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=I)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(c)}}function x(I){if(y=!1,_(I),!g)if(t(l)!==null)g=!0,G(C);else{var K=t(c);K!==null&&ee(x,K.startTime-I)}}function C(I,K){g=!1,y&&(y=!1,p(P),P=-1),f=!0;var Q=d;try{for(_(K),u=t(l);u!==null&&(!(u.expirationTime>K)||I&&!E());){var oe=u.callback;if(typeof oe=="function"){u.callback=null,d=u.priorityLevel;var Ce=oe(u.expirationTime<=K);K=n.unstable_now(),typeof Ce=="function"?u.callback=Ce:u===t(l)&&i(l),_(K)}else i(l);u=t(l)}if(u!==null)var We=!0;else{var j=t(c);j!==null&&ee(x,j.startTime-K),We=!1}return We}finally{u=null,d=Q,f=!1}}var A=!1,b=null,P=-1,V=5,S=-1;function E(){return!(n.unstable_now()-S<V)}function H(){if(b!==null){var I=n.unstable_now();S=I;var K=!0;try{K=b(!0,I)}finally{K?B():(A=!1,b=null)}}else A=!1}var B;if(typeof v=="function")B=function(){v(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=H,B=function(){Z.postMessage(null)}}else B=function(){m(H,0)};function G(I){b=I,A||(A=!0,B())}function ee(I,K){P=m(function(){I(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||f||(g=!0,G(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var Q=d;d=K;try{return I()}finally{d=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=d;d=I;try{return K()}finally{d=Q}},n.unstable_scheduleCallback=function(I,K,Q){var oe=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,I){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Q+Ce,I={id:h++,callback:K,priorityLevel:I,startTime:Q,expirationTime:Ce,sortIndex:-1},Q>oe?(I.sortIndex=Q,e(c,I),t(l)===null&&I===t(c)&&(y?(p(P),P=-1):y=!0,ee(x,Q-oe))):(I.sortIndex=Ce,e(l,I),g||f||(g=!0,G(C))),I},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(I){var K=d;return function(){var Q=d;d=K;try{return I.apply(this,arguments)}finally{d=Q}}}})(Tg);Eg.exports=Tg;var sx=Eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=mt,Dn=sx;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bg=new Set,to={};function qr(n,e){Xs(n,e),Xs(n+"Capture",e)}function Xs(n,e){for(to[n]=e,n=0;n<e.length;n++)bg.add(e[n])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mh=Object.prototype.hasOwnProperty,ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Up={},Fp={};function lx(n){return mh.call(Fp,n)?!0:mh.call(Up,n)?!1:ox.test(n)?Fp[n]=!0:(Up[n]=!0,!1)}function cx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function ux(n,e,t,i){if(e===null||typeof e>"u"||cx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Kt[n]=new pn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Kt[e]=new pn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Kt[n]=new pn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Kt[n]=new pn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Kt[n]=new pn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Kt[n]=new pn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Kt[n]=new pn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Kt[n]=new pn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Kt[n]=new pn(n,5,!1,n.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function lf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(of,lf);Kt[e]=new pn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(of,lf);Kt[e]=new pn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(of,lf);Kt[e]=new pn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Kt[n]=new pn(n,1,!1,n.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Kt[n]=new pn(n,1,!1,n.toLowerCase(),null,!0,!0)});function cf(n,e,t,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ux(e,t,r,i)&&(t=null),i||r===null?lx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Bi=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),gh=Symbol.for("react.profiler"),Ag=Symbol.for("react.provider"),Cg=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),_h=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),kp=Symbol.iterator;function pa(n){return n===null||typeof n!="object"?null:(n=kp&&n[kp]||n["@@iterator"],typeof n=="function"?n:null)}var Tt=Object.assign,Jc;function Fa(n){if(Jc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+n}var Qc=!1;function eu(n,e){if(!n||Qc)return"";Qc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{Qc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Fa(n):""}function hx(n){switch(n.tag){case 5:return Fa(n.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return n=eu(n.type,!1),n;case 11:return n=eu(n.type.render,!1),n;case 1:return n=eu(n.type,!0),n;default:return""}}function yh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Es:return"Fragment";case ws:return"Portal";case gh:return"Profiler";case uf:return"StrictMode";case vh:return"Suspense";case _h:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Cg:return(n.displayName||"Context")+".Consumer";case Ag:return(n._context.displayName||"Context")+".Provider";case hf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case df:return e=n.displayName||null,e!==null?e:yh(n.type)||"Memo";case $i:e=n._payload,n=n._init;try{return yh(n(e))}catch{}}return null}function dx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yh(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fx(n){var e=Pg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Oo(n){n._valueTracker||(n._valueTracker=fx(n))}function Lg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Pg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ql(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xh(n,e){var t=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Op(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=pr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dg(n,e){e=e.checked,e!=null&&cf(n,"checked",e,!1)}function Sh(n,e){Dg(n,e);var t=pr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Mh(n,e.type,t):e.hasOwnProperty("defaultValue")&&Mh(n,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function zp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Mh(n,e,t){(e!=="number"||ql(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ka=Array.isArray;function Fs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+pr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function wh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(ka(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:pr(t)}}function Ig(n,e){var t=pr(e.value),i=pr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Hp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ng(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ng(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var zo,Ug=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function no(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(n){px.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ha[e]=Ha[n]})});function Fg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ha.hasOwnProperty(n)&&Ha[n]?(""+e).trim():e+"px"}function kg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Fg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var mx=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Th(n,e){if(e){if(mx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function bh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function ff(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ch=null,ks=null,Os=null;function Gp(n){if(n=Po(n)){if(typeof Ch!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Rc(e),Ch(n.stateNode,n.type,e))}}function Og(n){ks?Os?Os.push(n):Os=[n]:ks=n}function zg(){if(ks){var n=ks,e=Os;if(Os=ks=null,Gp(n),e)for(n=0;n<e.length;n++)Gp(e[n])}}function Bg(n,e){return n(e)}function Hg(){}var tu=!1;function Gg(n,e,t){if(tu)return n(e,t);tu=!0;try{return Bg(n,e,t)}finally{tu=!1,(ks!==null||Os!==null)&&(Hg(),zg())}}function io(n,e){var t=n.stateNode;if(t===null)return null;var i=Rc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Rh=!1;if(Ui)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Rh=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Rh=!1}function gx(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var Ga=!1,$l=null,Kl=!1,Ph=null,vx={onError:function(n){Ga=!0,$l=n}};function _x(n,e,t,i,r,s,a,o,l){Ga=!1,$l=null,gx.apply(vx,arguments)}function yx(n,e,t,i,r,s,a,o,l){if(_x.apply(this,arguments),Ga){if(Ga){var c=$l;Ga=!1,$l=null}else throw Error(ne(198));Kl||(Kl=!0,Ph=c)}}function $r(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Vg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(n){if($r(n)!==n)throw Error(ne(188))}function xx(n){var e=n.alternate;if(!e){if(e=$r(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Vp(r),n;if(s===i)return Vp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function Wg(n){return n=xx(n),n!==null?Xg(n):null}function Xg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Xg(n);if(e!==null)return e;n=n.sibling}return null}var jg=Dn.unstable_scheduleCallback,Wp=Dn.unstable_cancelCallback,Sx=Dn.unstable_shouldYield,Mx=Dn.unstable_requestPaint,Pt=Dn.unstable_now,wx=Dn.unstable_getCurrentPriorityLevel,pf=Dn.unstable_ImmediatePriority,Yg=Dn.unstable_UserBlockingPriority,Zl=Dn.unstable_NormalPriority,Ex=Dn.unstable_LowPriority,qg=Dn.unstable_IdlePriority,Tc=null,pi=null;function Tx(n){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Tc,n,void 0,(n.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:Cx,bx=Math.log,Ax=Math.LN2;function Cx(n){return n>>>=0,n===0?32:31-(bx(n)/Ax|0)|0}var Bo=64,Ho=4194304;function Oa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Oa(o):(s&=a,s!==0&&(i=Oa(s)))}else a=t&~r,a!==0?i=Oa(a):s!==0&&(i=Oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-si(e),r=1<<t,i|=n[t],e&=~r;return i}function Rx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-si(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=Rx(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Lh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function $g(){var n=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),n}function nu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Co(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-si(e),n[e]=t}function Lx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-si(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function mf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-si(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ut=0;function Kg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Zg,gf,Jg,Qg,ev,Dh=!1,Go=[],sr=null,ar=null,or=null,ro=new Map,so=new Map,Qi=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(n,e){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function ga(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&gf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Ix(n,e,t,i,r){switch(e){case"focusin":return sr=ga(sr,n,e,t,i,r),!0;case"dragenter":return ar=ga(ar,n,e,t,i,r),!0;case"mouseover":return or=ga(or,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ro.set(s,ga(ro.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,so.set(s,ga(so.get(s)||null,n,e,t,i,r)),!0}return!1}function tv(n){var e=Ur(n.target);if(e!==null){var t=$r(e);if(t!==null){if(e=t.tag,e===13){if(e=Vg(t),e!==null){n.blockedOn=e,ev(n.priority,function(){Jg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ih(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ah=i,t.target.dispatchEvent(i),Ah=null}else return e=Po(t),e!==null&&gf(e),n.blockedOn=t,!1;e.shift()}return!0}function jp(n,e,t){Pl(n)&&t.delete(e)}function Nx(){Dh=!1,sr!==null&&Pl(sr)&&(sr=null),ar!==null&&Pl(ar)&&(ar=null),or!==null&&Pl(or)&&(or=null),ro.forEach(jp),so.forEach(jp)}function va(n,e){n.blockedOn===e&&(n.blockedOn=null,Dh||(Dh=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,Nx)))}function ao(n){function e(r){return va(r,n)}if(0<Go.length){va(Go[0],n);for(var t=1;t<Go.length;t++){var i=Go[t];i.blockedOn===n&&(i.blockedOn=null)}}for(sr!==null&&va(sr,n),ar!==null&&va(ar,n),or!==null&&va(or,n),ro.forEach(e),so.forEach(e),t=0;t<Qi.length;t++)i=Qi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Qi.length&&(t=Qi[0],t.blockedOn===null);)tv(t),t.blockedOn===null&&Qi.shift()}var zs=Bi.ReactCurrentBatchConfig,Ql=!0;function Ux(n,e,t,i){var r=ut,s=zs.transition;zs.transition=null;try{ut=1,vf(n,e,t,i)}finally{ut=r,zs.transition=s}}function Fx(n,e,t,i){var r=ut,s=zs.transition;zs.transition=null;try{ut=4,vf(n,e,t,i)}finally{ut=r,zs.transition=s}}function vf(n,e,t,i){if(Ql){var r=Ih(n,e,t,i);if(r===null)du(n,e,i,ec,t),Xp(n,i);else if(Ix(r,n,e,t,i))i.stopPropagation();else if(Xp(n,i),e&4&&-1<Dx.indexOf(n)){for(;r!==null;){var s=Po(r);if(s!==null&&Zg(s),s=Ih(n,e,t,i),s===null&&du(n,e,i,ec,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else du(n,e,i,null,t)}}var ec=null;function Ih(n,e,t,i){if(ec=null,n=ff(i),n=Ur(n),n!==null)if(e=$r(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Vg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ec=n,null}function nv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case pf:return 1;case Yg:return 4;case Zl:case Ex:return 16;case qg:return 536870912;default:return 16}default:return 16}}var nr=null,_f=null,Ll=null;function iv(){if(Ll)return Ll;var n,e=_f,t=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Ll=r.slice(n,1<i?1-i:void 0)}function Dl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Vo(){return!0}function Yp(){return!1}function Nn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:Yp,this.isPropagationStopped=Yp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=Nn(la),Ro=Tt({},la,{view:0,detail:0}),kx=Nn(Ro),iu,ru,_a,bc=Tt({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_a&&(_a&&n.type==="mousemove"?(iu=n.screenX-_a.screenX,ru=n.screenY-_a.screenY):ru=iu=0,_a=n),iu)},movementY:function(n){return"movementY"in n?n.movementY:ru}}),qp=Nn(bc),Ox=Tt({},bc,{dataTransfer:0}),zx=Nn(Ox),Bx=Tt({},Ro,{relatedTarget:0}),su=Nn(Bx),Hx=Tt({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=Nn(Hx),Vx=Tt({},la,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wx=Nn(Vx),Xx=Tt({},la,{data:0}),$p=Nn(Xx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=qx[n])?!!e[n]:!1}function xf(){return $x}var Kx=Tt({},Ro,{key:function(n){if(n.key){var e=jx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Dl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(n){return n.type==="keypress"?Dl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Dl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zx=Nn(Kx),Jx=Tt({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Nn(Jx),Qx=Tt({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),eS=Nn(Qx),tS=Tt({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Nn(tS),iS=Tt({},bc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Nn(iS),sS=[9,13,27,32],Sf=Ui&&"CompositionEvent"in window,Va=null;Ui&&"documentMode"in document&&(Va=document.documentMode);var aS=Ui&&"TextEvent"in window&&!Va,rv=Ui&&(!Sf||Va&&8<Va&&11>=Va),Zp=" ",Jp=!1;function sv(n,e){switch(n){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function av(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function oS(n,e){switch(n){case"compositionend":return av(e);case"keypress":return e.which!==32?null:(Jp=!0,Zp);case"textInput":return n=e.data,n===Zp&&Jp?null:n;default:return null}}function lS(n,e){if(Ts)return n==="compositionend"||!Sf&&sv(n,e)?(n=iv(),Ll=_f=nr=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rv&&e.locale!=="ko"?null:e.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!cS[n.type]:e==="textarea"}function ov(n,e,t,i){Og(i),e=tc(e,"onChange"),0<e.length&&(t=new yf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Wa=null,oo=null;function uS(n){_v(n,0)}function Ac(n){var e=Cs(n);if(Lg(e))return n}function hS(n,e){if(n==="change")return e}var lv=!1;if(Ui){var au;if(Ui){var ou="oninput"in document;if(!ou){var em=document.createElement("div");em.setAttribute("oninput","return;"),ou=typeof em.oninput=="function"}au=ou}else au=!1;lv=au&&(!document.documentMode||9<document.documentMode)}function tm(){Wa&&(Wa.detachEvent("onpropertychange",cv),oo=Wa=null)}function cv(n){if(n.propertyName==="value"&&Ac(oo)){var e=[];ov(e,oo,n,ff(n)),Gg(uS,e)}}function dS(n,e,t){n==="focusin"?(tm(),Wa=e,oo=t,Wa.attachEvent("onpropertychange",cv)):n==="focusout"&&tm()}function fS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ac(oo)}function pS(n,e){if(n==="click")return Ac(e)}function mS(n,e){if(n==="input"||n==="change")return Ac(e)}function gS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var li=typeof Object.is=="function"?Object.is:gS;function lo(n,e){if(li(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!mh.call(e,r)||!li(n[r],e[r]))return!1}return!0}function nm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function im(n,e){var t=nm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nm(t)}}function uv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?uv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var n=window,e=ql();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ql(n.document)}return e}function Mf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function vS(n){var e=hv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&uv(t.ownerDocument.documentElement,t)){if(i!==null&&Mf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=im(t,s);var a=im(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _S=Ui&&"documentMode"in document&&11>=document.documentMode,bs=null,Nh=null,Xa=null,Uh=!1;function rm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Uh||bs==null||bs!==ql(i)||(i=bs,"selectionStart"in i&&Mf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xa&&lo(Xa,i)||(Xa=i,i=tc(Nh,"onSelect"),0<i.length&&(e=new yf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=bs)))}function Wo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var As={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},lu={},dv={};Ui&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Cc(n){if(lu[n])return lu[n];if(!As[n])return n;var e=As[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in dv)return lu[n]=e[t];return n}var fv=Cc("animationend"),pv=Cc("animationiteration"),mv=Cc("animationstart"),gv=Cc("transitionend"),vv=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,e){vv.set(n,e),qr(e,[n])}for(var cu=0;cu<sm.length;cu++){var uu=sm[cu],yS=uu.toLowerCase(),xS=uu[0].toUpperCase()+uu.slice(1);vr(yS,"on"+xS)}vr(fv,"onAnimationEnd");vr(pv,"onAnimationIteration");vr(mv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(gv,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function am(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,yx(i,e,void 0,n),n.currentTarget=null}function _v(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;am(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;am(r,o,c),s=l}}}if(Kl)throw n=Ph,Kl=!1,Ph=null,n}function yt(n,e){var t=e[Bh];t===void 0&&(t=e[Bh]=new Set);var i=n+"__bubble";t.has(i)||(yv(e,n,2,!1),t.add(i))}function hu(n,e,t){var i=0;e&&(i|=4),yv(t,n,i,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function co(n){if(!n[Xo]){n[Xo]=!0,bg.forEach(function(t){t!=="selectionchange"&&(SS.has(t)||hu(t,!1,n),hu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,hu("selectionchange",!1,e))}}function yv(n,e,t,i){switch(nv(e)){case 1:var r=Ux;break;case 4:r=Fx;break;default:r=vf}t=r.bind(null,e,t,n),r=void 0,!Rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function du(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ur(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Gg(function(){var c=s,h=ff(t),u=[];e:{var d=vv.get(n);if(d!==void 0){var f=yf,g=n;switch(n){case"keypress":if(Dl(t)===0)break e;case"keydown":case"keyup":f=Zx;break;case"focusin":g="focus",f=su;break;case"focusout":g="blur",f=su;break;case"beforeblur":case"afterblur":f=su;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=eS;break;case fv:case pv:case mv:f=Gx;break;case gv:f=nS;break;case"scroll":f=kx;break;case"wheel":f=rS;break;case"copy":case"cut":case"paste":f=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Kp}var y=(e&4)!==0,m=!y&&n==="scroll",p=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,p!==null&&(x=io(v,p),x!=null&&y.push(uo(v,x,_)))),m)break;v=v.return}0<y.length&&(d=new f(d,g,null,t,h),u.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",f=n==="mouseout"||n==="pointerout",d&&t!==Ah&&(g=t.relatedTarget||t.fromElement)&&(Ur(g)||g[Fi]))break e;if((f||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=t.relatedTarget||t.toElement,f=c,g=g?Ur(g):null,g!==null&&(m=$r(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=c),f!==g)){if(y=qp,x="onMouseLeave",p="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=Kp,x="onPointerLeave",p="onPointerEnter",v="pointer"),m=f==null?d:Cs(f),_=g==null?d:Cs(g),d=new y(x,v+"leave",f,t,h),d.target=m,d.relatedTarget=_,x=null,Ur(h)===c&&(y=new y(p,v+"enter",g,t,h),y.target=_,y.relatedTarget=m,x=y),m=x,f&&g)t:{for(y=f,p=g,v=0,_=y;_;_=Qr(_))v++;for(_=0,x=p;x;x=Qr(x))_++;for(;0<v-_;)y=Qr(y),v--;for(;0<_-v;)p=Qr(p),_--;for(;v--;){if(y===p||p!==null&&y===p.alternate)break t;y=Qr(y),p=Qr(p)}y=null}else y=null;f!==null&&om(u,d,f,y,!1),g!==null&&m!==null&&om(u,m,g,y,!0)}}e:{if(d=c?Cs(c):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var C=hS;else if(Qp(d))if(lv)C=mS;else{C=fS;var A=dS}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=pS);if(C&&(C=C(n,c))){ov(u,C,t,h);break e}A&&A(n,d,c),n==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Mh(d,"number",d.value)}switch(A=c?Cs(c):window,n){case"focusin":(Qp(A)||A.contentEditable==="true")&&(bs=A,Nh=c,Xa=null);break;case"focusout":Xa=Nh=bs=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,rm(u,t,h);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":rm(u,t,h)}var b;if(Sf)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ts?sv(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(rv&&t.locale!=="ko"&&(Ts||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ts&&(b=iv()):(nr=h,_f="value"in nr?nr.value:nr.textContent,Ts=!0)),A=tc(c,P),0<A.length&&(P=new $p(P,n,null,t,h),u.push({event:P,listeners:A}),b?P.data=b:(b=av(t),b!==null&&(P.data=b)))),(b=aS?oS(n,t):lS(n,t))&&(c=tc(c,"onBeforeInput"),0<c.length&&(h=new $p("onBeforeInput","beforeinput",null,t,h),u.push({event:h,listeners:c}),h.data=b))}_v(u,e)})}function uo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function tc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=io(n,t),s!=null&&i.unshift(uo(n,s,r)),s=io(n,e),s!=null&&i.push(uo(n,s,r))),n=n.return}return i}function Qr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function om(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=io(t,s),l!=null&&a.unshift(uo(t,l,o))):r||(l=io(t,s),l!=null&&a.push(uo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var MS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function lm(n){return(typeof n=="string"?n:""+n).replace(MS,`
`).replace(wS,"")}function jo(n,e,t){if(e=lm(e),lm(n)!==e&&t)throw Error(ne(425))}function nc(){}var Fh=null,kh=null;function Oh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(n){return cm.resolve(null).then(n).catch(bS)}:zh;function bS(n){setTimeout(function(){throw n})}function fu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ao(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ao(e)}function lr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function um(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ca=Math.random().toString(36).slice(2),di="__reactFiber$"+ca,ho="__reactProps$"+ca,Fi="__reactContainer$"+ca,Bh="__reactEvents$"+ca,AS="__reactListeners$"+ca,CS="__reactHandles$"+ca;function Ur(n){var e=n[di];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Fi]||t[di]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=um(n);n!==null;){if(t=n[di])return t;n=um(n)}return e}n=t,t=n.parentNode}return null}function Po(n){return n=n[di]||n[Fi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Rc(n){return n[ho]||null}var Hh=[],Rs=-1;function _r(n){return{current:n}}function St(n){0>Rs||(n.current=Hh[Rs],Hh[Rs]=null,Rs--)}function gt(n,e){Rs++,Hh[Rs]=n.current,n.current=e}var mr={},sn=_r(mr),xn=_r(!1),Hr=mr;function js(n,e){var t=n.type.contextTypes;if(!t)return mr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(n){return n=n.childContextTypes,n!=null}function ic(){St(xn),St(sn)}function hm(n,e,t){if(sn.current!==mr)throw Error(ne(168));gt(sn,e),gt(xn,t)}function xv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,dx(n)||"Unknown",r));return Tt({},t,i)}function rc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,Hr=sn.current,gt(sn,n),gt(xn,xn.current),!0}function dm(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=xv(n,e,Hr),i.__reactInternalMemoizedMergedChildContext=n,St(xn),St(sn),gt(sn,n)):St(xn),gt(xn,t)}var Ai=null,Pc=!1,pu=!1;function Sv(n){Ai===null?Ai=[n]:Ai.push(n)}function RS(n){Pc=!0,Sv(n)}function yr(){if(!pu&&Ai!==null){pu=!0;var n=0,e=ut;try{var t=Ai;for(ut=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ai=null,Pc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(n+1)),jg(pf,yr),r}finally{ut=e,pu=!1}}return null}var Ps=[],Ls=0,sc=null,ac=0,On=[],zn=0,Gr=null,Ci=1,Ri="";function Rr(n,e){Ps[Ls++]=ac,Ps[Ls++]=sc,sc=n,ac=e}function Mv(n,e,t){On[zn++]=Ci,On[zn++]=Ri,On[zn++]=Gr,Gr=n;var i=Ci;n=Ri;var r=32-si(i)-1;i&=~(1<<r),t+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-si(e)+r|t<<r|i,Ri=s+n}else Ci=1<<s|t<<r|i,Ri=n}function wf(n){n.return!==null&&(Rr(n,1),Mv(n,1,0))}function Ef(n){for(;n===sc;)sc=Ps[--Ls],Ps[Ls]=null,ac=Ps[--Ls],Ps[Ls]=null;for(;n===Gr;)Gr=On[--zn],On[zn]=null,Ri=On[--zn],On[zn]=null,Ci=On[--zn],On[zn]=null}var Ln=null,Pn=null,Mt=!1,Qn=null;function wv(n,e){var t=Hn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function fm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ln=n,Pn=lr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ln=n,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Gr!==null?{id:Ci,overflow:Ri}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ln=n,Pn=null,!0):!1;default:return!1}}function Gh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vh(n){if(Mt){var e=Pn;if(e){var t=e;if(!fm(n,e)){if(Gh(n))throw Error(ne(418));e=lr(t.nextSibling);var i=Ln;e&&fm(n,e)?wv(i,t):(n.flags=n.flags&-4097|2,Mt=!1,Ln=n)}}else{if(Gh(n))throw Error(ne(418));n.flags=n.flags&-4097|2,Mt=!1,Ln=n}}}function pm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ln=n}function Yo(n){if(n!==Ln)return!1;if(!Mt)return pm(n),Mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Oh(n.type,n.memoizedProps)),e&&(e=Pn)){if(Gh(n))throw Ev(),Error(ne(418));for(;e;)wv(n,e),e=lr(e.nextSibling)}if(pm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Pn=lr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Pn=null}}else Pn=Ln?lr(n.stateNode.nextSibling):null;return!0}function Ev(){for(var n=Pn;n;)n=lr(n.nextSibling)}function Ys(){Pn=Ln=null,Mt=!1}function Tf(n){Qn===null?Qn=[n]:Qn.push(n)}var PS=Bi.ReactCurrentBatchConfig;function ya(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function qo(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function mm(n){var e=n._init;return e(n._payload)}function Tv(n){function e(p,v){if(n){var _=p.deletions;_===null?(p.deletions=[v],p.flags|=16):_.push(v)}}function t(p,v){if(!n)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=dr(p,v),p.index=0,p.sibling=null,p}function s(p,v,_){return p.index=_,n?(_=p.alternate,_!==null?(_=_.index,_<v?(p.flags|=2,v):_):(p.flags|=2,v)):(p.flags|=1048576,v)}function a(p){return n&&p.alternate===null&&(p.flags|=2),p}function o(p,v,_,x){return v===null||v.tag!==6?(v=Su(_,p.mode,x),v.return=p,v):(v=r(v,_),v.return=p,v)}function l(p,v,_,x){var C=_.type;return C===Es?h(p,v,_.props.children,x,_.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&mm(C)===v.type)?(x=r(v,_.props),x.ref=ya(p,v,_),x.return=p,x):(x=zl(_.type,_.key,_.props,null,p.mode,x),x.ref=ya(p,v,_),x.return=p,x)}function c(p,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Mu(_,p.mode,x),v.return=p,v):(v=r(v,_.children||[]),v.return=p,v)}function h(p,v,_,x,C){return v===null||v.tag!==7?(v=Br(_,p.mode,x,C),v.return=p,v):(v=r(v,_),v.return=p,v)}function u(p,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Su(""+v,p.mode,_),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ko:return _=zl(v.type,v.key,v.props,null,p.mode,_),_.ref=ya(p,null,v),_.return=p,_;case ws:return v=Mu(v,p.mode,_),v.return=p,v;case $i:var x=v._init;return u(p,x(v._payload),_)}if(ka(v)||pa(v))return v=Br(v,p.mode,_,null),v.return=p,v;qo(p,v)}return null}function d(p,v,_,x){var C=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:o(p,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:return _.key===C?l(p,v,_,x):null;case ws:return _.key===C?c(p,v,_,x):null;case $i:return C=_._init,d(p,v,C(_._payload),x)}if(ka(_)||pa(_))return C!==null?null:h(p,v,_,x,null);qo(p,_)}return null}function f(p,v,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(_)||null,o(v,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ko:return p=p.get(x.key===null?_:x.key)||null,l(v,p,x,C);case ws:return p=p.get(x.key===null?_:x.key)||null,c(v,p,x,C);case $i:var A=x._init;return f(p,v,_,A(x._payload),C)}if(ka(x)||pa(x))return p=p.get(_)||null,h(v,p,x,C,null);qo(v,x)}return null}function g(p,v,_,x){for(var C=null,A=null,b=v,P=v=0,V=null;b!==null&&P<_.length;P++){b.index>P?(V=b,b=null):V=b.sibling;var S=d(p,b,_[P],x);if(S===null){b===null&&(b=V);break}n&&b&&S.alternate===null&&e(p,b),v=s(S,v,P),A===null?C=S:A.sibling=S,A=S,b=V}if(P===_.length)return t(p,b),Mt&&Rr(p,P),C;if(b===null){for(;P<_.length;P++)b=u(p,_[P],x),b!==null&&(v=s(b,v,P),A===null?C=b:A.sibling=b,A=b);return Mt&&Rr(p,P),C}for(b=i(p,b);P<_.length;P++)V=f(b,p,P,_[P],x),V!==null&&(n&&V.alternate!==null&&b.delete(V.key===null?P:V.key),v=s(V,v,P),A===null?C=V:A.sibling=V,A=V);return n&&b.forEach(function(E){return e(p,E)}),Mt&&Rr(p,P),C}function y(p,v,_,x){var C=pa(_);if(typeof C!="function")throw Error(ne(150));if(_=C.call(_),_==null)throw Error(ne(151));for(var A=C=null,b=v,P=v=0,V=null,S=_.next();b!==null&&!S.done;P++,S=_.next()){b.index>P?(V=b,b=null):V=b.sibling;var E=d(p,b,S.value,x);if(E===null){b===null&&(b=V);break}n&&b&&E.alternate===null&&e(p,b),v=s(E,v,P),A===null?C=E:A.sibling=E,A=E,b=V}if(S.done)return t(p,b),Mt&&Rr(p,P),C;if(b===null){for(;!S.done;P++,S=_.next())S=u(p,S.value,x),S!==null&&(v=s(S,v,P),A===null?C=S:A.sibling=S,A=S);return Mt&&Rr(p,P),C}for(b=i(p,b);!S.done;P++,S=_.next())S=f(b,p,P,S.value,x),S!==null&&(n&&S.alternate!==null&&b.delete(S.key===null?P:S.key),v=s(S,v,P),A===null?C=S:A.sibling=S,A=S);return n&&b.forEach(function(H){return e(p,H)}),Mt&&Rr(p,P),C}function m(p,v,_,x){if(typeof _=="object"&&_!==null&&_.type===Es&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:e:{for(var C=_.key,A=v;A!==null;){if(A.key===C){if(C=_.type,C===Es){if(A.tag===7){t(p,A.sibling),v=r(A,_.props.children),v.return=p,p=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$i&&mm(C)===A.type){t(p,A.sibling),v=r(A,_.props),v.ref=ya(p,A,_),v.return=p,p=v;break e}t(p,A);break}else e(p,A);A=A.sibling}_.type===Es?(v=Br(_.props.children,p.mode,x,_.key),v.return=p,p=v):(x=zl(_.type,_.key,_.props,null,p.mode,x),x.ref=ya(p,v,_),x.return=p,p=x)}return a(p);case ws:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(p,v.sibling),v=r(v,_.children||[]),v.return=p,p=v;break e}else{t(p,v);break}else e(p,v);v=v.sibling}v=Mu(_,p.mode,x),v.return=p,p=v}return a(p);case $i:return A=_._init,m(p,v,A(_._payload),x)}if(ka(_))return g(p,v,_,x);if(pa(_))return y(p,v,_,x);qo(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(p,v.sibling),v=r(v,_),v.return=p,p=v):(t(p,v),v=Su(_,p.mode,x),v.return=p,p=v),a(p)):t(p,v)}return m}var qs=Tv(!0),bv=Tv(!1),oc=_r(null),lc=null,Ds=null,bf=null;function Af(){bf=Ds=lc=null}function Cf(n){var e=oc.current;St(oc),n._currentValue=e}function Wh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Bs(n,e){lc=n,bf=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(_n=!0),n.firstContext=null)}function Vn(n){var e=n._currentValue;if(bf!==n)if(n={context:n,memoizedValue:e,next:null},Ds===null){if(lc===null)throw Error(ne(308));Ds=n,lc.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return e}var Fr=null;function Rf(n){Fr===null?Fr=[n]:Fr.push(n)}function Av(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Rf(e)):(t.next=r.next,r.next=t),e.interleaved=t,ki(n,i)}function ki(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Ki=!1;function Pf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(n,t)}return r=i.interleaved,r===null?(e.next=e,Rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(n,t)}function Il(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,mf(n,t)}}function gm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function cc(n,e,t,i){var r=n.updateQueue;Ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=n.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;a=0,h=c=l=null,o=s;do{var d=o.lane,f=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=n,y=o;switch(d=e,f=t,y.tag){case 1:if(g=y.payload,typeof g=="function"){u=g.call(f,u,d);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(f,u,d):g,d==null)break e;u=Tt({},u,d);break e;case 2:Ki=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=f,l=u):h=h.next=f,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Wr|=a,n.lanes=a,n.memoizedState=u}}function vm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Lo={},mi=_r(Lo),fo=_r(Lo),po=_r(Lo);function kr(n){if(n===Lo)throw Error(ne(174));return n}function Lf(n,e){switch(gt(po,e),gt(fo,n),gt(mi,Lo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Eh(e,n)}St(mi),gt(mi,e)}function $s(){St(mi),St(fo),St(po)}function Rv(n){kr(po.current);var e=kr(mi.current),t=Eh(e,n.type);e!==t&&(gt(fo,n),gt(mi,t))}function Df(n){fo.current===n&&(St(mi),St(fo))}var wt=_r(0);function uc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mu=[];function If(){for(var n=0;n<mu.length;n++)mu[n]._workInProgressVersionPrimary=null;mu.length=0}var Nl=Bi.ReactCurrentDispatcher,gu=Bi.ReactCurrentBatchConfig,Vr=0,Et=null,Ut=null,Wt=null,hc=!1,ja=!1,mo=0,LS=0;function Zt(){throw Error(ne(321))}function Nf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!li(n[t],e[t]))return!1;return!0}function Uf(n,e,t,i,r,s){if(Vr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=n===null||n.memoizedState===null?US:FS,n=t(i,r),ja){s=0;do{if(ja=!1,mo=0,25<=s)throw Error(ne(301));s+=1,Wt=Ut=null,e.updateQueue=null,Nl.current=kS,n=t(i,r)}while(ja)}if(Nl.current=dc,e=Ut!==null&&Ut.next!==null,Vr=0,Wt=Ut=Et=null,hc=!1,e)throw Error(ne(300));return n}function Ff(){var n=mo!==0;return mo=0,n}function ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Et.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function Wn(){if(Ut===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=Ut.next;var e=Wt===null?Et.memoizedState:Wt.next;if(e!==null)Wt=e,Ut=n;else{if(n===null)throw Error(ne(310));Ut=n,n={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Wt===null?Et.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function go(n,e){return typeof e=="function"?e(n):e}function vu(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Ut,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Vr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=u,a=i):l=l.next=u,Et.lanes|=h,Wr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,li(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,Wr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function _u(n){var e=Wn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);li(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Pv(){}function Lv(n,e){var t=Et,i=Wn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,kf(Nv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,vo(9,Iv.bind(null,t,i,r,e),void 0,null),Xt===null)throw Error(ne(349));Vr&30||Dv(t,e,r)}return r}function Dv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Iv(n,e,t,i){e.value=t,e.getSnapshot=i,Uv(e)&&Fv(n)}function Nv(n,e,t){return t(function(){Uv(e)&&Fv(n)})}function Uv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!li(n,t)}catch{return!0}}function Fv(n){var e=ki(n,1);e!==null&&ai(e,n,1,-1)}function _m(n){var e=ui();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:n},e.queue=n,n=n.dispatch=NS.bind(null,Et,n),[e.memoizedState,n]}function vo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function kv(){return Wn().memoizedState}function Ul(n,e,t,i){var r=ui();Et.flags|=n,r.memoizedState=vo(1|e,t,void 0,i===void 0?null:i)}function Lc(n,e,t,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Nf(i,a.deps)){r.memoizedState=vo(e,t,s,i);return}}Et.flags|=n,r.memoizedState=vo(1|e,t,s,i)}function ym(n,e){return Ul(8390656,8,n,e)}function kf(n,e){return Lc(2048,8,n,e)}function Ov(n,e){return Lc(4,2,n,e)}function zv(n,e){return Lc(4,4,n,e)}function Bv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Hv(n,e,t){return t=t!=null?t.concat([n]):null,Lc(4,4,Bv.bind(null,e,n),t)}function Of(){}function Gv(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Vv(n,e){var t=Wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Wv(n,e,t){return Vr&21?(li(t,e)||(t=$g(),Et.lanes|=t,Wr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=t)}function DS(n,e){var t=ut;ut=t!==0&&4>t?t:4,n(!0);var i=gu.transition;gu.transition={};try{n(!1),e()}finally{ut=t,gu.transition=i}}function Xv(){return Wn().memoizedState}function IS(n,e,t){var i=hr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},jv(n))Yv(e,t);else if(t=Av(n,e,t,i),t!==null){var r=hn();ai(t,n,i,r),qv(t,e,i)}}function NS(n,e,t){var i=hr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(jv(n))Yv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,li(o,a)){var l=e.interleaved;l===null?(r.next=r,Rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Av(n,e,r,i),t!==null&&(r=hn(),ai(t,n,i,r),qv(t,e,i))}}function jv(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function Yv(n,e){ja=hc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function qv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,mf(n,t)}}var dc={readContext:Vn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},US={readContext:Vn,useCallback:function(n,e){return ui().memoizedState=[n,e===void 0?null:e],n},useContext:Vn,useEffect:ym,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ul(4194308,4,Bv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ul(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ul(4,2,n,e)},useMemo:function(n,e){var t=ui();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ui();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=IS.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=ui();return n={current:n},e.memoizedState=n},useState:_m,useDebugValue:Of,useDeferredValue:function(n){return ui().memoizedState=n},useTransition:function(){var n=_m(!1),e=n[0];return n=DS.bind(null,n[1]),ui().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=ui();if(Mt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Xt===null)throw Error(ne(349));Vr&30||Dv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ym(Nv.bind(null,i,s,n),[n]),i.flags|=2048,vo(9,Iv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ui(),e=Xt.identifierPrefix;if(Mt){var t=Ri,i=Ci;t=(i&~(1<<32-si(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=mo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=LS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},FS={readContext:Vn,useCallback:Gv,useContext:Vn,useEffect:kf,useImperativeHandle:Hv,useInsertionEffect:Ov,useLayoutEffect:zv,useMemo:Vv,useReducer:vu,useRef:kv,useState:function(){return vu(go)},useDebugValue:Of,useDeferredValue:function(n){var e=Wn();return Wv(e,Ut.memoizedState,n)},useTransition:function(){var n=vu(go)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:Pv,useSyncExternalStore:Lv,useId:Xv,unstable_isNewReconciler:!1},kS={readContext:Vn,useCallback:Gv,useContext:Vn,useEffect:kf,useImperativeHandle:Hv,useInsertionEffect:Ov,useLayoutEffect:zv,useMemo:Vv,useReducer:_u,useRef:kv,useState:function(){return _u(go)},useDebugValue:Of,useDeferredValue:function(n){var e=Wn();return Ut===null?e.memoizedState=n:Wv(e,Ut.memoizedState,n)},useTransition:function(){var n=_u(go)[0],e=Wn().memoizedState;return[n,e]},useMutableSource:Pv,useSyncExternalStore:Lv,useId:Xv,unstable_isNewReconciler:!1};function Kn(n,e){if(n&&n.defaultProps){e=Tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Xh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Dc={isMounted:function(n){return(n=n._reactInternals)?$r(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=hn(),r=hr(n),s=Li(i,r);s.payload=e,t!=null&&(s.callback=t),e=cr(n,s,r),e!==null&&(ai(e,n,r,i),Il(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=hn(),r=hr(n),s=Li(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=cr(n,s,r),e!==null&&(ai(e,n,r,i),Il(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=hn(),i=hr(n),r=Li(t,i);r.tag=2,e!=null&&(r.callback=e),e=cr(n,r,i),e!==null&&(ai(e,n,i,t),Il(e,n,i))}};function xm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!lo(t,i)||!lo(r,s):!0}function $v(n,e,t){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=Sn(e)?Hr:sn.current,i=e.contextTypes,s=(i=i!=null)?js(n,r):mr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Sm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Dc.enqueueReplaceState(e,e.state,null)}function jh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Pf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=Sn(e)?Hr:sn.current,r.context=js(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dc.enqueueReplaceState(r,r.state,null),cc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,e){try{var t="",i=e;do t+=hx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function yu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Yh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var OS=typeof WeakMap=="function"?WeakMap:Map;function Kv(n,e,t){t=Li(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){pc||(pc=!0,id=i),Yh(n,e)},t}function Zv(n,e,t){t=Li(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Yh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Yh(n,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Mm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new OS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=JS.bind(null,n,e,t),e.then(n,n))}function wm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Em(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Li(-1,1),e.tag=2,cr(t,e,1))),t.lanes|=1),n)}var zS=Bi.ReactCurrentOwner,_n=!1;function cn(n,e,t,i){e.child=n===null?bv(e,null,t,i):qs(e,n.child,t,i)}function Tm(n,e,t,i,r){t=t.render;var s=e.ref;return Bs(e,r),i=Uf(n,e,t,i,s,r),t=Ff(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(Mt&&t&&wf(e),e.flags|=1,cn(n,e,i,r),e.child)}function bm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!jf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Jv(n,e,s,i,r)):(n=zl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:lo,t(a,i)&&n.ref===e.ref)return Oi(n,e,r)}return e.flags|=1,n=dr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Jv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(lo(s,i)&&n.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(_n=!0);else return e.lanes=n.lanes,Oi(n,e,r)}return qh(n,e,t,i,r)}function Qv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Ns,Cn),Cn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gt(Ns,Cn),Cn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,gt(Ns,Cn),Cn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,gt(Ns,Cn),Cn|=i;return cn(n,e,r,t),e.child}function e_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function qh(n,e,t,i,r){var s=Sn(t)?Hr:sn.current;return s=js(e,s),Bs(e,r),t=Uf(n,e,t,i,s,r),i=Ff(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(Mt&&i&&wf(e),e.flags|=1,cn(n,e,t,r),e.child)}function Am(n,e,t,i,r){if(Sn(t)){var s=!0;rc(e)}else s=!1;if(Bs(e,r),e.stateNode===null)Fl(n,e),$v(e,t,i),jh(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=Sn(t)?Hr:sn.current,c=js(e,c));var h=t.getDerivedStateFromProps,u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Sm(e,a,i,c),Ki=!1;var d=e.memoizedState;a.state=d,cc(e,i,a,r),l=e.memoizedState,o!==i||d!==l||xn.current||Ki?(typeof h=="function"&&(Xh(e,t,h,i),l=e.memoizedState),(o=Ki||xm(e,t,o,i,d,l,c))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Cv(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Kn(e.type,o),a.props=c,u=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=Sn(t)?Hr:sn.current,l=js(e,l));var f=t.getDerivedStateFromProps;(h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==u||d!==l)&&Sm(e,a,i,l),Ki=!1,d=e.memoizedState,a.state=d,cc(e,i,a,r);var g=e.memoizedState;o!==u||d!==g||xn.current||Ki?(typeof f=="function"&&(Xh(e,t,f,i),g=e.memoizedState),(c=Ki||xm(e,t,c,i,d,g,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return $h(n,e,t,i,s,r)}function $h(n,e,t,i,r,s){e_(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&dm(e,t,!1),Oi(n,e,s);i=e.stateNode,zS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=qs(e,n.child,null,s),e.child=qs(e,null,o,s)):cn(n,e,o,s),e.memoizedState=i.state,r&&dm(e,t,!0),e.child}function t_(n){var e=n.stateNode;e.pendingContext?hm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&hm(n,e.context,!1),Lf(n,e.containerInfo)}function Cm(n,e,t,i,r){return Ys(),Tf(r),e.flags|=256,cn(n,e,t,i),e.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function n_(n,e,t){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),gt(wt,r&1),n===null)return Vh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Uc(a,i,0,null),n=Br(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Zh(t),e.memoizedState=Kh,n):zf(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return BS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Br(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?Zh(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Kh,i}return s=n.child,n=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function zf(n,e){return e=Uc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function $o(n,e,t,i){return i!==null&&Tf(i),qs(e,n.child,null,t),n=zf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function BS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=yu(Error(ne(422))),$o(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=Br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,n.child,null,a),e.child.memoizedState=Zh(a),e.memoizedState=Kh,s);if(!(e.mode&1))return $o(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=yu(s,i,void 0),$o(n,e,a,i)}if(o=(a&n.childLanes)!==0,_n||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ki(n,r),ai(i,n,r,-1))}return Xf(),i=yu(Error(ne(421))),$o(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=QS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Pn=lr(r.nextSibling),Ln=e,Mt=!0,Qn=null,n!==null&&(On[zn++]=Ci,On[zn++]=Ri,On[zn++]=Gr,Ci=n.id,Ri=n.overflow,Gr=e),e=zf(e,i.children),e.flags|=4096,e)}function Rm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Wh(n.return,e,t)}function xu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function i_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rm(n,t,e);else if(n.tag===19)Rm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(gt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&uc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),xu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&uc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}xu(e,!0,t,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Oi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Wr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=dr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=dr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function HS(n,e,t){switch(e.tag){case 3:t_(e),Ys();break;case 5:Rv(e);break;case 1:Sn(e.type)&&rc(e);break;case 4:Lf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(wt,wt.current&1),e.flags|=128,null):t&e.child.childLanes?n_(n,e,t):(gt(wt,wt.current&1),n=Oi(n,e,t),n!==null?n.sibling:null);gt(wt,wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return i_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,Qv(n,e,t)}return Oi(n,e,t)}var r_,Jh,s_,a_;r_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Jh=function(){};s_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,kr(mi.current);var s=null;switch(t){case"input":r=xh(n,r),i=xh(n,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=wh(n,r),i=wh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=nc)}Th(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(to.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(to.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a_=function(n,e,t,i){t!==i&&(e.flags|=4)};function xa(n,e){if(!Mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function GS(n,e,t){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Sn(e.type)&&ic(),Jt(e),null;case 3:return i=e.stateNode,$s(),St(xn),St(sn),If(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Yo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(ad(Qn),Qn=null))),Jh(n,e),Jt(e),null;case 5:Df(e);var r=kr(po.current);if(t=e.type,n!==null&&e.stateNode!=null)s_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Jt(e),null}if(n=kr(mi.current),Yo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[di]=e,i[ho]=s,n=(e.mode&1)!==0,t){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<za.length;r++)yt(za[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":Op(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":Bp(i,s),yt("invalid",i)}Th(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,o,n),r=["children",""+o]):to.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&yt("scroll",i)}switch(t){case"input":Oo(i),zp(i,s,!0);break;case"textarea":Oo(i),Hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ng(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[di]=e,n[ho]=i,r_(n,e,!1,!1),e.stateNode=n;e:{switch(a=bh(t,i),t){case"dialog":yt("cancel",n),yt("close",n),r=i;break;case"iframe":case"object":case"embed":yt("load",n),r=i;break;case"video":case"audio":for(r=0;r<za.length;r++)yt(za[r],n);r=i;break;case"source":yt("error",n),r=i;break;case"img":case"image":case"link":yt("error",n),yt("load",n),r=i;break;case"details":yt("toggle",n),r=i;break;case"input":Op(n,i),r=xh(n,i),yt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),yt("invalid",n);break;case"textarea":Bp(n,i),r=wh(n,i),yt("invalid",n);break;default:r=i}Th(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?kg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ug(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&no(n,l):typeof l=="number"&&no(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",n):l!=null&&cf(n,s,l,a))}switch(t){case"input":Oo(n),zp(n,i,!1);break;case"textarea":Oo(n),Hp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+pr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Fs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=nc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(n&&e.stateNode!=null)a_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=kr(po.current),kr(mi.current),Yo(e)){if(i=e.stateNode,t=e.memoizedProps,i[di]=e,(s=i.nodeValue!==t)&&(n=Ln,n!==null))switch(n.tag){case 3:jo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Jt(e),null;case 13:if(St(wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Mt&&Pn!==null&&e.mode&1&&!(e.flags&128))Ev(),Ys(),e.flags|=98560,s=!1;else if(s=Yo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[di]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else Qn!==null&&(ad(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||wt.current&1?kt===0&&(kt=3):Xf())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return $s(),Jh(n,e),n===null&&co(e.stateNode.containerInfo),Jt(e),null;case 10:return Cf(e.type._context),Jt(e),null;case 17:return Sn(e.type)&&ic(),Jt(e),null;case 19:if(St(wt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)xa(s,!1);else{if(kt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=uc(n),a!==null){for(e.flags|=128,xa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gt(wt,wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Pt()>Zs&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304)}else{if(!i)if(n=uc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return Jt(e),null}else 2*Pt()-s.renderingStartTime>Zs&&t!==1073741824&&(e.flags|=128,i=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,t=wt.current,gt(wt,i?t&1|2:t&1),e):(Jt(e),null);case 22:case 23:return Wf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function VS(n,e){switch(Ef(e),e.tag){case 1:return Sn(e.type)&&ic(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $s(),St(xn),St(sn),If(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Df(e),null;case 13:if(St(wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ys()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return St(wt),null;case 4:return $s(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var Ko=!1,tn=!1,WS=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Is(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){At(n,e,i)}else t.current=null}function Qh(n,e,t){try{t()}catch(i){At(n,e,i)}}var Pm=!1;function XS(n,e){if(Fh=Ql,n=hv(),Mf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,h=0,u=n,d=null;t:for(;;){for(var f;u!==t||r!==0&&u.nodeType!==3||(o=a+r),u!==s||i!==0&&u.nodeType!==3||(l=a+i),u.nodeType===3&&(a+=u.nodeValue.length),(f=u.firstChild)!==null;)d=u,u=f;for(;;){if(u===n)break t;if(d===t&&++c===r&&(o=a),d===s&&++h===i&&(l=a),(f=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=f}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(kh={focusedElem:n,selectionRange:t},Ql=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Kn(e.type,y),m);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(x){At(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return g=Pm,Pm=!1,g}function Ya(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qh(e,t,s)}r=r.next}while(r!==i)}}function Ic(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function ed(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function o_(n){var e=n.alternate;e!==null&&(n.alternate=null,o_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[di],delete e[ho],delete e[Bh],delete e[AS],delete e[CS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function l_(n){return n.tag===5||n.tag===3||n.tag===4}function Lm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||l_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function td(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(n=n.child,n!==null))for(td(n,e,t),n=n.sibling;n!==null;)td(n,e,t),n=n.sibling}function nd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(nd(n,e,t),n=n.sibling;n!==null;)nd(n,e,t),n=n.sibling}var Yt=null,Zn=!1;function Gi(n,e,t){for(t=t.child;t!==null;)c_(n,e,t),t=t.sibling}function c_(n,e,t){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Tc,t)}catch{}switch(t.tag){case 5:tn||Is(t,e);case 6:var i=Yt,r=Zn;Yt=null,Gi(n,e,t),Yt=i,Zn=r,Yt!==null&&(Zn?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(Zn?(n=Yt,t=t.stateNode,n.nodeType===8?fu(n.parentNode,t):n.nodeType===1&&fu(n,t),ao(n)):fu(Yt,t.stateNode));break;case 4:i=Yt,r=Zn,Yt=t.stateNode.containerInfo,Zn=!0,Gi(n,e,t),Yt=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qh(t,e,a),r=r.next}while(r!==i)}Gi(n,e,t);break;case 1:if(!tn&&(Is(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){At(t,e,o)}Gi(n,e,t);break;case 21:Gi(n,e,t);break;case 22:t.mode&1?(tn=(i=tn)||t.memoizedState!==null,Gi(n,e,t),tn=i):Gi(n,e,t);break;default:Gi(n,e,t)}}function Dm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new WS),e.forEach(function(i){var r=eM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,Zn=!1;break e;case 3:Yt=o.stateNode.containerInfo,Zn=!0;break e;case 4:Yt=o.stateNode.containerInfo,Zn=!0;break e}o=o.return}if(Yt===null)throw Error(ne(160));c_(s,a,r),Yt=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u_(e,n),e=e.sibling}function u_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),ci(n),i&4){try{Ya(3,n,n.return),Ic(3,n)}catch(y){At(n,n.return,y)}try{Ya(5,n,n.return)}catch(y){At(n,n.return,y)}}break;case 1:jn(e,n),ci(n),i&512&&t!==null&&Is(t,t.return);break;case 5:if(jn(e,n),ci(n),i&512&&t!==null&&Is(t,t.return),n.flags&32){var r=n.stateNode;try{no(r,"")}catch(y){At(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Dg(r,s),bh(o,a);var c=bh(o,s);for(a=0;a<l.length;a+=2){var h=l[a],u=l[a+1];h==="style"?kg(r,u):h==="dangerouslySetInnerHTML"?Ug(r,u):h==="children"?no(r,u):cf(r,h,u,c)}switch(o){case"input":Sh(r,s);break;case"textarea":Ig(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Fs(r,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ho]=s}catch(y){At(n,n.return,y)}}break;case 6:if(jn(e,n),ci(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){At(n,n.return,y)}}break;case 3:if(jn(e,n),ci(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(y){At(n,n.return,y)}break;case 4:jn(e,n),ci(n);break;case 13:jn(e,n),ci(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gf=Pt())),i&4&&Dm(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(tn=(c=tn)||h,jn(e,n),tn=c):jn(e,n),ci(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(ge=n,h=n.child;h!==null;){for(u=ge=h;ge!==null;){switch(d=ge,f=d.child,d.tag){case 0:case 11:case 14:case 15:Ya(4,d,d.return);break;case 1:Is(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){At(i,t,y)}}break;case 5:Is(d,d.return);break;case 22:if(d.memoizedState!==null){Nm(u);continue}}f!==null?(f.return=d,ge=f):Nm(u)}h=h.sibling}e:for(h=null,u=n;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Fg("display",a))}catch(y){At(n,n.return,y)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){At(n,n.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===n)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:jn(e,n),ci(n),i&4&&Dm(n);break;case 21:break;default:jn(e,n),ci(n)}}function ci(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(l_(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(no(r,""),i.flags&=-33);var s=Lm(n);nd(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Lm(n);td(n,o,a);break;default:throw Error(ne(161))}}catch(l){At(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function jS(n,e,t){ge=n,h_(n)}function h_(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ko;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||tn;o=Ko;var c=tn;if(Ko=a,(tn=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Um(r):l!==null?(l.return=a,ge=l):Um(r);for(;s!==null;)ge=s,h_(s),s=s.sibling;ge=r,Ko=o,tn=c}Im(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Im(n)}}function Im(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Kn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}vm(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&ao(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}tn||e.flags&512&&ed(e)}catch(d){At(e,e.return,d)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Nm(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Um(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ic(4,e)}catch(l){At(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{ed(e)}catch(l){At(e,s,l)}break;case 5:var a=e.return;try{ed(e)}catch(l){At(e,a,l)}}}catch(l){At(e,e.return,l)}if(e===n){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var YS=Math.ceil,fc=Bi.ReactCurrentDispatcher,Bf=Bi.ReactCurrentOwner,Gn=Bi.ReactCurrentBatchConfig,et=0,Xt=null,It=null,qt=0,Cn=0,Ns=_r(0),kt=0,_o=null,Wr=0,Nc=0,Hf=0,qa=null,vn=null,Gf=0,Zs=1/0,bi=null,pc=!1,id=null,ur=null,Zo=!1,ir=null,mc=0,$a=0,rd=null,kl=-1,Ol=0;function hn(){return et&6?Pt():kl!==-1?kl:kl=Pt()}function hr(n){return n.mode&1?et&2&&qt!==0?qt&-qt:PS.transition!==null?(Ol===0&&(Ol=$g()),Ol):(n=ut,n!==0||(n=window.event,n=n===void 0?16:nv(n.type)),n):1}function ai(n,e,t,i){if(50<$a)throw $a=0,rd=null,Error(ne(185));Co(n,t,i),(!(et&2)||n!==Xt)&&(n===Xt&&(!(et&2)&&(Nc|=t),kt===4&&er(n,qt)),Mn(n,i),t===1&&et===0&&!(e.mode&1)&&(Zs=Pt()+500,Pc&&yr()))}function Mn(n,e){var t=n.callbackNode;Px(n,e);var i=Jl(n,n===Xt?qt:0);if(i===0)t!==null&&Wp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Wp(t),e===1)n.tag===0?RS(Fm.bind(null,n)):Sv(Fm.bind(null,n)),TS(function(){!(et&6)&&yr()}),t=null;else{switch(Kg(i)){case 1:t=pf;break;case 4:t=Yg;break;case 16:t=Zl;break;case 536870912:t=qg;break;default:t=Zl}t=y_(t,d_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function d_(n,e){if(kl=-1,Ol=0,et&6)throw Error(ne(327));var t=n.callbackNode;if(Hs()&&n.callbackNode!==t)return null;var i=Jl(n,n===Xt?qt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=gc(n,i);else{e=i;var r=et;et|=2;var s=p_();(Xt!==n||qt!==e)&&(bi=null,Zs=Pt()+500,zr(n,e));do try{KS();break}catch(o){f_(n,o)}while(!0);Af(),fc.current=s,et=r,It!==null?e=0:(Xt=null,qt=0,e=kt)}if(e!==0){if(e===2&&(r=Lh(n),r!==0&&(i=r,e=sd(n,r))),e===1)throw t=_o,zr(n,0),er(n,i),Mn(n,Pt()),t;if(e===6)er(n,i);else{if(r=n.current.alternate,!(i&30)&&!qS(r)&&(e=gc(n,i),e===2&&(s=Lh(n),s!==0&&(i=s,e=sd(n,s))),e===1))throw t=_o,zr(n,0),er(n,i),Mn(n,Pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Pr(n,vn,bi);break;case 3:if(er(n,i),(i&130023424)===i&&(e=Gf+500-Pt(),10<e)){if(Jl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=zh(Pr.bind(null,n,vn,bi),e);break}Pr(n,vn,bi);break;case 4:if(er(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*YS(i/1960))-i,10<i){n.timeoutHandle=zh(Pr.bind(null,n,vn,bi),i);break}Pr(n,vn,bi);break;case 5:Pr(n,vn,bi);break;default:throw Error(ne(329))}}}return Mn(n,Pt()),n.callbackNode===t?d_.bind(null,n):null}function sd(n,e){var t=qa;return n.current.memoizedState.isDehydrated&&(zr(n,e).flags|=256),n=gc(n,e),n!==2&&(e=vn,vn=t,e!==null&&ad(e)),n}function ad(n){vn===null?vn=n:vn.push.apply(vn,n)}function qS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(n,e){for(e&=~Hf,e&=~Nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-si(e),i=1<<t;n[t]=-1,e&=~i}}function Fm(n){if(et&6)throw Error(ne(327));Hs();var e=Jl(n,0);if(!(e&1))return Mn(n,Pt()),null;var t=gc(n,e);if(n.tag!==0&&t===2){var i=Lh(n);i!==0&&(e=i,t=sd(n,i))}if(t===1)throw t=_o,zr(n,0),er(n,e),Mn(n,Pt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Pr(n,vn,bi),Mn(n,Pt()),null}function Vf(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(Zs=Pt()+500,Pc&&yr())}}function Xr(n){ir!==null&&ir.tag===0&&!(et&6)&&Hs();var e=et;et|=1;var t=Gn.transition,i=ut;try{if(Gn.transition=null,ut=1,n)return n()}finally{ut=i,Gn.transition=t,et=e,!(et&6)&&yr()}}function Wf(){Cn=Ns.current,St(Ns)}function zr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ES(t)),It!==null)for(t=It.return;t!==null;){var i=t;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:$s(),St(xn),St(sn),If();break;case 5:Df(i);break;case 4:$s();break;case 13:St(wt);break;case 19:St(wt);break;case 10:Cf(i.type._context);break;case 22:case 23:Wf()}t=t.return}if(Xt=n,It=n=dr(n.current,null),qt=Cn=e,kt=0,_o=null,Hf=Nc=Wr=0,vn=qa=null,Fr!==null){for(e=0;e<Fr.length;e++)if(t=Fr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Fr=null}return n}function f_(n,e){do{var t=It;try{if(Af(),Nl.current=dc,hc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(Vr=0,Wt=Ut=Et=null,ja=!1,mo=0,Bf.current=null,t===null||t.return===null){kt=1,_o=e,It=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var f=wm(a);if(f!==null){f.flags&=-257,Em(f,a,o,s,e),f.mode&1&&Mm(s,c,e),e=f,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Mm(s,c,e),Xf();break e}l=Error(ne(426))}}else if(Mt&&o.mode&1){var m=wm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Em(m,a,o,s,e),Tf(Ks(l,o));break e}}s=l=Ks(l,o),kt!==4&&(kt=2),qa===null?qa=[s]:qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Kv(s,l,e);gm(s,p);break e;case 1:o=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ur===null||!ur.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Zv(s,o,e);gm(s,x);break e}}s=s.return}while(s!==null)}g_(t)}catch(C){e=C,It===t&&t!==null&&(It=t=t.return);continue}break}while(!0)}function p_(){var n=fc.current;return fc.current=dc,n===null?dc:n}function Xf(){(kt===0||kt===3||kt===2)&&(kt=4),Xt===null||!(Wr&268435455)&&!(Nc&268435455)||er(Xt,qt)}function gc(n,e){var t=et;et|=2;var i=p_();(Xt!==n||qt!==e)&&(bi=null,zr(n,e));do try{$S();break}catch(r){f_(n,r)}while(!0);if(Af(),et=t,fc.current=i,It!==null)throw Error(ne(261));return Xt=null,qt=0,kt}function $S(){for(;It!==null;)m_(It)}function KS(){for(;It!==null&&!Sx();)m_(It)}function m_(n){var e=__(n.alternate,n,Cn);n.memoizedProps=n.pendingProps,e===null?g_(n):It=e,Bf.current=null}function g_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=VS(t,e),t!==null){t.flags&=32767,It=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{kt=6,It=null;return}}else if(t=GS(t,e,Cn),t!==null){It=t;return}if(e=e.sibling,e!==null){It=e;return}It=e=n}while(e!==null);kt===0&&(kt=5)}function Pr(n,e,t){var i=ut,r=Gn.transition;try{Gn.transition=null,ut=1,ZS(n,e,t,i)}finally{Gn.transition=r,ut=i}return null}function ZS(n,e,t,i){do Hs();while(ir!==null);if(et&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Lx(n,s),n===Xt&&(It=Xt=null,qt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Zo||(Zo=!0,y_(Zl,function(){return Hs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=ut;ut=1;var o=et;et|=4,Bf.current=null,XS(n,t),u_(t,n),vS(kh),Ql=!!Fh,kh=Fh=null,n.current=t,jS(t),Mx(),et=o,ut=a,Gn.transition=s}else n.current=t;if(Zo&&(Zo=!1,ir=n,mc=r),s=n.pendingLanes,s===0&&(ur=null),Tx(t.stateNode),Mn(n,Pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,n=id,id=null,n;return mc&1&&n.tag!==0&&Hs(),s=n.pendingLanes,s&1?n===rd?$a++:($a=0,rd=n):$a=0,yr(),null}function Hs(){if(ir!==null){var n=Kg(mc),e=Gn.transition,t=ut;try{if(Gn.transition=null,ut=16>n?16:n,ir===null)var i=!1;else{if(n=ir,ir=null,mc=0,et&6)throw Error(ne(331));var r=et;for(et|=4,ge=n.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var h=ge;switch(h.tag){case 0:case 11:case 15:Ya(8,h,s)}var u=h.child;if(u!==null)u.return=h,ge=u;else for(;ge!==null;){h=ge;var d=h.sibling,f=h.return;if(o_(h),h===c){ge=null;break}if(d!==null){d.return=f,ge=d;break}ge=f}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,ge=p;break e}ge=s.return}}var v=n.current;for(ge=v;ge!==null;){a=ge;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ge=_;else e:for(a=v;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ic(9,o)}}catch(C){At(o,o.return,C)}if(o===a){ge=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,ge=x;break e}ge=o.return}}if(et=r,yr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Tc,n)}catch{}i=!0}return i}finally{ut=t,Gn.transition=e}}return!1}function km(n,e,t){e=Ks(t,e),e=Kv(n,e,1),n=cr(n,e,1),e=hn(),n!==null&&(Co(n,1,e),Mn(n,e))}function At(n,e,t){if(n.tag===3)km(n,n,t);else for(;e!==null;){if(e.tag===3){km(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){n=Ks(t,n),n=Zv(e,n,1),e=cr(e,n,1),n=hn(),e!==null&&(Co(e,1,n),Mn(e,n));break}}e=e.return}}function JS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=hn(),n.pingedLanes|=n.suspendedLanes&t,Xt===n&&(qt&t)===t&&(kt===4||kt===3&&(qt&130023424)===qt&&500>Pt()-Gf?zr(n,0):Hf|=t),Mn(n,e)}function v_(n,e){e===0&&(n.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var t=hn();n=ki(n,e),n!==null&&(Co(n,e,t),Mn(n,t))}function QS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),v_(n,t)}function eM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),v_(n,t)}var __;__=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||xn.current)_n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return _n=!1,HS(n,e,t);_n=!!(n.flags&131072)}else _n=!1,Mt&&e.flags&1048576&&Mv(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(n,e),n=e.pendingProps;var r=js(e,sn.current);Bs(e,t),r=Uf(null,e,i,n,r,t);var s=Ff();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=Dc,e.stateNode=r,r._reactInternals=e,jh(e,i,n,t),e=$h(null,e,i,!0,s,t)):(e.tag=0,Mt&&s&&wf(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nM(i),n=Kn(i,n),r){case 0:e=qh(null,e,i,n,t);break e;case 1:e=Am(null,e,i,n,t);break e;case 11:e=Tm(null,e,i,n,t);break e;case 14:e=bm(null,e,i,Kn(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),qh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Am(n,e,i,r,t);case 3:e:{if(t_(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Cv(n,e),cc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(ne(423)),e),e=Cm(n,e,i,t,r);break e}else if(i!==r){r=Ks(Error(ne(424)),e),e=Cm(n,e,i,t,r);break e}else for(Pn=lr(e.stateNode.containerInfo.firstChild),Ln=e,Mt=!0,Qn=null,t=bv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ys(),i===r){e=Oi(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return Rv(e),n===null&&Vh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Oh(i,r)?a=null:s!==null&&Oh(i,s)&&(e.flags|=32),e_(n,e),cn(n,e,a,t),e.child;case 6:return n===null&&Vh(e),null;case 13:return n_(n,e,t);case 4:return Lf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=qs(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Tm(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(oc,i._currentValue),i._currentValue=a,s!==null)if(li(s.value,a)){if(s.children===r.children&&!xn.current){e=Oi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Wh(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Wh(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,t),r=Vn(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=Kn(i,e.pendingProps),r=Kn(i.type,r),bm(n,e,i,r,t);case 15:return Jv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Kn(i,r),Fl(n,e),e.tag=1,Sn(i)?(n=!0,rc(e)):n=!1,Bs(e,t),$v(e,i,r),jh(e,i,r,t),$h(null,e,i,!0,n,t);case 19:return i_(n,e,t);case 22:return Qv(n,e,t)}throw Error(ne(156,e.tag))};function y_(n,e){return jg(n,e)}function tM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,e,t,i){return new tM(n,e,t,i)}function jf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nM(n){if(typeof n=="function")return jf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===hf)return 11;if(n===df)return 14}return 2}function dr(n,e){var t=n.alternate;return t===null?(t=Hn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function zl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")jf(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Es:return Br(t.children,r,s,e);case uf:a=8,r|=8;break;case gh:return n=Hn(12,t,e,r|2),n.elementType=gh,n.lanes=s,n;case vh:return n=Hn(13,t,e,r),n.elementType=vh,n.lanes=s,n;case _h:return n=Hn(19,t,e,r),n.elementType=_h,n.lanes=s,n;case Rg:return Uc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ag:a=10;break e;case Cg:a=9;break e;case hf:a=11;break e;case df:a=14;break e;case $i:a=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Hn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Br(n,e,t,i){return n=Hn(7,n,i,e),n.lanes=t,n}function Uc(n,e,t,i){return n=Hn(22,n,i,e),n.elementType=Rg,n.lanes=t,n.stateNode={isHidden:!1},n}function Su(n,e,t){return n=Hn(6,n,null,e),n.lanes=t,n}function Mu(n,e,t){return e=Hn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function iM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nu(0),this.expirationTimes=nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yf(n,e,t,i,r,s,a,o,l){return n=new iM(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),n}function rM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function x_(n){if(!n)return mr;n=n._reactInternals;e:{if($r(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(Sn(t))return xv(n,t,e)}return e}function S_(n,e,t,i,r,s,a,o,l){return n=Yf(t,i,!0,n,r,s,a,o,l),n.context=x_(null),t=n.current,i=hn(),r=hr(t),s=Li(i,r),s.callback=e??null,cr(t,s,r),n.current.lanes=r,Co(n,r,i),Mn(n,i),n}function Fc(n,e,t,i){var r=e.current,s=hn(),a=hr(r);return t=x_(t),e.context===null?e.context=t:e.pendingContext=t,e=Li(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=cr(r,e,a),n!==null&&(ai(n,r,a,s),Il(n,r,a)),a}function vc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Om(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function qf(n,e){Om(n,e),(n=n.alternate)&&Om(n,e)}function sM(){return null}var M_=typeof reportError=="function"?reportError:function(n){console.error(n)};function $f(n){this._internalRoot=n}kc.prototype.render=$f.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Fc(n,e,null,null)};kc.prototype.unmount=$f.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Xr(function(){Fc(null,n,null,null)}),e[Fi]=null}};function kc(n){this._internalRoot=n}kc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Qg();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Qi.length&&e!==0&&e<Qi[t].priority;t++);Qi.splice(t,0,n),t===0&&tv(n)}};function Kf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function aM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vc(a);s.call(c)}}var a=S_(e,i,n,0,null,!1,!1,"",zm);return n._reactRootContainer=a,n[Fi]=a.current,co(n.nodeType===8?n.parentNode:n),Xr(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=vc(l);o.call(c)}}var l=Yf(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=l,n[Fi]=l.current,co(n.nodeType===8?n.parentNode:n),Xr(function(){Fc(e,l,t,i)}),l}function zc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=vc(a);o.call(l)}}Fc(e,a,n,r)}else a=aM(t,e,n,r,i);return vc(a)}Zg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Oa(e.pendingLanes);t!==0&&(mf(e,t|1),Mn(e,Pt()),!(et&6)&&(Zs=Pt()+500,yr()))}break;case 13:Xr(function(){var i=ki(n,1);if(i!==null){var r=hn();ai(i,n,1,r)}}),qf(n,1)}};gf=function(n){if(n.tag===13){var e=ki(n,134217728);if(e!==null){var t=hn();ai(e,n,134217728,t)}qf(n,134217728)}};Jg=function(n){if(n.tag===13){var e=hr(n),t=ki(n,e);if(t!==null){var i=hn();ai(t,n,e,i)}qf(n,e)}};Qg=function(){return ut};ev=function(n,e){var t=ut;try{return ut=n,e()}finally{ut=t}};Ch=function(n,e,t){switch(e){case"input":if(Sh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Rc(i);if(!r)throw Error(ne(90));Lg(i),Sh(i,r)}}}break;case"textarea":Ig(n,t);break;case"select":e=t.value,e!=null&&Fs(n,!!t.multiple,e,!1)}};Bg=Vf;Hg=Xr;var oM={usingClientEntryPoint:!1,Events:[Po,Cs,Rc,Og,zg,Vf]},Sa={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lM={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wg(n),n===null?null:n.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||sM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Tc=Jo.inject(lM),pi=Jo}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oM;In.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kf(e))throw Error(ne(200));return rM(n,e,null,t)};In.createRoot=function(n,e){if(!Kf(n))throw Error(ne(299));var t=!1,i="",r=M_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yf(n,1,!1,null,null,t,!1,i,r),n[Fi]=e.current,co(n.nodeType===8?n.parentNode:n),new $f(e)};In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=Wg(e),n=n===null?null:n.stateNode,n};In.flushSync=function(n){return Xr(n)};In.hydrate=function(n,e,t){if(!Oc(e))throw Error(ne(200));return zc(null,n,e,!0,t)};In.hydrateRoot=function(n,e,t){if(!Kf(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=M_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=S_(e,null,n,1,t??null,r,!1,s,a),n[Fi]=e.current,co(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new kc(e)};In.render=function(n,e,t){if(!Oc(e))throw Error(ne(200));return zc(null,n,e,!1,t)};In.unmountComponentAtNode=function(n){if(!Oc(n))throw Error(ne(40));return n._reactRootContainer?(Xr(function(){zc(null,null,n,!1,function(){n._reactRootContainer=null,n[Fi]=null})}),!0):!1};In.unstable_batchedUpdates=Vf;In.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Oc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return zc(n,e,t,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function w_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w_)}catch(n){console.error(n)}}w_(),wg.exports=In;var cM=wg.exports,Bm=cM;ph.createRoot=Bm.createRoot,ph.hydrateRoot=Bm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="169",uM=0,Hm=1,hM=2,E_=1,dM=2,Ti=3,gr=0,dn=1,nn=2,Di=0,Gs=1,yo=2,Gm=3,Vm=4,fM=5,Ir=100,pM=101,mM=102,gM=103,vM=104,_M=200,yM=201,xM=202,SM=203,od=204,ld=205,MM=206,wM=207,EM=208,TM=209,bM=210,AM=211,CM=212,RM=213,PM=214,cd=0,ud=1,hd=2,Js=3,dd=4,fd=5,pd=6,md=7,T_=0,LM=1,DM=2,fr=0,b_=1,A_=2,C_=3,Jf=4,IM=5,R_=6,P_=7,L_=300,Qs=301,ea=302,gd=303,vd=304,Bc=306,xo=1e3,rr=1001,_d=1002,yn=1003,NM=1004,Qo=1005,ei=1006,wu=1007,Or=1008,zi=1009,D_=1010,I_=1011,So=1012,Qf=1013,jr=1014,fi=1015,Ii=1016,ep=1017,tp=1018,ta=1020,N_=35902,U_=1021,F_=1022,ii=1023,k_=1024,O_=1025,Vs=1026,na=1027,np=1028,ip=1029,z_=1030,rp=1031,sp=1033,Bl=33776,Hl=33777,Gl=33778,Vl=33779,yd=35840,xd=35841,Sd=35842,Md=35843,wd=36196,Ed=37492,Td=37496,bd=37808,Ad=37809,Cd=37810,Rd=37811,Pd=37812,Ld=37813,Dd=37814,Id=37815,Nd=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,zd=37821,Wl=36492,Bd=36494,Hd=36495,B_=36283,Gd=36284,Vd=36285,Wd=36286,UM=3200,FM=3201,H_=0,kM=1,tr="",un="srgb",xr="srgb-linear",ap="display-p3",Hc="display-p3-linear",_c="linear",pt="srgb",yc="rec709",xc="p3",es=7680,Wm=519,OM=512,zM=513,BM=514,G_=515,HM=516,GM=517,VM=518,WM=519,Xd=35044,XM=35048,Xm="300 es",Pi=2e3,Sc=2001;class ua{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jm=1234567;const Ka=Math.PI/180,Mo=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function op(n,e){return(n%e+e)%e}function jM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function YM(n,e,t){return n!==e?(t-n)/(e-n):0}function Za(n,e,t){return(1-t)*n+t*e}function qM(n,e,t,i){return Za(n,e,1-Math.exp(-t*i))}function $M(n,e=1){return e-Math.abs(op(n,e*2)-e)}function KM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ZM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function JM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function QM(n,e){return n+Math.random()*(e-n)}function ew(n){return n*(.5-Math.random())}function tw(n){n!==void 0&&(jm=n);let e=jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nw(n){return n*Ka}function iw(n){return n*Mo}function rw(n){return(n&n-1)===0&&n!==0}function sw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function aw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ow(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fe={DEG2RAD:Ka,RAD2DEG:Mo,generateUUID:Ni,clamp:Ft,euclideanModulo:op,mapLinear:jM,inverseLerp:YM,lerp:Za,damp:qM,pingpong:$M,smoothstep:KM,smootherstep:ZM,randInt:JM,randFloat:QM,randFloatSpread:ew,seededRandom:tw,degToRad:nw,radToDeg:iw,isPowerOfTwo:rw,ceilPowerOfTwo:sw,floorPowerOfTwo:aw,setQuaternionFromProperEuler:ow,normalize:ct,denormalize:ti};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=r[0],m=r[3],p=r[6],v=r[1],_=r[4],x=r[7],C=r[2],A=r[5],b=r[8];return s[0]=a*y+o*v+l*C,s[3]=a*m+o*_+l*A,s[6]=a*p+o*x+l*b,s[1]=c*y+h*v+u*C,s[4]=c*m+h*_+u*A,s[7]=c*p+h*x+u*b,s[2]=d*y+f*v+g*C,s[5]=d*m+f*_+g*A,s[8]=d*p+f*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,g=t*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=u*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Eu.makeScale(e,t)),this}rotate(e){return this.premultiply(Eu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eu=new He;function V_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lw(){const n=wo("canvas");return n.style.display="block",n}const Ym={};function Xl(n){n in Ym||(Ym[n]=!0,console.warn(n))}function cw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function uw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qm=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$m=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ma={[xr]:{transfer:_c,primaries:yc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[un]:{transfer:pt,primaries:yc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hc]:{transfer:_c,primaries:xc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3($m),fromReference:n=>n.applyMatrix3(qm)},[ap]:{transfer:pt,primaries:xc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3($m),fromReference:n=>n.applyMatrix3(qm).convertLinearToSRGB()}},dw=new Set([xr,Hc]),st={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ma[e].toReference,r=Ma[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ma[n].primaries},getTransfer:function(n){return n===tr?_c:Ma[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ma[e].luminanceCoefficients)}};function Ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class fw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=wo("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ws(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ws(t[i]/255)*255):t[i]=Ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pw=0;class W_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bu(r[a].image)):s.push(bu(r[a]))}else s=bu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mw=0;class $t extends ua{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=rr,r=rr,s=ei,a=Or,o=ii,l=zi,c=$t.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=Ni(),this.name="",this.source=new W_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=L_;$t.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,C=(p+1)/2,A=(h+d)/4,b=(u+y)/4,P=(g+m)/4;return _>x&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=b/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gw extends ua{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new W_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends gw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class X_ extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vw extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,p*v);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const x=o*v;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+y*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new T,Km=new xt;class Kr{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),tl.subVectors(this.max,wa),ns.subVectors(e.a,wa),is.subVectors(e.b,wa),rs.subVectors(e.c,wa),Vi.subVectors(is,ns),Wi.subVectors(rs,is),Mr.subVectors(ns,rs);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Mr.z,Mr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Mr.z,0,-Mr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Mr.y,Mr.x,0];return!Cu(t,ns,is,rs,tl)||(t=[1,0,0,0,1,0,0,0,1],!Cu(t,ns,is,rs,tl))?!1:(nl.crossVectors(Vi,Wi),t=[nl.x,nl.y,nl.z],Cu(t,ns,is,rs,tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new T,new T,new T,new T,new T,new T,new T,new T],Yn=new T,el=new Kr,ns=new T,is=new T,rs=new T,Vi=new T,Wi=new T,Mr=new T,wa=new T,tl=new T,nl=new T,wr=new T;function Cu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wr.fromArray(n,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),h=i.dot(wr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _w=new Kr,Ea=new T,Ru=new T;class ha{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_w.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const t=Ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Ru)),this.expandByPoint(Ea.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new T,Pu=new T,il=new T,Xi=new T,Lu=new T,rl=new T,Du=new T;class lp{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pu.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Pu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(il),o=Xi.dot(this.direction),l=-Xi.dot(il),c=Xi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pu).addScaledVector(il,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){Lu.subVectors(t,e),rl.subVectors(i,e),Du.crossVectors(Lu,rl);let a=this.direction.dot(Du),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(rl.crossVectors(Xi,rl));if(l<0)return null;const c=o*this.direction.dot(Lu.cross(Xi));if(c<0||l+c>a)return null;const h=-o*Xi.dot(Du);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,i,r,s,a,o,l,c,h,u,d,f,g,y,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,f,g,y,m)}set(e,t,i,r,s,a,o,l,c,h,u,d,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yw,e,xw)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ji.crossVectors(i,bn),ji.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ji.crossVectors(i,bn)),ji.normalize(),sl.crossVectors(bn,ji),r[0]=ji.x,r[4]=sl.x,r[8]=bn.x,r[1]=ji.y,r[5]=sl.y,r[9]=bn.y,r[2]=ji.z,r[6]=sl.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],v=i[3],_=i[7],x=i[11],C=i[15],A=r[0],b=r[4],P=r[8],V=r[12],S=r[1],E=r[5],H=r[9],B=r[13],X=r[2],Z=r[6],G=r[10],ee=r[14],I=r[3],K=r[7],Q=r[11],oe=r[15];return s[0]=a*A+o*S+l*X+c*I,s[4]=a*b+o*E+l*Z+c*K,s[8]=a*P+o*H+l*G+c*Q,s[12]=a*V+o*B+l*ee+c*oe,s[1]=h*A+u*S+d*X+f*I,s[5]=h*b+u*E+d*Z+f*K,s[9]=h*P+u*H+d*G+f*Q,s[13]=h*V+u*B+d*ee+f*oe,s[2]=g*A+y*S+m*X+p*I,s[6]=g*b+y*E+m*Z+p*K,s[10]=g*P+y*H+m*G+p*Q,s[14]=g*V+y*B+m*ee+p*oe,s[3]=v*A+_*S+x*X+C*I,s[7]=v*b+_*E+x*Z+C*K,s[11]=v*P+_*H+x*G+C*Q,s[15]=v*V+_*B+x*ee+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*f-i*l*f)+y*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*h-s*l*h)+m*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],v=u*m*c-y*d*c+y*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*y*c-g*u*c+g*o*f-a*y*f-h*o*p+a*u*p,C=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,A=t*v+i*_+r*x+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(y*d*s-u*m*s-y*r*f+i*m*f+u*r*p-i*d*p)*b,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*p+i*l*p)*b,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*f-i*l*f)*b,e[4]=_*b,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*p+t*d*p)*b,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*b,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*f+t*l*f)*b,e[8]=x*b,e[9]=(g*u*s-h*y*s-g*i*f+t*y*f+h*i*p-t*u*p)*b,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*p+t*o*p)*b,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*b,e[12]=C*b,e[13]=(h*y*r-g*u*r+g*i*d-t*y*d-h*i*m+t*u*m)*b,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*m-t*o*m)*b,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,g=s*u,y=a*h,m=a*u,p=o*u,v=l*c,_=l*h,x=l*u,C=i.x,A=i.y,b=i.z;return r[0]=(1-(y+p))*C,r[1]=(f+x)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(f-x)*A,r[5]=(1-(d+p))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+_)*b,r[9]=(m-v)*b,r[10]=(1-(d+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const a=ss.set(r[4],r[5],r[6]).length(),o=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,h=1/a,u=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Pi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===Pi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Sc)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pi){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,f=(i+r)*h;let g,y;if(o===Pi)g=(a+s)*u,y=-2*u;else if(o===Sc)g=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new T,qn=new it,yw=new T(0,0,0),xw=new T(1,1,1),ji=new T,sl=new T,bn=new T,Zm=new it,Jm=new xt;class Rt{constructor(e=0,t=0,i=0,r=Rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rt.DEFAULT_ORDER="XYZ";class cp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sw=0;const Qm=new T,as=new xt,Mi=new it,al=new T,Ta=new T,Mw=new T,ww=new xt,e0=new T(1,0,0),t0=new T(0,1,0),n0=new T(0,0,1),i0={type:"added"},Ew={type:"removed"},os={type:"childadded",child:null},Iu={type:"childremoved",child:null};class zt extends ua{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new T,t=new Rt,i=new xt,r=new T(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new He}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(n0,e)}translateOnAxis(e,t){return Qm.copy(e).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(n0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?al.copy(e):al.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ta,al,this.up):Mi.lookAt(al,Ta,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(Mi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i0),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ew),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i0),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,Mw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,ww,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new T(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new T,wi=new T,Nu=new T,Ei=new T,ls=new T,cs=new T,r0=new T,Uu=new T,Fu=new T,ku=new T,Ou=new dt,zu=new dt,Bu=new dt;class Bn{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$n.subVectors(e,t),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$n.subVectors(r,t),wi.subVectors(i,t),Nu.subVectors(e,t);const a=$n.dot($n),o=$n.dot(wi),l=$n.dot(Nu),c=wi.dot(wi),h=wi.dot(Nu),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ou.setScalar(0),zu.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,t),zu.fromBufferAttribute(e,i),Bu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ou,s.x),a.addScaledVector(zu,s.y),a.addScaledVector(Bu,s.z),a}static isFrontFacing(e,t,i,r){return $n.subVectors(i,t),wi.subVectors(e,t),$n.cross(wi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),cs.subVectors(s,i),Uu.subVectors(e,i);const l=ls.dot(Uu),c=cs.dot(Uu);if(l<=0&&c<=0)return t.copy(i);Fu.subVectors(e,r);const h=ls.dot(Fu),u=cs.dot(Fu);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ls,a);ku.subVectors(e,s);const f=ls.dot(ku),g=cs.dot(ku);if(g>=0&&f<=g)return t.copy(s);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(cs,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return r0.subVectors(s,r),o=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(r0,o);const p=1/(m+y+d);return a=y*p,o=d*p,t.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Hu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=op(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Hu(a,s,e+1/3),this.g=Hu(a,s,e),this.b=Hu(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const i=j_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=Tu(e.r),this.g=Tu(e.g),this.b=Tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return st.fromWorkingColorSpace(en.copy(this),e),Math.round(Ft(en.r*255,0,255))*65536+Math.round(Ft(en.g*255,0,255))*256+Math.round(Ft(en.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(en.copy(this),t);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=un){st.fromWorkingColorSpace(en.copy(this),e);const t=en.r,i=en.g,r=en.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(ol);const i=Za(Yi.h,ol.h,t),r=Za(Yi.s,ol.s,t),s=Za(Yi.l,ol.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new be;be.NAMES=j_;let Tw=0;class Zr extends ua{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Gs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Do extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=T_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new T,ll=new ae;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xd,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xd&&(e.usage=this.usage),e}}class Y_ extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class q_ extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ke extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bw=0;const Fn=new it,Gu=new zt,us=new T,An=new Kr,ba=new Kr,Vt=new T;class Bt extends ua{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V_(e)?q_:Y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(An.min,ba.min),An.expandByPoint(Vt),Vt.addVectors(An.max,ba.max),An.expandByPoint(Vt)):(An.expandByPoint(ba.min),An.expandByPoint(ba.max))}An.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Vt.add(us)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new T,l[P]=new T;const c=new T,h=new T,u=new T,d=new ae,f=new ae,g=new ae,y=new T,m=new T;function p(P,V,S){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,V),u.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,V),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[P].add(y),o[V].add(y),o[S].add(y),l[P].add(m),l[V].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,V=v.length;P<V;++P){const S=v[P],E=S.start,H=S.count;for(let B=E,X=E+H;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new T,x=new T,C=new T,A=new T;function b(P){C.fromBufferAttribute(r,P),A.copy(C);const V=o[P];_.copy(V),_.sub(C.multiplyScalar(C.dot(V))).normalize(),x.crossVectors(A,V);const E=x.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,E)}for(let P=0,V=v.length;P<V;++P){const S=v[P],E=S.start,H=S.count;for(let B=E,X=E+H;B<X;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s0=new it,Er=new lp,cl=new ha,a0=new T,ul=new T,hl=new T,dl=new T,Vu=new T,fl=new T,o0=new T,pl=new T;class Ae extends zt{constructor(e=new Bt,t=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Vu.fromBufferAttribute(u,e),a?fl.addScaledVector(Vu,h):fl.addScaledVector(Vu.sub(t),h))}t.add(fl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(cl.containsPoint(Er.origin)===!1&&(Er.intersectSphere(cl,a0)===null||Er.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(s0.copy(s).invert(),Er.copy(e.ray).applyMatrix4(s0),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=_;x<C;x+=3){const A=o.getX(x),b=o.getX(x+1),P=o.getX(x+2);r=ml(this,p,e,i,c,h,u,A,b,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const v=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=ml(this,a,e,i,c,h,u,v,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,C=_;x<C;x+=3){const A=x,b=x+1,P=x+2;r=ml(this,p,e,i,c,h,u,A,b,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const v=m,_=m+1,x=m+2;r=ml(this,a,e,i,c,h,u,v,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Aw(n,e,t,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gr,o),l===null)return null;pl.copy(o),pl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:n}}function ml(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ul),n.getVertexPosition(l,hl),n.getVertexPosition(c,dl);const h=Aw(n,e,t,i,ul,hl,dl,o0);if(h){const u=new T;Bn.getBarycoord(o0,ul,hl,dl,u),r&&(h.uv=Bn.getInterpolatedAttribute(r,o,l,c,u,new ae)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,o,l,c,u,new ae)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};Bn.getNormal(ul,hl,dl,d.normal),h.face=d,h.barycoord=u}return h}class vi extends Bt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(y,m,p,v,_,x,C,A,b,P,V){const S=x/b,E=C/P,H=x/2,B=C/2,X=A/2,Z=b+1,G=P+1;let ee=0,I=0;const K=new T;for(let Q=0;Q<G;Q++){const oe=Q*E-B;for(let Ce=0;Ce<Z;Ce++){const We=Ce*S-H;K[y]=We*v,K[m]=oe*_,K[p]=X,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ce/b),u.push(1-Q/P),ee+=1}}for(let Q=0;Q<P;Q++)for(let oe=0;oe<b;oe++){const Ce=d+oe+Z*Q,We=d+oe+Z*(Q+1),j=d+(oe+1)+Z*(Q+1),ie=d+(oe+1)+Z*Q;l.push(Ce,We,ie),l.push(We,j,ie),I+=6}o.addGroup(f,I,V),f+=I,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=ia(n[t]);for(const r in i)e[r]=i[r]}return e}function Cw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Eo={clone:ia,merge:ln};var Rw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rw,this.fragmentShader=Pw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=Cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class K_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new T,l0=new ae,c0=new ae;class Rn extends K_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,l0,c0),t.subVectors(c0,l0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class Lw extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(hs,ds,e,t);r.layers=this.layers,this.add(r);const s=new Rn(hs,ds,e,t);s.layers=this.layers,this.add(s);const a=new Rn(hs,ds,e,t);a.layers=this.layers,this.add(a);const o=new Rn(hs,ds,e,t);o.layers=this.layers,this.add(o);const l=new Rn(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new Rn(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Z_ extends $t{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dw extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Z_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Di});s.uniforms.tEquirect.value=t;const a=new Ae(r,s),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=ei),new Lw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Wu=new T,Iw=new T,Nw=new He;class Zi{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wu.subVectors(i,t).cross(Iw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nw.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new ha,gl=new T;class up{constructor(e=new Zi,t=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],g=r[9],y=r[10],m=r[11],p=r[12],v=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-f,x-p).normalize(),i[1].setComponents(l+s,d+c,m+f,x+p).normalize(),i[2].setComponents(l+a,d+h,m+g,x+v).normalize(),i[3].setComponents(l-a,d-h,m-g,x-v).normalize(),i[4].setComponents(l-o,d-u,m-y,x-_).normalize(),t===Pi)i[5].setComponents(l+o,d+u,m+y,x+_).normalize();else if(t===Sc)i[5].setComponents(o,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J_(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Uw(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ni extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){const v=p*d-a;for(let _=0;_<c;_++){const x=_*u-s;g.push(x,-v,0),y.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const _=v+c*p,x=v+c*(p+1),C=v+1+c*(p+1),A=v+1+c*p;f.push(_,x,A),f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kw=`#ifdef USE_ALPHAHASH
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
#endif`,Ow=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gw=`#ifdef USE_AOMAP
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
#endif`,Vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ww=`#ifdef USE_BATCHING
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
#endif`,Xw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$w=`#ifdef USE_IRIDESCENCE
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
#endif`,Kw=`#ifdef USE_BUMPMAP
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
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,s1=`#define PI 3.141592653589793
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
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o1=`vec3 transformedNormal = objectNormal;
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
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`
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
}`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
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
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
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
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I1=`PhysicalMaterial material;
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
#endif`,N1=`struct PhysicalMaterial {
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
}`,U1=`
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X1=`#if defined( USE_POINTS_UV )
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
#endif`,j1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
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
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
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
#endif`,sE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xE=`float getShadowMask() {
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
}`,SE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
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
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
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
}`,GE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,WE=`#define DISTANCE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,KE=`uniform vec3 diffuse;
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
}`,ZE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
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
}`,QE=`#define MATCAP
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
}`,eT=`#define MATCAP
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
}`,tT=`#define NORMAL
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
}`,nT=`#define NORMAL
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
}`,iT=`#define PHONG
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
}`,rT=`#define PHONG
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
}`,sT=`#define STANDARD
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
}`,aT=`#define STANDARD
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
}`,oT=`#define TOON
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
}`,lT=`#define TOON
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
}`,cT=`uniform float size;
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
}`,uT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,dT=`uniform vec3 color;
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
}`,fT=`uniform float rotation;
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
}`,pT=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Fw,alphahash_pars_fragment:kw,alphamap_fragment:Ow,alphamap_pars_fragment:zw,alphatest_fragment:Bw,alphatest_pars_fragment:Hw,aomap_fragment:Gw,aomap_pars_fragment:Vw,batching_pars_vertex:Ww,batching_vertex:Xw,begin_vertex:jw,beginnormal_vertex:Yw,bsdfs:qw,iridescence_fragment:$w,bumpmap_pars_fragment:Kw,clipping_planes_fragment:Zw,clipping_planes_pars_fragment:Jw,clipping_planes_pars_vertex:Qw,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:r1,common:s1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:o1,displacementmap_pars_vertex:l1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:h1,colorspace_fragment:d1,colorspace_pars_fragment:f1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:C1,envmap_vertex:_1,fog_vertex:y1,fog_pars_vertex:x1,fog_fragment:S1,fog_pars_fragment:M1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:E1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:b1,lights_pars_begin:A1,lights_toon_fragment:R1,lights_toon_pars_fragment:P1,lights_phong_fragment:L1,lights_phong_pars_fragment:D1,lights_physical_fragment:I1,lights_physical_pars_fragment:N1,lights_fragment_begin:U1,lights_fragment_maps:F1,lights_fragment_end:k1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:H1,map_fragment:G1,map_pars_fragment:V1,map_particle_fragment:W1,map_particle_pars_fragment:X1,metalnessmap_fragment:j1,metalnessmap_pars_fragment:Y1,morphinstance_vertex:q1,morphcolor_vertex:$1,morphnormal_vertex:K1,morphtarget_pars_vertex:Z1,morphtarget_vertex:J1,normal_fragment_begin:Q1,normal_fragment_maps:eE,normal_pars_fragment:tE,normal_pars_vertex:nE,normal_vertex:iE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:sE,clearcoat_normal_fragment_maps:aE,clearcoat_pars_fragment:oE,iridescence_pars_fragment:lE,opaque_fragment:cE,packing:uE,premultiplied_alpha_fragment:hE,project_vertex:dE,dithering_fragment:fE,dithering_pars_fragment:pE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:vE,shadowmap_pars_vertex:_E,shadowmap_vertex:yE,shadowmask_pars_fragment:xE,skinbase_vertex:SE,skinning_pars_vertex:ME,skinning_vertex:wE,skinnormal_vertex:EE,specularmap_fragment:TE,specularmap_pars_fragment:bE,tonemapping_fragment:AE,tonemapping_pars_fragment:CE,transmission_fragment:RE,transmission_pars_fragment:PE,uv_pars_fragment:LE,uv_pars_vertex:DE,uv_vertex:IE,worldpos_vertex:NE,background_vert:UE,background_frag:FE,backgroundCube_vert:kE,backgroundCube_frag:OE,cube_vert:zE,cube_frag:BE,depth_vert:HE,depth_frag:GE,distanceRGBA_vert:VE,distanceRGBA_frag:WE,equirect_vert:XE,equirect_frag:jE,linedashed_vert:YE,linedashed_frag:qE,meshbasic_vert:$E,meshbasic_frag:KE,meshlambert_vert:ZE,meshlambert_frag:JE,meshmatcap_vert:QE,meshmatcap_frag:eT,meshnormal_vert:tT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:rT,meshphysical_vert:sT,meshphysical_frag:aT,meshtoon_vert:oT,meshtoon_frag:lT,points_vert:cT,points_frag:uT,shadow_vert:hT,shadow_frag:dT,sprite_vert:fT,sprite_frag:pT},le={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},hi={basic:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ln([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ln([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ln([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ln([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ln([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ln([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ln([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ln([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ln([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:ln([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:ln([le.lights,le.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const vl={r:0,b:0,g:0},br=new Rt,mT=new it;function gT(n,e,t,i,r,s,a){const o=new be(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function y(v){let _=!1;const x=g(v);x===null?p(o,l):x&&x.isColor&&(p(x,1),_=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Bc)?(h===void 0&&(h=new Ae(new vi(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:ia(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),br.copy(_.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(br)),h.material.toneMapped=st.getTransfer(x.colorSpace)!==pt,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ae(new ni(2,2),new Ot({name:"BackgroundMaterial",uniforms:ia(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=st.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(vl,$_(n)),i.buffers.color.setClear(vl.r,vl.g,vl.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:y,addToRenderList:m}}function vT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(S,E,H,B,X){let Z=!1;const G=u(B,H,E);s!==G&&(s=G,c(s.object)),Z=f(S,B,H,X),Z&&g(S,B,H,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(S,E,H,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,E,H){const B=H.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Z=X[E.id];Z===void 0&&(Z={},X[E.id]=Z);let G=Z[B];return G===void 0&&(G=d(l()),Z[B]=G),G}function d(S){const E=[],H=[],B=[];for(let X=0;X<t;X++)E[X]=0,H[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,E,H,B){const X=s.attributes,Z=E.attributes;let G=0;const ee=H.getAttributes();for(const I in ee)if(ee[I].location>=0){const Q=X[I];let oe=Z[I];if(oe===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(S,E,H,B){const X={},Z=E.attributes;let G=0;const ee=H.getAttributes();for(const I in ee)if(ee[I].location>=0){let Q=Z[I];Q===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),X[I]=oe,G++}s.attributes=X,s.attributesNum=G,s.index=B}function y(){const S=s.newAttributes;for(let E=0,H=S.length;E<H;E++)S[E]=0}function m(S){p(S,0)}function p(S,E){const H=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;H[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),X[S]!==E&&(n.vertexAttribDivisor(S,E),X[S]=E)}function v(){const S=s.newAttributes,E=s.enabledAttributes;for(let H=0,B=E.length;H<B;H++)E[H]!==S[H]&&(n.disableVertexAttribArray(H),E[H]=0)}function _(S,E,H,B,X,Z,G){G===!0?n.vertexAttribIPointer(S,E,H,X,Z):n.vertexAttribPointer(S,E,H,B,X,Z)}function x(S,E,H,B){y();const X=B.attributes,Z=H.getAttributes(),G=E.defaultAttributeValues;for(const ee in Z){const I=Z[ee];if(I.location>=0){let K=X[ee];if(K===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Q=K.normalized,oe=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;const We=Ce.buffer,j=Ce.type,ie=Ce.bytesPerElement,fe=j===n.INT||j===n.UNSIGNED_INT||K.gpuType===Qf;if(K.isInterleavedBufferAttribute){const ue=K.data,Oe=ue.stride,Le=K.offset;if(ue.isInstancedInterleavedBuffer){for(let Ze=0;Ze<I.locationSize;Ze++)p(I.location+Ze,ue.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ze=0;Ze<I.locationSize;Ze++)m(I.location+Ze);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Ze=0;Ze<I.locationSize;Ze++)_(I.location+Ze,oe/I.locationSize,j,Q,Oe*ie,(Le+oe/I.locationSize*Ze)*ie,fe)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)p(I.location+ue,K.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ue=0;ue<I.locationSize;ue++)_(I.location+ue,oe/I.locationSize,j,Q,oe*ie,oe/I.locationSize*ue*ie,fe)}}else if(G!==void 0){const Q=G[ee];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(I.location,Q);break;case 3:n.vertexAttrib3fv(I.location,Q);break;case 4:n.vertexAttrib4fv(I.location,Q);break;default:n.vertexAttrib1fv(I.location,Q)}}}}v()}function C(){P();for(const S in i){const E=i[S];for(const H in E){const B=E[H];for(const X in B)h(B[X].object),delete B[X];delete E[H]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const H in E){const B=E[H];for(const X in B)h(B[X].object),delete B[X];delete E[H]}delete i[S.id]}function b(S){for(const E in i){const H=i[E];if(H[S.id]===void 0)continue;const B=H[S.id];for(const X in B)h(B[X].object),delete B[X];delete H[S.id]}}function P(){V(),a=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function _T(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)t.update(g,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yT(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==ii&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==zi&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==fi&&!P)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function xT(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Zi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||r;return r=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,_=v*4;let x=p.clippingState||null;l.value=x,x=h(g,d,_,f);for(let C=0;C!==_;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==y;++_,x+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ST(n){let e=new WeakMap;function t(a,o){return o===gd?a.mapping=Qs:o===vd&&(a.mapping=ea),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===gd||o===vd)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dw(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hp extends K_{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,u0=[.125,.215,.35,.446,.526,.582],Nr=20,Xu=new hp,h0=new be;let ju=null,Yu=0,qu=0,$u=!1;const Lr=(1+Math.sqrt(5))/2,fs=1/Lr,d0=[new T(-Lr,fs,0),new T(Lr,fs,0),new T(-fs,0,Lr),new T(fs,0,Lr),new T(0,Lr,-fs),new T(0,Lr,fs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Yu,qu),this._renderer.xr.enabled=$u,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Ii,format:ii,colorSpace:xr,depthBuffer:!1},r=f0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MT(s)),this._blurMaterial=wT(s,e,t)}return r}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,Xu)}_sceneToCubeUV(e,t,i,r){const o=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(h0),h.toneMapping=fr,h.autoClear=!1;const f=new Do({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Ae(new vi,f);let y=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(h0),y=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const _=this._cubeSize;_l(r,v*_,p>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qs||e.mapping===ea;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_l(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Xu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=d0[(r-s-1)%d0.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Nr-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):Nr;m>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nr}`);const p=[];let v=0;for(let b=0;b<Nr;++b){const P=b/y,V=Math.exp(-P*P/2);p.push(V),b===0?v+=V:b<m&&(v+=2*V)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const x=this._sizeLods[r],C=3*x*(r>_-Us?r-_+Us:0),A=4*(this._cubeSize-x);_l(t,C,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Xu)}}function MT(n){const e=[],t=[],i=[];let r=n;const s=n-Us+1+u0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Us?l=u0[a-n+Us-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,P=A>2?0:-1,V=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(V,y*g*A),_.set(d,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const C=new Bt;C.setAttribute("position",new rn(v,y)),C.setAttribute("uv",new rn(_,m)),C.setAttribute("faceIndex",new rn(x,p)),e.push(C),r>Us&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function f0(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wT(n,e,t){const i=new Float32Array(Nr),r=new T(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function p0(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function m0(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function dp(){return`

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
	`}function ET(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gd||l===vd,h=l===Qs||l===ea;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new jd(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new jd(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function TT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Xl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bT(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let y=0;if(f!==null){const v=f.array;y=f.version;for(let _=0,x=v.length;_<x;_+=3){const C=v[_+0],A=v[_+1],b=v[_+2];d.push(C,A,A,b,b,C)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const C=_+0,A=_+1,b=_+2;d.push(C,A,A,b,b,C)}}else return;const m=new(V_(d)?q_:Y_)(d,1);m.version=y;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function AT(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v];for(let v=0;v<y.length;v++)t.update(p,i,y[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function CT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RT(n,e,t){const i=new WeakMap,r=new dt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*A*4*u),P=new X_(b,C,A,u);P.type=fi,P.needsUpdate=!0;const V=x*4;for(let E=0;E<u;E++){const H=p[E],B=v[E],X=_[E],Z=C*A*4*E;for(let G=0;G<H.count;G++){const ee=G*V;g===!0&&(r.fromBufferAttribute(H,G),b[Z+ee+0]=r.x,b[Z+ee+1]=r.y,b[Z+ee+2]=r.z,b[Z+ee+3]=0),y===!0&&(r.fromBufferAttribute(B,G),b[Z+ee+4]=r.x,b[Z+ee+5]=r.y,b[Z+ee+6]=r.z,b[Z+ee+7]=0),m===!0&&(r.fromBufferAttribute(X,G),b[Z+ee+8]=r.x,b[Z+ee+9]=r.y,b[Z+ee+10]=r.z,b[Z+ee+11]=X.itemSize===4?r.w:1)}}d={count:u,texture:P,size:new ae(C,A)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function PT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Q_ extends $t{constructor(e,t,i,r,s,a,o,l,c,h=Vs){if(h!==Vs&&h!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vs&&(i=jr),i===void 0&&h===na&&(i=ta),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ey=new $t,g0=new Q_(1,1),ty=new X_,ny=new vw,iy=new Z_,v0=[],_0=[],y0=new Float32Array(16),x0=new Float32Array(9),S0=new Float32Array(4);function da(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=v0[r];if(s===void 0&&(s=new Float32Array(r),v0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gc(n,e){let t=_0[e];t===void 0&&(t=new Int32Array(e),_0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function LT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function DT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function IT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function NT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function UT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;S0.set(i),n.uniformMatrix2fv(this.addr,!1,S0),Gt(t,i)}}function FT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;x0.set(i),n.uniformMatrix3fv(this.addr,!1,x0),Gt(t,i)}}function kT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;y0.set(i),n.uniformMatrix4fv(this.addr,!1,y0),Gt(t,i)}}function OT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function HT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function GT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function WT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function XT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function jT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(g0.compareFunction=G_,s=g0):s=ey,t.setTexture2D(e||s,r)}function YT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ny,r)}function qT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||iy,r)}function $T(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ty,r)}function KT(n){switch(n){case 5126:return LT;case 35664:return DT;case 35665:return IT;case 35666:return NT;case 35674:return UT;case 35675:return FT;case 35676:return kT;case 5124:case 35670:return OT;case 35667:case 35671:return zT;case 35668:case 35672:return BT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return WT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return $T}}function ZT(n,e){n.uniform1fv(this.addr,e)}function JT(n,e){const t=da(e,this.size,2);n.uniform2fv(this.addr,t)}function QT(n,e){const t=da(e,this.size,3);n.uniform3fv(this.addr,t)}function eb(n,e){const t=da(e,this.size,4);n.uniform4fv(this.addr,t)}function tb(n,e){const t=da(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nb(n,e){const t=da(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ib(n,e){const t=da(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rb(n,e){n.uniform1iv(this.addr,e)}function sb(n,e){n.uniform2iv(this.addr,e)}function ab(n,e){n.uniform3iv(this.addr,e)}function ob(n,e){n.uniform4iv(this.addr,e)}function lb(n,e){n.uniform1uiv(this.addr,e)}function cb(n,e){n.uniform2uiv(this.addr,e)}function ub(n,e){n.uniform3uiv(this.addr,e)}function hb(n,e){n.uniform4uiv(this.addr,e)}function db(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ey,s[a])}function fb(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ny,s[a])}function pb(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||iy,s[a])}function mb(n,e,t){const i=this.cache,r=e.length,s=Gc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ty,s[a])}function gb(n){switch(n){case 5126:return ZT;case 35664:return JT;case 35665:return QT;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ab;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}class vb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KT(t.type)}}class _b{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gb(t.type)}}class yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function M0(n,e){n.seq.push(e),n.map[e.id]=e}function xb(n,e,t){const i=n.name,r=i.length;for(Ku.lastIndex=0;;){const s=Ku.exec(i),a=Ku.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){M0(t,c===void 0?new vb(o,n,e):new _b(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new yb(o),M0(t,u)),t=u}}}class jl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);xb(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function w0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Sb=37297;let Mb=0;function wb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Eb(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===xc&&t===yc?i="LinearDisplayP3ToLinearSRGB":e===yc&&t===xc&&(i="LinearSRGBToLinearDisplayP3"),n){case xr:case Hc:return[i,"LinearTransferOETF"];case un:case ap:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function E0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wb(n.getShaderSource(e),a)}else return r}function Tb(n,e){const t=Eb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bb(n,e){let t;switch(e){case b_:t="Linear";break;case A_:t="Reinhard";break;case C_:t="Cineon";break;case Jf:t="ACESFilmic";break;case R_:t="AgX";break;case P_:t="Neutral";break;case IM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new T;function Ab(){st.getLuminanceCoefficients(yl);const n=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function Rb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Pb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ba(n){return n!==""}function T0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(n){return n.replace(Lb,Ib)}const Db=new Map;function Ib(n,e){let t=Be[e];if(t===void 0){const i=Db.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yd(t)}const Nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(n){return n.replace(Nb,Ub)}function Ub(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function C0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Fb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function kb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case ea:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ob(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ea:e="ENVMAP_MODE_REFRACTION";break}return e}function zb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case T_:e="ENVMAP_BLENDING_MULTIPLY";break;case LM:e="ENVMAP_BLENDING_MIX";break;case DM:e="ENVMAP_BLENDING_ADD";break}return e}function Bb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Hb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Fb(t),c=kb(t),h=Ob(t),u=zb(t),d=Bb(t),f=Cb(t),g=Rb(s),y=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),p.length>0&&(p+=`
`)):(m=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),p=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?Be.tonemapping_pars_fragment:"",t.toneMapping!==fr?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Tb("linearToOutputTexel",t.outputColorSpace),Ab(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),a=Yd(a),a=T0(a,t),a=b0(a,t),o=Yd(o),o=T0(o,t),o=b0(o,t),a=A0(a),o=A0(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+m+a,x=v+p+o,C=w0(r,r.VERTEX_SHADER,_),A=w0(r,r.FRAGMENT_SHADER,x);r.attachShader(y,C),r.attachShader(y,A),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(E){if(n.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(A).trim();let Z=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,C,A);else{const ee=E0(r,C,"vertex"),I=E0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+H+`
`+ee+`
`+I)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||X==="")&&(G=!1);G&&(E.diagnostics={runnable:Z,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(A),P=new jl(r,y),V=Pb(r,y)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let V;this.getAttributes=function(){return V===void 0&&b(this),V};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Sb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}let Gb=0;class Vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Wb(e),t.set(e,i)),i}}class Wb{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}}function Xb(n,e,t,i,r,s,a){const o=new cp,l=new Vb,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,E,H,B,X){const Z=B.fog,G=X.geometry,ee=S.isMeshStandardMaterial?B.environment:null,I=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),K=I&&I.mapping===Bc?I.image.height:null,Q=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ce=oe!==void 0?oe.length:0;let We=0;G.morphAttributes.position!==void 0&&(We=1),G.morphAttributes.normal!==void 0&&(We=2),G.morphAttributes.color!==void 0&&(We=3);let j,ie,fe,ue;if(Q){const gn=hi[Q];j=gn.vertexShader,ie=gn.fragmentShader}else j=S.vertexShader,ie=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const Oe=n.getRenderTarget(),Le=X.isInstancedMesh===!0,Ze=X.isBatchedMesh===!0,ht=!!S.map,Je=!!S.matcap,D=!!I,wn=!!S.aoMap,Xe=!!S.lightMap,tt=!!S.bumpMap,Ie=!!S.normalMap,vt=!!S.displacementMap,ke=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,k=S.anisotropy>0,$=S.clearcoat>0,te=S.dispersion>0,q=S.iridescence>0,Me=S.sheen>0,ce=S.transmission>0,ve=k&&!!S.anisotropyMap,nt=$&&!!S.clearcoatMap,re=$&&!!S.clearcoatNormalMap,_e=$&&!!S.clearcoatRoughnessMap,Ne=q&&!!S.iridescenceMap,Ue=q&&!!S.iridescenceThicknessMap,ye=Me&&!!S.sheenColorMap,je=Me&&!!S.sheenRoughnessMap,ze=!!S.specularMap,ft=!!S.specularColorMap,N=!!S.specularIntensityMap,pe=ce&&!!S.transmissionMap,W=ce&&!!S.thicknessMap,J=!!S.gradientMap,he=!!S.alphaMap,me=S.alphaTest>0,Qe=!!S.alphaHash,Lt=!!S.extensions;let mn=fr;S.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(mn=n.toneMapping);const rt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:ie,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&X._colorsTexture!==null,instancing:Le,instancingColor:Le&&X.instanceColor!==null,instancingMorph:Le&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Oe===null?n.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:xr,alphaToCoverage:!!S.alphaToCoverage,map:ht,matcap:Je,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:K,aoMap:wn,lightMap:Xe,bumpMap:tt,normalMap:Ie,displacementMap:f&&vt,emissiveMap:ke,normalMapObjectSpace:Ie&&S.normalMapType===kM,normalMapTangentSpace:Ie&&S.normalMapType===H_,metalnessMap:R,roughnessMap:M,anisotropy:k,anisotropyMap:ve,clearcoat:$,clearcoatMap:nt,clearcoatNormalMap:re,clearcoatRoughnessMap:_e,dispersion:te,iridescence:q,iridescenceMap:Ne,iridescenceThicknessMap:Ue,sheen:Me,sheenColorMap:ye,sheenRoughnessMap:je,specularMap:ze,specularColorMap:ft,specularIntensityMap:N,transmission:ce,transmissionMap:pe,thicknessMap:W,gradientMap:J,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:me,alphaHash:Qe,combine:S.combine,mapUv:ht&&m(S.map.channel),aoMapUv:wn&&m(S.aoMap.channel),lightMapUv:Xe&&m(S.lightMap.channel),bumpMapUv:tt&&m(S.bumpMap.channel),normalMapUv:Ie&&m(S.normalMap.channel),displacementMapUv:vt&&m(S.displacementMap.channel),emissiveMapUv:ke&&m(S.emissiveMap.channel),metalnessMapUv:R&&m(S.metalnessMap.channel),roughnessMapUv:M&&m(S.roughnessMap.channel),anisotropyMapUv:ve&&m(S.anisotropyMap.channel),clearcoatMapUv:nt&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(S.sheenRoughnessMap.channel),specularMapUv:ze&&m(S.specularMap.channel),specularColorMapUv:ft&&m(S.specularColorMap.channel),specularIntensityMapUv:N&&m(S.specularIntensityMap.channel),transmissionMapUv:pe&&m(S.transmissionMap.channel),thicknessMapUv:W&&m(S.thicknessMap.channel),alphaMapUv:he&&m(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ie||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!G.attributes.uv&&(ht||he),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:We,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:mn,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function v(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)E.push(H),E.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(_(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),S.push(o.mask)}function C(S){const E=y[S.type];let H;if(E){const B=hi[E];H=Eo.clone(B.uniforms)}else H=S.uniforms;return H}function A(S,E){let H;for(let B=0,X=h.length;B<X;B++){const Z=h[B];if(Z.cacheKey===E){H=Z,++H.usedTimes;break}}return H===void 0&&(H=new Hb(n,E,S,s),h.push(H)),H}function b(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:C,acquireProgram:A,releaseProgram:b,releaseShaderCache:P,programs:h,dispose:V}}function jb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Yb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function R0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function P0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,f,g,y,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function o(u,d,f,g,y,m){const p=a(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,d,f,g,y,m){const p=a(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Yb),i.length>1&&i.sort(d||R0),r.length>1&&r.sort(d||R0)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function qb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new P0,n.set(i,[a])):r>=s.length?(a=new P0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function $b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new be};break;case"SpotLight":t={position:new T,direction:new T,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function Kb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zb=0;function Jb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Qb(n){const e=new $b,t=Kb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);const r=new T,s=new it,a=new it;function o(c){let h=0,u=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,_=0,x=0,C=0,A=0,b=0;c.sort(Jb);for(let V=0,S=c.length;V<S;V++){const E=c[V],H=E.color,B=E.intensity,X=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=H.r*B,u+=H.g*B,d+=H.b*B;else if(E.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],B);b++}else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,I=t.get(E);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.directionalShadow[f]=I,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=E.shadow.matrix,v++}i.directional[f]=G,f++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(H).multiplyScalar(B),G.distance=X,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[y]=G;const ee=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,ee.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=ee.matrix,E.castShadow){const I=t.get(E);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=Z,x++}y++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(H).multiplyScalar(B),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=G,m++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const ee=E.shadow,I=t.get(E);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,I.shadowCameraNear=ee.camera.near,I.shadowCameraFar=ee.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=E.shadow.matrix,_++}i.point[g]=G,g++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(B),G.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=b,i.version=Zb++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const _=c[p];if(_.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(_.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function L0(n){const e=new Qb(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function e2(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new L0(n),e.set(r,[o])):s>=a.length?(o=new L0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class t2 extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n2 extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r2=`uniform sampler2D shadow_pass;
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
}`;function s2(n,e,t){let i=new up;const r=new ae,s=new ae,a=new dt,o=new t2({depthPacking:FM}),l=new n2,c={},h=t.maxTextureSize,u={[gr]:dn,[dn]:gr,[nn]:nn},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:i2,fragmentShader:r2}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E_;let p=this.type;this.render=function(A,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const V=n.getRenderTarget(),S=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=p!==Ti&&this.type===Ti,X=p===Ti&&this.type!==Ti;for(let Z=0,G=A.length;Z<G;Z++){const ee=A[Z],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||B===!0||X===!0){const oe=this.type!==Ti?{minFilter:yn,magFilter:yn}:{};I.map!==null&&I.map.dispose(),I.map=new oi(r.x,r.y,oe),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const Q=I.getViewportCount();for(let oe=0;oe<Q;oe++){const Ce=I.getViewport(oe);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),H.viewport(a),I.updateMatrices(ee,oe),i=I.getFrustum(),x(b,P,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===Ti&&v(I,P),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(V,S,E)};function v(A,b){const P=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(b,null,P,d,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(b,null,P,f,y,null)}function _(A,b,P,V){let S=null;const E=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)S=E;else if(S=P.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=S.uuid,B=b.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let Z=X[B];Z===void 0&&(Z=S.clone(),X[B]=Z,b.addEventListener("dispose",C)),S=Z}if(S.visible=b.visible,S.wireframe=b.wireframe,V===Ti?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=n.properties.get(S);H.light=P}return S}function x(A,b,P,V,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ti)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=e.update(A),X=A.material;if(Array.isArray(X)){const Z=B.groups;for(let G=0,ee=Z.length;G<ee;G++){const I=Z[G],K=X[I.materialIndex];if(K&&K.visible){const Q=_(A,K,V,S);A.onBeforeShadow(n,A,b,P,B,Q,I),n.renderBufferDirect(P,null,B,Q,A,I),A.onAfterShadow(n,A,b,P,B,Q,I)}}}else if(X.visible){const Z=_(A,X,V,S);A.onBeforeShadow(n,A,b,P,B,Z,null),n.renderBufferDirect(P,null,B,Z,A,null),A.onAfterShadow(n,A,b,P,B,Z,null)}}const H=A.children;for(let B=0,X=H.length;B<X;B++)x(H[B],b,P,V,S)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const V=c[P],S=A.target.uuid;S in V&&(V[S].dispose(),delete V[S])}}}const a2={[cd]:ud,[hd]:pd,[dd]:md,[Js]:fd,[ud]:cd,[pd]:hd,[md]:dd,[fd]:Js};function o2(n){function e(){let N=!1;const pe=new dt;let W=null;const J=new dt(0,0,0,0);return{setMask:function(he){W!==he&&!N&&(n.colorMask(he,he,he,he),W=he)},setLocked:function(he){N=he},setClear:function(he,me,Qe,Lt,mn){mn===!0&&(he*=Lt,me*=Lt,Qe*=Lt),pe.set(he,me,Qe,Lt),J.equals(pe)===!1&&(n.clearColor(he,me,Qe,Lt),J.copy(pe))},reset:function(){N=!1,W=null,J.set(-1,0,0,0)}}}function t(){let N=!1,pe=!1,W=null,J=null,he=null;return{setReversed:function(me){pe=me},setTest:function(me){me?fe(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(me){W!==me&&!N&&(n.depthMask(me),W=me)},setFunc:function(me){if(pe&&(me=a2[me]),J!==me){switch(me){case cd:n.depthFunc(n.NEVER);break;case ud:n.depthFunc(n.ALWAYS);break;case hd:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case dd:n.depthFunc(n.EQUAL);break;case fd:n.depthFunc(n.GEQUAL);break;case pd:n.depthFunc(n.GREATER);break;case md:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=me}},setLocked:function(me){N=me},setClear:function(me){he!==me&&(n.clearDepth(me),he=me)},reset:function(){N=!1,W=null,J=null,he=null}}}function i(){let N=!1,pe=null,W=null,J=null,he=null,me=null,Qe=null,Lt=null,mn=null;return{setTest:function(rt){N||(rt?fe(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!N&&(n.stencilMask(rt),pe=rt)},setFunc:function(rt,gn,yi){(W!==rt||J!==gn||he!==yi)&&(n.stencilFunc(rt,gn,yi),W=rt,J=gn,he=yi)},setOp:function(rt,gn,yi){(me!==rt||Qe!==gn||Lt!==yi)&&(n.stencilOp(rt,gn,yi),me=rt,Qe=gn,Lt=yi)},setLocked:function(rt){N=rt},setClear:function(rt){mn!==rt&&(n.clearStencil(rt),mn=rt)},reset:function(){N=!1,pe=null,W=null,J=null,he=null,me=null,Qe=null,Lt=null,mn=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,v=null,_=null,x=null,C=null,A=new be(0,0,0),b=0,P=!1,V=null,S=null,E=null,H=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,G=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=G>=2);let I=null,K={};const Q=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Ce=new dt().fromArray(Q),We=new dt().fromArray(oe);function j(N,pe,W,J){const he=new Uint8Array(4),me=n.createTexture();n.bindTexture(N,me),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<W;Qe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(pe+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return me}const ie={};ie[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),s.setFunc(Js),Xe(!1),tt(Hm),fe(n.CULL_FACE),D(Di);function fe(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function ue(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Oe(N,pe){return h[N]!==pe?(n.bindFramebuffer(N,pe),h[N]=pe,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Le(N,pe){let W=d,J=!1;if(N){W=u.get(pe),W===void 0&&(W=[],u.set(pe,W));const he=N.textures;if(W.length!==he.length||W[0]!==n.COLOR_ATTACHMENT0){for(let me=0,Qe=he.length;me<Qe;me++)W[me]=n.COLOR_ATTACHMENT0+me;W.length=he.length,J=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,J=!0);J&&n.drawBuffers(W)}function Ze(N){return f!==N?(n.useProgram(N),f=N,!0):!1}const ht={[Ir]:n.FUNC_ADD,[pM]:n.FUNC_SUBTRACT,[mM]:n.FUNC_REVERSE_SUBTRACT};ht[gM]=n.MIN,ht[vM]=n.MAX;const Je={[_M]:n.ZERO,[yM]:n.ONE,[xM]:n.SRC_COLOR,[od]:n.SRC_ALPHA,[bM]:n.SRC_ALPHA_SATURATE,[EM]:n.DST_COLOR,[MM]:n.DST_ALPHA,[SM]:n.ONE_MINUS_SRC_COLOR,[ld]:n.ONE_MINUS_SRC_ALPHA,[TM]:n.ONE_MINUS_DST_COLOR,[wM]:n.ONE_MINUS_DST_ALPHA,[AM]:n.CONSTANT_COLOR,[CM]:n.ONE_MINUS_CONSTANT_COLOR,[RM]:n.CONSTANT_ALPHA,[PM]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,pe,W,J,he,me,Qe,Lt,mn,rt){if(N===Di){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(fe(n.BLEND),g=!0),N!==fM){if(N!==y||rt!==P){if((m!==Ir||_!==Ir)&&(n.blendEquation(n.FUNC_ADD),m=Ir,_=Ir),rt)switch(N){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yo:n.blendFunc(n.ONE,n.ONE);break;case Gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,v=null,x=null,C=null,A.set(0,0,0),b=0,y=N,P=rt}return}he=he||pe,me=me||W,Qe=Qe||J,(pe!==m||he!==_)&&(n.blendEquationSeparate(ht[pe],ht[he]),m=pe,_=he),(W!==p||J!==v||me!==x||Qe!==C)&&(n.blendFuncSeparate(Je[W],Je[J],Je[me],Je[Qe]),p=W,v=J,x=me,C=Qe),(Lt.equals(A)===!1||mn!==b)&&(n.blendColor(Lt.r,Lt.g,Lt.b,mn),A.copy(Lt),b=mn),y=N,P=!1}function wn(N,pe){N.side===nn?ue(n.CULL_FACE):fe(n.CULL_FACE);let W=N.side===dn;pe&&(W=!W),Xe(W),N.blending===Gs&&N.transparent===!1?D(Di):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){V!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),V=N)}function tt(N){N!==uM?(fe(n.CULL_FACE),N!==S&&(N===Hm?n.cullFace(n.BACK):N===hM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),S=N}function Ie(N){N!==E&&(Z&&n.lineWidth(N),E=N)}function vt(N,pe,W){N?(fe(n.POLYGON_OFFSET_FILL),(H!==pe||B!==W)&&(n.polygonOffset(pe,W),H=pe,B=W)):ue(n.POLYGON_OFFSET_FILL)}function ke(N){N?fe(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function R(N){N===void 0&&(N=n.TEXTURE0+X-1),I!==N&&(n.activeTexture(N),I=N)}function M(N,pe,W){W===void 0&&(I===null?W=n.TEXTURE0+X-1:W=I);let J=K[W];J===void 0&&(J={type:void 0,texture:void 0},K[W]=J),(J.type!==N||J.texture!==pe)&&(I!==W&&(n.activeTexture(W),I=W),n.bindTexture(N,pe||ie[N]),J.type=N,J.texture=pe)}function k(){const N=K[I];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){Ce.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ce.copy(N))}function ye(N){We.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),We.copy(N))}function je(N,pe){let W=l.get(pe);W===void 0&&(W=new WeakMap,l.set(pe,W));let J=W.get(N);J===void 0&&(J=n.getUniformBlockIndex(pe,N.name),W.set(N,J))}function ze(N,pe){const J=l.get(pe).get(N);o.get(pe)!==J&&(n.uniformBlockBinding(pe,J,N.__bindingPointIndex),o.set(pe,J))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},I=null,K={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,v=null,_=null,x=null,C=null,A=new be(0,0,0),b=0,P=!1,V=null,S=null,E=null,H=null,B=null,Ce.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:ue,bindFramebuffer:Oe,drawBuffers:Le,useProgram:Ze,setBlending:D,setMaterial:wn,setFlipSided:Xe,setCullFace:tt,setLineWidth:Ie,setPolygonOffset:vt,setScissorTest:ke,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:_e,texImage3D:Ne,updateUBOMapping:je,uniformBlockBinding:ze,texStorage2D:nt,texStorage3D:re,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Ue,viewport:ye,reset:ft}}function D0(n,e,t,i){const r=l2(i);switch(t){case U_:return n*e;case k_:return n*e;case O_:return n*e*2;case np:return n*e/r.components*r.byteLength;case ip:return n*e/r.components*r.byteLength;case z_:return n*e*2/r.components*r.byteLength;case rp:return n*e*2/r.components*r.byteLength;case F_:return n*e*3/r.components*r.byteLength;case ii:return n*e*4/r.components*r.byteLength;case sp:return n*e*4/r.components*r.byteLength;case Bl:case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xd:case Md:return Math.max(n,16)*Math.max(e,8)/4;case yd:case Sd:return Math.max(n,8)*Math.max(e,8)/2;case wd:case Ed:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Bd:case Hd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case B_:case Gd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vd:case Wd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l2(n){switch(n){case zi:case D_:return{byteLength:1,components:1};case So:case I_:case Ii:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case jr:case Qf:case fi:return{byteLength:4,components:1};case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function c2(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):wo("canvas")}function y(R,M,k){let $=1;const te=ke(R);if((te.width>k||te.height>k)&&($=k/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*te.width),Me=Math.floor($*te.height);u===void 0&&(u=g(q,Me));const ce=M?g(q,Me):u;return ce.width=q,ce.height=Me,ce.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Me+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==yn&&R.minFilter!==ei}function p(R){n.generateMipmap(R)}function v(R,M,k,$,te=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),M===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),M===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const Me=te?_c:st.getTransfer($);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=Me===pt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(R,M){let k;return R?M===null||M===jr||M===ta?k=n.DEPTH24_STENCIL8:M===fi?k=n.DEPTH32F_STENCIL8:M===So&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===ta?k=n.DEPTH_COMPONENT24:M===fi?k=n.DEPTH_COMPONENT32F:M===So&&(k=n.DEPTH_COMPONENT16),k}function x(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&h.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),V(M)}function b(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,$=d.get(k);if($){const te=$[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(R),Object.keys($).length===0&&d.delete(k)}i.remove(R)}function P(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const k=R.source,$=d.get(k);delete $[M.__cacheKey],a.memory.textures--}function V(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let te=0;te<M.__webglFramebuffer[$].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[$][te]);else n.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)n.deleteFramebuffer(M.__webglFramebuffer[$]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,te=k.length;$<te;$++){const q=i.get(k[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(R)}let S=0;function E(){S=0}function H(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function X(R,M){const k=i.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(k,R,M);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Z(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){We(k,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function G(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){We(k,R,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function ee(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const I={[xo]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[_d]:n.MIRRORED_REPEAT},K={[yn]:n.NEAREST,[NM]:n.NEAREST_MIPMAP_NEAREST,[Qo]:n.NEAREST_MIPMAP_LINEAR,[ei]:n.LINEAR,[wu]:n.LINEAR_MIPMAP_NEAREST,[Or]:n.LINEAR_MIPMAP_LINEAR},Q={[OM]:n.NEVER,[WM]:n.ALWAYS,[zM]:n.LESS,[G_]:n.LEQUAL,[BM]:n.EQUAL,[VM]:n.GEQUAL,[HM]:n.GREATER,[GM]:n.NOTEQUAL};function oe(R,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===wu||M.magFilter===Qo||M.magFilter===Or||M.minFilter===ei||M.minFilter===wu||M.minFilter===Qo||M.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,I[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,I[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,I[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,K[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==Qo&&M.minFilter!==Or||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const $=M.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const q=B(M);if(q!==R.__cacheKey){te[q]===void 0&&(te[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[q].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&P(M)),R.__cacheKey=q,R.__webglTexture=te[q].texture}return k}function We(R,M,k){let $=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=n.TEXTURE_3D);const te=Ce(R,M),q=M.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+k);const Me=i.get(q);if(q.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+k);const ce=st.getPrimaries(st.workingColorSpace),ve=M.colorSpace===tr?null:st.getPrimaries(M.colorSpace),nt=M.colorSpace===tr||ce===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let re=y(M.image,!1,r.maxTextureSize);re=vt(M,re);const _e=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let Ue=v(M.internalFormat,_e,Ne,M.colorSpace,M.isVideoTexture);oe($,M);let ye;const je=M.mipmaps,ze=M.isVideoTexture!==!0,ft=Me.__version===void 0||te===!0,N=q.dataReady,pe=x(M,re);if(M.isDepthTexture)Ue=_(M.format===na,M.type),ft&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ue,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,_e,Ne,null));else if(M.isDataTexture)if(je.length>0){ze&&ft&&t.texStorage2D(n.TEXTURE_2D,pe,Ue,je[0].width,je[0].height);for(let W=0,J=je.length;W<J;W++)ye=je[W],ze?N&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,Ne,ye.data):t.texImage2D(n.TEXTURE_2D,W,Ue,ye.width,ye.height,0,_e,Ne,ye.data);M.generateMipmaps=!1}else ze?(ft&&t.texStorage2D(n.TEXTURE_2D,pe,Ue,re.width,re.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,_e,Ne,re.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,re.width,re.height,0,_e,Ne,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ue,je[0].width,je[0].height,re.depth);for(let W=0,J=je.length;W<J;W++)if(ye=je[W],M.format!==ii)if(_e!==null)if(ze){if(N)if(M.layerUpdates.size>0){const he=D0(ye.width,ye.height,M.format,M.type);for(const me of M.layerUpdates){const Qe=ye.data.subarray(me*he/ye.data.BYTES_PER_ELEMENT,(me+1)*he/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,me,ye.width,ye.height,1,_e,Qe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,re.depth,_e,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,re.depth,_e,Ne,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Ue,ye.width,ye.height,re.depth,0,_e,Ne,ye.data)}else{ze&&ft&&t.texStorage2D(n.TEXTURE_2D,pe,Ue,je[0].width,je[0].height);for(let W=0,J=je.length;W<J;W++)ye=je[W],M.format!==ii?_e!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?N&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ye.width,ye.height,_e,Ne,ye.data):t.texImage2D(n.TEXTURE_2D,W,Ue,ye.width,ye.height,0,_e,Ne,ye.data)}else if(M.isDataArrayTexture)if(ze){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Ue,re.width,re.height,re.depth),N)if(M.layerUpdates.size>0){const W=D0(re.width,re.height,M.format,M.type);for(const J of M.layerUpdates){const he=re.data.subarray(J*W/re.data.BYTES_PER_ELEMENT,(J+1)*W/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,_e,Ne,he)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,Ne,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,_e,Ne,re.data);else if(M.isData3DTexture)ze?(ft&&t.texStorage3D(n.TEXTURE_3D,pe,Ue,re.width,re.height,re.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,Ne,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,_e,Ne,re.data);else if(M.isFramebufferTexture){if(ft)if(ze)t.texStorage2D(n.TEXTURE_2D,pe,Ue,re.width,re.height);else{let W=re.width,J=re.height;for(let he=0;he<pe;he++)t.texImage2D(n.TEXTURE_2D,he,Ue,W,J,0,_e,Ne,null),W>>=1,J>>=1}}else if(je.length>0){if(ze&&ft){const W=ke(je[0]);t.texStorage2D(n.TEXTURE_2D,pe,Ue,W.width,W.height)}for(let W=0,J=je.length;W<J;W++)ye=je[W],ze?N&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,_e,Ne,ye):t.texImage2D(n.TEXTURE_2D,W,Ue,_e,Ne,ye);M.generateMipmaps=!1}else if(ze){if(ft){const W=ke(re);t.texStorage2D(n.TEXTURE_2D,pe,Ue,W.width,W.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ne,re)}else t.texImage2D(n.TEXTURE_2D,0,Ue,_e,Ne,re);m(M)&&p($),Me.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function j(R,M,k){if(M.image.length!==6)return;const $=Ce(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const q=i.get(te);if(te.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const Me=st.getPrimaries(st.workingColorSpace),ce=M.colorSpace===tr?null:st.getPrimaries(M.colorSpace),ve=M.colorSpace===tr||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const nt=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!nt&&!re?_e[J]=y(M.image[J],!0,r.maxCubemapSize):_e[J]=re?M.image[J].image:M.image[J],_e[J]=vt(M,_e[J]);const Ne=_e[0],Ue=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),je=v(M.internalFormat,Ue,ye,M.colorSpace),ze=M.isVideoTexture!==!0,ft=q.__version===void 0||$===!0,N=te.dataReady;let pe=x(M,Ne);oe(n.TEXTURE_CUBE_MAP,M);let W;if(nt){ze&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,je,Ne.width,Ne.height);for(let J=0;J<6;J++){W=_e[J].mipmaps;for(let he=0;he<W.length;he++){const me=W[he];M.format!==ii?Ue!==null?ze?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,me.width,me.height,Ue,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,me.width,me.height,Ue,ye,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,je,me.width,me.height,0,Ue,ye,me.data)}}}else{if(W=M.mipmaps,ze&&ft){W.length>0&&pe++;const J=ke(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,je,J.width,J.height)}for(let J=0;J<6;J++)if(re){ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Ue,ye,_e[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,_e[J].width,_e[J].height,0,Ue,ye,_e[J].data);for(let he=0;he<W.length;he++){const Qe=W[he].image[J].image;ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Qe.width,Qe.height,Ue,ye,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,je,Qe.width,Qe.height,0,Ue,ye,Qe.data)}}else{ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,ye,_e[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Ue,ye,_e[J]);for(let he=0;he<W.length;he++){const me=W[he];ze?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ue,ye,me.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,je,Ue,ye,me.image[J])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ie(R,M,k,$,te,q){const Me=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),ve=v(k.internalFormat,Me,ce,k.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>q),_e=Math.max(1,M.height>>q);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,q,ve,re,_e,M.depth,0,Me,ce,null):t.texImage2D(te,q,ve,re,_e,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,te,i.get(k).__webglTexture,0,Xe(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,te,i.get(k).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(R,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,te=$&&$.isDepthTexture?$.type:null,q=_(M.stencilBuffer,te),Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Xe(M);tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,q,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,R)}else{const $=M.textures;for(let te=0;te<$.length;te++){const q=$[te],Me=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),ve=v(q.internalFormat,Me,ce,q.colorSpace),nt=Xe(M);k&&tt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,ve,M.width,M.height):tt(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,ve,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ve,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const $=i.get(M.depthTexture).__webglTexture,te=Xe(M);if(M.depthTexture.format===Vs)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(M.depthTexture.format===na)tt(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=n.createRenderbuffer(),fe(M.__webglDepthbuffer[$],R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),fe(M.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(R,M,k){const $=i.get(R);M!==void 0&&ie($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Oe(R)}function Ze(R){const M=R.texture,k=i.get(R),$=i.get(M);R.addEventListener("dispose",A);const te=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=M.version,a.memory.textures++),q){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let ve=0;ve<M.mipmaps.length;ve++)k.__webglFramebuffer[ce][ve]=n.createFramebuffer()}else k.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ce]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,ve=te.length;ce<ve;ce++){const nt=i.get(te[ce]);nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&tt(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const ve=te[ce];k.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const nt=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),_e=v(ve.internalFormat,nt,re,ve.colorSpace,R.isXRRenderTarget===!0),Ne=Xe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),oe(n.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ie(k.__webglFramebuffer[ce][ve],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else ie(k.__webglFramebuffer[ce],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,ve=te.length;ce<ve;ce++){const nt=te[ce],re=i.get(nt);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),oe(n.TEXTURE_2D,nt),ie(k.__webglFramebuffer,R,nt,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(nt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),oe(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ie(k.__webglFramebuffer[ve],R,M,n.COLOR_ATTACHMENT0,ce,ve);else ie(k.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ce,0);m(M)&&p(ce),t.unbindTexture()}R.depthBuffer&&Oe(R)}function ht(R){const M=R.textures;for(let k=0,$=M.length;k<$;k++){const te=M[k];if(m(te)){const q=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(te).__webglTexture;t.bindTexture(q,Me),p(q),t.unbindTexture()}}}const Je=[],D=[];function wn(R){if(R.samples>0){if(tt(R)===!1){const M=R.textures,k=R.width,$=R.height;let te=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(R),ce=M.length>1;if(ce)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const nt=i.get(M[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,te,n.NEAREST),l===!0&&(Je.length=0,D.length=0,Je.push(n.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Je.push(q),D.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const nt=i.get(M[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Xe(R){return Math.min(r.maxSamples,R.samples)}function tt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function vt(R,M){const k=R.colorSpace,$=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==xr&&k!==tr&&(st.getTransfer(k)===pt?($!==ii||te!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=E,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=Le,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=tt}function u2(n,e){function t(i,r=tr){let s;const a=st.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===ep)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===N_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===D_)return n.BYTE;if(i===I_)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Qf)return n.INT;if(i===jr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Ii)return n.HALF_FLOAT;if(i===U_)return n.ALPHA;if(i===F_)return n.RGB;if(i===ii)return n.RGBA;if(i===k_)return n.LUMINANCE;if(i===O_)return n.LUMINANCE_ALPHA;if(i===Vs)return n.DEPTH_COMPONENT;if(i===na)return n.DEPTH_STENCIL;if(i===np)return n.RED;if(i===ip)return n.RED_INTEGER;if(i===z_)return n.RG;if(i===rp)return n.RG_INTEGER;if(i===sp)return n.RGBA_INTEGER;if(i===Bl||i===Hl||i===Gl||i===Vl)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===xd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Ed||i===Td)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Ed)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Td)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bd||i===Ad||i===Cd||i===Rd||i===Pd||i===Ld||i===Dd||i===Id||i===Nd||i===Ud||i===Fd||i===kd||i===Od||i===zd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===Bd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wl)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===B_||i===Gd||i===Vd||i===Wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class h2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d2={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const f2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
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

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ot({vertexShader:f2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g2 extends ua{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const y=new m2,m=t.getContextAttributes();let p=null,v=null;const _=[],x=[],C=new ae;let A=null;const b=new Rn;b.layers.enable(1),b.viewport=new dt;const P=new Rn;P.layers.enable(2),P.viewport=new dt;const V=[b,P],S=new h2;S.layers.enable(1),S.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=_[j];return ie===void 0&&(ie=new Zu,_[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=_[j];return ie===void 0&&(ie=new Zu,_[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=_[j];return ie===void 0&&(ie=new Zu,_[j]=ie),ie.getHandSpace()};function B(j){const ie=x.indexOf(j.inputSource);if(ie===-1)return;const fe=_[ie];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Z);for(let j=0;j<_.length;j++){const ie=x[j];ie!==null&&(x[j]=null,_[j].disconnect(ie))}E=null,H=null,y.reset(),e.setRenderTarget(p),f=null,d=null,u=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new oi(f.framebufferWidth,f.framebufferHeight,{format:ii,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,fe=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?na:Vs,fe=m.stencil?ta:jr);const Oe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new oi(d.textureWidth,d.textureHeight,{format:ii,type:zi,depthTexture:new Q_(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(j){for(let ie=0;ie<j.removed.length;ie++){const fe=j.removed[ie],ue=x.indexOf(fe);ue>=0&&(x[ue]=null,_[ue].disconnect(fe))}for(let ie=0;ie<j.added.length;ie++){const fe=j.added[ie];let ue=x.indexOf(fe);if(ue===-1){for(let Le=0;Le<_.length;Le++)if(Le>=x.length){x.push(fe),ue=Le;break}else if(x[Le]===null){x[Le]=fe,ue=Le;break}if(ue===-1)break}const Oe=_[ue];Oe&&Oe.connect(fe)}}const G=new T,ee=new T;function I(j,ie,fe){G.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(fe.matrixWorld);const ue=G.distanceTo(ee),Oe=ie.projectionMatrix.elements,Le=fe.projectionMatrix.elements,Ze=Oe[14]/(Oe[10]-1),ht=Oe[14]/(Oe[10]+1),Je=(Oe[9]+1)/Oe[5],D=(Oe[9]-1)/Oe[5],wn=(Oe[8]-1)/Oe[0],Xe=(Le[8]+1)/Le[0],tt=Ze*wn,Ie=Ze*Xe,vt=ue/(-wn+Xe),ke=vt*-wn;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ke),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Oe[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const R=Ze+vt,M=ht+vt,k=tt-ke,$=Ie+(ue-ke),te=Je*ht/M*R,q=D*ht/M*R;j.projectionMatrix.makePerspective(k,$,te,q,R,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,fe=j.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),S.near=P.near=b.near=ie,S.far=P.far=b.far=fe,(E!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,H=S.far);const ue=j.parent,Oe=S.cameras;K(S,ue);for(let Le=0;Le<Oe.length;Le++)K(Oe[Le],ue);Oe.length===2?I(S,b,P):S.projectionMatrix.copy(b.projectionMatrix),Q(j,S,ue)};function Q(j,ie,fe){fe===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function Ce(j,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ue=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Le=0;Le<fe.length;Le++){const Ze=fe[Le];let ht=null;if(f!==null)ht=f.getViewport(Ze);else{const D=u.getViewSubImage(d,Ze);ht=D.viewport,Le===0&&(e.setRenderTargetTextures(v,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let Je=V[Le];Je===void 0&&(Je=new Rn,Je.layers.enable(Le),Je.viewport=new dt,V[Le]=Je),Je.matrix.fromArray(Ze.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ze.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ht.x,ht.y,ht.width,ht.height),Le===0&&(S.matrix.copy(Je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Je)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Le=u.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&y.init(e,Le,r.renderState)}}for(let fe=0;fe<_.length;fe++){const ue=x[fe],Oe=_[fe];ue!==null&&Oe!==void 0&&Oe.update(ue,ie,c||a)}oe&&oe(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const We=new J_;We.setAnimationLoop(Ce),this.setAnimationLoop=function(j){oe=j},this.dispose=function(){}}}const Ar=new Rt,v2=new it;function _2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,$_(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,Ar.copy(x),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(v2.makeRotationFromEuler(Ar)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function y2(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function c(v,_){let x=r[v.id];x===void 0&&(g(v),x=h(v),r[v.id]=x,v.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function h(v){const _=u();v.__bindingPointIndex=_;const x=n.createBuffer(),C=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],x=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,b=x.length;A<b;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let V=0,S=P.length;V<S;V++){const E=P[V];if(f(E,A,V,C)===!0){const H=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let X=0;for(let Z=0;Z<B.length;Z++){const G=B[Z],ee=y(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,H+X,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,_,x,C){const A=v.value,b=_+"_"+x;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const P=C[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){const _=v.uniforms;let x=0;const C=16;for(let b=0,P=_.length;b<P;b++){const V=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,E=V.length;S<E;S++){const H=V[S],B=Array.isArray(H.value)?H.value:[H.value];for(let X=0,Z=B.length;X<Z;X++){const G=B[X],ee=y(G),I=x%C,K=I%ee.boundary,Q=I+K;x+=K,Q!==0&&C-Q<ee.storage&&(x+=C-Q),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=ee.storage}}}const A=x%C;return A>0&&(x+=C-A),v.__size=x,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class x2{constructor(e={}){const{canvas:t=lw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=fr,this.toneMappingExposure=1;const _=this;let x=!1,C=0,A=0,b=null,P=-1,V=null;const S=new dt,E=new dt;let H=null;const B=new be(0);let X=0,Z=t.width,G=t.height,ee=1,I=null,K=null;const Q=new dt(0,0,Z,G),oe=new dt(0,0,Z,G);let Ce=!1;const We=new up;let j=!1,ie=!1;const fe=new it,ue=new it,Oe=new T,Le=new dt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Je(){return b===null?ee:1}let D=i;function wn(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zf}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){const U="webgl2";if(D=wn(U,w),D===null)throw wn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xe,tt,Ie,vt,ke,R,M,k,$,te,q,Me,ce,ve,nt,re,_e,Ne,Ue,ye,je,ze,ft,N;function pe(){Xe=new TT(D),Xe.init(),ze=new u2(D,Xe),tt=new yT(D,Xe,e,ze),Ie=new o2(D),tt.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),vt=new CT(D),ke=new jb,R=new c2(D,Xe,Ie,ke,tt,ze,vt),M=new ST(_),k=new ET(_),$=new Uw(D),ft=new vT(D,$),te=new bT(D,$,vt,ft),q=new PT(D,te,$,vt),Ue=new RT(D,tt,R),re=new xT(ke),Me=new Xb(_,M,k,Xe,tt,ft,re),ce=new _2(_,ke),ve=new qb,nt=new e2(Xe),Ne=new gT(_,M,k,Ie,q,d,l),_e=new s2(_,q,tt),N=new y2(D,vt,tt,Ie),ye=new _T(D,Xe,vt),je=new AT(D,Xe,vt),vt.programs=Me.programs,_.capabilities=tt,_.extensions=Xe,_.properties=ke,_.renderLists=ve,_.shadowMap=_e,_.state=Ie,_.info=vt}pe();const W=new g2(_,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(Z,G,!1))},this.getSize=function(w){return w.set(Z,G)},this.setSize=function(w,U,O=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,G=U,t.width=Math.floor(w*ee),t.height=Math.floor(U*ee),O===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Z*ee,G*ee).floor()},this.setDrawingBufferSize=function(w,U,O){Z=w,G=U,ee=O,t.width=Math.floor(w*O),t.height=Math.floor(U*O),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,U,O,z){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,U,O,z),Ie.viewport(S.copy(Q).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,U,O,z){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,U,O,z),Ie.scissor(E.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(w){Ie.setScissorTest(Ce=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(w=!0,U=!0,O=!0){let z=0;if(w){let F=!1;if(b!==null){const se=b.texture.format;F=se===sp||se===rp||se===ip}if(F){const se=b.texture.type,de=se===zi||se===jr||se===So||se===ta||se===ep||se===tp,xe=Ne.getClearColor(),Se=Ne.getClearAlpha(),Pe=xe.r,De=xe.g,we=xe.b;de?(f[0]=Pe,f[1]=De,f[2]=we,f[3]=Se,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Pe,g[1]=De,g[2]=we,g[3]=Se,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),nt.dispose(),ke.dispose(),M.dispose(),k.dispose(),q.dispose(),ft.dispose(),N.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ep),W.removeEventListener("sessionend",Tp),Sr.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=vt.autoReset,U=_e.enabled,O=_e.autoUpdate,z=_e.needsUpdate,F=_e.type;pe(),vt.autoReset=w,_e.enabled=U,_e.autoUpdate=O,_e.needsUpdate=z,_e.type=F}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qe(w){const U=w.target;U.removeEventListener("dispose",Qe),Lt(U)}function Lt(w){mn(w),ke.remove(w)}function mn(w){const U=ke.get(w).programs;U!==void 0&&(U.forEach(function(O){Me.releaseProgram(O)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,O,z,F,se){U===null&&(U=Ze);const de=F.isMesh&&F.matrixWorld.determinant()<0,xe=Dy(w,U,O,z,F);Ie.setMaterial(z,de);let Se=O.index,Pe=1;if(z.wireframe===!0){if(Se=te.getWireframeAttribute(O),Se===void 0)return;Pe=2}const De=O.drawRange,we=O.attributes.position;let lt=De.start*Pe,_t=(De.start+De.count)*Pe;se!==null&&(lt=Math.max(lt,se.start*Pe),_t=Math.min(_t,(se.start+se.count)*Pe)),Se!==null?(lt=Math.max(lt,0),_t=Math.min(_t,Se.count)):we!=null&&(lt=Math.max(lt,0),_t=Math.min(_t,we.count));const bt=_t-lt;if(bt<0||bt===1/0)return;ft.setup(F,z,xe,O,Se);let En,at=ye;if(Se!==null&&(En=$.get(Se),at=je,at.setIndex(En)),F.isMesh)z.wireframe===!0?(Ie.setLineWidth(z.wireframeLinewidth*Je()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(F.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),Ie.setLineWidth(Te*Je()),F.isLineSegments?at.setMode(D.LINES):F.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else F.isPoints?at.setMode(D.POINTS):F.isSprite&&at.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Te=F._multiDrawStarts,jt=F._multiDrawCounts,ot=F._multiDrawCount,Xn=Se?$.get(Se).bytesPerElement:1,Jr=ke.get(z).currentProgram.getUniforms();for(let Tn=0;Tn<ot;Tn++)Jr.setValue(D,"_gl_DrawID",Tn),at.render(Te[Tn]/Xn,jt[Tn])}else if(F.isInstancedMesh)at.renderInstances(lt,bt,F.count);else if(O.isInstancedBufferGeometry){const Te=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,jt=Math.min(O.instanceCount,Te);at.renderInstances(lt,bt,jt)}else at.render(lt,bt)};function rt(w,U,O){w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,Uo(w,U,O),w.side=gr,w.needsUpdate=!0,Uo(w,U,O),w.side=nn):Uo(w,U,O)}this.compile=function(w,U,O=null){O===null&&(O=w),m=nt.get(O),m.init(U),v.push(m),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),w!==O&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const z=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const xe=se[de];rt(xe,O,F),z.add(xe)}else rt(se,O,F),z.add(se)}),v.pop(),m=null,z},this.compileAsync=function(w,U,O=null){const z=this.compile(w,U,O);return new Promise(F=>{function se(){if(z.forEach(function(de){ke.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){F(w);return}setTimeout(se,10)}Xe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let gn=null;function yi(w){gn&&gn(w)}function Ep(){Sr.stop()}function Tp(){Sr.start()}const Sr=new J_;Sr.setAnimationLoop(yi),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(w){gn=w,W.setAnimationLoop(w),w===null?Sr.stop():Sr.start()},W.addEventListener("sessionstart",Ep),W.addEventListener("sessionend",Tp),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,b),m=nt.get(w,v.length),m.init(U),v.push(m),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,j=re.init(this.clippingPlanes,ie),y=ve.get(w,p.length),y.init(),p.push(y),W.enabled===!0&&W.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&Yc(se,U,-1/0,_.sortObjects)}Yc(w,U,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(I,K),ht=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ht&&Ne.addToRenderList(y,w),this.info.render.frame++,j===!0&&re.beginShadows();const O=m.state.shadowsArray;_e.render(O,w,U),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,F=y.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let de=0,xe=se.length;de<xe;de++){const Se=se[de];Ap(z,F,w,Se)}ht&&Ne.render(w);for(let de=0,xe=se.length;de<xe;de++){const Se=se[de];bp(y,w,Se,Se.viewport)}}else F.length>0&&Ap(z,F,w,U),ht&&Ne.render(w),bp(y,w,U);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(_,w,U),ft.resetDefaultState(),P=-1,V=null,v.pop(),v.length>0?(m=v[v.length-1],j===!0&&re.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Yc(w,U,O,z){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||We.intersectsSprite(w)){z&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const de=q.update(w),xe=w.material;xe.visible&&y.push(w,de,xe,O,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||We.intersectsObject(w))){const de=q.update(w),xe=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(xe)){const Se=de.groups;for(let Pe=0,De=Se.length;Pe<De;Pe++){const we=Se[Pe],lt=xe[we.materialIndex];lt&&lt.visible&&y.push(w,de,lt,O,Le.z,we)}}else xe.visible&&y.push(w,de,xe,O,Le.z,null)}}const se=w.children;for(let de=0,xe=se.length;de<xe;de++)Yc(se[de],U,O,z)}function bp(w,U,O,z){const F=w.opaque,se=w.transmissive,de=w.transparent;m.setupLightsView(O),j===!0&&re.setGlobalState(_.clippingPlanes,O),z&&Ie.viewport(S.copy(z)),F.length>0&&No(F,U,O),se.length>0&&No(se,U,O),de.length>0&&No(de,U,O),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Ap(w,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new oi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Ii:zi,minFilter:Or,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const se=m.state.transmissionRenderTarget[z.id],de=z.viewport||S;se.setSize(de.z,de.w);const xe=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(B),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),ht&&Ne.render(O);const Se=_.toneMapping;_.toneMapping=fr;const Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),j===!0&&re.setGlobalState(_.clippingPlanes,z),No(w,O,z),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let we=0,lt=U.length;we<lt;we++){const _t=U[we],bt=_t.object,En=_t.geometry,at=_t.material,Te=_t.group;if(at.side===nn&&bt.layers.test(z.layers)){const jt=at.side;at.side=dn,at.needsUpdate=!0,Cp(bt,O,z,En,at,Te),at.side=jt,at.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}_.setRenderTarget(xe),_.setClearColor(B,X),Pe!==void 0&&(z.viewport=Pe),_.toneMapping=Se}function No(w,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=w.length;F<se;F++){const de=w[F],xe=de.object,Se=de.geometry,Pe=z===null?de.material:z,De=de.group;xe.layers.test(O.layers)&&Cp(xe,U,O,Se,Pe,De)}}function Cp(w,U,O,z,F,se){w.onBeforeRender(_,U,O,z,F,se),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,U,O,z,w,se),F.transparent===!0&&F.side===nn&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,_.renderBufferDirect(O,U,z,F,w,se),F.side=gr,F.needsUpdate=!0,_.renderBufferDirect(O,U,z,F,w,se),F.side=nn):_.renderBufferDirect(O,U,z,F,w,se),w.onAfterRender(_,U,O,z,F,se)}function Uo(w,U,O){U.isScene!==!0&&(U=Ze);const z=ke.get(w),F=m.state.lights,se=m.state.shadowsArray,de=F.state.version,xe=Me.getParameters(w,F.state,se,U,O),Se=Me.getProgramCacheKey(xe);let Pe=z.programs;z.environment=w.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Qe),Pe=new Map,z.programs=Pe);let De=Pe.get(Se);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===de)return Pp(w,xe),De}else xe.uniforms=Me.getUniforms(w),w.onBeforeCompile(xe,_),De=Me.acquireProgram(xe,Se),Pe.set(Se,De),z.uniforms=xe.uniforms;const we=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=re.uniform),Pp(w,xe),z.needsLights=Ny(w),z.lightsStateVersion=de,z.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function Rp(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=jl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Pp(w,U){const O=ke.get(w);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Dy(w,U,O,z,F){U.isScene!==!0&&(U=Ze),R.resetTextureUnits();const se=U.fog,de=z.isMeshStandardMaterial?U.environment:null,xe=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:xr,Se=(z.isMeshStandardMaterial?k:M).get(z.envMap||de),Pe=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!O.morphAttributes.position,lt=!!O.morphAttributes.normal,_t=!!O.morphAttributes.color;let bt=fr;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bt=_.toneMapping);const En=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,at=En!==void 0?En.length:0,Te=ke.get(z),jt=m.state.lights;if(j===!0&&(ie===!0||w!==V)){const Un=w===V&&z.id===P;re.setState(z,w,Un)}let ot=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==jt.state.version||Te.outputColorSpace!==xe||F.isBatchedMesh&&Te.batching===!1||!F.isBatchedMesh&&Te.batching===!0||F.isBatchedMesh&&Te.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Te.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Te.instancing===!1||!F.isInstancedMesh&&Te.instancing===!0||F.isSkinnedMesh&&Te.skinning===!1||!F.isSkinnedMesh&&Te.skinning===!0||F.isInstancedMesh&&Te.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Te.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Te.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Te.instancingMorph===!1&&F.morphTexture!==null||Te.envMap!==Se||z.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==re.numPlanes||Te.numIntersection!==re.numIntersection)||Te.vertexAlphas!==Pe||Te.vertexTangents!==De||Te.morphTargets!==we||Te.morphNormals!==lt||Te.morphColors!==_t||Te.toneMapping!==bt||Te.morphTargetsCount!==at)&&(ot=!0):(ot=!0,Te.__version=z.version);let Xn=Te.currentProgram;ot===!0&&(Xn=Uo(z,U,F));let Jr=!1,Tn=!1,qc=!1;const Ct=Xn.getUniforms(),Hi=Te.uniforms;if(Ie.useProgram(Xn.program)&&(Jr=!0,Tn=!0,qc=!0),z.id!==P&&(P=z.id,Tn=!0),Jr||V!==w){tt.reverseDepthBuffer?(fe.copy(w.projectionMatrix),uw(fe),hw(fe),Ct.setValue(D,"projectionMatrix",fe)):Ct.setValue(D,"projectionMatrix",w.projectionMatrix),Ct.setValue(D,"viewMatrix",w.matrixWorldInverse);const Un=Ct.map.cameraPosition;Un!==void 0&&Un.setValue(D,Oe.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&Ct.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ct.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,Tn=!0,qc=!0)}if(F.isSkinnedMesh){Ct.setOptional(D,F,"bindMatrix"),Ct.setOptional(D,F,"bindMatrixInverse");const Un=F.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ct.setValue(D,"boneTexture",Un.boneTexture,R))}F.isBatchedMesh&&(Ct.setOptional(D,F,"batchingTexture"),Ct.setValue(D,"batchingTexture",F._matricesTexture,R),Ct.setOptional(D,F,"batchingIdTexture"),Ct.setValue(D,"batchingIdTexture",F._indirectTexture,R),Ct.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Ct.setValue(D,"batchingColorTexture",F._colorsTexture,R));const $c=O.morphAttributes;if(($c.position!==void 0||$c.normal!==void 0||$c.color!==void 0)&&Ue.update(F,O,Xn),(Tn||Te.receiveShadow!==F.receiveShadow)&&(Te.receiveShadow=F.receiveShadow,Ct.setValue(D,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Hi.envMap.value=Se,Hi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Hi.envMapIntensity.value=U.environmentIntensity),Tn&&(Ct.setValue(D,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&Iy(Hi,qc),se&&z.fog===!0&&ce.refreshFogUniforms(Hi,se),ce.refreshMaterialUniforms(Hi,z,ee,G,m.state.transmissionRenderTarget[w.id]),jl.upload(D,Rp(Te),Hi,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(jl.upload(D,Rp(Te),Hi,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ct.setValue(D,"center",F.center),Ct.setValue(D,"modelViewMatrix",F.modelViewMatrix),Ct.setValue(D,"normalMatrix",F.normalMatrix),Ct.setValue(D,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Un=z.uniformsGroups;for(let Kc=0,Uy=Un.length;Kc<Uy;Kc++){const Lp=Un[Kc];N.update(Lp,Xn),N.bind(Lp,Xn)}}return Xn}function Iy(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ny(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,U,O){ke.get(w.texture).__webglTexture=U,ke.get(w.depthTexture).__webglTexture=O;const z=ke.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const O=ke.get(w);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,O=0){b=w,C=U,A=O;let z=!0,F=null,se=!1,de=!1;if(w){const Se=ke.get(w);if(Se.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Se.__hasExternalTextures)R.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const we=w.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&ke.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(de=!0);const De=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[U])?F=De[U][O]:F=De[U],se=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?F=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[O]:F=De,S.copy(w.viewport),E.copy(w.scissor),H=w.scissorTest}else S.copy(Q).multiplyScalar(ee).floor(),E.copy(oe).multiplyScalar(ee).floor(),H=Ce;if(Ie.bindFramebuffer(D.FRAMEBUFFER,F)&&z&&Ie.drawBuffers(w,F),Ie.viewport(S),Ie.scissor(E),Ie.setScissorTest(H),se){const Se=ke.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,O)}else if(de){const Se=ke.get(w.texture),Pe=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,O||0,Pe)}P=-1},this.readRenderTargetPixels=function(w,U,O,z,F,se,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){Ie.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Se=w.texture,Pe=Se.format,De=Se.type;if(!tt.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-z&&O>=0&&O<=w.height-F&&D.readPixels(U,O,z,F,ze.convert(Pe),ze.convert(De),se)}finally{const Se=b!==null?ke.get(b).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,U,O,z,F,se,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){const Se=w.texture,Pe=Se.format,De=Se.type;if(!tt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-z&&O>=0&&O<=w.height-F){Ie.bindFramebuffer(D.FRAMEBUFFER,xe);const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(U,O,z,F,ze.convert(Pe),ze.convert(De),0);const lt=b!==null?ke.get(b).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,lt);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cw(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(we),D.deleteSync(_t),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,O=0){w.isTexture!==!0&&(Xl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-O),F=Math.floor(w.image.width*z),se=Math.floor(w.image.height*z),de=U!==null?U.x:0,xe=U!==null?U.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,de,xe,F,se),Ie.unbindTexture()},this.copyTextureToTexture=function(w,U,O=null,z=null,F=0){w.isTexture!==!0&&(Xl("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let se,de,xe,Se,Pe,De;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,xe=O.min.x,Se=O.min.y):(se=w.image.width,de=w.image.height,xe=0,Se=0),z!==null?(Pe=z.x,De=z.y):(Pe=0,De=0);const we=ze.convert(U.format),lt=ze.convert(U.type);R.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const _t=D.getParameter(D.UNPACK_ROW_LENGTH),bt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),En=D.getParameter(D.UNPACK_SKIP_PIXELS),at=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),jt=w.isCompressedTexture?w.mipmaps[F]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,jt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Pe,De,se,de,we,lt,jt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Pe,De,jt.width,jt.height,we,jt.data):D.texSubImage2D(D.TEXTURE_2D,F,Pe,De,se,de,we,lt,jt),D.pixelStorei(D.UNPACK_ROW_LENGTH,_t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,En),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),F===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,U,O=null,z=null,F=0){w.isTexture!==!0&&(Xl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0);let se,de,xe,Se,Pe,De,we,lt,_t;const bt=w.isCompressedTexture?w.mipmaps[F]:w.image;O!==null?(se=O.max.x-O.min.x,de=O.max.y-O.min.y,xe=O.max.z-O.min.z,Se=O.min.x,Pe=O.min.y,De=O.min.z):(se=bt.width,de=bt.height,xe=bt.depth,Se=0,Pe=0,De=0),z!==null?(we=z.x,lt=z.y,_t=z.z):(we=0,lt=0,_t=0);const En=ze.convert(U.format),at=ze.convert(U.type);let Te;if(U.isData3DTexture)R.setTexture3D(U,0),Te=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=D.getParameter(D.UNPACK_ROW_LENGTH),ot=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xn=D.getParameter(D.UNPACK_SKIP_PIXELS),Jr=D.getParameter(D.UNPACK_SKIP_ROWS),Tn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Te,F,we,lt,_t,se,de,xe,En,at,bt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,F,we,lt,_t,se,de,xe,En,bt.data):D.texSubImage3D(Te,F,we,lt,_t,se,de,xe,En,at,bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tn),F===0&&U.generateMipmaps&&D.generateMipmap(Te),Ie.unbindTexture()},this.initRenderTarget=function(w){ke.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,Ie.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ap?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Hc?"display-p3":"srgb"}}class fp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ry extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rt,this.environmentIntensity=1,this.environmentRotation=new Rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class S2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xd,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new T;class Mc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sy extends Zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ps;const Aa=new T,ms=new T,gs=new T,vs=new ae,Ca=new ae,ay=new it,xl=new T,Ra=new T,Sl=new T,I0=new ae,Ju=new ae,N0=new ae;class M2 extends zt{constructor(e=new sy){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new S2(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Mc(i,3,0,!1)),ps.setAttribute("uv",new Mc(i,2,3,!1))}this.geometry=ps,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),ay.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ml(xl.set(-.5,-.5,0),gs,a,ms,r,s),Ml(Ra.set(.5,-.5,0),gs,a,ms,r,s),Ml(Sl.set(.5,.5,0),gs,a,ms,r,s),I0.set(0,0),Ju.set(1,0),N0.set(1,1);let o=e.ray.intersectTriangle(xl,Ra,Sl,!1,Aa);if(o===null&&(Ml(Ra.set(-.5,.5,0),gs,a,ms,r,s),Ju.set(0,1),o=e.ray.intersectTriangle(xl,Sl,Ra,!1,Aa),o===null))return;const l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||t.push({distance:l,point:Aa.clone(),uv:Bn.getInterpolation(Aa,xl,Ra,Sl,I0,Ju,N0,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ml(n,e,t,i,r,s){vs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ca.x=s*vs.x-r*vs.y,Ca.y=r*vs.x+s*vs.y):Ca.copy(vs),n.copy(e),n.x+=Ca.x,n.y+=Ca.y,n.applyMatrix4(ay)}class w2 extends $t{constructor(e=null,t=1,i=1,r,s,a,o,l,c=yn,h=yn,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wc extends rn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new it,U0=new it,wl=[],F0=new Kr,E2=new it,Pa=new Ae,La=new ha;class T2 extends Ae{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,E2)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),F0.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(F0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ha),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),La.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(i),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_s),U0.multiplyMatrices(i,_s),Pa.matrixWorld=U0,Pa.raycast(e,wl);for(let a=0,o=wl.length;a<o;a++){const l=wl[a];l.instanceId=s,l.object=this,t.push(l)}wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new w2(new Float32Array(r*this.count),r,this.count,np,fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class b2 extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const k0=new it,qd=new lp,El=new ha,Tl=new T;class O0 extends zt{constructor(e=new Bt,t=new b2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;k0.copy(r).invert(),qd.copy(e.ray).applyMatrix4(k0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){const m=c.getX(g);Tl.fromBufferAttribute(u,m),z0(Tl,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Tl.fromBufferAttribute(u,g),z0(Tl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function z0(n,e,t,i,r,s,a){const o=qd.distanceSqToPoint(n);if(o<t){const l=new T;qd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Io extends $t{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],d=i[r+1]-h,f=(a-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ae:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new T,r=[],s=[],a=[],o=new T,l=new it;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ft(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ft(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pp extends _i{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class A2 extends pp{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function mp(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const bl=new T,Qu=new mp,eh=new mp,th=new mp;class Dr extends _i{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new T){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(bl.subVectors(r[0],r[1]).add(r[0]),c=bl);const u=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=bl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Qu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),eh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),th.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Qu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),eh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),th.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Qu.calc(l),eh.calc(l),th.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function B0(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function C2(n,e){const t=1-n;return t*t*e}function R2(n,e){return 2*(1-n)*n*e}function P2(n,e){return n*n*e}function Ja(n,e,t,i){return C2(n,e)+R2(n,t)+P2(n,i)}function L2(n,e){const t=1-n;return t*t*t*e}function D2(n,e){const t=1-n;return 3*t*t*n*e}function I2(n,e){return 3*(1-n)*n*n*e}function N2(n,e){return n*n*n*e}function Qa(n,e,t,i,r){return L2(n,e)+D2(n,t)+I2(n,i)+N2(n,r)}class oy extends _i{constructor(e=new ae,t=new ae,i=new ae,r=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qa(e,r.x,s.x,a.x,o.x),Qa(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U2 extends _i{constructor(e=new T,t=new T,i=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new T){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Qa(e,r.x,s.x,a.x,o.x),Qa(e,r.y,s.y,a.y,o.y),Qa(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ly extends _i{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F2 extends _i{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cy extends _i{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ja(e,r.x,s.x,a.x),Ja(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uy extends _i{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ja(e,r.x,s.x,a.x),Ja(e,r.y,s.y,a.y),Ja(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hy extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(B0(o,l.x,c.x,h.x,u.x),B0(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ae().fromArray(r))}return this}}var $d=Object.freeze({__proto__:null,ArcCurve:A2,CatmullRomCurve3:Dr,CubicBezierCurve:oy,CubicBezierCurve3:U2,EllipseCurve:pp,LineCurve:ly,LineCurve3:F2,QuadraticBezierCurve:cy,QuadraticBezierCurve3:uy,SplineCurve:hy});class k2 extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $d[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new $d[r.type]().fromJSON(r))}return this}}class O2 extends k2{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ly(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new cy(this.currentPoint.clone(),new ae(e,t),new ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new oy(this.currentPoint.clone(),new ae(e,t),new ae(i,r),new ae(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new hy(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new pp(e,t,i,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gp extends Bt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Ft(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new ae,f=new T,g=new T,y=new T;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let v=0;v<=t;v++){const _=i+v*h*r,x=Math.sin(_),C=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*x,u.y=e[A].y,u.z=e[A].x*C,a.push(u.x,u.y,u.z),d.x=v/t,d.y=A/(e.length-1),o.push(d.x,d.y);const b=l[3*A+0]*x,P=l[3*A+1],V=l[3*A+0]*C;c.push(b,P,V)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){const x=_+v*e.length,C=x,A=x+e.length,b=x+e.length+1,P=x+1;s.push(C,A,P),s.push(b,P,A)}this.setIndex(s),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.points,e.segments,e.phiStart,e.phiLength)}}class vp extends gp{constructor(e=1,t=1,i=4,r=8){const s=new O2;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new vp(e.radius,e.length,e.capSegments,e.radialSegments)}}class kn extends Bt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const y=[],m=i/2;let p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function v(){const x=new T,C=new T;let A=0;const b=(t-e)/i;for(let P=0;P<=s;P++){const V=[],S=P/s,E=S*(t-e)+e;for(let H=0;H<=r;H++){const B=H/r,X=B*l+o,Z=Math.sin(X),G=Math.cos(X);C.x=E*Z,C.y=-S*i+m,C.z=E*G,u.push(C.x,C.y,C.z),x.set(Z,b,G).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-S),V.push(g++)}y.push(V)}for(let P=0;P<r;P++)for(let V=0;V<s;V++){const S=y[V][P],E=y[V+1][P],H=y[V+1][P+1],B=y[V][P+1];e>0&&(h.push(S,E,B),A+=3),t>0&&(h.push(E,H,B),A+=3)}c.addGroup(p,A,0),p+=A}function _(x){const C=g,A=new ae,b=new T;let P=0;const V=x===!0?e:t,S=x===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const E=g;for(let H=0;H<=r;H++){const X=H/r*l+o,Z=Math.cos(X),G=Math.sin(X);b.x=V*G,b.y=m*S,b.z=V*Z,u.push(b.x,b.y,b.z),d.push(0,S,0),A.x=Z*.5+.5,A.y=G*.5*S+.5,f.push(A.x,A.y),g++}for(let H=0;H<r;H++){const B=C+H,X=E+H;x===!0?h.push(X,X+1,B):h.push(X+1,X,B),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class To extends kn{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new To(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ra extends Bt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const v=[],_=p/i;let x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const A=C/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(A+x,1-_),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const _=h[p][v+1],x=h[p][v],C=h[p+1][v],A=h[p+1][v+1];(p!==0||a>0)&&f.push(_,x,A),(p!==i-1||l<Math.PI)&&f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(y,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ji extends Bt{constructor(e=new uy(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new ae;let h=new T;const u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function y(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),v(),p()}function m(_){h=e.getPointAt(_/t,h);const x=a.normals[_],C=a.binormals[_];for(let A=0;A<=r;A++){const b=A/r*Math.PI*2,P=Math.sin(b),V=-Math.cos(b);l.x=V*x.x+P*C.x,l.y=V*x.y+P*C.y,l.z=V*x.z+P*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=r;x++){const C=(r+1)*(_-1)+(x-1),A=(r+1)*_+(x-1),b=(r+1)*_+x,P=(r+1)*(_-1)+x;g.push(C,A,P),g.push(A,b,P)}}function v(){for(let _=0;_<=t;_++)for(let x=0;x<=r;x++)c.x=_/t,c.y=x/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ji(new $d[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class z2 extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gi extends Zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H_,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B2 extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const H0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class H2{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const G2=new H2;class _p{constructor(e){this.manager=e!==void 0?e:G2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_p.DEFAULT_MATERIAL_NAME="__DEFAULT";class V2 extends _p{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=H0.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=wo("img");function l(){h(),H0.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class W2 extends _p{constructor(e){super(e)}load(e,t,i,r){const s=new $t,a=new V2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class yp extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class X2 extends yp{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const nh=new it,G0=new T,V0=new T;class dy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new up,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;G0.setFromMatrixPosition(e.matrixWorld),t.position.copy(G0),V0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(V0),t.updateMatrixWorld(),nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const W0=new it,Da=new T,ih=new T;class j2 extends dy{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),i.position.copy(Da),ih.copy(i.position),ih.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ih),i.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),W0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(W0)}}class fy extends yp{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new j2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Y2 extends dy{constructor(){super(new hp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q2 extends yp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Y2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class py{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=X0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=X0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function X0(){return performance.now()}const j0=new it;class $2{constructor(e,t,i=0,r=1/0){this.ray=new lp(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return j0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(j0),this}intersectObject(e,t=!0,i=[]){return Kd(e,this,i,t),i.sort(Y0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kd(e[r],this,i,t);return i.sort(Y0),i}}function Y0(n,e){return n.distance-e.distance}function Kd(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Kd(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);const my={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class fa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const K2=new hp(-1,1,1,-1,0,1);class Z2 extends Bt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}}const J2=new Z2;class xp{constructor(e){this._mesh=new Ae(J2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,K2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Q2 extends fa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Eo.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new xp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class q0 extends fa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class eA extends fa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class tA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ae);this._width=i.width,this._height=i.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ii}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Q2(my),this.copyPass.material.blending=Di,this.clock=new py}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}q0!==void 0&&(a instanceof q0?i=!0:a instanceof eA&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nA extends fa{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const iA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class sa extends fa{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(s,a,{type:Ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new oi(s,a,{type:Ii});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new oi(s,a,{type:Ii});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=iA;this.highPassUniforms=Eo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=my;this.copyUniforms=Eo.clone(h.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:yo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new Do,this.fsQuad=new xp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ae(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}sa.BlurDirectionX=new ae(1,0);sa.BlurDirectionY=new ae(0,1);const rA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sA extends fa{constructor(){super();const e=rA;this.uniforms=Eo.clone(e.uniforms),this.material=new z2({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new xp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===b_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===A_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===C_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===R_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===P_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class aA extends ry{constructor(){super();const e=new vi;e.deleteAttribute("uv");const t=new gi({side:dn}),i=new gi,r=new fy(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ae(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Ae(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new Ae(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new Ae(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ae(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Ae(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ae(e,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ae(e,ys(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Ae(e,ys(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Ae(e,ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const y=new Ae(e,ys(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const m=new Ae(e,ys(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Ae(e,ys(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ys(n){const e=new Do;return e.color.setScalar(n),e}const Zd=[{name:"Nano",gallons:5,blurb:"A desktop world — a betta or a shrimp colony"},{name:"Small",gallons:20,blurb:"The classic first community tank"},{name:"Medium",gallons:40,blurb:"The beginner sweet spot — room for real schools"},{name:"Large",gallons:75,blurb:"Big schools, angelfish, a proper reef"},{name:"XL",gallons:120,blurb:"A show tank — tangs need this much room"}],Jd=5,gy=180;function Vc(n){const e=n*.003785,t=Math.min(1,(n-Jd)/(gy-Jd)),i=1.6+t*1.4,r=.85+t*.25,s=Math.cbrt(e/(i*r)),a={gallons:n,width:i*s,depth:r*s,height:s,capacity:0},o=a.width*a.depth;return a.capacity=Math.round(o*220+n*.45),a}function oA(n){let e=Zd[0];for(const t of Zd)Math.abs(t.gallons-n)<Math.abs(e.gallons-n)&&(e=t);return Math.abs(e.gallons-n)<=3?e.name:`${Math.round(n)} gal custom`}const Jn={uTime:{value:0},uCausticIntensity:{value:.9},uCausticScale:{value:3.2},uSurfaceY:{value:.5},uWaterColor:{value:new be("#1a4d66")},uSunTint:{value:new be("#fff6e0")}},vy=`
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
`,lA=`
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
`;function cA(){Be.fog_fragment=`
    #ifdef USE_FOG
      vec3 chan = vec3(1.75, 1.0, 0.68);
      vec3 att = exp(-vFogDepth * fogDensity * chan * 0.5);
      gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, att);
    #endif
  `}function Wc(n,e={}){const{caustics:t=!0,causticStrength:i=1,vertexHook:r="",vertexPars:s="",extraUniforms:a={}}=e,o=`uw|${t?1:0}|${i}|${s}|${r}`;n.customProgramCacheKey=()=>o,n.onBeforeCompile=l=>{Object.assign(l.uniforms,Jn,a),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
${lA}`).replace("vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;",`
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
varying vec3 vCausticWorld;`))},n.needsUpdate=!0}function Qd(){return window.__NATIVE_IOS__===!0}function _y(n){const e=window.webkit?.messageHandlers?.native;return e?(e.postMessage(n),!0):!1}function uA(n){return _y({type:"share",url:n})}function hA(n){return _y({type:"saveImage",dataUrl:n})}function dA(){window.__AQUARIUM_READY__=!0}const Ia={low:{tier:"low",pixelRatioCap:1,bloom:!1,godRayCount:0,snowCount:120,bubbleCount:40,maxFish:60,causticStrength:.8,antialias:!1},medium:{tier:"medium",pixelRatioCap:1.25,bloom:!1,godRayCount:5,snowCount:300,bubbleCount:80,maxFish:120,causticStrength:1,antialias:!0},high:{tier:"high",pixelRatioCap:1.75,bloom:!0,godRayCount:9,snowCount:700,bubbleCount:140,maxFish:220,causticStrength:1,antialias:!0},ultra:{tier:"ultra",pixelRatioCap:2,bloom:!0,godRayCount:14,snowCount:1400,bubbleCount:220,maxFish:400,causticStrength:1.1,antialias:!0}};function $0(n){try{const e=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),t=navigator.hardwareConcurrency??4;let i="";if(n){const r=n.getContext(),s=r.getExtension("WEBGL_debug_renderer_info");s&&(i=String(r.getParameter(s.UNMASKED_RENDERER_WEBGL)).toLowerCase())}return e?/apple/.test(i)?"medium":"low":/(rtx|radeon rx|apple m[1-9])/i.test(i)?t>=8?"ultra":"high":/(intel|uhd|iris)/.test(i)?"medium":t>=8?"high":"medium"}catch{return"medium"}}const K0=new T;class fA{constructor(e,t){Y(this,"camera");Y(this,"mode","orbit");Y(this,"reducedMotion",!1);Y(this,"theta",0);Y(this,"phi",Math.PI/2.2);Y(this,"radius",1.4);Y(this,"tTheta",0);Y(this,"tPhi",Math.PI/2.2);Y(this,"tRadius",1.4);Y(this,"lookAt",new T);Y(this,"tLookAt",new T);Y(this,"dragging",!1);Y(this,"lastX",0);Y(this,"lastY",0);Y(this,"idleTime",0);Y(this,"pinchDist",0);Y(this,"minR",.4);Y(this,"maxR",4);Y(this,"cineT",0);Y(this,"followTarget",null);Y(this,"lastPointerTravel",0);Y(this,"onDown",e=>{e.button===0&&(this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY,this.lastPointerTravel=0,this.idleTime=0)});Y(this,"onMove",e=>{if(!this.dragging)return;const t=e.clientX-this.lastX,i=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.lastPointerTravel+=Math.abs(t)+Math.abs(i),this.mode!=="still"&&(this.tTheta-=t*.005,this.tPhi=Fe.clamp(this.tPhi-i*.004,.9,2),(this.mode==="cinematic"||this.mode==="follow")&&(this.mode="orbit"),this.idleTime=0)});Y(this,"onUp",()=>{this.dragging=!1});Y(this,"onWheel",e=>{e.preventDefault(),this.tRadius=Fe.clamp(this.tRadius*(1+Math.sign(e.deltaY)*.09),this.minR,this.maxR),this.idleTime=0});Y(this,"onTouchStart",e=>{e.touches.length===2&&(this.pinchDist=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY))});Y(this,"onTouchMove",e=>{if(e.touches.length===2){e.preventDefault();const t=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);this.pinchDist>0&&(this.tRadius=Fe.clamp(this.tRadius*(this.pinchDist/t),this.minR,this.maxR)),this.pinchDist=t}});this.dom=e,this.camera=new Rn(46,t,.01,60),e.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("touchstart",this.onTouchStart,{passive:!0}),e.addEventListener("touchmove",this.onTouchMove,{passive:!1})}dispose(){this.dom.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),this.dom.removeEventListener("wheel",this.onWheel),this.dom.removeEventListener("touchstart",this.onTouchStart),this.dom.removeEventListener("touchmove",this.onTouchMove)}frameTank(e,t,i){this.tLookAt.set(0,i,0),this.lookAt.copy(this.tLookAt),this.tRadius=Math.max(.5,e*2.6),this.radius=this.tRadius*1.05,this.minR=Math.max(.18,e*.5),this.maxR=e*6+1,this.tTheta=this.theta=0,this.tPhi=this.phi=Math.PI/2.14}setMode(e){this.mode=e,this.cineT=0}update(e){const t=(s,a,o)=>Fe.damp(s,a,o,e);this.idleTime+=e;const i=this.reducedMotion?.3:1;if(this.mode==="cinematic"?(this.cineT+=e*.05*i,this.tTheta=Math.sin(this.cineT)*.55,this.tPhi=Math.PI/2.15+Math.sin(this.cineT*.7)*.1,this.tRadius=Fe.clamp(this.tRadius,this.minR,this.maxR),this.tRadius+=Math.sin(this.cineT*.43)*e*.02):this.mode==="orbit"&&this.idleTime>14&&!this.dragging&&(this.tTheta+=e*.012*i),this.mode==="follow"&&this.followTarget){const s=this.followTarget();s&&(this.tLookAt.copy(s),this.tRadius=Fe.clamp(this.tRadius,this.minR,this.maxR*.4))}this.theta=t(this.theta,this.tTheta,3),this.phi=t(this.phi,this.tPhi,3),this.radius=t(this.radius,this.tRadius,3),this.lookAt.x=t(this.lookAt.x,this.tLookAt.x,2.5),this.lookAt.y=t(this.lookAt.y,this.tLookAt.y,2.5),this.lookAt.z=t(this.lookAt.z,this.tLookAt.z,2.5);const r=Math.sin(this.phi);this.camera.position.set(this.lookAt.x+this.radius*r*Math.sin(this.theta),this.lookAt.y+this.radius*Math.cos(this.phi),this.lookAt.z+this.radius*r*Math.cos(this.theta)),K0.copy(this.lookAt),this.camera.lookAt(K0)}releaseFollow(e){this.tLookAt.set(0,e,0),this.followTarget=null}lockFrontView(e,t,i,r,s=1,a=1.04){const o=Math.tan(Fe.degToRad(this.camera.fov/2)),l=Math.min(t/o,e/(o*this.camera.aspect))/a,c=Fe.lerp(i,-i,Fe.clamp(s,0,1)),h=Math.max(l+c,i*1.06);this.mode="still",this.tLookAt.set(0,r,0),this.lookAt.copy(this.tLookAt),this.tTheta=this.theta=0,this.tPhi=this.phi=Math.PI/2,this.minR=Math.min(this.minR,h),this.tRadius=this.radius=h}}const rh=new T;class pA{constructor(){Y(this,"jetOrigin",new T);Y(this,"jetDir",new T(1,-.15,.2).normalize());Y(this,"jetStrength",.16);Y(this,"ambient",.02);Y(this,"time",0)}setup(e,t,i){this.jetOrigin.set(-e*.46,t*.82,-i*.3),this.jetDir.set(1,-.18,.35).normalize(),this.jetStrength=.1+e*.06}sample(e,t){rh.copy(e).sub(this.jetOrigin);const i=rh.dot(this.jetDir);if(t.set(0,0,0),i>0){const s=Math.sqrt(Math.max(0,rh.lengthSq()-i*i)),a=.08+i*.45,o=Math.exp(-i*1.6),l=Math.exp(-(s*s)/(a*a));t.copy(this.jetDir).multiplyScalar(this.jetStrength*o*l)}const r=this.time*.3;return t.x+=Math.sin(e.y*3.1+r+e.z*2)*this.ambient,t.y+=Math.sin(e.x*2.3+r*1.3)*this.ambient*.35,t.z+=Math.cos(e.x*2.7-r+e.y*1.7)*this.ambient,t}}function Yr(n,e){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");if(!i)throw new Error("2D canvas unavailable — cannot generate textures");return[t,i]}function Sp(n,e=1){const t=new Io(n);return t.wrapS=t.wrapT=xo,t.repeat.set(e,e),t.colorSpace=un,t.anisotropy=4,t}const Re=(n,e)=>n+Math.random()*(e-n);function mA(n){const[e,t]=Yr(512,512),[i,r]=Yr(512,512),a={sand:{bg:"#c8b48c",grains:["#d8c49c","#b8a47c","#e0d0ac","#a89468","#d0bc94"],grainSize:[.6,1.8],count:26e3},blacksand:{bg:"#26262a",grains:["#3a3a40","#1a1a1e","#4a4a52","#2e2e34","#565660"],grainSize:[.6,1.8],count:26e3},gravel:{bg:"#8a7a66",grains:["#a89880","#6a5c4c","#b0a088","#7c6e5c","#948470","#5c5044"],grainSize:[3,9],count:3200},crushedcoral:{bg:"#ddd6c8",grains:["#f0eadc","#c8c0b0","#e8d8c8","#f4f0e4","#d0c4ae","#e8c8c0"],grainSize:[2,6],count:5200}}[n];t.fillStyle=a.bg,t.fillRect(0,0,512,512),r.fillStyle="#808080",r.fillRect(0,0,512,512);for(let l=0;l<a.count;l++){const c=Math.random()*512,h=Math.random()*512,u=Re(a.grainSize[0],a.grainSize[1]);t.fillStyle=a.grains[Math.floor(Math.random()*a.grains.length)],t.beginPath(),t.ellipse(c,h,u,u*Re(.7,1),Re(0,Math.PI),0,Math.PI*2),t.fill();const d=Math.floor(Re(120,200));r.fillStyle=`rgb(${d},${d},${d})`,r.beginPath(),r.arc(c-u*.2,h-u*.2,u*.8,0,Math.PI*2),r.fill();const f=Math.floor(Re(40,90));r.fillStyle=`rgb(${f},${f},${f})`,r.beginPath(),r.arc(c+u*.25,h+u*.25,u*.55,0,Math.PI*2),r.fill()}const o=new Io(i);return o.wrapS=o.wrapT=xo,o.repeat.set(3,3),{map:Sp(e,3),bumpMap:o,color:a.bg}}function gA(n,e){const[t,i]=Yr(1024,512),r=i.createLinearGradient(0,0,0,512),s=(o,l,c)=>{i.save(),i.filter=`blur(${l}px)`,i.fillStyle=o,c(),i.restore()};switch(n){case"black":i.fillStyle="#050608",i.fillRect(0,0,1024,512);break;case"deepblue":r.addColorStop(0,"#0a2c4a"),r.addColorStop(1,"#04121f"),i.fillStyle=r,i.fillRect(0,0,1024,512);break;case"natural":{r.addColorStop(0,e==="saltwater"?"#1a5a7a":"#3a6a5a"),r.addColorStop(1,e==="saltwater"?"#0a2a3e":"#16302a"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let o=0;o<7;o++)s(`rgba(10,25,25,${Re(.25,.5)})`,18,()=>{i.beginPath(),i.ellipse(Re(0,1024),512-Re(0,60),Re(80,220),Re(60,160),0,Math.PI,0),i.fill()});break}case"planted":{r.addColorStop(0,"#2e5a3a"),r.addColorStop(1,"#122616"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let o=0;o<40;o++){const l=Re(0,1024),c=Re(8,26),h=Re(160,420);s(`rgba(${Math.floor(Re(10,40))},${Math.floor(Re(50,95))},${Math.floor(Re(15,45))},${Re(.3,.65)})`,10,()=>{i.beginPath(),i.ellipse(l,512-h/2,c,h/2,Re(-.12,.12),0,Math.PI*2),i.fill()})}break}case"reef":{r.addColorStop(0,"#2a7ab0"),r.addColorStop(1,"#0a2440"),i.fillStyle=r,i.fillRect(0,0,1024,512);for(let o=0;o<10;o++)s(`rgba(15,30,50,${Re(.3,.55)})`,14,()=>{const l=Re(0,1024),c=512-Re(0,40);i.beginPath(),i.ellipse(l,c,Re(60,160),Re(70,200),0,Math.PI,0),i.fill();for(let h=0;h<5;h++)i.fillRect(l+Re(-60,60),c-Re(120,240),Re(6,14),Re(60,140))});break}}const a=new Io(t);return a.colorSpace=un,a}function vA(n,e){const[r,s]=Yr(256,128),a=s.createLinearGradient(0,128,0,0);a.addColorStop(0,n.belly),a.addColorStop(.45,n.base),a.addColorStop(1,n.back),s.fillStyle=a,s.fillRect(0,0,256,128),s.globalAlpha=.06,s.strokeStyle="#ffffff";for(let c=8;c<128;c+=7)for(let h=0;h<256;h+=9)s.beginPath(),s.arc(h+(c%14>7?4.5:0),c,4,Math.PI*.15,Math.PI*.85),s.stroke();s.globalAlpha=1;const o=n.patternParams??[];switch(n.pattern){case"hstripe":{const c=o[0]??1;for(let h=0;h<c;h++){const u=128*(.38+h*.18),d=s.createLinearGradient(0,u-9,0,u+9);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.5,n.patternColor),d.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=d,s.fillRect(0,u-9,256,18)}if(n.patternColor2&&c===1){const u=s.createLinearGradient(0,69.36,0,89.36);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,n.patternColor2),u.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=u,s.fillRect(256*(n.patternColor2===n.base?0:.35),79.36-10,256,20)}break}case"vbars":{const c=o[0]??4,h=o[1]??.7;for(let u=0;u<c;u++){const d=256*((u+.75)/(c+1)),f=256/(c+1)*.42*h,g=s.createLinearGradient(d-f,0,d+f,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.5,n.patternColor),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(d-f,0,f*2,128),n.patternColor2&&(s.strokeStyle=n.patternColor2,s.lineWidth=2.5,s.strokeRect(d-f*.55,-2,f*1.1,132))}break}case"spots":{const c=n.patternColor,h=n.patternColor2??n.patternColor;for(let u=0;u<26;u++)s.fillStyle=Math.random()<.5?c:h,s.globalAlpha=Re(.35,.8),s.beginPath(),s.arc(Re(256*.2,256),Re(0,128),Re(2,7),0,Math.PI*2),s.fill();s.globalAlpha=1;break}case"headpatch":{const c=o[0]??.3,h=o[1]??0,u=0,d=256*c,f=s.createLinearGradient(h>=0?u:256,0,h>=0?d:256-d,0);if(f.addColorStop(0,h===1?n.patternColor2??n.patternColor:n.patternColor),f.addColorStop(1,"rgba(0,0,0,0)"),h===1){const g=s.createLinearGradient(256*c,0,256,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(.5,n.patternColor2??"#f2c80a"),s.fillStyle=g,s.fillRect(256*c,0,256,128)}else if(h===-1){const g=s.createLinearGradient(102.4,0,256,0);g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,n.patternColor2??"#d82a10"),s.fillStyle=g,s.fillRect(0,0,256,128)}else if(s.fillStyle=f,s.fillRect(0,0,d,128),n.patternColor2&&n.patternColor2!=="#00000000")for(let g=0;g<3;g++)s.fillStyle=n.patternColor2,s.fillRect(256*(.86+g*.05),0,256*.024,128);break}case"lateralline":{const c=256*(o[0]??.45);s.fillStyle=n.patternColor,s.beginPath(),s.moveTo(c,128*.28),s.lineTo(256,128*.42),s.lineTo(256,128*.58),s.lineTo(c,128*.52),s.closePath(),s.fill();break}case"mottle":{for(let c=0;c<90;c++)s.fillStyle=n.patternColor,s.globalAlpha=Re(.15,.45),s.beginPath(),s.ellipse(Re(0,256),Re(0,128),Re(4,16),Re(3,9),Re(0,Math.PI),0,Math.PI*2),s.fill();s.globalAlpha=1;break}}s.strokeStyle="rgba(0,0,0,0.18)",s.lineWidth=3,s.beginPath(),s.arc(256*.16,128*.5,128*.32,-.9,.9),s.stroke();const l=new Io(r);return l.colorSpace=un,l.wrapS=l.wrapT=rr,l}function Z0(n,e,t=!1){const[i,r]=Yr(64,64),s=r.createRadialGradient(32,32,2,32,32,30);return t?(s.addColorStop(0,"rgba(255,255,255,0.05)"),s.addColorStop(.72,"rgba(255,255,255,0.10)"),s.addColorStop(.88,n),s.addColorStop(1,"rgba(255,255,255,0)")):(s.addColorStop(0,n),s.addColorStop(1,e)),r.fillStyle=s,r.fillRect(0,0,64,64),t&&(r.fillStyle="rgba(255,255,255,0.85)",r.beginPath(),r.ellipse(24,22,5,3.4,-.6,0,Math.PI*2),r.fill()),new Io(i)}function xs(){const[n,e]=Yr(256,256);e.fillStyle="#4a3826",e.fillRect(0,0,256,256);for(let t=0;t<60;t++){e.strokeStyle=`rgba(${Math.floor(Re(30,90))},${Math.floor(Re(22,60))},${Math.floor(Re(12,38))},${Re(.3,.7)})`,e.lineWidth=Re(1,4),e.beginPath();const i=Re(0,256);e.moveTo(0,i);for(let r=0;r<=256;r+=32)e.lineTo(r,i+Math.sin(r*.05+t)*Re(2,9));e.stroke()}return Sp(n,2)}function Na(n="#6a6a66"){const[e,t]=Yr(256,256);t.fillStyle=n,t.fillRect(0,0,256,256);for(let i=0;i<2200;i++){const r=Math.floor(Re(-28,28));t.fillStyle=`rgba(${128+r},${128+r},${124+r},${Re(.08,.3)})`,t.beginPath(),t.arc(Re(0,256),Re(0,256),Re(1,7),0,Math.PI*2),t.fill()}return Sp(e,2)}const J0={daylight:{sun:"#fff2dc",sunNight:"#5f7fb8",sunIntensity:2.6,hemi:"#a8d4e8",hemiIntensity:.55,fog:{fw:"#173f43",sw:"#0e3a55"},fogDensity:1,caustic:1,rayColor:"#cfe8ff"},warm:{sun:"#ffd9a8",sunNight:"#5f7fb8",sunIntensity:2.3,hemi:"#e0c8a0",hemiIntensity:.5,fog:{fw:"#2a3a2c",sw:"#1a3a48"},fogDensity:1.05,caustic:.9,rayColor:"#ffe8c0"},actinic:{sun:"#9cc4ff",sunNight:"#4a66a8",sunIntensity:2.4,hemi:"#6a9ae0",hemiIntensity:.6,fog:{fw:"#0e3050",sw:"#0a2c50"},fogDensity:.95,caustic:.85,rayColor:"#a8ccff"},blackwater:{sun:"#f0bf78",sunNight:"#54689a",sunIntensity:1.7,hemi:"#8a7a50",hemiIntensity:.35,fog:{fw:"#2e2410",sw:"#1a3040"},fogDensity:1.7,caustic:.55,rayColor:"#e8c890"}},_A=`
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
`,yA=`
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSky;
  uniform float uBright;
  ${vy}
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
`,xA=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,SA=`
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;
  uniform float uSeed;
  uniform vec3 uColor;
  ${vy}
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
`,Q0=`
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
`,eg=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    gl_FragColor = vec4(tex.rgb, tex.a * uOpacity * vFade);
  }
`;class MA{constructor(e){Y(this,"group",new ri);Y(this,"sun");Y(this,"hemi");Y(this,"fill");Y(this,"fog");Y(this,"surface",null);Y(this,"surfaceUniforms",null);Y(this,"rays",[]);Y(this,"snow",null);Y(this,"bubbles",null);Y(this,"bubbleUniforms",null);Y(this,"disposables",[]);Y(this,"mood",J0.daylight);Y(this,"water","freshwater");Y(this,"snowTex");Y(this,"bubbleTex");this.scene=e,e.add(this.group),this.sun=new q2("#fff2dc",2.6),this.sun.position.set(.4,2.5,.6),this.hemi=new X2("#a8d4e8","#3a3428",.55),this.fill=new fy("#88b8d8",.35,0,2),this.scene.add(this.sun,this.hemi,this.fill),this.fog=new fp("#173f43",.9),e.fog=this.fog,this.snowTex=Z0("rgba(255,255,255,0.75)","rgba(255,255,255,0)"),this.bubbleTex=Z0("rgba(220,240,255,0.9)","rgba(255,255,255,0)",!0)}rebuild(e,t,i,r,s,a,o){this.group.clear();for(const f of this.disposables)f.dispose();this.disposables=[],this.rays=[],this.mood=J0[s],this.water=t;const{halfW:l,halfD:c,height:h,floorY:u,surfaceY:d}=e;this.fill.position.set(0,d+.3,c*2),this.fog.density=this.mood.fogDensity*.3/Math.max(.35,l);{const f=mA(i),g=48,y=new ni(l*2,c*2,g,Math.round(g*(c/l)));y.rotateX(-Math.PI/2);const m=y.getAttribute("position");for(let _=0;_<m.count;_++){const x=m.getX(_),C=m.getZ(_);m.setY(_,Math.sin(x*9+2)*Math.cos(C*7)*.008+Math.sin(x*3.2)*.012)}y.computeVertexNormals();const p=new gi({map:f.map,bumpMap:f.bumpMap,bumpScale:.6,roughness:.95});Wc(p,{caustics:!0,causticStrength:1.9});const v=new Ae(y,p);v.position.y=u,this.group.add(v),this.disposables.push(y,p,f.map,f.bumpMap)}{const f=gA(r,t),g=new Do({map:f,fog:!0}),y=new Ae(new ni(l*2.06,h*1.15),g);y.position.set(0,u+h*.52,-c-.02),this.group.add(y),this.disposables.push(g,f,y.geometry)}{this.surfaceUniforms={uTime:Jn.uTime,uDeep:{value:new be(this.mood.fog[t==="saltwater"?"sw":"fw"])},uSky:{value:new be("#bfe4f8")},uBright:{value:1}};const f=new Ot({vertexShader:_A,fragmentShader:yA,uniforms:this.surfaceUniforms,transparent:!0,side:nn,depthWrite:!1});this.surface=new Ae(new ni(l*2,c*2,24,24),f),this.surface.rotation.x=-Math.PI/2,this.surface.position.y=d,this.surface.renderOrder=5,this.group.add(this.surface),this.disposables.push(f,this.surface.geometry)}{const f=new B2({color:"#cfe8ee",transparent:!0,opacity:.07,roughness:.04,metalness:0,envMapIntensity:1.2,side:nn,depthWrite:!1}),g=[[l*2,h*1.06,[0,u+h*.53,c],[0,0,0]],[l*2,h*1.06,[0,u+h*.53,-c],[0,Math.PI,0]],[c*2,h*1.06,[-l,u+h*.53,0],[0,Math.PI/2,0]],[c*2,h*1.06,[l,u+h*.53,0],[0,-Math.PI/2,0]]];for(const[C,A,b,P]of g){const V=new Ae(new ni(C,A),f);V.position.set(...b),V.rotation.set(...P),V.renderOrder=6,this.group.add(V),this.disposables.push(V.geometry)}this.disposables.push(f);const y=new gi({color:"#101418",roughness:.6}),m=Math.max(.006,l*.012),p=(C,A,b,P,V,S)=>{const E=new Ae(new vi(C,A,b),y);E.position.set(P,V,S),this.group.add(E),this.disposables.push(E.geometry)},v=u+h*.53,_=h*1.06;for(const[C,A]of[[-l,-c],[l,-c],[-l,c],[l,c]])p(m,_,m,C,v,A);for(const C of[u-.002,u+h*1.06-.004])p(l*2+m,m,m,0,C,c),p(l*2+m,m,m,0,C,-c),p(m,m,c*2+m,-l,C,0),p(m,m,c*2+m,l,C,0);this.disposables.push(y);const x=new Ae(new vi(l*2+.1,.05,c*2+.1),new gi({color:"#0a0c10",roughness:.4}));x.position.y=u-.045,this.group.add(x),this.disposables.push(x.geometry,x.material)}for(let f=0;f<a.godRayCount;f++){const g=.1+Math.random()*l*.5,y={uTime:Jn.uTime,uIntensity:{value:.3+Math.random()*.15},uSeed:{value:Math.random()},uColor:{value:new be(this.mood.rayColor)}},m=new Ot({vertexShader:xA,fragmentShader:SA,uniforms:y,transparent:!0,blending:yo,depthWrite:!1,side:nn}),p=new Ae(new ni(g,h*1.05),m);p.position.set((Math.random()-.5)*l*1.8,u+h*.52,(Math.random()-.5)*c*1.6),p.rotation.z=(Math.random()-.5)*.14,p.renderOrder=4,p.userData.driftSeed=Math.random()*100,this.rays.push(p),this.group.add(p),this.disposables.push(m,p.geometry)}if(a.snowCount>0){const f=a.snowCount,g=new Float32Array(f*3),y=new Float32Array(f);for(let v=0;v<f;v++)g[v*3]=(Math.random()-.5)*l*1.9,g[v*3+1]=Math.random()*h,g[v*3+2]=(Math.random()-.5)*c*1.9,y[v]=Math.random();const m=new Bt;m.setAttribute("position",new rn(g,3)),m.setAttribute("aSeed",new rn(y,1));const p=new Ot({vertexShader:Q0,fragmentShader:eg,uniforms:{uTime:Jn.uTime,uBounds:{value:new T(l,h,c)},uRise:{value:-.006},uSize:{value:1.6},uWobble:{value:.02},uMap:{value:this.snowTex},uOpacity:{value:.35}},transparent:!0,depthWrite:!1});this.snow=new O0(m,p),this.snow.position.y=u,this.snow.frustumCulled=!1,this.group.add(this.snow),this.disposables.push(m,p)}if(o&&a.bubbleCount>0){const f=a.bubbleCount,g=new Float32Array(f*3),y=new Float32Array(f);for(let v=0;v<f;v++)g[v*3]=o.x+(Math.random()-.5)*.02,g[v*3+1]=Math.random()*h,g[v*3+2]=o.z+(Math.random()-.5)*.02,y[v]=Math.random();const m=new Bt;m.setAttribute("position",new rn(g,3)),m.setAttribute("aSeed",new rn(y,1)),this.bubbleUniforms={uTime:Jn.uTime,uBounds:{value:new T(l,h*.98,c)},uRise:{value:.22},uSize:{value:2.4},uWobble:{value:.012},uMap:{value:this.bubbleTex},uOpacity:{value:.85}};const p=new Ot({vertexShader:Q0,fragmentShader:eg,uniforms:this.bubbleUniforms,transparent:!0,depthWrite:!1,blending:yo});this.bubbles=new O0(m,p),this.bubbles.position.y=u,this.bubbles.frustumCulled=!1,this.group.add(this.bubbles),this.disposables.push(m,p)}else this.bubbles=null}update(e,t){const i=this.mood,r=new be(i.sun).lerp(new be(i.sunNight),1-e);this.sun.color.copy(r),this.sun.intensity=Fe.lerp(.18,i.sunIntensity,e),this.hemi.color.set(i.hemi),this.hemi.intensity=Fe.lerp(.06,i.hemiIntensity,e),this.fill.intensity=Fe.lerp(.06,.35,e),Jn.uCausticIntensity.value=i.caustic*Fe.lerp(.12,1,e),Jn.uSunTint.value.copy(r);const s=new be(i.fog[this.water==="saltwater"?"sw":"fw"]);s.multiplyScalar(Fe.lerp(.18,1,e)),this.fog.color.copy(s),this.surfaceUniforms&&(this.surfaceUniforms.uBright.value=Fe.lerp(.12,1,e),this.surfaceUniforms.uBright.value=Fe.lerp(.12,1,e),this.surfaceUniforms.uDeep.value.copy(s));const a=Jn.uTime.value;for(const o of this.rays){const l=o.userData.driftSeed;o.position.x+=Math.sin(a*.05+l)*4e-4,o.rotation.y=Math.atan2(t.position.x-o.position.x,t.position.z-o.position.z);const c=o.material;c.uniforms.uIntensity.value=(.3+.14*Math.sin(l*40))*e*e}}}function Al(n,e,t=1){const i=n.getAttribute("position"),r=new T;for(let s=0;s<i.count;s++){r.set(i.getX(s),i.getY(s),i.getZ(s));const a=Math.sin(r.x*12.3*t+r.y*7.7)*Math.cos(r.z*9.1-r.y*5.3)*.5+Math.sin(r.x*27.1+r.z*19.7)*.25;r.multiplyScalar(1+a*e),i.setXYZ(s,r.x,r.y,r.z)}return n.computeVertexNormals(),n}class wA{constructor(e){Y(this,"group",new ri);Y(this,"materials",[]);e.add(this.group)}mat(e){const t=new gi(e);return Wc(t,{caustics:!0,causticStrength:1}),this.materials.push(t),t}rebuild(e,t){this.group.clear();for(const l of this.materials)l.dispose();this.materials=[];const i={obstacles:[],shelters:[],anchors:[],airstone:null},{halfW:r,halfD:s,floorY:a}=t,o=Math.min(1.2,r*1.6);for(const l of e)switch(l){case"driftwood":{const c=this.mat({map:xs(),color:"#8a6844",roughness:.85}),h=new Dr([new T(-r*.7,a,-s*.2),new T(-r*.3,a+t.height*.35,0),new T(r*.15,a+t.height*.55,s*.25)]),u=new Ae(new Ji(h,16,.02*o+.008,7),c);this.group.add(u);for(let f=0;f<2;f++){const g=.35+f*.3,y=h.getPoint(g),m=new Dr([y,y.clone().add(new T((f?1:-1)*r*.2,t.height*.18,(f?-1:1)*s*.25))]);this.group.add(new Ae(new Ji(m,8,.012*o+.004,6),c))}const d=h.getPoint(.5);i.obstacles.push({pos:d,radius:.1*o}),i.shelters.push(new T(-r*.5,a+.02,-s*.1)),i.anchors.push(h.getPoint(.3),h.getPoint(.7));break}case"spider-wood":{const c=this.mat({map:xs(),color:"#6a5236",roughness:.9}),h=r*.35,u=-s*.1,d=new T(h,a+.01,u),f=d.clone().add(new T(.02*o,t.height*.2,.01*o));this.group.add(new Ae(new Ji(new Dr([d,d.clone().add(new T(0,t.height*.09,0)),f]),8,.014*o+.005,6),c));const g=6;for(let y=0;y<g;y++){const m=y/g*Math.PI*2+.5,p=.12*o+.04,v=(.22+y%3*.06)*t.height,_=new T(h+Math.cos(m)*p,a+v,u+Math.sin(m)*p),x=new T((f.x+_.x)/2+Math.cos(m)*.02,(f.y+_.y)/2,(f.z+_.z)/2+Math.sin(m)*.02);this.group.add(new Ae(new Ji(new Dr([f,x,_]),8,.007*o+.002,5),c)),i.anchors.push(_)}i.obstacles.push({pos:f.clone(),radius:.07*o}),i.shelters.push(d.clone().add(new T(0,.02,.03)));break}case"driftwood-stump":{const c=this.mat({map:xs(),color:"#5f4a30",roughness:.92}),h=-r*.35,u=s*.25,d=.06*o+.02,f=.09*o+.03,g=new Ae(Al(new kn(d*.85,d,f,10,2),.12,3),c);g.position.set(h,a+f/2,u),this.group.add(g);const y=5;for(let m=0;m<y;m++){const p=m/y*Math.PI*2+.3,v=d+.08*o+.03,_=new T(h+Math.cos(p)*d*.8,a+f*.3,u+Math.sin(p)*d*.8),x=new T(h+Math.cos(p)*v,a+.008,u+Math.sin(p)*v),C=new T((_.x+x.x)/2,a+f*.15,(_.z+x.z)/2);this.group.add(new Ae(new Ji(new Dr([_,C,x]),8,.01*o+.003,5),c))}i.obstacles.push({pos:g.position.clone(),radius:d*1.3}),i.shelters.push(new T(h,a+.02,u+d+.03)),i.anchors.push(g.position.clone().add(new T(0,f/2,0)));break}case"hollow-log":{const c=this.mat({map:xs(),color:"#7a5c3a",roughness:.9,side:nn}),h=.06*o+.03,u=.26*o+.08,d=r*.1,f=s*.2,g=new Ae(new kn(h,h*1.05,u,14,1,!0),c);g.rotation.z=Math.PI/2,g.rotation.y=.2,g.position.set(d,a+h*.85,f),this.group.add(g);for(const[y,m,p]of[[-.06,.02,.6],[.05,-.03,-.8]]){const v=new Ae(new kn(.008,.012,.05*o+.02,6),c);v.position.set(d+y*o,a+h*1.2,f+m*o),v.rotation.set(.4,0,p),this.group.add(v)}i.obstacles.push({pos:g.position.clone(),radius:h*1.15}),i.shelters.push(g.position.clone().setY(a+h*.6)),i.anchors.push(g.position.clone().add(new T(0,h,0)));break}case"log-arch":{const c=this.mat({map:xs(),color:"#6f5232",roughness:.9,side:nn}),h=-r*.2,u=-s*.05,d=.05*o+.022,f=.14*o+.05,g=.1*o+.05,y=s*.05,m=new Dr([new T(h-f,a+d*.9,u),new T(h-f*.4,a+g,u+y),new T(h+f*.4,a+g,u-y),new T(h+f,a+d*.9,u)]);this.group.add(new Ae(new Ji(m,24,d,12,!1),c)),i.obstacles.push({pos:m.getPoint(.06),radius:d*1.1}),i.obstacles.push({pos:m.getPoint(.94),radius:d*1.1}),i.shelters.push(m.getPoint(.5).setY(a+d*.7)),i.anchors.push(m.getPoint(.5));break}case"river-rocks":{const c=this.mat({map:Na("#5e5852"),roughness:.9});for(let h=0;h<5;h++){const u=(.03+Math.random()*.05)*o+.015,d=Al(new ra(u,10,8),.25,h+2),f=new Ae(d,c);f.position.set(r*(.15+Math.random()*.5),a+u*.55,s*(Math.random()*.8-.5)),f.rotation.set(Math.random(),Math.random()*Math.PI,Math.random()),this.group.add(f),i.obstacles.push({pos:f.position.clone(),radius:u*1.1}),i.anchors.push(f.position.clone().add(new T(0,u*.8,0)))}break}case"slate-stack":{const c=this.mat({map:Na("#565a60"),roughness:.8}),h=-r*.45,u=s*.15;let d=a;for(let f=0;f<3;f++){const g=(.16-f*.03)*o+.04,y=(.12-f*.02)*o+.03,m=.014*o+.006,p=new Ae(Al(new vi(g,m,y,4,1,4),.08,f+5),c);p.position.set(h+(Math.random()-.5)*.03,d+m/2+(f>0?.02:0),u+(Math.random()-.5)*.03),p.rotation.y=Math.random()*.6,this.group.add(p),d=p.position.y+m/2}i.obstacles.push({pos:new T(h,d,u),radius:.12*o}),i.shelters.push(new T(h,a+.025,u+.05)),i.anchors.push(new T(h,d+.01,u));break}case"reef-rock":{const c=this.mat({map:Na("#6a625a"),roughness:.95});for(let h=0;h<7;h++){const u=(.06+Math.random()*.09)*o+.02,d=Al(new ra(u,12,9),.45,h*1.7+1),f=new Ae(d,c),g=-r*.8+h/6*r*1.6;f.position.set(g+(Math.random()-.5)*.06,a+u*(.4+Math.random()*.5),-s*(.35+Math.random()*.3)),f.rotation.set(Math.random(),Math.random()*Math.PI,Math.random()),this.group.add(f),i.obstacles.push({pos:f.position.clone(),radius:u}),i.shelters.push(f.position.clone().add(new T(.03,u*.3,u*.9))),i.anchors.push(f.position.clone().add(new T((Math.random()-.5)*u,u*.85,(Math.random()-.5)*u*.5)))}break}case"sunken-ship":{const c=this.mat({map:xs(),color:"#7a6a52",roughness:.9}),h=new ri,u=new Ae(new vp(.045*o+.02,.22*o+.06,4,8),c);u.scale.set(1,.7,1.4),u.rotation.z=Math.PI/2,h.add(u);const d=new Ae(new vi(.07*o+.02,.04*o+.01,.05*o+.015),c);d.position.y=.045*o+.015,h.add(d);for(const f of[-.07,.05]){const g=new Ae(new kn(.004,.006,.18*o+.05,5),c);g.position.set(f*o,.1*o+.03,0),g.rotation.z=.15,h.add(g)}h.position.set(r*.45,a+.03*o,-s*.15),h.rotation.set(.18,-.5,-.28),this.group.add(h),i.obstacles.push({pos:h.position.clone(),radius:.16*o}),i.shelters.push(h.position.clone().add(new T(0,.02,.08)));break}case"castle":{const c=this.mat({map:Na("#8a8288"),roughness:.85}),h=new ri,u=new Ae(new kn(.05*o+.015,.06*o+.02,.16*o+.05,8),c);u.position.y=.08*o+.025,h.add(u);const d=new Ae(new To(.055*o+.018,.06*o+.02,8),this.mat({color:"#5a4a7a",roughness:.7}));d.position.y=.19*o+.06,h.add(d);for(const[f,g]of[[-.07,.04],[.07,.04],[0,-.07]]){const y=new Ae(new kn(.02*o+.008,.025*o+.01,.1*o+.03,7),c);y.position.set(f*o,.05*o+.015,g*o),h.add(y);const m=new Ae(new To(.024*o+.009,.035*o+.012,7),d.material);m.position.set(f*o,.115*o+.038,g*o),h.add(m)}h.position.set(-r*.15,a,s*.3),h.rotation.y=.4,this.group.add(h),i.obstacles.push({pos:h.position.clone().add(new T(0,.08*o,0)),radius:.13*o}),i.shelters.push(h.position.clone().add(new T(.06*o,.02,.03)));break}case"airstone":{const c=this.mat({map:Na("#b8b4ac"),roughness:1}),h=new Ae(new kn(.016,.02,.02,10),c);h.position.set(r*.72,a+.01,-s*.55),this.group.add(h),i.airstone=h.position.clone();break}}return i}}const yy=[{id:"amazon-sword",name:"Amazon Sword",scientific:"Echinodorus grisebachii",water:"freshwater",kind:"rosette",heightM:.3,colors:["#2e6b2e","#3f8a38","#357a30"],careLevel:"easy",info:"The classic background centerpiece — broad blades that arc and sway in the filter current."},{id:"vallisneria",name:"Vallisneria",scientific:"Vallisneria spiralis",water:"freshwater",kind:"stem",heightM:.42,colors:["#4a9a3a","#5cb04a","#3a8a30"],careLevel:"easy",info:"Tall grass-like ribbons that reach the surface and trail along it, moving like kelp."},{id:"java-fern",name:"Java Fern",scientific:"Microsorum pteropus",water:"freshwater",kind:"rosette",heightM:.2,colors:["#2a5c2a","#356e30","#244f24"],careLevel:"easy",info:"Leathery dark leaves grown attached to wood or rock — never buried. Nearly indestructible."},{id:"anubias",name:"Anubias Nana",scientific:"Anubias barteri var. nana",water:"freshwater",kind:"rosette",heightM:.1,colors:["#1e4a1e","#2a5c26","#183f18"],careLevel:"easy",info:"Thick, glossy round leaves on hardscape. Slow-growing and stoic — it barely sways."},{id:"cryptocoryne",name:"Cryptocoryne",scientific:"Cryptocoryne wendtii",water:"freshwater",kind:"rosette",heightM:.14,colors:["#5a4a2a","#6e5230","#4a6a30"],careLevel:"easy",info:"Bronze-green ruffled leaves for the midground. Famous for melting when moved, then regrowing."},{id:"java-moss",name:"Java Moss",scientific:"Taxiphyllum barbieri",water:"freshwater",kind:"moss",heightM:.04,colors:["#3a7a2a","#4a9036","#2e6822"],careLevel:"easy",info:"A soft green cushion over wood and stone; shrimp graze it all day."},{id:"dwarf-hairgrass",name:"Dwarf Hairgrass",scientific:"Eleocharis parvula",water:"freshwater",kind:"carpet",heightM:.05,colors:["#5ab040","#6ec850","#4a9a34"],careLevel:"moderate",info:"A lawn of fine grass blades that ripples in waves when the current passes over it."},{id:"frogbit",name:"Amazon Frogbit",scientific:"Limnobium laevigatum",water:"freshwater",kind:"floating",heightM:.08,colors:["#4a9a3a","#5cb44a"],careLevel:"easy",info:"Floating rosettes with long dangling roots — dapples the light below and shelters shy fish."},{id:"pulsing-xenia",name:"Pulsing Xenia",scientific:"Xenia elongata",water:"saltwater",kind:"xenia",heightM:.09,colors:["#c8b8d8","#b8a8cc","#d8cce4"],careLevel:"easy",info:"Colonies of feathery hands that open and close in a slow, hypnotic rhythm all their own."},{id:"kenya-tree",name:"Kenya Tree Coral",scientific:"Capnella imbricata",water:"saltwater",kind:"softcoral",heightM:.14,colors:["#c8a888","#b89878","#d8b898"],careLevel:"easy",info:"A soft, branching tree that leans and rocks with every push of the flow."},{id:"toadstool",name:"Toadstool Leather",scientific:"Sarcophyton sp.",water:"saltwater",kind:"softcoral",heightM:.1,colors:["#c8b878","#d8c888","#b8a868"],careLevel:"easy",info:"A mushroom-shaped leather coral whose cap of tiny polyps shivers in the current."},{id:"zoanthids",name:"Zoanthid Garden",scientific:"Zoanthus sp.",water:"saltwater",kind:"zoa",heightM:.025,colors:["#e85a2a","#3ab8a8","#e8c82a","#c84ae0"],careLevel:"easy",info:"A mat of small neon disks, each ringed with tentacles — a coral flower bed."},{id:"hammer-coral",name:"Hammer Coral",scientific:"Euphyllia ancora",water:"saltwater",kind:"lps",heightM:.08,colors:["#4ac8a8","#5ad8b8","#3ab090"],careLevel:"moderate",info:"Fleshy hammer-tipped tentacles that flow like long grass in wind — the definition of reef motion."},{id:"bubble-anemone",name:"Bubble-Tip Anemone",scientific:"Entacmaea quadricolor",water:"saltwater",kind:"anemone",heightM:.09,colors:["#48b088","#e0685a","#58c098"],careLevel:"moderate",info:"The classic clownfish host. Its bulbed tentacles drift and curl with the flow."},{id:"acropora",name:"Acropora Colony",scientific:"Acropora sp.",water:"saltwater",kind:"hardcoral",heightM:.12,colors:["#8a5ac8","#5a8ac8","#c85a8a"],careLevel:"advanced",info:"The reef-builder itself — a rigid branching stony coral. It doesn’t sway; the fish sway around it."},{id:"brain-coral",name:"Brain Coral",scientific:"Trachyphyllia geoffroyi",water:"saltwater",kind:"hardcoral",heightM:.05,colors:["#c8683a","#3a9a7a","#c8a83a"],careLevel:"moderate",info:"A folded, fleshy dome glowing in reds and greens. Rigid skeleton, gently inflating tissue."},{id:"montipora-plate",name:"Montipora Plate",scientific:"Montipora capricornis",water:"saltwater",kind:"hardcoral",heightM:.06,colors:["#e07a3a","#d86a8a"],careLevel:"advanced",info:"Whorled plates like a stone rose, growing in overlapping shelves."}],ef=new Map(yy.map(n=>[n.id,n])),xy=n=>yy.filter(e=>e.water===n),Ge=new it,Nt=new be;class EA{constructor(){Y(this,"positions",[]);Y(this,"normals",[]);Y(this,"colors",[]);Y(this,"sway",[]);Y(this,"phase",[]);Y(this,"index",[]);Y(this,"offset",0)}add(e,t,i,r,s){const a=e.getAttribute("position"),o=e.getAttribute("normal"),l=new He().getNormalMatrix(t),c=new T,h=new T;for(let d=0;d<a.count;d++){const f=a.getX(d),g=a.getY(d),y=a.getZ(d);c.set(f,g,y).applyMatrix4(t),h.set(o.getX(d),o.getY(d),o.getZ(d)).applyMatrix3(l).normalize(),this.positions.push(c.x,c.y,c.z),this.normals.push(h.x,h.y,h.z),this.colors.push(i.r,i.g,i.b),this.sway.push(r(f,g,y)),this.phase.push(s)}const u=e.getIndex();if(u)for(let d=0;d<u.count;d++)this.index.push(u.getX(d)+this.offset);else for(let d=0;d<a.count;d++)this.index.push(d+this.offset);this.offset+=a.count}build(){const e=new Bt;return e.setAttribute("position",new Ke(this.positions,3)),e.setAttribute("normal",new Ke(this.normals,3)),e.setAttribute("color",new Ke(this.colors,3)),e.setAttribute("aSway",new Ke(this.sway,1)),e.setAttribute("aPhase",new Ke(this.phase,1)),e.setIndex(this.index),e}}const sh=new ni(1,1,1,6),ah=(()=>{const n=new ni(1,1,2,7),e=n.getAttribute("position");for(let t=0;t<e.count;t++){const i=e.getY(t)+.5;e.setX(t,e.getX(t)*Math.sin(Math.PI*Math.min(1,i*1.05)))}return n.computeVertexNormals(),n})(),oh=new To(.5,1,5,3),Cr=new ra(.5,7,5),lh=new kn(.5,.6,1,6,2),TA=`
  attribute float aSway;
  attribute float aPhase;
  uniform float uSwayAmp;
  uniform float uSwayFreq;
  uniform float uPulse;      // >0 only for self-pulsing corals (Xenia)
  uniform vec2 uLean;        // static lean from the filter jet at this cluster
`,bA=`
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
`,AA={stem:{swayAmp:.035,swayFreq:.9,pulse:0},rosette:{swayAmp:.02,swayFreq:.8,pulse:0},carpet:{swayAmp:.008,swayFreq:1.6,pulse:0},moss:{swayAmp:.004,swayFreq:2.2,pulse:0},floating:{swayAmp:.02,swayFreq:.7,pulse:0},softcoral:{swayAmp:.02,swayFreq:.7,pulse:0},xenia:{swayAmp:.008,swayFreq:.9,pulse:.02},lps:{swayAmp:.028,swayFreq:1.1,pulse:0},anemone:{swayAmp:.022,swayFreq:.9,pulse:.004},zoa:{swayAmp:.006,swayFreq:1.4,pulse:0},hardcoral:{swayAmp:0,swayFreq:0,pulse:0}};class CA{constructor(e){Y(this,"group",new ri);Y(this,"meshes",[]);e.add(this.group)}rebuild(e,t,i,r){for(const o of this.meshes)this.group.remove(o),o.geometry.dispose(),o.material.dispose();this.meshes=[];const s=[];let a=0;for(const[o,l]of Object.entries(e)){const c=ef.get(o);if(!c||l<=0)continue;const h=AA[c.kind],u=new EA;for(let p=0;p<l;p++){let v,_,x=t.floorY;const C=["softcoral","xenia","lps","anemone","zoa","hardcoral"].includes(c.kind),A=["java-fern","anubias","java-moss"].includes(c.id);if(c.kind==="floating")v=(Math.random()-.5)*t.halfW*1.7,_=(Math.random()-.5)*t.halfD*1.5,x=t.surfaceY;else if((C||A)&&r.length>0){const P=r[a++%r.length];v=P.x+(Math.random()-.5)*.06,_=P.z+(Math.random()-.5)*.06,x=P.y}else c.kind==="stem"||c.kind==="rosette"?(v=(Math.random()-.5)*t.halfW*1.8,_=-t.halfD*(.25+Math.random()*.65)):(v=(Math.random()-.5)*t.halfW*1.7,_=t.halfD*(Math.random()*1.4-.55));const b=new T(v,x,_);this.buildOne(c,u,b,t),C&&s.push({pos:b.clone().add(new T(0,c.heightM*.5,0)),radius:c.heightM*.7})}const d=u.build(),f=new gi({vertexColors:!0,roughness:.75,metalness:0,side:nn});d.computeBoundingSphere();const g=d.boundingSphere?.center??new T,y=i.sample(g,new T);Wc(f,{caustics:!0,causticStrength:.85,vertexPars:TA,vertexHook:bA,extraUniforms:{uSwayAmp:{value:h.swayAmp},uSwayFreq:{value:h.swayFreq},uPulse:{value:h.pulse},uLean:{value:new ae(y.x*.5,y.z*.5)}}});const m=new Ae(d,f);m.frustumCulled=!1,this.group.add(m),this.meshes.push(m)}return{obstacles:s}}buildOne(e,t,i,r){const s=r.surfaceY-r.floorY,a=Math.min(e.heightM*(.75+Math.random()*.5),s*.88),o=e.colors.map(u=>new be(u).multiplyScalar(.72)),l=()=>o[Math.floor(Math.random()*o.length)],c=Math.random(),h=(u,d)=>Fe.clamp(d+.5,0,1);switch(e.kind){case"stem":{const u=5+Math.floor(Math.random()*5);for(let d=0;d<u;d++){const f=a*(.7+Math.random()*.5);Ge.compose(new T(i.x+(Math.random()-.5)*.05,i.y+f/2,i.z+(Math.random()-.5)*.05),new xt().setFromEuler(new Rt(0,Math.random()*Math.PI,(Math.random()-.5)*.15)),new T(.012+Math.random()*.006,f,1)),t.add(sh,Ge,Nt.copy(l()).multiplyScalar(.8+Math.random()*.4),h,c+d*.13)}break}case"rosette":{const u=7+Math.floor(Math.random()*6);for(let d=0;d<u;d++){const f=d/u*Math.PI*2+Math.random()*.5,g=.35+Math.random()*.55,y=a*(.75+Math.random()*.45);Ge.compose(new T(i.x+Math.cos(f)*.015,i.y+y/2*Math.cos(g*.8),i.z+Math.sin(f)*.015),new xt().setFromEuler(new Rt(Math.sin(f)*g,-f,Math.cos(f)*g,"YXZ")),new T(y*(e.id==="amazon-sword"?.3:e.id==="anubias"?.55:.35),y,1)),t.add(ah,Ge,Nt.copy(l()).multiplyScalar(.75+Math.random()*.5),h,c+d*.11)}break}case"carpet":{for(let d=0;d<24;d++){const f=a*(.6+Math.random()*.8);Ge.compose(new T(i.x+(Math.random()-.5)*.09,i.y+f/2,i.z+(Math.random()-.5)*.09),new xt().setFromEuler(new Rt((Math.random()-.5)*.4,Math.random()*Math.PI,(Math.random()-.5)*.4)),new T(.004,f,1)),t.add(sh,Ge,Nt.copy(l()).multiplyScalar(.8+Math.random()*.5),h,Math.random())}break}case"moss":{for(let u=0;u<30;u++)Ge.compose(new T(i.x+(Math.random()-.5)*.08,i.y+Math.random()*a,i.z+(Math.random()-.5)*.08),new xt().setFromEuler(new Rt(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),new T(.014,.02,1)),t.add(ah,Ge,Nt.copy(l()).multiplyScalar(.6+Math.random()*.7),()=>.4+Math.random()*.4,Math.random());break}case"floating":{const u=5+Math.floor(Math.random()*3);for(let d=0;d<u;d++){const f=d/u*Math.PI*2;Ge.compose(new T(i.x+Math.cos(f)*.018,i.y-.004,i.z+Math.sin(f)*.018),new xt().setFromEuler(new Rt(-Math.PI/2+.15,-f,0,"YXZ")),new T(.03,.035,1)),t.add(ah,Ge,Nt.copy(l()),()=>.15,c)}for(let d=0;d<5;d++){const f=.05+Math.random()*a;Ge.compose(new T(i.x+(Math.random()-.5)*.02,i.y-f/2,i.z+(Math.random()-.5)*.02),new xt,new T(.0015,f,1)),t.add(sh,Ge,Nt.set("#c8c0a0"),(g,y)=>1-(y+.5),Math.random())}break}case"softcoral":{const u=a*.5;if(Ge.compose(new T(i.x,i.y+u/2,i.z),new xt,new T(a*.22,u,a*.22)),t.add(lh,Ge,Nt.copy(l()).multiplyScalar(.85),h,c),e.id==="toadstool")Ge.compose(new T(i.x,i.y+u+a*.08,i.z),new xt,new T(a*.85,a*.22,a*.85)),t.add(Cr,Ge,Nt.copy(l()),()=>.75,c+.3);else for(let d=0;d<8;d++){const f=Math.random()*Math.PI*2,g=Math.random()*a*.3;Ge.compose(new T(i.x+Math.cos(f)*g,i.y+u+Math.random()*a*.4,i.z+Math.sin(f)*g),new xt().setFromEuler(new Rt(Math.random(),Math.random(),Math.random())),new T(a*.28,a*.3,a*.28)),t.add(Cr,Ge,Nt.copy(l()).multiplyScalar(.8+Math.random()*.4),()=>.7+Math.random()*.3,Math.random())}break}case"xenia":{const u=5+Math.floor(Math.random()*4);for(let d=0;d<u;d++){const f=i.x+(Math.random()-.5)*.05,g=i.z+(Math.random()-.5)*.05,y=a*(.6+Math.random()*.5);Ge.compose(new T(f,i.y+y/2,g),new xt,new T(.008,y,.008)),t.add(lh,Ge,Nt.copy(l()).multiplyScalar(.8),h,d*.17),Ge.compose(new T(f,i.y+y+.008,g),new xt,new T(.028,.02,.028)),t.add(Cr,Ge,Nt.copy(l()),()=>1,d*.17+Math.random()*.1)}break}case"lps":{for(let u=0;u<26;u++){const d=Math.random()*Math.PI*2,f=Math.random()*a*.45,g=a*(.7+Math.random()*.6);Ge.compose(new T(i.x+Math.cos(d)*f,i.y+g/2,i.z+Math.sin(d)*f),new xt().setFromEuler(new Rt((Math.random()-.5)*.7,0,(Math.random()-.5)*.7)),new T(.014,g,.014)),t.add(oh,Ge,Nt.copy(l()).multiplyScalar(.8+Math.random()*.5),h,Math.random())}break}case"anemone":{Ge.compose(new T(i.x,i.y+a*.12,i.z),new xt,new T(a*.7,a*.3,a*.7)),t.add(Cr,Ge,Nt.copy(o[0]).multiplyScalar(.7),()=>.1,c);for(let u=0;u<34;u++){const d=Math.random()*Math.PI*2,f=Math.random()*a*.32,g=a*(.5+Math.random()*.55);Ge.compose(new T(i.x+Math.cos(d)*f,i.y+a*.2+g/2,i.z+Math.sin(d)*f),new xt().setFromEuler(new Rt(Math.cos(d)*.5,0,-Math.sin(d)*.5)),new T(.016,g,.016)),t.add(oh,Ge,Nt.copy(o[1%o.length]).multiplyScalar(.85+Math.random()*.35),h,Math.random())}break}case"zoa":{for(let u=0;u<22;u++){const d=i.x+(Math.random()-.5)*.09,f=i.z+(Math.random()-.5)*.09,g=a*(.6+Math.random()*.6);Ge.compose(new T(d,i.y+g/2,f),new xt,new T(.006,g,.006)),t.add(lh,Ge,Nt.set("#7a6a58"),h,Math.random()),Ge.compose(new T(d,i.y+g,f),new xt,new T(.02,.005,.02)),t.add(Cr,Ge,Nt.copy(l()),()=>.9,Math.random())}break}case"hardcoral":{if(e.id==="brain-coral")Ge.compose(new T(i.x,i.y+a*.4,i.z),new xt,new T(a*1.6,a*.8,a*1.4)),t.add(Cr,Ge,Nt.copy(l()),()=>0,c);else if(e.id==="montipora-plate")for(let u=0;u<3;u++)Ge.compose(new T(i.x+(Math.random()-.5)*.04,i.y+a*(.3+u*.3),i.z+(Math.random()-.5)*.04),new xt().setFromEuler(new Rt((Math.random()-.5)*.3,Math.random(),(Math.random()-.5)*.3)),new T(a*(1.5-u*.3),a*.08,a*(1.5-u*.3))),t.add(Cr,Ge,Nt.copy(l()).multiplyScalar(.85+u*.12),()=>0,c);else for(let u=0;u<12;u++){const d=Math.random()*Math.PI*2,f=Math.random()*a*.35,g=a*(.5+Math.random()*.7);Ge.compose(new T(i.x+Math.cos(d)*f,i.y+g/2,i.z+Math.sin(d)*f),new xt().setFromEuler(new Rt(Math.cos(d)*.45,0,-Math.sin(d)*.45)),new T(.02,g,.02)),t.add(oh,Ge,Nt.copy(l()).multiplyScalar(.75+Math.random()*.5),()=>0,Math.random())}break}}}}const Ye=n=>({height:.32,width:.45,noseSharp:.5,tailFork:.6,tailSize:.22,dorsalHeight:.35,analHeight:.25,finLong:!1,eyeSize:.05,...n}),qe=n=>({base:"#9db4c0",belly:"#e8eef2",back:"#54707e",fin:"#b8ccd6",finOpacity:.55,pattern:"none",patternColor:"#ffffff",iridescence:.2,...n}),$e=n=>({cruise:1.4,burst:3.2,freqBase:2.2,waveLen:.95,amp:.2,mode:1,turnRate:2.6,...n}),Sy=[{id:"neon-tetra",common:"Neon Tetra",scientific:"Paracheirodon innesi",water:"freshwater",adultSizeIn:1.5,lengthM:.038,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Blackwater streams of the Amazon basin, shaded by forest canopy.",funFact:"Their electric blue stripe turns dull at night while they rest — the color is structural, made by light-reflecting crystals, not pigment.",colorTags:["blue","red","silver"],shape:Ye({height:.28,noseSharp:.35,tailFork:.65,eyeSize:.07}),palette:qe({base:"#b8d4e6",belly:"#f0f4f6",back:"#5a748a",pattern:"hstripe",patternColor:"#27d3f5",patternColor2:"#e8262d",iridescence:.75,fin:"#cfe3ee",finOpacity:.35}),swim:$e({cruise:1.6,freqBase:3,turnRate:3.4})},{id:"cardinal-tetra",common:"Cardinal Tetra",scientific:"Paracheirodon axelrodi",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:15,habitat:"Rio Negro and Orinoco blackwater tributaries in South America.",funFact:"Unlike the neon tetra, the cardinal’s red band runs the full length of its body — the easiest way to tell the two apart.",colorTags:["blue","red"],shape:Ye({height:.28,noseSharp:.35,tailFork:.65,eyeSize:.07}),palette:qe({base:"#e0453a",belly:"#f2b8ae",back:"#4a5f78",pattern:"hstripe",patternColor:"#2bc8f0",patternColor2:"#e0453a",iridescence:.75,patternParams:[1],finOpacity:.35}),swim:$e({cruise:1.5,freqBase:2.9,turnRate:3.2})},{id:"ember-tetra",common:"Ember Tetra",scientific:"Hyphessobrycon amandae",water:"freshwater",adultSizeIn:.8,lengthM:.02,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:8,bioload:.4,minGallons:5,habitat:"Slow, tannin-stained tributaries of the Araguaia River basin in Brazil.",funFact:"It was named for Amanda Bleher, the discoverer’s mother — a tiny glowing coal of a fish that looks best in a big group over dark substrate.",colorTags:["orange","red"],shape:Ye({height:.3,noseSharp:.3,tailFork:.55,eyeSize:.08}),palette:qe({base:"#e8702a",belly:"#f0a878",back:"#d85a1e",pattern:"none",fin:"#e88a4a",finOpacity:.45,iridescence:.5}),swim:$e({cruise:1.4,freqBase:3.2,turnRate:3.6})},{id:"rummynose-tetra",common:"Rummynose Tetra",scientific:"Hemigrammus rhodostomus",water:"freshwater",adultSizeIn:2,lengthM:.048,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:20,habitat:"Lower Amazon blackwater rivers with soft, acidic water.",funFact:"Aquarists use them as a living water-quality meter: the red nose fades to pale pink the moment conditions slip.",colorTags:["red","silver","black"],shape:Ye({height:.26,noseSharp:.4,tailFork:.7}),palette:qe({base:"#c9d6da",belly:"#eef2f3",back:"#8fa5ab",pattern:"headpatch",patternColor:"#e03222",patternColor2:"#222831",iridescence:.45,finOpacity:.5}),swim:$e({cruise:1.7,freqBase:3.1,turnRate:3})},{id:"harlequin-rasbora",common:"Harlequin Rasbora",scientific:"Trigonostigma heteromorpha",water:"freshwater",adultSizeIn:2,lengthM:.042,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Peat-swamp forest streams of Malaysia, Singapore and Sumatra.",funFact:"The black “pork chop” wedge on its flank is unique to each fish — like a fingerprint in silhouette.",colorTags:["orange","black","pink"],shape:Ye({height:.34,noseSharp:.3,tailFork:.6}),palette:qe({base:"#e8946a",belly:"#f4c9a8",back:"#c96f4a",pattern:"lateralline",patternColor:"#1d2126",iridescence:.4,patternParams:[.45],fin:"#e8a880"}),swim:$e({cruise:1.4,freqBase:2.7,turnRate:3})},{id:"zebra-danio",common:"Zebra Danio",scientific:"Danio rerio",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"schooler",minGroup:6,bioload:1,minGallons:10,habitat:"Fast, cool streams and rice paddies from India to Bangladesh.",funFact:"Science’s favorite fish: zebrafish embryos are transparent, and they can regrow heart tissue — thousands of labs study them.",colorTags:["blue","gold","silver"],shape:Ye({height:.24,noseSharp:.45,tailFork:.55}),palette:qe({base:"#d8cfa8",belly:"#f2ecd6",back:"#9a8f6a",pattern:"hstripe",patternColor:"#3a4a8c",patternParams:[3],iridescence:.5}),swim:$e({cruise:2.4,burst:3.6,freqBase:3.6,turnRate:3.8})},{id:"tiger-barb",common:"Tiger Barb",scientific:"Puntigrus tetrazona",water:"freshwater",adultSizeIn:3,lengthM:.06,temperament:"semi-aggressive",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:2,minGallons:20,habitat:"Clear and turbid waters of Sumatra and Borneo.",funFact:"Kept in a big enough group they nip each other instead of tankmates — the school’s pecking order keeps everyone else safe.",colorTags:["orange","black","gold"],shape:Ye({height:.42,noseSharp:.35,tailFork:.6}),palette:qe({base:"#e8b04a",belly:"#f4d9a0",back:"#c98a30",pattern:"vbars",patternColor:"#16181d",patternParams:[4],fin:"#e05a2a",finOpacity:.75,iridescence:.3}),swim:$e({cruise:1.8,freqBase:3,turnRate:3.4,mode:1})},{id:"guppy",common:"Guppy",scientific:"Poecilia reticulata",water:"freshwater",adultSizeIn:1.8,lengthM:.035,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"schooler",minGroup:3,bioload:1,minGallons:5,habitat:"Warm streams, ditches and pools across northeast South America.",funFact:"No two male guppies wear the same tail — their patterns are as individual as snowflakes.",colorTags:["orange","blue","yellow","rainbow"],shape:Ye({height:.3,noseSharp:.3,tailFork:.1,tailSize:.38,finLong:!0,dorsalHeight:.5}),palette:qe({base:"#a8bcd0",belly:"#e6edf2",back:"#7a90a8",pattern:"spots",patternColor:"#e8642a",patternColor2:"#3a6ae0",fin:"#ffa03a",finOpacity:.85,iridescence:.65}),swim:$e({cruise:1.2,freqBase:2.6,turnRate:3,mode:3})},{id:"betta",common:"Betta (Siamese Fighting Fish)",scientific:"Betta splendens",water:"freshwater",adultSizeIn:2.8,lengthM:.06,temperament:"aggressive",careLevel:"easy",zone:"top",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:3,minGallons:5,mouthIn:.8,habitat:"Shallow, still rice paddies and marshes of Thailand.",funFact:"Bettas breathe air with a labyrinth organ, and males build floating bubble nests for their eggs.",colorTags:["red","blue","purple"],shape:Ye({height:.34,noseSharp:.25,tailFork:0,tailSize:.45,finLong:!0,dorsalHeight:.6,analHeight:.65}),palette:qe({base:"#5a3ae0",belly:"#8a6ae8",back:"#3a20a8",fin:"#e03a5a",finOpacity:.8,pattern:"none",iridescence:.8}),swim:$e({cruise:.7,burst:2.6,freqBase:1.6,mode:3,turnRate:2.4,amp:.14})},{id:"dwarf-gourami",common:"Dwarf Gourami",scientific:"Trichogaster lalius",water:"freshwater",adultSizeIn:3.5,lengthM:.075,temperament:"peaceful",careLevel:"moderate",zone:"top",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:3,minGallons:10,habitat:"Slow, thickly vegetated waters of India and Bangladesh.",funFact:"Their pelvic fins are long touch-sensitive threads they use to feel around murky water — like fingertips.",colorTags:["red","blue","orange"],shape:Ye({height:.5,width:.32,noseSharp:.3,tailFork:.15,dorsalHeight:.45}),palette:qe({base:"#e05a3a",belly:"#f0b090",back:"#c04028",pattern:"vbars",patternColor:"#3ab8e8",patternParams:[7,.4],fin:"#e88a5a",finOpacity:.7,iridescence:.55}),swim:$e({cruise:.8,freqBase:1.8,mode:2,turnRate:2.2,amp:.15})},{id:"honey-gourami",common:"Honey Gourami",scientific:"Trichogaster chuna",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"top",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:2,minGallons:10,habitat:"Slow, densely planted streams and floodplains of India and Bangladesh.",funFact:"A shy, gentle cousin of the dwarf gourami — courting males glow warm honey-gold and blow floating bubble nests, and their thread-like pelvic fins taste the water ahead of them.",colorTags:["orange","yellow","gold"],shape:Ye({height:.44,width:.3,noseSharp:.3,tailFork:.15,dorsalHeight:.4,analHeight:.45}),palette:qe({base:"#e8a838",belly:"#f2d488",back:"#d8881f",pattern:"none",fin:"#f0bc50",finOpacity:.7,iridescence:.45}),swim:$e({cruise:.75,freqBase:1.8,mode:2,turnRate:2.2,amp:.15})},{id:"angelfish",common:"Angelfish",scientific:"Pterophyllum scalare",water:"freshwater",adultSizeIn:6,lengthM:.1,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"hoverer",minGroup:1,bioload:8,minGallons:29,mouthIn:1.6,habitat:"Slow Amazon tributaries thick with submerged roots and stems.",funFact:"Their tall, thin bodies evolved to slip between vertical plant stems — the vertical bars are camouflage for exactly that.",colorTags:["silver","black"],shape:Ye({height:.85,width:.18,noseSharp:.45,tailFork:.2,tailSize:.28,finLong:!0,dorsalHeight:.9,analHeight:.9}),palette:qe({base:"#c8d2d8",belly:"#e8edf0",back:"#98a8b2",pattern:"vbars",patternColor:"#23272e",patternParams:[3,.9],fin:"#b8c4cc",finOpacity:.65,iridescence:.35}),swim:$e({cruise:.55,burst:2.8,freqBase:1.4,mode:2,turnRate:1.8,amp:.12})},{id:"german-blue-ram",common:"German Blue Ram",scientific:"Mikrogeophagus ramirezi",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"advanced",zone:"bottom",archetype:"solitary",minGroup:1,maxPerTank:2,bioload:2,minGallons:20,habitat:"Warm, shallow savannah pools of the Orinoco basin in Venezuela and Colombia.",funFact:"A rare gentle cichlid — pairs take turns fanning their eggs and will herd their fry around the tank like sheepdogs.",colorTags:["blue","yellow","black"],shape:Ye({height:.45,noseSharp:.35,tailFork:.3,dorsalHeight:.55}),palette:qe({base:"#e8d060",belly:"#f2e8a8",back:"#c8a840",pattern:"spots",patternColor:"#3a8ae8",patternColor2:"#16181d",fin:"#e8b83a",finOpacity:.7,iridescence:.7}),swim:$e({cruise:.8,freqBase:2,mode:2,turnRate:2.6})},{id:"boesemani-rainbow",common:"Boesemani Rainbowfish",scientific:"Melanotaenia boesemani",water:"freshwater",adultSizeIn:4,lengthM:.085,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:6,bioload:4,minGallons:40,habitat:"The Ayamaru Lakes of West Papua — found nowhere else on Earth.",funFact:"Half blue, half orange, split right down the middle — and the colors intensify each morning when the males display.",colorTags:["blue","orange","rainbow"],shape:Ye({height:.4,noseSharp:.4,tailFork:.5}),palette:qe({base:"#7a9ae0",belly:"#b8c8e8",back:"#4a6ac0",pattern:"headpatch",patternColor:"#5a7ae0",patternColor2:"#00000000",iridescence:.8,fin:"#e8983a",finOpacity:.7,patternParams:[.55]}),swim:$e({cruise:1.6,freqBase:2.4,turnRate:2.8})},{id:"corydoras",common:"Bronze Corydoras",scientific:"Corydoras aeneus",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:2,minGallons:20,habitat:"Sandy-bottomed streams across much of South America.",funFact:"They dash to the surface to gulp air and digest it in their gut — and they wink. (Really: they can tilt their eyes down, which looks like winking.)",colorTags:["bronze","green"],shape:Ye({height:.38,width:.55,noseSharp:.6,tailFork:.5,dorsalHeight:.55,barbels:!0,eyeSize:.06}),palette:qe({base:"#b09a6a",belly:"#e0d2b0",back:"#6a5a3a",pattern:"none",iridescence:.5,fin:"#c8b890",finOpacity:.5}),swim:$e({cruise:.9,burst:6,freqBase:2.4,mode:1,turnRate:3})},{id:"albino-corydoras",common:"Albino Corydoras",scientific:"Corydoras aeneus (albino)",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:2,minGallons:20,habitat:"A captive-bred form of the bronze cory from South America’s sandy-bottomed streams.",funFact:"The pink-and-white color and ruby eyes come from a lack of pigment — underneath, it’s the same cheerful catfish, winking and dashing to the surface for gulps of air.",colorTags:["white","pink"],shape:Ye({height:.38,width:.55,noseSharp:.6,tailFork:.5,dorsalHeight:.55,barbels:!0,eyeSize:.06}),palette:qe({base:"#f0dcc4",belly:"#faf2e2",back:"#e6cbaa",pattern:"none",fin:"#f4e4cc",finOpacity:.5,iridescence:.35,eyeColor:"#c03038"}),swim:$e({cruise:.9,burst:6,freqBase:2.4,mode:1,turnRate:3})},{id:"bristlenose-pleco",common:"Bristlenose Pleco",scientific:"Ancistrus cirrhosus",water:"freshwater",adultSizeIn:5,lengthM:.1,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"ambusher",minGroup:1,maxPerTank:1,bioload:8,minGallons:29,habitat:"Fast, oxygen-rich rivers of the Amazon basin.",funFact:"Males grow a beard of fleshy tentacles on their snout, and their mouth is a suction cup strong enough to hold them in river current.",colorTags:["brown","black"],shape:Ye({height:.3,width:.75,noseSharp:.85,tailFork:.3,dorsalHeight:.6,barbels:!0,eyeSize:.04}),palette:qe({base:"#5a4a36",belly:"#8a7a60",back:"#3a3026",pattern:"spots",patternColor:"#d8c8a0",fin:"#4a4030",finOpacity:.9,iridescence:.05}),swim:$e({cruise:.5,burst:2.4,freqBase:1.6,mode:1,turnRate:2})},{id:"zebra-oto",common:"Zebra Otocinclus",scientific:"Otocinclus cocama",water:"freshwater",adultSizeIn:2,lengthM:.045,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"cleaner",minGroup:6,bioload:.6,minGallons:10,habitat:"Fast, clear, oxygen-rich streams of the Ucayali River basin in Peru.",funFact:"A tireless little algae-grazer that works in shoals, rasping green film off glass and leaves with a suckermouth — and unlike its plain cousins it wears bold zebra bands.",colorTags:["black","cream","brown"],shape:Ye({height:.24,width:.55,noseSharp:.45,tailFork:.4,tailSize:.2,dorsalHeight:.45,eyeSize:.06}),palette:qe({base:"#d8c4a0",belly:"#efe6d2",back:"#3a3026",pattern:"vbars",patternColor:"#2a2018",patternParams:[7,.7],fin:"#cfc0a0",finOpacity:.55,iridescence:.15}),swim:$e({cruise:.7,burst:3.5,freqBase:2.4,mode:1,turnRate:3.2})},{id:"kuhli-loach",common:"Kuhli Loach",scientific:"Pangio kuhlii",water:"freshwater",adultSizeIn:4,lengthM:.08,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"nocturnal",minGroup:5,bioload:1,minGallons:20,habitat:"Leaf-littered forest stream beds of Sundaland, Southeast Asia.",funFact:"These little living noodles hide all day and come alive after dark — switch the tank to night mode and watch them wake up.",colorTags:["orange","black"],shape:Ye({height:.11,width:.9,noseSharp:.5,tailFork:0,tailSize:.08,dorsalHeight:.12,analHeight:.1,eelLike:!0,barbels:!0,eyeSize:.04}),palette:qe({base:"#e8a04a",belly:"#f2cea0",back:"#d8903a",pattern:"vbars",patternColor:"#241c14",patternParams:[9],fin:"#e8b06a",finOpacity:.5,iridescence:.1}),swim:$e({cruise:.9,freqBase:2.2,waveLen:.62,amp:.16,mode:0,turnRate:3.6})},{id:"hillstream-loach",common:"Reticulated Hillstream Loach",scientific:"Sewellia lineolata",water:"freshwater",adultSizeIn:2.5,lengthM:.055,temperament:"peaceful",careLevel:"moderate",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:2,minGallons:20,habitat:"Fast, shallow, oxygen-rich hillstreams of central Vietnam, clinging to boulders in the torrent.",funFact:"Its whole underside works like a suction cup — in the wild it holds onto rocks in whitewater, and in a tank it windshield-wipers across the glass grazing algae.",colorTags:["gold","black","brown"],shape:Ye({height:.13,width:4,noseSharp:.15,tailFork:.15,tailSize:.15,dorsalHeight:.22,analHeight:.1,eyeSize:.05}),palette:qe({base:"#c8a458",belly:"#e8d8b8",back:"#a8854a",pattern:"mottle",patternColor:"#2a2418",fin:"#c8ae6a",finOpacity:.75,iridescence:.15}),swim:$e({cruise:.5,burst:4,freqBase:2,mode:1,amp:.1,turnRate:3})},{id:"cherry-shrimp",common:"Cherry Shrimp",scientific:"Neocaridina davidi",water:"freshwater",adultSizeIn:1.2,lengthM:.025,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:6,bioload:.2,minGallons:5,invert:!0,habitat:"Streams and ponds of Taiwan; the red form was bred by hobbyists.",funFact:"They molt their entire shell as they grow, then often eat it to recycle the minerals.",colorTags:["red"],shape:Ye({height:.22,width:.5,noseSharp:.7,tailFork:0,tailSize:.12,dorsalHeight:.05,analHeight:.05,eelLike:!0}),palette:qe({base:"#e02a2a",belly:"#f08a7a",back:"#c01a1a",pattern:"none",iridescence:.15,finOpacity:.3}),swim:$e({cruise:.35,burst:5,freqBase:1.5,mode:3,turnRate:4})},{id:"nerite-snail",common:"Nerite Snail",scientific:"Neritina natalensis",water:"freshwater",adultSizeIn:1,lengthM:.02,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.2,minGallons:5,invert:!0,habitat:"Brackish river mouths of East Africa.",funFact:"The best algae-eater in the hobby — watch one mow a slow, perfect stripe of algae off the glass.",colorTags:["gold","black"],shape:Ye({height:.6,width:.8,noseSharp:0,tailFork:0,tailSize:.01,dorsalHeight:0,analHeight:0}),palette:qe({base:"#c8a030",belly:"#e8d8a0",back:"#8a6a1a",pattern:"hstripe",patternColor:"#2a2018",patternParams:[3],iridescence:.1,finOpacity:0}),swim:$e({cruise:.02,burst:1,freqBase:0,mode:3,turnRate:.5})},{id:"ocellaris-clown",common:"Ocellaris Clownfish",scientific:"Amphiprion ocellaris",water:"saltwater",adultSizeIn:3.5,lengthM:.07,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:4,minGallons:10,reefSafe:!0,habitat:"Coral reefs of the Indo-Pacific, always near a host anemone.",funFact:"Every clownfish is born male. The largest fish in a group becomes female — if she disappears, the top male changes sex and takes her place.",colorTags:["orange","white","black"],shape:Ye({height:.45,width:.4,noseSharp:.25,tailFork:.1,tailSize:.25,dorsalHeight:.4}),palette:qe({base:"#f07820",belly:"#f8a860",back:"#e06010",pattern:"vbars",patternColor:"#f8f8f4",patternColor2:"#16181d",patternParams:[3,1],fin:"#f08030",finOpacity:.95,iridescence:.25}),swim:$e({cruise:.9,freqBase:2.6,mode:3,amp:.16,turnRate:3.2})},{id:"blue-tang",common:"Blue Tang",scientific:"Paracanthurus hepatus",water:"saltwater",adultSizeIn:11,lengthM:.14,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:16,minGallons:90,reefSafe:!0,habitat:"Open reef edges across the Indo-Pacific.",funFact:"When threatened they wedge themselves into coral crevices and lock in with a scalpel-sharp spine at the tail base.",colorTags:["blue","yellow","black"],shape:Ye({height:.55,width:.22,noseSharp:.5,tailFork:.35,dorsalHeight:.45}),palette:qe({base:"#2858e8",belly:"#4a78e8",back:"#1a3ac8",pattern:"lateralline",patternColor:"#10141c",patternParams:[.7],fin:"#f0d020",finOpacity:.95,iridescence:.5}),swim:$e({cruise:1.3,freqBase:2,mode:2,turnRate:2.4})},{id:"yellow-tang",common:"Yellow Tang",scientific:"Zebrasoma flavescens",water:"saltwater",adultSizeIn:8,lengthM:.12,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:12,minGallons:75,reefSafe:!0,habitat:"Shallow Hawaiian reefs, grazing algae all day long.",funFact:"At night their brilliant yellow fades and a white lateral stripe appears — their “pajamas.”",colorTags:["yellow"],shape:Ye({height:.7,width:.2,noseSharp:.7,tailFork:.15,dorsalHeight:.7,analHeight:.6}),palette:qe({base:"#f2cc0a",belly:"#f8e060",back:"#e0b800",pattern:"none",fin:"#f2d020",finOpacity:.95,iridescence:.3}),swim:$e({cruise:1.1,freqBase:1.9,mode:2,turnRate:2.6})},{id:"royal-gramma",common:"Royal Gramma",scientific:"Gramma loreto",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"ambusher",minGroup:1,maxPerTank:1,bioload:3,minGallons:20,reefSafe:!0,habitat:"Caribbean reef caves and overhangs, often hanging upside-down.",funFact:"They orient their belly to whatever surface is nearest — under a ledge, they happily swim upside-down.",colorTags:["purple","yellow"],shape:Ye({height:.32,noseSharp:.3,tailFork:.2,dorsalHeight:.4}),palette:qe({base:"#8a2ae0",belly:"#a85ae8",back:"#6a1ac0",pattern:"headpatch",patternColor:"#8a2ae0",patternColor2:"#f2c80a",patternParams:[.5,1],fin:"#b060e8",finOpacity:.8,iridescence:.5}),swim:$e({cruise:.8,burst:4,freqBase:2.4,mode:1,turnRate:3.4})},{id:"green-chromis",common:"Green Chromis",scientific:"Chromis viridis",water:"saltwater",adultSizeIn:3.5,lengthM:.055,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"schooler",minGroup:5,bioload:2,minGallons:30,reefSafe:!0,habitat:"Shimmering shoals above branching Acropora thickets in reef lagoons.",funFact:"A shoal hovers over one coral head and dives into its branches in perfect unison the instant a shadow passes.",colorTags:["green","blue","silver"],shape:Ye({height:.36,noseSharp:.35,tailFork:.75}),palette:qe({base:"#8ae0c0",belly:"#c8f0e0",back:"#4ac0a0",pattern:"none",iridescence:.85,fin:"#a8e8d0",finOpacity:.5}),swim:$e({cruise:1.5,freqBase:2.8,turnRate:3.2})},{id:"firefish",common:"Firefish Goby",scientific:"Nemateleotris magnifica",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"peaceful",careLevel:"easy",zone:"mid",archetype:"hoverer",minGroup:1,maxPerTank:2,bioload:2,minGallons:20,reefSafe:!0,habitat:"Hovers over reef rubble facing the current, never far from a bolt-hole.",funFact:"It hovers in open water flicking its long dorsal spine like a signal flag, and darts into the same burrow every time it’s startled.",colorTags:["white","red","orange"],shape:Ye({height:.22,noseSharp:.3,tailFork:.25,dorsalHeight:1.1,tailSize:.28}),palette:qe({base:"#f2ede0",belly:"#f8f4ea",back:"#e8e0d0",pattern:"headpatch",patternColor:"#f2ede0",patternColor2:"#d82a10",patternParams:[.45,-1],fin:"#e85a2a",finOpacity:.8,iridescence:.3}),swim:$e({cruise:.6,burst:5,freqBase:2.2,mode:3,amp:.14,turnRate:3.6})},{id:"banggai-cardinal",common:"Banggai Cardinalfish",scientific:"Pterapogon kauderni",water:"saltwater",adultSizeIn:3,lengthM:.065,temperament:"peaceful",careLevel:"moderate",zone:"mid",archetype:"hoverer",minGroup:1,bioload:3,minGallons:30,reefSafe:!0,habitat:"Found naturally only in the Banggai Islands of Indonesia, sheltering among sea-urchin spines.",funFact:"Fathers carry the eggs — and then the hatched babies — inside their mouths for weeks, eating nothing the whole time.",colorTags:["silver","black","white"],shape:Ye({height:.55,width:.25,noseSharp:.35,tailFork:.5,finLong:!0,dorsalHeight:.8,analHeight:.7,tailSize:.3}),palette:qe({base:"#c8ccd2",belly:"#e8eaee",back:"#a8adb6",pattern:"vbars",patternColor:"#14161c",patternParams:[3,1.2],fin:"#d0d4da",finOpacity:.55,iridescence:.4}),swim:$e({cruise:.45,freqBase:1.6,mode:2,amp:.12,turnRate:2})},{id:"sixline-wrasse",common:"Six-Line Wrasse",scientific:"Pseudocheilinus hexataenia",water:"saltwater",adultSizeIn:3,lengthM:.06,temperament:"semi-aggressive",careLevel:"easy",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:3,minGallons:30,reefSafe:!0,habitat:"Weaves ceaselessly through coral branches across the Indo-Pacific.",funFact:"At bedtime it spins itself a mucus cocoon to sleep in, hiding its scent from night predators.",colorTags:["purple","orange"],shape:Ye({height:.26,noseSharp:.55,tailFork:.2}),palette:qe({base:"#c05ae0",belly:"#d88ae8",back:"#a03ac8",pattern:"hstripe",patternColor:"#f09030",patternParams:[3],fin:"#c87ae0",finOpacity:.7,iridescence:.6}),swim:$e({cruise:1.4,freqBase:2.8,mode:1,turnRate:3.8})},{id:"lawnmower-blenny",common:"Lawnmower Blenny",scientific:"Salarias fasciatus",water:"saltwater",adultSizeIn:5,lengthM:.09,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"bottom",minGroup:1,maxPerTank:1,bioload:5,minGallons:30,reefSafe:!0,habitat:"Perches on Indo-Pacific reef flats, mowing algae film off the rock.",funFact:"It perches on rocks propped up on its fins like elbows, watching everything with independently swiveling eyes.",colorTags:["brown","green"],shape:Ye({height:.28,width:.6,noseSharp:.1,tailFork:0,dorsalHeight:.5,eyeSize:.08,eelLike:!0}),palette:qe({base:"#8a8a6a",belly:"#b8b89a",back:"#5a5a44",pattern:"mottle",patternColor:"#3c3c2c",fin:"#9a9a7a",finOpacity:.6,iridescence:.05}),swim:$e({cruise:.5,burst:4,freqBase:2,mode:0,waveLen:.7,turnRate:3.2})},{id:"flame-angel",common:"Flame Angelfish",scientific:"Centropyge loriculus",water:"saltwater",adultSizeIn:4,lengthM:.08,temperament:"semi-aggressive",careLevel:"moderate",zone:"mid",archetype:"solitary",minGroup:1,maxPerTank:1,bioload:6,minGallons:55,reefSafe:!1,habitat:"Rubble slopes of Pacific reefs, always ducking between rocks.",funFact:"One of the most vivid fish on any reef — but it may nip at corals, so reef keepers call it “reef-safe with an asterisk.”",colorTags:["red","orange","black"],shape:Ye({height:.5,width:.25,noseSharp:.35,tailFork:.15,dorsalHeight:.5}),palette:qe({base:"#e83010",belly:"#f06a40",back:"#d02008",pattern:"vbars",patternColor:"#1a1c24",patternParams:[4,.6],fin:"#e84020",finOpacity:.9,iridescence:.4}),swim:$e({cruise:1,freqBase:2.2,mode:2,turnRate:3})},{id:"cleaner-shrimp",common:"Skunk Cleaner Shrimp",scientific:"Lysmata amboinensis",water:"saltwater",adultSizeIn:2.5,lengthM:.045,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.5,minGallons:20,reefSafe:!0,invert:!0,habitat:"Runs a cleaning station on reef ledges; fish queue up to be groomed.",funFact:"Fish line up at its station and hold still — even predators — while it picks parasites from their skin, gills and open mouths.",colorTags:["red","white","yellow"],shape:Ye({height:.2,width:.45,noseSharp:.75,tailFork:0,tailSize:.14,dorsalHeight:.05,analHeight:.05,eelLike:!0,barbels:!0}),palette:qe({base:"#e8b06a",belly:"#f2d0a0",back:"#d82a1a",pattern:"hstripe",patternColor:"#f8f4ea",patternParams:[1],iridescence:.2,finOpacity:.3}),swim:$e({cruise:.25,burst:6,freqBase:1.2,mode:3,turnRate:4})},{id:"turbo-snail",common:"Turbo Snail",scientific:"Turbo fluctuosus",water:"saltwater",adultSizeIn:2,lengthM:.03,temperament:"peaceful",careLevel:"easy",zone:"bottom",archetype:"cleaner",minGroup:1,bioload:.3,minGallons:10,reefSafe:!0,invert:!0,habitat:"Rocky Pacific coastlines from Mexico to Peru.",funFact:"Named for its turban-shaped shell, not its speed — though for a snail, it really does move.",colorTags:["brown","white"],shape:Ye({height:.65,width:.85,noseSharp:0,tailFork:0,tailSize:.01,dorsalHeight:0,analHeight:0}),palette:qe({base:"#a89060",belly:"#d8c8a0",back:"#7a6540",pattern:"mottle",patternColor:"#f0e8d0",iridescence:.15,finOpacity:0}),swim:$e({cruise:.02,burst:1,freqBase:0,mode:3,turnRate:.5})}],Xc=new Map(Sy.map(n=>[n.id,n])),My=n=>Sy.filter(e=>e.water===n),Yl=Math.PI*2,RA=`
  attribute vec3 aDyn;      // per-instance dynamics: x = accumulated swim phase,
                            // y = turn bend (curls body into turns), z = pectoral flap amount
  attribute float aRand;    // per-instance random seed (desynchronizes idle motion)
  attribute float aPart;    // per-vertex: 0 body, 1 caudal fin, 2 median fins, 3 pectorals
  attribute float aFlutterD;// per-vertex: distance from a pectoral fin's root
  uniform float uWaveLen;   // undulation wavelength in body lengths
  uniform float uAmp;       // tail amplitude as a fraction of body length
  uniform float uMode;      // swim mode: 0 eel … 3 tail-only
`,PA=`
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
`,tg=new Map;function LA(n){let e=tg.get(n.id);return e||(e=DA(n),tg.set(n.id,e)),e}function DA(n){const e=n.id.includes("snail")?UA():NA(n),t={uWaveLen:{value:n.swim.waveLen},uAmp:{value:n.id.includes("snail")?0:n.swim.amp},uMode:{value:n.swim.mode}},i=IA(n),r=new gi({map:i,roughness:.42,metalness:.55*n.palette.iridescence,envMapIntensity:.8+n.palette.iridescence}),s=new gi({color:new be(n.palette.fin),roughness:.55,metalness:.1,transparent:!0,opacity:n.palette.finOpacity,side:nn,depthWrite:!1});for(const a of[r,s])Wc(a,{caustics:!0,causticStrength:.7,vertexPars:RA,vertexHook:PA,extraUniforms:t});return{geometry:e,materials:[r,s],uniforms:t}}function IA(n){const e=vA(n.palette,n.shape),t=e.image,i=t.getContext("2d"),r=t.width,s=t.height,a=r*.115,o=s*(1-.62),l=s*n.shape.eyeSize*2.4;return i.fillStyle="#d8d2c0",i.beginPath(),i.arc(a,o,l*1.25,0,Yl),i.fill(),i.fillStyle=n.palette.eyeColor??"#0a0a0c",i.beginPath(),i.arc(a,o,l*.85,0,Yl),i.fill(),i.fillStyle="rgba(255,255,255,0.9)",i.beginPath(),i.arc(a-l*.3,o-l*.3,l*.28,0,Yl),i.fill(),e.needsUpdate=!0,e}function Ua(n,e){const t=e.shape,i=t.eelLike?.5:.42,r=n<i?n/i:(1-n)/(1-i);let s=Math.pow(Math.sin(Math.PI/2*Fe.clamp(r,0,1)),t.eelLike?.35:.8+t.noseSharp*.7);return t.eelLike&&(s=.35+.65*s),t.height/2*s}function NA(n){const e=n.shape,t=22,i=12,r=[],s=[],a=[],o=[],l=[],c=1-e.tailSize,h=.5-c;for(let g=0;g<=t;g++){const y=g/t,m=.5-y*c,p=Math.max(.004,Ua(y,n)),v=p*e.width,_=p*.12*Math.sin(y*Math.PI);for(let x=0;x<=i;x++){const C=x/i*Yl;r.push(m,_+p*Math.cos(C),v*Math.sin(C)),s.push(.03+y*.82,.5+.5*Math.cos(C)),a.push(0),o.push(0)}}for(let g=0;g<t;g++)for(let y=0;y<i;y++){const m=g*(i+1)+y,p=m+i+1;l.push(m,p,m+1,p,p+1,m+1)}r.length/3;const u=(g,y,m=0,p=0,v)=>{const _=r.length/3;for(const[x,C]of g)r.push(x,C,m+p*Math.abs(x-g[0][0])),s.push(.9,.5),a.push(y),o.push(v?Math.hypot(x-v[0],C-v[1]):0);for(let x=1;x<g.length-1;x++)l.push(_,_+x,_+x+1)};{const g=h+.02,y=-.5,m=e.height*(.55+e.tailFork*.45)*(e.finLong?1.35:1),p=[[g,0]],v=9;for(let _=0;_<=v;_++){const x=_/v,C=(.5-x)*m,A=Math.pow(Math.abs(.5-x)*2,1.4),b=y+(1-A)*e.tailFork*e.tailSize*.85;p.push([b,C])}u(p,1)}if(e.dorsalHeight>.02){const g=e.finLong?.28:.34,y=e.finLong?.92:.72,m=[],p=_=>Ua(_,n)+Ua(_,n)*.12;m.push([.5-g*c,p(g)]);const v=6;for(let _=0;_<=v;_++){const x=_/v,C=g+(y-g)*x,A=Math.sin(Math.PI*Math.min(1,x*1.4))**(e.finLong?.6:1);m.push([.5-C*c,p(C)+e.dorsalHeight*e.height*A])}m.push([.5-y*c,p(y)]),u(m,2)}if(e.analHeight>.02){const m=[],p=_=>-Ua(_,n);m.push([.5-.55*c,p(.55)]);const v=5;for(let _=0;_<=v;_++){const x=_/v,C=.55+(.85-.55)*x;m.push([.5-C*c,p(C)-e.analHeight*e.height*Math.sin(Math.PI*Math.min(1,x*1.3))])}u(m,2)}{const y=.5-.24*c,m=Ua(.24,n)*e.width,p=.13*(e.finLong?1.5:1);for(const v of[1,-1]){const _=[[y,-.02],[y-p*.35,-.02-p*.5],[y-p,-.03-p*.55],[y-p*.8,-.01]];u(_,3,v*m*.95,v*.25,[y,-.02])}}const d=new Bt;d.setAttribute("position",new Ke(r,3)),d.setAttribute("uv",new Ke(s,2)),d.setAttribute("aPart",new Ke(a,1)),d.setAttribute("aFlutterD",new Ke(o,1)),d.setIndex(l),d.computeVertexNormals();const f=t*i*6;return d.clearGroups(),d.addGroup(0,f,0),d.addGroup(f,l.length-f,1),d}function UA(n){const e=new ra(.32,14,10);e.scale(1,.85,.8),e.translate(.02,.3,0);const t=new kn(.3,.36,.14,12);t.translate(0,.07,0);const i=[e,t],r=[],s=[],a=[],o=[],l=[];let c=0;for(const u of i){const d=u.getAttribute("position"),f=u.getAttribute("uv"),g=u.getIndex();for(let y=0;y<d.count;y++)r.push(d.getX(y),d.getY(y),d.getZ(y)),s.push(f.getX(y),f.getY(y)),a.push(0),o.push(0);for(let y=0;y<g.count;y++)l.push(g.getX(y)+c);c+=d.count}const h=new Bt;return h.setAttribute("position",new Ke(r,3)),h.setAttribute("uv",new Ke(s,2)),h.setAttribute("aPart",new Ke(a,1)),h.setAttribute("aFlutterD",new Ke(o,1)),h.setIndex(l),h.computeVertexNormals(),h.clearGroups(),h.addGroup(0,l.length,0),h.addGroup(l.length,0,1),h}const Ss=Math.PI*2,ng=.25;function ch(n){return n.id.includes("snail")||n.id.includes("hillstream")}const FA=new T,on=new T,uh=new T,hh=new xt,ig=new Rt,rg=new it,kA=new T;class OA{constructor(e){Y(this,"bits",[]);Y(this,"group",new ri);Y(this,"mats",new Map);Y(this,"variants",{normal:["pellet-brown.svg","pellet-green.svg"],"fish-cookie":["cookie-fish.png"],"bear-cookie":["cookie-bear.png"]});e.add(this.group);const t=new W2;for(const i of Object.values(this.variants).flat()){const r=t.load(new URL("feed-items/"+i,document.baseURI).href);r.colorSpace=un,this.mats.set(i,new sy({map:r,transparent:!0,depthWrite:!1,alphaTest:.02}))}}scatter(e,t,i,r="normal"){this.bits.length>=65&&this.remove(this.bits[0]);const s=this.variants[r],a=s[Math.floor(Math.random()*s.length)],o=new M2(this.mats.get(a)),l=r==="normal"?.025:.056;o.scale.set(l,l,1);const c={pos:new T(e+(Math.random()-.5)*.014,i-.01,t+(Math.random()-.5)*.014),age:0,state:"float",kind:r,sprite:o};o.position.copy(c.pos),this.group.add(o),this.bits.push(c)}remove(e){this.group.remove(e.sprite);const t=this.bits.indexOf(e);t>=0&&this.bits.splice(t,1)}update(e,t){for(let i=this.bits.length-1;i>=0;i--){const r=this.bits[i];r.age+=e;const s=r.kind!=="normal";if(r.state==="float"&&r.age>(s?3.5:1.5)&&(r.state="sink"),r.state==="sink"&&(r.pos.y-=e*(s?.013:.021),r.pos.x+=Math.sin(r.age*2.2+r.pos.z*35)*e*.003,r.pos.y<=t+.01&&(r.pos.y=t+.01,r.state="settled")),r.age>(s?65:42)&&(r.state="gone"),r.state==="gone"){this.remove(r);continue}r.sprite.position.copy(r.pos),r.sprite.material.rotation=Math.sin(r.age*.6+r.pos.x*5)*.08}}get active(){return this.bits.length>0}get hasCookie(){return this.bits.some(e=>e.kind!=="normal"&&e.state!=="gone")}nearest(e,t,i){let r=null,s=1/0;for(const a of this.bits){if(a.state==="gone")continue;const o=a.kind!=="normal";if(!o&&i&&a.state!=="settled"||!o&&!i&&a.state==="settled")continue;const l=a.pos.distanceToSquared(e);if(l>Math.pow(o?t*2.5:t,2))continue;const c=l-(o?100:0);c<s&&(s=c,r=a)}return r}eat(e){e.state="gone",this.remove(e)}}class zA{constructor(e){Y(this,"group",new ri);Y(this,"food");Y(this,"populations",[]);Y(this,"feedTimer",0);e.add(this.group),this.food=new OA(this.group)}rebuild(e,t,i){const r=new Map(this.populations.flatMap(o=>o.agents.map(l=>[l.key,l])));for(const o of this.populations)this.group.remove(o.mesh),o.mesh.dispose();this.populations=[];const s=Object.values(e).reduce((o,l)=>o+l,0),a=s>i?i/s:1;for(const[o,l]of Object.entries(e)){const c=Xc.get(o);if(!c||l<=0)continue;const h=Math.max(1,Math.round(l*a)),u=LA(c),d=new T2(u.geometry,u.materials,h);d.frustumCulled=!1,d.userData.speciesId=o;const f=new wc(new Float32Array(h*3),3);f.setUsage(XM);const g=new wc(new Float32Array(h),1);u.geometry.setAttribute("aDyn",f),u.geometry.setAttribute("aRand",g);const y=[];for(let p=0;p<h;p++){g.setX(p,Math.random());const v=this.spawnAgent(c,p,t),_=r.get(v.key);_&&(v.pos.copy(_.pos),v.vel.copy(_.vel),v.anchor.copy(_.anchor),v.mode=_.mode,v.modeT=_.modeT,v.phase=_.phase,v.rand=_.rand,v.scale=_.scale,v.hunger=_.hunger),y.push(v)}g.needsUpdate=!0;const m={sp:c,mesh:d,agents:y,dyn:f};this.populations.push(m),this.group.add(d)}r.size===0&&(this.feedTimer=0)}spawnAgent(e,t,i){const r=this.zoneBand(e,i),s=new T((Math.random()-.5)*i.halfW*1.6,Fe.lerp(r[0],r[1],Math.random()),(Math.random()-.5)*i.halfD*1.6),a={sp:e,index:t,key:`${e.id}:${t}`,pos:s,vel:new T((Math.random()-.5)*.05,0,(Math.random()-.5)*.05),phase:Math.random()*Ss,bend:0,flap:0,rand:Math.random(),scale:e.lengthM*(.82+Math.random()*.36),mode:"cruise",modeT:1+Math.random()*4,anchor:new T((Math.random()-.5)*i.halfW*1.4,Fe.lerp(r[0],r[1],.5),(Math.random()-.5)*i.halfD*1.4),prevYaw:0,hunger:0};if(ch(e)){const o=["floor","back","left","right"];a.wall=o[t%o.length],a.crawlDir=Math.random()*Ss}return a}zoneBand(e,t){const i=t.surfaceY-t.floorY;switch(e.zone){case"top":return[t.floorY+i*.68,t.floorY+i*.92];case"bottom":return[t.floorY+i*.02,t.floorY+i*.22];default:return[t.floorY+i*.3,t.floorY+i*.7]}}feed(e,t,i,r="normal"){this.food.scatter(e,t,i.surfaceY,r),this.feedTimer=75}findByKey(e){for(const t of this.populations)for(const i of t.agents)if(i.key===e)return{agent:i,sp:t.sp};return null}agentAt(e,t){return this.populations.find(r=>r.sp.id===e)?.agents[t]??null}update(e,t){e=Math.min(e,.05),this.feedTimer=Math.max(0,this.feedTimer-e),this.food.update(e,t.floorY);for(const i of this.populations){const{sp:r,agents:s,mesh:a,dyn:o}=i;for(const l of s)ch(r)?this.updateCrawler(l,e,t):this.updateFish(l,s,e,t),this.writeInstance(i,l,e);a.instanceMatrix.needsUpdate=!0,o.needsUpdate=!0}}updateFish(e,t,i,r){const s=e.sp,a=e.scale,o=s.swim.cruise*a*ng,l=o*s.swim.burst,h=s.archetype==="nocturnal"?Fe.lerp(1.15,.25,r.dayFactor):Fe.lerp(.3,1,r.dayFactor);e.modeT-=i,e.modeT<=0&&this.pickMode(e,r,h);const u=FA.set(0,0,0),d=Math.max(.06,a*2),f=_=>Fe.clamp((d-_)/d,0,1)**2*1.6;u.x+=f(e.pos.x+r.halfW)-f(r.halfW-e.pos.x),u.z+=f(e.pos.z+r.halfD)-f(r.halfD-e.pos.z),u.y+=f(e.pos.y-r.floorY)-f(r.surfaceY-e.pos.y);for(const _ of r.obstacles){on.copy(e.pos).sub(_.pos);const x=on.length();x<_.radius+d&&x>1e-5&&u.addScaledVector(on.divideScalar(x),(_.radius+d-x)/_.radius*1.2)}if(!e.gulp){const[_,x]=this.zoneBand(s,r);e.pos.y<_&&(u.y+=(_-e.pos.y)*1.6),e.pos.y>x&&(u.y-=(e.pos.y-x)*1.6)}if(e.gulp==="up"&&e.pos.y>r.surfaceY-a*2.2?(e.gulp="down",e.mode="dart",e.modeT=3,e.anchor.set(e.pos.x+(Math.random()-.5)*.1,r.floorY+a,e.pos.z+(Math.random()-.5)*.1)):e.gulp==="down"&&e.pos.y<r.floorY+a*2&&(e.gulp=void 0,e.mode="forage",e.modeT=2+Math.random()*3),s.archetype==="schooler"&&t.length>1&&this.boids(e,t,u,a),this.archetypeSteer(e,u,r,h),this.feedTimer>0&&this.food.active&&(e.mode!=="rest"||this.food.hasCookie)){const _=s.zone==="bottom",x=this.food.nearest(e.pos,1.2,_);if(x){const C=x.kind!=="normal";C&&(e.mode="feed",e.modeT=Math.max(e.modeT,1.5)),on.copy(x.pos).sub(e.pos);const A=on.length();A<a*(C?1:.55)?(this.food.eat(x),e.modeT=.3,e.mode="feed",e.gulp=void 0):u.addScaledVector(on.divideScalar(A),C?6.4:2.2)}}r.current.sample(e.pos,on),e.pos.addScaledVector(on,i),on.length()>.03&&u.addScaledVector(on.normalize(),-.25);const y=r.time*(r.reducedMotion?.5:1);u.x+=Math.sin(y*.7+e.rand*40)*.22,u.z+=Math.cos(y*.53+e.rand*71)*.22,u.y+=Math.sin(y*.41+e.rand*23)*.1;let m=o*h;e.mode==="rest"&&(m=o*.06),e.mode==="dart"&&(m=l),e.mode==="feed"&&(m=this.food.hasCookie?l*1.2:o*1.8),e.mode==="forage"&&(m=o*.4);const p=e.mode==="dart"?4:1.8;e.vel.addScaledVector(u,i*p*Math.max(o,.05)*6);const v=e.vel.length();if(v>1e-6){const _=Fe.damp(v,m,2.2,i);e.vel.multiplyScalar(_/v)}else e.vel.set(.01,0,0);e.gulp||(e.vel.y*=1-.6*i),e.pos.addScaledVector(e.vel,i),e.pos.x=Fe.clamp(e.pos.x,-r.halfW,r.halfW),e.pos.z=Fe.clamp(e.pos.z,-r.halfD,r.halfD),e.pos.y=Fe.clamp(e.pos.y,r.floorY+a*.4,r.surfaceY-a*.35)}pickMode(e,t,i){const r=e.sp,s=Math.random();switch(r.archetype){case"schooler":s<.06&&!t.reducedMotion?(e.mode="dart",e.modeT=.5):(e.mode="cruise",e.modeT=3+Math.random()*6);break;case"solitary":e.mode=s<.25?"rest":"cruise",e.modeT=3+Math.random()*5,e.mode==="cruise"&&this.newAnchorNear(e,t,.6);break;case"bottom":e.gulp=void 0,e.mode=s<.55?"forage":"cruise",e.modeT=2+Math.random()*5,s>.9&&r.id.includes("corydoras")?(e.mode="dart",e.gulp="up",e.anchor.set(e.pos.x,t.surfaceY-.02,e.pos.z),e.modeT=5):this.newAnchorNear(e,t,.4);break;case"hoverer":e.mode=s<.6?"rest":"cruise",e.modeT=4+Math.random()*6,e.mode==="cruise"&&this.newAnchorNear(e,t,.5);break;case"ambusher":s<.75*(2-i)?(e.mode="rest",e.modeT=6+Math.random()*10,this.anchorToShelter(e,t)):(e.mode="dart",e.modeT=.8,this.newAnchorNear(e,t,.9));break;case"nocturnal":i<.6?(e.mode="rest",e.modeT=8+Math.random()*8,this.anchorToShelter(e,t)):(e.mode=s<.4?"forage":"cruise",e.modeT=3+Math.random()*4,this.newAnchorNear(e,t,.5));break;case"surface":s<.12&&!t.reducedMotion?(e.mode="dart",e.modeT=.4):(e.mode="cruise",e.modeT=2+Math.random()*4);break;case"cleaner":e.mode=s<.7?"forage":"cruise",e.modeT=2+Math.random()*4,e.mode==="cruise"&&this.newAnchorNear(e,t,.25);break}}newAnchorNear(e,t,i){const[r,s]=this.zoneBand(e.sp,t);e.anchor.set(Fe.clamp(e.anchor.x+(Math.random()-.5)*t.halfW*2*i,-t.halfW*.85,t.halfW*.85),Fe.lerp(r,s,Math.random()),Fe.clamp(e.anchor.z+(Math.random()-.5)*t.halfD*2*i,-t.halfD*.8,t.halfD*.8))}anchorToShelter(e,t){if(t.shelters.length>0){const i=t.shelters[Math.floor(e.rand*t.shelters.length)%t.shelters.length];e.anchor.copy(i).add(uh.set((e.rand-.5)*.15,.02+e.rand*.05,(e.rand-.5)*.15))}else e.anchor.set(e.pos.x,t.floorY+.03,e.pos.z)}boids(e,t,i,r){const s=r*1.6,a=r*7,o=on.set(0,0,0),l=uh.set(0,0,0),c=new T;let h=0,u=0;for(const d of t){if(d===e)continue;const f=d.pos.x-e.pos.x,g=d.pos.y-e.pos.y,y=d.pos.z-e.pos.z,m=f*f+g*g+y*y;if(m>a*a||m<1e-8||f*e.vel.x+g*e.vel.y+y*e.vel.z<0&&m>s*s)continue;const v=Math.sqrt(m);v<s&&(o.x-=f/v*(s-v)/s,o.y-=g/v*(s-v)/s,o.z-=y/v*(s-v)/s,h++),l.add(d.vel),c.set(c.x+f,c.y+g,c.z+y),u++}h>0&&i.addScaledVector(o.normalize(),2),u>0&&(i.addScaledVector(l.normalize(),.5),i.addScaledVector(c.normalize(),.5))}archetypeSteer(e,t,i,r){const s=e.gulp?3.5:{schooler:.15,solitary:.6,bottom:.8,hoverer:.5,ambusher:1.4,nocturnal:.9,surface:.2,cleaner:1.6}[e.sp.archetype];on.copy(e.anchor).sub(e.pos);const a=on.length();a>.05&&t.addScaledVector(on.divideScalar(a),s*Math.min(1,a*2)),(e.sp.archetype==="bottom"||e.sp.archetype==="nocturnal")&&e.mode==="forage"&&(t.y-=.5),e.sp.archetype==="surface"&&(t.y+=(i.surfaceY-.04-e.pos.y)*3)}updateCrawler(e,t,i){const r=e.sp.id.includes("hillstream");let s=.004;r&&(e.modeT-=t,e.modeT<=0&&(e.mode=e.mode==="dart"?"forage":"dart",e.modeT=e.mode==="dart"?.5+Math.random():3+Math.random()*6,e.mode==="dart"&&(e.crawlDir=Math.random()*Ss)),s=e.mode==="dart"?.06:.003),e.crawlDir+=(Math.random()-.5)*t*.8;const a=e.crawlDir;if(e.wall==="floor")e.pos.y=i.floorY+.002,e.pos.x+=Math.cos(a)*s*t,e.pos.z+=Math.sin(a)*s*t,e.pos.x=Fe.clamp(e.pos.x,-i.halfW*.95,i.halfW*.95),e.pos.z=Fe.clamp(e.pos.z,-i.halfD*.95,i.halfD*.95);else{const o=Math.cos(a)*s*t,l=Math.sin(a)*s*t;e.wall==="back"&&(e.pos.z=-i.halfD+.006,e.pos.x+=o,e.pos.y+=l),e.wall==="left"&&(e.pos.x=-i.halfW+.006,e.pos.z+=o,e.pos.y+=l),e.wall==="right"&&(e.pos.x=i.halfW-.006,e.pos.z+=o,e.pos.y+=l),e.pos.y=Fe.clamp(e.pos.y,i.floorY+.03,i.surfaceY-.04),e.pos.x=Fe.clamp(e.pos.x,-i.halfW*.95,i.halfW*.95),e.pos.z=Fe.clamp(e.pos.z,-i.halfD*.95,i.halfD*.95),(e.pos.y>=i.surfaceY-.041||e.pos.y<=i.floorY+.031)&&(e.crawlDir=-a)}e.vel.set(Math.cos(a),0,Math.sin(a)).multiplyScalar(Math.max(s,.001))}writeInstance(e,t,i){const r=t.sp,s=t.vel.length();let a,o,l=null;if(ch(r)&&t.wall&&t.wall!=="floor")a=t.crawlDir,o=0,l=uh.set(t.wall==="back"?0:t.wall==="left"?1:-1,0,t.wall==="back"?1:0);else{a=Math.atan2(-t.vel.z,t.vel.x),o=Math.asin(Fe.clamp(s>1e-5?t.vel.y/s:0,-1,1));const g=t.gulp?1.25:.5;o=Fe.clamp(o,-g,g)}let c=a-t.prevYaw;c>Math.PI&&(c-=Ss),c<-Math.PI&&(c+=Ss),t.prevYaw=a;const h=Fe.clamp(-c/Math.max(i,1e-4)*s*1.4,-.6,.6);t.bend=Fe.damp(t.bend,Fe.clamp(c/Math.max(i,1e-4)*.5,-.5,.5),6,i),ig.set(h*.6,a,o,"YZX"),hh.setFromEuler(ig),l&&hh.setFromUnitVectors(on.set(0,1,0),l.normalize()),rg.compose(t.pos,hh,kA.set(t.scale,t.scale,t.scale)),e.mesh.setMatrixAt(t.index,rg);const u=t.scale,d=r.swim.freqBase*.35+s/(.7*u+1e-6);t.phase+=Ss*Math.min(d,14)*i;const f=Fe.clamp(s/(r.swim.cruise*u*ng+1e-6),0,1);t.flap=Fe.damp(t.flap,1-f*.85,4,i),e.dyn.setXYZ(t.index,t.phase,t.bend,t.flap)}}class wy{constructor(e){Y(this,"renderer");Y(this,"scene",new ry);Y(this,"rig");Y(this,"callbacks",{});Y(this,"composer",null);Y(this,"bloomPass",null);Y(this,"environment");Y(this,"decor");Y(this,"flora");Y(this,"fish");Y(this,"current",new pA);Y(this,"clock",new py);Y(this,"simEnv");Y(this,"dims",{halfW:.5,halfD:.25,height:.5,floorY:0,surfaceY:.48});Y(this,"config",null);Y(this,"quality",Ia.medium);Y(this,"requestedTier","auto");Y(this,"dayFactor",1);Y(this,"raycaster",new $2);Y(this,"running",!0);Y(this,"firstFrameDone",!1);Y(this,"disposed",!1);Y(this,"frameTimes",[]);Y(this,"feedMode",!1);Y(this,"kanAquariumMode",new URLSearchParams(location.search).has("kanban"));Y(this,"clickFoodCount",0);Y(this,"pointerDown",{x:0,y:0});Y(this,"lastCycleT",0);Y(this,"stats",{fps:60,drawCalls:0,triangles:0,fishCount:0});Y(this,"onVisibility",()=>{this.running=document.visibilityState==="visible"});Y(this,"applySize",()=>{const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight,i=Math.min(window.devicePixelRatio||1,this.quality.pixelRatioCap);this.renderer.setPixelRatio(i),this.renderer.setSize(e,t),this.rig.camera.aspect=e/t,this.rig.camera.updateProjectionMatrix(),this.rebuildComposer(e,t)});Y(this,"lastStructureKey","");Y(this,"lastFishKey","");Y(this,"rememberPointer",e=>{this.pointerDown={x:e.clientX,y:e.clientY}});Y(this,"onRightClick",e=>{e.preventDefault(),this.kanAquariumMode&&this.callbacks.onAddFish?.()});Y(this,"onClick",e=>{if(e.button!==0)return;if(this.kanAquariumMode){if(Math.hypot(e.clientX-this.pointerDown.x,e.clientY-this.pointerDown.y)>9)return;this.clickFoodCount++;const s=this.clickFoodCount%10===0?this.clickFoodCount/10%2===1?"fish-cookie":"bear-cookie":"normal";this.feedAt(e.clientX,e.clientY,s);return}if(this.rig.lastPointerTravel>8)return;const t=this.toNdc(e.clientX,e.clientY);this.raycaster.setFromCamera(t,this.rig.camera);const i=this.fish.populations.map(s=>s.mesh),r=this.raycaster.intersectObjects(i,!1);if(r.length>0&&r[0].instanceId!==void 0){const s=r[0].object.userData.speciesId,a=this.fish.agentAt(s,r[0].instanceId);if(a){this.callbacks.onFishPicked?.(a.key);return}}if(this.feedMode){this.feedAt(e.clientX,e.clientY);return}this.callbacks.onFishPicked?.(null)});Y(this,"tick",()=>{if(this.disposed)return;const e=Math.min(this.clock.getDelta(),.1);this.running&&this.advance(e)});this.container=e,cA(),this.renderer=new x2({antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=Jf,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=un,e.appendChild(this.renderer.domElement),this.renderer.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:none;";const t=new jd(this.renderer);this.scene.environment=t.fromScene(new aA,.06).texture,t.dispose(),this.scene.background=new be("#04141f"),this.rig=new fA(this.renderer.domElement,1),this.environment=new MA(this.scene),this.decor=new wA(this.scene),this.flora=new CA(this.scene),this.fish=new zA(this.scene),this.simEnv={time:0,dayFactor:1,halfW:.5,halfD:.25,floorY:0,surfaceY:.48,current:this.current,reducedMotion:!1,obstacles:[],shelters:[]},this.quality=Ia[$0(this.renderer)],this.applySize(),window.addEventListener("resize",this.applySize),document.addEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.addEventListener("pointerup",this.onClick),this.kanAquariumMode&&(this.renderer.domElement.addEventListener("pointerdown",this.rememberPointer),this.renderer.domElement.addEventListener("contextmenu",this.onRightClick)),this.renderer.setAnimationLoop(this.tick)}dispose(){this.disposed=!0,this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.applySize),document.removeEventListener("visibilitychange",this.onVisibility),this.renderer.domElement.removeEventListener("pointerup",this.onClick),this.renderer.domElement.removeEventListener("pointerdown",this.rememberPointer),this.renderer.domElement.removeEventListener("contextmenu",this.onRightClick),this.rig.dispose(),this.renderer.dispose(),this.container.removeChild(this.renderer.domElement)}rebuildComposer(e,t){this.composer?.dispose(),this.quality.bloom?(this.composer=new tA(this.renderer),this.composer.addPass(new nA(this.scene,this.rig.camera)),this.bloomPass=new sa(new ae(e,t),.32,.6,.82),this.composer.addPass(this.bloomPass),this.composer.addPass(new sA),this.composer.setSize(e,t)):(this.composer=null,this.bloomPass=null)}setQuality(e){this.requestedTier=e;const t=e==="auto"?$0(this.renderer):e;Ia[t].tier!==this.quality.tier&&(this.quality=Ia[t],this.applySize(),this.config&&this.applyConfig(this.config,!0))}setReducedMotion(e){this.simEnv.reducedMotion=e,this.rig.reducedMotion=e}setFeedMode(e){this.feedMode=e}setCameraMode(e){this.rig.setMode(e),e!=="follow"&&this.rig.releaseFollow(this.dims.floorY+this.dims.height*.5)}followFish(e){if(!e){this.rig.releaseFollow(this.dims.floorY+this.dims.height*.5),this.rig.mode==="follow"&&this.rig.setMode("orbit");return}this.fish.findByKey(e)&&(this.rig.followTarget=()=>this.fish.findByKey(e)?.agent.pos??null,this.rig.setMode("follow"))}applyConfig(e,t=!1){const i=JSON.stringify([e.water,Math.round(e.gallons*10),e.substrate,e.background,e.lighting,e.decor,e.flora,this.quality.tier]),r=JSON.stringify(e.fish)+this.quality.tier,s=t||i!==this.lastStructureKey,a=t||s||r!==this.lastFishKey;if(this.config=e,s){this.lastStructureKey=i;const o=Vc(e.gallons);this.dims={halfW:o.width/2,halfD:o.depth/2,height:o.height,floorY:0,surfaceY:o.height*.94},Object.assign(this.simEnv,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,surfaceY:this.dims.surfaceY}),this.current.setup(o.width,o.height,o.depth);const l=this.decor.rebuild(e.decor,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,height:this.dims.height}),c=this.flora.rebuild(e.flora,{halfW:this.dims.halfW,halfD:this.dims.halfD,floorY:this.dims.floorY,surfaceY:this.dims.surfaceY},this.current,l.anchors);this.simEnv.obstacles=[...l.obstacles,...c.obstacles],this.simEnv.shelters=l.shelters,this.environment.rebuild(this.dims,e.water,e.substrate,e.background,e.lighting,this.quality,l.airstone),Jn.uSurfaceY.value=this.dims.surfaceY,this.rig.frameTank(this.dims.halfW,this.dims.height,this.dims.floorY+this.dims.height*.52)}a&&(this.lastFishKey=r,this.fish.rebuild(e.fish,this.simEnv,this.quality.maxFish))}feedAt(e,t,i="normal"){const r=this.toNdc(e,t);this.raycaster.setFromCamera(r,this.rig.camera);const s=new Zi(new T(0,-1,0),this.dims.surfaceY),a=new T;if(this.raycaster.ray.intersectPlane(s,a)){const o=Fe.clamp(a.x,-this.dims.halfW*.9,this.dims.halfW*.9),l=Fe.clamp(a.z,-this.dims.halfD*.9,this.dims.halfD*.9);return this.fish.feed(o,l,this.simEnv,i),this.callbacks.onFed?.(),!0}return!1}toNdc(e,t){const i=this.renderer.domElement.getBoundingClientRect();return new ae((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1)}targetDayFactor(){switch(this.config?.dayNight??"day"){case"day":return 1;case"night":return 0;case"realtime":{const t=new Date().getHours()+new Date().getMinutes()/60;return t>=8&&t<18?1:t>=6&&t<8?(t-6)/2:t>=18&&t<21?1-(t-18)/3:0}case"cycle":{const t=this.lastCycleT%240/240;return t<.55?1:t<.62?1-(t-.55)/.07:t<.93?0:(t-.93)/.07}}}screenshot(){return this.composer?this.composer.render():this.renderer.render(this.scene,this.rig.camera),this.renderer.domElement.toDataURL("image/png")}fishPosition(e){return this.fish.findByKey(e)?.agent.pos??null}enableExternalDrive(){this.renderer.setAnimationLoop(null)}captureFrontView(e,t,i="cover",r=.52){const{floorY:s,height:a,halfW:o,halfD:l}=this.dims,c=s+a*r,h=s+a-c,u=c-s,d=i==="contain"?Math.max(h,u):Math.min(h,u);this.rig.lockFrontView(o,d,l,c,e,t)}advance(e){const t=Jn.uTime.value+e;if(Jn.uTime.value=t,this.lastCycleT+=e,this.simEnv.time=t,this.current.time=t,this.dayFactor=Fe.damp(this.dayFactor,this.targetDayFactor(),.5,e),this.simEnv.dayFactor=this.dayFactor,this.fish.update(e,this.simEnv),this.environment.update(this.dayFactor,this.rig.camera),this.rig.update(e),this.composer?this.composer.render():this.renderer.render(this.scene,this.rig.camera),this.firstFrameDone||(this.firstFrameDone=!0,dA()),this.frameTimes.push(e),this.frameTimes.length>=60){const i=this.frameTimes.reduce((r,s)=>r+s,0)/this.frameTimes.length;if(this.stats.fps=Math.round(1/i),this.frameTimes=[],this.requestedTier==="auto"&&this.stats.fps<28){const r=["ultra","high","medium","low"],s=r.indexOf(this.quality.tier);s>=0&&s<r.length-1&&(this.quality=Ia[r[s+1]],this.applySize(),this.config&&this.applyConfig(this.config,!0),this.callbacks.onAutoQuality?.(this.quality.tier))}}this.stats.drawCalls=this.renderer.info.render.calls,this.stats.triangles=this.renderer.info.render.triangles,this.stats.fishCount=this.fish.populations.reduce((i,r)=>i+r.agents.length,0)}}let Ey=null;function sg(n){Ey=n}function Mp(){return Ey}const BA={},ag=n=>{let e;const t=new Set,i=(h,u)=>{const d=typeof h=="function"?h(e):h;if(!Object.is(d,e)){const f=e;e=u??(typeof d!="object"||d===null)?d:Object.assign({},e,d),t.forEach(g=>g(e,f))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:h=>(t.add(h),()=>t.delete(h)),destroy:()=>{(BA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},c=e=n(i,r,l);return l},HA=n=>n?ag(n):ag;var Ty={exports:{}},by={},Ay={exports:{}},Cy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=mt;function GA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var VA=typeof Object.is=="function"?Object.is:GA,WA=aa.useState,XA=aa.useEffect,jA=aa.useLayoutEffect,YA=aa.useDebugValue;function qA(n,e){var t=e(),i=WA({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return jA(function(){r.value=t,r.getSnapshot=e,dh(r)&&s({inst:r})},[n,t,e]),XA(function(){return dh(r)&&s({inst:r}),n(function(){dh(r)&&s({inst:r})})},[n]),YA(t),t}function dh(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!VA(n,t)}catch{return!0}}function $A(n,e){return e()}var KA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?$A:qA;Cy.useSyncExternalStore=aa.useSyncExternalStore!==void 0?aa.useSyncExternalStore:KA;Ay.exports=Cy;var ZA=Ay.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=mt,JA=ZA;function QA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var eC=typeof Object.is=="function"?Object.is:QA,tC=JA.useSyncExternalStore,nC=jc.useRef,iC=jc.useEffect,rC=jc.useMemo,sC=jc.useDebugValue;by.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=nC(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=rC(function(){function l(f){if(!c){if(c=!0,h=f,f=i(f),r!==void 0&&a.hasValue){var g=a.value;if(r(g,f))return u=g}return u=f}if(g=u,eC(h,f))return g;var y=i(f);return r!==void 0&&r(g,y)?(h=f,g):(h=f,u=y)}var c=!1,h,u,d=t===void 0?null:t;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,t,i,r]);var o=tC(n,s[0],s[1]);return iC(function(){a.hasValue=!0,a.value=o},[o]),sC(o),o};Ty.exports=by;var aC=Ty.exports;const oC=ug(aC),Ry={},{useDebugValue:lC}=Sg,{useSyncExternalStoreWithSelector:cC}=oC;let og=!1;const uC=n=>n;function hC(n,e=uC,t){(Ry?"production":void 0)!=="production"&&t&&!og&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),og=!0);const i=cC(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return lC(i),i}const dC=n=>{(Ry?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?HA(n):n,t=(i,r)=>hC(e,i,r);return Object.assign(t,e),t},fC=n=>dC,pC={};function mC(n,e){let t;try{t=n()}catch{return}return{getItem:r=>{var s;const a=l=>l===null?null:JSON.parse(l,void 0),o=(s=t.getItem(r))!=null?s:null;return o instanceof Promise?o.then(a):a(o)},setItem:(r,s)=>t.setItem(r,JSON.stringify(s,void 0)),removeItem:r=>t.removeItem(r)}}const bo=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(i){return bo(i)(t)},catch(i){return this}}}catch(t){return{then(i){return this},catch(i){return bo(i)(t)}}}},gC=(n,e)=>(t,i,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,p)=>({...p,...m}),...e},a=!1;const o=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return n((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...m)},i,r);const h=bo(s.serialize),u=()=>{const m=s.partialize({...i()});let p;const v=h({state:m,version:s.version}).then(_=>c.setItem(s.name,_)).catch(_=>{p=_});if(p)throw p;return v},d=r.setState;r.setState=(m,p)=>{d(m,p),u()};const f=n((...m)=>{t(...m),u()},i,r);let g;const y=()=>{var m;if(!c)return;a=!1,o.forEach(v=>v(i()));const p=((m=s.onRehydrateStorage)==null?void 0:m.call(s,i()))||void 0;return bo(c.getItem.bind(c))(s.name).then(v=>{if(v)return s.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return s.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var _;return g=s.merge(v,(_=i())!=null?_:f),t(g,!0),u()}).then(()=>{p?.(g,void 0),a=!0,l.forEach(v=>v(g))}).catch(v=>{p?.(void 0,v)})};return r.persist={setOptions:m=>{s={...s,...m},m.getStorage&&(c=m.getStorage())},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>a,onHydrate:m=>(o.add(m),()=>{o.delete(m)}),onFinishHydration:m=>(l.add(m),()=>{l.delete(m)})},y(),g||f},vC=(n,e)=>(t,i,r)=>{let s={storage:mC(()=>localStorage),partialize:y=>y,version:0,merge:(y,m)=>({...m,...y}),...e},a=!1;const o=new Set,l=new Set;let c=s.storage;if(!c)return n((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...y)},i,r);const h=()=>{const y=s.partialize({...i()});return c.setItem(s.name,{state:y,version:s.version})},u=r.setState;r.setState=(y,m)=>{u(y,m),h()};const d=n((...y)=>{t(...y),h()},i,r);r.getInitialState=()=>d;let f;const g=()=>{var y,m;if(!c)return;a=!1,o.forEach(v=>{var _;return v((_=i())!=null?_:d)});const p=((m=s.onRehydrateStorage)==null?void 0:m.call(s,(y=i())!=null?y:d))||void 0;return bo(c.getItem.bind(c))(s.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==s.version){if(s.migrate)return[!0,s.migrate(v.state,v.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var _;const[x,C]=v;if(f=s.merge(C,(_=i())!=null?_:d),t(f,!0),x)return h()}).then(()=>{p?.(f,void 0),f=i(),a=!0,l.forEach(v=>v(f))}).catch(v=>{p?.(void 0,v)})};return r.persist={setOptions:y=>{s={...s,...y},y.storage&&(c=y.storage)},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>a,onHydrate:y=>(o.add(y),()=>{o.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},s.skipHydration||g(),f||d},_C=(n,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((pC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),gC(n,e)):vC(n,e),yC=_C,Ms={dayNight:"cycle",fishNames:{}},wp=[{...Ms,name:"Amazon Community",water:"freshwater",gallons:55,substrate:"sand",background:"natural",lighting:"daylight",fish:{"cardinal-tetra":12,"rummynose-tetra":8,angelfish:2,corydoras:6,"bristlenose-pleco":1},flora:{"amazon-sword":3,vallisneria:5,cryptocoryne:4,"java-fern":2},decor:["driftwood","river-rocks"]},{...Ms,name:"Nano Planted",water:"freshwater",gallons:8,substrate:"blacksand",background:"planted",lighting:"daylight",fish:{"neon-tetra":8,"cherry-shrimp":10,"nerite-snail":2},flora:{"java-moss":3,"dwarf-hairgrass":6,anubias:2,cryptocoryne:2},decor:["river-rocks"]},{...Ms,name:"Reef Lagoon",water:"saltwater",gallons:75,substrate:"crushedcoral",background:"reef",lighting:"actinic",fish:{"ocellaris-clown":2,"green-chromis":7,firefish:2,"royal-gramma":1,"lawnmower-blenny":1,"cleaner-shrimp":1,"turbo-snail":3},flora:{"pulsing-xenia":2,"hammer-coral":2,zoanthids:3,"bubble-anemone":1,"kenya-tree":2,acropora:2,"brain-coral":1},decor:["reef-rock","airstone"]},{...Ms,name:"Betta Oasis",water:"freshwater",gallons:10,substrate:"gravel",background:"planted",lighting:"warm",fish:{betta:1,"nerite-snail":1},flora:{anubias:3,"java-fern":2,frogbit:4,cryptocoryne:3},decor:["driftwood"]},{...Ms,name:"Blackwater Stream",water:"freshwater",gallons:29,substrate:"sand",background:"black",lighting:"blackwater",fish:{"rummynose-tetra":10,"harlequin-rasbora":8,"kuhli-loach":6},flora:{"java-fern":3,cryptocoryne:5,"java-moss":2,frogbit:5},decor:["driftwood","slate-stack"]},{...Ms,name:"Tang Highway",water:"saltwater",gallons:150,substrate:"sand",background:"deepblue",lighting:"actinic",fish:{"blue-tang":1,"yellow-tang":1,"green-chromis":9,"sixline-wrasse":1,"banggai-cardinal":3,"turbo-snail":4},flora:{acropora:3,"montipora-plate":2,toadstool:2,zoanthids:2},decor:["reef-rock","airstone"]}],xC=wp[0];function SC(n){const e=JSON.stringify(n),t=btoa(unescape(encodeURIComponent(e))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),i=new URL(window.location.href);return i.hash=`t=${t}`,i.toString()}function MC(){try{const n=window.location.hash.match(/t=([A-Za-z0-9\-_]+)/);if(!n)return null;const e=n[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(escape(atob(e))),i=JSON.parse(t);return!i||typeof i!="object"||!i.water||!i.gallons?null:{...i,fishNames:i.fishNames??{},decor:i.decor??[],flora:i.flora??{},fish:i.fish??{}}}catch{return null}}const Py=[{id:"driftwood",name:"Driftwood Branch",water:"freshwater",kind:"driftwood",info:"A weathered branch reaching across the tank — plecos rasp at it, plants root on it."},{id:"spider-wood",name:"Spider Wood",water:"freshwater",kind:"spiderwood",info:"A tangle of thin, twisting roots fanning upward — the aquascaper’s favorite. Shrimp and fry vanish into the thicket."},{id:"driftwood-stump",name:"Root Stump",water:"freshwater",kind:"stump",info:"A gnarled sunken stump with roots splaying into the sand — a solid centerpiece with a shady hollow beneath."},{id:"hollow-log",name:"Hollow Log",water:"both",kind:"log",info:"An open-ended log resting in the substrate. Fish cruise straight through it and loaches claim the shade inside."},{id:"log-arch",name:"Arched Log Tunnel",water:"both",kind:"log",info:"A hollow log bowed into an archway — a driftwood bridge the whole tank likes to swim under and through."},{id:"river-rocks",name:"River Stones",water:"both",kind:"rock",info:"Smooth rounded stones in a natural cluster."},{id:"slate-stack",name:"Slate Ledges",water:"freshwater",kind:"slate",info:"Flat stacked stone forming caves and ledges — territory for cichlids, shelter for loaches."},{id:"reef-rock",name:"Reef Rockscape",water:"saltwater",kind:"reefrock",info:"Porous aragonite rock full of holes and arches — the skeleton of a reef tank."},{id:"airstone",name:"Air Stone",water:"both",kind:"airstone",info:"A steady column of bubbles rising to the surface. Purely for the joy of it."},{id:"sunken-ship",name:"Sunken Ship",water:"both",kind:"ship",playful:!0,info:"A little wrecked galleon listing in the sand. The fish do not question it."},{id:"castle",name:"Castle Ruin",water:"both",kind:"castle",playful:!0,info:"A classic aquarium castle with swim-through windows."}];new Map(Py.map(n=>[n.id,n]));const tf=n=>Py.filter(e=>e.water==="both"||e.water===n),fh=typeof window<"u"?MC():null;let lg;const Ee=fC()(yC((n,e)=>({config:fh??xC,savedTanks:{},quality:"auto",audioOn:!1,audioVolume:.6,musicOn:!1,cameraMode:"orbit",followFishKey:null,selectedFishKey:null,uiHidden:!1,panelOpen:new URLSearchParams(location.search).has("kanban")?!1:window.matchMedia?.("(min-width: 900px)").matches??!0,showHud:!1,reducedMotion:window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,feedMode:!1,toast:null,setConfig:t=>n(i=>({config:{...i.config,...t}})),setWater:t=>n(i=>i.config.water===t?i:{config:{...i.config,water:t,fish:{},flora:{},fishNames:{},decor:i.config.decor.filter(r=>tf(t).some(s=>s.id===r)),substrate:t==="saltwater"?"crushedcoral":"sand",background:t==="saltwater"?"reef":"natural",lighting:t==="saltwater"?"actinic":"daylight"}}),setFishCount:(t,i)=>n(r=>{const s={...r.config.fish};return i<=0?delete s[t]:s[t]=Math.min(i,60),{config:{...r.config,fish:s}}}),setFloraCount:(t,i)=>n(r=>{const s={...r.config.flora};return i<=0?delete s[t]:s[t]=Math.min(i,24),{config:{...r.config,flora:s}}}),toggleDecor:t=>n(i=>({config:{...i.config,decor:i.config.decor.includes(t)?i.config.decor.filter(r=>r!==t):[...i.config.decor,t]}})),nameFish:(t,i)=>n(r=>({config:{...r.config,fishNames:{...r.config.fishNames,[t]:i}}})),applyPreset:t=>n({config:structuredClone(t),followFishKey:null,selectedFishKey:null}),randomize:()=>{const t=Math.random()<.55?"freshwater":"saltwater",i=[10,20,29,40,55,75,120][Math.floor(Math.random()*7)],r=Vc(i).capacity,s=My(t).filter(f=>f.minGallons<=i),a={};let o=0;const l=[...s].sort(()=>Math.random()-.5);for(const f of l){if(o>=r*.8)break;const g=f.minGroup>1?f.minGroup+Math.floor(Math.random()*5):f.maxPerTank??1,y=f.bioload*g;o+y<=r*.85&&!(f.mouthIn&&Object.keys(a).length>0)&&(a[f.id]=g,o+=y)}const c=xy(t).sort(()=>Math.random()-.5).slice(0,4+Math.floor(Math.random()*3)),h={};for(const f of c)h[f.id]=1+Math.floor(Math.random()*4);const u=tf(t).filter(f=>!f.playful||Math.random()<.2).filter(()=>Math.random()<.6).map(f=>f.id),d=t==="saltwater"?["sand","crushedcoral"]:["sand","gravel","blacksand"];n(f=>({config:{...f.config,water:t,gallons:i,fish:a,flora:h,decor:u,fishNames:{},substrate:d[Math.floor(Math.random()*d.length)],background:t==="saltwater"?"reef":["natural","planted","deepblue"][Math.floor(Math.random()*3)],lighting:t==="saltwater"?"actinic":"daylight",name:"Surprise Tank"}})),e().showToast("Here’s a surprise tank — remix it however you like.")},saveTank:t=>n(i=>({savedTanks:{...i.savedTanks,[t]:{...structuredClone(i.config),name:t}},config:{...i.config,name:t}})),loadTank:t=>{const i=e().savedTanks[t];i&&n({config:structuredClone(i),followFishKey:null,selectedFishKey:null})},deleteTank:t=>n(i=>{const r={...i.savedTanks};return delete r[t],{savedTanks:r}}),set:t=>n(t),showToast:t=>{clearTimeout(lg),n({toast:t}),lg=setTimeout(()=>n({toast:null}),4200)}}),{name:"aquarium-v1",partialize:n=>({config:n.config,savedTanks:n.savedTanks,quality:n.quality,audioOn:n.audioOn,audioVolume:n.audioVolume,musicOn:n.musicOn}),merge:(n,e)=>{const t={...e,...n};return fh&&(t.config=fh),t}}));function wC(){const n=mt.useRef(null);return mt.useEffect(()=>{const e=n.current;if(!e)return;let t;try{t=new wy(e)}catch(s){console.error("WebGL init failed:",s),e.innerHTML='<div style="display:grid;place-items:center;height:100%;color:#8fa8b8;font-size:15px;padding:24px;text-align:center">This aquarium needs WebGL, which your browser has disabled or doesn’t support.</div>';return}sg(t),t.callbacks.onFishPicked=s=>{const a=Ee.getState();s?(a.set({selectedFishKey:s,followFishKey:s}),t.followFish(s)):a.selectedFishKey&&(a.set({selectedFishKey:null,followFishKey:null}),t.followFish(null))},t.callbacks.onAddFish=()=>{const s=Ee.getState();if(Object.values(s.config.fish).reduce((c,h)=>c+h,0)>=60){s.showToast("Hồ đạt giới hạn 60 sinh vật");return}const o=Object.entries(s.config.fish).filter(([c,h])=>h>0&&!c.includes("snail")&&!c.includes("shrimp")),l=o.length?o[Math.floor(Math.random()*o.length)][0]:s.config.water==="freshwater"?"guppy":"green-chromis";s.setFishCount(l,(s.config.fish[l]||0)+1),s.showToast("Đã thêm một con cá")},t.callbacks.onAutoQuality=s=>{Ee.getState().showToast(`Lowered quality to “${s}” to keep things smooth. You can pin a tier in Settings.`)};const i=Ee.getState();t.setQuality(i.quality),t.applyConfig(i.config),t.setReducedMotion(i.reducedMotion),t.setCameraMode(i.cameraMode);const r=Ee.subscribe((s,a)=>{s.config!==a.config&&t.applyConfig(s.config),s.quality!==a.quality&&t.setQuality(s.quality),s.feedMode!==a.feedMode&&t.setFeedMode(s.feedMode),s.reducedMotion!==a.reducedMotion&&t.setReducedMotion(s.reducedMotion),s.cameraMode!==a.cameraMode&&s.cameraMode!=="follow"&&t.setCameraMode(s.cameraMode),s.followFishKey!==a.followFishKey&&t.followFish(s.followFishKey)});return()=>{r(),sg(null),t.dispose()}},[]),mt.useEffect(()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>Ee.getState().set({reducedMotion:e.matches});return e.addEventListener?.("change",t),()=>e.removeEventListener?.("change",t)},[]),L.jsx("div",{id:"canvas-host",ref:n,"aria-label":"Aquarium view. Drag to look around, scroll to zoom.",role:"img"})}function Ly(n){let e=0;for(const[t,i]of Object.entries(n)){const r=Xc.get(t);r&&(e+=r.bioload*i)}return e}function EC(n){const e=[],t=Vc(n.gallons),r=Object.entries(n.fish).filter(([,c])=>c>0).map(([c,h])=>({sp:Xc.get(c),n:h})).filter(c=>c.sp),s=Object.entries(n.flora).some(([c,h])=>h>0&&["stem","rosette","carpet","moss","floating"].includes(ef.get(c)?.kind??""))?1.15:1,a=Ly(n.fish),o=t.capacity*s;a>o*1.25?e.push({severity:"warning",message:`This is heavily overstocked (${Math.round(a/o*100)}% of capacity). In a real tank, waste would build up faster than the filter and plants could process it.`}):a>o&&e.push({severity:"caution",message:`Slightly overstocked (${Math.round(a/o*100)}% of capacity). A real aquarist would upgrade filtration or thin the stock a little.`});for(const{sp:c,n:h}of r){if(c.minGroup>1&&h<c.minGroup&&e.push({severity:"caution",message:`${c.common} are shoaling fish — below ${c.minGroup} they get stressed and hide. Try ${c.minGroup} or more to see real schooling.`}),n.gallons<c.minGallons&&e.push({severity:"caution",message:`A ${c.common} really wants at least ${c.minGallons} gallons (this tank is ${Math.round(n.gallons)}). Adults need the swimming room.`}),c.maxPerTank&&h>c.maxPerTank&&e.push({severity:"warning",message:`More than ${c.maxPerTank} ${c.common}${c.maxPerTank>1?"s":""} in one tank leads to serious fighting${c.id==="betta"?" — male bettas will battle to the death":""}.`}),c.mouthIn)for(const{sp:u}of r)u.id!==c.id&&u.adultSizeIn<=c.mouthIn&&e.push({severity:"warning",message:`A full-grown ${c.common} will eventually eat ${u.common} — anything that fits in the mouth is food.`});if(c.temperament==="aggressive")for(const{sp:u}of r)u.id!==c.id&&u.temperament==="peaceful"&&!u.invert&&u.adultSizeIn<c.adultSizeIn*1.2&&e.push({severity:"caution",message:`${c.common} may harass ${u.common} — watch for nipped fins in a real tank.`});if(c.id==="tiger-barb")for(const{sp:u}of r)u.shape.finLong&&e.push({severity:"caution",message:`Tiger barbs are famous fin-nippers — the flowing fins of a ${u.common} are irresistible to them.`});if(c.water==="saltwater"&&c.reefSafe===!1&&Object.entries(n.flora).some(([d,f])=>f>0&&ef.get(d))&&e.push({severity:"caution",message:`${c.common} is not fully reef-safe — it may nip at corals. Reef keepers call this "with caution."`}),c.invert&&c.id.includes("shrimp"))for(const{sp:u}of r)!u.invert&&u.adultSizeIn>=3.5&&e.push({severity:"caution",message:`${u.common} may treat ${c.common} as an expensive snack.`})}const l=new Set;return e.filter(c=>l.has(c.message)?!1:(l.add(c.message),!0))}function TC(){const[n,e]=mt.useState("tank"),t=Ee(s=>s.config),i=Ee(s=>s.set),r=t.water==="saltwater";return L.jsxs("aside",{className:"panel","aria-label":"Tank builder",children:[L.jsxs("div",{className:"panel-head",children:[L.jsxs("h1",{children:["🐠 ",t.name||"My Aquarium"]}),L.jsx("button",{className:"close","aria-label":"Close panel",onClick:()=>i({panelOpen:!1}),children:"✕"})]}),L.jsx("nav",{className:"tabs","aria-label":"Panel sections",children:[["tank","Tank"],["fish","Fish"],["flora",r?"Corals":"Plants"],["decor","Decor"],["saved","Saved"],["settings","Settings"]].map(([s,a])=>L.jsx("button",{className:n===s?"active":"",onClick:()=>e(s),children:a},s))}),L.jsxs("div",{className:"panel-body",children:[n==="tank"&&L.jsx(bC,{}),n==="fish"&&L.jsx(CC,{}),n==="flora"&&L.jsx(PC,{}),n==="decor"&&L.jsx(LC,{}),n==="saved"&&L.jsx(DC,{}),n==="settings"&&L.jsx(IC,{})]})]})}function bC(){const n=Ee(a=>a.config),e=Ee(a=>a.setConfig),t=Ee(a=>a.setWater),i=Ee(a=>a.applyPreset),r=Ee(a=>a.randomize),s=n.water==="saltwater";return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Water type"}),L.jsxs("div",{className:"seg",role:"radiogroup","aria-label":"Water type",children:[L.jsx("button",{className:s?"":"active",onClick:()=>t("freshwater"),children:"🌿 Freshwater"}),L.jsx("button",{className:s?"active":"",onClick:()=>t("saltwater"),children:"🪸 Saltwater"})]}),Object.keys(n.fish).length>0&&L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"Switching water type clears the stock — the two worlds don’t mix."})]}),L.jsxs("div",{className:"section",children:[L.jsxs("h2",{children:["Tank size — ",oA(n.gallons)]}),L.jsxs("div",{className:"slider-row",children:[L.jsx("input",{type:"range",min:Jd,max:gy,step:1,value:n.gallons,"aria-label":"Tank size in gallons",onChange:a=>e({gallons:Number(a.target.value)})}),L.jsxs("span",{className:"value",children:[Math.round(n.gallons)," gal"]})]}),L.jsx("div",{className:"seg",style:{marginTop:8},children:Zd.map(a=>L.jsx("button",{className:Math.abs(n.gallons-a.gallons)<=3?"active":"",title:a.blurb,onClick:()=>e({gallons:a.gallons}),children:a.name},a.name))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Substrate"}),L.jsx("div",{className:"seg",children:(s?[["sand","Sand"],["crushedcoral","Crushed coral"],["blacksand","Black sand"]]:[["sand","Sand"],["gravel","Gravel"],["blacksand","Black sand"]]).map(([a,o])=>L.jsx("button",{className:n.substrate===a?"active":"",onClick:()=>e({substrate:a}),children:o},a))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Background"}),L.jsx("div",{className:"seg",children:[["natural","Natural"],["planted","Planted"],["reef","Reef"],["deepblue","Deep blue"],["black","Black"]].map(([a,o])=>L.jsx("button",{className:n.background===a?"active":"",onClick:()=>e({background:a}),children:o},a))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Lighting mood"}),L.jsx("div",{className:"seg",children:[["daylight","☀️ Daylight"],["warm","🌅 Warm"],["actinic","💙 Actinic"],["blackwater","🍂 Blackwater"]].map(([a,o])=>L.jsx("button",{className:n.lighting===a?"active":"",onClick:()=>e({lighting:a}),children:o},a))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Day & night"}),L.jsx("div",{className:"seg",children:[["day","Day"],["night","Night"],["cycle","Cycle"],["realtime","My time"]].map(([a,o])=>L.jsx("button",{className:n.dayNight===a?"active":"",onClick:()=>e({dayNight:a}),children:o},a))}),L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"“Cycle” runs a full day every 4 minutes. “My time” follows your clock — nocturnal fish wake at night."})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Starter tanks"}),L.jsx("div",{className:"preset-list",children:wp.map(a=>L.jsxs("button",{onClick:()=>i(a),children:[L.jsx("div",{className:"p-name",children:a.name}),L.jsxs("div",{className:"p-desc",children:[a.water==="saltwater"?"Saltwater":"Freshwater"," · ",a.gallons," gal ·"," ",Object.values(a.fish).reduce((o,l)=>o+l,0)," fish"]})]},a.name))}),L.jsx("div",{className:"row-actions",style:{marginTop:10},children:L.jsx("button",{className:"btn primary",onClick:r,children:"🎲 Surprise me"})})]})]})}const AC=n=>({background:`linear-gradient(180deg, ${n.palette.back}, ${n.palette.base} 55%, ${n.palette.belly})`});function CC(){const n=Ee(g=>g.config),e=Ee(g=>g.setFishCount),[t,i]=mt.useState(""),[r,s]=mt.useState("all"),[a,o]=mt.useState(null),l=My(n.water),c=mt.useMemo(()=>{const g=t.trim().toLowerCase();return l.filter(y=>{if(g&&!`${y.common} ${y.scientific} ${y.colorTags.join(" ")}`.toLowerCase().includes(g))return!1;switch(r){case"peaceful":return y.temperament==="peaceful"&&!y.invert;case"schooling":return y.archetype==="schooler";case"bottom":return y.zone==="bottom"&&!y.invert;case"easy":return y.careLevel==="easy";case"inverts":return!!y.invert;default:return!0}})},[l,t,r]),h=Vc(n.gallons),u=Ly(n.fish),d=Math.min(160,Math.round(u/h.capacity*100)),f=mt.useMemo(()=>EC(n),[n]);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"capacity","aria-label":`Stocking level ${d}%`,children:[L.jsx("div",{className:"bar",children:L.jsx("div",{className:`fill ${d>125?"over":d>100?"warn":""}`,style:{width:`${Math.min(100,d/160*100*1.6)}%`}})}),L.jsxs("div",{className:"label",children:["Stocking: ",L.jsxs("strong",{children:[d,"%"]})," of what this ",Math.round(n.gallons),"-gallon tank supports",d<=100?" — healthy":d<=125?" — getting crowded":" — overstocked"]})]}),f.length>0&&L.jsx("div",{className:"section",children:L.jsx("div",{className:"warning-list",children:f.map((g,y)=>L.jsx("div",{className:`warning warning-${g.severity}`,role:"note",children:g.message},y))})}),L.jsx("div",{className:"search-row",children:L.jsx("input",{type:"search",placeholder:"Search fish… (name or color)",value:t,onChange:g=>i(g.target.value),"aria-label":"Search fish"})}),L.jsx("div",{className:"filter-chips",role:"group","aria-label":"Filter fish",children:[["all","All"],["schooling","Schooling"],["peaceful","Peaceful"],["bottom","Bottom"],["easy","Easy care"],["inverts","Inverts"]].map(([g,y])=>L.jsx("button",{className:r===g?"active":"",onClick:()=>s(g),children:y},g))}),c.map(g=>{const y=n.fish[g.id]??0;return L.jsxs("div",{children:[L.jsxs("div",{className:"species-row",children:[L.jsx("div",{className:"species-chip",style:AC(g),"aria-hidden":!0}),L.jsxs("div",{className:"species-info",children:[L.jsx("div",{className:"name",children:g.common}),L.jsxs("div",{className:"meta",children:[g.adultSizeIn,"″ · ",g.temperament," · ",g.zone," · ",g.minGroup>1?`group of ${g.minGroup}+`:"fine solo"]})]}),L.jsx("button",{className:"info-btn","aria-label":`About ${g.common}`,onClick:()=>o(a===g.id?null:g.id),children:"ⓘ"}),L.jsxs("div",{className:"stepper",children:[L.jsx("button",{"aria-label":`Remove one ${g.common}`,onClick:()=>e(g.id,y-1),disabled:y===0,children:"−"}),L.jsx("span",{className:"count",children:y}),L.jsx("button",{"aria-label":`Add one ${g.common}`,onClick:()=>e(g.id,y+1),children:"+"})]})]}),a===g.id&&L.jsx(RC,{sp:g})]},g.id)}),c.length===0&&L.jsx("p",{style:{color:"var(--text-dim)",fontSize:13.5},children:"No matches — try a different search."})]})}function RC({sp:n}){return L.jsxs("div",{style:{padding:"4px 10px 12px 62px",fontSize:13,lineHeight:1.5,color:"#c4d4de"},children:[L.jsx("div",{style:{fontStyle:"italic",color:"var(--text-dim)",marginBottom:4},children:n.scientific}),L.jsxs("div",{children:[L.jsx("strong",{children:"Habitat:"})," ",n.habitat]}),L.jsx("div",{style:{marginTop:4,borderLeft:"2.5px solid var(--accent)",paddingLeft:9},children:n.funFact}),L.jsxs("div",{style:{marginTop:4,color:"var(--text-dim)"},children:["Care: ",n.careLevel," · needs ",n.minGallons,"+ gal",n.water==="saltwater"&&n.reefSafe===!1?" · not reef-safe":""]})]})}function PC(){const n=Ee(a=>a.config),e=Ee(a=>a.setFloraCount),[t,i]=mt.useState(null),r=xy(n.water),s=n.water==="saltwater";return L.jsxs(L.Fragment,{children:[L.jsx("p",{style:{fontSize:13,color:"var(--text-dim)",marginTop:0},children:s?"Corals attach to the rockwork — add Reef Rockscape in Decor for the best layout. Watch the Xenia pulse.":"Plants sway in the filter current. Java fern, anubias and moss attach to wood and stone."}),r.map(a=>{const o=n.flora[a.id]??0;return L.jsxs("div",{children:[L.jsxs("div",{className:"species-row",children:[L.jsx("div",{className:"species-chip",style:{background:`linear-gradient(135deg, ${a.colors[0]}, ${a.colors[1%a.colors.length]})`},"aria-hidden":!0}),L.jsxs("div",{className:"species-info",children:[L.jsx("div",{className:"name",children:a.name}),L.jsxs("div",{className:"meta",children:[a.kind==="hardcoral"?"hard coral (rigid)":a.kind," · ",a.careLevel]})]}),L.jsx("button",{className:"info-btn","aria-label":`About ${a.name}`,onClick:()=>i(t===a.id?null:a.id),children:"ⓘ"}),L.jsxs("div",{className:"stepper",children:[L.jsx("button",{"aria-label":`Remove one ${a.name}`,onClick:()=>e(a.id,o-1),disabled:o===0,children:"−"}),L.jsx("span",{className:"count",children:o}),L.jsx("button",{"aria-label":`Add one ${a.name}`,onClick:()=>e(a.id,o+1),children:"+"})]})]}),t===a.id&&L.jsxs("div",{style:{padding:"4px 10px 12px 62px",fontSize:13,lineHeight:1.5,color:"#c4d4de"},children:[L.jsx("div",{style:{fontStyle:"italic",color:"var(--text-dim)",marginBottom:4},children:a.scientific}),a.info]})]},a.id)})]})}function LC(){const n=Ee(s=>s.config),e=Ee(s=>s.toggleDecor),t=tf(n.water),i=t.filter(s=>!s.playful),r=t.filter(s=>s.playful);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Hardscape"}),L.jsx("div",{className:"decor-grid",children:i.map(s=>L.jsx("button",{className:n.decor.includes(s.id)?"active":"",onClick:()=>e(s.id),title:s.info,"aria-pressed":n.decor.includes(s.id),children:s.name},s.id))})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Playful props"}),L.jsx("div",{className:"decor-grid",children:r.map(s=>L.jsx("button",{className:n.decor.includes(s.id)?"active":"",onClick:()=>e(s.id),title:s.info,"aria-pressed":n.decor.includes(s.id),children:s.name},s.id))})]}),L.jsx("p",{style:{fontSize:12.5,color:"var(--text-dim)"},children:"The air stone adds a bubble column; reef rock gives corals a place to grow and shy fish a place to hide."})]})}function DC(){const n=Ee(c=>c.config),e=Ee(c=>c.savedTanks),t=Ee(c=>c.saveTank),i=Ee(c=>c.loadTank),r=Ee(c=>c.deleteTank),s=Ee(c=>c.showToast),[a,o]=mt.useState(n.name||"My Tank"),l=Object.keys(e);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Save this tank"}),L.jsxs("div",{className:"name-input",children:[L.jsx("input",{value:a,onChange:c=>o(c.target.value),"aria-label":"Tank name",maxLength:40}),L.jsx("button",{className:"btn primary",onClick:()=>{t(a.trim()||"My Tank"),s(`Saved “${a.trim()||"My Tank"}”.`)},children:"Save"})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Your tanks"}),l.length===0&&L.jsx("p",{style:{color:"var(--text-dim)",fontSize:13.5},children:"Nothing saved yet — build something and save it here. Tanks are stored in this browser."}),l.map(c=>L.jsxs("div",{className:"saved-row",children:[L.jsx("span",{className:"s-name",children:c}),L.jsx("button",{className:"btn",onClick:()=>i(c),children:"Load"}),L.jsx("button",{className:"btn danger","aria-label":`Delete ${c}`,onClick:()=>r(c),children:"🗑"})]},c))]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Share"}),L.jsx("button",{className:"btn",onClick:async()=>{const c=SC(n);if(!(Qd()&&uA(c)))try{await navigator.clipboard.writeText(c),s("Share link copied — send it to a friend and they’ll see this exact tank.")}catch{window.prompt("Copy this link:",c)}},children:"🔗 Copy share link"})]})]})}function IC(){const n=Ee(o=>o.quality),e=Ee(o=>o.audioOn),t=Ee(o=>o.audioVolume),i=Ee(o=>o.musicOn),r=Ee(o=>o.showHud),s=Ee(o=>o.reducedMotion),a=Ee(o=>o.set);return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Graphics quality"}),L.jsx("div",{className:"seg",children:["auto","low","medium","high","ultra"].map(o=>L.jsx("button",{className:n===o?"active":"",onClick:()=>a({quality:o}),children:o==="auto"?"Auto":o[0].toUpperCase()+o.slice(1)},o))}),L.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",margin:"6px 2px 0"},children:"Auto picks a tier for your device and steps down if the frame rate drops."})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Sound"}),L.jsxs("div",{className:"seg",children:[L.jsx("button",{className:e?"active":"",onClick:()=>a({audioOn:!e}),children:e?"🔊 Ambience on":"🔇 Muted"}),L.jsx("button",{className:i?"active":"",onClick:()=>a({musicOn:!i}),children:i?"🎵 Music on":"🎵 Music off"})]}),L.jsxs("div",{className:"slider-row",style:{marginTop:10},children:[L.jsx("span",{style:{fontSize:13,color:"var(--text-dim)"},children:"Volume"}),L.jsx("input",{type:"range",min:0,max:1,step:.05,value:t,"aria-label":"Volume",onChange:o=>a({audioVolume:Number(o.target.value)})})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"Comfort"}),L.jsxs("div",{className:"seg",children:[L.jsx("button",{className:s?"active":"",onClick:()=>a({reducedMotion:!s}),children:s?"🐢 Calm motion on":"Calm motion off"}),L.jsx("button",{className:r?"active":"",onClick:()=>a({showHud:!r}),children:r?"📈 Perf HUD on":"Perf HUD off"})]})]}),L.jsxs("div",{className:"section",children:[L.jsx("h2",{children:"About"}),L.jsxs("p",{style:{fontSize:12.5,color:"var(--text-dim)",lineHeight:1.6},children:["Every fish, plant, texture and sound in this aquarium is generated procedurally in your browser — no downloads, no tracking, nothing to install. Built with Three.js. Keyboard: ",L.jsx("kbd",{children:"H"})," hide UI · ",L.jsx("kbd",{children:"F"})," feed · ",L.jsx("kbd",{children:"C"})," cinematic camera · ",L.jsx("kbd",{children:"P"})," photo."]})]})]})}class NC{constructor(){Y(this,"ctx",null);Y(this,"master",null);Y(this,"musicGain",null);Y(this,"bubbleTimer",null);Y(this,"musicTimer",null);Y(this,"started",!1);Y(this,"volume",.6)}async start(){if(this.started){await this.ctx?.resume();return}try{this.ctx=new AudioContext,await this.ctx.resume()}catch{return}const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume*.5,this.master.connect(e.destination);const t=e.createBuffer(1,e.sampleRate*4,e.sampleRate),i=t.getChannelData(0);let r=0;for(let m=0;m<i.length;m++){const p=Math.random()*2-1;r=(r+.02*p)/1.02,i[m]=r*3.2}const s=e.createBufferSource();s.buffer=t,s.loop=!0;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=220;const o=e.createGain();o.gain.value=.5,s.connect(a).connect(o).connect(this.master),s.start();const l=e.createOscillator();l.frequency.value=90;const c=e.createGain();c.gain.value=.015;const h=e.createOscillator();h.frequency.value=.4;const u=e.createGain();u.gain.value=.006,h.connect(u).connect(c.gain),l.connect(c).connect(this.master),l.start(),h.start();const d=()=>{if(!this.ctx||this.ctx.state!=="running"){this.bubbleTimer=window.setTimeout(d,400);return}const m=e.currentTime,p=e.createOscillator(),v=e.createGain(),_=380+Math.random()*500;p.frequency.setValueAtTime(_,m),p.frequency.exponentialRampToValueAtTime(_*(1.3+Math.random()*.6),m+.06),v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(.012+Math.random()*.02,m+.008),v.gain.exponentialRampToValueAtTime(1e-4,m+.05+Math.random()*.05),p.connect(v).connect(this.master),p.start(m),p.stop(m+.14),this.bubbleTimer=window.setTimeout(d,60+Math.random()*260)};d(),this.musicGain=e.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master);const f=[220,174.61,196,146.83];let g=0;const y=()=>{if(!this.ctx)return;const m=e.currentTime,p=f[g%f.length];g++;for(const v of[1,1.5,2,2.4]){const _=e.createOscillator();_.type="sine",_.frequency.value=p*v*(1+(Math.random()-.5)*.003);const x=e.createGain();x.gain.setValueAtTime(0,m),x.gain.linearRampToValueAtTime(.03/v,m+4),x.gain.linearRampToValueAtTime(0,m+11),_.connect(x).connect(this.musicGain),_.start(m),_.stop(m+12)}this.musicTimer=window.setTimeout(y,8e3)};y(),this.started=!0}setVolume(e){this.volume=e,this.master&&this.ctx&&this.master.gain.linearRampToValueAtTime(e*.5,this.ctx.currentTime+.15)}setMusic(e){this.musicGain&&this.ctx&&this.musicGain.gain.linearRampToValueAtTime(e?1:0,this.ctx.currentTime+2)}async setEnabled(e){e?await this.start():await this.ctx?.suspend()}}const eo=new NC;function UC(){const n=Ee(u=>u.feedMode),e=Ee(u=>u.cameraMode),t=Ee(u=>u.audioOn),i=Ee(u=>u.panelOpen),r=Ee(u=>u.config),s=Ee(u=>u.set),a=Ee(u=>u.setConfig),o=Ee(u=>u.showToast),l=()=>{const u=Mp();if(!u)return;const d=u.screenshot();if(Qd()&&hA(d))return;const f=document.createElement("a");f.href=d,f.download=`aquarium-${(r.name||"tank").replace(/\s+/g,"-").toLowerCase()}.png`,f.click(),o("Saved a snapshot 📸")},c=async()=>{const u=!t;s({audioOn:u}),await eo.setEnabled(u),u&&(eo.setVolume(Ee.getState().audioVolume),eo.setMusic(Ee.getState().musicOn))},h=r.dayNight==="night";return L.jsxs("div",{className:"toolbar",role:"toolbar","aria-label":"Aquarium controls",children:[L.jsx("button",{"data-tip":"Feed the fish (F)",className:n?"active":"","aria-pressed":n,onClick:()=>s({feedMode:!n}),children:"🫘"}),L.jsx("button",{"data-tip":h?"Switch to day":"Switch to night",onClick:()=>a({dayNight:h?"day":"night"}),children:h?"☀️":"🌙"}),L.jsx("button",{"data-tip":"Cinematic camera (C)",className:e==="cinematic"?"active":"","aria-pressed":e==="cinematic",onClick:()=>s({cameraMode:e==="cinematic"?"orbit":"cinematic"}),children:"🎥"}),L.jsx("button",{"data-tip":t?"Mute":"Sound on","aria-pressed":t,onClick:c,children:t?"🔊":"🔇"}),L.jsx("button",{"data-tip":"Save a photo (P)",onClick:l,children:"📸"}),L.jsx("div",{className:"divider","aria-hidden":!0}),L.jsx("button",{"data-tip":"Screensaver — hide everything (H)",onClick:()=>s({uiHidden:!0,cameraMode:"cinematic",panelOpen:!1,selectedFishKey:null,followFishKey:null}),children:"🖥️"}),!Qd()&&L.jsx("button",{"data-tip":"Fullscreen",onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()},children:"⛶"}),!i&&L.jsx("button",{"data-tip":"Build your tank",onClick:()=>s({panelOpen:!0}),children:"🛠️"})]})}function FC(){const n=Ee(u=>u.selectedFishKey),e=Ee(u=>u.followFishKey),t=Ee(u=>u.config.fishNames),i=Ee(u=>u.nameFish),r=Ee(u=>u.set),[s,a]=mt.useState("");if(!n)return null;const o=n.split(":")[0],l=Xc.get(o);if(!l)return null;const c=t[n],h=e===n;return L.jsxs("div",{className:"info-card",role:"dialog","aria-label":`About this ${l.common}`,children:[L.jsx("button",{className:"close","aria-label":"Close",onClick:()=>r({selectedFishKey:null,followFishKey:null}),children:"✕"}),L.jsx("h3",{children:c?`${c} the ${l.common}`:l.common}),L.jsx("div",{className:"sci",children:l.scientific}),L.jsxs("div",{className:"chips",children:[L.jsxs("span",{className:"chip",children:[l.adultSizeIn,"″ adult"]}),L.jsx("span",{className:"chip",children:l.temperament}),L.jsxs("span",{className:"chip",children:[l.zone,"-dweller"]}),L.jsxs("span",{className:"chip",children:[l.careLevel," care"]}),l.minGroup>1&&L.jsxs("span",{className:"chip",children:["schools of ",l.minGroup,"+"]})]}),L.jsxs("p",{children:[L.jsx("strong",{children:"Home waters:"})," ",l.habitat]}),L.jsx("p",{className:"fact",children:l.funFact}),L.jsxs("div",{className:"name-input",children:[L.jsx("input",{placeholder:c?`Rename ${c}…`:"Name this fish…",value:s,maxLength:24,onChange:u=>a(u.target.value),onKeyDown:u=>{u.key==="Enter"&&s.trim()&&(i(n,s.trim()),a(""))},"aria-label":"Fish name"}),L.jsx("button",{className:"btn primary",disabled:!s.trim(),onClick:()=>{i(n,s.trim()),a("")},children:"Name"})]}),L.jsx("div",{className:"row-actions",style:{marginTop:8},children:L.jsx("button",{className:"btn",onClick:()=>r({followFishKey:h?null:n,cameraMode:h?"orbit":"follow"}),children:h?"👁 Stop following":"👁 Follow"})})]})}function kC(){const[n,e]=mt.useState({fps:0,drawCalls:0,triangles:0,fishCount:0});return mt.useEffect(()=>{const t=setInterval(()=>{const i=Mp();i&&e({...i.stats})},500);return()=>clearInterval(t)},[]),L.jsxs("div",{className:"hud","aria-hidden":!0,children:[n.fps," fps",L.jsx("br",{}),n.drawCalls," draw calls",L.jsx("br",{}),(n.triangles/1e3).toFixed(1),"k tris",L.jsx("br",{}),n.fishCount," fish"]})}function OC(){const n=Ee(u=>u.uiHidden),e=Ee(u=>u.panelOpen),t=Ee(u=>u.showHud),i=Ee(u=>u.feedMode),r=Ee(u=>u.toast),s=Ee(u=>u.audioVolume),a=Ee(u=>u.musicOn),o=Ee(u=>u.set),[l,c]=mt.useState(!1),h=mt.useRef();return mt.useEffect(()=>{new URLSearchParams(window.location.search).get("kiosk")&&o({uiHidden:!0,cameraMode:"cinematic",panelOpen:!1})},[o]),mt.useEffect(()=>{eo.setVolume(s)},[s]),mt.useEffect(()=>{eo.setMusic(a)},[a]),mt.useEffect(()=>{const u=d=>{const f=d.target;if(f.tagName==="INPUT"||f.tagName==="TEXTAREA")return;const g=Ee.getState();if(d.key==="Escape"&&new URLSearchParams(location.search).has("kanban")&&window.parent!==window){d.preventDefault(),window.parent.postMessage({type:"aquarium-game-close"},location.origin);return}switch(d.key.toLowerCase()){case"h":o({uiHidden:!g.uiHidden,...g.uiHidden?{}:{panelOpen:!1}});break;case"f":o({feedMode:!g.feedMode});break;case"c":o({cameraMode:g.cameraMode==="cinematic"?"orbit":"cinematic"});break;case"p":{const y=Mp();if(y){const m=document.createElement("a");m.href=y.screenshot(),m.download="aquarium.png",m.click()}break}case"escape":g.selectedFishKey?o({selectedFishKey:null,followFishKey:null}):g.uiHidden?o({uiHidden:!1}):o({panelOpen:!1});break}};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[o]),mt.useEffect(()=>{if(!n)return;const u=()=>{c(!0),clearTimeout(h.current),h.current=setTimeout(()=>c(!1),2500)};return window.addEventListener("pointermove",u),()=>{window.removeEventListener("pointermove",u),clearTimeout(h.current)}},[n]),L.jsxs(L.Fragment,{children:[L.jsx(wC,{}),new URLSearchParams(location.search).has("kanban")&&L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"kanban-aquarium-help",children:"Trái: thả thức ăn · 10 lần có bánh cá/gấu · Phải: thêm cá · ESC: về KanBan"}),L.jsx("button",{className:"kanban-aquarium-exit",title:"Về KanBan (ESC)",onClick:()=>window.parent.postMessage({type:"aquarium-game-close"},location.origin),children:"✕"})]}),!n&&L.jsxs(L.Fragment,{children:[L.jsx(UC,{}),e?L.jsx(TC,{}):L.jsx("button",{className:"open-panel","aria-label":"Open tank builder",onClick:()=>o({panelOpen:!0}),children:"🛠️"}),L.jsx(FC,{}),i&&L.jsx("div",{className:"feed-hint",children:"Tap the water to drop food · press F to stop"})]}),n&&L.jsx("button",{className:`reveal ${l?"visible":""}`,onClick:()=>o({uiHidden:!1}),children:"Show controls (H)"}),t&&L.jsx(kC,{}),r&&L.jsx("div",{className:"toast",role:"status",children:r})]})}const zC={bordered:{coverDepth:0,overfill:.82,fit:"contain",lookFrac:.52},fullbleed:{coverDepth:1,overfill:1.04,fit:"cover",lookFrac:.52}},BC={"tang-highway":"fullbleed","reef-lagoon":"fullbleed","amazon-community":"fullbleed","blackwater-stream":"bordered","betta-oasis":"bordered","nano-planted":"bordered"},HC=n=>n.toLowerCase().replace(/\s+/g,"-");function GC(){const n=new URLSearchParams(window.location.hash.replace(/^#/,"")),e=n.get("capture");if(!e)return null;const t=n.get("view");return{preset:e,fps:Number(n.get("fps"))||30,secs:Number(n.get("secs"))||70,view:t==="bordered"||t==="fullbleed"?t:void 0}}function VC(n){const e=wp.find(c=>HC(c.name)===n.preset.toLowerCase());if(!e){document.body.textContent=`Unknown capture preset: ${n.preset}`;return}const t=document.getElementById("root");t.style.cssText="position:fixed;inset:0;background:#04141f";const i=new wy(t);i.setQuality("ultra"),i.applyConfig({...e,dayNight:"day"});const r=n.view??BC[n.preset.toLowerCase()]??"fullbleed",{coverDepth:s,overfill:a,fit:o,lookFrac:l}=zC[r];i.setCameraMode("still"),i.captureFrontView(s,a,o,l),i.enableExternalDrive(),window.__step=c=>i.advance(c),window.__frontView=(c,h,u,d)=>i.captureFrontView(c,h,u,d),window.__cameraState=()=>({pos:i.rig.camera.position.toArray(),quat:i.rig.camera.quaternion.toArray()}),window.__captureInfo={...n,presetName:e.name,view:r}}const cg=GC();cg?VC(cg):ph.createRoot(document.getElementById("root")).render(L.jsx(Sg.StrictMode,{children:L.jsx(OC,{})}));
