(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ii(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function zh(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},As={duration:.5,overwrite:!1,delay:0},Xl,Ut,ct,Cn=1e8,st=1/Cn,al=Math.PI*2,rp=al/4,sp=0,Vh=Math.sqrt,ap=Math.cos,op=Math.sin,It=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},ci=function(e){return typeof e=="number"},$l=function(e){return typeof e>"u"},jn=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},ql=function(){return typeof window<"u"},Ks=function(e){return _t(e)||It(e)},Gh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,lp=/random\([^)]+\)/g,cp=/,\s*/g,kc=/(?:-?\.?\d|\.)+/gi,Hh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wh=/[+-]=-?[.\d]+/,up=/[^,'"\[\]\s]+/gi,hp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,Gn,ol,Yl,yn={},Na={},Xh,$h=function(e){return(Na=Xr(e,yn))&&rn},jl=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Cs=function(e,n){return!n&&console.warn(e)},qh=function(e,n){return e&&(yn[e]=n)&&Na&&(Na[e]=n)||yn},Rs=function(){return 0},dp={suppressEvents:!0,isStart:!0,kill:!1},ba={suppressEvents:!0,kill:!1},fp={suppressEvents:!0},Kl={},Pi=[],ll={},Yh,hn={},ho={},Oc=30,Ta=[],Zl="",Jl=function(e){var n=e[0],i,r;if(jn(n)||_t(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Ta.length;r--&&!Ta[r].targetTest(n););i=Ta[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gd(e[r],i)))||e.splice(r,1);return e},nr=function(e){return e._gsap||Jl(Rn(e))[0]._gsap},jh=function(e,n,i){return(i=e[n])&&_t(i)?e[n]():$l(i)&&e.getAttribute&&e.getAttribute(n)||i},en=function(e,n){return(e=e.split(",")).forEach(n)||e},St=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},Fr=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},pp=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Ua=function(){var e=Pi.length,n=Pi.slice(0),i,r;for(ll={},Pi.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ql=function(e){return!!(e._initted||e._startAt||e.add)},Kh=function(e,n,i,r){Pi.length&&!Ut&&Ua(),e.render(n,i,r||!!(Ut&&n<0&&Ql(e))),Pi.length&&!Ut&&Ua()},Zh=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(up).length<2?n:It(e)?e.trim():e},Jh=function(e){return e},Sn=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},mp=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Xr=function(e,n){for(var i in n)e[i]=n[i];return e},Fc=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=jn(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},ka=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},bs=function(e){var n=e.parent||dt,i=e.keyframes?mp(Wt(e.keyframes)):Sn;if(Qt(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},gp=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},Qh=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},eo=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},Ui=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ir=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},_p=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},cl=function(e,n,i,r){return e._startAt&&(Ut?e._startAt.revert(ba):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},vp=function t(e){return!e||e._ts&&t(e.parent)},Bc=function(e){return e._repeat?$r(e._tTime,e=e.duration()+e._rDelay)*e:0},$r=function(e,n){var i=Math.floor(e=ht(e/n));return e&&i===e?i-1:i},Oa=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},to=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},no=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ht(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),to(e),i._dirty||ir(i,e)),e},ed=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=Oa(e.rawTime(),n),(!n._dur||Gs(0,n.totalDuration(),i)-n._tTime>st)&&n.render(i,!0)),ir(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-st}},$n=function(e,n,i,r){return n.parent&&Ui(n),n._start=ht((ci(i)?i:i||e!==dt?wn(e,i,n):e._time)+n._delay),n._end=ht(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Qh(e,n,"_first","_last",e._sort?"_start":0),ul(n)||(e._recent=n),r||ed(e,n),e._ts<0&&no(e,e._tTime),e},td=function(e,n){return(yn.ScrollTrigger||jl("scrollTrigger",n))&&yn.ScrollTrigger.create(n,e)},nd=function(e,n,i,r,s){if(tc(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Yh!==fn.frame)return Pi.push(e),e._lazy=[s,r],1},yp=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},ul=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},Sp=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&yp(e)&&!(!e._initted&&ul(e))||(e._ts<0||e._dp._ts<0)&&!ul(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Gs(0,e._tDur,n),u=$r(l,o),e._yoyo&&u&1&&(a=1-a),u!==$r(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||r||e._zTime===st||!n&&e._zTime){if(!e._initted&&nd(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?st:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;n<0&&cl(e,n,i,!0),e._onUpdate&&!i&&pn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&pn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&Ui(e,1),!i&&!Ut&&(pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},Mp=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},qr=function(e,n,i,r){var s=e._repeat,a=ht(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ht(a*(s+1)+e._rDelay*s):a,o>0&&!r&&no(e,e._tTime=e._tDur*o),e.parent&&to(e),i||ir(e.parent,e),e},zc=function(e){return e instanceof Jt?ir(e):qr(e,e._dur)},xp={_start:0,endTime:Rs,totalDuration:Rs},wn=function t(e,n,i){var r=e.labels,s=e._recent||xp,a=e.duration()>=Cn?s.endTime(!1):e._dur,o,l,c;return It(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(Wt(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},Ts=function(e,n,i){var r=ci(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;a.immediateRender=Qt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new Et(n[0],a,n[s+1])},zi=function(e,n){return e||e===0?n(e):n},Gs=function(e,n,i){return i<e?e:i>n?n:i},Gt=function(e,n){return!It(e)||!(n=hp.exec(e))?"":n[1]},bp=function(e,n,i){return zi(i,function(r){return Gs(e,n,r)})},hl=[].slice,id=function(e,n){return e&&jn(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&jn(e[0]))&&!e.nodeType&&e!==Gn},Tp=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return It(r)&&!n||id(r,1)?(s=i).push.apply(s,Rn(r)):i.push(r)})||i},Rn=function(e,n,i){return ct&&!n&&ct.selector?ct.selector(e):It(e)&&!i&&(ol||!Yr())?hl.call((n||Yl).querySelectorAll(e),0):Wt(e)?Tp(e,i):id(e)?hl.call(e,0):e?[e]:[]},dl=function(e){return e=Rn(e)[0]||Cs("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return Rn(n,i.querySelectorAll?i:i===e?Cs("Invalid scope")||Yl.createElement("div"):e)}},rd=function(e){return e.sort(function(){return .5-Math.random()})},sd=function(e){if(_t(e))return e;var n=jn(e)?e:{each:e},i=rr(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,u=r,d=r;return It(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,f,_){var p=(_||n).length,g=a[p],m,y,T,b,E,R,C,v,M;if(!g){if(M=n.grid==="auto"?0:(n.grid||[1,Cn])[1],!M){for(C=-Cn;C<(C=_[M++].getBoundingClientRect().left)&&M<p;);M<p&&M--}for(g=a[p]=[],m=l?Math.min(M,p)*u-.5:r%M,y=M===Cn?0:l?p*d/M-.5:r/M|0,C=0,v=Cn,R=0;R<p;R++)T=R%M-m,b=y-(R/M|0),g[R]=E=c?Math.abs(c==="y"?b:T):Vh(T*T+b*b),E>C&&(C=E),E<v&&(v=E);r==="random"&&rd(g),g.max=C-v,g.min=v,g.v=p=(parseFloat(n.amount)||parseFloat(n.each)*(M>p?p-1:c?c==="y"?p/M:M:Math.max(M,p/M))||0)*(r==="edges"?-1:1),g.b=p<0?s-p:s,g.u=Gt(n.amount||n.each)||0,i=i&&p<0?Op(i):i}return p=(g[h]-g.min)/g.max||0,ht(g.b+(i?i(p):p)*g.v)+g.u}},fl=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ht(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(ci(i)?0:Gt(i))}},ad=function(e,n){var i=Wt(e),r,s;return!i&&jn(e)&&(r=i=e.radius||Cn,e.values?(e=Rn(e.values),(s=!ci(e[0]))&&(r*=r)):e=fl(e.increment)),zi(n,i?_t(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Cn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:a,s||u===a||ci(a)?u:u+Gt(a)}:fl(e))},od=function(e,n,i,r){return zi(Wt(e)?!n:i===!0?!!(i=0):!r,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},Ep=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},wp=function(e,n){return function(i){return e(parseFloat(i))+(n||Gt(i))}},Ap=function(e,n,i){return cd(e,n,0,1,i)},ld=function(e,n,i){return zi(i,function(r){return e[~~n(r)]})},Cp=function t(e,n,i){var r=n-e;return Wt(e)?ld(e,t(0,e.length),n):zi(i,function(s){return(r+(s-e)%r)%r+e})},Rp=function t(e,n,i){var r=n-e,s=r*2;return Wt(e)?ld(e,t(0,e.length-1),n):zi(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ps=function(e){return e.replace(lp,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(cp);return od(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},cd=function(e,n,i,r,s){var a=n-e,o=r-i;return zi(s,function(l){return i+((l-e)/a*o||0)})},Pp=function t(e,n,i,r){var s=isNaN(e+n)?0:function(f){return(1-f)*e+f*n};if(!s){var a=It(e),o={},l,c,u,d,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(Wt(e)&&!Wt(n)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,s=function(_){_*=d;var p=Math.min(h,~~_);return u[p](_-p)},i=n}else r||(e=Xr(Wt(e)?[]:{},e));if(!u){for(l in n)ec.call(o,e,l,"get",n[l]);s=function(_){return rc(_,o)||(a?e.p:e)}}}return zi(i,s)},Vc=function(e,n,i){var r=e.labels,s=Cn,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},pn=function(e,n,i){var r=e.vars,s=r[n],a=ct,o=e._ctx,l,c,u;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&Pi.length&&Ua(),o&&(ct=o),u=l?s.apply(c,l):s.call(c),ct=a,u},vs=function(e){return Ui(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&pn(e,"onInterrupt"),e},Ur,ud=[],hd=function(e){if(e)if(e=!e.name&&e.default||e,ql()||e.headless){var n=e.name,i=_t(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:Rs,render:rc,add:ec,kill:qp,modifier:$p,rawVars:0},a={targetTest:0,get:0,getSetter:ic,aliases:{},register:0};if(Yr(),e!==r){if(hn[n])return;Sn(r,Sn(ka(e,s),a)),Xr(r.prototype,Xr(s,ka(e,a))),hn[r.prop=n]=r,e.targetTest&&(Ta.push(r),Kl[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}qh(n,r),e.register&&e.register(rn,r,tn)}else ud.push(e)},rt=255,ys={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},fo=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*rt+.5|0},dd=function(e,n,i){var r=e?ci(e)?[e>>16,e>>8&rt,e&rt]:0:ys.black,s,a,o,l,c,u,d,h,f,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ys[e])r=ys[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(kc),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=fo(l+1/3,s,a),r[1]=fo(l,s,a),r[2]=fo(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Hh),i&&r.length<4&&(r[3]=1),r}else r=e.match(kc)||ys.transparent;r=r.map(Number)}return n&&!_&&(s=r[0]/rt,a=r[1]/rt,o=r[2]/rt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},fd=function(e){var n=[],i=[],r=-1;return e.split(Li).forEach(function(s){var a=s.match(Nr)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},Gc=function(e,n,i){var r="",s=(e+r).match(Li),a=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=dd(h,n,1))&&a+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=fd(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Li,"1").split(Nr),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Li),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},Li=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ys)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),Lp=/hsl[a]?\(/,pd=function(e){var n=e.join(" "),i;if(Li.lastIndex=0,Li.test(n))return i=Lp.test(n),e[1]=Gc(e[1],i),e[0]=Gc(e[0],i,fd(e[1])),!0},Ls,fn=(function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,c,u,d,h,f,_=function p(g){var m=t()-r,y=g===!0,T,b,E,R;if((m>e||m<0)&&(i+=m-n),r+=m,E=r-i,T=E-a,(T>0||y)&&(R=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,a+=T+(T>=s?4:s-T),b=1),y||(l=c(p)),b)for(f=0;f<o.length;f++)o[f](E,h,R,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){Xh&&(!ol&&ql()&&(Gn=ol=window,Yl=Gn.document||{},yn.gsap=rn,(Gn.gsapVersions||(Gn.gsapVersions=[])).push(rn.version),$h(Na||Gn.GreenSockGlobals||!Gn.gsap&&Gn||{}),ud.forEach(hd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,a-d.time*1e3+1|0)},Ls=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ls=0,c=Rs},lagSmoothing:function(g,m){e=g||1/0,n=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,m,y){var T=m?function(b,E,R,C){g(b,E,R,C),d.remove(T)}:g;return d.remove(g),o[y?"unshift":"push"](T),Yr(),T},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),Yr=function(){return!Ls&&fn.wake()},Ke={},Dp=/^[\d.\-M][\d.\-,\s]/,Ip=/["']/g,Np=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(Ip,"").trim():+c,r=l.substr(o+1).trim();return n},Up=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},kp=function(e){var n=(e+"").split("("),i=Ke[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Np(n[1])]:Up(e).split(",").map(Zh)):Ke._CE&&Dp.test(e)?Ke._CE("",e):i},Op=function(e){return function(n){return 1-e(1-n)}},rr=function(e,n){return e&&(_t(e)?e:Ke[e]||kp(e))||n},cr=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return en(e,function(o){Ke[o]=yn[o]=s,Ke[a=o.toLowerCase()]=i;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},md=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},po=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/al*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*op((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:md(o);return s=al/s,l.config=function(c,u){return t(e,c,u)},l},mo=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:md(i);return r.config=function(s){return t(e,s)},r};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;cr(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;cr("Elastic",po("in"),po("out"),po());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};cr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);cr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});cr("Circ",function(t){return-(Vh(1-t*t)-1)});cr("Sine",function(t){return t===1?1:-ap(t*rp)+1});cr("Back",mo("in"),mo("out"),mo());Ke.SteppedEase=Ke.steps=yn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-st;return function(o){return((r*Gs(0,a,o)|0)+s)*i}}};As.ease=Ke["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Zl+=t+","+t+"Params,"});var gd=function(e,n){this.id=sp++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:jh,this.set=n?n.getSetter:ic},Ds=(function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,qr(this,+n.duration,1,1),this.data=n.data,ct&&(this._ctx=ct,ct.data.push(this)),Ls||fn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,qr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Yr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(no(this,i),!s._dp||s.parent||ed(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Kh(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Bc(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Bc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?$r(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Oa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-st?0:this._rts,this.totalTime(Gs(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),to(this),_p(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$n(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Qt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oa(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=fp);var r=Ut;return Ut=i,Ql(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ut=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,zc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,zc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(wn(this,i),Qt(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Qt(r)),this._dur||(this._zTime=-st),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=_t(i)?i:Jh,l=function(){var u=r.then;r.then=null,s&&s(),_t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){vs(this)},t})();Sn(Ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Jt=(function(t){zh(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Qt(i.sortChildren),dt&&$n(i.parent||dt,ii(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&td(ii(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return Ts(0,arguments,this),this},n.from=function(r,s,a){return Ts(1,arguments,this),this},n.fromTo=function(r,s,a,o){return Ts(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,bs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,wn(this,a),1),this},n.call=function(r,s,a){return $n(this,Et.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(r,a,wn(this,l)),this},n.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,bs(a).immediateRender=Qt(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},n.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,bs(o).immediateRender=Qt(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ht(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,_,p,g,m,y,T,b,E,R,C;if(this!==dt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,b=this._start,T=this._ts,m=!T,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(h=ht(u%g),u===l?(p=this._repeat,h=c):(E=ht(u/g),p=~~E,p&&p===E&&(h=c,p--),h>c&&(h=c)),E=$r(this._tTime,g),!o&&this._tTime&&E!==p&&this._tTime-E*g-this._dur<=0&&(E=p),R&&p&1&&(h=c-h,C=1),p!==E&&!this._lock){var v=R&&E&1,M=v===(R&&p&1);if(p<E&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(C?0:ht(p*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&pn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,E=p),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Mp(this,ht(o),ht(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!E&&(pn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-st);break}}f=_}else{f=this._last;for(var I=r<0?r:h;f;){if(_=f._prev,(f._act||I<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(I-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(I-f._start)*f._ts,s,a||Ut&&Ql(f)),h!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=I?-st:st);break}}f=_}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=b,to(this),this.render(r,s,a);this._onUpdate&&!s&&pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ui(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(pn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(ci(s)||(s=wn(this,s,r)),!(r instanceof Ds)){if(Wt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(It(r))return this.addLabel(r,s);if(_t(r))r=Et.delayedCall(0,r);else return this}return this!==r?$n(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Cn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return It(r)?this.removeLabel(r):_t(r)?this.killTweensOf(r):(r.parent===this&&eo(this,r),r===this._recent&&(this._recent=this._last),ir(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=wn(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Et.delayedCall(0,s||Rs,a);return o.data="isPause",this._hasPause=1,$n(this,o,wn(this,r))},n.removePause=function(r){var s=this._first;for(r=wn(this,r);s;)s._start===r&&s.data==="isPause"&&Ui(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ti!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=Rn(r),l=this._first,c=ci(s),u;l;)l instanceof Et?pp(l._targets,o)&&(c?(!Ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=wn(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=Et.to(a,Sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!f){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&qr(_,g,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,Sn({startAt:{time:wn(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Vc(this,wn(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Vc(this,wn(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=ht(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return ir(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ir(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=Cn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$n(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ht(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qr(a,a===dt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(dt._ts&&(Kh(dt,Oa(r,dt)),Yh=fn.frame),fn.frame>=Oc){Oc+=_n.autoSleep||120;var s=dt._first;if((!s||!s._ts)&&_n.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e})(Ds);Sn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fp=function(e,n,i,r,s,a,o){var l=new tn(this._pt,e,n,0,1,xd,null,s),c=0,u=0,d,h,f,_,p,g,m,y;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=Ps(r)),a&&(y=[i,r],a(y,e,n),i=y[0],r=y[1]),h=i.match(uo)||[];d=uo.exec(r);)_=d[0],p=r.substring(c,d.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:_.charAt(1)==="="?Fr(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},c=uo.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Wh.test(r)||m)&&(l.e=0),this._pt=l,l},ec=function(e,n,i,r,s,a,o,l,c,u){_t(r)&&(r=r(s||0,e,a));var d=e[n],h=i!=="get"?i:_t(d)?c?e[n.indexOf("set")||!_t(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():d,f=_t(d)?c?Hp:Sd:nc,_;if(It(r)&&(~r.indexOf("random(")&&(r=Ps(r)),r.charAt(1)==="="&&(_=Fr(h,r)+(Gt(h)||0),(_||_===0)&&(r=_))),!u||h!==r||pl)return!isNaN(h*r)&&r!==""?(_=new tn(this._pt,e,n,+h||0,r-(h||0),typeof d=="boolean"?Xp:Md,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(n in e)&&jl(n,r),Fp.call(this,e,n,h,r,f,l||_n.stringFilter,c))},Bp=function(e,n,i,r,s){if(_t(e)&&(e=Es(e,s,n,i,r)),!jn(e)||e.style&&e.nodeType||Wt(e)||Gh(e))return It(e)?Es(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=Es(e[o],s,n,i,r);return a},_d=function(e,n,i,r,s,a){var o,l,c,u;if(hn[e]&&(o=new hn[e]).init(s,o.rawVars?n[e]:Bp(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new tn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ur))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ti,pl,tc=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,_=e._dur,p=e._startAt,g=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:g,T=e._overwrite==="auto"&&!Xl,b=e.timeline,E=r.easeReverse||d,R,C,v,M,I,A,L,F,D,B,z,O,K;if(b&&(!h||!s)&&(s="none"),e._ease=rr(s,As.ease),e._rEase=E&&(rr(E)||e._ease),e._from=!b&&!!r.runBackwards,e._from&&(e.ratio=1),!b||h&&!r.stagger){if(F=g[0]?nr(g[0]).harness:0,O=F&&r[F.prop],R=ka(r,Kl),p&&(p._zTime<0&&p.progress(1),n<0&&u&&o&&!f?p.render(-1,!0):p.revert(u&&_?ba:dp),p._lazy=0),a){if(Ui(e._startAt=Et.set(g,Sn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!p&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ut||!o&&!f)&&e._startAt.revert(ba),o&&_&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&_&&!p){if(n&&(o=!1),v=Sn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Qt(l),immediateRender:o,stagger:0,parent:m},R),O&&(v[F.prop]=O),Ui(e._startAt=Et.set(g,v)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ut?e._startAt.revert(ba):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,st,st);else if(!n)return}for(e._pt=e._ptCache=0,l=_&&Qt(l)||l&&!_,C=0;C<g.length;C++){if(I=g[C],L=I._gsap||Jl(g)[C]._gsap,e._ptLookup[C]=B={},ll[L.id]&&Pi.length&&Ua(),z=y===g?C:y.indexOf(I),F&&(D=new F).init(I,O||R,e,z,y)!==!1&&(e._pt=M=new tn(e._pt,I,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(ee){B[ee]=M}),D.priority&&(A=1)),!F||O)for(v in R)hn[v]&&(D=_d(v,R,e,z,I,y))?D.priority&&(A=1):B[v]=M=ec.call(e,I,v,"get",R[v],z,y,0,r.stringFilter);e._op&&e._op[C]&&e.kill(I,e._op[C]),T&&e._pt&&(Ti=e,dt.killTweensOf(I,B,e.globalTime(n)),K=!e.parent,Ti=0),e._pt&&l&&(ll[L.id]=1)}A&&bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,h&&n<=0&&b.render(Cn,!0,!0)},zp=function(e,n,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,h,f;if(!c)for(c=e._ptCache[n]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return pl=1,e.vars[n]="+=0",tc(e,o),pl=0,l?Cs(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,d.e&&(d.e=St(i)+Gt(d.e)),d.b&&(d.b=u.s+Gt(d.b))},Vp=function(e,n){var i=e[0]?nr(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=Xr({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Gp=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(Wt(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},Es=function(e,n,i,r,s){return _t(e)?e.call(n,i,r,s):It(e)&&~e.indexOf("random(")?Ps(e):e},vd=Zl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",yd={};en(vd+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return yd[t]=1});var Et=(function(t){zh(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:bs(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,p=l.defaults,g=l.scrollTrigger,m=r.parent||dt,y=(Wt(i)||Gh(i)?ci(i[0]):"length"in r)?[i]:Rn(i),T,b,E,R,C,v,M,I;if(o._targets=y.length?Jl(y):Cs("GSAP target "+i+" not found. https://gsap.com",!_n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||h||Ks(c)||Ks(u)){r=o.vars;var A=r.easeReverse||r.yoyoEase;if(T=o.timeline=new Jt({data:"nested",defaults:p||{},targets:m&&m.data==="nested"?m.vars.targets:y}),T.kill(),T.parent=T._dp=ii(o),T._start=0,h||Ks(c)||Ks(u)){if(R=y.length,M=h&&sd(h),jn(h))for(C in h)~vd.indexOf(C)&&(I||(I={}),I[C]=h[C]);for(b=0;b<R;b++)E=ka(r,yd),E.stagger=0,A&&(E.easeReverse=A),I&&Xr(E,I),v=y[b],E.duration=+Es(c,ii(o),b,v,y),E.delay=(+Es(u,ii(o),b,v,y)||0)-o._delay,!h&&R===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),T.to(v,E,M?M(b,v,y):0),T._ease=Ke.none;T.duration()?c=u=0:o.timeline=0}else if(_){bs(Sn(T.vars.defaults,{ease:"none"})),T._ease=rr(_.ease||r.ease||"none");var L=0,F,D,B;if(Wt(_))_.forEach(function(z){return T.to(y,z,">")}),T.duration();else{E={};for(C in _)C==="ease"||C==="easeEach"||Gp(C,_[C],E,_.easeEach);for(C in E)for(F=E[C].sort(function(z,O){return z.t-O.t}),L=0,b=0;b<F.length;b++)D=F[b],B={ease:D.e,duration:(D.t-(b?F[b-1].t:0))/100*c},B[C]=D.v,T.to(y,B,L),L+=B.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!Xl&&(Ti=ii(o),dt.killTweensOf(y),Ti=0),$n(m,ii(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!_&&o._start===ht(m._time)&&Qt(d)&&vp(ii(o))&&m.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),g&&td(ii(o),g),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-st&&!u?l:r<st?0:r,h,f,_,p,g,m,y,T;if(!c)Sp(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,T=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+r,s,a);if(h=ht(d%p),d===l?(_=this._repeat,h=c):(g=ht(d/p),_=~~g,_&&_===g?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),g=$r(this._tTime,p),h===o&&!a&&this._initted&&_===g)return this._tTime=d,this;_!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==p&&this._initted&&(this._lock=a=1,this.render(ht(p*_),!0).invalidate()._lock=0)}if(!this._initted){if(nd(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var b=h<o;if(b!==this._inv){var E=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(b?-1:1)/E:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!g&&(pn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;T&&T.render(r<0?r:T._dur*T._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&cl(this,r,s,a),pn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&pn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&cl(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ui(this,1),!s&&!(u&&!o)&&(d||o||m)&&(pn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){Ls||fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||tc(this,c),u=this._ease(c/this._dur),zp(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(no(this,0),this.parent||Qh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ti&&Ti.vars.overwrite!==!0)._first||vs(this),this.parent&&a!==this.timeline.totalDuration()&&qr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Rn(r):o,c=this._ptLookup,u=this._pt,d,h,f,_,p,g,m;if((!s||s==="all")&&gp(o,l))return s==="all"&&(this._pt=0),vs(this);for(d=this._op=this._op||[],s!=="all"&&(It(s)&&(p={},en(s,function(y){return p[y]=1}),s=p),s=Vp(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,_=h,f={}):(f=d[m]=d[m]||{},_=s);for(p in _)g=h&&h[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&eo(this,g,"_pt"),delete h[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&vs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ts(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ts(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return dt.killTweensOf(r,s,a)},e})(Ds);Sn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(t){Et[t]=function(){var e=new Jt,n=hl.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var nc=function(e,n,i){return e[n]=i},Sd=function(e,n,i){return e[n](i)},Hp=function(e,n,i,r){return e[n](r.fp,i)},Wp=function(e,n,i){return e.setAttribute(n,i)},ic=function(e,n){return _t(e[n])?Sd:$l(e[n])&&e.setAttribute?Wp:nc},Md=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Xp=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},xd=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},rc=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},$p=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},qp=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?eo(this,n,"_pt"):n.dep||(i=1),n=r;return!i},Yp=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},bd=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},tn=(function(){function t(n,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Md,this.d=l||this,this.set=c||nc,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Yp,this.m=i,this.mt=s,this.tween=r},t})();en(Zl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Kl[t]=1});yn.TweenMax=yn.TweenLite=Et;yn.TimelineLite=yn.TimelineMax=Jt;dt=new Jt({sortChildren:!1,defaults:As,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=pd;var sr=[],Ea={},jp=[],Hc=0,Kp=0,go=function(e){return(Ea[e]||jp).map(function(n){return n()})},ml=function(){var e=Date.now(),n=[];e-Hc>2&&(go("matchMediaInit"),sr.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Gn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),go("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Hc=e,go("matchMedia"))},Td=(function(){function t(n,i){this.selector=i&&dl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Kp++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){_t(i)&&(s=r,r=i,i=_t);var a=this,o=function(){var c=ct,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=dl(s)),ct=a,d=r.apply(a,arguments),_t(d)&&a._r.push(d),ct=c,a.selector=u,a.isReverted=!1,d};return a.last=o,i===_t?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=ct;ct=null,i(this),ct=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=sr.length;a--;)sr[a].id===this.id&&sr.splice(a,1)},e.revert=function(i){this.kill(i||{})},t})(),Zp=(function(){function t(n){this.contexts=[],this.scope=n,ct&&ct.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){jn(i)||(i={matches:i});var a=new Td(0,s||this.scope),o=a.conditions={},l,c,u;ct&&!a.selector&&(a.selector=ct.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Gn.matchMedia(i[c]),l&&(sr.indexOf(a)<0&&sr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ml):l.addEventListener("change",ml)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t})(),Fa={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return hd(r)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,n){return dt.getTweensOf(e,n)},getProperty:function(e,n,i,r){It(e)&&(e=Rn(e)[0]);var s=nr(e||{}).get,a=i?Jh:Zh;return i==="native"&&(i=""),e&&(n?a((hn[n]&&hn[n].get||s)(e,n,i,r)):function(o,l,c){return a((hn[o]&&hn[o].get||s)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=Rn(e),e.length>1){var r=e.map(function(u){return rn.quickSetter(u,n,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=hn[n],o=nr(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var d=new a;Ur._pt=0,d.init(e,i?u+i:u,Ur,0,[e]),d.render(1,d),Ur._pt&&rc(1,Ur)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,n,i){var r,s=rn.to(e,Sn((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(n,l,c,u)};return a.tween=s,a},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rr(e.ease,As.ease)),Fc(As,e||{})},config:function(e){return Fc(_n,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!hn[o]&&!yn[o]&&Cs(n+" effect requires "+o+" plugin.")}),ho[n]=function(o,l,c){return i(Rn(o),Sn(l||{},s),c)},a&&(Jt.prototype[n]=function(o,l,c){return this.add(ho[n](o,jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Ke[e]=rr(n)},parseEase:function(e,n){return arguments.length?rr(e,n):Ke},getById:function(e){return dt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Jt(e),r,s;for(i.smoothChildTiming=Qt(e.smoothChildTiming),dt.remove(i),i._dp=0,i._time=i._tTime=dt._time,r=dt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&$n(i,r,r._start-r._delay),r=s;return $n(dt,i,0),i},context:function(e,n){return e?new Td(e,n):ct},matchMedia:function(e){return new Zp(e)},matchMediaRefresh:function(){return sr.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||ml()},addEventListener:function(e,n){var i=Ea[e]||(Ea[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Ea[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:Cp,wrapYoyo:Rp,distribute:sd,random:od,snap:ad,normalize:Ap,getUnit:Gt,clamp:bp,splitColor:dd,toArray:Rn,selector:dl,mapRange:cd,pipe:Ep,unitize:wp,interpolate:Pp,shuffle:rd},install:$h,effects:ho,ticker:fn,updateRoot:Jt.updateRoot,plugins:hn,globalTimeline:dt,core:{PropTween:tn,globals:qh,Tween:Et,Timeline:Jt,Animation:Ds,getCache:nr,_removeLinkedListItem:eo,reverting:function(){return Ut},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return Xl=e}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Fa[t]=Et[t]});fn.add(Jt.updateRoot);Ur=Fa.to({},{duration:0});var Jp=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},Qp=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Jp(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},_o=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(It(s)&&(l={},en(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}Qp(o,s)}}}},rn=Fa.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)Ut?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},_o("roundProps",fl),_o("modifiers"),_o("snap",ad))||Fa;Et.version=Jt.version=rn.version="3.15.0";Xh=1;ql()&&Yr();var FM=Ke.Power0,BM=Ke.Power1,zM=Ke.Power2,VM=Ke.Power3,GM=Ke.Power4,HM=Ke.Linear,WM=Ke.Quad,XM=Ke.Cubic,$M=Ke.Quart,qM=Ke.Quint,YM=Ke.Strong,jM=Ke.Elastic,KM=Ke.Back,ZM=Ke.SteppedEase,JM=Ke.Bounce,QM=Ke.Sine,ex=Ke.Expo,tx=Ke.Circ,Wc,Ei,Br,sc,Ji,Xc,ac,em=function(){return typeof window<"u"},ui={},Ki=180/Math.PI,zr=Math.PI/180,mr=Math.atan2,$c=1e8,oc=/([A-Z])/g,tm=/(left|right|width|margin|padding|x)/i,nm=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gl=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},im=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},rm=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},sm=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},am=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},Ed=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},wd=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},om=function(e,n,i){return e.style[n]=i},lm=function(e,n,i){return e.style.setProperty(n,i)},cm=function(e,n,i){return e._gsap[n]=i},um=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},hm=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},dm=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},ft="transform",nn=ft+"Origin",fm=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in ui&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ri(r,o)}):this.tfm[e]=a.x?a[e]:ri(r,e),e===nn&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(ft)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(nn,n,"")),e=ft}(s||n)&&this.props.push(e,n,s[e])},Ad=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pm=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(oc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=ac(),(!s||!s.isStart)&&!i[ft]&&(Ad(i),r.zOrigin&&i[nn]&&(i[nn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Cd=function(e,n){var i={target:e,props:[],revert:pm,save:fm};return e._gsap||rn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},Rd,_l=function(e,n){var i=Ei.createElementNS?Ei.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ei.createElement(e);return i&&i.style?i:Ei.createElement(e)},mn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(oc,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,jr(n)||n,1)||""},qc="O,Moz,ms,Ms,Webkit".split(","),jr=function(e,n,i){var r=(n||Ji).style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(qc[s]+e in r););return s<0?null:(s===3?"ms":s>=0?qc[s]:"")+e},vl=function(){em()&&window.document&&(Wc=window,Ei=Wc.document,Br=Ei.documentElement,Ji=_l("div")||{style:{}},_l("div"),ft=jr(ft),nn=ft+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rd=!!jr("perspective"),ac=rn.core.reverting,sc=1)},Yc=function(e){var n=e.ownerSVGElement,i=_l("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Br.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Br.removeChild(i),s},jc=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},Pd=function(e){var n,i;try{n=e.getBBox()}catch{n=Yc(e),i=1}return n&&(n.width||n.height)||i||(n=Yc(e)),n&&!n.width&&!n.x&&!n.y?{x:+jc(e,["x","cx","x1"])||0,y:+jc(e,["y","cy","y1"])||0,width:0,height:0}:n},Ld=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pd(e))},ki=function(e,n){if(n){var i=e.style,r;n in ui&&n!==nn&&(n=ft),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(oc,"-$1").toLowerCase())):i.removeAttribute(n)}},wi=function(e,n,i,r,s,a){var o=new tn(e._pt,n,i,0,1,a?wd:Ed);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Kc={deg:1,rad:1,turn:1},mm={grid:1,flex:1},Oi=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Ji.style,l=tm.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",_,p,g,m;if(r===a||!s||Kc[r]||Kc[a])return s;if(a!=="px"&&!h&&(s=t(e,n,i,"px")),m=e.getCTM&&Ld(e),(f||a==="%")&&(ui[n]||~n.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],St(f?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:r),p=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Ei||!p.appendChild)&&(p=Ei.body),g=p._gsap,g&&f&&g.width&&l&&g.time===fn.time&&!g.uncache)return St(s/g.width*d);if(f&&(n==="height"||n==="width")){var y=e.style[n];e.style[n]=d+r,_=e[u],y?e.style[n]=y:ki(e,n)}else(f||a==="%")&&!mm[mn(p,"display")]&&(o.position=mn(e,"position")),p===e&&(o.position="static"),p.appendChild(Ji),_=Ji[u],p.removeChild(Ji),o.position="absolute";return l&&f&&(g=nr(p),g.time=fn.time,g.width=p[u]),St(h?_*s/d:_&&s?d/_*s:0)},ri=function(e,n,i,r){var s;return sc||vl(),n in qn&&n!=="transform"&&(n=qn[n],~n.indexOf(",")&&(n=n.split(",")[0])),ui[n]&&n!=="transform"?(s=Ns(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:za(mn(e,nn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ba[n]&&Ba[n](e,n,i)||mn(e,n)||jh(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Oi(e,n,s,i)+i:s},gm=function(e,n,i,r){if(!i||i==="none"){var s=jr(n,e,1),a=s&&mn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=mn(e,"borderTopColor"))}var o=new tn(this._pt,e.style,n,0,1,xd),l=0,c=0,u,d,h,f,_,p,g,m,y,T,b,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=mn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=e.style[n],e.style[n]=r,r=mn(e,n)||r,p?e.style[n]=p:ki(e,n)),u=[i,r],pd(u),i=u[0],r=u[1],h=i.match(Nr)||[],E=r.match(Nr)||[],E.length){for(;d=Nr.exec(r);)g=d[0],y=r.substring(l,d.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(p=h[c++]||"")&&(f=parseFloat(p)||0,b=p.substr((f+"").length),g.charAt(1)==="="&&(g=Fr(f,g)+b),m=parseFloat(g),T=g.substr((m+"").length),l=Nr.lastIndex-T.length,T||(T=T||_n.units[n]||b,l===r.length&&(r+=T,o.e+=T)),b!==T&&(f=Oi(e,n,p,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:m-f,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?wd:Ed;return Wh.test(r)&&(o.e=0),this._pt=o,o},Zc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_m=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Zc[i]||i,n[1]=Zc[r]||r,n.join(" ")},vm=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ui[o]&&(l=1,o=o==="transformOrigin"?nn:ft),ki(i,o);l&&(ki(i,ft),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ns(i,1),a.uncache=1,Ad(r)))}},Ba={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new tn(e._pt,n,i,0,0,vm);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Is=[1,0,0,1,0,0],Dd={},Id=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Jc=function(e){var n=mn(e,ft);return Id(n)?Is:n.substr(7).match(Hh).map(St)},lc=function(e,n){var i=e._gsap||nr(e),r=e.style,s=Jc(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Is:s):(s===Is&&!e.offsetParent&&e!==Br&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Br.appendChild(e)),s=Jc(e),l?r.display=l:ki(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Br.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yl=function(e,n,i,r,s,a){var o=e._gsap,l=s||lc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],_=l[1],p=l[2],g=l[3],m=l[4],y=l[5],T=n.split(" "),b=parseFloat(T[0])||0,E=parseFloat(T[1])||0,R,C,v,M;i?l!==Is&&(C=f*g-_*p)&&(v=b*(g/C)+E*(-p/C)+(p*y-g*m)/C,M=b*(-_/C)+E*(f/C)-(f*y-_*m)/C,b=v,E=M):(R=Pd(e),b=R.x+(~T[0].indexOf("%")?b/100*R.width:b),E=R.y+(~(T[1]||T[0]).indexOf("%")?E/100*R.height:E)),r||r!==!1&&o.smooth?(m=b-c,y=E-u,o.xOffset=d+(m*f+y*p)-m,o.yOffset=h+(m*_+y*g)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=E,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[nn]="0px 0px",a&&(wi(a,o,"xOrigin",c,b),wi(a,o,"yOrigin",u,E),wi(a,o,"xOffset",d,o.xOffset),wi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},Ns=function(e,n){var i=e._gsap||new gd(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=mn(e,nn)||"0",u=d=h=p=g=m=y=T=b=0,d,h,f=_=1,_,p,g,m,y,T,b,E,R,C,v,M,I,A,L,F,D,B,z,O,K,ee,ie,ge,Se,Ze,Ue,q;return i.svg=!!(e.getCTM&&Ld(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),r.scale=r.rotate=r.translate="none"),C=lc(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",O=""):O=!n&&e.getAttribute("data-svg-origin"),yl(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,C)),E=i.xOrigin||0,R=i.yOrigin||0,C!==Is&&(A=C[0],L=C[1],F=C[2],D=C[3],u=B=C[4],d=z=C[5],C.length===6?(f=Math.sqrt(A*A+L*L),_=Math.sqrt(D*D+F*F),p=A||L?mr(L,A)*Ki:0,y=F||D?mr(F,D)*Ki+p:0,y&&(_*=Math.abs(Math.cos(y*zr))),i.svg&&(u-=E-(E*A+R*F),d-=R-(E*L+R*D))):(q=C[6],Ze=C[7],ie=C[8],ge=C[9],Se=C[10],Ue=C[11],u=C[12],d=C[13],h=C[14],v=mr(q,Se),g=v*Ki,v&&(M=Math.cos(-v),I=Math.sin(-v),O=B*M+ie*I,K=z*M+ge*I,ee=q*M+Se*I,ie=B*-I+ie*M,ge=z*-I+ge*M,Se=q*-I+Se*M,Ue=Ze*-I+Ue*M,B=O,z=K,q=ee),v=mr(-F,Se),m=v*Ki,v&&(M=Math.cos(-v),I=Math.sin(-v),O=A*M-ie*I,K=L*M-ge*I,ee=F*M-Se*I,Ue=D*I+Ue*M,A=O,L=K,F=ee),v=mr(L,A),p=v*Ki,v&&(M=Math.cos(v),I=Math.sin(v),O=A*M+L*I,K=B*M+z*I,L=L*M-A*I,z=z*M-B*I,A=O,B=K),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,m=180-m),f=St(Math.sqrt(A*A+L*L+F*F)),_=St(Math.sqrt(z*z+q*q)),v=mr(B,z),y=Math.abs(v)>2e-4?v*Ki:0,b=Ue?1/(Ue<0?-Ue:Ue):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Id(mn(e,ft)),O&&e.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=St(f),i.scaleY=St(_),i.rotation=St(p)+o,i.rotationX=St(g)+o,i.rotationY=St(m)+o,i.skewX=y+o,i.skewY=T+o,i.transformPerspective=b+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[nn]=za(c)),i.xOffset=i.yOffset=0,i.force3D=_n.force3D,i.renderTransform=i.svg?Sm:Rd?Nd:ym,i.uncache=0,i},za=function(e){return(e=e.split(" "))[0]+" "+e[1]},vo=function(e,n,i){var r=Gt(n);return St(parseFloat(n)+parseFloat(Oi(e,"x",i+"px",r)))+r},ym=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Nd(e,n)},Hi="0deg",as="0px",Wi=") ",Nd=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,_=i.scaleX,p=i.scaleY,g=i.transformPerspective,m=i.force3D,y=i.target,T=i.zOrigin,b="",E=m==="auto"&&e&&e!==1||m===!0;if(T&&(d!==Hi||u!==Hi)){var R=parseFloat(u)*zr,C=Math.sin(R),v=Math.cos(R),M;R=parseFloat(d)*zr,M=Math.cos(R),a=vo(y,a,C*M*-T),o=vo(y,o,-Math.sin(R)*-T),l=vo(y,l,v*M*-T+T)}g!==as&&(b+="perspective("+g+Wi),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(E||a!==as||o!==as||l!==as)&&(b+=l!==as||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wi),c!==Hi&&(b+="rotate("+c+Wi),u!==Hi&&(b+="rotateY("+u+Wi),d!==Hi&&(b+="rotateX("+d+Wi),(h!==Hi||f!==Hi)&&(b+="skew("+h+", "+f+Wi),(_!==1||p!==1)&&(b+="scale("+_+", "+p+Wi),y.style[ft]=b||"translate(0, 0)"},Sm=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,_=i.xOrigin,p=i.yOrigin,g=i.xOffset,m=i.yOffset,y=i.forceCSS,T=parseFloat(a),b=parseFloat(o),E,R,C,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zr,c*=zr,E=Math.cos(l)*d,R=Math.sin(l)*d,C=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=zr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),C*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,R*=M)),E=St(E),R=St(R),C=St(C),v=St(v)):(E=d,v=h,R=C=0),(T&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Oi(f,"x",a,"px"),b=Oi(f,"y",o,"px")),(_||p||g||m)&&(T=St(T+_-(_*E+p*C)+g),b=St(b+p-(_*R+p*v)+m)),(r||s)&&(M=f.getBBox(),T=St(T+r/100*M.width),b=St(b+s/100*M.height)),M="matrix("+E+","+R+","+C+","+v+","+T+","+b+")",f.setAttribute("transform",M),y&&(f.style[ft]=M)},Mm=function(e,n,i,r,s){var a=360,o=It(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ki:1)-r,c=r+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*$c)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*$c)%a-~~(l/a)*a)),e._pt=d=new tn(e._pt,n,i,r,l,im),d.e=c,d.u="deg",e._props.push(i),d},Qc=function(e,n){for(var i in n)e[i]=n[i];return e},xm=function(e,n,i){var r=Qc({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,d,h,f,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[ft]=n,o=Ns(i,1),ki(i,ft),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ft],a[ft]=n,o=Ns(i,1),a[ft]=c);for(l in ui)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Gt(c),_=Gt(u),d=f!==_?Oi(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new tn(e._pt,o,l,d,h-d,gl),e._pt.u=_||0,e._props.push(l));Qc(o,r)};en("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});Ba[e>1?"border"+t:t]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(_){return ri(o,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(_,p){return f[_]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,f,d)}});var Ud={name:"css",register:vl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,d,h,f,_,p,g,m,y,T,b,E,R,C,v,M;sc||vl(),this.styles=this.styles||Cd(e),v=this.styles.props,this.tween=i;for(p in n)if(p!=="autoRound"&&(u=n[p],!(hn[p]&&_d(p,n,i,r,e,s)))){if(f=typeof u,_=Ba[p],f==="function"&&(u=u.call(i,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ps(u)),_)_(this,e,p,u,i)&&(C=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(g=Gt(c),m=Gt(u),m?g!==m&&(c=Oi(e,p,c,m)+m):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,p),a.push(p),v.push(p,0,o[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,r,e,s):l[p],It(c)&&~c.indexOf("random(")&&(c=Ps(c)),Gt(c+"")||c==="auto"||(c+=_n.units[p]||Gt(ri(e,p))||""),(c+"").charAt(1)==="="&&(c=ri(e,p))):c=ri(e,p),h=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),p in qn&&(p==="autoAlpha"&&(h===1&&ri(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),wi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=qn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),T=p in ui,T){if(this.styles.save(p),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=mn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=u,u=mn(e,"perspective"),I?e.style.perspective=I:ki(e,"perspective")}d=parseFloat(u)}if(b||(E=e._gsap,E.renderTransform&&!n.parseTransform||Ns(e,n.parseTransform),R=n.smoothOrigin!==!1&&E.smooth,b=this._pt=new tn(this._pt,o,ft,0,1,E.renderTransform,E,0,-1),b.dep=1),p==="scale")this._pt=new tn(this._pt,E,"scaleY",E.scaleY,(y?Fr(E.scaleY,y+d):d)-E.scaleY||0,gl),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(nn,0,o[nn]),u=_m(u),E.svg?yl(e,u,0,R,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&wi(this,E,"zOrigin",E.zOrigin,m),wi(this,o,p,za(c),za(u)));continue}else if(p==="svgOrigin"){yl(e,u,1,R,0,this);continue}else if(p in Dd){Mm(this,E,p,h,y?Fr(h,y+u):u);continue}else if(p==="smoothOrigin"){wi(this,E,"smooth",E.smooth,u);continue}else if(p==="force3D"){E[p]=u;continue}else if(p==="transform"){xm(this,u,e);continue}}else p in o||(p=jr(p)||p);if(T||(d||d===0)&&(h||h===0)&&!nm.test(u)&&p in o)g=(c+"").substr((h+"").length),d||(d=0),m=Gt(u)||(p in _n.units?_n.units[p]:g),g!==m&&(h=Oi(e,p,c,m)),this._pt=new tn(this._pt,T?E:o,p,h,(y?Fr(h,y+d):d)-h,!T&&(m==="px"||p==="zIndex")&&n.autoRound!==!1?am:gl),this._pt.u=m||0,T&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=sm):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=rm);else if(p in o)gm.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,r,s);else if(p!=="parseTransform"){jl(p,u);continue}T||(p in o?v.push(p,0,o[p]):typeof e[p]=="function"?v.push(p,2,e[p]()):v.push(p,1,c||e[p])),a.push(p)}}C&&bd(this)},render:function(e,n){if(n.tween._time||!ac())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:ri,aliases:qn,getSetter:function(e,n,i){var r=qn[n];return r&&r.indexOf(",")<0&&(n=r),n in ui&&n!==nn&&(e._gsap.x||ri(e,"x"))?i&&Xc===i?n==="scale"?um:cm:(Xc=i||{})&&(n==="scale"?hm:dm):e.style&&!$l(e.style[n])?om:~n.indexOf("-")?lm:ic(e,n)},core:{_removeProperty:ki,_getMatrix:lc}};rn.utils.checkPrefix=jr;rn.core.getStyleSaver=Cd;(function(t,e,n,i){var r=en(t+","+e+","+n,function(s){ui[s]=1});en(e,function(s){_n.units[s]="deg",Dd[s]=1}),qn[r[13]]=t+","+e,en(i,function(s){var a=s.split(":");qn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){_n.units[t]="px"});rn.registerPlugin(Ud);var Ee=rn.registerPlugin(Ud)||rn,nx=Ee.core.Tween,Lr=["spades","hearts","diamonds","clubs"],kd=[2,3,4,5,6,7,8,9,10,11,12,13,14],bm={spades:"♠",hearts:"♥",diamonds:"♦",clubs:"♣"},Va={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K",14:"A"};function Tm(t){return t===14?11:t>=11?10:t}var Em=0;function Od(t,e){return{id:`c${++Em}`,suit:t,rank:e,enhancement:"none",seal:"none",edition:"base",baseChips:Tm(e)}}function Zs(){const t=[];for(const e of Lr)for(const n of kd)t.push(Od(e,n));return t}function wm(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function eu(t,e=Math.random){const n=t.slice();for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}var Wn={"High Card":{chips:5,mult:1,chipsPerLvl:10,multPerLvl:1},Pair:{chips:10,mult:2,chipsPerLvl:15,multPerLvl:1},"Two Pair":{chips:20,mult:2,chipsPerLvl:20,multPerLvl:1},"Three of a Kind":{chips:30,mult:3,chipsPerLvl:20,multPerLvl:2},Straight:{chips:30,mult:4,chipsPerLvl:30,multPerLvl:3},Flush:{chips:35,mult:4,chipsPerLvl:15,multPerLvl:2},"Full House":{chips:40,mult:4,chipsPerLvl:25,multPerLvl:2},"Four of a Kind":{chips:60,mult:7,chipsPerLvl:30,multPerLvl:3},"Straight Flush":{chips:100,mult:8,chipsPerLvl:40,multPerLvl:4},"Five of a Kind":{chips:120,mult:12,chipsPerLvl:35,multPerLvl:3},"Flush House":{chips:140,mult:14,chipsPerLvl:40,multPerLvl:4},"Flush Five":{chips:160,mult:16,chipsPerLvl:50,multPerLvl:3}};function Am(t){const e=new Map;for(const n of t){if(n.enhancement==="stone")continue;const i=e.get(n.rank)??[];i.push(n),e.set(n.rank,i)}return[...e.entries()].map(([n,i])=>({rank:n,cards:i})).sort((n,i)=>i.cards.length-n.cards.length||i.rank-n.rank)}function Cm(t){const e=t.filter(n=>n.enhancement!=="stone");if(e.length<5)return null;for(const n of["spades","hearts","diamonds","clubs"]){const i=e.filter(r=>r.suit===n||r.enhancement==="wild");if(i.length>=5){const r=new Set(i.slice(0,5).map(s=>s.id));return t.filter(s=>r.has(s.id))}}return null}function Rm(t){const e=new Map;for(const i of t)i.enhancement!=="stone"&&(e.has(i.rank)||e.set(i.rank,i));if(e.size<5)return null;if(e.has(14)&&[2,3,4,5].every(i=>e.has(i)))return new Set([14,2,3,4,5]);const n=[...e.keys()].sort((i,r)=>i-r);for(let i=n.length-5;i>=0;i--){let r=!0;for(let s=1;s<5;s++)if(n[i+s]!==n[i]+s){r=!1;break}if(r)return new Set(n.slice(i,i+5))}return null}function Pm(t,e){return t.filter(n=>e.has(n.id)||n.enhancement==="stone")}function Sl(t){const e=t.filter(h=>h.enhancement!=="stone"),n=Am(e),i=n.map(h=>h.cards.length),r=Cm(e),s=Rm(e),a=h=>i.includes(h),o=h=>i.filter(f=>f===h).length,l=(...h)=>new Set(h.flatMap(f=>f.cards.map(_=>_.id))),c=new Set(e.map(h=>h.id));let u="High Card",d=new Set;if(a(5)&&r)u="Flush Five",d=l(n[0]);else if(a(3)&&a(2)&&r)u="Flush House",d=new Set(c);else if(a(5))u="Five of a Kind",d=l(n[0]);else if(s&&r){const h=new Set(r.map(_=>_.id)),f=new Set(e.filter(_=>s.has(_.rank)&&h.has(_.id)).map(_=>_.id));f.size>=5?(u="Straight Flush",d=f):(u="Flush",d=new Set(r.map(_=>_.id)))}else if(a(4))u="Four of a Kind",d=l(n[0]);else if(a(3)&&a(2))u="Full House",d=l(n.find(h=>h.cards.length===3),n.find(h=>h.cards.length===2));else if(r)u="Flush",d=new Set(r.map(h=>h.id));else if(s)u="Straight",d=new Set(e.filter(h=>s.has(h.rank)).map(h=>h.id));else if(a(3))u="Three of a Kind",d=l(n[0]);else if(o(2)>=2){const h=n.filter(f=>f.cards.length===2).slice(0,2);u="Two Pair",d=l(...h)}else if(a(2))u="Pair",d=l(n.find(h=>h.cards.length===2));else{u="High Card";const h=e.slice().sort((f,_)=>_.rank-f.rank)[0];h&&d.add(h.id)}return{type:u,scoringCards:Pm(t,d),allPlayed:t.slice()}}function zt(t,e){const n=t.chips,i=t.mult;e.chipsDelta&&(t.chips+=e.chipsDelta),e.multDelta&&(t.mult+=e.multDelta),e.multMul&&e.multMul!==1&&(t.mult*=e.multMul),e.moneyDelta&&(t.money+=e.moneyDelta),t.steps.push({...e,chipsBefore:n,chipsAfter:t.chips,multBefore:i,multAfter:t.mult})}function Lm(t,e,n,i,r){const s=i?" (retrigger)":"";if(r){e.steps.push({source:`${Ml(t)} debuffed${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsBefore:e.chips,chipsAfter:e.chips,multBefore:e.mult,multAfter:e.mult});return}t.enhancement==="stone"?zt(e,{source:`Stone +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):(zt(e,{source:`${Ml(t)} +${t.baseChips} Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:t.baseChips}),t.enhancement==="bonus"?zt(e,{source:`Bonus +30 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:30}):t.enhancement==="mult"?zt(e,{source:`Mult Card +4 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:4}):t.enhancement==="glass"?zt(e,{source:`Glass ×2 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:2}):t.enhancement==="lucky"&&(n()<1/5&&zt(e,{source:`Lucky +20 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:20}),n()<1/15&&zt(e,{source:`Lucky +$20${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:20}))),t.seal==="gold"&&zt(e,{source:`Gold Seal +$3${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:3}),t.edition==="foil"?zt(e,{source:`Foil +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):t.edition==="holographic"?zt(e,{source:`Holographic +10 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:10}):t.edition==="polychrome"&&zt(e,{source:`Polychrome ×1.5 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:1.5})}function Dm(t,e,n){t.enhancement==="steel"&&zt(e,{source:`Steel ×1.5 Mult${n?" (retrigger)":""}`,stage:"held_card",cardId:t.id,retrigger:n,multMul:1.5})}function ws(t){return t.rank>=11&&t.rank<=13}function wa(t){return t.sticker==="perishable"&&(t.perishableRounds??0)<=0}function Im(t,e,n,i,r){if(wa(t))return;const s=t.effect,a=e.scoringCards,o=n.heldCards??[],l=c=>zt(i,{...c,jokerId:t.id,stage:"joker"});if(s.kind==="chips")l({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="mult")l({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="xmult")l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="pair-mult")Um(e.type)&&l({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="flush-mult-mul")e.type.includes("Flush")&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="first-hand-chips")n.handsLeftBeforePlay===n.handsPerRound&&l({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-mult")s.handTypes.includes(e.type)&&l({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="hand-chips")s.handTypes.includes(e.type)&&l({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-xmult")s.handTypes.includes(e.type)&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="score-suit-mult"){const c=a.filter(u=>u.suit===s.suit||u.enhancement==="wild").length;c&&l({source:`${t.name} +${c*s.amount} Mult`,multDelta:c*s.amount})}else if(s.kind==="score-suit-chips"){const c=a.filter(u=>u.suit===s.suit||u.enhancement==="wild").length;c&&l({source:`${t.name} +${c*s.amount} Chips`,chipsDelta:c*s.amount})}else if(s.kind==="score-suit-money"){const c=a.filter(u=>u.suit===s.suit||u.enhancement==="wild").length;c&&l({source:`${t.name} +$${c*s.amount}`,moneyDelta:c*s.amount})}else if(s.kind==="score-rank-mult"){const c=a.filter(u=>s.ranks.includes(u.rank)).length;c&&l({source:`${t.name} +${c*s.amount} Mult`,multDelta:c*s.amount})}else if(s.kind==="score-rank-chips"){const c=a.filter(u=>s.ranks.includes(u.rank)).length;c&&l({source:`${t.name} +${c*s.amount} Chips`,chipsDelta:c*s.amount})}else if(s.kind==="score-rank-bonus"){const c=a.filter(u=>s.ranks.includes(u.rank)).length;c&&l({source:`${t.name} bonus`,chipsDelta:c*s.chips,multDelta:c*s.mult})}else if(s.kind==="score-face-chips"){const c=a.filter(ws).length;c&&l({source:`${t.name} +${c*s.amount} Chips`,chipsDelta:c*s.amount})}else if(s.kind==="score-face-mult"){const c=a.filter(ws).length;c&&l({source:`${t.name} +${c*s.amount} Mult`,multDelta:c*s.amount})}else if(s.kind==="few-cards-mult")e.allPlayed.length<=s.maxCards&&l({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="discard-chips"){const c=Math.max(0,n.discardsLeft??0)*s.amountPerDiscard;c&&l({source:`${t.name} +${c} Chips`,chipsDelta:c})}else if(s.kind==="zero-discard-mult")(n.discardsLeft??0)===0&&l({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="joker-count-mult"){const c=Math.max(0,n.jokerCount??0)*s.amountPerJoker;c&&l({source:`${t.name} +${c} Mult`,multDelta:c})}else if(s.kind==="held-black-xmult"){const c=o.filter(u=>u.enhancement!=="stone");c.length&&c.every(u=>u.suit==="spades"||u.suit==="clubs")&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount})}else if(s.kind==="decay-chips"){const c=Math.max(0,t.counter??s.start);c&&l({source:`${t.name} +${c} Chips`,chipsDelta:c})}else if(s.kind==="straight-scale-chips"){const c=Math.max(0,t.counter??s.start??0);c&&l({source:`${t.name} +${c} Chips`,chipsDelta:c})}else if(s.kind==="bus-scale-mult"||s.kind==="green-scale-mult"){const c=Math.max(0,t.counter??0);c&&l({source:`${t.name} +${c} Mult`,multDelta:c})}else if(s.kind==="deck-remaining-chips"){const c=Math.max(0,n.deckRemaining??0)*s.amountPerCard;c&&l({source:`${t.name} +${c} Chips`,chipsDelta:c})}else if(s.kind==="lowest-held-mult"){const c=o.filter(u=>u.enhancement!=="stone").map(u=>u.rank);c.length&&l({source:`${t.name}`,multDelta:Math.min(...c)*s.multiplier})}else if(s.kind==="suit-chance-xmult")for(const c of a)(c.suit===s.suit||c.enhancement==="wild")&&r()<s.chance&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount,cardId:c.id});else if(s.kind==="first-face-xmult"){const c=a.find(ws);c&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount,cardId:c.id})}else if(s.kind==="money-chips"){const c=Math.max(0,Math.floor(n.money??0))*s.amountPerDollar;c&&l({source:`${t.name} +${c} Chips`,chipsDelta:c})}else if(s.kind==="money-mult"){const c=Math.floor(Math.max(0,n.money??0)/s.dollarsPerStep)*s.amountPerStep;c&&l({source:`${t.name} +${c} Mult`,multDelta:c})}else if(s.kind==="repeat-hand-xmult")n.handAlreadyPlayedThisRound&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="last-hand-xmult")n.isFinalHand&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="loyalty-xmult")(t.counter??0)===s.every-1&&l({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="hand-count-mult"){const c=Math.max(0,n.handPlayCount??0)*s.amountPerPlay;c&&l({source:`${t.name} +${c} Mult`,multDelta:c})}else if(s.kind==="castle-scale-chips"){const c=Math.max(0,t.counter??0);c&&l({source:`${t.name} +${c} Chips`,chipsDelta:c})}}function Nm(t,e,n={}){const i=Wn[t.type],r=Math.max(1,e.level),s=i.chips+i.chipsPerLvl*(r-1),a=i.mult+i.multPerLvl*(r-1),o=n.bossHalveBase?Math.max(1,Math.floor(s/2)):s,l=n.bossHalveBase?Math.max(1,a/2):a,c=n.rng??Math.random,u={chips:o,mult:l,money:0,steps:[{source:`${t.type} (lvl ${r})`,stage:"base",chipsDelta:o,multDelta:l,chipsBefore:0,chipsAfter:o,multBefore:0,multAfter:l}]};for(let f=0;f<t.scoringCards.length;f++){const _=t.scoringCards[f];let p=1+(_.seal==="red"?1:0);for(const m of n.jokers??[]){if(wa(m))continue;const y=m.effect;y.kind==="retrigger-last-hand"&&n.isFinalHand||y.kind==="retrigger-ranks"&&y.ranks.includes(_.rank)||y.kind==="retrigger-face"&&ws(_)?p+=1:y.kind==="retrigger-first"&&f===0&&(p+=y.extra)}const g=(n.bossDebuffSuits??[]).includes(_.suit)||!!(n.bossDebuffFace&&ws(_));for(let m=0;m<p;m++)Lm(_,u,c,m>0,g)}const d=(n.jokers??[]).filter(f=>!wa(f)&&f.effect.kind==="retrigger-held").length;for(const f of n.heldCards??[]){if(f.enhancement!=="steel")continue;const _=1+(f.seal==="red"?1:0)+d;for(let p=0;p<_;p++)Dm(f,u,p>0)}for(const f of n.jokers??[]){if(wa(f))continue;const _=f.edition??"base";_==="foil"?zt(u,{source:`${f.name} Foil +50 Chips`,stage:"joker",chipsDelta:50,jokerId:f.id}):_==="holographic"&&zt(u,{source:`${f.name} Holographic +10 Mult`,stage:"joker",multDelta:10,jokerId:f.id}),Im(f,t,n,u,c),_==="polychrome"&&zt(u,{source:`${f.name} Polychrome ×1.5 Mult`,stage:"joker",multMul:1.5,jokerId:f.id})}const h=[];for(const f of t.scoringCards)f.enhancement==="glass"&&c()<1/4&&(h.push(f.id),u.steps.push({source:`${Ml(f)} Glass shattered`,stage:"destruction",cardId:f.id,chipsBefore:u.chips,chipsAfter:u.chips,multBefore:u.mult,multAfter:u.mult}));return{hand:t,baseChips:o,baseMult:l,finalChips:u.chips,finalMult:u.mult,total:Math.floor(u.chips*u.mult),moneyDelta:u.money,destroyedCardIds:h,steps:u.steps}}function Um(t){return t==="Pair"||t==="Two Pair"||t==="Three of a Kind"||t==="Full House"||t==="Four of a Kind"||t==="Five of a Kind"||t==="Flush House"||t==="Flush Five"}function Ml(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":`${t.rank}`}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}var Ga=[{key:"pluto",name:"Pluto",description:"Level up High Card.",type:"planet",price:3,effect:{kind:"planet",handType:"High Card"}},{key:"mercury",name:"Mercury",description:"Level up Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Pair"}},{key:"uranus",name:"Uranus",description:"Level up Two Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Two Pair"}},{key:"venus",name:"Venus",description:"Level up Three of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Three of a Kind"}},{key:"saturn",name:"Saturn",description:"Level up Straight.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight"}},{key:"jupiter",name:"Jupiter",description:"Level up Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush"}},{key:"earth",name:"Earth",description:"Level up Full House.",type:"planet",price:3,effect:{kind:"planet",handType:"Full House"}},{key:"mars",name:"Mars",description:"Level up Four of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Four of a Kind"}},{key:"neptune",name:"Neptune",description:"Level up Straight Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight Flush"}},{key:"planet-x",name:"Planet X",description:"Level up Five of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Five of a Kind"}},{key:"ceres",name:"Ceres",description:"Level up Flush House.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush House"}},{key:"eris",name:"Eris",description:"Level up Flush Five.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush Five"}}],yo=[{key:"the-magician",name:"The Magician",description:"Enhance up to 2 selected cards into Lucky Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"lucky",min:1,max:2}},{key:"the-empress",name:"The Empress",description:"Enhance up to 2 selected cards into Mult Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"mult",min:1,max:2}},{key:"the-hierophant",name:"The Hierophant",description:"Enhance up to 2 selected cards into Bonus Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"bonus",min:1,max:2}},{key:"the-chariot",name:"The Chariot",description:"Enhance 1 selected card into a Steel Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"steel",min:1,max:1}},{key:"justice",name:"Justice",description:"Enhance 1 selected card into a Glass Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"glass",min:1,max:1}},{key:"the-devil",name:"The Devil",description:"Enhance 1 selected card into a Gold Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"gold",min:1,max:1}},{key:"the-tower",name:"The Tower",description:"Enhance 1 selected card into a Stone Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"stone",min:1,max:1}},{key:"the-star",name:"The Star",description:"Convert up to 3 selected cards to Diamonds.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"diamonds",min:1,max:3}},{key:"the-moon",name:"The Moon",description:"Convert up to 3 selected cards to Clubs.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"clubs",min:1,max:3}},{key:"the-sun",name:"The Sun",description:"Convert up to 3 selected cards to Hearts.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"hearts",min:1,max:3}},{key:"the-world",name:"The World",description:"Convert up to 3 selected cards to Spades.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"spades",min:1,max:3}},{key:"death",name:"Death",description:"Select 2 cards. The left card becomes a copy of the right card.",type:"tarot",price:3,effect:{kind:"copy-right-to-left",min:2,max:2}},{key:"the-hanged-man",name:"The Hanged Man",description:"Destroy up to 2 selected cards.",type:"tarot",price:3,effect:{kind:"destroy-selected",min:1,max:2}},{key:"the-hermit",name:"The Hermit",description:"Doubles money, up to a maximum gain of $20.",type:"tarot",price:3,effect:{kind:"money",mode:"double-up-to-20"}}],tu=[{key:"aura",name:"Aura",description:"Add Foil, Holographic or Polychrome to 1 selected card.",type:"spectral",price:4,effect:{kind:"edition-selected",edition:"random",min:1,max:1}},{key:"talisman",name:"Talisman",description:"Add a Gold Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"gold",min:1,max:1}},{key:"deja-vu",name:"Deja Vu",description:"Add a Red Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"red",min:1,max:1}},{key:"trance",name:"Trance",description:"Add a Blue Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"blue",min:1,max:1}},{key:"medium",name:"Medium",description:"Add a Purple Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"purple",min:1,max:1}},{key:"cryptid",name:"Cryptid",description:"Create 2 copies of 1 selected card in your deck.",type:"spectral",price:4,effect:{kind:"duplicate-selected",copies:2,min:1,max:1}},{key:"immolate",name:"Immolate",description:"Destroy up to 5 selected cards and gain $20.",type:"spectral",price:4,effect:{kind:"immolate-selected",min:1,max:5,money:20}}],km=["arcana","celestial","standard","buffoon","spectral"];function nu(t,e){const n=t==="buffoon";return e==="normal"?{choices:n?2:3,picks:1,price:4}:e==="jumbo"?{choices:n?4:5,picks:1,price:6}:{choices:n?4:5,picks:2,price:8}}function Om(t,e){return(e==="normal"?"":e==="jumbo"?"Jumbo ":"Mega ")+(t==="arcana"?"Arcana Pack":t==="celestial"?"Celestial Pack":t==="standard"?"Standard Pack":t==="buffoon"?"Buffoon Pack":"Spectral Pack")}function iu(t){if(!("min"in t&&"max"in t))return null;const e=t.kind==="copy-right-to-left"?"Select exactly 2 cards. Left becomes a copy of right.":t.kind==="destroy-selected"?"Select cards to destroy.":t.kind==="immolate-selected"?"Select cards to destroy for $20.":t.kind==="convert-suit"?"Select cards to change suit.":t.kind==="edition-selected"?"Select a card to receive an Edition.":t.kind==="seal-selected"?"Select a card to receive a Seal.":t.kind==="duplicate-selected"?"Select a card to copy.":"Select card(s) to enhance.";return{min:t.min,max:t.max,instruction:e}}var ru={grabber:{key:"grabber",name:"Grabber",description:"+1 hand every round.",price:10},wasteful:{key:"wasteful",name:"Wasteful",description:"+1 discard every round.",price:10},"crystal-ball":{key:"crystal-ball",name:"Crystal Ball",description:"+1 consumable slot.",price:10},"reroll-surplus":{key:"reroll-surplus",name:"Reroll Surplus",description:"Rerolls cost $2 less.",price:10},"clearance-sale":{key:"clearance-sale",name:"Clearance Sale",description:"Shop cards and Booster Packs are 25% off.",price:10}};function Fm(t){return Ga.find(e=>e.effect.kind==="planet"&&e.effect.handType===t)??Ga[0]}var su={red:{key:"red",name:"Red Deck",description:"+1 Discard every round."},blue:{key:"blue",name:"Blue Deck",description:"+1 Hand every round."},yellow:{key:"yellow",name:"Yellow Deck",description:"Start with $10 extra."},green:{key:"green",name:"Green Deck",description:"No interest; cashout pays $2 per unused Hand and $1 per unused Discard."},black:{key:"black",name:"Black Deck",description:"+1 Joker slot, -1 Hand every round."}},Vt={white:{key:"white",name:"White Stake",description:"Base difficulty.",order:0},red:{key:"red",name:"Red Stake",description:"Small Blind gives no base reward.",order:1},green:{key:"green",name:"Green Stake",description:"Score requirements scale faster.",order:2},black:{key:"black",name:"Black Stake",description:"Generated Jokers may be Eternal.",order:3},blue:{key:"blue",name:"Blue Stake",description:"-1 Discard every round.",order:4},purple:{key:"purple",name:"Purple Stake",description:"Score requirements scale even faster.",order:5},orange:{key:"orange",name:"Orange Stake",description:"Generated Jokers may be Perishable.",order:6},gold:{key:"gold",name:"Gold Stake",description:"Generated Jokers may also be Rental.",order:7}},xl={investment:{key:"investment",name:"Investment Tag",description:"Gain $25 after defeating the next Boss Blind."},coupon:{key:"coupon",name:"Coupon Tag",description:"Initial Shop cards and Booster Packs in the next Shop are free."},double:{key:"double",name:"Double Tag",description:"Copies the next non-Double Tag."},juggle:{key:"juggle",name:"Juggle Tag",description:"+3 Hand Size for the next round."},d6:{key:"d6",name:"D6 Tag",description:"Next Shop starts with a free reroll."},speed:{key:"speed",name:"Speed Tag",description:"Gain $5 for every Blind skipped this run."},economy:{key:"economy",name:"Economy Tag",description:"Double current money, adding at most $40."},"top-up":{key:"top-up",name:"Top-up Tag",description:"Create up to 2 Common Jokers if space exists."},boss:{key:"boss",name:"Boss Tag",description:"Reroll the Boss Blind for this Ante."}},Us={wall:{key:"wall",name:"The Wall",description:"Very large Blind: score requirement is doubled again.",targetMult:4},arm:{key:"arm",name:"The Arm",description:"Playing a hand lowers that Poker Hand by 1 level.",targetMult:2},psychic:{key:"psychic",name:"The Psychic",description:"You must play exactly 5 cards.",targetMult:2},goad:{key:"goad",name:"The Goad",description:"Spade cards are debuffed.",targetMult:2},water:{key:"water",name:"The Water",description:"Start this Blind with 0 Discards.",targetMult:2},window:{key:"window",name:"The Window",description:"Diamond cards are debuffed.",targetMult:2},manacle:{key:"manacle",name:"The Manacle",description:"-1 Hand Size for this Blind.",targetMult:2},eye:{key:"eye",name:"The Eye",description:"No Poker Hand may be played more than once this Blind.",targetMult:2},mouth:{key:"mouth",name:"The Mouth",description:"After the first hand, only that Poker Hand may be played.",targetMult:2},plant:{key:"plant",name:"The Plant",description:"Face cards are debuffed.",targetMult:2},needle:{key:"needle",name:"The Needle",description:"Play only 1 Hand; score requirement is 1x Ante base.",targetMult:1},head:{key:"head",name:"The Head",description:"Heart cards are debuffed.",targetMult:2},tooth:{key:"tooth",name:"The Tooth",description:"Lose $1 for every card played.",targetMult:2},flint:{key:"flint",name:"The Flint",description:"Base Chips and Mult are halved.",targetMult:2}},Bm=[300,800,2e3,5e3,11e3,2e4,35e3,5e4],zm=[300,900,2600,8e3,2e4,36e3,6e4,1e5],Vm=[300,1e3,3200,9e3,25e3,6e4,11e4,2e5],au=Object.keys(xl),ou=Object.keys(Us),Gm={seed:Math.floor(Math.random()*1e9),handSize:8,handsPerRound:4,discardsPerRound:3,startingMoney:4};var Hm=5,Aa=[{key:"joker",name:"Joker",description:"+4 Mult.",rarity:"common",price:2,effect:{kind:"mult",amount:4}},{key:"greedy-joker",name:"Greedy Joker",description:"Each scoring Diamond gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"diamonds",amount:3}},{key:"lusty-joker",name:"Lusty Joker",description:"Each scoring Heart gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"hearts",amount:3}},{key:"wrathful-joker",name:"Wrathful Joker",description:"Each scoring Spade gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"spades",amount:3}},{key:"gluttonous-joker",name:"Gluttonous Joker",description:"Each scoring Club gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"clubs",amount:3}},{key:"jolly-joker",name:"Jolly Joker",description:"+8 Mult when the hand contains a Pair.",rarity:"common",price:3,effect:{kind:"pair-mult",amount:8}},{key:"crazy-joker",name:"Crazy Joker",description:"+12 Mult on Straight hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Straight","Straight Flush"],amount:12}},{key:"droll-joker",name:"Droll Joker",description:"+10 Mult on Flush hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:10}},{key:"sly-joker",name:"Sly Joker",description:"+50 Chips on Pair-family hands.",rarity:"common",price:3,effect:{kind:"hand-chips",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:50}},{key:"wily-joker",name:"Wily Joker",description:"+100 Chips on Three-of-a-Kind-family hands.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:100}},{key:"clever-joker",name:"Clever Joker",description:"+80 Chips on Two Pair or Full House.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Two Pair","Full House","Flush House"],amount:80}},{key:"devious-joker",name:"Devious Joker",description:"+100 Chips on Straight hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Straight","Straight Flush"],amount:100}},{key:"crafty-joker",name:"Crafty Joker",description:"+80 Chips on Flush hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:80}},{key:"half-joker",name:"Half Joker",description:"+20 Mult if 3 or fewer cards are played.",rarity:"common",price:5,effect:{kind:"few-cards-mult",maxCards:3,amount:20}},{key:"banner",name:"Banner",description:"+30 Chips for each remaining Discard.",rarity:"common",price:5,effect:{kind:"discard-chips",amountPerDiscard:30}},{key:"mystic-summit",name:"Mystic Summit",description:"+15 Mult when no Discards remain.",rarity:"common",price:5,effect:{kind:"zero-discard-mult",amount:15}},{key:"raised-fist",name:"Raised Fist",description:"Adds twice the rank of the lowest held card to Mult.",rarity:"common",price:5,effect:{kind:"lowest-held-mult",multiplier:2}},{key:"misprint",name:"Misprint",description:"+11 Mult in this first balanced set.",rarity:"common",price:4,effect:{kind:"mult",amount:11}},{key:"even-steven",name:"Even Steven",description:"Scoring even ranks give +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-mult",ranks:[2,4,6,8,10],amount:4}},{key:"odd-todd",name:"Odd Todd",description:"Scoring odd ranks and Aces give +31 Chips.",rarity:"common",price:4,effect:{kind:"score-rank-chips",ranks:[3,5,7,9,14],amount:31}},{key:"scholar",name:"Scholar",description:"Scoring Aces give +20 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[14],chips:20,mult:4}},{key:"scary-face",name:"Scary Face",description:"Scoring face cards give +30 Chips.",rarity:"common",price:4,effect:{kind:"score-face-chips",amount:30}},{key:"smiley-face",name:"Smiley Face",description:"Scoring face cards give +5 Mult.",rarity:"common",price:4,effect:{kind:"score-face-mult",amount:5}},{key:"fibonacci",name:"Fibonacci",description:"A, 2, 3, 5 and 8 give +8 Mult when scored.",rarity:"uncommon",price:8,effect:{kind:"score-rank-mult",ranks:[14,2,3,5,8],amount:8}},{key:"abstract-joker",name:"Abstract Joker",description:"+3 Mult for every Joker you own.",rarity:"common",price:4,effect:{kind:"joker-count-mult",amountPerJoker:3}},{key:"blackboard",name:"Blackboard",description:"x3 Mult if all held cards are Spades or Clubs.",rarity:"uncommon",price:6,effect:{kind:"held-black-xmult",amount:3}},{key:"ice-cream",name:"Ice Cream",description:"Starts at +100 Chips and loses 5 Chips after each hand.",rarity:"common",price:5,effect:{kind:"decay-chips",start:100,decay:5}},{key:"runner",name:"Runner",description:"Gains +15 Chips whenever you play a Straight.",rarity:"common",price:5,effect:{kind:"straight-scale-chips",gain:15,start:0}},{key:"ride-the-bus",name:"Ride the Bus",description:"Gains +1 Mult after a hand with no scoring face card; resets otherwise.",rarity:"common",price:6,effect:{kind:"bus-scale-mult",gain:1}},{key:"green-joker",name:"Green Joker",description:"Gains +1 Mult per hand and loses 1 per discard.",rarity:"common",price:4,effect:{kind:"green-scale-mult",handGain:1,discardLoss:1}},{key:"blue-joker",name:"Blue Joker",description:"+2 Chips per card remaining in the draw pile.",rarity:"common",price:5,effect:{kind:"deck-remaining-chips",amountPerCard:2}},{key:"dusk",name:"Dusk",description:"Retrigger all scoring cards on the final Hand of a Blind.",rarity:"uncommon",price:5,effect:{kind:"retrigger-last-hand"}},{key:"hack",name:"Hack",description:"Retrigger scoring 2, 3, 4 and 5 cards.",rarity:"uncommon",price:6,effect:{kind:"retrigger-ranks",ranks:[2,3,4,5]}},{key:"mime",name:"Mime",description:"Retrigger held-card abilities once.",rarity:"uncommon",price:5,effect:{kind:"retrigger-held"}},{key:"sock-and-buskin",name:"Sock and Buskin",description:"Retrigger scoring face cards once.",rarity:"uncommon",price:6,effect:{kind:"retrigger-face"}},{key:"hanging-chad",name:"Hanging Chad",description:"Retrigger the first scoring card 2 extra times.",rarity:"common",price:4,effect:{kind:"retrigger-first",extra:2}},{key:"bloodstone",name:"Bloodstone",description:"Each scoring Heart has a 1 in 2 chance to give x1.5 Mult.",rarity:"uncommon",price:7,effect:{kind:"suit-chance-xmult",suit:"hearts",chance:.5,amount:1.5}},{key:"arrowhead",name:"Arrowhead",description:"Each scoring Spade gives +50 Chips.",rarity:"uncommon",price:7,effect:{kind:"score-suit-chips",suit:"spades",amount:50}},{key:"onyx-agate",name:"Onyx Agate",description:"Each scoring Club gives +7 Mult.",rarity:"uncommon",price:7,effect:{kind:"score-suit-mult",suit:"clubs",amount:7}},{key:"rough-gem",name:"Rough Gem",description:"Each scoring Diamond gives $1.",rarity:"uncommon",price:7,effect:{kind:"score-suit-money",suit:"diamonds",amount:1}},{key:"photograph",name:"Photograph",description:"The first scoring face card gives x2 Mult.",rarity:"common",price:5,effect:{kind:"first-face-xmult",amount:2}},{key:"walkie-talkie",name:"Walkie Talkie",description:"Scoring 10s and 4s give +10 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[10,4],chips:10,mult:4}},{key:"castle",name:"Castle",description:"Gains +3 Chips for each discarded card of its target suit.",rarity:"uncommon",price:6,effect:{kind:"castle-scale-chips",gain:3}},{key:"bull",name:"Bull",description:"+2 Chips for every $1 you have.",rarity:"uncommon",price:6,effect:{kind:"money-chips",amountPerDollar:2}},{key:"bootstraps",name:"Bootstraps",description:"+2 Mult for every $5 you have.",rarity:"uncommon",price:7,effect:{kind:"money-mult",dollarsPerStep:5,amountPerStep:2}},{key:"card-sharp",name:"Card Sharp",description:"x3 Mult if this Poker Hand was already played this Blind.",rarity:"uncommon",price:6,effect:{kind:"repeat-hand-xmult",amount:3}},{key:"acrobat",name:"Acrobat",description:"x3 Mult on the final Hand of the Blind.",rarity:"uncommon",price:6,effect:{kind:"last-hand-xmult",amount:3}},{key:"loyalty-card",name:"Loyalty Card",description:"Every 6th played hand gives x4 Mult.",rarity:"uncommon",price:5,effect:{kind:"loyalty-xmult",every:6,amount:4}},{key:"the-duo",name:"The Duo",description:"x2 Mult if the hand contains a Pair.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:2}},{key:"the-trio",name:"The Trio",description:"x3 Mult if the hand contains Three of a Kind.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:3}}],ix=Aa.length,Wm=["bonus","mult","wild","glass","steel","gold","lucky"],Xm=["foil","holographic","polychrome"];function So(t){return t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function kr(t){return{...t}}function Zn(t){return t.map(kr)}function Ha(t){return{...t,effect:{...t.effect}}}function lu(t){return t.map(Ha)}function Vr(t){return{...t,effect:{...t.effect}}}function cu(t){return t.map(Vr)}function Fd(t){return t.kind==="joker"?{kind:"joker",joker:Ha(t.joker)}:t.kind==="consumable"?{kind:"consumable",consumable:Vr(t.consumable)}:{kind:"playing-card",card:kr(t.card),name:t.name,description:t.description,price:t.price,sellValue:t.sellValue}}function $m(t){return{...t}}function Ca(t){return t?{...t}:null}function uu(t){return t?{...t,consumable:Vr(t.consumable),candidateIds:[...t.candidateIds],selectedIds:[...t.selectedIds]}:null}function hu(t){return t?{...t,choices:t.choices.map(e=>({id:e.id,taken:e.taken,item:Fd(e.item)}))}:null}function du(t){return t?{visit:t.visit,rerolls:t.rerolls,rerollCost:t.rerollCost,boosters:t.boosters.map($m),voucher:Ca(t.voucher),offers:t.offers.map(e=>({id:e.id,sold:e.sold,item:Fd(e.item)}))}:null}function Mo(){return Object.fromEntries(Object.keys(Wn).map(t=>[t,{level:1,chips:Wn[t].chips,mult:Wn[t].mult}]))}function fu(t){return Object.fromEntries(Object.keys(t).map(e=>[e,{...t[e]}]))}var qm=class Bd{config;rng;rngDrawCount=0;phase="play";ante=1;blindIndex=0;money;ownedDeck=[];deck=[];discardPile=[];hand=[];selected=new Set;handsLeft;discardsLeft;roundScore=0;target=0;handLevels;jokers=[];consumables=[];shop=null;booster=null;targetMode=null;vouchers=[];anteVoucher=null;lastCashout=null;deckKey="red";stakeKey="white";bossBlindKey="wall";anteTags=["investment","coupon"];skippedBlinds=0;doubleTags=0;investmentTags=0;couponNextShop=!1;couponShopVisit=null;d6NextShop=!1;juggleNextBlind=0;roundHandSize=8;playedHandTypesThisRound=[];handPlayCounts=Object.fromEntries(Object.keys(Wn).map(e=>[e,0]));handsPlayedRun=0;shopVisit=0;lastScore=null;listeners=new Set;constructor(e={},n=!0){this.config={...Gm,...e},this.rng=this.createTrackedRng(this.config.seed),this.money=this.config.startingMoney,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.handLevels=Mo(),this.ownedDeck=Zs(),n&&this.startBlind()}static fromSnapshot(e){const n=new Bd(e.config,!1);return n.loadSnapshot(e),n}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}getRngDrawCount(){return this.rngDrawCount}targetForCurrentBlind(){const e=Vt[this.stakeKey].order,n=e>=Vt.purple.order?Vm:e>=Vt.green.order?zm:Bm,i=n[Math.min(this.ante-1,n.length-1)],r=this.blindIndex===0?1:this.blindIndex===1?1.5:Us[this.bossBlindKey].targetMult;return Math.round(i*r)}startBlind(){this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.roundHandSize=this.config.handSize+this.juggleNextBlind,this.juggleNextBlind=0,this.playedHandTypesThisRound=[],this.blindIndex===2&&(this.bossBlindKey==="water"&&(this.discardsLeft=0),this.bossBlindKey==="needle"&&(this.handsLeft=1),this.bossBlindKey==="manacle"&&(this.roundHandSize=Math.max(1,this.roundHandSize-1))),this.deck=eu(Zn(this.ownedDeck),this.rng),this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.drawToFull(),this.phase="play",this.emit()}enterSetup(){this.phase="setup",this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.roundScore=0,this.emit()}configureRun(e,n){this.deckKey=e,this.stakeKey=n,this.ante=1,this.blindIndex=0,this.config.handSize=8,this.config.handsPerRound=4,this.config.discardsPerRound=3,this.config.startingMoney=4,Vt[n].order>=Vt.blue.order&&(this.config.discardsPerRound-=1),e==="red"&&(this.config.discardsPerRound+=1),e==="blue"&&(this.config.handsPerRound+=1),e==="black"&&(this.config.handsPerRound-=1),this.money=e==="yellow"?14:4,this.ownedDeck=Zs(),this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.handLevels=Mo(),this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.handsPlayedRun=0,this.handPlayCounts=Object.fromEntries(Object.keys(Wn).map(i=>[i,0])),this.shopVisit=0,this.rollAnteOptions(),this.prepareBlindSelect()}rollAnteOptions(){this.anteTags=[this.pick(au),this.pick(au)],this.bossBlindKey=this.pick(ou)}prepareBlindSelect(){this.phase="blind-select",this.target=this.targetForCurrentBlind(),this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.emit()}playSelectedBlind(){return this.phase!=="blind-select"?!1:(this.startBlind(),!0)}currentSkipTag(){return this.blindIndex<2?this.anteTags[this.blindIndex]:null}skipCurrentBlind(){if(this.phase!=="blind-select"||this.blindIndex>=2)return!1;const e=this.currentSkipTag();return e?(this.skippedBlinds+=1,this.applyTag(e),this.blindIndex=this.blindIndex+1,this.prepareBlindSelect(),!0):!1}applyTag(e){if(e==="double"){this.doubleTags+=1;return}const n=1+this.doubleTags;this.doubleTags=0;for(let i=0;i<n;i++)this.applySingleTag(e)}applySingleTag(e){if(e==="investment")this.investmentTags+=1;else if(e==="coupon")this.couponNextShop=!0;else if(e==="juggle")this.juggleNextBlind+=3;else if(e==="d6")this.d6NextShop=!0;else if(e==="speed")this.money+=Math.max(5,this.skippedBlinds*5);else if(e==="economy")this.money+=Math.min(40,Math.max(0,this.money));else if(e==="top-up"){const n=Aa.filter(i=>i.rarity==="common");for(let i=0;i<2&&this.jokers.length<this.jokerCapacity();i++)this.jokers.push(this.makeJokerFromTemplate(this.pick(n),!1))}else if(e==="boss"){const n=ou.filter(i=>i!==this.bossBlindKey);n.length>0&&(this.bossBlindKey=this.pick(n))}}targetForPreview(){return this.targetForCurrentBlind()}playRestrictionMessage(){if(this.phase!=="play"||this.blindIndex!==2)return null;const e=this.selectedCards();if(this.bossBlindKey==="psychic"&&e.length!==5)return"The Psychic: play exactly 5 cards";if(e.length===0)return null;const n=Sl(e).type;return this.bossBlindKey==="eye"&&this.playedHandTypesThisRound.includes(n)?"The Eye: that Poker Hand was already played":this.bossBlindKey==="mouth"&&this.playedHandTypesThisRound.length>0&&this.playedHandTypesThisRound[0]!==n?`The Mouth: play only ${this.playedHandTypesThisRound[0]}`:null}drawToFull(){for(;this.hand.length<this.roundHandSize&&this.deck.length>0;)this.hand.push(this.deck.pop())}toggleSelect(e){return this.phase!=="play"?!1:this.selected.has(e)?(this.selected.delete(e),this.emit(),!1):this.selected.size>=5?!1:(this.selected.add(e),this.emit(),!0)}selectedCards(e){if(!e)return this.hand.filter(i=>this.selected.has(i.id));const n=new Map(this.hand.map(i=>[i.id,i]));return e.filter(i=>this.selected.has(i)).map(i=>n.get(i)).filter(i=>!!i)}jokerCapacity(){return 5+(this.deckKey==="black"?1:0)+this.jokers.filter(e=>(e.edition??"base")==="negative").length}consumableCapacity(){return 2+(this.vouchers.includes("crystal-ball")?1:0)+this.consumables.filter(e=>(e.edition??"base")==="negative").length}moveJoker(e,n){const i=this.jokers.findIndex(a=>a.id===e);if(i<0)return!1;const r=Math.max(0,Math.min(this.jokers.length-1,n));if(r===i)return!0;const[s]=this.jokers.splice(i,1);return this.jokers.splice(r,0,s),this.emit(),!0}canPlay(){return this.phase==="play"&&this.selected.size>0&&this.handsLeft>0&&this.playRestrictionMessage()===null}canDiscard(){return this.phase==="play"&&this.selected.size>0&&this.discardsLeft>0}playSelected(e){if(!this.canPlay())return null;const n=this.selectedCards(e),i=Sl(n),r=this.handLevels[i.type],s=this.handsLeft,a=new Set(n.map(h=>h.id)),o=this.hand.filter(h=>!a.has(h.id)),l=this.blindIndex===2?this.bossBlindKey:null,c=l==="goad"?["spades"]:l==="window"?["diamonds"]:l==="head"?["hearts"]:[],u=this.playedHandTypesThisRound.includes(i.type),d=Nm(i,r,{jokers:this.jokers,heldCards:o,handsLeftBeforePlay:s,handsPerRound:this.playedHandTypesThisRound.length===0?s:this.config.handsPerRound,discardsLeft:this.discardsLeft,deckRemaining:this.deck.length,money:this.money,handPlayCount:this.handPlayCounts[i.type]??0,handAlreadyPlayedThisRound:u,isFinalHand:this.handsLeft===1,jokerCount:this.jokers.length,bossDebuffSuits:c,bossDebuffFace:l==="plant",bossHalveBase:l==="flint",rng:()=>this.rng()});this.roundScore+=d.total,this.money+=d.moneyDelta,this.blindIndex===2&&this.bossBlindKey==="tooth"&&(this.money-=n.length,d.moneyDelta-=n.length),this.handsLeft-=1,this.lastScore=d,this.playedHandTypesThisRound.push(i.type),this.handPlayCounts[i.type]=(this.handPlayCounts[i.type]??0)+1,this.handsPlayedRun+=1;for(const h of this.jokers){const f=h.effect;f.kind==="straight-scale-chips"&&i.type.includes("Straight")?h.counter=(h.counter??f.start??0)+f.gain:f.kind==="decay-chips"?h.counter=Math.max(0,(h.counter??f.start)-f.decay):f.kind==="bus-scale-mult"?h.counter=i.scoringCards.some(_=>_.rank>=11&&_.rank<=13)?0:(h.counter??0)+f.gain:f.kind==="green-scale-mult"?h.counter=(h.counter??0)+f.handGain:f.kind==="loyalty-xmult"&&(h.counter=((h.counter??0)+1)%f.every)}if(this.blindIndex===2&&this.bossBlindKey==="arm"){const h=Wn[i.type],f=this.handLevels[i.type],_=Math.max(1,f.level-1);this.handLevels[i.type]={level:_,chips:h.chips+h.chipsPerLvl*(_-1),mult:h.mult+h.multPerLvl*(_-1)}}if(this.hand=this.hand.filter(h=>!this.selected.has(h.id)),this.discardPile.push(...n),this.selected.clear(),d.destroyedCardIds.length>0){const h=new Set(d.destroyedCardIds);this.discardPile=this.discardPile.filter(f=>!h.has(f.id)),this.ownedDeck=this.ownedDeck.filter(f=>!h.has(f.id))}return this.roundScore>=this.target?(this.resolveEndOfRoundHeldCards(i.type,d),this.onBlindCleared()):this.handsLeft<=0?this.phase="game-over":this.drawToFull(),this.emit(),d}discardSelected(e){if(!this.canDiscard())return null;const n=this.selectedCards(e);this.hand=this.hand.filter(i=>!this.selected.has(i.id)),this.discardPile.push(...n),this.discardsLeft-=1,this.selected.clear();for(const i of this.jokers){const r=i.effect;if(r.kind==="green-scale-mult")i.counter=Math.max(0,(i.counter??0)-r.discardLoss);else if(r.kind==="castle-scale-chips"&&i.suit){const s=n.filter(a=>a.suit===i.suit).length;i.counter=(i.counter??0)+s*r.gain}}for(const i of n)if(i.seal==="purple"){if(this.consumables.length>=this.consumableCapacity())break;this.consumables.push(this.makePurpleSealTarot())}return this.drawToFull(),this.emit(),n}onBlindCleared(){const e=this.blindIndex,n=Vt[this.stakeKey].order,i=e===0&&n>=Vt.red.order?0:3+e,r=this.jokers.reduce((u,d)=>d.effect.kind==="economy-clear"&&!this.isJokerDebuffed(d)?u+d.effect.amount:u,0),s=this.deckKey==="green",a=s?Math.max(0,this.handsLeft)*2+Math.max(0,this.discardsLeft):Math.max(0,this.handsLeft),o=s?0:Math.min(5,Math.floor(Math.max(0,this.money)/5));let l=0;e===2&&this.investmentTags>0&&(l=this.investmentTags*25,this.investmentTags=0);const c=i+a+o+r+l;this.money+=c,this.lastCashout={blindReward:i+r+l,handsBonus:a,interest:o,total:c};for(const u of this.jokers)if(u.rental&&(this.money-=3),u.sticker==="perishable"&&(u.perishableRounds??0)>0&&(u.perishableRounds=Math.max(0,(u.perishableRounds??0)-1)),u.effect.kind==="castle-scale-chips"){const d=u.suit??"spades";u.suit=Lr[(Lr.indexOf(d)+1)%Lr.length]}if(this.blindIndex<2)this.blindIndex=this.blindIndex+1;else{if(this.blindIndex=0,this.ante+=1,this.anteVoucher=null,this.ante>8){this.phase="win";return}this.rollAnteOptions()}this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=0,this.discardsLeft=0,this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=this.createShopState(),this.phase="shop"}isJokerDebuffed(e){return e.sticker==="perishable"&&(e.perishableRounds??0)<=0}continueFromShop(){return this.phase!=="shop"?!1:(this.prepareBlindSelect(),!0)}canBuyOffer(e){const n=this.findOffer(e);if(!n||n.sold)return!1;const i=this.priceForItem(n.item);if(this.money<i)return!1;if(n.item.kind==="joker"){const r=(n.item.joker.edition??"base")==="negative"?1:0;return this.jokers.length<this.jokerCapacity()+r}if(n.item.kind==="consumable"){const r=(n.item.consumable.edition??"base")==="negative"?1:0;return this.consumables.length<this.consumableCapacity()+r}return!0}buyOffer(e){const n=this.findOffer(e);if(!n||!this.canBuyOffer(e))return!1;const i=this.priceForItem(n.item);return this.money-=i,n.sold=!0,n.item.kind==="joker"?this.jokers.push(Ha(n.item.joker)):n.item.kind==="consumable"?this.consumables.push(Vr(n.item.consumable)):this.ownedDeck.push(kr(n.item.card)),this.emit(),!0}rerollShop(){if(this.phase!=="shop"||!this.shop||this.money<this.shop.rerollCost)return!1;this.money-=this.shop.rerollCost;const e=this.shop.rerollCost===0&&this.shop.rerolls===0;return this.shop.rerolls+=1,this.shop.rerollCost=e?1:this.rerollBaseCost()+this.shop.rerolls,this.shop.offers=this.createShopOffers(this.shop.visit,this.shop.rerolls),this.emit(),!0}sellJoker(e){const n=this.jokers.findIndex(r=>r.id===e);if(n<0||this.jokers[n].sticker==="eternal")return!1;const[i]=this.jokers.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}sellConsumable(e){const n=this.consumables.findIndex(r=>r.id===e);if(n<0)return!1;const[i]=this.consumables.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}useConsumable(e){return this.beginUseConsumable(e)==="applied"}resolveEndOfRoundHeldCards(e,n){for(const i of this.hand)if(i.enhancement==="gold"&&(this.money+=3,n.moneyDelta+=3,n.steps.push({source:"Gold Card +$3",stage:"end_round",cardId:i.id,moneyDelta:3,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})),i.seal==="blue"&&this.consumables.length<this.consumableCapacity()){const r=Fm(e),s={...r,id:this.makeRunId("blue-planet"),sellValue:1,effect:{...r.effect},edition:"base"};this.consumables.push(s),n.steps.push({source:`Blue Seal created ${s.name}`,stage:"end_round",cardId:i.id,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})}}makePurpleSealTarot(){return this.makeConsumableFromCatalog(this.pick(yo))}openBooster(e){if(this.phase!=="shop"||!this.shop)return!1;const n=this.shop.boosters.find(s=>s.id===e);if(!n||n.sold)return!1;const i=this.discountedPrice(n.price);if(this.money<i)return!1;this.money-=i,n.sold=!0;const r=nu(n.type,n.size);return this.booster={sourceOfferId:n.id,type:n.type,size:n.size,name:n.name,choices:Array.from({length:r.choices},(s,a)=>this.makeBoosterChoice(n.type,a)),picksLeft:r.picks},this.phase="booster",this.targetMode=null,this.emit(),!0}boosterPrice(e){return this.discountedPrice(e.price)}makeBoosterChoice(e,n){let i;return e==="arcana"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(yo))}:e==="celestial"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(Ga))}:e==="spectral"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(tu))}:e==="buffoon"?i=this.makeJokerItem():i=this.makePlayingCardItem(),{id:`pack-choice-${this.rngDrawCount}-${n}-${Math.floor(this.rng()*1e6)}`,item:i,taken:!1}}makeConsumableFromCatalog(e){return{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}chooseBooster(e){if(this.phase!=="booster"||!this.booster||this.booster.picksLeft<=0)return"invalid";const n=this.booster.choices.find(s=>s.id===e);if(!n||n.taken)return"invalid";if(n.item.kind==="joker"){const s=n.item.joker,a=(s.edition??"base")==="negative"?1:0;return this.jokers.length>=this.jokerCapacity()+a?"invalid":(this.jokers.push(Ha(s)),this.finishBoosterChoice(n))}if(n.item.kind==="playing-card")return this.ownedDeck.push(kr(n.item.card)),this.finishBoosterChoice(n);const i=n.item.consumable,r=iu(i.effect);return r?(this.targetMode={source:"booster",sourceId:this.booster.sourceOfferId,choiceId:n.id,consumable:Vr(i),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...r},this.emit(),"targeting"):(this.applyConsumableWithTargets(i,[]),this.finishBoosterChoice(n))}finishBoosterChoice(e){return e.taken=!0,this.booster&&(this.booster.picksLeft-=1),this.booster&&this.booster.picksLeft<=0&&(this.booster=null,this.phase="shop"),this.targetMode=null,this.emit(),"applied"}skipBooster(){return this.phase!=="booster"?!1:(this.booster=null,this.targetMode=null,this.phase="shop",this.emit(),!0)}buyVoucher(){if(this.phase!=="shop"||!this.shop?.voucher||this.shop.voucher.sold)return!1;const e=this.shop.voucher;return this.money<e.price?!1:(this.money-=e.price,e.sold=!0,this.anteVoucher?.key===e.key&&(this.anteVoucher.sold=!0),this.vouchers.includes(e.key)||this.vouchers.push(e.key),e.key==="grabber"&&(this.config.handsPerRound+=1),e.key==="wasteful"&&(this.config.discardsPerRound+=1),e.key==="reroll-surplus"&&this.shop&&(this.shop.rerollCost=Math.max(1,this.shop.rerollCost-2)),this.emit(),!0)}beginUseConsumable(e){const n=this.consumables.find(r=>r.id===e);if(!n)return"invalid";const i=iu(n.effect);if(!i){const r=this.consumables.findIndex(s=>s.id===e);return this.consumables.splice(r,1),this.applyConsumableWithTargets(n,[]),this.emit(),"applied"}return this.targetMode={source:"inventory",sourceId:e,consumable:Vr(n),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...i},this.emit(),"targeting"}toggleTargetCard(e){const n=this.targetMode;if(!n||!n.candidateIds.includes(e))return!1;const i=n.selectedIds.indexOf(e);return i>=0?(n.selectedIds.splice(i,1),this.emit(),!1):n.selectedIds.length>=n.max?!1:(n.selectedIds.push(e),this.emit(),!0)}cancelTargetMode(){return this.targetMode?(this.targetMode=null,this.emit(),!0):!1}confirmTargetMode(){const e=this.targetMode;if(!e||e.selectedIds.length<e.min||e.selectedIds.length>e.max)return!1;if(this.applyConsumableWithTargets(e.consumable,e.selectedIds),e.source==="inventory"){const i=this.consumables.findIndex(r=>r.id===e.sourceId);return i>=0&&this.consumables.splice(i,1),this.targetMode=null,this.emit(),!0}const n=this.booster?.choices.find(i=>i.id===e.choiceId);return n?(this.targetMode=null,this.finishBoosterChoice(n),!0):(this.targetMode=null,this.emit(),!1)}getTargetCandidateCards(){return this.targetMode?this.targetMode.candidateIds.map(e=>this.findRunCard(e)).filter(e=>!!e).map(kr):[]}makeTargetCandidateIds(){if(this.hand.length>0)return this.hand.map(n=>n.id);const e=this.ownedDeck.map(n=>n.id);return eu(e,this.rng).slice(0,Math.min(this.config.handSize,e.length))}findRunCard(e){return this.hand.find(n=>n.id===e)??this.deck.find(n=>n.id===e)??this.discardPile.find(n=>n.id===e)??this.ownedDeck.find(n=>n.id===e)??null}mutateCardEverywhere(e,n){for(const i of[this.ownedDeck,this.hand,this.deck,this.discardPile])for(const r of i)r.id===e&&n(r)}destroyCardEverywhere(e){this.ownedDeck=this.ownedDeck.filter(n=>n.id!==e),this.hand=this.hand.filter(n=>n.id!==e),this.deck=this.deck.filter(n=>n.id!==e),this.discardPile=this.discardPile.filter(n=>n.id!==e),this.selected.delete(e)}applyConsumableWithTargets(e,n){const i=e.effect;if(i.kind==="planet"){this.upgradeHandLevel(i.handType);return}if(i.kind==="money"){const r=i.mode==="double-up-to-20"?Math.min(20,this.money):Math.max(0,i.amount??0);this.money+=r;return}if(i.kind==="enhance-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.enhancement=i.enhancement,s.baseChips=i.enhancement==="stone"?50:s.rank===14?11:s.rank>=11?10:s.rank});return}if(i.kind==="convert-suit"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.suit=i.suit});return}if(i.kind==="destroy-selected"){for(const r of n)this.destroyCardEverywhere(r);return}if(i.kind==="copy-right-to-left"){const r=n.slice().sort((o,l)=>this.targetMode.candidateIds.indexOf(o)-this.targetMode.candidateIds.indexOf(l)),s=r[0],a=this.findRunCard(r[1]);if(!s||!a)return;this.mutateCardEverywhere(s,o=>{o.suit=a.suit,o.rank=a.rank,o.enhancement=a.enhancement,o.seal=a.seal,o.edition=a.edition,o.baseChips=a.baseChips});return}if(i.kind==="edition-selected"){for(const r of n){const s=i.edition==="random"?this.pick(["foil","holographic","polychrome"]):i.edition;this.mutateCardEverywhere(r,a=>{a.edition=s})}return}if(i.kind==="seal-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.seal=i.seal});return}if(i.kind==="duplicate-selected"){const r=n[0]?this.findRunCard(n[0]):null;if(!r)return;for(let s=0;s<i.copies;s++){const a=kr(r);a.id=this.makeRunId("copy"),this.ownedDeck.push(a)}return}if(i.kind==="immolate-selected"){for(const r of n)this.destroyCardEverywhere(r);this.money+=i.money}}createShopState(){const e=++this.shopVisit;if(this.couponNextShop?(this.couponShopVisit=e,this.couponNextShop=!1):this.couponShopVisit=null,!this.anteVoucher||this.anteVoucher.sold){const i=Object.keys(ru).filter(r=>!this.vouchers.includes(r));this.anteVoucher=i.length>0?{...ru[this.pick(i)],sold:!1}:null}const n={visit:e,offers:this.createShopOffers(e,0),boosters:this.createBoosterOffers(e),voucher:Ca(this.anteVoucher),rerolls:0,rerollCost:this.d6NextShop?0:this.rerollBaseCost()};return this.d6NextShop=!1,n}createShopOffers(e,n){return[0,1].map(i=>{const r=this.rng()<.7?this.makeJokerItem():this.makeConsumableItem();return this.makeShopOffer(e,n,i,r)})}createBoosterOffers(e){return[0,1].map(n=>{const i=this.pick(km),r=this.rng(),s=r<.68?"normal":r<.9?"jumbo":"mega",a=nu(i,s);return{id:`booster-${e}-${n}`,type:i,size:s,name:Om(i,s),description:`Choose ${a.picks} from ${a.choices}.`,price:a.price,sold:!1}})}rerollBaseCost(){return Math.max(1,Hm-(this.vouchers.includes("reroll-surplus")?2:0))}makeShopOffer(e,n,i,r){return{id:`shop-${e}-${n}-${i}`,item:r,sold:!1}}makeJokerFromTemplate(e,n=!0){const i={...e,id:this.makeRunId("joker"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base",sticker:"none",rental:!1};if(i.effect.kind==="decay-chips"?i.counter=i.effect.start:i.effect.kind==="castle-scale-chips"?(i.counter=0,i.suit=this.pick(Lr)):(i.effect.kind==="straight-scale-chips"||i.effect.kind==="bus-scale-mult"||i.effect.kind==="green-scale-mult"||i.effect.kind==="loyalty-xmult")&&(i.counter=i.effect.kind==="straight-scale-chips"?i.effect.start??0:0),n){const r=Vt[this.stakeKey].order;if(r>=Vt.black.order){const s=this.rng();s<.3?i.sticker="eternal":r>=Vt.orange.order&&s<.6&&(i.sticker="perishable",i.perishableRounds=5)}r>=Vt.gold.order&&this.rng()<.3&&(i.rental=!0)}return i}makeJokerItem(){const e=this.rng(),n=e<.7?"common":e<.95?"uncommon":"rare",i=Aa.filter(r=>r.rarity===n);return{kind:"joker",joker:this.makeJokerFromTemplate(this.pick(i.length?i:Aa))}}makeConsumableItem(){const e=this.makeConsumableTemplate();return{kind:"consumable",consumable:{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}}makeConsumableTemplate(){const e=this.rng(),n=e<.45?Ga:e<.88?yo:tu;return this.pick(n)}makePlayingCardItem(){const e=this.pick(Lr),n=this.pick(kd),i=this.pick(Wm),r=Od(e,n);return r.enhancement=i,i==="stone"&&(r.baseChips=50),this.rng()>.82&&(r.edition=this.pick(Xm)),{kind:"playing-card",card:r,name:`${Va[n]} of ${So(e)}${r.edition!=="base"?` (${So(r.edition)})`:""}`,description:`Add a ${So(i)} card to your deck.`,price:r.edition==="base"?4:6,sellValue:1}}findOffer(e){return this.shop?.offers.find(n=>n.id===e)??null}priceForItem(e){const n=e.kind==="joker"?e.joker.rental?1:e.joker.price:e.kind==="consumable"?e.consumable.price:e.price;return this.discountedPrice(n)}shopPriceForItem(e){return this.priceForItem(e)}discountedPrice(e){return this.shop&&this.couponShopVisit===this.shop.visit?0:this.vouchers.includes("clearance-sale")?Math.max(1,Math.ceil(e*.75)):e}upgradeHandLevel(e){const n=Wn[e],i=this.handLevels[e].level+1;this.handLevels[e]={level:i,chips:n.chips+n.chipsPerLvl*(i-1),mult:n.mult+n.multPerLvl*(i-1)}}pick(e){return e[Math.floor(this.rng()*e.length)]}makeRunId(e){return`${e}-${this.rngDrawCount}-${Math.floor(this.rng()*1e6)}`}reset(e){if(typeof e=="object"&&e!==null){this.loadSnapshot(e),this.emit();return}this.config={...this.config,seed:typeof e=="number"?e:Math.floor(Math.random()*1e9)},this.rng=this.createTrackedRng(this.config.seed),this.ante=1,this.blindIndex=0,this.money=this.config.startingMoney,this.ownedDeck=Zs(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.deckKey="red",this.stakeKey="white",this.bossBlindKey="wall",this.anteTags=["investment","coupon"],this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.roundHandSize=this.config.handSize,this.playedHandTypesThisRound=[],this.handPlayCounts=Object.fromEntries(Object.keys(Wn).map(n=>[n,0])),this.handsPlayedRun=0,this.shopVisit=0,this.handLevels=Mo(),this.lastScore=null,this.enterSetup()}toSnapshot(){return{version:4,config:{...this.config},rngDrawCount:this.rngDrawCount,phase:this.phase,ante:this.ante,blindIndex:this.blindIndex,money:this.money,ownedDeck:Zn(this.ownedDeck),deck:Zn(this.deck),discardPile:Zn(this.discardPile),hand:Zn(this.hand),selected:[...this.selected],handsLeft:this.handsLeft,discardsLeft:this.discardsLeft,roundScore:this.roundScore,target:this.target,handLevels:fu(this.handLevels),jokers:lu(this.jokers),consumables:cu(this.consumables),shop:du(this.shop),booster:hu(this.booster),targetMode:uu(this.targetMode),vouchers:[...this.vouchers],anteVoucher:Ca(this.anteVoucher),lastCashout:this.lastCashout?{...this.lastCashout}:null,deckKey:this.deckKey,stakeKey:this.stakeKey,bossBlindKey:this.bossBlindKey,anteTags:[...this.anteTags],skippedBlinds:this.skippedBlinds,doubleTags:this.doubleTags,investmentTags:this.investmentTags,couponNextShop:this.couponNextShop,couponShopVisit:this.couponShopVisit,d6NextShop:this.d6NextShop,juggleNextBlind:this.juggleNextBlind,roundHandSize:this.roundHandSize,playedHandTypesThisRound:[...this.playedHandTypesThisRound],handPlayCounts:{...this.handPlayCounts},handsPlayedRun:this.handsPlayedRun}}loadSnapshot(e){const n=e.version;if(n!==1&&n!==2&&n!==3&&n!==4)throw new Error(`Unsupported snapshot version: ${n}`);const i=this.normalizeSnapshot(e);this.config={...i.config},this.rng=this.createTrackedRng(i.config.seed,i.rngDrawCount),this.phase=i.phase,this.ante=i.ante,this.blindIndex=i.blindIndex,this.money=i.money,this.ownedDeck=Zn(i.ownedDeck),this.deck=Zn(i.deck),this.discardPile=Zn(i.discardPile),this.hand=Zn(i.hand),this.selected=new Set(i.selected),this.handsLeft=i.handsLeft,this.discardsLeft=i.discardsLeft,this.roundScore=i.roundScore,this.target=i.target,this.handLevels=fu(i.handLevels),this.jokers=lu(i.jokers),this.consumables=cu(i.consumables),this.shop=du(i.shop),this.booster=hu(i.booster),this.targetMode=uu(i.targetMode),this.vouchers=[...i.vouchers],this.anteVoucher=Ca(i.anteVoucher),this.lastCashout=i.lastCashout?{...i.lastCashout}:null,this.deckKey=i.deckKey,this.stakeKey=i.stakeKey,this.bossBlindKey=i.bossBlindKey,this.anteTags=[...i.anteTags],this.skippedBlinds=i.skippedBlinds,this.doubleTags=i.doubleTags,this.investmentTags=i.investmentTags,this.couponNextShop=i.couponNextShop,this.couponShopVisit=i.couponShopVisit,this.d6NextShop=i.d6NextShop,this.juggleNextBlind=i.juggleNextBlind,this.roundHandSize=i.roundHandSize,this.playedHandTypesThisRound=[...i.playedHandTypesThisRound],this.handPlayCounts={...i.handPlayCounts},this.handsPlayedRun=i.handsPlayedRun,this.shopVisit=i.shop?.visit??this.completedShopCount(),this.lastScore=null}normalizeSnapshot(e){if(e.version===4)return e;let n;if(e.version===3)n=e;else if(e.version===2)n={...e,version:3,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null};else{const i=e,r=[...i.deck,...i.discardPile,...i.hand],s=new Set,a=r.filter(o=>s.has(o.id)?!1:(s.add(o.id),!0));n={...i,version:3,ownedDeck:a.length?a:Zs(),jokers:[],consumables:[],shop:null,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null}}return{...n,version:4,deckKey:"red",stakeKey:"white",bossBlindKey:"wall",anteTags:["investment","coupon"],skippedBlinds:0,doubleTags:0,investmentTags:0,couponNextShop:!1,couponShopVisit:null,d6NextShop:!1,juggleNextBlind:0,roundHandSize:n.config.handSize,playedHandTypesThisRound:[],handPlayCounts:Object.fromEntries(Object.keys(Wn).map(i=>[i,0])),handsPlayedRun:0}}completedShopCount(){return Math.max(0,(this.ante-1)*3+this.blindIndex)}createTrackedRng(e,n=0){const i=wm(e);for(let r=0;r<n;r++)i();return this.rngDrawCount=n,()=>(this.rngDrawCount+=1,i())}},Or={spades:0,hearts:1,diamonds:2,clubs:3},pu=[[14,13,12,11,10],[13,12,11,10,9],[12,11,10,9,8],[11,10,9,8,7],[10,9,8,7,6],[9,8,7,6,5],[8,7,6,5,4],[7,6,5,4,3],[6,5,4,3,2],[5,4,3,2,14]];function zd(t,e,n){return Or[t.suit]-Or[e.suit]||(n.get(t.id)??0)-(n.get(e.id)??0)}function Ym(t){const e=new Map(t.map((a,o)=>[a.id,o])),n=new Set(t.filter(a=>a.enhancement!=="stone").map(a=>a.rank));let i=pu[0],r=-1;for(const a of pu){const o=a.reduce((l,c)=>l+(n.has(c)?1:0),0);o>r&&(r=o,i=a)}const s=new Map(i.map((a,o)=>[a,o]));return t.slice().sort((a,o)=>{const l=a.enhancement==="stone";if(l!==(o.enhancement==="stone"))return l?1:-1;const c=s.get(a.rank),u=s.get(o.rank),d=c!==void 0,h=u!==void 0;return d!==h?d?-1:1:d&&h&&c!==u?c-u:a.rank!==o.rank?o.rank-a.rank:zd(a,o,e)})}function jm(t){const e=new Map(t.map((l,c)=>[l.id,c])),n=t.filter(l=>l.enhancement!=="stone"),i=n.filter(l=>l.enhancement==="wild").length,r=new Map;Object.keys(Or).forEach(l=>r.set(l,0));for(const l of n)l.enhancement!=="wild"&&r.set(l.suit,(r.get(l.suit)??0)+1);const s=Object.keys(Or).sort((l,c)=>{const u=(r.get(l)??0)+i;return(r.get(c)??0)+i-u||Or[l]-Or[c]}),a=s[0],o=new Map(s.map((l,c)=>[l,c]));return t.slice().sort((l,c)=>{const u=l.enhancement==="stone";if(u!==(c.enhancement==="stone"))return u?1:-1;const d=l.enhancement==="wild"?0:o.get(l.suit)??99,h=c.enhancement==="wild"?0:o.get(c.suit)??99;if(d!==h)return d-h;if(d<=0&&h<=0&&l.enhancement!==c.enhancement){if(l.suit===a&&l.enhancement!=="wild")return-1;if(c.suit===a&&c.enhancement!=="wild")return 1}return l.rank!==c.rank?c.rank-l.rank:zd(l,c,e)})}var bl=1e3,si=1001,Tl=1002,Yt=1003,Km=1004,Zm=1005,gn=1006,Jm=1007,cc=1008,Di=1009,Qm=1010,eg=1011,Vd=1012,tg=1013,or=1014,io=1015,lr=1016,Gd=1017,Hd=1018,Wd=1020,ng=35902,ig=35899,rg=1021,sg=1022,ks=1023,Os=1026,Xd=1027,ag=1028,$d=1029,Wa=1030,qd=1031,Yd=1033,og=33776,lg=33777,cg=33778,ug=33779,hg=35840,dg=35841,fg=35842,pg=35843,mg=36196,gg=37492,_g=37496,vg=37488,yg=37489,Sg=37490,Mg=37491,xg=37808,bg=37809,Tg=37810,Eg=37811,wg=37812,Ag=37813,Cg=37814,Rg=37815,Pg=37816,Lg=37817,Dg=37818,Ig=37819,Ng=37820,Ug=37821,kg=36492,Og=36494,Fg=36495,Bg=36283,zg=36284,Vg=36285,Gg=36286,Xa=2300,El=2301,xo=2302,mu=2303,gu=2400,_u=2401,vu=2402,Hg=3200;var qt="srgb",wl="srgb-linear",$a="linear",qa="srgb",bo=7680;var Wg=35044;var Kr=2e3;function Xg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $g(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Fs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qg(){const t=Fs("canvas");return t.style.display="block",t}var yu={},Zr=null;function Su(...t){const e="THREE."+t.shift();Zr?Zr("log",e,...t):console.log(e,...t)}function jd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Re(...t){t=jd(t);const e="THREE."+t.shift();if(Zr)Zr("warn",e,...t);else{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Le(...t){t=jd(t);const e="THREE."+t.shift();if(Zr)Zr("error",e,...t);else{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Al(...t){const e=t.join(" ");e in yu||(yu[e]=!0,Re(...t))}function Yg(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var jg={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ur=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,Cl=180/Math.PI;function Hs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function Kg(t,e){return(t%e+e)%e}function Eo(t,e,n){return(1-n)*t+n*e}function os(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Xe=class Kd{static{Kd.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=r[s+0],h=r[s+1],f=r[s+2],_=r[s+3];if(u!==_||o!==d||l!==h||c!==f){let p=o*d+l*h+c*f+u*_;p<0&&(d=-d,h=-h,f=-f,_=-_,p=-p);let g=1-a;if(p<.9995){const m=Math.acos(p),y=Math.sin(m);g=Math.sin(g*m)/y,a=Math.sin(a*m)/y,o=o*g+d*a,l=l*g+h*a,c=c*g+f*a,u=u*g+_*a}else{o=o*g+d*a,l=l*g+h*a,c=c*g+f*a,u=u*g+_*a;const m=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=m,l*=m,c*=m,u*=m}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=r[s],d=r[s+1],h=r[s+2],f=r[s+3];return t[e]=a*f+c*u+o*h-l*d,t[e+1]=o*f+c*d+l*u-a*h,t[e+2]=l*f+c*h+a*d-o*u,t[e+3]=c*f-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),d=o(n/2),h=o(i/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(s-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-l)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-i)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-e;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class Zd{static{Zd.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new X,Mu=new hr,Fe=class Jd{static{Jd.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],_=i[8],p=r[0],g=r[3],m=r[6],y=r[1],T=r[4],b=r[7],E=r[2],R=r[5],C=r[8];return s[0]=a*p+o*y+l*E,s[3]=a*g+o*T+l*R,s[6]=a*m+o*b+l*C,s[1]=c*p+u*y+d*E,s[4]=c*g+u*T+d*R,s[7]=c*m+u*b+d*C,s[2]=h*p+f*y+_*E,s[5]=h*g+f*T+_*R,s[8]=h*m+f*b+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,_=n*d+i*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=d*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*n-r*l)*p,e[5]=(r*s-o*n)*p,e[6]=f*p,e[7]=(i*l-c*n)*p,e[8]=(a*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ao.makeScale(e,n)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ao.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new Fe,xu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zg(){const t={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?$a:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wl]:{primaries:e,whitePoint:i,transfer:$a,toXYZ:xu,fromXYZ:bu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:qa,toXYZ:xu,fromXYZ:bu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),t}var Ye=Zg();function ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var gr,Jg=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gr===void 0&&(gr=Fs("canvas")),gr.width=t.width,gr.height=t.height;const i=gr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=gr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ai(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qg=0,uc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Hs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Co(i[s].image)):r.push(Co(i[s]))}else r=Co(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Co(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var e_=0,Ro=new X,xn=class Ra extends ur{constructor(e=Ra.DEFAULT_IMAGE,n=Ra.DEFAULT_MAPPING,i=si,r=si,s=gn,a=cc,o=ks,l=Di,c=Ra.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Hs(),this.name="",this.source=new uc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Re(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=300;xn.DEFAULT_ANISOTROPY=1;var At=class Qd{static{Qd.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],p=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,b=(f+1)/2,E=(m+1)/2,R=(u+h)/4,C=(d+p)/4,v=(_+g)/4;return T>b&&T>E?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=C/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=v/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-_)*(g-_)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(d-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},t_=class extends ur{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new At(0,0,t,e),this.scissorTest=!1,this.viewport=new At(0,0,t,e),this.textures=[];const i=new xn({width:t,height:e,depth:n.depth}),r=n.count;for(let s=0;s<r;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new uc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends t_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ef=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},n_=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mt=class Rl{static{Rl.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,u,d,h,f,_,p,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,f,_,p,g)}set(e,n,i,r,s,a,o,l,c,u,d,h,f,_,p,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,_=o*u,p=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=f+_*c,n[5]=h-p*c,n[9]=-o*l,n[2]=p-h*c,n[6]=_+f*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,p=c*d;n[0]=h+p*o,n[4]=_*o-f,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=f*o-_,n[6]=p+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,p=c*d;n[0]=h-p*o,n[4]=-a*d,n[8]=_+f*o,n[1]=f+_*o,n[5]=a*u,n[9]=p-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,_=o*u,p=o*d;n[0]=l*u,n[4]=_*c-f,n[8]=h*c+p,n[1]=l*d,n[5]=p*c+h,n[9]=f*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,_=o*l,p=o*c;n[0]=l*u,n[4]=p-h*d,n[8]=_*d+f,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=f*d+_,n[10]=h-p*d}else if(e.order==="XZY"){const h=a*l,f=a*c,_=o*l,p=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+p,n[5]=a*u,n[9]=f*d-_,n[2]=_*d-f,n[6]=o*u,n[10]=p*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i_,e,r_)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),mi.crossVectors(i,cn),mi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),mi.crossVectors(i,cn)),mi.normalize(),Js.crossVectors(cn,mi),r[0]=mi.x,r[4]=Js.x,r[8]=cn.x,r[1]=mi.y,r[5]=Js.y,r[9]=cn.y,r[2]=mi.z,r[6]=Js.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],_=i[2],p=i[6],g=i[10],m=i[14],y=i[3],T=i[7],b=i[11],E=i[15],R=r[0],C=r[4],v=r[8],M=r[12],I=r[1],A=r[5],L=r[9],F=r[13],D=r[2],B=r[6],z=r[10],O=r[14],K=r[3],ee=r[7],ie=r[11],ge=r[15];return s[0]=a*R+o*I+l*D+c*K,s[4]=a*C+o*A+l*B+c*ee,s[8]=a*v+o*L+l*z+c*ie,s[12]=a*M+o*F+l*O+c*ge,s[1]=u*R+d*I+h*D+f*K,s[5]=u*C+d*A+h*B+f*ee,s[9]=u*v+d*L+h*z+f*ie,s[13]=u*M+d*F+h*O+f*ge,s[2]=_*R+p*I+g*D+m*K,s[6]=_*C+p*A+g*B+m*ee,s[10]=_*v+p*L+g*z+m*ie,s[14]=_*M+p*F+g*O+m*ge,s[3]=y*R+T*I+b*D+E*K,s[7]=y*C+T*A+b*B+E*ee,s[11]=y*v+T*L+b*z+E*ie,s[15]=y*M+T*F+b*O+E*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],p=e[7],g=e[11],m=e[15],y=l*f-c*h,T=o*f-c*d,b=o*h-l*d,E=a*f-c*u,R=a*h-l*u,C=a*d-o*u;return n*(p*y-g*T+m*b)-i*(_*y-g*E+m*R)+r*(_*T-p*E+m*C)-s*(_*b-p*R+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],p=e[13],g=e[14],m=e[15],y=n*o-i*a,T=n*l-r*a,b=n*c-s*a,E=i*l-r*o,R=i*c-s*o,C=r*c-s*l,v=u*p-d*_,M=u*g-h*_,I=u*m-f*_,A=d*g-h*p,L=d*m-f*p,F=h*m-f*g,D=y*F-T*L+b*A+E*I-R*M+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return e[0]=(o*F-l*L+c*A)*B,e[1]=(r*L-i*F-s*A)*B,e[2]=(p*C-g*R+m*E)*B,e[3]=(h*R-d*C-f*E)*B,e[4]=(l*I-a*F-c*M)*B,e[5]=(n*F-r*I+s*M)*B,e[6]=(g*b-_*C-m*T)*B,e[7]=(u*C-h*b+f*T)*B,e[8]=(a*L-o*I+c*v)*B,e[9]=(i*I-n*L-s*v)*B,e[10]=(_*R-p*b+m*y)*B,e[11]=(d*b-u*R-f*y)*B,e[12]=(o*M-a*A-l*v)*B,e[13]=(n*A-i*M+r*v)*B,e[14]=(p*T-_*E-g*y)*B,e[15]=(u*E-d*T+h*y)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,_=s*d,p=a*u,g=a*d,m=o*d,y=l*c,T=l*u,b=l*d,E=i.x,R=i.y,C=i.z;return r[0]=(1-(p+m))*E,r[1]=(f+b)*E,r[2]=(_-T)*E,r[3]=0,r[4]=(f-b)*R,r[5]=(1-(h+m))*R,r[6]=(g+y)*R,r[7]=0,r[8]=(_+T)*C,r[9]=(g-y)*C,r[10]=(1-(h+p))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=_r.set(r[0],r[1],r[2]).length();const o=_r.set(r[4],r[5],r[6]).length(),l=_r.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Nn.copy(this);const c=1/a,u=1/o,d=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Kr,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let _,p;if(l)_=s/(a-s),p=a*s/(a-s);else if(o===2e3)_=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===2001)_=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Kr,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),f=-(i+r)/(i-r);let _,p;if(l)_=1/(a-s),p=a/(a-s);else if(o===2e3)_=-2/(a-s),p=-(a+s)/(a-s);else if(o===2001)_=-1/(a-s),p=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},_r=new X,Nn=new Mt,i_=new X(0,0,0),r_=new X(1,1,1),mi=new X,Js=new X,cn=new X,Tu=new Mt,Eu=new hr,Jr=class tf{constructor(e=0,n=0,i=0,r=tf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jr.DEFAULT_ORDER="XYZ";var hc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},s_=0,wu=new X,vr=new hr,Jn=new Mt,Qs=new X,ls=new X,a_=new X,o_=new hr,Au=new X(1,0,0),Cu=new X(0,1,0),Ru=new X(0,0,1),Pu={type:"added"},l_={type:"removed"},yr={type:"childadded",child:null},Po={type:"childremoved",child:null},Mn=class Pa extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pa.DEFAULT_UP.clone();const e=new X,n=new Jr,i=new hr,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Fe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Pa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,n){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qs.copy(e):Qs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(ls,Qs,this.up):Jn.lookAt(Qs,ls,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Jn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),yr.child=e,this.dispatchEvent(yr),yr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(l_),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,a_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};Mn.DEFAULT_UP=new X(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},c_={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=.02,f=.005;l.inputState.pinching&&d>h+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ai;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Do(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Ye.workingColorSpace){if(t=Kg(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Do(s,r,t+1/3),this.g=Do(s,r,t),this.b=Do(s,r,t-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(t,e=qt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Re("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);Re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qt){const n=nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qt){return Ye.workingToColorSpace(Bt.copy(this),t),Math.round(je(Bt.r*255,0,255))*65536+Math.round(je(Bt.g*255,0,255))*256+Math.round(je(Bt.b*255,0,255))}getHexString(t=qt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.workingToColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Ye.workingColorSpace){return Ye.workingToColorSpace(Bt.copy(this),e),t.r=Bt.r,t.g=Bt.g,t.b=Bt.b,t}getStyle(t=qt){Ye.workingToColorSpace(Bt.copy(this),t);const e=Bt.r,n=Bt.g,i=Bt.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(ea);const n=Eo(gi.h,ea.h,e),i=Eo(gi.s,ea.s,e),r=Eo(gi.l,ea.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ge;Ge.NAMES=nf;var u_=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jr,this.environmentIntensity=1,this.environmentRotation=new Jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new X,Qn=new X,Io=new X,ei=new X,Sr=new X,Mr=new X,Lu=new X,No=new X,Uo=new X,ko=new X,Oo=new At,Fo=new At,Bo=new At,cs=class Dr{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),Qn.subVectors(i,n),Io.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(Qn),l=Un.dot(Io),c=Qn.dot(Qn),u=Qn.dot(Io),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-f-_,_,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Oo.setScalar(0),Fo.setScalar(0),Bo.setScalar(0),Oo.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,i),Bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Oo,s.x),a.addScaledVector(Fo,s.y),a.addScaledVector(Bo,s.z),a}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),Qn.subVectors(e,n),Un.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Un.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Sr.subVectors(r,i),Mr.subVectors(s,i),No.subVectors(e,i);const l=Sr.dot(No),c=Mr.dot(No);if(l<=0&&c<=0)return n.copy(i);Uo.subVectors(e,r);const u=Sr.dot(Uo),d=Mr.dot(Uo);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Sr,a);ko.subVectors(e,s);const f=Sr.dot(ko),_=Mr.dot(ko);if(_>=0&&f<=_)return n.copy(s);const p=f*c-l*_;if(p<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Mr,o);const g=u*_-f*d;if(g<=0&&d-u>=0&&f-_>=0)return Lu.subVectors(s,r),o=(d-u)/(d-u+(f-_)),n.copy(r).addScaledVector(Lu,o);const m=1/(g+p+h);return a=p*m,o=h*m,n.copy(i).addScaledVector(Sr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ws=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,kn):kn.fromBufferAttribute(r,s),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),na.subVectors(this.max,us),xr.subVectors(t.a,us),br.subVectors(t.b,us),Tr.subVectors(t.c,us),_i.subVectors(br,xr),vi.subVectors(Tr,br),Xi.subVectors(xr,Tr);let e=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Xi.z,Xi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Xi.z,0,-Xi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Xi.y,Xi.x,0];return!zo(e,xr,br,Tr,na)||(e=[1,0,0,0,1,0,0,0,1],!zo(e,xr,br,Tr,na))?!1:(ia.crossVectors(_i,vi),e=[ia.x,ia.y,ia.z],zo(e,xr,br,Tr,na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new X,new X,new X,new X,new X,new X,new X,new X],kn=new X,ta=new Ws,xr=new X,br=new X,Tr=new X,_i=new X,vi=new X,Xi=new X,us=new X,na=new X,ia=new X,$i=new X;function zo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){$i.fromArray(t,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=n.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Tt=new X,ra=new Xe,h_=0,vn=class extends ur{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wg,this.updateRanges=[],this.gpuType=io,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyMatrix3(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyMatrix4(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyNormalMatrix(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.transformDirection(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},rf=class extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},sf=class extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},oi=class extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},d_=new Ws,hs=new X,Vo=new X,ro=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):d_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(Vo)),this.expandByPoint(hs.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},f_=0,En=new Mt,Go=new Mn,Er=new X,un=new Ws,ds=new Ws,Dt=new X,di=class af extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?sf:rf)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(un.min,ds.min),un.expandByPoint(Dt),Dt.addVectors(un.max,ds.max),un.expandByPoint(Dt)):(un.expandByPoint(ds.min),un.expandByPoint(ds.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Er.fromBufferAttribute(e,c),Dt.add(Er)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new X,l[v]=new X;const c=new X,u=new X,d=new X,h=new Xe,f=new Xe,_=new Xe,p=new X,g=new X;function m(v,M,I){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,I),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,M),_.fromBufferAttribute(s,I),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const A=1/(f.x*_.y-_.x*f.y);isFinite(A)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(A),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(A),o[v].add(p),o[M].add(p),o[I].add(p),l[v].add(g),l[M].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,M=y.length;v<M;++v){const I=y[v],A=I.start,L=I.count;for(let F=A,D=A+L;F<D;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new X,b=new X,E=new X,R=new X;function C(v){E.fromBufferAttribute(r,v),R.copy(E);const M=o[v];T.copy(M),T.sub(E.multiplyScalar(E.dot(M))).normalize(),b.crossVectors(R,M);const I=b.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,M=y.length;v<M;++v){const I=y[v],A=I.start,L=I.count;for(let F=A,D=A+L;F<D;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),p=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,p),a.fromBufferAttribute(n,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let p=0,g=l.length;p<g;p++){o.isInterleavedBufferAttribute?f=l[p]*o.data.stride+o.offset:f=l[p]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new vn(h,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new af,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},p_=0,ns=class extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Re(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ni=new X,Ho=new X,sa=new X,yi=new X,Wo=new X,aa=new X,Xo=new X,dc=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ho.copy(t).add(e).multiplyScalar(.5),sa.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Ho);const r=t.distanceTo(e)*.5,s=-this.direction.dot(sa),a=yi.dot(this.direction),o=-yi.dot(sa),l=yi.lengthSq(),c=Math.abs(1-s*s);let u,d,h,f;if(c>0)if(u=s*o-a,d=s*a-o,f=r*c,u>=0)if(d>=-f)if(d<=f){const _=1/c;u*=_,d*=_,h=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d<=-f?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l):d<=f?(u=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+l):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ho).addScaledVector(sa,d),h}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,i,r){Wo.subVectors(e,t),aa.subVectors(n,t),Xo.crossVectors(Wo,aa);let s=this.direction.dot(Xo),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;yi.subVectors(this.origin,t);const o=a*this.direction.dot(aa.crossVectors(yi,aa));if(o<0)return null;const l=a*this.direction.dot(Wo.cross(yi));if(l<0||o+l>s)return null;const c=-a*yi.dot(Xo);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},of=class extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Du=new Mt,qi=new dc,oa=new ro,Iu=new X,la=new X,ca=new X,ua=new X,$o=new X,ha=new X,Nu=new X,da=new X,jt=class extends Mn{constructor(t=new di,e=new of){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&($o.fromBufferAttribute(u,t),s?ha.addScaledVector($o,c):ha.addScaledVector($o.sub(e),c))}e.add(ha)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(oa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(oa,Iu)===null||qi.origin.distanceToSquared(Iu)>(t.far-t.near)**2))&&(Du.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Du),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,_=d.length;f<_;f++){const p=d[f],g=s[p.materialIndex],m=Math.max(p.start,h.start),y=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let T=m,b=y;T<b;T+=3){const E=a.getX(T),R=a.getX(T+1),C=a.getX(T+2);i=fa(this,g,t,n,l,c,u,E,R,C),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const f=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=f,g=_;p<g;p+=3){const m=a.getX(p),y=a.getX(p+1),T=a.getX(p+2);i=fa(this,s,t,n,l,c,u,m,y,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,_=d.length;f<_;f++){const p=d[f],g=s[p.materialIndex],m=Math.max(p.start,h.start),y=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let T=m,b=y;T<b;T+=3){const E=T,R=T+1,C=T+2;i=fa(this,g,t,n,l,c,u,E,R,C),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const f=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=f,g=_;p<g;p+=3){const m=p,y=p+1,T=p+2;i=fa(this,s,t,n,l,c,u,m,y,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function m_(t,e,n,i,r,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;da.copy(o),da.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(da);return c<n.near||c>n.far?null:{distance:c,point:da.clone(),object:t}}function fa(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,la),t.getVertexPosition(l,ca),t.getVertexPosition(c,ua);const u=m_(t,e,n,i,la,ca,ua,Nu);if(u){const d=new X;cs.getBarycoord(Nu,la,ca,ua,d),r&&(u.uv=cs.getInterpolatedAttribute(r,o,l,c,d,new Xe)),s&&(u.uv1=cs.getInterpolatedAttribute(s,o,l,c,d,new Xe)),a&&(u.normal=cs.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};cs.getNormal(la,ca,ua,h.normal),u.face=h,u.barycoord=d}return u}var g_=class extends xn{constructor(t=null,e=1,n=1,i,r,s,a,o,l=Yt,c=Yt,u,d){super(null,s,a,o,l,c,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qo=new X,__=new X,v_=new Fe,xi=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qo.subVectors(n,e).cross(__.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||v_.getNormalMatrix(t),i=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new ro,y_=new Xe(.5,.5),pa=new X,fc=class{constructor(t=new xi,e=new xi,n=new xi,i=new xi,r=new xi,s=new xi){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kr,n=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],_=r[9],p=r[10],g=r[11],m=r[12],y=r[13],T=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,g-f,b-m).normalize(),i[1].setComponents(l+s,h+c,g+f,b+m).normalize(),i[2].setComponents(l+a,h+u,g+_,b+y).normalize(),i[3].setComponents(l-a,h-u,g-_,b-y).normalize(),n)i[4].setComponents(o,d,p,T).normalize(),i[5].setComponents(l-o,h-d,g-p,b-T).normalize();else if(i[4].setComponents(l-o,h-d,g-p,b-T).normalize(),e===2e3)i[5].setComponents(l+o,h+d,g+p,b+T).normalize();else if(e===2001)i[5].setComponents(o,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476+y_.distanceTo(t.center),Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(pa.x=i.normal.x>0?t.max.x:t.min.x,pa.y=i.normal.y>0?t.max.y:t.min.y,pa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},S_=class extends ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uu=new Mt,Pl=new dc,ma=new ro,ga=new X,M_=class extends Mn{constructor(t=new di,e=new S_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;Uu.copy(i).invert(),Pl.copy(t.ray).applyMatrix4(Uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let h=u,f=d;h<f;h++){const _=l.getX(h);ga.fromBufferAttribute(c,_),ku(ga,_,o,i,t,e,this)}}else{const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let h=u,f=d;h<f;h++)ga.fromBufferAttribute(c,h),ku(ga,h,o,i,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function ku(t,e,n,i,r,s,a){const o=Pl.distanceSqToPoint(t);if(o<n){const l=new X;Pl.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var lf=class extends xn{constructor(t=[],e=301,n,i,r,s,a,o,l,c){super(t,e,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cf=class extends xn{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qr=class extends xn{constructor(t,e,n=or,i,r,s,a=Yt,o=Yt,l,c=Os,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:u},i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},x_=class extends Qr{constructor(t,e=or,n=301,i,r,s=Yt,a=Yt,o,l=Os){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,r,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},uf=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pc=class hf extends di{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(d,2));function _(p,g,m,y,T,b,E,R,C,v,M){const I=b/C,A=E/v,L=b/2,F=E/2,D=R/2,B=C+1,z=v+1;let O=0,K=0;const ee=new X;for(let ie=0;ie<z;ie++){const ge=ie*A-F;for(let Se=0;Se<B;Se++)ee[p]=(Se*I-L)*y,ee[g]=ge*T,ee[m]=D,c.push(ee.x,ee.y,ee.z),ee[p]=0,ee[g]=0,ee[m]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Se/C),d.push(1-ie/v),O+=1}for(let ie=0;ie<v;ie++)for(let ge=0;ge<C;ge++){const Se=h+ge+B*ie,Ze=h+ge+B*(ie+1),Ue=h+(ge+1)+B*(ie+1),q=h+(ge+1)+B*ie;l.push(Se,Ze,q),l.push(Ze,Ue,q),K+=6}o.addGroup(f,K,M),f+=K,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ar=class df extends di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,f=[],_=[],p=[],g=[];for(let m=0;m<u;m++){const y=m*h-a;for(let T=0;T<c;T++){const b=T*d-s;_.push(b,-y,0),p.push(0,0,1),g.push(T/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const T=y+c*m,b=y+c*(m+1),E=y+1+c*(m+1),R=y+1+c*m;f.push(T,b,R),f.push(b,E,R)}this.setIndex(f),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(p,3)),this.setAttribute("uv",new oi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.width,e.height,e.widthSegments,e.heightSegments)}};function es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Ou(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Ou(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=es(t[n]);for(const r in i)e[r]=i[r]}return e}function Ou(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function b_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ff(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var T_={clone:es,merge:$t},E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=b_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},A_=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ll=class extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},C_=class extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},R_=class extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _a(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Xs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{e:{let s;t:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break t}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},P_=class extends Xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=t,a=2*e-n;break;case vu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case _u:s=t,o=2*n-e;break;case vu:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}const l=(n-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(n-e)/(i-e),_=f*f,p=_*f,g=-d*p+2*d*_-d*f,m=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*f+1,y=(-1-h)*p+(1.5+h)*_+.5*f,T=h*p-h*_;for(let b=0;b!==a;++b)r[b]=g*s[c+b]+m*s[l+b]+y*s[o+b]+T*s[u+b];return r}},L_=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*u+s[o+d]*c;return r}},D_=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},I_=class extends Xs{interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.settings||this.DefaultSettings_,u=c.inTangents,d=c.outTangents;if(!u||!d){const _=(n-e)/(i-e),p=1-_;for(let g=0;g!==a;++g)r[g]=s[l+g]*p+s[o+g]*_;return r}const h=a*2,f=t-1;for(let _=0;_!==a;++_){const p=s[l+_],g=s[o+_],m=f*h+_*2,y=d[m],T=d[m+1],b=t*h+_*2,E=u[b],R=u[b+1];let C=(n-e)/(i-e),v,M,I,A,L;for(let F=0;F<8;F++){v=C*C,M=v*C,I=1-C,A=I*I,L=A*I;const D=L*e+3*A*C*y+3*I*v*E+M*i-n;if(Math.abs(D)<1e-10)break;const B=3*A*(y-e)+6*I*C*(E-y)+3*v*(i-E);if(Math.abs(B)<1e-10)break;C=C-D/B,C=Math.max(0,Math.min(1,C))}r[_]=L*p+3*A*C*T+3*I*v*R+M*g}return r}},Kn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_a(e,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new D_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new L_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new P_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new I_(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Xa:e=this.InterpolantFactoryMethodDiscrete;break;case El:e=this.InterpolantFactoryMethodLinear;break;case xo:e=this.InterpolantFactoryMethodSmooth;break;case mu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xa;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return mu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){Le("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&$g(i))for(let a=0,o=i.length;a!==o;++a){const l=i[a];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,r=t.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{const c=a*n,u=c-n,d=c+n;for(let h=0;h!==n;++h){const f=e[c+h];if(f!==e[u+h]||f!==e[d+h]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];const c=a*n,u=s*n;for(let d=0;d!==n;++d)e[u+d]=e[c+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=El;var $s=class extends Kn{constructor(t,e,n){super(t,e,n)}};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Xa;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var N_=class extends Kn{constructor(t,e,n,i){super(t,e,n,i)}};N_.prototype.ValueTypeName="color";var U_=class extends Kn{constructor(t,e,n,i){super(t,e,n,i)}};U_.prototype.ValueTypeName="number";var k_=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let c=l+a;l!==c;l+=4)hr.slerpFlat(r,0,s,l-a,s,l,o);return r}},pf=class extends Kn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new k_(this.times,this.values,this.getValueSize(),t)}};pf.prototype.ValueTypeName="quaternion";pf.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends Kn{constructor(t,e,n){super(t,e,n)}};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Xa;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var O_=class extends Kn{constructor(t,e,n,i){super(t,e,n,i)}};O_.prototype.ValueTypeName="vector";var Yo={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Fu(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Fu(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Fu(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var F_=class{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const h=l[u],f=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},B_=new F_,mc=class{constructor(t){this.manager=t!==void 0?t:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=new WeakMap,z_=class extends mc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Yo.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let u=wr.get(s);u===void 0&&(u=[],wr.set(s,u)),u.push({onLoad:e,onError:i})}return s}const a=Fs("img");function o(){c(),e&&e(this);const u=wr.get(this)||[];for(let d=0;d<u.length;d++){const h=u[d];h.onLoad&&h.onLoad(this)}wr.delete(this),r.manager.itemEnd(t)}function l(u){c(),i&&i(u),Yo.remove(`image:${t}`);const d=wr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onError&&f.onError(u)}wr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},V_=class extends mc{constructor(t){super(t)}load(t,e,n,i){const r=new xn,s=new z_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},mf=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},jo=new Mt,Bu=new X,zu=new X,G_=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},va=new X,ya=new hr,zn=new X,gf=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Kr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(va,ya,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,ya,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(va,ya,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,ya,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new X,Vu=new Xe,Gu=new Xe,An=class extends gf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,Gu),e.subVectors(Gu,Vu)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(To*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gc=class extends gf{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},H_=class extends G_{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hu=class extends mf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new H_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},W_=class extends mf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Ar=-90,Cr=1,X_=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(Ar,Cr,t,e);i.layers=this.layers,this.add(i);const r=new An(Ar,Cr,t,e);r.layers=this.layers,this.add(r);const s=new An(Ar,Cr,t,e);s.layers=this.layers,this.add(s);const a=new An(Ar,Cr,t,e);a.layers=this.layers,this.add(a);const o=new An(Ar,Cr,t,e);o.layers=this.layers,this.add(o);const l=new An(Ar,Cr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},$_=class extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},_c="\\[\\]\\.:\\/",q_=new RegExp("["+_c+"]","g"),vc="[^"+_c+"]",Y_="[^"+_c.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",vc),K_=/(WCOD+)?/.source.replace("WCOD",Y_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Q_=new RegExp("^"+j_+K_+Z_+J_+"$"),ev=["material","materials","bones","map"],tv=class{constructor(t,e,n){const i=n||gt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gt=class Ir{constructor(e,n,i){this.path=n,this.parsedPath=i||Ir.parseTrackName(n),this.node=Ir.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new Ir.Composite(e,n,i):new Ir(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(e){const n=Q_.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);ev.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=Ir.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=n.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=tv;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wu=new Mt,nv=class{constructor(t,e,n=0,i=1/0){this.ray=new dc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(t,e=!0,n=[]){return Dl(t,this,n,e),n.sort(Xu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Dl(t[i],this,n,e);return n.sort(Xu),n}};function Xu(t,e){return t.distance-e.distance}function Dl(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Dl(s[a],e,n,!0)}}var iv=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},rx=class _f{static{_f.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function $u(t,e,n,i){const r=rv(i);switch(n){case rg:return t*e;case ag:return t*e/r.components*r.byteLength;case $d:return t*e/r.components*r.byteLength;case Wa:return t*e*2/r.components*r.byteLength;case qd:return t*e*2/r.components*r.byteLength;case sg:return t*e*3/r.components*r.byteLength;case ks:return t*e*4/r.components*r.byteLength;case Yd:return t*e*4/r.components*r.byteLength;case og:case lg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cg:case ug:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dg:case pg:return Math.max(t,16)*Math.max(e,8)/4;case hg:case fg:return Math.max(t,8)*Math.max(e,8)/2;case mg:case gg:case vg:case yg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _g:case Sg:case Mg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bg:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Tg:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Eg:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wg:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ag:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cg:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rg:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pg:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lg:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dg:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ig:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ng:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ug:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kg:case Og:case Fg:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bg:case zg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vg:case Gg:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rv(t){switch(t){case Di:case Qm:return{byteLength:1,components:1};case Vd:case eg:case lr:return{byteLength:2,components:1};case Gd:case Hd:return{byteLength:2,components:4};case or:case tg:case io:return{byteLength:4,components:1};case ng:case ig:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function vf(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sv(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],p=d[f];p.start<=_.start+_.count+1?_.count=Math.max(_.count,p.start+p.count-_.start):(++h,d[h]=p)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const p=d[f];t.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Be={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Xn={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xn.physical={uniforms:$t([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Sa={r:0,b:0,g:0},av=new Mt,yf=new Fe;yf.set(-1,0,0,0,1,0,0,0,1);function ov(t,e,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function _(y){let T=!1;const b=f(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),T=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(y,T){const b=f(T);b&&(b.isCubeTexture||b.mapping===306)?(c===void 0&&(c=new jt(new pc(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:es(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yf),c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==qa,(u!==b||d!==b.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new jt(new ar(2,2),new sn({name:"BackgroundMaterial",uniforms:es(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==qa,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(Sa,ff(t)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:_,addToRenderList:p,dispose:m}}function lv(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(A,L,F,D,B){let z=!1;const O=d(A,D,F,L);s!==O&&(s=O,c(s.object)),z=f(A,D,F,B),z&&_(A,D,F,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(A,L,F,D),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function u(A){return t.deleteVertexArray(A)}function d(A,L,F,D){const B=D.wireframe===!0;let z=i[L.id];z===void 0&&(z={},i[L.id]=z);const O=A.isInstancedMesh===!0?A.id:0;let K=z[O];K===void 0&&(K={},z[O]=K);let ee=K[F.id];ee===void 0&&(ee={},K[F.id]=ee);let ie=ee[B];return ie===void 0&&(ie=h(l()),ee[B]=ie),ie}function h(A){const L=[],F=[],D=[];for(let B=0;B<n;B++)L[B]=0,F[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:A,attributes:{},index:null}}function f(A,L,F,D){const B=s.attributes,z=L.attributes;let O=0;const K=F.getAttributes();for(const ee in K)if(K[ee].location>=0){const ie=B[ee];let ge=z[ee];if(ge===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(ge=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(ge=A.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function _(A,L,F,D){const B={},z=L.attributes;let O=0;const K=F.getAttributes();for(const ee in K)if(K[ee].location>=0){let ie=z[ee];ie===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));const ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),B[ee]=ge,O++}s.attributes=B,s.attributesNum=O,s.index=D}function p(){const A=s.newAttributes;for(let L=0,F=A.length;L<F;L++)A[L]=0}function g(A){m(A,0)}function m(A,L){const F=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;F[A]=1,D[A]===0&&(t.enableVertexAttribArray(A),D[A]=1),B[A]!==L&&(t.vertexAttribDivisor(A,L),B[A]=L)}function y(){const A=s.newAttributes,L=s.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==A[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function T(A,L,F,D,B,z,O){O===!0?t.vertexAttribIPointer(A,L,F,B,z):t.vertexAttribPointer(A,L,F,D,B,z)}function b(A,L,F,D){p();const B=D.attributes,z=F.getAttributes(),O=L.defaultAttributeValues;for(const K in z){const ee=z[K];if(ee.location>=0){let ie=B[K];if(ie===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor)),ie!==void 0){const ge=ie.normalized,Se=ie.itemSize,Ze=e.get(ie);if(Ze===void 0)continue;const Ue=Ze.buffer,q=Ze.type,le=Ze.bytesPerElement,Me=q===t.INT||q===t.UNSIGNED_INT||ie.gpuType===1013;if(ie.isInterleavedBufferAttribute){const pe=ie.data,Ce=pe.stride,ke=ie.offset;if(pe.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)m(ee.location+De,pe.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let De=0;De<ee.locationSize;De++)g(ee.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let De=0;De<ee.locationSize;De++)T(ee.location+De,Se/ee.locationSize,q,ge,Ce*le,(ke+Se/ee.locationSize*De)*le,Me)}else{if(ie.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)m(ee.location+pe,ie.meshPerAttribute);A.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<ee.locationSize;pe++)g(ee.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let pe=0;pe<ee.locationSize;pe++)T(ee.location+pe,Se/ee.locationSize,q,ge,Se*le,Se/ee.locationSize*pe*le,Me)}}else if(O!==void 0){const ge=O[K];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(ee.location,ge);break;case 3:t.vertexAttrib3fv(ee.location,ge);break;case 4:t.vertexAttrib4fv(ee.location,ge);break;default:t.vertexAttrib1fv(ee.location,ge)}}}}y()}function E(){M();for(const A in i){const L=i[A];for(const F in L){const D=L[F];for(const B in D){const z=D[B];for(const O in z)u(z[O].object),delete z[O];delete D[B]}}delete i[A]}}function R(A){if(i[A.id]===void 0)return;const L=i[A.id];for(const F in L){const D=L[F];for(const B in D){const z=D[B];for(const O in z)u(z[O].object),delete z[O];delete D[B]}}delete i[A.id]}function C(A){for(const L in i){const F=i[L];for(const D in F){const B=F[D];if(B[A.id]===void 0)continue;const z=B[A.id];for(const O in z)u(z[O].object),delete z[O];delete B[A.id]}}}function v(A){for(const L in i){const F=i[L],D=A.isInstancedMesh===!0?A.id:0,B=F[D];if(B!==void 0){for(const z in B){const O=B[z];for(const K in O)u(O[K].object),delete O[K];delete B[z]}delete F[D],Object.keys(F).length===0&&delete i[L]}}}function M(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:p,enableAttribute:g,disableUnusedAttributes:y}}function cv(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function uv(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==1023&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==1009&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!v)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:E,samples:R}}function hv(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new xi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,p=d.clipIntersection,g=d.clipShadows,m=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,T=y*4;let b=m.clippingState||null;l.value=b,b=u(_,h,T,f);for(let E=0;E!==T;++E)b[E]=n[E];m.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,_){const p=d!==null?d.length:0;let g=null;if(p!==0){if(g=l.value,_!==!0||g===null){const m=f+p*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,b=f;T!==p;++T,b+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}var Ci=4,qu=[.125,.215,.35,.446,.526,.582],Zi=20,dv=256,fs=new gc,Yu=new Ge,Ko=null,Zo=0,Jo=0,Qo=!1,fv=new X,ju=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:s=256,position:a=fv}=r;Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,Zo,Jo),this._renderer.xr.enabled=Qo,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:lr,format:ks,colorSpace:wl,depthBuffer:!1},i=Ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pv(r)),this._blurMaterial=gv(r,t,e),this._ggxMaterial=mv(r,t,e)}return i}_compileMaterial(t){const e=new jt(new di,t);this._renderer.compile(e,fs)}_sceneToCubeUV(t,e,n,i,r){const s=new An(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Yu),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new pc,new of({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,h=d.material;let f=!1;const _=t.background;_?_.isColor&&(h.color.copy(_),t.background=null,f=!0):(h.color.copy(Yu),f=!0);for(let p=0;p<6;p++){const g=p%3;g===0?(s.up.set(0,a[p],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[p],r.y,r.z)):g===1?(s.up.set(0,0,a[p]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[p],r.z)):(s.up.set(0,a[p],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[p]));const m=this._cubeSize;Rr(i,g*m,p>2?m:0,m,m),l.setRenderTarget(i),f&&l.render(d,s),l.render(t,s)}l.toneMapping=u,l.autoClear=c,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;Rr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(s,fs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,h=this._sizeLods[n],f=3*h*(n>d-Ci?n-d+Ci:0),_=4*(this._cubeSize-h);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=d-e,Rr(r,f,_,3*h,2*h),i.setRenderTarget(r),i.render(a,fs),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-n,Rr(t,f,_,3*h,2*h),i.setRenderTarget(t),i.render(a,fs)}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,h=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Zi-1),_=r/f,p=isFinite(r)?1+Math.floor(c*_):Zi;p>Zi&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zi}`);const g=[];let m=0;for(let b=0;b<Zi;++b){const E=b/_,R=Math.exp(-E*E/2);g.push(R),b===0?m+=R:b<p&&(m+=2*R)}for(let b=0;b<g.length;b++)g[b]=g[b]/m;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=f,d.mipInt.value=y-n;const T=this._sizeLods[i];Rr(e,3*T*(i>y-Ci?i-y+Ci:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(e),o.render(u,fs)}};function pv(t){const e=[],n=[],i=[];let r=t;const s=t-Ci+1+qu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ci?l=qu[a-t+Ci-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,p=3,g=2,m=1,y=new Float32Array(p*_*f),T=new Float32Array(g*_*f),b=new Float32Array(m*_*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,v=R>2?0:-1,M=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(M,p*_*R),T.set(h,g*_*R);const I=[R,R,R,R,R,R];b.set(I,m*_*R)}const E=new di;E.setAttribute("position",new vn(y,p)),E.setAttribute("uv",new vn(T,g)),E.setAttribute("faceIndex",new vn(b,m)),i.push(new jt(E,null)),r>Ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ku(t,e,n){const i=new Yn(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mv(t,e,n){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:so(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function gv(t,e,n){const i=new Float32Array(Zi),r=new X(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:so(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zu(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ju(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}var Sf=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new lf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pc(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new jt(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=gn),new X_(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}};function _v(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===303||f===304)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const p=new Sf(_.height);return p.fromEquirectangularTexture(t,h),e.set(h,p),h.addEventListener("dispose",c),o(p.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,_=f===303||f===304,p=f===301||f===302;if(_||p){let g=n.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new ju(t)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return _&&y&&y.height>0||p&&y&&l(y)?(i===null&&(i=new ju(t)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===303?h.mapping=301:f===304&&(h.mapping=302),h}function l(h){let f=0;const _=6;for(let p=0;p<_;p++)h[p]!==void 0&&f++;return f===_}function c(h){const f=h.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=n.get(f);_!==void 0&&(n.delete(f),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function vv(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Al("WebGLRenderer: "+i+" extension not supported."),r}}}function yv(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,_=d.attributes.position;let p=0;if(_===void 0)return;if(f!==null){const y=f.array;p=f.version;for(let T=0,b=y.length;T<b;T+=3){const E=y[T+0],R=y[T+1],C=y[T+2];h.push(E,R,R,C,C,E)}}else{const y=_.array;p=_.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const E=T+0,R=T+1,C=T+2;h.push(E,R,R,C,C,E)}}const g=new(_.count>=65535?sf:rf)(h,1);g.version=p;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Sv(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,f){f!==0&&(t.drawElementsInstanced(i,h,s,d*a,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Mv(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xv(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let b=o.attributes.position.count*T,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*E*4*d),C=new ef(R,b,E,d);C.type=io,C.needsUpdate=!0;const v=T*4;for(let I=0;I<d;I++){const A=g[I],L=m[I],F=y[I],D=b*E*4*I;for(let B=0;B<A.count;B++){const z=B*v;f===!0&&(r.fromBufferAttribute(A,B),R[D+z+0]=r.x,R[D+z+1]=r.y,R[D+z+2]=r.z,R[D+z+3]=0),_===!0&&(r.fromBufferAttribute(L,B),R[D+z+4]=r.x,R[D+z+5]=r.y,R[D+z+6]=r.z,R[D+z+7]=0),p===!0&&(r.fromBufferAttribute(F,B),R[D+z+8]=r.x,R[D+z+9]=r.y,R[D+z+10]=r.z,R[D+z+11]=F.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Xe(b,E)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let p=0;p<c.length;p++)f+=c[p];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function bv(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var Tv={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Ev(t,e,n,i,r){const s=new Yn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Qr(e,n):void 0}),a=new Yn(e,n,{type:lr,depthBuffer:!1,stencilBuffer:!1}),o=new di;o.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new oi([0,2,0,0,2,0],2));const l=new A_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new jt(o,l),u=new gc(-1,1,1,-1,0,1);let d=null,h=null,f=!1,_,p=null,g=[],m=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let b=0;b<g.length;b++){const E=g[b];E.setSize&&E.setSize(y,T)}},this.setEffects=function(y){g=y,m=g.length>0&&g[0].isRenderPass===!0;const T=s.width,b=s.height;for(let E=0;E<g.length;E++){const R=g[E];R.setSize&&R.setSize(T,b)}},this.begin=function(y,T){if(f||y.toneMapping===0&&g.length===0)return!1;if(p=T,T!==null){const b=T.width,E=T.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return m===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=0,!0},this.hasRenderPass=function(){return m},this.end=function(y,T){y.toneMapping=_,f=!0;let b=s,E=a;for(let R=0;R<g.length;R++){const C=g[R];if(C.enabled!==!1&&(C.render(y,E,b,T),C.needsSwap!==!1)){const v=b;b=E,E=v}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},Ye.getTransfer(d)==="srgb"&&(l.defines.SRGB_TRANSFER="");const R=Tv[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(c,u),p=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Mf=new xn,Il=new Qr(1,1),xf=new ef,bf=new n_,Tf=new lf,Qu=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qu[r];if(s===void 0&&(s=new Float32Array(r),Qu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ao(t,e){let n=eh[e];n===void 0&&(n=new Int32Array(e),eh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Av(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function Cv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function Rv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function Pv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;ih.set(i),t.uniformMatrix2fv(this.addr,!1,ih),Pt(n,i)}}function Lv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;nh.set(i),t.uniformMatrix3fv(this.addr,!1,nh),Pt(n,i)}}function Dv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;th.set(i),t.uniformMatrix4fv(this.addr,!1,th),Pt(n,i)}}function Iv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Nv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function Uv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function kv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function Ov(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Fv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function Bv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function zv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function Vv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Il.compareFunction=n.isReversedDepthBuffer()?518:515,s=Il):s=Mf,n.setTexture2D(e||s,r)}function Gv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||bf,r)}function Hv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tf,r)}function Wv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xf,r)}function Xv(t){switch(t){case 5126:return wv;case 35664:return Av;case 35665:return Cv;case 35666:return Rv;case 35674:return Pv;case 35675:return Lv;case 35676:return Dv;case 5124:case 35670:return Iv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return kv;case 5125:return Ov;case 36294:return Fv;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Wv}}function $v(t,e){t.uniform1fv(this.addr,e)}function qv(t,e){const n=is(e,this.size,2);t.uniform2fv(this.addr,n)}function Yv(t,e){const n=is(e,this.size,3);t.uniform3fv(this.addr,n)}function jv(t,e){const n=is(e,this.size,4);t.uniform4fv(this.addr,n)}function Kv(t,e){const n=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Zv(t,e){const n=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Jv(t,e){const n=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Qv(t,e){t.uniform1iv(this.addr,e)}function e0(t,e){t.uniform2iv(this.addr,e)}function t0(t,e){t.uniform3iv(this.addr,e)}function n0(t,e){t.uniform4iv(this.addr,e)}function i0(t,e){t.uniform1uiv(this.addr,e)}function r0(t,e){t.uniform2uiv(this.addr,e)}function s0(t,e){t.uniform3uiv(this.addr,e)}function a0(t,e){t.uniform4uiv(this.addr,e)}function o0(t,e,n){const i=this.cache,r=e.length,s=ao(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Il:a=Mf;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function l0(t,e,n){const i=this.cache,r=e.length,s=ao(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||bf,s[a])}function c0(t,e,n){const i=this.cache,r=e.length,s=ao(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Tf,s[a])}function u0(t,e,n){const i=this.cache,r=e.length,s=ao(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||xf,s[a])}function h0(t){switch(t){case 5126:return $v;case 35664:return qv;case 35665:return Yv;case 35666:return jv;case 35674:return Kv;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return Qv;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}var d0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xv(e.type)}},f0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h0(e.type)}},p0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}},el=/(\w+)(\])?(\[|\.)?/g;function rh(t,e){t.seq.push(e),t.map[e.id]=e}function m0(t,e,n){const i=t.name,r=i.length;for(el.lastIndex=0;;){const s=el.exec(i),a=el.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){rh(n,c===void 0?new d0(o,t,e):new f0(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new p0(o),rh(n,u)),n=u}}}var La=class{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s);m0(a,t.getUniformLocation(e,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}};function sh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var g0=37297,_0=0;function v0(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var ah=new Fe;function y0(t){Ye._getMatrix(ah,Ye.workingColorSpace,t);const e=`mat3( ${ah.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case $a:return[e,"LinearTransferOETF"];case qa:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function oh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+v0(t.getShaderSource(e),a)}else return r}function S0(t,e){const n=y0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var M0={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function x0(t,e){const n=M0[e];return n===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ma=new X;function b0(){return Ye.getLuminanceCoefficients(Ma),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ma.x.toFixed(4)}, ${Ma.y.toFixed(4)}, ${Ma.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function E0(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function w0(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ss(t){return t!==""}function lh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(t){return t.replace(A0,R0)}var C0=new Map;function R0(t,e){let n=Be[e];if(n===void 0){const i=C0.get(e);if(i!==void 0)n=Be[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nl(n)}var P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(t){return t.replace(P0,L0)}function L0(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var D0={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function I0(t){return D0[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N0={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function U0(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":N0[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var k0={302:"ENVMAP_MODE_REFRACTION"};function O0(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":k0[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var F0={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function B0(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":F0[t.combine]||"ENVMAP_BLENDING_NONE"}function z0(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function V0(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=I0(n),c=U0(n),u=O0(n),d=B0(n),h=z0(n),f=T0(n),_=E0(s),p=r.createProgram();let g,m,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ss).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ss).join(`
`),m.length>0&&(m+=`
`)):(g=[hh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),m=[hh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Be.tonemapping_pars_fragment:"",n.toneMapping!==0?x0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,S0("linearToOutputTexel",n.outputColorSpace),b0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Nl(a),a=lh(a,n),a=ch(a,n),o=Nl(o),o=lh(o,n),o=ch(o,n),a=uh(a),o=uh(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=y+g+a,b=y+m+o,E=sh(r,r.VERTEX_SHADER,T),R=sh(r,r.FRAGMENT_SHADER,b);r.attachShader(p,E),r.attachShader(p,R),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function C(A){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(p)||"",F=r.getShaderInfoLog(E)||"",D=r.getShaderInfoLog(R)||"",B=L.trim(),z=F.trim(),O=D.trim();let K=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,E,R);else{const ie=oh(r,E,"vertex"),ge=oh(r,R,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+ie+`
`+ge)}else B!==""?Re("WebGLProgram: Program Info Log:",B):(z===""||O==="")&&(ee=!1);ee&&(A.diagnostics={runnable:K,programLog:B,vertexShader:{log:z,prefix:g},fragmentShader:{log:O,prefix:m}})}r.deleteShader(E),r.deleteShader(R),v=new La(r,p),M=w0(r,p)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(p,g0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=R,this}var G0=0,H0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new W0(t),e.set(t,n)),n}},W0=class{constructor(t){this.id=G0++,this.code=t,this.usedTimes=0}};function X0(t){return t===1030||t===37490||t===36285}function $0(t,e,n,i,r,s){const a=new hc,o=new H0,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,M,I,A,L,F){const D=A.fog,B=L.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||z,O),ee=K&&K.mapping===306?K.image.height:null,ie=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=ge!==void 0?ge.length:0;let Ze=0;B.morphAttributes.position!==void 0&&(Ze=1),B.morphAttributes.normal!==void 0&&(Ze=2),B.morphAttributes.color!==void 0&&(Ze=3);let Ue,q,le,Me;if(ie){const Ie=Xn[ie];Ue=Ie.vertexShader,q=Ie.fragmentShader}else Ue=v.vertexShader,q=v.fragmentShader,o.update(v),le=o.getVertexShaderID(v),Me=o.getFragmentShaderID(v);const pe=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,tt=!!v.map,We=!!v.matcap,Ct=!!K,vt=!!v.aoMap,ln=!!v.lightMap,kt=!!v.bumpMap,bt=!!v.normalMap,N=!!v.displacementMap,Xt=!!v.emissiveMap,$e=!!v.metalnessMap,Je=!!v.roughnessMap,de=v.anisotropy>0,ut=v.clearcoat>0,we=v.dispersion>0,w=v.iridescence>0,S=v.sheen>0,G=v.transmission>0,j=de&&!!v.anisotropyMap,J=ut&&!!v.clearcoatMap,ne=ut&&!!v.clearcoatNormalMap,ce=ut&&!!v.clearcoatRoughnessMap,U=w&&!!v.iridescenceMap,se=w&&!!v.iridescenceThicknessMap,ue=S&&!!v.sheenColorMap,me=S&&!!v.sheenRoughnessMap,Z=!!v.specularMap,Pe=!!v.specularColorMap,Oe=!!v.specularIntensityMap,qe=G&&!!v.transmissionMap,ze=G&&!!v.thicknessMap,P=!!v.gradientMap,Y=!!v.alphaMap,te=v.alphaTest>0,oe=!!v.alphaHash,xe=!!v.extensions;let Q=0;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Q=t.toneMapping);const be={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:q,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:We,envMap:Ct,envMapMode:Ct&&K.mapping,envMapCubeUVHeight:ee,aoMap:vt,lightMap:ln,bumpMap:kt,normalMap:bt,displacementMap:N,emissiveMap:Xt,normalMapObjectSpace:bt&&v.normalMapType===1,normalMapTangentSpace:bt&&v.normalMapType===0,packedNormalMap:bt&&v.normalMapType===0&&X0(v.normalMap.format),metalnessMap:$e,roughnessMap:Je,anisotropy:de,anisotropyMap:j,clearcoat:ut,clearcoatMap:J,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,dispersion:we,iridescence:w,iridescenceMap:U,iridescenceThicknessMap:se,sheen:S,sheenColorMap:ue,sheenRoughnessMap:me,specularMap:Z,specularColorMap:Pe,specularIntensityMap:Oe,transmission:G,transmissionMap:qe,thicknessMap:ze,gradientMap:P,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:Y,alphaTest:te,alphaHash:oe,combine:v.combine,mapUv:tt&&_(v.map.channel),aoMapUv:vt&&_(v.aoMap.channel),lightMapUv:ln&&_(v.lightMap.channel),bumpMapUv:kt&&_(v.bumpMap.channel),normalMapUv:bt&&_(v.normalMap.channel),displacementMapUv:N&&_(v.displacementMap.channel),emissiveMapUv:Xt&&_(v.emissiveMap.channel),metalnessMapUv:$e&&_(v.metalnessMap.channel),roughnessMapUv:Je&&_(v.roughnessMap.channel),anisotropyMapUv:j&&_(v.anisotropyMap.channel),clearcoatMapUv:J&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:Z&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Oe&&_(v.specularIntensityMap.channel),transmissionMapUv:qe&&_(v.transmissionMap.channel),thicknessMapUv:ze&&_(v.thicknessMap.channel),alphaMapUv:Y&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(bt||de),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(tt||Y),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Xt&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)M.push(I),M.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(M,v),y(M,v),M.push(t.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function T(v){const M=f[v.type];let I;if(M){const A=Xn[M];I=T_.clone(A.uniforms)}else I=v.uniforms;return I}function b(v,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new V0(t,M,v,r),c.push(I),u.set(M,I)),I}function E(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function C(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:T,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:C}}function q0(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Y0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function dh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,p,g,m){let y=t[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:p,renderOrder:h.renderOrder,z:g,group:m},t[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=_,y.materialVariant=a(h),y.groupOrder=p,y.renderOrder=h.renderOrder,y.z=g,y.group=m),e++,y}function l(h,f,_,p,g,m){const y=o(h,f,_,p,g,m);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function c(h,f,_,p,g,m){const y=o(h,f,_,p,g,m);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):n.unshift(y)}function u(h,f){n.length>1&&n.sort(h||Y0),i.length>1&&i.sort(f||dh),r.length>1&&r.sort(f||dh)}function d(){for(let h=e,f=t.length;h<f;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function j0(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new fh,t.set(i,[a])):r>=s.length?(a=new fh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function K0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ge};break;case"SpotLight":n={position:new X,direction:new X,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function Z0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var J0=0;function Q0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ey(t){const e=new K0,n=Z0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new Mt,a=new Mt;function o(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,_=0,p=0,g=0,m=0,y=0,T=0,b=0,E=0,R=0,C=0;c.sort(Q0);for(let M=0,I=c.length;M<I;M++){const A=c[M],L=A.color,F=A.intensity,D=A.distance;let B=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===1030?B=A.shadow.map.texture:B=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=L.r*F,d+=L.g*F,h+=L.b*F;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],F);C++}else if(A.isDirectionalLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,K=n.get(A);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=A.shadow.matrix,y++}i.directional[f]=z,f++}else if(A.isSpotLight){const z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(L).multiplyScalar(F),z.distance=D,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[p]=z;const O=A.shadow;if(A.map&&(i.spotLightMap[E]=A.map,E++,O.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[p]=O.matrix,A.castShadow){const K=n.get(A);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=B,b++}p++}else if(A.isRectAreaLight){const z=e.get(A);z.color.copy(L).multiplyScalar(F),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=z,g++}else if(A.isPointLight){const z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const O=A.shadow,K=n.get(A);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,K.shadowCameraNear=O.camera.near,K.shadowCameraFar=O.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=A.shadow.matrix,T++}i.point[_]=z,_++}else if(A.isHemisphereLight){const z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(F),z.groundColor.copy(A.groundColor).multiplyScalar(F),i.hemi[m]=z,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==f||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==b||v.numSpotMaps!==E||v.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=p,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,v.directionalLength=f,v.pointLength=_,v.spotLength=p,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=b,v.numSpotMaps=E,v.numLightProbes=C,i.version=J0++)}function l(c,u){let d=0,h=0,f=0,_=0,p=0;const g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const T=c[m];if(T.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),d++}else if(T.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),f++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),h++}else if(T.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function ph(t){const e=new ey(t),n=[],i=[],r=[];function s(h){d.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ty(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ph(t),e.set(r,[o])):s>=a.length?(o=new ph(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`,ry=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],sy=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],mh=new Mt,ps=new X,tl=new X;function ay(t,e,n){let i=new fc;const r=new Xe,s=new Xe,a=new At,o=new C_,l=new R_,c={},u=n.maxTextureSize,d={0:1,1:0,2:2},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new jt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(R,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===2&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const M=t.getRenderTarget(),I=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),L=t.state;L.setBlending(0),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=m!==this.type;F&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=R.length;D<B;D++){const z=R[D],O=z.shadow;if(O===void 0){Re("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const K=O.getFrameExtents();r.multiply(K),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,O.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ee,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===3){if(z.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Yn(r.x,r.y,{format:Wa,type:lr,minFilter:gn,magFilter:gn,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Qr(r.x,r.y,io),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=Os,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt}else z.isPointLight?(O.map=new Sf(r.x),O.map.depthTexture=new x_(r.x,or)):(O.map=new Yn(r.x,r.y),O.map.depthTexture=new Qr(r.x,r.y,or)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=Os,this.type===1?(O.map.depthTexture.compareFunction=ee?518:515,O.map.depthTexture.minFilter=gn,O.map.depthTexture.magFilter=gn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt);O.camera.updateProjectionMatrix()}const ie=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ie;ge++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(O.map),t.clear());const Se=O.getViewport(ge);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),L.viewport(a)}if(z.isPointLight){const Se=O.camera,Ze=O.matrix,Ue=z.distance||Se.far;Ue!==Se.far&&(Se.far=Ue,Se.updateProjectionMatrix()),ps.setFromMatrixPosition(z.matrixWorld),Se.position.copy(ps),tl.copy(Se.position),tl.add(ry[ge]),Se.up.copy(sy[ge]),Se.lookAt(tl),Se.updateMatrixWorld(),Ze.makeTranslation(-ps.x,-ps.y,-ps.z),mh.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),O._frustum.setFromProjectionMatrix(mh,Se.coordinateSystem,Se.reversedDepth)}else O.updateMatrices(z);i=O.getFrustum(),b(C,v,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===3&&y(O,v),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(M,I,A)};function y(R,C){const v=e.update(p);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yn(r.x,r.y,{format:Wa,type:lr})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,v,h,p,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,v,f,p,null)}function T(R,C,v,M){let I=null;const A=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)I=A;else if(I=v.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=I.uuid,F=C.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let B=D[F];B===void 0&&(B=I.clone(),D[F]=B,C.addEventListener("dispose",E)),I=B}if(I.visible=C.visible,I.wireframe=C.wireframe,M===3?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const L=t.properties.get(I);L.light=v}return I}function b(R,C,v,M,I){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===3)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const L=e.update(R),F=R.material;if(Array.isArray(F)){const D=L.groups;for(let B=0,z=D.length;B<z;B++){const O=D[B],K=F[O.materialIndex];if(K&&K.visible){const ee=T(R,K,M,I);R.onBeforeShadow(t,R,C,v,L,ee,O),t.renderBufferDirect(v,null,L,ee,R,O),R.onAfterShadow(t,R,C,v,L,ee,O)}}}else if(F.visible){const D=T(R,F,M,I);R.onBeforeShadow(t,R,C,v,L,D,null),t.renderBufferDirect(v,null,L,D,R,null),R.onAfterShadow(t,R,C,v,L,D,null)}}const A=R.children;for(let L=0,F=A.length;L<F;L++)b(A[L],C,v,M,I)}function E(R){R.target.removeEventListener("dispose",E);for(const C in c){const v=c[C],M=R.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}function oy(t,e){function n(){let P=!1;const Y=new At;let te=null;const oe=new At(0,0,0,0);return{setMask:function(xe){te!==xe&&!P&&(t.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){P=xe},setClear:function(xe,Q,be,Ie,Kt){Kt===!0&&(xe*=Ie,Q*=Ie,be*=Ie),Y.set(xe,Q,be,Ie),oe.equals(Y)===!1&&(t.clearColor(xe,Q,be,Ie),oe.copy(Y))},reset:function(){P=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let P=!1,Y=!1,te=null,oe=null,xe=null;return{setReversed:function(Q){if(Y!==Q){const be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Y=Q;const Ie=xe;xe=null,this.setClear(Ie)}},getReversed:function(){return Y},setTest:function(Q){Q?pe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Q){te!==Q&&!P&&(t.depthMask(Q),te=Q)},setFunc:function(Q){if(Y&&(Q=jg[Q]),oe!==Q){switch(Q){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Q}},setLocked:function(Q){P=Q},setClear:function(Q){xe!==Q&&(xe=Q,Y&&(Q=1-Q),t.clearDepth(Q))},reset:function(){P=!1,te=null,oe=null,xe=null,Y=!1}}}function r(){let P=!1,Y=null,te=null,oe=null,xe=null,Q=null,be=null,Ie=null,Kt=null;return{setTest:function(lt){P||(lt?pe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(lt){Y!==lt&&!P&&(t.stencilMask(lt),Y=lt)},setFunc:function(lt,Fn,Dn){(te!==lt||oe!==Fn||xe!==Dn)&&(t.stencilFunc(lt,Fn,Dn),te=lt,oe=Fn,xe=Dn)},setOp:function(lt,Fn,Dn){(Q!==lt||be!==Fn||Ie!==Dn)&&(t.stencilOp(lt,Fn,Dn),Q=lt,be=Fn,Ie=Dn)},setLocked:function(lt){P=lt},setClear:function(lt){Kt!==lt&&(t.clearStencil(lt),Kt=lt)},reset:function(){P=!1,Y=null,te=null,oe=null,xe=null,Q=null,be=null,Ie=null,Kt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],p=null,g=!1,m=null,y=null,T=null,b=null,E=null,R=null,C=null,v=new Ge(0,0,0),M=0,I=!1,A=null,L=null,F=null,D=null,B=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),O=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),O=K>=2);let ie=null,ge={};const Se=t.getParameter(t.SCISSOR_BOX),Ze=t.getParameter(t.VIEWPORT),Ue=new At().fromArray(Se),q=new At().fromArray(Ze);function le(P,Y,te,oe){const xe=new Uint8Array(4),Q=t.createTexture();t.bindTexture(P,Q),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<te;be++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(Y,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(Y+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Q}const Me={};Me[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),a.setFunc(3),kt(!1),bt(1),pe(t.CULL_FACE),vt(0);function pe(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function Ce(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function ke(P,Y){return h[P]!==Y?(t.bindFramebuffer(P,Y),h[P]=Y,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Y),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Y),!0):!1}function De(P,Y){let te=_,oe=!1;if(P){te=f.get(Y),te===void 0&&(te=[],f.set(Y,te));const xe=P.textures;if(te.length!==xe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,be=xe.length;Q<be;Q++)te[Q]=t.COLOR_ATTACHMENT0+Q;te.length=xe.length,oe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,oe=!0);oe&&t.drawBuffers(te)}function tt(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const We={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};We[103]=t.MIN,We[104]=t.MAX;const Ct={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function vt(P,Y,te,oe,xe,Q,be,Ie,Kt,lt){if(P===0){g===!0&&(Ce(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),P!==5){if(P!==m||lt!==I){if((y!==100||E!==100)&&(t.blendEquation(t.FUNC_ADD),y=100,E=100),lt)switch(P){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Le("WebGLState: Invalid blending: ",P);break}else switch(P){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",P);break}T=null,b=null,R=null,C=null,v.set(0,0,0),M=0,m=P,I=lt}return}xe=xe||Y,Q=Q||te,be=be||oe,(Y!==y||xe!==E)&&(t.blendEquationSeparate(We[Y],We[xe]),y=Y,E=xe),(te!==T||oe!==b||Q!==R||be!==C)&&(t.blendFuncSeparate(Ct[te],Ct[oe],Ct[Q],Ct[be]),T=te,b=oe,R=Q,C=be),(Ie.equals(v)===!1||Kt!==M)&&(t.blendColor(Ie.r,Ie.g,Ie.b,Kt),v.copy(Ie),M=Kt),m=P,I=!1}function ln(P,Y){P.side===2?Ce(t.CULL_FACE):pe(t.CULL_FACE);let te=P.side===1;Y&&(te=!te),kt(te),P.blending===1&&P.transparent===!1?vt(0):vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Xt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function kt(P){A!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),A=P)}function bt(P){P!==0?(pe(t.CULL_FACE),P!==L&&(P===1?t.cullFace(t.BACK):P===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),L=P}function N(P){P!==F&&(O&&t.lineWidth(P),F=P)}function Xt(P,Y,te){P?(pe(t.POLYGON_OFFSET_FILL),(D!==Y||B!==te)&&(D=Y,B=te,a.getReversed()&&(Y=-Y),t.polygonOffset(Y,te))):Ce(t.POLYGON_OFFSET_FILL)}function $e(P){P?pe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Je(P){P===void 0&&(P=t.TEXTURE0+z-1),ie!==P&&(t.activeTexture(P),ie=P)}function de(P,Y,te){te===void 0&&(ie===null?te=t.TEXTURE0+z-1:te=ie);let oe=ge[te];oe===void 0&&(oe={type:void 0,texture:void 0},ge[te]=oe),(oe.type!==P||oe.texture!==Y)&&(ie!==te&&(t.activeTexture(te),ie=te),t.bindTexture(P,Y||Me[P]),oe.type=P,oe.texture=Y)}function ut(){const P=ge[ie];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function we(){try{t.compressedTexImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function S(){try{t.texSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function G(){try{t.texSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function ne(){try{t.texStorage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function ce(){try{t.texStorage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function U(){try{t.texImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function se(){try{t.texImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function ue(P){return d[P]!==void 0?d[P]:t.getParameter(P)}function me(P,Y){d[P]!==Y&&(t.pixelStorei(P,Y),d[P]=Y)}function Z(P){Ue.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ue.copy(P))}function Pe(P){q.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Oe(P,Y){let te=c.get(Y);te===void 0&&(te=new WeakMap,c.set(Y,te));let oe=te.get(P);oe===void 0&&(oe=t.getUniformBlockIndex(Y,P.name),te.set(P,oe))}function qe(P,Y){const te=c.get(Y).get(P);l.get(Y)!==te&&(t.uniformBlockBinding(Y,te,P.__bindingPointIndex),l.set(Y,te))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ge={},h={},f=new WeakMap,_=[],p=null,g=!1,m=null,y=null,T=null,b=null,E=null,R=null,C=null,v=new Ge(0,0,0),M=0,I=!1,A=null,L=null,F=null,D=null,B=null,Ue.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Ce,bindFramebuffer:ke,drawBuffers:De,useProgram:tt,setBlending:vt,setMaterial:ln,setFlipSided:kt,setCullFace:bt,setLineWidth:N,setPolygonOffset:Xt,setScissorTest:$e,activeTexture:Je,bindTexture:de,unbindTexture:ut,compressedTexImage2D:we,compressedTexImage3D:w,texImage2D:U,texImage3D:se,pixelStorei:me,getParameter:ue,updateUBOMapping:Oe,uniformBlockBinding:qe,texStorage2D:ne,texStorage3D:ce,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:j,compressedTexSubImage3D:J,scissor:Z,viewport:Pe,reset:ze}}function ly(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,S){return _?new OffscreenCanvas(w,S):Fs("canvas")}function g(w,S,G){let j=1;const J=we(w);if((J.width>G||J.height>G)&&(j=G/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ne=Math.floor(j*J.width),ce=Math.floor(j*J.height);h===void 0&&(h=p(ne,ce));const U=S?p(ne,ce):h;return U.width=ne,U.height=ce,U.getContext("2d").drawImage(w,0,0,ne,ce),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ne+"x"+ce+")."),U}else return"data"in w&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function y(w){t.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(w,S,G,j,J,ne=!1){if(w!==null){if(t[w]!==void 0)return t[w];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce;j&&(ce=e.get("EXT_texture_norm16"),ce||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=S;if(S===t.RED&&(G===t.FLOAT&&(U=t.R32F),G===t.HALF_FLOAT&&(U=t.R16F),G===t.UNSIGNED_BYTE&&(U=t.R8),G===t.UNSIGNED_SHORT&&ce&&(U=ce.R16_EXT),G===t.SHORT&&ce&&(U=ce.R16_SNORM_EXT)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(U=t.R8UI),G===t.UNSIGNED_SHORT&&(U=t.R16UI),G===t.UNSIGNED_INT&&(U=t.R32UI),G===t.BYTE&&(U=t.R8I),G===t.SHORT&&(U=t.R16I),G===t.INT&&(U=t.R32I)),S===t.RG&&(G===t.FLOAT&&(U=t.RG32F),G===t.HALF_FLOAT&&(U=t.RG16F),G===t.UNSIGNED_BYTE&&(U=t.RG8),G===t.UNSIGNED_SHORT&&ce&&(U=ce.RG16_EXT),G===t.SHORT&&ce&&(U=ce.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(U=t.RG8UI),G===t.UNSIGNED_SHORT&&(U=t.RG16UI),G===t.UNSIGNED_INT&&(U=t.RG32UI),G===t.BYTE&&(U=t.RG8I),G===t.SHORT&&(U=t.RG16I),G===t.INT&&(U=t.RG32I)),S===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(U=t.RGB8UI),G===t.UNSIGNED_SHORT&&(U=t.RGB16UI),G===t.UNSIGNED_INT&&(U=t.RGB32UI),G===t.BYTE&&(U=t.RGB8I),G===t.SHORT&&(U=t.RGB16I),G===t.INT&&(U=t.RGB32I)),S===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(U=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(U=t.RGBA16UI),G===t.UNSIGNED_INT&&(U=t.RGBA32UI),G===t.BYTE&&(U=t.RGBA8I),G===t.SHORT&&(U=t.RGBA16I),G===t.INT&&(U=t.RGBA32I)),S===t.RGB&&(G===t.UNSIGNED_SHORT&&ce&&(U=ce.RGB16_EXT),G===t.SHORT&&ce&&(U=ce.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(U=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(U=t.R11F_G11F_B10F)),S===t.RGBA){const se=ne?$a:Ye.getTransfer(J);G===t.FLOAT&&(U=t.RGBA32F),G===t.HALF_FLOAT&&(U=t.RGBA16F),G===t.UNSIGNED_BYTE&&(U=se==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&ce&&(U=ce.RGBA16_EXT),G===t.SHORT&&ce&&(U=ce.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(U=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(U=t.RGB5_A1)}return(U===t.R16F||U===t.R32F||U===t.RG16F||U===t.RG32F||U===t.RGBA16F||U===t.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function E(w,S){let G;return w?S===null||S===1014||S===1020?G=t.DEPTH24_STENCIL8:S===1015?G=t.DEPTH32F_STENCIL8:S===1012&&(G=t.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?G=t.DEPTH_COMPONENT24:S===1015?G=t.DEPTH_COMPONENT32F:S===1012&&(G=t.DEPTH_COMPONENT16),G}function R(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){const S=w.target;S.removeEventListener("dispose",C),M(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function v(w){const S=w.target;S.removeEventListener("dispose",v),A(S)}function M(w){const S=i.get(w);if(S.__webglInit===void 0)return;const G=w.source,j=f.get(G);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(w),Object.keys(j).length===0&&f.delete(G)}i.remove(w)}function I(w){const S=i.get(w);t.deleteTexture(S.__webglTexture);const G=w.source,j=f.get(G);delete j[S.__cacheKey],a.memory.textures--}function A(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[j][J]);else t.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)t.deleteFramebuffer(S.__webglFramebuffer[j]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let j=0,J=G.length;j<J;j++){const ne=i.get(G[j]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(G[j])}i.remove(w)}let L=0;function F(){L=0}function D(){return L}function B(w){L=w}function z(){const w=L;return w>=r.maxTextures&&Re("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function O(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function K(w,S){const G=i.get(w);if(w.isVideoTexture&&de(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){const j=w.image;if(j===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,w,S);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function ee(w,S){const G=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Ce(G,w,S);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function ie(w,S){const G=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){Ce(G,w,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function ge(w,S){const G=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&G.__version!==w.version){ke(G,w,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const Se={[bl]:t.REPEAT,[si]:t.CLAMP_TO_EDGE,[Tl]:t.MIRRORED_REPEAT},Ze={[Yt]:t.NEAREST,[Km]:t.NEAREST_MIPMAP_NEAREST,[Zm]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[Jm]:t.LINEAR_MIPMAP_NEAREST,[cc]:t.LINEAR_MIPMAP_LINEAR},Ue={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function q(w,S){if(S.type===1015&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,Se[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Se[S.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Se[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Ze[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Ze[S.minFilter]),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function le(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",C));const j=S.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const ne=O(S);if(ne!==w.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[ne].usedTimes++;const ce=J[w.__cacheKey];ce!==void 0&&(J[w.__cacheKey].usedTimes--,ce.usedTimes===0&&I(S)),w.__cacheKey=ne,w.__webglTexture=J[ne].texture}return G}function Me(w,S,G){return Math.floor(Math.floor(w/G)/S)}function pe(w,S,G,j){const ne=w.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,G,j,S.data);else{ne.sort((me,Z)=>me.start-Z.start);let ce=0;for(let me=1;me<ne.length;me++){const Z=ne[ce],Pe=ne[me],Oe=Z.start+Z.count,qe=Me(Pe.start,S.width,4),ze=Me(Z.start,S.width,4);Pe.start<=Oe+1&&qe===ze&&Me(Pe.start+Pe.count-1,S.width,4)===qe?Z.count=Math.max(Z.count,Pe.start+Pe.count-Z.start):(++ce,ne[ce]=Pe)}ne.length=ce+1;const U=n.getParameter(t.UNPACK_ROW_LENGTH),se=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let me=0,Z=ne.length;me<Z;me++){const Pe=ne[me],Oe=Math.floor(Pe.start/4),qe=Math.ceil(Pe.count/4),ze=Oe%S.width,P=Math.floor(Oe/S.width),Y=qe,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,ze,P,Y,te,G,j,S.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,U),n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function Ce(w,S,G){let j=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=t.TEXTURE_3D);const J=le(w,S),ne=S.source;n.bindTexture(j,w.__webglTexture,t.TEXTURE0+G);const ce=i.get(ne);if(ne.version!==ce.__version||J===!0){if(n.activeTexture(t.TEXTURE0+G),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){const Y=Ye.getPrimaries(Ye.workingColorSpace),te=S.colorSpace===""?null:Ye.getPrimaries(S.colorSpace),oe=S.colorSpace===""||Y===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let U=g(S.image,!1,r.maxTextureSize);U=ut(S,U);const se=s.convert(S.format,S.colorSpace),ue=s.convert(S.type);let me=b(S.internalFormat,se,ue,S.normalized,S.colorSpace,S.isVideoTexture);q(j,S);let Z;const Pe=S.mipmaps,Oe=S.isVideoTexture!==!0,qe=ce.__version===void 0||J===!0,ze=ne.dataReady,P=R(S,U);if(S.isDepthTexture)me=E(S.format===Xd,S.type),qe&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,me,U.width,U.height):n.texImage2D(t.TEXTURE_2D,0,me,U.width,U.height,0,se,ue,null));else if(S.isDataTexture)if(Pe.length>0){Oe&&qe&&n.texStorage2D(t.TEXTURE_2D,P,me,Pe[0].width,Pe[0].height);for(let Y=0,te=Pe.length;Y<te;Y++)Z=Pe[Y],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Z.width,Z.height,se,ue,Z.data):n.texImage2D(t.TEXTURE_2D,Y,me,Z.width,Z.height,0,se,ue,Z.data);S.generateMipmaps=!1}else Oe?(qe&&n.texStorage2D(t.TEXTURE_2D,P,me,U.width,U.height),ze&&pe(S,U,se,ue)):n.texImage2D(t.TEXTURE_2D,0,me,U.width,U.height,0,se,ue,U.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,me,Pe[0].width,Pe[0].height,U.depth);for(let Y=0,te=Pe.length;Y<te;Y++)if(Z=Pe[Y],S.format!==1023)if(se!==null)if(Oe){if(ze)if(S.layerUpdates.size>0){const oe=$u(Z.width,Z.height,S.format,S.type);for(const xe of S.layerUpdates){const Q=Z.data.subarray(xe*oe/Z.data.BYTES_PER_ELEMENT,(xe+1)*oe/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,xe,Z.width,Z.height,1,se,Q)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Z.width,Z.height,U.depth,se,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,me,Z.width,Z.height,U.depth,0,Z.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?ze&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Z.width,Z.height,U.depth,se,ue,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,me,Z.width,Z.height,U.depth,0,se,ue,Z.data)}else{Oe&&qe&&n.texStorage2D(t.TEXTURE_2D,P,me,Pe[0].width,Pe[0].height);for(let Y=0,te=Pe.length;Y<te;Y++)Z=Pe[Y],S.format!==1023?se!==null?Oe?ze&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,Z.width,Z.height,se,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,me,Z.width,Z.height,0,Z.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Z.width,Z.height,se,ue,Z.data):n.texImage2D(t.TEXTURE_2D,Y,me,Z.width,Z.height,0,se,ue,Z.data)}else if(S.isDataArrayTexture)if(Oe){if(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,me,U.width,U.height,U.depth),ze)if(S.layerUpdates.size>0){const Y=$u(U.width,U.height,S.format,S.type);for(const te of S.layerUpdates){const oe=U.data.subarray(te*Y/U.data.BYTES_PER_ELEMENT,(te+1)*Y/U.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,U.width,U.height,1,se,ue,oe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,se,ue,U.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,U.width,U.height,U.depth,0,se,ue,U.data);else if(S.isData3DTexture)Oe?(qe&&n.texStorage3D(t.TEXTURE_3D,P,me,U.width,U.height,U.depth),ze&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,se,ue,U.data)):n.texImage3D(t.TEXTURE_3D,0,me,U.width,U.height,U.depth,0,se,ue,U.data);else if(S.isFramebufferTexture){if(qe)if(Oe)n.texStorage2D(t.TEXTURE_2D,P,me,U.width,U.height);else{let Y=U.width,te=U.height;for(let oe=0;oe<P;oe++)n.texImage2D(t.TEXTURE_2D,oe,me,Y,te,0,se,ue,null),Y>>=1,te>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),U.parentNode!==Y){Y.appendChild(U),d.add(S),Y.onpaint=be=>{const Ie=be.changedElements;for(const Kt of d)Ie.includes(Kt.image)&&(Kt.needsUpdate=!0)},Y.requestPaint();return}const te=0,oe=t.RGBA,xe=t.RGBA,Q=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,te,oe,xe,Q,U),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&qe){const Y=we(Pe[0]);n.texStorage2D(t.TEXTURE_2D,P,me,Y.width,Y.height)}for(let Y=0,te=Pe.length;Y<te;Y++)Z=Pe[Y],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,se,ue,Z):n.texImage2D(t.TEXTURE_2D,Y,me,se,ue,Z);S.generateMipmaps=!1}else if(Oe){if(qe){const Y=we(U);n.texStorage2D(t.TEXTURE_2D,P,me,Y.width,Y.height)}ze&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,ue,U)}else n.texImage2D(t.TEXTURE_2D,0,me,se,ue,U);m(S)&&y(j),ce.__version=ne.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ke(w,S,G){if(S.image.length!==6)return;const j=le(w,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+G);const ne=i.get(J);if(J.version!==ne.__version||j===!0){n.activeTexture(t.TEXTURE0+G);const ce=Ye.getPrimaries(Ye.workingColorSpace),U=S.colorSpace===""?null:Ye.getPrimaries(S.colorSpace),se=S.colorSpace===""||ce===U?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let Q=0;Q<6;Q++)!ue&&!me?Z[Q]=g(S.image[Q],!0,r.maxCubemapSize):Z[Q]=me?S.image[Q].image:S.image[Q],Z[Q]=ut(S,Z[Q]);const Pe=Z[0],Oe=s.convert(S.format,S.colorSpace),qe=s.convert(S.type),ze=b(S.internalFormat,Oe,qe,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,Y=ne.__version===void 0||j===!0,te=J.dataReady;let oe=R(S,Pe);q(t.TEXTURE_CUBE_MAP,S);let xe;if(ue){P&&Y&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,ze,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){xe=Z[Q].mipmaps;for(let be=0;be<xe.length;be++){const Ie=xe[be];S.format!==1023?Oe!==null?P?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ie.width,Ie.height,Oe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,Ie.width,Ie.height,0,Ie.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ie.width,Ie.height,Oe,qe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,Ie.width,Ie.height,0,Oe,qe,Ie.data)}}}else{if(xe=S.mipmaps,P&&Y){xe.length>0&&oe++;const Q=we(Z[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(me){P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Z[Q].width,Z[Q].height,Oe,qe,Z[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Z[Q].width,Z[Q].height,0,Oe,qe,Z[Q].data);for(let be=0;be<xe.length;be++){const Ie=xe[be].image[Q].image;P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Ie.width,Ie.height,Oe,qe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,Ie.width,Ie.height,0,Oe,qe,Ie.data)}}else{P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,qe,Z[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Oe,qe,Z[Q]);for(let be=0;be<xe.length;be++){const Ie=xe[be];P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Oe,qe,Ie.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,Oe,qe,Ie.image[Q])}}}m(S)&&y(t.TEXTURE_CUBE_MAP),ne.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function De(w,S,G,j,J,ne){const ce=s.convert(G.format,G.colorSpace),U=s.convert(G.type),se=b(G.internalFormat,ce,U,G.normalized,G.colorSpace),ue=i.get(S),me=i.get(G);if(me.__renderTarget=S,!ue.__hasExternalTextures){const Z=Math.max(1,S.width>>ne),Pe=Math.max(1,S.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,se,Z,Pe,S.depth,0,ce,U,null):n.texImage2D(J,ne,se,Z,Pe,0,ce,U,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,J,me.__webglTexture,0,$e(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,J,me.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(w,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,ne=E(S.stencilBuffer,J),ce=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Je(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(S),ne,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,w)}else{const j=S.textures;for(let J=0;J<j.length;J++){const ne=j[J],ce=s.convert(ne.format,ne.colorSpace),U=s.convert(ne.type),se=b(ne.internalFormat,ce,U,ne.normalized,ne.colorSpace);Je(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(S),se,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(S),se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(w,S,G){const j=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),q(t.TEXTURE_CUBE_MAP,S.depthTexture);const ue=s.convert(S.depthTexture.format),me=s.convert(S.depthTexture.type);let Z;S.depthTexture.format===1026?Z=t.DEPTH_COMPONENT24:S.depthTexture.format===1027&&(Z=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Z,S.width,S.height,0,ue,me,null)}}else K(S.depthTexture,0);const ne=J.__webglTexture,ce=$e(S),U=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,se=S.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===1026)Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,U,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,se,U,ne,0);else if(S.depthTexture.format===1027)Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,U,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,se,U,ne,0);else throw new Error("Unknown depthTexture format")}function Ct(w){const S=i.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let j=0;j<6;j++)We(S.__webglFramebuffer[j],w,j);else{const j=w.texture.mipmaps;j&&j.length>0?We(S.__webglFramebuffer[0],w,0):We(S.__webglFramebuffer,w,0)}else if(G){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=t.createRenderbuffer(),tt(S.__webglDepthbuffer[j],w,!1);else{const J=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}}else{const j=w.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),tt(S.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(w,S,G){const j=i.get(w);S!==void 0&&De(j.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ct(w)}function ln(w){const S=w.texture,G=i.get(w),j=i.get(S);w.addEventListener("dispose",v);const J=w.textures,ne=w.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=S.version,a.memory.textures++),ne){G.__webglFramebuffer=[];for(let U=0;U<6;U++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[U]=[];for(let se=0;se<S.mipmaps.length;se++)G.__webglFramebuffer[U][se]=t.createFramebuffer()}else G.__webglFramebuffer[U]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let U=0;U<S.mipmaps.length;U++)G.__webglFramebuffer[U]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ce)for(let U=0,se=J.length;U<se;U++){const ue=i.get(J[U]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&Je(w)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let U=0;U<J.length;U++){const se=J[U];G.__webglColorRenderbuffer[U]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[U]);const ue=s.convert(se.format,se.colorSpace),me=s.convert(se.type),Z=b(se.internalFormat,ue,me,se.normalized,se.colorSpace,w.isXRRenderTarget===!0),Pe=$e(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Z,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,G.__webglColorRenderbuffer[U])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),tt(G.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),q(t.TEXTURE_CUBE_MAP,S);for(let U=0;U<6;U++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)De(G.__webglFramebuffer[U][se],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,se);else De(G.__webglFramebuffer[U],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);m(S)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let U=0,se=J.length;U<se;U++){const ue=J[U],me=i.get(ue);let Z=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,me.__webglTexture),q(Z,ue),De(G.__webglFramebuffer,w,ue,t.COLOR_ATTACHMENT0+U,Z,0),m(ue)&&y(Z)}n.unbindTexture()}else{let U=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(U=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(U,j.__webglTexture),q(U,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)De(G.__webglFramebuffer[se],w,S,t.COLOR_ATTACHMENT0,U,se);else De(G.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,U,0);m(S)&&y(U),n.unbindTexture()}w.depthBuffer&&Ct(w)}function kt(w){const S=w.textures;for(let G=0,j=S.length;G<j;G++){const J=S[G];if(m(J)){const ne=T(w),ce=i.get(J).__webglTexture;n.bindTexture(ne,ce),y(ne),n.unbindTexture()}}}const bt=[],N=[];function Xt(w){if(w.samples>0){if(Je(w)===!1){const S=w.textures,G=w.width,j=w.height;let J=t.COLOR_BUFFER_BIT;const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(w),U=S.length>1;if(U)for(let ue=0;ue<S.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const se=w.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),U){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const me=i.get(S[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,G,j,0,0,G,j,J,t.NEAREST),l===!0&&(bt.length=0,N.length=0,bt.push(t.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(bt.push(ne),N.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),U)for(let ue=0;ue<S.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const me=i.get(S[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function $e(w){return Math.min(r.maxSamples,w.samples)}function Je(w){const S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function ut(w,S){const G=w.colorSpace,j=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!=="srgb-linear"&&G!==""&&(Ye.getTransfer(G)==="srgb"?(j!==1023||J!==1009)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",G)),S}function we(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=ge,this.rebindTextures=vt,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cy(t,e){function n(i,r=""){let s;const a=Ye.getTransfer(r);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
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

}`,dy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new uf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:uy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fy=class extends ur{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null;const _=typeof XRWebGLBinding<"u",p=new dy,g={},m=e.getContextAttributes();let y=null,T=null;const b=[],E=[],R=new Xe;let C=null;const v=new An;v.viewport=new At;const M=new An;M.viewport=new At;const I=[v,M],A=new $_;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=b[q];return le===void 0&&(le=new Lo,b[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=b[q];return le===void 0&&(le=new Lo,b[q]=le),le.getGripSpace()},this.getHand=function(q){let le=b[q];return le===void 0&&(le=new Lo,b[q]=le),le.getHandSpace()};function D(q){const le=E.indexOf(q.inputSource);if(le===-1)return;const Me=b[le];Me!==void 0&&(Me.update(q.inputSource,q.frame,l||s),Me.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",z);for(let q=0;q<b.length;q++){const le=E[q];le!==null&&(E[q]=null,b[q].disconnect(le))}L=null,F=null,p.reset();for(const q in g)delete g[q];t.setRenderTarget(y),h=null,d=null,u=null,i=null,T=null,Ue.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",B),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Me=null,pe=null;m.depth&&(pe=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,le=m.stencil?Xd:Os,Me=m.stencil?Wd:or);const Ce={colorFormat:e.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ce),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Yn(d.textureWidth,d.textureHeight,{format:ks,type:Di,depthTexture:new Qr(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,le),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Yn(h.framebufferWidth,h.framebufferHeight,{format:ks,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(q){for(let le=0;le<q.removed.length;le++){const Me=q.removed[le],pe=E.indexOf(Me);pe>=0&&(E[pe]=null,b[pe].disconnect(Me))}for(let le=0;le<q.added.length;le++){const Me=q.added[le];let pe=E.indexOf(Me);if(pe===-1){for(let ke=0;ke<b.length;ke++)if(ke>=E.length){E.push(Me),pe=ke;break}else if(E[ke]===null){E[ke]=Me,pe=ke;break}if(pe===-1)break}const Ce=b[pe];Ce&&Ce.connect(Me)}}const O=new X,K=new X;function ee(q,le,Me){O.setFromMatrixPosition(le.matrixWorld),K.setFromMatrixPosition(Me.matrixWorld);const pe=O.distanceTo(K),Ce=le.projectionMatrix.elements,ke=Me.projectionMatrix.elements,De=Ce[14]/(Ce[10]-1),tt=Ce[14]/(Ce[10]+1),We=(Ce[9]+1)/Ce[5],Ct=(Ce[9]-1)/Ce[5],vt=(Ce[8]-1)/Ce[0],ln=(ke[8]+1)/ke[0],kt=De*vt,bt=De*ln,N=pe/(-vt+ln),Xt=N*-vt;if(le.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xt),q.translateZ(N),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const $e=De+N,Je=tt+N,de=kt-Xt,ut=bt+(pe-Xt),we=We*tt/Je*$e,w=Ct*tt/Je*$e;q.projectionMatrix.makePerspective(de,ut,we,w,$e,Je),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let le=q.near,Me=q.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),A.near=M.near=v.near=le,A.far=M.far=v.far=Me,(L!==A.near||F!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,F=A.far),A.layers.mask=q.layers.mask|6,v.layers.mask=A.layers.mask&-5,M.layers.mask=A.layers.mask&-3;const pe=q.parent,Ce=A.cameras;ie(A,pe);for(let ke=0;ke<Ce.length;ke++)ie(Ce[ke],pe);Ce.length===2?ee(A,v,M):A.projectionMatrix.copy(v.projectionMatrix),ge(q,A,pe)};function ge(q,le,Me){Me===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(Me.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(q){o=q,d!==null&&(d.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(A)},this.getCameraTexture=function(q){return g[q]};let Se=null;function Ze(q,le){if(c=le.getViewerPose(l||s),f=le,c!==null){const Me=c.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let pe=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let ke=0;ke<Me.length;ke++){const De=Me[ke];let tt=null;if(h!==null)tt=h.getViewport(De);else{const Ct=u.getViewSubImage(d,De);tt=Ct.viewport,ke===0&&(t.setRenderTargetTextures(T,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(T))}let We=I[ke];We===void 0&&(We=new An,We.layers.enable(ke),We.viewport=new At,I[ke]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(tt.x,tt.y,tt.width,tt.height),ke===0&&(A.matrix.copy(We.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),pe===!0&&A.cameras.push(We)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const ke=u.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,i.renderState)}if(Ce&&Ce.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let ke=0;ke<Me.length;ke++){const De=Me[ke].camera;if(De){let tt=g[De];tt||(tt=new uf,g[De]=tt);const We=u.getCameraImage(De);tt.sourceTexture=We}}}}for(let Me=0;Me<b.length;Me++){const pe=E[Me],Ce=b[Me];pe!==null&&Ce!==void 0&&Ce.update(pe,le,l||s)}Se&&Se(q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),f=null}const Ue=new vf;Ue.setAnimationLoop(Ze),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}},py=new Mt,Ef=new Fe;Ef.set(-1,0,0,0,1,0,0,0,1);function my(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ff(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,T,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),_(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),p(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===1&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===1&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),T=y.envMap,b=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(py.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ef),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=T*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gy(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(_(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",g));const E=T.program;i.updateUBOMapping(y,E);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const T=d();y.__bindingPointIndex=T;const b=t.createBuffer(),E=y.__size,R=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,E,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],b=y.uniforms,E=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,C=b.length;R<C;R++){const v=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,I=v.length;M<I;M++){const A=v[M];if(f(A,R,M,E)===!0){const L=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let B=0;B<F.length;B++){const z=F[B],O=p(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,L+D,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):ArrayBuffer.isView(z)?A.__data.set(new z.constructor(z.buffer,z.byteOffset,A.__data.length)):(z.toArray(A.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(y,T,b,E){const R=y.value,C=T+"_"+b;if(E[C]===void 0)return typeof R=="number"||typeof R=="boolean"?E[C]=R:ArrayBuffer.isView(R)?E[C]=R.slice():E[C]=R.clone(),!0;{const v=E[C];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return E[C]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(v.equals(R)===!1)return v.copy(R),!0}}return!1}function _(y){const T=y.uniforms;let b=0;const E=16;for(let C=0,v=T.length;C<v;C++){const M=Array.isArray(T[C])?T[C]:[T[C]];for(let I=0,A=M.length;I<A;I++){const L=M[I],F=Array.isArray(L.value)?L.value:[L.value];for(let D=0,B=F.length;D<B;D++){const z=F[D],O=p(z),K=b%E,ee=K%O.boundary,ie=K+ee;b+=ee,ie!==0&&E-ie<O.storage&&(b+=E-ie),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=O.storage}}}const R=b%E;return R>0&&(b+=E-R),y.__size=b,y.__cache={},this}function p(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){const T=y.target;T.removeEventListener("dispose",g);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}var _y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function vy(){return Vn===null&&(Vn=new g_(_y,16,16,Wa,lr),Vn.name="DFG_LUT",Vn.minFilter=gn,Vn.magFilter=gn,Vn.wrapS=si,Vn.wrapT=si,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var yy=class{constructor(t={}){const{canvas:e=qg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Di}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const _=h,p=new Set([Yd,qd,$d]),g=new Set([Di,or,Vd,Wd,Gd,Hd]),m=new Uint32Array(4),y=new Int32Array(4),T=new X;let b=null,E=null;const R=[],C=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let I=!1,A=null;this._outputColorSpace=qt;let L=0,F=0,D=null,B=-1,z=null;const O=new At,K=new At;let ee=null;const ie=new Ge(0);let ge=0,Se=e.width,Ze=e.height,Ue=1,q=null,le=null;const Me=new At(0,0,Se,Ze),pe=new At(0,0,Se,Ze);let Ce=!1;const ke=new fc;let De=!1,tt=!1;const We=new Mt,Ct=new X,vt=new At,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function bt(){return D===null?Ue:1}let N=n;function Xt(x,k){return e.getContext(x,k)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r184"),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",be,!1),N===null){const k="webgl2";if(N=Xt(k,x),N===null)throw Xt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Le("WebGLRenderer: "+x.message),x}let $e,Je,de,ut,we,w,S,G,j,J,ne,ce,U,se,ue,me,Z,Pe,Oe,qe,ze,P,Y;function te(){$e=new vv(N),$e.init(),ze=new cy(N,$e),Je=new uv(N,$e,t,ze),de=new oy(N,$e),Je.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),ut=new Mv(N),we=new q0,w=new ly(N,$e,de,we,Je,ze,ut),S=new _v(M),G=new sv(N),P=new lv(N,G),j=new yv(N,G,ut,P),J=new bv(N,j,G,P,ut),Pe=new xv(N,Je,w),ue=new hv(we),ne=new $0(M,S,$e,Je,P,ue),ce=new my(M,we),U=new j0,se=new ty($e),Z=new ov(M,S,de,J,f,o),me=new ay(M,J,Je),Y=new gy(N,ut,Je,de),Oe=new cv(N,$e,ut),qe=new Sv(N,$e,ut),ut.programs=ne.programs,M.capabilities=Je,M.extensions=$e,M.properties=we,M.renderLists=U,M.shadowMap=me,M.state=de,M.info=ut}te(),_!==1009&&(v=new Ev(_,e.width,e.height,i,r));const oe=new fy(M,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=$e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=$e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(x){x!==void 0&&(Ue=x,this.setSize(Se,Ze,!1))},this.getSize=function(x){return x.set(Se,Ze)},this.setSize=function(x,k,$=!0){if(oe.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=x,Ze=k,e.width=Math.floor(x*Ue),e.height=Math.floor(k*Ue),$===!0&&(e.style.width=x+"px",e.style.height=k+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,x,k)},this.getDrawingBufferSize=function(x){return x.set(Se*Ue,Ze*Ue).floor()},this.setDrawingBufferSize=function(x,k,$){Se=x,Ze=k,Ue=$,e.width=Math.floor(x*$),e.height=Math.floor(k*$),this.setViewport(0,0,x,k)},this.setEffects=function(x){if(_===1009){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let k=0;k<x.length;k++)if(x[k].isOutputPass===!0){Re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(O)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,k,$,W){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,k,$,W),de.viewport(O.copy(Me).multiplyScalar(Ue).round())},this.getScissor=function(x){return x.copy(pe)},this.setScissor=function(x,k,$,W){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,k,$,W),de.scissor(K.copy(pe).multiplyScalar(Ue).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(x){de.setScissorTest(Ce=x)},this.setOpaqueSort=function(x){q=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(x=!0,k=!0,$=!0){let W=0;if(x){let H=!1;if(D!==null){const re=D.texture.format;H=p.has(re)}if(H){const re=D.texture.type,fe=g.has(re),_e=Z.getClearColor(),ve=Z.getClearAlpha(),Ne=_e.r,Ve=_e.g,He=_e.b;fe?(m[0]=Ne,m[1]=Ve,m[2]=He,m[3]=ve,N.clearBufferuiv(N.COLOR,0,m)):(y[0]=Ne,y[1]=Ve,y[2]=He,y[3]=ve,N.clearBufferiv(N.COLOR,0,y))}else W|=N.COLOR_BUFFER_BIT}k&&(W|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),A=x},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",be,!1),Z.dispose(),U.dispose(),se.dispose(),we.dispose(),S.dispose(),J.dispose(),P.dispose(),Y.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Cc),oe.removeEventListener("sessionend",Rc),Gi.stop()};function xe(x){x.preventDefault(),Su("WebGLRenderer: Context Lost."),I=!0}function Q(){Su("WebGLRenderer: Context Restored."),I=!1;const x=ut.autoReset,k=me.enabled,$=me.autoUpdate,W=me.needsUpdate,H=me.type;te(),ut.autoReset=x,me.enabled=k,me.autoUpdate=$,me.needsUpdate=W,me.type=H}function be(x){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ie(x){const k=x.target;k.removeEventListener("dispose",Ie),Kt(k)}function Kt(x){lt(x),we.remove(x)}function lt(x){const k=we.get(x).programs;k!==void 0&&(k.forEach(function($){ne.releaseProgram($)}),x.isShaderMaterial&&ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,k,$,W,H,re){k===null&&(k=ln);const fe=H.isMesh&&H.matrixWorld.determinant()<0,_e=Jf(x,k,$,W,H);de.setMaterial(W,fe);let ve=$.index,Ne=1;if(W.wireframe===!0){if(ve=j.getWireframeAttribute($),ve===void 0)return;Ne=2}const Ve=$.drawRange,He=$.attributes.position;let Ae=Ve.start*Ne,at=(Ve.start+Ve.count)*Ne;re!==null&&(Ae=Math.max(Ae,re.start*Ne),at=Math.min(at,(re.start+re.count)*Ne)),ve!==null?(Ae=Math.max(Ae,0),at=Math.min(at,ve.count)):He!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,He.count));const pt=at-Ae;if(pt<0||pt===1/0)return;P.setup(H,W,_e,$,ve);let mt,Qe=Oe;if(ve!==null&&(mt=G.get(ve),Qe=qe,Qe.setIndex(mt)),H.isMesh)W.wireframe===!0?(de.setLineWidth(W.wireframeLinewidth*bt()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(H.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),de.setLineWidth(Ot*bt()),H.isLineSegments?Qe.setMode(N.LINES):H.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else H.isPoints?Qe.setMode(N.POINTS):H.isSprite&&Qe.setMode(N.TRIANGLES);if(H.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Qe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,ye=H._multiDrawCounts,In=H._multiDrawCount,et=ve?G.get(ve).bytesPerElement:1,Tn=we.get(W).currentProgram.getUniforms();for(let Bn=0;Bn<In;Bn++)Tn.setValue(N,"_gl_DrawID",Bn),Qe.render(Ot[Bn]/et,ye[Bn])}else if(H.isInstancedMesh)Qe.renderInstances(Ae,pt,H.count);else if($.isInstancedBufferGeometry){const Ot=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Ot);Qe.renderInstances(Ae,pt,ye)}else Qe.render(Ae,pt)};function Fn(x,k,$){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,js(x,k,$),x.side=0,x.needsUpdate=!0,js(x,k,$),x.side=2):js(x,k,$)}this.compile=function(x,k,$=null){$===null&&($=x),E=se.get($),E.init(k),C.push(E),$.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),x!==$&&x.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const W=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const re=H.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const _e=re[fe];Fn(_e,$,H),W.add(_e)}else Fn(re,$,H),W.add(re)}),E=C.pop(),W},this.compileAsync=function(x,k,$=null){const W=this.compile(x,k,$);return new Promise(H=>{function re(){if(W.forEach(function(fe){we.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){H(x);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Dn=null;function Kf(x){Dn&&Dn(x)}function Cc(){Gi.stop()}function Rc(){Gi.start()}const Gi=new vf;Gi.setAnimationLoop(Kf),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(x){Dn=x,oe.setAnimationLoop(x),x===null?Gi.stop():Gi.start()},oe.addEventListener("sessionstart",Cc),oe.addEventListener("sessionend",Rc),this.render=function(x,k){if(k!==void 0&&k.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;A!==null&&A.renderStart(x,k);const $=oe.enabled===!0&&oe.isPresenting===!0,W=v!==null&&(D===null||$)&&v.begin(M,D);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,k,D),E=se.get(x,C.length),E.init(k),E.state.textureUnits=w.getTextureUnits(),C.push(E),We.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ke.setFromProjectionMatrix(We,Kr,k.reversedDepth),tt=this.localClippingEnabled,De=ue.init(this.clippingPlanes,tt),b=U.get(x,R.length),b.init(),R.push(b),oe.enabled===!0&&oe.isPresenting===!0){const re=M.xr.getDepthSensingMesh();re!==null&&co(re,k,-1/0,M.sortObjects)}co(x,k,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(q,le),kt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,kt&&Z.addToRenderList(b,x),this.info.render.frame++,De===!0&&ue.beginShadows();const H=E.state.shadowsArray;if(me.render(H,x,k),De===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&v.hasRenderPass())===!1){const re=b.opaque,fe=b.transmissive;if(E.setupLights(),k.isArrayCamera){const _e=k.cameras;if(fe.length>0)for(let ve=0,Ne=_e.length;ve<Ne;ve++){const Ve=_e[ve];Lc(re,fe,x,Ve)}kt&&Z.render(x);for(let ve=0,Ne=_e.length;ve<Ne;ve++){const Ve=_e[ve];Pc(b,x,Ve,Ve.viewport)}}else fe.length>0&&Lc(re,fe,x,k),kt&&Z.render(x),Pc(b,x,k)}D!==null&&F===0&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),W&&v.end(M),x.isScene===!0&&x.onAfterRender(M,x,k),P.resetDefaultState(),B=-1,z=null,C.pop(),C.length>0?(E=C[C.length-1],w.setTextureUnits(E.state.textureUnits),De===!0&&ue.setGlobalState(M.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,A!==null&&A.renderEnd()};function co(x,k,$,W){if(x.visible===!1)return;if(x.layers.test(k.layers)){if(x.isGroup)$=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(k);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ke.intersectsSprite(x)){W&&vt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(We);const re=J.update(x),fe=x.material;fe.visible&&b.push(x,re,fe,$,vt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ke.intersectsObject(x))){const re=J.update(x),fe=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),vt.copy(x.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),vt.copy(re.boundingSphere.center)),vt.applyMatrix4(x.matrixWorld).applyMatrix4(We)),Array.isArray(fe)){const _e=re.groups;for(let ve=0,Ne=_e.length;ve<Ne;ve++){const Ve=_e[ve],He=fe[Ve.materialIndex];He&&He.visible&&b.push(x,re,He,$,vt.z,Ve)}}else fe.visible&&b.push(x,re,fe,$,vt.z,null)}}const H=x.children;for(let re=0,fe=H.length;re<fe;re++)co(H[re],k,$,W)}function Pc(x,k,$,W){const{opaque:H,transmissive:re,transparent:fe}=x;E.setupLightsView($),De===!0&&ue.setGlobalState(M.clippingPlanes,$),W&&de.viewport(O.copy(W)),H.length>0&&Ys(H,k,$),re.length>0&&Ys(re,k,$),fe.length>0&&Ys(fe,k,$),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Lc(x,k,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const He=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Yn(1,1,{generateMipmaps:!0,type:He?lr:Di,minFilter:cc,samples:Math.max(4,Je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const H=E.state.transmissionRenderTarget[W.id],re=W.viewport||O;H.setSize(re.z*M.transmissionResolutionScale,re.w*M.transmissionResolutionScale);const fe=M.getRenderTarget(),_e=M.getActiveCubeFace(),ve=M.getActiveMipmapLevel();M.setRenderTarget(H),M.getClearColor(ie),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),kt&&Z.render($);const Ne=M.toneMapping;M.toneMapping=0;const Ve=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),De===!0&&ue.setGlobalState(M.clippingPlanes,W),Ys(x,$,W),w.updateMultisampleRenderTarget(H),w.updateRenderTargetMipmap(H),$e.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ae=0,at=k.length;Ae<at;Ae++){const{object:pt,geometry:mt,material:Qe,group:Ot}=k[Ae];if(Qe.side===2&&pt.layers.test(W.layers)){const ye=Qe.side;Qe.side=1,Qe.needsUpdate=!0,Dc(pt,$,W,mt,Qe,Ot),Qe.side=ye,Qe.needsUpdate=!0,He=!0}}He===!0&&(w.updateMultisampleRenderTarget(H),w.updateRenderTargetMipmap(H))}M.setRenderTarget(fe,_e,ve),M.setClearColor(ie,ge),Ve!==void 0&&(W.viewport=Ve),M.toneMapping=Ne}function Ys(x,k,$){const W=k.isScene===!0?k.overrideMaterial:null;for(let H=0,re=x.length;H<re;H++){const fe=x[H],{object:_e,geometry:ve,group:Ne}=fe;let Ve=fe.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),_e.layers.test($.layers)&&Dc(_e,k,$,ve,Ve,Ne)}}function Dc(x,k,$,W,H,re){x.onBeforeRender(M,k,$,W,H,re),x.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(M,k,$,W,x,re),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1?(H.side=1,H.needsUpdate=!0,M.renderBufferDirect($,k,W,H,x,re),H.side=0,H.needsUpdate=!0,M.renderBufferDirect($,k,W,H,x,re),H.side=2):M.renderBufferDirect($,k,W,H,x,re),x.onAfterRender(M,k,$,W,H,re)}function js(x,k,$){k.isScene!==!0&&(k=ln);const W=we.get(x),H=E.state.lights,re=E.state.shadowsArray,fe=H.state.version,_e=ne.getParameters(x,H.state,re,k,$,E.state.lightProbeGridArray),ve=ne.getProgramCacheKey(_e);let Ne=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Ve=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;W.envMap=S.get(x.envMap||W.environment,Ve),W.envMapRotation=W.environment!==null&&x.envMap===null?k.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",Ie),Ne=new Map,W.programs=Ne);let He=Ne.get(ve);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===fe)return Nc(x,_e),He}else _e.uniforms=ne.getUniforms(x),A!==null&&x.isNodeMaterial&&A.build(x,$,_e),x.onBeforeCompile(_e,M),He=ne.acquireProgram(_e,ve),Ne.set(ve,He),W.uniforms=_e.uniforms;const Ae=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=ue.uniform),Nc(x,_e),W.needsLights=ep(x),W.lightsStateVersion=fe,W.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=He,W.uniformsList=null,He}function Ic(x){if(x.uniformsList===null){const k=x.currentProgram.getUniforms();x.uniformsList=La.seqWithValue(k.seq,x.uniforms)}return x.uniformsList}function Nc(x,k){const $=we.get(x);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Zf(x,k){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;T.setFromMatrixPosition(k.matrixWorld);for(let $=0,W=x.length;$<W;$++){const H=x[$];if(H.texture!==null&&H.boundingBox.containsPoint(T))return H}return null}function Jf(x,k,$,W,H){k.isScene!==!0&&(k=ln),w.resetTextureUnits();const re=k.fog,fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,_e=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ye.workingColorSpace,ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=S.get(W.envMap||fe,ve),Ve=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,pt=!!$.morphAttributes.color;let mt=0;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(mt=M.toneMapping);const Qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ot=Qe!==void 0?Qe.length:0,ye=we.get(W),In=E.state.lights;if(De===!0&&(tt===!0||x!==z)){const nt=x===z&&W.id===B;ue.setState(W,x,nt)}let et=!1;W.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==In.state.version||ye.outputColorSpace!==_e||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Ne||W.fog===!0&&ye.fog!==re||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ue.numPlanes||ye.numIntersection!==ue.numIntersection)||ye.vertexAlphas!==Ve||ye.vertexTangents!==He||ye.morphTargets!==Ae||ye.morphNormals!==at||ye.morphColors!==pt||ye.toneMapping!==mt||ye.morphTargetsCount!==Ot||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ye.__version=W.version);let Tn=ye.currentProgram;et===!0&&(Tn=js(W,k,H),A&&W.isNodeMaterial&&A.onUpdateProgram(W,Tn,ye));let Bn=!1,fi=!1,fr=!1;const it=Tn.getUniforms(),yt=ye.uniforms;if(de.useProgram(Tn.program)&&(Bn=!0,fi=!0,fr=!0),W.id!==B&&(B=W.id,fi=!0),ye.needsLights){const nt=Zf(E.state.lightProbeGridArray,H);ye.lightProbeGrid!==nt&&(ye.lightProbeGrid=nt,fi=!0)}if(Bn||z!==x){de.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),it.setValue(N,"projectionMatrix",x.projectionMatrix),it.setValue(N,"viewMatrix",x.matrixWorldInverse);const nt=it.map.cameraPosition;nt!==void 0&&nt.setValue(N,Ct.setFromMatrixPosition(x.matrixWorld)),Je.logarithmicDepthBuffer&&it.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),z!==x&&(z=x,fi=!0,fr=!0)}if(ye.needsLights&&(In.state.directionalShadowMap.length>0&&it.setValue(N,"directionalShadowMap",In.state.directionalShadowMap,w),In.state.spotShadowMap.length>0&&it.setValue(N,"spotShadowMap",In.state.spotShadowMap,w),In.state.pointShadowMap.length>0&&it.setValue(N,"pointShadowMap",In.state.pointShadowMap,w)),H.isSkinnedMesh){it.setOptional(N,H,"bindMatrix"),it.setOptional(N,H,"bindMatrixInverse");const nt=H.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),it.setValue(N,"boneTexture",nt.boneTexture,w))}H.isBatchedMesh&&(it.setOptional(N,H,"batchingTexture"),it.setValue(N,"batchingTexture",H._matricesTexture,w),it.setOptional(N,H,"batchingIdTexture"),it.setValue(N,"batchingIdTexture",H._indirectTexture,w),it.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&it.setValue(N,"batchingColorTexture",H._colorsTexture,w));const pi=$.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Pe.update(H,$,Tn),(fi||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,it.setValue(N,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(yt.envMapIntensity.value=k.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=vy()),fi){if(it.setValue(N,"toneMappingExposure",M.toneMappingExposure),ye.needsLights&&Qf(yt,fr),re&&W.fog===!0&&ce.refreshFogUniforms(yt,re),ce.refreshMaterialUniforms(yt,W,Ue,Ze,E.state.transmissionRenderTarget[x.id]),ye.needsLights&&ye.lightProbeGrid){const nt=ye.lightProbeGrid;yt.probesSH.value=nt.texture,yt.probesMin.value.copy(nt.boundingBox.min),yt.probesMax.value.copy(nt.boundingBox.max),yt.probesResolution.value.copy(nt.resolution)}La.upload(N,Ic(ye),yt,w)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(La.upload(N,Ic(ye),yt,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(N,"center",H.center),it.setValue(N,"modelViewMatrix",H.modelViewMatrix),it.setValue(N,"normalMatrix",H.normalMatrix),it.setValue(N,"modelMatrix",H.matrixWorld),W.uniformsGroups!==void 0){const nt=W.uniformsGroups;for(let ss=0,pr=nt.length;ss<pr;ss++){const Uc=nt[ss];Y.update(Uc,Tn),Y.bind(Uc,Tn)}}return Tn}function Qf(x,k){x.ambientLightColor.needsUpdate=k,x.lightProbe.needsUpdate=k,x.directionalLights.needsUpdate=k,x.directionalLightShadows.needsUpdate=k,x.pointLights.needsUpdate=k,x.pointLightShadows.needsUpdate=k,x.spotLights.needsUpdate=k,x.spotLightShadows.needsUpdate=k,x.rectAreaLights.needsUpdate=k,x.hemisphereLights.needsUpdate=k}function ep(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,k,$){const W=we.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),we.get(x.texture).__webglTexture=k,we.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,k){const $=we.get(x);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0};const tp=N.createFramebuffer();this.setRenderTarget=function(x,k=0,$=0){D=x,L=k,F=$;let W=null,H=!1,re=!1;if(x){const fe=we.get(x);if(fe.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(N.FRAMEBUFFER,fe.__webglFramebuffer),O.copy(x.viewport),K.copy(x.scissor),ee=x.scissorTest,de.viewport(O),de.scissor(K),de.setScissorTest(ee),B=-1;return}else if(fe.__webglFramebuffer===void 0)w.setupRenderTarget(x);else if(fe.__hasExternalTextures)w.rebindTextures(x,we.get(x.texture).__webglTexture,we.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ne=x.depthTexture;if(fe.__boundDepthTexture!==Ne){if(Ne!==null&&we.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(x)}}const _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(re=!0);const ve=we.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ve[k])?W=ve[k][$]:W=ve[k],H=!0):x.samples>0&&w.useMultisampledRTT(x)===!1?W=we.get(x).__webglMultisampledFramebuffer:Array.isArray(ve)?W=ve[$]:W=ve,O.copy(x.viewport),K.copy(x.scissor),ee=x.scissorTest}else O.copy(Me).multiplyScalar(Ue).floor(),K.copy(pe).multiplyScalar(Ue).floor(),ee=Ce;if($!==0&&(W=tp),de.bindFramebuffer(N.FRAMEBUFFER,W)&&de.drawBuffers(x,W),de.viewport(O),de.scissor(K),de.setScissorTest(ee),H){const fe=we.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe.__webglTexture,$)}else if(re){const fe=k;for(let _e=0;_e<x.textures.length;_e++){const ve=we.get(x.textures[_e]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+_e,ve.__webglTexture,$,fe)}}else if(x!==null&&$!==0){const fe=we.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fe.__webglTexture,$)}B=-1},this.readRenderTargetPixels=function(x,k,$,W,H,re,fe,_e=0){if(!(x&&x.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){de.bindFramebuffer(N.FRAMEBUFFER,ve);try{const Ne=x.textures[_e],Ve=Ne.format,He=Ne.type;if(x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(He)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=x.width-W&&$>=0&&$<=x.height-H&&N.readPixels(k,$,W,H,ze.convert(Ve),ze.convert(He),re)}finally{const Ne=D!==null?we.get(D).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(x,k,$,W,H,re,fe,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(k>=0&&k<=x.width-W&&$>=0&&$<=x.height-H){de.bindFramebuffer(N.FRAMEBUFFER,ve);const Ne=x.textures[_e],Ve=Ne.format,He=Ne.type;if(x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(k,$,W,H,ze.convert(Ve),ze.convert(He),0);const at=D!==null?we.get(D).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,at);const pt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Yg(N,pt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Ae),N.deleteSync(pt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,k=null,$=0){const W=Math.pow(2,-$),H=Math.floor(x.image.width*W),re=Math.floor(x.image.height*W),fe=k!==null?k.x:0,_e=k!==null?k.y:0;w.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,fe,_e,H,re),de.unbindTexture()};const np=N.createFramebuffer(),ip=N.createFramebuffer();this.copyTextureToTexture=function(x,k,$=null,W=null,H=0,re=0){let fe,_e,ve,Ne,Ve,He,Ae,at,pt;const mt=x.isCompressedTexture?x.mipmaps[re]:x.image;if($!==null)fe=$.max.x-$.min.x,_e=$.max.y-$.min.y,ve=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,Ve=$.min.y,He=$.isBox3?$.min.z:0;else{const yt=Math.pow(2,-H);fe=Math.floor(mt.width*yt),_e=Math.floor(mt.height*yt),x.isDataArrayTexture?ve=mt.depth:x.isData3DTexture?ve=Math.floor(mt.depth*yt):ve=1,Ne=0,Ve=0,He=0}W!==null?(Ae=W.x,at=W.y,pt=W.z):(Ae=0,at=0,pt=0);const Qe=ze.convert(k.format),Ot=ze.convert(k.type);let ye;k.isData3DTexture?(w.setTexture3D(k,0),ye=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),ye=N.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),ye=N.TEXTURE_2D),de.activeTexture(N.TEXTURE0),de.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),de.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),de.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const In=de.getParameter(N.UNPACK_ROW_LENGTH),et=de.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=de.getParameter(N.UNPACK_SKIP_PIXELS),Bn=de.getParameter(N.UNPACK_SKIP_ROWS),fi=de.getParameter(N.UNPACK_SKIP_IMAGES);de.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),de.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),de.pixelStorei(N.UNPACK_SKIP_IMAGES,He);const fr=x.isDataArrayTexture||x.isData3DTexture,it=k.isDataArrayTexture||k.isData3DTexture;if(x.isDepthTexture){const yt=we.get(x),pi=we.get(k),nt=we.get(yt.__renderTarget),ss=we.get(pi.__renderTarget);de.bindFramebuffer(N.READ_FRAMEBUFFER,nt.__webglFramebuffer),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let pr=0;pr<ve;pr++)fr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(x).__webglTexture,H,He+pr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(k).__webglTexture,re,pt+pr)),N.blitFramebuffer(Ne,Ve,fe,_e,Ae,at,fe,_e,N.DEPTH_BUFFER_BIT,N.NEAREST);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||we.has(x)){const yt=we.get(x),pi=we.get(k);de.bindFramebuffer(N.READ_FRAMEBUFFER,np),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,ip);for(let nt=0;nt<ve;nt++)fr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,H,He+nt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,H),it?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pi.__webglTexture,re,pt+nt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pi.__webglTexture,re),H!==0?N.blitFramebuffer(Ne,Ve,fe,_e,Ae,at,fe,_e,N.COLOR_BUFFER_BIT,N.NEAREST):it?N.copyTexSubImage3D(ye,re,Ae,at,pt+nt,Ne,Ve,fe,_e):N.copyTexSubImage2D(ye,re,Ae,at,Ne,Ve,fe,_e);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else it?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(ye,re,Ae,at,pt,fe,_e,ve,Qe,Ot,mt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,re,Ae,at,pt,fe,_e,ve,Qe,mt.data):N.texSubImage3D(ye,re,Ae,at,pt,fe,_e,ve,Qe,Ot,mt):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,re,Ae,at,fe,_e,Qe,Ot,mt.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,re,Ae,at,mt.width,mt.height,Qe,mt.data):N.texSubImage2D(N.TEXTURE_2D,re,Ae,at,fe,_e,Qe,Ot,mt);de.pixelStorei(N.UNPACK_ROW_LENGTH,In),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),de.pixelStorei(N.UNPACK_SKIP_ROWS,Bn),de.pixelStorei(N.UNPACK_SKIP_IMAGES,fi),re===0&&k.generateMipmaps&&N.generateMipmap(ye),de.unbindTexture()},this.initRenderTarget=function(x){we.get(x).__webglFramebuffer===void 0&&w.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?w.setTextureCube(x,0):x.isData3DTexture?w.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?w.setTexture2DArray(x,0):w.setTexture2D(x,0),de.unbindTexture()},this.resetState=function(){L=0,F=0,D=null,de.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ye._getUnpackColorSpace()}},Sy={hearts:"#e23b3b",diamonds:"#e23b3b",spades:"#1a1a1a",clubs:"#1a1a1a"},dn=256,Nt=360,gh=new Map,ji=null;function My(t){return`${t.rank}-${t.suit}-${t.enhancement}-${t.edition}-${t.seal}`}var _h=new Map,ms=new Map;function xy(t,e){const n=_h.get(t);if(n){e(n);return}const i=ms.get(t);if(i){i.push(e);return}ms.set(t,[e]);const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{_h.set(t,r),ms.get(t)?.forEach(s=>s(r)),ms.delete(t)},r.onerror=()=>{ms.delete(t)},r.src=t}var by={bonus:"rgba( 60, 120, 255, 0.28)",mult:"rgba(220,  55,  55, 0.28)",wild:"rgba(160,  70, 255, 0.28)",glass:"rgba(100, 210, 255, 0.28)",steel:"rgba(180, 192, 208, 0.38)",stone:"rgba(120, 120, 120, 0.50)",gold:"rgba(245, 195,  40, 0.38)",lucky:"rgba( 60, 200,  80, 0.28)"},Ty={foil:"rgba(180, 220, 255, 0.30)",holographic:"rgba(200, 100, 255, 0.28)",polychrome:"rgba(255, 180,  60, 0.25)",negative:"rgba( 20,  20,  20, 0.55)"};function vh(t,e,n,i){t.save(),Ii(t,6,6,n-12,i-12,22),t.clip(),t.fillStyle=e,t.fillRect(0,0,n,i),t.restore()}function Ey(t,e,n,i,r,s){const a=e.getContext("2d");if(!a)return;a.clearRect(0,0,e.width,e.height),a.save(),Ii(a,6,6,e.width-12,e.height-12,22),a.clip(),a.drawImage(t,0,0,e.width,e.height),a.restore();const o=by[i];o&&vh(a,o,e.width,e.height);const l=Ty[r];l&&vh(a,l,e.width,e.height),a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)",Ii(a,6,6,e.width-12,e.height-12,22),a.stroke(),a.lineWidth=1,a.strokeStyle="rgba(255,255,255,0.18)",Ii(a,9,9,e.width-18,e.height-18,19),a.stroke(),s!=="none"&&(a.fillStyle=s==="gold"?"#ffd24a":s==="red"?"#ff5a5a":s==="blue"?"#54a8ff":"#c084ff",a.beginPath(),a.arc(e.width/2,e.height-50,22,0,Math.PI*2),a.fill(),a.lineWidth=3,a.strokeStyle="rgba(0,0,0,0.4)",a.stroke()),n.needsUpdate=!0}function wf(t,e,n,i,r,s){for(const a of["svg","png","webp","jpg"])xy(`${t}.${a}`,o=>Ey(o,e,n,i,r,s))}function Ii(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function yh(t){const e=My(t),n=gh.get(e);if(n)return n;const i=document.createElement("canvas");i.width=dn,i.height=Nt;const r=i.getContext("2d");if(r.fillStyle="#fdfdfd",Ii(r,6,6,dn-12,Nt-12,22),r.fill(),r.lineWidth=4,r.strokeStyle="#222",Ii(r,6,6,dn-12,Nt-12,22),r.stroke(),t.enhancement==="stone")r.fillStyle="#555",r.font="bold 56px serif",r.textAlign="center",r.fillText("STONE",dn/2,Nt/2+18);else{const o=Sy[t.suit],l=Va[t.rank],c=bm[t.suit];r.fillStyle=o,r.textAlign="center",r.textBaseline="middle";const u=l==="10"?78:98,d=l==="10"?64:55;r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.save(),r.translate(dn,Nt),r.rotate(Math.PI),r.textAlign="center",r.textBaseline="middle",r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.restore(),r.textAlign="center",r.font="bold 160px serif",r.fillText(c,dn/2,Nt/2+32)}(o=>{t.seal!=="none"&&(o.fillStyle=t.seal==="gold"?"#ffd24a":t.seal==="red"?"#ff5a5a":t.seal==="blue"?"#54a8ff":"#c084ff",o.beginPath(),o.arc(dn/2,Nt-50,22,0,Math.PI*2),o.fill(),o.lineWidth=3,o.strokeStyle="rgba(0,0,0,0.4)",o.stroke())})(r);const a=new cf(i);return a.colorSpace=qt,a.anisotropy=4,gh.set(e,a),t.enhancement!=="stone"&&wf(`/art/cards/${Va[t.rank]}_${t.suit}`,i,a,t.enhancement,t.edition,t.seal),a}function Af(){if(ji)return ji;const t=document.createElement("canvas");t.width=dn,t.height=Nt;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,dn,Nt);n.addColorStop(0,"#7a1622"),n.addColorStop(1,"#3a0a12"),e.fillStyle=n,Ii(e,6,6,dn-12,Nt-12,22),e.fill(),e.strokeStyle="#f0c060",e.lineWidth=3,Ii(e,18,18,dn-36,Nt-36,16),e.stroke(),e.strokeStyle="rgba(240,192,96,0.25)",e.lineWidth=1;for(let i=-Nt;i<dn;i+=14)e.beginPath(),e.moveTo(i,0),e.lineTo(i+Nt,Nt),e.stroke(),e.beginPath(),e.moveTo(i,Nt),e.lineTo(i+Nt,0),e.stroke();return e.fillStyle="#f0c060",e.textAlign="center",e.font="bold 96px serif",e.fillText("♠",dn/2,Nt/2+36),ji=new cf(t),ji.colorSpace=qt,ji.anisotropy=4,wf("/art/back/default",t,ji,"none","base","none"),ji}var Hn=1.2,Mi=1.68,Ms=.04,Cf={value:0};function wy(t){Cf.value+=t}var Ay=class extends Ai{card;selected=!1;hovered=!1;baseY=0;baseZ=0;baseRotZ=0;handIndex=0;faceMesh;backMesh;glowMesh;shadowMesh;glowMaterial;shadowMaterial;constructor(t){super(),this.card=t;const e=new ar(Hn,Mi),n=.5,i=new Xe(.06,-.08),r=new ar(Hn+n,Mi+n);this.shadowMaterial=new sn({transparent:!0,depthWrite:!1,uniforms:{uSize:{value:new Xe(Hn+n,Mi+n)},uInner:{value:new Xe(Hn,Mi)},uRadius:{value:.18},uOffset:{value:i},uOpacity:{value:.55}},vertexShader:`
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
      `}),this.shadowMesh=new jt(r,this.shadowMaterial),this.shadowMesh.position.z=-Ms*.5,this.shadowMesh.renderOrder=-2;const s=.35,a=new ar(Hn+s,Mi+s);this.glowMaterial=new sn({transparent:!0,depthWrite:!1,blending:2,uniforms:{uOpacity:{value:0},uTime:Cf,uColor:{value:new Ge(6994175)},uSize:{value:new Xe(Hn+s,Mi+s)},uInner:{value:new Xe(Hn,Mi)},uRadius:{value:.18}},vertexShader:`
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
      `}),this.glowMesh=new jt(a,this.glowMaterial),this.glowMesh.position.z=-Ms*.25,this.glowMesh.renderOrder=-1,this.glowMesh.visible=!1;const o=new Ll({map:yh(t),roughness:.55,metalness:.05,alphaTest:.5,emissive:new Ge(0),emissiveIntensity:0}),l=new Ll({map:Af(),roughness:.55,metalness:.05,alphaTest:.5});this.faceMesh=new jt(e,o),this.faceMesh.position.z=Ms/2,this.backMesh=new jt(e,l),this.backMesh.position.z=-Ms/2,this.backMesh.rotation.y=Math.PI,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this,this.add(this.shadowMesh,this.faceMesh,this.backMesh,this.glowMesh)}resetForCard(t){Ee.killTweensOf(this.position),Ee.killTweensOf(this.rotation),Ee.killTweensOf(this.scale),this.card=t,this.selected=!1,this.hovered=!1,this.baseY=0,this.baseZ=0,this.baseRotZ=0,this.handIndex=0,delete this.userData.keepAlive,this.position.set(0,0,0),this.rotation.set(0,0,0),this.scale.set(1,1,1),this.glowMesh.visible=!1,this.glowMaterial.uniforms.uOpacity.value=0;const e=this.faceMesh.material;e.map=yh(t),e.emissive.setHex(0),e.emissiveIntensity=0,e.needsUpdate=!0,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this}moveTo(t,e=.45,n=0){this.baseY=t.y,this.baseZ=t.z??0,this.baseRotZ=t.rotZ??0,Ee.to(this.position,{x:t.x,y:this.baseY+(this.selected?.45:0)+(this.hovered?.2:0),z:this.baseZ+(this.selected?.6:0)+(this.hovered?.5:0),duration:e,delay:n,ease:"power3.out"}),Ee.to(this.rotation,{x:0,y:0,z:this.baseRotZ,duration:e,delay:n,ease:"power3.out"})}setHover(t){this.hovered!==t&&(this.hovered=t,Ee.to(this.position,{y:this.baseY+(this.selected?.45:0)+(t?.2:0),z:this.baseZ+(this.selected?.6:0)+(t?.5:0),duration:.18,ease:"power2.out"}),Ee.to(this.rotation,{x:t?-.05:0,duration:.18,ease:"power2.out"}))}setSelected(t){if(this.selected===t)return;this.selected=t,Ee.to(this.position,{y:this.baseY+(t?.45:0)+(this.hovered?.2:0),z:this.baseZ+(t?.6:0)+(this.hovered?.5:0),duration:.22,ease:"back.out(2)"});const e=this.glowMaterial.uniforms.uOpacity;t&&(this.glowMesh.visible=!0),Ee.to(e,{value:t?1:0,duration:t?.28:.22,ease:t?"power2.out":"power2.in",onComplete:()=>{this.selected||(this.glowMesh.visible=!1)}})}pulse(t=1.18,e=.35){const n=Ee.timeline();n.to(this.scale,{x:t*1.08,y:t*.92,z:t,duration:e*.25,ease:"power2.out"}),n.to(this.scale,{x:t*.95,y:t*1.05,z:t,duration:e*.25,ease:"sine.inOut"}),n.to(this.scale,{x:1,y:1,z:1,duration:e*.5,ease:"elastic.out(1, 0.5)"})}flash(t=16765514,e=.5){const n=this.faceMesh.material;n.emissive.setHex(t),Ee.fromTo(n,{emissiveIntensity:0},{emissiveIntensity:.9,duration:e*.3,ease:"power2.out",yoyo:!0,repeat:1})}dispose(){this.faceMesh.geometry.dispose(),this.faceMesh.material.dispose(),this.backMesh.material.dispose(),this.glowMesh.geometry.dispose(),this.glowMaterial.dispose(),this.shadowMesh.geometry.dispose(),this.shadowMaterial.dispose()}},Pr=400,Cy=class{points;positions;colors;sizes;data=[];cursor=0;constructor(){const t=new di;this.positions=new Float32Array(Pr*3),this.colors=new Float32Array(Pr*3),this.sizes=new Float32Array(Pr),t.setAttribute("position",new vn(this.positions,3)),t.setAttribute("color",new vn(this.colors,3)),t.setAttribute("size",new vn(this.sizes,1));const e=new sn({uniforms:{uPixel:{value:window.devicePixelRatio||1}},transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,vertexShader:`
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
      `});this.points=new M_(t,e),this.points.frustumCulled=!1,this.points.renderOrder=10;for(let n=0;n<Pr;n++)this.data[n]={active:!1,age:0,life:1,vx:0,vy:0,vz:0,gravity:0,startSize:1},this.sizes[n]=0}emit(t,e={}){const n=e.count??12,i=e.color??new Ge("#ffd24a"),r=e.spread??.8,s=e.speed??2.2,a=e.life??.9,o=e.size??14,l=e.gravity??-4.5,c=t.clone();this.points.parent&&this.points.parent.worldToLocal(c);for(let u=0;u<n;u++){const d=this.cursor;this.cursor=(this.cursor+1)%Pr;const h=this.data[d];h.active=!0,h.age=0,h.life=a*(.7+Math.random()*.6);const f=Math.random()*Math.PI*2,_=Math.random()*r;h.vx=Math.cos(f)*_*s*.5,h.vy=s*(.6+Math.random()*.8),h.vz=(Math.random()-.5)*r,h.gravity=l,h.startSize=o*(.7+Math.random()*.6),this.positions[d*3+0]=c.x,this.positions[d*3+1]=c.y,this.positions[d*3+2]=c.z,this.colors[d*3+0]=i.r,this.colors[d*3+1]=i.g,this.colors[d*3+2]=i.b,this.sizes[d]=h.startSize}}update(t){let e=!1;for(let n=0;n<Pr;n++){const i=this.data[n];if(!i.active)continue;if(i.age+=t,i.age>=i.life){i.active=!1,this.sizes[n]=0;continue}e=!0,i.vy+=i.gravity*t,this.positions[n*3+0]+=i.vx*t,this.positions[n*3+1]+=i.vy*t,this.positions[n*3+2]+=i.vz*t;const r=i.age/i.life;this.sizes[n]=i.startSize*(1-r)}(e||this.cursor!==0)&&(this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("size").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0)}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}},gs="./";function Rf(t){const e=t.replace(/^\/+/,"");return gs===""||gs==="./"?`./${e}`:`${gs.endsWith("/")?gs:`${gs}/`}${e}`}var Ry=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],Py=["clubs","diamonds","hearts","spades"],Pf="art/ui/background.png",Ly="art/back/default.svg",Dy=Ry.flatMap(t=>Py.map(e=>`art/cards/${t}_${e}.svg`)),Iy=["art/ui/open-poker-logo.png",Pf,"art/ui/background.svg","art/ui/chip.svg","art/ui/coin.svg","art/ui/btn_discard.svg","art/ui/btn_new_run.svg","art/ui/btn_options.svg","art/ui/btn_play.svg","art/ui/btn_run_info.svg",Ly,"art/back/default.png","art/blinds/small.svg","art/blinds/big.svg","art/blinds/boss.svg","art/jokers/joker_01.svg","art/jokers/joker_02.svg","art/jokers/joker_03.svg","art/jokers/joker_04.svg","art/jokers/joker_05.svg","art/consumables/planet.svg","art/consumables/spectral.svg","art/consumables/tarot.svg",...Dy];function Ny(t){return`art/cards/${Va[t.rank]}_${t.suit}.svg`}function Uy(t){return[...new Set(t)]}function Sh(t,e,n){return Math.max(e,Math.min(n,t))}function ky(){const t=new ar(2,2),e=new sn({uniforms:{uTime:{value:0},uColorA:{value:new Ge("#107052")},uColorB:{value:new Ge("#063329")},uColorC:{value:new Ge("#29a36d")},uMap:{value:null},uUseMap:{value:0}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1}),n=new jt(t,e);return n.renderOrder=-1,n.frustumCulled=!1,n}function Oy(t){const e=new V_;let n=null,i=!1;const r=t.material;return(()=>{if(i)return;const a=Rf(Pf);e.load(a,o=>{if(i){o.dispose();return}o.colorSpace=qt,n=o,r.uniforms.uMap.value=o,r.uniforms.uUseMap.value=1},void 0,()=>{})})(),{dispose:()=>{i=!0,r.uniforms.uMap.value=null,r.uniforms.uUseMap.value=0,n?.dispose()}}}function Fy(t){const e=new u_,n=new An(28,t.clientWidth/t.clientHeight,.1,100);n.position.set(0,1.2,12),n.lookAt(0,.6,0);const i=new yy({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(t.clientWidth,t.clientHeight),i.outputColorSpace=qt,t.appendChild(i.domElement);const r=ky();e.add(r);const s=Oy(r);e.add(new W_(16777215,.55));const a=new Hu(16777215,1.1);a.position.set(2,4,5),e.add(a);const o=new Hu(8964351,.4);o.position.set(-3,2,-2),e.add(o);const l=new Ai;l.position.set(0,-.9,0),l.scale.setScalar(.7),e.add(l);const c=new Ai;c.position.set(0,.4,0),c.scale.setScalar(.78),e.add(c);const u=new Ai;u.position.set(4.6,-1.75,0),u.scale.setScalar(.68),u.rotation.z=-.04,e.add(u);const d=new ar(Hn,Mi),h=new Ll({map:Af(),roughness:.85,metalness:.05,alphaTest:.5}),f=12,_=[];for(let L=0;L<f;L++){const F=new jt(d,h);F.position.set(L*.012,L*.018,L*Ms*.5),u.add(F),_.push(F)}const p=L=>{const F=Math.max(0,Math.min(f,Math.ceil(L/52*f)));for(let D=0;D<_.length;D++)_[D].visible=D<F};p(52);const g=new Cy;e.add(g.points);const m=(L,F)=>{g.emit(L,F)},y=()=>new X,T=L=>new Ge(L),b=()=>{const L=Math.max(1,t.clientWidth),F=Math.max(1,t.clientHeight),D=Sh(Math.min(L/1440,F/900),.78,1),B=Sh((1920-L)/1920,0,.5)*1.15+(1-D)*.35,z=-.9+(1-D)*1.35,O=.4+(1-D)*.28,K=4.6-(1-D)*.85,ee=-1.75+(1-D)*.45;l.position.set(B,z,0),l.scale.setScalar(.7*D),c.position.set(B,O,0),c.scale.setScalar(.78*D),u.position.set(K,ee,0),u.scale.setScalar(.68*D)};b();const E=()=>{const L=t.clientWidth,F=t.clientHeight;i.setSize(L,F),n.aspect=L/F,n.updateProjectionMatrix(),b()};window.addEventListener("resize",E);const R=new iv;let C=0;const v=()=>{const L=R.getDelta(),F=R.elapsedTime;r.material.uniforms.uTime.value=F,wy(L),g.update(L),i.render(e,n),C=requestAnimationFrame(v)};return C=requestAnimationFrame(v),{scene:e,camera:n,renderer:i,handGroup:l,playGroup:c,deckGroup:u,setDeckCount:p,particles:g,emitBurst:m,createVector3:y,createColor:T,getMetrics:()=>({frame:i.info.render.frame,calls:i.info.render.calls,triangles:i.info.render.triangles,points:i.info.render.points,lines:i.info.render.lines}),dispose:()=>{cancelAnimationFrame(C),window.removeEventListener("resize",E),s.dispose(),r.geometry.dispose(),r.material.dispose(),d.dispose(),h.dispose(),g.dispose(),i.dispose(),i.domElement.remove()},shake:(L=.15,F=.35)=>{const D={x:n.position.x,y:n.position.y},B=Ee.timeline({onComplete:()=>{n.position.x=D.x,n.position.y=D.y}}),z=6;for(let O=0;O<z;O++)B.to(n.position,{x:D.x+(Math.random()-.5)*L*2,y:D.y+(Math.random()-.5)*L*2,duration:F/z,ease:"sine.inOut"});B.to(n.position,{x:D.x,y:D.y,duration:.1,ease:"power2.out"})}}}function Ul(t){if(t===0)return[];const e=Math.min(Hn*1.05,9/Math.max(t,1)),n=-((t-1)*e)/2,i=.04,r=.05;return Array.from({length:t},(s,a)=>{const o=n+a*e,l=a-(t-1)/2,c=-l*i;return{x:o,y:-Math.abs(l)*r*.5,z:a*.02,rotZ:c}})}function By(t){const e=Hn*1.1,n=-((t-1)*e)/2;return Array.from({length:t},(i,r)=>({x:n+r*e,y:.7,z:0,rotZ:0}))}var Qi=1e-4;function zy(t,e,n){return Math.max(e,Math.min(n,t))}function on(t,e,n={}){const i=zy(n.pan??0,-1,1);if(Math.abs(i)<.001)return e;const r=t.createStereoPanner();return r.pan.value=i,r.connect(e),r}function xt(t,e,n,i,r,s=t.currentTime){const a=t.createGain();return a.gain.setValueAtTime(Qi,s),a.gain.exponentialRampToValueAtTime(Math.max(Qi,r),s+n),a.gain.exponentialRampToValueAtTime(Qi,s+n+i),a.connect(e),a}function rs(t,e,n,i,r,s,a=t.currentTime){const o=t.createGain();return o.gain.setValueAtTime(Qi,a),o.gain.exponentialRampToValueAtTime(Math.max(Qi,s),a+n),o.gain.setValueAtTime(Math.max(Qi,s),a+n+i),o.gain.exponentialRampToValueAtTime(Qi,a+n+i+r),o.connect(e),o}function an(t,e,n,i,r,s=0,a=t.currentTime){const o=t.createOscillator();return o.type=n,o.frequency.setValueAtTime(i,a),o.detune.setValueAtTime(s,a),o.connect(e),o.start(a),o.stop(a+r+.05),o}function Vy(t,e){const n=Math.max(1,Math.floor(t.sampleRate*e)),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let s=0;s<n;s++)r[s]=Math.random()*2-1;return i}function bn(t,e,n,i=t.currentTime){const r=t.createBufferSource();return r.buffer=Vy(t,n),r.connect(e),r.start(i),r.stop(i+n+.05),r}function Lt(t,e,n,i,r=1){const s=t.createBiquadFilter();return s.type=n,s.frequency.value=i,s.Q.value=r,s.connect(e),s}function Ni(t,e,n,i,r,s,a=0){an(t,xt(t,e,.002,r,i,s),"triangle",n,r,a,s).frequency.exponentialRampToValueAtTime(n*.985,s+r)}function Gy(t,e,n={}){const i=n.volume??.07,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;bn(t,Lt(t,Lt(t,xt(t,s,.0015,.045,i,a),"highpass",550*r,.7),"lowpass",2100*r,.45),.055,a),an(t,xt(t,s,.002,.035,i*.28,a),"sine",180*r,.04,n.detune??0,a)}function Hy(t,e,n={}){const i=n.volume??.18,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;an(t,Lt(t,rs(t,s,.008,.018,.16,i,a),"lowpass",900*r,.65),"sine",138*r,.2,n.detune??0,a).frequency.exponentialRampToValueAtTime(220*r,a+.09),bn(t,Lt(t,xt(t,s,.003,.11,i*.42,a+.006),"bandpass",760*r,.9),.13,a+.006)}function Wy(t,e,n={}){const i=n.volume??.14,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;an(t,Lt(t,rs(t,s,.007,.01,.15,i,a),"lowpass",760*r,.55),"sine",250*r,.18,n.detune??0,a).frequency.exponentialRampToValueAtTime(120*r,a+.12),bn(t,Lt(t,xt(t,s,.003,.08,i*.34,a+.01),"bandpass",560*r,.8),.1,a+.01)}function Xy(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,xt(t,s,.001,.095,i,a),"bandpass",2600*r,1.15);o.frequency.exponentialRampToValueAtTime(930*r,a+.11),bn(t,o,.12,a),an(t,xt(t,s,.002,.06,i*.16,a+.045),"triangle",92*r,.075,n.detune??0,a+.045)}function $y(t,e,n={}){const i=n.volume??.28,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,xt(t,s,.004,.13,i,a),"bandpass",2900*r,1.8);o.frequency.exponentialRampToValueAtTime(760*r,a+.14),bn(t,o,.15,a),an(t,xt(t,s,.001,.05,i*.34,a+.035),"triangle",820*r,.06,(n.detune??0)+7,a+.035)}function qy(t,e,n={}){const i=n.volume??.36,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,rs(t,s,.012,.03,.29,i,a),"lowpass",420*r,1.2);o.frequency.exponentialRampToValueAtTime(2600*r,a+.18),o.frequency.exponentialRampToValueAtTime(420*r,a+.34),bn(t,o,.36,a),an(t,xt(t,s,.015,.22,i*.18,a+.02),"sine",86*r,.26,n.detune??0,a+.02).frequency.exponentialRampToValueAtTime(118*r,a+.2)}function Yy(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,Lt(t,rs(t,s,.004,.015,.25,i,a),"highpass",180*r,.7),"lowpass",4200*r,.9);o.frequency.exponentialRampToValueAtTime(380*r,a+.28),bn(t,o,.31,a),an(t,xt(t,s,.006,.18,i*.2,a+.04),"triangle",160*r,.22,n.detune??0,a+.04).frequency.exponentialRampToValueAtTime(78*r,a+.22)}function jy(t,e,n={}){const i=n.volume??.16,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;Ni(t,s,930*r,i,.055,a,(n.detune??0)-5),Ni(t,s,1570*r,i*.42,.04,a+.002,(n.detune??0)+8),bn(t,Lt(t,xt(t,s,.001,.025,i*.42,a),"highpass",1700*r,.5),.032,a)}function Ky(t,e,n={}){const i=n.volume??.17,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;Ni(t,s,720*r,i*.65,.07,a,n.detune??0),Ni(t,s,1440*r,i*.54,.06,a+.004,(n.detune??0)+11),Ni(t,s,2160*r,i*.28,.05,a+.008,(n.detune??0)-9)}function Zy(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;[330,440,660].forEach((o,l)=>{const c=a+l*.045;an(t,xt(t,s,.004,.22-l*.035,i*(1-l*.16),c),l===0?"triangle":"sine",o*r,.24,n.detune??0,c).frequency.exponentialRampToValueAtTime(o*1.08*r,c+.14)}),bn(t,Lt(t,xt(t,s,.003,.16,i*.34,a+.035),"highpass",2400*r,.45),.18,a+.035)}function Jy(t,e,n={}){const i=n.volume??.42,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;[0,.09].forEach((o,l)=>{const c=a+o,u=(l===0?1040:1320)*r;Ni(t,s,u,i*.8,.32,c,(n.detune??0)+l*6),Ni(t,s,u*1.52,i*.38,.24,c+.006,(n.detune??0)-l*8),bn(t,Lt(t,xt(t,s,.001,.055,i*.34,c),"highpass",2600*r,.7),.07,c)}),[523.25,659.25,783.99,1046.5].forEach((o,l)=>{const c=a+.16+l*.055;Ni(t,s,o*r,i*.42,.28,c,n.detune??0)})}function Qy(t,e,n={}){const i=n.volume??.48,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=[392,523.25,659.25,783.99,1046.5];o.forEach((l,c)=>{const u=a+c*.095,d=c===o.length-1?.65:.42;an(t,Lt(t,rs(t,s,.01,.04,d,i*(c===o.length-1?.9:.62),u),"lowpass",3600*r,.8),"triangle",l*r,d+.04,n.detune??0,u),an(t,xt(t,s,.002,.2,i*.18,u+.012),"sine",l*2.01*r,.22,(n.detune??0)+4,u+.012)}),bn(t,Lt(t,xt(t,s,.02,.6,i*.18,a+.32),"highpass",3200*r,.4),.7,a+.32)}function eS(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,s,"lowpass",850*r,.45),l=[196,174.61,155.56,130.81];l.forEach((c,u)=>{const d=a+u*.22,h=u===l.length-1?1:.62,f=rs(t,o,.045,.02,h,i*(1-u*.08),d);an(t,f,"triangle",c*r,h+.04,(n.detune??0)-5,d).frequency.exponentialRampToValueAtTime(c*.96*r,d+h),an(t,xt(t,f,.05,h*.82,i*.24,d+.01),"sine",c/2*r,h,n.detune??0,d+.01)}),bn(t,Lt(t,xt(t,s,.03,.55,i*.18,a+.12),"lowpass",260*r,.8),.65,a+.12)}function tS(t,e,n={}){const i=n.volume??.24,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;an(t,xt(t,s,.0015,.055,i,a),"triangle",360*r,.07,n.detune??0,a).frequency.exponentialRampToValueAtTime(170*r,a+.055),bn(t,Lt(t,xt(t,s,.001,.025,i*.5,a+.002),"highpass",1600*r,.6),.032,a+.002)}var nS=""+new URL("Veludo No Copo-CQSci05v.mp3",import.meta.url).href,iS=class{ctx;dest;buffer=null;source=null;pendingStart=!1;constructor(t,e){this.ctx=t,this.dest=e,this.load()}async load(){try{const t=await(await fetch(nS)).arrayBuffer();this.buffer=await this.ctx.decodeAudioData(t),this.pendingStart&&(this.pendingStart=!1,this.playBuffer())}catch(t){console.warn("[BackgroundMusic] Failed to load music file:",t)}}start(){this.buffer?this.playBuffer():this.pendingStart=!0}stop(){if(this.pendingStart=!1,this.source){try{this.source.stop()}catch{}this.source=null}}playBuffer(){if(this.stop(),!this.buffer)return;const t=this.ctx.createBufferSource();t.buffer=this.buffer,t.loop=!0,t.connect(this.dest),t.start(),this.source=t}},Mh="open-poker:muted",xh="open-poker:volume",bh="open-poker:music-muted",rS=class{ctx=null;master=null;sfxLimiter=null;musicGain=null;music=null;musicLoadPending=!1;voices=new Map;unlocked=!1;muted=!1;volume=.7;mutedListeners=new Set;musicMuted=!1;musicVolume=.06;musicMutedListeners=new Set;constructor(){try{this.muted=localStorage.getItem(Mh)==="1",this.musicMuted=localStorage.getItem(bh)==="1";const t=localStorage.getItem(xh);t&&(this.volume=Math.max(0,Math.min(1,parseFloat(t))))}catch{}}registerDefaults(){const t=(e,n)=>this.register(e,{synth:n});t("click",Gy),t("select",Hy),t("deselect",Wy),t("deal",Xy),t("flip",$y),t("whoosh",qy),t("sweep",Yy),t("chipTick",jy),t("multTick",Ky),t("scorePop",Zy),t("chaching",Jy),t("win",Qy),t("lose",eS),t("buttonClick",tS)}register(t,e){this.voices.set(t,e)}installUnlockListener(){const t=()=>{this.unlock(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t,{once:!1}),window.addEventListener("keydown",t,{once:!1})}ensureContext(){if(this.ctx)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.sfxLimiter=this.ctx.createDynamicsCompressor(),this.sfxLimiter.threshold.value=-13,this.sfxLimiter.knee.value=8,this.sfxLimiter.ratio.value=5,this.sfxLimiter.attack.value=.003,this.sfxLimiter.release.value=.16,this.master.connect(this.sfxLimiter),this.sfxLimiter.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicMuted?0:this.musicVolume,this.musicGain.connect(this.ctx.destination)}catch{return null}return this.ctx}unlock(){const t=this.ensureContext();t&&(t.state==="suspended"&&t.resume(),this.unlocked=!0,this.startMusicWhenReady(t))}startMusicWhenReady(t){if(!(this.musicMuted||this.music||this.musicLoadPending||!this.musicGain)){if(this.musicLoadPending=!0,this.music||!this.musicGain||this.ctx!==t){this.musicLoadPending=!1;return}this.music=new iS(t,this.musicGain),this.music.start(),this.musicLoadPending=!1}}play(t,e={}){if(this.muted||!this.unlocked)return;const n=this.ensureContext();if(!n||!this.master)return;const i=this.voices.get(t);if(i){if(i.buffer){this.playBuffer(n,i.buffer,e);return}i.url&&!i.buffer&&this.loadBuffer(n,i),i.synth&&i.synth(n,this.master,e)}}playBuffer(t,e,n){if(!this.master)return;const i=t.createBufferSource();i.buffer=e,n.detune&&(i.detune.value=n.detune),n.pitch&&(i.playbackRate.value=n.pitch);const r=t.createGain();r.gain.value=n.volume??1,i.connect(r).connect(this.master),i.start()}loadBuffer(t,e){!e.url||e.buffer||fetch(e.url).then(n=>n.arrayBuffer()).then(n=>t.decodeAudioData(n)).then(n=>{e.buffer=n}).catch(()=>{})}setMuted(t){this.muted=t;try{localStorage.setItem(Mh,t?"1":"0")}catch{}this.master&&(this.master.gain.value=t?0:this.volume);for(const e of this.mutedListeners)e(t)}toggleMute(){return this.setMuted(!this.muted),this.muted}isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem(xh,String(this.volume))}catch{}this.master&&!this.muted&&(this.master.gain.value=this.volume)}onMutedChange(t){return this.mutedListeners.add(t),()=>this.mutedListeners.delete(t)}setMusicMuted(t){this.musicMuted=t;try{localStorage.setItem(bh,t?"1":"0")}catch{}this.musicGain&&(this.musicGain.gain.value=t?0:this.musicVolume),!t&&this.unlocked&&this.ctx&&this.startMusicWhenReady(this.ctx);for(const e of this.musicMutedListeners)e(t)}toggleMusicMute(){return this.setMusicMuted(!this.musicMuted),this.musicMuted}isMusicMuted(){return this.musicMuted}onMusicMutedChange(t){return this.musicMutedListeners.add(t),()=>this.musicMutedListeners.delete(t)}dispose(){this.music?.stop(),this.music=null;try{this.ctx?.close()}catch{}this.ctx=null,this.master=null,this.sfxLimiter=null,this.musicGain=null,this.musicLoadPending=!1,this.unlocked=!1}},Te=new rS;Te.registerDefaults();Te.installUnlockListener();function sS(t){const{renderer:e,camera:n,handGroup:i,getHandObjects:r,onToggleSelect:s,onReorder:a}=t,o=e.domElement,l=new nv,c=new Xe;let u=null,d=null,h=new Xe,f=null,_=0;const p=.012;function g(M){return Math.max(-.7,Math.min(.7,M.position.x/4.5))}function m(M){const I=o.getBoundingClientRect();c.x=(M.clientX-I.left)/I.width*2-1,c.y=-((M.clientY-I.top)/I.height)*2+1}function y(){const M=r();if(M.length===0)return null;l.setFromCamera(c,n);const I=M.flatMap(L=>[L.faceMesh,L.backMesh]),A=l.intersectObjects(I,!1);return A.length===0?null:A[0].object.userData.cardObject??null}function T(M){l.setFromCamera(c,n);const I=new xi(new X(0,0,1),-M),A=new X;return l.ray.intersectPlane(I,A)?A.x:null}function b(M){if(m(M),d&&!f){const A=c.x-h.x,L=c.y-h.y;if(A*A+L*L>p*p){f=d,f.position.x;const F=T(i.position.z+f.position.z);F!==null?_=F-(f.position.x+i.position.x):_=0,Te.play("flip",{volume:.24,pan:g(f)}),Ee.to(f.position,{y:f.baseY+.6,z:f.baseZ+.4,duration:.15})}}if(f){const A=T(i.position.z+f.baseZ+.4);A!==null&&(f.position.x=A-i.position.x-_),E();return}const I=y();I!==u&&(u?.setHover(!1),u=I,u?.setHover(!0),I&&Te.play("click",{volume:.1,detune:(Math.random()-.5)*160,pan:g(I)}),o.style.cursor=I?"pointer":"default")}function E(){const M=r().slice().sort((A,L)=>A.position.x-L.position.x),I=Ul(M.length);M.forEach((A,L)=>{A.handIndex=L,A!==f&&A.moveTo(I[L],.18)})}function R(M){m(M);const I=y();I&&(d=I,h.set(c.x,c.y),o.setPointerCapture(M.pointerId))}function C(M){if(o.hasPointerCapture(M.pointerId)&&o.releasePointerCapture(M.pointerId),f){const I=r().slice().sort((L,F)=>L.position.x-F.position.x),A=Ul(I.length);I.forEach((L,F)=>{L.handIndex=F,L.moveTo(A[F],.25)}),a(I.map(L=>L.card.id)),f=null,d=null;return}if(d){const I=s(d.card.id);d.setSelected(I),Te.play(I?"select":"deselect",{detune:(Math.random()-.5)*70,pan:g(d)}),d=null}}function v(){u?.setHover(!1),u=null,o.style.cursor="default"}return o.addEventListener("pointermove",b),o.addEventListener("pointerdown",R),o.addEventListener("pointerup",C),o.addEventListener("pointerleave",v),()=>{o.removeEventListener("pointermove",b),o.removeEventListener("pointerdown",R),o.removeEventListener("pointerup",C),o.removeEventListener("pointerleave",v)}}var aS=[{action:"play_hand",description:"Play selected cards",keys:["Enter"]},{action:"discard",description:"Discard selected cards",keys:["Backspace","Delete"]},{action:"restart_run",description:"Start a new run",keys:["KeyR"]},{action:"toggle_mute",description:"Mute/unmute audio",keys:["KeyM"]}],oS={"btn-play":"play_hand","btn-discard":"discard","overlay-restart":"restart_run","btn-mute":"toggle_mute"},lS=new Map(aS.flatMap(t=>t.keys.map(e=>[e,t.action])));function cS(t){return t.ctrlKey||t.metaKey||t.altKey?null:lS.get(t.code)??null}var uS=15e3;function hS(t={}){return Uy([...Iy,...(t.cards??[]).map(Ny)]).map(e=>({url:Rf(e),label:e}))}function dS(t){return new Promise((e,n)=>{const i=window.setTimeout(()=>n(new Error(`Timed out loading image: ${t}`)),uS),r=new Image;r.decoding="async",r.onload=()=>{if(window.clearTimeout(i),!r.decode){e();return}r.decode().catch(()=>{}).then(()=>e())},r.onerror=()=>{window.clearTimeout(i),n(new Error(`Failed to load image: ${t}`))},r.src=t})}async function fS(t,e={}){const n=hS(e),i=n.length,r=[];let s=0;return t?.({loaded:s,total:i,label:"Preparing assets",failed:0}),await Promise.all(n.map(async a=>{try{await dS(a.url)}catch(o){r.push(a.label),console.warn(`[preload] ${a.label}`,o)}finally{s+=1,t?.({loaded:s,total:i,label:a.label,failed:r.length})}})),{total:i,failed:r}}var ae=t=>document.getElementById(t),dr=t=>document.getElementById(t),nl=dr("splash-screen"),Th=dr("splash-progress-bar"),il=dr("splash-status"),Eh=dr("splash-percent"),kl=ae("canvas-host"),pS=ae("blind-name"),wh=ae("blind-badge"),mS=ae("blind-target"),gS=ae("blind-reward"),Ol=ae("round-score"),rl=ae("hand-type"),Bs=ae("chips"),zs=ae("mult"),_S=ae("ante"),vS=ae("round"),yS=ae("money"),SS=ae("hands-left"),MS=ae("discards-left"),xS=ae("seed"),bS=ae("hand-counter"),TS=ae("deck-counter"),Da=ae("joker-slots"),ES=ae("joker-count"),Ah=ae("consumable-slots"),wS=ae("consumable-count"),AS=ae("btn-play"),CS=ae("btn-discard"),yc=ae("btn-sort-straight"),Sc=ae("btn-sort-flush"),RS=ae("btn-runinfo"),PS=ae("btn-options"),Fl=ae("run-info-overlay"),Ch=ae("run-info-list"),LS=ae("btn-run-info-back"),Bl=ae("options-overlay"),DS=ae("btn-options-back"),Lf=ae("btn-option-sfx"),Df=ae("btn-option-music"),IS=ae("btn-option-new-run"),NS=ae("btn-option-return"),US=ae("kanban-close-game"),Ya=ae("score-popup"),Rh=ae("popup-hand"),zl=ae("popup-total"),xs=ae("overlay"),kS=ae("overlay-title"),OS=ae("overlay-sub"),On=ae("shop-overlay"),ja=ae("shop-panel"),Vl=ae("shop-offers"),FS=ae("shop-inventory"),BS=ae("shop-money"),zS=ae("shop-next-blind"),VS=ae("shop-reroll-cost"),Mc=ae("btn-shop-reroll"),Gl=ae("btn-shop-next"),Ph=ae("shop-boosters"),sl=ae("shop-voucher"),GS=ae("booster-overlay"),HS=ae("booster-name"),WS=ae("booster-kind"),XS=ae("booster-picks"),Lh=ae("booster-choices"),$S=ae("btn-booster-skip"),qS=ae("target-overlay"),YS=ae("target-name"),jS=ae("target-instruction"),Dh=ae("target-cards"),KS=ae("btn-target-cancel"),Hl=ae("btn-target-confirm"),Ri=ae("item-info"),ZS=ae("item-info-kind"),JS=ae("item-info-name"),QS=ae("item-info-desc"),eM=ae("item-info-meta"),tM=ae("btn-item-info-close"),nM=ae("setup-overlay"),Ih=ae("setup-decks"),er=ae("setup-stake"),iM=ae("setup-stake-desc"),rM=ae("btn-setup-start"),sM=ae("blind-select-overlay"),Nh=ae("blind-select-cards");function aM(t,e,n){return Math.max(e,Math.min(n,t))}function xc(){const t=window.innerWidth||1280,e=window.innerHeight||720,n=aM(Math.min(t/1280,e/900),.72,1),i=Math.round(14*n),r=260,s=16*n,a=i+r*n+s,o=Math.max(320,(t-a-i)/n),l=Math.max(360,(e-i*2)/n),c=document.documentElement;c.style.setProperty("--ui-scale",n.toFixed(3)),c.style.setProperty("--ui-edge",`${i}px`),c.style.setProperty("--sidebar-layout-height",`${l}px`),c.style.setProperty("--hud-top-left",`${a}px`),c.style.setProperty("--hud-top-layout-width",`${o}px`)}xc();function oM(t){const e=t.total===0?1:t.loaded/t.total,n=Math.round(e*100);if(Th&&(Th.style.transform=`scaleX(${e})`),Eh&&(Eh.textContent=`${n}%`),!!il){if(t.loaded>=t.total){il.textContent=t.failed>0?`Loaded with ${t.failed} fallback${t.failed===1?"":"s"}`:"Ready";return}il.textContent=`Loading ${t.label}`}}function lM(){nl&&window.setTimeout(()=>{nl.classList.add("is-complete"),window.setTimeout(()=>nl.remove(),650)},220)}var If="kanban-open-poker:run-v1";function cM(){try{const t=localStorage.getItem(If);if(!t)return null;const e=JSON.parse(t);return e?.version===1&&e.snapshot?e:null}catch{return null}}var Vs=cM(),V=new qm;if(Vs?.snapshot)try{V.reset(Vs.snapshot)}catch(t){console.warn("[save] Could not restore Open Poker run:",t),V.enterSetup()}else V.enterSetup();var Fi=Object.fromEntries(Object.keys(V.handLevels).map(t=>[t,0]));if(Vs?.handPlayCounts)for(const t of Object.keys(Fi))Fi[t]=Math.max(0,Number(Vs.handPlayCounts[t]??0)||0);var ts=null;function Nf(){for(const t of Object.keys(Fi))Fi[t]=0}var Uh=await fS(oM,{cards:V.hand});Uh.failed.length>0&&console.warn("[preload] Assets loaded with fallbacks:",Uh.failed);lM();var wt=Fy(kl),Ht=new Map,Ka=[],bi=!1,tr=!1,Hr=!1,Wr=null,Ln=!1,Za=[];function Uf(t){return Math.max(-.7,Math.min(.7,t/4.5))}function kf(t){const e=Za.pop()??document.createElement("div");return e.removeAttribute("style"),e.className="card-score-float",e.textContent="",t.appendChild(e),e}function Of(t){t.remove(),t.removeAttribute("style"),t.className="card-score-float",t.textContent="",Za.push(t)}function uM(t){let e=Ht.get(t.id);return e||(e=Ka.pop()??new Ay(t),e.resetForCard(t),wt.handGroup.add(e),e.position.set(6,-2,1),e.rotation.y=Math.PI,Ht.set(t.id,e),Te.play("deal",{volume:.27,detune:(Math.random()-.5)*180,pitch:.94+Math.random()*.12,pan:(Math.random()-.5)*.5}),Ee.to(e.rotation,{y:0,duration:.5,delay:.05,ease:"power3.out"})),e}function oo(t,e){wt.handGroup.remove(e),wt.playGroup.remove(e),Ht.delete(t),e.resetForCard(e.card),Ka.push(e)}function kh(t){wt.handGroup.remove(t),wt.playGroup.remove(t),t.dispose()}var Pn=[],Bi=Vs?.activeHandSort??null;function Vi(){try{const t={version:1,snapshot:V.toSnapshot(),activeHandSort:Bi,handPlayCounts:{...Fi},savedAt:Date.now()};localStorage.setItem(If,JSON.stringify(t))}catch(t){console.warn("[save] Could not persist Open Poker run:",t)}}function bc(){Vi(),window.parent!==window&&window.parent.postMessage({type:"open-poker-close"},"*")}function hM(){const t=V.hand.map(e=>e.id);Pn=Pn.filter(e=>t.includes(e));for(const e of t)Pn.includes(e)||Pn.push(e)}function dM(){return Pn.map(t=>Ht.get(t)).filter(Boolean)}function Tc(){yc.classList.toggle("is-active",Bi==="straight"),Sc.classList.toggle("is-active",Bi==="flush")}function Ff(){!Bi||V.hand.length<2||(Pn=(Bi==="straight"?Ym(V.hand):jm(V.hand)).map(t=>t.id))}function Ja(t){Ln||V.phase!=="play"||V.hand.length<2||(Bi=t,Ff(),Tc(),Vi(),Te.play("buttonClick"),hi(.28))}function hi(t=.4){Ff(),hM();const e={};for(const r of V.hand)e[r.id]=r;const n=Pn.map(r=>e[r]).filter(Boolean),i=Ul(n.length);n.forEach((r,s)=>{const a=uM(r);a.handIndex=s,a.setSelected(V.selected.has(r.id)),a.moveTo(i[s],t,s*.04)});for(const[r,s]of Ht)!e[r]&&!s.userData.keepAlive&&oo(r,s)}function Oh(t){return t.split(" ").map(e=>e.charAt(0)).join("").slice(0,3).toUpperCase()}var Qa=V.deckKey;function Ec(){Ri.classList.add("hidden")}function Fh(t,e,n){ZS.textContent=e==="joker"?`${t.rarity.toUpperCase()} JOKER`:t.type.toUpperCase(),JS.textContent=t.name,QS.textContent=t.description;const i=[`Sell $${t.sellValue}`];if((t.edition??"base")!=="base"&&i.push(t.edition??"base"),e==="joker"){const l=t;l.sticker==="eternal"&&i.push("Eternal · cannot sell"),l.sticker==="perishable"&&i.push(`Perishable · ${l.perishableRounds??0} rounds`),l.rental&&i.push("Rental · -$3/round"),l.counter!==void 0&&i.push(`Current ${l.counter}`),l.suit&&i.push(`Target ${l.suit}`)}eM.textContent=i.join(" · "),Ri.classList.remove("hidden");const r=n.getBoundingClientRect(),s=Ri.getBoundingClientRect(),a=Math.min(window.innerWidth-s.width-12,Math.max(12,r.left)),o=Math.min(window.innerHeight-s.height-12,r.bottom+10);Ri.style.left=`${a}px`,Ri.style.top=`${o}px`}function Bf(){Da.replaceChildren();const t=V.jokerCapacity();for(let n=0;n<t;n++){const i=document.createElement("div"),r=V.jokers[n];i.className=`joker-slot${r?" filled":""}`,i.dataset.jokerIndex=String(n),i.addEventListener("dragover",s=>{s.dataTransfer?.types.includes("application/x-open-poker-joker")&&(s.preventDefault(),i.classList.add("drag-target"))}),i.addEventListener("dragleave",()=>i.classList.remove("drag-target")),i.addEventListener("drop",s=>{s.preventDefault(),i.classList.remove("drag-target");const a=s.dataTransfer?.getData("application/x-open-poker-joker");a&&V.moveJoker(a,n)&&(Te.play("buttonClick"),ot())}),r&&(i.dataset.jokerId=r.id,i.textContent=Oh(r.name),i.title=`${r.name} - ${r.description} · Drag to reorder`,i.draggable=!0,i.addEventListener("click",s=>{s.stopPropagation(),Fh(r,"joker",i)}),i.addEventListener("dragstart",s=>{s.dataTransfer?.setData("application/x-open-poker-joker",r.id),s.dataTransfer&&(s.dataTransfer.effectAllowed="move"),i.classList.add("dragging")}),i.addEventListener("dragend",()=>{i.classList.remove("dragging"),Da.querySelectorAll(".drag-target").forEach(s=>s.classList.remove("drag-target"))})),Da.appendChild(i)}Ah.replaceChildren();const e=V.consumableCapacity();for(let n=0;n<e;n++){const i=document.createElement("div"),r=V.consumables[n];i.className=`consumable-slot${r?" filled":""}`,r&&(i.dataset.consumableId=r.id,i.textContent=Oh(r.name),i.title=`${r.name} - ${r.description}`,i.addEventListener("click",s=>{s.stopPropagation(),Fh(r,"consumable",i)})),Ah.appendChild(i)}}Bf();var Wl=["Small Blind","Big Blind","Boss Blind"],fM=[["SMALL","BLIND"],["BIG","BLIND"],["BOSS"]],pM=["small","big","boss"],mM=["$","$$","$$$$$"];function zf(t){return t.kind==="joker"?t.joker.name:t.kind==="consumable"?t.consumable.name:t.name}function Vf(t){return t.kind==="joker"?t.joker.description:t.kind==="consumable"?t.consumable.description:t.description}function gM(t){return t.kind==="playing-card"?"Deck Card":t.kind}function Bh(t,e,n){const i=document.createElement("div");i.className="shop-inventory-group";const r=document.createElement("div");r.className="shop-inventory-title",r.textContent=`${n==="joker"?"Jokers":"Consumables"} ${t.length}/${e}`,i.appendChild(r);const s=document.createElement("div");s.className="shop-inventory-list";for(let a=0;a<e;a++){const o=t[a],l=document.createElement("div");if(l.className=`shop-inventory-row${o?" filled":""}`,!o){l.textContent="Empty slot",s.appendChild(l);continue}const c=document.createElement("div");c.className="shop-inventory-copy";const u=document.createElement("strong");u.textContent=o.name;const d=document.createElement("span");if(d.textContent=o.description,c.append(u,d),l.appendChild(c),n==="consumable"){const f=document.createElement("button");f.className="shop-mini-btn use",f.textContent="Use",f.addEventListener("click",()=>{const _=V.beginUseConsumable(o.id);_!=="invalid"&&(Te.play(_==="targeting"?"buttonClick":"chaching"),ot())}),l.appendChild(f)}const h=document.createElement("button");h.className="shop-mini-btn",h.textContent=`Sell $${o.sellValue}`,h.addEventListener("click",()=>{(n==="joker"?V.sellJoker(o.id):V.sellConsumable(o.id))&&(Te.play("buttonClick"),ot())}),l.appendChild(h),s.appendChild(l)}return i.appendChild(s),i}function _M(t){const e=On.classList.contains("hidden");t?(On.classList.remove("hidden"),e&&(On.style.opacity="1",Ee.fromTo(On,{opacity:0},{opacity:1,duration:.25,ease:"power2.out"}),Ee.fromTo(ja,{y:24,scale:.96},{y:0,scale:1,duration:.38,ease:"back.out(1.4)"}),Te.play("chaching",{volume:.35}))):On.classList.add("hidden")}function vM(){const t=V.phase==="shop"&&!!V.shop&&!tr;if(_M(t),!t||!V.shop)return;BS.textContent=`$${V.money}`,zS.textContent=Wl[V.blindIndex],VS.textContent=`$${V.shop.rerollCost}`,Mc.disabled=V.money<V.shop.rerollCost;const e=V.lastCashout,n=ja.querySelector(".shop-kicker");n&&(n.textContent=e?`Cashout $${e.total} · Blind $${e.blindReward} · Hands $${e.handsBonus} · Interest $${e.interest}`:"Blind cleared"),Vl.replaceChildren(),V.shop.offers.forEach((r,s)=>{const a=document.createElement("article"),o=V.canBuyOffer(r.id);a.className=`shop-offer ${r.item.kind}${r.sold?" sold":""}`;const l=document.createElement("div");l.className="shop-offer-kind",l.textContent=gM(r.item),a.appendChild(l);const c=document.createElement("h3");c.textContent=zf(r.item),a.appendChild(c);const u=document.createElement("p");u.textContent=Vf(r.item),a.appendChild(u);const d=document.createElement("button");d.className="shop-buy-btn",d.dataset.testid=`shop-buy-${s}`,d.disabled=r.sold||!o,d.textContent=r.sold?"Sold":`Buy $${V.shopPriceForItem(r.item)}`,d.addEventListener("click",()=>{V.buyOffer(r.id)&&(Te.play("chaching"),Ee.fromTo(a,{scale:1},{scale:1.04,duration:.14,yoyo:!0,repeat:1,ease:"power2.out"}),ot())}),a.appendChild(d),Vl.appendChild(a)}),Ph.replaceChildren(),V.shop.boosters.forEach(r=>{const s=document.createElement("article");s.className=`booster-shop-card ${r.type}${r.sold?" sold":""}`;const a=document.createElement("span");a.className="booster-shop-kind",a.textContent=r.size==="normal"?r.type:`${r.size} · ${r.type}`;const o=document.createElement("strong");o.textContent=r.name;const l=document.createElement("span");l.textContent=r.description;const c=document.createElement("button");c.className="shop-buy-btn";const u=V.boosterPrice(r);c.disabled=r.sold||V.money<u,c.textContent=r.sold?"Opened":`Buy & Open $${u}`,c.addEventListener("click",()=>{V.openBooster(r.id)&&(Te.play("scorePop"),ot())}),s.append(a,o,l,c),Ph.appendChild(s)}),sl.replaceChildren();const i=V.shop.voucher;if(i){const r=document.createElement("article");r.className=`voucher-card${i.sold?" sold":""}`;const s=document.createElement("strong");s.textContent=i.name;const a=document.createElement("span");a.textContent=i.description;const o=document.createElement("button");o.className="shop-buy-btn",o.disabled=i.sold||V.money<i.price,o.textContent=i.sold?"Redeemed":`Redeem $${i.price}`,o.addEventListener("click",()=>{V.buyVoucher()&&(Te.play("chaching"),ot())}),r.append(s,a,o),sl.appendChild(r)}else{const r=document.createElement("div");r.className="voucher-empty",r.textContent="All Vouchers redeemed",sl.appendChild(r)}FS.replaceChildren(Bh(V.jokers,V.jokerCapacity(),"joker"),Bh(V.consumables,V.consumableCapacity(),"consumable"))}function yM(t,e){t.replaceChildren(),e.forEach((n,i)=>{i>0&&t.appendChild(document.createElement("br")),t.append(document.createTextNode(n))})}function SM(t){const e=document.createElement("span");e.className="counter-total",e.textContent="/8",_S.replaceChildren(document.createTextNode(String(t)),e)}function Gf(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":String(t.rank)}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}function MM(t){return zf(t)}function xM(t){return Vf(t)}function bM(){const t=V.phase==="booster"&&!!V.booster;GS.classList.toggle("hidden",!t),!(!t||!V.booster)&&(HS.textContent=V.booster.name,WS.textContent=V.booster.type.toUpperCase(),XS.textContent=`Choose ${V.booster.picksLeft}`,Lh.replaceChildren(),V.booster.choices.forEach(e=>{const n=document.createElement("article");n.className=`booster-choice ${e.item.kind}${e.taken?" taken":""}`;const i=document.createElement("span");i.className="booster-choice-type",i.textContent=e.item.kind==="consumable"?e.item.consumable.type:e.item.kind==="playing-card"?"playing card":"joker";const r=document.createElement("strong");r.textContent=MM(e.item);const s=document.createElement("span");s.textContent=xM(e.item),e.item.kind==="playing-card"&&(r.textContent=Gf(e.item.card),s.textContent=`${e.item.description} · ${e.item.card.enhancement} · ${e.item.card.seal} · ${e.item.card.edition}`);const a=document.createElement("button");a.className="shop-buy-btn",a.disabled=e.taken,a.textContent=e.taken?"Taken":e.item.kind==="consumable"?"Use":"Take",a.addEventListener("click",()=>{const o=V.chooseBooster(e.id);o!=="invalid"&&(Te.play(o==="targeting"?"buttonClick":"chaching"),ot())}),n.append(i,r,s,a),Lh.appendChild(n)}))}function TM(){const t=V.targetMode;if(qS.classList.toggle("hidden",!t),!t)return;YS.textContent=t.consumable.name,jS.textContent=`${t.instruction} (${t.min}–${t.max})`,Dh.replaceChildren();const e=new Set(t.selectedIds);V.getTargetCandidateCards().forEach(n=>{const i=document.createElement("button");i.type="button",i.className=`target-card${e.has(n.id)?" selected":""}`;const r=document.createElement("strong");r.textContent=Gf(n);const s=document.createElement("span"),a=[n.enhancement,n.seal,n.edition].filter(o=>o!=="none"&&o!=="base");s.textContent=a.length>0?a.join(" · "):"Base card",i.append(r,s),i.addEventListener("click",()=>{V.toggleTargetCard(n.id),ot()}),Dh.appendChild(i)}),Hl.disabled=t.selectedIds.length<t.min||t.selectedIds.length>t.max,Hl.textContent=`Use (${t.selectedIds.length}/${t.max})`}function wc(){const t=V.phase==="setup";nM.classList.toggle("hidden",!t),t&&(Ih.replaceChildren(),Object.keys(su).forEach(e=>{const n=su[e],i=document.createElement("button");i.type="button",i.className=`setup-deck-card${Qa===e?" selected":""}`;const r=document.createElement("strong");r.textContent=n.name;const s=document.createElement("span");s.textContent=n.description,i.append(r,s),i.addEventListener("click",()=>{Qa=e,wc(),Te.play("buttonClick")}),Ih.appendChild(i)}),er.options.length===0&&(Object.keys(Vt).forEach(e=>{const n=document.createElement("option");n.value=e,n.textContent=Vt[e].name,er.appendChild(n)}),er.value=V.stakeKey),iM.textContent=Vt[er.value]?.description??"")}function EM(t){const e=V.blindIndex;V.blindIndex=t;const n=V.targetForPreview();return V.blindIndex=e,n}function wM(){const t=V.phase==="blind-select";if(sM.classList.toggle("hidden",!t),!t)return;const e=document.getElementById("blind-select-ante");e&&(e.textContent=String(V.ante)),Nh.replaceChildren(),[0,1,2].forEach(n=>{const i=n===V.blindIndex,r=n<V.blindIndex,s=document.createElement("article");s.className=`blind-select-card${n===2?" boss":""}${i?" current":""}${r?" done":""}`;const a=document.createElement("span");a.className="blind-select-kind",a.textContent=n===0?"SMALL":n===1?"BIG":"BOSS";const o=document.createElement("strong");o.textContent=n===0?"Small Blind":n===1?"Big Blind":Us[V.bossBlindKey].name;const l=document.createElement("div");l.className="blind-select-target",l.textContent=`Score ${EM(n).toLocaleString()}`;const c=document.createElement("div");c.className="blind-select-reward",c.textContent=`Reward $${n===0&&Vt[V.stakeKey].order>=Vt.red.order?0:3+n}`;const u=document.createElement("p");if(n<2){const h=xl[V.anteTags[n]];u.textContent=`Skip → ${h.name}: ${h.description}`}else u.textContent=Us[V.bossBlindKey].description;const d=document.createElement("div");if(d.className="blind-select-actions",i){const h=document.createElement("button");if(h.type="button",h.className="btn btn-play",h.textContent="Play",h.addEventListener("click",()=>{V.playSelectedBlind()&&(Te.play("buttonClick"),ot(),hi(.55))}),d.appendChild(h),n<2){const f=xl[V.anteTags[n]],_=document.createElement("button");_.type="button",_.className="btn btn-ghost",_.textContent=`Skip · ${f.name}`,_.addEventListener("click",()=>{V.skipCurrentBlind()&&(Te.play("chaching"),ot())}),d.appendChild(_)}}else{const h=document.createElement("span");h.className="blind-select-status",h.textContent=r?"Done / Skipped":"Locked",d.appendChild(h)}s.append(a,o,l,c,u,d),Nh.appendChild(s)})}function ot(){Bf();const t=V.blindIndex;pS.textContent=t===2?Us[V.bossBlindKey].name:Wl[t],wh.className=`blind-badge ${pM[t]}`;const e=wh.querySelector("span");e&&yM(e,fM[t]),mS.textContent=V.target.toLocaleString(),gS.textContent=mM[t],Ol.textContent=(Hr?Wr??V.roundScore:V.roundScore).toLocaleString(),SM(V.ante);const n=(V.ante-1)*3+V.blindIndex+1;vS.textContent=String(n),yS.textContent=`$${V.money}`,SS.textContent=`${V.handsLeft}`,MS.textContent=`${V.discardsLeft}`,xS.textContent=String(V.config.seed),bS.textContent=`${V.hand.length}/${V.config.handSize}`,TS.textContent=`${V.deck.length}/${V.ownedDeck.length}`,wt.setDeckCount(V.deck.length),ES.textContent=`${V.jokers.length}/${V.jokerCapacity()}`,wS.textContent=`${V.consumables.length}/${V.consumableCapacity()}`;const i=V.selectedCards();if(i.length===0)rl.textContent="-",Bs.textContent="0",zs.textContent="0";else{const a=Sl(i),o=V.handLevels[a.type];rl.textContent=`${a.type} (lvl ${o.level})`,Bs.textContent=`${o.chips}`,zs.textContent=`${o.mult}`}AS.disabled=Ln||!V.canPlay(),CS.disabled=Ln||!V.canDiscard();const r=Ln||V.phase!=="play"||V.hand.length<2;if(yc.disabled=r,Sc.disabled=r,Tc(),(V.phase==="game-over"||V.phase==="win")&&!bi){const a=xs.classList.contains("hidden");xs.classList.remove("hidden"),kS.textContent=V.phase==="win"?"You Win!":"Game Over",OS.textContent=V.phase==="win"?`Ante ${V.ante-1} cleared on seed ${V.config.seed}`:`Could not beat ${Wl[t]} - score ${V.roundScore.toLocaleString()} / ${V.target.toLocaleString()}`,a&&(Te.play(V.phase==="win"?"win":"lose"),Ee.fromTo(xs.querySelector(".overlay-card"),{scale:.7,opacity:0},{scale:1,opacity:1,duration:.5,ease:"back.out(1.7)"}))}else xs.classList.add("hidden");vM(),bM(),TM(),wc(),wM();const s=V.playRestrictionMessage();s&&V.selected.size>0&&(rl.textContent=s)}function AM(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?e.toLocaleString():e.toLocaleString(void 0,{maximumFractionDigits:2})}function Ia(t,e,n,i,r){const s={v:e};let a=e;const o=Math.max(1,Math.floor((n-e)/18));Ee.to(s,{v:n,duration:i,ease:"power2.out",onUpdate:()=>{const l=s.v;t.textContent=AM(l),r&&l-a>=o&&(a=l,Te.play(r,{volume:.12,detune:(Math.random()-.5)*250}))}})}function CM(t){Ya.classList.remove("hidden"),Rh.textContent=`${t.hand.type}`,Bs.textContent=Math.round(t.baseChips).toLocaleString(),zs.textContent=Math.round(t.baseMult).toLocaleString(),zl.textContent="0",Ee.fromTo(Ya,{scale:.7,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(2)"}),Ee.fromTo(Rh,{scale:.7},{scale:1,duration:.3,ease:"back.out(2)"}),Te.play("scorePop")}function RM(t){Ia(zl,0,t.total,.8),Ee.fromTo(zl,{scale:.6},{scale:1.2,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}),Te.play("chaching");const e=Math.max(.08,Math.min(.6,t.total/Math.max(1,V.target)*.5));wt.shake(e,.45),Ee.delayedCall(1.5,()=>{Ee.to(Ya,{opacity:0,duration:.4,onComplete:()=>Ya.classList.add("hidden")})})}function PM(t,e){const n=Hf(e);if(n.length===0)return;const i=wt.createVector3();t.getWorldPosition(i),i.y+=1.1;const r=i.project(wt.camera),s=kl.getBoundingClientRect(),a=(r.x+1)/2*s.width,o=(1-r.y)/2*s.height;n.forEach((l,c)=>{const u=kf(kl);u.className=`card-score-float ${l.cls}`,u.textContent=l.text,u.style.left=`${a}px`,u.style.top=`${o}px`,u.style.opacity="0";const d=c*.08,h=28+c*6;Ee.fromTo(u,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:d,ease:"back.out(2.2)"}),Ee.to(u,{y:-h,scale:1,duration:.9,delay:d+.22,ease:"sine.out"}),Ee.to(u,{opacity:0,duration:.45,delay:d+.7,ease:"power1.in",onComplete:()=>Of(u)})})}function LM(t,e){if(e.length===0)return;const n=t.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height*.25;e.forEach((s,a)=>{const o=kf(document.body);o.className=`card-score-float ${s.cls}`,o.textContent=s.text,o.style.position="fixed",o.style.left=`${i}px`,o.style.top=`${r}px`,o.style.opacity="0",o.style.zIndex="60";const l=a*.08,c=32+a*6;Ee.fromTo(o,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:l,ease:"back.out(2.2)"}),Ee.to(o,{y:-c,scale:1,duration:.9,delay:l+.22,ease:"sine.out"}),Ee.to(o,{opacity:0,duration:.45,delay:l+.7,ease:"power1.in",onComplete:()=>Of(o)})})}function Hf(t){const e=[];if(t.chipsDelta&&e.push({text:`+${Math.round(t.chipsDelta)}`,cls:"is-chips"}),t.multDelta&&e.push({text:`+${Math.round(t.multDelta)} Mult`,cls:"is-mult-add"}),t.multMul&&t.multMul!==1){const n=Number.isInteger(t.multMul)?t.multMul.toString():t.multMul.toFixed(1);e.push({text:`×${n} Mult`,cls:"is-mult-mul"})}return t.moneyDelta&&e.push({text:`+$${Math.round(t.moneyDelta)}`,cls:"is-money"}),e}function li(t,e){if(t==="select_card")return Ln||!e?.cardId?!1:V.toggleSelect(e.cardId);if(t==="play_hand"){if(Ln||!V.canPlay())return;Te.play("buttonClick"),DM();return}if(t==="discard"){if(Ln||!V.canDiscard())return;Te.play("buttonClick"),IM();return}if(t==="continue_shop"){NM();return}if(t==="restart_run"){$f();return}if(t==="toggle_mute"){Te.toggleMute(),Te.isMuted()||Te.play("buttonClick");return}}async function DM(){if(!V.canPlay())return;const t=new Map(V.hand.map(p=>[p.id,p])),e=Pn.filter(p=>V.selected.has(p)).map(p=>t.get(p)).filter(p=>!!p);if(e.length===0)return;Ln=!0,Hr=!0,Wr=V.roundScore;const n=By(e.length);Te.play("whoosh");const i=wt.createVector3();e.forEach((p,g)=>{const m=Ht.get(p.id);m&&(m.userData.keepAlive=!0,m.getWorldPosition(i),wt.handGroup.remove(m),wt.playGroup.add(m),wt.playGroup.worldToLocal(i),m.position.copy(i),m.setSelected(!1),m.moveTo(n[g],.55,g*.07))}),await new Promise(p=>setTimeout(p,650)),bi=!0,tr=!0;const r=V.playSelected(e.map(p=>p.id));if(!r){bi=!1,tr=!1,Hr=!1,Wr=null,Ln=!1;return}Fi[r.hand.type]=V.handPlayCounts[r.hand.type]??(Fi[r.hand.type]??0)+1,Vi();const s=V.phase==="game-over"||V.phase==="win",a=V.phase==="shop";s?xs.classList.add("hidden"):a?(On.classList.add("hidden"),bi=!1):(bi=!1,tr=!1),CM(r);const o=new Set(r.hand.scoringCards.map(p=>p.id));for(const p of e){if(o.has(p.id))continue;const g=Ht.get(p.id);if(!g)continue;const m=g.faceMesh.material;m.transparent=!0,Ee.to(m,{opacity:.5,duration:.2})}const l=r.steps.filter(p=>p.stage!=="base"&&p.stage!=="destruction"&&p.stage!=="end_round"),c=.19,u=.15;l.forEach((p,g)=>{const m=u+g*c;Ee.delayedCall(m,()=>{if(p.cardId){const y=Ht.get(p.cardId);y&&(y.pulse(p.retrigger?1.28:1.18,.34),y.flash(p.retrigger?9300223:16765514,.42),PM(y,p),Te.play(p.retrigger?"multTick":"chipTick",{volume:.22,pitch:p.retrigger?1.18:1,pan:Uf(y.position.x)}))}if(p.jokerId){const y=Da.querySelector(`[data-joker-id="${p.jokerId}"]`);y&&(Ee.fromTo(y,{scale:1,y:0},{scale:1.18,y:-8,duration:.16,yoyo:!0,repeat:1,ease:"power2.out"}),LM(y,Hf(p))),Te.play("multTick",{volume:.24,pitch:1.06})}p.chipsAfter!==void 0&&p.chipsBefore!==void 0&&p.chipsAfter!==p.chipsBefore&&(Ia(Bs,p.chipsBefore,p.chipsAfter,.18,"chipTick"),Ee.fromTo(Bs,{scale:1},{scale:1.14,duration:.12,yoyo:!0,repeat:1})),p.multAfter!==void 0&&p.multBefore!==void 0&&p.multAfter!==p.multBefore&&(Ia(zs,p.multBefore,p.multAfter,.18,"multTick"),Ee.fromTo(zs,{scale:1},{scale:1.18,duration:.12,yoyo:!0,repeat:1}))})});const d=r.steps.filter(p=>p.stage==="destruction"),h=u+l.length*c;d.forEach((p,g)=>{Ee.delayedCall(h+g*.22,()=>{if(!p.cardId)return;const m=Ht.get(p.cardId);if(!m)return;m.flash(16727887,.65),m.pulse(1.3,.4);const y=wt.createVector3();m.getWorldPosition(y),wt.emitBurst(y,{count:26,color:wt.createColor("#8de8ff"),speed:3.2,spread:1.2,life:1.1,size:18}),Te.play("scorePop",{volume:.38,pitch:1.25})})});const f=h+d.length*.22+.35;Ee.delayedCall(f,()=>RM(r));const _=V.roundScore-r.total;Ee.delayedCall(f+.05,()=>{Ia(Ol,_,V.roundScore,1,"chipTick"),Ee.fromTo(Ol,{scale:1},{scale:1.25,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})}),Ee.delayedCall(f+1.2,()=>{Hr=!1,Wr=null;for(const p of e){const g=Ht.get(p.id);g&&(Ee.to(g.position,{y:-6,duration:.5,ease:"power2.in"}),Ee.to(g.rotation,{z:(Math.random()-.5)*1.5,duration:.5}),Ee.delayedCall(.55,()=>{oo(p.id,g)}))}Ln=!1,hi(.5),ot(),s?(bi=!1,ot()):a&&(tr=!1,ot())})}async function IM(){if(!V.canDiscard())return;Ln=!0;const t=new Map(V.hand.map(i=>[i.id,i])),e=Pn.filter(i=>V.selected.has(i)).map(i=>t.get(i)).filter(i=>!!i),n=e.reduce((i,r)=>i+(Ht.get(r.id)?.position.x??0),0)/Math.max(1,e.length);Te.play("sweep",{pan:Uf(n)});for(const i of e){const r=Ht.get(i.id);r&&(r.userData.keepAlive=!0,Ee.to(r.position,{y:-5,x:r.position.x+(Math.random()-.5)*1.5,duration:.45,ease:"power2.in"}),Ee.to(r.rotation,{z:(Math.random()-.5)*1.2,duration:.45}),Ee.delayedCall(.5,()=>{oo(i.id,r)}))}V.discardSelected(e.map(i=>i.id)),Ee.delayedCall(.55,()=>{Ln=!1,hi(.45)})}function NM(){return V.phase!=="shop"?!1:(Te.play("buttonClick"),Gl.disabled=!0,Mc.disabled=!0,Ee.to(ja,{y:-18,scale:.97,duration:.2,ease:"power2.in"}),Ee.to(On,{opacity:0,duration:.28,ease:"power2.inOut",onComplete:()=>{On.classList.add("hidden"),On.style.opacity="",ja.style.transform="",V.continueFromShop(),hi(.65),ot(),Gl.disabled=!1}}),!0)}var UM=["Flush Five","Flush House","Five of a Kind","Straight Flush","Four of a Kind","Full House","Flush","Straight","Three of a Kind","Two Pair","Pair","High Card"];function Wf(){Ch.replaceChildren();for(const t of UM){const e=V.handLevels[t],n=document.createElement("div");n.className="run-info-row";const i=document.createElement("span");i.className="run-info-level",i.textContent=`lvl.${e.level}`;const r=document.createElement("strong");r.className="run-info-name",r.textContent=t;const s=document.createElement("span");s.className="run-info-score";const a=document.createElement("span");a.className="run-info-chips",a.textContent=e.chips.toLocaleString();const o=document.createElement("span");o.className="run-info-x",o.textContent="×";const l=document.createElement("span");l.className="run-info-mult",l.textContent=e.mult.toLocaleString(),s.append(a,o,l);const c=document.createElement("span");c.className="run-info-count",c.textContent=`# ${Fi[t]??0}`,n.append(i,r,s,c),Ch.appendChild(n)}}function Ac(){Lf.textContent=`Sound Effects: ${Te.isMuted()?"Off":"On"}`,Df.textContent=`Music: ${Te.isMusicMuted()?"Off":"On"}`}function Xf(t){ts=t,t==="run-info"?(Wf(),Fl.classList.remove("hidden"),Bl.classList.add("hidden")):(Ac(),Bl.classList.remove("hidden"),Fl.classList.add("hidden")),Te.play("buttonClick")}function lo(){ts&&(Fl.classList.add("hidden"),Bl.classList.add("hidden"),ts=null,Te.play("buttonClick"))}function $f(){Te.play("buttonClick"),Hr=!1,Wr=null,tr=!1,bi=!1,On.classList.add("hidden"),On.style.opacity="";for(const[,t]of[...Ht])oo(t.card.id,t);Ht.clear(),Pn=[],Bi=null,Nf(),lo(),V.reset(),Qa=V.deckKey,er.value=V.stakeKey,hi(.6),ot()}for(const[t,e]of Object.entries(oS)){const n=dr(t);n&&n.addEventListener("click",()=>{li(e)})}yc.addEventListener("click",()=>Ja("straight"));Sc.addEventListener("click",()=>Ja("flush"));RS.addEventListener("click",()=>Xf("run-info"));PS.addEventListener("click",()=>Xf("options"));LS.addEventListener("click",lo);DS.addEventListener("click",lo);US.addEventListener("click",bc);NS.addEventListener("click",bc);Lf.addEventListener("click",()=>{Te.toggleMute(),Te.isMuted()||Te.play("buttonClick"),Ac()});Df.addEventListener("click",()=>{Te.toggleMusicMute(),Ac()});IS.addEventListener("click",()=>{$f()});tM.addEventListener("click",t=>{t.stopPropagation(),Ec()});document.addEventListener("click",t=>{Ri.classList.contains("hidden")||t.target instanceof Node&&Ri.contains(t.target)||Ec()});er.addEventListener("change",wc);rM.addEventListener("click",()=>{V.configureRun(Qa,er.value),Nf(),Te.play("buttonClick"),ot()});$S.addEventListener("click",()=>{V.skipBooster()&&(Te.play("buttonClick"),ot())});KS.addEventListener("click",()=>{V.cancelTargetMode()&&(Te.play("buttonClick"),ot())});Hl.addEventListener("click",()=>{V.confirmTargetMode()&&(Te.play("chaching"),ot())});Mc.addEventListener("click",()=>{V.rerollShop()&&(Te.play("sweep"),Ee.fromTo(Vl,{opacity:.55,y:8},{opacity:1,y:0,duration:.22,ease:"power2.out"}),ot())});Gl.addEventListener("click",()=>{li("continue_shop")});var xa=dr("btn-mute"),qf=null;if(xa){const t=e=>{xa.textContent=e?"🔇":"🔊",xa.setAttribute("aria-label",e?"Unmute SFX":"Mute SFX"),xa.title=e?"Unmute SFX":"Mute SFX"};t(Te.isMuted()),qf=Te.onMutedChange(t)}var _s=dr("btn-music-mute"),Yf=null;if(_s){const t=e=>{_s.textContent=e?"🔇":"🎵",_s.setAttribute("aria-label",e?"Unmute Music":"Mute Music"),_s.title=e?"Unmute Music":"Mute Music"};t(Te.isMusicMuted()),_s.addEventListener("click",()=>Te.toggleMusicMute()),Yf=Te.onMusicMutedChange(t)}var jf=t=>{if(t.code==="Escape"){t.preventDefault(),t.stopPropagation(),Ri.classList.contains("hidden")?V.targetMode?(V.cancelTargetMode(),ot()):V.phase==="booster"?(V.skipBooster(),ot()):ts?lo():bc():Ec();return}if(ts)return;if(!t.repeat&&(t.code==="ControlLeft"||t.code==="ControlRight")){t.preventDefault(),li("play_hand");return}if(!t.repeat&&(t.code==="ShiftLeft"||t.code==="ShiftRight")){t.preventDefault(),li("discard");return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey){if(t.code==="KeyS"){t.preventDefault(),Ja("straight");return}if(t.code==="KeyF"){t.preventDefault(),Ja("flush");return}}const e=cS(t);e&&(t.preventDefault(),li(e))};window.addEventListener("keydown",jf);window.addEventListener("resize",xc);window.addEventListener("pagehide",Vi);var kM=sS({renderer:wt.renderer,camera:wt.camera,handGroup:wt.handGroup,getHandObjects:dM,onToggleSelect:t=>!!li("select_card",{cardId:t}),onReorder:t=>{Pn=t,Bi=null,Tc(),Vi()}}),OM=V.subscribe(()=>{Vi(),ot(),ts==="run-info"&&Wf()});window.__OPEN_POKER_TEST__={snapshot:()=>V.toSnapshot(),loadSnapshot:t=>{Hr=!1,Wr=null,tr=!1,bi=!1,V.reset(t),Pn=t.hand.map(e=>e.id),hi(0),ot()},selectFirst:(t=1)=>{const e=[...V.selected];for(const n of e)V.toggleSelect(n);for(const n of V.hand.slice(0,Math.max(0,Math.min(5,t))))V.selected.has(n.id)||V.toggleSelect(n.id)},play:()=>{li("play_hand")},discard:()=>{li("discard")},buyOffer:(t=0)=>{const e=V.shop?.offers[t];return e?V.buyOffer(e.id):!1},rerollShop:()=>V.rerollShop(),continueShop:()=>{const t=V.continueFromShop();return t&&(hi(0),ot()),t},sellJoker:(t=0)=>{const e=V.jokers[t];return e?V.sellJoker(e.id):!1},sellConsumable:(t=0)=>{const e=V.consumables[t];return e?V.sellConsumable(e.id):!1},useConsumable:(t=0)=>{const e=V.consumables[t];return e?V.useConsumable(e.id):!1},restart:()=>{li("restart_run")},dispose:()=>{kM(),OM(),qf?.(),Yf?.(),window.removeEventListener("keydown",jf),window.removeEventListener("resize",xc),window.removeEventListener("pagehide",Vi),Ee.globalTimeline.clear();for(const[,t]of Ht)kh(t);for(Ht.clear();Ka.length>0;){const t=Ka.pop();t&&kh(t)}for(;Za.length>0;)Za.pop()?.remove();wt.dispose(),Te.dispose()}};hi(.6);ot();Vi();
