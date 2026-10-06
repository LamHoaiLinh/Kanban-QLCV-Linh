(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function hi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bh(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ea={duration:.5,overwrite:!1,delay:0},bc,Vt,ft,Un=1e8,lt=1/Un,Vl=Math.PI*2,Jp=Vl/4,Zp=0,Th=Math.sqrt,Qp=Math.cos,em=Math.sin,Ft=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Si=function(e){return typeof e=="number"},Tc=function(e){return typeof e>"u"},ii=function(e){return typeof e=="object"},an=function(e){return e!==!1},Ec=function(){return typeof window<"u"},Ta=function(e){return Mt(e)||Ft(e)},Eh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qt=Array.isArray,tm=/random\([^)]+\)/g,nm=/,\s*/g,Md=/(?:-?\.?\d|\.)+/gi,Ch=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ho=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wh=/[+-]=-?[.\d]+/,im=/[^,'"\[\]\s]+/gi,rm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,Jn,Hl,Cc,Cn={},ho={},Ah,Rh=function(e){return(ho=hs(e,Cn))&&dn},wc=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},ta=function(e,n){return!n&&console.warn(e)},Ph=function(e,n){return e&&(Cn[e]=n)&&ho&&(ho[e]=n)||Cn},na=function(){return 0},sm={suppressEvents:!0,isStart:!0,kill:!1},Ya={suppressEvents:!0,kill:!1},am={suppressEvents:!0},Ac={},Wi=[],Gl={},kh,_n={},Go={},xd=30,Ja=[],Rc="",Pc=function(e){var n=e[0],i,r;if(ii(n)||Mt(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Ja.length;r--&&!Ja[r].targetTest(n););i=Ja[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Qh(e[r],i)))||e.splice(r,1);return e},_r=function(e){return e._gsap||Pc(Nn(e))[0]._gsap},Dh=function(e,n,i){return(i=e[n])&&Mt(i)?e[n]():Tc(i)&&e.getAttribute&&e.getAttribute(n)||i},on=function(e,n){return(e=e.split(",")).forEach(n)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},mt=function(e){return Math.round(e*1e7)/1e7||0},is=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},om=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},fo=function(){var e=Wi.length,n=Wi.slice(0),i,r;for(Gl={},Wi.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},kc=function(e){return!!(e._initted||e._startAt||e.add)},Lh=function(e,n,i,r){Wi.length&&!Vt&&fo(),e.render(n,i,r||!!(Vt&&n<0&&kc(e))),Wi.length&&!Vt&&fo()},Ih=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(im).length<2?n:Ft(e)?e.trim():e},Uh=function(e){return e},wn=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},lm=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},hs=function(e,n){for(var i in n)e[i]=n[i];return e},bd=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ii(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},po=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},Ks=function(e){var n=e.parent||gt,i=e.keyframes?lm(qt(e.keyframes)):wn;if(an(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},cm=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},Nh=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},ko=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},qi=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vr=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},dm=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Wl=function(e,n,i,r){return e._startAt&&(Vt?e._startAt.revert(Ya):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},um=function t(e){return!e||e._ts&&t(e.parent)},Td=function(e){return e._repeat?fs(e._tTime,e=e.duration()+e._rDelay)*e:0},fs=function(e,n){var i=Math.floor(e=mt(e/n));return e&&i===e?i-1:i},mo=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Do=function(e){return e._end=mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Lo=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=mt(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Do(e),i._dirty||vr(i,e)),e},Oh=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=mo(e.rawTime(),n),(!n._dur||pa(0,n.totalDuration(),i)-n._tTime>lt)&&n.render(i,!0)),vr(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-lt}},ei=function(e,n,i,r){return n.parent&&qi(n),n._start=mt((Si(i)?i:i||e!==gt?Ln(e,i,n):e._time)+n._delay),n._end=mt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Nh(e,n,"_first","_last",e._sort?"_start":0),$l(n)||(e._recent=n),r||Oh(e,n),e._ts<0&&Lo(e,e._tTime),e},Fh=function(e,n){return(Cn.ScrollTrigger||wc("scrollTrigger",n))&&Cn.ScrollTrigger.create(n,e)},Bh=function(e,n,i,r,s){if(Lc(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&kh!==yn.frame)return Wi.push(e),e._lazy=[s,r],1},hm=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},$l=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},fm=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&hm(e)&&!(!e._initted&&$l(e))||(e._ts<0||e._dp._ts<0)&&!$l(e))?0:1,o=e._rDelay,l=0,c,d,h;if(o&&e._repeat&&(l=pa(0,e._tDur,n),d=fs(l,o),e._yoyo&&d&1&&(a=1-a),d!==fs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Vt||r||e._zTime===lt||!n&&e._zTime){if(!e._initted&&Bh(e,n,r,i,l))return;for(h=e._zTime,e._zTime=n||(i?lt:0),i||(i=n&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;n<0&&Wl(e,n,i,!0),e._onUpdate&&!i&&Sn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Sn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&qi(e,1),!i&&!Vt&&(Sn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},pm=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},ps=function(e,n,i,r){var s=e._repeat,a=mt(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:mt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Lo(e,e._tTime=e._tDur*o),e.parent&&Do(e),i||vr(e.parent,e),e},Ed=function(e){return e instanceof sn?vr(e):ps(e,e._dur)},mm={_start:0,endTime:na,totalDuration:na},Ln=function t(e,n,i){var r=e.labels,s=e._recent||mm,a=e.duration()>=Un?s.endTime(!1):e._dur,o,l,c;return Ft(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(qt(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},qs=function(e,n,i){var r=Si(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=an(l.vars.inherit)&&l.parent;a.immediateRender=an(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new Rt(n[0],a,n[s+1])},tr=function(e,n){return e||e===0?n(e):n},pa=function(e,n,i){return i<e?e:i>n?n:i},Kt=function(e,n){return!Ft(e)||!(n=rm.exec(e))?"":n[1]},gm=function(e,n,i){return tr(i,function(r){return pa(e,n,r)})},Xl=[].slice,zh=function(e,n){return e&&ii(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&ii(e[0]))&&!e.nodeType&&e!==Jn},_m=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ft(r)&&!n||zh(r,1)?(s=i).push.apply(s,Nn(r)):i.push(r)})||i},Nn=function(e,n,i){return ft&&!n&&ft.selector?ft.selector(e):Ft(e)&&!i&&(Hl||!ms())?Xl.call((n||Cc).querySelectorAll(e),0):qt(e)?_m(e,i):zh(e)?Xl.call(e,0):e?[e]:[]},jl=function(e){return e=Nn(e)[0]||ta("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return Nn(n,i.querySelectorAll?i:i===e?ta("Invalid scope")||Cc.createElement("div"):e)}},Vh=function(e){return e.sort(function(){return .5-Math.random()})},Hh=function(e){if(Mt(e))return e;var n=ii(e)?e:{each:e},i=yr(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,d=r,h=r;return Ft(r)?d=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(d=r[0],h=r[1]),function(u,m,_){var f=(_||n).length,g=a[f],p,y,T,b,E,R,P,v,M;if(!g){if(M=n.grid==="auto"?0:(n.grid||[1,Un])[1],!M){for(P=-Un;P<(P=_[M++].getBoundingClientRect().left)&&M<f;);M<f&&M--}for(g=a[f]=[],p=l?Math.min(M,f)*d-.5:r%M,y=M===Un?0:l?f*h/M-.5:r/M|0,P=0,v=Un,R=0;R<f;R++)T=R%M-p,b=y-(R/M|0),g[R]=E=c?Math.abs(c==="y"?b:T):Th(T*T+b*b),E>P&&(P=E),E<v&&(v=E);r==="random"&&Vh(g),g.max=P-v,g.min=v,g.v=f=(parseFloat(n.amount)||parseFloat(n.each)*(M>f?f-1:c?c==="y"?f/M:M:Math.max(M,f/M))||0)*(r==="edges"?-1:1),g.b=f<0?s-f:s,g.u=Kt(n.amount||n.each)||0,i=i&&f<0?Pm(i):i}return f=(g[u]-g.min)/g.max||0,mt(g.b+(i?i(f):f)*g.v)+g.u}},Kl=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=mt(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(Si(i)?0:Kt(i))}},Gh=function(e,n){var i=qt(e),r,s;return!i&&ii(e)&&(r=i=e.radius||Un,e.values?(e=Nn(e.values),(s=!Si(e[0]))&&(r*=r)):e=Kl(e.increment)),tr(n,i?Mt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Un,d=0,h=e.length,u,m;h--;)s?(u=e[h].x-o,m=e[h].y-l,u=u*u+m*m):u=Math.abs(e[h]-o),u<c&&(c=u,d=h);return d=!r||c<=r?e[d]:a,s||d===a||Si(a)?d:d+Kt(a)}:Kl(e))},Wh=function(e,n,i,r){return tr(qt(e)?!n:i===!0?!!(i=0):!r,function(){return qt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},vm=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},ym=function(e,n){return function(i){return e(parseFloat(i))+(n||Kt(i))}},Sm=function(e,n,i){return Xh(e,n,0,1,i)},$h=function(e,n,i){return tr(i,function(r){return e[~~n(r)]})},Mm=function t(e,n,i){var r=n-e;return qt(e)?$h(e,t(0,e.length),n):tr(i,function(s){return(r+(s-e)%r)%r+e})},xm=function t(e,n,i){var r=n-e,s=r*2;return qt(e)?$h(e,t(0,e.length-1),n):tr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ia=function(e){return e.replace(tm,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(nm);return Wh(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Xh=function(e,n,i,r,s){var a=n-e,o=r-i;return tr(s,function(l){return i+((l-e)/a*o||0)})},bm=function t(e,n,i,r){var s=isNaN(e+n)?0:function(m){return(1-m)*e+m*n};if(!s){var a=Ft(e),o={},l,c,d,h,u;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(qt(e)&&!qt(n)){for(d=[],h=e.length,u=h-2,c=1;c<h;c++)d.push(t(e[c-1],e[c]));h--,s=function(_){_*=h;var f=Math.min(u,~~_);return d[f](_-f)},i=n}else r||(e=hs(qt(e)?[]:{},e));if(!d){for(l in n)Dc.call(o,e,l,"get",n[l]);s=function(_){return Nc(_,o)||(a?e.p:e)}}}return tr(i,s)},Cd=function(e,n,i){var r=e.labels,s=Un,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Sn=function(e,n,i){var r=e.vars,s=r[n],a=ft,o=e._ctx,l,c,d;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&Wi.length&&fo(),o&&(ft=o),d=l?s.apply(c,l):s.call(c),ft=a,d},Vs=function(e){return qi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&Sn(e,"onInterrupt"),e},ts,jh=[],Kh=function(e){if(e)if(e=!e.name&&e.default||e,Ec()||e.headless){var n=e.name,i=Mt(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:na,render:Nc,add:Dc,kill:zm,modifier:Bm,rawVars:0},a={targetTest:0,get:0,getSetter:Uc,aliases:{},register:0};if(ms(),e!==r){if(_n[n])return;wn(r,wn(po(e,s),a)),hs(r.prototype,hs(s,po(e,a))),_n[r.prop=n]=r,e.targetTest&&(Ja.push(r),Ac[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Ph(n,r),e.register&&e.register(dn,r,ln)}else jh.push(e)},ot=255,Hs={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Wo=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*ot+.5|0},qh=function(e,n,i){var r=e?Si(e)?[e>>16,e>>8&ot,e&ot]:0:Hs.black,s,a,o,l,c,d,h,u,m,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])r=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ot,r&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Md),!n)l=+r[0]%360/360,c=+r[1]/100,d=+r[2]/100,a=d<=.5?d*(c+1):d+c-d*c,s=d*2-a,r.length>3&&(r[3]*=1),r[0]=Wo(l+1/3,s,a),r[1]=Wo(l,s,a),r[2]=Wo(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Ch),i&&r.length<4&&(r[3]=1),r}else r=e.match(Md)||Hs.transparent;r=r.map(Number)}return n&&!_&&(s=r[0]/ot,a=r[1]/ot,o=r[2]/ot,h=Math.max(s,a,o),u=Math.min(s,a,o),d=(h+u)/2,h===u?l=c=0:(m=h-u,c=d>.5?m/(2-h-u):m/(h+u),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(d*100+.5)),i&&r.length<4&&(r[3]=1),r},Yh=function(e){var n=[],i=[],r=-1;return e.split($i).forEach(function(s){var a=s.match(es)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},wd=function(e,n,i){var r="",s=(e+r).match($i),a=n?"hsla(":"rgba(",o=0,l,c,d,h;if(!s)return e;if(s=s.map(function(u){return(u=qh(u,n,1))&&a+(n?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(d=Yh(e),l=i.c,l.join(r)!==d.c.join(r)))for(c=e.replace($i,"1").split(es),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(d.length?d:s.length?s:i).shift());if(!c)for(c=e.split($i),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},$i=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),Tm=/hsl[a]?\(/,Jh=function(e){var n=e.join(" "),i;if($i.lastIndex=0,$i.test(n))return i=Tm.test(n),e[1]=wd(e[1],i),e[0]=wd(e[0],i,Yh(e[1])),!0},ra,yn=(function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,c,d,h,u,m,_=function f(g){var p=t()-r,y=g===!0,T,b,E,R;if((p>e||p<0)&&(i+=p-n),r+=p,E=r-i,T=E-a,(T>0||y)&&(R=++h.frame,u=E-h.time*1e3,h.time=E=E/1e3,a+=T+(T>=s?4:s-T),b=1),y||(l=c(f)),b)for(m=0;m<o.length;m++)o[m](E,u,R,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){Ah&&(!Hl&&Ec()&&(Jn=Hl=window,Cc=Jn.document||{},Cn.gsap=dn,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(dn.version),Rh(ho||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),jh.forEach(Kh)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=d||function(g){return setTimeout(g,a-h.time*1e3+1|0)},ra=1,_(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),ra=0,c=na},lagSmoothing:function(g,p){e=g||1/0,n=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),a=h.time*1e3+s},add:function(g,p,y){var T=p?function(b,E,R,P){g(b,E,R,P),h.remove(T)}:g;return h.remove(g),o[y?"unshift":"push"](T),ms(),T},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},h})(),ms=function(){return!ra&&yn.wake()},Ze={},Em=/^[\d.\-M][\d.\-,\s]/,Cm=/["']/g,wm=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(Cm,"").trim():+c,r=l.substr(o+1).trim();return n},Am=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},Rm=function(e){var n=(e+"").split("("),i=Ze[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[wm(n[1])]:Am(e).split(",").map(Ih)):Ze._CE&&Em.test(e)?Ze._CE("",e):i},Pm=function(e){return function(n){return 1-e(1-n)}},yr=function(e,n){return e&&(Mt(e)?e:Ze[e]||Rm(e))||n},wr=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return on(e,function(o){Ze[o]=Cn[o]=s,Ze[a=o.toLowerCase()]=i;for(var l in s)Ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[o+"."+l]=s[l]}),s},Zh=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},$o=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/Vl*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*em((d-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Zh(o);return s=Vl/s,l.config=function(c,d){return t(e,c,d)},l},Xo=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Zh(i);return r.config=function(s){return t(e,s)},r};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;wr(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;wr("Elastic",$o("in"),$o("out"),$o());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};wr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);wr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});wr("Circ",function(t){return-(Th(1-t*t)-1)});wr("Sine",function(t){return t===1?1:-Qp(t*Jp)+1});wr("Back",Xo("in"),Xo("out"),Xo());Ze.SteppedEase=Ze.steps=Cn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-lt;return function(o){return((r*pa(0,a,o)|0)+s)*i}}};ea.ease=Ze["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Rc+=t+","+t+"Params,"});var Qh=function(e,n){this.id=Zp++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Dh,this.set=n?n.getSetter:Uc},sa=(function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ps(this,+n.duration,1,1),this.data=n.data,ft&&(this._ctx=ft,ft.data.push(this)),ra||yn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ms(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Lo(this,i),!s._dp||s.parent||Oh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ei(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===lt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Lh(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Td(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Td(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?fs(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?mo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-lt?0:this._rts,this.totalTime(pa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Do(this),dm(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=mt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ei(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(an(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mo(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=am);var r=Vt;return Vt=i,kc(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Vt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ed(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Ed(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ln(this,i),an(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,an(r)),this._dur||(this._zTime=-lt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-lt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Mt(i)?i:Uh,l=function(){var d=r.then;r.then=null,s&&s(),Mt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=d),a(o),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Vs(this)},t})();wn(sa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var sn=(function(t){bh(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=an(i.sortChildren),gt&&ei(i.parent||gt,hi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Fh(hi(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return qs(0,arguments,this),this},n.from=function(r,s,a){return qs(1,arguments,this),this},n.fromTo=function(r,s,a,o){return qs(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,Ks(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,Ln(this,a),1),this},n.call=function(r,s,a){return ei(this,Rt.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,c,d){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=d,a.parent=this,new Rt(r,a,Ln(this,l)),this},n.staggerFrom=function(r,s,a,o,l,c,d){return a.runBackwards=1,Ks(a).immediateRender=an(a.immediateRender),this.staggerTo(r,s,a,o,l,c,d)},n.staggerFromTo=function(r,s,a,o,l,c,d,h){return o.startAt=a,Ks(o).immediateRender=an(o.immediateRender),this.staggerTo(r,s,o,l,c,d,h)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=r<=0?0:mt(r),h=this._zTime<0!=r<0&&(this._initted||!c),u,m,_,f,g,p,y,T,b,E,R,P;if(this!==gt&&d>l&&r>=0&&(d=l),d!==this._tTime||a||h){if(o!==this._time&&c&&(d+=this._time-o,r+=this._time-o),u=d,b=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(u=mt(d%g),d===l?(f=this._repeat,u=c):(E=mt(d/g),f=~~E,f&&f===E&&(u=c,f--),u>c&&(u=c)),E=fs(this._tTime,g),!o&&this._tTime&&E!==f&&this._tTime-E*g-this._dur<=0&&(E=f),R&&f&1&&(u=c-u,P=1),f!==E&&!this._lock){var v=R&&E&1,M=v===(R&&f&1);if(f<E&&(v=!v),o=v?0:d%c?c:d,this._lock=1,this.render(o||(P?0:mt(f*g)),s,!c)._lock=0,this._tTime=d,!s&&this.parent&&Sn(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1,E=f),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=pm(this,mt(o),mt(u)),y&&(d-=u-(u=y._start))),this._tTime=d,this._time=u,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&d&&c&&!s&&!E&&(Sn(this,"onStart"),this._tTime!==d))return this;if(u>=o&&r>=0)for(m=this._first;m;){if(_=m._next,(m._act||u>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(u-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(u-m._start)*m._ts,s,a),u!==this._time||!this._ts&&!p){y=0,_&&(d+=this._zTime=-lt);break}}m=_}else{m=this._last;for(var I=r<0?r:u;m;){if(_=m._prev,(m._act||I<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,s,a||Vt&&kc(m)),u!==this._time||!this._ts&&!p){y=0,_&&(d+=this._zTime=I?-lt:lt);break}}m=_}}if(y&&!s&&(this.pause(),y.render(u>=o?0:-lt)._zTime=u>=o?1:-1,this._ts))return this._start=b,Do(this),this.render(r,s,a);this._onUpdate&&!s&&Sn(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(d===l&&this._ts>0||!d&&this._ts<0)&&qi(this,1),!s&&!(r<0&&!o)&&(d||o||!l)&&(Sn(this,d===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(Si(s)||(s=Ln(this,s,r)),!(r instanceof sa)){if(qt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ft(r))return this.addLabel(r,s);if(Mt(r))r=Rt.delayedCall(0,r);else return this}return this!==r?ei(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Un);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Rt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return Ft(r)?this.removeLabel(r):Mt(r)?this.killTweensOf(r):(r.parent===this&&ko(this,r),r===this._recent&&(this._recent=this._last),vr(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mt(yn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=Ln(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Rt.delayedCall(0,s||na,a);return o.data="isPause",this._hasPause=1,ei(this,o,Ln(this,r))},n.removePause=function(r){var s=this._first;for(r=Ln(this,r);s;)s._start===r&&s.data==="isPause"&&qi(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Bi!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=Nn(r),l=this._first,c=Si(s),d;l;)l instanceof Rt?om(l._targets,o)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(d=l.getTweensOf(o,s)).length&&a.push.apply(a,d),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=Ln(a,r),l=s,c=l.startAt,d=l.onStart,h=l.onStartParams,u=l.immediateRender,m,_=Rt.to(a,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||lt,onStart:function(){if(a.pause(),!m){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&ps(_,g,0,1).render(_._time,!0,!0),m=1}d&&d.apply(_,h||[])}},s));return u?_.render(0):_},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,wn({startAt:{time:Ln(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Cd(this,Ln(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Cd(this,Ln(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+lt)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=mt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return vr(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vr(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=Un,c,d,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ei(a,o,d-o._delay,1)._lock=0):l=d,d<0&&o._ts&&(s-=d,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=mt(d/a._ts),a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ps(a,a===gt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(gt._ts&&(Lh(gt,mo(r,gt)),kh=yn.frame),yn.frame>=xd){xd+=Tn.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&Tn.autoSleep&&yn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yn.sleep()}}},e})(sa);wn(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var km=function(e,n,i,r,s,a,o){var l=new ln(this._pt,e,n,0,1,af,null,s),c=0,d=0,h,u,m,_,f,g,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=ia(r)),a&&(y=[i,r],a(y,e,n),i=y[0],r=y[1]),u=i.match(Ho)||[];h=Ho.exec(r);)_=h[0],f=r.substring(c,h.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==u[d++]&&(g=parseFloat(u[d-1])||0,l._pt={_next:l._pt,p:f||d===1?f:",",s:g,c:_.charAt(1)==="="?is(g,_)-g:parseFloat(_)-g,m:m&&m<4?Math.round:0},c=Ho.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(wh.test(r)||p)&&(l.e=0),this._pt=l,l},Dc=function(e,n,i,r,s,a,o,l,c,d){Mt(r)&&(r=r(s||0,e,a));var h=e[n],u=i!=="get"?i:Mt(h)?c?e[n.indexOf("set")||!Mt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():h,m=Mt(h)?c?Nm:rf:Ic,_;if(Ft(r)&&(~r.indexOf("random(")&&(r=ia(r)),r.charAt(1)==="="&&(_=is(u,r)+(Kt(u)||0),(_||_===0)&&(r=_))),!d||u!==r||ql)return!isNaN(u*r)&&r!==""?(_=new ln(this._pt,e,n,+u||0,r-(u||0),typeof h=="boolean"?Fm:sf,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(n in e)&&wc(n,r),km.call(this,e,n,u,r,m,l||Tn.stringFilter,c))},Dm=function(e,n,i,r,s){if(Mt(e)&&(e=Ys(e,s,n,i,r)),!ii(e)||e.style&&e.nodeType||qt(e)||Eh(e))return Ft(e)?Ys(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=Ys(e[o],s,n,i,r);return a},ef=function(e,n,i,r,s,a){var o,l,c,d;if(_n[e]&&(o=new _n[e]).init(s,o.rawVars?n[e]:Dm(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new ln(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ts))for(c=i._ptLookup[i._targets.indexOf(s)],d=o._props.length;d--;)c[o._props[d]]=l;return o},Bi,ql,Lc=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,d=r.runBackwards,h=r.yoyoEase,u=r.keyframes,m=r.autoRevert,_=e._dur,f=e._startAt,g=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:g,T=e._overwrite==="auto"&&!bc,b=e.timeline,E=r.easeReverse||h,R,P,v,M,I,w,k,B,L,z,V,F,Y;if(b&&(!u||!s)&&(s="none"),e._ease=yr(s,ea.ease),e._rEase=E&&(yr(E)||e._ease),e._from=!b&&!!r.runBackwards,e._from&&(e.ratio=1),!b||u&&!r.stagger){if(B=g[0]?_r(g[0]).harness:0,F=B&&r[B.prop],R=po(r,Ac),f&&(f._zTime<0&&f.progress(1),n<0&&d&&o&&!m?f.render(-1,!0):f.revert(d&&_?Ya:sm),f._lazy=0),a){if(qi(e._startAt=Rt.set(g,wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!f&&an(l),startAt:null,delay:0,onUpdate:c&&function(){return Sn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Vt||!o&&!m)&&e._startAt.revert(Ya),o&&_&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(d&&_&&!f){if(n&&(o=!1),v=wn({overwrite:!1,data:"isFromStart",lazy:o&&!f&&an(l),immediateRender:o,stagger:0,parent:p},R),F&&(v[B.prop]=F),qi(e._startAt=Rt.set(g,v)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Vt?e._startAt.revert(Ya):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,lt,lt);else if(!n)return}for(e._pt=e._ptCache=0,l=_&&an(l)||l&&!_,P=0;P<g.length;P++){if(I=g[P],k=I._gsap||Pc(g)[P]._gsap,e._ptLookup[P]=z={},Gl[k.id]&&Wi.length&&fo(),V=y===g?P:y.indexOf(I),B&&(L=new B).init(I,F||R,e,V,y)!==!1&&(e._pt=M=new ln(e._pt,I,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(ee){z[ee]=M}),L.priority&&(w=1)),!B||F)for(v in R)_n[v]&&(L=ef(v,R,e,V,I,y))?L.priority&&(w=1):z[v]=M=Dc.call(e,I,v,"get",R[v],V,y,0,r.stringFilter);e._op&&e._op[P]&&e.kill(I,e._op[P]),T&&e._pt&&(Bi=e,gt.killTweensOf(I,z,e.globalTime(n)),Y=!e.parent,Bi=0),e._pt&&l&&(Gl[k.id]=1)}w&&of(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,u&&n<=0&&b.render(Un,!0,!0)},Lm=function(e,n,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],d,h,u,m;if(!c)for(c=e._ptCache[n]=[],u=e._ptLookup,m=e._targets.length;m--;){if(d=u[m][n],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==n&&d.fp!==n;)d=d._next;if(!d)return ql=1,e.vars[n]="+=0",Lc(e,o),ql=0,l?ta(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(m=c.length;m--;)h=c[m],d=h._pt||h,d.s=(r||r===0)&&!s?r:d.s+(r||0)+a*d.c,d.c=i-d.s,h.e&&(h.e=Tt(i)+Kt(h.e)),h.b&&(h.b=d.s+Kt(h.b))},Im=function(e,n){var i=e[0]?_r(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=hs({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Um=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(qt(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},Ys=function(e,n,i,r,s){return Mt(e)?e.call(n,i,r,s):Ft(e)&&~e.indexOf("random(")?ia(e):e},tf=Rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",nf={};on(tf+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return nf[t]=1});var Rt=(function(t){bh(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:Ks(r))||this;var l=o.vars,c=l.duration,d=l.delay,h=l.immediateRender,u=l.stagger,m=l.overwrite,_=l.keyframes,f=l.defaults,g=l.scrollTrigger,p=r.parent||gt,y=(qt(i)||Eh(i)?Si(i[0]):"length"in r)?[i]:Nn(i),T,b,E,R,P,v,M,I;if(o._targets=y.length?Pc(y):ta("GSAP target "+i+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||u||Ta(c)||Ta(d)){r=o.vars;var w=r.easeReverse||r.yoyoEase;if(T=o.timeline=new sn({data:"nested",defaults:f||{},targets:p&&p.data==="nested"?p.vars.targets:y}),T.kill(),T.parent=T._dp=hi(o),T._start=0,u||Ta(c)||Ta(d)){if(R=y.length,M=u&&Hh(u),ii(u))for(P in u)~tf.indexOf(P)&&(I||(I={}),I[P]=u[P]);for(b=0;b<R;b++)E=po(r,nf),E.stagger=0,w&&(E.easeReverse=w),I&&hs(E,I),v=y[b],E.duration=+Ys(c,hi(o),b,v,y),E.delay=(+Ys(d,hi(o),b,v,y)||0)-o._delay,!u&&R===1&&E.delay&&(o._delay=d=E.delay,o._start+=d,E.delay=0),T.to(v,E,M?M(b,v,y):0),T._ease=Ze.none;T.duration()?c=d=0:o.timeline=0}else if(_){Ks(wn(T.vars.defaults,{ease:"none"})),T._ease=yr(_.ease||r.ease||"none");var k=0,B,L,z;if(qt(_))_.forEach(function(V){return T.to(y,V,">")}),T.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||Um(P,_[P],E,_.easeEach);for(P in E)for(B=E[P].sort(function(V,F){return V.t-F.t}),k=0,b=0;b<B.length;b++)L=B[b],z={ease:L.e,duration:(L.t-(b?B[b-1].t:0))/100*c},z[P]=L.v,T.to(y,z,k),k+=z.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return m===!0&&!bc&&(Bi=hi(o),gt.killTweensOf(y),Bi=0),ei(p,hi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!_&&o._start===mt(p._time)&&an(h)&&um(hi(o))&&p.data!=="nested")&&(o._tTime=-lt,o.render(Math.max(0,-d)||0)),g&&Fh(hi(o),g),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,d=r<0,h=r>l-lt&&!d?l:r<lt?0:r,u,m,_,f,g,p,y,T;if(!c)fm(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=h,T=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(f*100+r,s,a);if(u=mt(h%f),h===l?(_=this._repeat,u=c):(g=mt(h/f),_=~~g,_&&_===g?(u=c,_--):u>c&&(u=c)),p=this._yoyo&&_&1,p&&(u=c-u),g=fs(this._tTime,f),u===o&&!a&&this._initted&&_===g)return this._tTime=h,this;_!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==f&&this._initted&&(this._lock=a=1,this.render(mt(f*_),!0).invalidate()._lock=0)}if(!this._initted){if(Bh(this,d?r:u,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var b=u<o;if(b!==this._inv){var E=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(b?-1:1)/E:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!g&&(Sn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;T&&T.render(r<0?r:T._dur*T._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(d&&Wl(this,r,s,a),Sn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&Wl(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qi(this,1),!s&&!(d&&!o)&&(h||o||p)&&(Sn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){ra||yn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Lc(this,c),d=this._ease(c/this._dur),Lm(this,r,s,a,o,d,c,l)?this.resetTo(r,s,a,o,1):(Lo(this,0),this.parent||Nh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Bi&&Bi.vars.overwrite!==!0)._first||Vs(this),this.parent&&a!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Nn(r):o,c=this._ptLookup,d=this._pt,h,u,m,_,f,g,p;if((!s||s==="all")&&cm(o,l))return s==="all"&&(this._pt=0),Vs(this);for(h=this._op=this._op||[],s!=="all"&&(Ft(s)&&(f={},on(s,function(y){return f[y]=1}),s=f),s=Im(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],s==="all"?(h[p]=s,_=u,m={}):(m=h[p]=h[p]||{},_=s);for(f in _)g=u&&u[f],g&&((!("kill"in g.d)||g.d.kill(f)===!0)&&ko(this,g,"_pt"),delete u[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&d&&Vs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return qs(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return qs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return gt.killTweensOf(r,s,a)},e})(sa);wn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(t){Rt[t]=function(){var e=new sn,n=Xl.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var Ic=function(e,n,i){return e[n]=i},rf=function(e,n,i){return e[n](i)},Nm=function(e,n,i,r){return e[n](r.fp,i)},Om=function(e,n,i){return e.setAttribute(n,i)},Uc=function(e,n){return Mt(e[n])?rf:Tc(e[n])&&e.setAttribute?Om:Ic},sf=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Fm=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},af=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},Nc=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},Bm=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},zm=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?ko(this,n,"_pt"):n.dep||(i=1),n=r;return!i},Vm=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},of=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},ln=(function(){function t(n,i,r,s,a,o,l,c,d){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||sf,this.d=l||this,this.set=c||Ic,this.pr=d||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Vm,this.m=i,this.mt=s,this.tween=r},t})();on(Rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Ac[t]=1});Cn.TweenMax=Cn.TweenLite=Rt;Cn.TimelineLite=Cn.TimelineMax=sn;gt=new sn({sortChildren:!1,defaults:ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Jh;var Sr=[],Za={},Hm=[],Ad=0,Gm=0,jo=function(e){return(Za[e]||Hm).map(function(n){return n()})},Yl=function(){var e=Date.now(),n=[];e-Ad>2&&(jo("matchMediaInit"),Sr.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Jn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),jo("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Ad=e,jo("matchMedia"))},lf=(function(){function t(n,i){this.selector=i&&jl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Gm++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){Mt(i)&&(s=r,r=i,i=Mt);var a=this,o=function(){var c=ft,d=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=jl(s)),ft=a,h=r.apply(a,arguments),Mt(h)&&a._r.push(h),ft=c,a.selector=d,a.isReverted=!1,h};return a.last=o,i===Mt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=ft;ft=null,i(this),ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return o.splice(o.indexOf(d),1)}));for(o.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Rt)&&c.revert&&c.revert(i);s._r.forEach(function(d){return d(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Sr.length;a--;)Sr[a].id===this.id&&Sr.splice(a,1)},e.revert=function(i){this.kill(i||{})},t})(),Wm=(function(){function t(n){this.contexts=[],this.scope=n,ft&&ft.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){ii(i)||(i={matches:i});var a=new lf(0,s||this.scope),o=a.conditions={},l,c,d;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?d=1:(l=Jn.matchMedia(i[c]),l&&(Sr.indexOf(a)<0&&Sr.push(a),(o[c]=l.matches)&&(d=1),l.addListener?l.addListener(Yl):l.addEventListener("change",Yl)));return d&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t})(),go={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return Kh(r)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,n){return gt.getTweensOf(e,n)},getProperty:function(e,n,i,r){Ft(e)&&(e=Nn(e)[0]);var s=_r(e||{}).get,a=i?Uh:Ih;return i==="native"&&(i=""),e&&(n?a((_n[n]&&_n[n].get||s)(e,n,i,r)):function(o,l,c){return a((_n[o]&&_n[o].get||s)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=Nn(e),e.length>1){var r=e.map(function(d){return dn.quickSetter(d,n,i)}),s=r.length;return function(d){for(var h=s;h--;)r[h](d)}}e=e[0]||{};var a=_n[n],o=_r(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(d){var h=new a;ts._pt=0,h.init(e,i?d+i:d,ts,0,[e]),h.render(1,h),ts._pt&&Nc(1,ts)}:o.set(e,l);return a?c:function(d){return c(e,l,i?d+i:d,o,1)}},quickTo:function(e,n,i){var r,s=dn.to(e,wn((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,d){return s.resetTo(n,l,c,d)};return a.tween=s,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yr(e.ease,ea.ease)),bd(ea,e||{})},config:function(e){return bd(Tn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!_n[o]&&!Cn[o]&&ta(n+" effect requires "+o+" plugin.")}),Go[n]=function(o,l,c){return i(Nn(o),wn(l||{},s),c)},a&&(sn.prototype[n]=function(o,l,c){return this.add(Go[n](o,ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Ze[e]=yr(n)},parseEase:function(e,n){return arguments.length?yr(e,n):Ze},getById:function(e){return gt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new sn(e),r,s;for(i.smoothChildTiming=an(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,r=gt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&ei(i,r,r._start-r._delay),r=s;return ei(gt,i,0),i},context:function(e,n){return e?new lf(e,n):ft},matchMedia:function(e){return new Wm(e)},matchMediaRefresh:function(){return Sr.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||Yl()},addEventListener:function(e,n){var i=Za[e]||(Za[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Za[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:Mm,wrapYoyo:xm,distribute:Hh,random:Wh,snap:Gh,normalize:Sm,getUnit:Kt,clamp:gm,splitColor:qh,toArray:Nn,selector:jl,mapRange:Xh,pipe:vm,unitize:ym,interpolate:bm,shuffle:Vh},install:Rh,effects:Go,ticker:yn,updateRoot:sn.updateRoot,plugins:_n,globalTimeline:gt,core:{PropTween:ln,globals:Ph,Tween:Rt,Timeline:sn,Animation:sa,getCache:_r,_removeLinkedListItem:ko,reverting:function(){return Vt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return bc=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return go[t]=Rt[t]});yn.add(sn.updateRoot);ts=go.to({},{duration:0});var $m=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},Xm=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=$m(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},Ko=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ft(s)&&(l={},on(s,function(d){return l[d]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}Xm(o,s)}}}},dn=go.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)Vt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Ko("roundProps",Kl),Ko("modifiers"),Ko("snap",Gh))||go;Rt.version=sn.version=dn.version="3.15.0";Ah=1;Ec()&&ms();var J1=Ze.Power0,Z1=Ze.Power1,Q1=Ze.Power2,ex=Ze.Power3,tx=Ze.Power4,nx=Ze.Linear,ix=Ze.Quad,rx=Ze.Cubic,sx=Ze.Quart,ax=Ze.Quint,ox=Ze.Strong,lx=Ze.Elastic,cx=Ze.Back,dx=Ze.SteppedEase,ux=Ze.Bounce,hx=Ze.Sine,fx=Ze.Expo,px=Ze.Circ,Rd,zi,rs,Oc,fr,Pd,Fc,jm=function(){return typeof window<"u"},Mi={},ur=180/Math.PI,ss=Math.PI/180,Lr=Math.atan2,kd=1e8,Bc=/([A-Z])/g,Km=/(left|right|width|margin|padding|x)/i,qm=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jl=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Ym=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Jm=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Zm=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Qm=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},cf=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},df=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},eg=function(e,n,i){return e.style[n]=i},tg=function(e,n,i){return e.style.setProperty(n,i)},ng=function(e,n,i){return e._gsap[n]=i},ig=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},rg=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},sg=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},_t="transform",cn=_t+"Origin",ag=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Mi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=pi(r,o)}):this.tfm[e]=a.x?a[e]:pi(r,e),e===cn&&(this.tfm.zOrigin=a.zOrigin);else return ti.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(_t)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(cn,n,"")),e=_t}(s||n)&&this.props.push(e,n,s[e])},uf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},og=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=Fc(),(!s||!s.isStart)&&!i[_t]&&(uf(i),r.zOrigin&&i[cn]&&(i[cn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},hf=function(e,n){var i={target:e,props:[],revert:og,save:ag};return e._gsap||dn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},ff,Zl=function(e,n){var i=zi.createElementNS?zi.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return i&&i.style?i:zi.createElement(e)},Mn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(Bc,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,gs(n)||n,1)||""},Dd="O,Moz,ms,Ms,Webkit".split(","),gs=function(e,n,i){var r=(n||fr).style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Dd[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Dd[s]:"")+e},Ql=function(){jm()&&window.document&&(Rd=window,zi=Rd.document,rs=zi.documentElement,fr=Zl("div")||{style:{}},Zl("div"),_t=gs(_t),cn=_t+"Origin",fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ff=!!gs("perspective"),Fc=dn.core.reverting,Oc=1)},Ld=function(e){var n=e.ownerSVGElement,i=Zl("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),rs.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),rs.removeChild(i),s},Id=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},pf=function(e){var n,i;try{n=e.getBBox()}catch{n=Ld(e),i=1}return n&&(n.width||n.height)||i||(n=Ld(e)),n&&!n.width&&!n.x&&!n.y?{x:+Id(e,["x","cx","x1"])||0,y:+Id(e,["y","cy","y1"])||0,width:0,height:0}:n},mf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pf(e))},Yi=function(e,n){if(n){var i=e.style,r;n in Mi&&n!==cn&&(n=_t),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(Bc,"-$1").toLowerCase())):i.removeAttribute(n)}},Vi=function(e,n,i,r,s,a){var o=new ln(e._pt,n,i,0,1,a?df:cf);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Ud={deg:1,rad:1,turn:1},lg={grid:1,flex:1},Ji=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=fr.style,l=Km.test(n),c=e.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(l?"Width":"Height"),h=100,u=r==="px",m=r==="%",_,f,g,p;if(r===a||!s||Ud[r]||Ud[a])return s;if(a!=="px"&&!u&&(s=t(e,n,i,"px")),p=e.getCTM&&mf(e),(m||a==="%")&&(Mi[n]||~n.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[d],Tt(m?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(u?a:r),f=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===zi||!f.appendChild)&&(f=zi.body),g=f._gsap,g&&m&&g.width&&l&&g.time===yn.time&&!g.uncache)return Tt(s/g.width*h);if(m&&(n==="height"||n==="width")){var y=e.style[n];e.style[n]=h+r,_=e[d],y?e.style[n]=y:Yi(e,n)}else(m||a==="%")&&!lg[Mn(f,"display")]&&(o.position=Mn(e,"position")),f===e&&(o.position="static"),f.appendChild(fr),_=fr[d],f.removeChild(fr),o.position="absolute";return l&&m&&(g=_r(f),g.time=yn.time,g.width=f[d]),Tt(u?_*s/h:_&&s?h/_*s:0)},pi=function(e,n,i,r){var s;return Oc||Ql(),n in ti&&n!=="transform"&&(n=ti[n],~n.indexOf(",")&&(n=n.split(",")[0])),Mi[n]&&n!=="transform"?(s=oa(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:vo(Mn(e,cn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=_o[n]&&_o[n](e,n,i)||Mn(e,n)||Dh(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ji(e,n,s,i)+i:s},cg=function(e,n,i,r){if(!i||i==="none"){var s=gs(n,e,1),a=s&&Mn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=Mn(e,"borderTopColor"))}var o=new ln(this._pt,e.style,n,0,1,af),l=0,c=0,d,h,u,m,_,f,g,p,y,T,b,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(f=e.style[n],e.style[n]=r,r=Mn(e,n)||r,f?e.style[n]=f:Yi(e,n)),d=[i,r],Jh(d),i=d[0],r=d[1],u=i.match(es)||[],E=r.match(es)||[],E.length){for(;h=es.exec(r);)g=h[0],y=r.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(f=u[c++]||"")&&(m=parseFloat(f)||0,b=f.substr((m+"").length),g.charAt(1)==="="&&(g=is(m,g)+b),p=parseFloat(g),T=g.substr((p+"").length),l=es.lastIndex-T.length,T||(T=T||Tn.units[n]||b,l===r.length&&(r+=T,o.e+=T)),b!==T&&(m=Ji(e,n,f,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:p-m,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?df:cf;return wh.test(r)&&(o.e=0),this._pt=o,o},Nd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dg=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Nd[i]||i,n[1]=Nd[r]||r,n.join(" ")},ug=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Mi[o]&&(l=1,o=o==="transformOrigin"?cn:_t),Yi(i,o);l&&(Yi(i,_t),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",oa(i,1),a.uncache=1,uf(r)))}},_o={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new ln(e._pt,n,i,0,0,ug);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},aa=[1,0,0,1,0,0],gf={},_f=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Od=function(e){var n=Mn(e,_t);return _f(n)?aa:n.substr(7).match(Ch).map(Tt)},zc=function(e,n){var i=e._gsap||_r(e),r=e.style,s=Od(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?aa:s):(s===aa&&!e.offsetParent&&e!==rs&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,rs.appendChild(e)),s=Od(e),l?r.display=l:Yi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):rs.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ec=function(e,n,i,r,s,a){var o=e._gsap,l=s||zc(e,!0),c=o.xOrigin||0,d=o.yOrigin||0,h=o.xOffset||0,u=o.yOffset||0,m=l[0],_=l[1],f=l[2],g=l[3],p=l[4],y=l[5],T=n.split(" "),b=parseFloat(T[0])||0,E=parseFloat(T[1])||0,R,P,v,M;i?l!==aa&&(P=m*g-_*f)&&(v=b*(g/P)+E*(-f/P)+(f*y-g*p)/P,M=b*(-_/P)+E*(m/P)-(m*y-_*p)/P,b=v,E=M):(R=pf(e),b=R.x+(~T[0].indexOf("%")?b/100*R.width:b),E=R.y+(~(T[1]||T[0]).indexOf("%")?E/100*R.height:E)),r||r!==!1&&o.smooth?(p=b-c,y=E-d,o.xOffset=h+(p*m+y*f)-p,o.yOffset=u+(p*_+y*g)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=E,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[cn]="0px 0px",a&&(Vi(a,o,"xOrigin",c,b),Vi(a,o,"yOrigin",d,E),Vi(a,o,"xOffset",h,o.xOffset),Vi(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},oa=function(e,n){var i=e._gsap||new Qh(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Mn(e,cn)||"0",d=h=u=f=g=p=y=T=b=0,h,u,m=_=1,_,f,g,p,y,T,b,E,R,P,v,M,I,w,k,B,L,z,V,F,Y,ee,re,_e,Me,et,Oe,j;return i.svg=!!(e.getCTM&&mf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),P=zc(e,i.svg),i.svg&&(i.uncache?(Y=e.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",F=""):F=!n&&e.getAttribute("data-svg-origin"),ec(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,P)),E=i.xOrigin||0,R=i.yOrigin||0,P!==aa&&(w=P[0],k=P[1],B=P[2],L=P[3],d=z=P[4],h=V=P[5],P.length===6?(m=Math.sqrt(w*w+k*k),_=Math.sqrt(L*L+B*B),f=w||k?Lr(k,w)*ur:0,y=B||L?Lr(B,L)*ur+f:0,y&&(_*=Math.abs(Math.cos(y*ss))),i.svg&&(d-=E-(E*w+R*B),h-=R-(E*k+R*L))):(j=P[6],et=P[7],re=P[8],_e=P[9],Me=P[10],Oe=P[11],d=P[12],h=P[13],u=P[14],v=Lr(j,Me),g=v*ur,v&&(M=Math.cos(-v),I=Math.sin(-v),F=z*M+re*I,Y=V*M+_e*I,ee=j*M+Me*I,re=z*-I+re*M,_e=V*-I+_e*M,Me=j*-I+Me*M,Oe=et*-I+Oe*M,z=F,V=Y,j=ee),v=Lr(-B,Me),p=v*ur,v&&(M=Math.cos(-v),I=Math.sin(-v),F=w*M-re*I,Y=k*M-_e*I,ee=B*M-Me*I,Oe=L*I+Oe*M,w=F,k=Y,B=ee),v=Lr(k,w),f=v*ur,v&&(M=Math.cos(v),I=Math.sin(v),F=w*M+k*I,Y=z*M+V*I,k=k*M-w*I,V=V*M-z*I,w=F,z=Y),g&&Math.abs(g)+Math.abs(f)>359.9&&(g=f=0,p=180-p),m=Tt(Math.sqrt(w*w+k*k+B*B)),_=Tt(Math.sqrt(V*V+j*j)),v=Lr(z,V),y=Math.abs(v)>2e-4?v*ur:0,b=Oe?1/(Oe<0?-Oe:Oe):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!_f(Mn(e,_t)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),n=n||i.uncache,i.x=d-((i.xPercent=d&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=u+a,i.scaleX=Tt(m),i.scaleY=Tt(_),i.rotation=Tt(f)+o,i.rotationX=Tt(g)+o,i.rotationY=Tt(p)+o,i.skewX=y+o,i.skewY=T+o,i.transformPerspective=b+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[cn]=vo(c)),i.xOffset=i.yOffset=0,i.force3D=Tn.force3D,i.renderTransform=i.svg?fg:ff?vf:hg,i.uncache=0,i},vo=function(e){return(e=e.split(" "))[0]+" "+e[1]},qo=function(e,n,i){var r=Kt(n);return Tt(parseFloat(n)+parseFloat(Ji(e,"x",i+"px",r)))+r},hg=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,vf(e,n)},rr="0deg",Rs="0px",sr=") ",vf=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,d=i.rotationY,h=i.rotationX,u=i.skewX,m=i.skewY,_=i.scaleX,f=i.scaleY,g=i.transformPerspective,p=i.force3D,y=i.target,T=i.zOrigin,b="",E=p==="auto"&&e&&e!==1||p===!0;if(T&&(h!==rr||d!==rr)){var R=parseFloat(d)*ss,P=Math.sin(R),v=Math.cos(R),M;R=parseFloat(h)*ss,M=Math.cos(R),a=qo(y,a,P*M*-T),o=qo(y,o,-Math.sin(R)*-T),l=qo(y,l,v*M*-T+T)}g!==Rs&&(b+="perspective("+g+sr),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(E||a!==Rs||o!==Rs||l!==Rs)&&(b+=l!==Rs||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+sr),c!==rr&&(b+="rotate("+c+sr),d!==rr&&(b+="rotateY("+d+sr),h!==rr&&(b+="rotateX("+h+sr),(u!==rr||m!==rr)&&(b+="skew("+u+", "+m+sr),(_!==1||f!==1)&&(b+="scale("+_+", "+f+sr),y.style[_t]=b||"translate(0, 0)"},fg=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,d=i.skewY,h=i.scaleX,u=i.scaleY,m=i.target,_=i.xOrigin,f=i.yOrigin,g=i.xOffset,p=i.yOffset,y=i.forceCSS,T=parseFloat(a),b=parseFloat(o),E,R,P,v,M;l=parseFloat(l),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,l+=d),l||c?(l*=ss,c*=ss,E=Math.cos(l)*h,R=Math.sin(l)*h,P=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(d*=ss,M=Math.tan(c-d),M=Math.sqrt(1+M*M),P*=M,v*=M,d&&(M=Math.tan(d),M=Math.sqrt(1+M*M),E*=M,R*=M)),E=Tt(E),R=Tt(R),P=Tt(P),v=Tt(v)):(E=h,v=u,R=P=0),(T&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Ji(m,"x",a,"px"),b=Ji(m,"y",o,"px")),(_||f||g||p)&&(T=Tt(T+_-(_*E+f*P)+g),b=Tt(b+f-(_*R+f*v)+p)),(r||s)&&(M=m.getBBox(),T=Tt(T+r/100*M.width),b=Tt(b+s/100*M.height)),M="matrix("+E+","+R+","+P+","+v+","+T+","+b+")",m.setAttribute("transform",M),y&&(m.style[_t]=M)},pg=function(e,n,i,r,s){var a=360,o=Ft(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ur:1)-r,c=r+l+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*kd)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*kd)%a-~~(l/a)*a)),e._pt=h=new ln(e._pt,n,i,r,l,Ym),h.e=c,h.u="deg",e._props.push(i),h},Fd=function(e,n){for(var i in n)e[i]=n[i];return e},mg=function(e,n,i){var r=Fd({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,d,h,u,m,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[_t]=n,o=oa(i,1),Yi(i,_t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_t],a[_t]=n,o=oa(i,1),a[_t]=c);for(l in Mi)c=r[l],d=o[l],c!==d&&s.indexOf(l)<0&&(m=Kt(c),_=Kt(d),h=m!==_?Ji(i,l,c,_):parseFloat(c),u=parseFloat(d),e._pt=new ln(e._pt,o,l,h,u-h,Jl),e._pt.u=_||0,e._props.push(l));Fd(o,r)};on("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});_o[e>1?"border"+t:t]=function(o,l,c,d,h){var u,m;if(arguments.length<4)return u=a.map(function(_){return pi(o,_,c)}),m=u.join(" "),m.split(u[0]).length===5?u[0]:m;u=(d+"").split(" "),m={},a.forEach(function(_,f){return m[_]=u[f]=u[f]||u[(f-1)/2|0]}),o.init(l,m,h)}});var yf={name:"css",register:Ql,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,d,h,u,m,_,f,g,p,y,T,b,E,R,P,v,M;Oc||Ql(),this.styles=this.styles||hf(e),v=this.styles.props,this.tween=i;for(f in n)if(f!=="autoRound"&&(d=n[f],!(_n[f]&&ef(f,n,i,r,e,s)))){if(m=typeof d,_=_o[f],m==="function"&&(d=d.call(i,r,e,s),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=ia(d)),_)_(this,e,f,d,i)&&(P=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),d+="",$i.lastIndex=0,$i.test(c)||(g=Kt(c),p=Kt(d),p?g!==p&&(c=Ji(e,f,c,p)+p):g&&(d+=g)),this.add(o,"setProperty",c,d,r,s,0,0,f),a.push(f),v.push(f,0,o[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(i,r,e,s):l[f],Ft(c)&&~c.indexOf("random(")&&(c=ia(c)),Kt(c+"")||c==="auto"||(c+=Tn.units[f]||Kt(pi(e,f))||""),(c+"").charAt(1)==="="&&(c=pi(e,f))):c=pi(e,f),u=parseFloat(c),y=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),h=parseFloat(d),f in ti&&(f==="autoAlpha"&&(u===1&&pi(e,"visibility")==="hidden"&&h&&(u=0),v.push("visibility",0,o.visibility),Vi(this,o,"visibility",u?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=ti[f],~f.indexOf(",")&&(f=f.split(",")[0]))),T=f in Mi,T){if(this.styles.save(f),M=d,m==="string"&&d.substring(0,6)==="var(--"){if(d=Mn(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=d,d=Mn(e,"perspective"),I?e.style.perspective=I:Yi(e,"perspective")}h=parseFloat(d)}if(b||(E=e._gsap,E.renderTransform&&!n.parseTransform||oa(e,n.parseTransform),R=n.smoothOrigin!==!1&&E.smooth,b=this._pt=new ln(this._pt,o,_t,0,1,E.renderTransform,E,0,-1),b.dep=1),f==="scale")this._pt=new ln(this._pt,E,"scaleY",E.scaleY,(y?is(E.scaleY,y+h):h)-E.scaleY||0,Jl),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(cn,0,o[cn]),d=dg(d),E.svg?ec(e,d,0,R,0,this):(p=parseFloat(d.split(" ")[2])||0,p!==E.zOrigin&&Vi(this,E,"zOrigin",E.zOrigin,p),Vi(this,o,f,vo(c),vo(d)));continue}else if(f==="svgOrigin"){ec(e,d,1,R,0,this);continue}else if(f in gf){pg(this,E,f,u,y?is(u,y+d):d);continue}else if(f==="smoothOrigin"){Vi(this,E,"smooth",E.smooth,d);continue}else if(f==="force3D"){E[f]=d;continue}else if(f==="transform"){mg(this,d,e);continue}}else f in o||(f=gs(f)||f);if(T||(h||h===0)&&(u||u===0)&&!qm.test(d)&&f in o)g=(c+"").substr((u+"").length),h||(h=0),p=Kt(d)||(f in Tn.units?Tn.units[f]:g),g!==p&&(u=Ji(e,f,c,p)),this._pt=new ln(this._pt,T?E:o,f,u,(y?is(u,y+h):h)-u,!T&&(p==="px"||f==="zIndex")&&n.autoRound!==!1?Qm:Jl),this._pt.u=p||0,T&&M!==d?(this._pt.b=c,this._pt.e=M,this._pt.r=Zm):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Jm);else if(f in o)cg.call(this,e,f,c,y?y+d:d);else if(f in e)this.add(e,f,c||e[f],y?y+d:d,r,s);else if(f!=="parseTransform"){wc(f,d);continue}T||(f in o?v.push(f,0,o[f]):typeof e[f]=="function"?v.push(f,2,e[f]()):v.push(f,1,c||e[f])),a.push(f)}}P&&of(this)},render:function(e,n){if(n.tween._time||!Fc())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:pi,aliases:ti,getSetter:function(e,n,i){var r=ti[n];return r&&r.indexOf(",")<0&&(n=r),n in Mi&&n!==cn&&(e._gsap.x||pi(e,"x"))?i&&Pd===i?n==="scale"?ig:ng:(Pd=i||{})&&(n==="scale"?rg:sg):e.style&&!Tc(e.style[n])?eg:~n.indexOf("-")?tg:Uc(e,n)},core:{_removeProperty:Yi,_getMatrix:zc}};dn.utils.checkPrefix=gs;dn.core.getStyleSaver=hf;(function(t,e,n,i){var r=on(t+","+e+","+n,function(s){Mi[s]=1});on(e,function(s){Tn.units[s]="deg",gf[s]=1}),ti[r[13]]=t+","+e,on(i,function(s){var a=s.split(":");ti[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Tn.units[t]="px"});dn.registerPlugin(yf);var Ce=dn.registerPlugin(yf)||dn,mx=Ce.core.Tween,Gs=["spades","hearts","diamonds","clubs"],Qa=[2,3,4,5,6,7,8,9,10,11,12,13,14],gg={spades:"♠",hearts:"♥",diamonds:"♦",clubs:"♣"},yo={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K",14:"A"};function _g(t){return t===14?11:t>=11?10:t}var vg=0;function Sf(t,e){return{id:`c${++vg}`,suit:t,rank:e,enhancement:"none",seal:"none",edition:"base",baseChips:_g(e)}}function Ir(){const t=[];for(const e of Gs)for(const n of Qa)t.push(Sf(e,n));return t}function yg(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Yo(t,e=Math.random){const n=t.slice();for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}var Zn={"High Card":{chips:5,mult:1,chipsPerLvl:10,multPerLvl:1},Pair:{chips:10,mult:2,chipsPerLvl:15,multPerLvl:1},"Two Pair":{chips:20,mult:2,chipsPerLvl:20,multPerLvl:1},"Three of a Kind":{chips:30,mult:3,chipsPerLvl:20,multPerLvl:2},Straight:{chips:30,mult:4,chipsPerLvl:30,multPerLvl:3},Flush:{chips:35,mult:4,chipsPerLvl:15,multPerLvl:2},"Full House":{chips:40,mult:4,chipsPerLvl:25,multPerLvl:2},"Four of a Kind":{chips:60,mult:7,chipsPerLvl:30,multPerLvl:3},"Straight Flush":{chips:100,mult:8,chipsPerLvl:40,multPerLvl:4},"Five of a Kind":{chips:120,mult:12,chipsPerLvl:35,multPerLvl:3},"Flush House":{chips:140,mult:14,chipsPerLvl:40,multPerLvl:4},"Flush Five":{chips:160,mult:16,chipsPerLvl:50,multPerLvl:3}};function Sg(t){const e=new Map;for(const n of t){if(n.enhancement==="stone")continue;const i=e.get(n.rank)??[];i.push(n),e.set(n.rank,i)}return[...e.entries()].map(([n,i])=>({rank:n,cards:i})).sort((n,i)=>i.cards.length-n.cards.length||i.rank-n.rank)}function Mg(t){const e=t.filter(n=>n.enhancement!=="stone");if(e.length<5)return null;for(const n of["spades","hearts","diamonds","clubs"]){const i=e.filter(r=>r.suit===n||r.enhancement==="wild");if(i.length>=5){const r=new Set(i.slice(0,5).map(s=>s.id));return t.filter(s=>r.has(s.id))}}return null}function xg(t){const e=new Map;for(const i of t)i.enhancement!=="stone"&&(e.has(i.rank)||e.set(i.rank,i));if(e.size<5)return null;if(e.has(14)&&[2,3,4,5].every(i=>e.has(i)))return new Set([14,2,3,4,5]);const n=[...e.keys()].sort((i,r)=>i-r);for(let i=n.length-5;i>=0;i--){let r=!0;for(let s=1;s<5;s++)if(n[i+s]!==n[i]+s){r=!1;break}if(r)return new Set(n.slice(i,i+5))}return null}function bg(t,e){return t.filter(n=>e.has(n.id)||n.enhancement==="stone")}function Ws(t){const e=t.filter(u=>u.enhancement!=="stone"),n=Sg(e),i=n.map(u=>u.cards.length),r=Mg(e),s=xg(e),a=u=>i.includes(u),o=u=>i.filter(m=>m===u).length,l=(...u)=>new Set(u.flatMap(m=>m.cards.map(_=>_.id))),c=new Set(e.map(u=>u.id));let d="High Card",h=new Set;if(a(5)&&r)d="Flush Five",h=l(n[0]);else if(a(3)&&a(2)&&r)d="Flush House",h=new Set(c);else if(a(5))d="Five of a Kind",h=l(n[0]);else if(s&&r){const u=new Set(r.map(_=>_.id)),m=new Set(e.filter(_=>s.has(_.rank)&&u.has(_.id)).map(_=>_.id));m.size>=5?(d="Straight Flush",h=m):(d="Flush",h=new Set(r.map(_=>_.id)))}else if(a(4))d="Four of a Kind",h=l(n[0]);else if(a(3)&&a(2))d="Full House",h=l(n.find(u=>u.cards.length===3),n.find(u=>u.cards.length===2));else if(r)d="Flush",h=new Set(r.map(u=>u.id));else if(s)d="Straight",h=new Set(e.filter(u=>s.has(u.rank)).map(u=>u.id));else if(a(3))d="Three of a Kind",h=l(n[0]);else if(o(2)>=2){const u=n.filter(m=>m.cards.length===2).slice(0,2);d="Two Pair",h=l(...u)}else if(a(2))d="Pair",h=l(n.find(u=>u.cards.length===2));else{d="High Card";const u=e.slice().sort((m,_)=>_.rank-m.rank)[0];u&&h.add(u.id)}return{type:d,scoringCards:bg(t,h),allPlayed:t.slice()}}function Ot(t,e){const n=t.chips,i=t.mult;e.chipsDelta&&(t.chips+=e.chipsDelta),e.multDelta&&(t.mult+=e.multDelta),e.multMul&&e.multMul!==1&&(t.mult*=e.multMul),e.moneyDelta&&(t.money+=e.moneyDelta),t.steps.push({...e,chipsBefore:n,chipsAfter:t.chips,multBefore:i,multAfter:t.mult})}function Tg(t,e,n,i,r){const s=i?" (retrigger)":"";if(r){e.steps.push({source:`${tc(t)} debuffed${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsBefore:e.chips,chipsAfter:e.chips,multBefore:e.mult,multAfter:e.mult});return}t.enhancement==="stone"?Ot(e,{source:`Stone +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):(Ot(e,{source:`${tc(t)} +${t.baseChips} Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:t.baseChips}),t.enhancement==="bonus"?Ot(e,{source:`Bonus +30 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:30}):t.enhancement==="mult"?Ot(e,{source:`Mult Card +4 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:4}):t.enhancement==="glass"?Ot(e,{source:`Glass ×2 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:2}):t.enhancement==="lucky"&&(n()<1/5&&Ot(e,{source:`Lucky +20 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:20}),n()<1/15&&Ot(e,{source:`Lucky +$20${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:20}))),t.seal==="gold"&&Ot(e,{source:`Gold Seal +$3${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:3}),t.edition==="foil"?Ot(e,{source:`Foil +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):t.edition==="holographic"?Ot(e,{source:`Holographic +10 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:10}):t.edition==="polychrome"&&Ot(e,{source:`Polychrome ×1.5 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:1.5})}function Eg(t,e,n){t.enhancement==="steel"&&Ot(e,{source:`Steel ×1.5 Mult${n?" (retrigger)":""}`,stage:"held_card",cardId:t.id,retrigger:n,multMul:1.5})}function as(t){return t.rank>=11&&t.rank<=13}function _s(t){return t.sticker==="perishable"&&(t.perishableRounds??0)<=0}function gi(t,e){return(e.bossDebuffSuits??[]).includes(t.suit)||!!(e.bossDebuffFace&&as(t))}function Ur(t,e,n){return gi(t,n)?!1:t.enhancement==="wild"||t.suit===e}function Mf(t){return t.rank===14?11:t.rank>=11?10:t.rank}function Cg(t,e){return t.scoringCards.findIndex(n=>as(n)&&!gi(n,e))}function wg(t,e,n,i){let r=0;for(const s of i.jokers??[]){if(_s(s))continue;const a=s.effect;a.kind==="retrigger-last-hand"&&i.isFinalHand||a.kind==="retrigger-ranks"&&a.ranks.includes(t.rank)||a.kind==="retrigger-face"&&as(t)?r+=1:a.kind==="retrigger-first"&&e===0?r+=a.extra:(a.kind==="mythic-chronos"&&(e===0||e===n.scoringCards.length-1)||a.kind==="mythic-ace"&&t.rank===14||a.kind==="mythic-blacklotus"&&(t.suit==="spades"||t.suit==="clubs"||t.enhancement==="wild")||a.kind==="mythic-emperor"&&i.isFinalHand)&&(r+=1)}return r}function Ag(t,e,n,i,r,s,a){if(gi(t,i))return;const o=a?" (retrigger)":"";for(const l of i.jokers??[]){if(_s(l))continue;const c=l.effect,d=h=>Ot(r,{...h,stage:"played_card",jokerId:l.id,cardId:t.id,retrigger:a});c.kind==="score-suit-mult"&&Ur(t,c.suit,i)?d({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="score-suit-chips"&&Ur(t,c.suit,i)?d({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-suit-money"&&Ur(t,c.suit,i)?d({source:`${l.name} +$${c.amount}${o}`,moneyDelta:c.amount}):c.kind==="score-rank-mult"&&c.ranks.includes(t.rank)?d({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="score-rank-chips"&&c.ranks.includes(t.rank)?d({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-rank-bonus"&&c.ranks.includes(t.rank)?d({source:`${l.name} +${c.chips} Chips +${c.mult} Mult${o}`,chipsDelta:c.chips,multDelta:c.mult}):c.kind==="score-face-chips"&&as(t)?d({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-face-mult"&&as(t)?d({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="suit-chance-xmult"&&Ur(t,c.suit,i)?s()<c.chance&&d({source:`${l.name} ×${c.amount} Mult${o}`,multMul:c.amount}):c.kind==="first-face-xmult"&&n===e?d({source:`${l.name} ×${c.amount} Mult${o}`,multMul:c.amount}):c.kind==="mythic-royal"&&as(t)?d({source:`${l.name} +40 Chips +8 Mult${o}`,chipsDelta:40,multDelta:8}):c.kind==="mythic-ace"&&t.rank===14?d({source:`${l.name} ×1.25 Mult${o}`,multMul:1.25}):c.kind==="mythic-dragon"&&t.seal==="gold"?d({source:`${l.name} +$5 ×1.5 Mult${o}`,moneyDelta:5,multMul:1.5}):c.kind==="mythic-kaleidoscope"&&t.edition!=="base"&&t.edition!=="negative"?d({source:`${l.name} ×1.35 Mult${o}`,multMul:1.35}):c.kind==="mythic-bloodmoon"&&(Ur(t,"hearts",i)&&d({source:`${l.name} Heart ×1.3${o}`,multMul:1.3}),Ur(t,"diamonds",i)&&d({source:`${l.name} Diamond +$2${o}`,moneyDelta:2}))}}function Rg(t,e,n,i,r){if(!gi(t,n)&&(Eg(t,i,r),t.id===e))for(const s of n.jokers??[]){if(_s(s)||s.effect.kind!=="lowest-held-mult")continue;const a=Mf(t)*s.effect.multiplier;Ot(i,{source:`${s.name} +${a} Mult${r?" (retrigger)":""}`,stage:"held_card",cardId:t.id,jokerId:s.id,retrigger:r,multDelta:a})}}function Pg(t,e,n,i,r){if(_s(t))return;const s=t.effect,a=n.heldCards??[],o=l=>Ot(i,{...l,stage:"joker",jokerId:t.id});if(s.kind==="chips")o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="mult")o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="xmult")o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="random-mult"){const l=s.min+Math.floor(r()*(s.max-s.min+1));t.counter=l,l>0?o({source:`${t.name} +${l} Mult`,multDelta:l}):o({source:`${t.name} +0 Mult`})}else if(s.kind==="pair-mult")Dg(e.type)&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="flush-mult-mul")e.type.includes("Flush")&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="first-hand-chips")n.handsLeftBeforePlay===n.handsPerRound&&o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-mult")s.handTypes.includes(e.type)&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="hand-chips")s.handTypes.includes(e.type)&&o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-xmult")s.handTypes.includes(e.type)&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="few-cards-mult")e.allPlayed.length<=s.maxCards&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="discard-chips"){const l=Math.max(0,n.discardsLeft??0)*s.amountPerDiscard;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="zero-discard-mult")(n.discardsLeft??0)===0&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="joker-count-mult"){const l=Math.max(0,n.jokerCount??0)*s.amountPerJoker;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="held-black-xmult")a.every(l=>l.enhancement==="stone"?!1:l.enhancement==="wild"&&!gi(l,n)?!0:l.suit==="spades"||l.suit==="clubs")&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="decay-chips"){const l=Math.max(0,t.counter??s.start);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="straight-scale-chips"){const l=Math.max(0,t.counter??s.start??0);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="bus-scale-mult"||s.kind==="green-scale-mult"){const l=Math.max(0,t.counter??0);l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="deck-remaining-chips"){const l=Math.max(0,n.deckRemaining??0)*s.amountPerCard;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="money-chips"){const l=Math.max(0,Math.floor(n.money??0))*s.amountPerDollar;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="money-mult"){const l=Math.floor(Math.max(0,n.money??0)/s.dollarsPerStep)*s.amountPerStep;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="repeat-hand-xmult")n.handAlreadyPlayedThisRound&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="last-hand-xmult")n.isFinalHand&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="loyalty-xmult")(t.counter??0)===s.every-1&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="hand-count-mult"){const l=Math.max(0,n.handPlayCount??0)*s.amountPerPlay;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="castle-scale-chips"){const l=Math.max(0,t.counter??0);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="mythic-prism"){const l=1+new Set(e.scoringCards.filter(c=>!gi(c,n)).map(c=>c.suit)).size*.75;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-phoenix"){const l=1+Math.max(0,t.counter??0)*.25;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-leviathan"){const l=Math.max(0,n.fullDeckSize??0)*8;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="mythic-eclipse"){const l=a.filter(h=>h.enhancement!=="stone"),c=l.every(h=>h.enhancement==="wild"||h.suit==="hearts"||h.suit==="diamonds"),d=l.every(h=>h.enhancement==="wild"||h.suit==="spades"||h.suit==="clubs");!a.some(h=>h.enhancement==="stone")&&(c||d)&&o({source:`${t.name} ×4 Mult`,multMul:4})}else if(s.kind==="mythic-echo"){const l=1+Math.max(0,n.priorSameHandCount??0)*.5;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-quantum"){const l=Math.floor(r()*4);t.counter=l,o(l===0?{source:`${t.name} +250 Chips`,chipsDelta:250}:l===1?{source:`${t.name} +35 Mult`,multDelta:35}:l===2?{source:`${t.name} ×3 Mult`,multMul:3}:{source:`${t.name} +$12`,moneyDelta:12})}else if(s.kind==="mythic-void"){const l=1+Math.max(0,(n.jokerCapacity??n.jokerCount??0)-(n.jokerCount??0))*.75;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-oracle"){const l=e.scoringCards.filter(c=>!gi(c,n)&&c.enhancement!=="stone").reduce((c,d)=>c+d.rank,0);l>0&&l%13===0&&o({source:`${t.name} ×5 Mult`,multMul:5})}else if(s.kind==="mythic-forge"){const l=1+Math.max(0,n.handLevelExtra??0)*.08;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-grail")r()<1/6?o({source:`${t.name} JACKPOT ×6 Mult`,multMul:6}):o({source:`${t.name} +6 Mult`,multDelta:6});else if(s.kind==="mythic-staircase"){const l=1+Math.max(0,n.distinctHandTypesThisRound??0)*.5;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-emperor")n.isFinalHand&&o({source:`${t.name} ×5 Mult`,multMul:5});else if(s.kind==="mythic-worldtree"){const l=a.filter(d=>d.enhancement!=="none"||d.seal!=="none"||d.edition!=="base"&&d.edition!=="negative").length,c=Math.pow(1.25,l);c>1&&o({source:`${t.name} ×${c.toFixed(2)} Mult`,multMul:c})}}function kg(t,e,n={}){const i=Zn[t.type],r=Math.max(1,e.level),s=i.chips+i.chipsPerLvl*(r-1),a=i.mult+i.multPerLvl*(r-1),o=n.bossHalveBase?Math.max(1,Math.floor(s/2)):s,l=n.bossHalveBase?Math.max(1,a/2):a,c=n.rng??Math.random,d={chips:o,mult:l,money:0,steps:[{source:`${t.type} (lvl ${r})`,stage:"base",chipsDelta:o,multDelta:l,chipsBefore:0,chipsAfter:o,multBefore:0,multAfter:l}]},h=Cg(t,n);for(let p=0;p<t.scoringCards.length;p++){const y=t.scoringCards[p],T=1+(y.seal==="red"?1:0)+wg(y,p,t,n);for(let b=0;b<T;b++){const E=b>0,R=gi(y,n);Tg(y,d,c,E,R),R||Ag(y,h,p,n,d,c,E)}}const u=n.heldCards??[];let m=null;const _=u.filter(p=>p.enhancement!=="stone").map((p,y)=>({card:p,index:y,value:Mf(p)}));if(_.length>0){const p=Math.min(..._.map(T=>T.value)),y=_.filter(T=>T.value===p);m=y[y.length-1].card.id}const f=(n.jokers??[]).filter(p=>!_s(p)&&p.effect.kind==="retrigger-held").length;for(const p of u){if(!(p.enhancement==="steel"||p.id===m))continue;const y=1+(p.seal==="red"?1:0)+f;for(let T=0;T<y;T++)Rg(p,m,n,d,T>0)}for(const p of n.jokers??[]){if(_s(p))continue;const y=p.edition??"base";y==="foil"?Ot(d,{source:`${p.name} Foil +50 Chips`,stage:"joker",chipsDelta:50,jokerId:p.id}):y==="holographic"&&Ot(d,{source:`${p.name} Holographic +10 Mult`,stage:"joker",multDelta:10,jokerId:p.id}),p.effect.kind==="score-suit-mult"||p.effect.kind==="score-suit-chips"||p.effect.kind==="score-suit-money"||p.effect.kind==="score-rank-mult"||p.effect.kind==="score-rank-chips"||p.effect.kind==="score-rank-bonus"||p.effect.kind==="score-face-chips"||p.effect.kind==="score-face-mult"||p.effect.kind==="lowest-held-mult"||p.effect.kind==="retrigger-last-hand"||p.effect.kind==="retrigger-ranks"||p.effect.kind==="retrigger-held"||p.effect.kind==="retrigger-face"||p.effect.kind==="retrigger-first"||p.effect.kind==="suit-chance-xmult"||p.effect.kind==="first-face-xmult"||p.effect.kind==="mythic-chronos"||p.effect.kind==="mythic-royal"||p.effect.kind==="mythic-ace"||p.effect.kind==="mythic-dragon"||p.effect.kind==="mythic-kaleidoscope"||p.effect.kind==="mythic-bloodmoon"||p.effect.kind==="mythic-blacklotus"||Pg(p,t,n,d,c),y==="polychrome"&&Ot(d,{source:`${p.name} Polychrome ×1.5 Mult`,stage:"joker",multMul:1.5,jokerId:p.id})}const g=[];for(const p of t.scoringCards)p.enhancement!=="glass"||gi(p,n)||c()<1/4&&(g.push(p.id),d.steps.push({source:`${tc(p)} Glass shattered`,stage:"destruction",cardId:p.id,chipsBefore:d.chips,chipsAfter:d.chips,multBefore:d.mult,multAfter:d.mult}));return{hand:t,baseChips:o,baseMult:l,finalChips:d.chips,finalMult:d.mult,total:Math.floor(d.chips*d.mult),moneyDelta:d.money,destroyedCardIds:g,steps:d.steps}}function Dg(t){return t==="Pair"||t==="Two Pair"||t==="Three of a Kind"||t==="Full House"||t==="Four of a Kind"||t==="Five of a Kind"||t==="Flush House"||t==="Flush Five"}function tc(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":`${t.rank}`}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}var Ni=[{key:"pluto",name:"Pluto",description:"Level up High Card.",type:"planet",price:3,effect:{kind:"planet",handType:"High Card"}},{key:"mercury",name:"Mercury",description:"Level up Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Pair"}},{key:"uranus",name:"Uranus",description:"Level up Two Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Two Pair"}},{key:"venus",name:"Venus",description:"Level up Three of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Three of a Kind"}},{key:"saturn",name:"Saturn",description:"Level up Straight.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight"}},{key:"jupiter",name:"Jupiter",description:"Level up Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush"}},{key:"earth",name:"Earth",description:"Level up Full House.",type:"planet",price:3,effect:{kind:"planet",handType:"Full House"}},{key:"mars",name:"Mars",description:"Level up Four of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Four of a Kind"}},{key:"neptune",name:"Neptune",description:"Level up Straight Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight Flush"}},{key:"planet-x",name:"Planet X",description:"Level up Five of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Five of a Kind"}},{key:"ceres",name:"Ceres",description:"Level up Flush House.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush House"}},{key:"eris",name:"Eris",description:"Level up Flush Five.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush Five"}}],Li=[{key:"the-fool",name:"The Fool",description:"Create the last Tarot or Planet used this run, excluding The Fool.",type:"tarot",price:3,effect:{kind:"repeat-last-consumable"}},{key:"the-magician",name:"The Magician",description:"Turn up to 2 selected cards into Lucky Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"lucky",min:1,max:2}},{key:"the-high-priestess",name:"The High Priestess",description:"Create up to 2 random Planet cards.",type:"tarot",price:3,effect:{kind:"create-consumables",type:"planet",count:2}},{key:"the-empress",name:"The Empress",description:"Turn up to 2 selected cards into Mult Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"mult",min:1,max:2}},{key:"the-emperor",name:"The Emperor",description:"Create up to 2 random Tarot cards.",type:"tarot",price:3,effect:{kind:"create-consumables",type:"tarot",count:2}},{key:"the-hierophant",name:"The Hierophant",description:"Turn up to 2 selected cards into Bonus Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"bonus",min:1,max:2}},{key:"the-lovers",name:"The Lovers",description:"Turn 1 selected card into a Wild Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"wild",min:1,max:1}},{key:"the-chariot",name:"The Chariot",description:"Turn 1 selected card into a Steel Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"steel",min:1,max:1}},{key:"justice",name:"Justice",description:"Turn 1 selected card into a Glass Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"glass",min:1,max:1}},{key:"the-hermit",name:"The Hermit",description:"Double money, gaining at most $20.",type:"tarot",price:3,effect:{kind:"money",mode:"double-up-to-20"}},{key:"wheel-of-fortune",name:"The Wheel of Fortune",description:"1 in 4 chance to add Foil, Holographic or Polychrome to a random Joker.",type:"tarot",price:3,effect:{kind:"joker-edition-chance",chance:.25}},{key:"strength",name:"Strength",description:"Increase the rank of up to 2 selected cards by 1.",type:"tarot",price:3,effect:{kind:"rank-up-selected",min:1,max:2}},{key:"the-hanged-man",name:"The Hanged Man",description:"Destroy up to 2 selected cards.",type:"tarot",price:3,effect:{kind:"destroy-selected",min:1,max:2}},{key:"death",name:"Death",description:"The left selected card becomes an exact copy of the right selected card.",type:"tarot",price:3,effect:{kind:"copy-right-to-left",min:2,max:2}},{key:"temperance",name:"Temperance",description:"Gain the total sell value of your Jokers, capped at $50.",type:"tarot",price:3,effect:{kind:"temperance",cap:50}},{key:"the-devil",name:"The Devil",description:"Turn 1 selected card into a Gold Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"gold",min:1,max:1}},{key:"the-tower",name:"The Tower",description:"Turn 1 selected card into a Stone Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"stone",min:1,max:1}},{key:"the-star",name:"The Star",description:"Convert up to 3 selected cards to Diamonds.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"diamonds",min:1,max:3}},{key:"the-moon",name:"The Moon",description:"Convert up to 3 selected cards to Clubs.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"clubs",min:1,max:3}},{key:"the-sun",name:"The Sun",description:"Convert up to 3 selected cards to Hearts.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"hearts",min:1,max:3}},{key:"judgement",name:"Judgement",description:"Create a random unlocked Joker if there is room.",type:"tarot",price:3,effect:{kind:"create-random-joker"}},{key:"the-world",name:"The World",description:"Convert up to 3 selected cards to Spades.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"spades",min:1,max:3}}],Jr=[{key:"familiar",name:"Familiar",description:"Destroy 1 random card in hand, then add 3 random enhanced face cards.",type:"spectral",price:4,effect:{kind:"spectral-familiar",mode:"face",create:3}},{key:"grim",name:"Grim",description:"Destroy 1 random card in hand, then add 2 random enhanced Aces.",type:"spectral",price:4,effect:{kind:"spectral-familiar",mode:"ace",create:2}},{key:"incantation",name:"Incantation",description:"Destroy 1 random card in hand, then add 4 random enhanced numbered cards.",type:"spectral",price:4,effect:{kind:"spectral-familiar",mode:"number",create:4}},{key:"talisman",name:"Talisman",description:"Add a Gold Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"gold",min:1,max:1}},{key:"aura",name:"Aura",description:"Add Foil, Holographic or Polychrome to 1 selected card.",type:"spectral",price:4,effect:{kind:"edition-selected",edition:"random",min:1,max:1}},{key:"wraith",name:"Wraith",description:"Create a Rare Joker, then set money to $0.",type:"spectral",price:4,effect:{kind:"spectral-wraith"}},{key:"sigil",name:"Sigil",description:"Convert every card in hand to one random suit.",type:"spectral",price:4,effect:{kind:"spectral-sigil"}},{key:"ouija",name:"Ouija",description:"Convert every card in hand to one random rank and reduce Hand Size by 1.",type:"spectral",price:4,effect:{kind:"spectral-ouija"}},{key:"ectoplasm",name:"Ectoplasm",description:"Add Negative to a random Joker; each use reduces Hand Size further.",type:"spectral",price:4,effect:{kind:"spectral-ectoplasm"}},{key:"immolate",name:"Immolate",description:"Destroy up to 5 selected cards and gain $20.",type:"spectral",price:4,effect:{kind:"immolate-selected",min:1,max:5,money:20}},{key:"ankh",name:"Ankh",description:"Copy one random Joker, then destroy all other Jokers.",type:"spectral",price:4,effect:{kind:"spectral-ankh"}},{key:"deja-vu",name:"Deja Vu",description:"Add a Red Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"red",min:1,max:1}},{key:"hex",name:"Hex",description:"Add Polychrome to one random Joker, then destroy the rest.",type:"spectral",price:4,effect:{kind:"spectral-hex"}},{key:"trance",name:"Trance",description:"Add a Blue Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"blue",min:1,max:1}},{key:"medium",name:"Medium",description:"Add a Purple Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"purple",min:1,max:1}},{key:"cryptid",name:"Cryptid",description:"Create 2 exact copies of 1 selected card.",type:"spectral",price:4,effect:{kind:"duplicate-selected",copies:2,min:1,max:1}},{key:"the-soul",name:"The Soul",description:"Create a Mythic Joker in this custom build.",type:"spectral",price:4,effect:{kind:"spectral-soul"}},{key:"black-hole",name:"Black Hole",description:"Upgrade every Poker Hand by 1 level.",type:"spectral",price:4,effect:{kind:"spectral-black-hole"}}],Lg=["arcana","celestial","standard","buffoon","spectral"];function Bd(t,e){const n=t==="buffoon";return e==="normal"?{choices:n?2:3,picks:1,price:4}:e==="jumbo"?{choices:n?4:5,picks:1,price:6}:{choices:n?4:5,picks:2,price:8}}function Ig(t,e){return(e==="normal"?"":e==="jumbo"?"Jumbo ":"Mega ")+(t==="arcana"?"Arcana Pack":t==="celestial"?"Celestial Pack":t==="standard"?"Standard Pack":t==="buffoon"?"Buffoon Pack":"Spectral Pack")}function zd(t){if(!("min"in t&&"max"in t))return null;const e=t.kind==="copy-right-to-left"?"Select exactly 2 cards. Left becomes a copy of right.":t.kind==="destroy-selected"?"Select cards to destroy.":t.kind==="immolate-selected"?"Select cards to destroy for $20.":t.kind==="rank-up-selected"?"Select cards to increase rank.":t.kind==="convert-suit"?"Select cards to change suit.":t.kind==="edition-selected"?"Select a card to receive an Edition.":t.kind==="seal-selected"?"Select a card to receive a Seal.":t.kind==="duplicate-selected"?"Select a card to copy.":"Select card(s) to enhance.";return{min:t.min,max:t.max,instruction:e}}var os={overstock:{key:"overstock",name:"Overstock",description:"+1 card slot in the Shop.",price:10},"overstock-plus":{key:"overstock-plus",name:"Overstock Plus",description:"+1 additional card slot in the Shop.",price:10},"clearance-sale":{key:"clearance-sale",name:"Clearance Sale",description:"Shop cards and Booster Packs are 25% off.",price:10},liquidation:{key:"liquidation",name:"Liquidation",description:"Shop cards and Booster Packs are 50% off.",price:10},hone:{key:"hone",name:"Hone",description:"Foil, Holographic and Polychrome appear more often.",price:10},"glow-up":{key:"glow-up",name:"Glow Up",description:"Card Editions appear much more often.",price:10},"reroll-surplus":{key:"reroll-surplus",name:"Reroll Surplus",description:"Rerolls cost $2 less.",price:10},"reroll-glut":{key:"reroll-glut",name:"Reroll Glut",description:"Rerolls cost another $2 less.",price:10},"crystal-ball":{key:"crystal-ball",name:"Crystal Ball",description:"+1 consumable slot.",price:10},"omen-globe":{key:"omen-globe",name:"Omen Globe",description:"Arcana Packs can contain Spectral cards.",price:10},telescope:{key:"telescope",name:"Telescope",description:"First Celestial Pack card matches your most-played Poker Hand.",price:10},observatory:{key:"observatory",name:"Observatory",description:"Held matching Planet cards give X1.5 Mult.",price:10},grabber:{key:"grabber",name:"Grabber",description:"+1 Hand each round.",price:10},"nacho-tong":{key:"nacho-tong",name:"Nacho Tong",description:"+1 additional Hand each round.",price:10},wasteful:{key:"wasteful",name:"Wasteful",description:"+1 Discard each round.",price:10},recyclomancy:{key:"recyclomancy",name:"Recyclomancy",description:"+1 additional Discard each round.",price:10},"tarot-merchant":{key:"tarot-merchant",name:"Tarot Merchant",description:"Tarot cards appear more often in the Shop.",price:10},"tarot-tycoon":{key:"tarot-tycoon",name:"Tarot Tycoon",description:"Tarot cards appear far more often in the Shop.",price:10},"planet-merchant":{key:"planet-merchant",name:"Planet Merchant",description:"Planet cards appear more often in the Shop.",price:10},"planet-tycoon":{key:"planet-tycoon",name:"Planet Tycoon",description:"Planet cards appear far more often in the Shop.",price:10},"seed-money":{key:"seed-money",name:"Seed Money",description:"Interest cap increases to $10.",price:10},"money-tree":{key:"money-tree",name:"Money Tree",description:"Interest cap increases to $20.",price:10},blank:{key:"blank",name:"Blank",description:"Does nothing by itself.",price:10},antimatter:{key:"antimatter",name:"Antimatter",description:"+1 Joker slot.",price:10},"magic-trick":{key:"magic-trick",name:"Magic Trick",description:"Playing cards may appear in the Shop.",price:10},illusion:{key:"illusion",name:"Illusion",description:"Shop playing cards may carry Enhancements, Editions or Seals.",price:10},hieroglyph:{key:"hieroglyph",name:"Hieroglyph",description:"-1 Ante and -1 Hand each round.",price:10},petroglyph:{key:"petroglyph",name:"Petroglyph",description:"-1 Ante and -1 Discard each round.",price:10},"directors-cut":{key:"directors-cut",name:"Director's Cut",description:"Reroll the Boss Blind once per Ante for $10.",price:10},retcon:{key:"retcon",name:"Retcon",description:"Reroll the Boss Blind any number of times for $10.",price:10},"paint-brush":{key:"paint-brush",name:"Paint Brush",description:"+1 Hand Size.",price:10},palette:{key:"palette",name:"Palette",description:"+1 additional Hand Size.",price:10}},So={"overstock-plus":"overstock",liquidation:"clearance-sale","glow-up":"hone","reroll-glut":"reroll-surplus","omen-globe":"crystal-ball",observatory:"telescope","nacho-tong":"grabber",recyclomancy:"wasteful","tarot-tycoon":"tarot-merchant","planet-tycoon":"planet-merchant","money-tree":"seed-money",antimatter:"blank",illusion:"magic-trick",petroglyph:"hieroglyph",retcon:"directors-cut",palette:"paint-brush"};function Ug(t){return Ni.find(e=>e.effect.kind==="planet"&&e.effect.handType===t)??Ni[0]}var Js={red:{key:"red",name:"Red Deck",description:"+1 Discard every round."},blue:{key:"blue",name:"Blue Deck",description:"+1 Hand every round."},yellow:{key:"yellow",name:"Yellow Deck",description:"Start with $10 extra."},green:{key:"green",name:"Green Deck",description:"No interest; cashout pays $2 per unused Hand and $1 per unused Discard."},black:{key:"black",name:"Black Deck",description:"+1 Joker slot, -1 Hand every round."},magic:{key:"magic",name:"Magic Deck",description:"Start with Crystal Ball and 2 copies of The Fool."},nebula:{key:"nebula",name:"Nebula Deck",description:"Start with Telescope and -1 consumable slot."},ghost:{key:"ghost",name:"Ghost Deck",description:"Spectral cards may appear in the Shop; start with Hex."},abandoned:{key:"abandoned",name:"Abandoned Deck",description:"Start with no face cards."},checkered:{key:"checkered",name:"Checkered Deck",description:"Start with 26 Spades and 26 Hearts."},zodiac:{key:"zodiac",name:"Zodiac Deck",description:"Start with Tarot Merchant, Planet Merchant and Overstock."},painted:{key:"painted",name:"Painted Deck",description:"+2 Hand Size, -1 Joker slot."},anaglyph:{key:"anaglyph",name:"Anaglyph Deck",description:"Gain a Double Tag after defeating each Boss Blind."},plasma:{key:"plasma",name:"Plasma Deck",description:"Balance Chips and Mult when scoring; base Blind size is doubled."},erratic:{key:"erratic",name:"Erratic Deck",description:"All starting card ranks and suits are randomized."}},Qe={white:{key:"white",name:"White Stake",description:"Base difficulty.",order:0},red:{key:"red",name:"Red Stake",description:"Small Blind gives no base reward.",order:1},green:{key:"green",name:"Green Stake",description:"Score requirements scale faster.",order:2},black:{key:"black",name:"Black Stake",description:"Generated Jokers may be Eternal.",order:3},blue:{key:"blue",name:"Blue Stake",description:"-1 Discard every round.",order:4},purple:{key:"purple",name:"Purple Stake",description:"Score requirements scale even faster.",order:5},orange:{key:"orange",name:"Orange Stake",description:"Generated Jokers may be Perishable.",order:6},gold:{key:"gold",name:"Gold Stake",description:"Generated Jokers may also be Rental.",order:7}},la={uncommon:{key:"uncommon",name:"Uncommon Tag",description:"Create a free Uncommon Joker if space exists."},rare:{key:"rare",name:"Rare Tag",description:"Create a free Rare Joker if space exists."},negative:{key:"negative",name:"Negative Tag",description:"Create a free Negative Joker."},foil:{key:"foil",name:"Foil Tag",description:"Create a free Foil Joker."},holographic:{key:"holographic",name:"Holographic Tag",description:"Create a free Holographic Joker."},polychrome:{key:"polychrome",name:"Polychrome Tag",description:"Create a free Polychrome Joker."},investment:{key:"investment",name:"Investment Tag",description:"Gain $25 after defeating the next Boss Blind."},voucher:{key:"voucher",name:"Voucher Tag",description:"Redeem a random unowned Voucher."},boss:{key:"boss",name:"Boss Tag",description:"Reroll the Boss Blind for this Ante."},standard:{key:"standard",name:"Standard Tag",description:"Add 2 random playing cards to the deck."},charm:{key:"charm",name:"Charm Tag",description:"Create a Tarot if room exists."},meteor:{key:"meteor",name:"Meteor Tag",description:"Create a Planet if room exists."},buffoon:{key:"buffoon",name:"Buffoon Tag",description:"Create a random unlocked Joker if room exists."},handy:{key:"handy",name:"Handy Tag",description:"Gain $1 for every Hand played this run."},garbage:{key:"garbage",name:"Garbage Tag",description:"Gain $1 for every Discard used this run."},ethereal:{key:"ethereal",name:"Ethereal Tag",description:"Create a Spectral if room exists."},coupon:{key:"coupon",name:"Coupon Tag",description:"Initial Shop cards and Booster Packs in the next Shop are free."},double:{key:"double",name:"Double Tag",description:"Copy the next non-Double Tag."},juggle:{key:"juggle",name:"Juggle Tag",description:"+3 Hand Size for the next round."},d6:{key:"d6",name:"D6 Tag",description:"Next Shop starts with a free reroll."},"top-up":{key:"top-up",name:"Top-up Tag",description:"Create up to 2 Common Jokers if space exists."},speed:{key:"speed",name:"Speed Tag",description:"Gain $5 for every Blind skipped this run."},orbital:{key:"orbital",name:"Orbital Tag",description:"Upgrade the most-played Poker Hand by 3 levels."},economy:{key:"economy",name:"Economy Tag",description:"Double current money, adding at most $40."}},br={hook:{key:"hook",name:"The Hook",description:"Discards 2 random cards after each played hand.",targetMult:2},ox:{key:"ox",name:"The Ox",description:"Playing your most-played Poker Hand sets money to $0.",targetMult:2},house:{key:"house",name:"The House",description:"First hand is concealed.",targetMult:2},wall:{key:"wall",name:"The Wall",description:"Very large Blind.",targetMult:4},wheel:{key:"wheel",name:"The Wheel",description:"Some cards are concealed when drawn.",targetMult:2},arm:{key:"arm",name:"The Arm",description:"Playing a hand lowers that Poker Hand by 1 level.",targetMult:2},club:{key:"club",name:"The Club",description:"Club cards are debuffed.",targetMult:2},fish:{key:"fish",name:"The Fish",description:"Cards drawn after a played hand are concealed.",targetMult:2},psychic:{key:"psychic",name:"The Psychic",description:"You must play exactly 5 cards.",targetMult:2},goad:{key:"goad",name:"The Goad",description:"Spade cards are debuffed.",targetMult:2},water:{key:"water",name:"The Water",description:"Start this Blind with 0 Discards.",targetMult:2},window:{key:"window",name:"The Window",description:"Diamond cards are debuffed.",targetMult:2},manacle:{key:"manacle",name:"The Manacle",description:"-1 Hand Size for this Blind.",targetMult:2},eye:{key:"eye",name:"The Eye",description:"No Poker Hand may be played more than once this Blind.",targetMult:2},mouth:{key:"mouth",name:"The Mouth",description:"After the first hand, only that Poker Hand may be played.",targetMult:2},plant:{key:"plant",name:"The Plant",description:"Face cards are debuffed.",targetMult:2},serpent:{key:"serpent",name:"The Serpent",description:"After Play or Discard, draw exactly 3 cards.",targetMult:2},pillar:{key:"pillar",name:"The Pillar",description:"Cards played earlier this Ante are debuffed.",targetMult:2},needle:{key:"needle",name:"The Needle",description:"Play only 1 Hand.",targetMult:1},head:{key:"head",name:"The Head",description:"Heart cards are debuffed.",targetMult:2},tooth:{key:"tooth",name:"The Tooth",description:"Lose $1 for every card played.",targetMult:2},flint:{key:"flint",name:"The Flint",description:"Base Chips and Mult are halved.",targetMult:2},mark:{key:"mark",name:"The Mark",description:"Face cards are concealed.",targetMult:2},"amber-acorn":{key:"amber-acorn",name:"Amber Acorn",description:"Joker order is shuffled at Blind start.",targetMult:2},"verdant-leaf":{key:"verdant-leaf",name:"Verdant Leaf",description:"All cards are debuffed until a Joker is sold.",targetMult:2},"violet-vessel":{key:"violet-vessel",name:"Violet Vessel",description:"Extremely large Blind.",targetMult:6},"crimson-heart":{key:"crimson-heart",name:"Crimson Heart",description:"One random Joker is debuffed each hand.",targetMult:2},"cerulean-bell":{key:"cerulean-bell",name:"Cerulean Bell",description:"One random card is forced selected.",targetMult:2}},eo=["amber-acorn","verdant-leaf","violet-vessel","crimson-heart","cerulean-bell"],Jo=Object.keys(br).filter(t=>!eo.includes(t)),Ng=[300,800,2e3,5e3,11e3,2e4,35e3,5e4],Og=[300,900,2600,8e3,2e4,36e3,6e4,1e5],Fg=[300,1e3,3200,9e3,25e3,6e4,11e4,2e5],Vd=Object.keys(la),Bg={seed:Math.floor(Math.random()*1e9),handSize:8,handsPerRound:4,discardsPerRound:3,startingMoney:4};var zg=5,Mr=[{key:"joker",name:"Joker",description:"+4 Mult.",rarity:"common",price:2,effect:{kind:"mult",amount:4}},{key:"greedy-joker",name:"Greedy Joker",description:"Each scoring Diamond gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"diamonds",amount:3}},{key:"lusty-joker",name:"Lusty Joker",description:"Each scoring Heart gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"hearts",amount:3}},{key:"wrathful-joker",name:"Wrathful Joker",description:"Each scoring Spade gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"spades",amount:3}},{key:"gluttonous-joker",name:"Gluttonous Joker",description:"Each scoring Club gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"clubs",amount:3}},{key:"jolly-joker",name:"Jolly Joker",description:"+8 Mult when the hand contains a Pair.",rarity:"common",price:3,effect:{kind:"pair-mult",amount:8}},{key:"crazy-joker",name:"Crazy Joker",description:"+12 Mult on Straight hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Straight","Straight Flush"],amount:12}},{key:"droll-joker",name:"Droll Joker",description:"+10 Mult on Flush hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:10}},{key:"sly-joker",name:"Sly Joker",description:"+50 Chips on Pair-family hands.",rarity:"common",price:3,effect:{kind:"hand-chips",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:50}},{key:"wily-joker",name:"Wily Joker",description:"+100 Chips on Three-of-a-Kind-family hands.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:100}},{key:"clever-joker",name:"Clever Joker",description:"+80 Chips on Two Pair or Full House.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Two Pair","Full House","Flush House"],amount:80}},{key:"devious-joker",name:"Devious Joker",description:"+100 Chips on Straight hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Straight","Straight Flush"],amount:100}},{key:"crafty-joker",name:"Crafty Joker",description:"+80 Chips on Flush hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:80}},{key:"half-joker",name:"Half Joker",description:"+20 Mult if 3 or fewer cards are played.",rarity:"common",price:5,effect:{kind:"few-cards-mult",maxCards:3,amount:20}},{key:"banner",name:"Banner",description:"+30 Chips for each remaining Discard.",rarity:"common",price:5,effect:{kind:"discard-chips",amountPerDiscard:30}},{key:"mystic-summit",name:"Mystic Summit",description:"+15 Mult when no Discards remain.",rarity:"common",price:5,effect:{kind:"zero-discard-mult",amount:15}},{key:"raised-fist",name:"Raised Fist",description:"Adds twice the rank of the lowest held card to Mult.",rarity:"common",price:5,effect:{kind:"lowest-held-mult",multiplier:2}},{key:"misprint",name:"Misprint",description:"+0–23 Mult, randomly rolled each played hand.",rarity:"common",price:4,effect:{kind:"random-mult",min:0,max:23}},{key:"even-steven",name:"Even Steven",description:"Scoring even ranks give +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-mult",ranks:[2,4,6,8,10],amount:4}},{key:"odd-todd",name:"Odd Todd",description:"Scoring odd ranks and Aces give +31 Chips.",rarity:"common",price:4,effect:{kind:"score-rank-chips",ranks:[3,5,7,9,14],amount:31}},{key:"scholar",name:"Scholar",description:"Scoring Aces give +20 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[14],chips:20,mult:4}},{key:"scary-face",name:"Scary Face",description:"Scoring face cards give +30 Chips.",rarity:"common",price:4,effect:{kind:"score-face-chips",amount:30}},{key:"smiley-face",name:"Smiley Face",description:"Scoring face cards give +5 Mult.",rarity:"common",price:4,effect:{kind:"score-face-mult",amount:5}},{key:"fibonacci",name:"Fibonacci",description:"A, 2, 3, 5 and 8 give +8 Mult when scored.",rarity:"uncommon",price:8,effect:{kind:"score-rank-mult",ranks:[14,2,3,5,8],amount:8}},{key:"abstract-joker",name:"Abstract Joker",description:"+3 Mult for every Joker you own.",rarity:"common",price:4,effect:{kind:"joker-count-mult",amountPerJoker:3}},{key:"blackboard",name:"Blackboard",description:"x3 Mult if all held cards are Spades or Clubs.",rarity:"uncommon",price:6,effect:{kind:"held-black-xmult",amount:3}},{key:"ice-cream",name:"Ice Cream",description:"Starts at +100 Chips and loses 5 Chips after each hand.",rarity:"common",price:5,effect:{kind:"decay-chips",start:100,decay:5}},{key:"runner",name:"Runner",description:"Gains +15 Chips whenever you play a Straight.",rarity:"common",price:5,effect:{kind:"straight-scale-chips",gain:15,start:0}},{key:"ride-the-bus",name:"Ride the Bus",description:"Gains +1 Mult after a hand with no scoring face card; resets otherwise.",rarity:"common",price:6,effect:{kind:"bus-scale-mult",gain:1}},{key:"green-joker",name:"Green Joker",description:"Gains +1 Mult per hand and loses 1 per discard.",rarity:"common",price:4,effect:{kind:"green-scale-mult",handGain:1,discardLoss:1}},{key:"blue-joker",name:"Blue Joker",description:"+2 Chips per card remaining in the draw pile.",rarity:"common",price:5,effect:{kind:"deck-remaining-chips",amountPerCard:2}},{key:"dusk",name:"Dusk",description:"Retrigger all scoring cards on the final Hand of a Blind.",rarity:"uncommon",price:5,effect:{kind:"retrigger-last-hand"}},{key:"hack",name:"Hack",description:"Retrigger scoring 2, 3, 4 and 5 cards.",rarity:"uncommon",price:6,effect:{kind:"retrigger-ranks",ranks:[2,3,4,5]}},{key:"mime",name:"Mime",description:"Retrigger held-card abilities once.",rarity:"uncommon",price:5,effect:{kind:"retrigger-held"}},{key:"sock-and-buskin",name:"Sock and Buskin",description:"Retrigger scoring face cards once.",rarity:"uncommon",price:6,effect:{kind:"retrigger-face"}},{key:"hanging-chad",name:"Hanging Chad",description:"Retrigger the first scoring card 2 extra times.",rarity:"common",price:4,effect:{kind:"retrigger-first",extra:2}},{key:"bloodstone",name:"Bloodstone",description:"Each scoring Heart has a 1 in 2 chance to give x1.5 Mult.",rarity:"uncommon",price:7,effect:{kind:"suit-chance-xmult",suit:"hearts",chance:.5,amount:1.5}},{key:"arrowhead",name:"Arrowhead",description:"Each scoring Spade gives +50 Chips.",rarity:"uncommon",price:7,effect:{kind:"score-suit-chips",suit:"spades",amount:50}},{key:"onyx-agate",name:"Onyx Agate",description:"Each scoring Club gives +7 Mult.",rarity:"uncommon",price:7,effect:{kind:"score-suit-mult",suit:"clubs",amount:7}},{key:"rough-gem",name:"Rough Gem",description:"Each scoring Diamond gives $1.",rarity:"uncommon",price:7,effect:{kind:"score-suit-money",suit:"diamonds",amount:1}},{key:"photograph",name:"Photograph",description:"The first scoring face card gives x2 Mult.",rarity:"common",price:5,effect:{kind:"first-face-xmult",amount:2}},{key:"walkie-talkie",name:"Walkie Talkie",description:"Scoring 10s and 4s give +10 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[10,4],chips:10,mult:4}},{key:"castle",name:"Castle",description:"Gains +3 Chips for each discarded card of its target suit.",rarity:"uncommon",price:6,effect:{kind:"castle-scale-chips",gain:3}},{key:"bull",name:"Bull",description:"+2 Chips for every $1 you have.",rarity:"uncommon",price:6,effect:{kind:"money-chips",amountPerDollar:2}},{key:"bootstraps",name:"Bootstraps",description:"+2 Mult for every $5 you have.",rarity:"uncommon",price:7,effect:{kind:"money-mult",dollarsPerStep:5,amountPerStep:2}},{key:"card-sharp",name:"Card Sharp",description:"x3 Mult if this Poker Hand was already played this Blind.",rarity:"uncommon",price:6,effect:{kind:"repeat-hand-xmult",amount:3}},{key:"acrobat",name:"Acrobat",description:"x3 Mult on the final Hand of the Blind.",rarity:"uncommon",price:6,effect:{kind:"last-hand-xmult",amount:3}},{key:"loyalty-card",name:"Loyalty Card",description:"Every 6th played hand gives x4 Mult.",rarity:"uncommon",price:5,effect:{kind:"loyalty-xmult",every:6,amount:4}},{key:"the-duo",name:"The Duo",description:"x2 Mult if the hand contains a Pair.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:2}},{key:"the-trio",name:"The Trio",description:"x3 Mult if the hand contains Three of a Kind.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:3}},{key:"astral-crown",name:"Astral Crown",description:"X1 + X0.75 Mult for each distinct suit among scoring cards.",rarity:"mythic",price:12,effect:{kind:"mythic-prism"}},{key:"chronomancer",name:"Chronomancer",description:"Retrigger the first and last scoring card once.",rarity:"mythic",price:13,effect:{kind:"mythic-chronos"}},{key:"phoenix-ashes",name:"Phoenix of Ashes",description:"Starts at X1 Mult. Permanently gains X0.25 for each Glass card shattered.",rarity:"mythic",price:14,effect:{kind:"mythic-phoenix"}},{key:"leviathan",name:"Leviathan",description:"+8 Chips for every card in your full deck.",rarity:"mythic",price:12,effect:{kind:"mythic-leviathan"}},{key:"total-eclipse",name:"Total Eclipse",description:"X4 Mult if all cards held in hand are the same color, or none remain.",rarity:"mythic",price:13,effect:{kind:"mythic-eclipse"}},{key:"echo-of-ages",name:"Echo of Ages",description:"Gains X0.5 Mult for each earlier play of this Poker Hand in the current Blind.",rarity:"mythic",price:12,effect:{kind:"mythic-echo"}},{key:"royal-sovereign",name:"Royal Sovereign",description:"Each scoring face card gives +40 Chips and +8 Mult.",rarity:"mythic",price:12,effect:{kind:"mythic-royal"}},{key:"ace-ascendant",name:"Ace Ascendant",description:"Retrigger scoring Aces once; each scoring Ace activation gives X1.25 Mult.",rarity:"mythic",price:13,effect:{kind:"mythic-ace"}},{key:"quantum-jester",name:"Quantum Jester",description:"Each hand becomes one fate: +250 Chips, +35 Mult, X3 Mult, or +$12.",rarity:"mythic",price:12,effect:{kind:"mythic-quantum"}},{key:"golden-dragon",name:"Golden Dragon",description:"Each scoring Gold Seal earns +$5 and gives X1.5 Mult.",rarity:"mythic",price:14,effect:{kind:"mythic-dragon"}},{key:"void-monarch",name:"Void Monarch",description:"X1 + X0.75 Mult for each empty Joker slot.",rarity:"mythic",price:13,effect:{kind:"mythic-void"}},{key:"kaleidoscope",name:"Kaleidoscope",description:"Each scoring Foil, Holographic, or Polychrome card gives X1.35 Mult.",rarity:"mythic",price:13,effect:{kind:"mythic-kaleidoscope"}},{key:"oracle-xiii",name:"Oracle XIII",description:"X5 Mult if the sum of scoring ranks is divisible by 13.",rarity:"mythic",price:14,effect:{kind:"mythic-oracle"}},{key:"celestial-forge",name:"Celestial Forge",description:"X1 Mult plus X0.08 for every Poker Hand level gained above level 1.",rarity:"mythic",price:13,effect:{kind:"mythic-forge"}},{key:"blood-moon",name:"Blood Moon",description:"Scoring Hearts give X1.3 Mult; scoring Diamonds earn +$2.",rarity:"mythic",price:13,effect:{kind:"mythic-bloodmoon"}},{key:"black-lotus",name:"Black Lotus",description:"Retrigger scoring Spades and Clubs once.",rarity:"mythic",price:13,effect:{kind:"mythic-blacklotus"}},{key:"gamblers-grail",name:"Gambler's Grail",description:"1 in 6 chance for X6 Mult; otherwise +6 Mult.",rarity:"mythic",price:12,effect:{kind:"mythic-grail"}},{key:"infinite-staircase",name:"Infinite Staircase",description:"X1 + X0.5 Mult for each different Poker Hand already played this Blind.",rarity:"mythic",price:12,effect:{kind:"mythic-staircase"}},{key:"last-emperor",name:"Last Emperor",description:"On the final Hand: retrigger every scoring card once and give X5 Mult.",rarity:"mythic",price:15,effect:{kind:"mythic-emperor"}},{key:"world-tree",name:"World Tree",description:"X1.25 Mult for every modified card held in hand.",rarity:"mythic",price:14,effect:{kind:"mythic-worldtree"}}],gx=Mr.filter(t=>t.rarity!=="mythic").length,_x=Mr.filter(t=>t.rarity==="mythic").length,vx=Mr.length,Io=Mr.map(t=>({key:t.key,name:t.name,description:t.description,rarity:t.rarity,price:t.price})),Hd=["bonus","mult","wild","glass","steel","gold","lucky"],Vg=["foil","holographic","polychrome"];function Zo(t){return t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function fi(t){return{...t}}function si(t){return t.map(fi)}function Zs(t){return{...t,effect:{...t.effect}}}function Gd(t){return t.map(Zs)}function ls(t){return{...t,effect:{...t.effect}}}function Wd(t){return t.map(ls)}function xf(t){return t.kind==="joker"?{kind:"joker",joker:Zs(t.joker)}:t.kind==="consumable"?{kind:"consumable",consumable:ls(t.consumable)}:{kind:"playing-card",card:fi(t.card),name:t.name,description:t.description,price:t.price,sellValue:t.sellValue}}function Hg(t){return{...t}}function to(t){return t?{...t}:null}function $d(t){return t?{...t,consumable:ls(t.consumable),candidateIds:[...t.candidateIds],selectedIds:[...t.selectedIds]}:null}function Xd(t){return t?{...t,choices:t.choices.map(e=>({id:e.id,taken:e.taken,item:xf(e.item)}))}:null}function jd(t){return t?{visit:t.visit,rerolls:t.rerolls,rerollCost:t.rerollCost,boosters:t.boosters.map(Hg),voucher:to(t.voucher),offers:t.offers.map(e=>({id:e.id,sold:e.sold,item:xf(e.item)}))}:null}function Qo(){return Object.fromEntries(Object.keys(Zn).map(t=>[t,{level:1,chips:Zn[t].chips,mult:Zn[t].mult}]))}function Kd(t){return Object.fromEntries(Object.keys(t).map(e=>[e,{...t[e]}]))}var Gg=class bf{config;rng;rngDrawCount=0;phase="play";ante=1;blindIndex=0;money;ownedDeck=[];deck=[];discardPile=[];hand=[];selected=new Set;handsLeft;discardsLeft;roundScore=0;target=0;handLevels;jokers=[];consumables=[];shop=null;booster=null;targetMode=null;vouchers=[];anteVoucher=null;lastCashout=null;deckKey="red";stakeKey="white";bossBlindKey="wall";anteTags=["investment","coupon"];skippedBlinds=0;doubleTags=0;investmentTags=0;couponNextShop=!1;couponShopVisit=null;d6NextShop=!1;juggleNextBlind=0;roundHandSize=8;playedHandTypesThisRound=[];handPlayCounts=Object.fromEntries(Object.keys(Zn).map(e=>[e,0]));handsPlayedRun=0;discardsUsedRun=0;antePlayedCardIds=new Set;bossFaceDownCardIds=new Set;verdantLeafActive=!1;crimsonDebuffedJokerId=null;bossForcedCardId=null;lastConsumableKey=null;ectoplasmUses=0;consumableSlotDelta=0;jokerSlotDelta=0;bossRerollsUsed=0;concealNextDraw=!1;unlockedJokerKeys=null;unlockedVoucherKeys=null;metaHandsPlayedRun=0;metaCardsPlayedRun=0;metaFaceCardsPlayedRun=0;metaDiscardActionsRun=0;metaCardsDiscardedRun=0;metaShopSpendRun=0;metaShopRerollsRun=0;metaTarotShopBoughtRun=0;metaPlanetShopBoughtRun=0;metaPlayingCardsShopBoughtRun=0;metaTarotPackUsedRun=0;metaPlanetPackUsedRun=0;metaBlankRedeemedRun=0;metaVouchersRedeemedRun=0;metaCashoutSerial=0;metaLastCashoutInterest=0;metaLastCashoutCap=5;metaClaimedTagSerial=0;metaLastClaimedTagKey=null;metaBossClearSerial=0;metaLastClearedBossKey=null;metaLastClearedBossHandType=null;metaBoosterChoiceSerial=0;metaLastBoosterJokerKey=null;metaLastBoosterConsumableType=null;metaLastBoosterConsumableKey=null;shopVisit=0;lastScore=null;listeners=new Set;constructor(e={},n=!0){this.config={...Bg,...e},this.rng=this.createTrackedRng(this.config.seed),this.money=this.config.startingMoney,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.handLevels=Qo(),this.ownedDeck=Ir(),n&&this.startBlind()}static fromSnapshot(e){const n=new bf(e.config,!1);return n.loadSnapshot(e),n}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}getRngDrawCount(){return this.rngDrawCount}targetForCurrentBlind(){const e=Qe[this.stakeKey].order,n=e>=Qe.purple.order?Fg:e>=Qe.green.order?Og:Ng,i=n[Math.min(this.ante-1,n.length-1)],r=this.blindIndex===0?1:this.blindIndex===1?1.5:br[this.bossBlindKey].targetMult,s=this.deckKey==="plasma"?2:1;return Math.round(i*r*s)}startBlind(){if(this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.roundHandSize=this.config.handSize+this.juggleNextBlind,this.juggleNextBlind=0,this.playedHandTypesThisRound=[],this.bossFaceDownCardIds.clear(),this.verdantLeafActive=!1,this.crimsonDebuffedJokerId=null,this.bossForcedCardId=null,this.concealNextDraw=!1,this.blindIndex===2&&(this.bossBlindKey==="water"&&(this.discardsLeft=0),this.bossBlindKey==="needle"&&(this.handsLeft=1),this.bossBlindKey==="manacle"&&(this.roundHandSize=Math.max(1,this.roundHandSize-1))),this.deck=Yo(si(this.ownedDeck),this.rng),this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.drawToFull(),this.blindIndex===2){if(this.bossBlindKey==="house")for(const e of this.hand)this.bossFaceDownCardIds.add(e.id);this.bossBlindKey==="amber-acorn"&&this.jokers.length>1&&(this.jokers=Yo(this.jokers,this.rng)),this.bossBlindKey==="verdant-leaf"&&(this.verdantLeafActive=!0),this.bossBlindKey==="crimson-heart"&&(this.crimsonDebuffedJokerId=this.jokers.length?this.pick(this.jokers).id:null),this.bossBlindKey==="cerulean-bell"&&(this.bossForcedCardId=this.hand.length?this.pick(this.hand).id:null,this.bossForcedCardId&&this.selected.add(this.bossForcedCardId))}this.phase="play",this.emit()}enterSetup(){this.phase="setup",this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.roundScore=0,this.emit()}configureRun(e,n,i){if(typeof i=="number"&&Number.isFinite(i)&&(this.config.seed=Math.max(1,Math.floor(i))>>>0,this.rng=this.createTrackedRng(this.config.seed)),this.deckKey=e,this.stakeKey=n,this.ante=1,this.blindIndex=0,this.config.handSize=8,this.config.handsPerRound=4,this.config.discardsPerRound=3,this.config.startingMoney=4,this.consumableSlotDelta=0,this.jokerSlotDelta=0,this.lastConsumableKey=null,this.ectoplasmUses=0,this.bossRerollsUsed=0,Qe[n].order>=Qe.blue.order&&(this.config.discardsPerRound-=1),e==="red"&&(this.config.discardsPerRound+=1),e==="blue"&&(this.config.handsPerRound+=1),e==="black"&&(this.config.handsPerRound-=1),e==="painted"&&(this.config.handSize+=2,this.jokerSlotDelta-=1),e==="nebula"&&(this.consumableSlotDelta-=1),this.money=e==="yellow"?14:4,this.ownedDeck=Ir(),e==="abandoned")this.ownedDeck=this.ownedDeck.filter(r=>r.rank<11||r.rank>13);else if(e==="checkered")for(const r of this.ownedDeck)r.suit==="clubs"?r.suit="spades":r.suit==="diamonds"&&(r.suit="hearts");else if(e==="erratic")for(const r of this.ownedDeck)r.suit=this.pick(Gs),r.rank=this.pick(Qa),r.baseChips=r.rank===14?11:r.rank>=11?10:r.rank;if(this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.handLevels=Qo(),this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.handsPlayedRun=0,this.discardsUsedRun=0,this.antePlayedCardIds.clear(),this.bossFaceDownCardIds.clear(),this.verdantLeafActive=!1,this.crimsonDebuffedJokerId=null,this.bossForcedCardId=null,this.handPlayCounts=Object.fromEntries(Object.keys(Zn).map(r=>[r,0])),this.shopVisit=0,e==="magic"){this.grantVoucherKey("crystal-ball");const r=Li.find(s=>s.key==="the-fool");r&&(this.consumables.push(this.makeConsumableFromCatalog(r)),this.consumables.push(this.makeConsumableFromCatalog(r)))}else if(e==="nebula")this.grantVoucherKey("telescope");else if(e==="ghost"){const r=Jr.find(s=>s.key==="hex");r&&this.consumables.push(this.makeConsumableFromCatalog(r))}else e==="zodiac"&&(this.grantVoucherKey("tarot-merchant"),this.grantVoucherKey("planet-merchant"),this.grantVoucherKey("overstock"));this.metaHandsPlayedRun=0,this.metaCardsPlayedRun=0,this.metaFaceCardsPlayedRun=0,this.metaDiscardActionsRun=0,this.metaCardsDiscardedRun=0,this.metaShopSpendRun=0,this.metaShopRerollsRun=0,this.metaTarotShopBoughtRun=0,this.metaPlanetShopBoughtRun=0,this.metaPlayingCardsShopBoughtRun=0,this.metaTarotPackUsedRun=0,this.metaPlanetPackUsedRun=0,this.metaBlankRedeemedRun=0,this.metaVouchersRedeemedRun=0,this.metaCashoutSerial=0,this.metaLastCashoutInterest=0,this.metaLastCashoutCap=5,this.metaClaimedTagSerial=0,this.metaLastClaimedTagKey=null,this.metaBossClearSerial=0,this.metaLastClearedBossKey=null,this.metaLastClearedBossHandType=null,this.metaBoosterChoiceSerial=0,this.metaLastBoosterJokerKey=null,this.metaLastBoosterConsumableType=null,this.metaLastBoosterConsumableKey=null,this.rollAnteOptions(),this.prepareBlindSelect()}rollAnteOptions(){this.anteTags=[this.pick(Vd),this.pick(Vd)],this.bossBlindKey=this.ante===8?this.pick(eo):this.pick(Jo)}prepareBlindSelect(){this.phase="blind-select",this.target=this.targetForCurrentBlind(),this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.emit()}playSelectedBlind(){return this.phase!=="blind-select"?!1:(this.startBlind(),!0)}setUnlockedJokerKeys(e){this.unlockedJokerKeys=e?new Set(e):null}setUnlockedVoucherKeys(e){this.unlockedVoucherKeys=e?new Set(e):null}voucherMetaUnlocked(e){return!this.unlockedVoucherKeys||this.unlockedVoucherKeys.has(e)}createJokerByKey(e,n=!1){const i=Mr.find(r=>r.key===e);return i?this.makeJokerFromTemplate(i,n):null}isCardFaceDown(e){return this.bossFaceDownCardIds.has(e)}currentSkipTag(){return this.blindIndex<2?this.anteTags[this.blindIndex]:null}skipCurrentBlind(){if(this.phase!=="blind-select"||this.blindIndex>=2)return!1;const e=this.currentSkipTag();return e?(this.skippedBlinds+=1,this.metaClaimedTagSerial+=1,this.metaLastClaimedTagKey=e,this.applyTag(e),this.blindIndex=this.blindIndex+1,this.prepareBlindSelect(),!0):!1}applyTag(e){if(e==="double"){this.doubleTags+=1;return}const n=1+this.doubleTags;this.doubleTags=0;for(let i=0;i<n;i++)this.applySingleTag(e)}availableJokerTemplates(e){let n=Mr;return this.unlockedJokerKeys&&(n=n.filter(i=>this.unlockedJokerKeys.has(i.key))),e&&(n=n.filter(i=>i.rarity===e)),n}addTaggedJoker(e,n="base"){const i=n==="negative"?1:0;if(this.jokers.length>=this.jokerCapacity()+i)return!1;const r=this.availableJokerTemplates(e??void 0);if(r.length===0)return!1;const s=this.makeJokerFromTemplate(this.pick(r),!1);return s.edition=n,this.jokers.push(s),!0}addTagConsumable(e){if(this.consumables.length>=this.consumableCapacity())return;const n=e==="tarot"?Li:e==="planet"?Ni:Jr;this.consumables.push(this.makeConsumableFromCatalog(this.pick(n)))}mostPlayedHandType(){return Object.keys(this.handPlayCounts).sort((e,n)=>(this.handPlayCounts[n]??0)-(this.handPlayCounts[e]??0))[0]??"High Card"}grantVoucherKey(e){return this.vouchers.includes(e)?!1:(this.vouchers.push(e),(e==="grabber"||e==="nacho-tong")&&(this.config.handsPerRound+=1),(e==="wasteful"||e==="recyclomancy")&&(this.config.discardsPerRound+=1),e==="antimatter"&&(this.jokerSlotDelta+=1),(e==="paint-brush"||e==="palette")&&(this.config.handSize+=1),e==="hieroglyph"&&(this.ante=Math.max(1,this.ante-1),this.config.handsPerRound=Math.max(1,this.config.handsPerRound-1)),e==="petroglyph"&&(this.ante=Math.max(1,this.ante-1),this.config.discardsPerRound=Math.max(0,this.config.discardsPerRound-1)),!0)}applySingleTag(e){if(e==="uncommon")this.addTaggedJoker("uncommon");else if(e==="rare")this.addTaggedJoker("rare");else if(e==="negative")this.addTaggedJoker(null,"negative");else if(e==="foil")this.addTaggedJoker(null,"foil");else if(e==="holographic")this.addTaggedJoker(null,"holographic");else if(e==="polychrome")this.addTaggedJoker(null,"polychrome");else if(e==="investment")this.investmentTags+=1;else if(e==="voucher"){const n=Object.keys(os).filter(i=>{if(this.vouchers.includes(i)||!this.voucherMetaUnlocked(i))return!1;const r=So[i];return!r||this.vouchers.includes(r)});n.length>0&&this.grantVoucherKey(this.pick(n))}else if(e==="coupon")this.couponNextShop=!0;else if(e==="juggle")this.juggleNextBlind+=3;else if(e==="d6")this.d6NextShop=!0;else if(e==="speed")this.money+=Math.max(5,this.skippedBlinds*5);else if(e==="economy")this.money+=Math.min(40,Math.max(0,this.money));else if(e==="standard"){const n=Ir();for(let i=0;i<2;i++){const r=this.pick(n);this.ownedDeck.push({...r,id:this.makeRunId("tag-card")})}}else if(e==="charm")this.addTagConsumable("tarot");else if(e==="meteor")this.addTagConsumable("planet");else if(e==="ethereal")this.addTagConsumable("spectral");else if(e==="buffoon")this.addTaggedJoker(null);else if(e==="handy")this.money+=this.handsPlayedRun;else if(e==="garbage")this.money+=this.discardsUsedRun;else if(e==="orbital"){const n=this.mostPlayedHandType();for(let i=0;i<3;i++)this.upgradeHandLevel(n)}else if(e==="top-up"){const n=this.availableJokerTemplates("common");for(let i=0;i<2&&n.length>0&&this.jokers.length<this.jokerCapacity();i++)this.jokers.push(this.makeJokerFromTemplate(this.pick(n),!1))}else if(e==="boss"){const n=(this.ante===8?eo:Jo).filter(i=>i!==this.bossBlindKey);n.length>0&&(this.bossBlindKey=this.pick(n))}}rerollBossBlind(){if(this.phase!=="blind-select"||this.blindIndex!==2||this.money<10)return!1;const e=this.vouchers.includes("retcon"),n=this.vouchers.includes("directors-cut");if(!e&&(!n||this.bossRerollsUsed>=1))return!1;const i=(this.ante===8?eo:Jo).filter(r=>r!==this.bossBlindKey);return i.length===0?!1:(this.money-=10,this.bossRerollsUsed+=1,this.bossBlindKey=this.pick(i),this.target=this.targetForCurrentBlind(),this.emit(),!0)}targetForPreview(){return this.targetForCurrentBlind()}playRestrictionMessage(){if(this.phase!=="play"||this.blindIndex!==2)return null;const e=this.selectedCards();if(this.bossBlindKey==="psychic"&&e.length!==5)return"The Psychic: play exactly 5 cards";if(this.bossBlindKey==="cerulean-bell"&&this.bossForcedCardId&&!this.selected.has(this.bossForcedCardId))return"Cerulean Bell: the forced card must be played";if(e.length===0)return null;const n=Ws(e).type;return this.bossBlindKey==="eye"&&this.playedHandTypesThisRound.includes(n)?"The Eye: that Poker Hand was already played":this.bossBlindKey==="mouth"&&this.playedHandTypesThisRound.length>0&&this.playedHandTypesThisRound[0]!==n?`The Mouth: play only ${this.playedHandTypesThisRound[0]}`:null}drawBossCards(e){for(let n=0;n<e&&this.deck.length>0;n++){const i=this.deck.pop();this.hand.push(i),this.blindIndex===2&&(this.bossBlindKey==="wheel"&&this.rng()<1/7&&this.bossFaceDownCardIds.add(i.id),this.bossBlindKey==="mark"&&i.rank>=11&&i.rank<=13&&this.bossFaceDownCardIds.add(i.id),this.bossBlindKey==="fish"&&this.concealNextDraw&&this.bossFaceDownCardIds.add(i.id))}this.concealNextDraw=!1}drawToFull(){this.drawBossCards(Math.max(0,this.roundHandSize-this.hand.length))}toggleSelect(e){return this.phase!=="play"?!1:this.selected.has(e)?this.blindIndex===2&&this.bossBlindKey==="cerulean-bell"&&this.bossForcedCardId===e?!0:(this.selected.delete(e),this.emit(),!1):this.selected.size>=5?!1:(this.selected.add(e),this.emit(),!0)}selectedCards(e){if(!e)return this.hand.filter(i=>this.selected.has(i.id));const n=new Map(this.hand.map(i=>[i.id,i]));return e.filter(i=>this.selected.has(i)).map(i=>n.get(i)).filter(i=>!!i)}jokerCapacity(){const e=this.deckKey==="black"?1:0;return Math.max(1,5+e+this.jokerSlotDelta+this.jokers.filter(n=>(n.edition??"base")==="negative").length)}consumableCapacity(){const e=this.vouchers.includes("crystal-ball")?1:0;return Math.max(0,2+e+this.consumableSlotDelta+this.consumables.filter(n=>(n.edition??"base")==="negative").length)}moveJoker(e,n){const i=this.jokers.findIndex(a=>a.id===e);if(i<0)return!1;const r=Math.max(0,Math.min(this.jokers.length-1,n));if(r===i)return!0;const[s]=this.jokers.splice(i,1);return this.jokers.splice(r,0,s),this.emit(),!0}canPlay(){return this.phase==="play"&&this.selected.size>0&&this.handsLeft>0&&this.playRestrictionMessage()===null}canDiscard(){return this.phase==="play"&&this.selected.size>0&&this.discardsLeft>0}playSelected(e){if(!this.canPlay())return null;const n=this.selectedCards(e);this.metaHandsPlayedRun+=1,this.metaCardsPlayedRun+=n.length,this.metaFaceCardsPlayedRun+=n.filter(f=>f.rank>=11&&f.rank<=13).length;const i=Ws(n),r=this.handLevels[i.type],s=this.handsLeft,a=new Set(n.map(f=>f.id)),o=new Map(this.hand.map(f=>[f.id,f])),l=(e??this.hand.map(f=>f.id)).filter(f=>!a.has(f)).map(f=>o.get(f)).filter(f=>!!f),c=this.blindIndex===2?this.bossBlindKey:null,d=c==="goad"?["spades"]:c==="window"?["diamonds"]:c==="head"?["hearts"]:c==="club"?["clubs"]:[],h=this.playedHandTypesThisRound.includes(i.type);this.prepareExactJokersForHand(i);const u=Object.values(this.handLevels).reduce((f,g)=>f+Math.max(0,g.level-1),0),m=kg(i,r,{jokers:this.jokers,heldCards:l,handsLeftBeforePlay:s,handsPerRound:this.playedHandTypesThisRound.length===0?s:this.config.handsPerRound,discardsLeft:this.discardsLeft,deckRemaining:this.deck.length,money:this.money,handPlayCount:this.handPlayCounts[i.type]??0,handAlreadyPlayedThisRound:h,isFinalHand:this.handsLeft===1,jokerCount:this.jokers.length,jokerCapacity:this.jokerCapacity(),fullDeckSize:this.ownedDeck.length,handLevelExtra:u,distinctHandTypesThisRound:new Set(this.playedHandTypesThisRound).size,priorSameHandCount:this.playedHandTypesThisRound.filter(f=>f===i.type).length,bossDebuffSuits:d,bossDebuffFace:c==="plant",bossHalveBase:c==="flint",rng:()=>this.rng()});if(this.vouchers.includes("observatory")){const f=this.consumables.filter(g=>g.type==="planet"&&g.effect.kind==="planet"&&g.effect.handType===i.type).length;if(f>0){const g=m.finalMult,p=Math.pow(1.5,f);m.finalMult*=p,m.steps.push({source:`Observatory ×${p.toFixed(2)} Mult`,stage:"joker",multMul:p,chipsBefore:m.finalChips,chipsAfter:m.finalChips,multBefore:g,multAfter:m.finalMult}),m.total=Math.floor(m.finalChips*m.finalMult)}}if(this.deckKey==="plasma"){const f=(m.finalChips+m.finalMult)/2;m.steps.push({source:"Plasma Deck balance",stage:"joker",chipsBefore:m.finalChips,chipsAfter:f,multBefore:m.finalMult,multAfter:f}),m.finalChips=f,m.finalMult=f,m.total=Math.floor(f*f)}this.roundScore+=m.total,this.money+=m.moneyDelta,this.blindIndex===2&&this.bossBlindKey==="tooth"&&(this.money-=n.length,m.moneyDelta-=n.length),this.blindIndex===2&&this.bossBlindKey==="ox"&&i.type===this.mostPlayedHandType()&&(this.money=0);for(const f of n)this.antePlayedCardIds.add(f.id);this.blindIndex===2&&this.bossBlindKey==="crimson-heart"&&(this.crimsonDebuffedJokerId=this.jokers.length?this.pick(this.jokers).id:null),this.handsLeft-=1,this.lastScore=m,this.playedHandTypesThisRound.push(i.type),this.handPlayCounts[i.type]=(this.handPlayCounts[i.type]??0)+1,this.handsPlayedRun+=1;const _=new Set;for(const f of this.jokers){if(this.isJokerDebuffed(f))continue;const g=f.effect;g.kind==="decay-chips"?(f.counter=Math.max(0,(f.counter??g.start)-g.decay),(f.counter??0)<=0&&_.add(f.id)):g.kind==="loyalty-xmult"?f.counter=((f.counter??0)+1)%g.every:g.kind==="mythic-phoenix"&&m.destroyedCardIds.length>0&&(f.counter=(f.counter??0)+m.destroyedCardIds.length)}if(_.size>0&&(this.jokers=this.jokers.filter(f=>!_.has(f.id))),this.blindIndex===2&&this.bossBlindKey==="arm"){const f=Zn[i.type],g=this.handLevels[i.type],p=Math.max(1,g.level-1);this.handLevels[i.type]={level:p,chips:f.chips+f.chipsPerLvl*(p-1),mult:f.mult+f.multPerLvl*(p-1)}}if(this.hand=this.hand.filter(f=>!this.selected.has(f.id)),this.discardPile.push(...n),this.selected.clear(),m.destroyedCardIds.length>0){const f=new Set(m.destroyedCardIds);this.discardPile=this.discardPile.filter(g=>!f.has(g.id)),this.ownedDeck=this.ownedDeck.filter(g=>!f.has(g.id))}if(this.roundScore>=this.target)this.resolveEndOfRoundHeldCards(i.type,m),this.onBlindCleared();else if(this.handsLeft<=0)this.phase="game-over";else{if(this.blindIndex===2&&this.bossBlindKey==="fish"&&(this.concealNextDraw=!0),this.blindIndex===2&&this.bossBlindKey==="hook")for(let f=0;f<2&&this.hand.length>0;f++){const g=Math.floor(this.rng()*this.hand.length),[p]=this.hand.splice(g,1);this.discardPile.push(p)}this.blindIndex===2&&this.bossBlindKey==="serpent"?this.drawBossCards(3):this.drawToFull(),this.blindIndex===2&&this.bossBlindKey==="cerulean-bell"&&(this.bossForcedCardId=this.hand.length?this.pick(this.hand).id:null,this.bossForcedCardId&&this.selected.add(this.bossForcedCardId))}return this.emit(),m}discardSelected(e){if(!this.canDiscard())return null;const n=this.selectedCards(e);this.metaDiscardActionsRun+=1,this.metaCardsDiscardedRun+=n.length,this.hand=this.hand.filter(i=>!this.selected.has(i.id)),this.discardPile.push(...n),this.discardsLeft-=1,this.discardsUsedRun+=1,this.selected.clear();for(const i of this.jokers){const r=i.effect;if(r.kind==="green-scale-mult")i.counter=Math.max(0,(i.counter??0)-r.discardLoss);else if(r.kind==="castle-scale-chips"&&i.suit){const s=n.filter(a=>!this.cardDebuffedByBoss(a)&&(a.suit===i.suit||a.enhancement==="wild")).length;i.counter=(i.counter??0)+s*r.gain}}for(const i of n)if(!(this.cardDebuffedByBoss(i)||i.seal!=="purple")){if(this.consumables.length>=this.consumableCapacity())break;this.consumables.push(this.makePurpleSealTarot())}return this.blindIndex===2&&this.bossBlindKey==="serpent"?this.drawBossCards(3):this.drawToFull(),this.blindIndex===2&&this.bossBlindKey==="cerulean-bell"&&(this.bossForcedCardId=this.hand.length?this.pick(this.hand).id:null,this.bossForcedCardId&&this.selected.add(this.bossForcedCardId)),this.emit(),n}onBlindCleared(){const e=this.blindIndex;e===2&&(this.metaBossClearSerial+=1,this.metaLastClearedBossKey=this.bossBlindKey,this.metaLastClearedBossHandType=this.lastScore?.hand.type??null);const n=Qe[this.stakeKey].order,i=e===0&&n>=Qe.red.order?0:3+e,r=this.jokers.reduce((h,u)=>u.effect.kind==="economy-clear"&&!this.isJokerDebuffed(u)?h+u.effect.amount:h,0),s=this.deckKey==="green",a=s?Math.max(0,this.handsLeft)*2+Math.max(0,this.discardsLeft):Math.max(0,this.handsLeft),o=this.vouchers.includes("money-tree")?20:this.vouchers.includes("seed-money")?10:5,l=s?0:Math.min(o,Math.floor(Math.max(0,this.money)/5));this.metaCashoutSerial+=1,this.metaLastCashoutInterest=l,this.metaLastCashoutCap=o,e===2&&this.deckKey==="anaglyph"&&(this.doubleTags+=1);let c=0;e===2&&this.investmentTags>0&&(c=this.investmentTags*25,this.investmentTags=0);const d=i+a+l+r+c;this.money+=d,this.lastCashout={blindReward:i+r+c,handsBonus:a,interest:l,total:d};for(const h of this.jokers)h.rental&&(this.money-=3),h.sticker==="perishable"&&(h.perishableRounds??0)>0&&(h.perishableRounds=Math.max(0,(h.perishableRounds??0)-1)),h.effect.kind==="castle-scale-chips"&&(h.suit=this.pickCastleSuitWeighted());if(this.blindIndex<2)this.blindIndex=this.blindIndex+1;else{if(this.blindIndex=0,this.ante+=1,this.anteVoucher=null,this.antePlayedCardIds.clear(),this.bossRerollsUsed=0,this.ante>8){this.phase="win";return}this.rollAnteOptions()}this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=0,this.discardsLeft=0,this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=this.createShopState(),this.phase="shop"}isJokerDebuffed(e){return e.sticker==="perishable"&&(e.perishableRounds??0)<=0?!0:this.blindIndex===2&&this.bossBlindKey==="crimson-heart"&&this.crimsonDebuffedJokerId===e.id}continueFromShop(){return this.phase!=="shop"?!1:(this.prepareBlindSelect(),!0)}canBuyOffer(e){const n=this.findOffer(e);if(!n||n.sold)return!1;const i=this.priceForItem(n.item);if(this.money<i)return!1;if(n.item.kind==="joker"){const r=(n.item.joker.edition??"base")==="negative"?1:0;return this.jokers.length<this.jokerCapacity()+r}if(n.item.kind==="consumable"){const r=(n.item.consumable.edition??"base")==="negative"?1:0;return this.consumables.length<this.consumableCapacity()+r}return!0}buyOffer(e){const n=this.findOffer(e);if(!n||!this.canBuyOffer(e))return!1;const i=this.priceForItem(n.item);return this.money-=i,this.metaShopSpendRun+=i,n.item.kind==="consumable"?(n.item.consumable.type==="tarot"&&(this.metaTarotShopBoughtRun+=1),n.item.consumable.type==="planet"&&(this.metaPlanetShopBoughtRun+=1)):n.item.kind==="playing-card"&&(this.metaPlayingCardsShopBoughtRun+=1),n.sold=!0,n.item.kind==="joker"?this.jokers.push(Zs(n.item.joker)):n.item.kind==="consumable"?this.consumables.push(ls(n.item.consumable)):this.ownedDeck.push(fi(n.item.card)),this.emit(),!0}rerollShop(){if(this.phase!=="shop"||!this.shop||this.money<this.shop.rerollCost)return!1;const e=this.shop.rerollCost;this.money-=e,this.metaShopSpendRun+=e,this.metaShopRerollsRun+=1;const n=this.shop.rerollCost===0&&this.shop.rerolls===0;return this.shop.rerolls+=1,this.shop.rerollCost=n?1:this.rerollBaseCost()+this.shop.rerolls,this.shop.offers=this.createShopOffers(this.shop.visit,this.shop.rerolls),this.emit(),!0}sellJoker(e){const n=this.jokers.findIndex(r=>r.id===e);if(n<0||this.jokers[n].sticker==="eternal")return!1;const[i]=this.jokers.splice(n,1);return this.money+=i.sellValue,this.blindIndex===2&&this.bossBlindKey==="verdant-leaf"&&(this.verdantLeafActive=!1),this.emit(),!0}sellConsumable(e){const n=this.consumables.findIndex(r=>r.id===e);if(n<0)return!1;const[i]=this.consumables.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}useConsumable(e){return this.beginUseConsumable(e)==="applied"}cardDebuffedByBoss(e){return this.blindIndex!==2?!1:!!(this.bossBlindKey==="goad"&&e.suit==="spades"||this.bossBlindKey==="window"&&e.suit==="diamonds"||this.bossBlindKey==="head"&&e.suit==="hearts"||this.bossBlindKey==="plant"&&e.rank>=11&&e.rank<=13||this.bossBlindKey==="club"&&e.suit==="clubs"||this.bossBlindKey==="pillar"&&this.antePlayedCardIds.has(e.id)||this.bossBlindKey==="verdant-leaf"&&this.verdantLeafActive)}pickCastleSuitWeighted(){const e=Gs.map(r=>({suit:r,count:this.ownedDeck.filter(s=>s.enhancement!=="stone"&&s.suit===r).length})),n=e.reduce((r,s)=>r+s.count,0);if(n<=0)return"spades";let i=this.rng()*n;for(const r of e)if(i-=r.count,i<0)return r.suit;return e[e.length-1].suit}prepareExactJokersForHand(e){for(const n of this.jokers){if(this.isJokerDebuffed(n))continue;const i=n.effect;i.kind==="straight-scale-chips"&&e.type.includes("Straight")?n.counter=(n.counter??i.start??0)+i.gain:i.kind==="bus-scale-mult"?n.counter=e.scoringCards.some(r=>r.rank>=11&&r.rank<=13&&!this.cardDebuffedByBoss(r))?0:(n.counter??0)+i.gain:i.kind==="green-scale-mult"&&(n.counter=(n.counter??0)+i.handGain)}}jokerRuntimeText(e){const n=this.jokers.find(s=>s.id===e);if(!n)return"";const i=n.effect,r=n.counter??0;if(this.isJokerDebuffed(n))return"DEBUFFED (Perishable expired)";if(i.kind==="random-mult")return`Last roll: +${r} Mult · range ${i.min}–${i.max}`;if(i.kind==="decay-chips")return`Current: +${r} Chips`;if(i.kind==="straight-scale-chips")return`Current: +${r} Chips`;if(i.kind==="bus-scale-mult")return`Current: +${r} Mult`;if(i.kind==="green-scale-mult")return`Current: +${r} Mult`;if(i.kind==="deck-remaining-chips")return`Current: +${this.deck.length*i.amountPerCard} Chips`;if(i.kind==="discard-chips")return`Current: +${Math.max(0,this.discardsLeft)*i.amountPerDiscard} Chips`;if(i.kind==="zero-discard-mult")return this.discardsLeft===0?`ACTIVE: +${i.amount} Mult`:"Inactive: Discards remain";if(i.kind==="joker-count-mult")return`Current: +${this.jokers.length*i.amountPerJoker} Mult`;if(i.kind==="money-chips")return`Current: +${Math.max(0,this.money)*i.amountPerDollar} Chips`;if(i.kind==="money-mult")return`Current: +${Math.floor(Math.max(0,this.money)/i.dollarsPerStep)*i.amountPerStep} Mult`;if(i.kind==="loyalty-xmult"){const s=r%i.every;return s===i.every-1?`ACTIVE: X${i.amount} Mult`:`${i.every-1-s} hands remaining`}if(i.kind==="castle-scale-chips")return`Current: +${r} Chips · target ${n.suit??"spades"}`;if(i.kind==="last-hand-xmult"||i.kind==="retrigger-last-hand")return this.handsLeft===1?"ACTIVE: final Hand":`${Math.max(0,this.handsLeft-1)} Hands until active`;if(i.kind==="repeat-hand-xmult"&&this.selected.size>0){const s=Ws(this.selectedCards()).type;return this.playedHandTypesThisRound.includes(s)?`ACTIVE: ${s} already played`:`Inactive: first ${s} this Blind`}if(i.kind==="mythic-phoenix")return`Current: X${(1+r*.25).toFixed(2)} Mult · ${r} Glass shattered`;if(i.kind==="mythic-leviathan")return`Current: +${this.ownedDeck.length*8} Chips`;if(i.kind==="mythic-echo"&&this.selected.size>0){const s=Ws(this.selectedCards()).type;return`Current for ${s}: X${(1+this.playedHandTypesThisRound.filter(a=>a===s).length*.5).toFixed(2)}`}if(i.kind==="mythic-void"){const s=Math.max(0,this.jokerCapacity()-this.jokers.length);return`Current: X${(1+s*.75).toFixed(2)} · ${s} empty slots`}if(i.kind==="mythic-forge"){const s=Object.values(this.handLevels).reduce((a,o)=>a+Math.max(0,o.level-1),0);return`Current: X${(1+s*.08).toFixed(2)} · ${s} bonus levels`}if(i.kind==="mythic-staircase"){const s=new Set(this.playedHandTypesThisRound).size;return`Current: X${(1+s*.5).toFixed(2)} · ${s} hand types`}return i.kind==="mythic-emperor"?this.handsLeft===1?"ACTIVE: X5 + full retrigger":`${Math.max(0,this.handsLeft-1)} Hands until active`:i.kind==="mythic-quantum"?`Last fate: ${["+250 Chips","+35 Mult","X3 Mult","+$12"][Math.max(0,Math.min(3,r))]}`:""}resolveEndOfRoundHeldCards(e,n){const i=this.jokers.filter(r=>!this.isJokerDebuffed(r)&&r.effect.kind==="retrigger-held").length;for(const r of this.hand){if(this.cardDebuffedByBoss(r))continue;const s=1+(r.seal==="red"?1:0)+i;for(let a=0;a<s;a++)if(r.enhancement==="gold"&&(this.money+=3,n.moneyDelta+=3,n.steps.push({source:`Gold Card +$3${a>0?" (retrigger)":""}`,stage:"end_round",cardId:r.id,retrigger:a>0,moneyDelta:3,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})),r.seal==="blue"&&this.consumables.length<this.consumableCapacity()){const o={id:this.makeRunId("blue-planet"),key:`planet-${e.toLowerCase().replaceAll(" ","-")}`,name:`${e} Planet`,description:`Upgrade ${e} by 1 level.`,type:"planet",price:3,sellValue:1,effect:{kind:"planet",handType:e},edition:"base"};this.consumables.push(o),n.steps.push({source:`Blue Seal created ${o.name}${a>0?" (retrigger)":""}`,stage:"end_round",cardId:r.id,retrigger:a>0,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})}}}makePurpleSealTarot(){return this.makeConsumableFromCatalog(this.pick(Li))}openBooster(e){if(this.phase!=="shop"||!this.shop)return!1;const n=this.shop.boosters.find(s=>s.id===e);if(!n||n.sold)return!1;const i=this.discountedPrice(n.price);if(this.money<i)return!1;this.money-=i,this.metaShopSpendRun+=i,n.sold=!0;const r=Bd(n.type,n.size);return this.booster={sourceOfferId:n.id,type:n.type,size:n.size,name:n.name,choices:Array.from({length:r.choices},(s,a)=>this.makeBoosterChoice(n.type,a)),picksLeft:r.picks},this.phase="booster",this.targetMode=null,this.emit(),!0}boosterPrice(e){return this.discountedPrice(e.price)}makeBoosterChoice(e,n){let i;if(e==="arcana"){const r=this.vouchers.includes("omen-globe")&&this.rng()<.2?Jr:Li;i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(r))}}else if(e==="celestial"){const r=n===0&&this.vouchers.includes("telescope")?Ug(this.mostPlayedHandType()):this.pick(Ni);i={kind:"consumable",consumable:this.makeConsumableFromCatalog(r)}}else e==="spectral"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(Jr))}:e==="buffoon"?i=this.makeJokerItem():i=this.makePlayingCardItem();return{id:`pack-choice-${this.rngDrawCount}-${n}-${Math.floor(this.rng()*1e6)}`,item:i,taken:!1}}makeConsumableFromCatalog(e){return{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}chooseBooster(e){if(this.phase!=="booster"||!this.booster||this.booster.picksLeft<=0)return"invalid";const n=this.booster.choices.find(s=>s.id===e);if(!n||n.taken)return"invalid";if(n.item.kind==="joker"){const s=n.item.joker,a=(s.edition??"base")==="negative"?1:0;return this.jokers.length>=this.jokerCapacity()+a?"invalid":(this.jokers.push(Zs(s)),this.finishBoosterChoice(n))}if(n.item.kind==="playing-card")return this.ownedDeck.push(fi(n.item.card)),this.finishBoosterChoice(n);const i=n.item.consumable,r=zd(i.effect);return r?(this.targetMode={source:"booster",sourceId:this.booster.sourceOfferId,choiceId:n.id,consumable:ls(i),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...r},this.emit(),"targeting"):(this.applyConsumableWithTargets(i,[]),this.finishBoosterChoice(n))}finishBoosterChoice(e){return this.metaBoosterChoiceSerial+=1,this.metaLastBoosterJokerKey=e.item.kind==="joker"?e.item.joker.key:null,this.metaLastBoosterConsumableType=e.item.kind==="consumable"?e.item.consumable.type:null,this.metaLastBoosterConsumableKey=e.item.kind==="consumable"?e.item.consumable.key:null,e.item.kind==="consumable"&&(e.item.consumable.type==="tarot"&&(this.metaTarotPackUsedRun+=1),e.item.consumable.type==="planet"&&(this.metaPlanetPackUsedRun+=1)),e.taken=!0,this.booster&&(this.booster.picksLeft-=1),this.booster&&this.booster.picksLeft<=0&&(this.booster=null,this.phase="shop"),this.targetMode=null,this.emit(),"applied"}skipBooster(){return this.phase!=="booster"?!1:(this.booster=null,this.targetMode=null,this.phase="shop",this.emit(),!0)}buyVoucher(){if(this.phase!=="shop"||!this.shop?.voucher||this.shop.voucher.sold)return!1;const e=this.shop.voucher;return!this.voucherMetaUnlocked(e.key)||this.money<e.price?!1:(this.money-=e.price,this.metaShopSpendRun+=e.price,this.metaVouchersRedeemedRun+=1,e.key==="blank"&&(this.metaBlankRedeemedRun+=1),e.sold=!0,this.anteVoucher?.key===e.key&&(this.anteVoucher.sold=!0),this.grantVoucherKey(e.key),e.key==="reroll-surplus"&&this.shop&&(this.shop.rerollCost=Math.max(1,this.shop.rerollCost-2)),this.emit(),!0)}beginUseConsumable(e){const n=this.consumables.find(r=>r.id===e);if(!n)return"invalid";const i=zd(n.effect);if(!i){const r=this.consumables.findIndex(s=>s.id===e);return this.consumables.splice(r,1),this.applyConsumableWithTargets(n,[]),this.emit(),"applied"}return this.targetMode={source:"inventory",sourceId:e,consumable:ls(n),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...i},this.emit(),"targeting"}toggleTargetCard(e){const n=this.targetMode;if(!n||!n.candidateIds.includes(e))return!1;const i=n.selectedIds.indexOf(e);return i>=0?(n.selectedIds.splice(i,1),this.emit(),!1):n.selectedIds.length>=n.max?!1:(n.selectedIds.push(e),this.emit(),!0)}cancelTargetMode(){return this.targetMode?(this.targetMode=null,this.emit(),!0):!1}confirmTargetMode(){const e=this.targetMode;if(!e||e.selectedIds.length<e.min||e.selectedIds.length>e.max)return!1;if(this.applyConsumableWithTargets(e.consumable,e.selectedIds),e.source==="inventory"){const i=this.consumables.findIndex(r=>r.id===e.sourceId);return i>=0&&this.consumables.splice(i,1),this.targetMode=null,this.emit(),!0}const n=this.booster?.choices.find(i=>i.id===e.choiceId);return n?(this.targetMode=null,this.finishBoosterChoice(n),!0):(this.targetMode=null,this.emit(),!1)}getTargetCandidateCards(){return this.targetMode?this.targetMode.candidateIds.map(e=>this.findRunCard(e)).filter(e=>!!e).map(fi):[]}makeTargetCandidateIds(){if(this.hand.length>0)return this.hand.map(n=>n.id);const e=this.ownedDeck.map(n=>n.id);return Yo(e,this.rng).slice(0,Math.min(this.config.handSize,e.length))}findRunCard(e){return this.hand.find(n=>n.id===e)??this.deck.find(n=>n.id===e)??this.discardPile.find(n=>n.id===e)??this.ownedDeck.find(n=>n.id===e)??null}mutateCardEverywhere(e,n){for(const i of[this.ownedDeck,this.hand,this.deck,this.discardPile])for(const r of i)r.id===e&&n(r)}destroyCardEverywhere(e){this.ownedDeck=this.ownedDeck.filter(n=>n.id!==e),this.hand=this.hand.filter(n=>n.id!==e),this.deck=this.deck.filter(n=>n.id!==e),this.discardPile=this.discardPile.filter(n=>n.id!==e),this.selected.delete(e)}applyConsumableWithTargets(e,n){const i=e.effect;if((e.type==="tarot"||e.type==="planet")&&e.key!=="the-fool"&&(this.lastConsumableKey=e.key),i.kind==="planet"){this.upgradeHandLevel(i.handType);return}if(i.kind==="money"){const r=i.mode==="double-up-to-20"?Math.min(20,this.money):Math.max(0,i.amount??0);this.money+=r;return}if(i.kind==="enhance-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.enhancement=i.enhancement,s.baseChips=i.enhancement==="stone"?50:s.rank===14?11:s.rank>=11?10:s.rank});return}if(i.kind==="convert-suit"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.suit=i.suit});return}if(i.kind==="destroy-selected"){for(const r of n)this.destroyCardEverywhere(r);return}if(i.kind==="copy-right-to-left"){const r=this.targetMode?.candidateIds??n,s=n.slice().sort((l,c)=>r.indexOf(l)-r.indexOf(c)),a=s[0],o=this.findRunCard(s[1]);if(!a||!o)return;this.mutateCardEverywhere(a,l=>{l.suit=o.suit,l.rank=o.rank,l.enhancement=o.enhancement,l.seal=o.seal,l.edition=o.edition,l.baseChips=o.baseChips});return}if(i.kind==="edition-selected"){for(const r of n){const s=i.edition==="random"?this.pick(["foil","holographic","polychrome"]):i.edition;this.mutateCardEverywhere(r,a=>{a.edition=s})}return}if(i.kind==="seal-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.seal=i.seal});return}if(i.kind==="duplicate-selected"){const r=n[0]?this.findRunCard(n[0]):null;if(!r)return;for(let s=0;s<i.copies;s++){const a=fi(r);a.id=this.makeRunId("copy"),this.ownedDeck.push(a),this.phase==="play"&&this.hand.push(fi(a))}return}if(i.kind==="immolate-selected"){for(const r of n)this.destroyCardEverywhere(r);this.money+=i.money;return}if(i.kind==="create-consumables"){const r=i.type==="tarot"?Li:Ni;for(let s=0;s<i.count&&this.consumables.length<this.consumableCapacity();s++)this.consumables.push(this.makeConsumableFromCatalog(this.pick(r)));return}if(i.kind==="repeat-last-consumable"){if(!this.lastConsumableKey)return;const r=[...Li,...Ni].find(s=>s.key===this.lastConsumableKey);r&&this.consumables.length<this.consumableCapacity()&&this.consumables.push(this.makeConsumableFromCatalog(r));return}if(i.kind==="joker-edition-chance"){if(this.jokers.length>0&&this.rng()<i.chance){const r=this.pick(this.jokers);r.edition=this.pick(["foil","holographic","polychrome"])}return}if(i.kind==="rank-up-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.rank=s.rank===14?2:s.rank+1,s.baseChips=s.rank===14?11:s.rank>=11?10:s.rank});return}if(i.kind==="temperance"){const r=this.jokers.reduce((s,a)=>s+a.sellValue,0);this.money+=Math.min(i.cap,r);return}if(i.kind==="create-random-joker"){if(this.jokers.length>=this.jokerCapacity())return;const r=this.availableJokerTemplates(i.rarity);r.length>0&&this.jokers.push(this.makeJokerFromTemplate(this.pick(r),!1));return}if(i.kind==="spectral-familiar"){if(this.hand.length>0){const a=this.pick(this.hand);this.destroyCardEverywhere(a.id)}const r=Ir().filter(a=>i.mode==="ace"?a.rank===14:i.mode==="face"?a.rank>=11&&a.rank<=13:a.rank>=2&&a.rank<=10),s=Hd.filter(a=>a!=="stone");for(let a=0;a<i.create;a++){const o=fi(this.pick(r));o.id=this.makeRunId("spectral-card"),o.enhancement=this.pick(s),o.baseChips=o.rank===14?11:o.rank>=11?10:o.rank,this.ownedDeck.push(fi(o)),this.phase==="play"&&this.hand.push(o)}return}if(i.kind==="spectral-wraith"){if(this.jokers.length<this.jokerCapacity()){const r=this.availableJokerTemplates("rare");r.length>0&&this.jokers.push(this.makeJokerFromTemplate(this.pick(r),!1))}this.money=0;return}if(i.kind==="spectral-sigil"){const r=this.pick(Gs);for(const s of[...this.hand])this.mutateCardEverywhere(s.id,a=>{a.suit=r});return}if(i.kind==="spectral-ouija"){const r=this.pick(Qa);for(const s of[...this.hand])this.mutateCardEverywhere(s.id,a=>{a.rank=r,a.baseChips=r===14?11:r>=11?10:r});this.config.handSize=Math.max(1,this.config.handSize-1),this.roundHandSize=Math.max(1,this.roundHandSize-1);return}if(i.kind==="spectral-ectoplasm"){if(this.jokers.length===0)return;const r=this.pick(this.jokers);r.edition="negative",this.ectoplasmUses+=1,this.config.handSize=Math.max(1,this.config.handSize-this.ectoplasmUses),this.roundHandSize=Math.max(1,this.roundHandSize-this.ectoplasmUses);return}if(i.kind==="spectral-ankh"){if(this.jokers.length===0)return;const r=this.pick(this.jokers),s=Zs(r);s.id=this.makeRunId("ankh"),s.edition==="negative"&&(s.edition="base"),this.jokers=[r,s];return}if(i.kind==="spectral-hex"){if(this.jokers.length===0)return;const r=this.pick(this.jokers);r.edition="polychrome",this.jokers=[r];return}if(i.kind==="spectral-soul"){if(this.jokers.length>=this.jokerCapacity())return;const r=this.availableJokerTemplates("mythic");r.length>0&&this.jokers.push(this.makeJokerFromTemplate(this.pick(r),!1));return}if(i.kind==="spectral-black-hole"){for(const r of Object.keys(this.handLevels))this.upgradeHandLevel(r);return}}createShopState(){const e=++this.shopVisit;if(this.couponNextShop?(this.couponShopVisit=e,this.couponNextShop=!1):this.couponShopVisit=null,!this.anteVoucher||this.anteVoucher.sold){const i=Object.keys(os).filter(s=>{if(this.vouchers.includes(s)||!this.voucherMetaUnlocked(s))return!1;const a=So[s];return!a||this.vouchers.includes(a)}),r=i.length?this.pick(i):"blank";this.anteVoucher={...os[r],sold:!1}}const n={visit:e,offers:this.createShopOffers(e,0),boosters:this.createBoosterOffers(e),voucher:to(this.anteVoucher),rerolls:0,rerollCost:this.d6NextShop?0:this.rerollBaseCost()};return this.d6NextShop=!1,n}createShopOffers(e,n){const i=2+(this.vouchers.includes("overstock")?1:0)+(this.vouchers.includes("overstock-plus")?1:0);return Array.from({length:i},(r,s)=>{const a=this.rng();let o;return a<.56?o=this.makeJokerItem():this.vouchers.includes("magic-trick")&&a<.69?o=this.makePlayingCardItem():o=this.makeConsumableItem(),this.makeShopOffer(e,n,s,o)})}createBoosterOffers(e){return[0,1].map(n=>{const i=this.pick(Lg),r=this.rng(),s=r<.68?"normal":r<.9?"jumbo":"mega",a=Bd(i,s);return{id:`booster-${e}-${n}`,type:i,size:s,name:Ig(i,s),description:`Choose ${a.picks} from ${a.choices}.`,price:a.price,sold:!1}})}rerollBaseCost(){let e=0;return this.vouchers.includes("reroll-surplus")&&(e+=2),this.vouchers.includes("reroll-glut")&&(e+=2),Math.max(1,zg-e)}makeShopOffer(e,n,i,r){return{id:`shop-${e}-${n}-${i}`,item:r,sold:!1}}makeJokerFromTemplate(e,n=!0){const i={...e,id:this.makeRunId("joker"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base",sticker:"none",rental:!1};i.effect.kind==="decay-chips"?i.counter=i.effect.start:i.effect.kind==="castle-scale-chips"?(i.counter=0,i.suit=this.pickCastleSuitWeighted()):(i.effect.kind==="straight-scale-chips"||i.effect.kind==="bus-scale-mult"||i.effect.kind==="green-scale-mult"||i.effect.kind==="loyalty-xmult"||i.effect.kind==="mythic-phoenix")&&(i.counter=i.effect.kind==="straight-scale-chips"?i.effect.start??0:0);const r=new Set(["runner","ride-the-bus","green-joker","castle"]),s=new Set(["ice-cream"]);if(n&&i.rarity!=="mythic"){const a=Qe[this.stakeKey].order;if(a>=Qe.black.order){const o=this.rng();o<.3&&!s.has(i.key)?i.sticker="eternal":a>=Qe.orange.order&&o<.6&&!r.has(i.key)&&(i.sticker="perishable",i.perishableRounds=5)}a>=Qe.gold.order&&this.rng()<.3&&(i.rental=!0)}return i}makeJokerItem(){const e=this.rng(),n=e<.68?"common":e<.93?"uncommon":e<.98?"rare":"mythic",i=this.availableJokerTemplates(n),r=this.availableJokerTemplates(),s=i.length?i:r.length?r:Mr.filter(c=>c.rarity==="common"),a=this.makeJokerFromTemplate(this.pick(s)),o=this.vouchers.includes("glow-up")?4:this.vouchers.includes("hone")?2:1,l=this.rng();return l<.02*o?a.edition="polychrome":l<.06*o?a.edition="holographic":l<.12*o&&(a.edition="foil"),{kind:"joker",joker:a}}makeConsumableItem(){const e=this.makeConsumableTemplate();return{kind:"consumable",consumable:{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}}makeConsumableTemplate(){let e=this.vouchers.includes("tarot-tycoon")?4:this.vouchers.includes("tarot-merchant")?2:1,n=this.vouchers.includes("planet-tycoon")?4:this.vouchers.includes("planet-merchant")?2:1;const i=this.deckKey==="ghost"?.8:0,r=e+n+i;let s=this.rng()*r;return(s-=e)<0?this.pick(Li):(s-=n)<0?this.pick(Ni):this.pick(Jr)}makePlayingCardItem(){const e=this.pick(Gs),n=this.pick(Qa),i=Sf(e,n);return this.vouchers.includes("illusion")&&(this.rng()<.45&&(i.enhancement=this.pick(Hd),i.enhancement==="stone"&&(i.baseChips=50)),this.rng()<.22&&(i.edition=this.pick(Vg)),this.rng()<.25&&(i.seal=this.pick(["red","blue","gold","purple"]))),{kind:"playing-card",card:i,name:`${yo[n]} of ${Zo(e)}${i.edition!=="base"?` (${Zo(i.edition)})`:""}`,description:i.enhancement==="none"?"Add this card to your deck.":`Add a ${Zo(i.enhancement)} card to your deck.`,price:i.edition==="base"?4:6,sellValue:1}}findOffer(e){return this.shop?.offers.find(n=>n.id===e)??null}priceForItem(e){const n=e.kind==="joker"?e.joker.rental?1:e.joker.price:e.kind==="consumable"?e.consumable.price:e.price;return this.discountedPrice(n)}shopPriceForItem(e){return this.priceForItem(e)}discountedPrice(e){return this.shop&&this.couponShopVisit===this.shop.visit?0:this.vouchers.includes("liquidation")?Math.max(1,Math.floor(e*.5+.5)):this.vouchers.includes("clearance-sale")?Math.max(1,Math.floor(e*.75+.5)):e}upgradeHandLevel(e){const n=Zn[e],i=this.handLevels[e].level+1;this.handLevels[e]={level:i,chips:n.chips+n.chipsPerLvl*(i-1),mult:n.mult+n.multPerLvl*(i-1)}}pick(e){return e[Math.floor(this.rng()*e.length)]}makeRunId(e){return`${e}-${this.rngDrawCount}-${Math.floor(this.rng()*1e6)}`}reset(e){if(typeof e=="object"&&e!==null){this.loadSnapshot(e),this.emit();return}this.config={...this.config,seed:typeof e=="number"?e:Math.floor(Math.random()*1e9)},this.rng=this.createTrackedRng(this.config.seed),this.ante=1,this.blindIndex=0,this.money=this.config.startingMoney,this.ownedDeck=Ir(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.deckKey="red",this.stakeKey="white",this.bossBlindKey="wall",this.anteTags=["investment","coupon"],this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.roundHandSize=this.config.handSize,this.playedHandTypesThisRound=[],this.handPlayCounts=Object.fromEntries(Object.keys(Zn).map(n=>[n,0])),this.handsPlayedRun=0,this.shopVisit=0,this.handLevels=Qo(),this.lastScore=null,this.enterSetup()}toSnapshot(){return{version:4,config:{...this.config},rngDrawCount:this.rngDrawCount,phase:this.phase,ante:this.ante,blindIndex:this.blindIndex,money:this.money,ownedDeck:si(this.ownedDeck),deck:si(this.deck),discardPile:si(this.discardPile),hand:si(this.hand),selected:[...this.selected],handsLeft:this.handsLeft,discardsLeft:this.discardsLeft,roundScore:this.roundScore,target:this.target,handLevels:Kd(this.handLevels),jokers:Gd(this.jokers),consumables:Wd(this.consumables),shop:jd(this.shop),booster:Xd(this.booster),targetMode:$d(this.targetMode),vouchers:[...this.vouchers],anteVoucher:to(this.anteVoucher),lastCashout:this.lastCashout?{...this.lastCashout}:null,deckKey:this.deckKey,stakeKey:this.stakeKey,bossBlindKey:this.bossBlindKey,anteTags:[...this.anteTags],skippedBlinds:this.skippedBlinds,doubleTags:this.doubleTags,investmentTags:this.investmentTags,couponNextShop:this.couponNextShop,couponShopVisit:this.couponShopVisit,d6NextShop:this.d6NextShop,juggleNextBlind:this.juggleNextBlind,roundHandSize:this.roundHandSize,playedHandTypesThisRound:[...this.playedHandTypesThisRound],handPlayCounts:{...this.handPlayCounts},handsPlayedRun:this.handsPlayedRun,discardsUsedRun:this.discardsUsedRun,antePlayedCardIds:[...this.antePlayedCardIds],bossFaceDownCardIds:[...this.bossFaceDownCardIds],verdantLeafActive:this.verdantLeafActive,crimsonDebuffedJokerId:this.crimsonDebuffedJokerId,bossForcedCardId:this.bossForcedCardId,lastConsumableKey:this.lastConsumableKey,ectoplasmUses:this.ectoplasmUses,consumableSlotDelta:this.consumableSlotDelta,jokerSlotDelta:this.jokerSlotDelta,bossRerollsUsed:this.bossRerollsUsed}}loadSnapshot(e){const n=e.version;if(n!==1&&n!==2&&n!==3&&n!==4)throw new Error(`Unsupported snapshot version: ${n}`);const i=this.normalizeSnapshot(e);this.config={...i.config},this.rng=this.createTrackedRng(i.config.seed,i.rngDrawCount),this.phase=i.phase,this.ante=i.ante,this.blindIndex=i.blindIndex,this.money=i.money,this.ownedDeck=si(i.ownedDeck),this.deck=si(i.deck),this.discardPile=si(i.discardPile),this.hand=si(i.hand),this.selected=new Set(i.selected),this.handsLeft=i.handsLeft,this.discardsLeft=i.discardsLeft,this.roundScore=i.roundScore,this.target=i.target,this.handLevels=Kd(i.handLevels),this.jokers=Gd(i.jokers),this.consumables=Wd(i.consumables),this.shop=jd(i.shop),this.booster=Xd(i.booster),this.targetMode=$d(i.targetMode),this.vouchers=[...i.vouchers],this.anteVoucher=to(i.anteVoucher),this.lastCashout=i.lastCashout?{...i.lastCashout}:null,this.deckKey=i.deckKey,this.stakeKey=i.stakeKey,this.bossBlindKey=i.bossBlindKey,this.anteTags=[...i.anteTags],this.skippedBlinds=i.skippedBlinds,this.doubleTags=i.doubleTags,this.investmentTags=i.investmentTags,this.couponNextShop=i.couponNextShop,this.couponShopVisit=i.couponShopVisit,this.d6NextShop=i.d6NextShop,this.juggleNextBlind=i.juggleNextBlind,this.roundHandSize=i.roundHandSize,this.playedHandTypesThisRound=[...i.playedHandTypesThisRound],this.handPlayCounts={...i.handPlayCounts},this.handsPlayedRun=i.handsPlayedRun,this.discardsUsedRun=i.discardsUsedRun??0,this.antePlayedCardIds=new Set(i.antePlayedCardIds??[]),this.bossFaceDownCardIds=new Set(i.bossFaceDownCardIds??[]),this.verdantLeafActive=i.verdantLeafActive??!1,this.crimsonDebuffedJokerId=i.crimsonDebuffedJokerId??null,this.bossForcedCardId=i.bossForcedCardId??null,this.lastConsumableKey=i.lastConsumableKey??null,this.ectoplasmUses=i.ectoplasmUses??0,this.consumableSlotDelta=i.consumableSlotDelta??0,this.jokerSlotDelta=i.jokerSlotDelta??0,this.bossRerollsUsed=i.bossRerollsUsed??0,this.shopVisit=i.shop?.visit??this.completedShopCount(),this.lastScore=null}normalizeSnapshot(e){if(e.version===4)return e;let n;if(e.version===3)n=e;else if(e.version===2)n={...e,version:3,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null};else{const i=e,r=[...i.deck,...i.discardPile,...i.hand],s=new Set,a=r.filter(o=>s.has(o.id)?!1:(s.add(o.id),!0));n={...i,version:3,ownedDeck:a.length?a:Ir(),jokers:[],consumables:[],shop:null,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null}}return{...n,version:4,deckKey:"red",stakeKey:"white",bossBlindKey:"wall",anteTags:["investment","coupon"],skippedBlinds:0,doubleTags:0,investmentTags:0,couponNextShop:!1,couponShopVisit:null,d6NextShop:!1,juggleNextBlind:0,roundHandSize:n.config.handSize,playedHandTypesThisRound:[],handPlayCounts:Object.fromEntries(Object.keys(Zn).map(i=>[i,0])),handsPlayedRun:0,discardsUsedRun:0,antePlayedCardIds:[],bossFaceDownCardIds:[],verdantLeafActive:!1,crimsonDebuffedJokerId:null,bossForcedCardId:null,lastConsumableKey:null,ectoplasmUses:0,consumableSlotDelta:0,jokerSlotDelta:0,bossRerollsUsed:0}}completedShopCount(){return Math.max(0,(this.ante-1)*3+this.blindIndex)}createTrackedRng(e,n=0){const i=yg(e);for(let r=0;r<n;r++)i();return this.rngDrawCount=n,()=>(this.rngDrawCount+=1,i())}},ns={spades:0,hearts:1,diamonds:2,clubs:3},qd=[[14,13,12,11,10],[13,12,11,10,9],[12,11,10,9,8],[11,10,9,8,7],[10,9,8,7,6],[9,8,7,6,5],[8,7,6,5,4],[7,6,5,4,3],[6,5,4,3,2],[5,4,3,2,14]];function Tf(t,e,n){return ns[t.suit]-ns[e.suit]||(n.get(t.id)??0)-(n.get(e.id)??0)}function Wg(t){const e=new Map(t.map((a,o)=>[a.id,o])),n=new Set(t.filter(a=>a.enhancement!=="stone").map(a=>a.rank));let i=qd[0],r=-1;for(const a of qd){const o=a.reduce((l,c)=>l+(n.has(c)?1:0),0);o>r&&(r=o,i=a)}const s=new Map(i.map((a,o)=>[a,o]));return t.slice().sort((a,o)=>{const l=a.enhancement==="stone";if(l!==(o.enhancement==="stone"))return l?1:-1;const c=s.get(a.rank),d=s.get(o.rank),h=c!==void 0,u=d!==void 0;return h!==u?h?-1:1:h&&u&&c!==d?c-d:a.rank!==o.rank?o.rank-a.rank:Tf(a,o,e)})}function $g(t){const e=new Map(t.map((l,c)=>[l.id,c])),n=t.filter(l=>l.enhancement!=="stone"),i=n.filter(l=>l.enhancement==="wild").length,r=new Map;Object.keys(ns).forEach(l=>r.set(l,0));for(const l of n)l.enhancement!=="wild"&&r.set(l.suit,(r.get(l.suit)??0)+1);const s=Object.keys(ns).sort((l,c)=>{const d=(r.get(l)??0)+i;return(r.get(c)??0)+i-d||ns[l]-ns[c]}),a=s[0],o=new Map(s.map((l,c)=>[l,c]));return t.slice().sort((l,c)=>{const d=l.enhancement==="stone";if(d!==(c.enhancement==="stone"))return d?1:-1;const h=l.enhancement==="wild"?0:o.get(l.suit)??99,u=c.enhancement==="wild"?0:o.get(c.suit)??99;if(h!==u)return h-u;if(h<=0&&u<=0&&l.enhancement!==c.enhancement){if(l.suit===a&&l.enhancement!=="wild")return-1;if(c.suit===a&&c.enhancement!=="wild")return 1}return l.rank!==c.rank?c.rank-l.rank:Tf(l,c,e)})}var Xg="kanban-open-poker:meta-v2",Vc=new Set(["hanging-chad","acrobat","sock-and-buskin","rough-gem","bloodstone","arrowhead","onyx-agate","bootstraps","the-duo","the-trio"]),Hc=Object.keys(os).filter(t=>!So[t]),Ef={magic:"red",nebula:"blue",ghost:"yellow",abandoned:"green",checkered:"black"},Cf={zodiac:Qe.red.order,painted:Qe.green.order,anaglyph:Qe.black.order,plasma:Qe.blue.order,erratic:Qe.orange.order};function Gn(t){return[...new Set(t)]}function wf(){return{spades:0,hearts:0,diamonds:0,clubs:0}}function Xn(t){return!t}function Af(t){return t.trim().length>0}function el(){const t=Io.filter(e=>e.rarity==="mythic"||!Vc.has(e.key)).map(e=>e.key);return{version:2,runsStarted:0,runsFinished:0,wins:0,bestAnte:1,totalHands:0,totalCardsPlayed:0,totalFaceCardsPlayed:0,totalSkips:0,totalDiscards:0,totalCardsDiscarded:0,maxMoney:4,totalShopSpend:0,totalRerolls:0,tarotShopBought:0,planetShopBought:0,playingCardsShopBought:0,tarotPackUsed:0,planetPackUsed:0,blankRedeemed:0,interestStreak:0,maxInterestStreak:0,minHandSizeEver:8,maxPolychromeJokers:0,maxEditionJokers:0,maxVouchersRedeemedRun:0,maxSuitCards:wf(),unlockedDecks:["red"],highestStakeCleared:{},unlockedJokers:t,discoveredJokers:[],unlockedVouchers:[...Hc],discoveredVouchers:[],discoveredTarots:[],discoveredPlanets:[],discoveredSpectrals:[],discoveredBosses:[],discoveredTags:[],jokerStakeStickers:{},bossHighCardWin:!1,wonWithoutPair:!1,wonWithoutThreeKind:!1,settledRunIds:[],settledEventIds:[]}}function ht(t,e=0){const n=Number(t);return Number.isFinite(n)?n:e}function jg(t){try{const e=t.getItem("kanban-open-poker:meta-v2")??t.getItem("kanban-open-poker:meta-v1");if(!e)return Ht(el());const n=JSON.parse(e),i=el(),r={...i,...n,version:2,runsStarted:ht(n.runsStarted),runsFinished:ht(n.runsFinished),wins:ht(n.wins),bestAnte:Math.max(1,ht(n.bestAnte,1)),totalHands:ht(n.totalHands),totalCardsPlayed:ht(n.totalCardsPlayed),totalFaceCardsPlayed:ht(n.totalFaceCardsPlayed),totalSkips:ht(n.totalSkips),totalDiscards:ht(n.totalDiscards),totalCardsDiscarded:ht(n.totalCardsDiscarded),maxMoney:Math.max(4,ht(n.maxMoney,4)),totalShopSpend:ht(n.totalShopSpend),totalRerolls:ht(n.totalRerolls),tarotShopBought:ht(n.tarotShopBought),planetShopBought:ht(n.planetShopBought),playingCardsShopBought:ht(n.playingCardsShopBought),tarotPackUsed:ht(n.tarotPackUsed),planetPackUsed:ht(n.planetPackUsed),blankRedeemed:ht(n.blankRedeemed),interestStreak:ht(n.interestStreak),maxInterestStreak:ht(n.maxInterestStreak),minHandSizeEver:Math.max(1,ht(n.minHandSizeEver,8)),maxPolychromeJokers:ht(n.maxPolychromeJokers),maxEditionJokers:ht(n.maxEditionJokers),maxVouchersRedeemedRun:ht(n.maxVouchersRedeemedRun??n.maxVouchersInRun),maxSuitCards:{...wf(),...n.maxSuitCards??{}},highestStakeCleared:{...n.highestStakeCleared??{}},discoveredJokers:Gn(n.discoveredJokers??[]),discoveredVouchers:Gn(n.discoveredVouchers??[]),discoveredTarots:Gn(n.discoveredTarots??[]),discoveredPlanets:Gn(n.discoveredPlanets??[]),discoveredSpectrals:Gn(n.discoveredSpectrals??[]),discoveredBosses:Gn(n.discoveredBosses??[]),discoveredTags:Gn(n.discoveredTags??[]),jokerStakeStickers:{...n.jokerStakeStickers??{}},settledRunIds:Gn(n.settledRunIds??[]).slice(-200),settledEventIds:Gn(n.settledEventIds??[]).slice(-1e3),unlockedDecks:["red"],unlockedJokers:[...i.unlockedJokers],unlockedVouchers:[...Hc],bossHighCardWin:!!n.bossHighCardWin,wonWithoutPair:!!n.wonWithoutPair,wonWithoutThreeKind:!!n.wonWithoutThreeKind};for(const s of r.discoveredJokers)r.unlockedJokers.includes(s)||r.unlockedJokers.push(s);for(const s of r.discoveredVouchers)r.unlockedVouchers.includes(s)||r.unlockedVouchers.push(s);return Ht(r)}catch{return Ht(el())}}function Rf(t,e){t.setItem(Xg,JSON.stringify(e))}function Kg(t){return Math.max(-1,...Object.values(t.highestStakeCleared).map(e=>Number(e??-1)))}function qg(t,e){return Math.min(7,Math.max(0,Number(t.highestStakeCleared[e]??-1)+1))}function Pf(t){return t.discoveredBosses.length+(t.totalHands>0?2:0)}function Gc(t){return Gn([...t.unlockedDecks.map(e=>`deck:${e}`),...t.discoveredJokers.map(e=>`joker:${e}`),...t.discoveredVouchers.map(e=>`voucher:${e}`),...t.discoveredTarots.map(e=>`tarot:${e}`),...t.discoveredPlanets.map(e=>`planet:${e}`),...t.discoveredSpectrals.map(e=>`spectral:${e}`),...t.discoveredBosses.map(e=>`boss:${e}`),...t.discoveredTags.map(e=>`tag:${e}`)]).length}function Yg(t,e){return Number(t.highestStakeCleared[e]??-1)>=0}function Ht(t){const e={...t,highestStakeCleared:{...t.highestStakeCleared},maxSuitCards:{...t.maxSuitCards},jokerStakeStickers:{...t.jokerStakeStickers}},n=Gc(e),i=new Set(["red"]);for(const o of Object.keys(e.highestStakeCleared))Number(e.highestStakeCleared[o]??-1)>=0&&i.add(o);n>=20&&i.add("blue"),n>=50&&i.add("yellow"),n>=75&&i.add("green"),n>=100&&i.add("black");for(const[o,l]of Object.entries(Ef))Yg(e,l)&&i.add(o);const r=Kg(e);for(const[o,l]of Object.entries(Cf))r>=l&&i.add(o);e.unlockedDecks=[...i];const s=new Set(Io.filter(o=>o.rarity==="mythic"||!Vc.has(o.key)).map(o=>o.key));e.discoveredJokers.forEach(o=>s.add(o)),e.bossHighCardWin&&s.add("hanging-chad"),e.totalHands>=200&&s.add("acrobat"),e.totalFaceCardsPlayed>=300&&s.add("sock-and-buskin"),e.maxSuitCards.diamonds>=30&&s.add("rough-gem"),e.maxSuitCards.hearts>=30&&s.add("bloodstone"),e.maxSuitCards.spades>=30&&s.add("arrowhead"),e.maxSuitCards.clubs>=30&&s.add("onyx-agate"),e.maxPolychromeJokers>=2&&s.add("bootstraps"),e.wonWithoutPair&&s.add("the-duo"),e.wonWithoutThreeKind&&s.add("the-trio"),e.unlockedJokers=[...s];const a=new Set(Hc);return e.discoveredVouchers.forEach(o=>a.add(o)),e.totalShopSpend>=2500&&a.add("overstock-plus"),e.maxVouchersRedeemedRun>=10&&a.add("liquidation"),e.maxEditionJokers>=5&&a.add("glow-up"),e.totalRerolls>=100&&a.add("reroll-glut"),e.tarotPackUsed>=25&&a.add("omen-globe"),e.planetPackUsed>=25&&a.add("observatory"),e.totalCardsPlayed>=2500&&a.add("nacho-tong"),e.totalCardsDiscarded>=2500&&a.add("recyclomancy"),e.tarotShopBought>=50&&a.add("tarot-tycoon"),e.planetShopBought>=50&&a.add("planet-tycoon"),e.maxInterestStreak>=10&&a.add("money-tree"),e.blankRedeemed>=10&&a.add("antimatter"),e.playingCardsShopBought>=20&&a.add("illusion"),e.bestAnte>=12&&a.add("petroglyph"),Pf(e)>=25&&a.add("retcon"),e.minHandSizeEver<=5&&a.add("palette"),e.unlockedVouchers=[...a],e}function Jg(t,e=!1){return Xn(e)?Ht({...t,runsStarted:t.runsStarted+1,interestStreak:0}):t}function Zg(t,e,n=!1){return Xn(n)?Ht({...t,totalHands:t.totalHands+Math.max(0,e.hands??0),totalCardsPlayed:t.totalCardsPlayed+Math.max(0,e.cardsPlayed??0),totalFaceCardsPlayed:t.totalFaceCardsPlayed+Math.max(0,e.faceCardsPlayed??0),totalDiscards:t.totalDiscards+Math.max(0,e.discards??0),totalCardsDiscarded:t.totalCardsDiscarded+Math.max(0,e.cardsDiscarded??0),totalShopSpend:t.totalShopSpend+Math.max(0,e.shopSpend??0),totalRerolls:t.totalRerolls+Math.max(0,e.rerolls??0),tarotShopBought:t.tarotShopBought+Math.max(0,e.tarotShopBought??0),planetShopBought:t.planetShopBought+Math.max(0,e.planetShopBought??0),playingCardsShopBought:t.playingCardsShopBought+Math.max(0,e.playingCardsShopBought??0),tarotPackUsed:t.tarotPackUsed+Math.max(0,e.tarotPackUsed??0),planetPackUsed:t.planetPackUsed+Math.max(0,e.planetPackUsed??0),blankRedeemed:t.blankRedeemed+Math.max(0,e.blankRedeemed??0)}):t}function Qg(t,e,n=!1){if(!Xn(n))return t;const i={...t,maxSuitCards:{...t.maxSuitCards},bestAnte:Math.max(t.bestAnte,e.ante),maxMoney:Math.max(t.maxMoney,e.money),minHandSizeEver:Math.min(t.minHandSizeEver,e.handSize),maxVouchersRedeemedRun:Math.max(t.maxVouchersRedeemedRun,e.vouchersRedeemed),maxPolychromeJokers:Math.max(t.maxPolychromeJokers,e.polychromeJokers),maxEditionJokers:Math.max(t.maxEditionJokers,e.editionJokers)};return Object.keys(e.suitCounts).forEach(r=>{i.maxSuitCards[r]=Math.max(i.maxSuitCards[r]??0,e.suitCounts[r]??0)}),Ht(i)}function e_(t,e,n,i,r=!1){if(!Xn(r)||t.settledEventIds.includes(i))return t;const s=n>0&&e>=n?t.interestStreak+1:0;return Ht({...t,interestStreak:s,maxInterestStreak:Math.max(t.maxInterestStreak,s),settledEventIds:[...t.settledEventIds,i].slice(-1e3)})}function t_(t,e,n,i,r=!1){if(!Xn(r)||t.settledEventIds.includes(i))return t;const s=t.discoveredBosses.includes(e)?t.discoveredBosses:[...t.discoveredBosses,e];return Ht({...t,discoveredBosses:s,bossHighCardWin:t.bossHighCardWin||n==="High Card",settledEventIds:[...t.settledEventIds,i].slice(-1e3)})}function n_(t,e,n,i=!1){if(!Xn(i)||t.settledRunIds.includes(e))return t;const r={...t,highestStakeCleared:{...t.highestStakeCleared},jokerStakeStickers:{...t.jokerStakeStickers},runsFinished:t.runsFinished+1,wins:t.wins+(n.won?1:0),bestAnte:Math.max(t.bestAnte,n.ante),maxMoney:Math.max(t.maxMoney,n.money),settledRunIds:[...t.settledRunIds,e].slice(-200)};if(n.won){const s=Qe[n.stake].order;r.highestStakeCleared[n.deck]=Math.max(Number(r.highestStakeCleared[n.deck]??-1),s);for(const a of Gn(n.jokerKeys))r.jokerStakeStickers[a]=Math.max(Number(r.jokerStakeStickers[a]??-1),s);(n.handPlayCounts.Pair??0)===0&&(r.wonWithoutPair=!0),(n.handPlayCounts["Three of a Kind"]??0)===0&&(r.wonWithoutThreeKind=!0)}return Ht(r)}function Yd(t,e,n=!1){return!Xn(n)||t.discoveredJokers.includes(e)?t:Ht({...t,discoveredJokers:[...t.discoveredJokers,e]})}function i_(t,e,n=!1){return!Xn(n)||t.discoveredVouchers.includes(e)?t:Ht({...t,discoveredVouchers:[...t.discoveredVouchers,e]})}function Jd(t,e,n,i=!1){return Xn(i)?e==="tarot"?t.discoveredTarots.includes(n)?t:Ht({...t,discoveredTarots:[...t.discoveredTarots,n]}):e==="planet"?t.discoveredPlanets.includes(n)?t:Ht({...t,discoveredPlanets:[...t.discoveredPlanets,n]}):t.discoveredSpectrals.includes(n)?t:Ht({...t,discoveredSpectrals:[...t.discoveredSpectrals,n]}):t}function r_(t,e,n=!1){return!Xn(n)||t.discoveredTags.includes(e)?t:Ht({...t,discoveredTags:[...t.discoveredTags,e]})}function kf(t){const e=t.trim();if(!e)return Math.max(1,Math.floor(Math.random()*2147483647));if(/^\d+$/.test(e))return Math.max(1,Number(e)>>>0);let n=2166136261;for(let i=0;i<e.length;i++)n^=e.charCodeAt(i),n=Math.imul(n,16777619);return Math.max(1,n>>>0)}function Wc(t){return`${Date.now().toString(36)}-${t.toString(36)}-${Math.floor(Math.random()*1e8).toString(36)}`}function vs(t){return Qe[Object.keys(Qe).find(e=>Qe[e].order===t)??"white"].name.replace(" Stake","")}function no(t,e){const n=Gc(t);if(e==="red")return"Available from the start.";if(e==="blue")return`Discover 20 Collection items (${Math.min(n,20)}/20).`;if(e==="yellow")return`Discover 50 Collection items (${Math.min(n,50)}/50).`;if(e==="green")return`Discover 75 Collection items (${Math.min(n,75)}/75).`;if(e==="black")return`Discover 100 Collection items (${Math.min(n,100)}/100).`;const i=Ef[e];if(i)return`Win a run with ${i[0].toUpperCase()+i.slice(1)} Deck.`;const r=Cf[e];return r!==void 0?`Win any run on ${Qe[Object.keys(Qe).find(s=>Qe[s].order===r)??"white"].name} or higher.`:"Progress through the Collection."}function s_(t,e){return Vc.has(e)?e==="hanging-chad"?"Defeat a Boss Blind with a High Card.":e==="acrobat"?`Play 200 hands (${Math.min(t.totalHands,200)}/200).`:e==="sock-and-buskin"?`Play 300 face cards (${Math.min(t.totalFaceCardsPlayed,300)}/300).`:e==="rough-gem"?`Have at least 30 Diamonds in your deck (${Math.min(t.maxSuitCards.diamonds,30)}/30).`:e==="bloodstone"?`Have at least 30 Hearts in your deck (${Math.min(t.maxSuitCards.hearts,30)}/30).`:e==="arrowhead"?`Have at least 30 Spades in your deck (${Math.min(t.maxSuitCards.spades,30)}/30).`:e==="onyx-agate"?`Have at least 30 Clubs in your deck (${Math.min(t.maxSuitCards.clubs,30)}/30).`:e==="bootstraps"?`Have at least 2 Polychrome Jokers at once (${Math.min(t.maxPolychromeJokers,2)}/2).`:e==="the-duo"?"Win a run without playing a Pair.":e==="the-trio"?"Win a run without playing Three of a Kind.":"Meet its Balatro unlock condition.":Io.find(n=>n.key===e)?.rarity==="mythic"?"Custom Mythic content; available to this build.":"Available from the start."}function a_(t,e){return So[e]?e==="overstock-plus"?`Spend $2500 in Shops (${Math.min(t.totalShopSpend,2500)}/2500).`:e==="liquidation"?`Redeem 10 Vouchers in one run (${Math.min(t.maxVouchersRedeemedRun,10)}/10).`:e==="glow-up"?`Have 5 Foil/Holographic/Polychrome Jokers at once (${Math.min(t.maxEditionJokers,5)}/5).`:e==="reroll-glut"?`Reroll Shops 100 times (${Math.min(t.totalRerolls,100)}/100).`:e==="omen-globe"?`Use 25 Tarot cards from Booster Packs (${Math.min(t.tarotPackUsed,25)}/25).`:e==="observatory"?`Use 25 Planet cards from Booster Packs (${Math.min(t.planetPackUsed,25)}/25).`:e==="nacho-tong"?`Play 2500 cards (${Math.min(t.totalCardsPlayed,2500)}/2500).`:e==="recyclomancy"?`Discard 2500 cards (${Math.min(t.totalCardsDiscarded,2500)}/2500).`:e==="tarot-tycoon"?`Buy 50 Tarot cards from Shops (${Math.min(t.tarotShopBought,50)}/50).`:e==="planet-tycoon"?`Buy 50 Planet cards from Shops (${Math.min(t.planetShopBought,50)}/50).`:e==="money-tree"?`Max interest for 10 consecutive rounds (${Math.min(t.maxInterestStreak,10)}/10).`:e==="antimatter"?`Redeem Blank 10 times (${Math.min(t.blankRedeemed,10)}/10).`:e==="illusion"?`Buy 20 playing cards from Shops (${Math.min(t.playingCardsShopBought,20)}/20).`:e==="petroglyph"?`Reach Ante 12 (${Math.min(t.bestAnte,12)}/12).`:e==="retcon"?`Discover 25 Blinds (${Math.min(Pf(t),25)}/25).`:e==="palette"?`Reduce Hand Size to 5 or less (best ${t.minHandSizeEver}).`:"Unlock its base Voucher and complete its condition.":"Base Voucher; available from the start."}var nc=1e3,mi=1001,ic=1002,Qt=1003,o_=1004,l_=1005,xn=1006,c_=1007,$c=1008,Xi=1009,d_=1010,u_=1011,Df=1012,h_=1013,Tr=1014,Uo=1015,Er=1016,Lf=1017,If=1018,Uf=1020,f_=35902,p_=35899,m_=1021,g_=1022,ca=1023,da=1026,Nf=1027,__=1028,Of=1029,Mo=1030,Ff=1031,Bf=1033,v_=33776,y_=33777,S_=33778,M_=33779,x_=35840,b_=35841,T_=35842,E_=35843,C_=36196,w_=37492,A_=37496,R_=37488,P_=37489,k_=37490,D_=37491,L_=37808,I_=37809,U_=37810,N_=37811,O_=37812,F_=37813,B_=37814,z_=37815,V_=37816,H_=37817,G_=37818,W_=37819,$_=37820,X_=37821,j_=36492,K_=36494,q_=36495,Y_=36283,J_=36284,Z_=36285,Q_=36286,xo=2300,rc=2301,tl=2302,Zd=2303,Qd=2400,eu=2401,tu=2402,ev=3200;var Zt="srgb",sc="srgb-linear",bo="linear",To="srgb",nl=7680;var tv=35044;var ys=2e3;function nv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function iv(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ua(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rv(){const t=ua("canvas");return t.style.display="block",t}var nu={},Ss=null;function iu(...t){const e="THREE."+t.shift();Ss?Ss("log",e,...t):console.log(e,...t)}function zf(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=zf(t);const e="THREE."+t.shift();if(Ss)Ss("warn",e,...t);else{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Le(...t){t=zf(t);const e="THREE."+t.shift();if(Ss)Ss("error",e,...t);else{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ac(...t){const e=t.join(" ");e in nu||(nu[e]=!0,ke(...t))}function sv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var av={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Ar=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,oc=180/Math.PI;function ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function ov(t,e){return(t%e+e)%e}function rl(t,e,n){return(1-n)*t+n*e}function Ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var je=class Vf{static{Vf.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],d=n[i+3],h=r[s+0],u=r[s+1],m=r[s+2],_=r[s+3];if(d!==_||o!==h||l!==u||c!==m){let f=o*h+l*u+c*m+d*_;f<0&&(h=-h,u=-u,m=-m,_=-_,f=-f);let g=1-a;if(f<.9995){const p=Math.acos(f),y=Math.sin(p);g=Math.sin(g*p)/y,a=Math.sin(a*p)/y,o=o*g+h*a,l=l*g+u*a,c=c*g+m*a,d=d*g+_*a}else{o=o*g+h*a,l=l*g+u*a,c=c*g+m*a,d=d*g+_*a;const p=1/Math.sqrt(o*o+l*l+c*c+d*d);o*=p,l*=p,c*=p,d*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],d=r[s],h=r[s+1],u=r[s+2],m=r[s+3];return t[e]=a*m+c*d+o*u-l*h,t[e+1]=o*m+c*h+l*d-a*u,t[e+2]=l*m+c*u+a*h-o*d,t[e+3]=c*m-a*d-o*h-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),d=a(r/2),h=o(n/2),u=o(i/2),m=o(r/2);switch(s){case"XYZ":this._x=h*c*d+l*u*m,this._y=l*u*d-h*c*m,this._z=l*c*m+h*u*d,this._w=l*c*d-h*u*m;break;case"YXZ":this._x=h*c*d+l*u*m,this._y=l*u*d-h*c*m,this._z=l*c*m-h*u*d,this._w=l*c*d+h*u*m;break;case"ZXY":this._x=h*c*d-l*u*m,this._y=l*u*d+h*c*m,this._z=l*c*m+h*u*d,this._w=l*c*d-h*u*m;break;case"ZYX":this._x=h*c*d-l*u*m,this._y=l*u*d+h*c*m,this._z=l*c*m-h*u*d,this._w=l*c*d+h*u*m;break;case"YZX":this._x=h*c*d+l*u*m,this._y=l*u*d+h*c*m,this._z=l*c*m-h*u*d,this._w=l*c*d-h*u*m;break;case"XZY":this._x=h*c*d-l*u*m,this._y=l*u*d-h*c*m,this._z=l*c*m+h*u*d,this._w=l*c*d+h*u*m;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10],h=n+a+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(c-o)*u,this._y=(r-l)*u,this._z=(s-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(c-o)/u,this._x=.25*u,this._y=(i+s)/u,this._z=(r+l)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-l)/u,this._x=(i+s)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(s-i)/u,this._x=(r+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-e;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class Hf{static{Hf.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ru.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ru.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new $,ru=new Rr,ze=class Gf{static{Gf.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],m=i[5],_=i[8],f=r[0],g=r[3],p=r[6],y=r[1],T=r[4],b=r[7],E=r[2],R=r[5],P=r[8];return s[0]=a*f+o*y+l*E,s[3]=a*g+o*T+l*R,s[6]=a*p+o*b+l*P,s[1]=c*f+d*y+h*E,s[4]=c*g+d*T+h*R,s[7]=c*p+d*b+h*P,s[2]=u*f+m*y+_*E,s[5]=u*g+m*T+_*R,s[8]=u*p+m*b+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,m=c*s-a*l,_=n*h+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return e[0]=h*f,e[1]=(r*c-d*i)*f,e[2]=(o*i-r*a)*f,e[3]=u*f,e[4]=(d*n-r*l)*f,e[5]=(r*s-o*n)*f,e[6]=m*f,e[7]=(i*l-c*n)*f,e[8]=(a*n-i*s)*f,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(al.makeScale(e,n)),this}rotate(e){return this.premultiply(al.makeRotation(-e)),this}translate(e,n){return this.premultiply(al.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},al=new ze,su=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lv(){const t={enabled:!0,workingColorSpace:sc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=cs(r.r),r.g=cs(r.g),r.b=cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ac("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ac("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[sc]:{primaries:e,whitePoint:i,transfer:bo,toXYZ:su,fromXYZ:au,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:To,toXYZ:su,fromXYZ:au,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),t}var Ye=lv();function _i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Nr,cv=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Nr===void 0&&(Nr=ua("canvas")),Nr.width=t.width,Nr.height=t.height;const i=Nr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Nr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ua("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=_i(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_i(e[n]/255)*255):e[n]=_i(e[n]);return{data:e,width:t.width,height:t.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dv=0,Xc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ma(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(ol(i[s].image)):r.push(ol(i[s]))}else r=ol(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var uv=0,ll=new $,Rn=class io extends Ar{constructor(e=io.DEFAULT_IMAGE,n=io.DEFAULT_MAPPING,i=mi,r=mi,s=xn,a=$c,o=ca,l=Xi,c=io.DEFAULT_ANISOTROPY,d=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=ma(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=300;Rn.DEFAULT_ANISOTROPY=1;var kt=class Wf{static{Wf.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],_=l[9],f=l[2],g=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-f)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+f)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,b=(m+1)/2,E=(p+1)/2,R=(d+u)/4,P=(h+f)/4,v=(_+g)/4;return T>b&&T>E?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=P/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=P/s,r=v/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-_)*(g-_)+(h-f)*(h-f)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(h-f)/y,this.z=(u-d)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hv=class extends Ar{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new kt(0,0,t,e),this.scissorTest=!1,this.viewport=new kt(0,0,t,e),this.textures=[];const i=new Rn({width:t,height:e,depth:n.depth}),r=n.count;for(let s=0;s<r;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Xc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends hv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$f=class extends Rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},fv=class extends Rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Et=class lc{static{lc.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,d,h,u,m,_,f,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,u,m,_,f,g)}set(e,n,i,r,s,a,o,l,c,d,h,u,m,_,f,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=m,p[7]=_,p[11]=f,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,m=a*h,_=o*d,f=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=u-f*c,n[9]=-o*l,n[2]=f-u*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*d,m=l*h,_=c*d,f=c*h;n[0]=u+f*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=f+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*d,m=l*h,_=c*d,f=c*h;n[0]=u-f*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=f-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*d,m=a*h,_=o*d,f=o*h;n[0]=l*d,n[4]=_*c-m,n[8]=u*c+f,n[1]=l*h,n[5]=f*c+u,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,_=o*l,f=o*c;n[0]=l*d,n[4]=f-u*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+_,n[10]=u-f*h}else if(e.order==="XZY"){const u=a*l,m=a*c,_=o*l,f=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+f,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=f*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ci.crossVectors(i,mn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ci.crossVectors(i,mn)),Ci.normalize(),Ea.crossVectors(mn,Ci),r[0]=Ci.x,r[4]=Ea.x,r[8]=mn.x,r[1]=Ci.y,r[5]=Ea.y,r[9]=mn.y,r[2]=Ci.z,r[6]=Ea.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],m=i[13],_=i[2],f=i[6],g=i[10],p=i[14],y=i[3],T=i[7],b=i[11],E=i[15],R=r[0],P=r[4],v=r[8],M=r[12],I=r[1],w=r[5],k=r[9],B=r[13],L=r[2],z=r[6],V=r[10],F=r[14],Y=r[3],ee=r[7],re=r[11],_e=r[15];return s[0]=a*R+o*I+l*L+c*Y,s[4]=a*P+o*w+l*z+c*ee,s[8]=a*v+o*k+l*V+c*re,s[12]=a*M+o*B+l*F+c*_e,s[1]=d*R+h*I+u*L+m*Y,s[5]=d*P+h*w+u*z+m*ee,s[9]=d*v+h*k+u*V+m*re,s[13]=d*M+h*B+u*F+m*_e,s[2]=_*R+f*I+g*L+p*Y,s[6]=_*P+f*w+g*z+p*ee,s[10]=_*v+f*k+g*V+p*re,s[14]=_*M+f*B+g*F+p*_e,s[3]=y*R+T*I+b*L+E*Y,s[7]=y*P+T*w+b*z+E*ee,s[11]=y*v+T*k+b*V+E*re,s[15]=y*M+T*B+b*F+E*_e,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],m=e[14],_=e[3],f=e[7],g=e[11],p=e[15],y=l*m-c*u,T=o*m-c*h,b=o*u-l*h,E=a*m-c*d,R=a*u-l*d,P=a*h-o*d;return n*(f*y-g*T+p*b)-i*(_*y-g*E+p*R)+r*(_*T-f*E+p*P)-s*(_*b-f*R+g*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],m=e[11],_=e[12],f=e[13],g=e[14],p=e[15],y=n*o-i*a,T=n*l-r*a,b=n*c-s*a,E=i*l-r*o,R=i*c-s*o,P=r*c-s*l,v=d*f-h*_,M=d*g-u*_,I=d*p-m*_,w=h*g-u*f,k=h*p-m*f,B=u*p-m*g,L=y*B-T*k+b*w+E*I-R*M+P*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(o*B-l*k+c*w)*z,e[1]=(r*k-i*B-s*w)*z,e[2]=(f*P-g*R+p*E)*z,e[3]=(u*R-h*P-m*E)*z,e[4]=(l*I-a*B-c*M)*z,e[5]=(n*B-r*I+s*M)*z,e[6]=(g*b-_*P-p*T)*z,e[7]=(d*P-u*b+m*T)*z,e[8]=(a*k-o*I+c*v)*z,e[9]=(i*I-n*k-s*v)*z,e[10]=(_*R-f*b+p*y)*z,e[11]=(h*b-d*R-m*y)*z,e[12]=(o*M-a*w-l*v)*z,e[13]=(n*w-i*M+r*v)*z,e[14]=(f*T-_*E-g*y)*z,e[15]=(d*E-h*T+u*y)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,u=s*c,m=s*d,_=s*h,f=a*d,g=a*h,p=o*h,y=l*c,T=l*d,b=l*h,E=i.x,R=i.y,P=i.z;return r[0]=(1-(f+p))*E,r[1]=(m+b)*E,r[2]=(_-T)*E,r[3]=0,r[4]=(m-b)*R,r[5]=(1-(u+p))*R,r[6]=(g+y)*R,r[7]=0,r[8]=(_+T)*P,r[9]=(g-y)*P,r[10]=(1-(u+f))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),l=Or.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zn.copy(this);const c=1/a,d=1/o,h=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ys,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let _,f;if(l)_=s/(a-s),f=a*s/(a-s);else if(o===2e3)_=-(a+s)/(a-s),f=-2*a*s/(a-s);else if(o===2001)_=-a/(a-s),f=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ys,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,f;if(l)_=1/(a-s),f=a/(a-s);else if(o===2e3)_=-2/(a-s),f=-(a+s)/(a-s);else if(o===2001)_=-1/(a-s),f=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Or=new $,zn=new Et,pv=new $(0,0,0),mv=new $(1,1,1),Ci=new $,Ea=new $,mn=new $,ou=new Et,lu=new Rr,Ms=class Xf{constructor(e=0,n=0,i=0,r=Xf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ms.DEFAULT_ORDER="XYZ";var jc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gv=0,cu=new $,Fr=new Rr,ai=new Et,Ca=new $,ks=new $,_v=new $,vv=new Rr,du=new $(1,0,0),uu=new $(0,1,0),hu=new $(0,0,1),fu={type:"added"},yv={type:"removed"},Br={type:"childadded",child:null},cl={type:"childremoved",child:null},An=class ro extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ro.DEFAULT_UP.clone();const e=new $,n=new Ms,i=new Rr,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=ro.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ro.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,n){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ca.copy(e):Ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ks,Ca,this.up):ai.lookAt(Ca,ks,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(ai),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fu),Br.child=e,this.dispatchEvent(Br),Br.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yv),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fu),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,_v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};An.DEFAULT_UP=new $(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sv={type:"move"},dl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),g=this._getHandJoint(l,_);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=c.position.distanceTo(d.position),u=.02,m=.005;l.inputState.pinching&&h>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function ul(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var We=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Ye.workingColorSpace){if(t=ov(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=ul(s,r,t+1/3),this.g=ul(s,r,t),this.b=ul(s,r,t-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(t,e=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ke("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);ke("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zt){const n=jf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ke("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zt){return Ye.workingToColorSpace(Xt.copy(this),t),Math.round(Je(Xt.r*255,0,255))*65536+Math.round(Je(Xt.g*255,0,255))*256+Math.round(Je(Xt.b*255,0,255))}getHexString(t=Zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.workingToColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const d=s-a;switch(l=c<=.5?d/(s+a):d/(2-s-a),s){case n:o=(i-r)/d+(i<r?6:0);break;case i:o=(r-n)/d+2;break;case r:o=(n-i)/d+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Ye.workingColorSpace){return Ye.workingToColorSpace(Xt.copy(this),e),t.r=Xt.r,t.g=Xt.g,t.b=Xt.b,t}getStyle(t=Zt){Ye.workingToColorSpace(Xt.copy(this),t);const e=Xt.r,n=Xt.g,i=Xt.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(wa);const n=rl(wi.h,wa.h,e),i=rl(wi.s,wa.s,e),r=rl(wi.l,wa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new We;We.NAMES=jf;var Mv=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vn=new $,oi=new $,hl=new $,li=new $,zr=new $,Vr=new $,pu=new $,fl=new $,pl=new $,ml=new $,gl=new kt,_l=new kt,vl=new kt,Ds=class Zr{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),oi.subVectors(i,n),hl.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(oi),l=Vn.dot(hl),c=oi.dot(oi),d=oi.dot(hl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-o*d)*u,_=(a*d-o*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,i),vl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gl,s.x),a.addScaledVector(_l,s.y),a.addScaledVector(vl,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),oi.subVectors(e,n),Vn.cross(oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Vn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;zr.subVectors(r,i),Vr.subVectors(s,i),fl.subVectors(e,i);const l=zr.dot(fl),c=Vr.dot(fl);if(l<=0&&c<=0)return n.copy(i);pl.subVectors(e,r);const d=zr.dot(pl),h=Vr.dot(pl);if(d>=0&&h<=d)return n.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(zr,a);ml.subVectors(e,s);const m=zr.dot(ml),_=Vr.dot(ml);if(_>=0&&m<=_)return n.copy(s);const f=m*c-l*_;if(f<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Vr,o);const g=d*_-m*h;if(g<=0&&h-d>=0&&m-_>=0)return pu.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(pu,o);const p=1/(g+f+u);return a=f*p,o=u*p,n.copy(i).addScaledVector(zr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ga=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Hn):Hn.fromBufferAttribute(r,s),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Ra.subVectors(this.max,Ls),Hr.subVectors(t.a,Ls),Gr.subVectors(t.b,Ls),Wr.subVectors(t.c,Ls),Ai.subVectors(Gr,Hr),Ri.subVectors(Wr,Gr),ar.subVectors(Hr,Wr);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-ar.z,ar.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,ar.z,0,-ar.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-ar.y,ar.x,0];return!yl(e,Hr,Gr,Wr,Ra)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,Hr,Gr,Wr,Ra))?!1:(Pa.crossVectors(Ai,Ri),e=[Pa.x,Pa.y,Pa.z],yl(e,Hr,Gr,Wr,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new $,new $,new $,new $,new $,new $,new $,new $],Hn=new $,Aa=new ga,Hr=new $,Gr=new $,Wr=new $,Ai=new $,Ri=new $,ar=new $,Ls=new $,Ra=new $,Pa=new $,or=new $;function yl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var At=new $,ka=new je,xv=0,En=class extends Ar{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tv,this.updateRanges=[],this.gpuType=Uo,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ka.fromBufferAttribute(this,e),ka.applyMatrix3(t),this.setXY(e,ka.x,ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)At.fromBufferAttribute(this,e),At.applyMatrix3(t),this.setXYZ(e,At.x,At.y,At.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)At.fromBufferAttribute(this,e),At.applyMatrix4(t),this.setXYZ(e,At.x,At.y,At.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)At.fromBufferAttribute(this,e),At.applyNormalMatrix(t),this.setXYZ(e,At.x,At.y,At.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)At.fromBufferAttribute(this,e),At.transformDirection(t),this.setXYZ(e,At.x,At.y,At.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},Kf=class extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}},qf=class extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}},vi=class extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}},bv=new ga,Is=new $,Sl=new $,No=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Sl)),this.expandByPoint(Is.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tv=0,Dn=new Et,Ml=new An,$r=new $,gn=new ga,Us=new ga,Nt=new $,bi=class Yf extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nv(e)?qf:Kf)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(gn.min,Us.min),gn.expandByPoint(Nt),Nt.addVectors(gn.max,Us.max),gn.expandByPoint(Nt)):(gn.expandByPoint(Us.min),gn.expandByPoint(Us.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Nt.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),Nt.add($r)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new $,l[v]=new $;const c=new $,d=new $,h=new $,u=new je,m=new je,_=new je,f=new $,g=new $;function p(v,M,I){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,I),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,I),d.sub(c),h.sub(c),m.sub(u),_.sub(u);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(f.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(w),g.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(w),o[v].add(f),o[M].add(f),o[I].add(f),l[v].add(g),l[M].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,M=y.length;v<M;++v){const I=y[v],w=I.start,k=I.count;for(let B=w,L=w+k;B<L;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new $,b=new $,E=new $,R=new $;function P(v){E.fromBufferAttribute(r,v),R.copy(E);const M=o[v];T.copy(M),T.sub(E.multiplyScalar(E.dot(M))).normalize(),b.crossVectors(R,M);const I=b.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,M=y.length;v<M;++v){const I=y[v],w=I.start,k=I.count;for(let B=w,L=w+k;B<L;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,d=new $,h=new $;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),f=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,f),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let m=0,_=0;for(let f=0,g=l.length;f<g;f++){o.isInterleavedBufferAttribute?m=l[f]*o.data.stride+o.offset:m=l[f]*d;for(let p=0;p<d;p++)u[_++]=c[m++]}return new En(u,d,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yf,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=e(u,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ev=0,Es=class extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nl,this.stencilZFail=nl,this.stencilZPass=nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ke(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){ke(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},di=new $,xl=new $,Da=new $,Pi=new $,bl=new $,La=new $,Tl=new $,Kc=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){xl.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(xl);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Da),a=Pi.dot(this.direction),o=-Pi.dot(Da),l=Pi.lengthSq(),c=Math.abs(1-s*s);let d,h,u,m;if(c>0)if(d=s*o-a,h=s*a-o,m=r*c,d>=0)if(h>=-m)if(h<=m){const _=1/c;d*=_,h*=_,u=d*(d+s*h+2*a)+h*(s*d+h+2*o)+l}else h=r,d=Math.max(0,-(s*h+a)),u=-d*d+h*(h+2*o)+l;else h=-r,d=Math.max(0,-(s*h+a)),u=-d*d+h*(h+2*o)+l;else h<=-m?(d=Math.max(0,-(-s*r+a)),h=d>0?-r:Math.min(Math.max(-r,-o),r),u=-d*d+h*(h+2*o)+l):h<=m?(d=0,h=Math.min(Math.max(-r,-o),r),u=h*(h+2*o)+l):(d=Math.max(0,-(s*r+a)),h=d>0?r:Math.min(Math.max(-r,-o),r),u=-d*d+h*(h+2*o)+l);else h=s>0?-r:r,d=Math.max(0,-(s*h+a)),u=-d*d+h*(h+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(xl).addScaledVector(Da,h),u}intersectSphere(t,e){di.subVectors(t.center,this.origin);const n=di.dot(this.direction),i=di.dot(di)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),c>=0?(r=(t.min.y-h.y)*c,s=(t.max.y-h.y)*c):(r=(t.max.y-h.y)*c,s=(t.min.y-h.y)*c),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),d>=0?(a=(t.min.z-h.z)*d,o=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,o=(t.min.z-h.z)*d),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,i,r){bl.subVectors(e,t),La.subVectors(n,t),Tl.crossVectors(bl,La);let s=this.direction.dot(Tl),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Pi.subVectors(this.origin,t);const o=a*this.direction.dot(La.crossVectors(Pi,La));if(o<0)return null;const l=a*this.direction.dot(bl.cross(Pi));if(l<0||o+l>s)return null;const c=-a*Pi.dot(Tl);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jf=class extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mu=new Et,lr=new Kc,Ia=new No,gu=new $,Ua=new $,Na=new $,Oa=new $,El=new $,Fa=new $,_u=new $,Ba=new $,en=class extends An{constructor(t=new bi,e=new Jf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Fa.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],d=r[o];c!==0&&(El.fromBufferAttribute(d,t),s?Fa.addScaledVector(El,c):Fa.addScaledVector(El.sub(e),c))}e.add(Fa)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),lr.copy(t.ray).recast(t.near),!(Ia.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Ia,gu)===null||lr.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),lr.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,lr)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,_=h.length;m<_;m++){const f=h[m],g=s[f.materialIndex],p=Math.max(f.start,u.start),y=Math.min(a.count,Math.min(f.start+f.count,u.start+u.count));for(let T=p,b=y;T<b;T+=3){const E=a.getX(T),R=a.getX(T+1),P=a.getX(T+2);i=za(this,g,t,n,l,c,d,E,R,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let f=m,g=_;f<g;f+=3){const p=a.getX(f),y=a.getX(f+1),T=a.getX(f+2);i=za(this,s,t,n,l,c,d,p,y,T),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let m=0,_=h.length;m<_;m++){const f=h[m],g=s[f.materialIndex],p=Math.max(f.start,u.start),y=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let T=p,b=y;T<b;T+=3){const E=T,R=T+1,P=T+2;i=za(this,g,t,n,l,c,d,E,R,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let f=m,g=_;f<g;f+=3){const p=f,y=f+1,T=f+2;i=za(this,s,t,n,l,c,d,p,y,T),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}};function Cv(t,e,n,i,r,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ba);return c<n.near||c>n.far?null:{distance:c,point:Ba.clone(),object:t}}function za(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ua),t.getVertexPosition(l,Na),t.getVertexPosition(c,Oa);const d=Cv(t,e,n,i,Ua,Na,Oa,_u);if(d){const h=new $;Ds.getBarycoord(_u,Ua,Na,Oa,h),r&&(d.uv=Ds.getInterpolatedAttribute(r,o,l,c,h,new je)),s&&(d.uv1=Ds.getInterpolatedAttribute(s,o,l,c,h,new je)),a&&(d.normal=Ds.getInterpolatedAttribute(a,o,l,c,h,new $),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new $,materialIndex:0};Ds.getNormal(Ua,Na,Oa,u.normal),d.face=u,d.barycoord=h}return d}var wv=class extends Rn{constructor(t=null,e=1,n=1,i,r,s,a,o,l=Qt,c=Qt,d,h){super(null,s,a,o,l,c,i,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cl=new $,Av=new $,Rv=new ze,Ui=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Cl.subVectors(n,e).cross(Av.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rv.getNormalMatrix(t),i=this.coplanarPoint(Cl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new No,Pv=new je(.5,.5),Va=new $,qc=class{constructor(t=new Ui,e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ys,n=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],u=r[7],m=r[8],_=r[9],f=r[10],g=r[11],p=r[12],y=r[13],T=r[14],b=r[15];if(i[0].setComponents(l-s,u-c,g-m,b-p).normalize(),i[1].setComponents(l+s,u+c,g+m,b+p).normalize(),i[2].setComponents(l+a,u+d,g+_,b+y).normalize(),i[3].setComponents(l-a,u-d,g-_,b-y).normalize(),n)i[4].setComponents(o,h,f,T).normalize(),i[5].setComponents(l-o,u-h,g-f,b-T).normalize();else if(i[4].setComponents(l-o,u-h,g-f,b-T).normalize(),e===2e3)i[5].setComponents(l+o,u+h,g+f,b+T).normalize();else if(e===2001)i[5].setComponents(o,h,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){return cr.center.set(0,0,0),cr.radius=.7071067811865476+Pv.distanceTo(t.center),cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Va.x=i.normal.x>0?t.max.x:t.min.x,Va.y=i.normal.y>0?t.max.y:t.min.y,Va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kv=class extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vu=new Et,cc=new Kc,Ha=new No,Ga=new $,Dv=class extends An{constructor(t=new bi,e=new kv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(i),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;vu.copy(i).invert(),cc.copy(t.ray).applyMatrix4(vu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(l!==null){const d=Math.max(0,s.start),h=Math.min(l.count,s.start+s.count);for(let u=d,m=h;u<m;u++){const _=l.getX(u);Ga.fromBufferAttribute(c,_),yu(Ga,_,o,i,t,e,this)}}else{const d=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let u=d,m=h;u<m;u++)Ga.fromBufferAttribute(c,u),yu(Ga,u,o,i,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function yu(t,e,n,i,r,s,a){const o=cc.distanceSqToPoint(t);if(o<n){const l=new $;cc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zf=class extends Rn{constructor(t=[],e=301,n,i,r,s,a,o,l,c){super(t,e,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qf=class extends Rn{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xs=class extends Rn{constructor(t,e,n=Tr,i,r,s,a=Qt,o=Qt,l,c=da,d=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:d},i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lv=class extends xs{constructor(t,e=Tr,n=301,i,r,s=Qt,a=Qt,o,l=da){const c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,i,r,s,a,o,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ep=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yc=class tp extends bi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(d,3)),this.setAttribute("uv",new vi(h,2));function _(f,g,p,y,T,b,E,R,P,v,M){const I=b/P,w=E/v,k=b/2,B=E/2,L=R/2,z=P+1,V=v+1;let F=0,Y=0;const ee=new $;for(let re=0;re<V;re++){const _e=re*w-B;for(let Me=0;Me<z;Me++)ee[f]=(Me*I-k)*y,ee[g]=_e*T,ee[p]=L,c.push(ee.x,ee.y,ee.z),ee[f]=0,ee[g]=0,ee[p]=R>0?1:-1,d.push(ee.x,ee.y,ee.z),h.push(Me/P),h.push(1-re/v),F+=1}for(let re=0;re<v;re++)for(let _e=0;_e<P;_e++){const Me=u+_e+z*re,et=u+_e+z*(re+1),Oe=u+(_e+1)+z*(re+1),j=u+(_e+1)+z*re;l.push(Me,et,j),l.push(et,Oe,j),Y+=6}o.addGroup(m,Y,M),m+=Y,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xr=class np extends bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=n/l,m=[],_=[],f=[],g=[];for(let p=0;p<d;p++){const y=p*u-a;for(let T=0;T<c;T++){const b=T*h-s;_.push(b,-y,0),f.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,b=y+c*(p+1),E=y+1+c*(p+1),R=y+1+c*p;m.push(T,b,R),m.push(b,E,R)}this.setIndex(m),this.setAttribute("position",new vi(_,3)),this.setAttribute("normal",new vi(f,3)),this.setAttribute("uv",new vi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.width,e.height,e.widthSegments,e.heightSegments)}};function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Su(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Su(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function Su(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Iv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ip(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Uv={clone:bs,merge:Jt},Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fv=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dc=class extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Bv=class extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ev,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zv=class extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wa(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var _a=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{e:{let s;t:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break t}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vv=class extends _a{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qd,endingEnd:Qd}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case eu:r=t,a=2*e-n;break;case tu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case eu:s=t,o=2*n-e;break;case tu:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}const l=(n-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,u=this._weightNext,m=(n-e)/(i-e),_=m*m,f=_*m,g=-h*f+2*h*_-h*m,p=(1+h)*f+(-1.5-2*h)*_+(-.5+h)*m+1,y=(-1-u)*f+(1.5+u)*_+.5*m,T=u*f-u*_;for(let b=0;b!==a;++b)r[b]=g*s[c+b]+p*s[l+b]+y*s[o+b]+T*s[d+b];return r}},Hv=class extends _a{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),d=1-c;for(let h=0;h!==a;++h)r[h]=s[l+h]*d+s[o+h]*c;return r}},Gv=class extends _a{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Wv=class extends _a{interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.settings||this.DefaultSettings_,d=c.inTangents,h=c.outTangents;if(!d||!h){const _=(n-e)/(i-e),f=1-_;for(let g=0;g!==a;++g)r[g]=s[l+g]*f+s[o+g]*_;return r}const u=a*2,m=t-1;for(let _=0;_!==a;++_){const f=s[l+_],g=s[o+_],p=m*u+_*2,y=h[p],T=h[p+1],b=t*u+_*2,E=d[b],R=d[b+1];let P=(n-e)/(i-e),v,M,I,w,k;for(let B=0;B<8;B++){v=P*P,M=v*P,I=1-P,w=I*I,k=w*I;const L=k*e+3*w*P*y+3*I*v*E+M*i-n;if(Math.abs(L)<1e-10)break;const z=3*w*(y-e)+6*I*P*(E-y)+3*v*(i-E);if(Math.abs(z)<1e-10)break;P=P-L/z,P=Math.max(0,Math.min(1,P))}r[_]=k*f+3*w*P*T+3*I*v*R+M*g}return r}},ri=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wa(e,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wa(t.times,Array),values:Wa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Wv(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case rc:e=this.InterpolantFactoryMethodLinear;break;case tl:e=this.InterpolantFactoryMethodSmooth;break;case Zd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return Zd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){Le("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&iv(i))for(let a=0,o=i.length;a!==o;++a){const l=i[a];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,r=t.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{const c=a*n,d=c-n,h=c+n;for(let u=0;u!==n;++u){const m=e[c+u];if(m!==e[d+u]||m!==e[h+u]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];const c=a*n,d=s*n;for(let h=0;h!==n;++h)e[d+h]=e[c+h]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=rc;var va=class extends ri{constructor(t,e,n){super(t,e,n)}};va.prototype.ValueTypeName="bool";va.prototype.ValueBufferType=Array;va.prototype.DefaultInterpolation=xo;va.prototype.InterpolantFactoryMethodLinear=void 0;va.prototype.InterpolantFactoryMethodSmooth=void 0;var $v=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}};$v.prototype.ValueTypeName="color";var Xv=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}};Xv.prototype.ValueTypeName="number";var jv=class extends _a{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let c=l+a;l!==c;l+=4)Rr.slerpFlat(r,0,s,l-a,s,l,o);return r}},rp=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new jv(this.times,this.values,this.getValueSize(),t)}};rp.prototype.ValueTypeName="quaternion";rp.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends ri{constructor(t,e,n){super(t,e,n)}};ya.prototype.ValueTypeName="string";ya.prototype.ValueBufferType=Array;ya.prototype.DefaultInterpolation=xo;ya.prototype.InterpolantFactoryMethodLinear=void 0;ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Kv=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}};Kv.prototype.ValueTypeName="vector";var wl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Mu(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Mu(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Mu(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var qv=class{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=l.length;d<h;d+=2){const u=l[d],m=l[d+1];if(u.global&&(u.lastIndex=0),u.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yv=new qv,Jc=class{constructor(t){this.manager=t!==void 0?t:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=new WeakMap,Jv=class extends Jc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=wl.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let d=Xr.get(s);d===void 0&&(d=[],Xr.set(s,d)),d.push({onLoad:e,onError:i})}return s}const a=ua("img");function o(){c(),e&&e(this);const d=Xr.get(this)||[];for(let h=0;h<d.length;h++){const u=d[h];u.onLoad&&u.onLoad(this)}Xr.delete(this),r.manager.itemEnd(t)}function l(d){c(),i&&i(d),wl.remove(`image:${t}`);const h=Xr.get(this)||[];for(let u=0;u<h.length;u++){const m=h[u];m.onError&&m.onError(d)}Xr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wl.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},Zv=class extends Jc{constructor(t){super(t)}load(t,e,n,i){const r=new Rn,s=new Jv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},sp=class extends An{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new We(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Al=new Et,xu=new $,bu=new $,Qv=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$a=new $,Xa=new Rr,qn=new $,ap=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ys,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($a,Xa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Xa,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose($a,Xa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Xa,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new $,Tu=new je,Eu=new je,In=class extends ap{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Tu,Eu),e.subVectors(Eu,Tu)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(il*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zc=class extends ap{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},e0=class extends Qv{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cu=class extends sp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new e0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},t0=class extends sp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},jr=-90,Kr=1,n0=class extends An{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(jr,Kr,t,e);i.layers=this.layers,this.add(i);const r=new In(jr,Kr,t,e);r.layers=this.layers,this.add(r);const s=new In(jr,Kr,t,e);s.layers=this.layers,this.add(s);const a=new In(jr,Kr,t,e);a.layers=this.layers,this.add(a);const o=new In(jr,Kr,t,e);o.layers=this.layers,this.add(o);const l=new In(jr,Kr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(d,h,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},i0=class extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Qc="\\[\\]\\.:\\/",r0=new RegExp("["+Qc+"]","g"),ed="[^"+Qc+"]",s0="[^"+Qc.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",ed),o0=/(WCOD+)?/.source.replace("WCOD",s0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),c0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),d0=new RegExp("^"+a0+o0+l0+c0+"$"),u0=["material","materials","bones","map"],h0=class{constructor(t,e,n){const i=n||St.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},St=class Qr{constructor(e,n,i){this.path=n,this.parsedPath=i||Qr.parseTrackName(n),this.node=Qr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new Qr.Composite(e,n,i):new Qr(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(e){const n=d0.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);u0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=Qr.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=n.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=h0;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wu=new Et,f0=class{constructor(t,e,n=0,i=1/0){this.ray=new Kc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(Au),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)uc(t[i],this,n,e);return n.sort(Au),n}};function Au(t,e){return t.distance-e.distance}function uc(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)uc(s[a],e,n,!0)}}var p0=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ke("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},yx=class op{static{op.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function Ru(t,e,n,i){const r=m0(i);switch(n){case m_:return t*e;case __:return t*e/r.components*r.byteLength;case Of:return t*e/r.components*r.byteLength;case Mo:return t*e*2/r.components*r.byteLength;case Ff:return t*e*2/r.components*r.byteLength;case g_:return t*e*3/r.components*r.byteLength;case ca:return t*e*4/r.components*r.byteLength;case Bf:return t*e*4/r.components*r.byteLength;case v_:case y_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case S_:case M_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case b_:case E_:return Math.max(t,16)*Math.max(e,8)/4;case x_:case T_:return Math.max(t,8)*Math.max(e,8)/2;case C_:case w_:case R_:case P_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case A_:case k_:case D_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case L_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case I_:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case U_:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case N_:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case O_:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case F_:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case B_:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case z_:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case V_:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case H_:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case G_:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case W_:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $_:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case X_:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case j_:case K_:case q_:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Y_:case J_:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Z_:case Q_:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function m0(t){switch(t){case Xi:case d_:return{byteLength:1,components:1};case Df:case u_:case Er:return{byteLength:2,components:1};case Lf:case If:return{byteLength:2,components:4};case Tr:case h_:case Uo:return{byteLength:4,components:1};case f_:case p_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function lp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function g0(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<h.length;m++){const _=h[u],f=h[m];f.start<=_.start+_.count+1?_.count=Math.max(_.count,f.start+f.count-_.start):(++u,h[u]=f)}h.length=u+1;for(let m=0,_=h.length;m<_;m++){const f=h[m];t.bufferSubData(c,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ve={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ue={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qn={basic:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Jt([ue.common,ue.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Jt([ue.lights,ue.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Qn.physical={uniforms:Jt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var ja={r:0,b:0,g:0},_0=new Et,cp=new ze;cp.set(-1,0,0,0,1,0,0,0,1);function v0(t,e,n,i,r,s){const a=new We(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function _(y){let T=!1;const b=m(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),T=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function f(y,T){const b=m(T);b&&(b.isCubeTexture||b.mapping===306)?(c===void 0&&(c=new en(new Yc(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:bs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cp),c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==To,(d!==b||h!==b.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,u=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new en(new xr(2,2),new un({name:"BackgroundMaterial",uniforms:bs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==To,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,u=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(ja,ip(t)),n.buffers.color.setClear(ja.r,ja.g,ja.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:_,addToRenderList:f,dispose:p}}function y0(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(w,k,B,L,z){let V=!1;const F=h(w,L,B,k);s!==F&&(s=F,c(s.object)),V=m(w,L,B,z),V&&_(w,L,B,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(w,k,B,L),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function d(w){return t.deleteVertexArray(w)}function h(w,k,B,L){const z=L.wireframe===!0;let V=i[k.id];V===void 0&&(V={},i[k.id]=V);const F=w.isInstancedMesh===!0?w.id:0;let Y=V[F];Y===void 0&&(Y={},V[F]=Y);let ee=Y[B.id];ee===void 0&&(ee={},Y[B.id]=ee);let re=ee[z];return re===void 0&&(re=u(l()),ee[z]=re),re}function u(w){const k=[],B=[],L=[];for(let z=0;z<n;z++)k[z]=0,B[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:L,object:w,attributes:{},index:null}}function m(w,k,B,L){const z=s.attributes,V=k.attributes;let F=0;const Y=B.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const re=z[ee];let _e=V[ee];if(_e===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;F++}return s.attributesNum!==F||s.index!==L}function _(w,k,B,L){const z={},V=k.attributes;let F=0;const Y=B.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let re=V[ee];re===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(re=w.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),z[ee]=_e,F++}s.attributes=z,s.attributesNum=F,s.index=L}function f(){const w=s.newAttributes;for(let k=0,B=w.length;k<B;k++)w[k]=0}function g(w){p(w,0)}function p(w,k){const B=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;B[w]=1,L[w]===0&&(t.enableVertexAttribArray(w),L[w]=1),z[w]!==k&&(t.vertexAttribDivisor(w,k),z[w]=k)}function y(){const w=s.newAttributes,k=s.enabledAttributes;for(let B=0,L=k.length;B<L;B++)k[B]!==w[B]&&(t.disableVertexAttribArray(B),k[B]=0)}function T(w,k,B,L,z,V,F){F===!0?t.vertexAttribIPointer(w,k,B,z,V):t.vertexAttribPointer(w,k,B,L,z,V)}function b(w,k,B,L){f();const z=L.attributes,V=B.getAttributes(),F=k.defaultAttributeValues;for(const Y in V){const ee=V[Y];if(ee.location>=0){let re=z[Y];if(re===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),re!==void 0){const _e=re.normalized,Me=re.itemSize,et=e.get(re);if(et===void 0)continue;const Oe=et.buffer,j=et.type,le=et.bytesPerElement,xe=j===t.INT||j===t.UNSIGNED_INT||re.gpuType===1013;if(re.isInterleavedBufferAttribute){const pe=re.data,Pe=pe.stride,Fe=re.offset;if(pe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ee.locationSize;Ie++)p(ee.location+Ie,pe.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ie=0;Ie<ee.locationSize;Ie++)g(ee.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Ie=0;Ie<ee.locationSize;Ie++)T(ee.location+Ie,Me/ee.locationSize,j,_e,Pe*le,(Fe+Me/ee.locationSize*Ie)*le,xe)}else{if(re.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)p(ee.location+pe,re.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let pe=0;pe<ee.locationSize;pe++)g(ee.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let pe=0;pe<ee.locationSize;pe++)T(ee.location+pe,Me/ee.locationSize,j,_e,Me*le,Me/ee.locationSize*pe*le,xe)}}else if(F!==void 0){const _e=F[Y];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(ee.location,_e);break;case 3:t.vertexAttrib3fv(ee.location,_e);break;case 4:t.vertexAttrib4fv(ee.location,_e);break;default:t.vertexAttrib1fv(ee.location,_e)}}}}y()}function E(){M();for(const w in i){const k=i[w];for(const B in k){const L=k[B];for(const z in L){const V=L[z];for(const F in V)d(V[F].object),delete V[F];delete L[z]}}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const k=i[w.id];for(const B in k){const L=k[B];for(const z in L){const V=L[z];for(const F in V)d(V[F].object),delete V[F];delete L[z]}}delete i[w.id]}function P(w){for(const k in i){const B=i[k];for(const L in B){const z=B[L];if(z[w.id]===void 0)continue;const V=z[w.id];for(const F in V)d(V[F].object),delete V[F];delete z[w.id]}}}function v(w){for(const k in i){const B=i[k],L=w.isInstancedMesh===!0?w.id:0,z=B[L];if(z!==void 0){for(const V in z){const F=z[V];for(const Y in F)d(F[Y].object),delete F[Y];delete z[V]}delete B[L],Object.keys(B).length===0&&delete i[k]}}}function M(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:f,enableAttribute:g,disableUnusedAttributes:y}}function S0(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let u=0;u<d;u++)h+=c[u];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function M0(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==1023&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==1009&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!v)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(ke("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:E,samples:R}}function x0(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ui,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,m){const _=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,p=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?d(null):c();else{const y=s?0:i,T=y*4;let b=p.clippingState||null;l.value=b,b=d(_,u,T,m);for(let E=0;E!==T;++E)b[E]=n[E];p.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,m,_){const f=h!==null?h.length:0;let g=null;if(f!==0){if(g=l.value,_!==!0||g===null){const p=m+f*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,b=m;T!==f;++T,b+=4)a.copy(h[T]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}}var Gi=4,Pu=[.125,.215,.35,.446,.526,.582],hr=20,b0=256,Ns=new Zc,ku=new We,Rl=null,Pl=0,kl=0,Dl=!1,T0=new $,Du=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:s=256,position:a=T0}=r;Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rl,Pl,kl),this._renderer.xr.enabled=Dl,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Er,format:ca,colorSpace:sc,depthBuffer:!1},i=Lu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E0(r)),this._blurMaterial=w0(r,t,e),this._ggxMaterial=C0(r,t,e)}return i}_compileMaterial(t){const e=new en(new bi,t);this._renderer.compile(e,Ns)}_sceneToCubeUV(t,e,n,i,r){const s=new In(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,d=l.toneMapping;l.getClearColor(ku),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Yc,new Jf({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const h=this._backgroundBox,u=h.material;let m=!1;const _=t.background;_?_.isColor&&(u.color.copy(_),t.background=null,m=!0):(u.color.copy(ku),m=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(s.up.set(0,a[f],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[f],r.y,r.z)):g===1?(s.up.set(0,0,a[f]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[f],r.z)):(s.up.set(0,a[f],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[f]));const p=this._cubeSize;qr(i,g*p,f>2?p:0,p,p),l.setRenderTarget(i),m&&l.render(h,s),l.render(t,s)}l.toneMapping=d,l.autoClear=c,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;qr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(s,Ns)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:h}=this,u=this._sizeLods[n],m=3*u*(n>h-Gi?n-h+Gi:0),_=4*(this._cubeSize-u);o.envMap.value=t.texture,o.roughness.value=d,o.mipInt.value=h-e,qr(r,m,_,3*u,2*u),i.setRenderTarget(r),i.render(a,Ns),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=h-n,qr(t,m,_,3*u,2*u),i.setRenderTarget(t),i.render(a,Ns)}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[i];d.material=l;const h=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*hr-1),_=r/m,f=isFinite(r)?1+Math.floor(c*_):hr;f>hr&&ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${hr}`);const g=[];let p=0;for(let b=0;b<hr;++b){const E=b/_,R=Math.exp(-E*E/2);g.push(R),b===0?p+=R:b<f&&(p+=2*R)}for(let b=0;b<g.length;b++)g[b]=g[b]/p;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=g,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const T=this._sizeLods[i];qr(e,3*T*(i>y-Gi?i-y+Gi:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(e),o.render(d,Ns)}};function E0(t){const e=[],n=[],i=[];let r=t;const s=t-Gi+1+Pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Gi?l=Pu[a-t+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,f=3,g=2,p=1,y=new Float32Array(f*_*m),T=new Float32Array(g*_*m),b=new Float32Array(p*_*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,v=R>2?0:-1,M=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];y.set(M,f*_*R),T.set(u,g*_*R);const I=[R,R,R,R,R,R];b.set(I,p*_*R)}const E=new bi;E.setAttribute("position",new En(y,f)),E.setAttribute("uv",new En(T,g)),E.setAttribute("faceIndex",new En(b,p)),i.push(new en(E,null)),r>Gi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Lu(t,e,n){const i=new ni(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function C0(t,e,n){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function w0(t,e,n){const i=new Float32Array(hr),r=new $(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Iu(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Uu(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}var dp=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yc(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new en(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=xn),new n0(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}};function A0(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===303||m===304)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const f=new dp(_.height);return f.fromEquirectangularTexture(t,u),e.set(u,f),u.addEventListener("dispose",c),o(f.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,_=m===303||m===304,f=m===301||m===302;if(_||f){let g=n.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Du(t)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return _&&y&&y.height>0||f&&y&&l(y)?(i===null&&(i=new Du(t)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,m){return m===303?u.mapping=301:m===304&&(u.mapping=302),u}function l(u){let m=0;const _=6;for(let f=0;f<_;f++)u[f]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function R0(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ac("WebGLRenderer: "+i+" extension not supported."),r}}}function P0(t,e,n,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,_=h.attributes.position;let f=0;if(_===void 0)return;if(m!==null){const y=m.array;f=m.version;for(let T=0,b=y.length;T<b;T+=3){const E=y[T+0],R=y[T+1],P=y[T+2];u.push(E,R,R,P,P,E)}}else{const y=_.array;f=_.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const E=T+0,R=T+1,P=T+2;u.push(E,R,R,P,P,E)}}const g=new(_.count>=65535?qf:Kf)(u,1);g.version=f;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function d(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function k0(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*a),n.update(u,i,1)}function c(h,u,m){m!==0&&(t.drawElementsInstanced(i,u,s,h*a,m),n.update(u,i,m))}function d(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,m);let _=0;for(let f=0;f<m;f++)_+=u[f];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function D0(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function L0(t,e,n){const i=new WeakMap,r=new kt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),f===!0&&(T=3);let b=o.attributes.position.count*T,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*E*4*h),P=new $f(R,b,E,h);P.type=Uo,P.needsUpdate=!0;const v=T*4;for(let I=0;I<h;I++){const w=g[I],k=p[I],B=y[I],L=b*E*4*I;for(let z=0;z<w.count;z++){const V=z*v;m===!0&&(r.fromBufferAttribute(w,z),R[L+V+0]=r.x,R[L+V+1]=r.y,R[L+V+2]=r.z,R[L+V+3]=0),_===!0&&(r.fromBufferAttribute(k,z),R[L+V+4]=r.x,R[L+V+5]=r.y,R[L+V+6]=r.z,R[L+V+7]=0),f===!0&&(r.fromBufferAttribute(B,z),R[L+V+8]=r.x,R[L+V+9]=r.y,R[L+V+10]=r.z,R[L+V+11]=B.itemSize===4?r.w:1)}}u={count:h,texture:P,size:new je(b,E)},i.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let f=0;f<c.length;f++)m+=c[f];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function I0(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}var U0={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function N0(t,e,n,i,r){const s=new ni(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new xs(e,n):void 0}),a=new ni(e,n,{type:Er,depthBuffer:!1,stencilBuffer:!1}),o=new bi;o.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new vi([0,2,0,0,2,0],2));const l=new Fv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new en(o,l),d=new Zc(-1,1,1,-1,0,1);let h=null,u=null,m=!1,_,f=null,g=[],p=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let b=0;b<g.length;b++){const E=g[b];E.setSize&&E.setSize(y,T)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;const T=s.width,b=s.height;for(let E=0;E<g.length;E++){const R=g[E];R.setSize&&R.setSize(T,b)}},this.begin=function(y,T){if(m||y.toneMapping===0&&g.length===0)return!1;if(f=T,T!==null){const b=T.width,E=T.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return p===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=0,!0},this.hasRenderPass=function(){return p},this.end=function(y,T){y.toneMapping=_,m=!0;let b=s,E=a;for(let R=0;R<g.length;R++){const P=g[R];if(P.enabled!==!1&&(P.render(y,E,b,T),P.needsSwap!==!1)){const v=b;b=E,E=v}}if(h!==y.outputColorSpace||u!==y.toneMapping){h=y.outputColorSpace,u=y.toneMapping,l.defines={},Ye.getTransfer(h)==="srgb"&&(l.defines.SRGB_TRANSFER="");const R=U0[u];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(c,d),f=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var up=new Rn,hc=new xs(1,1),hp=new $f,fp=new fv,pp=new Zf,Nu=[],Ou=[],Fu=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function Cs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nu[r];if(s===void 0&&(s=new Float32Array(r),Nu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fo(t,e){let n=Ou[e];n===void 0&&(n=new Int32Array(e),Ou[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function O0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function F0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function B0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function z0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function V0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;zu.set(i),t.uniformMatrix2fv(this.addr,!1,zu),It(n,i)}}function H0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;Bu.set(i),t.uniformMatrix3fv(this.addr,!1,Bu),It(n,i)}}function G0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;Fu.set(i),t.uniformMatrix4fv(this.addr,!1,Fu),It(n,i)}}function W0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function X0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function j0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function K0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function q0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function Y0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function J0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Z0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(hc.compareFunction=n.isReversedDepthBuffer()?518:515,s=hc):s=up,n.setTexture2D(e||s,r)}function Q0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fp,r)}function ey(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pp,r)}function ty(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hp,r)}function ny(t){switch(t){case 5126:return O0;case 35664:return F0;case 35665:return B0;case 35666:return z0;case 35674:return V0;case 35675:return H0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return $0;case 35668:case 35672:return X0;case 35669:case 35673:return j0;case 5125:return K0;case 36294:return q0;case 36295:return Y0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(t,e){t.uniform1fv(this.addr,e)}function ry(t,e){const n=Cs(e,this.size,2);t.uniform2fv(this.addr,n)}function sy(t,e){const n=Cs(e,this.size,3);t.uniform3fv(this.addr,n)}function ay(t,e){const n=Cs(e,this.size,4);t.uniform4fv(this.addr,n)}function oy(t,e){const n=Cs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ly(t,e){const n=Cs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cy(t,e){const n=Cs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dy(t,e){t.uniform1iv(this.addr,e)}function uy(t,e){t.uniform2iv(this.addr,e)}function hy(t,e){t.uniform3iv(this.addr,e)}function fy(t,e){t.uniform4iv(this.addr,e)}function py(t,e){t.uniform1uiv(this.addr,e)}function my(t,e){t.uniform2uiv(this.addr,e)}function gy(t,e){t.uniform3uiv(this.addr,e)}function _y(t,e){t.uniform4uiv(this.addr,e)}function vy(t,e,n){const i=this.cache,r=e.length,s=Fo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=hc:a=up;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function yy(t,e,n){const i=this.cache,r=e.length,s=Fo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||fp,s[a])}function Sy(t,e,n){const i=this.cache,r=e.length,s=Fo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||pp,s[a])}function My(t,e,n){const i=this.cache,r=e.length,s=Fo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||hp,s[a])}function xy(t){switch(t){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return ay;case 35674:return oy;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return dy;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return My}}var by=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ny(e.type)}},Ty=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xy(e.type)}},Ey=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Vu(t,e){t.seq.push(e),t.map[e.id]=e}function Cy(t,e,n){const i=t.name,r=i.length;for(Ll.lastIndex=0;;){const s=Ll.exec(i),a=Ll.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vu(n,c===void 0?new by(o,t,e):new Ty(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Ey(o),Vu(n,d)),n=d}}}var so=class{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s);Cy(a,t.getUniformLocation(e,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}};function Hu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var wy=37297,Ay=0;function Ry(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Gu=new ze;function Py(t){Ye._getMatrix(Gu,Ye.workingColorSpace,t);const e=`mat3( ${Gu.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case bo:return[e,"LinearTransferOETF"];case To:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Ry(t.getShaderSource(e),a)}else return r}function ky(t,e){const n=Py(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Dy={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Ly(t,e){const n=Dy[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ka=new $;function Iy(){return Ye.getLuminanceCoefficients(Ka),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ka.x.toFixed(4)}, ${Ka.y.toFixed(4)}, ${Ka.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Ny(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Oy(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function $s(t){return t!==""}function $u(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(t){return t.replace(Fy,zy)}var By=new Map;function zy(t,e){let n=Ve[e];if(n===void 0){const i=By.get(e);if(i!==void 0)n=Ve[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fc(n)}var Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(t){return t.replace(Vy,Hy)}function Hy(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ku(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var Gy={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Wy(t){return Gy[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $y={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Xy(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":$y[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var jy={302:"ENVMAP_MODE_REFRACTION"};function Ky(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jy[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qy={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Yy(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":qy[t.combine]||"ENVMAP_BLENDING_NONE"}function Jy(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Zy(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Wy(n),c=Xy(n),d=Ky(n),h=Yy(n),u=Jy(n),m=Uy(n),_=Ny(s),f=r.createProgram();let g,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($s).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($s).join(`
`),p.length>0&&(p+=`
`)):(g=[Ku(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[Ku(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Ve.tonemapping_pars_fragment:"",n.toneMapping!==0?Ly("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ky("linearToOutputTexel",n.outputColorSpace),Iy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),a=fc(a),a=$u(a,n),a=Xu(a,n),o=fc(o),o=$u(o,n),o=Xu(o,n),a=ju(a),o=ju(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+g+a,b=y+p+o,E=Hu(r,r.VERTEX_SHADER,T),R=Hu(r,r.FRAGMENT_SHADER,b);r.attachShader(f,E),r.attachShader(f,R),n.index0AttributeName!==void 0?r.bindAttribLocation(f,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function P(w){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(f)||"",B=r.getShaderInfoLog(E)||"",L=r.getShaderInfoLog(R)||"",z=k.trim(),V=B.trim(),F=L.trim();let Y=!0,ee=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,f,E,R);else{const re=Wu(r,E,"vertex"),_e=Wu(r,R,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+re+`
`+_e)}else z!==""?ke("WebGLProgram: Program Info Log:",z):(V===""||F==="")&&(ee=!1);ee&&(w.diagnostics={runnable:Y,programLog:z,vertexShader:{log:V,prefix:g},fragmentShader:{log:F,prefix:p}})}r.deleteShader(E),r.deleteShader(R),v=new so(r,f),M=Oy(r,f)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(f,wy)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ay++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=R,this}var Qy=0,eS=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tS(t),e.set(t,n)),n}},tS=class{constructor(t){this.id=Qy++,this.code=t,this.usedTimes=0}};function nS(t){return t===1030||t===37490||t===36285}function iS(t,e,n,i,r,s){const a=new jc,o=new eS,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,M,I,w,k,B){const L=w.fog,z=k.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||V,F),ee=Y&&Y.mapping===306?Y.image.height:null,re=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&ke("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const _e=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=_e!==void 0?_e.length:0;let et=0;z.morphAttributes.position!==void 0&&(et=1),z.morphAttributes.normal!==void 0&&(et=2),z.morphAttributes.color!==void 0&&(et=3);let Oe,j,le,xe;if(re){const Ue=Qn[re];Oe=Ue.vertexShader,j=Ue.fragmentShader}else Oe=v.vertexShader,j=v.fragmentShader,o.update(v),le=o.getVertexShaderID(v),xe=o.getFragmentShaderID(v);const pe=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Fe=k.isInstancedMesh===!0,Ie=k.isBatchedMesh===!0,rt=!!v.map,Xe=!!v.matcap,Dt=!!Y,xt=!!v.aoMap,pn=!!v.lightMap,Gt=!!v.bumpMap,wt=!!v.normalMap,U=!!v.displacementMap,Yt=!!v.emissiveMap,Ke=!!v.metalnessMap,tt=!!v.roughnessMap,he=v.anisotropy>0,pt=v.clearcoat>0,we=v.dispersion>0,C=v.iridescence>0,S=v.sheen>0,H=v.transmission>0,q=he&&!!v.anisotropyMap,Z=pt&&!!v.clearcoatMap,ne=pt&&!!v.clearcoatNormalMap,ce=pt&&!!v.clearcoatRoughnessMap,N=C&&!!v.iridescenceMap,ae=C&&!!v.iridescenceThicknessMap,de=S&&!!v.sheenColorMap,me=S&&!!v.sheenRoughnessMap,J=!!v.specularMap,De=!!v.specularColorMap,Be=!!v.specularIntensityMap,qe=H&&!!v.transmissionMap,He=H&&!!v.thicknessMap,D=!!v.gradientMap,K=!!v.alphaMap,te=v.alphaTest>0,oe=!!v.alphaHash,be=!!v.extensions;let Q=0;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Q=t.toneMapping);const Te={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Oe,fragmentShader:j,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ie,batchingColor:Ie&&k._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,instancingMorph:Fe&&k.morphTexture!==null,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:rt,matcap:Xe,envMap:Dt,envMapMode:Dt&&Y.mapping,envMapCubeUVHeight:ee,aoMap:xt,lightMap:pn,bumpMap:Gt,normalMap:wt,displacementMap:U,emissiveMap:Yt,normalMapObjectSpace:wt&&v.normalMapType===1,normalMapTangentSpace:wt&&v.normalMapType===0,packedNormalMap:wt&&v.normalMapType===0&&nS(v.normalMap.format),metalnessMap:Ke,roughnessMap:tt,anisotropy:he,anisotropyMap:q,clearcoat:pt,clearcoatMap:Z,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,dispersion:we,iridescence:C,iridescenceMap:N,iridescenceThicknessMap:ae,sheen:S,sheenColorMap:de,sheenRoughnessMap:me,specularMap:J,specularColorMap:De,specularIntensityMap:Be,transmission:H,transmissionMap:qe,thicknessMap:He,gradientMap:D,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:te,alphaHash:oe,combine:v.combine,mapUv:rt&&_(v.map.channel),aoMapUv:xt&&_(v.aoMap.channel),lightMapUv:pn&&_(v.lightMap.channel),bumpMapUv:Gt&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:U&&_(v.displacementMap.channel),emissiveMapUv:Yt&&_(v.emissiveMap.channel),metalnessMapUv:Ke&&_(v.metalnessMap.channel),roughnessMapUv:tt&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:Z&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:J&&_(v.specularMap.channel),specularColorMapUv:De&&_(v.specularColorMap.channel),specularIntensityMapUv:Be&&_(v.specularIntensityMap.channel),transmissionMapUv:qe&&_(v.transmissionMap.channel),thicknessMapUv:He&&_(v.thicknessMap.channel),alphaMapUv:K&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(wt||he),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(rt||K),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&wt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Pe,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:et,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:rt&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Yt&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)M.push(I),M.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(M,v),y(M,v),M.push(t.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function T(v){const M=m[v.type];let I;if(M){const w=Qn[M];I=Uv.clone(w.uniforms)}else I=v.uniforms;return I}function b(v,M){let I=d.get(M);return I!==void 0?++I.usedTimes:(I=new Zy(t,M,v,r),c.push(I),d.set(M,I)),I}function E(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function P(){o.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:T,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:P}}function rS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function qu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yu(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,f,g,p){let y=t[e];return y===void 0?(y={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:f,renderOrder:u.renderOrder,z:g,group:p},t[e]=y):(y.id=u.id,y.object=u,y.geometry=m,y.material=_,y.materialVariant=a(u),y.groupOrder=f,y.renderOrder=u.renderOrder,y.z=g,y.group=p),e++,y}function l(u,m,_,f,g,p){const y=o(u,m,_,f,g,p);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function c(u,m,_,f,g,p){const y=o(u,m,_,f,g,p);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):n.unshift(y)}function d(u,m){n.length>1&&n.sort(u||sS),i.length>1&&i.sort(m||qu),r.length>1&&r.sort(m||qu)}function h(){for(let u=e,m=t.length;u<m;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function aS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Yu,t.set(i,[a])):r>=s.length?(a=new Yu,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function oS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new We};break;case"SpotLight":n={position:new $,direction:new $,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function lS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var cS=0;function dS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uS(t){const e=new oS,n=lS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Et,a=new Et;function o(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,_=0,f=0,g=0,p=0,y=0,T=0,b=0,E=0,R=0,P=0;c.sort(dS);for(let M=0,I=c.length;M<I;M++){const w=c[M],k=w.color,B=w.intensity,L=w.distance;let z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===1030?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=k.r*B,h+=k.g*B,u+=k.b*B;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],B);P++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,Y=n.get(w);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=w.shadow.matrix,y++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(k).multiplyScalar(B),V.distance=L,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[f]=V;const F=w.shadow;if(w.map&&(i.spotLightMap[E]=w.map,E++,F.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[f]=F.matrix,w.castShadow){const Y=n.get(w);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,i.spotShadow[f]=Y,i.spotShadowMap[f]=z,b++}f++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(k).multiplyScalar(B),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const F=w.shadow,Y=n.get(w);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,Y.shadowCameraNear=F.camera.near,Y.shadowCameraFar=F.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=w.shadow.matrix,T++}i.point[_]=V,_++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(B),V.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[p]=V,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==f||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==b||v.numSpotMaps!==E||v.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=f,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,v.directionalLength=m,v.pointLength=_,v.spotLength=f,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=b,v.numSpotMaps=E,v.numLightProbes=P,i.version=cS++)}function l(c,d){let h=0,u=0,m=0,_=0,f=0;const g=d.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const T=c[p];if(T.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),h++}else if(T.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),u++}else if(T.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(g),f++}}}return{setup:o,setupView:l,state:i}}function Ju(t){const e=new uS(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function hS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ju(t),e.set(r,[o])):s>=a.length?(o=new Ju(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var fS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mS=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],gS=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Zu=new Et,Os=new $,Il=new $;function _S(t,e,n){let i=new qc;const r=new je,s=new je,a=new kt,o=new Bv,l=new zv,c={},d=n.maxTextureSize,h={0:1,1:0,2:2},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:fS,fragmentShader:pS}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new en(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(R,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===2&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const M=t.getRenderTarget(),I=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),k=t.state;k.setBlending(0),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==this.type;B&&P.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=R.length;L<z;L++){const V=R[L],F=V.shadow;if(F===void 0){ke("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Y=F.getFrameExtents();r.multiply(Y),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,F.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ee,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===3){if(V.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ni(r.x,r.y,{format:Mo,type:Er,minFilter:xn,magFilter:xn,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new xs(r.x,r.y,Uo),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=da,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt}else V.isPointLight?(F.map=new dp(r.x),F.map.depthTexture=new Lv(r.x,Tr)):(F.map=new ni(r.x,r.y),F.map.depthTexture=new xs(r.x,r.y,Tr)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=da,this.type===1?(F.map.depthTexture.compareFunction=ee?518:515,F.map.depthTexture.minFilter=xn,F.map.depthTexture.magFilter=xn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt);F.camera.updateProjectionMatrix()}const re=F.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<re;_e++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,_e),t.clear();else{_e===0&&(t.setRenderTarget(F.map),t.clear());const Me=F.getViewport(_e);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),k.viewport(a)}if(V.isPointLight){const Me=F.camera,et=F.matrix,Oe=V.distance||Me.far;Oe!==Me.far&&(Me.far=Oe,Me.updateProjectionMatrix()),Os.setFromMatrixPosition(V.matrixWorld),Me.position.copy(Os),Il.copy(Me.position),Il.add(mS[_e]),Me.up.copy(gS[_e]),Me.lookAt(Il),Me.updateMatrixWorld(),et.makeTranslation(-Os.x,-Os.y,-Os.z),Zu.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Zu,Me.coordinateSystem,Me.reversedDepth)}else F.updateMatrices(V);i=F.getFrustum(),b(P,v,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===3&&y(F,v),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(M,I,w)};function y(R,P){const v=e.update(f);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ni(r.x,r.y,{format:Mo,type:Er})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,v,u,f,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,v,m,f,null)}function T(R,P,v,M){let I=null;const w=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)I=w;else if(I=v.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=I.uuid,B=P.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let z=L[B];z===void 0&&(z=I.clone(),L[B]=z,P.addEventListener("dispose",E)),I=z}if(I.visible=P.visible,I.wireframe=P.wireframe,M===3?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:h[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const k=t.properties.get(I);k.light=v}return I}function b(R,P,v,M,I){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===3)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const k=e.update(R),B=R.material;if(Array.isArray(B)){const L=k.groups;for(let z=0,V=L.length;z<V;z++){const F=L[z],Y=B[F.materialIndex];if(Y&&Y.visible){const ee=T(R,Y,M,I);R.onBeforeShadow(t,R,P,v,k,ee,F),t.renderBufferDirect(v,null,k,ee,R,F),R.onAfterShadow(t,R,P,v,k,ee,F)}}}else if(B.visible){const L=T(R,B,M,I);R.onBeforeShadow(t,R,P,v,k,L,null),t.renderBufferDirect(v,null,k,L,R,null),R.onAfterShadow(t,R,P,v,k,L,null)}}const w=R.children;for(let k=0,B=w.length;k<B;k++)b(w[k],P,v,M,I)}function E(R){R.target.removeEventListener("dispose",E);for(const P in c){const v=c[P],M=R.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}function vS(t,e){function n(){let D=!1;const K=new kt;let te=null;const oe=new kt(0,0,0,0);return{setMask:function(be){te!==be&&!D&&(t.colorMask(be,be,be,be),te=be)},setLocked:function(be){D=be},setClear:function(be,Q,Te,Ue,tn){tn===!0&&(be*=Ue,Q*=Ue,Te*=Ue),K.set(be,Q,Te,Ue),oe.equals(K)===!1&&(t.clearColor(be,Q,Te,Ue),oe.copy(K))},reset:function(){D=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let D=!1,K=!1,te=null,oe=null,be=null;return{setReversed:function(Q){if(K!==Q){const Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),K=Q;const Ue=be;be=null,this.setClear(Ue)}},getReversed:function(){return K},setTest:function(Q){Q?pe(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(Q){te!==Q&&!D&&(t.depthMask(Q),te=Q)},setFunc:function(Q){if(K&&(Q=av[Q]),oe!==Q){switch(Q){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Q}},setLocked:function(Q){D=Q},setClear:function(Q){be!==Q&&(be=Q,K&&(Q=1-Q),t.clearDepth(Q))},reset:function(){D=!1,te=null,oe=null,be=null,K=!1}}}function r(){let D=!1,K=null,te=null,oe=null,be=null,Q=null,Te=null,Ue=null,tn=null;return{setTest:function(ut){D||(ut?pe(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(ut){K!==ut&&!D&&(t.stencilMask(ut),K=ut)},setFunc:function(ut,jn,Fn){(te!==ut||oe!==jn||be!==Fn)&&(t.stencilFunc(ut,jn,Fn),te=ut,oe=jn,be=Fn)},setOp:function(ut,jn,Fn){(Q!==ut||Te!==jn||Ue!==Fn)&&(t.stencilOp(ut,jn,Fn),Q=ut,Te=jn,Ue=Fn)},setLocked:function(ut){D=ut},setClear:function(ut){tn!==ut&&(t.clearStencil(ut),tn=ut)},reset:function(){D=!1,K=null,te=null,oe=null,be=null,Q=null,Te=null,Ue=null,tn=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},m=new WeakMap,_=[],f=null,g=!1,p=null,y=null,T=null,b=null,E=null,R=null,P=null,v=new We(0,0,0),M=0,I=!1,w=null,k=null,B=null,L=null,z=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=Y>=2);let re=null,_e={};const Me=t.getParameter(t.SCISSOR_BOX),et=t.getParameter(t.VIEWPORT),Oe=new kt().fromArray(Me),j=new kt().fromArray(et);function le(D,K,te,oe){const be=new Uint8Array(4),Q=t.createTexture();t.bindTexture(D,Q),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<te;Te++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(K,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(K+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return Q}const xe={};xe[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),a.setFunc(3),Gt(!1),wt(1),pe(t.CULL_FACE),xt(0);function pe(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Pe(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Fe(D,K){return u[D]!==K?(t.bindFramebuffer(D,K),u[D]=K,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=K),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=K),!0):!1}function Ie(D,K){let te=_,oe=!1;if(D){te=m.get(K),te===void 0&&(te=[],m.set(K,te));const be=D.textures;if(te.length!==be.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,Te=be.length;Q<Te;Q++)te[Q]=t.COLOR_ATTACHMENT0+Q;te.length=be.length,oe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,oe=!0);oe&&t.drawBuffers(te)}function rt(D){return f!==D?(t.useProgram(D),f=D,!0):!1}const Xe={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};Xe[103]=t.MIN,Xe[104]=t.MAX;const Dt={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function xt(D,K,te,oe,be,Q,Te,Ue,tn,ut){if(D===0){g===!0&&(Pe(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),D!==5){if(D!==p||ut!==I){if((y!==100||E!==100)&&(t.blendEquation(t.FUNC_ADD),y=100,E=100),ut)switch(D){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Le("WebGLState: Invalid blending: ",D);break}else switch(D){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",D);break}T=null,b=null,R=null,P=null,v.set(0,0,0),M=0,p=D,I=ut}return}be=be||K,Q=Q||te,Te=Te||oe,(K!==y||be!==E)&&(t.blendEquationSeparate(Xe[K],Xe[be]),y=K,E=be),(te!==T||oe!==b||Q!==R||Te!==P)&&(t.blendFuncSeparate(Dt[te],Dt[oe],Dt[Q],Dt[Te]),T=te,b=oe,R=Q,P=Te),(Ue.equals(v)===!1||tn!==M)&&(t.blendColor(Ue.r,Ue.g,Ue.b,tn),v.copy(Ue),M=tn),p=D,I=!1}function pn(D,K){D.side===2?Pe(t.CULL_FACE):pe(t.CULL_FACE);let te=D.side===1;K&&(te=!te),Gt(te),D.blending===1&&D.transparent===!1?xt(0):xt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const oe=D.stencilWrite;o.setTest(oe),oe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){w!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),w=D)}function wt(D){D!==0?(pe(t.CULL_FACE),D!==k&&(D===1?t.cullFace(t.BACK):D===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),k=D}function U(D){D!==B&&(F&&t.lineWidth(D),B=D)}function Yt(D,K,te){D?(pe(t.POLYGON_OFFSET_FILL),(L!==K||z!==te)&&(L=K,z=te,a.getReversed()&&(K=-K),t.polygonOffset(K,te))):Pe(t.POLYGON_OFFSET_FILL)}function Ke(D){D?pe(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function tt(D){D===void 0&&(D=t.TEXTURE0+V-1),re!==D&&(t.activeTexture(D),re=D)}function he(D,K,te){te===void 0&&(re===null?te=t.TEXTURE0+V-1:te=re);let oe=_e[te];oe===void 0&&(oe={type:void 0,texture:void 0},_e[te]=oe),(oe.type!==D||oe.texture!==K)&&(re!==te&&(t.activeTexture(te),re=te),t.bindTexture(D,K||xe[D]),oe.type=D,oe.texture=K)}function pt(){const D=_e[re];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function we(){try{t.compressedTexImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function S(){try{t.texSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function H(){try{t.texSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function ne(){try{t.texStorage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function ce(){try{t.texStorage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function N(){try{t.texImage2D(...arguments)}catch(D){Le("WebGLState:",D)}}function ae(){try{t.texImage3D(...arguments)}catch(D){Le("WebGLState:",D)}}function de(D){return h[D]!==void 0?h[D]:t.getParameter(D)}function me(D,K){h[D]!==K&&(t.pixelStorei(D,K),h[D]=K)}function J(D){Oe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Oe.copy(D))}function De(D){j.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function Be(D,K){let te=c.get(K);te===void 0&&(te=new WeakMap,c.set(K,te));let oe=te.get(D);oe===void 0&&(oe=t.getUniformBlockIndex(K,D.name),te.set(D,oe))}function qe(D,K){const te=c.get(K).get(D);l.get(K)!==te&&(t.uniformBlockBinding(K,te,D.__bindingPointIndex),l.set(K,te))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},re=null,_e={},u={},m=new WeakMap,_=[],f=null,g=!1,p=null,y=null,T=null,b=null,E=null,R=null,P=null,v=new We(0,0,0),M=0,I=!1,w=null,k=null,B=null,L=null,z=null,Oe.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Pe,bindFramebuffer:Fe,drawBuffers:Ie,useProgram:rt,setBlending:xt,setMaterial:pn,setFlipSided:Gt,setCullFace:wt,setLineWidth:U,setPolygonOffset:Yt,setScissorTest:Ke,activeTexture:tt,bindTexture:he,unbindTexture:pt,compressedTexImage2D:we,compressedTexImage3D:C,texImage2D:N,texImage3D:ae,pixelStorei:me,getParameter:de,updateUBOMapping:Be,uniformBlockBinding:qe,texStorage2D:ne,texStorage3D:ce,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:J,viewport:De,reset:He}}function yS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap,h=new Set;let u;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,S){return _?new OffscreenCanvas(C,S):ua("canvas")}function g(C,S,H){let q=1;const Z=we(C);if((Z.width>H||Z.height>H)&&(q=H/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(q*Z.width),ce=Math.floor(q*Z.height);u===void 0&&(u=f(ne,ce));const N=S?f(ne,ce):u;return N.width=ne,N.height=ce,N.getContext("2d").drawImage(C,0,0,ne,ce),ke("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ne+"x"+ce+")."),N}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){t.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(C,S,H,q,Z,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=S;if(S===t.RED&&(H===t.FLOAT&&(N=t.R32F),H===t.HALF_FLOAT&&(N=t.R16F),H===t.UNSIGNED_BYTE&&(N=t.R8),H===t.UNSIGNED_SHORT&&ce&&(N=ce.R16_EXT),H===t.SHORT&&ce&&(N=ce.R16_SNORM_EXT)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(N=t.R8UI),H===t.UNSIGNED_SHORT&&(N=t.R16UI),H===t.UNSIGNED_INT&&(N=t.R32UI),H===t.BYTE&&(N=t.R8I),H===t.SHORT&&(N=t.R16I),H===t.INT&&(N=t.R32I)),S===t.RG&&(H===t.FLOAT&&(N=t.RG32F),H===t.HALF_FLOAT&&(N=t.RG16F),H===t.UNSIGNED_BYTE&&(N=t.RG8),H===t.UNSIGNED_SHORT&&ce&&(N=ce.RG16_EXT),H===t.SHORT&&ce&&(N=ce.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(N=t.RG8UI),H===t.UNSIGNED_SHORT&&(N=t.RG16UI),H===t.UNSIGNED_INT&&(N=t.RG32UI),H===t.BYTE&&(N=t.RG8I),H===t.SHORT&&(N=t.RG16I),H===t.INT&&(N=t.RG32I)),S===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(N=t.RGB8UI),H===t.UNSIGNED_SHORT&&(N=t.RGB16UI),H===t.UNSIGNED_INT&&(N=t.RGB32UI),H===t.BYTE&&(N=t.RGB8I),H===t.SHORT&&(N=t.RGB16I),H===t.INT&&(N=t.RGB32I)),S===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(N=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(N=t.RGBA16UI),H===t.UNSIGNED_INT&&(N=t.RGBA32UI),H===t.BYTE&&(N=t.RGBA8I),H===t.SHORT&&(N=t.RGBA16I),H===t.INT&&(N=t.RGBA32I)),S===t.RGB&&(H===t.UNSIGNED_SHORT&&ce&&(N=ce.RGB16_EXT),H===t.SHORT&&ce&&(N=ce.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(N=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(N=t.R11F_G11F_B10F)),S===t.RGBA){const ae=ne?bo:Ye.getTransfer(Z);H===t.FLOAT&&(N=t.RGBA32F),H===t.HALF_FLOAT&&(N=t.RGBA16F),H===t.UNSIGNED_BYTE&&(N=ae==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ce&&(N=ce.RGBA16_EXT),H===t.SHORT&&ce&&(N=ce.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function E(C,S){let H;return C?S===null||S===1014||S===1020?H=t.DEPTH24_STENCIL8:S===1015?H=t.DEPTH32F_STENCIL8:S===1012&&(H=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?H=t.DEPTH_COMPONENT24:S===1015?H=t.DEPTH_COMPONENT32F:S===1012&&(H=t.DEPTH_COMPONENT16),H}function R(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),M(S),S.isVideoTexture&&d.delete(S),S.isHTMLTexture&&h.delete(S)}function v(C){const S=C.target;S.removeEventListener("dispose",v),w(S)}function M(C){const S=i.get(C);if(S.__webglInit===void 0)return;const H=C.source,q=m.get(H);if(q){const Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(C),Object.keys(q).length===0&&m.delete(H)}i.remove(C)}function I(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const H=C.source,q=m.get(H);delete q[S.__cacheKey],a.memory.textures--}function w(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Z=0;Z<S.__webglFramebuffer[q].length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[q][Z]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=C.textures;for(let q=0,Z=H.length;q<Z;q++){const ne=i.get(H[q]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(H[q])}i.remove(C)}let k=0;function B(){k=0}function L(){return k}function z(C){k=C}function V(){const C=k;return C>=r.maxTextures&&ke("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),k+=1,C}function F(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){const H=i.get(C);if(C.isVideoTexture&&he(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const q=C.image;if(q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(H,C,S);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function ee(C,S){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Pe(H,C,S);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function re(C,S){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Pe(H,C,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function _e(C,S){const H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Fe(H,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const Me={[nc]:t.REPEAT,[mi]:t.CLAMP_TO_EDGE,[ic]:t.MIRRORED_REPEAT},et={[Qt]:t.NEAREST,[o_]:t.NEAREST_MIPMAP_NEAREST,[l_]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[c_]:t.LINEAR_MIPMAP_NEAREST,[$c]:t.LINEAR_MIPMAP_LINEAR},Oe={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function j(C,S){if(S.type===1015&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Me[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Me[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Me[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,et[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function le(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const q=S.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const ne=F(S);if(ne!==C.__cacheKey){Z[ne]===void 0&&(Z[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[ne].usedTimes++;const ce=Z[C.__cacheKey];ce!==void 0&&(Z[C.__cacheKey].usedTimes--,ce.usedTimes===0&&I(S)),C.__cacheKey=ne,C.__webglTexture=Z[ne].texture}return H}function xe(C,S,H){return Math.floor(Math.floor(C/H)/S)}function pe(C,S,H,q){const ne=C.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,H,q,S.data);else{ne.sort((me,J)=>me.start-J.start);let ce=0;for(let me=1;me<ne.length;me++){const J=ne[ce],De=ne[me],Be=J.start+J.count,qe=xe(De.start,S.width,4),He=xe(J.start,S.width,4);De.start<=Be+1&&qe===He&&xe(De.start+De.count-1,S.width,4)===qe?J.count=Math.max(J.count,De.start+De.count-J.start):(++ce,ne[ce]=De)}ne.length=ce+1;const N=n.getParameter(t.UNPACK_ROW_LENGTH),ae=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let me=0,J=ne.length;me<J;me++){const De=ne[me],Be=Math.floor(De.start/4),qe=Math.ceil(De.count/4),He=Be%S.width,D=Math.floor(Be/S.width),K=qe,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,He),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,He,D,K,te,H,q,S.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,N),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Pe(C,S,H){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const Z=le(C,S),ne=S.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+H);const ce=i.get(ne);if(ne.version!==ce.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+H),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){const K=Ye.getPrimaries(Ye.workingColorSpace),te=S.colorSpace===""?null:Ye.getPrimaries(S.colorSpace),oe=S.colorSpace===""||K===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let N=g(S.image,!1,r.maxTextureSize);N=pt(S,N);const ae=s.convert(S.format,S.colorSpace),de=s.convert(S.type);let me=b(S.internalFormat,ae,de,S.normalized,S.colorSpace,S.isVideoTexture);j(q,S);let J;const De=S.mipmaps,Be=S.isVideoTexture!==!0,qe=ce.__version===void 0||Z===!0,He=ne.dataReady,D=R(S,N);if(S.isDepthTexture)me=E(S.format===Nf,S.type),qe&&(Be?n.texStorage2D(t.TEXTURE_2D,1,me,N.width,N.height):n.texImage2D(t.TEXTURE_2D,0,me,N.width,N.height,0,ae,de,null));else if(S.isDataTexture)if(De.length>0){Be&&qe&&n.texStorage2D(t.TEXTURE_2D,D,me,De[0].width,De[0].height);for(let K=0,te=De.length;K<te;K++)J=De[K],Be?He&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,J.width,J.height,ae,de,J.data):n.texImage2D(t.TEXTURE_2D,K,me,J.width,J.height,0,ae,de,J.data);S.generateMipmaps=!1}else Be?(qe&&n.texStorage2D(t.TEXTURE_2D,D,me,N.width,N.height),He&&pe(S,N,ae,de)):n.texImage2D(t.TEXTURE_2D,0,me,N.width,N.height,0,ae,de,N.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,me,De[0].width,De[0].height,N.depth);for(let K=0,te=De.length;K<te;K++)if(J=De[K],S.format!==1023)if(ae!==null)if(Be){if(He)if(S.layerUpdates.size>0){const oe=Ru(J.width,J.height,S.format,S.type);for(const be of S.layerUpdates){const Q=J.data.subarray(be*oe/J.data.BYTES_PER_ELEMENT,(be+1)*oe/J.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,be,J.width,J.height,1,ae,Q)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,J.width,J.height,N.depth,ae,J.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,me,J.width,J.height,N.depth,0,J.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?He&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,J.width,J.height,N.depth,ae,de,J.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,me,J.width,J.height,N.depth,0,ae,de,J.data)}else{Be&&qe&&n.texStorage2D(t.TEXTURE_2D,D,me,De[0].width,De[0].height);for(let K=0,te=De.length;K<te;K++)J=De[K],S.format!==1023?ae!==null?Be?He&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,J.width,J.height,ae,J.data):n.compressedTexImage2D(t.TEXTURE_2D,K,me,J.width,J.height,0,J.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?He&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,J.width,J.height,ae,de,J.data):n.texImage2D(t.TEXTURE_2D,K,me,J.width,J.height,0,ae,de,J.data)}else if(S.isDataArrayTexture)if(Be){if(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,me,N.width,N.height,N.depth),He)if(S.layerUpdates.size>0){const K=Ru(N.width,N.height,S.format,S.type);for(const te of S.layerUpdates){const oe=N.data.subarray(te*K/N.data.BYTES_PER_ELEMENT,(te+1)*K/N.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,N.width,N.height,1,ae,de,oe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,ae,de,N.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,N.width,N.height,N.depth,0,ae,de,N.data);else if(S.isData3DTexture)Be?(qe&&n.texStorage3D(t.TEXTURE_3D,D,me,N.width,N.height,N.depth),He&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,ae,de,N.data)):n.texImage3D(t.TEXTURE_3D,0,me,N.width,N.height,N.depth,0,ae,de,N.data);else if(S.isFramebufferTexture){if(qe)if(Be)n.texStorage2D(t.TEXTURE_2D,D,me,N.width,N.height);else{let K=N.width,te=N.height;for(let oe=0;oe<D;oe++)n.texImage2D(t.TEXTURE_2D,oe,me,K,te,0,ae,de,null),K>>=1,te>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),N.parentNode!==K){K.appendChild(N),h.add(S),K.onpaint=Te=>{const Ue=Te.changedElements;for(const tn of h)Ue.includes(tn.image)&&(tn.needsUpdate=!0)},K.requestPaint();return}const te=0,oe=t.RGBA,be=t.RGBA,Q=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,te,oe,be,Q,N),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Be&&qe){const K=we(De[0]);n.texStorage2D(t.TEXTURE_2D,D,me,K.width,K.height)}for(let K=0,te=De.length;K<te;K++)J=De[K],Be?He&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ae,de,J):n.texImage2D(t.TEXTURE_2D,K,me,ae,de,J);S.generateMipmaps=!1}else if(Be){if(qe){const K=we(N);n.texStorage2D(t.TEXTURE_2D,D,me,K.width,K.height)}He&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,de,N)}else n.texImage2D(t.TEXTURE_2D,0,me,ae,de,N);p(S)&&y(q),ce.__version=ne.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Fe(C,S,H){if(S.image.length!==6)return;const q=le(C,S),Z=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ne=i.get(Z);if(Z.version!==ne.__version||q===!0){n.activeTexture(t.TEXTURE0+H);const ce=Ye.getPrimaries(Ye.workingColorSpace),N=S.colorSpace===""?null:Ye.getPrimaries(S.colorSpace),ae=S.colorSpace===""||ce===N?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!de&&!me?J[Q]=g(S.image[Q],!0,r.maxCubemapSize):J[Q]=me?S.image[Q].image:S.image[Q],J[Q]=pt(S,J[Q]);const De=J[0],Be=s.convert(S.format,S.colorSpace),qe=s.convert(S.type),He=b(S.internalFormat,Be,qe,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,K=ne.__version===void 0||q===!0,te=Z.dataReady;let oe=R(S,De);j(t.TEXTURE_CUBE_MAP,S);let be;if(de){D&&K&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,He,De.width,De.height);for(let Q=0;Q<6;Q++){be=J[Q].mipmaps;for(let Te=0;Te<be.length;Te++){const Ue=be[Te];S.format!==1023?Be!==null?D?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Ue.width,Ue.height,Be,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,He,Ue.width,Ue.height,0,Ue.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Ue.width,Ue.height,Be,qe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,He,Ue.width,Ue.height,0,Be,qe,Ue.data)}}}else{if(be=S.mipmaps,D&&K){be.length>0&&oe++;const Q=we(J[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(me){D?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,Be,qe,J[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,J[Q].width,J[Q].height,0,Be,qe,J[Q].data);for(let Te=0;Te<be.length;Te++){const Ue=be[Te].image[Q].image;D?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ue.width,Ue.height,Be,qe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,He,Ue.width,Ue.height,0,Be,qe,Ue.data)}}else{D?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Be,qe,J[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,Be,qe,J[Q]);for(let Te=0;Te<be.length;Te++){const Ue=be[Te];D?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Be,qe,Ue.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,He,Be,qe,Ue.image[Q])}}}p(S)&&y(t.TEXTURE_CUBE_MAP),ne.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ie(C,S,H,q,Z,ne){const ce=s.convert(H.format,H.colorSpace),N=s.convert(H.type),ae=b(H.internalFormat,ce,N,H.normalized,H.colorSpace),de=i.get(S),me=i.get(H);if(me.__renderTarget=S,!de.__hasExternalTextures){const J=Math.max(1,S.width>>ne),De=Math.max(1,S.height>>ne);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,ne,ae,J,De,S.depth,0,ce,N,null):n.texImage2D(Z,ne,ae,J,De,0,ce,N,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),tt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,me.__webglTexture,0,Ke(S)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,me.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(C,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer){const q=S.depthTexture,Z=q&&q.isDepthTexture?q.type:null,ne=E(S.stencilBuffer,Z),ce=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;tt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke(S),ne,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,C)}else{const q=S.textures;for(let Z=0;Z<q.length;Z++){const ne=q[Z],ce=s.convert(ne.format,ne.colorSpace),N=s.convert(ne.type),ae=b(ne.internalFormat,ce,N,ne.normalized,ne.colorSpace);tt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke(S),ae,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke(S),ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(C,S,H){const q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),j(t.TEXTURE_CUBE_MAP,S.depthTexture);const de=s.convert(S.depthTexture.format),me=s.convert(S.depthTexture.type);let J;S.depthTexture.format===1026?J=t.DEPTH_COMPONENT24:S.depthTexture.format===1027&&(J=t.DEPTH24_STENCIL8);for(let De=0;De<6;De++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,J,S.width,S.height,0,de,me,null)}}else Y(S.depthTexture,0);const ne=Z.__webglTexture,ce=Ke(S),N=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ae=S.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===1026)tt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,N,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ae,N,ne,0);else if(S.depthTexture.format===1027)tt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,N,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ae,N,ne,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const S=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Xe(S.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?Xe(S.__webglFramebuffer[0],C,0):Xe(S.__webglFramebuffer,C,0)}else if(H){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=t.createRenderbuffer(),rt(S.__webglDepthbuffer[q],C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ne)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),rt(S.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(C,S,H){const q=i.get(C);S!==void 0&&Ie(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Dt(C)}function pn(C){const S=C.texture,H=i.get(C),q=i.get(S);C.addEventListener("dispose",v);const Z=C.textures,ne=C.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,a.memory.textures++),ne){H.__webglFramebuffer=[];for(let N=0;N<6;N++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[N]=[];for(let ae=0;ae<S.mipmaps.length;ae++)H.__webglFramebuffer[N][ae]=t.createFramebuffer()}else H.__webglFramebuffer[N]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let N=0;N<S.mipmaps.length;N++)H.__webglFramebuffer[N]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ce)for(let N=0,ae=Z.length;N<ae;N++){const de=i.get(Z[N]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&tt(C)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let N=0;N<Z.length;N++){const ae=Z[N];H.__webglColorRenderbuffer[N]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[N]);const de=s.convert(ae.format,ae.colorSpace),me=s.convert(ae.type),J=b(ae.internalFormat,de,me,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),De=Ke(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,J,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.RENDERBUFFER,H.__webglColorRenderbuffer[N])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),rt(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),j(t.TEXTURE_CUBE_MAP,S);for(let N=0;N<6;N++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)Ie(H.__webglFramebuffer[N][ae],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae);else Ie(H.__webglFramebuffer[N],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);p(S)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let N=0,ae=Z.length;N<ae;N++){const de=Z[N],me=i.get(de);let J=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,me.__webglTexture),j(J,de),Ie(H.__webglFramebuffer,C,de,t.COLOR_ATTACHMENT0+N,J,0),p(de)&&y(J)}n.unbindTexture()}else{let N=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(N=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(N,q.__webglTexture),j(N,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)Ie(H.__webglFramebuffer[ae],C,S,t.COLOR_ATTACHMENT0,N,ae);else Ie(H.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,N,0);p(S)&&y(N),n.unbindTexture()}C.depthBuffer&&Dt(C)}function Gt(C){const S=C.textures;for(let H=0,q=S.length;H<q;H++){const Z=S[H];if(p(Z)){const ne=T(C),ce=i.get(Z).__webglTexture;n.bindTexture(ne,ce),y(ne),n.unbindTexture()}}}const wt=[],U=[];function Yt(C){if(C.samples>0){if(tt(C)===!1){const S=C.textures,H=C.width,q=C.height;let Z=t.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),N=S.length>1;if(N)for(let de=0;de<S.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ae=C.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let de=0;de<S.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),N){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const me=i.get(S[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,H,q,0,0,H,q,Z,t.NEAREST),l===!0&&(wt.length=0,U.length=0,wt.push(t.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(wt.push(ne),U.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,wt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),N)for(let de=0;de<S.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ce.__webglColorRenderbuffer[de]);const me=i.get(S[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ke(C){return Math.min(r.maxSamples,C.samples)}function tt(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(C){const S=a.render.frame;d.get(C)!==S&&(d.set(C,S),C.update())}function pt(C,S){const H=C.colorSpace,q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!=="srgb-linear"&&H!==""&&(Ye.getTransfer(H)==="srgb"?(q!==1023||Z!==1009)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",H)),S}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=re,this.setTextureCube=_e,this.rebindTextures=xt,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SS(t,e){function n(i,r=""){let s;const a=Ye.getTransfer(r);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var MS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xS=`
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

}`,bS=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ep(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:MS,fragmentShader:xS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},TS=class extends Ar{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,d=null,h=null,u=null,m=null;const _=typeof XRWebGLBinding<"u",f=new bS,g={},p=e.getContextAttributes();let y=null,T=null;const b=[],E=[],R=new je;let P=null;const v=new In;v.viewport=new kt;const M=new In;M.viewport=new kt;const I=[v,M],w=new i0;let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=b[j];return le===void 0&&(le=new dl,b[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=b[j];return le===void 0&&(le=new dl,b[j]=le),le.getGripSpace()},this.getHand=function(j){let le=b[j];return le===void 0&&(le=new dl,b[j]=le),le.getHandSpace()};function L(j){const le=E.indexOf(j.inputSource);if(le===-1)return;const xe=b[le];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||s),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let j=0;j<b.length;j++){const le=E[j];le!==null&&(E[j]=null,b[j].disconnect(le))}k=null,B=null,f.reset();for(const j in g)delete g[j];t.setRenderTarget(y),u=null,h=null,d=null,i=null,T=null,Oe.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,xe=null,pe=null;p.depth&&(pe=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,le=p.stencil?Nf:da,xe=p.stencil?Uf:Tr);const Pe={colorFormat:e.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Pe),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new ni(h.textureWidth,h.textureHeight,{format:ca,type:Xi,depthTexture:new xs(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,le),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new ni(u.framebufferWidth,u.framebufferHeight,{format:ca,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function V(j){for(let le=0;le<j.removed.length;le++){const xe=j.removed[le],pe=E.indexOf(xe);pe>=0&&(E[pe]=null,b[pe].disconnect(xe))}for(let le=0;le<j.added.length;le++){const xe=j.added[le];let pe=E.indexOf(xe);if(pe===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=E.length){E.push(xe),pe=Fe;break}else if(E[Fe]===null){E[Fe]=xe,pe=Fe;break}if(pe===-1)break}const Pe=b[pe];Pe&&Pe.connect(xe)}}const F=new $,Y=new $;function ee(j,le,xe){F.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);const pe=F.distanceTo(Y),Pe=le.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,Ie=Pe[14]/(Pe[10]-1),rt=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],Dt=(Pe[9]-1)/Pe[5],xt=(Pe[8]-1)/Pe[0],pn=(Fe[8]+1)/Fe[0],Gt=Ie*xt,wt=Ie*pn,U=pe/(-xt+pn),Yt=U*-xt;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Yt),j.translateZ(U),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ke=Ie+U,tt=rt+U,he=Gt-Yt,pt=wt+(pe-Yt),we=Xe*rt/tt*Ke,C=Dt*rt/tt*Ke;j.projectionMatrix.makePerspective(he,pt,we,C,Ke,tt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let le=j.near,xe=j.far;f.texture!==null&&(f.depthNear>0&&(le=f.depthNear),f.depthFar>0&&(xe=f.depthFar)),w.near=M.near=v.near=le,w.far=M.far=v.far=xe,(k!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,B=w.far),w.layers.mask=j.layers.mask|6,v.layers.mask=w.layers.mask&-5,M.layers.mask=w.layers.mask&-3;const pe=j.parent,Pe=w.cameras;re(w,pe);for(let Fe=0;Fe<Pe.length;Fe++)re(Pe[Fe],pe);Pe.length===2?ee(w,v,M):w.projectionMatrix.copy(v.projectionMatrix),_e(j,w,pe)};function _e(j,le,xe){xe===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=oc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&u===null))return o},this.setFoveation=function(j){o=j,h!==null&&(h.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(w)},this.getCameraTexture=function(j){return g[j]};let Me=null;function et(j,le){if(c=le.getViewerPose(l||s),m=le,c!==null){const xe=c.views;u!==null&&(t.setRenderTargetFramebuffer(T,u.framebuffer),t.setRenderTarget(T));let pe=!1;xe.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let Fe=0;Fe<xe.length;Fe++){const Ie=xe[Fe];let rt=null;if(u!==null)rt=u.getViewport(Ie);else{const Dt=d.getViewSubImage(h,Ie);rt=Dt.viewport,Fe===0&&(t.setRenderTargetTextures(T,Dt.colorTexture,Dt.depthStencilTexture),t.setRenderTarget(T))}let Xe=I[Fe];Xe===void 0&&(Xe=new In,Xe.layers.enable(Fe),Xe.viewport=new kt,I[Fe]=Xe),Xe.matrix.fromArray(Ie.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ie.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(rt.x,rt.y,rt.width,rt.height),Fe===0&&(w.matrix.copy(Xe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pe===!0&&w.cameras.push(Xe)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Fe=d.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&f.init(Fe,i.renderState)}if(Pe&&Pe.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Fe=0;Fe<xe.length;Fe++){const Ie=xe[Fe].camera;if(Ie){let rt=g[Ie];rt||(rt=new ep,g[Ie]=rt);const Xe=d.getCameraImage(Ie);rt.sourceTexture=Xe}}}}for(let xe=0;xe<b.length;xe++){const pe=E[xe],Pe=b[xe];pe!==null&&Pe!==void 0&&Pe.update(pe,le,l||s)}Me&&Me(j,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}const Oe=new lp;Oe.setAnimationLoop(et),this.setAnimationLoop=function(j){Me=j},this.dispose=function(){}}},ES=new Et,mp=new ze;mp.set(-1,0,0,0,1,0,0,0,1);function CS(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,ip(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),f(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,b=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=T*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function f(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wS(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(_(y),b=d(y),r[y.id]=b,y.addEventListener("dispose",g));const E=T.program;i.updateUBOMapping(y,E);const R=e.render.frame;s[y.id]!==R&&(u(y),s[y.id]=R)}function d(y){const T=h();y.__bindingPointIndex=T;const b=t.createBuffer(),E=y.__size,R=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,E,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=r[y.id],b=y.uniforms,E=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,P=b.length;R<P;R++){const v=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,I=v.length;M<I;M++){const w=v[M];if(m(w,R,M,E)===!0){const k=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let z=0;z<B.length;z++){const V=B[z],F=f(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,k+L,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):ArrayBuffer.isView(V)?w.__data.set(new V.constructor(V.buffer,V.byteOffset,w.__data.length)):(V.toArray(w.__data,L),L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,T,b,E){const R=y.value,P=T+"_"+b;if(E[P]===void 0)return typeof R=="number"||typeof R=="boolean"?E[P]=R:ArrayBuffer.isView(R)?E[P]=R.slice():E[P]=R.clone(),!0;{const v=E[P];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return E[P]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(v.equals(R)===!1)return v.copy(R),!0}}return!1}function _(y){const T=y.uniforms;let b=0;const E=16;for(let P=0,v=T.length;P<v;P++){const M=Array.isArray(T[P])?T[P]:[T[P]];for(let I=0,w=M.length;I<w;I++){const k=M[I],B=Array.isArray(k.value)?k.value:[k.value];for(let L=0,z=B.length;L<z;L++){const V=B[L],F=f(V),Y=b%E,ee=Y%F.boundary,re=Y+ee;b+=ee,re!==0&&E-re<F.storage&&(b+=E-re),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=F.storage}}}const R=b%E;return R>0&&(b+=E-R),y.__size=b,y.__cache={},this}function f(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){const T=y.target;T.removeEventListener("dispose",g);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var AS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function RS(){return Yn===null&&(Yn=new wv(AS,16,16,Mo,Er),Yn.name="DFG_LUT",Yn.minFilter=xn,Yn.magFilter=xn,Yn.wrapS=mi,Yn.wrapT=mi,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var PS=class{constructor(t={}){const{canvas:e=rv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Xi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=u,f=new Set([Bf,Ff,Of]),g=new Set([Xi,Tr,Df,Uf,Lf,If]),p=new Uint32Array(4),y=new Int32Array(4),T=new $;let b=null,E=null;const R=[],P=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1,w=null;this._outputColorSpace=Zt;let k=0,B=0,L=null,z=-1,V=null;const F=new kt,Y=new kt;let ee=null;const re=new We(0);let _e=0,Me=e.width,et=e.height,Oe=1,j=null,le=null;const xe=new kt(0,0,Me,et),pe=new kt(0,0,Me,et);let Pe=!1;const Fe=new qc;let Ie=!1,rt=!1;const Xe=new Et,Dt=new $,xt=new kt,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function wt(){return L===null?Oe:1}let U=n;function Yt(x,O){return e.getContext(x,O)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r184"),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",Te,!1),U===null){const O="webgl2";if(U=Yt(O,x),U===null)throw Yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Le("WebGLRenderer: "+x.message),x}let Ke,tt,he,pt,we,C,S,H,q,Z,ne,ce,N,ae,de,me,J,De,Be,qe,He,D,K;function te(){Ke=new R0(U),Ke.init(),He=new SS(U,Ke),tt=new M0(U,Ke,t,He),he=new vS(U,Ke),tt.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),pt=new D0(U),we=new rS,C=new yS(U,Ke,he,we,tt,He,pt),S=new A0(M),H=new g0(U),D=new y0(U,H),q=new P0(U,H,pt,D),Z=new I0(U,q,H,D,pt),De=new L0(U,tt,C),de=new x0(we),ne=new iS(M,S,Ke,tt,D,de),ce=new CS(M,we),N=new aS,ae=new hS(Ke),J=new v0(M,S,he,Z,m,o),me=new _S(M,Z,tt),K=new wS(U,pt,tt,he),Be=new S0(U,Ke,pt),qe=new k0(U,Ke,pt),pt.programs=ne.programs,M.capabilities=tt,M.extensions=Ke,M.properties=we,M.renderLists=N,M.shadowMap=me,M.state=he,M.info=pt}te(),_!==1009&&(v=new N0(_,e.width,e.height,i,r));const oe=new TS(M,U);this.xr=oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=Ke.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ke.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(x){x!==void 0&&(Oe=x,this.setSize(Me,et,!1))},this.getSize=function(x){return x.set(Me,et)},this.setSize=function(x,O,X=!0){if(oe.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=x,et=O,e.width=Math.floor(x*Oe),e.height=Math.floor(O*Oe),X===!0&&(e.style.width=x+"px",e.style.height=O+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(Me*Oe,et*Oe).floor()},this.setDrawingBufferSize=function(x,O,X){Me=x,et=O,Oe=X,e.width=Math.floor(x*X),e.height=Math.floor(O*X),this.setViewport(0,0,x,O)},this.setEffects=function(x){if(_===1009){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let O=0;O<x.length;O++)if(x[O].isOutputPass===!0){ke("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(F)},this.getViewport=function(x){return x.copy(xe)},this.setViewport=function(x,O,X,W){x.isVector4?xe.set(x.x,x.y,x.z,x.w):xe.set(x,O,X,W),he.viewport(F.copy(xe).multiplyScalar(Oe).round())},this.getScissor=function(x){return x.copy(pe)},this.setScissor=function(x,O,X,W){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,O,X,W),he.scissor(Y.copy(pe).multiplyScalar(Oe).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(x){he.setScissorTest(Pe=x)},this.setOpaqueSort=function(x){j=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,X=!0){let W=0;if(x){let G=!1;if(L!==null){const se=L.texture.format;G=f.has(se)}if(G){const se=L.texture.type,fe=g.has(se),ve=J.getClearColor(),ye=J.getClearAlpha(),Ne=ve.r,Ge=ve.g,$e=ve.b;fe?(p[0]=Ne,p[1]=Ge,p[2]=$e,p[3]=ye,U.clearBufferuiv(U.COLOR,0,p)):(y[0]=Ne,y[1]=Ge,y[2]=$e,y[3]=ye,U.clearBufferiv(U.COLOR,0,y))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),w=x},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),J.dispose(),N.dispose(),ae.dispose(),we.dispose(),S.dispose(),Z.dispose(),D.dispose(),K.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",fd),oe.removeEventListener("sessionend",pd),ir.stop()};function be(x){x.preventDefault(),iu("WebGLRenderer: Context Lost."),I=!0}function Q(){iu("WebGLRenderer: Context Restored."),I=!1;const x=pt.autoReset,O=me.enabled,X=me.autoUpdate,W=me.needsUpdate,G=me.type;te(),pt.autoReset=x,me.enabled=O,me.autoUpdate=X,me.needsUpdate=W,me.type=G}function Te(x){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ue(x){const O=x.target;O.removeEventListener("dispose",Ue),tn(O)}function tn(x){ut(x),we.remove(x)}function ut(x){const O=we.get(x).programs;O!==void 0&&(O.forEach(function(X){ne.releaseProgram(X)}),x.isShaderMaterial&&ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,X,W,G,se){O===null&&(O=pn);const fe=G.isMesh&&G.matrixWorld.determinant()<0,ve=$p(x,O,X,W,G);he.setMaterial(W,fe);let ye=X.index,Ne=1;if(W.wireframe===!0){if(ye=q.getWireframeAttribute(X),ye===void 0)return;Ne=2}const Ge=X.drawRange,$e=X.attributes.position;let Ae=Ge.start*Ne,dt=(Ge.start+Ge.count)*Ne;se!==null&&(Ae=Math.max(Ae,se.start*Ne),dt=Math.min(dt,(se.start+se.count)*Ne)),ye!==null?(Ae=Math.max(Ae,0),dt=Math.min(dt,ye.count)):$e!=null&&(Ae=Math.max(Ae,0),dt=Math.min(dt,$e.count));const vt=dt-Ae;if(vt<0||vt===1/0)return;D.setup(G,W,ve,X,ye);let yt,nt=Be;if(ye!==null&&(yt=H.get(ye),nt=qe,nt.setIndex(yt)),G.isMesh)W.wireframe===!0?(he.setLineWidth(W.wireframeLinewidth*wt()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(G.isLine){let Wt=W.linewidth;Wt===void 0&&(Wt=1),he.setLineWidth(Wt*wt()),G.isLineSegments?nt.setMode(U.LINES):G.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else G.isPoints?nt.setMode(U.POINTS):G.isSprite&&nt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))nt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Wt=G._multiDrawStarts,Se=G._multiDrawCounts,Bn=G._multiDrawCount,it=ye?H.get(ye).bytesPerElement:1,kn=we.get(W).currentProgram.getUniforms();for(let Kn=0;Kn<Bn;Kn++)kn.setValue(U,"_gl_DrawID",Kn),nt.render(Wt[Kn]/it,Se[Kn])}else if(G.isInstancedMesh)nt.renderInstances(Ae,vt,G.count);else if(X.isInstancedBufferGeometry){const Wt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Se=Math.min(X.instanceCount,Wt);nt.renderInstances(Ae,vt,Se)}else nt.render(Ae,vt)};function jn(x,O,X){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,ba(x,O,X),x.side=0,x.needsUpdate=!0,ba(x,O,X),x.side=2):ba(x,O,X)}this.compile=function(x,O,X=null){X===null&&(X=x),E=ae.get(X),E.init(O),P.push(E),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),x!==X&&x.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const W=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const se=G.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const ve=se[fe];jn(ve,X,G),W.add(ve)}else jn(se,X,G),W.add(se)}),E=P.pop(),W},this.compileAsync=function(x,O,X=null){const W=this.compile(x,O,X);return new Promise(G=>{function se(){if(W.forEach(function(fe){we.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){G(x);return}setTimeout(se,10)}Ke.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Fn=null;function Gp(x){Fn&&Fn(x)}function fd(){ir.stop()}function pd(){ir.start()}const ir=new lp;ir.setAnimationLoop(Gp),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(x){Fn=x,oe.setAnimationLoop(x),x===null?ir.stop():ir.start()},oe.addEventListener("sessionstart",fd),oe.addEventListener("sessionend",pd),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;w!==null&&w.renderStart(x,O);const X=oe.enabled===!0&&oe.isPresenting===!0,W=v!==null&&(L===null||X)&&v.begin(M,L);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,O,L),E=ae.get(x,P.length),E.init(O),E.state.textureUnits=C.getTextureUnits(),P.push(E),Xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Fe.setFromProjectionMatrix(Xe,ys,O.reversedDepth),rt=this.localClippingEnabled,Ie=de.init(this.clippingPlanes,rt),b=N.get(x,R.length),b.init(),R.push(b),oe.enabled===!0&&oe.isPresenting===!0){const se=M.xr.getDepthSensingMesh();se!==null&&Vo(se,O,-1/0,M.sortObjects)}Vo(x,O,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(j,le),Gt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Gt&&J.addToRenderList(b,x),this.info.render.frame++,Ie===!0&&de.beginShadows();const G=E.state.shadowsArray;if(me.render(G,x,O),Ie===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&v.hasRenderPass())===!1){const se=b.opaque,fe=b.transmissive;if(E.setupLights(),O.isArrayCamera){const ve=O.cameras;if(fe.length>0)for(let ye=0,Ne=ve.length;ye<Ne;ye++){const Ge=ve[ye];gd(se,fe,x,Ge)}Gt&&J.render(x);for(let ye=0,Ne=ve.length;ye<Ne;ye++){const Ge=ve[ye];md(b,x,Ge,Ge.viewport)}}else fe.length>0&&gd(se,fe,x,O),Gt&&J.render(x),md(b,x,O)}L!==null&&B===0&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),W&&v.end(M),x.isScene===!0&&x.onAfterRender(M,x,O),D.resetDefaultState(),z=-1,V=null,P.pop(),P.length>0?(E=P[P.length-1],C.setTextureUnits(E.state.textureUnits),Ie===!0&&de.setGlobalState(M.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,w!==null&&w.renderEnd()};function Vo(x,O,X,W){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Fe.intersectsSprite(x)){W&&xt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Xe);const se=Z.update(x),fe=x.material;fe.visible&&b.push(x,se,fe,X,xt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Fe.intersectsObject(x))){const se=Z.update(x),fe=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),xt.copy(x.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),xt.copy(se.boundingSphere.center)),xt.applyMatrix4(x.matrixWorld).applyMatrix4(Xe)),Array.isArray(fe)){const ve=se.groups;for(let ye=0,Ne=ve.length;ye<Ne;ye++){const Ge=ve[ye],$e=fe[Ge.materialIndex];$e&&$e.visible&&b.push(x,se,$e,X,xt.z,Ge)}}else fe.visible&&b.push(x,se,fe,X,xt.z,null)}}const G=x.children;for(let se=0,fe=G.length;se<fe;se++)Vo(G[se],O,X,W)}function md(x,O,X,W){const{opaque:G,transmissive:se,transparent:fe}=x;E.setupLightsView(X),Ie===!0&&de.setGlobalState(M.clippingPlanes,X),W&&he.viewport(F.copy(W)),G.length>0&&xa(G,O,X),se.length>0&&xa(se,O,X),fe.length>0&&xa(fe,O,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function gd(x,O,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const $e=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new ni(1,1,{generateMipmaps:!0,type:$e?Er:Xi,minFilter:$c,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const G=E.state.transmissionRenderTarget[W.id],se=W.viewport||F;G.setSize(se.z*M.transmissionResolutionScale,se.w*M.transmissionResolutionScale);const fe=M.getRenderTarget(),ve=M.getActiveCubeFace(),ye=M.getActiveMipmapLevel();M.setRenderTarget(G),M.getClearColor(re),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Gt&&J.render(X);const Ne=M.toneMapping;M.toneMapping=0;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Ie===!0&&de.setGlobalState(M.clippingPlanes,W),xa(x,X,W),C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ae=0,dt=O.length;Ae<dt;Ae++){const{object:vt,geometry:yt,material:nt,group:Wt}=O[Ae];if(nt.side===2&&vt.layers.test(W.layers)){const Se=nt.side;nt.side=1,nt.needsUpdate=!0,_d(vt,X,W,yt,nt,Wt),nt.side=Se,nt.needsUpdate=!0,$e=!0}}$e===!0&&(C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G))}M.setRenderTarget(fe,ve,ye),M.setClearColor(re,_e),Ge!==void 0&&(W.viewport=Ge),M.toneMapping=Ne}function xa(x,O,X){const W=O.isScene===!0?O.overrideMaterial:null;for(let G=0,se=x.length;G<se;G++){const fe=x[G],{object:ve,geometry:ye,group:Ne}=fe;let Ge=fe.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),ve.layers.test(X.layers)&&_d(ve,O,X,ye,Ge,Ne)}}function _d(x,O,X,W,G,se){x.onBeforeRender(M,O,X,W,G,se),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(M,O,X,W,x,se),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,M.renderBufferDirect(X,O,W,G,x,se),G.side=0,G.needsUpdate=!0,M.renderBufferDirect(X,O,W,G,x,se),G.side=2):M.renderBufferDirect(X,O,W,G,x,se),x.onAfterRender(M,O,X,W,G,se)}function ba(x,O,X){O.isScene!==!0&&(O=pn);const W=we.get(x),G=E.state.lights,se=E.state.shadowsArray,fe=G.state.version,ve=ne.getParameters(x,G.state,se,O,X,E.state.lightProbeGridArray),ye=ne.getProgramCacheKey(ve);let Ne=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;const Ge=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;W.envMap=S.get(x.envMap||W.environment,Ge),W.envMapRotation=W.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",Ue),Ne=new Map,W.programs=Ne);let $e=Ne.get(ye);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===fe)return yd(x,ve),$e}else ve.uniforms=ne.getUniforms(x),w!==null&&x.isNodeMaterial&&w.build(x,X,ve),x.onBeforeCompile(ve,M),$e=ne.acquireProgram(ve,ye),Ne.set(ye,$e),W.uniforms=ve.uniforms;const Ae=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=de.uniform),yd(x,ve),W.needsLights=jp(x),W.lightsStateVersion=fe,W.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=$e,W.uniformsList=null,$e}function vd(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=so.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function yd(x,O){const X=we.get(x);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Wp(x,O){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;T.setFromMatrixPosition(O.matrixWorld);for(let X=0,W=x.length;X<W;X++){const G=x[X];if(G.texture!==null&&G.boundingBox.containsPoint(T))return G}return null}function $p(x,O,X,W,G){O.isScene!==!0&&(O=pn),C.resetTextureUnits();const se=O.fog,fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,ve=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ye.workingColorSpace,ye=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=S.get(W.envMap||fe,ye),Ge=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$e=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!X.morphAttributes.position,dt=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color;let yt=0;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(yt=M.toneMapping);const nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Wt=nt!==void 0?nt.length:0,Se=we.get(W),Bn=E.state.lights;if(Ie===!0&&(rt===!0||x!==V)){const st=x===V&&W.id===z;de.setState(W,x,st)}let it=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Bn.state.version||Se.outputColorSpace!==ve||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==Ne||W.fog===!0&&Se.fog!==se||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==de.numPlanes||Se.numIntersection!==de.numIntersection)||Se.vertexAlphas!==Ge||Se.vertexTangents!==$e||Se.morphTargets!==Ae||Se.morphNormals!==dt||Se.morphColors!==vt||Se.toneMapping!==yt||Se.morphTargetsCount!==Wt||!!Se.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Se.__version=W.version);let kn=Se.currentProgram;it===!0&&(kn=ba(W,O,G),w&&W.isNodeMaterial&&w.onUpdateProgram(W,kn,Se));let Kn=!1,Ti=!1,kr=!1;const at=kn.getUniforms(),bt=Se.uniforms;if(he.useProgram(kn.program)&&(Kn=!0,Ti=!0,kr=!0),W.id!==z&&(z=W.id,Ti=!0),Se.needsLights){const st=Wp(E.state.lightProbeGridArray,G);Se.lightProbeGrid!==st&&(Se.lightProbeGrid=st,Ti=!0)}if(Kn||V!==x){he.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),at.setValue(U,"projectionMatrix",x.projectionMatrix),at.setValue(U,"viewMatrix",x.matrixWorldInverse);const st=at.map.cameraPosition;st!==void 0&&st.setValue(U,Dt.setFromMatrixPosition(x.matrixWorld)),tt.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&at.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),V!==x&&(V=x,Ti=!0,kr=!0)}if(Se.needsLights&&(Bn.state.directionalShadowMap.length>0&&at.setValue(U,"directionalShadowMap",Bn.state.directionalShadowMap,C),Bn.state.spotShadowMap.length>0&&at.setValue(U,"spotShadowMap",Bn.state.spotShadowMap,C),Bn.state.pointShadowMap.length>0&&at.setValue(U,"pointShadowMap",Bn.state.pointShadowMap,C)),G.isSkinnedMesh){at.setOptional(U,G,"bindMatrix"),at.setOptional(U,G,"bindMatrixInverse");const st=G.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),at.setValue(U,"boneTexture",st.boneTexture,C))}G.isBatchedMesh&&(at.setOptional(U,G,"batchingTexture"),at.setValue(U,"batchingTexture",G._matricesTexture,C),at.setOptional(U,G,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",G._indirectTexture,C),at.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",G._colorsTexture,C));const Ei=X.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&De.update(G,X,kn),(Ti||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,at.setValue(U,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(bt.envMapIntensity.value=O.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=RS()),Ti){if(at.setValue(U,"toneMappingExposure",M.toneMappingExposure),Se.needsLights&&Xp(bt,kr),se&&W.fog===!0&&ce.refreshFogUniforms(bt,se),ce.refreshMaterialUniforms(bt,W,Oe,et,E.state.transmissionRenderTarget[x.id]),Se.needsLights&&Se.lightProbeGrid){const st=Se.lightProbeGrid;bt.probesSH.value=st.texture,bt.probesMin.value.copy(st.boundingBox.min),bt.probesMax.value.copy(st.boundingBox.max),bt.probesResolution.value.copy(st.resolution)}so.upload(U,vd(Se),bt,C)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(so.upload(U,vd(Se),bt,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&at.setValue(U,"center",G.center),at.setValue(U,"modelViewMatrix",G.modelViewMatrix),at.setValue(U,"normalMatrix",G.normalMatrix),at.setValue(U,"modelMatrix",G.matrixWorld),W.uniformsGroups!==void 0){const st=W.uniformsGroups;for(let As=0,Dr=st.length;As<Dr;As++){const Sd=st[As];K.update(Sd,kn),K.bind(Sd,kn)}}return kn}function Xp(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function jp(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,O,X){const W=we.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),we.get(x.texture).__webglTexture=O,we.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){const X=we.get(x);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Kp=U.createFramebuffer();this.setRenderTarget=function(x,O=0,X=0){L=x,k=O,B=X;let W=null,G=!1,se=!1;if(x){const fe=we.get(x);if(fe.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(U.FRAMEBUFFER,fe.__webglFramebuffer),F.copy(x.viewport),Y.copy(x.scissor),ee=x.scissorTest,he.viewport(F),he.scissor(Y),he.setScissorTest(ee),z=-1;return}else if(fe.__webglFramebuffer===void 0)C.setupRenderTarget(x);else if(fe.__hasExternalTextures)C.rebindTextures(x,we.get(x.texture).__webglTexture,we.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ne=x.depthTexture;if(fe.__boundDepthTexture!==Ne){if(Ne!==null&&we.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(x)}}const ve=x.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(se=!0);const ye=we.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ye[O])?W=ye[O][X]:W=ye[O],G=!0):x.samples>0&&C.useMultisampledRTT(x)===!1?W=we.get(x).__webglMultisampledFramebuffer:Array.isArray(ye)?W=ye[X]:W=ye,F.copy(x.viewport),Y.copy(x.scissor),ee=x.scissorTest}else F.copy(xe).multiplyScalar(Oe).floor(),Y.copy(pe).multiplyScalar(Oe).floor(),ee=Pe;if(X!==0&&(W=Kp),he.bindFramebuffer(U.FRAMEBUFFER,W)&&he.drawBuffers(x,W),he.viewport(F),he.scissor(Y),he.setScissorTest(ee),G){const fe=we.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,fe.__webglTexture,X)}else if(se){const fe=O;for(let ve=0;ve<x.textures.length;ve++){const ye=we.get(x.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,ye.__webglTexture,X,fe)}}else if(x!==null&&X!==0){const fe=we.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fe.__webglTexture,X)}z=-1},this.readRenderTargetPixels=function(x,O,X,W,G,se,fe,ve=0){if(!(x&&x.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){he.bindFramebuffer(U.FRAMEBUFFER,ye);try{const Ne=x.textures[ve],Ge=Ne.format,$e=Ne.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),!tt.textureFormatReadable(Ge)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable($e)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-W&&X>=0&&X<=x.height-G&&U.readPixels(O,X,W,G,He.convert(Ge),He.convert($e),se)}finally{const Ne=L!==null?we.get(L).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(x,O,X,W,G,se,fe,ve=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye)if(O>=0&&O<=x.width-W&&X>=0&&X<=x.height-G){he.bindFramebuffer(U.FRAMEBUFFER,ye);const Ne=x.textures[ve],Ge=Ne.format,$e=Ne.type;if(x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),!tt.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),U.readPixels(O,X,W,G,He.convert(Ge),He.convert($e),0);const dt=L!==null?we.get(L).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,dt);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sv(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer(Ae),U.deleteSync(vt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,O=null,X=0){const W=Math.pow(2,-X),G=Math.floor(x.image.width*W),se=Math.floor(x.image.height*W),fe=O!==null?O.x:0,ve=O!==null?O.y:0;C.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,fe,ve,G,se),he.unbindTexture()};const qp=U.createFramebuffer(),Yp=U.createFramebuffer();this.copyTextureToTexture=function(x,O,X=null,W=null,G=0,se=0){let fe,ve,ye,Ne,Ge,$e,Ae,dt,vt;const yt=x.isCompressedTexture?x.mipmaps[se]:x.image;if(X!==null)fe=X.max.x-X.min.x,ve=X.max.y-X.min.y,ye=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Ge=X.min.y,$e=X.isBox3?X.min.z:0;else{const bt=Math.pow(2,-G);fe=Math.floor(yt.width*bt),ve=Math.floor(yt.height*bt),x.isDataArrayTexture?ye=yt.depth:x.isData3DTexture?ye=Math.floor(yt.depth*bt):ye=1,Ne=0,Ge=0,$e=0}W!==null?(Ae=W.x,dt=W.y,vt=W.z):(Ae=0,dt=0,vt=0);const nt=He.convert(O.format),Wt=He.convert(O.type);let Se;O.isData3DTexture?(C.setTexture3D(O,0),Se=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Se=U.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Se=U.TEXTURE_2D),he.activeTexture(U.TEXTURE0),he.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),he.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),he.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Bn=he.getParameter(U.UNPACK_ROW_LENGTH),it=he.getParameter(U.UNPACK_IMAGE_HEIGHT),kn=he.getParameter(U.UNPACK_SKIP_PIXELS),Kn=he.getParameter(U.UNPACK_SKIP_ROWS),Ti=he.getParameter(U.UNPACK_SKIP_IMAGES);he.pixelStorei(U.UNPACK_ROW_LENGTH,yt.width),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt.height),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),he.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),he.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const kr=x.isDataArrayTexture||x.isData3DTexture,at=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const bt=we.get(x),Ei=we.get(O),st=we.get(bt.__renderTarget),As=we.get(Ei.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,st.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Dr=0;Dr<ye;Dr++)kr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(x).__webglTexture,G,$e+Dr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.get(O).__webglTexture,se,vt+Dr)),U.blitFramebuffer(Ne,Ge,fe,ve,Ae,dt,fe,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||we.has(x)){const bt=we.get(x),Ei=we.get(O);he.bindFramebuffer(U.READ_FRAMEBUFFER,qp),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yp);for(let st=0;st<ye;st++)kr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,G,$e+st):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,G),at?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ei.__webglTexture,se,vt+st):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ei.__webglTexture,se),G!==0?U.blitFramebuffer(Ne,Ge,fe,ve,Ae,dt,fe,ve,U.COLOR_BUFFER_BIT,U.NEAREST):at?U.copyTexSubImage3D(Se,se,Ae,dt,vt+st,Ne,Ge,fe,ve):U.copyTexSubImage2D(Se,se,Ae,dt,Ne,Ge,fe,ve);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(Se,se,Ae,dt,vt,fe,ve,ye,nt,Wt,yt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,se,Ae,dt,vt,fe,ve,ye,nt,yt.data):U.texSubImage3D(Se,se,Ae,dt,vt,fe,ve,ye,nt,Wt,yt):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,se,Ae,dt,fe,ve,nt,Wt,yt.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,se,Ae,dt,yt.width,yt.height,nt,yt.data):U.texSubImage2D(U.TEXTURE_2D,se,Ae,dt,fe,ve,nt,Wt,yt);he.pixelStorei(U.UNPACK_ROW_LENGTH,Bn),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),he.pixelStorei(U.UNPACK_SKIP_PIXELS,kn),he.pixelStorei(U.UNPACK_SKIP_ROWS,Kn),he.pixelStorei(U.UNPACK_SKIP_IMAGES,Ti),se===0&&O.generateMipmaps&&U.generateMipmap(Se),he.unbindTexture()},this.initRenderTarget=function(x){we.get(x).__webglFramebuffer===void 0&&C.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?C.setTextureCube(x,0):x.isData3DTexture?C.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?C.setTexture2DArray(x,0):C.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){k=0,B=0,L=null,he.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ys}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ye._getUnpackColorSpace()}},kS={hearts:"#e23b3b",diamonds:"#e23b3b",spades:"#1a1a1a",clubs:"#1a1a1a"},vn=256,Bt=360,Qu=new Map,dr=null;function DS(t){return`${t.rank}-${t.suit}-${t.enhancement}-${t.edition}-${t.seal}`}var eh=new Map,Fs=new Map;function LS(t,e){const n=eh.get(t);if(n){e(n);return}const i=Fs.get(t);if(i){i.push(e);return}Fs.set(t,[e]);const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{eh.set(t,r),Fs.get(t)?.forEach(s=>s(r)),Fs.delete(t)},r.onerror=()=>{Fs.delete(t)},r.src=t}var IS={bonus:"rgba( 60, 120, 255, 0.28)",mult:"rgba(220,  55,  55, 0.28)",wild:"rgba(160,  70, 255, 0.28)",glass:"rgba(100, 210, 255, 0.28)",steel:"rgba(180, 192, 208, 0.38)",stone:"rgba(120, 120, 120, 0.50)",gold:"rgba(245, 195,  40, 0.38)",lucky:"rgba( 60, 200,  80, 0.28)"},US={foil:"rgba(180, 220, 255, 0.30)",holographic:"rgba(200, 100, 255, 0.28)",polychrome:"rgba(255, 180,  60, 0.25)",negative:"rgba( 20,  20,  20, 0.55)"};function th(t,e,n,i){t.save(),ji(t,6,6,n-12,i-12,22),t.clip(),t.fillStyle=e,t.fillRect(0,0,n,i),t.restore()}function NS(t,e,n,i,r,s){const a=e.getContext("2d");if(!a)return;a.clearRect(0,0,e.width,e.height),a.save(),ji(a,6,6,e.width-12,e.height-12,22),a.clip(),a.drawImage(t,0,0,e.width,e.height),a.restore();const o=IS[i];o&&th(a,o,e.width,e.height);const l=US[r];l&&th(a,l,e.width,e.height),a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)",ji(a,6,6,e.width-12,e.height-12,22),a.stroke(),a.lineWidth=1,a.strokeStyle="rgba(255,255,255,0.18)",ji(a,9,9,e.width-18,e.height-18,19),a.stroke(),s!=="none"&&(a.fillStyle=s==="gold"?"#ffd24a":s==="red"?"#ff5a5a":s==="blue"?"#54a8ff":"#c084ff",a.beginPath(),a.arc(e.width/2,e.height-50,22,0,Math.PI*2),a.fill(),a.lineWidth=3,a.strokeStyle="rgba(0,0,0,0.4)",a.stroke()),n.needsUpdate=!0}function gp(t,e,n,i,r,s){for(const a of["svg","png","webp","jpg"])LS(`${t}.${a}`,o=>NS(o,e,n,i,r,s))}function ji(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function Ul(t){const e=DS(t),n=Qu.get(e);if(n)return n;const i=document.createElement("canvas");i.width=vn,i.height=Bt;const r=i.getContext("2d");if(r.fillStyle="#fdfdfd",ji(r,6,6,vn-12,Bt-12,22),r.fill(),r.lineWidth=4,r.strokeStyle="#222",ji(r,6,6,vn-12,Bt-12,22),r.stroke(),t.enhancement==="stone")r.fillStyle="#555",r.font="bold 56px serif",r.textAlign="center",r.fillText("STONE",vn/2,Bt/2+18);else{const o=kS[t.suit],l=yo[t.rank],c=gg[t.suit];r.fillStyle=o,r.textAlign="center",r.textBaseline="middle";const d=l==="10"?78:98,h=l==="10"?64:55;r.font=`900 ${d}px "Trebuchet MS", sans-serif`,r.fillText(l,h,68),r.font="bold 34px serif",r.fillText(c,48,116),r.save(),r.translate(vn,Bt),r.rotate(Math.PI),r.textAlign="center",r.textBaseline="middle",r.font=`900 ${d}px "Trebuchet MS", sans-serif`,r.fillText(l,h,68),r.font="bold 34px serif",r.fillText(c,48,116),r.restore(),r.textAlign="center",r.font="bold 160px serif",r.fillText(c,vn/2,Bt/2+32)}(o=>{t.seal!=="none"&&(o.fillStyle=t.seal==="gold"?"#ffd24a":t.seal==="red"?"#ff5a5a":t.seal==="blue"?"#54a8ff":"#c084ff",o.beginPath(),o.arc(vn/2,Bt-50,22,0,Math.PI*2),o.fill(),o.lineWidth=3,o.strokeStyle="rgba(0,0,0,0.4)",o.stroke())})(r);const a=new Qf(i);return a.colorSpace=Zt,a.anisotropy=4,Qu.set(e,a),t.enhancement!=="stone"&&gp(`/art/cards/${yo[t.rank]}_${t.suit}`,i,a,t.enhancement,t.edition,t.seal),a}function pc(){if(dr)return dr;const t=document.createElement("canvas");t.width=vn,t.height=Bt;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,vn,Bt);n.addColorStop(0,"#7a1622"),n.addColorStop(1,"#3a0a12"),e.fillStyle=n,ji(e,6,6,vn-12,Bt-12,22),e.fill(),e.strokeStyle="#f0c060",e.lineWidth=3,ji(e,18,18,vn-36,Bt-36,16),e.stroke(),e.strokeStyle="rgba(240,192,96,0.25)",e.lineWidth=1;for(let i=-Bt;i<vn;i+=14)e.beginPath(),e.moveTo(i,0),e.lineTo(i+Bt,Bt),e.stroke(),e.beginPath(),e.moveTo(i,Bt),e.lineTo(i+Bt,0),e.stroke();return e.fillStyle="#f0c060",e.textAlign="center",e.font="bold 96px serif",e.fillText("♠",vn/2,Bt/2+36),dr=new Qf(t),dr.colorSpace=Zt,dr.anisotropy=4,gp("/art/back/default",t,dr,"none","base","none"),dr}var Wn=1.2,Ii=1.68,Xs=.04,_p={value:0};function OS(t){_p.value+=t}var FS=class extends Hi{card;selected=!1;hovered=!1;baseY=0;baseZ=0;baseRotZ=0;handIndex=0;faceMesh;backMesh;glowMesh;shadowMesh;glowMaterial;shadowMaterial;constructor(t){super(),this.card=t;const e=new xr(Wn,Ii),n=.5,i=new je(.06,-.08),r=new xr(Wn+n,Ii+n);this.shadowMaterial=new un({transparent:!0,depthWrite:!1,uniforms:{uSize:{value:new je(Wn+n,Ii+n)},uInner:{value:new je(Wn,Ii)},uRadius:{value:.18},uOffset:{value:i},uOpacity:{value:.55}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        uniform vec2 uSize;
        uniform vec2 uInner;
        uniform float uRadius;
        uniform vec2 uOffset;
        uniform float uOpacity;

        float sdRoundBox(vec2 p, vec2 b, float r) {
          vec2 q = abs(p) - b + vec2(r);
          return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
        }

        void main() {
          // Plane-local coords (centred). Shift sampling so the shadow falls
          // down-right of the card.
          vec2 p = (vUv - 0.5) * uSize - uOffset;
          float d = sdRoundBox(p, uInner * 0.5, uRadius);
          float pad = (uSize.x - uInner.x) * 0.5;
          // Smooth falloff from card edge outward across the padding region.
          float a = 1.0 - smoothstep(-0.02, pad * 0.9, d);
          a = pow(a, 1.8) * uOpacity;
          if (a <= 0.002) discard;
          gl_FragColor = vec4(0.0, 0.0, 0.0, a);
        }
      `}),this.shadowMesh=new en(r,this.shadowMaterial),this.shadowMesh.position.z=-Xs*.5,this.shadowMesh.renderOrder=-2;const s=.35,a=new xr(Wn+s,Ii+s);this.glowMaterial=new un({transparent:!0,depthWrite:!1,blending:2,uniforms:{uOpacity:{value:0},uTime:_p,uColor:{value:new We(6994175)},uSize:{value:new je(Wn+s,Ii+s)},uInner:{value:new je(Wn,Ii)},uRadius:{value:.18}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        uniform float uOpacity;
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec2 uSize;   // total glow plane size
        uniform vec2 uInner;  // card size
        uniform float uRadius;

        // Signed distance to a rounded box centred at origin.
        float sdRoundBox(vec2 p, vec2 b, float r) {
          vec2 q = abs(p) - b + vec2(r);
          return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
        }

        void main() {
          // Position in plane-local coordinates (centred).
          vec2 p = (vUv - 0.5) * uSize;
          float d = sdRoundBox(p, uInner * 0.5, uRadius);

          // Outside the card: soft falloff over the padding region.
          float pad = (uSize.x - uInner.x) * 0.5;
          float outer = 1.0 - smoothstep(0.0, pad, d);
          // Kill anything inside the card itself so the art isn't tinted.
          float mask = step(0.0, d) * outer;

          // Gentle breathing pulse.
          float pulse = 0.92 + 0.08 * sin(uTime * 2.2);

          // Extra easing on the falloff for a softer, more diffuse rim.
          outer = pow(outer, 1.6);
          mask = step(0.0, d) * outer;

          // Keep the glow discreet — cap overall intensity.
          float a = mask * uOpacity * pulse * 0.45;
          if (a <= 0.001) discard;
          gl_FragColor = vec4(uColor, a);
        }
      `}),this.glowMesh=new en(a,this.glowMaterial),this.glowMesh.position.z=-Xs*.25,this.glowMesh.renderOrder=-1,this.glowMesh.visible=!1;const o=new dc({map:Ul(t),roughness:.55,metalness:.05,alphaTest:.5,emissive:new We(0),emissiveIntensity:0}),l=new dc({map:pc(),roughness:.55,metalness:.05,alphaTest:.5});this.faceMesh=new en(e,o),this.faceMesh.position.z=Xs/2,this.backMesh=new en(e,l),this.backMesh.position.z=-Xs/2,this.backMesh.rotation.y=Math.PI,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this,this.add(this.shadowMesh,this.faceMesh,this.backMesh,this.glowMesh)}resetForCard(t){Ce.killTweensOf(this.position),Ce.killTweensOf(this.rotation),Ce.killTweensOf(this.scale),this.card=t,this.selected=!1,this.hovered=!1,this.baseY=0,this.baseZ=0,this.baseRotZ=0,this.handIndex=0,delete this.userData.keepAlive,this.position.set(0,0,0),this.rotation.set(0,0,0),this.scale.set(1,1,1),this.glowMesh.visible=!1,this.glowMaterial.uniforms.uOpacity.value=0;const e=this.faceMesh.material;e.map=Ul(t),e.emissive.setHex(0),e.emissiveIntensity=0,e.needsUpdate=!0,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this}setFaceDown(t){const e=this.faceMesh.material;e.map=t?pc():Ul(this.card),e.needsUpdate=!0}moveTo(t,e=.45,n=0){this.baseY=t.y,this.baseZ=t.z??0,this.baseRotZ=t.rotZ??0,Ce.to(this.position,{x:t.x,y:this.baseY+(this.selected?.45:0)+(this.hovered?.2:0),z:this.baseZ+(this.selected?.6:0)+(this.hovered?.5:0),duration:e,delay:n,ease:"power3.out"}),Ce.to(this.rotation,{x:0,y:0,z:this.baseRotZ,duration:e,delay:n,ease:"power3.out"})}setHover(t){this.hovered!==t&&(this.hovered=t,Ce.to(this.position,{y:this.baseY+(this.selected?.45:0)+(t?.2:0),z:this.baseZ+(this.selected?.6:0)+(t?.5:0),duration:.18,ease:"power2.out"}),Ce.to(this.rotation,{x:t?-.05:0,duration:.18,ease:"power2.out"}))}setSelected(t){if(this.selected===t)return;this.selected=t,Ce.to(this.position,{y:this.baseY+(t?.45:0)+(this.hovered?.2:0),z:this.baseZ+(t?.6:0)+(this.hovered?.5:0),duration:.22,ease:"back.out(2)"});const e=this.glowMaterial.uniforms.uOpacity;t&&(this.glowMesh.visible=!0),Ce.to(e,{value:t?1:0,duration:t?.28:.22,ease:t?"power2.out":"power2.in",onComplete:()=>{this.selected||(this.glowMesh.visible=!1)}})}pulse(t=1.18,e=.35){const n=Ce.timeline();n.to(this.scale,{x:t*1.08,y:t*.92,z:t,duration:e*.25,ease:"power2.out"}),n.to(this.scale,{x:t*.95,y:t*1.05,z:t,duration:e*.25,ease:"sine.inOut"}),n.to(this.scale,{x:1,y:1,z:1,duration:e*.5,ease:"elastic.out(1, 0.5)"})}flash(t=16765514,e=.5){const n=this.faceMesh.material;n.emissive.setHex(t),Ce.fromTo(n,{emissiveIntensity:0},{emissiveIntensity:.9,duration:e*.3,ease:"power2.out",yoyo:!0,repeat:1})}dispose(){this.faceMesh.geometry.dispose(),this.faceMesh.material.dispose(),this.backMesh.material.dispose(),this.glowMesh.geometry.dispose(),this.glowMaterial.dispose(),this.shadowMesh.geometry.dispose(),this.shadowMaterial.dispose()}},Yr=400,BS=class{points;positions;colors;sizes;data=[];cursor=0;constructor(){const t=new bi;this.positions=new Float32Array(Yr*3),this.colors=new Float32Array(Yr*3),this.sizes=new Float32Array(Yr),t.setAttribute("position",new En(this.positions,3)),t.setAttribute("color",new En(this.colors,3)),t.setAttribute("size",new En(this.sizes,1));const e=new un({uniforms:{uPixel:{value:window.devicePixelRatio||1}},transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,vertexShader:`
        attribute float size;
        varying vec3 vColor;
        uniform float uPixel;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uPixel * (200.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.0, length(d));
          gl_FragColor = vec4(vColor, a);
        }
      `});this.points=new Dv(t,e),this.points.frustumCulled=!1,this.points.renderOrder=10;for(let n=0;n<Yr;n++)this.data[n]={active:!1,age:0,life:1,vx:0,vy:0,vz:0,gravity:0,startSize:1},this.sizes[n]=0}emit(t,e={}){const n=e.count??12,i=e.color??new We("#ffd24a"),r=e.spread??.8,s=e.speed??2.2,a=e.life??.9,o=e.size??14,l=e.gravity??-4.5,c=t.clone();this.points.parent&&this.points.parent.worldToLocal(c);for(let d=0;d<n;d++){const h=this.cursor;this.cursor=(this.cursor+1)%Yr;const u=this.data[h];u.active=!0,u.age=0,u.life=a*(.7+Math.random()*.6);const m=Math.random()*Math.PI*2,_=Math.random()*r;u.vx=Math.cos(m)*_*s*.5,u.vy=s*(.6+Math.random()*.8),u.vz=(Math.random()-.5)*r,u.gravity=l,u.startSize=o*(.7+Math.random()*.6),this.positions[h*3+0]=c.x,this.positions[h*3+1]=c.y,this.positions[h*3+2]=c.z,this.colors[h*3+0]=i.r,this.colors[h*3+1]=i.g,this.colors[h*3+2]=i.b,this.sizes[h]=u.startSize}}update(t){let e=!1;for(let n=0;n<Yr;n++){const i=this.data[n];if(!i.active)continue;if(i.age+=t,i.age>=i.life){i.active=!1,this.sizes[n]=0;continue}e=!0,i.vy+=i.gravity*t,this.positions[n*3+0]+=i.vx*t,this.positions[n*3+1]+=i.vy*t,this.positions[n*3+2]+=i.vz*t;const r=i.age/i.life;this.sizes[n]=i.startSize*(1-r)}(e||this.cursor!==0)&&(this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("size").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0)}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}},Bs="./";function vp(t){const e=t.replace(/^\/+/,"");return Bs===""||Bs==="./"?`./${e}`:`${Bs.endsWith("/")?Bs:`${Bs}/`}${e}`}var zS=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],VS=["clubs","diamonds","hearts","spades"],yp="art/ui/background.png",HS="art/back/default.svg",GS=zS.flatMap(t=>VS.map(e=>`art/cards/${t}_${e}.svg`)),WS=["art/ui/open-poker-logo.png",yp,"art/ui/background.svg","art/ui/chip.svg","art/ui/coin.svg","art/ui/btn_discard.svg","art/ui/btn_new_run.svg","art/ui/btn_options.svg","art/ui/btn_play.svg","art/ui/btn_run_info.svg",HS,"art/back/default.png","art/blinds/small.svg","art/blinds/big.svg","art/blinds/boss.svg","art/jokers/joker_01.svg","art/jokers/joker_02.svg","art/jokers/joker_03.svg","art/jokers/joker_04.svg","art/jokers/joker_05.svg","art/consumables/planet.svg","art/consumables/spectral.svg","art/consumables/tarot.svg",...GS];function $S(t){return`art/cards/${yo[t.rank]}_${t.suit}.svg`}function XS(t){return[...new Set(t)]}function nh(t,e,n){return Math.max(e,Math.min(n,t))}function jS(){const t=new xr(2,2),e=new un({uniforms:{uTime:{value:0},uColorA:{value:new We("#107052")},uColorB:{value:new We("#063329")},uColorC:{value:new We("#29a36d")},uMap:{value:null},uUseMap:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 1.0, 1.0); // full-screen quad behind everything
      }
    `,fragmentShader:`
      precision highp float;
      uniform float uTime;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      uniform sampler2D uMap;
      uniform float uUseMap;
      varying vec2 vUv;

      // Soft value-noise so the white field has a little table texture.
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vUv * 2.0 - 1.0;
        float r = length(uv);

        float n = noise(uv * 3.0 + uTime * 0.08);
        n += 0.5 * noise(uv * 6.0 - uTime * 0.05);
        n *= 0.4;

        vec3 col = mix(uColorA, uColorB, smoothstep(0.0, 1.35, r));
        col = mix(col, uColorC, n * 0.11);
        col *= 1.0 - smoothstep(0.72, 1.35, r) * 0.22;

        vec3 imageCol = texture2D(uMap, vUv).rgb;
        col = mix(col, imageCol, uUseMap);

        gl_FragColor = vec4(col, 1.0);
      }
    `,depthTest:!1,depthWrite:!1}),n=new en(t,e);return n.renderOrder=-1,n.frustumCulled=!1,n}function KS(t){const e=new Zv;let n=null,i=!1;const r=t.material;return(()=>{if(i)return;const a=vp(yp);e.load(a,o=>{if(i){o.dispose();return}o.colorSpace=Zt,n=o,r.uniforms.uMap.value=o,r.uniforms.uUseMap.value=1},void 0,()=>{})})(),{dispose:()=>{i=!0,r.uniforms.uMap.value=null,r.uniforms.uUseMap.value=0,n?.dispose()}}}function qS(t){const e=new Mv,n=new In(28,t.clientWidth/t.clientHeight,.1,100);n.position.set(0,1.2,12),n.lookAt(0,.6,0);const i=new PS({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(t.clientWidth,t.clientHeight),i.outputColorSpace=Zt,t.appendChild(i.domElement);const r=jS();e.add(r);const s=KS(r);e.add(new t0(16777215,.55));const a=new Cu(16777215,1.1);a.position.set(2,4,5),e.add(a);const o=new Cu(8964351,.4);o.position.set(-3,2,-2),e.add(o);const l=new Hi;l.position.set(0,-.9,0),l.scale.setScalar(.7),e.add(l);const c=new Hi;c.position.set(0,.4,0),c.scale.setScalar(.78),e.add(c);const d=new Hi;d.position.set(4.6,-1.75,0),d.scale.setScalar(.68),d.rotation.z=-.04,e.add(d);const h=new xr(Wn,Ii),u=new dc({map:pc(),roughness:.85,metalness:.05,alphaTest:.5}),m=12,_=[];for(let k=0;k<m;k++){const B=new en(h,u);B.position.set(k*.012,k*.018,k*Xs*.5),d.add(B),_.push(B)}const f=k=>{const B=Math.max(0,Math.min(m,Math.ceil(k/52*m)));for(let L=0;L<_.length;L++)_[L].visible=L<B};f(52);const g=new BS;e.add(g.points);const p=(k,B)=>{g.emit(k,B)},y=()=>new $,T=k=>new We(k),b=()=>{const k=Math.max(1,t.clientWidth),B=Math.max(1,t.clientHeight);if(k<=700&&B>k*1.08){l.position.set(0,-1.5,0),l.scale.setScalar(.58),c.position.set(0,.05,0),c.scale.setScalar(.62),d.position.set(1.68,-2.18,0),d.scale.setScalar(.46);return}const L=nh(Math.min(k/1440,B/900),.78,1),z=nh((1920-k)/1920,0,.5)*1.15+(1-L)*.35,V=-.9+(1-L)*1.35,F=.4+(1-L)*.28,Y=4.6-(1-L)*.85,ee=-1.75+(1-L)*.45;l.position.set(z,V,0),l.scale.setScalar(.7*L),c.position.set(z,F,0),c.scale.setScalar(.78*L),d.position.set(Y,ee,0),d.scale.setScalar(.68*L)};b();const E=()=>{const k=t.clientWidth,B=t.clientHeight;i.setSize(k,B),n.aspect=k/B,n.updateProjectionMatrix(),b()};window.addEventListener("resize",E);const R=new p0;let P=0;const v=()=>{const k=R.getDelta(),B=R.elapsedTime;r.material.uniforms.uTime.value=B,OS(k),g.update(k),i.render(e,n),P=requestAnimationFrame(v)};return P=requestAnimationFrame(v),{scene:e,camera:n,renderer:i,handGroup:l,playGroup:c,deckGroup:d,setDeckCount:f,particles:g,emitBurst:p,createVector3:y,createColor:T,getMetrics:()=>({frame:i.info.render.frame,calls:i.info.render.calls,triangles:i.info.render.triangles,points:i.info.render.points,lines:i.info.render.lines}),dispose:()=>{cancelAnimationFrame(P),window.removeEventListener("resize",E),s.dispose(),r.geometry.dispose(),r.material.dispose(),h.dispose(),u.dispose(),g.dispose(),i.dispose(),i.domElement.remove()},shake:(k=.15,B=.35)=>{const L={x:n.position.x,y:n.position.y},z=Ce.timeline({onComplete:()=>{n.position.x=L.x,n.position.y=L.y}}),V=6;for(let F=0;F<V;F++)z.to(n.position,{x:L.x+(Math.random()-.5)*k*2,y:L.y+(Math.random()-.5)*k*2,duration:B/V,ease:"sine.inOut"});z.to(n.position,{x:L.x,y:L.y,duration:.1,ease:"power2.out"})}}}function mc(t){if(t===0)return[];const e=typeof window<"u"&&window.innerWidth<=700&&window.innerHeight>window.innerWidth*1.08,n=e?4.25:9,i=Math.min(Wn*(e?.64:1.05),n/Math.max(t-1,1)),r=-((t-1)*i)/2,s=e?.025:.04,a=e?.025:.05;return Array.from({length:t},(o,l)=>{const c=r+l*i,d=l-(t-1)/2,h=-d*s;return{x:c,y:-Math.abs(d)*a*.5,z:l*.02,rotZ:h}})}function YS(t){const e=typeof window<"u"&&window.innerWidth<=700&&window.innerHeight>window.innerWidth*1.08?Math.min(Wn*.72,3.55/Math.max(t-1,1)):Wn*1.1,n=-((t-1)*e)/2;return Array.from({length:t},(i,r)=>({x:n+r*e,y:.7,z:0,rotZ:0}))}var pr=1e-4;function JS(t,e,n){return Math.max(e,Math.min(n,t))}function fn(t,e,n={}){const i=JS(n.pan??0,-1,1);if(Math.abs(i)<.001)return e;const r=t.createStereoPanner();return r.pan.value=i,r.connect(e),r}function Ct(t,e,n,i,r,s=t.currentTime){const a=t.createGain();return a.gain.setValueAtTime(pr,s),a.gain.exponentialRampToValueAtTime(Math.max(pr,r),s+n),a.gain.exponentialRampToValueAtTime(pr,s+n+i),a.connect(e),a}function ws(t,e,n,i,r,s,a=t.currentTime){const o=t.createGain();return o.gain.setValueAtTime(pr,a),o.gain.exponentialRampToValueAtTime(Math.max(pr,s),a+n),o.gain.setValueAtTime(Math.max(pr,s),a+n+i),o.gain.exponentialRampToValueAtTime(pr,a+n+i+r),o.connect(e),o}function hn(t,e,n,i,r,s=0,a=t.currentTime){const o=t.createOscillator();return o.type=n,o.frequency.setValueAtTime(i,a),o.detune.setValueAtTime(s,a),o.connect(e),o.start(a),o.stop(a+r+.05),o}function ZS(t,e){const n=Math.max(1,Math.floor(t.sampleRate*e)),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let s=0;s<n;s++)r[s]=Math.random()*2-1;return i}function Pn(t,e,n,i=t.currentTime){const r=t.createBufferSource();return r.buffer=ZS(t,n),r.connect(e),r.start(i),r.stop(i+n+.05),r}function Ut(t,e,n,i,r=1){const s=t.createBiquadFilter();return s.type=n,s.frequency.value=i,s.Q.value=r,s.connect(e),s}function Ki(t,e,n,i,r,s,a=0){hn(t,Ct(t,e,.002,r,i,s),"triangle",n,r,a,s).frequency.exponentialRampToValueAtTime(n*.985,s+r)}function QS(t,e,n={}){const i=n.volume??.07,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;Pn(t,Ut(t,Ut(t,Ct(t,s,.0015,.045,i,a),"highpass",550*r,.7),"lowpass",2100*r,.45),.055,a),hn(t,Ct(t,s,.002,.035,i*.28,a),"sine",180*r,.04,n.detune??0,a)}function eM(t,e,n={}){const i=n.volume??.18,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;hn(t,Ut(t,ws(t,s,.008,.018,.16,i,a),"lowpass",900*r,.65),"sine",138*r,.2,n.detune??0,a).frequency.exponentialRampToValueAtTime(220*r,a+.09),Pn(t,Ut(t,Ct(t,s,.003,.11,i*.42,a+.006),"bandpass",760*r,.9),.13,a+.006)}function tM(t,e,n={}){const i=n.volume??.14,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;hn(t,Ut(t,ws(t,s,.007,.01,.15,i,a),"lowpass",760*r,.55),"sine",250*r,.18,n.detune??0,a).frequency.exponentialRampToValueAtTime(120*r,a+.12),Pn(t,Ut(t,Ct(t,s,.003,.08,i*.34,a+.01),"bandpass",560*r,.8),.1,a+.01)}function nM(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime,o=Ut(t,Ct(t,s,.001,.095,i,a),"bandpass",2600*r,1.15);o.frequency.exponentialRampToValueAtTime(930*r,a+.11),Pn(t,o,.12,a),hn(t,Ct(t,s,.002,.06,i*.16,a+.045),"triangle",92*r,.075,n.detune??0,a+.045)}function iM(t,e,n={}){const i=n.volume??.28,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime,o=Ut(t,Ct(t,s,.004,.13,i,a),"bandpass",2900*r,1.8);o.frequency.exponentialRampToValueAtTime(760*r,a+.14),Pn(t,o,.15,a),hn(t,Ct(t,s,.001,.05,i*.34,a+.035),"triangle",820*r,.06,(n.detune??0)+7,a+.035)}function rM(t,e,n={}){const i=n.volume??.36,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime,o=Ut(t,ws(t,s,.012,.03,.29,i,a),"lowpass",420*r,1.2);o.frequency.exponentialRampToValueAtTime(2600*r,a+.18),o.frequency.exponentialRampToValueAtTime(420*r,a+.34),Pn(t,o,.36,a),hn(t,Ct(t,s,.015,.22,i*.18,a+.02),"sine",86*r,.26,n.detune??0,a+.02).frequency.exponentialRampToValueAtTime(118*r,a+.2)}function sM(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime,o=Ut(t,Ut(t,ws(t,s,.004,.015,.25,i,a),"highpass",180*r,.7),"lowpass",4200*r,.9);o.frequency.exponentialRampToValueAtTime(380*r,a+.28),Pn(t,o,.31,a),hn(t,Ct(t,s,.006,.18,i*.2,a+.04),"triangle",160*r,.22,n.detune??0,a+.04).frequency.exponentialRampToValueAtTime(78*r,a+.22)}function aM(t,e,n={}){const i=n.volume??.16,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;Ki(t,s,930*r,i,.055,a,(n.detune??0)-5),Ki(t,s,1570*r,i*.42,.04,a+.002,(n.detune??0)+8),Pn(t,Ut(t,Ct(t,s,.001,.025,i*.42,a),"highpass",1700*r,.5),.032,a)}function oM(t,e,n={}){const i=n.volume??.17,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;Ki(t,s,720*r,i*.65,.07,a,n.detune??0),Ki(t,s,1440*r,i*.54,.06,a+.004,(n.detune??0)+11),Ki(t,s,2160*r,i*.28,.05,a+.008,(n.detune??0)-9)}function lM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;[330,440,660].forEach((o,l)=>{const c=a+l*.045;hn(t,Ct(t,s,.004,.22-l*.035,i*(1-l*.16),c),l===0?"triangle":"sine",o*r,.24,n.detune??0,c).frequency.exponentialRampToValueAtTime(o*1.08*r,c+.14)}),Pn(t,Ut(t,Ct(t,s,.003,.16,i*.34,a+.035),"highpass",2400*r,.45),.18,a+.035)}function cM(t,e,n={}){const i=n.volume??.42,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;[0,.09].forEach((o,l)=>{const c=a+o,d=(l===0?1040:1320)*r;Ki(t,s,d,i*.8,.32,c,(n.detune??0)+l*6),Ki(t,s,d*1.52,i*.38,.24,c+.006,(n.detune??0)-l*8),Pn(t,Ut(t,Ct(t,s,.001,.055,i*.34,c),"highpass",2600*r,.7),.07,c)}),[523.25,659.25,783.99,1046.5].forEach((o,l)=>{const c=a+.16+l*.055;Ki(t,s,o*r,i*.42,.28,c,n.detune??0)})}function dM(t,e,n={}){const i=n.volume??.48,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime,o=[392,523.25,659.25,783.99,1046.5];o.forEach((l,c)=>{const d=a+c*.095,h=c===o.length-1?.65:.42;hn(t,Ut(t,ws(t,s,.01,.04,h,i*(c===o.length-1?.9:.62),d),"lowpass",3600*r,.8),"triangle",l*r,h+.04,n.detune??0,d),hn(t,Ct(t,s,.002,.2,i*.18,d+.012),"sine",l*2.01*r,.22,(n.detune??0)+4,d+.012)}),Pn(t,Ut(t,Ct(t,s,.02,.6,i*.18,a+.32),"highpass",3200*r,.4),.7,a+.32)}function uM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime,o=Ut(t,s,"lowpass",850*r,.45),l=[196,174.61,155.56,130.81];l.forEach((c,d)=>{const h=a+d*.22,u=d===l.length-1?1:.62,m=ws(t,o,.045,.02,u,i*(1-d*.08),h);hn(t,m,"triangle",c*r,u+.04,(n.detune??0)-5,h).frequency.exponentialRampToValueAtTime(c*.96*r,h+u),hn(t,Ct(t,m,.05,u*.82,i*.24,h+.01),"sine",c/2*r,u,n.detune??0,h+.01)}),Pn(t,Ut(t,Ct(t,s,.03,.55,i*.18,a+.12),"lowpass",260*r,.8),.65,a+.12)}function hM(t,e,n={}){const i=n.volume??.24,r=n.pitch??1,s=fn(t,e,n),a=t.currentTime;hn(t,Ct(t,s,.0015,.055,i,a),"triangle",360*r,.07,n.detune??0,a).frequency.exponentialRampToValueAtTime(170*r,a+.055),Pn(t,Ut(t,Ct(t,s,.001,.025,i*.5,a+.002),"highpass",1600*r,.6),.032,a+.002)}var fM=""+new URL("Veludo No Copo-CQSci05v.mp3",import.meta.url).href,pM=class{ctx;dest;buffer=null;source=null;pendingStart=!1;constructor(t,e){this.ctx=t,this.dest=e,this.load()}async load(){try{const t=await(await fetch(fM)).arrayBuffer();this.buffer=await this.ctx.decodeAudioData(t),this.pendingStart&&(this.pendingStart=!1,this.playBuffer())}catch(t){console.warn("[BackgroundMusic] Failed to load music file:",t)}}start(){this.buffer?this.playBuffer():this.pendingStart=!0}stop(){if(this.pendingStart=!1,this.source){try{this.source.stop()}catch{}this.source=null}}playBuffer(){if(this.stop(),!this.buffer)return;const t=this.ctx.createBufferSource();t.buffer=this.buffer,t.loop=!0,t.connect(this.dest),t.start(),this.source=t}},ih="open-poker:muted",rh="open-poker:volume",sh="open-poker:music-muted",mM=class{ctx=null;master=null;sfxLimiter=null;musicGain=null;music=null;musicLoadPending=!1;voices=new Map;unlocked=!1;muted=!1;volume=.7;mutedListeners=new Set;musicMuted=!1;musicVolume=.06;musicMutedListeners=new Set;constructor(){try{this.muted=localStorage.getItem(ih)==="1",this.musicMuted=localStorage.getItem(sh)==="1";const t=localStorage.getItem(rh);t&&(this.volume=Math.max(0,Math.min(1,parseFloat(t))))}catch{}}registerDefaults(){const t=(e,n)=>this.register(e,{synth:n});t("click",QS),t("select",eM),t("deselect",tM),t("deal",nM),t("flip",iM),t("whoosh",rM),t("sweep",sM),t("chipTick",aM),t("multTick",oM),t("scorePop",lM),t("chaching",cM),t("win",dM),t("lose",uM),t("buttonClick",hM)}register(t,e){this.voices.set(t,e)}installUnlockListener(){const t=()=>{this.unlock(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t,{once:!1}),window.addEventListener("keydown",t,{once:!1})}ensureContext(){if(this.ctx)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.sfxLimiter=this.ctx.createDynamicsCompressor(),this.sfxLimiter.threshold.value=-13,this.sfxLimiter.knee.value=8,this.sfxLimiter.ratio.value=5,this.sfxLimiter.attack.value=.003,this.sfxLimiter.release.value=.16,this.master.connect(this.sfxLimiter),this.sfxLimiter.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicMuted?0:this.musicVolume,this.musicGain.connect(this.ctx.destination)}catch{return null}return this.ctx}unlock(){const t=this.ensureContext();t&&(t.state==="suspended"&&t.resume(),this.unlocked=!0,this.startMusicWhenReady(t))}startMusicWhenReady(t){if(!(this.musicMuted||this.music||this.musicLoadPending||!this.musicGain)){if(this.musicLoadPending=!0,this.music||!this.musicGain||this.ctx!==t){this.musicLoadPending=!1;return}this.music=new pM(t,this.musicGain),this.music.start(),this.musicLoadPending=!1}}play(t,e={}){if(this.muted||!this.unlocked)return;const n=this.ensureContext();if(!n||!this.master)return;const i=this.voices.get(t);if(i){if(i.buffer){this.playBuffer(n,i.buffer,e);return}i.url&&!i.buffer&&this.loadBuffer(n,i),i.synth&&i.synth(n,this.master,e)}}playBuffer(t,e,n){if(!this.master)return;const i=t.createBufferSource();i.buffer=e,n.detune&&(i.detune.value=n.detune),n.pitch&&(i.playbackRate.value=n.pitch);const r=t.createGain();r.gain.value=n.volume??1,i.connect(r).connect(this.master),i.start()}loadBuffer(t,e){!e.url||e.buffer||fetch(e.url).then(n=>n.arrayBuffer()).then(n=>t.decodeAudioData(n)).then(n=>{e.buffer=n}).catch(()=>{})}setMuted(t){this.muted=t;try{localStorage.setItem(ih,t?"1":"0")}catch{}this.master&&(this.master.gain.value=t?0:this.volume);for(const e of this.mutedListeners)e(t)}toggleMute(){return this.setMuted(!this.muted),this.muted}isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem(rh,String(this.volume))}catch{}this.master&&!this.muted&&(this.master.gain.value=this.volume)}onMutedChange(t){return this.mutedListeners.add(t),()=>this.mutedListeners.delete(t)}setMusicMuted(t){this.musicMuted=t;try{localStorage.setItem(sh,t?"1":"0")}catch{}this.musicGain&&(this.musicGain.gain.value=t?0:this.musicVolume),!t&&this.unlocked&&this.ctx&&this.startMusicWhenReady(this.ctx);for(const e of this.musicMutedListeners)e(t)}toggleMusicMute(){return this.setMusicMuted(!this.musicMuted),this.musicMuted}isMusicMuted(){return this.musicMuted}onMusicMutedChange(t){return this.musicMutedListeners.add(t),()=>this.musicMutedListeners.delete(t)}dispose(){this.music?.stop(),this.music=null;try{this.ctx?.close()}catch{}this.ctx=null,this.master=null,this.sfxLimiter=null,this.musicGain=null,this.musicLoadPending=!1,this.unlocked=!1}},Ee=new mM;Ee.registerDefaults();Ee.installUnlockListener();function gM(t){const{renderer:e,camera:n,handGroup:i,getHandObjects:r,onToggleSelect:s,onReorder:a}=t,o=e.domElement,l=new f0,c=new je;let d=null,h=null,u=new je,m=null,_=0;const f=.012;function g(M){return Math.max(-.7,Math.min(.7,M.position.x/4.5))}function p(M){const I=o.getBoundingClientRect();c.x=(M.clientX-I.left)/I.width*2-1,c.y=-((M.clientY-I.top)/I.height)*2+1}function y(){const M=r();if(M.length===0)return null;l.setFromCamera(c,n);const I=M.flatMap(k=>[k.faceMesh,k.backMesh]),w=l.intersectObjects(I,!1);return w.length===0?null:w[0].object.userData.cardObject??null}function T(M){l.setFromCamera(c,n);const I=new Ui(new $(0,0,1),-M),w=new $;return l.ray.intersectPlane(I,w)?w.x:null}function b(M){if(p(M),h&&!m){const w=c.x-u.x,k=c.y-u.y;if(w*w+k*k>f*f){m=h,m.position.x;const B=T(i.position.z+m.position.z);B!==null?_=B-(m.position.x+i.position.x):_=0,Ee.play("flip",{volume:.24,pan:g(m)}),Ce.to(m.position,{y:m.baseY+.6,z:m.baseZ+.4,duration:.15})}}if(m){const w=T(i.position.z+m.baseZ+.4);w!==null&&(m.position.x=w-i.position.x-_),E();return}const I=y();I!==d&&(d?.setHover(!1),d=I,d?.setHover(!0),I&&Ee.play("click",{volume:.1,detune:(Math.random()-.5)*160,pan:g(I)}),o.style.cursor=I?"pointer":"default")}function E(){const M=r().slice().sort((w,k)=>w.position.x-k.position.x),I=mc(M.length);M.forEach((w,k)=>{w.handIndex=k,w!==m&&w.moveTo(I[k],.18)})}function R(M){p(M);const I=y();I&&(h=I,u.set(c.x,c.y),o.setPointerCapture(M.pointerId))}function P(M){if(o.hasPointerCapture(M.pointerId)&&o.releasePointerCapture(M.pointerId),m){const I=r().slice().sort((k,B)=>k.position.x-B.position.x),w=mc(I.length);I.forEach((k,B)=>{k.handIndex=B,k.moveTo(w[B],.25)}),a(I.map(k=>k.card.id)),m=null,h=null;return}if(h){const I=s(h.card.id);h.setSelected(I),Ee.play(I?"select":"deselect",{detune:(Math.random()-.5)*70,pan:g(h)}),h=null}}function v(){d?.setHover(!1),d=null,o.style.cursor="default"}return o.addEventListener("pointermove",b),o.addEventListener("pointerdown",R),o.addEventListener("pointerup",P),o.addEventListener("pointerleave",v),()=>{o.removeEventListener("pointermove",b),o.removeEventListener("pointerdown",R),o.removeEventListener("pointerup",P),o.removeEventListener("pointerleave",v)}}var _M=[{action:"play_hand",description:"Play selected cards",keys:["Enter"]},{action:"discard",description:"Discard selected cards",keys:["Backspace","Delete"]},{action:"restart_run",description:"Start a new run",keys:["KeyR"]},{action:"toggle_mute",description:"Mute/unmute audio",keys:["KeyM"]}],vM={"btn-play":"play_hand","btn-discard":"discard","overlay-restart":"restart_run","btn-mute":"toggle_mute"},yM=new Map(_M.flatMap(t=>t.keys.map(e=>[e,t.action])));function SM(t){return t.ctrlKey||t.metaKey||t.altKey?null:yM.get(t.code)??null}var MM=15e3;function xM(t={}){return XS([...WS,...(t.cards??[]).map($S)]).map(e=>({url:vp(e),label:e}))}function bM(t){return new Promise((e,n)=>{const i=window.setTimeout(()=>n(new Error(`Timed out loading image: ${t}`)),MM),r=new Image;r.decoding="async",r.onload=()=>{if(window.clearTimeout(i),!r.decode){e();return}r.decode().catch(()=>{}).then(()=>e())},r.onerror=()=>{window.clearTimeout(i),n(new Error(`Failed to load image: ${t}`))},r.src=t})}async function TM(t,e={}){const n=xM(e),i=n.length,r=[];let s=0;return t?.({loaded:s,total:i,label:"Preparing assets",failed:0}),await Promise.all(n.map(async a=>{try{await bM(a.url)}catch(o){r.push(a.label),console.warn(`[preload] ${a.label}`,o)}finally{s+=1,t?.({loaded:s,total:i,label:a.label,failed:r.length})}})),{total:i,failed:r}}var ie=t=>document.getElementById(t),Pr=t=>document.getElementById(t),Nl=Pr("splash-screen"),ah=Pr("splash-progress-bar"),Ol=Pr("splash-status"),oh=Pr("splash-percent"),gc=ie("canvas-host"),EM=ie("blind-name"),lh=ie("blind-badge"),CM=ie("blind-target"),wM=ie("blind-reward"),_c=ie("round-score"),Fl=ie("hand-type"),ha=ie("chips"),fa=ie("mult"),AM=ie("ante"),RM=ie("round"),PM=ie("money"),kM=ie("hands-left"),DM=ie("discards-left"),LM=ie("seed"),IM=ie("hand-counter"),UM=ie("deck-counter"),ao=ie("joker-slots"),NM=ie("joker-count"),ch=ie("consumable-slots"),OM=ie("consumable-count"),FM=ie("btn-play"),BM=ie("btn-discard"),td=ie("btn-sort-straight"),nd=ie("btn-sort-flush"),zM=ie("btn-runinfo"),VM=ie("btn-options"),oo=ie("run-info-overlay"),dh=ie("run-info-list"),HM=ie("btn-run-info-back"),lo=ie("options-overlay"),GM=ie("btn-options-back"),Sp=ie("btn-option-sfx"),Mp=ie("btn-option-music"),WM=ie("btn-option-new-run"),$M=ie("btn-option-return"),XM=ie("kanban-close-game"),jM=ie("btn-option-collection"),co=ie("collection-overlay"),KM=ie("collection-stats"),uh=ie("collection-tabs"),ui=ie("collection-grid"),qM=ie("btn-collection-back"),Bl=ie("setup-seed-mode"),Sa=ie("setup-seed"),YM=ie("btn-setup-random-seed"),Eo=ie("score-popup"),hh=ie("popup-hand"),vc=ie("popup-total"),js=ie("overlay"),JM=ie("overlay-title"),ZM=ie("overlay-sub"),$n=ie("shop-overlay"),Co=ie("shop-panel"),yc=ie("shop-offers"),QM=ie("shop-inventory"),e1=ie("shop-money"),t1=ie("shop-next-blind"),n1=ie("shop-reroll-cost"),id=ie("btn-shop-reroll"),Sc=ie("btn-shop-next"),fh=ie("shop-boosters"),zl=ie("shop-voucher"),i1=ie("booster-overlay"),r1=ie("booster-name"),s1=ie("booster-kind"),a1=ie("booster-picks"),ph=ie("booster-choices"),o1=ie("btn-booster-skip"),l1=ie("target-overlay"),c1=ie("target-name"),d1=ie("target-instruction"),mh=ie("target-cards"),u1=ie("btn-target-cancel"),Mc=ie("btn-target-confirm"),jt=ie("item-info"),xp=ie("item-info-kind"),bp=ie("item-info-name"),Tp=ie("item-info-desc"),rd=ie("item-info-meta"),h1=ie("btn-item-info-close"),f1=ie("setup-overlay"),gh=ie("setup-decks"),Oi=ie("setup-stake"),p1=ie("setup-stake-desc"),m1=ie("btn-setup-start"),g1=ie("blind-select-overlay"),_h=ie("blind-select-cards");function _1(t,e,n){return Math.max(e,Math.min(n,t))}function sd(){const t=window.innerWidth||1280,e=window.innerHeight||720,n=t<=700&&e>t*1.08,i=document.documentElement;if(n){i.dataset.viewportMode="portrait-phone",i.style.setProperty("--ui-scale","1"),i.style.setProperty("--ui-edge","6px"),i.style.setProperty("--sidebar-layout-height","auto"),i.style.setProperty("--hud-top-left","6px"),i.style.setProperty("--hud-top-layout-width",String(Math.max(280,t-58))+"px");return}delete i.dataset.viewportMode;const r=_1(Math.min(t/1280,e/900),.72,1),s=Math.round(14*r),a=260,o=16*r,l=s+a*r+o,c=Math.max(320,(t-l-s)/r),d=Math.max(360,(e-s*2)/r);i.style.setProperty("--ui-scale",r.toFixed(3)),i.style.setProperty("--ui-edge",String(s)+"px"),i.style.setProperty("--sidebar-layout-height",String(d)+"px"),i.style.setProperty("--hud-top-left",String(l)+"px"),i.style.setProperty("--hud-top-layout-width",String(c)+"px")}sd();var Ep=t=>{(t.target instanceof HTMLElement?t.target:null)?.closest('input, textarea, select, [contenteditable="true"]')||t.preventDefault()};document.addEventListener("selectstart",Ep,{passive:!1});document.addEventListener("contextmenu",Ep,{passive:!1});function v1(t){const e=t.total===0?1:t.loaded/t.total,n=Math.round(e*100);if(ah&&(ah.style.transform=`scaleX(${e})`),oh&&(oh.textContent=`${n}%`),!!Ol){if(t.loaded>=t.total){Ol.textContent=t.failed>0?`Loaded with ${t.failed} fallback${t.failed===1?"":"s"}`:"Ready";return}Ol.textContent=`Loading ${t.label}`}}function y1(){Nl&&window.setTimeout(()=>{Nl.classList.add("is-complete"),window.setTimeout(()=>Nl.remove(),650)},220)}var Cp="kanban-open-poker:run-v1";function S1(){try{const t=localStorage.getItem(Cp);if(!t)return null;const e=JSON.parse(t);return e?.version===1&&e.snapshot?e:null}catch{return null}}var Cr=S1(),A=new Gg;if(Cr?.snapshot)try{A.reset(Cr.snapshot)}catch(t){console.warn("[save] Could not restore Open Poker run:",t),A.enterSetup()}else A.enterSetup();var ge=Ht(jg(localStorage));A.setUnlockedJokerKeys(ge.unlockedJokers);A.setUnlockedVoucherKeys(ge.unlockedVouchers);var mr=Cr?.metaRunId??Wc(A.config.seed),Ts=Cr?.seededRun??!1,Re={hands:0,cardsPlayed:0,faceCardsPlayed:0,discards:0,cardsDiscarded:0,shopSpend:0,rerolls:0,tarotShopBought:0,planetShopBought:0,playingCardsShopBought:0,tarotPackUsed:0,planetPackUsed:0,blankRedeemed:0,cashouts:0,claimedTags:0,bossClears:0,boosterChoices:0};function ad(){Re.hands=A.metaHandsPlayedRun,Re.cardsPlayed=A.metaCardsPlayedRun,Re.faceCardsPlayed=A.metaFaceCardsPlayedRun,Re.discards=A.metaDiscardActionsRun,Re.cardsDiscarded=A.metaCardsDiscardedRun,Re.shopSpend=A.metaShopSpendRun,Re.rerolls=A.metaShopRerollsRun,Re.tarotShopBought=A.metaTarotShopBoughtRun,Re.planetShopBought=A.metaPlanetShopBoughtRun,Re.playingCardsShopBought=A.metaPlayingCardsShopBoughtRun,Re.tarotPackUsed=A.metaTarotPackUsedRun,Re.planetPackUsed=A.metaPlanetPackUsedRun,Re.blankRedeemed=A.metaBlankRedeemedRun,Re.cashouts=A.metaCashoutSerial,Re.claimedTags=A.metaClaimedTagSerial,Re.bossClears=A.metaBossClearSerial,Re.boosterChoices=A.metaBoosterChoiceSerial}var Zi=Object.fromEntries(Object.keys(A.handLevels).map(t=>[t,0]));if(Cr?.handPlayCounts)for(const t of Object.keys(Zi))Zi[t]=Math.max(0,Number(Cr.handPlayCounts[t]??0)||0);var Qi=null;function wp(){for(const t of Object.keys(Zi))Zi[t]=0}var vh=await TM(v1,{cards:A.hand});vh.failed.length>0&&console.warn("[preload] Assets loaded with fallbacks:",vh.failed);y1();var Pt=qS(gc),zt=new Map,wo=[],Fi=!1,gr=!1,ds=!1,us=null,On=!1,Ao=[];function Ap(t){return Math.max(-.7,Math.min(.7,t/4.5))}function Rp(t){const e=Ao.pop()??document.createElement("div");return e.removeAttribute("style"),e.className="card-score-float",e.textContent="",t.appendChild(e),e}function Pp(t){t.remove(),t.removeAttribute("style"),t.className="card-score-float",t.textContent="",Ao.push(t)}function M1(t){let e=zt.get(t.id);return e||(e=wo.pop()??new FS(t),e.resetForCard(t),Pt.handGroup.add(e),e.position.set(6,-2,1),e.rotation.y=Math.PI,zt.set(t.id,e),Ee.play("deal",{volume:.27,detune:(Math.random()-.5)*180,pitch:.94+Math.random()*.12,pan:(Math.random()-.5)*.5}),Ce.to(e.rotation,{y:0,duration:.5,delay:.05,ease:"power3.out"})),e}function Bo(t,e){Pt.handGroup.remove(e),Pt.playGroup.remove(e),zt.delete(t),e.resetForCard(e.card),wo.push(e)}function yh(t){Pt.handGroup.remove(t),Pt.playGroup.remove(t),t.dispose()}var bn=[],er=Cr?.activeHandSort??null;function nr(){try{const t={version:1,snapshot:A.toSnapshot(),activeHandSort:er,handPlayCounts:{...Zi},metaRunId:mr,seededRun:Ts,savedAt:Date.now()};localStorage.setItem(Cp,JSON.stringify(t))}catch(t){console.warn("[save] Could not persist Open Poker run:",t)}}function od(){nr(),window.parent!==window&&window.parent.postMessage({type:"open-poker-close"},"*")}function x1(){const t=A.hand.map(e=>e.id);bn=bn.filter(e=>t.includes(e));for(const e of t)bn.includes(e)||bn.push(e)}function b1(){return bn.map(t=>zt.get(t)).filter(Boolean)}function ld(){td.classList.toggle("is-active",er==="straight"),nd.classList.toggle("is-active",er==="flush")}function kp(){!er||A.hand.length<2||(bn=(er==="straight"?Wg(A.hand):$g(A.hand)).map(t=>t.id))}function Ro(t){On||A.phase!=="play"||A.hand.length<2||(er=t,kp(),ld(),nr(),Ee.play("buttonClick"),xi(.28))}function xi(t=.4){kp(),x1();for(const r of A.hand)zt.get(r.id)?.setFaceDown(A.isCardFaceDown(r.id));const e={};for(const r of A.hand)e[r.id]=r;const n=bn.map(r=>e[r]).filter(Boolean),i=mc(n.length);n.forEach((r,s)=>{const a=M1(r);a.handIndex=s,a.setSelected(A.selected.has(r.id)),a.moveTo(i[s],t,s*.04)});for(const[r,s]of zt)!e[r]&&!s.userData.keepAlive&&Bo(r,s)}function Sh(t){return t.split(" ").map(e=>e.charAt(0)).join("").slice(0,3).toUpperCase()}var Qs=A.deckKey;function cd(){jt.classList.add("hidden")}function Mh(t,e,n){const i=e==="joker"?t:null;jt.dataset.rarity=i?.rarity??"consumable",jt.dataset.jokerId=i?.id??"",xp.textContent=i?`${i.rarity.toUpperCase()} JOKER`:t.type.toUpperCase(),bp.textContent=t.name,Tp.textContent=t.description;const r=[`Sell $${t.sellValue}`];if((t.edition??"base")!=="base"&&r.push(t.edition??"base"),i){i.sticker==="eternal"&&r.push("Eternal · cannot sell"),i.sticker==="perishable"&&r.push(`Perishable · ${i.perishableRounds??0} rounds`),i.rental&&r.push("Rental · -$3/round");const c=A.jokerRuntimeText(i.id);c&&r.push(c)}if(i){const c=Number(ge.jokerStakeStickers[i.key]??-1);c>=0&&r.push(`${vs(c)} Stake Sticker`)}rd.textContent=r.join(" · "),jt.classList.remove("hidden");const s=n.getBoundingClientRect(),a=jt.getBoundingClientRect(),o=Math.min(window.innerWidth-a.width-12,Math.max(12,s.left)),l=Math.min(window.innerHeight-a.height-12,s.bottom+10);jt.style.left=`${o}px`,jt.style.top=`${l}px`}function Dp(){ao.replaceChildren();const t=A.jokerCapacity();for(let n=0;n<t;n++){const i=document.createElement("div"),r=A.jokers[n];if(i.className=`joker-slot${r?" filled":""}`,i.dataset.jokerIndex=String(n),i.addEventListener("dragover",s=>{s.dataTransfer?.types.includes("application/x-open-poker-joker")&&(s.preventDefault(),i.classList.add("drag-target"))}),i.addEventListener("dragleave",()=>i.classList.remove("drag-target")),i.addEventListener("drop",s=>{s.preventDefault(),i.classList.remove("drag-target");const a=s.dataTransfer?.getData("application/x-open-poker-joker");a&&A.moveJoker(a,n)&&(Ee.play("buttonClick"),ct())}),r){i.dataset.jokerId=r.id,i.textContent=Sh(r.name);const s=Number(ge.jokerStakeStickers[r.key]??-1);if(s>=0){const o=document.createElement("span");o.className=`joker-stake-sticker stake-${s}`,o.textContent=vs(s).slice(0,1),o.title=`${vs(s)} Stake Sticker`,i.appendChild(o)}r.rarity==="mythic"&&i.classList.add("mythic");const a=A.jokerRuntimeText(r.id);i.title=`${r.name} - ${r.description}${a?` · ${a}`:""} · Drag to reorder`,i.draggable=!0,i.addEventListener("click",o=>{o.stopPropagation(),Mh(r,"joker",i)}),i.addEventListener("dragstart",o=>{o.dataTransfer?.setData("application/x-open-poker-joker",r.id),o.dataTransfer&&(o.dataTransfer.effectAllowed="move"),i.classList.add("dragging")}),i.addEventListener("dragend",()=>{i.classList.remove("dragging"),ao.querySelectorAll(".drag-target").forEach(o=>o.classList.remove("drag-target"))})}ao.appendChild(i)}ch.replaceChildren();const e=A.consumableCapacity();for(let n=0;n<e;n++){const i=document.createElement("div"),r=A.consumables[n];i.className=`consumable-slot${r?" filled":""}`,r&&(i.dataset.consumableId=r.id,i.textContent=Sh(r.name),i.title=`${r.name} - ${r.description}`,i.addEventListener("click",s=>{s.stopPropagation(),Mh(r,"consumable",i)})),ch.appendChild(i)}}Dp();var xc=["Small Blind","Big Blind","Boss Blind"],T1=[["SMALL","BLIND"],["BIG","BLIND"],["BOSS"]],E1=["small","big","boss"],C1=["$","$$","$$$$$"];function Lp(t){return t.kind==="joker"?t.joker.name:t.kind==="consumable"?t.consumable.name:t.name}function Ip(t){return t.kind==="joker"?t.joker.description:t.kind==="consumable"?t.consumable.description:t.description}function w1(t){return t.kind==="playing-card"?"Deck Card":t.kind==="joker"?`${t.joker.rarity.toUpperCase()} JOKER`:t.kind}function xh(t,e,n){const i=document.createElement("div");i.className="shop-inventory-group";const r=document.createElement("div");r.className="shop-inventory-title",r.textContent=`${n==="joker"?"Jokers":"Consumables"} ${t.length}/${e}`,i.appendChild(r);const s=document.createElement("div");s.className="shop-inventory-list";for(let a=0;a<e;a++){const o=t[a],l=document.createElement("div");if(l.className=`shop-inventory-row${o?" filled":""}`,!o){l.textContent="Empty slot",s.appendChild(l);continue}const c=document.createElement("div");c.className="shop-inventory-copy";const d=document.createElement("strong");d.textContent=o.name;const h=document.createElement("span");if(h.textContent=o.description,c.append(d,h),l.appendChild(c),n==="consumable"){const m=document.createElement("button");m.className="shop-mini-btn use",m.textContent="Use",m.addEventListener("click",()=>{const _=A.beginUseConsumable(o.id);_!=="invalid"&&(Ee.play(_==="targeting"?"buttonClick":"chaching"),ct())}),l.appendChild(m)}const u=document.createElement("button");u.className="shop-mini-btn",u.textContent=`Sell $${o.sellValue}`,u.addEventListener("click",()=>{(n==="joker"?A.sellJoker(o.id):A.sellConsumable(o.id))&&(Ee.play("buttonClick"),ct())}),l.appendChild(u),s.appendChild(l)}return i.appendChild(s),i}function A1(t){const e=$n.classList.contains("hidden");t?($n.classList.remove("hidden"),e&&($n.style.opacity="1",Ce.fromTo($n,{opacity:0},{opacity:1,duration:.25,ease:"power2.out"}),Ce.fromTo(Co,{y:24,scale:.96},{y:0,scale:1,duration:.38,ease:"back.out(1.4)"}),Ee.play("chaching",{volume:.35}))):$n.classList.add("hidden")}function R1(){const t=A.phase==="shop"&&!!A.shop&&!gr;if(A1(t),!t||!A.shop)return;e1.textContent=`$${A.money}`,t1.textContent=xc[A.blindIndex],n1.textContent=`$${A.shop.rerollCost}`,id.disabled=A.money<A.shop.rerollCost;const e=A.lastCashout,n=Co.querySelector(".shop-kicker");n&&(n.textContent=e?`Cashout $${e.total} · Blind $${e.blindReward} · Hands $${e.handsBonus} · Interest $${e.interest}`:"Blind cleared"),yc.replaceChildren(),A.shop.offers.forEach((r,s)=>{const a=document.createElement("article"),o=A.canBuyOffer(r.id);a.className=`shop-offer ${r.item.kind}${r.sold?" sold":""}`,r.item.kind==="joker"&&r.item.joker.rarity==="mythic"&&a.classList.add("mythic");const l=document.createElement("div");l.className="shop-offer-kind",l.textContent=w1(r.item),a.appendChild(l);const c=document.createElement("h3");c.textContent=Lp(r.item),a.appendChild(c);const d=document.createElement("p");d.textContent=Ip(r.item),a.appendChild(d);const h=document.createElement("button");h.className="shop-buy-btn",h.dataset.testid=`shop-buy-${s}`,h.disabled=r.sold||!o,h.textContent=r.sold?"Sold":`Buy $${A.shopPriceForItem(r.item)}`,h.addEventListener("click",()=>{A.buyOffer(r.id)&&(Ee.play("chaching"),Ce.fromTo(a,{scale:1},{scale:1.04,duration:.14,yoyo:!0,repeat:1,ease:"power2.out"}),ct())}),a.appendChild(h),yc.appendChild(a)}),fh.replaceChildren(),A.shop.boosters.forEach(r=>{const s=document.createElement("article");s.className=`booster-shop-card ${r.type}${r.sold?" sold":""}`;const a=document.createElement("span");a.className="booster-shop-kind",a.textContent=r.size==="normal"?r.type:`${r.size} · ${r.type}`;const o=document.createElement("strong");o.textContent=r.name;const l=document.createElement("span");l.textContent=r.description;const c=document.createElement("button");c.className="shop-buy-btn";const d=A.boosterPrice(r);c.disabled=r.sold||A.money<d,c.textContent=r.sold?"Opened":`Buy & Open $${d}`,c.addEventListener("click",()=>{A.openBooster(r.id)&&(Ee.play("scorePop"),ct())}),s.append(a,o,l,c),fh.appendChild(s)}),zl.replaceChildren();const i=A.shop.voucher;if(i){const r=document.createElement("article");r.className=`voucher-card${i.sold?" sold":""}`;const s=document.createElement("strong");s.textContent=i.name;const a=document.createElement("span");a.textContent=i.description;const o=document.createElement("button");o.className="shop-buy-btn",o.disabled=i.sold||A.money<i.price,o.textContent=i.sold?"Redeemed":`Redeem $${i.price}`,o.addEventListener("click",()=>{A.buyVoucher()&&(Ee.play("chaching"),ct())}),r.append(s,a,o),zl.appendChild(r)}else{const r=document.createElement("div");r.className="voucher-empty",r.textContent="All Vouchers redeemed",zl.appendChild(r)}QM.replaceChildren(xh(A.jokers,A.jokerCapacity(),"joker"),xh(A.consumables,A.consumableCapacity(),"consumable"))}function P1(t,e){t.replaceChildren(),e.forEach((n,i)=>{i>0&&t.appendChild(document.createElement("br")),t.append(document.createTextNode(n))})}function k1(t){const e=document.createElement("span");e.className="counter-total",e.textContent="/8",AM.replaceChildren(document.createTextNode(String(t)),e)}function Up(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":String(t.rank)}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}function D1(t){return Lp(t)}function L1(t){return Ip(t)}function I1(){const t=A.phase==="booster"&&!!A.booster;i1.classList.toggle("hidden",!t),!(!t||!A.booster)&&(r1.textContent=A.booster.name,s1.textContent=A.booster.type.toUpperCase(),a1.textContent=`Choose ${A.booster.picksLeft}`,ph.replaceChildren(),A.booster.choices.forEach(e=>{const n=document.createElement("article");n.className=`booster-choice ${e.item.kind}${e.taken?" taken":""}`,e.item.kind==="joker"&&e.item.joker.rarity==="mythic"&&n.classList.add("mythic");const i=document.createElement("span");i.className="booster-choice-type",i.textContent=e.item.kind==="consumable"?e.item.consumable.type:e.item.kind==="playing-card"?"playing card":"joker";const r=document.createElement("strong");r.textContent=D1(e.item);const s=document.createElement("span");s.textContent=L1(e.item),e.item.kind==="playing-card"&&(r.textContent=Up(e.item.card),s.textContent=`${e.item.description} · ${e.item.card.enhancement} · ${e.item.card.seal} · ${e.item.card.edition}`);const a=document.createElement("button");a.className="shop-buy-btn",a.disabled=e.taken,a.textContent=e.taken?"Taken":e.item.kind==="consumable"?"Use":"Take",a.addEventListener("click",()=>{const o=A.chooseBooster(e.id);o!=="invalid"&&(Ee.play(o==="targeting"?"buttonClick":"chaching"),ct())}),n.append(i,r,s,a),ph.appendChild(n)}))}function U1(){const t=A.targetMode;if(l1.classList.toggle("hidden",!t),!t)return;c1.textContent=t.consumable.name,d1.textContent=`${t.instruction} (${t.min}–${t.max})`,mh.replaceChildren();const e=new Set(t.selectedIds);A.getTargetCandidateCards().forEach(n=>{const i=document.createElement("button");i.type="button",i.className=`target-card${e.has(n.id)?" selected":""}`;const r=document.createElement("strong");r.textContent=Up(n);const s=document.createElement("span"),a=[n.enhancement,n.seal,n.edition].filter(o=>o!=="none"&&o!=="base");s.textContent=a.length>0?a.join(" · "):"Base card",i.append(r,s),i.addEventListener("click",()=>{A.toggleTargetCard(n.id),ct()}),mh.appendChild(i)}),Mc.disabled=t.selectedIds.length<t.min||t.selectedIds.length>t.max,Mc.textContent=`Use (${t.selectedIds.length}/${t.max})`}var rn="decks",N1=[["decks","Decks"],["jokers","Jokers"],["vouchers","Vouchers"],["tarot","Tarot"],["planet","Planet"],["spectral","Spectral"],["blinds","Blinds"],["tags","Tags"]];function Np(t,e,n,i,r){xp.textContent=t,bp.textContent=e,Tp.textContent=n,rd.textContent=i,jt.classList.remove("hidden");const s=r.getBoundingClientRect(),a=jt.getBoundingClientRect(),o=Math.min(window.innerWidth-a.width-12,Math.max(12,s.left)),l=Math.min(window.innerHeight-a.height-12,Math.max(12,s.bottom+8));jt.style.left=`${o}px`,jt.style.top=`${l}px`}function Di(t){const e=document.createElement("article");e.className=`collection-card ${t.status}${t.className?` ${t.className}`:""}`;const n=document.createElement("span");n.className="collection-card-status",n.textContent=t.status==="locked"?"LOCKED":t.status==="undiscovered"?"NOT DISCOVERED":"DISCOVERED";const i=document.createElement("strong");i.textContent=t.status==="undiscovered"?"???":t.name;const r=document.createElement("p");r.textContent=t.status==="locked"?t.condition??"Complete the unlock condition.":t.status==="undiscovered"?"Available, but not yet discovered in a normal unseeded run.":t.description;const s=document.createElement("small");s.textContent=t.meta??"",e.append(n,i,r,s);const a=t.status==="locked"?`Unlock: ${t.condition??"Complete the unlock condition."}`:t.meta??(t.status==="undiscovered"?"Obtain this item in a normal unseeded run to discover it.":"");e.title=`${t.name}
${a}`.trim(),e.tabIndex=0;const o=()=>Np(t.status==="locked"?`LOCKED ${t.kind}`:t.kind,t.name,t.status==="undiscovered"?"Not discovered yet.":t.description,a,e);return e.addEventListener("click",o),e.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o())}),e}function Po(){const t=Gc(ge);KM.textContent=Ts?`SEEDED PRACTICE · META OFF · Collection ${t} discovered · Profile is read-only this run`:`Collection ${t} · Runs ${ge.runsFinished}/${ge.runsStarted} · Wins ${ge.wins} · Best Ante ${ge.bestAnte}`,uh.replaceChildren();for(const[e,n]of N1){const i=document.createElement("button");i.type="button",i.className=`collection-tab${rn===e?" active":""}`,i.textContent=n,i.addEventListener("click",()=>{rn=e,Po(),Ee.play("buttonClick")}),uh.appendChild(i)}if(ui.replaceChildren(),rn==="decks"){Object.keys(Js).forEach(e=>{const n=ge.unlockedDecks.includes(e),i=Number(ge.highestStakeCleared[e]??-1),r=i>=0?`${vs(i)} Stake sticker`:"No win sticker yet";ui.appendChild(Di({kind:"DECK",name:Js[e].name,description:Js[e].description,status:n?"discovered":"locked",meta:n?r:"",condition:no(ge,e),className:`deck-${e}`}))});return}if(rn==="jokers"){for(const e of Io){const n=ge.unlockedJokers.includes(e.key),i=ge.discoveredJokers.includes(e.key),r=Number(ge.jokerStakeStickers[e.key]??-1),s=r>=0?`${vs(r)} Stake sticker`:"No Stake sticker",a=e.rarity==="mythic"?" · CUSTOM MYTHIC":"";ui.appendChild(Di({kind:`${e.rarity.toUpperCase()} JOKER`,name:e.name,description:e.description,status:n?i?"discovered":"undiscovered":"locked",meta:`${s}${a}`,condition:s_(ge,e.key),className:`joker-${e.rarity}`}))}return}if(rn==="vouchers"){Object.keys(os).forEach(e=>{const n=os[e],i=ge.unlockedVouchers.includes(e),r=ge.discoveredVouchers.includes(e);ui.appendChild(Di({kind:"VOUCHER",name:n.name,description:n.description,status:i?r?"discovered":"undiscovered":"locked",meta:`Redeem $${n.price}`,condition:a_(ge,e)}))});return}if(rn==="tarot"||rn==="planet"||rn==="spectral"){const e=rn==="tarot"?Li:rn==="planet"?Ni:Jr,n=rn==="tarot"?ge.discoveredTarots:rn==="planet"?ge.discoveredPlanets:ge.discoveredSpectrals;for(const i of e){const r=n.includes(i.key);ui.appendChild(Di({kind:rn.toUpperCase(),name:i.name,description:i.description,status:r?"discovered":"undiscovered",meta:`Price $${i.price}`}))}return}if(rn==="blinds"){const e=ge.runsFinished>0||ge.totalHands>0;ui.appendChild(Di({kind:"BLIND",name:"Small Blind",description:"First Blind of an Ante.",status:e?"discovered":"undiscovered"})),ui.appendChild(Di({kind:"BLIND",name:"Big Blind",description:"Second Blind of an Ante.",status:e?"discovered":"undiscovered"})),Object.keys(br).forEach(n=>{const i=br[n],r=ge.discoveredBosses.includes(n);ui.appendChild(Di({kind:"BOSS BLIND",name:i.name,description:i.description,status:r?"discovered":"undiscovered",meta:`Target ×${i.targetMult}`}))});return}Object.keys(la).forEach(e=>{const n=la[e],i=ge.discoveredTags.includes(e);ui.appendChild(Di({kind:"TAG",name:n.name,description:n.description,status:i?"discovered":"undiscovered"}))})}function O1(){if(!Xn(Ts)){A.setUnlockedJokerKeys(ge.unlockedJokers),A.setUnlockedVoucherKeys(ge.unlockedVouchers),ad(),Qi==="collection"&&Po();return}const t={hands:Math.max(0,A.metaHandsPlayedRun-Re.hands),cardsPlayed:Math.max(0,A.metaCardsPlayedRun-Re.cardsPlayed),faceCardsPlayed:Math.max(0,A.metaFaceCardsPlayedRun-Re.faceCardsPlayed),discards:Math.max(0,A.metaDiscardActionsRun-Re.discards),cardsDiscarded:Math.max(0,A.metaCardsDiscardedRun-Re.cardsDiscarded),shopSpend:Math.max(0,A.metaShopSpendRun-Re.shopSpend),rerolls:Math.max(0,A.metaShopRerollsRun-Re.rerolls),tarotShopBought:Math.max(0,A.metaTarotShopBoughtRun-Re.tarotShopBought),planetShopBought:Math.max(0,A.metaPlanetShopBoughtRun-Re.planetShopBought),playingCardsShopBought:Math.max(0,A.metaPlayingCardsShopBoughtRun-Re.playingCardsShopBought),tarotPackUsed:Math.max(0,A.metaTarotPackUsedRun-Re.tarotPackUsed),planetPackUsed:Math.max(0,A.metaPlanetPackUsedRun-Re.planetPackUsed),blankRedeemed:Math.max(0,A.metaBlankRedeemedRun-Re.blankRedeemed)};ge=Zg(ge,t,!1),Re.hands=A.metaHandsPlayedRun,Re.cardsPlayed=A.metaCardsPlayedRun,Re.faceCardsPlayed=A.metaFaceCardsPlayedRun,Re.discards=A.metaDiscardActionsRun,Re.cardsDiscarded=A.metaCardsDiscardedRun,Re.shopSpend=A.metaShopSpendRun,Re.rerolls=A.metaShopRerollsRun,Re.tarotShopBought=A.metaTarotShopBoughtRun,Re.planetShopBought=A.metaPlanetShopBoughtRun,Re.playingCardsShopBought=A.metaPlayingCardsShopBoughtRun,Re.tarotPackUsed=A.metaTarotPackUsedRun,Re.planetPackUsed=A.metaPlanetPackUsedRun,Re.blankRedeemed=A.metaBlankRedeemedRun;const e={spades:0,hearts:0,diamonds:0,clubs:0};for(const i of A.ownedDeck)e[i.suit]+=1;const n=A.jokers.filter(i=>i.edition==="foil"||i.edition==="holographic"||i.edition==="polychrome").length;ge=Qg(ge,{ante:A.ante,money:A.money,handSize:A.config.handSize,vouchersRedeemed:A.metaVouchersRedeemedRun,polychromeJokers:A.jokers.filter(i=>i.edition==="polychrome").length,editionJokers:n,suitCounts:e},!1);for(const i of A.jokers)ge=Yd(ge,i.key);for(const i of A.vouchers)ge=i_(ge,i);for(const i of A.consumables)ge=Jd(ge,i.type,i.key);A.metaBoosterChoiceSerial>Re.boosterChoices&&(A.metaLastBoosterJokerKey&&(ge=Yd(ge,A.metaLastBoosterJokerKey)),A.metaLastBoosterConsumableType&&A.metaLastBoosterConsumableKey&&(ge=Jd(ge,A.metaLastBoosterConsumableType,A.metaLastBoosterConsumableKey)),Re.boosterChoices=A.metaBoosterChoiceSerial),A.metaClaimedTagSerial>Re.claimedTags&&A.metaLastClaimedTagKey&&(ge=r_(ge,A.metaLastClaimedTagKey),Re.claimedTags=A.metaClaimedTagSerial),A.metaBossClearSerial>Re.bossClears&&A.metaLastClearedBossKey&&(ge=t_(ge,A.metaLastClearedBossKey,A.metaLastClearedBossHandType,`${mr}:boss:${A.metaBossClearSerial}`),Re.bossClears=A.metaBossClearSerial),A.metaCashoutSerial>Re.cashouts&&(ge=e_(ge,A.metaLastCashoutInterest,A.metaLastCashoutCap,`${mr}:cashout:${A.metaCashoutSerial}`),Re.cashouts=A.metaCashoutSerial),(A.phase==="win"||A.phase==="game-over")&&!ge.settledRunIds.includes(mr)&&(ge=n_(ge,mr,{won:A.phase==="win",deck:A.deckKey,stake:A.stakeKey,ante:A.ante,money:A.money,jokerKeys:A.jokers.map(i=>i.key),handPlayCounts:A.handPlayCounts},!1)),ge=Ht(ge),A.setUnlockedJokerKeys(ge.unlockedJokers),A.setUnlockedVoucherKeys(ge.unlockedVouchers),Rf(localStorage,ge),Qi==="collection"&&Po()}function dd(){const t=A.phase==="setup";if(f1.classList.toggle("hidden",!t),!t)return;gh.replaceChildren(),Object.keys(Js).forEach(i=>{const r=Js[i],s=document.createElement("button");s.type="button";const a=ge.unlockedDecks.includes(i);s.className=`setup-deck-card${Qs===i?" selected":""}${a?"":" locked"}`,s.disabled=!1,s.setAttribute("aria-disabled",String(!a)),s.title=a?r.description:no(ge,i);const o=document.createElement("strong");o.textContent=a?r.name:`Locked · ${r.name}`;const l=document.createElement("span");l.textContent=a?r.description:no(ge,i),s.append(o,l),s.addEventListener("click",()=>{if(!a){Np("LOCKED DECK",r.name,r.description,no(ge,i),s);return}Qs=i,dd(),Ee.play("buttonClick")}),gh.appendChild(s)});const e=Oi.value||A.stakeKey,n=qg(ge,Qs);Oi.replaceChildren(),Object.keys(Qe).filter(i=>Qe[i].order<=n).forEach(i=>{const r=document.createElement("option");r.value=i,r.textContent=Qe[i].name,Oi.appendChild(r)}),Oi.value=Object.keys(Qe).some(i=>i===e&&Qe[i].order<=n)?e:"white",p1.textContent=`${Qe[Oi.value]?.description??""} · Unlocked through ${Qe[Object.keys(Qe).find(i=>Qe[i].order===n)??"white"].name}`}function F1(t){const e=A.blindIndex;A.blindIndex=t;const n=A.targetForPreview();return A.blindIndex=e,n}function B1(){const t=A.phase==="blind-select";if(g1.classList.toggle("hidden",!t),!t)return;const e=document.getElementById("blind-select-ante");e&&(e.textContent=String(A.ante)),_h.replaceChildren(),[0,1,2].forEach(n=>{const i=n===A.blindIndex,r=n<A.blindIndex,s=document.createElement("article");s.className=`blind-select-card${n===2?" boss":""}${i?" current":""}${r?" done":""}`;const a=document.createElement("span");a.className="blind-select-kind",a.textContent=n===0?"SMALL":n===1?"BIG":"BOSS";const o=document.createElement("strong");o.textContent=n===0?"Small Blind":n===1?"Big Blind":br[A.bossBlindKey].name;const l=document.createElement("div");l.className="blind-select-target",l.textContent=`Score ${F1(n).toLocaleString()}`;const c=document.createElement("div");c.className="blind-select-reward",c.textContent=`Reward $${n===0&&Qe[A.stakeKey].order>=Qe.red.order?0:3+n}`;const d=document.createElement("p");if(n<2){const u=la[A.anteTags[n]];d.textContent=`Skip → ${u.name}: ${u.description}`}else d.textContent=br[A.bossBlindKey].description;const h=document.createElement("div");if(h.className="blind-select-actions",i){const u=document.createElement("button");if(u.type="button",u.className="btn btn-play",u.textContent="Play",u.addEventListener("click",()=>{A.playSelectedBlind()&&(Ee.play("buttonClick"),ct(),xi(.55))}),h.appendChild(u),n===2&&(A.vouchers.includes("directors-cut")||A.vouchers.includes("retcon"))){const m=document.createElement("button");m.type="button",m.className="btn btn-ghost",m.textContent="Reroll Boss · $10",m.disabled=A.money<10||A.vouchers.includes("directors-cut")&&!A.vouchers.includes("retcon")&&A.bossRerollsUsed>=1,m.addEventListener("click",()=>{A.rerollBossBlind()&&(Ee.play("buttonClick"),ct())}),h.appendChild(m)}if(n<2){const m=la[A.anteTags[n]],_=document.createElement("button");_.type="button",_.className="btn btn-ghost",_.textContent=`Skip · ${m.name}`,_.addEventListener("click",()=>{A.skipCurrentBlind()&&(Ee.play("chaching"),ct())}),h.appendChild(_)}}else{const u=document.createElement("span");u.className="blind-select-status",u.textContent=r?"Done / Skipped":"Locked",h.appendChild(u)}s.append(a,o,l,c,d,h),_h.appendChild(s)})}function ct(){O1(),Dp();const t=A.blindIndex;EM.textContent=t===2?br[A.bossBlindKey].name:xc[t],lh.className=`blind-badge ${E1[t]}`;const e=lh.querySelector("span");e&&P1(e,T1[t]),CM.textContent=A.target.toLocaleString(),wM.textContent=C1[t],_c.textContent=(ds?us??A.roundScore:A.roundScore).toLocaleString(),k1(A.ante);const n=(A.ante-1)*3+A.blindIndex+1;RM.textContent=String(n),PM.textContent=`$${A.money}`,kM.textContent=`${A.handsLeft}`,DM.textContent=`${A.discardsLeft}`,LM.textContent=String(A.config.seed),IM.textContent=`${A.hand.length}/${A.config.handSize}`,UM.textContent=`${A.deck.length}/${A.ownedDeck.length}`,Pt.setDeckCount(A.deck.length),NM.textContent=`${A.jokers.length}/${A.jokerCapacity()}`,OM.textContent=`${A.consumables.length}/${A.consumableCapacity()}`;const i=A.selectedCards();if(i.length===0)Fl.textContent="-",ha.textContent="0",fa.textContent="0";else{const a=Ws(i),o=A.handLevels[a.type];Fl.textContent=`${a.type} (lvl ${o.level})`,ha.textContent=`${o.chips}`,fa.textContent=`${o.mult}`}FM.disabled=On||!A.canPlay(),BM.disabled=On||!A.canDiscard();const r=On||A.phase!=="play"||A.hand.length<2;if(td.disabled=r,nd.disabled=r,ld(),(A.phase==="game-over"||A.phase==="win")&&!Fi){const a=js.classList.contains("hidden");js.classList.remove("hidden"),JM.textContent=A.phase==="win"?"You Win!":"Game Over",ZM.textContent=A.phase==="win"?`Ante ${A.ante-1} cleared on seed ${A.config.seed}`:`Could not beat ${xc[t]} - score ${A.roundScore.toLocaleString()} / ${A.target.toLocaleString()}`,a&&(Ee.play(A.phase==="win"?"win":"lose"),Ce.fromTo(js.querySelector(".overlay-card"),{scale:.7,opacity:0},{scale:1,opacity:1,duration:.5,ease:"back.out(1.7)"}))}else js.classList.add("hidden");if(R1(),I1(),U1(),dd(),B1(),!jt.classList.contains("hidden")){const a=jt.dataset.jokerId;if(a){const o=A.jokers.find(l=>l.id===a);if(o){const l=A.jokerRuntimeText(o.id),c=[`Sell $${o.sellValue}`];(o.edition??"base")!=="base"&&c.push(o.edition??"base"),o.sticker==="eternal"&&c.push("Eternal · cannot sell"),o.sticker==="perishable"&&c.push(`Perishable · ${o.perishableRounds??0} rounds`),o.rental&&c.push("Rental · -$3/round");const d=Number(ge.jokerStakeStickers[o.key]??-1);d>=0&&c.push(`${vs(d)} Stake Sticker`),l&&c.push(l),rd.textContent=c.join(" · ")}}}const s=A.playRestrictionMessage();s&&A.selected.size>0&&(Fl.textContent=s)}function z1(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?e.toLocaleString():e.toLocaleString(void 0,{maximumFractionDigits:2})}function uo(t,e,n,i,r){const s={v:e};let a=e;const o=Math.max(1,Math.floor((n-e)/18));Ce.to(s,{v:n,duration:i,ease:"power2.out",onUpdate:()=>{const l=s.v;t.textContent=z1(l),r&&l-a>=o&&(a=l,Ee.play(r,{volume:.12,detune:(Math.random()-.5)*250}))}})}function V1(t){Eo.classList.remove("hidden"),hh.textContent=`${t.hand.type}`,ha.textContent=Math.round(t.baseChips).toLocaleString(),fa.textContent=Math.round(t.baseMult).toLocaleString(),vc.textContent="0",Ce.fromTo(Eo,{scale:.7,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(2)"}),Ce.fromTo(hh,{scale:.7},{scale:1,duration:.3,ease:"back.out(2)"}),Ee.play("scorePop")}function H1(t){uo(vc,0,t.total,.8),Ce.fromTo(vc,{scale:.6},{scale:1.2,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}),Ee.play("chaching");const e=Math.max(.08,Math.min(.6,t.total/Math.max(1,A.target)*.5));Pt.shake(e,.45),Ce.delayedCall(1.5,()=>{Ce.to(Eo,{opacity:0,duration:.4,onComplete:()=>Eo.classList.add("hidden")})})}function G1(t,e){const n=Op(e);if(n.length===0)return;const i=Pt.createVector3();t.getWorldPosition(i),i.y+=1.1;const r=i.project(Pt.camera),s=gc.getBoundingClientRect(),a=(r.x+1)/2*s.width,o=(1-r.y)/2*s.height;n.forEach((l,c)=>{const d=Rp(gc);d.className=`card-score-float ${l.cls}`,d.textContent=l.text,d.style.left=`${a}px`,d.style.top=`${o}px`,d.style.opacity="0";const h=c*.08,u=28+c*6;Ce.fromTo(d,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:h,ease:"back.out(2.2)"}),Ce.to(d,{y:-u,scale:1,duration:.9,delay:h+.22,ease:"sine.out"}),Ce.to(d,{opacity:0,duration:.45,delay:h+.7,ease:"power1.in",onComplete:()=>Pp(d)})})}function W1(t,e){if(e.length===0)return;const n=t.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height*.25;e.forEach((s,a)=>{const o=Rp(document.body);o.className=`card-score-float ${s.cls}`,o.textContent=s.text,o.style.position="fixed",o.style.left=`${i}px`,o.style.top=`${r}px`,o.style.opacity="0",o.style.zIndex="60";const l=a*.08,c=32+a*6;Ce.fromTo(o,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:l,ease:"back.out(2.2)"}),Ce.to(o,{y:-c,scale:1,duration:.9,delay:l+.22,ease:"sine.out"}),Ce.to(o,{opacity:0,duration:.45,delay:l+.7,ease:"power1.in",onComplete:()=>Pp(o)})})}function Op(t){const e=[];if(t.chipsDelta&&e.push({text:`+${Math.round(t.chipsDelta)}`,cls:"is-chips"}),t.multDelta&&e.push({text:`+${Math.round(t.multDelta)} Mult`,cls:"is-mult-add"}),t.multMul&&t.multMul!==1){const n=Number.isInteger(t.multMul)?t.multMul.toString():t.multMul.toFixed(1);e.push({text:`×${n} Mult`,cls:"is-mult-mul"})}return t.moneyDelta&&e.push({text:`+$${Math.round(t.moneyDelta)}`,cls:"is-money"}),e}function yi(t,e){if(t==="select_card")return On||!e?.cardId?!1:A.toggleSelect(e.cardId);if(t==="play_hand"){if(On||!A.canPlay())return;Ee.play("buttonClick"),$1();return}if(t==="discard"){if(On||!A.canDiscard())return;Ee.play("buttonClick"),X1();return}if(t==="continue_shop"){j1();return}if(t==="restart_run"){Bp();return}if(t==="toggle_mute"){Ee.toggleMute(),Ee.isMuted()||Ee.play("buttonClick");return}}async function $1(){if(!A.canPlay())return;const t=new Map(A.hand.map(f=>[f.id,f])),e=bn.filter(f=>A.selected.has(f)).map(f=>t.get(f)).filter(f=>!!f);if(e.length===0)return;On=!0,ds=!0,us=A.roundScore;const n=YS(e.length);Ee.play("whoosh");const i=Pt.createVector3();e.forEach((f,g)=>{const p=zt.get(f.id);p&&(p.userData.keepAlive=!0,p.getWorldPosition(i),Pt.handGroup.remove(p),Pt.playGroup.add(p),Pt.playGroup.worldToLocal(i),p.position.copy(i),p.setSelected(!1),p.moveTo(n[g],.55,g*.07))}),await new Promise(f=>setTimeout(f,650)),Fi=!0,gr=!0;const r=A.playSelected(bn);if(!r){Fi=!1,gr=!1,ds=!1,us=null,On=!1;return}Zi[r.hand.type]=A.handPlayCounts[r.hand.type]??(Zi[r.hand.type]??0)+1,nr();const s=A.phase==="game-over"||A.phase==="win",a=A.phase==="shop";s?js.classList.add("hidden"):a?($n.classList.add("hidden"),Fi=!1):(Fi=!1,gr=!1),V1(r);const o=new Set(r.hand.scoringCards.map(f=>f.id));for(const f of e){if(o.has(f.id))continue;const g=zt.get(f.id);if(!g)continue;const p=g.faceMesh.material;p.transparent=!0,Ce.to(p,{opacity:.5,duration:.2})}const l=r.steps.filter(f=>f.stage!=="base"&&f.stage!=="destruction"&&f.stage!=="end_round"),c=.19,d=.15;l.forEach((f,g)=>{const p=d+g*c;Ce.delayedCall(p,()=>{if(f.cardId){const y=zt.get(f.cardId);y&&(y.pulse(f.retrigger?1.28:1.18,.34),y.flash(f.retrigger?9300223:16765514,.42),G1(y,f),Ee.play(f.retrigger?"multTick":"chipTick",{volume:.22,pitch:f.retrigger?1.18:1,pan:Ap(y.position.x)}))}if(f.jokerId){const y=ao.querySelector(`[data-joker-id="${f.jokerId}"]`);y&&(Ce.fromTo(y,{scale:1,y:0},{scale:1.18,y:-8,duration:.16,yoyo:!0,repeat:1,ease:"power2.out"}),W1(y,Op(f))),Ee.play("multTick",{volume:.24,pitch:1.06})}f.chipsAfter!==void 0&&f.chipsBefore!==void 0&&f.chipsAfter!==f.chipsBefore&&(uo(ha,f.chipsBefore,f.chipsAfter,.18,"chipTick"),Ce.fromTo(ha,{scale:1},{scale:1.14,duration:.12,yoyo:!0,repeat:1})),f.multAfter!==void 0&&f.multBefore!==void 0&&f.multAfter!==f.multBefore&&(uo(fa,f.multBefore,f.multAfter,.18,"multTick"),Ce.fromTo(fa,{scale:1},{scale:1.18,duration:.12,yoyo:!0,repeat:1}))})});const h=r.steps.filter(f=>f.stage==="destruction"),u=d+l.length*c;h.forEach((f,g)=>{Ce.delayedCall(u+g*.22,()=>{if(!f.cardId)return;const p=zt.get(f.cardId);if(!p)return;p.flash(16727887,.65),p.pulse(1.3,.4);const y=Pt.createVector3();p.getWorldPosition(y),Pt.emitBurst(y,{count:26,color:Pt.createColor("#8de8ff"),speed:3.2,spread:1.2,life:1.1,size:18}),Ee.play("scorePop",{volume:.38,pitch:1.25})})});const m=u+h.length*.22+.35;Ce.delayedCall(m,()=>H1(r));const _=A.roundScore-r.total;Ce.delayedCall(m+.05,()=>{uo(_c,_,A.roundScore,1,"chipTick"),Ce.fromTo(_c,{scale:1},{scale:1.25,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})}),Ce.delayedCall(m+1.2,()=>{ds=!1,us=null;for(const f of e){const g=zt.get(f.id);g&&(Ce.to(g.position,{y:-6,duration:.5,ease:"power2.in"}),Ce.to(g.rotation,{z:(Math.random()-.5)*1.5,duration:.5}),Ce.delayedCall(.55,()=>{Bo(f.id,g)}))}On=!1,xi(.5),ct(),s?(Fi=!1,ct()):a&&(gr=!1,ct())})}async function X1(){if(!A.canDiscard())return;On=!0;const t=new Map(A.hand.map(i=>[i.id,i])),e=bn.filter(i=>A.selected.has(i)).map(i=>t.get(i)).filter(i=>!!i),n=e.reduce((i,r)=>i+(zt.get(r.id)?.position.x??0),0)/Math.max(1,e.length);Ee.play("sweep",{pan:Ap(n)});for(const i of e){const r=zt.get(i.id);r&&(r.userData.keepAlive=!0,Ce.to(r.position,{y:-5,x:r.position.x+(Math.random()-.5)*1.5,duration:.45,ease:"power2.in"}),Ce.to(r.rotation,{z:(Math.random()-.5)*1.2,duration:.45}),Ce.delayedCall(.5,()=>{Bo(i.id,r)}))}A.discardSelected(e.map(i=>i.id)),Ce.delayedCall(.55,()=>{On=!1,xi(.45)})}function j1(){return A.phase!=="shop"?!1:(Ee.play("buttonClick"),Sc.disabled=!0,id.disabled=!0,Ce.to(Co,{y:-18,scale:.97,duration:.2,ease:"power2.in"}),Ce.to($n,{opacity:0,duration:.28,ease:"power2.inOut",onComplete:()=>{$n.classList.add("hidden"),$n.style.opacity="",Co.style.transform="",A.continueFromShop(),xi(.65),ct(),Sc.disabled=!1}}),!0)}var K1=["Flush Five","Flush House","Five of a Kind","Straight Flush","Four of a Kind","Full House","Flush","Straight","Three of a Kind","Two Pair","Pair","High Card"];function Fp(){dh.replaceChildren();for(const t of K1){const e=A.handLevels[t],n=document.createElement("div");n.className="run-info-row";const i=document.createElement("span");i.className="run-info-level",i.textContent=`lvl.${e.level}`;const r=document.createElement("strong");r.className="run-info-name",r.textContent=t;const s=document.createElement("span");s.className="run-info-score";const a=document.createElement("span");a.className="run-info-chips",a.textContent=e.chips.toLocaleString();const o=document.createElement("span");o.className="run-info-x",o.textContent="×";const l=document.createElement("span");l.className="run-info-mult",l.textContent=e.mult.toLocaleString(),s.append(a,o,l);const c=document.createElement("span");c.className="run-info-count",c.textContent=`# ${Zi[t]??0}`,n.append(i,r,s,c),dh.appendChild(n)}}function ud(){Sp.textContent=`Sound Effects: ${Ee.isMuted()?"Off":"On"}`,Mp.textContent=`Music: ${Ee.isMusicMuted()?"Off":"On"}`}function hd(t){Qi=t,t==="run-info"?(Fp(),oo.classList.remove("hidden"),lo.classList.add("hidden"),co.classList.add("hidden")):t==="collection"?(Po(),co.classList.remove("hidden"),oo.classList.add("hidden"),lo.classList.add("hidden")):(ud(),lo.classList.remove("hidden"),oo.classList.add("hidden"),co.classList.add("hidden")),Ee.play("buttonClick")}function Ma(){Qi&&(oo.classList.add("hidden"),lo.classList.add("hidden"),co.classList.add("hidden"),Qi=null,Ee.play("buttonClick"))}function Bp(){Ee.play("buttonClick"),ds=!1,us=null,gr=!1,Fi=!1,$n.classList.add("hidden"),$n.style.opacity="";for(const[,t]of[...zt])Bo(t.card.id,t);zt.clear(),bn=[],er=null,wp(),Ma(),A.reset(),mr=Wc(A.config.seed),Ts=!1,Sa.value="",zo(),ad(),Qs=ge.unlockedDecks.includes(A.deckKey)?A.deckKey:"red",Oi.value=A.stakeKey,xi(.6),ct()}for(const[t,e]of Object.entries(vM)){const n=Pr(t);n&&n.addEventListener("click",()=>{yi(e)})}td.addEventListener("click",()=>Ro("straight"));nd.addEventListener("click",()=>Ro("flush"));zM.addEventListener("click",()=>hd("run-info"));VM.addEventListener("click",()=>hd("options"));HM.addEventListener("click",Ma);GM.addEventListener("click",Ma);jM.addEventListener("click",()=>hd("collection"));qM.addEventListener("click",Ma);function zo(){const t=Af(Sa.value);Bl.textContent=t?"SEEDED PRACTICE · Meta / unlocks / discovery / Stake stickers disabled":"NORMAL RUN · Meta progression enabled",Bl.classList.toggle("practice",t),Bl.classList.toggle("normal",!t)}Sa.addEventListener("input",zo);YM.addEventListener("click",()=>{Sa.value=String(kf("")),zo(),Ee.play("buttonClick")});XM.addEventListener("click",od);$M.addEventListener("click",od);Sp.addEventListener("click",()=>{Ee.toggleMute(),Ee.isMuted()||Ee.play("buttonClick"),ud()});Mp.addEventListener("click",()=>{Ee.toggleMusicMute(),ud()});WM.addEventListener("click",()=>{Bp()});h1.addEventListener("click",t=>{t.stopPropagation(),cd()});document.addEventListener("click",t=>{jt.classList.contains("hidden")||t.target instanceof Node&&jt.contains(t.target)||cd()});Oi.addEventListener("change",dd);m1.addEventListener("click",()=>{const t=Sa.value.trim();Ts=Af(t);const e=kf(t);mr=Wc(e),ge=Jg(ge,Ts),Rf(localStorage,ge),A.setUnlockedJokerKeys(ge.unlockedJokers),A.setUnlockedVoucherKeys(ge.unlockedVouchers),A.configureRun(Qs,Oi.value,e),ad(),wp(),Ee.play("buttonClick"),ct()});o1.addEventListener("click",()=>{A.skipBooster()&&(Ee.play("buttonClick"),ct())});u1.addEventListener("click",()=>{A.cancelTargetMode()&&(Ee.play("buttonClick"),ct())});Mc.addEventListener("click",()=>{A.confirmTargetMode()&&(Ee.play("chaching"),ct())});id.addEventListener("click",()=>{A.rerollShop()&&(Ee.play("sweep"),Ce.fromTo(yc,{opacity:.55,y:8},{opacity:1,y:0,duration:.22,ease:"power2.out"}),ct())});Sc.addEventListener("click",()=>{yi("continue_shop")});var qa=Pr("btn-mute"),zp=null;if(qa){const t=e=>{qa.textContent=e?"🔇":"🔊",qa.setAttribute("aria-label",e?"Unmute SFX":"Mute SFX"),qa.title=e?"Unmute SFX":"Mute SFX"};t(Ee.isMuted()),zp=Ee.onMutedChange(t)}var zs=Pr("btn-music-mute"),Vp=null;if(zs){const t=e=>{zs.textContent=e?"🔇":"🎵",zs.setAttribute("aria-label",e?"Unmute Music":"Mute Music"),zs.title=e?"Unmute Music":"Mute Music"};t(Ee.isMusicMuted()),zs.addEventListener("click",()=>Ee.toggleMusicMute()),Vp=Ee.onMusicMutedChange(t)}var Hp=t=>{if(t.code==="Escape"){t.preventDefault(),t.stopPropagation(),jt.classList.contains("hidden")?A.targetMode?(A.cancelTargetMode(),ct()):A.phase==="booster"?(A.skipBooster(),ct()):Qi?Ma():od():cd();return}if(Qi)return;if(!t.repeat&&(t.code==="ControlLeft"||t.code==="ControlRight")){t.preventDefault(),yi("play_hand");return}if(!t.repeat&&(t.code==="ShiftLeft"||t.code==="ShiftRight")){t.preventDefault(),yi("discard");return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey){if(t.code==="KeyS"){t.preventDefault(),Ro("straight");return}if(t.code==="KeyF"){t.preventDefault(),Ro("flush");return}}const e=SM(t);e&&(t.preventDefault(),yi(e))};window.addEventListener("keydown",Hp);window.addEventListener("resize",sd);window.addEventListener("pagehide",nr);var q1=gM({renderer:Pt.renderer,camera:Pt.camera,handGroup:Pt.handGroup,getHandObjects:b1,onToggleSelect:t=>!!yi("select_card",{cardId:t}),onReorder:t=>{bn=t,er=null,ld(),nr()}}),Y1=A.subscribe(()=>{nr(),ct(),Qi==="run-info"&&Fp()});window.__OPEN_POKER_TEST__={snapshot:()=>A.toSnapshot(),loadSnapshot:t=>{ds=!1,us=null,gr=!1,Fi=!1,A.reset(t),bn=t.hand.map(e=>e.id),xi(0),ct()},selectFirst:(t=1)=>{const e=[...A.selected];for(const n of e)A.toggleSelect(n);for(const n of A.hand.slice(0,Math.max(0,Math.min(5,t))))A.selected.has(n.id)||A.toggleSelect(n.id)},play:()=>{yi("play_hand")},discard:()=>{yi("discard")},buyOffer:(t=0)=>{const e=A.shop?.offers[t];return e?A.buyOffer(e.id):!1},rerollShop:()=>A.rerollShop(),continueShop:()=>{const t=A.continueFromShop();return t&&(xi(0),ct()),t},sellJoker:(t=0)=>{const e=A.jokers[t];return e?A.sellJoker(e.id):!1},sellConsumable:(t=0)=>{const e=A.consumables[t];return e?A.sellConsumable(e.id):!1},useConsumable:(t=0)=>{const e=A.consumables[t];return e?A.useConsumable(e.id):!1},restart:()=>{yi("restart_run")},dispose:()=>{q1(),Y1(),zp?.(),Vp?.(),window.removeEventListener("keydown",Hp),window.removeEventListener("resize",sd),window.removeEventListener("pagehide",nr),Ce.globalTimeline.clear();for(const[,t]of zt)yh(t);for(zt.clear();wo.length>0;){const t=wo.pop();t&&yh(t)}for(;Ao.length>0;)Ao.pop()?.remove();Pt.dispose(),Ee.dispose()}};zo();xi(.6);ct();nr();
