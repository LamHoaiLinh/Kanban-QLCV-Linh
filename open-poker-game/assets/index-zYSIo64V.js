(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function si(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function id(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Os={duration:.5,overwrite:!1,delay:0},lc,Bt,ut,Ln=1e8,st=1/Ln,bl=Math.PI*2,Cp=bl/4,wp=0,rd=Math.sqrt,Ap=Math.cos,Rp=Math.sin,Ut=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},di=function(e){return typeof e=="number"},cc=function(e){return typeof e>"u"},Jn=function(e){return typeof e=="object"},en=function(e){return e!==!1},uc=function(){return typeof window<"u"},ca=function(e){return yt(e)||Ut(e)},sd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,Pp=/random\([^)]+\)/g,Lp=/,\s*/g,tu=/(?:-?\.?\d|\.)+/gi,ad=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,od=/[+-]=-?[.\d]+/,kp=/[^,'"\[\]\s]+/gi,Dp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,Wn,Tl,hc,Sn={},ja={},ld,cd=function(e){return(ja=Jr(e,Sn))&&sn},dc=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Fs=function(e,n){return!n&&console.warn(e)},ud=function(e,n){return e&&(Sn[e]=n)&&ja&&(ja[e]=n)||Sn},Bs=function(){return 0},Ip={suppressEvents:!0,isStart:!0,kill:!1},Ua={suppressEvents:!0,kill:!1},Np={suppressEvents:!0},fc={},Di=[],El={},hd,dn={},To={},nu=30,Oa=[],pc="",mc=function(e){var n=e[0],i,r;if(Jn(n)||yt(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Oa.length;r--&&!Oa[r].targetTest(n););i=Oa[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Dd(e[r],i)))||e.splice(r,1);return e},rr=function(e){return e._gsap||mc(kn(e))[0]._gsap},dd=function(e,n,i){return(i=e[n])&&yt(i)?e[n]():cc(i)&&e.getAttribute&&e.getAttribute(n)||i},tn=function(e,n){return(e=e.split(",")).forEach(n)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},Gr=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Up=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},qa=function(){var e=Di.length,n=Di.slice(0),i,r;for(El={},Di.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},gc=function(e){return!!(e._initted||e._startAt||e.add)},fd=function(e,n,i,r){Di.length&&!Bt&&qa(),e.render(n,i,r||!!(Bt&&n<0&&gc(e))),Di.length&&!Bt&&qa()},pd=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(kp).length<2?n:Ut(e)?e.trim():e},md=function(e){return e},xn=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},Op=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Jr=function(e,n){for(var i in n)e[i]=n[i];return e},iu=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Jn(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Ya=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},ks=function(e){var n=e.parent||pt,i=e.keyframes?Op(Xt(e.keyframes)):xn;if(en(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},Fp=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},gd=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},po=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},Fi=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},sr=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Bp=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Cl=function(e,n,i,r){return e._startAt&&(Bt?e._startAt.revert(Ua):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},zp=function t(e){return!e||e._ts&&t(e.parent)},ru=function(e){return e._repeat?Zr(e._tTime,e=e.duration()+e._rDelay)*e:0},Zr=function(e,n){var i=Math.floor(e=ft(e/n));return e&&i===e?i-1:i},Ja=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},mo=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},go=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ft(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),mo(e),i._dirty||sr(i,e)),e},_d=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=Ja(e.rawTime(),n),(!n._dur||Zs(0,n.totalDuration(),i)-n._tTime>st)&&n.render(i,!0)),sr(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-st}},jn=function(e,n,i,r){return n.parent&&Fi(n),n._start=ft((di(i)?i:i||e!==pt?An(e,i,n):e._time)+n._delay),n._end=ft(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),gd(e,n,"_first","_last",e._sort?"_start":0),wl(n)||(e._recent=n),r||_d(e,n),e._ts<0&&go(e,e._tTime),e},vd=function(e,n){return(Sn.ScrollTrigger||dc("scrollTrigger",n))&&Sn.ScrollTrigger.create(n,e)},yd=function(e,n,i,r,s){if(vc(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hd!==pn.frame)return Di.push(e),e._lazy=[s,r],1},Vp=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},wl=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},Hp=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&Vp(e)&&!(!e._initted&&wl(e))||(e._ts<0||e._dp._ts<0)&&!wl(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Zs(0,e._tDur,n),u=Zr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Bt||r||e._zTime===st||!n&&e._zTime){if(!e._initted&&yd(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?st:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;n<0&&Cl(e,n,i,!0),e._onUpdate&&!i&&mn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&mn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&Fi(e,1),!i&&!Bt&&(mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},Gp=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},Qr=function(e,n,i,r){var s=e._repeat,a=ft(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ft(a*(s+1)+e._rDelay*s):a,o>0&&!r&&go(e,e._tTime=e._tDur*o),e.parent&&mo(e),i||sr(e.parent,e),e},su=function(e){return e instanceof Qt?sr(e):Qr(e,e._dur)},Wp={_start:0,endTime:Bs,totalDuration:Bs},An=function t(e,n,i){var r=e.labels,s=e._recent||Wp,a=e.duration()>=Ln?s.endTime(!1):e._dur,o,l,c;return Ut(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(Xt(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},Ds=function(e,n,i){var r=di(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=en(l.vars.inherit)&&l.parent;a.immediateRender=en(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new wt(n[0],a,n[s+1])},Gi=function(e,n){return e||e===0?n(e):n},Zs=function(e,n,i){return i<e?e:i>n?n:i},Wt=function(e,n){return!Ut(e)||!(n=Dp.exec(e))?"":n[1]},Xp=function(e,n,i){return Gi(i,function(r){return Zs(e,n,r)})},Al=[].slice,Md=function(e,n){return e&&Jn(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Jn(e[0]))&&!e.nodeType&&e!==Wn},$p=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ut(r)&&!n||Md(r,1)?(s=i).push.apply(s,kn(r)):i.push(r)})||i},kn=function(e,n,i){return ut&&!n&&ut.selector?ut.selector(e):Ut(e)&&!i&&(Tl||!es())?Al.call((n||hc).querySelectorAll(e),0):Xt(e)?$p(e,i):Md(e)?Al.call(e,0):e?[e]:[]},Rl=function(e){return e=kn(e)[0]||Fs("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return kn(n,i.querySelectorAll?i:i===e?Fs("Invalid scope")||hc.createElement("div"):e)}},Sd=function(e){return e.sort(function(){return .5-Math.random()})},xd=function(e){if(yt(e))return e;var n=Jn(e)?e:{each:e},i=ar(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,u=r,d=r;return Ut(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,m,_){var f=(_||n).length,g=a[f],p,y,T,b,E,A,R,v,S;if(!g){if(S=n.grid==="auto"?0:(n.grid||[1,Ln])[1],!S){for(R=-Ln;R<(R=_[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(g=a[f]=[],p=l?Math.min(S,f)*u-.5:r%S,y=S===Ln?0:l?f*d/S-.5:r/S|0,R=0,v=Ln,A=0;A<f;A++)T=A%S-p,b=y-(A/S|0),g[A]=E=c?Math.abs(c==="y"?b:T):rd(T*T+b*b),E>R&&(R=E),E<v&&(v=E);r==="random"&&Sd(g),g.max=R-v,g.min=v,g.v=f=(parseFloat(n.amount)||parseFloat(n.each)*(S>f?f-1:c?c==="y"?f/S:S:Math.max(S,f/S))||0)*(r==="edges"?-1:1),g.b=f<0?s-f:s,g.u=Wt(n.amount||n.each)||0,i=i&&f<0?sm(i):i}return f=(g[h]-g.min)/g.max||0,ft(g.b+(i?i(f):f)*g.v)+g.u}},Pl=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ft(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(di(i)?0:Wt(i))}},bd=function(e,n){var i=Xt(e),r,s;return!i&&Jn(e)&&(r=i=e.radius||Ln,e.values?(e=kn(e.values),(s=!di(e[0]))&&(r*=r)):e=Pl(e.increment)),Gi(n,i?yt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ln,u=0,d=e.length,h,m;d--;)s?(h=e[d].x-o,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:a,s||u===a||di(a)?u:u+Wt(a)}:Pl(e))},Td=function(e,n,i,r){return Gi(Xt(e)?!n:i===!0?!!(i=0):!r,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},Kp=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},jp=function(e,n){return function(i){return e(parseFloat(i))+(n||Wt(i))}},qp=function(e,n,i){return Cd(e,n,0,1,i)},Ed=function(e,n,i){return Gi(i,function(r){return e[~~n(r)]})},Yp=function t(e,n,i){var r=n-e;return Xt(e)?Ed(e,t(0,e.length),n):Gi(i,function(s){return(r+(s-e)%r)%r+e})},Jp=function t(e,n,i){var r=n-e,s=r*2;return Xt(e)?Ed(e,t(0,e.length-1),n):Gi(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},zs=function(e){return e.replace(Pp,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(Lp);return Td(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Cd=function(e,n,i,r,s){var a=n-e,o=r-i;return Gi(s,function(l){return i+((l-e)/a*o||0)})},Zp=function t(e,n,i,r){var s=isNaN(e+n)?0:function(m){return(1-m)*e+m*n};if(!s){var a=Ut(e),o={},l,c,u,d,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(Xt(e)&&!Xt(n)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,s=function(_){_*=d;var f=Math.min(h,~~_);return u[f](_-f)},i=n}else r||(e=Jr(Xt(e)?[]:{},e));if(!u){for(l in n)_c.call(o,e,l,"get",n[l]);s=function(_){return Sc(_,o)||(a?e.p:e)}}}return Gi(i,s)},au=function(e,n,i){var r=e.labels,s=Ln,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},mn=function(e,n,i){var r=e.vars,s=r[n],a=ut,o=e._ctx,l,c,u;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&Di.length&&qa(),o&&(ut=o),u=l?s.apply(c,l):s.call(c),ut=a,u},Cs=function(e){return Fi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&mn(e,"onInterrupt"),e},zr,wd=[],Ad=function(e){if(e)if(e=!e.name&&e.default||e,uc()||e.headless){var n=e.name,i=yt(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:Bs,render:Sc,add:_c,kill:mm,modifier:pm,rawVars:0},a={targetTest:0,get:0,getSetter:Mc,aliases:{},register:0};if(es(),e!==r){if(dn[n])return;xn(r,xn(Ya(e,s),a)),Jr(r.prototype,Jr(s,Ya(e,a))),dn[r.prop=n]=r,e.targetTest&&(Oa.push(r),fc[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}ud(n,r),e.register&&e.register(sn,r,nn)}else wd.push(e)},rt=255,ws={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Eo=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*rt+.5|0},Rd=function(e,n,i){var r=e?di(e)?[e>>16,e>>8&rt,e&rt]:0:ws.black,s,a,o,l,c,u,d,h,m,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ws[e])r=ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(tu),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Eo(l+1/3,s,a),r[1]=Eo(l,s,a),r[2]=Eo(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(ad),i&&r.length<4&&(r[3]=1),r}else r=e.match(tu)||ws.transparent;r=r.map(Number)}return n&&!_&&(s=r[0]/rt,a=r[1]/rt,o=r[2]/rt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===s?(a-o)/m+(a<o?6:0):d===a?(o-s)/m+2:(s-a)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Pd=function(e){var n=[],i=[],r=-1;return e.split(Ii).forEach(function(s){var a=s.match(Br)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},ou=function(e,n,i){var r="",s=(e+r).match(Ii),a=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Rd(h,n,1))&&a+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Pd(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ii,"1").split(Br),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ii),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},Ii=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ws)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),Qp=/hsl[a]?\(/,Ld=function(e){var n=e.join(" "),i;if(Ii.lastIndex=0,Ii.test(n))return i=Qp.test(n),e[1]=ou(e[1],i),e[0]=ou(e[0],i,Pd(e[1])),!0},Vs,pn=(function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,c,u,d,h,m,_=function f(g){var p=t()-r,y=g===!0,T,b,E,A;if((p>e||p<0)&&(i+=p-n),r+=p,E=r-i,T=E-a,(T>0||y)&&(A=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,a+=T+(T>=s?4:s-T),b=1),y||(l=c(f)),b)for(m=0;m<o.length;m++)o[m](E,h,A,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){ld&&(!Tl&&uc()&&(Wn=Tl=window,hc=Wn.document||{},Sn.gsap=sn,(Wn.gsapVersions||(Wn.gsapVersions=[])).push(sn.version),cd(ja||Wn.GreenSockGlobals||!Wn.gsap&&Wn||{}),wd.forEach(Ad)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,a-d.time*1e3+1|0)},Vs=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Vs=0,c=Bs},lagSmoothing:function(g,p){e=g||1/0,n=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,p,y){var T=p?function(b,E,A,R){g(b,E,A,R),d.remove(T)}:g;return d.remove(g),o[y?"unshift":"push"](T),es(),T},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&m>=p&&m--},_listeners:o},d})(),es=function(){return!Vs&&pn.wake()},Ye={},em=/^[\d.\-M][\d.\-,\s]/,tm=/["']/g,nm=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(tm,"").trim():+c,r=l.substr(o+1).trim();return n},im=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},rm=function(e){var n=(e+"").split("("),i=Ye[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[nm(n[1])]:im(e).split(",").map(pd)):Ye._CE&&em.test(e)?Ye._CE("",e):i},sm=function(e){return function(n){return 1-e(1-n)}},ar=function(e,n){return e&&(yt(e)?e:Ye[e]||rm(e))||n},fr=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return tn(e,function(o){Ye[o]=Sn[o]=s,Ye[a=o.toLowerCase()]=i;for(var l in s)Ye[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[o+"."+l]=s[l]}),s},kd=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Co=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/bl*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Rp((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:kd(o);return s=bl/s,l.config=function(c,u){return t(e,c,u)},l},wo=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:kd(i);return r.config=function(s){return t(e,s)},r};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;fr(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;fr("Elastic",Co("in"),Co("out"),Co());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};fr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});fr("Circ",function(t){return-(rd(1-t*t)-1)});fr("Sine",function(t){return t===1?1:-Ap(t*Cp)+1});fr("Back",wo("in"),wo("out"),wo());Ye.SteppedEase=Ye.steps=Sn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-st;return function(o){return((r*Zs(0,a,o)|0)+s)*i}}};Os.ease=Ye["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return pc+=t+","+t+"Params,"});var Dd=function(e,n){this.id=wp++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:dd,this.set=n?n.getSetter:Mc},Hs=(function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Qr(this,+n.duration,1,1),this.data=n.data,ut&&(this._ctx=ut,ut.data.push(this)),Vs||pn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(es(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(go(this,i),!s._dp||s.parent||_d(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fd(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ru(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ru(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Zr(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ja(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-st?0:this._rts,this.totalTime(Zs(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),mo(this),Bp(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ft(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&jn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(en(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ja(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Np);var r=Bt;return Bt=i,gc(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Bt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,su(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,su(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(An(this,i),en(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,en(r)),this._dur||(this._zTime=-st),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=yt(i)?i:md,l=function(){var u=r.then;r.then=null,s&&s(),yt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Cs(this)},t})();xn(Hs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Qt=(function(t){id(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=en(i.sortChildren),pt&&jn(i.parent||pt,si(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&vd(si(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return Ds(0,arguments,this),this},n.from=function(r,s,a){return Ds(1,arguments,this),this},n.fromTo=function(r,s,a,o){return Ds(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,ks(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wt(r,s,An(this,a),1),this},n.call=function(r,s,a){return jn(this,wt.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new wt(r,a,An(this,l)),this},n.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ks(a).immediateRender=en(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},n.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,ks(o).immediateRender=en(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ft(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,m,_,f,g,p,y,T,b,E,A,R;if(this!==pt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,b=this._start,T=this._ts,p=!T,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(h=ft(u%g),u===l?(f=this._repeat,h=c):(E=ft(u/g),f=~~E,f&&f===E&&(h=c,f--),h>c&&(h=c)),E=Zr(this._tTime,g),!o&&this._tTime&&E!==f&&this._tTime-E*g-this._dur<=0&&(E=f),A&&f&1&&(h=c-h,R=1),f!==E&&!this._lock){var v=A&&E&1,S=v===(A&&f&1);if(f<E&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(R?0:ft(f*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,E=f),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Gp(this,ft(o),ft(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!E&&(mn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-st);break}}m=_}else{m=this._last;for(var I=r<0?r:h;m;){if(_=m._prev,(m._act||I<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,s,a||Bt&&gc(m)),h!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=I?-st:st);break}}m=_}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=b,mo(this),this.render(r,s,a);this._onUpdate&&!s&&mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fi(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(mn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(di(s)||(s=An(this,s,r)),!(r instanceof Hs)){if(Xt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ut(r))return this.addLabel(r,s);if(yt(r))r=wt.delayedCall(0,r);else return this}return this!==r?jn(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ln);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof wt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return Ut(r)?this.removeLabel(r):yt(r)?this.killTweensOf(r):(r.parent===this&&po(this,r),r===this._recent&&(this._recent=this._last),sr(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(pn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=An(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=wt.delayedCall(0,s||Bs,a);return o.data="isPause",this._hasPause=1,jn(this,o,An(this,r))},n.removePause=function(r){var s=this._first;for(r=An(this,r);s;)s._start===r&&s.data==="isPause"&&Fi(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ai!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=kn(r),l=this._first,c=di(s),u;l;)l instanceof wt?Up(l._targets,o)&&(c?(!Ai||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=An(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,_=wt.to(a,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!m){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&Qr(_,g,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,xn({startAt:{time:An(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),au(this,An(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),au(this,An(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=ft(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return sr(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),sr(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=Ln,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,jn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Qr(a,a===pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(pt._ts&&(fd(pt,Ja(r,pt)),hd=pn.frame),pn.frame>=nu){nu+=yn.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&yn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},e})(Hs);xn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var am=function(e,n,i,r,s,a,o){var l=new nn(this._pt,e,n,0,1,Bd,null,s),c=0,u=0,d,h,m,_,f,g,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=zs(r)),a&&(y=[i,r],a(y,e,n),i=y[0],r=y[1]),h=i.match(bo)||[];d=bo.exec(r);)_=d[0],f=r.substring(c,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:g,c:_.charAt(1)==="="?Gr(g,_)-g:parseFloat(_)-g,m:m&&m<4?Math.round:0},c=bo.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(od.test(r)||p)&&(l.e=0),this._pt=l,l},_c=function(e,n,i,r,s,a,o,l,c,u){yt(r)&&(r=r(s||0,e,a));var d=e[n],h=i!=="get"?i:yt(d)?c?e[n.indexOf("set")||!yt(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():d,m=yt(d)?c?hm:Od:yc,_;if(Ut(r)&&(~r.indexOf("random(")&&(r=zs(r)),r.charAt(1)==="="&&(_=Gr(h,r)+(Wt(h)||0),(_||_===0)&&(r=_))),!u||h!==r||Ll)return!isNaN(h*r)&&r!==""?(_=new nn(this._pt,e,n,+h||0,r-(h||0),typeof d=="boolean"?fm:Fd,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(n in e)&&dc(n,r),am.call(this,e,n,h,r,m,l||yn.stringFilter,c))},om=function(e,n,i,r,s){if(yt(e)&&(e=Is(e,s,n,i,r)),!Jn(e)||e.style&&e.nodeType||Xt(e)||sd(e))return Ut(e)?Is(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=Is(e[o],s,n,i,r);return a},Id=function(e,n,i,r,s,a){var o,l,c,u;if(dn[e]&&(o=new dn[e]).init(s,o.rawVars?n[e]:om(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new nn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==zr))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ai,Ll,vc=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,m=r.autoRevert,_=e._dur,f=e._startAt,g=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:g,T=e._overwrite==="auto"&&!lc,b=e.timeline,E=r.easeReverse||d,A,R,v,S,I,w,L,B,k,z,V,F,Y;if(b&&(!h||!s)&&(s="none"),e._ease=ar(s,Os.ease),e._rEase=E&&(ar(E)||e._ease),e._from=!b&&!!r.runBackwards,e._from&&(e.ratio=1),!b||h&&!r.stagger){if(B=g[0]?rr(g[0]).harness:0,F=B&&r[B.prop],A=Ya(r,fc),f&&(f._zTime<0&&f.progress(1),n<0&&u&&o&&!m?f.render(-1,!0):f.revert(u&&_?Ua:Ip),f._lazy=0),a){if(Fi(e._startAt=wt.set(g,xn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!f&&en(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Bt||!o&&!m)&&e._startAt.revert(Ua),o&&_&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&_&&!f){if(n&&(o=!1),v=xn({overwrite:!1,data:"isFromStart",lazy:o&&!f&&en(l),immediateRender:o,stagger:0,parent:p},A),F&&(v[B.prop]=F),Fi(e._startAt=wt.set(g,v)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Bt?e._startAt.revert(Ua):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,st,st);else if(!n)return}for(e._pt=e._ptCache=0,l=_&&en(l)||l&&!_,R=0;R<g.length;R++){if(I=g[R],L=I._gsap||mc(g)[R]._gsap,e._ptLookup[R]=z={},El[L.id]&&Di.length&&qa(),V=y===g?R:y.indexOf(I),B&&(k=new B).init(I,F||A,e,V,y)!==!1&&(e._pt=S=new nn(e._pt,I,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(ee){z[ee]=S}),k.priority&&(w=1)),!B||F)for(v in A)dn[v]&&(k=Id(v,A,e,V,I,y))?k.priority&&(w=1):z[v]=S=_c.call(e,I,v,"get",A[v],V,y,0,r.stringFilter);e._op&&e._op[R]&&e.kill(I,e._op[R]),T&&e._pt&&(Ai=e,pt.killTweensOf(I,z,e.globalTime(n)),Y=!e.parent,Ai=0),e._pt&&l&&(El[L.id]=1)}w&&zd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&n<=0&&b.render(Ln,!0,!0)},lm=function(e,n,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,h,m;if(!c)for(c=e._ptCache[n]=[],h=e._ptLookup,m=e._targets.length;m--;){if(u=h[m][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return Ll=1,e.vars[n]="+=0",vc(e,o),Ll=0,l?Fs(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,d.e&&(d.e=xt(i)+Wt(d.e)),d.b&&(d.b=u.s+Wt(d.b))},cm=function(e,n){var i=e[0]?rr(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=Jr({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},um=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(Xt(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},Is=function(e,n,i,r,s){return yt(e)?e.call(n,i,r,s):Ut(e)&&~e.indexOf("random(")?zs(e):e},Nd=pc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ud={};tn(Nd+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ud[t]=1});var wt=(function(t){id(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:ks(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,f=l.defaults,g=l.scrollTrigger,p=r.parent||pt,y=(Xt(i)||sd(i)?di(i[0]):"length"in r)?[i]:kn(i),T,b,E,A,R,v,S,I;if(o._targets=y.length?mc(y):Fs("GSAP target "+i+" not found. https://gsap.com",!yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||h||ca(c)||ca(u)){r=o.vars;var w=r.easeReverse||r.yoyoEase;if(T=o.timeline=new Qt({data:"nested",defaults:f||{},targets:p&&p.data==="nested"?p.vars.targets:y}),T.kill(),T.parent=T._dp=si(o),T._start=0,h||ca(c)||ca(u)){if(A=y.length,S=h&&xd(h),Jn(h))for(R in h)~Nd.indexOf(R)&&(I||(I={}),I[R]=h[R]);for(b=0;b<A;b++)E=Ya(r,Ud),E.stagger=0,w&&(E.easeReverse=w),I&&Jr(E,I),v=y[b],E.duration=+Is(c,si(o),b,v,y),E.delay=(+Is(u,si(o),b,v,y)||0)-o._delay,!h&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),T.to(v,E,S?S(b,v,y):0),T._ease=Ye.none;T.duration()?c=u=0:o.timeline=0}else if(_){ks(xn(T.vars.defaults,{ease:"none"})),T._ease=ar(_.ease||r.ease||"none");var L=0,B,k,z;if(Xt(_))_.forEach(function(V){return T.to(y,V,">")}),T.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||um(R,_[R],E,_.easeEach);for(R in E)for(B=E[R].sort(function(V,F){return V.t-F.t}),L=0,b=0;b<B.length;b++)k=B[b],z={ease:k.e,duration:(k.t-(b?B[b-1].t:0))/100*c},z[R]=k.v,T.to(y,z,L),L+=z.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return m===!0&&!lc&&(Ai=si(o),pt.killTweensOf(y),Ai=0),jn(p,si(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!_&&o._start===ft(p._time)&&en(d)&&zp(si(o))&&p.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),g&&vd(si(o),g),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-st&&!u?l:r<st?0:r,h,m,_,f,g,p,y,T;if(!c)Hp(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,T=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+r,s,a);if(h=ft(d%f),d===l?(_=this._repeat,h=c):(g=ft(d/f),_=~~g,_&&_===g?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(h=c-h),g=Zr(this._tTime,f),h===o&&!a&&this._initted&&_===g)return this._tTime=d,this;_!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==f&&this._initted&&(this._lock=a=1,this.render(ft(f*_),!0).invalidate()._lock=0)}if(!this._initted){if(yd(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var b=h<o;if(b!==this._inv){var E=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(b?-1:1)/E:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!g&&(mn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;T&&T.render(r<0?r:T._dur*T._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Cl(this,r,s,a),mn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&mn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Cl(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fi(this,1),!s&&!(u&&!o)&&(d||o||p)&&(mn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){Vs||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||vc(this,c),u=this._ease(c/this._dur),lm(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(go(this,0),this.parent||gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ai&&Ai.vars.overwrite!==!0)._first||Cs(this),this.parent&&a!==this.timeline.totalDuration()&&Qr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?kn(r):o,c=this._ptLookup,u=this._pt,d,h,m,_,f,g,p;if((!s||s==="all")&&Fp(o,l))return s==="all"&&(this._pt=0),Cs(this);for(d=this._op=this._op||[],s!=="all"&&(Ut(s)&&(f={},tn(s,function(y){return f[y]=1}),s=f),s=cm(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(d[p]=s,_=h,m={}):(m=d[p]=d[p]||{},_=s);for(f in _)g=h&&h[f],g&&((!("kill"in g.d)||g.d.kill(f)===!0)&&po(this,g,"_pt"),delete h[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&Cs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ds(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ds(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return pt.killTweensOf(r,s,a)},e})(Hs);xn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(t){wt[t]=function(){var e=new Qt,n=Al.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var yc=function(e,n,i){return e[n]=i},Od=function(e,n,i){return e[n](i)},hm=function(e,n,i,r){return e[n](r.fp,i)},dm=function(e,n,i){return e.setAttribute(n,i)},Mc=function(e,n){return yt(e[n])?Od:cc(e[n])&&e.setAttribute?dm:yc},Fd=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},fm=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Bd=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},Sc=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},pm=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},mm=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?po(this,n,"_pt"):n.dep||(i=1),n=r;return!i},gm=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},zd=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},nn=(function(){function t(n,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Fd,this.d=l||this,this.set=c||yc,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=gm,this.m=i,this.mt=s,this.tween=r},t})();tn(pc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return fc[t]=1});Sn.TweenMax=Sn.TweenLite=wt;Sn.TimelineLite=Sn.TimelineMax=Qt;pt=new Qt({sortChildren:!1,defaults:Os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yn.stringFilter=Ld;var or=[],Fa={},_m=[],lu=0,vm=0,Ao=function(e){return(Fa[e]||_m).map(function(n){return n()})},kl=function(){var e=Date.now(),n=[];e-lu>2&&(Ao("matchMediaInit"),or.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Wn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),Ao("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),lu=e,Ao("matchMedia"))},Vd=(function(){function t(n,i){this.selector=i&&Rl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=vm++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){yt(i)&&(s=r,r=i,i=yt);var a=this,o=function(){var c=ut,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Rl(s)),ut=a,d=r.apply(a,arguments),yt(d)&&a._r.push(d),ut=c,a.selector=u,a.isReverted=!1,d};return a.last=o,i===yt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof wt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=or.length;a--;)or[a].id===this.id&&or.splice(a,1)},e.revert=function(i){this.kill(i||{})},t})(),ym=(function(){function t(n){this.contexts=[],this.scope=n,ut&&ut.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){Jn(i)||(i={matches:i});var a=new Vd(0,s||this.scope),o=a.conditions={},l,c,u;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Wn.matchMedia(i[c]),l&&(or.indexOf(a)<0&&or.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(kl):l.addEventListener("change",kl)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t})(),Za={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return Ad(r)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,n){return pt.getTweensOf(e,n)},getProperty:function(e,n,i,r){Ut(e)&&(e=kn(e)[0]);var s=rr(e||{}).get,a=i?md:pd;return i==="native"&&(i=""),e&&(n?a((dn[n]&&dn[n].get||s)(e,n,i,r)):function(o,l,c){return a((dn[o]&&dn[o].get||s)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=kn(e),e.length>1){var r=e.map(function(u){return sn.quickSetter(u,n,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=dn[n],o=rr(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var d=new a;zr._pt=0,d.init(e,i?u+i:u,zr,0,[e]),d.render(1,d),zr._pt&&Sc(1,zr)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,n,i){var r,s=sn.to(e,xn((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(n,l,c,u)};return a.tween=s,a},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ar(e.ease,Os.ease)),iu(Os,e||{})},config:function(e){return iu(yn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!dn[o]&&!Sn[o]&&Fs(n+" effect requires "+o+" plugin.")}),To[n]=function(o,l,c){return i(kn(o),xn(l||{},s),c)},a&&(Qt.prototype[n]=function(o,l,c){return this.add(To[n](o,Jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Ye[e]=ar(n)},parseEase:function(e,n){return arguments.length?ar(e,n):Ye},getById:function(e){return pt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Qt(e),r,s;for(i.smoothChildTiming=en(e.smoothChildTiming),pt.remove(i),i._dp=0,i._time=i._tTime=pt._time,r=pt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof wt&&r.vars.onComplete===r._targets[0]))&&jn(i,r,r._start-r._delay),r=s;return jn(pt,i,0),i},context:function(e,n){return e?new Vd(e,n):ut},matchMedia:function(e){return new ym(e)},matchMediaRefresh:function(){return or.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||kl()},addEventListener:function(e,n){var i=Fa[e]||(Fa[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Fa[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:Yp,wrapYoyo:Jp,distribute:xd,random:Td,snap:bd,normalize:qp,getUnit:Wt,clamp:Xp,splitColor:Rd,toArray:kn,selector:Rl,mapRange:Cd,pipe:Kp,unitize:jp,interpolate:Zp,shuffle:Sd},install:cd,effects:To,ticker:pn,updateRoot:Qt.updateRoot,plugins:dn,globalTimeline:pt,core:{PropTween:nn,globals:ud,Tween:wt,Timeline:Qt,Animation:Hs,getCache:rr,_removeLinkedListItem:po,reverting:function(){return Bt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return lc=e}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Za[t]=wt[t]});pn.add(Qt.updateRoot);zr=Za.to({},{duration:0});var Mm=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},Sm=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Mm(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},Ro=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ut(s)&&(l={},tn(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}Sm(o,s)}}}},sn=Za.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)Bt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Ro("roundProps",Pl),Ro("modifiers"),Ro("snap",bd))||Za;wt.version=Qt.version=sn.version="3.15.0";ld=1;uc()&&es();var bx=Ye.Power0,Tx=Ye.Power1,Ex=Ye.Power2,Cx=Ye.Power3,wx=Ye.Power4,Ax=Ye.Linear,Rx=Ye.Quad,Px=Ye.Cubic,Lx=Ye.Quart,kx=Ye.Quint,Dx=Ye.Strong,Ix=Ye.Elastic,Nx=Ye.Back,Ux=Ye.SteppedEase,Ox=Ye.Bounce,Fx=Ye.Sine,Bx=Ye.Expo,zx=Ye.Circ,cu,Ri,Wr,xc,tr,uu,bc,xm=function(){return typeof window<"u"},fi={},Qi=180/Math.PI,Xr=Math.PI/180,yr=Math.atan2,hu=1e8,Tc=/([A-Z])/g,bm=/(left|right|width|margin|padding|x)/i,Tm=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dl=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Em=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Cm=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},wm=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Am=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},Hd=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Gd=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},Rm=function(e,n,i){return e.style[n]=i},Pm=function(e,n,i){return e.style.setProperty(n,i)},Lm=function(e,n,i){return e._gsap[n]=i},km=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},Dm=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Im=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},mt="transform",rn=mt+"Origin",Nm=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in fi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ai(r,o)}):this.tfm[e]=a.x?a[e]:ai(r,e),e===rn&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(mt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(rn,n,"")),e=mt}(s||n)&&this.props.push(e,n,s[e])},Wd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Um=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=bc(),(!s||!s.isStart)&&!i[mt]&&(Wd(i),r.zOrigin&&i[rn]&&(i[rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Xd=function(e,n){var i={target:e,props:[],revert:Um,save:Nm};return e._gsap||sn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},$d,Il=function(e,n){var i=Ri.createElementNS?Ri.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ri.createElement(e);return i&&i.style?i:Ri.createElement(e)},gn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(Tc,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,ts(n)||n,1)||""},du="O,Moz,ms,Ms,Webkit".split(","),ts=function(e,n,i){var r=(n||tr).style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(du[s]+e in r););return s<0?null:(s===3?"ms":s>=0?du[s]:"")+e},Nl=function(){xm()&&window.document&&(cu=window,Ri=cu.document,Wr=Ri.documentElement,tr=Il("div")||{style:{}},Il("div"),mt=ts(mt),rn=mt+"Origin",tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$d=!!ts("perspective"),bc=sn.core.reverting,xc=1)},fu=function(e){var n=e.ownerSVGElement,i=Il("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Wr.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Wr.removeChild(i),s},pu=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},Kd=function(e){var n,i;try{n=e.getBBox()}catch{n=fu(e),i=1}return n&&(n.width||n.height)||i||(n=fu(e)),n&&!n.width&&!n.x&&!n.y?{x:+pu(e,["x","cx","x1"])||0,y:+pu(e,["y","cy","y1"])||0,width:0,height:0}:n},jd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kd(e))},Bi=function(e,n){if(n){var i=e.style,r;n in fi&&n!==rn&&(n=mt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(Tc,"-$1").toLowerCase())):i.removeAttribute(n)}},Pi=function(e,n,i,r,s,a){var o=new nn(e._pt,n,i,0,1,a?Gd:Hd);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},mu={deg:1,rad:1,turn:1},Om={grid:1,flex:1},zi=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=tr.style,l=bm.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",m=r==="%",_,f,g,p;if(r===a||!s||mu[r]||mu[a])return s;if(a!=="px"&&!h&&(s=t(e,n,i,"px")),p=e.getCTM&&jd(e),(m||a==="%")&&(fi[n]||~n.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],xt(m?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:r),f=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Ri||!f.appendChild)&&(f=Ri.body),g=f._gsap,g&&m&&g.width&&l&&g.time===pn.time&&!g.uncache)return xt(s/g.width*d);if(m&&(n==="height"||n==="width")){var y=e.style[n];e.style[n]=d+r,_=e[u],y?e.style[n]=y:Bi(e,n)}else(m||a==="%")&&!Om[gn(f,"display")]&&(o.position=gn(e,"position")),f===e&&(o.position="static"),f.appendChild(tr),_=tr[u],f.removeChild(tr),o.position="absolute";return l&&m&&(g=rr(f),g.time=pn.time,g.width=f[u]),xt(h?_*s/d:_&&s?d/_*s:0)},ai=function(e,n,i,r){var s;return xc||Nl(),n in qn&&n!=="transform"&&(n=qn[n],~n.indexOf(",")&&(n=n.split(",")[0])),fi[n]&&n!=="transform"?(s=Ws(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:eo(gn(e,rn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Qa[n]&&Qa[n](e,n,i)||gn(e,n)||dd(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zi(e,n,s,i)+i:s},Fm=function(e,n,i,r){if(!i||i==="none"){var s=ts(n,e,1),a=s&&gn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=gn(e,"borderTopColor"))}var o=new nn(this._pt,e.style,n,0,1,Bd),l=0,c=0,u,d,h,m,_,f,g,p,y,T,b,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=gn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(f=e.style[n],e.style[n]=r,r=gn(e,n)||r,f?e.style[n]=f:Bi(e,n)),u=[i,r],Ld(u),i=u[0],r=u[1],h=i.match(Br)||[],E=r.match(Br)||[],E.length){for(;d=Br.exec(r);)g=d[0],y=r.substring(l,d.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(f=h[c++]||"")&&(m=parseFloat(f)||0,b=f.substr((m+"").length),g.charAt(1)==="="&&(g=Gr(m,g)+b),p=parseFloat(g),T=g.substr((p+"").length),l=Br.lastIndex-T.length,T||(T=T||yn.units[n]||b,l===r.length&&(r+=T,o.e+=T)),b!==T&&(m=zi(e,n,f,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:p-m,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?Gd:Hd;return od.test(r)&&(o.e=0),this._pt=o,o},gu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bm=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=gu[i]||i,n[1]=gu[r]||r,n.join(" ")},zm=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],fi[o]&&(l=1,o=o==="transformOrigin"?rn:mt),Bi(i,o);l&&(Bi(i,mt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ws(i,1),a.uncache=1,Wd(r)))}},Qa={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new nn(e._pt,n,i,0,0,zm);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Gs=[1,0,0,1,0,0],qd={},Yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_u=function(e){var n=gn(e,mt);return Yd(n)?Gs:n.substr(7).match(ad).map(xt)},Ec=function(e,n){var i=e._gsap||rr(e),r=e.style,s=_u(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Gs:s):(s===Gs&&!e.offsetParent&&e!==Wr&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Wr.appendChild(e)),s=_u(e),l?r.display=l:Bi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Wr.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ul=function(e,n,i,r,s,a){var o=e._gsap,l=s||Ec(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,m=l[0],_=l[1],f=l[2],g=l[3],p=l[4],y=l[5],T=n.split(" "),b=parseFloat(T[0])||0,E=parseFloat(T[1])||0,A,R,v,S;i?l!==Gs&&(R=m*g-_*f)&&(v=b*(g/R)+E*(-f/R)+(f*y-g*p)/R,S=b*(-_/R)+E*(m/R)-(m*y-_*p)/R,b=v,E=S):(A=Kd(e),b=A.x+(~T[0].indexOf("%")?b/100*A.width:b),E=A.y+(~(T[1]||T[0]).indexOf("%")?E/100*A.height:E)),r||r!==!1&&o.smooth?(p=b-c,y=E-u,o.xOffset=d+(p*m+y*f)-p,o.yOffset=h+(p*_+y*g)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=E,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[rn]="0px 0px",a&&(Pi(a,o,"xOrigin",c,b),Pi(a,o,"yOrigin",u,E),Pi(a,o,"xOffset",d,o.xOffset),Pi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},Ws=function(e,n){var i=e._gsap||new Dd(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=gn(e,rn)||"0",u=d=h=f=g=p=y=T=b=0,d,h,m=_=1,_,f,g,p,y,T,b,E,A,R,v,S,I,w,L,B,k,z,V,F,Y,ee,re,ge,Me,Je,Ne,K;return i.svg=!!(e.getCTM&&jd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),r.scale=r.rotate=r.translate="none"),R=Ec(e,i.svg),i.svg&&(i.uncache?(Y=e.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",F=""):F=!n&&e.getAttribute("data-svg-origin"),Ul(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,R)),E=i.xOrigin||0,A=i.yOrigin||0,R!==Gs&&(w=R[0],L=R[1],B=R[2],k=R[3],u=z=R[4],d=V=R[5],R.length===6?(m=Math.sqrt(w*w+L*L),_=Math.sqrt(k*k+B*B),f=w||L?yr(L,w)*Qi:0,y=B||k?yr(B,k)*Qi+f:0,y&&(_*=Math.abs(Math.cos(y*Xr))),i.svg&&(u-=E-(E*w+A*B),d-=A-(E*L+A*k))):(K=R[6],Je=R[7],re=R[8],ge=R[9],Me=R[10],Ne=R[11],u=R[12],d=R[13],h=R[14],v=yr(K,Me),g=v*Qi,v&&(S=Math.cos(-v),I=Math.sin(-v),F=z*S+re*I,Y=V*S+ge*I,ee=K*S+Me*I,re=z*-I+re*S,ge=V*-I+ge*S,Me=K*-I+Me*S,Ne=Je*-I+Ne*S,z=F,V=Y,K=ee),v=yr(-B,Me),p=v*Qi,v&&(S=Math.cos(-v),I=Math.sin(-v),F=w*S-re*I,Y=L*S-ge*I,ee=B*S-Me*I,Ne=k*I+Ne*S,w=F,L=Y,B=ee),v=yr(L,w),f=v*Qi,v&&(S=Math.cos(v),I=Math.sin(v),F=w*S+L*I,Y=z*S+V*I,L=L*S-w*I,V=V*S-z*I,w=F,z=Y),g&&Math.abs(g)+Math.abs(f)>359.9&&(g=f=0,p=180-p),m=xt(Math.sqrt(w*w+L*L+B*B)),_=xt(Math.sqrt(V*V+K*K)),v=yr(z,V),y=Math.abs(v)>2e-4?v*Qi:0,b=Ne?1/(Ne<0?-Ne:Ne):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Yd(gn(e,mt)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=xt(m),i.scaleY=xt(_),i.rotation=xt(f)+o,i.rotationX=xt(g)+o,i.rotationY=xt(p)+o,i.skewX=y+o,i.skewY=T+o,i.transformPerspective=b+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[rn]=eo(c)),i.xOffset=i.yOffset=0,i.force3D=yn.force3D,i.renderTransform=i.svg?Hm:$d?Jd:Vm,i.uncache=0,i},eo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Po=function(e,n,i){var r=Wt(n);return xt(parseFloat(n)+parseFloat(zi(e,"x",i+"px",r)))+r},Vm=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Jd(e,n)},$i="0deg",fs="0px",Ki=") ",Jd=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,m=i.skewY,_=i.scaleX,f=i.scaleY,g=i.transformPerspective,p=i.force3D,y=i.target,T=i.zOrigin,b="",E=p==="auto"&&e&&e!==1||p===!0;if(T&&(d!==$i||u!==$i)){var A=parseFloat(u)*Xr,R=Math.sin(A),v=Math.cos(A),S;A=parseFloat(d)*Xr,S=Math.cos(A),a=Po(y,a,R*S*-T),o=Po(y,o,-Math.sin(A)*-T),l=Po(y,l,v*S*-T+T)}g!==fs&&(b+="perspective("+g+Ki),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(E||a!==fs||o!==fs||l!==fs)&&(b+=l!==fs||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ki),c!==$i&&(b+="rotate("+c+Ki),u!==$i&&(b+="rotateY("+u+Ki),d!==$i&&(b+="rotateX("+d+Ki),(h!==$i||m!==$i)&&(b+="skew("+h+", "+m+Ki),(_!==1||f!==1)&&(b+="scale("+_+", "+f+Ki),y.style[mt]=b||"translate(0, 0)"},Hm=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,m=i.target,_=i.xOrigin,f=i.yOrigin,g=i.xOffset,p=i.yOffset,y=i.forceCSS,T=parseFloat(a),b=parseFloat(o),E,A,R,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Xr,c*=Xr,E=Math.cos(l)*d,A=Math.sin(l)*d,R=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Xr,S=Math.tan(c-u),S=Math.sqrt(1+S*S),R*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,A*=S)),E=xt(E),A=xt(A),R=xt(R),v=xt(v)):(E=d,v=h,A=R=0),(T&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=zi(m,"x",a,"px"),b=zi(m,"y",o,"px")),(_||f||g||p)&&(T=xt(T+_-(_*E+f*R)+g),b=xt(b+f-(_*A+f*v)+p)),(r||s)&&(S=m.getBBox(),T=xt(T+r/100*S.width),b=xt(b+s/100*S.height)),S="matrix("+E+","+A+","+R+","+v+","+T+","+b+")",m.setAttribute("transform",S),y&&(m.style[mt]=S)},Gm=function(e,n,i,r,s){var a=360,o=Ut(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Qi:1)-r,c=r+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*hu)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*hu)%a-~~(l/a)*a)),e._pt=d=new nn(e._pt,n,i,r,l,Em),d.e=c,d.u="deg",e._props.push(i),d},vu=function(e,n){for(var i in n)e[i]=n[i];return e},Wm=function(e,n,i){var r=vu({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,d,h,m,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[mt]=n,o=Ws(i,1),Bi(i,mt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[mt],a[mt]=n,o=Ws(i,1),a[mt]=c);for(l in fi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Wt(c),_=Wt(u),d=m!==_?zi(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new nn(e._pt,o,l,d,h-d,Dl),e._pt.u=_||0,e._props.push(l));vu(o,r)};tn("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});Qa[e>1?"border"+t:t]=function(o,l,c,u,d){var h,m;if(arguments.length<4)return h=a.map(function(_){return ai(o,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(_,f){return m[_]=h[f]=h[f]||h[(f-1)/2|0]}),o.init(l,m,d)}});var Zd={name:"css",register:Nl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,d,h,m,_,f,g,p,y,T,b,E,A,R,v,S;xc||Nl(),this.styles=this.styles||Xd(e),v=this.styles.props,this.tween=i;for(f in n)if(f!=="autoRound"&&(u=n[f],!(dn[f]&&Id(f,n,i,r,e,s)))){if(m=typeof u,_=Qa[f],m==="function"&&(u=u.call(i,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=zs(u)),_)_(this,e,f,u,i)&&(R=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Ii.lastIndex=0,Ii.test(c)||(g=Wt(c),p=Wt(u),p?g!==p&&(c=zi(e,f,c,p)+p):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,f),a.push(f),v.push(f,0,o[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(i,r,e,s):l[f],Ut(c)&&~c.indexOf("random(")&&(c=zs(c)),Wt(c+"")||c==="auto"||(c+=yn.units[f]||Wt(ai(e,f))||""),(c+"").charAt(1)==="="&&(c=ai(e,f))):c=ai(e,f),h=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),f in qn&&(f==="autoAlpha"&&(h===1&&ai(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),Pi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=qn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),T=f in fi,T){if(this.styles.save(f),S=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=gn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=u,u=gn(e,"perspective"),I?e.style.perspective=I:Bi(e,"perspective")}d=parseFloat(u)}if(b||(E=e._gsap,E.renderTransform&&!n.parseTransform||Ws(e,n.parseTransform),A=n.smoothOrigin!==!1&&E.smooth,b=this._pt=new nn(this._pt,o,mt,0,1,E.renderTransform,E,0,-1),b.dep=1),f==="scale")this._pt=new nn(this._pt,E,"scaleY",E.scaleY,(y?Gr(E.scaleY,y+d):d)-E.scaleY||0,Dl),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(rn,0,o[rn]),u=Bm(u),E.svg?Ul(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Pi(this,E,"zOrigin",E.zOrigin,p),Pi(this,o,f,eo(c),eo(u)));continue}else if(f==="svgOrigin"){Ul(e,u,1,A,0,this);continue}else if(f in qd){Gm(this,E,f,h,y?Gr(h,y+u):u);continue}else if(f==="smoothOrigin"){Pi(this,E,"smooth",E.smooth,u);continue}else if(f==="force3D"){E[f]=u;continue}else if(f==="transform"){Wm(this,u,e);continue}}else f in o||(f=ts(f)||f);if(T||(d||d===0)&&(h||h===0)&&!Tm.test(u)&&f in o)g=(c+"").substr((h+"").length),d||(d=0),p=Wt(u)||(f in yn.units?yn.units[f]:g),g!==p&&(h=zi(e,f,c,p)),this._pt=new nn(this._pt,T?E:o,f,h,(y?Gr(h,y+d):d)-h,!T&&(p==="px"||f==="zIndex")&&n.autoRound!==!1?Am:Dl),this._pt.u=p||0,T&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=wm):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Cm);else if(f in o)Fm.call(this,e,f,c,y?y+u:u);else if(f in e)this.add(e,f,c||e[f],y?y+u:u,r,s);else if(f!=="parseTransform"){dc(f,u);continue}T||(f in o?v.push(f,0,o[f]):typeof e[f]=="function"?v.push(f,2,e[f]()):v.push(f,1,c||e[f])),a.push(f)}}R&&zd(this)},render:function(e,n){if(n.tween._time||!bc())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:ai,aliases:qn,getSetter:function(e,n,i){var r=qn[n];return r&&r.indexOf(",")<0&&(n=r),n in fi&&n!==rn&&(e._gsap.x||ai(e,"x"))?i&&uu===i?n==="scale"?km:Lm:(uu=i||{})&&(n==="scale"?Dm:Im):e.style&&!cc(e.style[n])?Rm:~n.indexOf("-")?Pm:Mc(e,n)},core:{_removeProperty:Bi,_getMatrix:Ec}};sn.utils.checkPrefix=ts;sn.core.getStyleSaver=Xd;(function(t,e,n,i){var r=tn(t+","+e+","+n,function(s){fi[s]=1});tn(e,function(s){yn.units[s]="deg",qd[s]=1}),qn[r[13]]=t+","+e,tn(i,function(s){var a=s.split(":");qn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){yn.units[t]="px"});sn.registerPlugin(Zd);var Ee=sn.registerPlugin(Zd)||sn,Vx=Ee.core.Tween,Ol=["spades","hearts","diamonds","clubs"],Qd=[2,3,4,5,6,7,8,9,10,11,12,13,14],Xm={spades:"♠",hearts:"♥",diamonds:"♦",clubs:"♣"},to={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K",14:"A"};function $m(t){return t===14?11:t>=11?10:t}var Km=0;function ef(t,e){return{id:`c${++Km}`,suit:t,rank:e,enhancement:"none",seal:"none",edition:"base",baseChips:$m(e)}}function ps(){const t=[];for(const e of Ol)for(const n of Qd)t.push(ef(e,n));return t}function jm(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Lo(t,e=Math.random){const n=t.slice();for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}var $n={"High Card":{chips:5,mult:1,chipsPerLvl:10,multPerLvl:1},Pair:{chips:10,mult:2,chipsPerLvl:15,multPerLvl:1},"Two Pair":{chips:20,mult:2,chipsPerLvl:20,multPerLvl:1},"Three of a Kind":{chips:30,mult:3,chipsPerLvl:20,multPerLvl:2},Straight:{chips:30,mult:4,chipsPerLvl:30,multPerLvl:3},Flush:{chips:35,mult:4,chipsPerLvl:15,multPerLvl:2},"Full House":{chips:40,mult:4,chipsPerLvl:25,multPerLvl:2},"Four of a Kind":{chips:60,mult:7,chipsPerLvl:30,multPerLvl:3},"Straight Flush":{chips:100,mult:8,chipsPerLvl:40,multPerLvl:4},"Five of a Kind":{chips:120,mult:12,chipsPerLvl:35,multPerLvl:3},"Flush House":{chips:140,mult:14,chipsPerLvl:40,multPerLvl:4},"Flush Five":{chips:160,mult:16,chipsPerLvl:50,multPerLvl:3}};function qm(t){const e=new Map;for(const n of t){if(n.enhancement==="stone")continue;const i=e.get(n.rank)??[];i.push(n),e.set(n.rank,i)}return[...e.entries()].map(([n,i])=>({rank:n,cards:i})).sort((n,i)=>i.cards.length-n.cards.length||i.rank-n.rank)}function Ym(t){const e=t.filter(n=>n.enhancement!=="stone");if(e.length<5)return null;for(const n of["spades","hearts","diamonds","clubs"]){const i=e.filter(r=>r.suit===n||r.enhancement==="wild");if(i.length>=5){const r=new Set(i.slice(0,5).map(s=>s.id));return t.filter(s=>r.has(s.id))}}return null}function Jm(t){const e=new Map;for(const i of t)i.enhancement!=="stone"&&(e.has(i.rank)||e.set(i.rank,i));if(e.size<5)return null;if(e.has(14)&&[2,3,4,5].every(i=>e.has(i)))return new Set([14,2,3,4,5]);const n=[...e.keys()].sort((i,r)=>i-r);for(let i=n.length-5;i>=0;i--){let r=!0;for(let s=1;s<5;s++)if(n[i+s]!==n[i]+s){r=!1;break}if(r)return new Set(n.slice(i,i+5))}return null}function Zm(t,e){return t.filter(n=>e.has(n.id)||n.enhancement==="stone")}function As(t){const e=t.filter(h=>h.enhancement!=="stone"),n=qm(e),i=n.map(h=>h.cards.length),r=Ym(e),s=Jm(e),a=h=>i.includes(h),o=h=>i.filter(m=>m===h).length,l=(...h)=>new Set(h.flatMap(m=>m.cards.map(_=>_.id))),c=new Set(e.map(h=>h.id));let u="High Card",d=new Set;if(a(5)&&r)u="Flush Five",d=l(n[0]);else if(a(3)&&a(2)&&r)u="Flush House",d=new Set(c);else if(a(5))u="Five of a Kind",d=l(n[0]);else if(s&&r){const h=new Set(r.map(_=>_.id)),m=new Set(e.filter(_=>s.has(_.rank)&&h.has(_.id)).map(_=>_.id));m.size>=5?(u="Straight Flush",d=m):(u="Flush",d=new Set(r.map(_=>_.id)))}else if(a(4))u="Four of a Kind",d=l(n[0]);else if(a(3)&&a(2))u="Full House",d=l(n.find(h=>h.cards.length===3),n.find(h=>h.cards.length===2));else if(r)u="Flush",d=new Set(r.map(h=>h.id));else if(s)u="Straight",d=new Set(e.filter(h=>s.has(h.rank)).map(h=>h.id));else if(a(3))u="Three of a Kind",d=l(n[0]);else if(o(2)>=2){const h=n.filter(m=>m.cards.length===2).slice(0,2);u="Two Pair",d=l(...h)}else if(a(2))u="Pair",d=l(n.find(h=>h.cards.length===2));else{u="High Card";const h=e.slice().sort((m,_)=>_.rank-m.rank)[0];h&&d.add(h.id)}return{type:u,scoringCards:Zm(t,d),allPlayed:t.slice()}}function Nt(t,e){const n=t.chips,i=t.mult;e.chipsDelta&&(t.chips+=e.chipsDelta),e.multDelta&&(t.mult+=e.multDelta),e.multMul&&e.multMul!==1&&(t.mult*=e.multMul),e.moneyDelta&&(t.money+=e.moneyDelta),t.steps.push({...e,chipsBefore:n,chipsAfter:t.chips,multBefore:i,multAfter:t.mult})}function Qm(t,e,n,i,r){const s=i?" (retrigger)":"";if(r){e.steps.push({source:`${Fl(t)} debuffed${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsBefore:e.chips,chipsAfter:e.chips,multBefore:e.mult,multAfter:e.mult});return}t.enhancement==="stone"?Nt(e,{source:`Stone +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):(Nt(e,{source:`${Fl(t)} +${t.baseChips} Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:t.baseChips}),t.enhancement==="bonus"?Nt(e,{source:`Bonus +30 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:30}):t.enhancement==="mult"?Nt(e,{source:`Mult Card +4 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:4}):t.enhancement==="glass"?Nt(e,{source:`Glass ×2 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:2}):t.enhancement==="lucky"&&(n()<1/5&&Nt(e,{source:`Lucky +20 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:20}),n()<1/15&&Nt(e,{source:`Lucky +$20${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:20}))),t.seal==="gold"&&Nt(e,{source:`Gold Seal +$3${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:3}),t.edition==="foil"?Nt(e,{source:`Foil +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):t.edition==="holographic"?Nt(e,{source:`Holographic +10 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:10}):t.edition==="polychrome"&&Nt(e,{source:`Polychrome ×1.5 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:1.5})}function eg(t,e,n){t.enhancement==="steel"&&Nt(e,{source:`Steel ×1.5 Mult${n?" (retrigger)":""}`,stage:"held_card",cardId:t.id,retrigger:n,multMul:1.5})}function $r(t){return t.rank>=11&&t.rank<=13}function ns(t){return t.sticker==="perishable"&&(t.perishableRounds??0)<=0}function li(t,e){return(e.bossDebuffSuits??[]).includes(t.suit)||!!(e.bossDebuffFace&&$r(t))}function Mr(t,e,n){return li(t,n)?!1:t.enhancement==="wild"||t.suit===e}function tf(t){return t.rank===14?11:t.rank>=11?10:t.rank}function tg(t,e){return t.scoringCards.findIndex(n=>$r(n)&&!li(n,e))}function ng(t,e,n,i){let r=0;for(const s of i.jokers??[]){if(ns(s))continue;const a=s.effect;a.kind==="retrigger-last-hand"&&i.isFinalHand||a.kind==="retrigger-ranks"&&a.ranks.includes(t.rank)||a.kind==="retrigger-face"&&$r(t)?r+=1:a.kind==="retrigger-first"&&e===0?r+=a.extra:(a.kind==="mythic-chronos"&&(e===0||e===n.scoringCards.length-1)||a.kind==="mythic-ace"&&t.rank===14||a.kind==="mythic-blacklotus"&&(t.suit==="spades"||t.suit==="clubs"||t.enhancement==="wild")||a.kind==="mythic-emperor"&&i.isFinalHand)&&(r+=1)}return r}function ig(t,e,n,i,r,s,a){if(li(t,i))return;const o=a?" (retrigger)":"";for(const l of i.jokers??[]){if(ns(l))continue;const c=l.effect,u=d=>Nt(r,{...d,stage:"played_card",jokerId:l.id,cardId:t.id,retrigger:a});c.kind==="score-suit-mult"&&Mr(t,c.suit,i)?u({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="score-suit-chips"&&Mr(t,c.suit,i)?u({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-suit-money"&&Mr(t,c.suit,i)?u({source:`${l.name} +$${c.amount}${o}`,moneyDelta:c.amount}):c.kind==="score-rank-mult"&&c.ranks.includes(t.rank)?u({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="score-rank-chips"&&c.ranks.includes(t.rank)?u({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-rank-bonus"&&c.ranks.includes(t.rank)?u({source:`${l.name} +${c.chips} Chips +${c.mult} Mult${o}`,chipsDelta:c.chips,multDelta:c.mult}):c.kind==="score-face-chips"&&$r(t)?u({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-face-mult"&&$r(t)?u({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="suit-chance-xmult"&&Mr(t,c.suit,i)?s()<c.chance&&u({source:`${l.name} ×${c.amount} Mult${o}`,multMul:c.amount}):c.kind==="first-face-xmult"&&n===e?u({source:`${l.name} ×${c.amount} Mult${o}`,multMul:c.amount}):c.kind==="mythic-royal"&&$r(t)?u({source:`${l.name} +40 Chips +8 Mult${o}`,chipsDelta:40,multDelta:8}):c.kind==="mythic-ace"&&t.rank===14?u({source:`${l.name} ×1.25 Mult${o}`,multMul:1.25}):c.kind==="mythic-dragon"&&t.seal==="gold"?u({source:`${l.name} +$5 ×1.5 Mult${o}`,moneyDelta:5,multMul:1.5}):c.kind==="mythic-kaleidoscope"&&t.edition!=="base"&&t.edition!=="negative"?u({source:`${l.name} ×1.35 Mult${o}`,multMul:1.35}):c.kind==="mythic-bloodmoon"&&(Mr(t,"hearts",i)&&u({source:`${l.name} Heart ×1.3${o}`,multMul:1.3}),Mr(t,"diamonds",i)&&u({source:`${l.name} Diamond +$2${o}`,moneyDelta:2}))}}function rg(t,e,n,i,r){if(!li(t,n)&&(eg(t,i,r),t.id===e))for(const s of n.jokers??[]){if(ns(s)||s.effect.kind!=="lowest-held-mult")continue;const a=tf(t)*s.effect.multiplier;Nt(i,{source:`${s.name} +${a} Mult${r?" (retrigger)":""}`,stage:"held_card",cardId:t.id,jokerId:s.id,retrigger:r,multDelta:a})}}function sg(t,e,n,i,r){if(ns(t))return;const s=t.effect,a=n.heldCards??[],o=l=>Nt(i,{...l,stage:"joker",jokerId:t.id});if(s.kind==="chips")o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="mult")o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="xmult")o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="random-mult"){const l=s.min+Math.floor(r()*(s.max-s.min+1));t.counter=l,l>0?o({source:`${t.name} +${l} Mult`,multDelta:l}):o({source:`${t.name} +0 Mult`})}else if(s.kind==="pair-mult")og(e.type)&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="flush-mult-mul")e.type.includes("Flush")&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="first-hand-chips")n.handsLeftBeforePlay===n.handsPerRound&&o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-mult")s.handTypes.includes(e.type)&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="hand-chips")s.handTypes.includes(e.type)&&o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-xmult")s.handTypes.includes(e.type)&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="few-cards-mult")e.allPlayed.length<=s.maxCards&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="discard-chips"){const l=Math.max(0,n.discardsLeft??0)*s.amountPerDiscard;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="zero-discard-mult")(n.discardsLeft??0)===0&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="joker-count-mult"){const l=Math.max(0,n.jokerCount??0)*s.amountPerJoker;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="held-black-xmult")a.every(l=>l.enhancement==="stone"?!1:l.enhancement==="wild"&&!li(l,n)?!0:l.suit==="spades"||l.suit==="clubs")&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="decay-chips"){const l=Math.max(0,t.counter??s.start);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="straight-scale-chips"){const l=Math.max(0,t.counter??s.start??0);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="bus-scale-mult"||s.kind==="green-scale-mult"){const l=Math.max(0,t.counter??0);l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="deck-remaining-chips"){const l=Math.max(0,n.deckRemaining??0)*s.amountPerCard;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="money-chips"){const l=Math.max(0,Math.floor(n.money??0))*s.amountPerDollar;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="money-mult"){const l=Math.floor(Math.max(0,n.money??0)/s.dollarsPerStep)*s.amountPerStep;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="repeat-hand-xmult")n.handAlreadyPlayedThisRound&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="last-hand-xmult")n.isFinalHand&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="loyalty-xmult")(t.counter??0)===s.every-1&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="hand-count-mult"){const l=Math.max(0,n.handPlayCount??0)*s.amountPerPlay;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="castle-scale-chips"){const l=Math.max(0,t.counter??0);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="mythic-prism"){const l=1+new Set(e.scoringCards.filter(c=>!li(c,n)).map(c=>c.suit)).size*.75;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-phoenix"){const l=1+Math.max(0,t.counter??0)*.25;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-leviathan"){const l=Math.max(0,n.fullDeckSize??0)*8;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="mythic-eclipse"){const l=a.filter(d=>d.enhancement!=="stone"),c=l.every(d=>d.enhancement==="wild"||d.suit==="hearts"||d.suit==="diamonds"),u=l.every(d=>d.enhancement==="wild"||d.suit==="spades"||d.suit==="clubs");!a.some(d=>d.enhancement==="stone")&&(c||u)&&o({source:`${t.name} ×4 Mult`,multMul:4})}else if(s.kind==="mythic-echo"){const l=1+Math.max(0,n.priorSameHandCount??0)*.5;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-quantum"){const l=Math.floor(r()*4);t.counter=l,o(l===0?{source:`${t.name} +250 Chips`,chipsDelta:250}:l===1?{source:`${t.name} +35 Mult`,multDelta:35}:l===2?{source:`${t.name} ×3 Mult`,multMul:3}:{source:`${t.name} +$12`,moneyDelta:12})}else if(s.kind==="mythic-void"){const l=1+Math.max(0,(n.jokerCapacity??n.jokerCount??0)-(n.jokerCount??0))*.75;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-oracle"){const l=e.scoringCards.filter(c=>!li(c,n)&&c.enhancement!=="stone").reduce((c,u)=>c+u.rank,0);l>0&&l%13===0&&o({source:`${t.name} ×5 Mult`,multMul:5})}else if(s.kind==="mythic-forge"){const l=1+Math.max(0,n.handLevelExtra??0)*.08;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-grail")r()<1/6?o({source:`${t.name} JACKPOT ×6 Mult`,multMul:6}):o({source:`${t.name} +6 Mult`,multDelta:6});else if(s.kind==="mythic-staircase"){const l=1+Math.max(0,n.distinctHandTypesThisRound??0)*.5;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-emperor")n.isFinalHand&&o({source:`${t.name} ×5 Mult`,multMul:5});else if(s.kind==="mythic-worldtree"){const l=a.filter(u=>u.enhancement!=="none"||u.seal!=="none"||u.edition!=="base"&&u.edition!=="negative").length,c=Math.pow(1.25,l);c>1&&o({source:`${t.name} ×${c.toFixed(2)} Mult`,multMul:c})}}function ag(t,e,n={}){const i=$n[t.type],r=Math.max(1,e.level),s=i.chips+i.chipsPerLvl*(r-1),a=i.mult+i.multPerLvl*(r-1),o=n.bossHalveBase?Math.max(1,Math.floor(s/2)):s,l=n.bossHalveBase?Math.max(1,a/2):a,c=n.rng??Math.random,u={chips:o,mult:l,money:0,steps:[{source:`${t.type} (lvl ${r})`,stage:"base",chipsDelta:o,multDelta:l,chipsBefore:0,chipsAfter:o,multBefore:0,multAfter:l}]},d=tg(t,n);for(let p=0;p<t.scoringCards.length;p++){const y=t.scoringCards[p],T=1+(y.seal==="red"?1:0)+ng(y,p,t,n);for(let b=0;b<T;b++){const E=b>0,A=li(y,n);Qm(y,u,c,E,A),A||ig(y,d,p,n,u,c,E)}}const h=n.heldCards??[];let m=null;const _=h.filter(p=>p.enhancement!=="stone").map((p,y)=>({card:p,index:y,value:tf(p)}));if(_.length>0){const p=Math.min(..._.map(T=>T.value)),y=_.filter(T=>T.value===p);m=y[y.length-1].card.id}const f=(n.jokers??[]).filter(p=>!ns(p)&&p.effect.kind==="retrigger-held").length;for(const p of h){if(!(p.enhancement==="steel"||p.id===m))continue;const y=1+(p.seal==="red"?1:0)+f;for(let T=0;T<y;T++)rg(p,m,n,u,T>0)}for(const p of n.jokers??[]){if(ns(p))continue;const y=p.edition??"base";y==="foil"?Nt(u,{source:`${p.name} Foil +50 Chips`,stage:"joker",chipsDelta:50,jokerId:p.id}):y==="holographic"&&Nt(u,{source:`${p.name} Holographic +10 Mult`,stage:"joker",multDelta:10,jokerId:p.id}),p.effect.kind==="score-suit-mult"||p.effect.kind==="score-suit-chips"||p.effect.kind==="score-suit-money"||p.effect.kind==="score-rank-mult"||p.effect.kind==="score-rank-chips"||p.effect.kind==="score-rank-bonus"||p.effect.kind==="score-face-chips"||p.effect.kind==="score-face-mult"||p.effect.kind==="lowest-held-mult"||p.effect.kind==="retrigger-last-hand"||p.effect.kind==="retrigger-ranks"||p.effect.kind==="retrigger-held"||p.effect.kind==="retrigger-face"||p.effect.kind==="retrigger-first"||p.effect.kind==="suit-chance-xmult"||p.effect.kind==="first-face-xmult"||p.effect.kind==="mythic-chronos"||p.effect.kind==="mythic-royal"||p.effect.kind==="mythic-ace"||p.effect.kind==="mythic-dragon"||p.effect.kind==="mythic-kaleidoscope"||p.effect.kind==="mythic-bloodmoon"||p.effect.kind==="mythic-blacklotus"||sg(p,t,n,u,c),y==="polychrome"&&Nt(u,{source:`${p.name} Polychrome ×1.5 Mult`,stage:"joker",multMul:1.5,jokerId:p.id})}const g=[];for(const p of t.scoringCards)p.enhancement!=="glass"||li(p,n)||c()<1/4&&(g.push(p.id),u.steps.push({source:`${Fl(p)} Glass shattered`,stage:"destruction",cardId:p.id,chipsBefore:u.chips,chipsAfter:u.chips,multBefore:u.mult,multAfter:u.mult}));return{hand:t,baseChips:o,baseMult:l,finalChips:u.chips,finalMult:u.mult,total:Math.floor(u.chips*u.mult),moneyDelta:u.money,destroyedCardIds:g,steps:u.steps}}function og(t){return t==="Pair"||t==="Two Pair"||t==="Three of a Kind"||t==="Full House"||t==="Four of a Kind"||t==="Five of a Kind"||t==="Flush House"||t==="Flush Five"}function Fl(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":`${t.rank}`}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}var ko=[{key:"pluto",name:"Pluto",description:"Level up High Card.",type:"planet",price:3,effect:{kind:"planet",handType:"High Card"}},{key:"mercury",name:"Mercury",description:"Level up Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Pair"}},{key:"uranus",name:"Uranus",description:"Level up Two Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Two Pair"}},{key:"venus",name:"Venus",description:"Level up Three of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Three of a Kind"}},{key:"saturn",name:"Saturn",description:"Level up Straight.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight"}},{key:"jupiter",name:"Jupiter",description:"Level up Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush"}},{key:"earth",name:"Earth",description:"Level up Full House.",type:"planet",price:3,effect:{kind:"planet",handType:"Full House"}},{key:"mars",name:"Mars",description:"Level up Four of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Four of a Kind"}},{key:"neptune",name:"Neptune",description:"Level up Straight Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight Flush"}},{key:"planet-x",name:"Planet X",description:"Level up Five of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Five of a Kind"}},{key:"ceres",name:"Ceres",description:"Level up Flush House.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush House"}},{key:"eris",name:"Eris",description:"Level up Flush Five.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush Five"}}],ua=[{key:"the-magician",name:"The Magician",description:"Enhance up to 2 selected cards into Lucky Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"lucky",min:1,max:2}},{key:"the-empress",name:"The Empress",description:"Enhance up to 2 selected cards into Mult Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"mult",min:1,max:2}},{key:"the-hierophant",name:"The Hierophant",description:"Enhance up to 2 selected cards into Bonus Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"bonus",min:1,max:2}},{key:"the-chariot",name:"The Chariot",description:"Enhance 1 selected card into a Steel Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"steel",min:1,max:1}},{key:"justice",name:"Justice",description:"Enhance 1 selected card into a Glass Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"glass",min:1,max:1}},{key:"the-devil",name:"The Devil",description:"Enhance 1 selected card into a Gold Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"gold",min:1,max:1}},{key:"the-tower",name:"The Tower",description:"Enhance 1 selected card into a Stone Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"stone",min:1,max:1}},{key:"the-star",name:"The Star",description:"Convert up to 3 selected cards to Diamonds.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"diamonds",min:1,max:3}},{key:"the-moon",name:"The Moon",description:"Convert up to 3 selected cards to Clubs.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"clubs",min:1,max:3}},{key:"the-sun",name:"The Sun",description:"Convert up to 3 selected cards to Hearts.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"hearts",min:1,max:3}},{key:"the-world",name:"The World",description:"Convert up to 3 selected cards to Spades.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"spades",min:1,max:3}},{key:"death",name:"Death",description:"Select 2 cards. The left card becomes a copy of the right card.",type:"tarot",price:3,effect:{kind:"copy-right-to-left",min:2,max:2}},{key:"the-hanged-man",name:"The Hanged Man",description:"Destroy up to 2 selected cards.",type:"tarot",price:3,effect:{kind:"destroy-selected",min:1,max:2}},{key:"the-hermit",name:"The Hermit",description:"Doubles money, up to a maximum gain of $20.",type:"tarot",price:3,effect:{kind:"money",mode:"double-up-to-20"}}],Do=[{key:"aura",name:"Aura",description:"Add Foil, Holographic or Polychrome to 1 selected card.",type:"spectral",price:4,effect:{kind:"edition-selected",edition:"random",min:1,max:1}},{key:"talisman",name:"Talisman",description:"Add a Gold Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"gold",min:1,max:1}},{key:"deja-vu",name:"Deja Vu",description:"Add a Red Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"red",min:1,max:1}},{key:"trance",name:"Trance",description:"Add a Blue Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"blue",min:1,max:1}},{key:"medium",name:"Medium",description:"Add a Purple Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"purple",min:1,max:1}},{key:"cryptid",name:"Cryptid",description:"Create 2 copies of 1 selected card in your deck.",type:"spectral",price:4,effect:{kind:"duplicate-selected",copies:2,min:1,max:1}},{key:"immolate",name:"Immolate",description:"Destroy up to 5 selected cards and gain $20.",type:"spectral",price:4,effect:{kind:"immolate-selected",min:1,max:5,money:20}}],lg=["arcana","celestial","standard","buffoon","spectral"];function yu(t,e){const n=t==="buffoon";return e==="normal"?{choices:n?2:3,picks:1,price:4}:e==="jumbo"?{choices:n?4:5,picks:1,price:6}:{choices:n?4:5,picks:2,price:8}}function cg(t,e){return(e==="normal"?"":e==="jumbo"?"Jumbo ":"Mega ")+(t==="arcana"?"Arcana Pack":t==="celestial"?"Celestial Pack":t==="standard"?"Standard Pack":t==="buffoon"?"Buffoon Pack":"Spectral Pack")}function Mu(t){if(!("min"in t&&"max"in t))return null;const e=t.kind==="copy-right-to-left"?"Select exactly 2 cards. Left becomes a copy of right.":t.kind==="destroy-selected"?"Select cards to destroy.":t.kind==="immolate-selected"?"Select cards to destroy for $20.":t.kind==="convert-suit"?"Select cards to change suit.":t.kind==="edition-selected"?"Select a card to receive an Edition.":t.kind==="seal-selected"?"Select a card to receive a Seal.":t.kind==="duplicate-selected"?"Select a card to copy.":"Select card(s) to enhance.";return{min:t.min,max:t.max,instruction:e}}var Io={grabber:{key:"grabber",name:"Grabber",description:"+1 hand every round.",price:10},wasteful:{key:"wasteful",name:"Wasteful",description:"+1 discard every round.",price:10},"crystal-ball":{key:"crystal-ball",name:"Crystal Ball",description:"+1 consumable slot.",price:10},"reroll-surplus":{key:"reroll-surplus",name:"Reroll Surplus",description:"Rerolls cost $2 less.",price:10},"clearance-sale":{key:"clearance-sale",name:"Clearance Sale",description:"Shop cards and Booster Packs are 25% off.",price:10}},Ns={red:{key:"red",name:"Red Deck",description:"+1 Discard every round."},blue:{key:"blue",name:"Blue Deck",description:"+1 Hand every round."},yellow:{key:"yellow",name:"Yellow Deck",description:"Start with $10 extra."},green:{key:"green",name:"Green Deck",description:"No interest; cashout pays $2 per unused Hand and $1 per unused Discard."},black:{key:"black",name:"Black Deck",description:"+1 Joker slot, -1 Hand every round."}},ot={white:{key:"white",name:"White Stake",description:"Base difficulty.",order:0},red:{key:"red",name:"Red Stake",description:"Small Blind gives no base reward.",order:1},green:{key:"green",name:"Green Stake",description:"Score requirements scale faster.",order:2},black:{key:"black",name:"Black Stake",description:"Generated Jokers may be Eternal.",order:3},blue:{key:"blue",name:"Blue Stake",description:"-1 Discard every round.",order:4},purple:{key:"purple",name:"Purple Stake",description:"Score requirements scale even faster.",order:5},orange:{key:"orange",name:"Orange Stake",description:"Generated Jokers may be Perishable.",order:6},gold:{key:"gold",name:"Gold Stake",description:"Generated Jokers may also be Rental.",order:7}},Bl={uncommon:{key:"uncommon",name:"Uncommon Tag",description:"Create a free Uncommon Joker if space exists."},rare:{key:"rare",name:"Rare Tag",description:"Create a free Rare Joker if space exists."},negative:{key:"negative",name:"Negative Tag",description:"Create a free Negative Joker."},foil:{key:"foil",name:"Foil Tag",description:"Create a free Foil Joker."},holographic:{key:"holographic",name:"Holographic Tag",description:"Create a free Holographic Joker."},polychrome:{key:"polychrome",name:"Polychrome Tag",description:"Create a free Polychrome Joker."},investment:{key:"investment",name:"Investment Tag",description:"Gain $25 after defeating the next Boss Blind."},voucher:{key:"voucher",name:"Voucher Tag",description:"Redeem a random unowned Voucher."},boss:{key:"boss",name:"Boss Tag",description:"Reroll the Boss Blind for this Ante."},standard:{key:"standard",name:"Standard Tag",description:"Add 2 random playing cards to the deck."},charm:{key:"charm",name:"Charm Tag",description:"Create a Tarot if room exists."},meteor:{key:"meteor",name:"Meteor Tag",description:"Create a Planet if room exists."},buffoon:{key:"buffoon",name:"Buffoon Tag",description:"Create a random unlocked Joker if room exists."},handy:{key:"handy",name:"Handy Tag",description:"Gain $1 for every Hand played this run."},garbage:{key:"garbage",name:"Garbage Tag",description:"Gain $1 for every Discard used this run."},ethereal:{key:"ethereal",name:"Ethereal Tag",description:"Create a Spectral if room exists."},coupon:{key:"coupon",name:"Coupon Tag",description:"Initial Shop cards and Booster Packs in the next Shop are free."},double:{key:"double",name:"Double Tag",description:"Copy the next non-Double Tag."},juggle:{key:"juggle",name:"Juggle Tag",description:"+3 Hand Size for the next round."},d6:{key:"d6",name:"D6 Tag",description:"Next Shop starts with a free reroll."},"top-up":{key:"top-up",name:"Top-up Tag",description:"Create up to 2 Common Jokers if space exists."},speed:{key:"speed",name:"Speed Tag",description:"Gain $5 for every Blind skipped this run."},orbital:{key:"orbital",name:"Orbital Tag",description:"Upgrade the most-played Poker Hand by 3 levels."},economy:{key:"economy",name:"Economy Tag",description:"Double current money, adding at most $40."}},Xs={hook:{key:"hook",name:"The Hook",description:"Discards 2 random cards after each played hand.",targetMult:2},ox:{key:"ox",name:"The Ox",description:"Playing your most-played Poker Hand sets money to $0.",targetMult:2},house:{key:"house",name:"The House",description:"First hand is concealed.",targetMult:2},wall:{key:"wall",name:"The Wall",description:"Very large Blind.",targetMult:4},wheel:{key:"wheel",name:"The Wheel",description:"Some cards are concealed when drawn.",targetMult:2},arm:{key:"arm",name:"The Arm",description:"Playing a hand lowers that Poker Hand by 1 level.",targetMult:2},club:{key:"club",name:"The Club",description:"Club cards are debuffed.",targetMult:2},fish:{key:"fish",name:"The Fish",description:"Cards drawn after a played hand are concealed.",targetMult:2},psychic:{key:"psychic",name:"The Psychic",description:"You must play exactly 5 cards.",targetMult:2},goad:{key:"goad",name:"The Goad",description:"Spade cards are debuffed.",targetMult:2},water:{key:"water",name:"The Water",description:"Start this Blind with 0 Discards.",targetMult:2},window:{key:"window",name:"The Window",description:"Diamond cards are debuffed.",targetMult:2},manacle:{key:"manacle",name:"The Manacle",description:"-1 Hand Size for this Blind.",targetMult:2},eye:{key:"eye",name:"The Eye",description:"No Poker Hand may be played more than once this Blind.",targetMult:2},mouth:{key:"mouth",name:"The Mouth",description:"After the first hand, only that Poker Hand may be played.",targetMult:2},plant:{key:"plant",name:"The Plant",description:"Face cards are debuffed.",targetMult:2},serpent:{key:"serpent",name:"The Serpent",description:"After Play or Discard, draw exactly 3 cards.",targetMult:2},pillar:{key:"pillar",name:"The Pillar",description:"Cards played earlier this Ante are debuffed.",targetMult:2},needle:{key:"needle",name:"The Needle",description:"Play only 1 Hand.",targetMult:1},head:{key:"head",name:"The Head",description:"Heart cards are debuffed.",targetMult:2},tooth:{key:"tooth",name:"The Tooth",description:"Lose $1 for every card played.",targetMult:2},flint:{key:"flint",name:"The Flint",description:"Base Chips and Mult are halved.",targetMult:2},mark:{key:"mark",name:"The Mark",description:"Face cards are concealed.",targetMult:2},"amber-acorn":{key:"amber-acorn",name:"Amber Acorn",description:"Joker order is shuffled at Blind start.",targetMult:2},"verdant-leaf":{key:"verdant-leaf",name:"Verdant Leaf",description:"All cards are debuffed until a Joker is sold.",targetMult:2},"violet-vessel":{key:"violet-vessel",name:"Violet Vessel",description:"Extremely large Blind.",targetMult:6},"crimson-heart":{key:"crimson-heart",name:"Crimson Heart",description:"One random Joker is debuffed each hand.",targetMult:2},"cerulean-bell":{key:"cerulean-bell",name:"Cerulean Bell",description:"One random card is forced selected.",targetMult:2}},zl=["amber-acorn","verdant-leaf","violet-vessel","crimson-heart","cerulean-bell"],Su=Object.keys(Xs).filter(t=>!zl.includes(t)),ug=[300,800,2e3,5e3,11e3,2e4,35e3,5e4],hg=[300,900,2600,8e3,2e4,36e3,6e4,1e5],dg=[300,1e3,3200,9e3,25e3,6e4,11e4,2e5],xu=Object.keys(Bl),fg={seed:Math.floor(Math.random()*1e9),handSize:8,handsPerRound:4,discardsPerRound:3,startingMoney:4};var pg=5,lr=[{key:"joker",name:"Joker",description:"+4 Mult.",rarity:"common",price:2,effect:{kind:"mult",amount:4}},{key:"greedy-joker",name:"Greedy Joker",description:"Each scoring Diamond gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"diamonds",amount:3}},{key:"lusty-joker",name:"Lusty Joker",description:"Each scoring Heart gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"hearts",amount:3}},{key:"wrathful-joker",name:"Wrathful Joker",description:"Each scoring Spade gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"spades",amount:3}},{key:"gluttonous-joker",name:"Gluttonous Joker",description:"Each scoring Club gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"clubs",amount:3}},{key:"jolly-joker",name:"Jolly Joker",description:"+8 Mult when the hand contains a Pair.",rarity:"common",price:3,effect:{kind:"pair-mult",amount:8}},{key:"crazy-joker",name:"Crazy Joker",description:"+12 Mult on Straight hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Straight","Straight Flush"],amount:12}},{key:"droll-joker",name:"Droll Joker",description:"+10 Mult on Flush hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:10}},{key:"sly-joker",name:"Sly Joker",description:"+50 Chips on Pair-family hands.",rarity:"common",price:3,effect:{kind:"hand-chips",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:50}},{key:"wily-joker",name:"Wily Joker",description:"+100 Chips on Three-of-a-Kind-family hands.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:100}},{key:"clever-joker",name:"Clever Joker",description:"+80 Chips on Two Pair or Full House.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Two Pair","Full House","Flush House"],amount:80}},{key:"devious-joker",name:"Devious Joker",description:"+100 Chips on Straight hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Straight","Straight Flush"],amount:100}},{key:"crafty-joker",name:"Crafty Joker",description:"+80 Chips on Flush hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:80}},{key:"half-joker",name:"Half Joker",description:"+20 Mult if 3 or fewer cards are played.",rarity:"common",price:5,effect:{kind:"few-cards-mult",maxCards:3,amount:20}},{key:"banner",name:"Banner",description:"+30 Chips for each remaining Discard.",rarity:"common",price:5,effect:{kind:"discard-chips",amountPerDiscard:30}},{key:"mystic-summit",name:"Mystic Summit",description:"+15 Mult when no Discards remain.",rarity:"common",price:5,effect:{kind:"zero-discard-mult",amount:15}},{key:"raised-fist",name:"Raised Fist",description:"Adds twice the rank of the lowest held card to Mult.",rarity:"common",price:5,effect:{kind:"lowest-held-mult",multiplier:2}},{key:"misprint",name:"Misprint",description:"+0–23 Mult, randomly rolled each played hand.",rarity:"common",price:4,effect:{kind:"random-mult",min:0,max:23}},{key:"even-steven",name:"Even Steven",description:"Scoring even ranks give +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-mult",ranks:[2,4,6,8,10],amount:4}},{key:"odd-todd",name:"Odd Todd",description:"Scoring odd ranks and Aces give +31 Chips.",rarity:"common",price:4,effect:{kind:"score-rank-chips",ranks:[3,5,7,9,14],amount:31}},{key:"scholar",name:"Scholar",description:"Scoring Aces give +20 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[14],chips:20,mult:4}},{key:"scary-face",name:"Scary Face",description:"Scoring face cards give +30 Chips.",rarity:"common",price:4,effect:{kind:"score-face-chips",amount:30}},{key:"smiley-face",name:"Smiley Face",description:"Scoring face cards give +5 Mult.",rarity:"common",price:4,effect:{kind:"score-face-mult",amount:5}},{key:"fibonacci",name:"Fibonacci",description:"A, 2, 3, 5 and 8 give +8 Mult when scored.",rarity:"uncommon",price:8,effect:{kind:"score-rank-mult",ranks:[14,2,3,5,8],amount:8}},{key:"abstract-joker",name:"Abstract Joker",description:"+3 Mult for every Joker you own.",rarity:"common",price:4,effect:{kind:"joker-count-mult",amountPerJoker:3}},{key:"blackboard",name:"Blackboard",description:"x3 Mult if all held cards are Spades or Clubs.",rarity:"uncommon",price:6,effect:{kind:"held-black-xmult",amount:3}},{key:"ice-cream",name:"Ice Cream",description:"Starts at +100 Chips and loses 5 Chips after each hand.",rarity:"common",price:5,effect:{kind:"decay-chips",start:100,decay:5}},{key:"runner",name:"Runner",description:"Gains +15 Chips whenever you play a Straight.",rarity:"common",price:5,effect:{kind:"straight-scale-chips",gain:15,start:0}},{key:"ride-the-bus",name:"Ride the Bus",description:"Gains +1 Mult after a hand with no scoring face card; resets otherwise.",rarity:"common",price:6,effect:{kind:"bus-scale-mult",gain:1}},{key:"green-joker",name:"Green Joker",description:"Gains +1 Mult per hand and loses 1 per discard.",rarity:"common",price:4,effect:{kind:"green-scale-mult",handGain:1,discardLoss:1}},{key:"blue-joker",name:"Blue Joker",description:"+2 Chips per card remaining in the draw pile.",rarity:"common",price:5,effect:{kind:"deck-remaining-chips",amountPerCard:2}},{key:"dusk",name:"Dusk",description:"Retrigger all scoring cards on the final Hand of a Blind.",rarity:"uncommon",price:5,effect:{kind:"retrigger-last-hand"}},{key:"hack",name:"Hack",description:"Retrigger scoring 2, 3, 4 and 5 cards.",rarity:"uncommon",price:6,effect:{kind:"retrigger-ranks",ranks:[2,3,4,5]}},{key:"mime",name:"Mime",description:"Retrigger held-card abilities once.",rarity:"uncommon",price:5,effect:{kind:"retrigger-held"}},{key:"sock-and-buskin",name:"Sock and Buskin",description:"Retrigger scoring face cards once.",rarity:"uncommon",price:6,effect:{kind:"retrigger-face"}},{key:"hanging-chad",name:"Hanging Chad",description:"Retrigger the first scoring card 2 extra times.",rarity:"common",price:4,effect:{kind:"retrigger-first",extra:2}},{key:"bloodstone",name:"Bloodstone",description:"Each scoring Heart has a 1 in 2 chance to give x1.5 Mult.",rarity:"uncommon",price:7,effect:{kind:"suit-chance-xmult",suit:"hearts",chance:.5,amount:1.5}},{key:"arrowhead",name:"Arrowhead",description:"Each scoring Spade gives +50 Chips.",rarity:"uncommon",price:7,effect:{kind:"score-suit-chips",suit:"spades",amount:50}},{key:"onyx-agate",name:"Onyx Agate",description:"Each scoring Club gives +7 Mult.",rarity:"uncommon",price:7,effect:{kind:"score-suit-mult",suit:"clubs",amount:7}},{key:"rough-gem",name:"Rough Gem",description:"Each scoring Diamond gives $1.",rarity:"uncommon",price:7,effect:{kind:"score-suit-money",suit:"diamonds",amount:1}},{key:"photograph",name:"Photograph",description:"The first scoring face card gives x2 Mult.",rarity:"common",price:5,effect:{kind:"first-face-xmult",amount:2}},{key:"walkie-talkie",name:"Walkie Talkie",description:"Scoring 10s and 4s give +10 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[10,4],chips:10,mult:4}},{key:"castle",name:"Castle",description:"Gains +3 Chips for each discarded card of its target suit.",rarity:"uncommon",price:6,effect:{kind:"castle-scale-chips",gain:3}},{key:"bull",name:"Bull",description:"+2 Chips for every $1 you have.",rarity:"uncommon",price:6,effect:{kind:"money-chips",amountPerDollar:2}},{key:"bootstraps",name:"Bootstraps",description:"+2 Mult for every $5 you have.",rarity:"uncommon",price:7,effect:{kind:"money-mult",dollarsPerStep:5,amountPerStep:2}},{key:"card-sharp",name:"Card Sharp",description:"x3 Mult if this Poker Hand was already played this Blind.",rarity:"uncommon",price:6,effect:{kind:"repeat-hand-xmult",amount:3}},{key:"acrobat",name:"Acrobat",description:"x3 Mult on the final Hand of the Blind.",rarity:"uncommon",price:6,effect:{kind:"last-hand-xmult",amount:3}},{key:"loyalty-card",name:"Loyalty Card",description:"Every 6th played hand gives x4 Mult.",rarity:"uncommon",price:5,effect:{kind:"loyalty-xmult",every:6,amount:4}},{key:"the-duo",name:"The Duo",description:"x2 Mult if the hand contains a Pair.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:2}},{key:"the-trio",name:"The Trio",description:"x3 Mult if the hand contains Three of a Kind.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:3}},{key:"astral-crown",name:"Astral Crown",description:"X1 + X0.75 Mult for each distinct suit among scoring cards.",rarity:"mythic",price:12,effect:{kind:"mythic-prism"}},{key:"chronomancer",name:"Chronomancer",description:"Retrigger the first and last scoring card once.",rarity:"mythic",price:13,effect:{kind:"mythic-chronos"}},{key:"phoenix-ashes",name:"Phoenix of Ashes",description:"Starts at X1 Mult. Permanently gains X0.25 for each Glass card shattered.",rarity:"mythic",price:14,effect:{kind:"mythic-phoenix"}},{key:"leviathan",name:"Leviathan",description:"+8 Chips for every card in your full deck.",rarity:"mythic",price:12,effect:{kind:"mythic-leviathan"}},{key:"total-eclipse",name:"Total Eclipse",description:"X4 Mult if all cards held in hand are the same color, or none remain.",rarity:"mythic",price:13,effect:{kind:"mythic-eclipse"}},{key:"echo-of-ages",name:"Echo of Ages",description:"Gains X0.5 Mult for each earlier play of this Poker Hand in the current Blind.",rarity:"mythic",price:12,effect:{kind:"mythic-echo"}},{key:"royal-sovereign",name:"Royal Sovereign",description:"Each scoring face card gives +40 Chips and +8 Mult.",rarity:"mythic",price:12,effect:{kind:"mythic-royal"}},{key:"ace-ascendant",name:"Ace Ascendant",description:"Retrigger scoring Aces once; each scoring Ace activation gives X1.25 Mult.",rarity:"mythic",price:13,effect:{kind:"mythic-ace"}},{key:"quantum-jester",name:"Quantum Jester",description:"Each hand becomes one fate: +250 Chips, +35 Mult, X3 Mult, or +$12.",rarity:"mythic",price:12,effect:{kind:"mythic-quantum"}},{key:"golden-dragon",name:"Golden Dragon",description:"Each scoring Gold Seal earns +$5 and gives X1.5 Mult.",rarity:"mythic",price:14,effect:{kind:"mythic-dragon"}},{key:"void-monarch",name:"Void Monarch",description:"X1 + X0.75 Mult for each empty Joker slot.",rarity:"mythic",price:13,effect:{kind:"mythic-void"}},{key:"kaleidoscope",name:"Kaleidoscope",description:"Each scoring Foil, Holographic, or Polychrome card gives X1.35 Mult.",rarity:"mythic",price:13,effect:{kind:"mythic-kaleidoscope"}},{key:"oracle-xiii",name:"Oracle XIII",description:"X5 Mult if the sum of scoring ranks is divisible by 13.",rarity:"mythic",price:14,effect:{kind:"mythic-oracle"}},{key:"celestial-forge",name:"Celestial Forge",description:"X1 Mult plus X0.08 for every Poker Hand level gained above level 1.",rarity:"mythic",price:13,effect:{kind:"mythic-forge"}},{key:"blood-moon",name:"Blood Moon",description:"Scoring Hearts give X1.3 Mult; scoring Diamonds earn +$2.",rarity:"mythic",price:13,effect:{kind:"mythic-bloodmoon"}},{key:"black-lotus",name:"Black Lotus",description:"Retrigger scoring Spades and Clubs once.",rarity:"mythic",price:13,effect:{kind:"mythic-blacklotus"}},{key:"gamblers-grail",name:"Gambler's Grail",description:"1 in 6 chance for X6 Mult; otherwise +6 Mult.",rarity:"mythic",price:12,effect:{kind:"mythic-grail"}},{key:"infinite-staircase",name:"Infinite Staircase",description:"X1 + X0.5 Mult for each different Poker Hand already played this Blind.",rarity:"mythic",price:12,effect:{kind:"mythic-staircase"}},{key:"last-emperor",name:"Last Emperor",description:"On the final Hand: retrigger every scoring card once and give X5 Mult.",rarity:"mythic",price:15,effect:{kind:"mythic-emperor"}},{key:"world-tree",name:"World Tree",description:"X1.25 Mult for every modified card held in hand.",rarity:"mythic",price:14,effect:{kind:"mythic-worldtree"}}],Hx=lr.filter(t=>t.rarity!=="mythic").length,Gx=lr.filter(t=>t.rarity==="mythic").length,Wx=lr.length,Qs=lr.map(t=>({key:t.key,name:t.name,description:t.description,rarity:t.rarity,price:t.price})),mg=["bonus","mult","wild","glass","steel","gold","lucky"],gg=["foil","holographic","polychrome"];function No(t){return t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function Vr(t){return{...t}}function Qn(t){return t.map(Vr)}function no(t){return{...t,effect:{...t.effect}}}function bu(t){return t.map(no)}function Kr(t){return{...t,effect:{...t.effect}}}function Tu(t){return t.map(Kr)}function nf(t){return t.kind==="joker"?{kind:"joker",joker:no(t.joker)}:t.kind==="consumable"?{kind:"consumable",consumable:Kr(t.consumable)}:{kind:"playing-card",card:Vr(t.card),name:t.name,description:t.description,price:t.price,sellValue:t.sellValue}}function _g(t){return{...t}}function Ba(t){return t?{...t}:null}function Eu(t){return t?{...t,consumable:Kr(t.consumable),candidateIds:[...t.candidateIds],selectedIds:[...t.selectedIds]}:null}function Cu(t){return t?{...t,choices:t.choices.map(e=>({id:e.id,taken:e.taken,item:nf(e.item)}))}:null}function wu(t){return t?{visit:t.visit,rerolls:t.rerolls,rerollCost:t.rerollCost,boosters:t.boosters.map(_g),voucher:Ba(t.voucher),offers:t.offers.map(e=>({id:e.id,sold:e.sold,item:nf(e.item)}))}:null}function Uo(){return Object.fromEntries(Object.keys($n).map(t=>[t,{level:1,chips:$n[t].chips,mult:$n[t].mult}]))}function Au(t){return Object.fromEntries(Object.keys(t).map(e=>[e,{...t[e]}]))}var vg=class rf{config;rng;rngDrawCount=0;phase="play";ante=1;blindIndex=0;money;ownedDeck=[];deck=[];discardPile=[];hand=[];selected=new Set;handsLeft;discardsLeft;roundScore=0;target=0;handLevels;jokers=[];consumables=[];shop=null;booster=null;targetMode=null;vouchers=[];anteVoucher=null;lastCashout=null;deckKey="red";stakeKey="white";bossBlindKey="wall";anteTags=["investment","coupon"];skippedBlinds=0;doubleTags=0;investmentTags=0;couponNextShop=!1;couponShopVisit=null;d6NextShop=!1;juggleNextBlind=0;roundHandSize=8;playedHandTypesThisRound=[];handPlayCounts=Object.fromEntries(Object.keys($n).map(e=>[e,0]));handsPlayedRun=0;discardsUsedRun=0;antePlayedCardIds=new Set;bossFaceDownCardIds=new Set;verdantLeafActive=!1;crimsonDebuffedJokerId=null;bossForcedCardId=null;concealNextDraw=!1;unlockedJokerKeys=null;shopVisit=0;lastScore=null;listeners=new Set;constructor(e={},n=!0){this.config={...fg,...e},this.rng=this.createTrackedRng(this.config.seed),this.money=this.config.startingMoney,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.handLevels=Uo(),this.ownedDeck=ps(),n&&this.startBlind()}static fromSnapshot(e){const n=new rf(e.config,!1);return n.loadSnapshot(e),n}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}getRngDrawCount(){return this.rngDrawCount}targetForCurrentBlind(){const e=ot[this.stakeKey].order,n=e>=ot.purple.order?dg:e>=ot.green.order?hg:ug,i=n[Math.min(this.ante-1,n.length-1)],r=this.blindIndex===0?1:this.blindIndex===1?1.5:Xs[this.bossBlindKey].targetMult;return Math.round(i*r)}startBlind(){if(this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.roundHandSize=this.config.handSize+this.juggleNextBlind,this.juggleNextBlind=0,this.playedHandTypesThisRound=[],this.blindIndex===2&&(this.bossBlindKey==="water"&&(this.discardsLeft=0),this.bossBlindKey==="needle"&&(this.handsLeft=1),this.bossBlindKey==="manacle"&&(this.roundHandSize=Math.max(1,this.roundHandSize-1))),this.deck=Lo(Qn(this.ownedDeck),this.rng),this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.drawToFull(),this.blindIndex===2){if(this.bossBlindKey==="house")for(const e of this.hand)this.bossFaceDownCardIds.add(e.id);this.bossBlindKey==="amber-acorn"&&this.jokers.length>1&&(this.jokers=Lo(this.jokers,this.rng)),this.bossBlindKey==="verdant-leaf"&&(this.verdantLeafActive=!0),this.bossBlindKey==="crimson-heart"&&(this.crimsonDebuffedJokerId=this.jokers.length?this.pick(this.jokers).id:null),this.bossBlindKey==="cerulean-bell"&&(this.bossForcedCardId=this.hand.length?this.pick(this.hand).id:null,this.bossForcedCardId&&this.selected.add(this.bossForcedCardId))}this.phase="play",this.emit()}enterSetup(){this.phase="setup",this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.roundScore=0,this.emit()}configureRun(e,n,i){typeof i=="number"&&Number.isFinite(i)&&(this.config.seed=Math.max(1,Math.floor(i))>>>0,this.rng=this.createTrackedRng(this.config.seed)),this.deckKey=e,this.stakeKey=n,this.ante=1,this.blindIndex=0,this.config.handSize=8,this.config.handsPerRound=4,this.config.discardsPerRound=3,this.config.startingMoney=4,ot[n].order>=ot.blue.order&&(this.config.discardsPerRound-=1),e==="red"&&(this.config.discardsPerRound+=1),e==="blue"&&(this.config.handsPerRound+=1),e==="black"&&(this.config.handsPerRound-=1),this.money=e==="yellow"?14:4,this.ownedDeck=ps(),this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.handLevels=Uo(),this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.handsPlayedRun=0,this.discardsUsedRun=0,this.antePlayedCardIds.clear(),this.bossFaceDownCardIds.clear(),this.verdantLeafActive=!1,this.crimsonDebuffedJokerId=null,this.bossForcedCardId=null,this.handPlayCounts=Object.fromEntries(Object.keys($n).map(r=>[r,0])),this.shopVisit=0,this.rollAnteOptions(),this.prepareBlindSelect()}rollAnteOptions(){this.anteTags=[this.pick(xu),this.pick(xu)],this.bossBlindKey=this.ante===8?this.pick(zl):this.pick(Su)}prepareBlindSelect(){this.phase="blind-select",this.target=this.targetForCurrentBlind(),this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.emit()}playSelectedBlind(){return this.phase!=="blind-select"?!1:(this.startBlind(),!0)}setUnlockedJokerKeys(e){this.unlockedJokerKeys=e?new Set(e):null}createJokerByKey(e,n=!1){const i=lr.find(r=>r.key===e);return i?this.makeJokerFromTemplate(i,n):null}isCardFaceDown(e){return this.bossFaceDownCardIds.has(e)}currentSkipTag(){return this.blindIndex<2?this.anteTags[this.blindIndex]:null}skipCurrentBlind(){if(this.phase!=="blind-select"||this.blindIndex>=2)return!1;const e=this.currentSkipTag();return e?(this.skippedBlinds+=1,this.applyTag(e),this.blindIndex=this.blindIndex+1,this.prepareBlindSelect(),!0):!1}applyTag(e){if(e==="double"){this.doubleTags+=1;return}const n=1+this.doubleTags;this.doubleTags=0;for(let i=0;i<n;i++)this.applySingleTag(e)}availableJokerTemplates(e){let n=lr;return this.unlockedJokerKeys&&(n=n.filter(i=>this.unlockedJokerKeys.has(i.key))),e&&(n=n.filter(i=>i.rarity===e)),n}addTaggedJoker(e,n="base"){const i=n==="negative"?1:0;if(this.jokers.length>=this.jokerCapacity()+i)return!1;const r=this.availableJokerTemplates(e??void 0);if(r.length===0)return!1;const s=this.makeJokerFromTemplate(this.pick(r),!1);return s.edition=n,this.jokers.push(s),!0}addTagConsumable(e){if(this.consumables.length>=this.consumableCapacity())return;const n=e==="tarot"?ua:e==="planet"?ko:Do;this.consumables.push(this.makeConsumableFromCatalog(this.pick(n)))}mostPlayedHandType(){return Object.keys(this.handPlayCounts).sort((e,n)=>(this.handPlayCounts[n]??0)-(this.handPlayCounts[e]??0))[0]??"High Card"}grantVoucherKey(e){return this.vouchers.includes(e)?!1:(this.vouchers.push(e),e==="grabber"&&(this.config.handsPerRound+=1),e==="wasteful"&&(this.config.discardsPerRound+=1),!0)}applySingleTag(e){if(e==="uncommon")this.addTaggedJoker("uncommon");else if(e==="rare")this.addTaggedJoker("rare");else if(e==="negative")this.addTaggedJoker(null,"negative");else if(e==="foil")this.addTaggedJoker(null,"foil");else if(e==="holographic")this.addTaggedJoker(null,"holographic");else if(e==="polychrome")this.addTaggedJoker(null,"polychrome");else if(e==="investment")this.investmentTags+=1;else if(e==="voucher"){const n=Object.keys(Io).filter(i=>!this.vouchers.includes(i));n.length>0&&this.grantVoucherKey(this.pick(n))}else if(e==="coupon")this.couponNextShop=!0;else if(e==="juggle")this.juggleNextBlind+=3;else if(e==="d6")this.d6NextShop=!0;else if(e==="speed")this.money+=Math.max(5,this.skippedBlinds*5);else if(e==="economy")this.money+=Math.min(40,Math.max(0,this.money));else if(e==="standard"){const n=ps();for(let i=0;i<2;i++){const r=this.pick(n);this.ownedDeck.push({...r,id:this.makeRunId("tag-card")})}}else if(e==="charm")this.addTagConsumable("tarot");else if(e==="meteor")this.addTagConsumable("planet");else if(e==="ethereal")this.addTagConsumable("spectral");else if(e==="buffoon")this.addTaggedJoker(null);else if(e==="handy")this.money+=this.handsPlayedRun;else if(e==="garbage")this.money+=this.discardsUsedRun;else if(e==="orbital"){const n=this.mostPlayedHandType();for(let i=0;i<3;i++)this.upgradeHandLevel(n)}else if(e==="top-up"){const n=this.availableJokerTemplates("common");for(let i=0;i<2&&n.length>0&&this.jokers.length<this.jokerCapacity();i++)this.jokers.push(this.makeJokerFromTemplate(this.pick(n),!1))}else if(e==="boss"){const n=(this.ante===8?zl:Su).filter(i=>i!==this.bossBlindKey);n.length>0&&(this.bossBlindKey=this.pick(n))}}targetForPreview(){return this.targetForCurrentBlind()}playRestrictionMessage(){if(this.phase!=="play"||this.blindIndex!==2)return null;const e=this.selectedCards();if(this.bossBlindKey==="psychic"&&e.length!==5)return"The Psychic: play exactly 5 cards";if(this.bossBlindKey==="cerulean-bell"&&this.bossForcedCardId&&!this.selected.has(this.bossForcedCardId))return"Cerulean Bell: the forced card must be played";if(e.length===0)return null;const n=As(e).type;return this.bossBlindKey==="eye"&&this.playedHandTypesThisRound.includes(n)?"The Eye: that Poker Hand was already played":this.bossBlindKey==="mouth"&&this.playedHandTypesThisRound.length>0&&this.playedHandTypesThisRound[0]!==n?`The Mouth: play only ${this.playedHandTypesThisRound[0]}`:null}drawBossCards(e){for(let n=0;n<e&&this.deck.length>0;n++){const i=this.deck.pop();this.hand.push(i),this.blindIndex===2&&(this.bossBlindKey==="wheel"&&this.rng()<1/7&&this.bossFaceDownCardIds.add(i.id),this.bossBlindKey==="mark"&&i.rank>=11&&i.rank<=13&&this.bossFaceDownCardIds.add(i.id),this.bossBlindKey==="fish"&&this.concealNextDraw&&this.bossFaceDownCardIds.add(i.id))}this.concealNextDraw=!1}drawToFull(){this.drawBossCards(Math.max(0,this.roundHandSize-this.hand.length))}toggleSelect(e){return this.phase!=="play"?!1:this.selected.has(e)?this.blindIndex===2&&this.bossBlindKey==="cerulean-bell"&&this.bossForcedCardId===e?!0:(this.selected.delete(e),this.emit(),!1):this.selected.size>=5?!1:(this.selected.add(e),this.emit(),!0)}selectedCards(e){if(!e)return this.hand.filter(i=>this.selected.has(i.id));const n=new Map(this.hand.map(i=>[i.id,i]));return e.filter(i=>this.selected.has(i)).map(i=>n.get(i)).filter(i=>!!i)}jokerCapacity(){return 5+(this.deckKey==="black"?1:0)+this.jokers.filter(e=>(e.edition??"base")==="negative").length}consumableCapacity(){return 2+(this.vouchers.includes("crystal-ball")?1:0)+this.consumables.filter(e=>(e.edition??"base")==="negative").length}moveJoker(e,n){const i=this.jokers.findIndex(a=>a.id===e);if(i<0)return!1;const r=Math.max(0,Math.min(this.jokers.length-1,n));if(r===i)return!0;const[s]=this.jokers.splice(i,1);return this.jokers.splice(r,0,s),this.emit(),!0}canPlay(){return this.phase==="play"&&this.selected.size>0&&this.handsLeft>0&&this.playRestrictionMessage()===null}canDiscard(){return this.phase==="play"&&this.selected.size>0&&this.discardsLeft>0}playSelected(e){if(!this.canPlay())return null;const n=this.selectedCards(e),i=As(n),r=this.handLevels[i.type],s=this.handsLeft,a=new Set(n.map(f=>f.id)),o=new Map(this.hand.map(f=>[f.id,f])),l=(e??this.hand.map(f=>f.id)).filter(f=>!a.has(f)).map(f=>o.get(f)).filter(f=>!!f),c=this.blindIndex===2?this.bossBlindKey:null,u=c==="goad"?["spades"]:c==="window"?["diamonds"]:c==="head"?["hearts"]:c==="club"?["clubs"]:[],d=this.playedHandTypesThisRound.includes(i.type);this.prepareExactJokersForHand(i);const h=Object.values(this.handLevels).reduce((f,g)=>f+Math.max(0,g.level-1),0),m=ag(i,r,{jokers:this.jokers,heldCards:l,handsLeftBeforePlay:s,handsPerRound:this.playedHandTypesThisRound.length===0?s:this.config.handsPerRound,discardsLeft:this.discardsLeft,deckRemaining:this.deck.length,money:this.money,handPlayCount:this.handPlayCounts[i.type]??0,handAlreadyPlayedThisRound:d,isFinalHand:this.handsLeft===1,jokerCount:this.jokers.length,jokerCapacity:this.jokerCapacity(),fullDeckSize:this.ownedDeck.length,handLevelExtra:h,distinctHandTypesThisRound:new Set(this.playedHandTypesThisRound).size,priorSameHandCount:this.playedHandTypesThisRound.filter(f=>f===i.type).length,bossDebuffSuits:u,bossDebuffFace:c==="plant",bossHalveBase:c==="flint",rng:()=>this.rng()});this.roundScore+=m.total,this.money+=m.moneyDelta,this.blindIndex===2&&this.bossBlindKey==="tooth"&&(this.money-=n.length,m.moneyDelta-=n.length),this.blindIndex===2&&this.bossBlindKey==="ox"&&i.type===this.mostPlayedHandType()&&(this.money=0);for(const f of n)this.antePlayedCardIds.add(f.id);this.blindIndex===2&&this.bossBlindKey==="crimson-heart"&&(this.crimsonDebuffedJokerId=this.jokers.length?this.pick(this.jokers).id:null),this.handsLeft-=1,this.lastScore=m,this.playedHandTypesThisRound.push(i.type),this.handPlayCounts[i.type]=(this.handPlayCounts[i.type]??0)+1,this.handsPlayedRun+=1;const _=new Set;for(const f of this.jokers){if(this.isJokerDebuffed(f))continue;const g=f.effect;g.kind==="decay-chips"?(f.counter=Math.max(0,(f.counter??g.start)-g.decay),(f.counter??0)<=0&&_.add(f.id)):g.kind==="loyalty-xmult"?f.counter=((f.counter??0)+1)%g.every:g.kind==="mythic-phoenix"&&m.destroyedCardIds.length>0&&(f.counter=(f.counter??0)+m.destroyedCardIds.length)}if(_.size>0&&(this.jokers=this.jokers.filter(f=>!_.has(f.id))),this.blindIndex===2&&this.bossBlindKey==="arm"){const f=$n[i.type],g=this.handLevels[i.type],p=Math.max(1,g.level-1);this.handLevels[i.type]={level:p,chips:f.chips+f.chipsPerLvl*(p-1),mult:f.mult+f.multPerLvl*(p-1)}}if(this.hand=this.hand.filter(f=>!this.selected.has(f.id)),this.discardPile.push(...n),this.selected.clear(),m.destroyedCardIds.length>0){const f=new Set(m.destroyedCardIds);this.discardPile=this.discardPile.filter(g=>!f.has(g.id)),this.ownedDeck=this.ownedDeck.filter(g=>!f.has(g.id))}if(this.roundScore>=this.target)this.resolveEndOfRoundHeldCards(i.type,m),this.onBlindCleared();else if(this.handsLeft<=0)this.phase="game-over";else{if(this.blindIndex===2&&this.bossBlindKey==="fish"&&(this.concealNextDraw=!0),this.blindIndex===2&&this.bossBlindKey==="hook")for(let f=0;f<2&&this.hand.length>0;f++){const g=Math.floor(this.rng()*this.hand.length),[p]=this.hand.splice(g,1);this.discardPile.push(p)}this.blindIndex===2&&this.bossBlindKey==="serpent"?this.drawBossCards(3):this.drawToFull(),this.blindIndex===2&&this.bossBlindKey==="cerulean-bell"&&(this.bossForcedCardId=this.hand.length?this.pick(this.hand).id:null,this.bossForcedCardId&&this.selected.add(this.bossForcedCardId))}return this.emit(),m}discardSelected(e){if(!this.canDiscard())return null;const n=this.selectedCards(e);this.hand=this.hand.filter(i=>!this.selected.has(i.id)),this.discardPile.push(...n),this.discardsLeft-=1,this.discardsUsedRun+=1,this.selected.clear();for(const i of this.jokers){const r=i.effect;if(r.kind==="green-scale-mult")i.counter=Math.max(0,(i.counter??0)-r.discardLoss);else if(r.kind==="castle-scale-chips"&&i.suit){const s=n.filter(a=>!this.cardDebuffedByBoss(a)&&(a.suit===i.suit||a.enhancement==="wild")).length;i.counter=(i.counter??0)+s*r.gain}}for(const i of n)if(!(this.cardDebuffedByBoss(i)||i.seal!=="purple")){if(this.consumables.length>=this.consumableCapacity())break;this.consumables.push(this.makePurpleSealTarot())}return this.blindIndex===2&&this.bossBlindKey==="serpent"?this.drawBossCards(3):this.drawToFull(),this.blindIndex===2&&this.bossBlindKey==="cerulean-bell"&&(this.bossForcedCardId=this.hand.length?this.pick(this.hand).id:null,this.bossForcedCardId&&this.selected.add(this.bossForcedCardId)),this.emit(),n}onBlindCleared(){const e=this.blindIndex,n=ot[this.stakeKey].order,i=e===0&&n>=ot.red.order?0:3+e,r=this.jokers.reduce((u,d)=>d.effect.kind==="economy-clear"&&!this.isJokerDebuffed(d)?u+d.effect.amount:u,0),s=this.deckKey==="green",a=s?Math.max(0,this.handsLeft)*2+Math.max(0,this.discardsLeft):Math.max(0,this.handsLeft),o=s?0:Math.min(5,Math.floor(Math.max(0,this.money)/5));let l=0;e===2&&this.investmentTags>0&&(l=this.investmentTags*25,this.investmentTags=0);const c=i+a+o+r+l;this.money+=c,this.lastCashout={blindReward:i+r+l,handsBonus:a,interest:o,total:c};for(const u of this.jokers)u.rental&&(this.money-=3),u.sticker==="perishable"&&(u.perishableRounds??0)>0&&(u.perishableRounds=Math.max(0,(u.perishableRounds??0)-1)),u.effect.kind==="castle-scale-chips"&&(u.suit=this.pickCastleSuitWeighted());if(this.blindIndex<2)this.blindIndex=this.blindIndex+1;else{if(this.blindIndex=0,this.ante+=1,this.anteVoucher=null,this.antePlayedCardIds.clear(),this.ante>8){this.phase="win";return}this.rollAnteOptions()}this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=0,this.discardsLeft=0,this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=this.createShopState(),this.phase="shop"}isJokerDebuffed(e){return e.sticker==="perishable"&&(e.perishableRounds??0)<=0?!0:this.blindIndex===2&&this.bossBlindKey==="crimson-heart"&&this.crimsonDebuffedJokerId===e.id}continueFromShop(){return this.phase!=="shop"?!1:(this.prepareBlindSelect(),!0)}canBuyOffer(e){const n=this.findOffer(e);if(!n||n.sold)return!1;const i=this.priceForItem(n.item);if(this.money<i)return!1;if(n.item.kind==="joker"){const r=(n.item.joker.edition??"base")==="negative"?1:0;return this.jokers.length<this.jokerCapacity()+r}if(n.item.kind==="consumable"){const r=(n.item.consumable.edition??"base")==="negative"?1:0;return this.consumables.length<this.consumableCapacity()+r}return!0}buyOffer(e){const n=this.findOffer(e);if(!n||!this.canBuyOffer(e))return!1;const i=this.priceForItem(n.item);return this.money-=i,n.sold=!0,n.item.kind==="joker"?this.jokers.push(no(n.item.joker)):n.item.kind==="consumable"?this.consumables.push(Kr(n.item.consumable)):this.ownedDeck.push(Vr(n.item.card)),this.emit(),!0}rerollShop(){if(this.phase!=="shop"||!this.shop||this.money<this.shop.rerollCost)return!1;this.money-=this.shop.rerollCost;const e=this.shop.rerollCost===0&&this.shop.rerolls===0;return this.shop.rerolls+=1,this.shop.rerollCost=e?1:this.rerollBaseCost()+this.shop.rerolls,this.shop.offers=this.createShopOffers(this.shop.visit,this.shop.rerolls),this.emit(),!0}sellJoker(e){const n=this.jokers.findIndex(r=>r.id===e);if(n<0||this.jokers[n].sticker==="eternal")return!1;const[i]=this.jokers.splice(n,1);return this.money+=i.sellValue,this.blindIndex===2&&this.bossBlindKey==="verdant-leaf"&&(this.verdantLeafActive=!1),this.emit(),!0}sellConsumable(e){const n=this.consumables.findIndex(r=>r.id===e);if(n<0)return!1;const[i]=this.consumables.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}useConsumable(e){return this.beginUseConsumable(e)==="applied"}cardDebuffedByBoss(e){return this.blindIndex!==2?!1:!!(this.bossBlindKey==="goad"&&e.suit==="spades"||this.bossBlindKey==="window"&&e.suit==="diamonds"||this.bossBlindKey==="head"&&e.suit==="hearts"||this.bossBlindKey==="plant"&&e.rank>=11&&e.rank<=13||this.bossBlindKey==="club"&&e.suit==="clubs"||this.bossBlindKey==="pillar"&&this.antePlayedCardIds.has(e.id)||this.bossBlindKey==="verdant-leaf"&&this.verdantLeafActive)}pickCastleSuitWeighted(){const e=Ol.map(r=>({suit:r,count:this.ownedDeck.filter(s=>s.enhancement!=="stone"&&s.suit===r).length})),n=e.reduce((r,s)=>r+s.count,0);if(n<=0)return"spades";let i=this.rng()*n;for(const r of e)if(i-=r.count,i<0)return r.suit;return e[e.length-1].suit}prepareExactJokersForHand(e){for(const n of this.jokers){if(this.isJokerDebuffed(n))continue;const i=n.effect;i.kind==="straight-scale-chips"&&e.type.includes("Straight")?n.counter=(n.counter??i.start??0)+i.gain:i.kind==="bus-scale-mult"?n.counter=e.scoringCards.some(r=>r.rank>=11&&r.rank<=13&&!this.cardDebuffedByBoss(r))?0:(n.counter??0)+i.gain:i.kind==="green-scale-mult"&&(n.counter=(n.counter??0)+i.handGain)}}jokerRuntimeText(e){const n=this.jokers.find(s=>s.id===e);if(!n)return"";const i=n.effect,r=n.counter??0;if(this.isJokerDebuffed(n))return"DEBUFFED (Perishable expired)";if(i.kind==="random-mult")return`Last roll: +${r} Mult · range ${i.min}–${i.max}`;if(i.kind==="decay-chips")return`Current: +${r} Chips`;if(i.kind==="straight-scale-chips")return`Current: +${r} Chips`;if(i.kind==="bus-scale-mult")return`Current: +${r} Mult`;if(i.kind==="green-scale-mult")return`Current: +${r} Mult`;if(i.kind==="deck-remaining-chips")return`Current: +${this.deck.length*i.amountPerCard} Chips`;if(i.kind==="discard-chips")return`Current: +${Math.max(0,this.discardsLeft)*i.amountPerDiscard} Chips`;if(i.kind==="zero-discard-mult")return this.discardsLeft===0?`ACTIVE: +${i.amount} Mult`:"Inactive: Discards remain";if(i.kind==="joker-count-mult")return`Current: +${this.jokers.length*i.amountPerJoker} Mult`;if(i.kind==="money-chips")return`Current: +${Math.max(0,this.money)*i.amountPerDollar} Chips`;if(i.kind==="money-mult")return`Current: +${Math.floor(Math.max(0,this.money)/i.dollarsPerStep)*i.amountPerStep} Mult`;if(i.kind==="loyalty-xmult"){const s=r%i.every;return s===i.every-1?`ACTIVE: X${i.amount} Mult`:`${i.every-1-s} hands remaining`}if(i.kind==="castle-scale-chips")return`Current: +${r} Chips · target ${n.suit??"spades"}`;if(i.kind==="last-hand-xmult"||i.kind==="retrigger-last-hand")return this.handsLeft===1?"ACTIVE: final Hand":`${Math.max(0,this.handsLeft-1)} Hands until active`;if(i.kind==="repeat-hand-xmult"&&this.selected.size>0){const s=As(this.selectedCards()).type;return this.playedHandTypesThisRound.includes(s)?`ACTIVE: ${s} already played`:`Inactive: first ${s} this Blind`}if(i.kind==="mythic-phoenix")return`Current: X${(1+r*.25).toFixed(2)} Mult · ${r} Glass shattered`;if(i.kind==="mythic-leviathan")return`Current: +${this.ownedDeck.length*8} Chips`;if(i.kind==="mythic-echo"&&this.selected.size>0){const s=As(this.selectedCards()).type;return`Current for ${s}: X${(1+this.playedHandTypesThisRound.filter(a=>a===s).length*.5).toFixed(2)}`}if(i.kind==="mythic-void"){const s=Math.max(0,this.jokerCapacity()-this.jokers.length);return`Current: X${(1+s*.75).toFixed(2)} · ${s} empty slots`}if(i.kind==="mythic-forge"){const s=Object.values(this.handLevels).reduce((a,o)=>a+Math.max(0,o.level-1),0);return`Current: X${(1+s*.08).toFixed(2)} · ${s} bonus levels`}if(i.kind==="mythic-staircase"){const s=new Set(this.playedHandTypesThisRound).size;return`Current: X${(1+s*.5).toFixed(2)} · ${s} hand types`}return i.kind==="mythic-emperor"?this.handsLeft===1?"ACTIVE: X5 + full retrigger":`${Math.max(0,this.handsLeft-1)} Hands until active`:i.kind==="mythic-quantum"?`Last fate: ${["+250 Chips","+35 Mult","X3 Mult","+$12"][Math.max(0,Math.min(3,r))]}`:""}resolveEndOfRoundHeldCards(e,n){const i=this.jokers.filter(r=>!this.isJokerDebuffed(r)&&r.effect.kind==="retrigger-held").length;for(const r of this.hand){if(this.cardDebuffedByBoss(r))continue;const s=1+(r.seal==="red"?1:0)+i;for(let a=0;a<s;a++)if(r.enhancement==="gold"&&(this.money+=3,n.moneyDelta+=3,n.steps.push({source:`Gold Card +$3${a>0?" (retrigger)":""}`,stage:"end_round",cardId:r.id,retrigger:a>0,moneyDelta:3,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})),r.seal==="blue"&&this.consumables.length<this.consumableCapacity()){const o={id:this.makeRunId("blue-planet"),key:`planet-${e.toLowerCase().replaceAll(" ","-")}`,name:`${e} Planet`,description:`Upgrade ${e} by 1 level.`,type:"planet",price:3,sellValue:1,effect:{kind:"planet",handType:e},edition:"base"};this.consumables.push(o),n.steps.push({source:`Blue Seal created ${o.name}${a>0?" (retrigger)":""}`,stage:"end_round",cardId:r.id,retrigger:a>0,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})}}}makePurpleSealTarot(){return this.makeConsumableFromCatalog(this.pick(ua))}openBooster(e){if(this.phase!=="shop"||!this.shop)return!1;const n=this.shop.boosters.find(s=>s.id===e);if(!n||n.sold)return!1;const i=this.discountedPrice(n.price);if(this.money<i)return!1;this.money-=i,n.sold=!0;const r=yu(n.type,n.size);return this.booster={sourceOfferId:n.id,type:n.type,size:n.size,name:n.name,choices:Array.from({length:r.choices},(s,a)=>this.makeBoosterChoice(n.type,a)),picksLeft:r.picks},this.phase="booster",this.targetMode=null,this.emit(),!0}boosterPrice(e){return this.discountedPrice(e.price)}makeBoosterChoice(e,n){let i;return e==="arcana"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(ua))}:e==="celestial"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(ko))}:e==="spectral"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(Do))}:e==="buffoon"?i=this.makeJokerItem():i=this.makePlayingCardItem(),{id:`pack-choice-${this.rngDrawCount}-${n}-${Math.floor(this.rng()*1e6)}`,item:i,taken:!1}}makeConsumableFromCatalog(e){return{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}chooseBooster(e){if(this.phase!=="booster"||!this.booster||this.booster.picksLeft<=0)return"invalid";const n=this.booster.choices.find(s=>s.id===e);if(!n||n.taken)return"invalid";if(n.item.kind==="joker"){const s=n.item.joker,a=(s.edition??"base")==="negative"?1:0;return this.jokers.length>=this.jokerCapacity()+a?"invalid":(this.jokers.push(no(s)),this.finishBoosterChoice(n))}if(n.item.kind==="playing-card")return this.ownedDeck.push(Vr(n.item.card)),this.finishBoosterChoice(n);const i=n.item.consumable,r=Mu(i.effect);return r?(this.targetMode={source:"booster",sourceId:this.booster.sourceOfferId,choiceId:n.id,consumable:Kr(i),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...r},this.emit(),"targeting"):(this.applyConsumableWithTargets(i,[]),this.finishBoosterChoice(n))}finishBoosterChoice(e){return e.taken=!0,this.booster&&(this.booster.picksLeft-=1),this.booster&&this.booster.picksLeft<=0&&(this.booster=null,this.phase="shop"),this.targetMode=null,this.emit(),"applied"}skipBooster(){return this.phase!=="booster"?!1:(this.booster=null,this.targetMode=null,this.phase="shop",this.emit(),!0)}buyVoucher(){if(this.phase!=="shop"||!this.shop?.voucher||this.shop.voucher.sold)return!1;const e=this.shop.voucher;return this.money<e.price?!1:(this.money-=e.price,e.sold=!0,this.anteVoucher?.key===e.key&&(this.anteVoucher.sold=!0),this.grantVoucherKey(e.key),e.key==="reroll-surplus"&&this.shop&&(this.shop.rerollCost=Math.max(1,this.shop.rerollCost-2)),this.emit(),!0)}beginUseConsumable(e){const n=this.consumables.find(r=>r.id===e);if(!n)return"invalid";const i=Mu(n.effect);if(!i){const r=this.consumables.findIndex(s=>s.id===e);return this.consumables.splice(r,1),this.applyConsumableWithTargets(n,[]),this.emit(),"applied"}return this.targetMode={source:"inventory",sourceId:e,consumable:Kr(n),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...i},this.emit(),"targeting"}toggleTargetCard(e){const n=this.targetMode;if(!n||!n.candidateIds.includes(e))return!1;const i=n.selectedIds.indexOf(e);return i>=0?(n.selectedIds.splice(i,1),this.emit(),!1):n.selectedIds.length>=n.max?!1:(n.selectedIds.push(e),this.emit(),!0)}cancelTargetMode(){return this.targetMode?(this.targetMode=null,this.emit(),!0):!1}confirmTargetMode(){const e=this.targetMode;if(!e||e.selectedIds.length<e.min||e.selectedIds.length>e.max)return!1;if(this.applyConsumableWithTargets(e.consumable,e.selectedIds),e.source==="inventory"){const i=this.consumables.findIndex(r=>r.id===e.sourceId);return i>=0&&this.consumables.splice(i,1),this.targetMode=null,this.emit(),!0}const n=this.booster?.choices.find(i=>i.id===e.choiceId);return n?(this.targetMode=null,this.finishBoosterChoice(n),!0):(this.targetMode=null,this.emit(),!1)}getTargetCandidateCards(){return this.targetMode?this.targetMode.candidateIds.map(e=>this.findRunCard(e)).filter(e=>!!e).map(Vr):[]}makeTargetCandidateIds(){if(this.hand.length>0)return this.hand.map(n=>n.id);const e=this.ownedDeck.map(n=>n.id);return Lo(e,this.rng).slice(0,Math.min(this.config.handSize,e.length))}findRunCard(e){return this.hand.find(n=>n.id===e)??this.deck.find(n=>n.id===e)??this.discardPile.find(n=>n.id===e)??this.ownedDeck.find(n=>n.id===e)??null}mutateCardEverywhere(e,n){for(const i of[this.ownedDeck,this.hand,this.deck,this.discardPile])for(const r of i)r.id===e&&n(r)}destroyCardEverywhere(e){this.ownedDeck=this.ownedDeck.filter(n=>n.id!==e),this.hand=this.hand.filter(n=>n.id!==e),this.deck=this.deck.filter(n=>n.id!==e),this.discardPile=this.discardPile.filter(n=>n.id!==e),this.selected.delete(e)}applyConsumableWithTargets(e,n){const i=e.effect;if(i.kind==="planet"){this.upgradeHandLevel(i.handType);return}if(i.kind==="money"){const r=i.mode==="double-up-to-20"?Math.min(20,this.money):Math.max(0,i.amount??0);this.money+=r;return}if(i.kind==="enhance-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.enhancement=i.enhancement,s.baseChips=i.enhancement==="stone"?50:s.rank===14?11:s.rank>=11?10:s.rank});return}if(i.kind==="convert-suit"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.suit=i.suit});return}if(i.kind==="destroy-selected"){for(const r of n)this.destroyCardEverywhere(r);return}if(i.kind==="copy-right-to-left"){const r=n.slice().sort((o,l)=>this.targetMode.candidateIds.indexOf(o)-this.targetMode.candidateIds.indexOf(l)),s=r[0],a=this.findRunCard(r[1]);if(!s||!a)return;this.mutateCardEverywhere(s,o=>{o.suit=a.suit,o.rank=a.rank,o.enhancement=a.enhancement,o.seal=a.seal,o.edition=a.edition,o.baseChips=a.baseChips});return}if(i.kind==="edition-selected"){for(const r of n){const s=i.edition==="random"?this.pick(["foil","holographic","polychrome"]):i.edition;this.mutateCardEverywhere(r,a=>{a.edition=s})}return}if(i.kind==="seal-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.seal=i.seal});return}if(i.kind==="duplicate-selected"){const r=n[0]?this.findRunCard(n[0]):null;if(!r)return;for(let s=0;s<i.copies;s++){const a=Vr(r);a.id=this.makeRunId("copy"),this.ownedDeck.push(a)}return}if(i.kind==="immolate-selected"){for(const r of n)this.destroyCardEverywhere(r);this.money+=i.money}}createShopState(){const e=++this.shopVisit;if(this.couponNextShop?(this.couponShopVisit=e,this.couponNextShop=!1):this.couponShopVisit=null,!this.anteVoucher||this.anteVoucher.sold){const i=Object.keys(Io).filter(r=>!this.vouchers.includes(r));this.anteVoucher=i.length>0?{...Io[this.pick(i)],sold:!1}:null}const n={visit:e,offers:this.createShopOffers(e,0),boosters:this.createBoosterOffers(e),voucher:Ba(this.anteVoucher),rerolls:0,rerollCost:this.d6NextShop?0:this.rerollBaseCost()};return this.d6NextShop=!1,n}createShopOffers(e,n){return[0,1].map(i=>{const r=this.rng()<.7?this.makeJokerItem():this.makeConsumableItem();return this.makeShopOffer(e,n,i,r)})}createBoosterOffers(e){return[0,1].map(n=>{const i=this.pick(lg),r=this.rng(),s=r<.68?"normal":r<.9?"jumbo":"mega",a=yu(i,s);return{id:`booster-${e}-${n}`,type:i,size:s,name:cg(i,s),description:`Choose ${a.picks} from ${a.choices}.`,price:a.price,sold:!1}})}rerollBaseCost(){return Math.max(1,pg-(this.vouchers.includes("reroll-surplus")?2:0))}makeShopOffer(e,n,i,r){return{id:`shop-${e}-${n}-${i}`,item:r,sold:!1}}makeJokerFromTemplate(e,n=!0){const i={...e,id:this.makeRunId("joker"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base",sticker:"none",rental:!1};i.effect.kind==="decay-chips"?i.counter=i.effect.start:i.effect.kind==="castle-scale-chips"?(i.counter=0,i.suit=this.pickCastleSuitWeighted()):(i.effect.kind==="straight-scale-chips"||i.effect.kind==="bus-scale-mult"||i.effect.kind==="green-scale-mult"||i.effect.kind==="loyalty-xmult"||i.effect.kind==="mythic-phoenix")&&(i.counter=i.effect.kind==="straight-scale-chips"?i.effect.start??0:0);const r=new Set(["runner","ride-the-bus","green-joker","castle"]),s=new Set(["ice-cream"]);if(n&&i.rarity!=="mythic"){const a=ot[this.stakeKey].order;if(a>=ot.black.order){const o=this.rng();o<.3&&!s.has(i.key)?i.sticker="eternal":a>=ot.orange.order&&o<.6&&!r.has(i.key)&&(i.sticker="perishable",i.perishableRounds=5)}a>=ot.gold.order&&this.rng()<.3&&(i.rental=!0)}return i}makeJokerItem(){const e=this.rng(),n=e<.68?"common":e<.93?"uncommon":e<.98?"rare":"mythic",i=this.availableJokerTemplates(n),r=this.availableJokerTemplates(),s=i.length?i:r.length?r:lr.filter(a=>a.rarity==="common");return{kind:"joker",joker:this.makeJokerFromTemplate(this.pick(s))}}makeConsumableItem(){const e=this.makeConsumableTemplate();return{kind:"consumable",consumable:{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}}makeConsumableTemplate(){const e=this.rng(),n=e<.45?ko:e<.88?ua:Do;return this.pick(n)}makePlayingCardItem(){const e=this.pick(Ol),n=this.pick(Qd),i=this.pick(mg),r=ef(e,n);return r.enhancement=i,i==="stone"&&(r.baseChips=50),this.rng()>.82&&(r.edition=this.pick(gg)),{kind:"playing-card",card:r,name:`${to[n]} of ${No(e)}${r.edition!=="base"?` (${No(r.edition)})`:""}`,description:`Add a ${No(i)} card to your deck.`,price:r.edition==="base"?4:6,sellValue:1}}findOffer(e){return this.shop?.offers.find(n=>n.id===e)??null}priceForItem(e){const n=e.kind==="joker"?e.joker.rental?1:e.joker.price:e.kind==="consumable"?e.consumable.price:e.price;return this.discountedPrice(n)}shopPriceForItem(e){return this.priceForItem(e)}discountedPrice(e){return this.shop&&this.couponShopVisit===this.shop.visit?0:this.vouchers.includes("clearance-sale")?Math.max(1,Math.ceil(e*.75)):e}upgradeHandLevel(e){const n=$n[e],i=this.handLevels[e].level+1;this.handLevels[e]={level:i,chips:n.chips+n.chipsPerLvl*(i-1),mult:n.mult+n.multPerLvl*(i-1)}}pick(e){return e[Math.floor(this.rng()*e.length)]}makeRunId(e){return`${e}-${this.rngDrawCount}-${Math.floor(this.rng()*1e6)}`}reset(e){if(typeof e=="object"&&e!==null){this.loadSnapshot(e),this.emit();return}this.config={...this.config,seed:typeof e=="number"?e:Math.floor(Math.random()*1e9)},this.rng=this.createTrackedRng(this.config.seed),this.ante=1,this.blindIndex=0,this.money=this.config.startingMoney,this.ownedDeck=ps(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.deckKey="red",this.stakeKey="white",this.bossBlindKey="wall",this.anteTags=["investment","coupon"],this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.roundHandSize=this.config.handSize,this.playedHandTypesThisRound=[],this.handPlayCounts=Object.fromEntries(Object.keys($n).map(n=>[n,0])),this.handsPlayedRun=0,this.shopVisit=0,this.handLevels=Uo(),this.lastScore=null,this.enterSetup()}toSnapshot(){return{version:4,config:{...this.config},rngDrawCount:this.rngDrawCount,phase:this.phase,ante:this.ante,blindIndex:this.blindIndex,money:this.money,ownedDeck:Qn(this.ownedDeck),deck:Qn(this.deck),discardPile:Qn(this.discardPile),hand:Qn(this.hand),selected:[...this.selected],handsLeft:this.handsLeft,discardsLeft:this.discardsLeft,roundScore:this.roundScore,target:this.target,handLevels:Au(this.handLevels),jokers:bu(this.jokers),consumables:Tu(this.consumables),shop:wu(this.shop),booster:Cu(this.booster),targetMode:Eu(this.targetMode),vouchers:[...this.vouchers],anteVoucher:Ba(this.anteVoucher),lastCashout:this.lastCashout?{...this.lastCashout}:null,deckKey:this.deckKey,stakeKey:this.stakeKey,bossBlindKey:this.bossBlindKey,anteTags:[...this.anteTags],skippedBlinds:this.skippedBlinds,doubleTags:this.doubleTags,investmentTags:this.investmentTags,couponNextShop:this.couponNextShop,couponShopVisit:this.couponShopVisit,d6NextShop:this.d6NextShop,juggleNextBlind:this.juggleNextBlind,roundHandSize:this.roundHandSize,playedHandTypesThisRound:[...this.playedHandTypesThisRound],handPlayCounts:{...this.handPlayCounts},handsPlayedRun:this.handsPlayedRun,discardsUsedRun:this.discardsUsedRun,antePlayedCardIds:[...this.antePlayedCardIds],bossFaceDownCardIds:[...this.bossFaceDownCardIds],verdantLeafActive:this.verdantLeafActive,crimsonDebuffedJokerId:this.crimsonDebuffedJokerId,bossForcedCardId:this.bossForcedCardId}}loadSnapshot(e){const n=e.version;if(n!==1&&n!==2&&n!==3&&n!==4)throw new Error(`Unsupported snapshot version: ${n}`);const i=this.normalizeSnapshot(e);this.config={...i.config},this.rng=this.createTrackedRng(i.config.seed,i.rngDrawCount),this.phase=i.phase,this.ante=i.ante,this.blindIndex=i.blindIndex,this.money=i.money,this.ownedDeck=Qn(i.ownedDeck),this.deck=Qn(i.deck),this.discardPile=Qn(i.discardPile),this.hand=Qn(i.hand),this.selected=new Set(i.selected),this.handsLeft=i.handsLeft,this.discardsLeft=i.discardsLeft,this.roundScore=i.roundScore,this.target=i.target,this.handLevels=Au(i.handLevels),this.jokers=bu(i.jokers),this.consumables=Tu(i.consumables),this.shop=wu(i.shop),this.booster=Cu(i.booster),this.targetMode=Eu(i.targetMode),this.vouchers=[...i.vouchers],this.anteVoucher=Ba(i.anteVoucher),this.lastCashout=i.lastCashout?{...i.lastCashout}:null,this.deckKey=i.deckKey,this.stakeKey=i.stakeKey,this.bossBlindKey=i.bossBlindKey,this.anteTags=[...i.anteTags],this.skippedBlinds=i.skippedBlinds,this.doubleTags=i.doubleTags,this.investmentTags=i.investmentTags,this.couponNextShop=i.couponNextShop,this.couponShopVisit=i.couponShopVisit,this.d6NextShop=i.d6NextShop,this.juggleNextBlind=i.juggleNextBlind,this.roundHandSize=i.roundHandSize,this.playedHandTypesThisRound=[...i.playedHandTypesThisRound],this.handPlayCounts={...i.handPlayCounts},this.handsPlayedRun=i.handsPlayedRun,this.discardsUsedRun=i.discardsUsedRun??0,this.antePlayedCardIds=new Set(i.antePlayedCardIds??[]),this.bossFaceDownCardIds=new Set(i.bossFaceDownCardIds??[]),this.verdantLeafActive=i.verdantLeafActive??!1,this.crimsonDebuffedJokerId=i.crimsonDebuffedJokerId??null,this.bossForcedCardId=i.bossForcedCardId??null,this.shopVisit=i.shop?.visit??this.completedShopCount(),this.lastScore=null}normalizeSnapshot(e){if(e.version===4)return e;let n;if(e.version===3)n=e;else if(e.version===2)n={...e,version:3,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null};else{const i=e,r=[...i.deck,...i.discardPile,...i.hand],s=new Set,a=r.filter(o=>s.has(o.id)?!1:(s.add(o.id),!0));n={...i,version:3,ownedDeck:a.length?a:ps(),jokers:[],consumables:[],shop:null,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null}}return{...n,version:4,deckKey:"red",stakeKey:"white",bossBlindKey:"wall",anteTags:["investment","coupon"],skippedBlinds:0,doubleTags:0,investmentTags:0,couponNextShop:!1,couponShopVisit:null,d6NextShop:!1,juggleNextBlind:0,roundHandSize:n.config.handSize,playedHandTypesThisRound:[],handPlayCounts:Object.fromEntries(Object.keys($n).map(i=>[i,0])),handsPlayedRun:0,discardsUsedRun:0,antePlayedCardIds:[],bossFaceDownCardIds:[],verdantLeafActive:!1,crimsonDebuffedJokerId:null,bossForcedCardId:null}}completedShopCount(){return Math.max(0,(this.ante-1)*3+this.blindIndex)}createTrackedRng(e,n=0){const i=jm(e);for(let r=0;r<n;r++)i();return this.rngDrawCount=n,()=>(this.rngDrawCount+=1,i())}},Hr={spades:0,hearts:1,diamonds:2,clubs:3},Ru=[[14,13,12,11,10],[13,12,11,10,9],[12,11,10,9,8],[11,10,9,8,7],[10,9,8,7,6],[9,8,7,6,5],[8,7,6,5,4],[7,6,5,4,3],[6,5,4,3,2],[5,4,3,2,14]];function sf(t,e,n){return Hr[t.suit]-Hr[e.suit]||(n.get(t.id)??0)-(n.get(e.id)??0)}function yg(t){const e=new Map(t.map((a,o)=>[a.id,o])),n=new Set(t.filter(a=>a.enhancement!=="stone").map(a=>a.rank));let i=Ru[0],r=-1;for(const a of Ru){const o=a.reduce((l,c)=>l+(n.has(c)?1:0),0);o>r&&(r=o,i=a)}const s=new Map(i.map((a,o)=>[a,o]));return t.slice().sort((a,o)=>{const l=a.enhancement==="stone";if(l!==(o.enhancement==="stone"))return l?1:-1;const c=s.get(a.rank),u=s.get(o.rank),d=c!==void 0,h=u!==void 0;return d!==h?d?-1:1:d&&h&&c!==u?c-u:a.rank!==o.rank?o.rank-a.rank:sf(a,o,e)})}function Mg(t){const e=new Map(t.map((l,c)=>[l.id,c])),n=t.filter(l=>l.enhancement!=="stone"),i=n.filter(l=>l.enhancement==="wild").length,r=new Map;Object.keys(Hr).forEach(l=>r.set(l,0));for(const l of n)l.enhancement!=="wild"&&r.set(l.suit,(r.get(l.suit)??0)+1);const s=Object.keys(Hr).sort((l,c)=>{const u=(r.get(l)??0)+i;return(r.get(c)??0)+i-u||Hr[l]-Hr[c]}),a=s[0],o=new Map(s.map((l,c)=>[l,c]));return t.slice().sort((l,c)=>{const u=l.enhancement==="stone";if(u!==(c.enhancement==="stone"))return u?1:-1;const d=l.enhancement==="wild"?0:o.get(l.suit)??99,h=c.enhancement==="wild"?0:o.get(c.suit)??99;if(d!==h)return d-h;if(d<=0&&h<=0&&l.enhancement!==c.enhancement){if(l.suit===a&&l.enhancement!=="wild")return-1;if(c.suit===a&&c.enhancement!=="wild")return 1}return l.rank!==c.rank?c.rank-l.rank:sf(l,c,e)})}var af="kanban-open-poker:meta-v1",Sg=Qs.filter(t=>t.rarity==="mythic").map(t=>t.key),of=Qs.filter(t=>t.rarity==="common").map(t=>t.key),xg=Qs.filter(t=>t.rarity==="uncommon").map(t=>t.key),bg=Qs.filter(t=>t.rarity==="rare").map(t=>t.key);function Oo(){return{version:1,runsStarted:0,runsFinished:0,wins:0,bestAnte:1,totalHands:0,totalSkips:0,totalDiscards:0,maxMoney:4,unlockedDecks:["red"],highestStakeCleared:{},unlockedJokers:[...of],discoveredJokers:[],discoveredBosses:[],discoveredTags:[],settledRunIds:[]}}function Sr(t){return[...new Set(t)]}function Tg(t){try{const e=t.getItem(af);if(!e)return Oo();const n=JSON.parse(e),i=Oo();return ea({...i,...n,version:1,unlockedDecks:Sr(n.unlockedDecks??i.unlockedDecks),unlockedJokers:Sr(n.unlockedJokers??i.unlockedJokers),discoveredJokers:Sr(n.discoveredJokers??[]),discoveredBosses:Sr(n.discoveredBosses??[]),discoveredTags:Sr(n.discoveredTags??[]),settledRunIds:Sr(n.settledRunIds??[]).slice(-100),highestStakeCleared:{...n.highestStakeCleared??{}}})}catch{return Oo()}}function lf(t,e){t.setItem(af,JSON.stringify(e))}function Eg(t){return Math.max(-1,...Object.values(t.highestStakeCleared).map(e=>Number(e??-1)))}function Cg(t,e){return Math.min(7,Math.max(0,Number(t.highestStakeCleared[e]??-1)+1))}function ea(t){const e={...t},n=new Set(e.unlockedDecks);n.add("red"),(e.bestAnte>=4||e.wins>=1)&&n.add("blue"),e.wins>=1&&n.add("yellow"),e.wins>=2&&n.add("green"),e.wins>=3&&n.add("black"),e.unlockedDecks=[...n];const i=new Set(e.unlockedJokers);of.forEach(a=>i.add(a)),(e.bestAnte>=4||e.wins>=1)&&xg.forEach(a=>i.add(a)),e.wins>=1&&bg.forEach(a=>i.add(a));const r=Eg(e),s=e.wins<=0?0:r>=5?20:r>=3?15:r>=1?10:5;return Sg.slice(0,s).forEach(a=>i.add(a)),e.unlockedJokers=[...i],e}function wg(t){return ea({...t,runsStarted:t.runsStarted+1})}function Ag(t,e,n){if(t.settledRunIds.includes(e))return t;const i={...t,runsFinished:t.runsFinished+1,wins:t.wins+(n.won?1:0),bestAnte:Math.max(t.bestAnte,n.ante),totalHands:t.totalHands+n.hands,totalSkips:t.totalSkips+n.skips,totalDiscards:t.totalDiscards+n.discards,maxMoney:Math.max(t.maxMoney,n.money),highestStakeCleared:{...t.highestStakeCleared},settledRunIds:[...t.settledRunIds,e].slice(-100)};return n.won&&(i.highestStakeCleared[n.deck]=Math.max(Number(i.highestStakeCleared[n.deck]??-1),ot[n.stake].order)),ea(i)}function Rg(t,e){return t.discoveredJokers.includes(e)?t:{...t,discoveredJokers:[...t.discoveredJokers,e]}}function Pg(t,e){return t.discoveredBosses.includes(e)?t:{...t,discoveredBosses:[...t.discoveredBosses,e]}}function Pu(t,e){return t.discoveredTags.includes(e)?t:{...t,discoveredTags:[...t.discoveredTags,e]}}function cf(t){const e=t.trim();if(!e)return Math.max(1,Math.floor(Math.random()*2147483647));if(/^\d+$/.test(e))return Math.max(1,Number(e)>>>0);let n=2166136261;for(let i=0;i<e.length;i++)n^=e.charCodeAt(i),n=Math.imul(n,16777619);return Math.max(1,n>>>0)}function Cc(t){return`${Date.now().toString(36)}-${t.toString(36)}-${Math.floor(Math.random()*1e8).toString(36)}`}var Vl=1e3,oi=1001,Hl=1002,qt=1003,Lg=1004,kg=1005,_n=1006,Dg=1007,wc=1008,Ni=1009,Ig=1010,Ng=1011,uf=1012,Ug=1013,ur=1014,_o=1015,hr=1016,hf=1017,df=1018,ff=1020,Og=35902,Fg=35899,Bg=1021,zg=1022,$s=1023,Ks=1026,pf=1027,Vg=1028,mf=1029,io=1030,gf=1031,_f=1033,Hg=33776,Gg=33777,Wg=33778,Xg=33779,$g=35840,Kg=35841,jg=35842,qg=35843,Yg=36196,Jg=37492,Zg=37496,Qg=37488,e_=37489,t_=37490,n_=37491,i_=37808,r_=37809,s_=37810,a_=37811,o_=37812,l_=37813,c_=37814,u_=37815,h_=37816,d_=37817,f_=37818,p_=37819,m_=37820,g_=37821,__=36492,v_=36494,y_=36495,M_=36283,S_=36284,x_=36285,b_=36286,ro=2300,Gl=2301,Fo=2302,Lu=2303,ku=2400,Du=2401,Iu=2402,T_=3200;var jt="srgb",Wl="srgb-linear",so="linear",ao="srgb",Bo=7680;var E_=35044;var is=2e3;function C_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function w_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function js(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function A_(){const t=js("canvas");return t.style.display="block",t}var Nu={},rs=null;function Uu(...t){const e="THREE."+t.shift();rs?rs("log",e,...t):console.log(e,...t)}function vf(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Re(...t){t=vf(t);const e="THREE."+t.shift();if(rs)rs("warn",e,...t);else{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Le(...t){t=vf(t);const e="THREE."+t.shift();if(rs)rs("error",e,...t);else{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Xl(...t){const e=t.join(" ");e in Nu||(Nu[e]=!0,Re(...t))}function R_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var P_={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},pr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,$l=180/Math.PI;function ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function L_(t,e){return(t%e+e)%e}function Vo(t,e,n){return(1-n)*t+n*e}function ms(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Xe=class yf{static{yf.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=r[s+0],h=r[s+1],m=r[s+2],_=r[s+3];if(u!==_||o!==d||l!==h||c!==m){let f=o*d+l*h+c*m+u*_;f<0&&(d=-d,h=-h,m=-m,_=-_,f=-f);let g=1-a;if(f<.9995){const p=Math.acos(f),y=Math.sin(p);g=Math.sin(g*p)/y,a=Math.sin(a*p)/y,o=o*g+d*a,l=l*g+h*a,c=c*g+m*a,u=u*g+_*a}else{o=o*g+d*a,l=l*g+h*a,c=c*g+m*a,u=u*g+_*a;const p=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=p,l*=p,c*=p,u*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=r[s],d=r[s+1],h=r[s+2],m=r[s+3];return t[e]=a*m+c*u+o*h-l*d,t[e+1]=o*m+c*d+l*u-a*h,t[e+2]=l*m+c*h+a*d-o*u,t[e+3]=c*m-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),d=o(n/2),h=o(i/2),m=o(r/2);switch(s){case"XYZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"YXZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"ZXY":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"ZYX":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"YZX":this._x=d*c*u+l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u-d*h*m;break;case"XZY":this._x=d*c*u-l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u+d*h*m;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(s-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-l)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-i)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-e;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class Mf{static{Mf.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ou.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ho=new X,Ou=new mr,Fe=class Sf{static{Sf.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],_=i[8],f=r[0],g=r[3],p=r[6],y=r[1],T=r[4],b=r[7],E=r[2],A=r[5],R=r[8];return s[0]=a*f+o*y+l*E,s[3]=a*g+o*T+l*A,s[6]=a*p+o*b+l*R,s[1]=c*f+u*y+d*E,s[4]=c*g+u*T+d*A,s[7]=c*p+u*b+d*R,s[2]=h*f+m*y+_*E,s[5]=h*g+m*T+_*A,s[8]=h*p+m*b+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return e[0]=d*f,e[1]=(r*c-u*i)*f,e[2]=(o*i-r*a)*f,e[3]=h*f,e[4]=(u*n-r*l)*f,e[5]=(r*s-o*n)*f,e[6]=m*f,e[7]=(i*l-c*n)*f,e[8]=(a*n-i*s)*f,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Go.makeScale(e,n)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,n){return this.premultiply(Go.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Go=new Fe,Fu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k_(){const t={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=jr(r.r),r.g=jr(r.g),r.b=jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?so:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Wl]:{primaries:e,whitePoint:i,transfer:so,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:ao,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),t}var je=k_();function ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var xr,D_=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xr===void 0&&(xr=js("canvas")),xr.width=t.width,xr.height=t.height;const i=xr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=xr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ci(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},I_=0,Ac=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Wo(i[s].image)):r.push(Wo(i[s]))}else r=Wo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?D_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var N_=0,Xo=new X,Tn=class za extends pr{constructor(e=za.DEFAULT_IMAGE,n=za.DEFAULT_MAPPING,i=oi,r=oi,s=_n,a=wc,o=$s,l=Ni,c=za.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ta(),this.name="",this.source=new Ac(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Re(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=300;Tn.DEFAULT_ANISOTROPY=1;var Rt=class xf{static{xf.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],f=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,b=(m+1)/2,E=(p+1)/2,A=(u+h)/4,R=(d+f)/4,v=(_+g)/4;return T>b&&T>E?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=A/i,s=R/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=v/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-_)*(g-_)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(d-f)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},U_=class extends pr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Rt(0,0,t,e),this.scissorTest=!1,this.viewport=new Rt(0,0,t,e),this.textures=[];const i=new Tn({width:t,height:e,depth:n.depth}),r=n.count;for(let s=0;s<r;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ac(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends U_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bf=class extends Tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},O_=class extends Tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bt=class Kl{static{Kl.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,u,d,h,m,_,f,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,m,_,f,g)}set(e,n,i,r,s,a,o,l,c,u,d,h,m,_,f,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=_,p[11]=f,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),s=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,_=o*u,f=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-f*c,n[9]=-o*l,n[2]=f-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,f=c*d;n[0]=h+f*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=m*o-_,n[6]=f+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,f=c*d;n[0]=h-f*o,n[4]=-a*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*u,n[9]=f-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,_=o*u,f=o*d;n[0]=l*u,n[4]=_*c-m,n[8]=h*c+f,n[1]=l*d,n[5]=f*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,f=o*c;n[0]=l*u,n[4]=f-h*d,n[8]=_*d+m,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*d+_,n[10]=h-f*d}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,f=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+f,n[5]=a*u,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*u,n[10]=f*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F_,e,B_)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),vi.crossVectors(i,un),vi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),vi.crossVectors(i,un)),vi.normalize(),ha.crossVectors(un,vi),r[0]=vi.x,r[4]=ha.x,r[8]=un.x,r[1]=vi.y,r[5]=ha.y,r[9]=un.y,r[2]=vi.z,r[6]=ha.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],_=i[2],f=i[6],g=i[10],p=i[14],y=i[3],T=i[7],b=i[11],E=i[15],A=r[0],R=r[4],v=r[8],S=r[12],I=r[1],w=r[5],L=r[9],B=r[13],k=r[2],z=r[6],V=r[10],F=r[14],Y=r[3],ee=r[7],re=r[11],ge=r[15];return s[0]=a*A+o*I+l*k+c*Y,s[4]=a*R+o*w+l*z+c*ee,s[8]=a*v+o*L+l*V+c*re,s[12]=a*S+o*B+l*F+c*ge,s[1]=u*A+d*I+h*k+m*Y,s[5]=u*R+d*w+h*z+m*ee,s[9]=u*v+d*L+h*V+m*re,s[13]=u*S+d*B+h*F+m*ge,s[2]=_*A+f*I+g*k+p*Y,s[6]=_*R+f*w+g*z+p*ee,s[10]=_*v+f*L+g*V+p*re,s[14]=_*S+f*B+g*F+p*ge,s[3]=y*A+T*I+b*k+E*Y,s[7]=y*R+T*w+b*z+E*ee,s[11]=y*v+T*L+b*V+E*re,s[15]=y*S+T*B+b*F+E*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],f=e[7],g=e[11],p=e[15],y=l*m-c*h,T=o*m-c*d,b=o*h-l*d,E=a*m-c*u,A=a*h-l*u,R=a*d-o*u;return n*(f*y-g*T+p*b)-i*(_*y-g*E+p*A)+r*(_*T-f*E+p*R)-s*(_*b-f*A+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],f=e[13],g=e[14],p=e[15],y=n*o-i*a,T=n*l-r*a,b=n*c-s*a,E=i*l-r*o,A=i*c-s*o,R=r*c-s*l,v=u*f-d*_,S=u*g-h*_,I=u*p-m*_,w=d*g-h*f,L=d*p-m*f,B=h*p-m*g,k=y*B-T*L+b*w+E*I-A*S+R*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=(o*B-l*L+c*w)*z,e[1]=(r*L-i*B-s*w)*z,e[2]=(f*R-g*A+p*E)*z,e[3]=(h*A-d*R-m*E)*z,e[4]=(l*I-a*B-c*S)*z,e[5]=(n*B-r*I+s*S)*z,e[6]=(g*b-_*R-p*T)*z,e[7]=(u*R-h*b+m*T)*z,e[8]=(a*L-o*I+c*v)*z,e[9]=(i*I-n*L-s*v)*z,e[10]=(_*A-f*b+p*y)*z,e[11]=(d*b-u*A-m*y)*z,e[12]=(o*S-a*w-l*v)*z,e[13]=(n*w-i*S+r*v)*z,e[14]=(f*T-_*E-g*y)*z,e[15]=(u*E-d*T+h*y)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,_=s*d,f=a*u,g=a*d,p=o*d,y=l*c,T=l*u,b=l*d,E=i.x,A=i.y,R=i.z;return r[0]=(1-(f+p))*E,r[1]=(m+b)*E,r[2]=(_-T)*E,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(h+p))*A,r[6]=(g+y)*A,r[7]=0,r[8]=(_+T)*R,r[9]=(g-y)*R,r[10]=(1-(h+f))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),l=br.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Un.copy(this);const c=1/a,u=1/o,d=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,n.setFromRotationMatrix(Un),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=is,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),m=(i+r)/(i-r);let _,f;if(l)_=s/(a-s),f=a*s/(a-s);else if(o===2e3)_=-(a+s)/(a-s),f=-2*a*s/(a-s);else if(o===2001)_=-a/(a-s),f=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=is,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,f;if(l)_=1/(a-s),f=a/(a-s);else if(o===2e3)_=-2/(a-s),f=-(a+s)/(a-s);else if(o===2001)_=-1/(a-s),f=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},br=new X,Un=new bt,F_=new X(0,0,0),B_=new X(1,1,1),vi=new X,ha=new X,un=new X,zu=new bt,Vu=new mr,ss=class Tf{constructor(e=0,n=0,i=0,r=Tf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ss.DEFAULT_ORDER="XYZ";var Rc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},z_=0,Hu=new X,Tr=new mr,ei=new bt,da=new X,gs=new X,V_=new X,H_=new mr,Gu=new X(1,0,0),Wu=new X(0,1,0),Xu=new X(0,0,1),$u={type:"added"},G_={type:"removed"},Er={type:"childadded",child:null},$o={type:"childremoved",child:null},bn=class Va extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Va.DEFAULT_UP.clone();const e=new X,n=new ss,i=new mr,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Fe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Va.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Va.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Wu,e)}rotateZ(e){return this.rotateOnAxis(Xu,e)}translateOnAxis(e,n){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Wu,e)}translateZ(e){return this.translateOnAxis(Xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?da.copy(e):da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(gs,da,this.up):ei.lookAt(da,gs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(ei),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),Er.child=e,this.dispatchEvent(Er),Er.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(G_),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,H_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};bn.DEFAULT_UP=new X(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},W_={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),g=this._getHandJoint(l,_);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=.02,m=.005;l.inputState.pinching&&d>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function jo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var He=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,je.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=je.workingColorSpace){return this.r=t,this.g=e,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=je.workingColorSpace){if(t=L_(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=jo(s,r,t+1/3),this.g=jo(s,r,t),this.b=jo(s,r,t-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(t,e=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Re("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);Re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jt){const n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jt){return je.workingToColorSpace(Gt.copy(this),t),Math.round(qe(Gt.r*255,0,255))*65536+Math.round(qe(Gt.g*255,0,255))*256+Math.round(qe(Gt.b*255,0,255))}getHexString(t=jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=je.workingColorSpace){je.workingToColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=je.workingColorSpace){return je.workingToColorSpace(Gt.copy(this),e),t.r=Gt.r,t.g=Gt.g,t.b=Gt.b,t}getStyle(t=jt){je.workingToColorSpace(Gt.copy(this),t);const e=Gt.r,n=Gt.g,i=Gt.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(fa);const n=Vo(yi.h,fa.h,e),i=Vo(yi.s,fa.s,e),r=Vo(yi.l,fa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new He;He.NAMES=Ef;var X_=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},On=new X,ti=new X,qo=new X,ni=new X,Cr=new X,wr=new X,Ku=new X,Yo=new X,Jo=new X,Zo=new X,Qo=new Rt,el=new Rt,tl=new Rt,_s=class Or{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),ti.subVectors(i,n),qo.subVectors(e,n);const a=On.dot(On),o=On.dot(ti),l=On.dot(qo),c=ti.dot(ti),u=ti.dot(qo),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qo.setScalar(0),el.setScalar(0),tl.setScalar(0),Qo.fromBufferAttribute(e,n),el.fromBufferAttribute(e,i),tl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qo,s.x),a.addScaledVector(el,s.y),a.addScaledVector(tl,s.z),a}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),ti.subVectors(e,n),On.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),On.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Or.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Or.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Cr.subVectors(r,i),wr.subVectors(s,i),Yo.subVectors(e,i);const l=Cr.dot(Yo),c=wr.dot(Yo);if(l<=0&&c<=0)return n.copy(i);Jo.subVectors(e,r);const u=Cr.dot(Jo),d=wr.dot(Jo);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Cr,a);Zo.subVectors(e,s);const m=Cr.dot(Zo),_=wr.dot(Zo);if(_>=0&&m<=_)return n.copy(s);const f=m*c-l*_;if(f<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(wr,o);const g=u*_-m*d;if(g<=0&&d-u>=0&&m-_>=0)return Ku.subVectors(s,r),o=(d-u)/(d-u+(m-_)),n.copy(r).addScaledVector(Ku,o);const p=1/(g+f+h);return a=f*p,o=h*p,n.copy(i).addScaledVector(Cr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},na=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Fn):Fn.fromBufferAttribute(r,s),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),ma.subVectors(this.max,vs),Ar.subVectors(t.a,vs),Rr.subVectors(t.b,vs),Pr.subVectors(t.c,vs),Mi.subVectors(Rr,Ar),Si.subVectors(Pr,Rr),ji.subVectors(Ar,Pr);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-ji.z,ji.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,ji.z,0,-ji.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-ji.y,ji.x,0];return!nl(e,Ar,Rr,Pr,ma)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Ar,Rr,Pr,ma))?!1:(ga.crossVectors(Mi,Si),e=[ga.x,ga.y,ga.z],nl(e,Ar,Rr,Pr,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new X,new X,new X,new X,new X,new X,new X,new X],Fn=new X,pa=new na,Ar=new X,Rr=new X,Pr=new X,Mi=new X,Si=new X,ji=new X,vs=new X,ma=new X,ga=new X,qi=new X;function nl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){qi.fromArray(t,s);const o=r.x*Math.abs(qi.x)+r.y*Math.abs(qi.y)+r.z*Math.abs(qi.z),l=e.dot(qi),c=n.dot(qi),u=i.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ct=new X,_a=new Xe,$_=0,Mn=class extends pr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=E_,this.updateRanges=[],this.gpuType=_o,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ct.fromBufferAttribute(this,e),Ct.applyMatrix3(t),this.setXYZ(e,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ct.fromBufferAttribute(this,e),Ct.applyMatrix4(t),this.setXYZ(e,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ct.fromBufferAttribute(this,e),Ct.applyNormalMatrix(t),this.setXYZ(e,Ct.x,Ct.y,Ct.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ct.fromBufferAttribute(this,e),Ct.transformDirection(t),this.setXYZ(e,Ct.x,Ct.y,Ct.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},Cf=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},wf=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},ui=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},K_=new na,ys=new X,il=new X,vo=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):K_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);const e=ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(il)),this.expandByPoint(ys.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},j_=0,wn=new bt,rl=new bn,Lr=new X,hn=new na,Ms=new na,It=new X,mi=class Af extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?wf:Cf)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(hn.min,Ms.min),hn.expandByPoint(It),It.addVectors(hn.max,Ms.max),hn.expandByPoint(It)):(hn.expandByPoint(Ms.min),hn.expandByPoint(Ms.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),It.add(Lr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new X,l[v]=new X;const c=new X,u=new X,d=new X,h=new Xe,m=new Xe,_=new Xe,f=new X,g=new X;function p(v,S,I){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,I),h.fromBufferAttribute(s,v),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,I),u.sub(c),d.sub(c),m.sub(h),_.sub(h);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(f.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(w),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(w),o[v].add(f),o[S].add(f),o[I].add(f),l[v].add(g),l[S].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,S=y.length;v<S;++v){const I=y[v],w=I.start,L=I.count;for(let B=w,k=w+L;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new X,b=new X,E=new X,A=new X;function R(v){E.fromBufferAttribute(r,v),A.copy(E);const S=o[v];T.copy(S),T.sub(E.multiplyScalar(E.dot(S))).normalize(),b.crossVectors(A,S);const I=b.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,S=y.length;v<S;++v){const I=y[v],w=I.start,L=I.count;for(let B=w,k=w+L;B<k;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),f=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,f),a.fromBufferAttribute(n,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let f=0,g=l.length;f<g;f++){o.isInterleavedBufferAttribute?m=l[f]*o.data.stride+o.offset:m=l[f]*u;for(let p=0;p<u;p++)h[_++]=c[m++]}return new Mn(h,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Af,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},q_=0,cs=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Re(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ri=new X,sl=new X,va=new X,xi=new X,al=new X,ya=new X,ol=new X,Pc=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sl.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(sl);const r=t.distanceTo(e)*.5,s=-this.direction.dot(va),a=xi.dot(this.direction),o=-xi.dot(va),l=xi.lengthSq(),c=Math.abs(1-s*s);let u,d,h,m;if(c>0)if(u=s*o-a,d=s*a-o,m=r*c,u>=0)if(d>=-m)if(d<=m){const _=1/c;u*=_,d*=_,h=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d<=-m?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+l):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(sl).addScaledVector(va,d),h}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,r){al.subVectors(e,t),ya.subVectors(n,t),ol.crossVectors(al,ya);let s=this.direction.dot(ol),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;xi.subVectors(this.origin,t);const o=a*this.direction.dot(ya.crossVectors(xi,ya));if(o<0)return null;const l=a*this.direction.dot(al.cross(xi));if(l<0||o+l>s)return null;const c=-a*xi.dot(ol);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rf=class extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ju=new bt,Yi=new Pc,Ma=new vo,qu=new X,Sa=new X,xa=new X,ba=new X,ll=new X,Ta=new X,Yu=new X,Ea=new X,Yt=class extends bn{constructor(t=new mi,e=new Rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ta.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(ll.fromBufferAttribute(u,t),s?Ta.addScaledVector(ll,c):Ta.addScaledVector(ll.sub(e),c))}e.add(Ta)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(Ma.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ma,qu)===null||Yi.origin.distanceToSquared(qu)>(t.far-t.near)**2))&&(ju.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(ju),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const f=d[m],g=s[f.materialIndex],p=Math.max(f.start,h.start),y=Math.min(a.count,Math.min(f.start+f.count,h.start+h.count));for(let T=p,b=y;T<b;T+=3){const E=a.getX(T),A=a.getX(T+1),R=a.getX(T+2);i=Ca(this,g,t,n,l,c,u,E,A,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let f=m,g=_;f<g;f+=3){const p=a.getX(f),y=a.getX(f+1),T=a.getX(f+2);i=Ca(this,s,t,n,l,c,u,p,y,T),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const f=d[m],g=s[f.materialIndex],p=Math.max(f.start,h.start),y=Math.min(o.count,Math.min(f.start+f.count,h.start+h.count));for(let T=p,b=y;T<b;T+=3){const E=T,A=T+1,R=T+2;i=Ca(this,g,t,n,l,c,u,E,A,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let f=m,g=_;f<g;f+=3){const p=f,y=f+1,T=f+2;i=Ca(this,s,t,n,l,c,u,p,y,T),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}};function Y_(t,e,n,i,r,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ea);return c<n.near||c>n.far?null:{distance:c,point:Ea.clone(),object:t}}function Ca(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Sa),t.getVertexPosition(l,xa),t.getVertexPosition(c,ba);const u=Y_(t,e,n,i,Sa,xa,ba,Yu);if(u){const d=new X;_s.getBarycoord(Yu,Sa,xa,ba,d),r&&(u.uv=_s.getInterpolatedAttribute(r,o,l,c,d,new Xe)),s&&(u.uv1=_s.getInterpolatedAttribute(s,o,l,c,d,new Xe)),a&&(u.normal=_s.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};_s.getNormal(Sa,xa,ba,h.normal),u.face=h,u.barycoord=d}return u}var J_=class extends Tn{constructor(t=null,e=1,n=1,i,r,s,a,o,l=qt,c=qt,u,d){super(null,s,a,o,l,c,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cl=new X,Z_=new X,Q_=new Fe,Ei=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=cl.subVectors(n,e).cross(Z_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Q_.getNormalMatrix(t),i=this.coplanarPoint(cl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new vo,ev=new Xe(.5,.5),wa=new X,Lc=class{constructor(t=new Ei,e=new Ei,n=new Ei,i=new Ei,r=new Ei,s=new Ei){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=is,n=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],_=r[9],f=r[10],g=r[11],p=r[12],y=r[13],T=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,g-m,b-p).normalize(),i[1].setComponents(l+s,h+c,g+m,b+p).normalize(),i[2].setComponents(l+a,h+u,g+_,b+y).normalize(),i[3].setComponents(l-a,h-u,g-_,b-y).normalize(),n)i[4].setComponents(o,d,f,T).normalize(),i[5].setComponents(l-o,h-d,g-f,b-T).normalize();else if(i[4].setComponents(l-o,h-d,g-f,b-T).normalize(),e===2e3)i[5].setComponents(l+o,h+d,g+f,b+T).normalize();else if(e===2001)i[5].setComponents(o,d,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476+ev.distanceTo(t.center),Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wa.x=i.normal.x>0?t.max.x:t.min.x,wa.y=i.normal.y>0?t.max.y:t.min.y,wa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tv=class extends cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ju=new bt,jl=new Pc,Aa=new vo,Ra=new X,nv=class extends bn{constructor(t=new mi,e=new tv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;Ju.copy(i).invert(),jl.copy(t.ray).applyMatrix4(Ju);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let h=u,m=d;h<m;h++){const _=l.getX(h);Ra.fromBufferAttribute(c,_),Zu(Ra,_,o,i,t,e,this)}}else{const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let h=u,m=d;h<m;h++)Ra.fromBufferAttribute(c,h),Zu(Ra,h,o,i,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function Zu(t,e,n,i,r,s,a){const o=jl.distanceSqToPoint(t);if(o<n){const l=new X;jl.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pf=class extends Tn{constructor(t=[],e=301,n,i,r,s,a,o,l,c){super(t,e,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lf=class extends Tn{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},as=class extends Tn{constructor(t,e,n=ur,i,r,s,a=qt,o=qt,l,c=Ks,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:u},i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},iv=class extends as{constructor(t,e=ur,n=301,i,r,s=qt,a=qt,o,l=Ks){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,r,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},kf=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},kc=class Df extends mi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(d,2));function _(f,g,p,y,T,b,E,A,R,v,S){const I=b/R,w=E/v,L=b/2,B=E/2,k=A/2,z=R+1,V=v+1;let F=0,Y=0;const ee=new X;for(let re=0;re<V;re++){const ge=re*w-B;for(let Me=0;Me<z;Me++)ee[f]=(Me*I-L)*y,ee[g]=ge*T,ee[p]=k,c.push(ee.x,ee.y,ee.z),ee[f]=0,ee[g]=0,ee[p]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Me/R),d.push(1-re/v),F+=1}for(let re=0;re<v;re++)for(let ge=0;ge<R;ge++){const Me=h+ge+z*re,Je=h+ge+z*(re+1),Ne=h+(ge+1)+z*(re+1),K=h+(ge+1)+z*re;l.push(Me,Je,K),l.push(Je,Ne,K),Y+=6}o.addGroup(m,Y,S),m+=Y,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},cr=class If extends mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,m=[],_=[],f=[],g=[];for(let p=0;p<u;p++){const y=p*h-a;for(let T=0;T<c;T++){const b=T*d-s;_.push(b,-y,0),f.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,b=y+c*(p+1),E=y+1+c*(p+1),A=y+1+c*p;m.push(T,b,A),m.push(b,E,A)}this.setIndex(m),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(f,3)),this.setAttribute("uv",new ui(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.width,e.height,e.widthSegments,e.heightSegments)}};function os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Qu(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Qu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=os(t[n]);for(const r in i)e[r]=i[r]}return e}function Qu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function rv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Nf(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var sv={clone:os,merge:Kt},av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=rv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lv=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ql=class extends cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},cv=class extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uv=class extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pa(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var ia=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{e:{let s;t:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break t}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hv=class extends ia{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Du:r=t,a=2*e-n;break;case Iu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Du:s=t,o=2*n-e;break;case Iu:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}const l=(n-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-e)/(i-e),_=m*m,f=_*m,g=-d*f+2*d*_-d*m,p=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-h)*f+(1.5+h)*_+.5*m,T=h*f-h*_;for(let b=0;b!==a;++b)r[b]=g*s[c+b]+p*s[l+b]+y*s[o+b]+T*s[u+b];return r}},dv=class extends ia{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*u+s[o+d]*c;return r}},fv=class extends ia{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pv=class extends ia{interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.settings||this.DefaultSettings_,u=c.inTangents,d=c.outTangents;if(!u||!d){const _=(n-e)/(i-e),f=1-_;for(let g=0;g!==a;++g)r[g]=s[l+g]*f+s[o+g]*_;return r}const h=a*2,m=t-1;for(let _=0;_!==a;++_){const f=s[l+_],g=s[o+_],p=m*h+_*2,y=d[p],T=d[p+1],b=t*h+_*2,E=u[b],A=u[b+1];let R=(n-e)/(i-e),v,S,I,w,L;for(let B=0;B<8;B++){v=R*R,S=v*R,I=1-R,w=I*I,L=w*I;const k=L*e+3*w*R*y+3*I*v*E+S*i-n;if(Math.abs(k)<1e-10)break;const z=3*w*(y-e)+6*I*R*(E-y)+3*v*(i-E);if(Math.abs(z)<1e-10)break;R=R-k/z,R=Math.max(0,Math.min(1,R))}r[_]=L*f+3*w*R*T+3*I*v*A+S*g}return r}},Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pa(e,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Pa(t.times,Array),values:Pa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new pv(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case Gl:e=this.InterpolantFactoryMethodLinear;break;case Fo:e=this.InterpolantFactoryMethodSmooth;break;case Lu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Fo;case this.InterpolantFactoryMethodBezier:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){Le("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&w_(i))for(let a=0,o=i.length;a!==o;++a){const l=i[a];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fo,r=t.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{const c=a*n,u=c-n,d=c+n;for(let h=0;h!==n;++h){const m=e[c+h];if(m!==e[u+h]||m!==e[d+h]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];const c=a*n,u=s*n;for(let d=0;d!==n;++d)e[u+d]=e[c+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Gl;var ra=class extends Zn{constructor(t,e,n){super(t,e,n)}};ra.prototype.ValueTypeName="bool";ra.prototype.ValueBufferType=Array;ra.prototype.DefaultInterpolation=ro;ra.prototype.InterpolantFactoryMethodLinear=void 0;ra.prototype.InterpolantFactoryMethodSmooth=void 0;var mv=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};mv.prototype.ValueTypeName="color";var gv=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};gv.prototype.ValueTypeName="number";var _v=class extends ia{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let c=l+a;l!==c;l+=4)mr.slerpFlat(r,0,s,l-a,s,l,o);return r}},Uf=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new _v(this.times,this.values,this.getValueSize(),t)}};Uf.prototype.ValueTypeName="quaternion";Uf.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Zn{constructor(t,e,n){super(t,e,n)}};sa.prototype.ValueTypeName="string";sa.prototype.ValueBufferType=Array;sa.prototype.DefaultInterpolation=ro;sa.prototype.InterpolantFactoryMethodLinear=void 0;sa.prototype.InterpolantFactoryMethodSmooth=void 0;var vv=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};vv.prototype.ValueTypeName="vector";var ul={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(eh(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!eh(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function eh(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var yv=class{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const h=l[u],m=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mv=new yv,Dc=class{constructor(t){this.manager=t!==void 0?t:Mv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var kr=new WeakMap,Sv=class extends Dc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ul.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let u=kr.get(s);u===void 0&&(u=[],kr.set(s,u)),u.push({onLoad:e,onError:i})}return s}const a=js("img");function o(){c(),e&&e(this);const u=kr.get(this)||[];for(let d=0;d<u.length;d++){const h=u[d];h.onLoad&&h.onLoad(this)}kr.delete(this),r.manager.itemEnd(t)}function l(u){c(),i&&i(u),ul.remove(`image:${t}`);const d=kr.get(this)||[];for(let h=0;h<d.length;h++){const m=d[h];m.onError&&m.onError(u)}kr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ul.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},xv=class extends Dc{constructor(t){super(t)}load(t,e,n,i){const r=new Tn,s=new Sv(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Of=class extends bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new He(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},hl=new bt,th=new X,nh=new X,bv=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},La=new X,ka=new mr,Hn=new X,Ff=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,ka,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,ka,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(La,ka,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,ka,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new X,ih=new Xe,rh=new Xe,Rn=class extends Ff{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$l*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,ih,rh),e.subVectors(rh,ih)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ic=class extends Ff{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tv=class extends bv{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sh=class extends Of{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Tv}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ev=class extends Of{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Dr=-90,Ir=1,Cv=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rn(Dr,Ir,t,e);i.layers=this.layers,this.add(i);const r=new Rn(Dr,Ir,t,e);r.layers=this.layers,this.add(r);const s=new Rn(Dr,Ir,t,e);s.layers=this.layers,this.add(s);const a=new Rn(Dr,Ir,t,e);a.layers=this.layers,this.add(a);const o=new Rn(Dr,Ir,t,e);o.layers=this.layers,this.add(o);const l=new Rn(Dr,Ir,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wv=class extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Nc="\\[\\]\\.:\\/",Av=new RegExp("["+Nc+"]","g"),Uc="[^"+Nc+"]",Rv="[^"+Nc.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Uc),Lv=/(WCOD+)?/.source.replace("WCOD",Rv),kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),Dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),Iv=new RegExp("^"+Pv+Lv+kv+Dv+"$"),Nv=["material","materials","bones","map"],Uv=class{constructor(t,e,n){const i=n||vt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},vt=class Fr{constructor(e,n,i){this.path=n,this.parsedPath=i||Fr.parseTrackName(n),this.node=Fr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new Fr.Composite(e,n,i):new Fr(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Av,"")}static parseTrackName(e){const n=Iv.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Nv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=Fr.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=n.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Uv;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ah=new bt,Ov=class{constructor(t,e,n=0,i=1/0){this.ray=new Pc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return Yl(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Yl(t[i],this,n,e);return n.sort(oh),n}};function oh(t,e){return t.distance-e.distance}function Yl(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Yl(s[a],e,n,!0)}}var Fv=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Xx=class Bf{static{Bf.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function lh(t,e,n,i){const r=Bv(i);switch(n){case Bg:return t*e;case Vg:return t*e/r.components*r.byteLength;case mf:return t*e/r.components*r.byteLength;case io:return t*e*2/r.components*r.byteLength;case gf:return t*e*2/r.components*r.byteLength;case zg:return t*e*3/r.components*r.byteLength;case $s:return t*e*4/r.components*r.byteLength;case _f:return t*e*4/r.components*r.byteLength;case Hg:case Gg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wg:case Xg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kg:case qg:return Math.max(t,16)*Math.max(e,8)/4;case $g:case jg:return Math.max(t,8)*Math.max(e,8)/2;case Yg:case Jg:case Qg:case e_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zg:case t_:case n_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case i_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case r_:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case s_:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case a_:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case o_:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case l_:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case c_:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case u_:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case h_:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case d_:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case f_:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case p_:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case m_:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case g_:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case __:case v_:case y_:return Math.ceil(t/4)*Math.ceil(e/4)*16;case M_:case S_:return Math.ceil(t/4)*Math.ceil(e/4)*8;case x_:case b_:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Bv(t){switch(t){case Ni:case Ig:return{byteLength:1,components:1};case uf:case Ng:case hr:return{byteLength:2,components:1};case hf:case df:return{byteLength:2,components:4};case ur:case Ug:case _o:return{byteLength:4,components:1};case Og:case Fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function zf(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zv(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],f=d[m];f.start<=_.start+_.count+1?_.count=Math.max(_.count,f.start+f.count-_.start):(++h,d[h]=f)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const f=d[m];t.bufferSubData(c,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Be={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},he={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Kn={basic:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Kt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Kt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Kt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Kt([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Kt([he.lights,he.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Kn.physical={uniforms:Kt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Da={r:0,b:0,g:0},Vv=new bt,Vf=new Fe;Vf.set(-1,0,0,0,1,0,0,0,1);function Hv(t,e,n,i,r,s){const a=new He(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function _(y){let T=!1;const b=m(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),T=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function f(y,T){const b=m(T);b&&(b.isCubeTexture||b.mapping===306)?(c===void 0&&(c=new Yt(new kc(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:os(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vf),c.material.toneMapped=je.getTransfer(b.colorSpace)!==ao,(u!==b||d!==b.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Yt(new cr(2,2),new an({name:"BackgroundMaterial",uniforms:os(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=je.getTransfer(b.colorSpace)!==ao,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(Da,Nf(t)),n.buffers.color.setClear(Da.r,Da.g,Da.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:_,addToRenderList:f,dispose:p}}function Gv(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,L,B,k,z){let V=!1;const F=d(w,k,B,L);s!==F&&(s=F,c(s.object)),V=m(w,k,B,z),V&&_(w,k,B,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(w,L,B,k),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function d(w,L,B,k){const z=k.wireframe===!0;let V=i[L.id];V===void 0&&(V={},i[L.id]=V);const F=w.isInstancedMesh===!0?w.id:0;let Y=V[F];Y===void 0&&(Y={},V[F]=Y);let ee=Y[B.id];ee===void 0&&(ee={},Y[B.id]=ee);let re=ee[z];return re===void 0&&(re=h(l()),ee[z]=re),re}function h(w){const L=[],B=[],k=[];for(let z=0;z<n;z++)L[z]=0,B[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:k,object:w,attributes:{},index:null}}function m(w,L,B,k){const z=s.attributes,V=L.attributes;let F=0;const Y=B.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const re=z[ee];let ge=V[ee];if(ge===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),re===void 0||re.attribute!==ge||ge&&re.data!==ge.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function _(w,L,B,k){const z={},V=L.attributes;let F=0;const Y=B.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let re=V[ee];re===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(re=w.instanceColor));const ge={};ge.attribute=re,re&&re.data&&(ge.data=re.data),z[ee]=ge,F++}s.attributes=z,s.attributesNum=F,s.index=k}function f(){const w=s.newAttributes;for(let L=0,B=w.length;L<B;L++)w[L]=0}function g(w){p(w,0)}function p(w,L){const B=s.newAttributes,k=s.enabledAttributes,z=s.attributeDivisors;B[w]=1,k[w]===0&&(t.enableVertexAttribArray(w),k[w]=1),z[w]!==L&&(t.vertexAttribDivisor(w,L),z[w]=L)}function y(){const w=s.newAttributes,L=s.enabledAttributes;for(let B=0,k=L.length;B<k;B++)L[B]!==w[B]&&(t.disableVertexAttribArray(B),L[B]=0)}function T(w,L,B,k,z,V,F){F===!0?t.vertexAttribIPointer(w,L,B,z,V):t.vertexAttribPointer(w,L,B,k,z,V)}function b(w,L,B,k){f();const z=k.attributes,V=B.getAttributes(),F=L.defaultAttributeValues;for(const Y in V){const ee=V[Y];if(ee.location>=0){let re=z[Y];if(re===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),re!==void 0){const ge=re.normalized,Me=re.itemSize,Je=e.get(re);if(Je===void 0)continue;const Ne=Je.buffer,K=Je.type,le=Je.bytesPerElement,Se=K===t.INT||K===t.UNSIGNED_INT||re.gpuType===1013;if(re.isInterleavedBufferAttribute){const pe=re.data,Ae=pe.stride,Ue=re.offset;if(pe.isInstancedInterleavedBuffer){for(let ke=0;ke<ee.locationSize;ke++)p(ee.location+ke,pe.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ke=0;ke<ee.locationSize;ke++)g(ee.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ke=0;ke<ee.locationSize;ke++)T(ee.location+ke,Me/ee.locationSize,K,ge,Ae*le,(Ue+Me/ee.locationSize*ke)*le,Se)}else{if(re.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)p(ee.location+pe,re.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let pe=0;pe<ee.locationSize;pe++)g(ee.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let pe=0;pe<ee.locationSize;pe++)T(ee.location+pe,Me/ee.locationSize,K,ge,Me*le,Me/ee.locationSize*pe*le,Se)}}else if(F!==void 0){const ge=F[Y];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(ee.location,ge);break;case 3:t.vertexAttrib3fv(ee.location,ge);break;case 4:t.vertexAttrib4fv(ee.location,ge);break;default:t.vertexAttrib1fv(ee.location,ge)}}}}y()}function E(){S();for(const w in i){const L=i[w];for(const B in L){const k=L[B];for(const z in k){const V=k[z];for(const F in V)u(V[F].object),delete V[F];delete k[z]}}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const B in L){const k=L[B];for(const z in k){const V=k[z];for(const F in V)u(V[F].object),delete V[F];delete k[z]}}delete i[w.id]}function R(w){for(const L in i){const B=i[L];for(const k in B){const z=B[k];if(z[w.id]===void 0)continue;const V=z[w.id];for(const F in V)u(V[F].object),delete V[F];delete z[w.id]}}}function v(w){for(const L in i){const B=i[L],k=w.isInstancedMesh===!0?w.id:0,z=B[k];if(z!==void 0){for(const V in z){const F=z[V];for(const Y in F)u(F[Y].object),delete F[Y];delete z[V]}delete B[k],Object.keys(B).length===0&&delete i[L]}}}function S(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:f,enableAttribute:g,disableUnusedAttributes:y}}function Wv(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Xv(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==1023&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==1009&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!v)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:E,samples:A}}function $v(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ei,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,f=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,T=y*4;let b=p.clippingState||null;l.value=b,b=u(_,h,T,m);for(let E=0;E!==T;++E)b[E]=n[E];p.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,_){const f=d!==null?d.length:0;let g=null;if(f!==0){if(g=l.value,_!==!0||g===null){const p=m+f*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,b=m;T!==f;++T,b+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}}var ki=4,ch=[.125,.215,.35,.446,.526,.582],er=20,Kv=256,Ss=new Ic,uh=new He,dl=null,fl=0,pl=0,ml=!1,jv=new X,hh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:s=256,position:a=jv}=r;dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dl,fl,pl),this._renderer.xr.enabled=ml,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:hr,format:$s,colorSpace:Wl,depthBuffer:!1},i=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qv(r)),this._blurMaterial=Jv(r,t,e),this._ggxMaterial=Yv(r,t,e)}return i}_compileMaterial(t){const e=new Yt(new mi,t);this._renderer.compile(e,Ss)}_sceneToCubeUV(t,e,n,i,r){const s=new Rn(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(uh),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new kc,new Rf({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,h=d.material;let m=!1;const _=t.background;_?_.isColor&&(h.color.copy(_),t.background=null,m=!0):(h.color.copy(uh),m=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(s.up.set(0,a[f],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[f],r.y,r.z)):g===1?(s.up.set(0,0,a[f]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[f],r.z)):(s.up.set(0,a[f],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[f]));const p=this._cubeSize;Nr(i,g*p,f>2?p:0,p,p),l.setRenderTarget(i),m&&l.render(d,s),l.render(t,s)}l.toneMapping=u,l.autoClear=c,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;Nr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(s,Ss)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,h=this._sizeLods[n],m=3*h*(n>d-ki?n-d+ki:0),_=4*(this._cubeSize-h);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=d-e,Nr(r,m,_,3*h,2*h),i.setRenderTarget(r),i.render(a,Ss),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-n,Nr(t,m,_,3*h,2*h),i.setRenderTarget(t),i.render(a,Ss)}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,h=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*er-1),_=r/m,f=isFinite(r)?1+Math.floor(c*_):er;f>er&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${er}`);const g=[];let p=0;for(let b=0;b<er;++b){const E=b/_,A=Math.exp(-E*E/2);g.push(A),b===0?p+=A:b<f&&(p+=2*A)}for(let b=0;b<g.length;b++)g[b]=g[b]/p;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const T=this._sizeLods[i];Nr(e,3*T*(i>y-ki?i-y+ki:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(e),o.render(u,Ss)}};function qv(t){const e=[],n=[],i=[];let r=t;const s=t-ki+1+ch.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ki?l=ch[a-t+ki-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,f=3,g=2,p=1,y=new Float32Array(f*_*m),T=new Float32Array(g*_*m),b=new Float32Array(p*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,v=A>2?0:-1,S=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];y.set(S,f*_*A),T.set(h,g*_*A);const I=[A,A,A,A,A,A];b.set(I,p*_*A)}const E=new mi;E.setAttribute("position",new Mn(y,f)),E.setAttribute("uv",new Mn(T,g)),E.setAttribute("faceIndex",new Mn(b,p)),i.push(new Yt(E,null)),r>ki&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function dh(t,e,n){const i=new Yn(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Yv(t,e,n){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jv(t,e,n){const i=new Float32Array(er),r=new X(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fh(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ph(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yo(){return`

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
	`}var Hf=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kc(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Yt(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=_n),new Cv(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}};function Zv(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===303||m===304)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const f=new Hf(_.height);return f.fromEquirectangularTexture(t,h),e.set(h,f),h.addEventListener("dispose",c),o(f.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,_=m===303||m===304,f=m===301||m===302;if(_||f){let g=n.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new hh(t)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return _&&y&&y.height>0||f&&y&&l(y)?(i===null&&(i=new hh(t)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,m){return m===303?h.mapping=301:m===304&&(h.mapping=302),h}function l(h){let m=0;const _=6;for(let f=0;f<_;f++)h[f]!==void 0&&m++;return m===_}function c(h){const m=h.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Qv(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xl("WebGLRenderer: "+i+" extension not supported."),r}}}function e0(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(d){const h=[],m=d.index,_=d.attributes.position;let f=0;if(_===void 0)return;if(m!==null){const y=m.array;f=m.version;for(let T=0,b=y.length;T<b;T+=3){const E=y[T+0],A=y[T+1],R=y[T+2];h.push(E,A,A,R,R,E)}}else{const y=_.array;f=_.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const E=T+0,A=T+1,R=T+2;h.push(E,A,A,R,R,E)}}const g=new(_.count>=65535?wf:Cf)(h,1);g.version=f;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function t0(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,d*a,m),n.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let _=0;for(let f=0;f<m;f++)_+=h[f];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function n0(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function i0(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),f===!0&&(T=3);let b=o.attributes.position.count*T,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*E*4*d),R=new bf(A,b,E,d);R.type=_o,R.needsUpdate=!0;const v=T*4;for(let I=0;I<d;I++){const w=g[I],L=p[I],B=y[I],k=b*E*4*I;for(let z=0;z<w.count;z++){const V=z*v;m===!0&&(r.fromBufferAttribute(w,z),A[k+V+0]=r.x,A[k+V+1]=r.y,A[k+V+2]=r.z,A[k+V+3]=0),_===!0&&(r.fromBufferAttribute(L,z),A[k+V+4]=r.x,A[k+V+5]=r.y,A[k+V+6]=r.z,A[k+V+7]=0),f===!0&&(r.fromBufferAttribute(B,z),A[k+V+8]=r.x,A[k+V+9]=r.y,A[k+V+10]=r.z,A[k+V+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new Xe(b,E)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let f=0;f<c.length;f++)m+=c[f];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function r0(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var s0={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function a0(t,e,n,i,r){const s=new Yn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new as(e,n):void 0}),a=new Yn(e,n,{type:hr,depthBuffer:!1,stencilBuffer:!1}),o=new mi;o.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ui([0,2,0,0,2,0],2));const l=new lv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Yt(o,l),u=new Ic(-1,1,1,-1,0,1);let d=null,h=null,m=!1,_,f=null,g=[],p=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let b=0;b<g.length;b++){const E=g[b];E.setSize&&E.setSize(y,T)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;const T=s.width,b=s.height;for(let E=0;E<g.length;E++){const A=g[E];A.setSize&&A.setSize(T,b)}},this.begin=function(y,T){if(m||y.toneMapping===0&&g.length===0)return!1;if(f=T,T!==null){const b=T.width,E=T.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return p===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=0,!0},this.hasRenderPass=function(){return p},this.end=function(y,T){y.toneMapping=_,m=!0;let b=s,E=a;for(let A=0;A<g.length;A++){const R=g[A];if(R.enabled!==!1&&(R.render(y,E,b,T),R.needsSwap!==!1)){const v=b;b=E,E=v}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},je.getTransfer(d)==="srgb"&&(l.defines.SRGB_TRANSFER="");const A=s0[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(f),y.render(c,u),f=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Gf=new Tn,Jl=new as(1,1),Wf=new bf,Xf=new O_,$f=new Pf,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),yh=new Float32Array(4);function us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mh[r];if(s===void 0&&(s=new Float32Array(r),mh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mo(t,e){let n=gh[e];n===void 0&&(n=new Int32Array(e),gh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function o0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function l0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function c0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function u0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function h0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Lt(n,i))return;yh.set(i),t.uniformMatrix2fv(this.addr,!1,yh),kt(n,i)}}function d0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Lt(n,i))return;vh.set(i),t.uniformMatrix3fv(this.addr,!1,vh),kt(n,i)}}function f0(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Lt(n,i))return;_h.set(i),t.uniformMatrix4fv(this.addr,!1,_h),kt(n,i)}}function p0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function m0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function g0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function _0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function v0(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function y0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function M0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function S0(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function x0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jl.compareFunction=n.isReversedDepthBuffer()?518:515,s=Jl):s=Gf,n.setTexture2D(e||s,r)}function b0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xf,r)}function T0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$f,r)}function E0(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wf,r)}function C0(t){switch(t){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return h0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return y0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return E0}}function w0(t,e){t.uniform1fv(this.addr,e)}function A0(t,e){const n=us(e,this.size,2);t.uniform2fv(this.addr,n)}function R0(t,e){const n=us(e,this.size,3);t.uniform3fv(this.addr,n)}function P0(t,e){const n=us(e,this.size,4);t.uniform4fv(this.addr,n)}function L0(t,e){const n=us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function k0(t,e){const n=us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function D0(t,e){const n=us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function I0(t,e){t.uniform1iv(this.addr,e)}function N0(t,e){t.uniform2iv(this.addr,e)}function U0(t,e){t.uniform3iv(this.addr,e)}function O0(t,e){t.uniform4iv(this.addr,e)}function F0(t,e){t.uniform1uiv(this.addr,e)}function B0(t,e){t.uniform2uiv(this.addr,e)}function z0(t,e){t.uniform3uiv(this.addr,e)}function V0(t,e){t.uniform4uiv(this.addr,e)}function H0(t,e,n){const i=this.cache,r=e.length,s=Mo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Jl:a=Gf;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function G0(t,e,n){const i=this.cache,r=e.length,s=Mo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Xf,s[a])}function W0(t,e,n){const i=this.cache,r=e.length,s=Mo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||$f,s[a])}function X0(t,e,n){const i=this.cache,r=e.length,s=Mo(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Wf,s[a])}function $0(t){switch(t){case 5126:return w0;case 35664:return A0;case 35665:return R0;case 35666:return P0;case 35674:return L0;case 35675:return k0;case 35676:return D0;case 5124:case 35670:return I0;case 35667:case 35671:return N0;case 35668:case 35672:return U0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return z0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}var K0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C0(e.type)}},j0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}},q0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function Mh(t,e){t.seq.push(e),t.map[e.id]=e}function Y0(t,e,n){const i=t.name,r=i.length;for(gl.lastIndex=0;;){const s=gl.exec(i),a=gl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Mh(n,c===void 0?new K0(o,t,e):new j0(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new q0(o),Mh(n,u)),n=u}}}var Ha=class{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s);Y0(a,t.getUniformLocation(e,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}};function Sh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var J0=37297,Z0=0;function Q0(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var xh=new Fe;function ey(t){je._getMatrix(xh,je.workingColorSpace,t);const e=`mat3( ${xh.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case so:return[e,"LinearTransferOETF"];case ao:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Q0(t.getShaderSource(e),a)}else return r}function ty(t,e){const n=ey(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var ny={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function iy(t,e){const n=ny[e];return n===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ia=new X;function ry(){return je.getLuminanceCoefficients(Ia),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ia.x.toFixed(4)}, ${Ia.y.toFixed(4)}, ${Ia.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function ay(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oy(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Rs(t){return t!==""}function Th(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(t){return t.replace(ly,uy)}var cy=new Map;function uy(t,e){let n=Be[e];if(n===void 0){const i=cy.get(e);if(i!==void 0)n=Be[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zl(n)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(t){return t.replace(hy,dy)}function dy(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var fy={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function py(t){return fy[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var my={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function gy(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":my[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var _y={302:"ENVMAP_MODE_REFRACTION"};function vy(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":_y[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yy={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function My(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":yy[t.combine]||"ENVMAP_BLENDING_NONE"}function Sy(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function xy(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=py(n),c=gy(n),u=vy(n),d=My(n),h=Sy(n),m=sy(n),_=ay(s),f=r.createProgram();let g,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Rs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(g=[wh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[wh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Be.tonemapping_pars_fragment:"",n.toneMapping!==0?iy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,ty("linearToOutputTexel",n.outputColorSpace),ry(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Zl(a),a=Th(a,n),a=Eh(a,n),o=Zl(o),o=Th(o,n),o=Eh(o,n),a=Ch(a),o=Ch(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+g+a,b=y+p+o,E=Sh(r,r.VERTEX_SHADER,T),A=Sh(r,r.FRAGMENT_SHADER,b);r.attachShader(f,E),r.attachShader(f,A),n.index0AttributeName!==void 0?r.bindAttribLocation(f,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function R(w){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(f)||"",B=r.getShaderInfoLog(E)||"",k=r.getShaderInfoLog(A)||"",z=L.trim(),V=B.trim(),F=k.trim();let Y=!0,ee=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,f,E,A);else{const re=bh(r,E,"vertex"),ge=bh(r,A,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+re+`
`+ge)}else z!==""?Re("WebGLProgram: Program Info Log:",z):(V===""||F==="")&&(ee=!1);ee&&(w.diagnostics={runnable:Y,programLog:z,vertexShader:{log:V,prefix:g},fragmentShader:{log:F,prefix:p}})}r.deleteShader(E),r.deleteShader(A),v=new Ha(r,f),S=oy(r,f)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(f,J0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Z0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=A,this}var by=0,Ty=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ey(t),e.set(t,n)),n}},Ey=class{constructor(t){this.id=by++,this.code=t,this.usedTimes=0}};function Cy(t){return t===1030||t===37490||t===36285}function wy(t,e,n,i,r,s){const a=new Rc,o=new Ty,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,I,w,L,B){const k=w.fog,z=L.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||V,F),ee=Y&&Y.mapping===306?Y.image.height:null,re=m[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=ge!==void 0?ge.length:0;let Je=0;z.morphAttributes.position!==void 0&&(Je=1),z.morphAttributes.normal!==void 0&&(Je=2),z.morphAttributes.color!==void 0&&(Je=3);let Ne,K,le,Se;if(re){const De=Kn[re];Ne=De.vertexShader,K=De.fragmentShader}else Ne=v.vertexShader,K=v.fragmentShader,o.update(v),le=o.getVertexShaderID(v),Se=o.getFragmentShaderID(v);const pe=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Ue=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,tt=!!v.map,We=!!v.matcap,Pt=!!Y,Mt=!!v.aoMap,cn=!!v.lightMap,zt=!!v.bumpMap,Et=!!v.normalMap,N=!!v.displacementMap,$t=!!v.emissiveMap,$e=!!v.metalnessMap,Ze=!!v.roughnessMap,de=v.anisotropy>0,ht=v.clearcoat>0,Ce=v.dispersion>0,C=v.iridescence>0,M=v.sheen>0,H=v.transmission>0,q=de&&!!v.anisotropyMap,Z=ht&&!!v.clearcoatMap,ne=ht&&!!v.clearcoatNormalMap,ce=ht&&!!v.clearcoatRoughnessMap,U=C&&!!v.iridescenceMap,ae=C&&!!v.iridescenceThicknessMap,ue=M&&!!v.sheenColorMap,me=M&&!!v.sheenRoughnessMap,J=!!v.specularMap,Pe=!!v.specularColorMap,Oe=!!v.specularIntensityMap,Ke=H&&!!v.transmissionMap,ze=H&&!!v.thicknessMap,P=!!v.gradientMap,j=!!v.alphaMap,te=v.alphaTest>0,oe=!!v.alphaHash,xe=!!v.extensions;let Q=0;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Q=t.toneMapping);const be={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:K,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ke,batchingColor:ke&&L._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&L.instanceColor!==null,instancingMorph:Ue&&L.morphTexture!==null,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:We,envMap:Pt,envMapMode:Pt&&Y.mapping,envMapCubeUVHeight:ee,aoMap:Mt,lightMap:cn,bumpMap:zt,normalMap:Et,displacementMap:N,emissiveMap:$t,normalMapObjectSpace:Et&&v.normalMapType===1,normalMapTangentSpace:Et&&v.normalMapType===0,packedNormalMap:Et&&v.normalMapType===0&&Cy(v.normalMap.format),metalnessMap:$e,roughnessMap:Ze,anisotropy:de,anisotropyMap:q,clearcoat:ht,clearcoatMap:Z,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,dispersion:Ce,iridescence:C,iridescenceMap:U,iridescenceThicknessMap:ae,sheen:M,sheenColorMap:ue,sheenRoughnessMap:me,specularMap:J,specularColorMap:Pe,specularIntensityMap:Oe,transmission:H,transmissionMap:Ke,thicknessMap:ze,gradientMap:P,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:te,alphaHash:oe,combine:v.combine,mapUv:tt&&_(v.map.channel),aoMapUv:Mt&&_(v.aoMap.channel),lightMapUv:cn&&_(v.lightMap.channel),bumpMapUv:zt&&_(v.bumpMap.channel),normalMapUv:Et&&_(v.normalMap.channel),displacementMapUv:N&&_(v.displacementMap.channel),emissiveMapUv:$t&&_(v.emissiveMap.channel),metalnessMapUv:$e&&_(v.metalnessMap.channel),roughnessMapUv:Ze&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:Z&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:J&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Oe&&_(v.specularIntensityMap.channel),transmissionMapUv:Ke&&_(v.transmissionMap.channel),thicknessMapUv:ze&&_(v.thicknessMap.channel),alphaMapUv:j&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Et||de),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(tt||j),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&Et===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)==="srgb",decodeVideoTextureEmissive:$t&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(S,v),y(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function p(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function T(v){const S=m[v.type];let I;if(S){const w=Kn[S];I=sv.clone(w.uniforms)}else I=v.uniforms;return I}function b(v,S){let I=u.get(S);return I!==void 0?++I.usedTimes:(I=new xy(t,S,v,r),c.push(I),u.set(S,I)),I}function E(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:f,getProgramCacheKey:g,getUniforms:T,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:R}}function Ay(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Ry(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ah(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,f,g,p){let y=t[e];return y===void 0?(y={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:f,renderOrder:h.renderOrder,z:g,group:p},t[e]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=_,y.materialVariant=a(h),y.groupOrder=f,y.renderOrder=h.renderOrder,y.z=g,y.group=p),e++,y}function l(h,m,_,f,g,p){const y=o(h,m,_,f,g,p);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function c(h,m,_,f,g,p){const y=o(h,m,_,f,g,p);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):n.unshift(y)}function u(h,m){n.length>1&&n.sort(h||Ry),i.length>1&&i.sort(m||Ah),r.length>1&&r.sort(m||Ah)}function d(){for(let h=e,m=t.length;h<m;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function Py(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Rh,t.set(i,[a])):r>=s.length?(a=new Rh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ly(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new He};break;case"SpotLight":n={position:new X,direction:new X,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function ky(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Dy=0;function Iy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ny(t){const e=new Ly,n=ky(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new bt,a=new bt;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,_=0,f=0,g=0,p=0,y=0,T=0,b=0,E=0,A=0,R=0;c.sort(Iy);for(let S=0,I=c.length;S<I;S++){const w=c[S],L=w.color,B=w.intensity,k=w.distance;let z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===1030?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=L.r*B,d+=L.g*B,h+=L.b*B;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],B);R++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,Y=n.get(w);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,i.directionalShadow[m]=Y,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=w.shadow.matrix,y++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(L).multiplyScalar(B),V.distance=k,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[f]=V;const F=w.shadow;if(w.map&&(i.spotLightMap[E]=w.map,E++,F.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[f]=F.matrix,w.castShadow){const Y=n.get(w);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,i.spotShadow[f]=Y,i.spotShadowMap[f]=z,b++}f++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(L).multiplyScalar(B),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const F=w.shadow,Y=n.get(w);Y.shadowIntensity=F.intensity,Y.shadowBias=F.bias,Y.shadowNormalBias=F.normalBias,Y.shadowRadius=F.radius,Y.shadowMapSize=F.mapSize,Y.shadowCameraNear=F.camera.near,Y.shadowCameraFar=F.camera.far,i.pointShadow[_]=Y,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=w.shadow.matrix,T++}i.point[_]=V,_++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(B),V.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[p]=V,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==f||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==b||v.numSpotMaps!==E||v.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=f,i.rectArea.length=g,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,v.directionalLength=m,v.pointLength=_,v.spotLength=f,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=b,v.numSpotMaps=E,v.numLightProbes=R,i.version=Dy++)}function l(c,u){let d=0,h=0,m=0,_=0,f=0;const g=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const T=c[p];if(T.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),d++}else if(T.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),h++}else if(T.isHemisphereLight){const b=i.hemi[f];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(g),f++}}}return{setup:o,setupView:l,state:i}}function Ph(t){const e=new Ny(t),n=[],i=[],r=[];function s(h){d.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Uy(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ph(t),e.set(r,[o])):s>=a.length?(o=new Ph(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`,By=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],zy=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Lh=new bt,xs=new X,_l=new X;function Vy(t,e,n){let i=new Lc;const r=new Xe,s=new Xe,a=new Rt,o=new cv,l=new uv,c={},u=n.maxTextureSize,d={0:1,1:0,2:2},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Oy,fragmentShader:Fy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new mi;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Yt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(A,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===2&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const S=t.getRenderTarget(),I=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),L=t.state;L.setBlending(0),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,z=A.length;k<z;k++){const V=A[k],F=V.shadow;if(F===void 0){Re("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Y=F.getFrameExtents();r.multiply(Y),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,F.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ee,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===3){if(V.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Yn(r.x,r.y,{format:io,type:hr,minFilter:_n,magFilter:_n,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new as(r.x,r.y,_o),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=Ks,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=qt,F.map.depthTexture.magFilter=qt}else V.isPointLight?(F.map=new Hf(r.x),F.map.depthTexture=new iv(r.x,ur)):(F.map=new Yn(r.x,r.y),F.map.depthTexture=new as(r.x,r.y,ur)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=Ks,this.type===1?(F.map.depthTexture.compareFunction=ee?518:515,F.map.depthTexture.minFilter=_n,F.map.depthTexture.magFilter=_n):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=qt,F.map.depthTexture.magFilter=qt);F.camera.updateProjectionMatrix()}const re=F.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<re;ge++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(F.map),t.clear());const Me=F.getViewport(ge);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),L.viewport(a)}if(V.isPointLight){const Me=F.camera,Je=F.matrix,Ne=V.distance||Me.far;Ne!==Me.far&&(Me.far=Ne,Me.updateProjectionMatrix()),xs.setFromMatrixPosition(V.matrixWorld),Me.position.copy(xs),_l.copy(Me.position),_l.add(By[ge]),Me.up.copy(zy[ge]),Me.lookAt(_l),Me.updateMatrixWorld(),Je.makeTranslation(-xs.x,-xs.y,-xs.z),Lh.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Lh,Me.coordinateSystem,Me.reversedDepth)}else F.updateMatrices(V);i=F.getFrustum(),b(R,v,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===3&&y(F,v),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(S,I,w)};function y(A,R){const v=e.update(f);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(r.x,r.y,{format:io,type:hr})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,v,h,f,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,v,m,f,null)}function T(A,R,v,S){let I=null;const w=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)I=w;else if(I=v.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=I.uuid,B=R.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let z=k[B];z===void 0&&(z=I.clone(),k[B]=z,R.addEventListener("dispose",E)),I=z}if(I.visible=R.visible,I.wireframe=R.wireframe,S===3?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const L=t.properties.get(I);L.light=v}return I}function b(A,R,v,S,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===3)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const L=e.update(A),B=A.material;if(Array.isArray(B)){const k=L.groups;for(let z=0,V=k.length;z<V;z++){const F=k[z],Y=B[F.materialIndex];if(Y&&Y.visible){const ee=T(A,Y,S,I);A.onBeforeShadow(t,A,R,v,L,ee,F),t.renderBufferDirect(v,null,L,ee,A,F),A.onAfterShadow(t,A,R,v,L,ee,F)}}}else if(B.visible){const k=T(A,B,S,I);A.onBeforeShadow(t,A,R,v,L,k,null),t.renderBufferDirect(v,null,L,k,A,null),A.onAfterShadow(t,A,R,v,L,k,null)}}const w=A.children;for(let L=0,B=w.length;L<B;L++)b(w[L],R,v,S,I)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const v=c[R],S=A.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function Hy(t,e){function n(){let P=!1;const j=new Rt;let te=null;const oe=new Rt(0,0,0,0);return{setMask:function(xe){te!==xe&&!P&&(t.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){P=xe},setClear:function(xe,Q,be,De,Jt){Jt===!0&&(xe*=De,Q*=De,be*=De),j.set(xe,Q,be,De),oe.equals(j)===!1&&(t.clearColor(xe,Q,be,De),oe.copy(j))},reset:function(){P=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let P=!1,j=!1,te=null,oe=null,xe=null;return{setReversed:function(Q){if(j!==Q){const be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),j=Q;const De=xe;xe=null,this.setClear(De)}},getReversed:function(){return j},setTest:function(Q){Q?pe(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Q){te!==Q&&!P&&(t.depthMask(Q),te=Q)},setFunc:function(Q){if(j&&(Q=P_[Q]),oe!==Q){switch(Q){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Q}},setLocked:function(Q){P=Q},setClear:function(Q){xe!==Q&&(xe=Q,j&&(Q=1-Q),t.clearDepth(Q))},reset:function(){P=!1,te=null,oe=null,xe=null,j=!1}}}function r(){let P=!1,j=null,te=null,oe=null,xe=null,Q=null,be=null,De=null,Jt=null;return{setTest:function(ct){P||(ct?pe(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(ct){j!==ct&&!P&&(t.stencilMask(ct),j=ct)},setFunc:function(ct,zn,In){(te!==ct||oe!==zn||xe!==In)&&(t.stencilFunc(ct,zn,In),te=ct,oe=zn,xe=In)},setOp:function(ct,zn,In){(Q!==ct||be!==zn||De!==In)&&(t.stencilOp(ct,zn,In),Q=ct,be=zn,De=In)},setLocked:function(ct){P=ct},setClear:function(ct){Jt!==ct&&(t.clearStencil(ct),Jt=ct)},reset:function(){P=!1,j=null,te=null,oe=null,xe=null,Q=null,be=null,De=null,Jt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},m=new WeakMap,_=[],f=null,g=!1,p=null,y=null,T=null,b=null,E=null,A=null,R=null,v=new He(0,0,0),S=0,I=!1,w=null,L=null,B=null,k=null,z=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Y=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=Y>=2);let re=null,ge={};const Me=t.getParameter(t.SCISSOR_BOX),Je=t.getParameter(t.VIEWPORT),Ne=new Rt().fromArray(Me),K=new Rt().fromArray(Je);function le(P,j,te,oe){const xe=new Uint8Array(4),Q=t.createTexture();t.bindTexture(P,Q),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<te;be++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(j,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(j+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Q}const Se={};Se[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),a.setFunc(3),zt(!1),Et(1),pe(t.CULL_FACE),Mt(0);function pe(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function Ae(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function Ue(P,j){return h[P]!==j?(t.bindFramebuffer(P,j),h[P]=j,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=j),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=j),!0):!1}function ke(P,j){let te=_,oe=!1;if(P){te=m.get(j),te===void 0&&(te=[],m.set(j,te));const xe=P.textures;if(te.length!==xe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,be=xe.length;Q<be;Q++)te[Q]=t.COLOR_ATTACHMENT0+Q;te.length=xe.length,oe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,oe=!0);oe&&t.drawBuffers(te)}function tt(P){return f!==P?(t.useProgram(P),f=P,!0):!1}const We={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};We[103]=t.MIN,We[104]=t.MAX;const Pt={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function Mt(P,j,te,oe,xe,Q,be,De,Jt,ct){if(P===0){g===!0&&(Ae(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),P!==5){if(P!==p||ct!==I){if((y!==100||E!==100)&&(t.blendEquation(t.FUNC_ADD),y=100,E=100),ct)switch(P){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Le("WebGLState: Invalid blending: ",P);break}else switch(P){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",P);break}T=null,b=null,A=null,R=null,v.set(0,0,0),S=0,p=P,I=ct}return}xe=xe||j,Q=Q||te,be=be||oe,(j!==y||xe!==E)&&(t.blendEquationSeparate(We[j],We[xe]),y=j,E=xe),(te!==T||oe!==b||Q!==A||be!==R)&&(t.blendFuncSeparate(Pt[te],Pt[oe],Pt[Q],Pt[be]),T=te,b=oe,A=Q,R=be),(De.equals(v)===!1||Jt!==S)&&(t.blendColor(De.r,De.g,De.b,Jt),v.copy(De),S=Jt),p=P,I=!1}function cn(P,j){P.side===2?Ae(t.CULL_FACE):pe(t.CULL_FACE);let te=P.side===1;j&&(te=!te),zt(te),P.blending===1&&P.transparent===!1?Mt(0):Mt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),$t(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){w!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),w=P)}function Et(P){P!==0?(pe(t.CULL_FACE),P!==L&&(P===1?t.cullFace(t.BACK):P===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),L=P}function N(P){P!==B&&(F&&t.lineWidth(P),B=P)}function $t(P,j,te){P?(pe(t.POLYGON_OFFSET_FILL),(k!==j||z!==te)&&(k=j,z=te,a.getReversed()&&(j=-j),t.polygonOffset(j,te))):Ae(t.POLYGON_OFFSET_FILL)}function $e(P){P?pe(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function Ze(P){P===void 0&&(P=t.TEXTURE0+V-1),re!==P&&(t.activeTexture(P),re=P)}function de(P,j,te){te===void 0&&(re===null?te=t.TEXTURE0+V-1:te=re);let oe=ge[te];oe===void 0&&(oe={type:void 0,texture:void 0},ge[te]=oe),(oe.type!==P||oe.texture!==j)&&(re!==te&&(t.activeTexture(te),re=te),t.bindTexture(P,j||Se[P]),oe.type=P,oe.texture=j)}function ht(){const P=ge[re];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ce(){try{t.compressedTexImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function M(){try{t.texSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function H(){try{t.texSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function ne(){try{t.texStorage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function ce(){try{t.texStorage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function U(){try{t.texImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function ae(){try{t.texImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function ue(P){return d[P]!==void 0?d[P]:t.getParameter(P)}function me(P,j){d[P]!==j&&(t.pixelStorei(P,j),d[P]=j)}function J(P){Ne.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ne.copy(P))}function Pe(P){K.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),K.copy(P))}function Oe(P,j){let te=c.get(j);te===void 0&&(te=new WeakMap,c.set(j,te));let oe=te.get(P);oe===void 0&&(oe=t.getUniformBlockIndex(j,P.name),te.set(P,oe))}function Ke(P,j){const te=c.get(j).get(P);l.get(j)!==te&&(t.uniformBlockBinding(j,te,P.__bindingPointIndex),l.set(j,te))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ge={},h={},m=new WeakMap,_=[],f=null,g=!1,p=null,y=null,T=null,b=null,E=null,A=null,R=null,v=new He(0,0,0),S=0,I=!1,w=null,L=null,B=null,k=null,z=null,Ne.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Ae,bindFramebuffer:Ue,drawBuffers:ke,useProgram:tt,setBlending:Mt,setMaterial:cn,setFlipSided:zt,setCullFace:Et,setLineWidth:N,setPolygonOffset:$t,setScissorTest:$e,activeTexture:Ze,bindTexture:de,unbindTexture:ht,compressedTexImage2D:Ce,compressedTexImage3D:C,texImage2D:U,texImage3D:ae,pixelStorei:me,getParameter:ue,updateUBOMapping:Oe,uniformBlockBinding:Ke,texStorage2D:ne,texStorage3D:ce,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:J,viewport:Pe,reset:ze}}function Gy(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,d=new Set;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,M){return _?new OffscreenCanvas(C,M):js("canvas")}function g(C,M,H){let q=1;const Z=Ce(C);if((Z.width>H||Z.height>H)&&(q=H/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(q*Z.width),ce=Math.floor(q*Z.height);h===void 0&&(h=f(ne,ce));const U=M?f(ne,ce):h;return U.width=ne,U.height=ce,U.getContext("2d").drawImage(C,0,0,ne,ce),Re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ne+"x"+ce+")."),U}else return"data"in C&&Re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){t.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(C,M,H,q,Z,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=M;if(M===t.RED&&(H===t.FLOAT&&(U=t.R32F),H===t.HALF_FLOAT&&(U=t.R16F),H===t.UNSIGNED_BYTE&&(U=t.R8),H===t.UNSIGNED_SHORT&&ce&&(U=ce.R16_EXT),H===t.SHORT&&ce&&(U=ce.R16_SNORM_EXT)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(U=t.R8UI),H===t.UNSIGNED_SHORT&&(U=t.R16UI),H===t.UNSIGNED_INT&&(U=t.R32UI),H===t.BYTE&&(U=t.R8I),H===t.SHORT&&(U=t.R16I),H===t.INT&&(U=t.R32I)),M===t.RG&&(H===t.FLOAT&&(U=t.RG32F),H===t.HALF_FLOAT&&(U=t.RG16F),H===t.UNSIGNED_BYTE&&(U=t.RG8),H===t.UNSIGNED_SHORT&&ce&&(U=ce.RG16_EXT),H===t.SHORT&&ce&&(U=ce.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(U=t.RG8UI),H===t.UNSIGNED_SHORT&&(U=t.RG16UI),H===t.UNSIGNED_INT&&(U=t.RG32UI),H===t.BYTE&&(U=t.RG8I),H===t.SHORT&&(U=t.RG16I),H===t.INT&&(U=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(U=t.RGB8UI),H===t.UNSIGNED_SHORT&&(U=t.RGB16UI),H===t.UNSIGNED_INT&&(U=t.RGB32UI),H===t.BYTE&&(U=t.RGB8I),H===t.SHORT&&(U=t.RGB16I),H===t.INT&&(U=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(U=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(U=t.RGBA16UI),H===t.UNSIGNED_INT&&(U=t.RGBA32UI),H===t.BYTE&&(U=t.RGBA8I),H===t.SHORT&&(U=t.RGBA16I),H===t.INT&&(U=t.RGBA32I)),M===t.RGB&&(H===t.UNSIGNED_SHORT&&ce&&(U=ce.RGB16_EXT),H===t.SHORT&&ce&&(U=ce.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(U=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(U=t.R11F_G11F_B10F)),M===t.RGBA){const ae=ne?so:je.getTransfer(Z);H===t.FLOAT&&(U=t.RGBA32F),H===t.HALF_FLOAT&&(U=t.RGBA16F),H===t.UNSIGNED_BYTE&&(U=ae==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&ce&&(U=ce.RGBA16_EXT),H===t.SHORT&&ce&&(U=ce.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(U=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(U=t.RGB5_A1)}return(U===t.R16F||U===t.R32F||U===t.RG16F||U===t.RG32F||U===t.RGBA16F||U===t.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function E(C,M){let H;return C?M===null||M===1014||M===1020?H=t.DEPTH24_STENCIL8:M===1015?H=t.DEPTH32F_STENCIL8:M===1012&&(H=t.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===1014||M===1020?H=t.DEPTH_COMPONENT24:M===1015?H=t.DEPTH_COMPONENT32F:M===1012&&(H=t.DEPTH_COMPONENT16),H}function A(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),S(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function v(C){const M=C.target;M.removeEventListener("dispose",v),w(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const H=C.source,q=m.get(H);if(q){const Z=q[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(C),Object.keys(q).length===0&&m.delete(H)}i.remove(C)}function I(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const H=C.source,q=m.get(H);delete q[M.__cacheKey],a.memory.textures--}function w(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Z=0;Z<M.__webglFramebuffer[q].length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[q][Z]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let q=0,Z=H.length;q<Z;q++){const ne=i.get(H[q]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(H[q])}i.remove(C)}let L=0;function B(){L=0}function k(){return L}function z(C){L=C}function V(){const C=L;return C>=r.maxTextures&&Re("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Y(C,M){const H=i.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const q=C.image;if(q===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function ee(C,M){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ae(H,C,M);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function re(C,M){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Ae(H,C,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function ge(C,M){const H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ue(H,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const Me={[Vl]:t.REPEAT,[oi]:t.CLAMP_TO_EDGE,[Hl]:t.MIRRORED_REPEAT},Je={[qt]:t.NEAREST,[Lg]:t.NEAREST_MIPMAP_NEAREST,[kg]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[Dg]:t.LINEAR_MIPMAP_NEAREST,[wc]:t.LINEAR_MIPMAP_LINEAR},Ne={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function K(C,M){if(M.type===1015&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Me[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Me[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Me[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Je[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Je[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const q=M.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const ne=F(M);if(ne!==C.__cacheKey){Z[ne]===void 0&&(Z[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[ne].usedTimes++;const ce=Z[C.__cacheKey];ce!==void 0&&(Z[C.__cacheKey].usedTimes--,ce.usedTimes===0&&I(M)),C.__cacheKey=ne,C.__webglTexture=Z[ne].texture}return H}function Se(C,M,H){return Math.floor(Math.floor(C/H)/M)}function pe(C,M,H,q){const ne=C.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,H,q,M.data);else{ne.sort((me,J)=>me.start-J.start);let ce=0;for(let me=1;me<ne.length;me++){const J=ne[ce],Pe=ne[me],Oe=J.start+J.count,Ke=Se(Pe.start,M.width,4),ze=Se(J.start,M.width,4);Pe.start<=Oe+1&&Ke===ze&&Se(Pe.start+Pe.count-1,M.width,4)===Ke?J.count=Math.max(J.count,Pe.start+Pe.count-J.start):(++ce,ne[ce]=Pe)}ne.length=ce+1;const U=n.getParameter(t.UNPACK_ROW_LENGTH),ae=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let me=0,J=ne.length;me<J;me++){const Pe=ne[me],Oe=Math.floor(Pe.start/4),Ke=Math.ceil(Pe.count/4),ze=Oe%M.width,P=Math.floor(Oe/M.width),j=Ke,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,ze,P,j,te,H,q,M.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,U),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function Ae(C,M,H){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const Z=le(C,M),ne=M.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+H);const ce=i.get(ne);if(ne.version!==ce.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+H),!(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)){const j=je.getPrimaries(je.workingColorSpace),te=M.colorSpace===""?null:je.getPrimaries(M.colorSpace),oe=M.colorSpace===""||j===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let U=g(M.image,!1,r.maxTextureSize);U=ht(M,U);const ae=s.convert(M.format,M.colorSpace),ue=s.convert(M.type);let me=b(M.internalFormat,ae,ue,M.normalized,M.colorSpace,M.isVideoTexture);K(q,M);let J;const Pe=M.mipmaps,Oe=M.isVideoTexture!==!0,Ke=ce.__version===void 0||Z===!0,ze=ne.dataReady,P=A(M,U);if(M.isDepthTexture)me=E(M.format===pf,M.type),Ke&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,me,U.width,U.height):n.texImage2D(t.TEXTURE_2D,0,me,U.width,U.height,0,ae,ue,null));else if(M.isDataTexture)if(Pe.length>0){Oe&&Ke&&n.texStorage2D(t.TEXTURE_2D,P,me,Pe[0].width,Pe[0].height);for(let j=0,te=Pe.length;j<te;j++)J=Pe[j],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,J.width,J.height,ae,ue,J.data):n.texImage2D(t.TEXTURE_2D,j,me,J.width,J.height,0,ae,ue,J.data);M.generateMipmaps=!1}else Oe?(Ke&&n.texStorage2D(t.TEXTURE_2D,P,me,U.width,U.height),ze&&pe(M,U,ae,ue)):n.texImage2D(t.TEXTURE_2D,0,me,U.width,U.height,0,ae,ue,U.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,me,Pe[0].width,Pe[0].height,U.depth);for(let j=0,te=Pe.length;j<te;j++)if(J=Pe[j],M.format!==1023)if(ae!==null)if(Oe){if(ze)if(M.layerUpdates.size>0){const oe=lh(J.width,J.height,M.format,M.type);for(const xe of M.layerUpdates){const Q=J.data.subarray(xe*oe/J.data.BYTES_PER_ELEMENT,(xe+1)*oe/J.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,xe,J.width,J.height,1,ae,Q)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,J.width,J.height,U.depth,ae,J.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,me,J.width,J.height,U.depth,0,J.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?ze&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,J.width,J.height,U.depth,ae,ue,J.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,me,J.width,J.height,U.depth,0,ae,ue,J.data)}else{Oe&&Ke&&n.texStorage2D(t.TEXTURE_2D,P,me,Pe[0].width,Pe[0].height);for(let j=0,te=Pe.length;j<te;j++)J=Pe[j],M.format!==1023?ae!==null?Oe?ze&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,J.width,J.height,ae,J.data):n.compressedTexImage2D(t.TEXTURE_2D,j,me,J.width,J.height,0,J.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,J.width,J.height,ae,ue,J.data):n.texImage2D(t.TEXTURE_2D,j,me,J.width,J.height,0,ae,ue,J.data)}else if(M.isDataArrayTexture)if(Oe){if(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,me,U.width,U.height,U.depth),ze)if(M.layerUpdates.size>0){const j=lh(U.width,U.height,M.format,M.type);for(const te of M.layerUpdates){const oe=U.data.subarray(te*j/U.data.BYTES_PER_ELEMENT,(te+1)*j/U.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,U.width,U.height,1,ae,ue,oe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,ae,ue,U.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,U.width,U.height,U.depth,0,ae,ue,U.data);else if(M.isData3DTexture)Oe?(Ke&&n.texStorage3D(t.TEXTURE_3D,P,me,U.width,U.height,U.depth),ze&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,ae,ue,U.data)):n.texImage3D(t.TEXTURE_3D,0,me,U.width,U.height,U.depth,0,ae,ue,U.data);else if(M.isFramebufferTexture){if(Ke)if(Oe)n.texStorage2D(t.TEXTURE_2D,P,me,U.width,U.height);else{let j=U.width,te=U.height;for(let oe=0;oe<P;oe++)n.texImage2D(t.TEXTURE_2D,oe,me,j,te,0,ae,ue,null),j>>=1,te>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const j=t.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),U.parentNode!==j){j.appendChild(U),d.add(M),j.onpaint=be=>{const De=be.changedElements;for(const Jt of d)De.includes(Jt.image)&&(Jt.needsUpdate=!0)},j.requestPaint();return}const te=0,oe=t.RGBA,xe=t.RGBA,Q=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,te,oe,xe,Q,U),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&Ke){const j=Ce(Pe[0]);n.texStorage2D(t.TEXTURE_2D,P,me,j.width,j.height)}for(let j=0,te=Pe.length;j<te;j++)J=Pe[j],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ae,ue,J):n.texImage2D(t.TEXTURE_2D,j,me,ae,ue,J);M.generateMipmaps=!1}else if(Oe){if(Ke){const j=Ce(U);n.texStorage2D(t.TEXTURE_2D,P,me,j.width,j.height)}ze&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,ue,U)}else n.texImage2D(t.TEXTURE_2D,0,me,ae,ue,U);p(M)&&y(q),ce.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ue(C,M,H){if(M.image.length!==6)return;const q=le(C,M),Z=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const ne=i.get(Z);if(Z.version!==ne.__version||q===!0){n.activeTexture(t.TEXTURE0+H);const ce=je.getPrimaries(je.workingColorSpace),U=M.colorSpace===""?null:je.getPrimaries(M.colorSpace),ae=M.colorSpace===""||ce===U?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!ue&&!me?J[Q]=g(M.image[Q],!0,r.maxCubemapSize):J[Q]=me?M.image[Q].image:M.image[Q],J[Q]=ht(M,J[Q]);const Pe=J[0],Oe=s.convert(M.format,M.colorSpace),Ke=s.convert(M.type),ze=b(M.internalFormat,Oe,Ke,M.normalized,M.colorSpace),P=M.isVideoTexture!==!0,j=ne.__version===void 0||q===!0,te=Z.dataReady;let oe=A(M,Pe);K(t.TEXTURE_CUBE_MAP,M);let xe;if(ue){P&&j&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,ze,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){xe=J[Q].mipmaps;for(let be=0;be<xe.length;be++){const De=xe[be];M.format!==1023?Oe!==null?P?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,De.width,De.height,Oe,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,De.width,De.height,0,De.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,De.width,De.height,Oe,Ke,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,De.width,De.height,0,Oe,Ke,De.data)}}}else{if(xe=M.mipmaps,P&&j){xe.length>0&&oe++;const Q=Ce(J[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(me){P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,Oe,Ke,J[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,J[Q].width,J[Q].height,0,Oe,Ke,J[Q].data);for(let be=0;be<xe.length;be++){const De=xe[be].image[Q].image;P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,De.width,De.height,Oe,Ke,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,De.width,De.height,0,Oe,Ke,De.data)}}else{P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,Ke,J[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Oe,Ke,J[Q]);for(let be=0;be<xe.length;be++){const De=xe[be];P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Oe,Ke,De.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,Oe,Ke,De.image[Q])}}}p(M)&&y(t.TEXTURE_CUBE_MAP),ne.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ke(C,M,H,q,Z,ne){const ce=s.convert(H.format,H.colorSpace),U=s.convert(H.type),ae=b(H.internalFormat,ce,U,H.normalized,H.colorSpace),ue=i.get(M),me=i.get(H);if(me.__renderTarget=M,!ue.__hasExternalTextures){const J=Math.max(1,M.width>>ne),Pe=Math.max(1,M.height>>ne);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,ne,ae,J,Pe,M.depth,0,ce,U,null):n.texImage2D(Z,ne,ae,J,Pe,0,ce,U,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,me.__webglTexture,0,$e(M)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,me.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(C,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const q=M.depthTexture,Z=q&&q.isDepthTexture?q.type:null,ne=E(M.stencilBuffer,Z),ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(M),ne,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(M),ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,C)}else{const q=M.textures;for(let Z=0;Z<q.length;Z++){const ne=q[Z],ce=s.convert(ne.format,ne.colorSpace),U=s.convert(ne.type),ae=b(ne.internalFormat,ce,U,ne.normalized,ne.colorSpace);Ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(M),ae,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(M),ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(C,M,H){const q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),K(t.TEXTURE_CUBE_MAP,M.depthTexture);const ue=s.convert(M.depthTexture.format),me=s.convert(M.depthTexture.type);let J;M.depthTexture.format===1026?J=t.DEPTH_COMPONENT24:M.depthTexture.format===1027&&(J=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,J,M.width,M.height,0,ue,me,null)}}else Y(M.depthTexture,0);const ne=Z.__webglTexture,ce=$e(M),U=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ae=M.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===1026)Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,U,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ae,U,ne,0);else if(M.depthTexture.format===1027)Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,U,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ae,U,ne,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const M=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)We(M.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?We(M.__webglFramebuffer[0],C,0):We(M.__webglFramebuffer,C,0)}else if(H){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),tt(M.__webglDepthbuffer[q],C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ne)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),tt(M.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Mt(C,M,H){const q=i.get(C);M!==void 0&&ke(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Pt(C)}function cn(C){const M=C.texture,H=i.get(C),q=i.get(M);C.addEventListener("dispose",v);const Z=C.textures,ne=C.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,a.memory.textures++),ne){H.__webglFramebuffer=[];for(let U=0;U<6;U++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[U]=[];for(let ae=0;ae<M.mipmaps.length;ae++)H.__webglFramebuffer[U][ae]=t.createFramebuffer()}else H.__webglFramebuffer[U]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let U=0;U<M.mipmaps.length;U++)H.__webglFramebuffer[U]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ce)for(let U=0,ae=Z.length;U<ae;U++){const ue=i.get(Z[U]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Ze(C)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let U=0;U<Z.length;U++){const ae=Z[U];H.__webglColorRenderbuffer[U]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[U]);const ue=s.convert(ae.format,ae.colorSpace),me=s.convert(ae.type),J=b(ae.internalFormat,ue,me,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),Pe=$e(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,J,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,H.__webglColorRenderbuffer[U])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),tt(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),K(t.TEXTURE_CUBE_MAP,M);for(let U=0;U<6;U++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ke(H.__webglFramebuffer[U][ae],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,ae);else ke(H.__webglFramebuffer[U],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);p(M)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let U=0,ae=Z.length;U<ae;U++){const ue=Z[U],me=i.get(ue);let J=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,me.__webglTexture),K(J,ue),ke(H.__webglFramebuffer,C,ue,t.COLOR_ATTACHMENT0+U,J,0),p(ue)&&y(J)}n.unbindTexture()}else{let U=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(U=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(U,q.__webglTexture),K(U,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)ke(H.__webglFramebuffer[ae],C,M,t.COLOR_ATTACHMENT0,U,ae);else ke(H.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,U,0);p(M)&&y(U),n.unbindTexture()}C.depthBuffer&&Pt(C)}function zt(C){const M=C.textures;for(let H=0,q=M.length;H<q;H++){const Z=M[H];if(p(Z)){const ne=T(C),ce=i.get(Z).__webglTexture;n.bindTexture(ne,ce),y(ne),n.unbindTexture()}}}const Et=[],N=[];function $t(C){if(C.samples>0){if(Ze(C)===!1){const M=C.textures,H=C.width,q=C.height;let Z=t.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),U=M.length>1;if(U)for(let ue=0;ue<M.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ae=C.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),U){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const me=i.get(M[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,H,q,0,0,H,q,Z,t.NEAREST),l===!0&&(Et.length=0,N.length=0,Et.push(t.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Et.push(ne),N.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),U)for(let ue=0;ue<M.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const me=i.get(M[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function $e(C){return Math.min(r.maxSamples,C.samples)}function Ze(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function ht(C,M){const H=C.colorSpace,q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!=="srgb-linear"&&H!==""&&(je.getTransfer(H)==="srgb"?(q!==1023||Z!==1009)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",H)),M}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=k,this.setTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=re,this.setTextureCube=ge,this.rebindTextures=Mt,this.setupRenderTarget=cn,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Wy(t,e){function n(i,r=""){let s;const a=je.getTransfer(r);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,Ky=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new kf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new an({vertexShader:Xy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jy=class extends pr{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",f=new Ky,g={},p=e.getContextAttributes();let y=null,T=null;const b=[],E=[],A=new Xe;let R=null;const v=new Rn;v.viewport=new Rt;const S=new Rn;S.viewport=new Rt;const I=[v,S],w=new wv;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=b[K];return le===void 0&&(le=new Ko,b[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=b[K];return le===void 0&&(le=new Ko,b[K]=le),le.getGripSpace()},this.getHand=function(K){let le=b[K];return le===void 0&&(le=new Ko,b[K]=le),le.getHandSpace()};function k(K){const le=E.indexOf(K.inputSource);if(le===-1)return;const Se=b[le];Se!==void 0&&(Se.update(K.inputSource,K.frame,l||s),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let K=0;K<b.length;K++){const le=E[K];le!==null&&(E[K]=null,b[K].disconnect(le))}L=null,B=null,f.reset();for(const K in g)delete g[K];t.setRenderTarget(y),h=null,d=null,u=null,i=null,T=null,Ne.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Se=null,pe=null;p.depth&&(pe=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,le=p.stencil?pf:Ks,Se=p.stencil?ff:ur);const Ae={colorFormat:e.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Yn(d.textureWidth,d.textureHeight,{format:$s,type:Ni,depthTexture:new as(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,le),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Yn(h.framebufferWidth,h.framebufferHeight,{format:$s,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function V(K){for(let le=0;le<K.removed.length;le++){const Se=K.removed[le],pe=E.indexOf(Se);pe>=0&&(E[pe]=null,b[pe].disconnect(Se))}for(let le=0;le<K.added.length;le++){const Se=K.added[le];let pe=E.indexOf(Se);if(pe===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=E.length){E.push(Se),pe=Ue;break}else if(E[Ue]===null){E[Ue]=Se,pe=Ue;break}if(pe===-1)break}const Ae=b[pe];Ae&&Ae.connect(Se)}}const F=new X,Y=new X;function ee(K,le,Se){F.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(Se.matrixWorld);const pe=F.distanceTo(Y),Ae=le.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,ke=Ae[14]/(Ae[10]-1),tt=Ae[14]/(Ae[10]+1),We=(Ae[9]+1)/Ae[5],Pt=(Ae[9]-1)/Ae[5],Mt=(Ae[8]-1)/Ae[0],cn=(Ue[8]+1)/Ue[0],zt=ke*Mt,Et=ke*cn,N=pe/(-Mt+cn),$t=N*-Mt;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($t),K.translateZ(N),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const $e=ke+N,Ze=tt+N,de=zt-$t,ht=Et+(pe-$t),Ce=We*tt/Ze*$e,C=Pt*tt/Ze*$e;K.projectionMatrix.makePerspective(de,ht,Ce,C,$e,Ze),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let le=K.near,Se=K.far;f.texture!==null&&(f.depthNear>0&&(le=f.depthNear),f.depthFar>0&&(Se=f.depthFar)),w.near=S.near=v.near=le,w.far=S.far=v.far=Se,(L!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,B=w.far),w.layers.mask=K.layers.mask|6,v.layers.mask=w.layers.mask&-5,S.layers.mask=w.layers.mask&-3;const pe=K.parent,Ae=w.cameras;re(w,pe);for(let Ue=0;Ue<Ae.length;Ue++)re(Ae[Ue],pe);Ae.length===2?ee(w,v,S):w.projectionMatrix.copy(v.projectionMatrix),ge(K,w,pe)};function ge(K,le,Se){Se===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$l*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(K){o=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(w)},this.getCameraTexture=function(K){return g[K]};let Me=null;function Je(K,le){if(c=le.getViewerPose(l||s),m=le,c!==null){const Se=c.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let pe=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let Ue=0;Ue<Se.length;Ue++){const ke=Se[Ue];let tt=null;if(h!==null)tt=h.getViewport(ke);else{const Pt=u.getViewSubImage(d,ke);tt=Pt.viewport,Ue===0&&(t.setRenderTargetTextures(T,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(T))}let We=I[Ue];We===void 0&&(We=new Rn,We.layers.enable(Ue),We.viewport=new Rt,I[Ue]=We),We.matrix.fromArray(ke.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ke.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(tt.x,tt.y,tt.width,tt.height),Ue===0&&(w.matrix.copy(We.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pe===!0&&w.cameras.push(We)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ue=u.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&f.init(Ue,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Ue=0;Ue<Se.length;Ue++){const ke=Se[Ue].camera;if(ke){let tt=g[ke];tt||(tt=new kf,g[ke]=tt);const We=u.getCameraImage(ke);tt.sourceTexture=We}}}}for(let Se=0;Se<b.length;Se++){const pe=E[Se],Ae=b[Se];pe!==null&&Ae!==void 0&&Ae.update(pe,le,l||s)}Me&&Me(K,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}const Ne=new zf;Ne.setAnimationLoop(Je),this.setAnimationLoop=function(K){Me=K},this.dispose=function(){}}},qy=new bt,Kf=new Fe;Kf.set(-1,0,0,0,1,0,0,0,1);function Yy(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Nf(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,T,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&m(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),f(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,y,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,b=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Kf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=T*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function f(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Jy(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(_(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",g));const E=T.program;i.updateUBOMapping(y,E);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const T=d();y.__bindingPointIndex=T;const b=t.createBuffer(),E=y.__size,A=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],b=y.uniforms,E=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let A=0,R=b.length;A<R;A++){const v=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,I=v.length;S<I;S++){const w=v[S];if(m(w,A,S,E)===!0){const L=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let z=0;z<B.length;z++){const V=B[z],F=f(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,L+k,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):ArrayBuffer.isView(V)?w.__data.set(new V.constructor(V.buffer,V.byteOffset,w.__data.length)):(V.toArray(w.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,T,b,E){const A=y.value,R=T+"_"+b;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:ArrayBuffer.isView(A)?E[R]=A.slice():E[R]=A.clone(),!0;{const v=E[R];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return E[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(v.equals(A)===!1)return v.copy(A),!0}}return!1}function _(y){const T=y.uniforms;let b=0;const E=16;for(let R=0,v=T.length;R<v;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let I=0,w=S.length;I<w;I++){const L=S[I],B=Array.isArray(L.value)?L.value:[L.value];for(let k=0,z=B.length;k<z;k++){const V=B[k],F=f(V),Y=b%E,ee=Y%F.boundary,re=Y+ee;b+=ee,re!==0&&E-re<F.storage&&(b+=E-re),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=F.storage}}}const A=b%E;return A>0&&(b+=E-A),y.__size=b,y.__cache={},this}function f(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){const T=y.target;T.removeEventListener("dispose",g);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Zy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function Qy(){return Gn===null&&(Gn=new J_(Zy,16,16,io,hr),Gn.name="DFG_LUT",Gn.minFilter=_n,Gn.magFilter=_n,Gn.wrapS=oi,Gn.wrapT=oi,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var eM=class{constructor(t={}){const{canvas:e=A_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Ni}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=h,f=new Set([_f,gf,mf]),g=new Set([Ni,ur,uf,ff,hf,df]),p=new Uint32Array(4),y=new Int32Array(4),T=new X;let b=null,E=null;const A=[],R=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1,w=null;this._outputColorSpace=jt;let L=0,B=0,k=null,z=-1,V=null;const F=new Rt,Y=new Rt;let ee=null;const re=new He(0);let ge=0,Me=e.width,Je=e.height,Ne=1,K=null,le=null;const Se=new Rt(0,0,Me,Je),pe=new Rt(0,0,Me,Je);let Ae=!1;const Ue=new Lc;let ke=!1,tt=!1;const We=new bt,Pt=new X,Mt=new Rt,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Et(){return k===null?Ne:1}let N=n;function $t(x,O){return e.getContext(x,O)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r184"),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",be,!1),N===null){const O="webgl2";if(N=$t(O,x),N===null)throw $t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Le("WebGLRenderer: "+x.message),x}let $e,Ze,de,ht,Ce,C,M,H,q,Z,ne,ce,U,ae,ue,me,J,Pe,Oe,Ke,ze,P,j;function te(){$e=new Qv(N),$e.init(),ze=new Wy(N,$e),Ze=new Xv(N,$e,t,ze),de=new Hy(N,$e),Ze.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),ht=new n0(N),Ce=new Ay,C=new Gy(N,$e,de,Ce,Ze,ze,ht),M=new Zv(S),H=new zv(N),P=new Gv(N,H),q=new e0(N,H,ht,P),Z=new r0(N,q,H,P,ht),Pe=new i0(N,Ze,C),ue=new $v(Ce),ne=new wy(S,M,$e,Ze,P,ue),ce=new Yy(S,Ce),U=new Py,ae=new Uy($e),J=new Hv(S,M,de,Z,m,o),me=new Vy(S,Z,Ze),j=new Jy(N,ht,Ze,de),Oe=new Wv(N,$e,ht),Ke=new t0(N,$e,ht),ht.programs=ne.programs,S.capabilities=Ze,S.extensions=$e,S.properties=Ce,S.renderLists=U,S.shadowMap=me,S.state=de,S.info=ht}te(),_!==1009&&(v=new a0(_,e.width,e.height,i,r));const oe=new jy(S,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=$e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=$e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(x){x!==void 0&&(Ne=x,this.setSize(Me,Je,!1))},this.getSize=function(x){return x.set(Me,Je)},this.setSize=function(x,O,$=!0){if(oe.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=x,Je=O,e.width=Math.floor(x*Ne),e.height=Math.floor(O*Ne),$===!0&&(e.style.width=x+"px",e.style.height=O+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(Me*Ne,Je*Ne).floor()},this.setDrawingBufferSize=function(x,O,$){Me=x,Je=O,Ne=$,e.width=Math.floor(x*$),e.height=Math.floor(O*$),this.setViewport(0,0,x,O)},this.setEffects=function(x){if(_===1009){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let O=0;O<x.length;O++)if(x[O].isOutputPass===!0){Re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(F)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,O,$,W){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,O,$,W),de.viewport(F.copy(Se).multiplyScalar(Ne).round())},this.getScissor=function(x){return x.copy(pe)},this.setScissor=function(x,O,$,W){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,O,$,W),de.scissor(Y.copy(pe).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(x){de.setScissorTest(Ae=x)},this.setOpaqueSort=function(x){K=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,$=!0){let W=0;if(x){let G=!1;if(k!==null){const se=k.texture.format;G=f.has(se)}if(G){const se=k.texture.type,fe=g.has(se),_e=J.getClearColor(),ve=J.getClearAlpha(),Ie=_e.r,Ve=_e.g,Ge=_e.b;fe?(p[0]=Ie,p[1]=Ve,p[2]=Ge,p[3]=ve,N.clearBufferuiv(N.COLOR,0,p)):(y[0]=Ie,y[1]=Ve,y[2]=Ge,y[3]=ve,N.clearBufferiv(N.COLOR,0,y))}else W|=N.COLOR_BUFFER_BIT}O&&(W|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),w=x},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",be,!1),J.dispose(),U.dispose(),ae.dispose(),Ce.dispose(),M.dispose(),Z.dispose(),P.dispose(),j.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Kc),oe.removeEventListener("sessionend",jc),Xi.stop()};function xe(x){x.preventDefault(),Uu("WebGLRenderer: Context Lost."),I=!0}function Q(){Uu("WebGLRenderer: Context Restored."),I=!1;const x=ht.autoReset,O=me.enabled,$=me.autoUpdate,W=me.needsUpdate,G=me.type;te(),ht.autoReset=x,me.enabled=O,me.autoUpdate=$,me.needsUpdate=W,me.type=G}function be(x){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function De(x){const O=x.target;O.removeEventListener("dispose",De),Jt(O)}function Jt(x){ct(x),Ce.remove(x)}function ct(x){const O=Ce.get(x).programs;O!==void 0&&(O.forEach(function($){ne.releaseProgram($)}),x.isShaderMaterial&&ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,$,W,G,se){O===null&&(O=cn);const fe=G.isMesh&&G.matrixWorld.determinant()<0,_e=Mp(x,O,$,W,G);de.setMaterial(W,fe);let ve=$.index,Ie=1;if(W.wireframe===!0){if(ve=q.getWireframeAttribute($),ve===void 0)return;Ie=2}const Ve=$.drawRange,Ge=$.attributes.position;let we=Ve.start*Ie,at=(Ve.start+Ve.count)*Ie;se!==null&&(we=Math.max(we,se.start*Ie),at=Math.min(at,(se.start+se.count)*Ie)),ve!==null?(we=Math.max(we,0),at=Math.min(at,ve.count)):Ge!=null&&(we=Math.max(we,0),at=Math.min(at,Ge.count));const gt=at-we;if(gt<0||gt===1/0)return;P.setup(G,W,_e,$,ve);let _t,Qe=Oe;if(ve!==null&&(_t=H.get(ve),Qe=Ke,Qe.setIndex(_t)),G.isMesh)W.wireframe===!0?(de.setLineWidth(W.wireframeLinewidth*Et()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(G.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),de.setLineWidth(Vt*Et()),G.isLineSegments?Qe.setMode(N.LINES):G.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else G.isPoints?Qe.setMode(N.POINTS):G.isSprite&&Qe.setMode(N.TRIANGLES);if(G.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Qe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Vt=G._multiDrawStarts,ye=G._multiDrawCounts,Nn=G._multiDrawCount,et=ve?H.get(ve).bytesPerElement:1,Cn=Ce.get(W).currentProgram.getUniforms();for(let Vn=0;Vn<Nn;Vn++)Cn.setValue(N,"_gl_DrawID",Vn),Qe.render(Vt[Vn]/et,ye[Vn])}else if(G.isInstancedMesh)Qe.renderInstances(we,gt,G.count);else if($.isInstancedBufferGeometry){const Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Vt);Qe.renderInstances(we,gt,ye)}else Qe.render(we,gt)};function zn(x,O,$){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,la(x,O,$),x.side=0,x.needsUpdate=!0,la(x,O,$),x.side=2):la(x,O,$)}this.compile=function(x,O,$=null){$===null&&($=x),E=ae.get($),E.init(O),R.push(E),$.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),x!==$&&x.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const W=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const se=G.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const _e=se[fe];zn(_e,$,G),W.add(_e)}else zn(se,$,G),W.add(se)}),E=R.pop(),W},this.compileAsync=function(x,O,$=null){const W=this.compile(x,O,$);return new Promise(G=>{function se(){if(W.forEach(function(fe){Ce.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){G(x);return}setTimeout(se,10)}$e.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let In=null;function vp(x){In&&In(x)}function Kc(){Xi.stop()}function jc(){Xi.start()}const Xi=new zf;Xi.setAnimationLoop(vp),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(x){In=x,oe.setAnimationLoop(x),x===null?Xi.stop():Xi.start()},oe.addEventListener("sessionstart",Kc),oe.addEventListener("sessionend",jc),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;w!==null&&w.renderStart(x,O);const $=oe.enabled===!0&&oe.isPresenting===!0,W=v!==null&&(k===null||$)&&v.begin(S,k);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,O,k),E=ae.get(x,R.length),E.init(O),E.state.textureUnits=C.getTextureUnits(),R.push(E),We.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ue.setFromProjectionMatrix(We,is,O.reversedDepth),tt=this.localClippingEnabled,ke=ue.init(this.clippingPlanes,tt),b=U.get(x,A.length),b.init(),A.push(b),oe.enabled===!0&&oe.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&xo(se,O,-1/0,S.sortObjects)}xo(x,O,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(K,le),zt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,zt&&J.addToRenderList(b,x),this.info.render.frame++,ke===!0&&ue.beginShadows();const G=E.state.shadowsArray;if(me.render(G,x,O),ke===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&v.hasRenderPass())===!1){const se=b.opaque,fe=b.transmissive;if(E.setupLights(),O.isArrayCamera){const _e=O.cameras;if(fe.length>0)for(let ve=0,Ie=_e.length;ve<Ie;ve++){const Ve=_e[ve];Yc(se,fe,x,Ve)}zt&&J.render(x);for(let ve=0,Ie=_e.length;ve<Ie;ve++){const Ve=_e[ve];qc(b,x,Ve,Ve.viewport)}}else fe.length>0&&Yc(se,fe,x,O),zt&&J.render(x),qc(b,x,O)}k!==null&&B===0&&(C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k)),W&&v.end(S),x.isScene===!0&&x.onAfterRender(S,x,O),P.resetDefaultState(),z=-1,V=null,R.pop(),R.length>0?(E=R[R.length-1],C.setTextureUnits(E.state.textureUnits),ke===!0&&ue.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,w!==null&&w.renderEnd()};function xo(x,O,$,W){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)$=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ue.intersectsSprite(x)){W&&Mt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(We);const se=Z.update(x),fe=x.material;fe.visible&&b.push(x,se,fe,$,Mt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ue.intersectsObject(x))){const se=Z.update(x),fe=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Mt.copy(x.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Mt.copy(se.boundingSphere.center)),Mt.applyMatrix4(x.matrixWorld).applyMatrix4(We)),Array.isArray(fe)){const _e=se.groups;for(let ve=0,Ie=_e.length;ve<Ie;ve++){const Ve=_e[ve],Ge=fe[Ve.materialIndex];Ge&&Ge.visible&&b.push(x,se,Ge,$,Mt.z,Ve)}}else fe.visible&&b.push(x,se,fe,$,Mt.z,null)}}const G=x.children;for(let se=0,fe=G.length;se<fe;se++)xo(G[se],O,$,W)}function qc(x,O,$,W){const{opaque:G,transmissive:se,transparent:fe}=x;E.setupLightsView($),ke===!0&&ue.setGlobalState(S.clippingPlanes,$),W&&de.viewport(F.copy(W)),G.length>0&&oa(G,O,$),se.length>0&&oa(se,O,$),fe.length>0&&oa(fe,O,$),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Yc(x,O,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Ge=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Yn(1,1,{generateMipmaps:!0,type:Ge?hr:Ni,minFilter:wc,samples:Math.max(4,Ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const G=E.state.transmissionRenderTarget[W.id],se=W.viewport||F;G.setSize(se.z*S.transmissionResolutionScale,se.w*S.transmissionResolutionScale);const fe=S.getRenderTarget(),_e=S.getActiveCubeFace(),ve=S.getActiveMipmapLevel();S.setRenderTarget(G),S.getClearColor(re),ge=S.getClearAlpha(),ge<1&&S.setClearColor(16777215,.5),S.clear(),zt&&J.render($);const Ie=S.toneMapping;S.toneMapping=0;const Ve=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ke===!0&&ue.setGlobalState(S.clippingPlanes,W),oa(x,$,W),C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let we=0,at=O.length;we<at;we++){const{object:gt,geometry:_t,material:Qe,group:Vt}=O[we];if(Qe.side===2&&gt.layers.test(W.layers)){const ye=Qe.side;Qe.side=1,Qe.needsUpdate=!0,Jc(gt,$,W,_t,Qe,Vt),Qe.side=ye,Qe.needsUpdate=!0,Ge=!0}}Ge===!0&&(C.updateMultisampleRenderTarget(G),C.updateRenderTargetMipmap(G))}S.setRenderTarget(fe,_e,ve),S.setClearColor(re,ge),Ve!==void 0&&(W.viewport=Ve),S.toneMapping=Ie}function oa(x,O,$){const W=O.isScene===!0?O.overrideMaterial:null;for(let G=0,se=x.length;G<se;G++){const fe=x[G],{object:_e,geometry:ve,group:Ie}=fe;let Ve=fe.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),_e.layers.test($.layers)&&Jc(_e,O,$,ve,Ve,Ie)}}function Jc(x,O,$,W,G,se){x.onBeforeRender(S,O,$,W,G,se),x.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(S,O,$,W,x,se),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,S.renderBufferDirect($,O,W,G,x,se),G.side=0,G.needsUpdate=!0,S.renderBufferDirect($,O,W,G,x,se),G.side=2):S.renderBufferDirect($,O,W,G,x,se),x.onAfterRender(S,O,$,W,G,se)}function la(x,O,$){O.isScene!==!0&&(O=cn);const W=Ce.get(x),G=E.state.lights,se=E.state.shadowsArray,fe=G.state.version,_e=ne.getParameters(x,G.state,se,O,$,E.state.lightProbeGridArray),ve=ne.getProgramCacheKey(_e);let Ie=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;const Ve=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;W.envMap=M.get(x.envMap||W.environment,Ve),W.envMapRotation=W.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Ie===void 0&&(x.addEventListener("dispose",De),Ie=new Map,W.programs=Ie);let Ge=Ie.get(ve);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===fe)return Qc(x,_e),Ge}else _e.uniforms=ne.getUniforms(x),w!==null&&x.isNodeMaterial&&w.build(x,$,_e),x.onBeforeCompile(_e,S),Ge=ne.acquireProgram(_e,ve),Ie.set(ve,Ge),W.uniforms=_e.uniforms;const we=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=ue.uniform),Qc(x,_e),W.needsLights=xp(x),W.lightsStateVersion=fe,W.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=Ge,W.uniformsList=null,Ge}function Zc(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=Ha.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Qc(x,O){const $=Ce.get(x);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function yp(x,O){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;T.setFromMatrixPosition(O.matrixWorld);for(let $=0,W=x.length;$<W;$++){const G=x[$];if(G.texture!==null&&G.boundingBox.containsPoint(T))return G}return null}function Mp(x,O,$,W,G){O.isScene!==!0&&(O=cn),C.resetTextureUnits();const se=O.fog,fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,_e=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:je.workingColorSpace,ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ie=M.get(W.envMap||fe,ve),Ve=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,gt=!!$.morphAttributes.color;let _t=0;W.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_t=S.toneMapping);const Qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Vt=Qe!==void 0?Qe.length:0,ye=Ce.get(W),Nn=E.state.lights;if(ke===!0&&(tt===!0||x!==V)){const nt=x===V&&W.id===z;ue.setState(W,x,nt)}let et=!1;W.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Nn.state.version||ye.outputColorSpace!==_e||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==Ie||W.fog===!0&&ye.fog!==se||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ue.numPlanes||ye.numIntersection!==ue.numIntersection)||ye.vertexAlphas!==Ve||ye.vertexTangents!==Ge||ye.morphTargets!==we||ye.morphNormals!==at||ye.morphColors!==gt||ye.toneMapping!==_t||ye.morphTargetsCount!==Vt||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ye.__version=W.version);let Cn=ye.currentProgram;et===!0&&(Cn=la(W,O,G),w&&W.isNodeMaterial&&w.onUpdateProgram(W,Cn,ye));let Vn=!1,gi=!1,_r=!1;const it=Cn.getUniforms(),St=ye.uniforms;if(de.useProgram(Cn.program)&&(Vn=!0,gi=!0,_r=!0),W.id!==z&&(z=W.id,gi=!0),ye.needsLights){const nt=yp(E.state.lightProbeGridArray,G);ye.lightProbeGrid!==nt&&(ye.lightProbeGrid=nt,gi=!0)}if(Vn||V!==x){de.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),it.setValue(N,"projectionMatrix",x.projectionMatrix),it.setValue(N,"viewMatrix",x.matrixWorldInverse);const nt=it.map.cameraPosition;nt!==void 0&&nt.setValue(N,Pt.setFromMatrixPosition(x.matrixWorld)),Ze.logarithmicDepthBuffer&&it.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),V!==x&&(V=x,gi=!0,_r=!0)}if(ye.needsLights&&(Nn.state.directionalShadowMap.length>0&&it.setValue(N,"directionalShadowMap",Nn.state.directionalShadowMap,C),Nn.state.spotShadowMap.length>0&&it.setValue(N,"spotShadowMap",Nn.state.spotShadowMap,C),Nn.state.pointShadowMap.length>0&&it.setValue(N,"pointShadowMap",Nn.state.pointShadowMap,C)),G.isSkinnedMesh){it.setOptional(N,G,"bindMatrix"),it.setOptional(N,G,"bindMatrixInverse");const nt=G.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),it.setValue(N,"boneTexture",nt.boneTexture,C))}G.isBatchedMesh&&(it.setOptional(N,G,"batchingTexture"),it.setValue(N,"batchingTexture",G._matricesTexture,C),it.setOptional(N,G,"batchingIdTexture"),it.setValue(N,"batchingIdTexture",G._indirectTexture,C),it.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(N,"batchingColorTexture",G._colorsTexture,C));const _i=$.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Pe.update(G,$,Cn),(gi||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,it.setValue(N,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(St.envMapIntensity.value=O.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Qy()),gi){if(it.setValue(N,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&Sp(St,_r),se&&W.fog===!0&&ce.refreshFogUniforms(St,se),ce.refreshMaterialUniforms(St,W,Ne,Je,E.state.transmissionRenderTarget[x.id]),ye.needsLights&&ye.lightProbeGrid){const nt=ye.lightProbeGrid;St.probesSH.value=nt.texture,St.probesMin.value.copy(nt.boundingBox.min),St.probesMax.value.copy(nt.boundingBox.max),St.probesResolution.value.copy(nt.resolution)}Ha.upload(N,Zc(ye),St,C)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ha.upload(N,Zc(ye),St,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(N,"center",G.center),it.setValue(N,"modelViewMatrix",G.modelViewMatrix),it.setValue(N,"normalMatrix",G.normalMatrix),it.setValue(N,"modelMatrix",G.matrixWorld),W.uniformsGroups!==void 0){const nt=W.uniformsGroups;for(let ds=0,vr=nt.length;ds<vr;ds++){const eu=nt[ds];j.update(eu,Cn),j.bind(eu,Cn)}}return Cn}function Sp(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function xp(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,O,$){const W=Ce.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ce.get(x.texture).__webglTexture=O,Ce.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,O){const $=Ce.get(x);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0};const bp=N.createFramebuffer();this.setRenderTarget=function(x,O=0,$=0){k=x,L=O,B=$;let W=null,G=!1,se=!1;if(x){const fe=Ce.get(x);if(fe.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(N.FRAMEBUFFER,fe.__webglFramebuffer),F.copy(x.viewport),Y.copy(x.scissor),ee=x.scissorTest,de.viewport(F),de.scissor(Y),de.setScissorTest(ee),z=-1;return}else if(fe.__webglFramebuffer===void 0)C.setupRenderTarget(x);else if(fe.__hasExternalTextures)C.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ie=x.depthTexture;if(fe.__boundDepthTexture!==Ie){if(Ie!==null&&Ce.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(x)}}const _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(se=!0);const ve=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ve[O])?W=ve[O][$]:W=ve[O],G=!0):x.samples>0&&C.useMultisampledRTT(x)===!1?W=Ce.get(x).__webglMultisampledFramebuffer:Array.isArray(ve)?W=ve[$]:W=ve,F.copy(x.viewport),Y.copy(x.scissor),ee=x.scissorTest}else F.copy(Se).multiplyScalar(Ne).floor(),Y.copy(pe).multiplyScalar(Ne).floor(),ee=Ae;if($!==0&&(W=bp),de.bindFramebuffer(N.FRAMEBUFFER,W)&&de.drawBuffers(x,W),de.viewport(F),de.scissor(Y),de.setScissorTest(ee),G){const fe=Ce.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,fe.__webglTexture,$)}else if(se){const fe=O;for(let _e=0;_e<x.textures.length;_e++){const ve=Ce.get(x.textures[_e]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+_e,ve.__webglTexture,$,fe)}}else if(x!==null&&$!==0){const fe=Ce.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fe.__webglTexture,$)}z=-1},this.readRenderTargetPixels=function(x,O,$,W,G,se,fe,_e=0){if(!(x&&x.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){de.bindFramebuffer(N.FRAMEBUFFER,ve);try{const Ie=x.textures[_e],Ve=Ie.format,Ge=Ie.type;if(x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e),!Ze.textureFormatReadable(Ve)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ge)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-W&&$>=0&&$<=x.height-G&&N.readPixels(O,$,W,G,ze.convert(Ve),ze.convert(Ge),se)}finally{const Ie=k!==null?Ce.get(k).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(x,O,$,W,G,se,fe,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(O>=0&&O<=x.width-W&&$>=0&&$<=x.height-G){de.bindFramebuffer(N.FRAMEBUFFER,ve);const Ie=x.textures[_e],Ve=Ie.format,Ge=Ie.type;if(x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e),!Ze.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(O,$,W,G,ze.convert(Ve),ze.convert(Ge),0);const at=k!==null?Ce.get(k).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,at);const gt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await R_(N,gt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(we),N.deleteSync(gt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,O=null,$=0){const W=Math.pow(2,-$),G=Math.floor(x.image.width*W),se=Math.floor(x.image.height*W),fe=O!==null?O.x:0,_e=O!==null?O.y:0;C.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,fe,_e,G,se),de.unbindTexture()};const Tp=N.createFramebuffer(),Ep=N.createFramebuffer();this.copyTextureToTexture=function(x,O,$=null,W=null,G=0,se=0){let fe,_e,ve,Ie,Ve,Ge,we,at,gt;const _t=x.isCompressedTexture?x.mipmaps[se]:x.image;if($!==null)fe=$.max.x-$.min.x,_e=$.max.y-$.min.y,ve=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,Ve=$.min.y,Ge=$.isBox3?$.min.z:0;else{const St=Math.pow(2,-G);fe=Math.floor(_t.width*St),_e=Math.floor(_t.height*St),x.isDataArrayTexture?ve=_t.depth:x.isData3DTexture?ve=Math.floor(_t.depth*St):ve=1,Ie=0,Ve=0,Ge=0}W!==null?(we=W.x,at=W.y,gt=W.z):(we=0,at=0,gt=0);const Qe=ze.convert(O.format),Vt=ze.convert(O.type);let ye;O.isData3DTexture?(C.setTexture3D(O,0),ye=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),ye=N.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),ye=N.TEXTURE_2D),de.activeTexture(N.TEXTURE0),de.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),de.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),de.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const Nn=de.getParameter(N.UNPACK_ROW_LENGTH),et=de.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=de.getParameter(N.UNPACK_SKIP_PIXELS),Vn=de.getParameter(N.UNPACK_SKIP_ROWS),gi=de.getParameter(N.UNPACK_SKIP_IMAGES);de.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),de.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),de.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const _r=x.isDataArrayTexture||x.isData3DTexture,it=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const St=Ce.get(x),_i=Ce.get(O),nt=Ce.get(St.__renderTarget),ds=Ce.get(_i.__renderTarget);de.bindFramebuffer(N.READ_FRAMEBUFFER,nt.__webglFramebuffer),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let vr=0;vr<ve;vr++)_r&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(x).__webglTexture,G,Ge+vr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,se,gt+vr)),N.blitFramebuffer(Ie,Ve,fe,_e,we,at,fe,_e,N.DEPTH_BUFFER_BIT,N.NEAREST);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||Ce.has(x)){const St=Ce.get(x),_i=Ce.get(O);de.bindFramebuffer(N.READ_FRAMEBUFFER,Tp),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ep);for(let nt=0;nt<ve;nt++)_r?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,G,Ge+nt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,St.__webglTexture,G),it?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,_i.__webglTexture,se,gt+nt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_i.__webglTexture,se),G!==0?N.blitFramebuffer(Ie,Ve,fe,_e,we,at,fe,_e,N.COLOR_BUFFER_BIT,N.NEAREST):it?N.copyTexSubImage3D(ye,se,we,at,gt+nt,Ie,Ve,fe,_e):N.copyTexSubImage2D(ye,se,we,at,Ie,Ve,fe,_e);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else it?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(ye,se,we,at,gt,fe,_e,ve,Qe,Vt,_t.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,se,we,at,gt,fe,_e,ve,Qe,_t.data):N.texSubImage3D(ye,se,we,at,gt,fe,_e,ve,Qe,Vt,_t):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,se,we,at,fe,_e,Qe,Vt,_t.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,se,we,at,_t.width,_t.height,Qe,_t.data):N.texSubImage2D(N.TEXTURE_2D,se,we,at,fe,_e,Qe,Vt,_t);de.pixelStorei(N.UNPACK_ROW_LENGTH,Nn),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),de.pixelStorei(N.UNPACK_SKIP_ROWS,Vn),de.pixelStorei(N.UNPACK_SKIP_IMAGES,gi),se===0&&O.generateMipmaps&&N.generateMipmap(ye),de.unbindTexture()},this.initRenderTarget=function(x){Ce.get(x).__webglFramebuffer===void 0&&C.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?C.setTextureCube(x,0):x.isData3DTexture?C.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?C.setTexture2DArray(x,0):C.setTexture2D(x,0),de.unbindTexture()},this.resetState=function(){L=0,B=0,k=null,de.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=je._getDrawingBufferColorSpace(t),e.unpackColorSpace=je._getUnpackColorSpace()}},tM={hearts:"#e23b3b",diamonds:"#e23b3b",spades:"#1a1a1a",clubs:"#1a1a1a"},fn=256,Ot=360,kh=new Map,Zi=null;function nM(t){return`${t.rank}-${t.suit}-${t.enhancement}-${t.edition}-${t.seal}`}var Dh=new Map,bs=new Map;function iM(t,e){const n=Dh.get(t);if(n){e(n);return}const i=bs.get(t);if(i){i.push(e);return}bs.set(t,[e]);const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{Dh.set(t,r),bs.get(t)?.forEach(s=>s(r)),bs.delete(t)},r.onerror=()=>{bs.delete(t)},r.src=t}var rM={bonus:"rgba( 60, 120, 255, 0.28)",mult:"rgba(220,  55,  55, 0.28)",wild:"rgba(160,  70, 255, 0.28)",glass:"rgba(100, 210, 255, 0.28)",steel:"rgba(180, 192, 208, 0.38)",stone:"rgba(120, 120, 120, 0.50)",gold:"rgba(245, 195,  40, 0.38)",lucky:"rgba( 60, 200,  80, 0.28)"},sM={foil:"rgba(180, 220, 255, 0.30)",holographic:"rgba(200, 100, 255, 0.28)",polychrome:"rgba(255, 180,  60, 0.25)",negative:"rgba( 20,  20,  20, 0.55)"};function Ih(t,e,n,i){t.save(),Ui(t,6,6,n-12,i-12,22),t.clip(),t.fillStyle=e,t.fillRect(0,0,n,i),t.restore()}function aM(t,e,n,i,r,s){const a=e.getContext("2d");if(!a)return;a.clearRect(0,0,e.width,e.height),a.save(),Ui(a,6,6,e.width-12,e.height-12,22),a.clip(),a.drawImage(t,0,0,e.width,e.height),a.restore();const o=rM[i];o&&Ih(a,o,e.width,e.height);const l=sM[r];l&&Ih(a,l,e.width,e.height),a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)",Ui(a,6,6,e.width-12,e.height-12,22),a.stroke(),a.lineWidth=1,a.strokeStyle="rgba(255,255,255,0.18)",Ui(a,9,9,e.width-18,e.height-18,19),a.stroke(),s!=="none"&&(a.fillStyle=s==="gold"?"#ffd24a":s==="red"?"#ff5a5a":s==="blue"?"#54a8ff":"#c084ff",a.beginPath(),a.arc(e.width/2,e.height-50,22,0,Math.PI*2),a.fill(),a.lineWidth=3,a.strokeStyle="rgba(0,0,0,0.4)",a.stroke()),n.needsUpdate=!0}function jf(t,e,n,i,r,s){for(const a of["svg","png","webp","jpg"])iM(`${t}.${a}`,o=>aM(o,e,n,i,r,s))}function Ui(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function vl(t){const e=nM(t),n=kh.get(e);if(n)return n;const i=document.createElement("canvas");i.width=fn,i.height=Ot;const r=i.getContext("2d");if(r.fillStyle="#fdfdfd",Ui(r,6,6,fn-12,Ot-12,22),r.fill(),r.lineWidth=4,r.strokeStyle="#222",Ui(r,6,6,fn-12,Ot-12,22),r.stroke(),t.enhancement==="stone")r.fillStyle="#555",r.font="bold 56px serif",r.textAlign="center",r.fillText("STONE",fn/2,Ot/2+18);else{const o=tM[t.suit],l=to[t.rank],c=Xm[t.suit];r.fillStyle=o,r.textAlign="center",r.textBaseline="middle";const u=l==="10"?78:98,d=l==="10"?64:55;r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.save(),r.translate(fn,Ot),r.rotate(Math.PI),r.textAlign="center",r.textBaseline="middle",r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.restore(),r.textAlign="center",r.font="bold 160px serif",r.fillText(c,fn/2,Ot/2+32)}(o=>{t.seal!=="none"&&(o.fillStyle=t.seal==="gold"?"#ffd24a":t.seal==="red"?"#ff5a5a":t.seal==="blue"?"#54a8ff":"#c084ff",o.beginPath(),o.arc(fn/2,Ot-50,22,0,Math.PI*2),o.fill(),o.lineWidth=3,o.strokeStyle="rgba(0,0,0,0.4)",o.stroke())})(r);const a=new Lf(i);return a.colorSpace=jt,a.anisotropy=4,kh.set(e,a),t.enhancement!=="stone"&&jf(`/art/cards/${to[t.rank]}_${t.suit}`,i,a,t.enhancement,t.edition,t.seal),a}function Ql(){if(Zi)return Zi;const t=document.createElement("canvas");t.width=fn,t.height=Ot;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,fn,Ot);n.addColorStop(0,"#7a1622"),n.addColorStop(1,"#3a0a12"),e.fillStyle=n,Ui(e,6,6,fn-12,Ot-12,22),e.fill(),e.strokeStyle="#f0c060",e.lineWidth=3,Ui(e,18,18,fn-36,Ot-36,16),e.stroke(),e.strokeStyle="rgba(240,192,96,0.25)",e.lineWidth=1;for(let i=-Ot;i<fn;i+=14)e.beginPath(),e.moveTo(i,0),e.lineTo(i+Ot,Ot),e.stroke(),e.beginPath(),e.moveTo(i,Ot),e.lineTo(i+Ot,0),e.stroke();return e.fillStyle="#f0c060",e.textAlign="center",e.font="bold 96px serif",e.fillText("♠",fn/2,Ot/2+36),Zi=new Lf(t),Zi.colorSpace=jt,Zi.anisotropy=4,jf("/art/back/default",t,Zi,"none","base","none"),Zi}var Xn=1.2,Ti=1.68,Ps=.04,qf={value:0};function oM(t){qf.value+=t}var lM=class extends Li{card;selected=!1;hovered=!1;baseY=0;baseZ=0;baseRotZ=0;handIndex=0;faceMesh;backMesh;glowMesh;shadowMesh;glowMaterial;shadowMaterial;constructor(t){super(),this.card=t;const e=new cr(Xn,Ti),n=.5,i=new Xe(.06,-.08),r=new cr(Xn+n,Ti+n);this.shadowMaterial=new an({transparent:!0,depthWrite:!1,uniforms:{uSize:{value:new Xe(Xn+n,Ti+n)},uInner:{value:new Xe(Xn,Ti)},uRadius:{value:.18},uOffset:{value:i},uOpacity:{value:.55}},vertexShader:`
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
      `}),this.shadowMesh=new Yt(r,this.shadowMaterial),this.shadowMesh.position.z=-Ps*.5,this.shadowMesh.renderOrder=-2;const s=.35,a=new cr(Xn+s,Ti+s);this.glowMaterial=new an({transparent:!0,depthWrite:!1,blending:2,uniforms:{uOpacity:{value:0},uTime:qf,uColor:{value:new He(6994175)},uSize:{value:new Xe(Xn+s,Ti+s)},uInner:{value:new Xe(Xn,Ti)},uRadius:{value:.18}},vertexShader:`
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
      `}),this.glowMesh=new Yt(a,this.glowMaterial),this.glowMesh.position.z=-Ps*.25,this.glowMesh.renderOrder=-1,this.glowMesh.visible=!1;const o=new ql({map:vl(t),roughness:.55,metalness:.05,alphaTest:.5,emissive:new He(0),emissiveIntensity:0}),l=new ql({map:Ql(),roughness:.55,metalness:.05,alphaTest:.5});this.faceMesh=new Yt(e,o),this.faceMesh.position.z=Ps/2,this.backMesh=new Yt(e,l),this.backMesh.position.z=-Ps/2,this.backMesh.rotation.y=Math.PI,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this,this.add(this.shadowMesh,this.faceMesh,this.backMesh,this.glowMesh)}resetForCard(t){Ee.killTweensOf(this.position),Ee.killTweensOf(this.rotation),Ee.killTweensOf(this.scale),this.card=t,this.selected=!1,this.hovered=!1,this.baseY=0,this.baseZ=0,this.baseRotZ=0,this.handIndex=0,delete this.userData.keepAlive,this.position.set(0,0,0),this.rotation.set(0,0,0),this.scale.set(1,1,1),this.glowMesh.visible=!1,this.glowMaterial.uniforms.uOpacity.value=0;const e=this.faceMesh.material;e.map=vl(t),e.emissive.setHex(0),e.emissiveIntensity=0,e.needsUpdate=!0,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this}setFaceDown(t){const e=this.faceMesh.material;e.map=t?Ql():vl(this.card),e.needsUpdate=!0}moveTo(t,e=.45,n=0){this.baseY=t.y,this.baseZ=t.z??0,this.baseRotZ=t.rotZ??0,Ee.to(this.position,{x:t.x,y:this.baseY+(this.selected?.45:0)+(this.hovered?.2:0),z:this.baseZ+(this.selected?.6:0)+(this.hovered?.5:0),duration:e,delay:n,ease:"power3.out"}),Ee.to(this.rotation,{x:0,y:0,z:this.baseRotZ,duration:e,delay:n,ease:"power3.out"})}setHover(t){this.hovered!==t&&(this.hovered=t,Ee.to(this.position,{y:this.baseY+(this.selected?.45:0)+(t?.2:0),z:this.baseZ+(this.selected?.6:0)+(t?.5:0),duration:.18,ease:"power2.out"}),Ee.to(this.rotation,{x:t?-.05:0,duration:.18,ease:"power2.out"}))}setSelected(t){if(this.selected===t)return;this.selected=t,Ee.to(this.position,{y:this.baseY+(t?.45:0)+(this.hovered?.2:0),z:this.baseZ+(t?.6:0)+(this.hovered?.5:0),duration:.22,ease:"back.out(2)"});const e=this.glowMaterial.uniforms.uOpacity;t&&(this.glowMesh.visible=!0),Ee.to(e,{value:t?1:0,duration:t?.28:.22,ease:t?"power2.out":"power2.in",onComplete:()=>{this.selected||(this.glowMesh.visible=!1)}})}pulse(t=1.18,e=.35){const n=Ee.timeline();n.to(this.scale,{x:t*1.08,y:t*.92,z:t,duration:e*.25,ease:"power2.out"}),n.to(this.scale,{x:t*.95,y:t*1.05,z:t,duration:e*.25,ease:"sine.inOut"}),n.to(this.scale,{x:1,y:1,z:1,duration:e*.5,ease:"elastic.out(1, 0.5)"})}flash(t=16765514,e=.5){const n=this.faceMesh.material;n.emissive.setHex(t),Ee.fromTo(n,{emissiveIntensity:0},{emissiveIntensity:.9,duration:e*.3,ease:"power2.out",yoyo:!0,repeat:1})}dispose(){this.faceMesh.geometry.dispose(),this.faceMesh.material.dispose(),this.backMesh.material.dispose(),this.glowMesh.geometry.dispose(),this.glowMaterial.dispose(),this.shadowMesh.geometry.dispose(),this.shadowMaterial.dispose()}},Ur=400,cM=class{points;positions;colors;sizes;data=[];cursor=0;constructor(){const t=new mi;this.positions=new Float32Array(Ur*3),this.colors=new Float32Array(Ur*3),this.sizes=new Float32Array(Ur),t.setAttribute("position",new Mn(this.positions,3)),t.setAttribute("color",new Mn(this.colors,3)),t.setAttribute("size",new Mn(this.sizes,1));const e=new an({uniforms:{uPixel:{value:window.devicePixelRatio||1}},transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,vertexShader:`
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
      `});this.points=new nv(t,e),this.points.frustumCulled=!1,this.points.renderOrder=10;for(let n=0;n<Ur;n++)this.data[n]={active:!1,age:0,life:1,vx:0,vy:0,vz:0,gravity:0,startSize:1},this.sizes[n]=0}emit(t,e={}){const n=e.count??12,i=e.color??new He("#ffd24a"),r=e.spread??.8,s=e.speed??2.2,a=e.life??.9,o=e.size??14,l=e.gravity??-4.5,c=t.clone();this.points.parent&&this.points.parent.worldToLocal(c);for(let u=0;u<n;u++){const d=this.cursor;this.cursor=(this.cursor+1)%Ur;const h=this.data[d];h.active=!0,h.age=0,h.life=a*(.7+Math.random()*.6);const m=Math.random()*Math.PI*2,_=Math.random()*r;h.vx=Math.cos(m)*_*s*.5,h.vy=s*(.6+Math.random()*.8),h.vz=(Math.random()-.5)*r,h.gravity=l,h.startSize=o*(.7+Math.random()*.6),this.positions[d*3+0]=c.x,this.positions[d*3+1]=c.y,this.positions[d*3+2]=c.z,this.colors[d*3+0]=i.r,this.colors[d*3+1]=i.g,this.colors[d*3+2]=i.b,this.sizes[d]=h.startSize}}update(t){let e=!1;for(let n=0;n<Ur;n++){const i=this.data[n];if(!i.active)continue;if(i.age+=t,i.age>=i.life){i.active=!1,this.sizes[n]=0;continue}e=!0,i.vy+=i.gravity*t,this.positions[n*3+0]+=i.vx*t,this.positions[n*3+1]+=i.vy*t,this.positions[n*3+2]+=i.vz*t;const r=i.age/i.life;this.sizes[n]=i.startSize*(1-r)}(e||this.cursor!==0)&&(this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("size").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0)}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}},Ts="./";function Yf(t){const e=t.replace(/^\/+/,"");return Ts===""||Ts==="./"?`./${e}`:`${Ts.endsWith("/")?Ts:`${Ts}/`}${e}`}var uM=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],hM=["clubs","diamonds","hearts","spades"],Jf="art/ui/background.png",dM="art/back/default.svg",fM=uM.flatMap(t=>hM.map(e=>`art/cards/${t}_${e}.svg`)),pM=["art/ui/open-poker-logo.png",Jf,"art/ui/background.svg","art/ui/chip.svg","art/ui/coin.svg","art/ui/btn_discard.svg","art/ui/btn_new_run.svg","art/ui/btn_options.svg","art/ui/btn_play.svg","art/ui/btn_run_info.svg",dM,"art/back/default.png","art/blinds/small.svg","art/blinds/big.svg","art/blinds/boss.svg","art/jokers/joker_01.svg","art/jokers/joker_02.svg","art/jokers/joker_03.svg","art/jokers/joker_04.svg","art/jokers/joker_05.svg","art/consumables/planet.svg","art/consumables/spectral.svg","art/consumables/tarot.svg",...fM];function mM(t){return`art/cards/${to[t.rank]}_${t.suit}.svg`}function gM(t){return[...new Set(t)]}function Nh(t,e,n){return Math.max(e,Math.min(n,t))}function _M(){const t=new cr(2,2),e=new an({uniforms:{uTime:{value:0},uColorA:{value:new He("#107052")},uColorB:{value:new He("#063329")},uColorC:{value:new He("#29a36d")},uMap:{value:null},uUseMap:{value:0}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1}),n=new Yt(t,e);return n.renderOrder=-1,n.frustumCulled=!1,n}function vM(t){const e=new xv;let n=null,i=!1;const r=t.material;return(()=>{if(i)return;const a=Yf(Jf);e.load(a,o=>{if(i){o.dispose();return}o.colorSpace=jt,n=o,r.uniforms.uMap.value=o,r.uniforms.uUseMap.value=1},void 0,()=>{})})(),{dispose:()=>{i=!0,r.uniforms.uMap.value=null,r.uniforms.uUseMap.value=0,n?.dispose()}}}function yM(t){const e=new X_,n=new Rn(28,t.clientWidth/t.clientHeight,.1,100);n.position.set(0,1.2,12),n.lookAt(0,.6,0);const i=new eM({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(t.clientWidth,t.clientHeight),i.outputColorSpace=jt,t.appendChild(i.domElement);const r=_M();e.add(r);const s=vM(r);e.add(new Ev(16777215,.55));const a=new sh(16777215,1.1);a.position.set(2,4,5),e.add(a);const o=new sh(8964351,.4);o.position.set(-3,2,-2),e.add(o);const l=new Li;l.position.set(0,-.9,0),l.scale.setScalar(.7),e.add(l);const c=new Li;c.position.set(0,.4,0),c.scale.setScalar(.78),e.add(c);const u=new Li;u.position.set(4.6,-1.75,0),u.scale.setScalar(.68),u.rotation.z=-.04,e.add(u);const d=new cr(Xn,Ti),h=new ql({map:Ql(),roughness:.85,metalness:.05,alphaTest:.5}),m=12,_=[];for(let L=0;L<m;L++){const B=new Yt(d,h);B.position.set(L*.012,L*.018,L*Ps*.5),u.add(B),_.push(B)}const f=L=>{const B=Math.max(0,Math.min(m,Math.ceil(L/52*m)));for(let k=0;k<_.length;k++)_[k].visible=k<B};f(52);const g=new cM;e.add(g.points);const p=(L,B)=>{g.emit(L,B)},y=()=>new X,T=L=>new He(L),b=()=>{const L=Math.max(1,t.clientWidth),B=Math.max(1,t.clientHeight),k=Nh(Math.min(L/1440,B/900),.78,1),z=Nh((1920-L)/1920,0,.5)*1.15+(1-k)*.35,V=-.9+(1-k)*1.35,F=.4+(1-k)*.28,Y=4.6-(1-k)*.85,ee=-1.75+(1-k)*.45;l.position.set(z,V,0),l.scale.setScalar(.7*k),c.position.set(z,F,0),c.scale.setScalar(.78*k),u.position.set(Y,ee,0),u.scale.setScalar(.68*k)};b();const E=()=>{const L=t.clientWidth,B=t.clientHeight;i.setSize(L,B),n.aspect=L/B,n.updateProjectionMatrix(),b()};window.addEventListener("resize",E);const A=new Fv;let R=0;const v=()=>{const L=A.getDelta(),B=A.elapsedTime;r.material.uniforms.uTime.value=B,oM(L),g.update(L),i.render(e,n),R=requestAnimationFrame(v)};return R=requestAnimationFrame(v),{scene:e,camera:n,renderer:i,handGroup:l,playGroup:c,deckGroup:u,setDeckCount:f,particles:g,emitBurst:p,createVector3:y,createColor:T,getMetrics:()=>({frame:i.info.render.frame,calls:i.info.render.calls,triangles:i.info.render.triangles,points:i.info.render.points,lines:i.info.render.lines}),dispose:()=>{cancelAnimationFrame(R),window.removeEventListener("resize",E),s.dispose(),r.geometry.dispose(),r.material.dispose(),d.dispose(),h.dispose(),g.dispose(),i.dispose(),i.domElement.remove()},shake:(L=.15,B=.35)=>{const k={x:n.position.x,y:n.position.y},z=Ee.timeline({onComplete:()=>{n.position.x=k.x,n.position.y=k.y}}),V=6;for(let F=0;F<V;F++)z.to(n.position,{x:k.x+(Math.random()-.5)*L*2,y:k.y+(Math.random()-.5)*L*2,duration:B/V,ease:"sine.inOut"});z.to(n.position,{x:k.x,y:k.y,duration:.1,ease:"power2.out"})}}}function ec(t){if(t===0)return[];const e=Math.min(Xn*1.05,9/Math.max(t,1)),n=-((t-1)*e)/2,i=.04,r=.05;return Array.from({length:t},(s,a)=>{const o=n+a*e,l=a-(t-1)/2,c=-l*i;return{x:o,y:-Math.abs(l)*r*.5,z:a*.02,rotZ:c}})}function MM(t){const e=Xn*1.1,n=-((t-1)*e)/2;return Array.from({length:t},(i,r)=>({x:n+r*e,y:.7,z:0,rotZ:0}))}var nr=1e-4;function SM(t,e,n){return Math.max(e,Math.min(n,t))}function ln(t,e,n={}){const i=SM(n.pan??0,-1,1);if(Math.abs(i)<.001)return e;const r=t.createStereoPanner();return r.pan.value=i,r.connect(e),r}function Tt(t,e,n,i,r,s=t.currentTime){const a=t.createGain();return a.gain.setValueAtTime(nr,s),a.gain.exponentialRampToValueAtTime(Math.max(nr,r),s+n),a.gain.exponentialRampToValueAtTime(nr,s+n+i),a.connect(e),a}function hs(t,e,n,i,r,s,a=t.currentTime){const o=t.createGain();return o.gain.setValueAtTime(nr,a),o.gain.exponentialRampToValueAtTime(Math.max(nr,s),a+n),o.gain.setValueAtTime(Math.max(nr,s),a+n+i),o.gain.exponentialRampToValueAtTime(nr,a+n+i+r),o.connect(e),o}function on(t,e,n,i,r,s=0,a=t.currentTime){const o=t.createOscillator();return o.type=n,o.frequency.setValueAtTime(i,a),o.detune.setValueAtTime(s,a),o.connect(e),o.start(a),o.stop(a+r+.05),o}function xM(t,e){const n=Math.max(1,Math.floor(t.sampleRate*e)),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let s=0;s<n;s++)r[s]=Math.random()*2-1;return i}function En(t,e,n,i=t.currentTime){const r=t.createBufferSource();return r.buffer=xM(t,n),r.connect(e),r.start(i),r.stop(i+n+.05),r}function Dt(t,e,n,i,r=1){const s=t.createBiquadFilter();return s.type=n,s.frequency.value=i,s.Q.value=r,s.connect(e),s}function Oi(t,e,n,i,r,s,a=0){on(t,Tt(t,e,.002,r,i,s),"triangle",n,r,a,s).frequency.exponentialRampToValueAtTime(n*.985,s+r)}function bM(t,e,n={}){const i=n.volume??.07,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;En(t,Dt(t,Dt(t,Tt(t,s,.0015,.045,i,a),"highpass",550*r,.7),"lowpass",2100*r,.45),.055,a),on(t,Tt(t,s,.002,.035,i*.28,a),"sine",180*r,.04,n.detune??0,a)}function TM(t,e,n={}){const i=n.volume??.18,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;on(t,Dt(t,hs(t,s,.008,.018,.16,i,a),"lowpass",900*r,.65),"sine",138*r,.2,n.detune??0,a).frequency.exponentialRampToValueAtTime(220*r,a+.09),En(t,Dt(t,Tt(t,s,.003,.11,i*.42,a+.006),"bandpass",760*r,.9),.13,a+.006)}function EM(t,e,n={}){const i=n.volume??.14,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;on(t,Dt(t,hs(t,s,.007,.01,.15,i,a),"lowpass",760*r,.55),"sine",250*r,.18,n.detune??0,a).frequency.exponentialRampToValueAtTime(120*r,a+.12),En(t,Dt(t,Tt(t,s,.003,.08,i*.34,a+.01),"bandpass",560*r,.8),.1,a+.01)}function CM(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime,o=Dt(t,Tt(t,s,.001,.095,i,a),"bandpass",2600*r,1.15);o.frequency.exponentialRampToValueAtTime(930*r,a+.11),En(t,o,.12,a),on(t,Tt(t,s,.002,.06,i*.16,a+.045),"triangle",92*r,.075,n.detune??0,a+.045)}function wM(t,e,n={}){const i=n.volume??.28,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime,o=Dt(t,Tt(t,s,.004,.13,i,a),"bandpass",2900*r,1.8);o.frequency.exponentialRampToValueAtTime(760*r,a+.14),En(t,o,.15,a),on(t,Tt(t,s,.001,.05,i*.34,a+.035),"triangle",820*r,.06,(n.detune??0)+7,a+.035)}function AM(t,e,n={}){const i=n.volume??.36,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime,o=Dt(t,hs(t,s,.012,.03,.29,i,a),"lowpass",420*r,1.2);o.frequency.exponentialRampToValueAtTime(2600*r,a+.18),o.frequency.exponentialRampToValueAtTime(420*r,a+.34),En(t,o,.36,a),on(t,Tt(t,s,.015,.22,i*.18,a+.02),"sine",86*r,.26,n.detune??0,a+.02).frequency.exponentialRampToValueAtTime(118*r,a+.2)}function RM(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime,o=Dt(t,Dt(t,hs(t,s,.004,.015,.25,i,a),"highpass",180*r,.7),"lowpass",4200*r,.9);o.frequency.exponentialRampToValueAtTime(380*r,a+.28),En(t,o,.31,a),on(t,Tt(t,s,.006,.18,i*.2,a+.04),"triangle",160*r,.22,n.detune??0,a+.04).frequency.exponentialRampToValueAtTime(78*r,a+.22)}function PM(t,e,n={}){const i=n.volume??.16,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;Oi(t,s,930*r,i,.055,a,(n.detune??0)-5),Oi(t,s,1570*r,i*.42,.04,a+.002,(n.detune??0)+8),En(t,Dt(t,Tt(t,s,.001,.025,i*.42,a),"highpass",1700*r,.5),.032,a)}function LM(t,e,n={}){const i=n.volume??.17,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;Oi(t,s,720*r,i*.65,.07,a,n.detune??0),Oi(t,s,1440*r,i*.54,.06,a+.004,(n.detune??0)+11),Oi(t,s,2160*r,i*.28,.05,a+.008,(n.detune??0)-9)}function kM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;[330,440,660].forEach((o,l)=>{const c=a+l*.045;on(t,Tt(t,s,.004,.22-l*.035,i*(1-l*.16),c),l===0?"triangle":"sine",o*r,.24,n.detune??0,c).frequency.exponentialRampToValueAtTime(o*1.08*r,c+.14)}),En(t,Dt(t,Tt(t,s,.003,.16,i*.34,a+.035),"highpass",2400*r,.45),.18,a+.035)}function DM(t,e,n={}){const i=n.volume??.42,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;[0,.09].forEach((o,l)=>{const c=a+o,u=(l===0?1040:1320)*r;Oi(t,s,u,i*.8,.32,c,(n.detune??0)+l*6),Oi(t,s,u*1.52,i*.38,.24,c+.006,(n.detune??0)-l*8),En(t,Dt(t,Tt(t,s,.001,.055,i*.34,c),"highpass",2600*r,.7),.07,c)}),[523.25,659.25,783.99,1046.5].forEach((o,l)=>{const c=a+.16+l*.055;Oi(t,s,o*r,i*.42,.28,c,n.detune??0)})}function IM(t,e,n={}){const i=n.volume??.48,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime,o=[392,523.25,659.25,783.99,1046.5];o.forEach((l,c)=>{const u=a+c*.095,d=c===o.length-1?.65:.42;on(t,Dt(t,hs(t,s,.01,.04,d,i*(c===o.length-1?.9:.62),u),"lowpass",3600*r,.8),"triangle",l*r,d+.04,n.detune??0,u),on(t,Tt(t,s,.002,.2,i*.18,u+.012),"sine",l*2.01*r,.22,(n.detune??0)+4,u+.012)}),En(t,Dt(t,Tt(t,s,.02,.6,i*.18,a+.32),"highpass",3200*r,.4),.7,a+.32)}function NM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime,o=Dt(t,s,"lowpass",850*r,.45),l=[196,174.61,155.56,130.81];l.forEach((c,u)=>{const d=a+u*.22,h=u===l.length-1?1:.62,m=hs(t,o,.045,.02,h,i*(1-u*.08),d);on(t,m,"triangle",c*r,h+.04,(n.detune??0)-5,d).frequency.exponentialRampToValueAtTime(c*.96*r,d+h),on(t,Tt(t,m,.05,h*.82,i*.24,d+.01),"sine",c/2*r,h,n.detune??0,d+.01)}),En(t,Dt(t,Tt(t,s,.03,.55,i*.18,a+.12),"lowpass",260*r,.8),.65,a+.12)}function UM(t,e,n={}){const i=n.volume??.24,r=n.pitch??1,s=ln(t,e,n),a=t.currentTime;on(t,Tt(t,s,.0015,.055,i,a),"triangle",360*r,.07,n.detune??0,a).frequency.exponentialRampToValueAtTime(170*r,a+.055),En(t,Dt(t,Tt(t,s,.001,.025,i*.5,a+.002),"highpass",1600*r,.6),.032,a+.002)}var OM=""+new URL("Veludo No Copo-CQSci05v.mp3",import.meta.url).href,FM=class{ctx;dest;buffer=null;source=null;pendingStart=!1;constructor(t,e){this.ctx=t,this.dest=e,this.load()}async load(){try{const t=await(await fetch(OM)).arrayBuffer();this.buffer=await this.ctx.decodeAudioData(t),this.pendingStart&&(this.pendingStart=!1,this.playBuffer())}catch(t){console.warn("[BackgroundMusic] Failed to load music file:",t)}}start(){this.buffer?this.playBuffer():this.pendingStart=!0}stop(){if(this.pendingStart=!1,this.source){try{this.source.stop()}catch{}this.source=null}}playBuffer(){if(this.stop(),!this.buffer)return;const t=this.ctx.createBufferSource();t.buffer=this.buffer,t.loop=!0,t.connect(this.dest),t.start(),this.source=t}},Uh="open-poker:muted",Oh="open-poker:volume",Fh="open-poker:music-muted",BM=class{ctx=null;master=null;sfxLimiter=null;musicGain=null;music=null;musicLoadPending=!1;voices=new Map;unlocked=!1;muted=!1;volume=.7;mutedListeners=new Set;musicMuted=!1;musicVolume=.06;musicMutedListeners=new Set;constructor(){try{this.muted=localStorage.getItem(Uh)==="1",this.musicMuted=localStorage.getItem(Fh)==="1";const t=localStorage.getItem(Oh);t&&(this.volume=Math.max(0,Math.min(1,parseFloat(t))))}catch{}}registerDefaults(){const t=(e,n)=>this.register(e,{synth:n});t("click",bM),t("select",TM),t("deselect",EM),t("deal",CM),t("flip",wM),t("whoosh",AM),t("sweep",RM),t("chipTick",PM),t("multTick",LM),t("scorePop",kM),t("chaching",DM),t("win",IM),t("lose",NM),t("buttonClick",UM)}register(t,e){this.voices.set(t,e)}installUnlockListener(){const t=()=>{this.unlock(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t,{once:!1}),window.addEventListener("keydown",t,{once:!1})}ensureContext(){if(this.ctx)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.sfxLimiter=this.ctx.createDynamicsCompressor(),this.sfxLimiter.threshold.value=-13,this.sfxLimiter.knee.value=8,this.sfxLimiter.ratio.value=5,this.sfxLimiter.attack.value=.003,this.sfxLimiter.release.value=.16,this.master.connect(this.sfxLimiter),this.sfxLimiter.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicMuted?0:this.musicVolume,this.musicGain.connect(this.ctx.destination)}catch{return null}return this.ctx}unlock(){const t=this.ensureContext();t&&(t.state==="suspended"&&t.resume(),this.unlocked=!0,this.startMusicWhenReady(t))}startMusicWhenReady(t){if(!(this.musicMuted||this.music||this.musicLoadPending||!this.musicGain)){if(this.musicLoadPending=!0,this.music||!this.musicGain||this.ctx!==t){this.musicLoadPending=!1;return}this.music=new FM(t,this.musicGain),this.music.start(),this.musicLoadPending=!1}}play(t,e={}){if(this.muted||!this.unlocked)return;const n=this.ensureContext();if(!n||!this.master)return;const i=this.voices.get(t);if(i){if(i.buffer){this.playBuffer(n,i.buffer,e);return}i.url&&!i.buffer&&this.loadBuffer(n,i),i.synth&&i.synth(n,this.master,e)}}playBuffer(t,e,n){if(!this.master)return;const i=t.createBufferSource();i.buffer=e,n.detune&&(i.detune.value=n.detune),n.pitch&&(i.playbackRate.value=n.pitch);const r=t.createGain();r.gain.value=n.volume??1,i.connect(r).connect(this.master),i.start()}loadBuffer(t,e){!e.url||e.buffer||fetch(e.url).then(n=>n.arrayBuffer()).then(n=>t.decodeAudioData(n)).then(n=>{e.buffer=n}).catch(()=>{})}setMuted(t){this.muted=t;try{localStorage.setItem(Uh,t?"1":"0")}catch{}this.master&&(this.master.gain.value=t?0:this.volume);for(const e of this.mutedListeners)e(t)}toggleMute(){return this.setMuted(!this.muted),this.muted}isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem(Oh,String(this.volume))}catch{}this.master&&!this.muted&&(this.master.gain.value=this.volume)}onMutedChange(t){return this.mutedListeners.add(t),()=>this.mutedListeners.delete(t)}setMusicMuted(t){this.musicMuted=t;try{localStorage.setItem(Fh,t?"1":"0")}catch{}this.musicGain&&(this.musicGain.gain.value=t?0:this.musicVolume),!t&&this.unlocked&&this.ctx&&this.startMusicWhenReady(this.ctx);for(const e of this.musicMutedListeners)e(t)}toggleMusicMute(){return this.setMusicMuted(!this.musicMuted),this.musicMuted}isMusicMuted(){return this.musicMuted}onMusicMutedChange(t){return this.musicMutedListeners.add(t),()=>this.musicMutedListeners.delete(t)}dispose(){this.music?.stop(),this.music=null;try{this.ctx?.close()}catch{}this.ctx=null,this.master=null,this.sfxLimiter=null,this.musicGain=null,this.musicLoadPending=!1,this.unlocked=!1}},Te=new BM;Te.registerDefaults();Te.installUnlockListener();function zM(t){const{renderer:e,camera:n,handGroup:i,getHandObjects:r,onToggleSelect:s,onReorder:a}=t,o=e.domElement,l=new Ov,c=new Xe;let u=null,d=null,h=new Xe,m=null,_=0;const f=.012;function g(S){return Math.max(-.7,Math.min(.7,S.position.x/4.5))}function p(S){const I=o.getBoundingClientRect();c.x=(S.clientX-I.left)/I.width*2-1,c.y=-((S.clientY-I.top)/I.height)*2+1}function y(){const S=r();if(S.length===0)return null;l.setFromCamera(c,n);const I=S.flatMap(L=>[L.faceMesh,L.backMesh]),w=l.intersectObjects(I,!1);return w.length===0?null:w[0].object.userData.cardObject??null}function T(S){l.setFromCamera(c,n);const I=new Ei(new X(0,0,1),-S),w=new X;return l.ray.intersectPlane(I,w)?w.x:null}function b(S){if(p(S),d&&!m){const w=c.x-h.x,L=c.y-h.y;if(w*w+L*L>f*f){m=d,m.position.x;const B=T(i.position.z+m.position.z);B!==null?_=B-(m.position.x+i.position.x):_=0,Te.play("flip",{volume:.24,pan:g(m)}),Ee.to(m.position,{y:m.baseY+.6,z:m.baseZ+.4,duration:.15})}}if(m){const w=T(i.position.z+m.baseZ+.4);w!==null&&(m.position.x=w-i.position.x-_),E();return}const I=y();I!==u&&(u?.setHover(!1),u=I,u?.setHover(!0),I&&Te.play("click",{volume:.1,detune:(Math.random()-.5)*160,pan:g(I)}),o.style.cursor=I?"pointer":"default")}function E(){const S=r().slice().sort((w,L)=>w.position.x-L.position.x),I=ec(S.length);S.forEach((w,L)=>{w.handIndex=L,w!==m&&w.moveTo(I[L],.18)})}function A(S){p(S);const I=y();I&&(d=I,h.set(c.x,c.y),o.setPointerCapture(S.pointerId))}function R(S){if(o.hasPointerCapture(S.pointerId)&&o.releasePointerCapture(S.pointerId),m){const I=r().slice().sort((L,B)=>L.position.x-B.position.x),w=ec(I.length);I.forEach((L,B)=>{L.handIndex=B,L.moveTo(w[B],.25)}),a(I.map(L=>L.card.id)),m=null,d=null;return}if(d){const I=s(d.card.id);d.setSelected(I),Te.play(I?"select":"deselect",{detune:(Math.random()-.5)*70,pan:g(d)}),d=null}}function v(){u?.setHover(!1),u=null,o.style.cursor="default"}return o.addEventListener("pointermove",b),o.addEventListener("pointerdown",A),o.addEventListener("pointerup",R),o.addEventListener("pointerleave",v),()=>{o.removeEventListener("pointermove",b),o.removeEventListener("pointerdown",A),o.removeEventListener("pointerup",R),o.removeEventListener("pointerleave",v)}}var VM=[{action:"play_hand",description:"Play selected cards",keys:["Enter"]},{action:"discard",description:"Discard selected cards",keys:["Backspace","Delete"]},{action:"restart_run",description:"Start a new run",keys:["KeyR"]},{action:"toggle_mute",description:"Mute/unmute audio",keys:["KeyM"]}],HM={"btn-play":"play_hand","btn-discard":"discard","overlay-restart":"restart_run","btn-mute":"toggle_mute"},GM=new Map(VM.flatMap(t=>t.keys.map(e=>[e,t.action])));function WM(t){return t.ctrlKey||t.metaKey||t.altKey?null:GM.get(t.code)??null}var XM=15e3;function $M(t={}){return gM([...pM,...(t.cards??[]).map(mM)]).map(e=>({url:Yf(e),label:e}))}function KM(t){return new Promise((e,n)=>{const i=window.setTimeout(()=>n(new Error(`Timed out loading image: ${t}`)),XM),r=new Image;r.decoding="async",r.onload=()=>{if(window.clearTimeout(i),!r.decode){e();return}r.decode().catch(()=>{}).then(()=>e())},r.onerror=()=>{window.clearTimeout(i),n(new Error(`Failed to load image: ${t}`))},r.src=t})}async function jM(t,e={}){const n=$M(e),i=n.length,r=[];let s=0;return t?.({loaded:s,total:i,label:"Preparing assets",failed:0}),await Promise.all(n.map(async a=>{try{await KM(a.url)}catch(o){r.push(a.label),console.warn(`[preload] ${a.label}`,o)}finally{s+=1,t?.({loaded:s,total:i,label:a.label,failed:r.length})}})),{total:i,failed:r}}var ie=t=>document.getElementById(t),gr=t=>document.getElementById(t),yl=gr("splash-screen"),Bh=gr("splash-progress-bar"),Ml=gr("splash-status"),zh=gr("splash-percent"),tc=ie("canvas-host"),qM=ie("blind-name"),Vh=ie("blind-badge"),YM=ie("blind-target"),JM=ie("blind-reward"),nc=ie("round-score"),Sl=ie("hand-type"),qs=ie("chips"),Ys=ie("mult"),ZM=ie("ante"),QM=ie("round"),eS=ie("money"),tS=ie("hands-left"),nS=ie("discards-left"),iS=ie("seed"),rS=ie("hand-counter"),sS=ie("deck-counter"),Ga=ie("joker-slots"),aS=ie("joker-count"),Hh=ie("consumable-slots"),oS=ie("consumable-count"),lS=ie("btn-play"),cS=ie("btn-discard"),Oc=ie("btn-sort-straight"),Fc=ie("btn-sort-flush"),uS=ie("btn-runinfo"),hS=ie("btn-options"),Wa=ie("run-info-overlay"),Gh=ie("run-info-list"),dS=ie("btn-run-info-back"),Xa=ie("options-overlay"),fS=ie("btn-options-back"),Zf=ie("btn-option-sfx"),Qf=ie("btn-option-music"),pS=ie("btn-option-new-run"),mS=ie("btn-option-return"),gS=ie("kanban-close-game"),_S=ie("btn-option-collection"),$a=ie("collection-overlay"),vS=ie("collection-stats"),Wh=ie("collection-decks"),Xh=ie("collection-jokers"),yS=ie("btn-collection-back"),oo=ie("setup-seed"),MS=ie("btn-setup-random-seed"),lo=ie("score-popup"),$h=ie("popup-hand"),ic=ie("popup-total"),Ls=ie("overlay"),SS=ie("overlay-title"),xS=ie("overlay-sub"),Bn=ie("shop-overlay"),co=ie("shop-panel"),rc=ie("shop-offers"),bS=ie("shop-inventory"),TS=ie("shop-money"),ES=ie("shop-next-blind"),CS=ie("shop-reroll-cost"),Bc=ie("btn-shop-reroll"),sc=ie("btn-shop-next"),Kh=ie("shop-boosters"),xl=ie("shop-voucher"),wS=ie("booster-overlay"),AS=ie("booster-name"),RS=ie("booster-kind"),PS=ie("booster-picks"),jh=ie("booster-choices"),LS=ie("btn-booster-skip"),kS=ie("target-overlay"),DS=ie("target-name"),IS=ie("target-instruction"),qh=ie("target-cards"),NS=ie("btn-target-cancel"),ac=ie("btn-target-confirm"),Pn=ie("item-info"),US=ie("item-info-kind"),OS=ie("item-info-name"),FS=ie("item-info-desc"),ep=ie("item-info-meta"),BS=ie("btn-item-info-close"),zS=ie("setup-overlay"),Yh=ie("setup-decks"),Ci=ie("setup-stake"),VS=ie("setup-stake-desc"),HS=ie("btn-setup-start"),GS=ie("blind-select-overlay"),Jh=ie("blind-select-cards");function WS(t,e,n){return Math.max(e,Math.min(n,t))}function zc(){const t=window.innerWidth||1280,e=window.innerHeight||720,n=WS(Math.min(t/1280,e/900),.72,1),i=Math.round(14*n),r=260,s=16*n,a=i+r*n+s,o=Math.max(320,(t-a-i)/n),l=Math.max(360,(e-i*2)/n),c=document.documentElement;c.style.setProperty("--ui-scale",n.toFixed(3)),c.style.setProperty("--ui-edge",`${i}px`),c.style.setProperty("--sidebar-layout-height",`${l}px`),c.style.setProperty("--hud-top-left",`${a}px`),c.style.setProperty("--hud-top-layout-width",`${o}px`)}zc();function XS(t){const e=t.total===0?1:t.loaded/t.total,n=Math.round(e*100);if(Bh&&(Bh.style.transform=`scaleX(${e})`),zh&&(zh.textContent=`${n}%`),!!Ml){if(t.loaded>=t.total){Ml.textContent=t.failed>0?`Loaded with ${t.failed} fallback${t.failed===1?"":"s"}`:"Ready";return}Ml.textContent=`Loading ${t.label}`}}function $S(){yl&&window.setTimeout(()=>{yl.classList.add("is-complete"),window.setTimeout(()=>yl.remove(),650)},220)}var tp="kanban-open-poker:run-v1";function KS(){try{const t=localStorage.getItem(tp);if(!t)return null;const e=JSON.parse(t);return e?.version===1&&e.snapshot?e:null}catch{return null}}var ls=KS(),D=new vg;if(ls?.snapshot)try{D.reset(ls.snapshot)}catch(t){console.warn("[save] Could not restore Open Poker run:",t),D.enterSetup()}else D.enterSetup();var dt=ea(Tg(localStorage));D.setUnlockedJokerKeys(dt.unlockedJokers);var Js=ls?.metaRunId??Cc(D.config.seed),Vi=Object.fromEntries(Object.keys(D.handLevels).map(t=>[t,0]));if(ls?.handPlayCounts)for(const t of Object.keys(Vi))Vi[t]=Math.max(0,Number(ls.handPlayCounts[t]??0)||0);var dr=null;function np(){for(const t of Object.keys(Vi))Vi[t]=0}var Zh=await jM(XS,{cards:D.hand});Zh.failed.length>0&&console.warn("[preload] Assets loaded with fallbacks:",Zh.failed);$S();var At=yM(tc),Ft=new Map,uo=[],wi=!1,ir=!1,qr=!1,Yr=null,Dn=!1,ho=[];function ip(t){return Math.max(-.7,Math.min(.7,t/4.5))}function rp(t){const e=ho.pop()??document.createElement("div");return e.removeAttribute("style"),e.className="card-score-float",e.textContent="",t.appendChild(e),e}function sp(t){t.remove(),t.removeAttribute("style"),t.className="card-score-float",t.textContent="",ho.push(t)}function jS(t){let e=Ft.get(t.id);return e||(e=uo.pop()??new lM(t),e.resetForCard(t),At.handGroup.add(e),e.position.set(6,-2,1),e.rotation.y=Math.PI,Ft.set(t.id,e),Te.play("deal",{volume:.27,detune:(Math.random()-.5)*180,pitch:.94+Math.random()*.12,pan:(Math.random()-.5)*.5}),Ee.to(e.rotation,{y:0,duration:.5,delay:.05,ease:"power3.out"})),e}function So(t,e){At.handGroup.remove(e),At.playGroup.remove(e),Ft.delete(t),e.resetForCard(e.card),uo.push(e)}function Qh(t){At.handGroup.remove(t),At.playGroup.remove(t),t.dispose()}var vn=[],Hi=ls?.activeHandSort??null;function Wi(){try{const t={version:1,snapshot:D.toSnapshot(),activeHandSort:Hi,handPlayCounts:{...Vi},metaRunId:Js,savedAt:Date.now()};localStorage.setItem(tp,JSON.stringify(t))}catch(t){console.warn("[save] Could not persist Open Poker run:",t)}}function Vc(){Wi(),window.parent!==window&&window.parent.postMessage({type:"open-poker-close"},"*")}function qS(){const t=D.hand.map(e=>e.id);vn=vn.filter(e=>t.includes(e));for(const e of t)vn.includes(e)||vn.push(e)}function YS(){return vn.map(t=>Ft.get(t)).filter(Boolean)}function Hc(){Oc.classList.toggle("is-active",Hi==="straight"),Fc.classList.toggle("is-active",Hi==="flush")}function ap(){!Hi||D.hand.length<2||(vn=(Hi==="straight"?yg(D.hand):Mg(D.hand)).map(t=>t.id))}function fo(t){Dn||D.phase!=="play"||D.hand.length<2||(Hi=t,ap(),Hc(),Wi(),Te.play("buttonClick"),pi(.28))}function pi(t=.4){ap(),qS();for(const r of D.hand)Ft.get(r.id)?.setFaceDown(D.isCardFaceDown(r.id));const e={};for(const r of D.hand)e[r.id]=r;const n=vn.map(r=>e[r]).filter(Boolean),i=ec(n.length);n.forEach((r,s)=>{const a=jS(r);a.handIndex=s,a.setSelected(D.selected.has(r.id)),a.moveTo(i[s],t,s*.04)});for(const[r,s]of Ft)!e[r]&&!s.userData.keepAlive&&So(r,s)}function ed(t){return t.split(" ").map(e=>e.charAt(0)).join("").slice(0,3).toUpperCase()}var Us=D.deckKey;function Gc(){Pn.classList.add("hidden")}function td(t,e,n){const i=e==="joker"?t:null;Pn.dataset.rarity=i?.rarity??"consumable",Pn.dataset.jokerId=i?.id??"",US.textContent=i?`${i.rarity.toUpperCase()} JOKER`:t.type.toUpperCase(),OS.textContent=t.name,FS.textContent=t.description;const r=[`Sell $${t.sellValue}`];if((t.edition??"base")!=="base"&&r.push(t.edition??"base"),i){i.sticker==="eternal"&&r.push("Eternal · cannot sell"),i.sticker==="perishable"&&r.push(`Perishable · ${i.perishableRounds??0} rounds`),i.rental&&r.push("Rental · -$3/round");const c=D.jokerRuntimeText(i.id);c&&r.push(c)}ep.textContent=r.join(" · "),Pn.classList.remove("hidden");const s=n.getBoundingClientRect(),a=Pn.getBoundingClientRect(),o=Math.min(window.innerWidth-a.width-12,Math.max(12,s.left)),l=Math.min(window.innerHeight-a.height-12,s.bottom+10);Pn.style.left=`${o}px`,Pn.style.top=`${l}px`}function op(){Ga.replaceChildren();const t=D.jokerCapacity();for(let n=0;n<t;n++){const i=document.createElement("div"),r=D.jokers[n];if(i.className=`joker-slot${r?" filled":""}`,i.dataset.jokerIndex=String(n),i.addEventListener("dragover",s=>{s.dataTransfer?.types.includes("application/x-open-poker-joker")&&(s.preventDefault(),i.classList.add("drag-target"))}),i.addEventListener("dragleave",()=>i.classList.remove("drag-target")),i.addEventListener("drop",s=>{s.preventDefault(),i.classList.remove("drag-target");const a=s.dataTransfer?.getData("application/x-open-poker-joker");a&&D.moveJoker(a,n)&&(Te.play("buttonClick"),lt())}),r){i.dataset.jokerId=r.id,i.textContent=ed(r.name),r.rarity==="mythic"&&i.classList.add("mythic");const s=D.jokerRuntimeText(r.id);i.title=`${r.name} - ${r.description}${s?` · ${s}`:""} · Drag to reorder`,i.draggable=!0,i.addEventListener("click",a=>{a.stopPropagation(),td(r,"joker",i)}),i.addEventListener("dragstart",a=>{a.dataTransfer?.setData("application/x-open-poker-joker",r.id),a.dataTransfer&&(a.dataTransfer.effectAllowed="move"),i.classList.add("dragging")}),i.addEventListener("dragend",()=>{i.classList.remove("dragging"),Ga.querySelectorAll(".drag-target").forEach(a=>a.classList.remove("drag-target"))})}Ga.appendChild(i)}Hh.replaceChildren();const e=D.consumableCapacity();for(let n=0;n<e;n++){const i=document.createElement("div"),r=D.consumables[n];i.className=`consumable-slot${r?" filled":""}`,r&&(i.dataset.consumableId=r.id,i.textContent=ed(r.name),i.title=`${r.name} - ${r.description}`,i.addEventListener("click",s=>{s.stopPropagation(),td(r,"consumable",i)})),Hh.appendChild(i)}}op();var oc=["Small Blind","Big Blind","Boss Blind"],JS=[["SMALL","BLIND"],["BIG","BLIND"],["BOSS"]],ZS=["small","big","boss"],QS=["$","$$","$$$$$"];function lp(t){return t.kind==="joker"?t.joker.name:t.kind==="consumable"?t.consumable.name:t.name}function cp(t){return t.kind==="joker"?t.joker.description:t.kind==="consumable"?t.consumable.description:t.description}function ex(t){return t.kind==="playing-card"?"Deck Card":t.kind==="joker"?`${t.joker.rarity.toUpperCase()} JOKER`:t.kind}function nd(t,e,n){const i=document.createElement("div");i.className="shop-inventory-group";const r=document.createElement("div");r.className="shop-inventory-title",r.textContent=`${n==="joker"?"Jokers":"Consumables"} ${t.length}/${e}`,i.appendChild(r);const s=document.createElement("div");s.className="shop-inventory-list";for(let a=0;a<e;a++){const o=t[a],l=document.createElement("div");if(l.className=`shop-inventory-row${o?" filled":""}`,!o){l.textContent="Empty slot",s.appendChild(l);continue}const c=document.createElement("div");c.className="shop-inventory-copy";const u=document.createElement("strong");u.textContent=o.name;const d=document.createElement("span");if(d.textContent=o.description,c.append(u,d),l.appendChild(c),n==="consumable"){const m=document.createElement("button");m.className="shop-mini-btn use",m.textContent="Use",m.addEventListener("click",()=>{const _=D.beginUseConsumable(o.id);_!=="invalid"&&(Te.play(_==="targeting"?"buttonClick":"chaching"),lt())}),l.appendChild(m)}const h=document.createElement("button");h.className="shop-mini-btn",h.textContent=`Sell $${o.sellValue}`,h.addEventListener("click",()=>{(n==="joker"?D.sellJoker(o.id):D.sellConsumable(o.id))&&(Te.play("buttonClick"),lt())}),l.appendChild(h),s.appendChild(l)}return i.appendChild(s),i}function tx(t){const e=Bn.classList.contains("hidden");t?(Bn.classList.remove("hidden"),e&&(Bn.style.opacity="1",Ee.fromTo(Bn,{opacity:0},{opacity:1,duration:.25,ease:"power2.out"}),Ee.fromTo(co,{y:24,scale:.96},{y:0,scale:1,duration:.38,ease:"back.out(1.4)"}),Te.play("chaching",{volume:.35}))):Bn.classList.add("hidden")}function nx(){const t=D.phase==="shop"&&!!D.shop&&!ir;if(tx(t),!t||!D.shop)return;TS.textContent=`$${D.money}`,ES.textContent=oc[D.blindIndex],CS.textContent=`$${D.shop.rerollCost}`,Bc.disabled=D.money<D.shop.rerollCost;const e=D.lastCashout,n=co.querySelector(".shop-kicker");n&&(n.textContent=e?`Cashout $${e.total} · Blind $${e.blindReward} · Hands $${e.handsBonus} · Interest $${e.interest}`:"Blind cleared"),rc.replaceChildren(),D.shop.offers.forEach((r,s)=>{const a=document.createElement("article"),o=D.canBuyOffer(r.id);a.className=`shop-offer ${r.item.kind}${r.sold?" sold":""}`,r.item.kind==="joker"&&r.item.joker.rarity==="mythic"&&a.classList.add("mythic");const l=document.createElement("div");l.className="shop-offer-kind",l.textContent=ex(r.item),a.appendChild(l);const c=document.createElement("h3");c.textContent=lp(r.item),a.appendChild(c);const u=document.createElement("p");u.textContent=cp(r.item),a.appendChild(u);const d=document.createElement("button");d.className="shop-buy-btn",d.dataset.testid=`shop-buy-${s}`,d.disabled=r.sold||!o,d.textContent=r.sold?"Sold":`Buy $${D.shopPriceForItem(r.item)}`,d.addEventListener("click",()=>{D.buyOffer(r.id)&&(Te.play("chaching"),Ee.fromTo(a,{scale:1},{scale:1.04,duration:.14,yoyo:!0,repeat:1,ease:"power2.out"}),lt())}),a.appendChild(d),rc.appendChild(a)}),Kh.replaceChildren(),D.shop.boosters.forEach(r=>{const s=document.createElement("article");s.className=`booster-shop-card ${r.type}${r.sold?" sold":""}`;const a=document.createElement("span");a.className="booster-shop-kind",a.textContent=r.size==="normal"?r.type:`${r.size} · ${r.type}`;const o=document.createElement("strong");o.textContent=r.name;const l=document.createElement("span");l.textContent=r.description;const c=document.createElement("button");c.className="shop-buy-btn";const u=D.boosterPrice(r);c.disabled=r.sold||D.money<u,c.textContent=r.sold?"Opened":`Buy & Open $${u}`,c.addEventListener("click",()=>{D.openBooster(r.id)&&(Te.play("scorePop"),lt())}),s.append(a,o,l,c),Kh.appendChild(s)}),xl.replaceChildren();const i=D.shop.voucher;if(i){const r=document.createElement("article");r.className=`voucher-card${i.sold?" sold":""}`;const s=document.createElement("strong");s.textContent=i.name;const a=document.createElement("span");a.textContent=i.description;const o=document.createElement("button");o.className="shop-buy-btn",o.disabled=i.sold||D.money<i.price,o.textContent=i.sold?"Redeemed":`Redeem $${i.price}`,o.addEventListener("click",()=>{D.buyVoucher()&&(Te.play("chaching"),lt())}),r.append(s,a,o),xl.appendChild(r)}else{const r=document.createElement("div");r.className="voucher-empty",r.textContent="All Vouchers redeemed",xl.appendChild(r)}bS.replaceChildren(nd(D.jokers,D.jokerCapacity(),"joker"),nd(D.consumables,D.consumableCapacity(),"consumable"))}function ix(t,e){t.replaceChildren(),e.forEach((n,i)=>{i>0&&t.appendChild(document.createElement("br")),t.append(document.createTextNode(n))})}function rx(t){const e=document.createElement("span");e.className="counter-total",e.textContent="/8",ZM.replaceChildren(document.createTextNode(String(t)),e)}function up(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":String(t.rank)}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}function sx(t){return lp(t)}function ax(t){return cp(t)}function ox(){const t=D.phase==="booster"&&!!D.booster;wS.classList.toggle("hidden",!t),!(!t||!D.booster)&&(AS.textContent=D.booster.name,RS.textContent=D.booster.type.toUpperCase(),PS.textContent=`Choose ${D.booster.picksLeft}`,jh.replaceChildren(),D.booster.choices.forEach(e=>{const n=document.createElement("article");n.className=`booster-choice ${e.item.kind}${e.taken?" taken":""}`,e.item.kind==="joker"&&e.item.joker.rarity==="mythic"&&n.classList.add("mythic");const i=document.createElement("span");i.className="booster-choice-type",i.textContent=e.item.kind==="consumable"?e.item.consumable.type:e.item.kind==="playing-card"?"playing card":"joker";const r=document.createElement("strong");r.textContent=sx(e.item);const s=document.createElement("span");s.textContent=ax(e.item),e.item.kind==="playing-card"&&(r.textContent=up(e.item.card),s.textContent=`${e.item.description} · ${e.item.card.enhancement} · ${e.item.card.seal} · ${e.item.card.edition}`);const a=document.createElement("button");a.className="shop-buy-btn",a.disabled=e.taken,a.textContent=e.taken?"Taken":e.item.kind==="consumable"?"Use":"Take",a.addEventListener("click",()=>{const o=D.chooseBooster(e.id);o!=="invalid"&&(Te.play(o==="targeting"?"buttonClick":"chaching"),lt())}),n.append(i,r,s,a),jh.appendChild(n)}))}function lx(){const t=D.targetMode;if(kS.classList.toggle("hidden",!t),!t)return;DS.textContent=t.consumable.name,IS.textContent=`${t.instruction} (${t.min}–${t.max})`,qh.replaceChildren();const e=new Set(t.selectedIds);D.getTargetCandidateCards().forEach(n=>{const i=document.createElement("button");i.type="button",i.className=`target-card${e.has(n.id)?" selected":""}`;const r=document.createElement("strong");r.textContent=up(n);const s=document.createElement("span"),a=[n.enhancement,n.seal,n.edition].filter(o=>o!=="none"&&o!=="base");s.textContent=a.length>0?a.join(" · "):"Base card",i.append(r,s),i.addEventListener("click",()=>{D.toggleTargetCard(n.id),lt()}),qh.appendChild(i)}),ac.disabled=t.selectedIds.length<t.min||t.selectedIds.length>t.max,ac.textContent=`Use (${t.selectedIds.length}/${t.max})`}function hp(){vS.textContent=`Runs ${dt.runsFinished}/${dt.runsStarted} · Wins ${dt.wins} · Best Ante ${dt.bestAnte} · Hands ${dt.totalHands} · Skips ${dt.totalSkips}`,Wh.replaceChildren(),Object.keys(Ns).forEach(t=>{const e=document.createElement("div");e.className=`collection-deck${dt.unlockedDecks.includes(t)?"":" locked"}`;const n=Number(dt.highestStakeCleared[t]??-1);e.textContent=dt.unlockedDecks.includes(t)?`${Ns[t].name} · ${n<0?"White Stake ready":`cleared ${ot[Object.keys(ot).find(i=>ot[i].order===n)??"white"].name}`}`:`${Ns[t].name} · LOCKED`,Wh.appendChild(e)}),Xh.replaceChildren();for(const t of Qs){const e=dt.unlockedJokers.includes(t.key),n=dt.discoveredJokers.includes(t.key),i=document.createElement("article");i.className=`collection-joker ${t.rarity}${e?" unlocked":" locked"}${n?" discovered":""}`;const r=document.createElement("strong");r.textContent=e?n?t.name:"???":"LOCKED";const s=document.createElement("span");s.textContent=t.rarity.toUpperCase();const a=document.createElement("p");a.textContent=e?n?t.description:"Obtain this Joker to discover it.":"Meet progression requirements to unlock.",i.append(r,s,a),Xh.appendChild(i)}}function cx(){let t=dt;for(const e of D.jokers)t=Rg(t,e.key);t=Pg(t,D.bossBlindKey),t=Pu(Pu(t,D.anteTags[0]),D.anteTags[1]),t.bestAnte=Math.max(t.bestAnte,D.ante),t.maxMoney=Math.max(t.maxMoney,D.money),(D.phase==="win"||D.phase==="game-over")&&!t.settledRunIds.includes(Js)&&(t=Ag(t,Js,{won:D.phase==="win",deck:D.deckKey,stake:D.stakeKey,ante:D.ante,hands:D.handsPlayedRun,skips:D.skippedBlinds,discards:D.discardsUsedRun,money:D.money})),dt=ea(t),D.setUnlockedJokerKeys(dt.unlockedJokers),lf(localStorage,dt),dr==="collection"&&hp()}function Wc(){const t=D.phase==="setup";if(zS.classList.toggle("hidden",!t),!t)return;Yh.replaceChildren(),Object.keys(Ns).forEach(i=>{const r=Ns[i],s=document.createElement("button");s.type="button";const a=dt.unlockedDecks.includes(i);s.className=`setup-deck-card${Us===i?" selected":""}${a?"":" locked"}`,s.disabled=!a;const o=document.createElement("strong");o.textContent=a?r.name:`Locked · ${r.name}`;const l=document.createElement("span");l.textContent=r.description,s.append(o,l),s.addEventListener("click",()=>{a&&(Us=i,Wc(),Te.play("buttonClick"))}),Yh.appendChild(s)});const e=Ci.value||D.stakeKey,n=Cg(dt,Us);Ci.replaceChildren(),Object.keys(ot).filter(i=>ot[i].order<=n).forEach(i=>{const r=document.createElement("option");r.value=i,r.textContent=ot[i].name,Ci.appendChild(r)}),Ci.value=Object.keys(ot).some(i=>i===e&&ot[i].order<=n)?e:"white",VS.textContent=`${ot[Ci.value]?.description??""} · Unlocked through ${ot[Object.keys(ot).find(i=>ot[i].order===n)??"white"].name}`}function ux(t){const e=D.blindIndex;D.blindIndex=t;const n=D.targetForPreview();return D.blindIndex=e,n}function hx(){const t=D.phase==="blind-select";if(GS.classList.toggle("hidden",!t),!t)return;const e=document.getElementById("blind-select-ante");e&&(e.textContent=String(D.ante)),Jh.replaceChildren(),[0,1,2].forEach(n=>{const i=n===D.blindIndex,r=n<D.blindIndex,s=document.createElement("article");s.className=`blind-select-card${n===2?" boss":""}${i?" current":""}${r?" done":""}`;const a=document.createElement("span");a.className="blind-select-kind",a.textContent=n===0?"SMALL":n===1?"BIG":"BOSS";const o=document.createElement("strong");o.textContent=n===0?"Small Blind":n===1?"Big Blind":Xs[D.bossBlindKey].name;const l=document.createElement("div");l.className="blind-select-target",l.textContent=`Score ${ux(n).toLocaleString()}`;const c=document.createElement("div");c.className="blind-select-reward",c.textContent=`Reward $${n===0&&ot[D.stakeKey].order>=ot.red.order?0:3+n}`;const u=document.createElement("p");if(n<2){const h=Bl[D.anteTags[n]];u.textContent=`Skip → ${h.name}: ${h.description}`}else u.textContent=Xs[D.bossBlindKey].description;const d=document.createElement("div");if(d.className="blind-select-actions",i){const h=document.createElement("button");if(h.type="button",h.className="btn btn-play",h.textContent="Play",h.addEventListener("click",()=>{D.playSelectedBlind()&&(Te.play("buttonClick"),lt(),pi(.55))}),d.appendChild(h),n<2){const m=Bl[D.anteTags[n]],_=document.createElement("button");_.type="button",_.className="btn btn-ghost",_.textContent=`Skip · ${m.name}`,_.addEventListener("click",()=>{D.skipCurrentBlind()&&(Te.play("chaching"),lt())}),d.appendChild(_)}}else{const h=document.createElement("span");h.className="blind-select-status",h.textContent=r?"Done / Skipped":"Locked",d.appendChild(h)}s.append(a,o,l,c,u,d),Jh.appendChild(s)})}function lt(){cx(),op();const t=D.blindIndex;qM.textContent=t===2?Xs[D.bossBlindKey].name:oc[t],Vh.className=`blind-badge ${ZS[t]}`;const e=Vh.querySelector("span");e&&ix(e,JS[t]),YM.textContent=D.target.toLocaleString(),JM.textContent=QS[t],nc.textContent=(qr?Yr??D.roundScore:D.roundScore).toLocaleString(),rx(D.ante);const n=(D.ante-1)*3+D.blindIndex+1;QM.textContent=String(n),eS.textContent=`$${D.money}`,tS.textContent=`${D.handsLeft}`,nS.textContent=`${D.discardsLeft}`,iS.textContent=String(D.config.seed),rS.textContent=`${D.hand.length}/${D.config.handSize}`,sS.textContent=`${D.deck.length}/${D.ownedDeck.length}`,At.setDeckCount(D.deck.length),aS.textContent=`${D.jokers.length}/${D.jokerCapacity()}`,oS.textContent=`${D.consumables.length}/${D.consumableCapacity()}`;const i=D.selectedCards();if(i.length===0)Sl.textContent="-",qs.textContent="0",Ys.textContent="0";else{const a=As(i),o=D.handLevels[a.type];Sl.textContent=`${a.type} (lvl ${o.level})`,qs.textContent=`${o.chips}`,Ys.textContent=`${o.mult}`}lS.disabled=Dn||!D.canPlay(),cS.disabled=Dn||!D.canDiscard();const r=Dn||D.phase!=="play"||D.hand.length<2;if(Oc.disabled=r,Fc.disabled=r,Hc(),(D.phase==="game-over"||D.phase==="win")&&!wi){const a=Ls.classList.contains("hidden");Ls.classList.remove("hidden"),SS.textContent=D.phase==="win"?"You Win!":"Game Over",xS.textContent=D.phase==="win"?`Ante ${D.ante-1} cleared on seed ${D.config.seed}`:`Could not beat ${oc[t]} - score ${D.roundScore.toLocaleString()} / ${D.target.toLocaleString()}`,a&&(Te.play(D.phase==="win"?"win":"lose"),Ee.fromTo(Ls.querySelector(".overlay-card"),{scale:.7,opacity:0},{scale:1,opacity:1,duration:.5,ease:"back.out(1.7)"}))}else Ls.classList.add("hidden");if(nx(),ox(),lx(),Wc(),hx(),!Pn.classList.contains("hidden")){const a=Pn.dataset.jokerId;if(a){const o=D.jokers.find(l=>l.id===a);if(o){const l=D.jokerRuntimeText(o.id),c=[`Sell $${o.sellValue}`];(o.edition??"base")!=="base"&&c.push(o.edition??"base"),o.sticker==="eternal"&&c.push("Eternal · cannot sell"),o.sticker==="perishable"&&c.push(`Perishable · ${o.perishableRounds??0} rounds`),o.rental&&c.push("Rental · -$3/round"),l&&c.push(l),ep.textContent=c.join(" · ")}}}const s=D.playRestrictionMessage();s&&D.selected.size>0&&(Sl.textContent=s)}function dx(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?e.toLocaleString():e.toLocaleString(void 0,{maximumFractionDigits:2})}function Ka(t,e,n,i,r){const s={v:e};let a=e;const o=Math.max(1,Math.floor((n-e)/18));Ee.to(s,{v:n,duration:i,ease:"power2.out",onUpdate:()=>{const l=s.v;t.textContent=dx(l),r&&l-a>=o&&(a=l,Te.play(r,{volume:.12,detune:(Math.random()-.5)*250}))}})}function fx(t){lo.classList.remove("hidden"),$h.textContent=`${t.hand.type}`,qs.textContent=Math.round(t.baseChips).toLocaleString(),Ys.textContent=Math.round(t.baseMult).toLocaleString(),ic.textContent="0",Ee.fromTo(lo,{scale:.7,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(2)"}),Ee.fromTo($h,{scale:.7},{scale:1,duration:.3,ease:"back.out(2)"}),Te.play("scorePop")}function px(t){Ka(ic,0,t.total,.8),Ee.fromTo(ic,{scale:.6},{scale:1.2,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}),Te.play("chaching");const e=Math.max(.08,Math.min(.6,t.total/Math.max(1,D.target)*.5));At.shake(e,.45),Ee.delayedCall(1.5,()=>{Ee.to(lo,{opacity:0,duration:.4,onComplete:()=>lo.classList.add("hidden")})})}function mx(t,e){const n=dp(e);if(n.length===0)return;const i=At.createVector3();t.getWorldPosition(i),i.y+=1.1;const r=i.project(At.camera),s=tc.getBoundingClientRect(),a=(r.x+1)/2*s.width,o=(1-r.y)/2*s.height;n.forEach((l,c)=>{const u=rp(tc);u.className=`card-score-float ${l.cls}`,u.textContent=l.text,u.style.left=`${a}px`,u.style.top=`${o}px`,u.style.opacity="0";const d=c*.08,h=28+c*6;Ee.fromTo(u,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:d,ease:"back.out(2.2)"}),Ee.to(u,{y:-h,scale:1,duration:.9,delay:d+.22,ease:"sine.out"}),Ee.to(u,{opacity:0,duration:.45,delay:d+.7,ease:"power1.in",onComplete:()=>sp(u)})})}function gx(t,e){if(e.length===0)return;const n=t.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height*.25;e.forEach((s,a)=>{const o=rp(document.body);o.className=`card-score-float ${s.cls}`,o.textContent=s.text,o.style.position="fixed",o.style.left=`${i}px`,o.style.top=`${r}px`,o.style.opacity="0",o.style.zIndex="60";const l=a*.08,c=32+a*6;Ee.fromTo(o,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:l,ease:"back.out(2.2)"}),Ee.to(o,{y:-c,scale:1,duration:.9,delay:l+.22,ease:"sine.out"}),Ee.to(o,{opacity:0,duration:.45,delay:l+.7,ease:"power1.in",onComplete:()=>sp(o)})})}function dp(t){const e=[];if(t.chipsDelta&&e.push({text:`+${Math.round(t.chipsDelta)}`,cls:"is-chips"}),t.multDelta&&e.push({text:`+${Math.round(t.multDelta)} Mult`,cls:"is-mult-add"}),t.multMul&&t.multMul!==1){const n=Number.isInteger(t.multMul)?t.multMul.toString():t.multMul.toFixed(1);e.push({text:`×${n} Mult`,cls:"is-mult-mul"})}return t.moneyDelta&&e.push({text:`+$${Math.round(t.moneyDelta)}`,cls:"is-money"}),e}function hi(t,e){if(t==="select_card")return Dn||!e?.cardId?!1:D.toggleSelect(e.cardId);if(t==="play_hand"){if(Dn||!D.canPlay())return;Te.play("buttonClick"),_x();return}if(t==="discard"){if(Dn||!D.canDiscard())return;Te.play("buttonClick"),vx();return}if(t==="continue_shop"){yx();return}if(t==="restart_run"){pp();return}if(t==="toggle_mute"){Te.toggleMute(),Te.isMuted()||Te.play("buttonClick");return}}async function _x(){if(!D.canPlay())return;const t=new Map(D.hand.map(f=>[f.id,f])),e=vn.filter(f=>D.selected.has(f)).map(f=>t.get(f)).filter(f=>!!f);if(e.length===0)return;Dn=!0,qr=!0,Yr=D.roundScore;const n=MM(e.length);Te.play("whoosh");const i=At.createVector3();e.forEach((f,g)=>{const p=Ft.get(f.id);p&&(p.userData.keepAlive=!0,p.getWorldPosition(i),At.handGroup.remove(p),At.playGroup.add(p),At.playGroup.worldToLocal(i),p.position.copy(i),p.setSelected(!1),p.moveTo(n[g],.55,g*.07))}),await new Promise(f=>setTimeout(f,650)),wi=!0,ir=!0;const r=D.playSelected(vn);if(!r){wi=!1,ir=!1,qr=!1,Yr=null,Dn=!1;return}Vi[r.hand.type]=D.handPlayCounts[r.hand.type]??(Vi[r.hand.type]??0)+1,Wi();const s=D.phase==="game-over"||D.phase==="win",a=D.phase==="shop";s?Ls.classList.add("hidden"):a?(Bn.classList.add("hidden"),wi=!1):(wi=!1,ir=!1),fx(r);const o=new Set(r.hand.scoringCards.map(f=>f.id));for(const f of e){if(o.has(f.id))continue;const g=Ft.get(f.id);if(!g)continue;const p=g.faceMesh.material;p.transparent=!0,Ee.to(p,{opacity:.5,duration:.2})}const l=r.steps.filter(f=>f.stage!=="base"&&f.stage!=="destruction"&&f.stage!=="end_round"),c=.19,u=.15;l.forEach((f,g)=>{const p=u+g*c;Ee.delayedCall(p,()=>{if(f.cardId){const y=Ft.get(f.cardId);y&&(y.pulse(f.retrigger?1.28:1.18,.34),y.flash(f.retrigger?9300223:16765514,.42),mx(y,f),Te.play(f.retrigger?"multTick":"chipTick",{volume:.22,pitch:f.retrigger?1.18:1,pan:ip(y.position.x)}))}if(f.jokerId){const y=Ga.querySelector(`[data-joker-id="${f.jokerId}"]`);y&&(Ee.fromTo(y,{scale:1,y:0},{scale:1.18,y:-8,duration:.16,yoyo:!0,repeat:1,ease:"power2.out"}),gx(y,dp(f))),Te.play("multTick",{volume:.24,pitch:1.06})}f.chipsAfter!==void 0&&f.chipsBefore!==void 0&&f.chipsAfter!==f.chipsBefore&&(Ka(qs,f.chipsBefore,f.chipsAfter,.18,"chipTick"),Ee.fromTo(qs,{scale:1},{scale:1.14,duration:.12,yoyo:!0,repeat:1})),f.multAfter!==void 0&&f.multBefore!==void 0&&f.multAfter!==f.multBefore&&(Ka(Ys,f.multBefore,f.multAfter,.18,"multTick"),Ee.fromTo(Ys,{scale:1},{scale:1.18,duration:.12,yoyo:!0,repeat:1}))})});const d=r.steps.filter(f=>f.stage==="destruction"),h=u+l.length*c;d.forEach((f,g)=>{Ee.delayedCall(h+g*.22,()=>{if(!f.cardId)return;const p=Ft.get(f.cardId);if(!p)return;p.flash(16727887,.65),p.pulse(1.3,.4);const y=At.createVector3();p.getWorldPosition(y),At.emitBurst(y,{count:26,color:At.createColor("#8de8ff"),speed:3.2,spread:1.2,life:1.1,size:18}),Te.play("scorePop",{volume:.38,pitch:1.25})})});const m=h+d.length*.22+.35;Ee.delayedCall(m,()=>px(r));const _=D.roundScore-r.total;Ee.delayedCall(m+.05,()=>{Ka(nc,_,D.roundScore,1,"chipTick"),Ee.fromTo(nc,{scale:1},{scale:1.25,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})}),Ee.delayedCall(m+1.2,()=>{qr=!1,Yr=null;for(const f of e){const g=Ft.get(f.id);g&&(Ee.to(g.position,{y:-6,duration:.5,ease:"power2.in"}),Ee.to(g.rotation,{z:(Math.random()-.5)*1.5,duration:.5}),Ee.delayedCall(.55,()=>{So(f.id,g)}))}Dn=!1,pi(.5),lt(),s?(wi=!1,lt()):a&&(ir=!1,lt())})}async function vx(){if(!D.canDiscard())return;Dn=!0;const t=new Map(D.hand.map(i=>[i.id,i])),e=vn.filter(i=>D.selected.has(i)).map(i=>t.get(i)).filter(i=>!!i),n=e.reduce((i,r)=>i+(Ft.get(r.id)?.position.x??0),0)/Math.max(1,e.length);Te.play("sweep",{pan:ip(n)});for(const i of e){const r=Ft.get(i.id);r&&(r.userData.keepAlive=!0,Ee.to(r.position,{y:-5,x:r.position.x+(Math.random()-.5)*1.5,duration:.45,ease:"power2.in"}),Ee.to(r.rotation,{z:(Math.random()-.5)*1.2,duration:.45}),Ee.delayedCall(.5,()=>{So(i.id,r)}))}D.discardSelected(e.map(i=>i.id)),Ee.delayedCall(.55,()=>{Dn=!1,pi(.45)})}function yx(){return D.phase!=="shop"?!1:(Te.play("buttonClick"),sc.disabled=!0,Bc.disabled=!0,Ee.to(co,{y:-18,scale:.97,duration:.2,ease:"power2.in"}),Ee.to(Bn,{opacity:0,duration:.28,ease:"power2.inOut",onComplete:()=>{Bn.classList.add("hidden"),Bn.style.opacity="",co.style.transform="",D.continueFromShop(),pi(.65),lt(),sc.disabled=!1}}),!0)}var Mx=["Flush Five","Flush House","Five of a Kind","Straight Flush","Four of a Kind","Full House","Flush","Straight","Three of a Kind","Two Pair","Pair","High Card"];function fp(){Gh.replaceChildren();for(const t of Mx){const e=D.handLevels[t],n=document.createElement("div");n.className="run-info-row";const i=document.createElement("span");i.className="run-info-level",i.textContent=`lvl.${e.level}`;const r=document.createElement("strong");r.className="run-info-name",r.textContent=t;const s=document.createElement("span");s.className="run-info-score";const a=document.createElement("span");a.className="run-info-chips",a.textContent=e.chips.toLocaleString();const o=document.createElement("span");o.className="run-info-x",o.textContent="×";const l=document.createElement("span");l.className="run-info-mult",l.textContent=e.mult.toLocaleString(),s.append(a,o,l);const c=document.createElement("span");c.className="run-info-count",c.textContent=`# ${Vi[t]??0}`,n.append(i,r,s,c),Gh.appendChild(n)}}function Xc(){Zf.textContent=`Sound Effects: ${Te.isMuted()?"Off":"On"}`,Qf.textContent=`Music: ${Te.isMusicMuted()?"Off":"On"}`}function $c(t){dr=t,t==="run-info"?(fp(),Wa.classList.remove("hidden"),Xa.classList.add("hidden"),$a.classList.add("hidden")):t==="collection"?(hp(),$a.classList.remove("hidden"),Wa.classList.add("hidden"),Xa.classList.add("hidden")):(Xc(),Xa.classList.remove("hidden"),Wa.classList.add("hidden"),$a.classList.add("hidden")),Te.play("buttonClick")}function aa(){dr&&(Wa.classList.add("hidden"),Xa.classList.add("hidden"),$a.classList.add("hidden"),dr=null,Te.play("buttonClick"))}function pp(){Te.play("buttonClick"),qr=!1,Yr=null,ir=!1,wi=!1,Bn.classList.add("hidden"),Bn.style.opacity="";for(const[,t]of[...Ft])So(t.card.id,t);Ft.clear(),vn=[],Hi=null,np(),aa(),D.reset(),Js=Cc(D.config.seed),oo.value="",Us=dt.unlockedDecks.includes(D.deckKey)?D.deckKey:"red",Ci.value=D.stakeKey,pi(.6),lt()}for(const[t,e]of Object.entries(HM)){const n=gr(t);n&&n.addEventListener("click",()=>{hi(e)})}Oc.addEventListener("click",()=>fo("straight"));Fc.addEventListener("click",()=>fo("flush"));uS.addEventListener("click",()=>$c("run-info"));hS.addEventListener("click",()=>$c("options"));dS.addEventListener("click",aa);fS.addEventListener("click",aa);_S.addEventListener("click",()=>$c("collection"));yS.addEventListener("click",aa);MS.addEventListener("click",()=>{oo.value=String(cf("")),Te.play("buttonClick")});gS.addEventListener("click",Vc);mS.addEventListener("click",Vc);Zf.addEventListener("click",()=>{Te.toggleMute(),Te.isMuted()||Te.play("buttonClick"),Xc()});Qf.addEventListener("click",()=>{Te.toggleMusicMute(),Xc()});pS.addEventListener("click",()=>{pp()});BS.addEventListener("click",t=>{t.stopPropagation(),Gc()});document.addEventListener("click",t=>{Pn.classList.contains("hidden")||t.target instanceof Node&&Pn.contains(t.target)||Gc()});Ci.addEventListener("change",Wc);HS.addEventListener("click",()=>{const t=cf(oo.value);Js=Cc(t),dt=wg(dt),lf(localStorage,dt),D.setUnlockedJokerKeys(dt.unlockedJokers),D.configureRun(Us,Ci.value,t),oo.value=String(t),np(),Te.play("buttonClick"),lt()});LS.addEventListener("click",()=>{D.skipBooster()&&(Te.play("buttonClick"),lt())});NS.addEventListener("click",()=>{D.cancelTargetMode()&&(Te.play("buttonClick"),lt())});ac.addEventListener("click",()=>{D.confirmTargetMode()&&(Te.play("chaching"),lt())});Bc.addEventListener("click",()=>{D.rerollShop()&&(Te.play("sweep"),Ee.fromTo(rc,{opacity:.55,y:8},{opacity:1,y:0,duration:.22,ease:"power2.out"}),lt())});sc.addEventListener("click",()=>{hi("continue_shop")});var Na=gr("btn-mute"),mp=null;if(Na){const t=e=>{Na.textContent=e?"🔇":"🔊",Na.setAttribute("aria-label",e?"Unmute SFX":"Mute SFX"),Na.title=e?"Unmute SFX":"Mute SFX"};t(Te.isMuted()),mp=Te.onMutedChange(t)}var Es=gr("btn-music-mute"),gp=null;if(Es){const t=e=>{Es.textContent=e?"🔇":"🎵",Es.setAttribute("aria-label",e?"Unmute Music":"Mute Music"),Es.title=e?"Unmute Music":"Mute Music"};t(Te.isMusicMuted()),Es.addEventListener("click",()=>Te.toggleMusicMute()),gp=Te.onMusicMutedChange(t)}var _p=t=>{if(t.code==="Escape"){t.preventDefault(),t.stopPropagation(),Pn.classList.contains("hidden")?D.targetMode?(D.cancelTargetMode(),lt()):D.phase==="booster"?(D.skipBooster(),lt()):dr?aa():Vc():Gc();return}if(dr)return;if(!t.repeat&&(t.code==="ControlLeft"||t.code==="ControlRight")){t.preventDefault(),hi("play_hand");return}if(!t.repeat&&(t.code==="ShiftLeft"||t.code==="ShiftRight")){t.preventDefault(),hi("discard");return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey){if(t.code==="KeyS"){t.preventDefault(),fo("straight");return}if(t.code==="KeyF"){t.preventDefault(),fo("flush");return}}const e=WM(t);e&&(t.preventDefault(),hi(e))};window.addEventListener("keydown",_p);window.addEventListener("resize",zc);window.addEventListener("pagehide",Wi);var Sx=zM({renderer:At.renderer,camera:At.camera,handGroup:At.handGroup,getHandObjects:YS,onToggleSelect:t=>!!hi("select_card",{cardId:t}),onReorder:t=>{vn=t,Hi=null,Hc(),Wi()}}),xx=D.subscribe(()=>{Wi(),lt(),dr==="run-info"&&fp()});window.__OPEN_POKER_TEST__={snapshot:()=>D.toSnapshot(),loadSnapshot:t=>{qr=!1,Yr=null,ir=!1,wi=!1,D.reset(t),vn=t.hand.map(e=>e.id),pi(0),lt()},selectFirst:(t=1)=>{const e=[...D.selected];for(const n of e)D.toggleSelect(n);for(const n of D.hand.slice(0,Math.max(0,Math.min(5,t))))D.selected.has(n.id)||D.toggleSelect(n.id)},play:()=>{hi("play_hand")},discard:()=>{hi("discard")},buyOffer:(t=0)=>{const e=D.shop?.offers[t];return e?D.buyOffer(e.id):!1},rerollShop:()=>D.rerollShop(),continueShop:()=>{const t=D.continueFromShop();return t&&(pi(0),lt()),t},sellJoker:(t=0)=>{const e=D.jokers[t];return e?D.sellJoker(e.id):!1},sellConsumable:(t=0)=>{const e=D.consumables[t];return e?D.sellConsumable(e.id):!1},useConsumable:(t=0)=>{const e=D.consumables[t];return e?D.useConsumable(e.id):!1},restart:()=>{hi("restart_run")},dispose:()=>{Sx(),xx(),mp?.(),gp?.(),window.removeEventListener("keydown",_p),window.removeEventListener("resize",zc),window.removeEventListener("pagehide",Wi),Ee.globalTimeline.clear();for(const[,t]of Ft)Qh(t);for(Ft.clear();uo.length>0;){const t=uo.pop();t&&Qh(t)}for(;ho.length>0;)ho.pop()?.remove();At.dispose(),Te.dispose()}};pi(.6);lt();Wi();
